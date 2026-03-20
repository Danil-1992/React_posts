import { z } from "zod";

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

export type postType = z.infer<typeof postSchema>;

export const postArraySchema = z.array(postSchema);

export type postArrayType = z.infer<typeof postArraySchema>;
