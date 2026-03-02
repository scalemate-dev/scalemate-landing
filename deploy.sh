#!/bin/bash
set -e

REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)

echo "🔓 Making $REPO public..."
gh repo edit "$REPO" --visibility public --accept-visibility-change-consequences

echo "🚀 Pushing to origin..."
git push

echo "⏳ Waiting 10s for Vercel to pick up the deploy..."
sleep 10

echo "🔒 Making $REPO private..."
gh repo edit "$REPO" --visibility private --accept-visibility-change-consequences

echo "✅ Done! Repo is private again."
