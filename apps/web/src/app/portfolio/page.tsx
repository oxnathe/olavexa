"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  CircleDollarSign,
  Eye,
  EyeOff,
  PieChart,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

type Range = "1D" | "1W" | "1M" | "3M" | "1Y";

const ranges: Range[] = ["1D", "1W", "1M", "3M", "1Y"];

const holdings = [
  {
    symbol: "NGN",
    name: "Nigerian Naira",
    amount: "248,500.00",
    value: 248500,
    allocation: 19.57,
    change: 0,
    trend: "neutral",
  },
  {
    symbol: "USDT",
    name: "Tether",
    amount: "342.80",
    value: 479234.4,
    allocation: 37.73,
    change: 1.18,
    trend: "up",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    amount: "126.45",
    value: 176872.59,
    allocation: 13.93,
    change: 0.92,
    trend: "up",
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: "3.8421",
    value: 145529.51,
    allocation: 11.46,
    change: 4.68,
    trend: "up",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: "0.0418",
    value: 219986,
    allocation: 17.32,
    change: 2.31,
    trend: "up",
  },
];

const activity = [
  {
    title: "SOL position increased",
    detail: "Bought 1.318 SOL",
    amount: "+₦50,000.00",
    time: "Today, 10:42 AM",
    positive: true,
  },
  {
    title: "USDT received",
    detail: "Wallet transfer",
    amount: "+₦124,850.00",
    time: "Yesterday, 4:18 PM",
    positive: true,
  },
  {
    title: "NGN deposit",
    detail: "Bank transfer",
    amount: "+₦100,000.00",
    time: "Sep 26, 2:06 PM",
    positive: true,
  },
  {
    title: "ETH position adjusted",
    detail: "Market purchase",
    amount: "-₦35,000.00",
    time: "Sep 25, 11:24 AM",
    positive: false,
  },
];

const performanceByRange: Record<
  Range,
  { value: string; pnl: string; percent: string; points: number[] }
> = {
  "1D": {
    value: "₦1,270,122.50",
    pnl: "+₦18,420.50",
    percent: "+1.47%",
    points: [28, 32, 29, 38, 35, 44, 42, 51, 48, 58, 55, 64],
  },
  "1W": {
    value: "₦1,270,122.50",
    pnl: "+₦42,840.20",
    percent: "+3.49%",
    points: [24, 29, 27, 35, 33, 41, 46, 43, 51, 56, 53, 64],
  },
  "1M": {
    value: "₦1,270,122.50",
    pnl: "+₦86,420.80",
    percent: "+7.30%",
    points: [20, 25, 23, 31, 29, 38, 35, 43, 48, 45, 56, 64],
  },
  "3M": {
    value: "₦1,270,122.50",
    pnl: "+₦142,880.40",
    percent: "+12.68%",
    points: [18, 23, 21, 27, 25, 34, 32, 40, 43, 50, 55, 64],
  },
  "1Y": {
    value: "₦1,270,122.50",
    pnl: "+₦318,420.60",
    percent: "+33.45%",
    points: [12, 18, 16, 25, 22, 30, 29, 38, 42, 49, 57, 64],
  },
};

function formatNaira(value: number) {
  return `₦${value.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function MiniChart({ points }: { points: number[] }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const width = 520;
  const height = 180;

  const coordinates = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y =
        height -
        ((point - min) / Math.max(max - min, 1)) * (height - 24) -
        12;

      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${height} ${coordinates} ${width},${height}`;

  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-slate-50">
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        {[0, 1, 2, 3].map((line) => (
          <div key={line} className="border-t border-slate-200" />
        ))}
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full px-5 py-5"
      >
        <polygon points={areaPoints} fill="rgba(16,185,129,0.08)" />
        <polyline
          points={coordinates}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emerald-500"
        />
      </svg>
    </div>
  );
}

export default function PortfolioPage() {
  const [range, setRange] = useState<Range>("1D");
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [showBalance, setShowBalance] = useState(true);

  const performance = performanceByRange[range];

  const totalValue = 1270122.5;
  const totalPnl = 142880.4;
  const todayPnl = 18420.5;
  const usdRate = 1398.2;

  const displayedTotal =
    currency === "NGN"
      ? formatNaira(totalValue)
      : `$${(totalValue / usdRate).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;

  const displayedPnl =
    currency === "NGN"
      ? `+${formatNaira(totalPnl)}`
      : `+$${(totalPnl / usdRate).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;

  const allocationTotal = useMemo(
    () => holdings.reduce((sum, holding) => sum + holding.allocation, 0),
    [],
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-600">
            Wealth overview
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#071a33] sm:text-3xl">
            Portfolio
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Track your holdings, performance and overall wealth position across
            your OLAVEXA assets.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white p-1 lg:self-auto">
          {(["NGN", "USD"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCurrency(item)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                currency === item
                  ? "bg-[#071a33] text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main value card */}
      <section className="overflow-hidden rounded-3xl bg-[#071a33] p-6 text-white shadow-sm sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span>Total portfolio value</span>
              <button
                type="button"
                onClick={() => setShowBalance((value) => !value)}
                className="rounded-lg p-1.5 transition hover:bg-white/10"
                aria-label={showBalance ? "Hide balance" : "Show balance"}
              >
                {showBalance ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {showBalance ? displayedTotal : "••••••••"}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1.5 text-sm font-semibold text-emerald-300">
                <TrendingUp className="h-4 w-4" />
                {showBalance ? displayedPnl : "••••"}
              </span>
              <span className="text-sm text-slate-400">
                overall portfolio P&L
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-400">Today</p>
              <p className="mt-1 font-semibold text-emerald-300">
                +₦18,420.50
              </p>
              <p className="mt-1 text-xs text-slate-500">+1.47%</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-400">Invested</p>
              <p className="mt-1 font-semibold">₦1.13m</p>
              <p className="mt-1 text-xs text-slate-500">Across 5 assets</p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-1">
              <p className="text-xs text-slate-400">Available</p>
              <p className="mt-1 font-semibold">₦1.245m</p>
              <p className="mt-1 text-xs text-slate-500">Ready to use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h2 className="font-bold text-[#071a33]">Performance</h2>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Portfolio value and returns over time.
            </p>
          </div>

          <div className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1">
            {ranges.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRange(item)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  range === item
                    ? "bg-white text-[#071a33] shadow-sm"
                    : "text-slate-500 hover:text-[#071a33]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm text-slate-500">{range} portfolio value</p>
            <div className="mt-1 flex flex-wrap items-baseline gap-3">
              <span className="text-2xl font-bold text-[#071a33]">
                {performance.value}
              </span>
              <span className="text-sm font-semibold text-emerald-600">
                {performance.percent}
              </span>
            </div>
          </div>

          <div className="text-left lg:text-right">
            <p className="text-xs text-slate-400">Period P&L</p>
            <p className="mt-1 font-bold text-emerald-600">
              {performance.pnl}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <MiniChart points={performance.points} />
        </div>
      </section>

      {/* Allocation + summary */}
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                  <PieChart className="h-5 w-5" />
                </div>
                <h2 className="font-bold text-[#071a33]">Asset allocation</h2>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                How your portfolio is distributed.
              </p>
            </div>

            <span className="text-xs font-semibold text-slate-400">
              {allocationTotal.toFixed(2)}%
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {holdings.map((holding) => (
              <div key={holding.symbol}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-[#071a33]">
                      {holding.symbol.slice(0, 3)}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[#071a33]">
                        {holding.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {holding.symbol}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold text-[#071a33]">
                    {holding.allocation.toFixed(2)}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${holding.allocation}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
              <CircleDollarSign className="h-5 w-5" />
            </div>
            <h2 className="font-bold text-[#071a33]">Portfolio summary</h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm text-slate-500">Total value</span>
              <span className="font-semibold text-[#071a33]">₦1.27m</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm text-slate-500">Total invested</span>
              <span className="font-semibold text-[#071a33]">₦1.13m</span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm text-slate-500">Unrealized P&L</span>
              <span className="font-semibold text-emerald-600">
                +₦142,880.40
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm text-slate-500">Today's P&L</span>
              <span className="font-semibold text-emerald-600">
                +₦18,420.50
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Assets held</span>
              <span className="font-semibold text-[#071a33]">5</span>
            </div>
          </div>

          <Link
            href="/wallet"
            className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#071a33] transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            <Wallet className="h-4 w-4" />
            View wallet
          </Link>
        </section>
      </div>

      {/* Holdings */}
      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-2 border-b border-slate-100 p-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-[#071a33]">Holdings</h2>
            <p className="mt-1 text-sm text-slate-500">
              Your current positions across supported assets.
            </p>
          </div>

          <Link
            href="/trade"
            className="inline-flex items-center justify-center rounded-xl bg-[#071a33] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102b4c]"
          >
            Trade assets
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {holdings.map((holding) => (
            <div
              key={holding.symbol}
              className="grid gap-4 p-5 sm:grid-cols-[1.5fr_1fr_1fr_auto] sm:items-center sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-xs font-bold text-[#071a33]">
                  {holding.symbol.slice(0, 3)}
                </div>
                <div>
                  <p className="font-semibold text-[#071a33]">
                    {holding.name}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {holding.symbol}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400">Balance</p>
                <p className="mt-1 text-sm font-semibold text-[#071a33]">
                  {holding.amount} {holding.symbol}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Value</p>
                <p className="mt-1 text-sm font-semibold text-[#071a33]">
                  {formatNaira(holding.value)}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:block sm:text-right">
                <span className="text-xs text-slate-400 sm:hidden">
                  24h change
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${
                    holding.change > 0
                      ? "text-emerald-600"
                      : holding.change < 0
                        ? "text-red-500"
                        : "text-slate-400"
                  }`}
                >
                  {holding.change > 0 && <ArrowUpRight className="h-4 w-4" />}
                  {holding.change < 0 && (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {holding.change > 0 ? "+" : ""}
                  {holding.change.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Movers */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-[#071a33]">Best performer</h2>
              <p className="text-xs text-slate-400">24h portfolio movement</p>
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-2xl font-bold text-[#071a33]">SOL</p>
              <p className="mt-1 text-sm text-slate-500">Solana</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-emerald-600">+4.68%</p>
              <p className="mt-1 text-xs text-slate-400">₦37,880.00</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-slate-100 p-2 text-slate-500">
              <TrendingDown className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-[#071a33]">Lowest movement</h2>
              <p className="text-xs text-slate-400">24h portfolio movement</p>
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-2xl font-bold text-[#071a33]">NGN</p>
              <p className="mt-1 text-sm text-slate-500">Nigerian Naira</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-slate-500">0.00%</p>
              <p className="mt-1 text-xs text-slate-400">₦1.00</p>
            </div>
          </div>
        </section>
      </div>

      {/* Activity */}
      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5 sm:p-6">
          <h2 className="font-bold text-[#071a33]">Portfolio activity</h2>
          <p className="mt-1 text-sm text-slate-500">
            Recent transactions affecting your portfolio.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {activity.map((item) => (
            <div
              key={`${item.title}-${item.time}`}
              className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    item.positive
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-red-50 text-red-500"
                  }`}
                >
                  {item.positive ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#071a33]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {item.detail} · {item.time}
                  </p>
                </div>
              </div>

              <p
                className={`text-sm font-bold sm:text-right ${
                  item.positive ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm text-emerald-800">
        <p className="font-semibold">Portfolio data is currently simulated.</p>
        <p className="mt-1 text-xs leading-5 text-emerald-700">
          Live balances, market prices, realized P&L and historical performance
          will connect to the OLAVEXA backend and market-data services later.
        </p>
      </div>
    </div>
  );
}
