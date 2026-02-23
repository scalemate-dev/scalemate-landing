import WindowMockup from "./WindowMockup"
import SelectScreen from "./screens/SelectScreen"
import ConnectScreen from "./screens/ConnectScreen"
import UploadScreen from "./screens/UploadScreen"
import styles from "./HowItWorksSection.module.scss"

const SCREEN_CONTENT = {
  select: SelectScreen,
  connect: ConnectScreen,
  upload: UploadScreen,
}

export default function StepScreen({ stepId, isActive }) {
  const Content = SCREEN_CONTENT[stepId]

  return (
    <div className={`${styles.screen} ${isActive ? styles.active : ""}`}>
      <WindowMockup>
        {Content && <Content />}
      </WindowMockup>
    </div>
  )
}
