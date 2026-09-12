// Unified local preview. Deployment is intentionally not configured.
module.exports = {
  "title": "Osman Academy",
  "tagline": "Learn AI through detailed e-books and practical Udemy courses.",
  "favicon": "img/favicon-32.png",
  "url": "https://osmanacademy.ai",
  "baseUrl": "/",
  "organizationName": "osman-ai-engineer",
  "projectName": "osman-academy-unified",
  "trailingSlash": false,
  "onBrokenLinks": "throw",
  "markdown": {
    "hooks": {
      "onBrokenMarkdownLinks": "throw"
    }
  },
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ]
  },
  "headTags": [
    {
      "tagName": "link",
      "attributes": {
        "rel": "preconnect",
        "href": "https://fonts.googleapis.com"
      }
    },
    {
      "tagName": "link",
      "attributes": {
        "rel": "preconnect",
        "href": "https://fonts.gstatic.com",
        "crossorigin": "anonymous"
      }
    },
    {
      "tagName": "link",
      "attributes": {
        "rel": "stylesheet",
        "href": "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap"
      }
    },
    {
      "tagName": "link",
      "attributes": {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/img/favicon-16.png"
      }
    },
    {
      "tagName": "link",
      "attributes": {
        "rel": "apple-touch-icon",
        "href": "/img/apple-touch-icon.png"
      }
    }
  ],
  "presets": [
    [
      "classic",
      {
        "docs": false,
        "blog": {
          "path": "blog",
          "routeBasePath": "blog",
          "blogTitle": "From the learning desk",
          "blogDescription": "AI explanations, projects, and reflections from Osman Academy.",
          "onUntruncatedBlogPosts": "ignore"
        },
        "theme": {
          "customCss": ["./src/css/custom.css", "./src/css/unified.css", "./src/css/editorial.css"]
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "fundamentals",
        "path": "book-fundamentals",
        "routeBasePath": "books/fundamentals",
        "sidebarPath": "./sidebars-fundamentals.js",
        "showLastUpdateTime": false
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "associate",
        "path": "book-associate",
        "routeBasePath": "books/associate",
        "sidebarPath": "./sidebars-associate.js",
        "showLastUpdateTime": false
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "developer",
        "path": "book-developer",
        "routeBasePath": "books/developer",
        "sidebarPath": "./sidebars-developer.js",
        "showLastUpdateTime": false
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "architect",
        "path": "book-architect",
        "routeBasePath": "books/architect",
        "sidebarPath": "./sidebars-architect.js",
        "showLastUpdateTime": false
      }
    ],
    [
      "@easyops-cn/docusaurus-search-local",
      {
        "hashed": true,
        "indexBlog": true,
        "docsDir": [
          "book-fundamentals",
          "book-associate",
          "book-developer",
          "book-architect"
        ],
        "docsRouteBasePath": [
          "/books/fundamentals",
          "/books/associate",
          "/books/developer",
          "/books/architect"
        ],
        "docsPluginIdForPreferredVersion": "fundamentals",
        "highlightSearchTermsOnTargetPage": true,
        "indexPages": true
      }
    ]
  ],
  "themeConfig": {
    "image": "img/oa-logo-social.png",
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "title": "Osman Academy",
      "logo": {
        "alt": "Osman Academy",
        "src": "img/oa-logo-trimmed.png",
        "href": "/"
      },
      "items": [
        {
          "to": "/",
          "label": "Home",
          "position": "right",
          "activeBaseRegex": "^/$"
        },
        {
          "to": "/about",
          "label": "About Us",
          "position": "right"
        },
        {
          "to": "/programs",
          "label": "Learning Programs",
          "position": "right"
        },
        {
          "to": "/books",
          "label": "E-Books",
          "position": "right"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Explore",
          "items": [
            {
              "label": "About Us",
              "to": "/about"
            },
            {
              "label": "How We Teach",
              "to": "/about#how-we-teach"
            },
            {
              "label": "Learning Programs",
              "to": "/programs"
            },
            {
              "label": "E-Books",
              "to": "/books"
            },
            {
              "label": "Blog",
              "to": "/blog"
            }
          ]
        },
        {
          "title": "Learning Programs",
          "items": [
            {
              "label": "AI Fundamentals",
              "to": "/programs/ai-fundamentals"
            },
            {
              "label": "AI Associate",
              "to": "/programs/ai-associate"
            },
            {
              "label": "AI Developer",
              "to": "/programs/ai-developer"
            },
            {
              "label": "AI Architect",
              "to": "/programs/ai-architect"
            }
          ]
        },
        {
          "title": "Information",
          "items": [
            {
              "label": "Privacy Policy",
              "to": "/privacy"
            },
            {
              "label": "Terms & Conditions",
              "to": "/terms"
            },
            {
              "label": "Disclaimer",
              "to": "/disclaimer"
            },
            {
              "label": "Cancellations & Refunds",
              "to": "/cancellations-and-refunds"
            },
            {
              "label": "AI Diligence Statement",
              "to": "/ai-diligence-statement"
            }
          ]
        }
      ],
      "copyright": "© 2026 Osman Academy. Independent educational material. Not affiliated with or endorsed by Anthropic or any course, certification body, or AI vendor."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    }
  }
};


module.exports.onBrokenAnchors = 'throw';
module.exports.plugins.slice(0, 4).forEach(([, options]) => {
  options.sidebarItemsGenerator = async ({defaultSidebarItemsGenerator, ...args}) => {
    const items = await defaultSidebarItemsGenerator({...args, docs: args.docs.filter(doc => doc.id !== 'changelog')});
    return [...items, {type: 'link', label: 'Changelog', href: '/' + options.routeBasePath + '/changelog'}];
  };
});

// Use an in-memory cache for portable copies of this local project.
module.exports.plugins.push(function localBuildCache() {
  return {name: 'local-build-cache', configureWebpack() {return {cache: true};}};
});

