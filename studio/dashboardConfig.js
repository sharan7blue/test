export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea30d8b5ed14701d1e5dbc6',
                  title: 'Sanity Studio',
                  name: 'test-studio-npoga9wy',
                  apiId: 'abe08e62-3098-4da2-8a8c-03f43246c5ac'
                },
                {
                  buildHookId: '5ea30d8b814120021ff5a586',
                  title: 'Portfolio Website',
                  name: 'test-web-3ks7b74o',
                  apiId: '53a5e824-af47-42d7-b12a-07fc7160818f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharan7blue/test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://test-web-3ks7b74o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
