module.exports = {
  siteMetadata: {
    title: `HyeonJun Hwang's Portfolio`,
    siteUrl: `https://profile.perpling.com`,
    description: `안녕하세요. %TOPICS% 입니다.`,
    topics: [
      `황현준`,
      `HyeonJun Hwang`,
      `서비스 기획자`,
      `포트폴리오`,
      `기획 포트폴리오`
    ],
    menu: [
      {
        name: 'Portfolio',
        path: '/'
      },
      {
        name: 'About',
        path: '/about'
      },
    ],
    footerMenu: [
      {
        name: '',
        path: '/RSS.xml'
      },
      {
        name: '',
        path: '/sitemap.xml'
      }
    ],
    search: true,
    author: {
      name: `황현준`,
      description: `안녕하세요 IT 서비스 기획자 <strong>황현준</strong>입니다. 서비스 기획자로서 다양한 문제 해결 과정을 포트폴리오에 담았습니다.`
      ,
      social: {
        facebook: `https://www.facebook.com/hyeonjun.hwang.3`,
        twitter: ``,
        linkedin: `https://www.linkedin.com/in/hyeonjun-hwang-620151193`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/hyeonjun-hwang/perpling`,
        twitch: ``
      }
    }
  },
  plugins: [

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-ND5X5L5",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: "u36f2lo0kChHWljWfl9X5Q",
        gtmPreview: "env-5",
        dataLayerName: "dataLayer",
      }
    },

    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112409357-1",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themeAssets`,
        path: `${__dirname}/content/assets/images`
      }
    },
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        contentPath: `content`,
        manifest: {
          name: `Perpling`,
          short_name: `Perpling`,
          start_url: `/`,
          background_color: `#3a7bd5`,
          theme_color: `#3a7bd5`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/idea.png`
        },
        loadDefaultPages: true,
        postsPerPage: 20
      }
    }
  ]
};
