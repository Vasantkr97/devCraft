"use client";

import { ClerkProvider } from "@clerk/nextjs";


function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
        {children}
    </ClerkProvider>
  );
}

export default ConvexClientProvider;