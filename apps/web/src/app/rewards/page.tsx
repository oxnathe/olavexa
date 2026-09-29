"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  Gift,
  Link2,
  Share2,
  Sparkles,
  Users,
  Wallet,
  X,
} from "lucide-react";

type ReferralStatus = "Completed" | "Pending";

type Referral = {
  id: number;
  name: string;
  date: string;
  status: ReferralStatus;
  reward: string;
};

const referrals: Referral[] = [
  {
    id: 1,
    name: "David O.",
    date: "Sep 28, 2026",
    status: "Completed",
    reward: "\u20A65,000",
  },
  {
    id: 2,
    name: "Sarah A.",
    date: "Sep 25, 2026",
    status: "Completed",
    reward: "\u20A65,000",
  },
  {
    id: 3,
    name: "Michael E.",
    date: "Sep 22, 2026",
    status: "Pending",
    reward: "\u20A65,000",
  },
  {
    id: 4,
    name: "Daniel K.",
    date: "Sep 18, 2026",
    status: "Completed",
    reward: "\u20A65,000",
  },
  {
    id: 5,
    name: "Grace N.",
    date: "Sep 12, 2026",
    status: "Completed",
    reward: "\u20A65,000",
  },
];

const tiers = [
  {
    name: "Starter",
    referrals: "1–4 referrals",
    reward: "\u20A65,000",
    description: "Earn for every eligible friend who joins and completes the required activity.",
    active: true,
  },
  {
    name: "Builder",
    referrals: "5–9 referrals",
    reward: "\u20A67,500",
    description: "Unlock a higher reward rate as your referral network grows.",
    active: false,
  },
  {
    name: "Elite",
    referrals: "10+ referrals",
    reward: "\u20A610,000",
    description: "Reach the highest standard referral reward tier.",
    active: false,
  },
];

export default function RewardsPage() {
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const referralCode = "OLX-WILSON24";
  const referralLink = `https://olavexa.app/join/${referralCode}`;

  const completedReferrals = useMemo(
    () => referrals.filter((referral) => referral.status === "Completed").length,
    [],
  );

  const pendingReferrals = useMemo(
    () => referrals.filter((referral) => referral.status === "Pending").length,
    [],
  );

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareReferral = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join OLAVEXA",
          text: "Join me on OLAVEXA and explore smarter financial tools.",
          url: referralLink,
        });
      } catch {
        // User cancelled the native share sheet.
      }
    } else {
      setShareOpen(true);
    }
  };

  return (
    <div className="min-h-full space-y-6">
      <section className="overflow-hidden rounded-3xl bg-[#071a33] p-6 text-white shadow-sm sm:p-8">
        <div className="relative">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-emerald-300">
                <Gift size={18} />
                <span className="text-sm font-semibold">
                  OLAVEXA Rewards
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Invite friends. Earn rewards.
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                Share your referral link with friends and earn rewards when
                eligible referrals complete the required activity.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={copyReferralLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                  {copied ? "Copied" : "Copy referral link"}
                </button>

                <button
                  type="button"
                  onClick={shareReferral}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Share2 size={17} />
                  Share
                </button>
              </div>
            </div>

            <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  Referral balance
                </span>
                <Sparkles size={19} className="text-emerald-300" />
              </div>

              <p className="mt-3 text-3xl font-bold">\u20A620,000</p>

              <p className="mt-1 text-xs text-slate-400">
                Total rewards earned
              </p>

              <div className="mt-5 h-px bg-white/10" />

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-400">Available</span>
                <span className="font-semibold text-white">
                  \u20A615,000
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-slate-400">Pending</span>
                <span className="font-semibold text-amber-300">
                  \u20A65,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Users}
          label="Total referrals"
          value="5"
          detail="Friends invited"
          iconClass="bg-blue-50 text-blue-600"
        />

        <StatCard
          icon={Check}
          label="Completed"
          value={String(completedReferrals)}
          detail="Eligible referrals"
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          icon={ArrowDownRight}
          label="Pending"
          value={String(pendingReferrals)}
          detail="Awaiting activity"
          iconClass="bg-amber-50 text-amber-600"
        />

        <StatCard
          icon={Wallet}
          label="Rewards earned"
          value="\u20A620,000"
          detail="Lifetime rewards"
          iconClass="bg-violet-50 text-violet-600"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#071a33]">
                Your referral link
              </h2>
              <p className="mt-1 text-sm text-[#718096]">
                Share this link to invite people to OLAVEXA.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              <Link2 size={13} />
              Active
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-[#e5ece9] bg-[#f8fbfa] p-4">
            <p className="break-all text-sm font-medium text-[#071a33]">
              {referralLink}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={copyReferralLink}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#071a33] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2748]"
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Copied to clipboard" : "Copy link"}
            </button>

            <button
              type="button"
              onClick={shareReferral}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#e5ece9] px-4 py-3 text-sm font-semibold text-[#071a33] transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <Share2 size={17} />
              Share link
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3">
            <div>
              <p className="text-xs text-emerald-700">Referral code</p>
              <p className="mt-1 text-sm font-bold tracking-wide text-emerald-900">
                {referralCode}
              </p>
            </div>

            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(referralCode);
                  setCopied(true);

                  window.setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                } catch {
                  setCopied(false);
                }
              }}
              className="rounded-xl p-2 text-emerald-700 transition hover:bg-emerald-100"
              aria-label="Copy referral code"
            >
              <Copy size={17} />
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#071a33]">
                Current tier
              </h2>
              <p className="mt-1 text-sm text-[#718096]">
                Keep referring to unlock higher rewards.
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Sparkles size={21} />
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#f8fbfa] p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#071a33]">
                Starter
              </span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Current
              </span>
            </div>

            <p className="mt-3 text-2xl font-bold text-[#071a33]">
              \u20A65,000
              <span className="ml-1 text-sm font-medium text-[#718096]">
                per eligible referral
              </span>
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#dfeae6]">
              <div className="h-full w-1/2 rounded-full bg-emerald-500" />
            </div>

            <div className="mt-2 flex justify-between text-xs text-[#718096]">
              <span>5 referrals</span>
              <span>10 referrals</span>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <div className="mt-0.5 text-emerald-600">
              <Check size={17} />
            </div>

            <p className="text-sm leading-6 text-[#718096]">
              You need 5 more eligible referrals to reach the Elite tier.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-[#071a33]">
            Referral history
          </h2>
          <p className="mt-1 text-sm text-[#718096]">
            Track the people you have invited and the rewards associated with
            them.
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-[#e5ece9]">
          <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 bg-[#f8fbfa] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#718096] sm:grid">
            <span>Referral</span>
            <span>Date</span>
            <span>Status</span>
            <span className="text-right">Reward</span>
          </div>

          <div className="divide-y divide-[#e5ece9]">
            {referrals.map((referral) => (
              <div
                key={referral.id}
                className="grid gap-3 px-5 py-4 sm:grid-cols-[1.5fr_1fr_1fr_1fr] sm:items-center sm:gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#071a33] text-xs font-bold text-white">
                    {referral.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#071a33]">
                      {referral.name}
                    </p>
                    <p className="text-xs text-[#718096] sm:hidden">
                      {referral.date}
                    </p>
                  </div>
                </div>

                <span className="hidden text-sm text-[#718096] sm:block">
                  {referral.date}
                </span>

                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                    referral.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {referral.status}
                </span>

                <div className="flex items-center justify-between sm:justify-end">
                  <span className="text-xs text-[#718096] sm:hidden">
                    Reward
                  </span>
                  <span className="text-sm font-bold text-[#071a33]">
                    {referral.reward}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Gift size={19} />
            </div>

            <div>
              <h2 className="font-bold text-[#071a33]">
                Reward tiers
              </h2>
              <p className="text-sm text-[#718096]">
                Grow your network to unlock more.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-4 ${
                  tier.active
                    ? "border-emerald-200 bg-emerald-50/50"
                    : "border-[#e5ece9] bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#071a33]">
                      {tier.name}
                    </p>
                    <p className="mt-1 text-xs text-[#718096]">
                      {tier.referrals}
                    </p>
                  </div>

                  <p className="text-sm font-bold text-[#071a33]">
                    {tier.reward}
                  </p>
                </div>

                <p className="mt-3 text-xs leading-5 text-[#718096]">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-[#071a33] p-5 text-white shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
              <Wallet size={19} />
            </div>

            <div>
              <h2 className="font-bold">Reward balance</h2>
              <p className="text-sm text-slate-400">
                Available referral rewards
              </p>
            </div>
          </div>

          <p className="mt-7 text-3xl font-bold">\u20A615,000</p>

          <p className="mt-2 text-sm text-slate-400">
            Ready to be credited to your OLAVEXA wallet once the applicable
            reward conditions are met.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#071a33] transition hover:bg-emerald-50"
          >
            View reward activity
            <ChevronRight size={17} />
          </button>

          <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
            <ArrowUpRight size={14} className="text-emerald-300" />
            Rewards are subject to OLAVEXA referral terms.
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600">
            <InfoIcon />
          </div>

          <div>
            <h2 className="text-sm font-bold text-amber-900">
              Referral program information
            </h2>

            <p className="mt-1 text-sm leading-6 text-amber-800">
              Referral rewards shown here are demo values for the OLAVEXA Web
              App. In production, eligibility, reward amounts, settlement
              timing and program terms will be controlled by the rewards
              backend.
            </p>
          </div>
        </div>
      </section>

      {shareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04111f]/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Share referral
                </p>
                <h2 className="mt-1 text-xl font-bold text-[#071a33]">
                  Invite someone to OLAVEXA
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShareOpen(false)}
                className="rounded-xl p-2 text-[#718096] hover:bg-[#f3f7f5]"
                aria-label="Close share dialog"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mt-5 rounded-2xl bg-[#f8fbfa] p-4">
              <p className="break-all text-sm font-medium text-[#071a33]">
                {referralLink}
              </p>
            </div>

            <button
              type="button"
              onClick={async () => {
                await copyReferralLink();
                setShareOpen(false);
              }}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#071a33] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0b2748]"
            >
              <Copy size={17} />
              Copy referral link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  iconClass,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  detail: string;
  iconClass: string;
}) {
  return (
    <div className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={19} />
        </div>

        <ArrowUpRight size={17} className="text-[#a0aec0]" />
      </div>

      <p className="mt-5 text-sm text-[#718096]">{label}</p>

      <p className="mt-1 text-2xl font-bold text-[#071a33]">{value}</p>

      <p className="mt-1 text-xs text-[#718096]">{detail}</p>
    </div>
  );
}

function InfoIcon() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-current text-xs font-bold">
      i
    </span>
  );
}
