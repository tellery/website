const customFields = {
  githubUrl: 'https://github.com/tellery/tellery',
  twitterUrl: 'https://twitter.com/TelleryHQ',
  contactEmail: 'contact@tellery.io',
  domainUrl: 'https://tellery.io',
  copyright: `Copyright © ${new Date().getFullYear()} Tellery, Inc.`,
  hero: {
    subtitle: 'Tellery is an open source way for building collaborative data analysis all in one place.',
  }
}

const config = {
  title: 'Tellery',
  tagline: 'Organize your analysis for the long term',
  url: customFields.domainUrl,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tellery', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  customFields: customFields,
  themeConfig: {
    navbar: {
      title: 'Tellery',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: customFields.githubUrl,
          label: 'GitHub',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
//        {to: '/blog', label: 'Blog', position: 'left'},

      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [

        {
          title: 'For Developer',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Us',
              href: `mailto:${customFields.contactEmail}`,
            },
          ],
        },

      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tellery/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tellery/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
module.exports = {
  ...config
}