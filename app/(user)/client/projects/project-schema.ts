import { z } from "zod";

export const projectSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
});

export type ProjectType = z.infer<typeof projectSchema>;
