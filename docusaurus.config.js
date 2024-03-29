const customFields = {
  githubUrl: 'https://github.com/tellery/tellery',
  twitterUrl: 'https://twitter.com/TelleryHQ',
  contactEmail: 'contact@tellery.io',
  domainUrl: 'https://tellery.io',
  copyright: `Copyright © ${new Date().getFullYear()} Tellery, Inc.`,
  discordInviteUrl: 'https://discord.gg/gAxqpvQUZV',
  copy: {
    hero: {
      title: 'Analyze, report and organize\nall in one place',
      subtitle:
        'Tellery lets you build metrics using SQL and bring them to your team. As easy as using a document. As powerful as a data modeling tool.'
    },
    philosophy:
      'We believe that analytic code is an asset. But most analyses, narrated in reports, decks, dashboards, notebooks are ephemeral. If we can build a tool helping people organize analysis effectively, we can free up them to focus on bigger ideas.'
  }
}

const config = {
  title: 'Tellery',
  tagline: 'Organize your analysis for the long term',
  url: customFields.domainUrl,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mask-icon.svg',
  organizationName: 'tellery', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  customFields: customFields,
  themeConfig: {
    gtag: {
      trackingID: 'G-MEQXXGM2HZ'
    },
    navbar: {
      title: 'Tellery',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon.svg'
      },
      items: [
        {
          label: 'GitHub',
          href: customFields.githubUrl
        },
        {
          label: 'Docs',
          href: '/docs'
        },
        {
          label: 'Features',
          href: '#features'
        }
        //        {to: '/blog', label: 'Blog', position: 'left'},
      ]
    },
    footer: {
      // copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'For Developer',
          items: [
            {
              label: 'Documentation',
              href: '/docs'
            },
            {
              label: 'Changelog',
              href: '/docs/changelog'
            },
            {
              label: 'GitHub',
              href: customFields.githubUrl
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support',
              href: `mailto:${customFields.contactEmail}`
            },
            {
              label: 'Discord',
              href: customFields.discordInviteUrl
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl
            }
          ]
        }
      ]
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
      additionalLanguages: ['bash']
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/tellery/website/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/tellery/website/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
module.exports = {
  ...config
}
