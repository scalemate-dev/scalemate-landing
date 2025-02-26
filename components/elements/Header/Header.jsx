"use client"
import cn from "classnames"
import Container from "../Container/Container"
import Sparkles from "@/assets/icons/sparkles.inline.svg"
import Fork from "@/assets/icons/fork.inline.svg"
import NavDropdown from "../NavDropdown/NavDropdown"
import Link from "next/link"
import Logo from "@/components/elements/Logo"
import Button from "@/components/elements/Button/Button"
import styles from "./Header.module.scss"
import Icon from "@/components/elements/Icon/Icon"
import { IconCloud, IconBoltFilled } from "@tabler/icons-react"

import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  const darkTheme = pathname.includes("assistant")

  const solutions = [
    {
      label: "Performance AI Agent",
      description: "Scale campaigns with AI",
      icon: (
        <Icon style={{ background: "#fae6ff" }}>
          <Sparkles stroke="#9f4bfe" height={16} width={16} />
        </Icon>
      ),
      path: "/assistant",
      new: true,
    },
    {
      label: "Launch",
      description: "Quickly set up multiple ad sets and ads.",
      icon: (
        <Icon style={{ backgroundColor: "#FFFAEB" }}>
          <IconBoltFilled color="#FEC84B" size={16} />
        </Icon>
      ),
      path: "/launch",
    },

    {
      label: "Cloud sync",
      description: "Upload your ad creatives in one click.",
      icon: (
        <Icon style={{ backgroundColor: "#EDF2FF" }}>
          <IconCloud color="#40C057" size={16} />
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
    <header className={cn(styles.header, { [styles.darkTheme]: darkTheme })}>
      <Container className={styles.container}>
        <div className={styles.headerNavigation}>
          <Link href="/" className={styles.headerLogo}>
            <Logo className={styles.logo} />
          </Link>
          <NavDropdown
            items={solutions}
            label="Product"
            darkTheme={darkTheme}
          />
          {/* <NavDropdown items={solutions} label="Integrations" /> */}
        </div>
        <Button outline darkTheme={darkTheme} href="/book-a-demo">
          Get Started
        </Button>
      </Container>
    </header>
  )
}

export default Header
