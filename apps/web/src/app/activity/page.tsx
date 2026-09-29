"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Banknote,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Download,
  FileText,
  Filter,
  Receipt,
  Search,
  Send,
  Smartphone,
  Wallet,
  X,
  Zap,
} from "lucide-react";

type ActivityType =
  | "Deposit"
  | "Withdrawal"
  | "Trade"
  | "Bill"
  | "Card";

type ActivityStatus = "Completed" | "Pending" | "Failed";

type ActivityItem = {
  id: number;
  title: string;
  description: string;
  type: ActivityType;
  status: ActivityStatus;
  amount: string;
  amountValue: number;
  currency: "NGN" | "USD";
  date: string;
  time: string;
  reference: string;
  fee: string;
  icon: "deposit" | "withdrawal" | "trade" | "bill" | "card";
};

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Wallet Deposit",
    description: "NGN wallet funding",
    type: "Deposit",
    status: "Completed",
    amount: "+₦100,000.00",
    amountValue: 100000,
    currency: "NGN",
    date: "Today",
    time: "10:42 AM",
    reference: "OLX-DEP-849201",
    fee: "₦0.00",
    icon: "deposit",
  },
  {
    id: 2,
    title: "SOL Purchase",
    description: "Bought 1.3201 SOL",
    type: "Trade",
    status: "Completed",
    amount: "-₦50,000.00",
    amountValue: -50000,
    currency: "NGN",
    date: "Today",
    time: "9:18 AM",
    reference: "OLX-TRD-738114",
    fee: "₦250.00",
    icon: "trade",
  },
  {
    id: 3,
    title: "USDT Received",
    description: "USDT wallet transfer",
    type: "Deposit",
    status: "Completed",
    amount: "+₦124,850.00",
    amountValue: 124850,
    currency: "NGN",
    date: "Yesterday",
    time: "6:18 PM",
    reference: "OLX-RCV-629481",
    fee: "₦0.00",
    icon: "deposit",
  },
  {
    id: 4,
    title: "Ikeja Electric",
    description: "Prepaid electricity payment",
    type: "Bill",
    status: "Completed",
    amount: "-₦35,000.00",
    amountValue: -35000,
    currency: "NGN",
    date: "Yesterday",
    time: "10:42 AM",
    reference: "OLX-ELC-849201",
    fee: "₦100.00",
    icon: "bill",
  },
  {
    id: 5,
    title: "Netflix",
    description: "Card payment",
    type: "Card",
    status: "Completed",
    amount: "-$15.49",
    amountValue: -15.49,
    currency: "USD",
    date: "Sep 27",
    time: "8:32 PM",
    reference: "OLX-CARD-518273",
    fee: "$0.00",
    icon: "card",
  },
  {
    id: 6,
    title: "Google Ads",
    description: "Card payment",
    type: "Card",
    status: "Pending",
    amount: "-$42.80",
    amountValue: -42.8,
    currency: "USD",
    date: "Sep 27",
    time: "2:14 PM",
    reference: "OLX-CARD-417920",
    fee: "$0.00",
    icon: "card",
  },
  {
    id: 7,
    title: "Wallet Withdrawal",
    description: "NGN bank withdrawal",
    type: "Withdrawal",
    status: "Pending",
    amount: "-₦75,000.00",
    amountValue: -75000,
    currency: "NGN",
    date: "Sep 26",
    time: "4:26 PM",
    reference: "OLX-WDL-308614",
    fee: "₦100.00",
    icon: "withdrawal",
  },
  {
    id: 8,
    title: "Airtime Top-up",
    description: "MTN airtime",
    type: "Bill",
    status: "Failed",
    amount: "-₦5,000.00",
    amountValue: -5000,
    currency: "NGN",
    date: "Sep 26",
    time: "2:31 PM",
    reference: "OLX-AIR-629481",
    fee: "₦0.00",
    icon: "bill",
  },
  {
    id: 9,
    title: "ETH Purchase",
    description: "Bought 0.0189 ETH",
    type: "Trade",
    status: "Completed",
    amount: "-₦100,000.00",
    amountValue: -100000,
    currency: "NGN",
    date: "Sep 25",
    time: "11:05 AM",
    reference: "OLX-TRD-284719",
    fee: "₦500.00",
    icon: "trade",
  },
  {
    id: 10,
    title: "Bank Withdrawal",
    description: "GTBank •••• 4821",
    type: "Withdrawal",
    status: "Completed",
    amount: "-₦150,000.00",
    amountValue: -150000,
    currency: "NGN",
    date: "Sep 24",
    time: "3:48 PM",
    reference: "OLX-WDL-193625",
    fee: "₦100.00",
    icon: "withdrawal",
  },
];

const filters: Array<"All" | ActivityType> = [
  "All",
  "Deposit",
  "Withdrawal",
  "Trade",
  "Bill",
  "Card",
];

const statusFilters: Array<"All" | ActivityStatus> = [
  "All",
  "Completed",
  "Pending",
  "Failed",
];

function ActivityIcon({
  type,
}: {
  type: ActivityItem["icon"];
}) {
  const common = "h-5 w-5";

  if (type === "deposit") {
    return <ArrowDownLeft className={common} />;
  }

  if (type === "withdrawal") {
    return <ArrowUpRight className={common} />;
  }

  if (type === "trade") {
    return <CircleDollarSign className={common} />;
  }

  if (type === "bill") {
    return <Receipt className={common} />;
  }

  return <CreditCard className={common} />;
}

function getIconContainer(type: ActivityItem["icon"]) {
  if (type === "deposit") {
    return "bg-[#eaf8f2] text-[#059669]";
  }

  if (type === "withdrawal") {
    return "bg-[#fff4f4] text-[#ef4444]";
  }

  if (type === "trade") {
    return "bg-[#eef4ff] text-[#2563eb]";
  }

  if (type === "bill") {
    return "bg-[#fff8e8] text-[#d97706]";
  }

  return "bg-[#f2efff] text-[#7c3aed]";
}

function StatusBadge({ status }: { status: ActivityStatus }) {
  const styles = {
    Completed: "bg-[#eaf8f2] text-[#059669]",
    Pending: "bg-[#fff8e8] text-[#d97706]",
    Failed: "bg-[#fff1f1] text-[#dc2626]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "Completed"
            ? "bg-[#10b981]"
            : status === "Pending"
              ? "bg-[#f59e0b]"
              : "bg-[#ef4444]"
        }`}
      />
      {status}
    </span>
  );
}

export default function ActivityPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | ActivityType>("All");
  const [activeStatus, setActiveStatus] = useState<
    "All" | ActivityStatus
  >("All");
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("Last 30 days");
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityItem | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredActivities = useMemo(() => {
    const query = search.trim().toLowerCase();

    return activities.filter((activity) => {
      const matchesType =
        activeFilter === "All" || activity.type === activeFilter;

      const matchesStatus =
        activeStatus === "All" || activity.status === activeStatus;

      const matchesSearch =
        !query ||
        activity.title.toLowerCase().includes(query) ||
        activity.description.toLowerCase().includes(query) ||
        activity.reference.toLowerCase().includes(query);

      return matchesType && matchesStatus && matchesSearch;
    });
  }, [activeFilter, activeStatus, search]);

  const totalActivity = activities.reduce(
    (sum, activity) => sum + Math.abs(activity.amountValue),
    0,
  );

  const incoming = activities
    .filter((activity) => activity.amountValue > 0)
    .reduce((sum, activity) => sum + activity.amountValue, 0);

  const outgoing = activities
    .filter((activity) => activity.amountValue < 0 && activity.currency === "NGN")
    .reduce((sum, activity) => sum + Math.abs(activity.amountValue), 0);

  const pending = activities.filter(
    (activity) => activity.status === "Pending",
  ).length;

  const copyReference = async (reference: string) => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-full bg-[#f6f9f8]">
      <div className="mx-auto max-w-[1500px] space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#059669]">
              <FileText className="h-4 w-4" />
              Account activity
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-[#071a33] sm:text-3xl">
              Activity
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-[#718096] sm:text-base">
              View and track your deposits, withdrawals, trades, bills, and
              card transactions.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-[#e5ece9] bg-white px-4 py-2.5 text-sm font-semibold text-[#071a33] shadow-sm transition hover:border-[#10b981] hover:text-[#059669]"
          >
            <Download className="h-4 w-4" />
            Export activity
          </button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#718096]">
                  Total activity
                </p>
                <p className="mt-2 text-2xl font-bold text-[#071a33]">
                  ₦{(totalActivity / 1000000).toFixed(2)}m
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                <ActivityIcon type="trade" />
              </div>
            </div>

            <p className="mt-3 text-xs text-[#718096]">
              Across recent account activity
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#718096]">Incoming</p>
                <p className="mt-2 text-2xl font-bold text-[#059669]">
                  +₦{incoming.toLocaleString("en-NG")}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                <ArrowDownLeft className="h-5 w-5" />
              </div>
            </div>

            <p className="mt-3 text-xs text-[#718096]">
              Deposits and received funds
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#718096]">Outgoing</p>
                <p className="mt-2 text-2xl font-bold text-[#071a33]">
                  ₦{outgoing.toLocaleString("en-NG")}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff4f4] text-[#ef4444]">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>

            <p className="mt-3 text-xs text-[#718096]">
              NGN withdrawals, trades and bills
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#718096]">
                  Pending
                </p>
                <p className="mt-2 text-2xl font-bold text-[#d97706]">
                  {pending}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff8e8] text-[#d97706]">
                <Clock3 className="h-5 w-5" />
              </div>
            </div>

            <p className="mt-3 text-xs text-[#718096]">
              Transactions awaiting completion
            </p>
          </div>
        </div>

        {/* Main activity card */}
        <section className="overflow-hidden rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
          <div className="border-b border-[#e5ece9] p-4 sm:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              {/* Category filters */}
              <div className="flex max-w-full gap-1 overflow-x-auto rounded-xl bg-[#f6f9f8] p-1">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      activeFilter === filter
                        ? "bg-white text-[#059669] shadow-sm"
                        : "text-[#718096] hover:text-[#071a33]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="relative min-w-0 sm:w-72">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#718096]" />

                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search activity..."
                    className="h-10 w-full rounded-xl border border-[#e5ece9] bg-white pl-10 pr-4 text-sm text-[#071a33] outline-none transition placeholder:text-[#a0aec0] focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/10"
                  />
                </div>

                {/* Period */}
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#718096]" />

                  <select
                    value={period}
                    onChange={(event) => setPeriod(event.target.value)}
                    className="h-10 w-full appearance-none rounded-xl border border-[#e5ece9] bg-white pl-10 pr-9 text-sm font-medium text-[#071a33] outline-none focus:border-[#10b981] sm:w-40"
                  >
                    <option>Today</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#718096]" />
                </div>
              </div>
            </div>

            {/* Status filters */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto">
              <Filter className="h-4 w-4 shrink-0 text-[#718096]" />

              {statusFilters.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setActiveStatus(status)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    activeStatus === status
                      ? "border-[#10b981] bg-[#eaf8f2] text-[#059669]"
                      : "border-[#e5ece9] bg-white text-[#718096] hover:border-[#10b981]/50 hover:text-[#071a33]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Activity list */}
          <div>
            {filteredActivities.length > 0 ? (
              <div className="divide-y divide-[#e5ece9]">
                {filteredActivities.map((activity) => (
                  <button
                    key={activity.id}
                    type="button"
                    onClick={() => setSelectedActivity(activity)}
                    className="group flex w-full flex-col gap-4 p-4 text-left transition hover:bg-[#f9fcfb] sm:p-5 lg:flex-row lg:items-center"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${getIconContainer(
                          activity.icon,
                        )}`}
                      >
                        <ActivityIcon type={activity.icon} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="truncate text-sm font-bold text-[#071a33]">
                            {activity.title}
                          </p>
                          <span className="rounded-md bg-[#f6f9f8] px-2 py-0.5 text-[11px] font-semibold text-[#718096]">
                            {activity.type}
                          </span>
                        </div>

                        <p className="mt-1 truncate text-xs text-[#718096]">
                          {activity.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                      <div className="text-left sm:text-right">
                        <p
                          className={`text-sm font-bold ${
                            activity.amountValue > 0
                              ? "text-[#059669]"
                              : "text-[#071a33]"
                          }`}
                        >
                          {activity.amount}
                        </p>

                        <p className="mt-1 text-xs text-[#718096]">
                          {activity.date} · {activity.time}
                        </p>
                      </div>

                      <div className="hidden min-w-24 sm:block">
                        <StatusBadge status={activity.status} />
                      </div>

                      <ChevronDown className="h-4 w-4 -rotate-90 text-[#a0aec0] transition group-hover:translate-x-1 group-hover:text-[#059669]" />
                    </div>

                    <div className="sm:hidden">
                      <StatusBadge status={activity.status} />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f9f8] text-[#718096]">
                  <Search className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-base font-bold text-[#071a33]">
                  No activity found
                </h3>

                <p className="mt-1 max-w-sm text-sm text-[#718096]">
                  Try changing your filters or searching for another
                  transaction.
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-[#e5ece9] bg-[#f9fcfb] px-4 py-3 text-xs text-[#718096] sm:px-5">
            Showing {filteredActivities.length} of {activities.length} demo
            transactions · {period}
          </div>
        </section>

        {/* Security notice */}
        <div className="flex flex-col gap-3 rounded-2xl border border-[#d9eee6] bg-[#f2fbf7] p-4 sm:flex-row sm:items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#059669] shadow-sm">
            <Wallet className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-bold text-[#071a33]">
              Your activity is protected
            </p>
            <p className="mt-0.5 text-xs leading-5 text-[#718096]">
              OLAVEXA keeps a complete transaction trail so you can review
              account movements and identify activity quickly.
            </p>
          </div>
        </div>
      </div>

      {/* Transaction detail modal */}
      {selectedActivity && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#04111f]/45 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="w-full max-w-lg rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e5ece9] p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#059669]">
                  Transaction details
                </p>
                <h2 className="mt-1 text-lg font-bold text-[#071a33]">
                  {selectedActivity.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f9f8] text-[#718096] transition hover:bg-[#eaf8f2] hover:text-[#071a33]"
                aria-label="Close transaction details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-2xl bg-[#f6f9f8] p-5 text-center">
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${getIconContainer(
                    selectedActivity.icon,
                  )}`}
                >
                  <ActivityIcon type={selectedActivity.icon} />
                </div>

                <p className="mt-3 text-2xl font-bold text-[#071a33]">
                  {selectedActivity.amount}
                </p>

                <div className="mt-2">
                  <StatusBadge status={selectedActivity.status} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-[#718096]">Category</span>
                  <span className="text-sm font-semibold text-[#071a33]">
                    {selectedActivity.type}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-[#718096]">Description</span>
                  <span className="text-right text-sm font-semibold text-[#071a33]">
                    {selectedActivity.description}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-[#718096]">Date</span>
                  <span className="text-sm font-semibold text-[#071a33]">
                    {selectedActivity.date} · {selectedActivity.time}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-[#718096]">Fee</span>
                  <span className="text-sm font-semibold text-[#071a33]">
                    {selectedActivity.fee}
                  </span>
                </div>

                <div className="rounded-xl border border-[#e5ece9] bg-white p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs text-[#718096]">
                        Transaction reference
                      </p>
                      <p className="mt-1 truncate text-sm font-semibold text-[#071a33]">
                        {selectedActivity.reference}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        copyReference(selectedActivity.reference)
                      }
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#eaf8f2] px-3 py-2 text-xs font-bold text-[#059669] transition hover:bg-[#d9f3e8]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="w-full rounded-xl bg-[#071a33] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0a2547]"
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
