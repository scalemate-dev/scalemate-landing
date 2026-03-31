# Facebook Attribution & Server-Side Tracking (CAPI)

Guide for cross-domain and cross-device Facebook attribution between scalemate.co (landing) and app.scalemate.co (platform).

---

## Architecture

```
Facebook Ad → scalemate.co?fbclid=ABC → "Try for free" → app.scalemate.co?fbclid=ABC
                                                              ↓
                                                         Registration
                                                              ↓
                                                    dataLayer.push(CompleteRegistration)
                                                         ↓              ↓
                                                   FB Pixel (browser)   GA4 Event tag
                                                         ↓              ↓
                                                   Facebook             server.scalemate.co (sGTM)
                                                                        ↓
                                                                   Facebook CAPI
                                                                        ↓
                                                              Facebook deduplicates
                                                              by event_id (browser + server)
```

### Key Concepts

- **fbclid** — URL parameter from Facebook ad click
- **_fbc** — cookie created by FB Pixel from fbclid (format: `fb.1.{timestamp}.{fbclid}`)
- **_fbp** — cookie created by FB Pixel on first visit (browser ID)
- **event_id** — UUID for deduplication between browser pixel and server CAPI
- **sGTM** — Server-side GTM container that forwards events to Facebook CAPI

---

## Infrastructure

| Component | Value |
|-----------|-------|
| Browser GTM | `GTM-P5QQVGJ` |
| sGTM Container | `GTM-N3K937D2` |
| sGTM Endpoint | `https://server.scalemate.co` |
| Stape Default URL | `https://tmkafpbb.usu.stape.io` |
| Stape Plan | Free (10K req/month) |
| Facebook Pixel ID | `709151054041115` |
| GA4 Measurement ID | `G-9NMWZWCMFL` |
| Custom Domain DNS | CNAME `server.scalemate.co` → `usu.stape.io` |

---

## Event Flow

### 1. Landing Page (scalemate.co)

**Parameter forwarding:** `helpers/forwardParams.js` — `appendTrackingParams()` appends `fbclid`, `utm_*`, `gclid`, `ttclid` from current URL to target URL.

Applied in:
- `components/elements/Button/Button.jsx` — auto-applies for `app.scalemate.co` links
- `lib/api/guestSession.js` → `getAppRedirectUrl()`

**Funnel events:** `helpers/trackGTM.js` — `trackAuditStarted()` pushes `funnel_1_audit_started` with `event_id` to dataLayer.

### 2. Registration (app.scalemate.co)

**File:** `src/services/use-auth.tsx`

On successful signup (email or Google):
1. Reads `_fbp`/`_fbc` cookies via `getFbCookies()`
2. Sends `fbp`/`fbc` to backend via signup/googleSignIn mutation
3. Pushes `CompleteRegistration` to dataLayer with `event_id` and `user_data`

```typescript
window.dataLayer?.push({
  event: 'CompleteRegistration',
  event_id: crypto.randomUUID(),
  user_data: {
    email_address: user.email,
    external_id: user.id,
    fbp,
    fbc,
  },
})
```

### 3. Onboarding (app.scalemate.co)

**File:** `src/pages/onboarding/onboarding.tsx`

On onboarding completion:
1. Reads cookies with fallback to `profile.currentUser` (for cross-device)
2. Pushes `OnboardingCompleted` to dataLayer

```typescript
const cookieFb = getFbCookies()
const fbp = cookieFb.fbp || profile?.currentUser?.fbp
const fbc = cookieFb.fbc || profile?.currentUser?.fbc
```

### 4. Cross-Device Attribution

**Problem:** User registers on phone, completes onboarding on desktop. Desktop has no `_fbp`/`_fbc` cookies.

**Solution:** Backend stores `fbp`/`fbc` on user record at registration. Frontend reads them from `profile.currentUser` when cookies are absent.

**Backend files:**
- `db/migrate/*_add_fbp_fbc_to_users.rb` — `fbp`, `fbc` string columns
- `app/graphql/mutations/auth/sign_up.rb` — accepts `fbp`, `fbc` arguments
- `app/graphql/mutations/auth/google_sign_in.rb` — accepts `fbp`, `fbc` arguments
- `app/models/concerns/google_authenticable.rb` — passes `fbp`, `fbc` to CreateUser
- `app/interactors/users/create_user.rb` — saves `fbp`, `fbc` on user
- `app/graphql/types/user_type.rb` — exposes `fbp`, `fbc` fields

**Frontend files:**
- `src/utils/facebookAttribution.ts` — `getFbCookies()` utility
- `src/services/apollo/queries/profile/index.ts` — queries `fbp`, `fbc` from backend
- `src/services/apollo/mutations/auth/index.ts` — sends `fbp`, `fbc` in mutations

---

## GTM Configuration

### Browser GTM (GTM-P5QQVGJ)

**DataLayer Variables:**
- `dlv - event_id` → `event_id`
- `dlv - user_data.email_address` → `user_data.email_address`
- `dlv - user_data.external_id` → `user_data.external_id`
- `dlv - user_data.fbp` → `user_data.fbp`
- `dlv - user_data.fbc` → `user_data.fbc`

**Triggers:**
- `CE - Complete Registration` → Custom Event: `CompleteRegistration`
- `CE - Onboarding Completed (StartTrial)` → Custom Event: `OnboardingCompleted`
- `Funnel_1_Quiz_Click_AuditStarted` → Custom Event: `funnel_1_audit_started`

**Tags:**
- `Facebook - Complete Registration` — FB Pixel, Event ID: `{{dlv - event_id}}`
- `Facebook - StartTrial` — FB Pixel, Event ID: `{{dlv - event_id}}`
- `Facebook - Funnel 1 - Quiz - AuditStarted` — FB Pixel, Event ID: `{{dlv - event_id}}`
- `GA4 - FB Attribution Events` — GA4 Event, forwards events + user_data to sGTM. Triggers: all three above.
- `Google Analytics GA4 Configuration` — Google Tag with `server_container_url: https://server.scalemate.co` (via `sGTM Config` variable)

### Server-Side GTM (GTM-N3K937D2)

**Client:** GA4 (default)

**Variables (Event Data type):**
- `ED - event_id` → `event_id`
- `ED - user_data.email_address` → `user_data.email_address`
- `ED - user_data.external_id` → `user_data.external_id`
- `ED - user_data.fbp` → `user_data.fbp`
- `ED - user_data.fbc` → `user_data.fbc`
- `CAPI Token` — Constant (Facebook CAPI access token)
- `Facebook Pixel ID` — Constant (`709151054041115`)
- `LT - Event Name to FB` — Lookup Table:
  - `OnboardingCompleted` → `StartTrial`
  - `funnel_1_audit_started` → `Funne_Quiz_AuditStarted`
  - Default: `{{Event Name}}` (pass-through)

**Trigger:**
- `FB Events` — Custom Event, regex: `CompleteRegistration|OnboardingCompleted|funnel_1_audit_started`

**Tag: Facebook CAPI**
- Template: Facebook Conversions API (stape-io)
- Event Name Setup: Override → Custom → `{{LT - Event Name to FB}}`
- Server Event Data Override: Event ID → `{{ED - event_id}}`
- User Data: Email, External ID, Browser ID (fbp), Click ID (fbc)
- Enable Event Enhancement: checked
- Generate _fbp cookie if not exist: checked

---

## Event Name Mapping

| dataLayer event | FB Pixel event name | CAPI event name (via Lookup Table) |
|----------------|--------------------|------------------------------------|
| `CompleteRegistration` | `CompleteRegistration` | `CompleteRegistration` |
| `OnboardingCompleted` | `StartTrial` | `StartTrial` |
| `funnel_1_audit_started` | `Funne_Quiz_AuditStarted` | `Funne_Quiz_AuditStarted` |

Note: dataLayer and FB Pixel use different event names for onboarding. The Lookup Table in sGTM maps `OnboardingCompleted` → `StartTrial` so that deduplication works (browser pixel sends `StartTrial`, CAPI must send the same).

---

## How to Add a New Tracked Event

### If the event is on the landing (scalemate.co):

1. **Code:** Push event to dataLayer with `event_id`:
   ```javascript
   window.dataLayer.push({
     event: "your_event_name",
     event_id: crypto.randomUUID(),
   })
   ```
2. **Browser GTM:** Create trigger (Custom Event) + add it to `GA4 - FB Attribution Events` tag
3. **Browser GTM:** Create/update FB Pixel tag with Event ID = `{{dlv - event_id}}`
4. **sGTM:** Add event name to `FB Events` trigger regex
5. **sGTM:** If FB event name differs from dataLayer name, add mapping to `LT - Event Name to FB`
6. Publish both GTM containers

### If the event is on the app (app.scalemate.co):

Same as above, plus:
- Include `user_data` (email, external_id, fbp, fbc) in the dataLayer push
- For cross-device: use `profile.currentUser.fbp/fbc` as fallback

---

## How to Test

### GTM Preview (browser-side)
1. Open browser GTM (GTM-P5QQVGJ) → Preview
2. Navigate to the page and trigger the event
3. Check that FB Pixel tag and GA4 - FB Attribution Events tag both fired
4. Check Variables tab — `dlv - event_id` should have a UUID value

### sGTM Preview (server-side)
1. Open sGTM (GTM-N3K937D2) → Admin → Add Server Container URL (`https://server.scalemate.co`) → Preview
2. Check that the event appears in the sidebar
3. Check Variables tab — Event Data variables should have values (event_id, email, etc.)
4. Check Tags tab — Facebook CAPI tag should show "Fired"

### Facebook Test Events
1. Go to Events Manager → Pixel → Test Events
2. Copy the test_event_code
3. In sGTM → Facebook CAPI tag → set Test ID to the code → Publish
4. Trigger the event flow
5. Check Test Events — should see both Browser and Server events
6. Look for **Deduplicated** status (same event_id from both sources)
7. **Remove Test ID before production!**

### Cross-Device Test
1. Register with `?fbclid=test123` in one browser profile
2. Delete `_fbp` and `_fbc` cookies (DevTools → Application → Cookies)
3. Log in via magic link in the same browser (simulates different device)
4. Complete onboarding
5. Check sGTM Preview — OnboardingCompleted should have fbp/fbc values (from backend, not cookies)
6. Check Facebook Test Events — Start trial Server event should have Click ID and Browser ID

Note: Incognito and guest Chrome profiles don't work with GTM Preview (no Tag Assistant cookies).

---

## Known Issues

- **Duplicate empty request in sGTM:** GA4 tag fires twice for some events — one with data, one empty. The empty one has undefined Event Data variables. Does not affect attribution (Facebook ignores events without event_id for deduplication). Root cause: likely another GA4 Event tag (e.g., `GA4 - Custom Events (non ecommerce)`) also matches the trigger.
- **Event Match Quality ~50% for fbp/fbc:** Because the duplicate empty request dilutes the stats. Will improve once the duplicate is fixed.

---

## Remaining TODO

- [ ] Fix duplicate GA4 request (investigate which tag causes the empty fire)
- [ ] `DemoForm.jsx` — plain `<a>` tag doesn't use Button, needs `appendTrackingParams`
- [ ] `SubmitForm.jsx` — `window.location.href` redirect needs `appendTrackingParams`
