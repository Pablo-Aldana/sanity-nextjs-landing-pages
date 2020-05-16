export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ebf9dc5ff64589a7719554f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6x3pzo8t',
                  apiId: 'fad65617-eeda-4411-af1c-22fa00691ce6'
                },
                {
                  buildHookId: '5ebf9dc6ff6458711e195820',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kgj5kqru',
                  apiId: '179464de-dec4-46de-a8a6-d35874609652'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pablo-Aldana/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kgj5kqru.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
