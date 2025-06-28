export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'slogan',
      title: 'Website Slogan',
      type: 'string',
      description: 'A short, catchy phrase or tagline for the entire website.',
    },
    {
      name: 'aboutText1',
      title: 'About Section - Paragraph 1',
      type: 'text', // Using 'text' for potentially longer paragraphs
      description: 'The first paragraph of text for the "About Us" section.',
    },
    {
      name: 'aboutText2',
      title: 'About Section - Paragraph 2',
      type: 'text', // Using 'text' for potentially longer paragraphs
      description: 'The second paragraph of text for the "About Us" section.',
    },
    {
      name: 'contact1',
      title: 'Contact Info - Item 1',
      type: 'string',
      description: 'First piece of contact information (e.g., Phone Number, Email).',
    },
    {
      name: 'contact2',
      title: 'Contact Info - Item 2',
      type: 'string',
      description: 'Second piece of contact information (e.g., Address, Office Hours).',
    },
    {
      name: 'contact3',
      title: 'Contact Info - Item 3',
      type: 'string',
      description:
        'Third piece of contact information (e.g., Social Media Link, Appointment Link).',
    },
  ],
}
