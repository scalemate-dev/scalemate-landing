import { useState } from "react"
import { IconChevronDown, IconPlus, IconX } from "@tabler/icons-react"
import cn from "classnames"
import styles from "./OverridesForm.module.scss"

const CTA_OPTIONS = [
  { value: "SHOP_NOW", label: "Shop Now" },
  { value: "BUY_NOW", label: "Buy Now" },
  { value: "ADD_TO_CART", label: "Add to Cart" },
  { value: "LEARN_MORE", label: "Learn More" },
  { value: "SIGN_UP", label: "Sign Up" },
  { value: "SUBSCRIBE", label: "Subscribe" },
  { value: "DOWNLOAD", label: "Download" },
  { value: "GET_OFFER", label: "Get Offer" },
  { value: "BOOK_NOW", label: "Book Now" },
  { value: "ORDER_NOW", label: "Order Now" },
  { value: "APPLY_NOW", label: "Apply Now" },
  { value: "GET_QUOTE", label: "Get Quote" },
  { value: "CONTACT_US", label: "Contact Us" },
  { value: "WATCH_MORE", label: "Watch More" },
  { value: "INSTALL_MOBILE_APP", label: "Install Now" },
  { value: "USE_MOBILE_APP", label: "Open App" },
]

/**
 * Multi-value text input — add/remove text variants (like multi-text ads).
 */
const MultiTextInput = ({ label, values, onChange, textarea }) => {
  const Tag = textarea ? "textarea" : "input"

  const handleChange = (index, value) => {
    const next = [...values]
    next[index] = value
    onChange(next)
  }

  const handleAdd = () => onChange([...values, ""])

  const handleRemove = (index) => {
    const next = values.filter((_, i) => i !== index)
    onChange(next.length ? next : [""])
  }

  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>{label}</label>
      {values.map((v, i) => (
        <div key={i} className={styles.multiRow}>
          <Tag
            className={cn(styles.input, { [styles.textarea]: textarea })}
            value={v}
            onChange={(e) => handleChange(i, e.target.value)}
            rows={textarea ? 2 : undefined}
          />
          {values.length > 1 && (
            <button
              className={styles.removeBtn}
              onClick={() => handleRemove(i)}
              type="button"
              aria-label="Remove"
            >
              <IconX size={12} />
            </button>
          )}
        </div>
      ))}
      <button className={styles.addBtn} onClick={handleAdd} type="button">
        <IconPlus size={12} />
        Add variant
      </button>
    </div>
  )
}

const OverridesForm = ({ sourceAd, overrides, onChange }) => {
  const [expanded, setExpanded] = useState(false)

  if (!sourceAd) return null

  return (
    <div className={styles.accordion}>
      <button
        className={styles.trigger}
        onClick={() => setExpanded(!expanded)}
        type="button"
      >
        <span className={styles.triggerLabel}>
          Configure ads: texts, links & UTMs
        </span>
        <IconChevronDown
          size={14}
          className={cn(styles.triggerIcon, { [styles.expanded]: expanded })}
        />
      </button>

      {expanded && (
        <div className={styles.body}>
          <p className={styles.hint}>
            Prefilled from the source ad. Anything you change here is applied to
            every launched ad.
          </p>

          <MultiTextInput
            label="Primary text"
            textarea
            values={overrides.messages}
            onChange={(messages) => onChange({ messages })}
          />

          <MultiTextInput
            label="Headline"
            values={overrides.headlines}
            onChange={(headlines) => onChange({ headlines })}
          />

          <MultiTextInput
            label="Description"
            values={overrides.descriptions}
            onChange={(descriptions) => onChange({ descriptions })}
          />

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Call to action</label>
            <select
              className={styles.input}
              value={overrides.call_to_action_type || ""}
              onChange={(e) =>
                onChange({ call_to_action_type: e.target.value })
              }
            >
              <option value="" disabled>
                Select a CTA...
              </option>
              {CTA_OPTIONS.map((cta) => (
                <option key={cta.value} value={cta.value}>
                  {cta.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Destination link</label>
            <input
              className={styles.input}
              value={overrides.link}
              onChange={(e) => onChange({ link: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Display link</label>
            <input
              className={styles.input}
              value={overrides.display_link}
              onChange={(e) => onChange({ display_link: e.target.value })}
              placeholder="scalemate.co"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>URL tags (UTM)</label>
            <input
              className={styles.input}
              value={overrides.url_tags}
              onChange={(e) => onChange({ url_tags: e.target.value })}
              placeholder="utm_source=facebook&utm_campaign=..."
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default OverridesForm
