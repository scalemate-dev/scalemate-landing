"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/shared/Header/Header"
import Hero from "../components/home/Hero/Hero"
import HowCanHelp from "../components/home/HowCanHelp/HowCanHelp"
import Features from "../components/home/Features/Features"
import WithScalemate from "../components/home/WithScalemate/WithScalemate"
import ROICalculator from "../components/home/ROICalculator/ROICalculator"
import WaitList from "../components/home/WaitList/WaitList"
import Footer from "@/components/shared/Footer/Footer"
import styles from "./page.module.scss"

export default function Home() {
  // const footerRef = useRef(null)
  // const [footerHeight, setFooterHeight] = useState("")

  // useEffect(() => {
  //   if (footerRef.current) {
  //     setFooterHeight(footerRef.current.offsetHeight)
  //   }
  // }, [])

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.main}>
        <Hero />
        <WithScalemate />
        <ROICalculator />
        <HowCanHelp />
        <Features />
        <WaitList />
      </div>
      <div className={styles.fixed}>
        <Footer />
      </div>
    </div>
  )
}
