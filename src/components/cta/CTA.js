// src/components/cta/CTA.js
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'
import { getCommonMotionProps } from 'lib/utils'

import stl from './CTA.module.scss'

export default function CTA() {
  const [animation, setAnimation] = useState(false)
  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    // Добавили id="contact" для якорной навигации
    <section id="contact" className={clsx(stl.page__start, stl.start)}>
      <div className={stl.start__container}>
        <div className={stl.start__body}>
          <div className={stl.start__column}>
            <motion.h2 {...motionProps} className={stl.start__title}>
              Ready to scale your business with Affiliate Marketing &amp; Google
              Ads?
            </motion.h2>
            <motion.p
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={clsx(stl.start__text, stl.text)}
            >
              Contact Axantra Consult Limited today to start driving measurable
              results and maximizing your ROI.
            </motion.p>
          </div>
          <div className={stl.start__column}>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.start__actions}
            >
              {/* Переход к секции Services */}
              <a href="#services" className={stl.start__link}>
                <Button label="Explore Services" />
              </a>
              {/* Открытие почтового клиента */}
              <a
                href="mailto:main@axantramedia.com"
                className={stl.start__link}
              >
                <Button label="Email Us" isDark />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
