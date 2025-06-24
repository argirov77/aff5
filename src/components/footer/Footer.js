/* eslint-disable @next/next/no-img-element */
import stl from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={stl.footer}>
      <div className={stl.footer__container}>
        <div className={stl.footer__info}>
          <p className={stl.footer__company}>Axantra Consult Limited</p>
          <p className={stl.footer__address}>
            1 Maple Road, Bramhall, Stockport, Cheshire, England, SK7 2DH
          </p>
          <p className={stl.footer__email}>
            Email: <a href="mailto:main@axantramedia.com">main@axantramedia.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
