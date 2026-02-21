import { IconBrandGoogleDrive, IconCheck, IconLink } from "@tabler/icons-react"

const ICON_PROPS = {
  size: 22,
  strokeWidth: 1.75,
}

const ICONS = {
  "google-drive": IconBrandGoogleDrive,
  link: IconLink,
  check: IconCheck,
}

export default function StepIcon({ type }) {
  const Icon = ICONS[type]
  return Icon ? <Icon {...ICON_PROPS} /> : null
}
