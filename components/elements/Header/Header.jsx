import Container from "../Container/Container"
import Bolt from "@/assets/icons/bolt.inline.svg"
import Cloud from "@/assets/icons/cloud.inline.svg"
import Fork from "@/assets/icons/fork.inline.svg"
import NavDropdown from "../NavDropdown/NavDropdown"
import Link from "next/link"
import Logo from "@/components/elements/Logo"
import Button from "@/components/elements/Button/Button"
import styles from "./Header.module.scss"
import Icon from "@/components/elements/Icon/Icon"

const Header = () => {
  const solutions = [
    {
      label: "Launch",
      description: "Quickly set up multiple ad sets and ads.",
      icon: (
        <Icon style={{ backgroundColor: "#FFFAEB" }}>
          <Bolt color="#FEC84B" height={16} width={16} />
        </Icon>
      ),
      path: "/launch",
    },
    {
      label: "Cloud sync",
      description: "Upload your ad creatives in one click.",
      icon: (
        <Icon style={{ backgroundColor: "#EDF2FF" }}>
          <Cloud color="#40C057" />
        </Icon>
      ),
      path: "/cloud-sync",
      disabled: true,
    },
    {
      label: "Rules",
      description: "Create and apply rules to your ads.",
      icon: (
        <Icon style={{ backgroundColor: "#E7FCF5" }}>
          <Fork color="#8E44AD" />
        </Icon>
      ),
      path: "/rules",
      disabled: true,
    },
  ]

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.headerNavigation}>
          <Link href="/" className={styles.headerLogo}>
            <Logo className={styles.logo} />
          </Link>
          <NavDropdown items={solutions} label="Product" />
          <NavDropdown items={solutions} label="Integrations" />
        </div>
        <Button outline href="/book-a-demo">
          Get Started
        </Button>
      </Container>
    </header>
  )
}

export default Header
