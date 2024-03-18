"use server";

import { prisma } from "@/prisma";
import { userAction } from "@/safe-action";
import { projectSchema } from "./project-schema";

export const createProjectAction = userAction(
  projectSchema,
  async (input, context) => {
    const product = await prisma.project.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return product;
  }
);
