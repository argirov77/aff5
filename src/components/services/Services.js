// src/components/services/Services.js
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'
import { getCommonMotionProps } from 'lib/utils'

import stl from './Services.module.scss'

export default function Services() {
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
    <section id="services" className={stl.services}>
      <div className={stl.services__container}>
        <div className={stl.services__content}>
          <div className={clsx(stl.services__header, stl.header_main)}>
            <motion.a
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.1 }}
              href="#services"
              className={stl.header_main__label}
            >
              Services
            </motion.a>
            <motion.h2 {...motionProps} className={stl.header_main__title}>
              Services we offer
            </motion.h2>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={stl.header_main__text}
            >
              <p>
                At Axantra Consult Limited we deliver tailored affiliate marketing programs,
                full-service Google Ads management, and end-to-end digital marketing
                strategies designed to drive growth and maximize your ROI.
              </p>
            </motion.div>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.header_main__actions}
            >
              <a href="#contact">
                <Button label="Learn More" />
              </a>
            </motion.div>
          </div>
        </div>

        <div className={stl.services__items}>
          <div className={stl.services__column}>
            <motion.article
              {...getScaleAnimation(0.25)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-01.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>
                Social Media Marketing
              </h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                We create engaging social media campaigns that build brand awareness
                and foster meaningful interactions across all major platforms.
              </div>
            </motion.article>
            <motion.article
              {...getScaleAnimation(0.35)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-02.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>
                Email Marketing
              </h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                We design targeted email strategies to nurture leads, enhance
                customer retention, and drive repeat sales through personalized content.
              </div>
            </motion.article>
          </div>
          <div className={stl.services__column}>
            <motion.article
              {...getScaleAnimation(0.4)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-03.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>
                Paid Advertising
              </h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                We manage and optimize PPC campaigns on Google, Facebook, and LinkedIn
                to maximize ROI and minimize cost per acquisition.
              </div>
            </motion.article>
            <motion.article
              {...getScaleAnimation(0.45)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-04.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>
                SEO Optimization
              </h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                We optimize your website’s structure, content, and backlinks to
                improve search rankings and drive organic traffic growth.
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}
