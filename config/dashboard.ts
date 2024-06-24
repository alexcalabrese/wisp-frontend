import { DashboardConfig } from "types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Study",
      href: "/dashboard/study",
      icon: "bookOpenText",
      special: true,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "gauge",
      special: false,
    },
    {
      title: "Collections",
      href: "/dashboard/collections",
      icon: "libraryBig",
      special: false,
    },
    {
      title: "Upload",
      href: "/dashboard/upload",
      icon: "upload",
      special: false,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
      special: false,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
      special: false,
    },
  ],
};
