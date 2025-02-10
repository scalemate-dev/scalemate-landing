import Button from "@/components/elements/Button/Button"
import Head from "next/head"
import styles from "./NotFound.module.scss"
import Container from "@/components/elements/Container/Container"

export default function NotFound() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className={styles.notFound}>
        <Container>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, we couldn't find the page you're looking for.</p>
          <Button href="/" color="accent" className={styles.homeLink}>
            Go back home
          </Button>
        </Container>
      </div>
    </>
  )
}
