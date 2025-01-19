"use client"
import background from "@/assets/icons/with-scalemate-background.svg"

import Image from "next/image"
import chevronLeft from "@/assets/icons/chevron-left.svg"
import chevronRight from "@/assets/icons/chevron-right.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Container from "@/components/elements/Container/Container"
import styles from "./WithScalemate.module.scss"

const WithScalemate = () => {
  const cards = [
    {
      value: "10k",
      label: "creatives launched",
      background: "#FFE8D3",
    },
    {
      value: "1300",
      label: "hours saved",
      background: "#F0DCFF",
    },
    {
      value: "-32%",
      label: "cost per winner",
      background: "#FFBF99",
    },
    {
      value: "+30%",
      label: "employee satisfaction",
      background: "#E0F8DE",
    },
    {
      value: "-90%",
      label: "cost per ad created",
      background: "#FFE8D3",
    },
    {
      value: "<span>∞</span> times",
      label: "more productive with<br/>Scalemate",
      background: "#F5F4EE",
    },
  ]

  return (
    <div className={styles.withScalemate}>
      <Image
        className={styles.withScalemateBackground}
        src={background}
        alt=""
        width={500}
        height={500}
      />
      <Container>
        <div className={styles.withScalemateNavigation}>
          <h2 className={styles.withScalemateTitle}>
            With Scalemate, ad management becomes effortless cutting time by
            over 62%.
            {/* With Scalemate, UAMs shorten the testing path and reduce time by
            62%. */}
          </h2>
          <div className={styles.withScalemateNavigationButtons}>
            <div className={`${styles.withScalemateNavigationButton} prev`}>
              <Image src={chevronLeft} alt="Previous" width={24} height={24} />
            </div>
            <div
              className={`${styles.withScalemateNavigationButton} ${styles.active} next`}
            >
              <Image src={chevronRight} alt="Next" width={24} height={24} />
            </div>
          </div>
        </div>
      </Container>
      <Swiper
        className={styles.withScalemateCards}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={24}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className={styles.withScalemateCard}
            style={{ background: card.background }}
          >
            <div
              className={styles.withScalemateCardValue}
              dangerouslySetInnerHTML={{ __html: card.value }}
            />
            <div
              className={styles.withScalemateCardLabel}
              dangerouslySetInnerHTML={{ __html: card.label }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container className={styles.mobile}>
        <div className={styles.withScalemateNavigationButtons}>
          <div className={`${styles.withScalemateNavigationButton} prev`}>
            <Image src={chevronLeft} alt="Previous" width={24} height={24} />
          </div>
          <div
            className={`${styles.withScalemateNavigationButton} ${styles.active} next`}
          >
            <Image src={chevronRight} alt="Next" width={24} height={24} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WithScalemate
