export default {
  name: 'figure',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
      preview: {
        select: {
          title: 'caption',
        },
        prepare({ title }) {
          return {
            title: title ?? ' ',
            subtitle: 'Image',
          }
        },
      },
    },
  ],
}
