export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'helloText',
      title: 'Hello Text',
      type: 'string',
      description: 'The text to display as a greeting',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short descriptive phrase for the site',
    },
  ],
}
