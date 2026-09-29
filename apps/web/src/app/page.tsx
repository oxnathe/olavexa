"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  CircleDollarSign,
  Plus,
  Send,
  TrendingUp,
} from "lucide-react";

const naira = "\u20A6";

const assets = [
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "1,240.50",
    value: `${naira}1,734,700`,
    change: "+1.24%",
    icon: "U",
  },
  {
    symbol: "USDT",
    name: "Tether",
    balance: "520.00",
    value: `${naira}728,000`,
    change: "+0.82%",
    icon: "U",
  },
  {
    symbol: "SOL",
    name: "Solana",
    balance: "12.84",
    value: `${naira}486,420`,
    change: "+4.68%",
    icon: "S",
  },
];

const activities = [
  {
    title: "USDC received",
    detail: "Wallet deposit",
    amount: `+${naira}250,000`,
    time: "Today, 10:42",
    positive: true,
  },
  {
    title: "SOL purchase",
    detail: "Trade completed",
    amount: `-${naira}100,000`,
    time: "Yesterday, 18:24",
    positive: false,
  },
  {
    title: "Bill payment",
    detail: "Airtime",
    amount: `-${naira}5,000`,
    time: "Yesterday, 09:18",
    positive: false,
  },
];

const quickActions = [
  {
    label: "Deposit",
    icon: ArrowDownLeft,
  },
  {
    label: "Send",
    icon: Send,
  },
  {
    label: "Receive",
    icon: ArrowUpRight,
  },
];

export default function HomePage() {
  return (
    <div className="dashboard">
      <div className="page-heading">
        <div>
          <span className="eyebrow">PERSONAL ACCOUNT</span>
          <h1>Good afternoon, Wilson.</h1>
          <p>Here&apos;s what&apos;s happening across your OLAVEXA account.</p>
        </div>

        <button className="primary-button">
          <Plus size={18} />
          Add money
        </button>
      </div>

      <div className="dashboard-grid">
        <section className="balance-card">
          <div className="balance-card-top">
            <div>
              <span className="card-label">TOTAL BALANCE</span>

              <div className="balance-value">
                {naira}2,949,120.00
              </div>
            </div>

            <span className="balance-badge">
              <TrendingUp size={13} />
              2.18%
            </span>
          </div>

          <div className="balance-card-bottom">
            <div>
              <span>Available</span>
              <strong>{naira}2,739,120</strong>
            </div>

            <div>
              <span>On hold</span>
              <strong>{naira}210,000</strong>
            </div>

            <div>
              <span>Portfolio</span>
              <strong>{naira}2.49m</strong>
            </div>
          </div>
        </section>

        <section className="quick-actions-card">
          <div className="card-heading">
            <div>
              <span className="eyebrow">QUICK ACTIONS</span>
              <h2>Move money</h2>
            </div>

            <CircleDollarSign size={20} />
          </div>

          <div className="quick-actions">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <button key={action.label}>
                  <span className="quick-action-icon">
                    <Icon size={18} />
                  </span>
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">YOUR ASSETS</span>
            <h2>Portfolio</h2>
          </div>

          <button className="text-button">
            View portfolio
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="asset-table">
          <div className="asset-table-header">
            <span>Asset</span>
            <span>Balance</span>
            <span>Value</span>
            <span>24h</span>
          </div>

          {assets.map((asset) => (
            <div className="asset-row" key={asset.symbol}>
              <div className="asset-name">
                <span className="asset-icon">{asset.icon}</span>

                <div>
                  <strong>{asset.symbol}</strong>
                  <span>{asset.name}</span>
                </div>
              </div>

              <strong>{asset.balance}</strong>

              <strong>{asset.value}</strong>

              <span className="positive-value">{asset.change}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="bottom-grid">
        <section className="content-card">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">RECENT</span>
              <h2>Activity</h2>
            </div>

            <button className="text-button">
              View all
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="activity-list">
            {activities.map((activity) => (
              <div
                className="activity-row"
                key={`${activity.title}-${activity.time}`}
              >
                <div className="activity-icon">
                  {activity.positive ? "+" : "-"}
                </div>

                <div className="activity-copy">
                  <strong>{activity.title}</strong>
                  <span>
                    {activity.detail} <span>·</span> {activity.time}
                  </span>
                </div>

                <strong
                  className={
                    activity.positive
                      ? "activity-positive"
                      : "activity-negative"
                  }
                >
                  {activity.amount}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <section className="trade-promo">
          <span className="eyebrow">QUICK TRADE</span>

          <h2>Trade crypto without leaving your dashboard.</h2>

          <p>
            Buy or sell supported assets with live quotes, transparent
            execution details and risk information.
          </p>

          <button className="primary-button">
            Start trading
            <ChevronRight size={17} />
          </button>
        </section>
      </div>
    </div>
  );
}

