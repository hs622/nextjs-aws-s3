"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const ConsoleHeader = () => {
  const pathname = usePathname();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Suspense fallback={<Loader2 className="h-3 w-3 animate-spin" />}>
          <Breadcrumb>
            <BreadcrumbList>
              {pathname.split("/").map((segment, index) => (
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink
                    href={`http://localhost:3000${pathname
                      .split("/")
                      .slice(0, index + 1)
                      .join("/")}`}
                  >
                    {segment
                      ? segment.at(0)?.toUpperCase() + segment.slice(1)
                      : ""}
                  </BreadcrumbLink>
                  {index != 0 && index < pathname.split("/").length - 1 && (
                    <BreadcrumbSeparator className="hidden md:block" />
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </Suspense>
      </div>
    </header>
  );
};

export default ConsoleHeader;

