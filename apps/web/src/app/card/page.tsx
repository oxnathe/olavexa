"use client";

import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  CreditCard,
  Eye,
  EyeOff,
  Globe2,
  Lock,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  Snowflake,
  Sparkles,
  WalletCards,
} from "lucide-react";

const cardTransactions = [
  {
    merchant: "Netflix",
    category: "Entertainment",
    date: "Today, 10:42 AM",
    amount: "-$15.49",
    status: "Completed",
  },
  {
    merchant: "AWS",
    category: "Cloud services",
    date: "Yesterday, 4:18 PM",
    amount: "-$28.64",
    status: "Completed",
  },
  {
    merchant: "Spotify",
    category: "Entertainment",
    date: "Sep 26, 9:12 AM",
    amount: "-$10.99",
    status: "Completed",
  },
  {
    merchant: "Google Ads",
    category: "Advertising",
    date: "Sep 25, 2:31 PM",
    amount: "-$42.80",
    status: "Pending",
  },
];

const controls = [
  {
    title: "Online payments",
    description: "Allow purchases on websites and apps",
    enabled: true,
  },
  {
    title: "International payments",
    description: "Use your card with international merchants",
    enabled: true,
  },
  {
    title: "Contactless payments",
    description: "Allow supported tap-to-pay transactions",
    enabled: true,
  },
];

export default function CardPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [enabledControls, setEnabledControls] = useState(
    controls.map((control) => control.enabled),
  );

  const cardNumber = "5294 8012 6734 2186";

  const copyCardNumber = async () => {
    try {
      await navigator.clipboard.writeText(cardNumber.replaceAll(" ", ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const toggleControl = (index: number) => {
    setEnabledControls((current) =>
      current.map((value, itemIndex) =>
        itemIndex === index ? !value : value,
      ),
    );
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#10b981]">
            <WalletCards className="h-4 w-4" />
            OLAVEXA Card
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#071a33] sm:text-3xl">
            Your virtual card
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#718096] sm:text-base">
            Spend online with a secure virtual USD card connected to your
            OLAVEXA wallet.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#071a33] px-5 text-sm font-semibold text-white transition hover:bg-[#102b4d]"
        >
          <Plus className="h-4 w-4" />
          Add funds
        </button>
      </div>

      {/* Main card + balance */}
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
        {/* Virtual card */}
        <section className="relative min-h-[340px] overflow-hidden rounded-3xl bg-[#071a33] p-6 text-white shadow-sm sm:p-8">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#10b981]/20 blur-3xl" />
          <div className="absolute -bottom-28 left-20 h-72 w-72 rounded-full bg-[#10b981]/10 blur-3xl" />

          <div className="relative flex h-full min-h-[292px] flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <Sparkles className="h-4 w-4 text-[#10b981]" />
                  OLAVEXA
                </div>
                <p className="mt-1 text-xs text-white/55">Virtual USD Card</p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium">
                <span
                  className={`h-2 w-2 rounded-full ${
                    frozen ? "bg-[#f59e0b]" : "bg-[#10b981]"
                  }`}
                />
                {frozen ? "Frozen" : "Active"}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                  <CreditCard className="h-6 w-6 text-white/80" />
                </div>

                <div className="h-8 w-11 rounded-md border border-white/20 bg-gradient-to-br from-white/30 to-white/5" />
              </div>

              <div className="flex items-center gap-3 text-lg font-medium tracking-[0.18em] sm:text-xl">
                <span>
                  {showDetails ? "5294" : "••••"}
                </span>
                <span>
                  {showDetails ? "8012" : "••••"}
                </span>
                <span>
                  {showDetails ? "6734" : "••••"}
                </span>
                <span>
                  {showDetails ? "2186" : "••••"}
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Cardholder
                  </p>
                  <p className="mt-1 text-sm font-medium">OLAVEXA USER</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Expires
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    {showDetails ? "09/30" : "••/••"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                    CVV
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    {showDetails ? "284" : "•••"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-white/45">VIRTUAL • USD</span>
              <span className="text-sm font-semibold tracking-wide">
                OLAVEXA
              </span>
            </div>
          </div>
        </section>

        {/* Balance panel */}
        <section className="rounded-3xl border border-[#e5ece9] bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-[#718096]">
                Available card balance
              </p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-[#071a33]">
                $842.67
              </p>
              <p className="mt-2 text-xs text-[#718096]">
                ≈ ₦1,178,860.27
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
              <WalletCards className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#718096]">Monthly spending</span>
              <span className="font-semibold text-[#071a33]">$157.92</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#edf2f0]">
              <div className="h-full w-[24%] rounded-full bg-[#10b981]" />
            </div>

            <div className="flex items-center justify-between text-xs text-[#718096]">
              <span>$157.92 spent</span>
              <span>$650.00 limit</span>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setShowDetails((value) => !value)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e5ece9] px-4 text-sm font-semibold text-[#071a33] transition hover:bg-[#f6f9f8]"
            >
              {showDetails ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              {showDetails ? "Hide" : "Show"} details
            </button>

            <button
              type="button"
              onClick={copyCardNumber}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#071a33] px-4 text-sm font-semibold text-white transition hover:bg-[#102b4d]"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied" : "Copy number"}
            </button>
          </div>
        </section>
      </div>

      {/* Actions */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <button
          type="button"
          onClick={() => setFrozen((value) => !value)}
          className="flex items-center gap-3 rounded-2xl border border-[#e5ece9] bg-white p-4 text-left shadow-sm transition hover:border-[#cbd9d4] hover:bg-[#fbfdfc]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff7e8] text-[#f59e0b]">
            <Snowflake className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#071a33]">
              {frozen ? "Unfreeze card" : "Freeze card"}
            </p>
            <p className="mt-0.5 text-xs text-[#718096]">
              {frozen ? "Resume card payments" : "Temporarily block payments"}
            </p>
          </div>
        </button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-2xl border border-[#e5ece9] bg-white p-4 text-left shadow-sm transition hover:border-[#cbd9d4] hover:bg-[#fbfdfc]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
            <Plus className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#071a33]">Add funds</p>
            <p className="mt-0.5 text-xs text-[#718096]">
              Fund your USD card
            </p>
          </div>
        </button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-2xl border border-[#e5ece9] bg-white p-4 text-left shadow-sm transition hover:border-[#cbd9d4] hover:bg-[#fbfdfc]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#2563eb]">
            <ArrowUpRight className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#071a33]">Withdraw</p>
            <p className="mt-0.5 text-xs text-[#718096]">
              Move funds back to wallet
            </p>
          </div>
        </button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-2xl border border-[#e5ece9] bg-white p-4 text-left shadow-sm transition hover:border-[#cbd9d4] hover:bg-[#fbfdfc]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4efff] text-[#7c3aed]">
            <MoreHorizontal className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#071a33]">Manage card</p>
            <p className="mt-0.5 text-xs text-[#718096]">
              Card settings and limits
            </p>
          </div>
        </button>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
        {/* Transactions */}
        <section className="overflow-hidden rounded-3xl border border-[#e5ece9] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e5ece9] px-5 py-5 sm:px-6">
            <div>
              <h2 className="text-lg font-bold text-[#071a33]">
                Recent card activity
              </h2>
              <p className="mt-1 text-xs text-[#718096]">
                Your latest virtual card transactions
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#059669]"
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="divide-y divide-[#e5ece9]">
            {cardTransactions.map((transaction) => (
              <div
                key={`${transaction.merchant}-${transaction.date}`}
                className="flex items-center gap-3 px-5 py-4 sm:px-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6f9f8] text-[#071a33]">
                  <Globe2 className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#071a33]">
                    {transaction.merchant}
                  </p>
                  <p className="mt-1 truncate text-xs text-[#718096]">
                    {transaction.category} • {transaction.date}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-[#071a33]">
                    {transaction.amount}
                  </p>
                  <p
                    className={`mt-1 text-[11px] font-medium ${
                      transaction.status === "Pending"
                        ? "text-[#f59e0b]"
                        : "text-[#059669]"
                    }`}
                  >
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security / controls */}
        <section className="rounded-3xl border border-[#e5ece9] bg-white shadow-sm">
          <div className="border-b border-[#e5ece9] px-5 py-5 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#071a33]">
                  Card security
                </h2>
                <p className="mt-1 text-xs text-[#718096]">
                  Control where and how your card can be used.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-[#e5ece9]">
            {controls.map((control, index) => (
              <div
                key={control.title}
                className="flex items-center gap-4 px-5 py-4 sm:px-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6f9f8] text-[#071a33]">
                  {index === 0 ? (
                    <Globe2 className="h-4 w-4" />
                  ) : index === 1 ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <CreditCard className="h-4 w-4" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#071a33]">
                    {control.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#718096]">
                    {control.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => toggleControl(index)}
                  aria-label={`Toggle ${control.title}`}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                    enabledControls[index]
                      ? "bg-[#10b981]"
                      : "bg-[#d7e1dd]"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                      enabledControls[index] ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="m-5 rounded-2xl bg-[#f6f9f8] p-4 sm:m-6">
            <div className="flex gap-3">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#059669]" />
              <div>
                <p className="text-sm font-semibold text-[#071a33]">
                  Protected by OLAVEXA security
                </p>
                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  Card controls are designed to help you manage payment
                  access and reduce unauthorized usage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom information */}
      <section className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#2563eb]">
              <ArrowDownToLine className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#071a33]">
                Need more card capacity?
              </h3>
              <p className="mt-1 text-xs leading-5 text-[#718096]">
                Card limits and funding options will be connected to the
                OLAVEXA financial engine later.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e5ece9] px-4 py-2.5 text-sm font-semibold text-[#071a33] transition hover:bg-[#f6f9f8]"
          >
            View card limits
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
