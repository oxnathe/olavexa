"use client";

import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  Settings2,
} from "lucide-react";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open navigation"
          onClick={onMenuClick}
        >
          <Menu size={21} />
        </button>

        <div className="topbar-search">
          <Search size={18} />

          <input
            type="search"
            placeholder="Search assets, wallets, transactions..."
            aria-label="Search"
          />

          <span className="search-shortcut">? K</span>
        </div>
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="topbar-icon-button"
          aria-label="Settings"
        >
          <Settings2 size={19} />
        </button>

        <button
          type="button"
          className="topbar-icon-button notification-button"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <div className="topbar-divider" />

        <button type="button" className="profile-button">
          <span className="profile-avatar">WU</span>

          <span className="profile-copy">
            <strong>Wilson</strong>
            <span>Personal</span>
          </span>

          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}
