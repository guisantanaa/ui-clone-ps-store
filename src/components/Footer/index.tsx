/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <section className={styles.content_info}>
        <div className={styles.logo_footer}>
          <img
            className={styles.logo_desktop}
            src="/logo-footer-desk.png"
            alt="logo footer"
          />

          <img
            className={styles.logo_mobile}
            src="/logo-footer-mobile.png"
            alt="logo footer"
          />
        </div>

        <div className={styles.links_footer}>
          <ul className={styles.links_1}>
            <li>Suporte</li>
            <li>Política de privacidade</li>
            <li>Termos de uso do site</li>
            <li>PlayStation Studios</li>
            <li>Legal</li>
          </ul>

          <ul className={styles.links_2}>
            <li>Termos de serviço da PSN</li>
            <li>Política de cancelamento da PS Store</li>
            <li>Avisos de saúde</li>
            <li>Sobre as classificações</li>
          </ul>

          <ul className={styles.links_3}>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Aplicativo para Android</li>
            <li>Aplicativo para iOS</li>
          </ul>
        </div>

        <div className={styles.entenrtaiment}>
          <span>
            © 2022 Sony Interactive Entertainment Inc. Todos os direitos
            reservados.
          </span>
        </div>
      </section>
    </footer>
  );
}
