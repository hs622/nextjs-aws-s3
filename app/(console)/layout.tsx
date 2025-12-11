import { Metadata } from "next";
import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import ConsoleHeader from "@/components/console-header";

export const metadata: Metadata = {
  title: "Console",
  description: "Welcome to file system.",
};

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <ConsoleHeader />
        <div className="px-2">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
