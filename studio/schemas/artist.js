export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of artist or group',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
