"use client";

import {
  BadgeQuestionMark,
  BookOpen,
  ChartNoAxesGantt,
  ClipboardList,
  Folder,
  Frame,
  GalleryVerticalEnd,
  MailQuestionMark,
  Map,
  Megaphone,
  PieChart,
  Settings2,
  UsersRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ComponentProps } from "react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/console",
      icon: GalleryVerticalEnd,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: UsersRound,
    },
    {
      title: "Products",
      url: "/products",
      icon: ChartNoAxesGantt,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ClipboardList,
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: Megaphone,
    },
    {
      title: "Inquiries",
      url: "/inquiries",
      icon: MailQuestionMark,
    },
    {
      title: "File System",
      url: "/file-system",
      icon: Folder,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <Suspense fallback={<div>loading...</div>}> */}
        <NavUser />
        {/* </Suspense> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

