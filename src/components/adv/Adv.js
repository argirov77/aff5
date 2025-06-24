/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { motion } from 'framer-motion'
import stl from './Adv.module.scss'

export default function Adv() {
  const [animation, setAnimation] = useState(false)

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
    <section className={stl.advantages}>
      <div className={stl.advantages__container}>
        <div className={stl.advantages__items}>
          <motion.article
            {...getScaleAnimation(0.25)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>250+</h4>
            <div className={stl.advantages__text}>
              active partners in our affiliate network worldwide
            </div>
          </motion.article>

          <motion.article
            {...getScaleAnimation(0.35)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>$5M+</h4>
            <div className={stl.advantages__text}>
              ad budgets managed every month
            </div>
          </motion.article>

          <motion.article
            {...getScaleAnimation(0.45)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>35%</h4>
            <div className={stl.advantages__text}>
              average conversion uplift in client campaigns
            </div>
          </motion.article>

          <motion.article
            {...getScaleAnimation(0.55)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>10 yrs</h4>
            <div className={stl.advantages__text}>
              of experience in digital marketing & Google Ads
            </div>
          </motion.article>
        </div>

        <motion.div
          {...getScaleAnimation(0.65)}
          className={stl.advantages__image}
        >
          <img
            src="/img/advantage-image-01.jpg"
            alt="Marketing analytics dashboard"
          />
        </motion.div>
      </div>
    </section>
  )
}
