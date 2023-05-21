import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        summary: z.string().optional(),
        category: z.string(),
        draft: z.boolean().default(false),
        createdAt: z.date(),
        updatedAt: z.date().optional(),
    }),
});

export const collections = {
    'posts': postCollection,
}