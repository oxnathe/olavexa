"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown,
  ChevronDown,
  Clock3,
  Info,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Wallet,
} from "lucide-react";

const naira = "\u20A6";

const assets = [
  { symbol: "USDC", name: "USD Coin", price: 1398.2, change: "+0.14%" },
  { symbol: "USDT", name: "Tether", price: 1398.0, change: "+0.08%" },
  { symbol: "SOL", name: "Solana", price: 37880, change: "+4.68%" },
  { symbol: "ETH", name: "Ethereum", price: 5270000, change: "+2.31%" },
];

const chartPoints =
  "0,128 35,116 70,121 105,96 140,102 175,78 210,88 245,61 280,69 315,47 350,55 385,34 420,43 455,22 490,31 525,15";

export default function TradePage() {
  const [side, setSide] = useState<"Buy" | "Sell">("Buy");
  const [asset, setAsset] = useState("SOL");
  const [amount, setAmount] = useState("100000");
  const [slippage, setSlippage] = useState("0.5");

  const selectedAsset =
    assets.find((item) => item.symbol === asset) ?? assets[2];

  const numericAmount = Number(amount.replace(/,/g, "")) || 0;

  const estimatedReceive = useMemo(() => {
    if (side === "Buy") {
      return numericAmount / selectedAsset.price;
    }

    return numericAmount * selectedAsset.price;
  }, [numericAmount, selectedAsset.price, side]);

  const receiveText =
    side === "Buy"
      ? estimatedReceive.toFixed(asset === "SOL" ? 4 : 6)
      : `${naira}${Math.round(estimatedReceive).toLocaleString("en-NG")}`;

  return (
    <div className="trade-page">
      <div className="page-heading trade-page-heading">
        <div>
          <span className="eyebrow">TRADE</span>
          <h1>Buy and sell digital assets.</h1>
          <p>
            Execute trades with transparent quotes and clear risk details.
          </p>
        </div>

        <div className="trade-security-badge">
          <ShieldCheck size={16} />
          Protected trading
        </div>
      </div>

      <div className="trade-layout">
        <section className="trade-market-card">
          <div className="trade-market-top">
            <div className="trade-asset-heading">
              <div className="trade-asset-icon">
                {selectedAsset.symbol[0]}
              </div>

              <div>
                <div className="trade-symbol-line">
                  <strong>{selectedAsset.symbol}/NGN</strong>

                  <span className="market-status">
                    <span />
                    Live
                  </span>
                </div>

                <span>{selectedAsset.name}</span>
              </div>
            </div>

            <button type="button" className="trade-time-button">
              24H
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="trade-price-row">
            <div>
              <strong>
                {naira}
                {selectedAsset.price.toLocaleString("en-NG")}
              </strong>

              <span className="trade-positive">
                <TrendingUp size={14} />
                {selectedAsset.change}
              </span>
            </div>

            <span className="trade-price-label">
              Indicative market price
            </span>
          </div>

          <div className="trade-chart">
            <div className="chart-grid-line chart-grid-one" />
            <div className="chart-grid-line chart-grid-two" />
            <div className="chart-grid-line chart-grid-three" />

            <svg
              viewBox="0 0 525 145"
              preserveAspectRatio="none"
              aria-label="Asset price chart"
            >
              <defs>
                <linearGradient
                  id="tradeFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(16,185,129,0.22)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(16,185,129,0)"
                  />
                </linearGradient>
              </defs>

              <polygon
                points={`0,145 ${chartPoints} 525,145`}
                fill="url(#tradeFill)"
              />

              <polyline
                points={chartPoints}
                fill="none"
                stroke="var(--emerald)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="trade-chart-labels">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>Now</span>
          </div>

          <div className="trade-market-stats">
            <div>
              <span>24h high</span>
              <strong>{naira}39,420</strong>
            </div>

            <div>
              <span>24h low</span>
              <strong>{naira}36,880</strong>
            </div>

            <div>
              <span>24h volume</span>
              <strong>{naira}184.6m</strong>
            </div>
          </div>
        </section>

        <section className="trade-order-card">
          <div className="trade-order-header">
            <div>
              <span className="eyebrow">QUICK TRADE</span>
              <h2>Place an order</h2>
            </div>

            <button
              type="button"
              className="icon-button"
              aria-label="Trade settings"
            >
              <SlidersHorizontal size={18} />
            </button>
          </div>

          <div className="trade-tabs">
            <button
              type="button"
              className={
                side === "Buy"
                  ? "trade-tab trade-tab-active-buy"
                  : "trade-tab"
              }
              onClick={() => setSide("Buy")}
            >
              Buy
            </button>

            <button
              type="button"
              className={
                side === "Sell"
                  ? "trade-tab trade-tab-active-sell"
                  : "trade-tab"
              }
              onClick={() => setSide("Sell")}
            >
              Sell
            </button>
          </div>

          <label className="trade-field-label">Asset</label>

          <div className="trade-select">
            <div className="trade-select-left">
              <span className="trade-mini-icon">
                {selectedAsset.symbol[0]}
              </span>

              <div>
                <strong>{selectedAsset.symbol}</strong>
                <span>{selectedAsset.name}</span>
              </div>
            </div>

            <select
              value={asset}
              onChange={(event) => setAsset(event.target.value)}
              aria-label="Select asset"
            >
              {assets.map((item) => (
                <option key={item.symbol} value={item.symbol}>
                  {item.symbol}
                </option>
              ))}
            </select>

            <ChevronDown size={16} />
          </div>

          <div className="trade-field-row">
            <label className="trade-field-label">
              {side === "Buy" ? "You pay" : "You sell"}
            </label>

            <span className="trade-balance">
              <Wallet size={13} />
              Balance {naira}2,739,120
            </span>
          </div>

          <div className="trade-amount-field">
            <input
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              aria-label={
                side === "Buy" ? "Amount to pay" : "Amount to sell"
              }
            />

            <span>{naira}</span>
          </div>

          <div className="trade-conversion">
            <ArrowDown size={15} />
          </div>

          <label className="trade-field-label">
            {side === "Buy" ? "You receive" : "Estimated value"}
          </label>

          <div className="trade-receive-field">
            <strong>{receiveText}</strong>
            <span>{side === "Buy" ? asset : "NGN"}</span>
          </div>

          <div className="trade-quote-details">
            <div>
              <span>Rate</span>

              <strong>
                1 {asset} = {naira}
                {selectedAsset.price.toLocaleString("en-NG")}
              </strong>
            </div>

            <div>
              <span>Network fee</span>
              <strong>{naira}0.00</strong>
            </div>

            <div>
              <span>Slippage</span>

              <label className="slippage-control">
                <input
                  value={slippage}
                  onChange={(event) => setSlippage(event.target.value)}
                  inputMode="decimal"
                  aria-label="Slippage percentage"
                />
                %
              </label>
            </div>
          </div>

          <div className="trade-info-note">
            <Info size={15} />

            <span>
              Your final execution price may vary slightly with market
              movement.
            </span>
          </div>

          <button
            type="button"
            className={`trade-submit-button ${
              side === "Sell" ? "trade-submit-sell" : ""
            }`}
          >
            {side} {asset}
          </button>

          <div className="trade-order-footer">
            <Clock3 size={13} />
            Quote refreshed just now
            <RefreshCw size={12} />
          </div>
        </section>
      </div>

      <section className="trade-bottom-card">
        <div>
          <span className="eyebrow">TRADE SAFELY</span>

          <h2>Know what you are trading before you confirm.</h2>

          <p>
            OLAVEXA will show the quoted rate, fees, slippage and estimated
            receive amount before an order is submitted.
          </p>
        </div>

        <div className="trade-bottom-points">
          <div>
            <ShieldCheck size={18} />
            <span>Secure execution</span>
          </div>

          <div>
            <Info size={18} />
            <span>Transparent fees</span>
          </div>

          <div>
            <RefreshCw size={18} />
            <span>Live quotes</span>
          </div>
        </div>
      </section>
    </div>
  );
}

