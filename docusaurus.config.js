const customFields = {
  githubUrl: "https://github.com/tellery/tellery",
  twitterUrl: "https://twitter.com/TelleryHQ",
  contactEmail: "contact@tellery.io",
  domainUrl: "https://tellery.io",
  copyright: `Copyright © ${new Date().getFullYear()} Tellery, Inc.`,
  slackInviteUrl:
    "https://join.slack.com/t/telleryio/shared_invite/zt-s37tgvo7-QBdpggK_uG6QqJVWhSXlFg",
  copy: {
    hero: {
      title: "Stop copy-pasting, start referencing", 
      subtitle:
        "Tellery is an open source way for building collaborative data analysis all in one place.",
    },
    philosophy:
      "We believe analytic code is an asset. But most analysis, narrated in reports, decks, dashboards, notebooks are ephemeral. If we can build a tool helping people organize analysis effectively, we can free up them to focus on bigger ideas.",
  },
};

const config = {
  title: "Tellery",
  tagline: "Organize your analysis for the long term",
  url: customFields.domainUrl,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "tellery", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  customFields: customFields,
  themeConfig: {
    navbar: {
      title: "Tellery",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "GitHub",
          href: customFields.githubUrl,
        },
        {
          label: "Docs",
          href: "/docs",
        },
        {
          label: "Features",
          href: "#"
        }    
        //        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: "dark",
      links: [
        {
          title: "For Developer",
          items: [
            {
              label: "Documentation",
              href: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Support",
              href: `mailto:${customFields.contactEmail}`,
            },
            {
              label: "Slack",
              href: customFields.slackInviteUrl,
            },
            {
              label: "Twitter",
              href: customFields.twitterUrl,
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/tellery/website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/tellery/website/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
module.exports = {
  ...config,
};
