import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src="/logo1.png" alt="logo" width={160} height={50} />
            </a>
          </Link>
        </div>

        <nav>
          <Link href="/">
            <a>Novidades</a>
          </Link>

          <Link href="/">
            <a>Coleções</a>
          </Link>

          <Link href="/">
            <a>Ofertas</a>
          </Link>

          <Link href="/">
            <a>Assinaturas</a>
          </Link>

          <Link href="/">
            <a className={styles.link_mobile}>Navegar</a>
          </Link>
        </nav>
      </>
    </header>
  );
}
