"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-center" expand={false} />
        {props.children}
      </QueryClientProvider>
    </SessionProvider>
  );
};
