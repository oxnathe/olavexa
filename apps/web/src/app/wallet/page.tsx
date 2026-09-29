"use client";

import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ChevronRight,
  CircleDollarSign,
  Copy,
  Eye,
  EyeOff,
  LockKeyhole,
  Plus,
  Send,
  ShieldCheck,
  WalletCards,
  WalletMinimal,
} from "lucide-react";
import { useState } from "react";

const naira = "\u20A6";

const assets = [
  {
    symbol: "NGN",
    name: "Nigerian Naira",
    balance: "248,500.00",
    value: "248,500.00",
    change: "Fiat",
    icon: CircleDollarSign,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    symbol: "USDT",
    name: "Tether",
    balance: "342.80",
    value: "479,234.40",
    change: "+1.18%",
    icon: WalletMinimal,
    iconClass: "bg-sky-50 text-sky-600",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "126.45",
    value: "176,872.59",
    change: "+0.92%",
    icon: CircleDollarSign,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    symbol: "SOL",
    name: "Solana",
    balance: "3.8421",
    value: "145,529.51",
    change: "+4.68%",
    icon: WalletCards,
    iconClass: "bg-violet-50 text-violet-600",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "0.0418",
    value: "219,986.00",
    change: "+2.31%",
    icon: WalletMinimal,
    iconClass: "bg-indigo-50 text-indigo-600",
  },
];

const activities = [
  {
    title: "NGN deposit",
    description: "Bank transfer",
    amount: "+\u20A6100,000.00",
    time: "Today, 09:42",
    positive: true,
  },
  {
    title: "SOL purchase",
    description: "Trade wallet",
    amount: "-\u20A650,000.00",
    time: "Yesterday, 18:24",
    positive: false,
  },
  {
    title: "USDT received",
    description: "External wallet",
    amount: "+\u20A6124,850.00",
    time: "Yesterday, 12:08",
    positive: true,
  },
];

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        "0xOLAVEXA7A4C9D82F31E5B6A0C4D2"
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-full bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              OLAVEXA Wallet
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
              Your money, in one place.
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Manage your NGN balance, digital assets, deposits, withdrawals,
              and wallet activity from one secure account.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-xs font-medium text-[var(--muted)] shadow-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Wallet protected
          </div>
        </div>

        {/* Balance + Actions */}
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
          <div className="relative overflow-hidden rounded-2xl bg-[var(--navy)] p-6 text-white shadow-[0_18px_45px_rgba(7,26,51,0.14)] sm:p-7">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/60">Total wallet balance</p>
                  <div className="mt-2 flex items-center gap-3">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      {showBalance ? `${naira}1,270,122.50` : "••••••••"}
                    </h2>
                    <button
                      type="button"
                      onClick={() => setShowBalance((value) => !value)}
                      className="rounded-lg p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
                      aria-label={showBalance ? "Hide balance" : "Show balance"}
                    >
                      {showBalance ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="hidden rounded-xl border border-white/10 bg-white/5 p-3 sm:block">
                  <WalletMinimal className="h-6 w-6 text-emerald-300" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-white/50">Available</p>
                  <p className="mt-1 text-sm font-semibold">
                    {showBalance ? `${naira}1,245,122.50` : "••••••"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-white/50">Locked</p>
                  <p className="mt-1 text-sm font-semibold">
                    {showBalance ? `${naira}25,000.00` : "••••••"}
                  </p>
                </div>

                <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 sm:col-span-1">
                  <p className="text-xs text-white/50">24h change</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-300">
                    +{naira}18,420.50
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5">
              <p className="text-sm font-semibold text-[var(--text)]">
                Wallet actions
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                Move funds in and out of your OLAVEXA wallet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 text-left transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <ArrowDownToLine className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--text)]">
                    Deposit
                  </span>
                  <span className="block text-[11px] text-[var(--muted)]">
                    Add funds
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 text-left transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-700">
                  <ArrowUpFromLine className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--text)]">
                    Withdraw
                  </span>
                  <span className="block text-[11px] text-[var(--muted)]">
                    Move funds
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 text-left transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Send className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--text)]">
                    Send
                  </span>
                  <span className="block text-[11px] text-[var(--muted)]">
                    To wallet
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-3 text-left transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Plus className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--text)]">
                    Receive
                  </span>
                  <span className="block text-[11px] text-[var(--muted)]">
                    Get address
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Wallet Address */}
        <section className="mt-5 rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <WalletCards className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">
                  Your wallet address
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Use this address when receiving supported digital assets.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2">
              <span className="max-w-[190px] truncate font-mono text-xs text-[var(--muted)] sm:max-w-none">
                0xOLAVEXA7A4C9D82F31E5B6A0C4D2
              </span>
              <button
                type="button"
                onClick={copyAddress}
                className="rounded-lg p-1.5 text-[var(--muted)] transition hover:bg-white hover:text-[var(--text)]"
                aria-label="Copy wallet address"
              >
                <Copy className="h-4 w-4" />
              </button>
              {copied && (
                <span className="text-[11px] font-semibold text-emerald-600">
                  Copied
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Assets + Activity */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(330px,0.55fr)]">
          <section className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">
              <div>
                <h2 className="text-base font-bold text-[var(--text)]">
                  Your assets
                </h2>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Balances across your supported wallets.
                </p>
              </div>

              <button
                type="button"
                className="hidden items-center gap-1 text-xs font-semibold text-emerald-600 transition hover:text-emerald-700 sm:flex"
              >
                Manage assets
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {assets.map((asset) => {
                const Icon = asset.icon;

                return (
                  <div
                    key={asset.symbol}
                    className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-[var(--background)] sm:px-6"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${asset.iconClass}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[var(--text)]">
                          {asset.symbol}
                        </p>
                        <p className="truncate text-xs text-[var(--muted)]">
                          {asset.name}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-[var(--text)]">
                        {asset.balance} {asset.symbol}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">
                        {naira}
                        {asset.value}
                        <span
                          className={`ml-2 ${
                            asset.change.startsWith("+")
                              ? "text-emerald-600"
                              : "text-[var(--muted)]"
                          }`}
                        >
                          {asset.change}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
              <div>
                <h2 className="text-base font-bold text-[var(--text)]">
                  Recent activity
                </h2>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Latest wallet movements.
                </p>
              </div>

              <button
                type="button"
                className="text-xs font-semibold text-emerald-600 transition hover:text-emerald-700"
              >
                View all
              </button>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {activities.map((activity) => (
                <div
                  key={`${activity.title}-${activity.time}`}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        activity.positive
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {activity.positive ? (
                        <ArrowDownToLine className="h-4 w-4" />
                      ) : (
                        <ArrowUpFromLine className="h-4 w-4" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[var(--text)]">
                        {activity.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">
                        {activity.description} · {activity.time}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`shrink-0 text-sm font-bold ${
                      activity.positive
                        ? "text-emerald-600"
                        : "text-[var(--text)]"
                    }`}
                  >
                    {activity.amount}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 py-4">
              <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                <LockKeyhole className="h-3.5 w-3.5 text-emerald-600" />
                Wallet activity is protected by OLAVEXA security controls.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
