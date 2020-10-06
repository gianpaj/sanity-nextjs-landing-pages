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
                  buildHookId: '5f7ca51adca526008819ddd8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zun3piq7',
                  apiId: '30c8ce35-a3b8-4608-a975-990bb41f1fb2'
                },
                {
                  buildHookId: '5f7ca51ab94be001566eeee9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-35hpiqec',
                  apiId: '21624ef7-4545-4536-83dd-f6dcc3e2218e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gianpaj/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-35hpiqec.netlify.app', category: 'apps'}
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
