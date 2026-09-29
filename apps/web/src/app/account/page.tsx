"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Copy,
  Edit3,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

export default function AccountPage() {
  const [copied, setCopied] = useState(false);

  const accountId = "OLX-849201";

  const copyAccountId = async () => {
    try {
      await navigator.clipboard.writeText(accountId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-full bg-[#f6f9f8]">
      <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <section className="overflow-hidden rounded-3xl bg-[#071a33] p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium text-emerald-300">
                Account
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your OLAVEXA account
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Manage your profile, account information, verification status,
                and important account details from one place.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Account status</p>
                <p className="text-sm font-semibold text-white">Active</p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile + account ID */}
        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-[#e5ece9] bg-white p-6 shadow-sm sm:p-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#eaf8f2] text-2xl font-bold text-[#059669]">
                OU
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-[#071a33]">
                    OLAVEXA User
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf8f2] px-2.5 py-1 text-xs font-semibold text-[#059669]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                <p className="mt-1 text-sm text-[#718096]">
                  Personal account
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-[#f6f9f8] px-3 py-2 text-sm text-[#718096]">
                    <Mail className="h-4 w-4" />
                    user@olavexa.app
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-[#f6f9f8] px-3 py-2 text-sm text-[#718096]">
                    <Phone className="h-4 w-4" />
                    +234 801 *** 4821
                  </div>
                </div>
              </div>

              <Link
                href="/settings"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e5ece9] px-4 py-2.5 text-sm font-semibold text-[#071a33] transition hover:bg-[#f6f9f8]"
              >
                <Edit3 className="h-4 w-4" />
                Edit profile
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e5ece9] bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#718096]">Account ID</p>
                <p className="mt-2 text-xl font-bold tracking-wide text-[#071a33]">
                  {accountId}
                </p>
              </div>

              <button
                type="button"
                onClick={copyAccountId}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6f9f8] text-[#071a33] transition hover:bg-[#eaf8f2]"
                aria-label="Copy account ID"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            {copied && (
              <p className="mt-3 text-xs font-medium text-[#059669]">
                Account ID copied.
              </p>
            )}

            <p className="mt-4 text-xs leading-5 text-[#718096]">
              Use this ID when contacting OLAVEXA support about your account.
            </p>
          </div>
        </section>

        {/* Account overview */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-[#071a33]">
              Account overview
            </h2>
            <p className="mt-1 text-sm text-[#718096]">
              Important information about your OLAVEXA account.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <OverviewCard
              icon={<User className="h-5 w-5" />}
              label="Profile"
              value="Complete"
              detail="Your basic information is up to date."
            />

            <OverviewCard
              icon={<ShieldCheck className="h-5 w-5" />}
              label="Security"
              value="Protected"
              detail="Core security controls are enabled."
            />

            <OverviewCard
              icon={<CheckCircle2 className="h-5 w-5" />}
              label="Identity"
              value="Verified"
              detail="Identity verification status is active."
            />

            <OverviewCard
              icon={<Phone className="h-5 w-5" />}
              label="Contact"
              value="Confirmed"
              detail="Your email and phone are confirmed."
            />
          </div>
        </section>

        {/* Account actions */}
        <section className="rounded-3xl border border-[#e5ece9] bg-white shadow-sm">
          <div className="border-b border-[#e5ece9] p-6">
            <h2 className="text-lg font-bold text-[#071a33]">
              Manage your account
            </h2>
            <p className="mt-1 text-sm text-[#718096]">
              Quickly access the areas that control your account.
            </p>
          </div>

          <div className="divide-y divide-[#e5ece9]">
            <AccountLink
              href="/settings"
              title="Profile & preferences"
              description="Update your personal information, currency, language, theme, and preferences."
            />

            <AccountLink
              href="/security"
              title="Security & authentication"
              description="Manage 2FA, biometric authentication, transaction PIN, passwords, and sessions."
            />

            <AccountLink
              href="/notifications"
              title="Notifications"
              description="Control transaction, security, market, card, and product notifications."
            />

            <AccountLink
              href="/support"
              title="Account support"
              description="Get help with your account or contact OLAVEXA support."
            />
          </div>
        </section>

        {/* Verification */}
        <section className="rounded-3xl border border-[#d8eee5] bg-[#eaf8f2] p-6 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#059669] shadow-sm">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold text-[#071a33]">
                  Identity verification
                </h2>

                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#059669]">
                  Verified
                </span>
              </div>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#527067]">
                Your account verification status is currently active. More
                advanced verification levels can be introduced when OLAVEXA
                connects to its production KYC services.
              </p>
            </div>

            <Link
              href="/security"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#059669] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#047857]"
            >
              Security
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Account information */}
        <section className="rounded-3xl border border-[#e5ece9] bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-[#071a33]">
            Account information
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <InfoItem label="Account type" value="Personal" />
            <InfoItem label="Country" value="Nigeria" />
            <InfoItem label="Base currency" value="NGN — Naira" />
            <InfoItem label="Member since" value="September 2026" />
          </div>
        </section>

        {/* Demo notice */}
        <div className="rounded-2xl border border-[#e5ece9] bg-white p-4 text-center text-xs leading-5 text-[#718096]">
          Account information shown here is currently demo data. Production
          identity verification, account changes, and KYC services will be
          connected to the OLAVEXA backend later.
        </div>
      </div>
    </main>
  );
}

function OverviewCard({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
        {icon}
      </div>

      <p className="mt-4 text-sm text-[#718096]">{label}</p>
      <p className="mt-1 text-lg font-bold text-[#071a33]">{value}</p>
      <p className="mt-2 text-xs leading-5 text-[#718096]">{detail}</p>
    </div>
  );
}

function AccountLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-5 transition hover:bg-[#f6f9f8] sm:p-6"
    >
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-[#071a33]">{title}</h3>
        <p className="mt-1 text-sm leading-5 text-[#718096]">
          {description}
        </p>
      </div>

      <ChevronRight className="h-5 w-5 shrink-0 text-[#718096]" />
    </Link>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-[#718096]">
        {label}
      </p>
      <p className="mt-2 font-semibold text-[#071a33]">{value}</p>
    </div>
  );
}
