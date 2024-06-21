import { DashboardConfig } from "types"

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
      title: "Upload",
      href: "/dashboard/upload",
      icon: "upload",
      special: false,
    },
    // {
    //   title: "Panel",
    //   href: "/dashboard",
    //   icon: "post",
    // },
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
}
