import { SideNavItem } from "@/types/SideNavItem";
import { CalendarClock, Clipboard, Database, UserRoundCog } from "lucide-react";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: Clipboard,
    },
    {
        title: "Equipe",
        path: "/team-management",
        icon: UserRoundCog,
    },
    {
        title: "Dados do dia",
        path: "/daily-data",
        icon: CalendarClock,
    },
    {
        title: "Banco de horas",
        path: "/time-bank",
        icon: Database,
    }
]