"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";

const naira = "\u20A6";

const markets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 158420000,
    change: 2.84,
    volume: 842000000,
    marketCap: 3140000000000,
    category: "Layer 1",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 5270000,
    change: 2.31,
    volume: 384000000,
    marketCap: 635000000000,
    category: "Layer 1",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 37880,
    change: 4.68,
    volume: 184600000,
    marketCap: 178000000000,
    category: "Layer 1",
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: 129500,
    change: -0.72,
    volume: 126000000,
    marketCap: 188000000000,
    category: "Layer 1",
  },
  {
    symbol: "USDT",
    name: "Tether",
    price: 1398,
    change: 0.08,
    volume: 215000000,
    marketCap: 1840000000000,
    category: "Stablecoin",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    price: 1398.2,
    change: 0.14,
    volume: 96000000,
    marketCap: 73400000000,
    category: "Stablecoin",
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: 4280,
    change: -1.24,
    volume: 91000000,
    marketCap: 254000000000,
    category: "Payments",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    price: 325,
    change: 5.17,
    volume: 64000000,
    marketCap: 48000000000,
    category: "Meme",
  },
];

const categories = [
  "All",
  "Favorites",
  "Layer 1",
  "Stablecoin",
  "Payments",
  "Meme",
];

function formatPrice(value: number) {
  if (value >= 1000000) {
    return `${naira}${Math.round(value).toLocaleString("en-NG")}`;
  }

  if (value >= 1000) {
    return `${naira}${value.toLocaleString("en-NG")}`;
  }

  return `${naira}${value.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatCompact(value: number) {
  if (value >= 1_000_000_000_000) {
    return `${naira}${(value / 1_000_000_000_000).toFixed(2)}t`;
  }

  if (value >= 1_000_000_000) {
    return `${naira}${(value / 1_000_000_000).toFixed(1)}b`;
  }

  if (value >= 1_000_000) {
    return `${naira}${(value / 1_000_000).toFixed(1)}m`;
  }

  return `${naira}${Math.round(value).toLocaleString("en-NG")}`;
}

export default function MarketsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>(["BTC", "SOL"]);

  const filteredMarkets = useMemo(() => {
    return markets.filter((market) => {
      const matchesCategory =
        category === "All"
          ? true
          : category === "Favorites"
            ? favorites.includes(market.symbol)
            : market.category === category;

      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        market.symbol.toLowerCase().includes(query) ||
        market.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, favorites, search]);

  const toggleFavorite = (symbol: string) => {
    setFavorites((current) =>
      current.includes(symbol)
        ? current.filter((item) => item !== symbol)
        : [...current, symbol],
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <span className="text-[11px] font-bold tracking-[0.14em] text-[var(--deep-emerald)]">
            MARKETS
          </span>

          <h1 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-[var(--text)] sm:text-3xl">
            Explore the digital asset market.
          </h1>

          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Track prices, liquidity and market movement across supported assets.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-[var(--soft-emerald)] px-3.5 py-2 text-xs font-bold text-[var(--deep-emerald)]">
          <TrendingUp size={16} />
          Markets active
        </div>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_8px_30px_rgba(7,26,51,0.04)]">
          <span className="block text-xs font-semibold text-[var(--muted)]">
            Total market cap
          </span>

          <strong className="mt-2 block text-2xl font-bold tracking-[-0.03em] text-[var(--text)]">
            {naira}4.82t
          </strong>

          <small className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--deep-emerald)]">
            <ArrowUpRight size={13} />
            2.14% today
          </small>
        </div>

        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_8px_30px_rgba(7,26,51,0.04)]">
          <span className="block text-xs font-semibold text-[var(--muted)]">
            24h volume
          </span>

          <strong className="mt-2 block text-2xl font-bold tracking-[-0.03em] text-[var(--text)]">
            {naira}1.94b
          </strong>

          <small className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--muted)]">
            <BarChart3 size={13} />
            Across tracked assets
          </small>
        </div>

        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_8px_30px_rgba(7,26,51,0.04)]">
          <span className="block text-xs font-semibold text-[var(--muted)]">
            Market sentiment
          </span>

          <strong className="mt-2 block text-2xl font-bold tracking-[-0.03em] text-[var(--text)]">
            Positive
          </strong>

          <small className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--deep-emerald)]">
            <TrendingUp size={13} />
            Buyers active
          </small>
        </div>
      </section>

      <section className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_8px_30px_rgba(7,26,51,0.04)]">
        <div className="flex flex-col gap-4 border-b border-[var(--border)] p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-bold transition ${
                  category === item
                    ? "bg-[var(--navy)] text-white"
                    : "text-[var(--muted)] hover:bg-[var(--background)] hover:text-[var(--text)]"
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="flex h-11 w-full shrink-0 items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 text-[var(--muted)] focus-within:border-emerald-500/45 focus-within:ring-4 focus-within:ring-emerald-500/10 lg:w-56">
            <Search size={17} />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search assets"
              aria-label="Search assets"
              className="w-full min-w-0 border-0 bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse">
            <thead>
              <tr>
                <th className="border-b border-[var(--border)] px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--muted)]">
                  Asset
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--muted)]">
                  Price
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--muted)]">
                  24h change
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--muted)]">
                  24h volume
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--muted)]">
                  Market cap
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3.5" />
              </tr>
            </thead>

            <tbody>
              {filteredMarkets.map((market) => {
                const positive = market.change >= 0;
                const favorite = favorites.includes(market.symbol);

                return (
                  <tr
                    key={market.symbol}
                    className="transition hover:bg-slate-50/70"
                  >
                    <td className="border-b border-[var(--border)] px-5 py-4">
                      <div className="flex min-w-[180px] items-center gap-2.5">
                        <button
                          type="button"
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition ${
                            favorite
                              ? "text-[var(--warning)]"
                              : "text-slate-400 hover:bg-[var(--background)] hover:text-[var(--navy)]"
                          }`}
                          onClick={() => toggleFavorite(market.symbol)}
                          aria-label={
                            favorite
                              ? `Remove ${market.symbol} from favorites`
                              : `Add ${market.symbol} to favorites`
                          }
                        >
                          <Star
                            size={15}
                            fill={favorite ? "currentColor" : "none"}
                          />
                        </button>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--soft-emerald)] text-xs font-extrabold text-[var(--deep-emerald)]">
                          {market.symbol[0]}
                        </div>

                        <div className="flex flex-col gap-0.5">
                          <strong className="text-xs font-bold text-[var(--text)]">
                            {market.symbol}
                          </strong>

                          <span className="text-[11px] text-[var(--muted)]">
                            {market.name}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="border-b border-[var(--border)] px-5 py-4 text-sm font-bold text-[var(--text)]">
                      {formatPrice(market.price)}
                    </td>

                    <td className="border-b border-[var(--border)] px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-bold ${
                          positive
                            ? "text-[var(--deep-emerald)]"
                            : "text-[var(--danger)]"
                        }`}
                      >
                        {positive ? (
                          <ArrowUpRight size={14} />
                        ) : (
                          <ArrowDownRight size={14} />
                        )}
                        {Math.abs(market.change).toFixed(2)}%
                      </span>
                    </td>

                    <td className="border-b border-[var(--border)] px-5 py-4 text-sm text-[var(--text)]">
                      {formatCompact(market.volume)}
                    </td>

                    <td className="border-b border-[var(--border)] px-5 py-4 text-sm text-[var(--text)]">
                      {formatCompact(market.marketCap)}
                    </td>

                    <td className="border-b border-[var(--border)] px-5 py-4">
                      <a
                        className="inline-flex min-w-16 items-center justify-center rounded-lg bg-[var(--soft-emerald)] px-3 py-1.5 text-xs font-bold text-[var(--deep-emerald)] transition hover:bg-[var(--deep-emerald)] hover:text-white"
                        href="/trade"
                      >
                        Trade
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredMarkets.length === 0 && (
            <div className="flex min-h-56 flex-col items-center justify-center gap-2 text-[var(--muted)]">
              <Search size={22} />
              <strong className="text-sm text-[var(--text)]">
                No assets found
              </strong>
              <span className="text-xs">
                Try another asset or category.
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="flex items-start gap-4 rounded-[18px] border border-emerald-500/20 bg-gradient-to-br from-emerald-50/90 to-white p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--deep-emerald)] shadow-[0_5px_16px_rgba(7,26,51,0.06)]">
          <BarChart3 size={19} />
        </div>

        <div>
          <span className="text-[11px] font-bold tracking-[0.14em] text-[var(--deep-emerald)]">
            MARKET DATA
          </span>

          <h2 className="mt-1 text-lg font-bold tracking-[-0.02em] text-[var(--text)]">
            Track first. Trade when you are ready.
          </h2>

          <p className="mt-1.5 max-w-3xl text-xs leading-6 text-[var(--muted)]">
            Market prices shown here are demonstration data for the current
            OLAVEXA Web interface. Live market feeds will be connected later.
          </p>
        </div>
      </section>
    </div>
  );
}

