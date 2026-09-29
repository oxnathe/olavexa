"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  CheckCheck,
  CreditCard,
  Info,
  Lock,
  Search,
  ShieldCheck,
  Trash2,
  X,
} from "lucide-react";

type NotificationType =
  | "transaction"
  | "security"
  | "card"
  | "market"
  | "system";

type Notification = {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  date: string;
  read: boolean;
  important?: boolean;
  reference?: string;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "transaction",
    title: "Wallet deposit completed",
    description:
      "Your NGN wallet was credited with \u20A6100,000.00 successfully.",
    time: "10:42 AM",
    date: "Today",
    read: false,
    reference: "OLX-TXN-849201",
  },
  {
    id: 2,
    type: "security",
    title: "New device sign-in",
    description:
      "A new Chrome session was detected on Windows in your account.",
    time: "9:18 AM",
    date: "Today",
    read: false,
    important: true,
    reference: "OLX-SEC-48291",
  },
  {
    id: 3,
    type: "card",
    title: "Card payment completed",
    description:
      "Your OLAVEXA Card was charged $15.49 for Netflix.",
    time: "8:31 AM",
    date: "Today",
    read: true,
    reference: "OLX-CARD-72841",
  },
  {
    id: 4,
    type: "market",
    title: "SOL price alert",
    description:
      "SOL has moved up 4.68% in the last 24 hours.",
    time: "Yesterday",
    date: "Sep 28, 2026",
    read: false,
  },
  {
    id: 5,
    type: "transaction",
    title: "USDT received",
    description:
      "You received 89.30 USDT in your OLAVEXA wallet.",
    time: "6:18 PM",
    date: "Sep 28, 2026",
    read: true,
    reference: "OLX-TXN-738114",
  },
  {
    id: 6,
    type: "security",
    title: "Two-factor authentication enabled",
    description:
      "Two-factor authentication is now active on your account.",
    time: "3:42 PM",
    date: "Sep 27, 2026",
    read: true,
    important: true,
    reference: "OLX-SEC-629481",
  },
  {
    id: 7,
    type: "card",
    title: "Card payment pending",
    description:
      "Your $42.80 Google Ads payment is still being processed.",
    time: "9:05 AM",
    date: "Sep 26, 2026",
    read: true,
    reference: "OLX-CARD-518273",
  },
  {
    id: 8,
    type: "system",
    title: "Welcome to OLAVEXA",
    description:
      "Your account is ready. Explore your wallet, markets, trading and card features.",
    time: "11:20 AM",
    date: "Sep 24, 2026",
    read: true,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Unread", value: "unread" },
  { label: "Transactions", value: "transaction" },
  { label: "Security", value: "security" },
  { label: "Card", value: "card" },
  { label: "Markets", value: "market" },
];

function getNotificationIcon(type: NotificationType) {
  switch (type) {
    case "transaction":
      return ArrowDownLeft;
    case "security":
      return ShieldCheck;
    case "card":
      return CreditCard;
    case "market":
      return ArrowUpRight;
    default:
      return Info;
  }
}

function getNotificationIconClasses(type: NotificationType) {
  switch (type) {
    case "transaction":
      return "bg-emerald-50 text-emerald-600";
    case "security":
      return "bg-amber-50 text-amber-600";
    case "card":
      return "bg-blue-50 text-blue-600";
    case "market":
      return "bg-violet-50 text-violet-600";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null);

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  const filteredNotifications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notifications.filter((notification) => {
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "unread"
            ? !notification.read
            : notification.type === filter;

      const matchesSearch =
        !query ||
        notification.title.toLowerCase().includes(query) ||
        notification.description.toLowerCase().includes(query) ||
        notification.reference?.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [filter, notifications, search]);

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id),
    );

    setSelectedNotification(null);
  };

  const openNotification = (notification: Notification) => {
    markAsRead(notification.id);

    setSelectedNotification({
      ...notification,
      read: true,
    });
  };

  return (
    <div className="min-h-full space-y-6">
      <section className="rounded-3xl bg-[#071a33] p-6 text-white shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-emerald-300">
              <Bell size={18} />
              <span className="text-sm font-semibold">
                OLAVEXA Notifications
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Stay up to date
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Important updates about your account, transactions, security,
              card and market activity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-xs text-slate-400">Unread</p>
              <p className="mt-1 text-2xl font-bold">{unreadCount}</p>
            </div>

            <div className="hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 sm:block">
              <CheckCheck size={20} className="text-emerald-300" />
              <p className="mt-2 text-xs text-slate-300">Account alerts</p>
              <p className="text-sm font-semibold text-white">Active</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search notifications..."
              className="w-full rounded-2xl border border-[#e5ece9] bg-[#f8fbfa] py-3 pl-11 pr-4 text-sm text-[#071a33] outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          <button
            type="button"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#e5ece9] px-4 py-3 text-sm font-semibold text-[#071a33] transition hover:border-emerald-300 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <CheckCheck size={17} />
            Mark all as read
          </button>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {filters.map((item) => {
            const active = filter === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[#071a33] text-white"
                    : "bg-[#f3f7f5] text-[#718096] hover:bg-emerald-50 hover:text-[#071a33]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#dce7e3] bg-white px-6 py-14 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f7f5] text-[#718096]">
              <Bell size={24} />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-[#071a33]">
              No notifications found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-[#718096]">
              Try another search or notification category.
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = getNotificationIcon(notification.type);

            return (
              <button
                key={notification.id}
                type="button"
                onClick={() => openNotification(notification)}
                className={`group flex w-full items-start gap-4 rounded-3xl border p-4 text-left transition sm:p-5 ${
                  notification.read
                    ? "border-[#e5ece9] bg-white hover:border-emerald-200 hover:shadow-sm"
                    : "border-emerald-100 bg-emerald-50/40 shadow-sm hover:border-emerald-200"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${getNotificationIconClasses(
                    notification.type,
                  )}`}
                >
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <h2
                        className={`text-sm sm:text-base ${
                          notification.read
                            ? "font-semibold text-[#071a33]"
                            : "font-bold text-[#071a33]"
                        }`}
                      >
                        {notification.title}
                      </h2>

                      {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      )}
                    </div>

                    <span className="shrink-0 text-xs text-[#718096]">
                      {notification.date} · {notification.time}
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-[#718096]">
                    {notification.description}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#f3f7f5] px-2.5 py-1 text-[11px] font-semibold capitalize text-[#718096]">
                      {notification.type}
                    </span>

                    {notification.important && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
                        <AlertTriangle size={12} />
                        Important
                      </span>
                    )}
                  </div>
                </div>

                <div className="hidden pt-1 text-[#718096] transition group-hover:text-[#071a33] sm:block">
                  <ArrowUpRight size={18} />
                </div>
              </button>
            );
          })
        )}
      </section>

      <section className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Lock size={18} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#071a33]">
              Notification security
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#718096]">
              OLAVEXA will never ask you to reveal your password, transaction
              PIN or one-time authentication code through a notification.
            </p>
          </div>
        </div>
      </section>

      {selectedNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04111f]/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${getNotificationIconClasses(
                    selectedNotification.type,
                  )}`}
                >
                  {(() => {
                    const Icon = getNotificationIcon(
                      selectedNotification.type,
                    );

                    return <Icon size={20} />;
                  })()}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    {selectedNotification.type}
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#071a33]">
                    {selectedNotification.title}
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedNotification(null)}
                className="rounded-xl p-2 text-[#718096] transition hover:bg-[#f3f7f5] hover:text-[#071a33]"
                aria-label="Close notification"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mt-6 rounded-2xl bg-[#f8fbfa] p-4">
              <p className="text-sm leading-7 text-[#4a5568]">
                {selectedNotification.description}
              </p>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-[#718096]">Date</span>
                <span className="font-medium text-[#071a33]">
                  {selectedNotification.date}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-[#718096]">Time</span>
                <span className="font-medium text-[#071a33]">
                  {selectedNotification.time}
                </span>
              </div>

              {selectedNotification.reference && (
                <div className="flex justify-between gap-4">
                  <span className="text-[#718096]">Reference</span>
                  <span className="font-medium text-[#071a33]">
                    {selectedNotification.reference}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() =>
                  deleteNotification(selectedNotification.id)
                }
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-red-100 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <Trash2 size={17} />
                Delete
              </button>

              <button
                type="button"
                onClick={() => setSelectedNotification(null)}
                className="flex-1 rounded-2xl bg-[#071a33] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2748]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
