import Container from "../Container/Container"

import Link from "next/link"
import Logo from "@/components/shared/Logo"
import Button from "@/components/shared/Button/Button"
import styles from "./Header.module.scss"

const Header = () => {
  const solutions = [
    { label: "Automate", path: "/automate" },
    { label: "Creative library", path: "/unite", disabled: false },
    { label: "Analytics", path: "/analytics", disabled: true },
  ]

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.headerNavigation}>
          <Link href="/" className={styles.headerLogo}>
            <Logo className={styles.logo} />
          </Link>
          {/* <NavDropdown items={solutions} label="Product" /> */}
        </div>
        {/* <Button color="no-background">Log in</Button> */}
        <Button outline href="/book-a-demo">
          Get Started
        </Button>
      </Container>
    </header>
  )
}

export default Header
