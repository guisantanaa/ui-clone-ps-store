/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import styles from './home.module.scss';

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      <section className={styles.carousel}>
        <div className={styles.image_carousel}>
          <img src="/carrosel-desk.png" alt="carrosel" />
        </div>

        <div className={styles.button__look}>
          <span>Escolhas da critica</span>
          <a href="#">Veja mais</a>
        </div>
      </section>

      <section className={styles.collection}>
        <ul>
          <li>
            <a href="#">
              <img src="/image-jogo1.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-jogo2.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-jogo3.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-jogo4.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-jogo5.png" alt="" />
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.strand_games}>
        <div className={styles.subTitle}>
          <h2>Em breve</h2>
          <a href="#">Visualizar tudo</a>
        </div>

        <ul>
          <Slider {...settings}>
            <li>
              <a href="#">
                <img src="/jogo-carrosel1.png" alt="" />
                <span>Elden Ring</span>
              </a>
            </li>

            <li>
              <a href="#">
                <img src="/jogo-carrosel2.png" alt="" />
                <span>Sifu</span>
              </a>
            </li>

            <li>
              <a href="#">
                <img src="/jogo-carrosel3.png" alt="" />
                <span>Horizon Forbidden West</span>
              </a>
            </li>

            <li>
              <a href="#">
                <img src="/jogo-carrosel4.png" alt="" />
                <span>Gran Turismo® 7</span>
              </a>
            </li>
          </Slider>
        </ul>
      </section>

      <section className={styles.carousel_thow}>
        <div className={styles.image_carousel}>
          <img
            className={styles.desktop_image}
            src="/carrosel-desk3.png"
            alt="carrosel"
          />

          <img
            className={styles.mobile_image}
            src="/carrosel-mobile-3.png"
            alt="carrosel"
          />
        </div>

        <div className={styles.blueprint_hero}>
          <div className={styles.blue_title}>
            <h2>Este é o PlayStation Plus</h2>
            <p>
              Melhore sua experiência no PlayStation com o modo multijogador
              online, jogos mensais, descontos exclusivos e muito mais.
            </p>
          </div>
          <a href="#">Resgate já</a>
        </div>
      </section>

      <section className={styles.collection}>
        <h2>Veja mais</h2>
        <ul>
          <li>
            <a href="#">
              <img src="/image-collection1.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-collection2.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-collection3.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-collection4.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-collection5.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image-collection6.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
