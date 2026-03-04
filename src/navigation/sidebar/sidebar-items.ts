import {
  Activity,
  Box,
  Cpu,
  Fingerprint,
  Globe,
  LayoutDashboard,
  Lock,
  type LucideIcon,
  Network,
  Rocket,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Command Center",
    items: [
      {
        title: "System Overview",
        url: "/dashboard/finance", // Reusing the high-performance finance layout we just edited
        icon: LayoutDashboard,
      },
      {
        title: "Network Telemetry",
        url: "/dashboard/crm", // Reusing the CRM charts we re-engineered for traffic
        icon: Activity,
      },
      {
        title: "Global Edge Nodes",
        url: "/dashboard/coming-soon",
        icon: Globe,
        comingSoon: true,
      },
    ],
  },
  {
    id: 2,
    label: "Architecture",
    items: [
      {
        title: "Infrastructure",
        url: "/dashboard/coming-soon",
        icon: Cpu,
        subItems: [
          { title: "Sovereign Stack", url: "/dashboard/coming-soon" },
          { title: "Edge Routing", url: "/dashboard/coming-soon" },
          { title: "Redundancy Logs", url: "/dashboard/coming-soon" },
        ],
      },
      {
        title: "Authority Systems",
        url: "/dashboard/coming-soon",
        icon: ShieldCheck,
        subItems: [
          { title: "SEO Entity Map", url: "/dashboard/coming-soon" },
          { title: "Semantic Core", url: "/dashboard/coming-soon" },
        ],
      },
      {
        title: "AI Ecosystems",
        url: "/dashboard/coming-soon",
        icon: Zap,
        isNew: true,
      },
    ],
  },
  {
    id: 3,
    label: "Deployment",
    items: [
      {
        title: "Initiate Build",
        url: "/dashboard/coming-soon", // This is where we will put the Resend Form
        icon: Rocket,
        isNew: true,
      },
      {
        title: "System Terminal",
        url: "/dashboard/coming-soon",
        icon: Terminal,
      },
      {
        title: "Operator Access",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "Secure Login", url: "/auth/v2/login", newTab: true },
          { title: "Request Keys", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
];
