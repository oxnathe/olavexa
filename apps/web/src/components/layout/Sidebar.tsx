"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BarChart3,
  Bell,
  CreditCard,
  Gift,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  Settings,
  ShieldCheck,
  Wallet,
  UserRound,
  X,
  Zap,
} from "lucide-react";

type SidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

const primaryNavigation = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Trade",
    href: "/trade",
    icon: Zap,
  },
  {
    label: "Markets",
    href: "/markets",
    icon: BarChart3,
  },
  {
    label: "Wallet",
    href: "/wallet",
    icon: Wallet,
  UserRound,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: Activity,
  },
];

const secondaryNavigation = [
  {
    label: "Card",
    href: "/card",
    icon: CreditCard,
  },
  {
    label: "Bills",
    href: "/bills",
    icon: Landmark,
  },
  {
    label: "Activity",
    href: "/activity",
    icon: Bell,
  },
  {
    label: "Rewards",
    href: "/rewards",
    icon: Gift,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
];

const accountNavigation = [
  {
    label: "Account",
    href: "/account",
    icon: UserRound,
  },
  {
    label: "Security",
    href: "/security",
    icon: ShieldCheck,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    label: "Support",
    href: "/support",
    icon: LifeBuoy,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="sidebar-backdrop"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <Link href="/" className="brand-link" onClick={onClose}>
            <span className="brand-mark">
              <span />
              <span />
              <span />
            </span>

            <span className="brand-name">OLAVEXA</span>
          </Link>

          <button
            type="button"
            className="sidebar-close"
            aria-label="Close navigation"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-scroll">
          <nav className="sidebar-nav">
            <NavSection
              title="Overview"
              items={primaryNavigation}
              isActive={isActive}
              onNavigate={onClose}
            />

            <NavSection
              title="Services"
              items={secondaryNavigation}
              isActive={isActive}
              onNavigate={onClose}
            />

            <NavSection
              title="Account"
              items={accountNavigation}
              isActive={isActive}
              onNavigate={onClose}
            />
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="security-card">
            <div className="security-icon">
              <ShieldCheck size={17} />
            </div>

            <div>
              <p>Security status</p>
              <span>Protected</span>
            </div>

            <span className="status-dot" />
          </div>

          <div className="sidebar-user">
            <div className="user-avatar">WU</div>

            <div className="sidebar-user-info">
              <strong>Wilson</strong>
              <span>Personal account</span>
            </div>

            <Menu size={17} className="sidebar-user-menu" />
          </div>
        </div>
      </aside>
    </>
  );
}

type NavigationItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>;
};

function NavSection({
  title,
  items,
  isActive,
  onNavigate,
}: {
  title: string;
  items: NavigationItem[];
  isActive: (href: string) => boolean;
  onNavigate: () => void;
}) {
  return (
    <div className="nav-section">
      <p className="nav-section-title">{title}</p>

      <div className="nav-items">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`nav-item ${active ? "nav-item-active" : ""}`}
            >
              <Icon size={19} strokeWidth={active ? 2.2 : 1.9} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}





