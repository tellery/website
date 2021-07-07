import React, { useEffect, useState, useRef } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { CircularLoading } from "../components/CircularLoading";
import { HomepageFeatures } from "../components/HomepageFeatures";
import { VideoWrapper } from "../components/VideoWrapper";
import { useClickAway } from "react-use";

const Meta = () => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <title>Tellery</title>
      <link rel="icon" href="/img/icon.svg" />
      <link rel="mask-icon" href="/img/mask-icon.svg" color="#002FA7" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />
    </Head>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Meta></Meta>
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
  const { siteConfig } = useDocusaurusContext();
  const { items = [] } = siteConfig.themeConfig.navbar;
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item.label} title={item.label} href={item.href} />
      ))}
    </>
  );
};

const Menu = () => {
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setShowMenuDropdown(false);
  });

  return (
    <>
      <ul className={styles.menu}>
        <MenuItems />
      </ul>
      <ul className={styles.dropdown}>
        <span
          onClick={(e) => {
            setShowMenuDropdown(!showMenuDropdown);
          }}
        >
          Menu
        </span>
        <div
          ref={ref}
          className={styles.dropdownContent}
          style={{
            opacity: showMenuDropdown ? 1 : 0,
            pointerEvents: showMenuDropdown ? "auto" : "none",
          }}
        >
          <MenuItems />
        </div>
      </ul>
    </>
  );
};

const Subscribe = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className={styles.subscribe}>
      <div>
        <h2>Get the latest news and product updates</h2>
        <form
          onSubmit={(e) => {
            setLoading(true);
            fetch("https://tellery.codefuture.top/subscribe", {
              body: JSON.stringify({ email: ref.current.value }),
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
            })
              .then((res) => {
                setLoading(false);
                setSubscribed(true);
              })
              .finally((res) => {
                setLoading(false);
              });
            e.preventDefault();
          }}
        >
          <input
            ref={ref}
            placeholder="Enter your email"
            type="email"
            style={{ fontSize: 16, color: "#AAA" }}
          ></input>
          <button>
            {loading ? (
              <CircularLoading size={12} color={"#ffffff"} scale={1} />
            ) : subscribed ? (
              "Subscribe success!"
            ) : (
              " Subscribe to newsletter"
            )}
          </button>
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
    <main className={styles.body}>
      <Hero />
      <HomepageFeatures />
    </main>
  );
};

const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  const hero = siteConfig.customFields.copy.hero;
  return (
    <section className={styles.hero}>
      <h2>{hero.title}</h2>

      <h3>{hero.subtitle}</h3>

      <a href="/docs/">Get Started</a>
      <HeroSnapshot />
    </section>
  );
};

const HeroSnapshot = () => {
  return (
    <div className={styles.heroSnapshot}>
      <VideoWrapper
        src={useBaseUrl("/img/home/hero-video.mov")}
        width={2790}
        height={1418}
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
  const { siteConfig } = useDocusaurusContext();
  const philosophy = siteConfig.customFields.copy.philosophy;
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.565 1H6.44V15.5H13.69V8.25H46.315V51.75H30.6064L26.9814 59H53.565V1ZM6.44 48.125V22.75H13.69V30H23.3567V37.25H13.69V48.125C13.69 50.127 15.313 51.75 17.315 51.75H23.3564L19.7314 59H17.315C11.3089 59 6.44 54.1311 6.44 48.125Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <p>{philosophy}</p>
    </div>
  );
};

const More = () => {
  const { siteConfig } = useDocusaurusContext();
  const { links = [] } = siteConfig.themeConfig.footer;

  return (
    <div className={styles.more}>
      {links.map((linkItem, i) => (
        <MoreColumn title={linkItem.title} key={linkItem.title}>
          {linkItem.items?.map((item) => (
            <MoreItem key={item.label} title={item.label} href={item.href} />
          ))}
        </MoreColumn>
      ))}
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

const MoreItem = ({ title, href }) => {
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
};
