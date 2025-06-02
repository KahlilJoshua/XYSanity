// schemas/tattooPiece.js
export default {
  name: 'tattooPiece',
  title: 'Tattoo Piece',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A brief title for the tattoo piece (e.g., "Dragon Shoulder Piece")',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Unique identifier for the tattoo, generated from the title',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping and positioning
      },
      description: 'High-resolution image of the finished tattoo',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the tattoo, style, or story behind it',
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{type: 'artist'}], // We'll create an 'artist' schema next
      description: 'The artist who created this tattoo',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'Keywords for search (e.g., "traditional", "blackwork", "floral")',
    },
    {
      name: 'dateCompleted',
      title: 'Date Completed',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    },
  ],
}
