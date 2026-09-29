"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  PieChart,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const naira = "\u20A6";

const performance = [
  { month: "Apr", value: 820000 },
  { month: "May", value: 875000 },
  { month: "Jun", value: 940000 },
  { month: "Jul", value: 1010000 },
  { month: "Aug", value: 1080000 },
  { month: "Sep", value: 1130000 },
];

const assets = [
  { name: "NGN", value: 248500, percentage: 22 },
  { name: "USDT", value: 342800, percentage: 30 },
  { name: "USDC", value: 176873, percentage: 16 },
  { name: "SOL", value: 145530, percentage: 13 },
  { name: "ETH", value: 219986, percentage: 19 },
];

const activity = [
  { label: "Trading", value: 420000, percentage: 42 },
  { label: "Bills", value: 126500, percentage: 13 },
  { label: "Card", value: 157920, percentage: 16 },
  { label: "Transfers", value: 290000, percentage: 29 },
];

const formatNaira = (value: number) =>
  `${naira}${value.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("Last 6 months");

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-[#071a33] p-6 text-white shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-300">
              <BarChart3 size={17} />
              Financial analytics
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Understand your money.
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Track portfolio growth, trading activity, spending and asset
              allocation from one place.
            </p>
          </div>

          <div className="relative">
            <select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="appearance-none rounded-xl border border-white/15 bg-white/10 py-3 pl-4 pr-10 text-sm font-medium text-white outline-none"
            >
              <option className="text-[#071a33]">Today</option>
              <option className="text-[#071a33]">Last 7 days</option>
              <option className="text-[#071a33]">Last 30 days</option>
              <option className="text-[#071a33]">Last 6 months</option>
              <option className="text-[#071a33]">This year</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          icon={<Wallet size={19} />}
          label="Portfolio value"
          value={`${naira}1.13m`}
          change="+8.4%"
          positive
        />
        <MetricCard
          icon={<TrendingUp size={19} />}
          label="Total profit"
          value={`+${naira}184,620`}
          change="+19.5%"
          positive
        />
        <MetricCard
          icon={<CircleDollarSign size={19} />}
          label="Total deposits"
          value={`${naira}1.42m`}
          change="+12.2%"
          positive
        />
        <MetricCard
          icon={<BarChart3 size={19} />}
          label="Trading volume"
          value={`${naira}2.84m`}
          change="124 trades"
          positive
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-[#071a33]">
                Portfolio performance
              </h2>
              <p className="mt-1 text-sm text-[#718096]">
                Growth over {period.toLowerCase()}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
              <TrendingUp size={16} />
              +37.8%
            </div>
          </div>

          <div className="mt-8 h-64">
            <svg
              viewBox="0 0 700 260"
              className="h-full w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity=".22" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[45, 100, 155, 210].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2="700"
                  y1={y}
                  y2={y}
                  stroke="#e5ece9"
                  strokeDasharray="5 7"
                />
              ))}

              <path
                d="M0 215 C70 202 105 192 140 184 S210 163 280 149 S350 130 420 116 S490 98 560 82 S630 66 700 48 L700 240 L0 240 Z"
                fill="url(#area)"
              />

              <path
                d="M0 215 C70 202 105 192 140 184 S210 163 280 149 S350 130 420 116 S490 98 560 82 S630 66 700 48"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mt-2 flex justify-between text-xs text-[#718096]">
            {performance.map((item) => (
              <span key={item.month}>{item.month}</span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#071a33]">
                Asset allocation
              </h2>
              <p className="mt-1 text-sm text-[#718096]">
                Current portfolio mix
              </p>
            </div>
            <PieChart size={20} className="text-emerald-600" />
          </div>

          <div className="mt-6 space-y-5">
            {assets.map((asset) => (
              <div key={asset.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-[#071a33]">
                    {asset.name}
                  </span>
                  <span className="text-[#718096]">{asset.percentage}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#edf3f0]">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${asset.percentage}%` }}
                  />
                </div>

                <p className="mt-1 text-xs text-[#718096]">
                  {formatNaira(asset.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
              <TrendingUp size={19} />
            </div>
            <div>
              <h2 className="font-semibold text-[#071a33]">Profit & Loss</h2>
              <p className="text-sm text-[#718096]">Portfolio performance</p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <StatBox
              label="Realized P&L"
              value={`+${naira}92,400`}
              positive
            />
            <StatBox
              label="Unrealized P&L"
              value={`+${naira}92,220`}
              positive
            />
            <StatBox
              label="Best performer"
              value="SOL"
              sub="+4.68%"
            />
            <StatBox
              label="Trading fees"
              value={`${naira}12,840`}
              sub="This period"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
              <CalendarDays size={19} />
            </div>
            <div>
              <h2 className="font-semibold text-[#071a33]">
                Activity breakdown
              </h2>
              <p className="text-sm text-[#718096]">Where your money moved</p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {activity.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-[#071a33]">
                    {item.label}
                  </span>
                  <span className="text-[#718096]">
                    {formatNaira(item.value)}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#edf3f0]">
                  <div
                    className="h-full rounded-full bg-[#071a33]"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold text-[#071a33]">
              Cash flow summary
            </h2>
            <p className="text-sm text-[#718096]">
              Incoming and outgoing funds for this period
            </p>
          </div>
          <span className="text-sm font-medium text-[#718096]">
            {period}
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <FlowCard
            icon={<ArrowDownRight size={18} />}
            label="Money in"
            value={`+${naira}1,642,800`}
            positive
          />
          <FlowCard
            icon={<ArrowUpRight size={18} />}
            label="Money out"
            value={`-${naira}1,318,420`}
          />
          <FlowCard
            icon={<CircleDollarSign size={18} />}
            label="Net cash flow"
            value={`+${naira}324,380`}
            positive
          />
        </div>
      </section>

      <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
        Analytics currently uses demonstration data. Live portfolio,
        transaction and market analytics will connect to OLAVEXA's backend
        services later.
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  change,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
          {icon}
        </div>
        <span
          className={`text-xs font-semibold ${
            positive ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
      <p className="mt-5 text-sm text-[#718096]">{label}</p>
      <p className="mt-1 text-xl font-bold text-[#071a33]">{value}</p>
    </div>
  );
}

function StatBox({
  label,
  value,
  sub,
  positive,
}: {
  label: string;
  value: string;
  sub?: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-xl bg-[#f6f9f8] p-4">
      <p className="text-xs text-[#718096]">{label}</p>
      <p
        className={`mt-2 font-semibold ${
          positive ? "text-emerald-600" : "text-[#071a33]"
        }`}
      >
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-[#718096]">{sub}</p>}
    </div>
  );
}

function FlowCard({
  icon,
  label,
  value,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#e5ece9] p-4">
      <div
        className={`inline-flex rounded-lg p-2 ${
          positive
            ? "bg-emerald-50 text-emerald-600"
            : "bg-red-50 text-red-500"
        }`}
      >
        {icon}
      </div>
      <p className="mt-4 text-sm text-[#718096]">{label}</p>
      <p className="mt-1 text-lg font-bold text-[#071a33]">{value}</p>
    </div>
  );
}
