// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'aboelkassem',
  siteDescription: 'Mohamed Abdelrahman (@aboelkassem) is a computer science student and passionate software engineer based in Egypt who love the tech industry, problem solving, and open source contributions. He specializes in developing high-quality web applications',
  siteUrl: 'https://www.aboelkassem.com/',
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
          feed_url: 'https://www.aboelkassem.com//rss.xml',
          site_url: 'https://www.aboelkassem.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://www.aboelkassem.com/' + node.path,
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
