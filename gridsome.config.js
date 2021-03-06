// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'aboelkassem',
  siteDescription: 'Mohamed Abdelrahman (@aboelkassem) is a CS student and software engineer who loves the tech industry, problem solving, and open source contributions.',
  siteUrl: 'https://www.aboelkassem.me',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'aboelkassem',
          feed_url: 'https://www.aboelkassem.me//rss.xml',
          site_url: 'https://www.aboelkassem.me/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://www.aboelkassem.me/' + node.path,
          author: 'aboelkassem',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-153855958-2'
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/favicon.png",
        name: "aboelkassem Portfolio",
        short_name: "aboelkassem",
        theme_color: "#FFFFFF",
        lang: "en",
      },
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-57J8VXW',
        enabled: true,
        debug: true
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: 'https://www.aboelkassem.me',
        sitemap: 'https://www.aboelkassem.me/sitemap.xml',
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /articles/"
          }
        ]
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  icon: '/favicon.ico'
}
