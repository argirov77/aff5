// src/components/hero/Hero.js
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'
import { getCommonMotionProps } from 'lib/utils'

import stl from './Hero.module.scss'

export default function Hero() {
  const [animation, setAnimation] = useState(false)
  const motionProps = getCommonMotionProps(animation, setAnimation)

  const getScaleAnimation = (delay = 0.25) => ({
    onViewportEnter: () => setAnimation(true),
    initial: { scale: '0', opacity: 0 },
    animate: {
      scale: animation ? 1 : 0,
      opacity: animation ? 1 : 0,
    },
    transition: { duration: 0.5, delay },
  })

  return (
    <section id="home" className={stl.main}>
      <div className={stl.main__container}>
        <div className={stl.main__content}>
          <div className={clsx(stl.main__header, stl.header_main)}>
            <motion.h1 {...motionProps} className={stl.header_main__title}>
              Growth through Affiliate Marketing &amp; Google Ads
            </motion.h1>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={stl.header_main__text}
            >
              <p>
                Axantra Consult Limited is your strategic partner in affiliate
                marketing and Google Ads. We craft data-driven campaigns to
                boost your sales, enhance brand visibility, and maximize ROI.
              </p>
            </motion.div>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.header_main__actions}
            >
              <a href="#services" className={stl.header_main__link}>
                <Button label="Our services" />
              </a>
              <a
                href="#contact"
                className={clsx(stl.header_main__link, stl.dark)}
              >
                <Button label="Contact us" isDark />
              </a>
            </motion.div>
          </div>
        </div>
        <div className={clsx(stl.main__images, stl.images_main)}>
          <div className={stl.images_main__column}>
            <motion.div
              {...getScaleAnimation(0.25)}
              className={clsx(stl.images_main__item, stl.images_main__item_1)}
            >
              <img src="/img/main-img-01.jpg" alt="Illustration" />
            </motion.div>
            <motion.div
              {...getScaleAnimation(0.35)}
              className={clsx(stl.images_main__item, stl.images_main__item_2)}
            >
              <img src="/img/main-img-02.jpg" alt="Illustration" />
            </motion.div>
          </div>
          <div className={stl.images_main__column}>
            <motion.div
              {...getScaleAnimation(0.4)}
              className={clsx(stl.images_main__item, stl.images_main__item_3)}
            >
              <img src="/img/main-img-03.jpg" alt="Illustration" />
            </motion.div>
            <motion.div
              {...getScaleAnimation(0.45)}
              className={clsx(stl.images_main__item, stl.images_main__item_4)}
            >
              <img src="/img/main-img-04.jpg" alt="Illustration" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
