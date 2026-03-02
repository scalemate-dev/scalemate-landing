#!/bin/bash
set -e

REPO="scalemate-dev/scalemate-landing"

echo "🔓 Making repo public..."
gh repo edit "$REPO" --visibility public

echo "🚀 Pushing to origin..."
git push

echo "⏳ Waiting 30s for Vercel to pick up the deploy..."
sleep 10

echo "🔒 Making repo private..."
gh repo edit "$REPO" --visibility private

echo "✅ Done! Repo is private again."
