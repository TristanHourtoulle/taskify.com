"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { createProjectAction } from "./project-action";
import { ProjectType, projectSchema } from "./project-schema";

export type CreateCardProps = {
  defaultValues?: ProjectType;
};

export const CreateCard = (props: CreateCardProps) => {
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const form = useZodForm({
    schema: projectSchema,
    defaultValues: props.defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (values: ProjectType) => {
      const { data, serverError } = await createProjectAction(values);

      if (serverError) {
        toast.error(serverError);
        return;
      }
      toast.success("Project created");
    },
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Create</Button>
      </PopoverTrigger>

      <PopoverContent className="w-[320] mr-11">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Create a project</h4>
            <p className="text-sm text-muted-foreground">
              Set all info about this new project.<br></br>You can modify it
              later.
            </p>
          </div>
          <Form
            form={form}
            onSubmit={async (values) => {
              await mutation.mutateAsync(values);
            }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Taskify" {...field} />
                  </FormControl>
                  <FormDescription>The name of your project</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button>Create project</Button>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  );
};
