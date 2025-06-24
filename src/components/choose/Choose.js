/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Choose.module.scss'

export default function Choose() {
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
    <section id="why" className={stl.why}>
      <div className={stl.why__container}>
        <div className={clsx(stl.why__images, stl.images_why)}>
          <motion.div
            {...getScaleAnimation(0.25)}
            className={clsx(stl.images_why__item, stl.images_why__item_1)}
          >
            <img
              src="/img/why-image-01.jpg"
              alt="Affiliate network overview"
            />
          </motion.div>
          <motion.div
            {...getScaleAnimation(0.4)}
            className={clsx(stl.images_why__item, stl.images_why__item_2)}
          >
            <img
              src="/img/why-image-02.jpg"
              alt="Google Ads performance metrics"
            />
          </motion.div>
        </div>
        <div className={stl.why__content}>
          <div className={clsx(stl.why__header, stl.header_main)}>
            <motion.a
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.1 }}
              href="#contact"
              className={stl.header_main__label}
            >
              Why Choose Us
            </motion.a>
            <motion.h2 {...motionProps} className={stl.header_main__title}>
              We maximize your growth with affiliate marketing &amp; Google Ads.
            </motion.h2>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={stl.header_main__text}
            >
              <p>
                At Axantra Consult Limited, we combine deep industry expertise,
                cutting-edge tools, and transparent reporting to deliver exceptional ROI.
              </p>
            </motion.div>
            <motion.ul
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.header_main__list}
            >
              <li>Certified Google Ads specialists</li>
              <li>Custom affiliate programs tailored to your niche</li>
              <li>Data-driven optimization for maximum ROI</li>
              <li>Transparent, real-time campaign reporting</li>
              <li>Dedicated account management and support</li>
              <li>Proven track record across diverse industries</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
