"use client";

import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const ConsoleLogoutBtn = () => {
  return (
    <DropdownMenuItem asChild>
      <LogOut />
      Log out
    </DropdownMenuItem>
  );
};

export default ConsoleLogoutBtn;
