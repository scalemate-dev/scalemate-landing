"use client"
import cn from "classnames"
import Container from "@/components/elements/Container/Container"

import Button from "@/components/elements/Button/Button"
import styles from "./WaitList.module.scss"

const WaitList = ({
  noButton,
  theme,
  href,
  title = "Deal with Ad Launches <span>260% faster</span>",
  subtitle = "",
  buttonText = "Book a demo",
  onClick = () => {},
}) => {
  return (
    <div className={cn(styles.black, { [styles.dark]: theme === "dark" })}>
      <div className={cn(styles.waitList, { [styles.dark]: theme === "dark" })}>
        <Container className={styles.container}>
          <h2
            className={styles.waitListTitle}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className={styles.waitListSubtitle}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          {!noButton && (
            <div className={styles.waitListButtons}>
              <Button
                color="accent"
                href={href}
                className={styles.waitListSubmit}
                onClick={onClick}
              >
                {buttonText}
              </Button>
              <Button
                outline
                darkTheme={theme === "dark"}
                href="https://app.scalemate.co"
                className={styles.waitListSubmit}
              >
                Start for free
              </Button>
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default WaitList
