import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Semplicity',
    Image: require('@site/static/img/clickingcuykon.gif').default,
    description: (
      <>
        Cuykon is a simple webgame where you click
        and you enjoy the sounds. Simply Lovely!
      </>
    ),
  },
  {
    title: 'Different buttons for different Cuykoners!',
    Svg: require('@site/static/img/cardset.webp').default,
    description: (
      <>
        Cuykon offers multiple type of buttons: Naruto, Chill and more.
        Visit the main site to find out!
      </>
    ),
  },
  {
    title: 'An Hobby made with passion',
    Svg: require('@site/static/img/hearthonn.webp').default,
    description: (
      <>
        Cuykon is an hobby project of a young student who wants
        to express his creativity. All you see is made with love
        on the desk!
      </>
    ),
  },
];

function Feature({Svg, Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Image ? (
          <img src={Image} className={styles.featureSvg} alt={title} />
        ) : Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
