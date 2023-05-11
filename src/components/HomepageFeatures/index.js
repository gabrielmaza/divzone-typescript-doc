import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Minimalistic design",
    Svg: require("@site/static/img/undraw_divzone_tree.svg").default,
    description: (
      <>Clean and simple UI with minimal styling to improve user experience.</>
    ),
  },
  {
    title: "Responsive layout",
    Svg: require("@site/static/img/undraw_divzone_devices.svg").default,
    description: (
      <>
        Optimized for mobile and desktop devices, ensuring a seamless experience
        across all screen sizes.
      </>
    ),
  },
  {
    title: "Customizable",
    Svg: require("@site/static/img/undraw_divzone_react.svg").default,
    description: (
      <>
        Tailwind CSS allows for easy customization of styles and themes, making
        it simple to tailor to your brand.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
