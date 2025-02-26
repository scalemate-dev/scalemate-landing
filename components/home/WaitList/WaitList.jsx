"use client"
import Container from "@/components/elements/Container/Container"

import Button from "@/components/elements/Button/Button"
import styles from "./WaitList.module.scss"

const WaitList = ({ noButton }) => {
  return (
    <div className={styles.black}>
      <div className={styles.waitList}>
        <Container className={styles.container}>
          <h2 className={styles.waitListTitle}>
            Deal with Ad Launches <span>260% faster</span>
          </h2>
          <div className={styles.waitListSubtitle}>
            1-month free trial | Dedicated onboarding | Custom integrations
          </div>
          {!noButton && (
            <Button
              color="accent"
              href="/book-a-demo"
              className={styles.waitListSubmit}
            >
              Book a demo
            </Button>
          )}
        </Container>
      </div>
    </div>
  )
}

export default WaitList
