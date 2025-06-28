export default {
  name: 'siteImages', // Programmatic name for the document type
  title: 'Site Images', // User-friendly title displayed in Sanity Studio
  type: 'document', // This defines it as a document type

  // Define the fields within this document
  fields: [
    {
      name: 'image1',
      title: 'Global Image 1',
      type: 'image', // Sanity's image type
      description: 'cool pic',
      options: {
        hotspot: true, // Enables hotspot for cropping in the studio
      },
    },
    {
      name: 'image2',
      title: 'Global Image 2',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image3',
      title: 'Global Image 3',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image4',
      title: 'Global Image 4',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image5',
      title: 'Global Image 5',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image6',
      title: 'Global Image 6',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image7',
      title: 'Global Image 7',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image8',
      title: 'Global Image 8',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image9',
      title: 'Global Image 9',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image10',
      title: 'Global Image 10',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image11',
      title: 'Global Image 11',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image12',
      title: 'Global Image 12',
      type: 'image',
      description: 'cool pic',
      options: {
        hotspot: true,
      },
    },
  ],
  // Optional: Add a preview configuration for better studio experience
  preview: {
    select: {
      media: 'image1', // Show the first image as a preview
    },
    prepare({media}) {
      return {
        title: 'Site Global Images',
        subtitle: 'Collection of site-wide images',
        media: media,
      }
    },
  },
}
