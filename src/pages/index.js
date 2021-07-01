import React, { useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

const ImageWrapper = ({ height, width, className, src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className={clsx(styles.imageWrapper, className)}
      style={{ paddingTop: `${(100 * height) / width}%` }}
    >
      <img
        src={src}
        style={{ opacity: imageLoaded ? 1 : 0.1 }}
        onLoad={(e) => setImageLoaded(true)}
      />
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Header />
      <Body />
      <Subscribe />
      <Footer />
    </>
  );
}

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Menu />
    </nav>
  );
};

const Logo = (props) => {
  return (
    <svg width={105} height={30} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h24.375v30h-13.75l1.875-3.75h8.125V3.75H3.75V7.5H0V0zm0 11.25v13.125A5.625 5.625 0 005.625 30h1.25l1.875-3.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.25h5v-3.75h-5V11.25H0zm55-8.125V23.75h3.75V3.125H55zM35.625 23.75h1.25L38.75 20h-3.125a1.875 1.875 0 01-1.875-1.875v-6.25h5v-3.75h-5V5H30v13.125a5.625 5.625 0 005.625 5.625zm60.625-5.625v-10H92.5v10a5.625 5.625 0 005.625 5.625h.625c.657 0 1.289-.113 1.875-.32v.945c0 1.035-.84 1.875-1.875 1.875h-2.5V30h2.5a5.625 5.625 0 005.625-5.625V8.125h-3.75v10c0 1.035-.84 1.875-1.875 1.875h-.625a1.875 1.875 0 01-1.875-1.875zM61.875 23.75V3.125h3.75V23.75h-3.75zm26.25-15.625A5.625 5.625 0 0082.5 13.75v10h3.75v-10c0-1.036.84-1.875 1.875-1.875h2.5v-3.75h-2.5zM76.25 13.75c0-1.036-.84-1.875-1.875-1.875h-.625c-1.035 0-1.875.84-1.875 1.875v.625h4.375v-.625zm3.75.625v.938c0 1.208-.98 2.187-2.188 2.187h-5.937v.625c0 1.035.84 1.875 1.875 1.875h5.625L77.5 23.75h-3.75a5.625 5.625 0 01-5.625-5.625V13.75a5.625 5.625 0 015.625-5.625h.625A5.625 5.625 0 0180 13.75v.625zm-31.25-.625c0-1.036-.84-1.875-1.875-1.875h-.625c-1.035 0-1.875.84-1.875 1.875v.625h4.375v-.625zm3.75.625v.938c0 1.208-.98 2.187-2.188 2.187h-5.937v.625c0 1.035.84 1.875 1.875 1.875h5.625L50 23.75h-3.75a5.625 5.625 0 01-5.625-5.625V13.75a5.625 5.625 0 015.625-5.625h.625A5.625 5.625 0 0152.5 13.75v.625z"
        fill="#fff"
      />
    </svg>
  );
};

const MenuItems = () => {
  return (
    <>
      <MenuItem title="Github" href="https://github.com/tellery/tellery" />
      <MenuItem title="Features" href="#" />
      <MenuItem title="Docs" href="/docs/" />
      <MenuItem title="Pricing" href="#" />
    </>
  );
};

const Menu = () => {
  return (
    <>
      <ul className={styles.menu}>
        <MenuItems />
      </ul>
      <ul className={styles.dropdown}>
      <span>Menu</span>
        <div className={styles.dropdownContent}>
        <MenuItems />
        </div>
      </ul>
    </>
  );
};

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div>
        <h2>Get the latest news and product updates</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Get tellery" type="email"></input>
          <button>Subscribe to newsletter</button>
        </form>
      </div>
    </section>
  );
};

const MenuItem = ({ title, href }) => {
  return (
    <li className={styles.menuItem}>
      <a href={href}>{title}</a>
    </li>
  );
};

const Body = () => {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
};

const Features = () => {
  return (
    <section className={styles.features}>
      <Feature
        left={
          <>
            <h3>Streamlined Analysis</h3>
            <p>
              Tellery allows you edit your analytics code and visualization
              options without leaving your current context.
            </p>
          </>
        }
        right={null}
      />
      <Feature
        left={
          <>
            <ImageWrapper
              src={useBaseUrl("/img/home/screenshot-2.png")}
              width={600}
              height={482}
            />
          </>
        }
        right={
          <>
            <h3>Write once, reference anywhere</h3>
            <p>
              Tellery allows you abstract essential business logic, and
              reference it anywhere. Stop writing duplicated metrics calculation
              over and over gain.
            </p>
            <p>
              Tellery uses SQL to model data, which means you can easily export
              the transformation code to dbt (to assure quality or improve
              performance).
            </p>
          </>
        }
      />

      <Feature
        left={
          <>
            <h3>All in one analytic workflow</h3>
            <p>
              Want a KPI dashboard? A weekly report? A deep user research?
              Tellery allows you build your deliverables from dozens of building
              blocks. Stop copy-pasting screenshot of charts between tabs.
            </p>
            <p>
              Numbers are defined consistently and always up to date. It’s easy
              to discover and trust data across the organization.
            </p>
          </>
        }
        right={
          <>
            <ImageWrapper
              src={useBaseUrl("/img/home/screenshot-1.png")}
              width={695}
              height={494}
            />
          </>
        }
      />
    </section>
  );
};

const Feature = ({ left, right }) => {
  return (
    <div className={styles.feature}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2>Stop copy-pasting</h2>

      <h3>
        Tellery is an open source way for building collaborative analysis all in
        one place.
      </h3>

      <a href="/docs/">Get Started</a>
      <HeroSnapshot />
    </section>
  );
};

const HeroSnapshot = () => {
  return (
    <div className={styles.heroSnapshot}>
      <ImageWrapper
        src={useBaseUrl("/img/home/screenshot-1.png")}
        width={695}
        height={494}
      />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Philosophy />
      <Divider />
      <More />
    </footer>
  );
};

const Divider = () => {
  return <div className={styles.divider}></div>;
};

const Philosophy = () => {
  return (
    <div className={styles.philosophy}>
      <div>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="60"
          >
            <rect width="60" height="60" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M53.565 1H6.44V15.5H13.69V8.25H46.315V51.75H30.6064L26.9814 59H53.565V1ZM6.44 48.125V22.75H13.69V30H23.3567V37.25H13.69V48.125C13.69 50.127 15.313 51.75 17.315 51.75H23.3564L19.7314 59H17.315C11.3089 59 6.44 54.1311 6.44 48.125Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <p>
        We believe analytic code is an asset. But most reports, presentations,
        dashboards are ephemeral. If we can build a tool helping people organize
        analysis more effectively, we can help them maximize the value of data.
      </p>
    </div>
  );
};

const More = () => {
  return (
    <div className={styles.more}>
      <MoreColumn title="learn">
        <MoreItem title="Documentation" />
      </MoreColumn>
      <MoreColumn title="Community">
        <MoreItem title="Twitter" />
        <MoreItem title="Github" />
      </MoreColumn>
      <MoreColumn title="More">
        <MoreItem title="Privacy Policy" />
        <MoreItem title="Contact Us" />
      </MoreColumn>
    </div>
  );
};

const MoreColumn = ({ children, title }) => {
  return (
    <ul>
      <h5>{title}</h5>
      {children}
    </ul>
  );
};

const MoreItem = ({ title }) => {
  return <li>{title}</li>;
};
