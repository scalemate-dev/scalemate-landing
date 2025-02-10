"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import styles from "./Slider.module.scss"
import chevronLeft from "@/assets/icons/chevron-left.svg"
import chevronRight from "@/assets/icons/chevron-right.svg"
import SmartFlowImg from "@/assets/images/home/smart-flow.png"
import cn from "classnames"

const slides = [
  {
    title: "Launch Ads in Bulk",
    description: "Launch your ads in bulk on multiple Ad campaigns at a time",
    image: SmartFlowImg,
    bg: "#F5F4EE",
  },
  {
    title: "Scale campaigns",
    description:
      "Get testing results & select creatives with the winner status only.",
    image: SmartFlowImg,
    bg: "#E0F8DE",
  },
  {
    title: "Rotate Ads",
    description:
      "Launch your top creatives in live campaigns on multiple ad networks at a time.",
    image: SmartFlowImg,
    bg: "#F0DCFF",
  },
  // Add more slides as needed
]

const Slider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.navigation}>
        <div className={cn(styles.navigationButton, "prev")}>
          <Image src={chevronLeft} alt="Previous" width={24} height={24} />
        </div>
        <div className={cn(styles.navigationButton, "next")}>
          <Image src={chevronRight} alt="Next" width={24} height={24} />
        </div>
      </div>

      <Swiper
        className={styles.slider}
        modules={[Navigation]}
        spaceBetween={64}
        loop={true}
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <div className={styles.content} style={{ background: slide.bg }}>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.description}>{slide.description}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className={styles.image}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
