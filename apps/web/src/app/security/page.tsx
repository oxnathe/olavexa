"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  Eye,
  EyeOff,
  Fingerprint,
  KeyRound,
  Laptop,
  LockKeyhole,
  Monitor,
  MoreHorizontal,
  RefreshCw,
  Shield,
  ShieldCheck,
  Smartphone,
  UserCheck,
  WalletCards,
  X,
} from "lucide-react";

type SecurityActivity = {
  id: number;
  title: string;
  description: string;
  time: string;
  status: "Success" | "Review";
  icon: "login" | "password" | "pin" | "device";
};

const securityActivities: SecurityActivity[] = [
  {
    id: 1,
    title: "Successful login",
    description: "Chrome on Windows",
    time: "Today, 10:18 AM",
    status: "Success",
    icon: "login",
  },
  {
    id: 2,
    title: "Password updated",
    description: "Account password was changed",
    time: "Sep 27, 4:42 PM",
    status: "Success",
    icon: "password",
  },
  {
    id: 3,
    title: "Transaction PIN verified",
    description: "PIN used for wallet transaction",
    time: "Sep 27, 2:31 PM",
    status: "Success",
    icon: "pin",
  },
  {
    id: 4,
    title: "New device detected",
    description: "Safari on iPhone",
    time: "Sep 25, 8:12 PM",
    status: "Review",
    icon: "device",
  },
];

const sessions = [
  {
    id: 1,
    device: "Chrome on Windows",
    location: "Lagos, Nigeria",
    lastActive: "Active now",
    current: true,
    icon: "desktop",
  },
  {
    id: 2,
    device: "Safari on iPhone",
    location: "Lagos, Nigeria",
    lastActive: "2 hours ago",
    current: false,
    icon: "mobile",
  },
  {
    id: 3,
    device: "Chrome on Mac",
    location: "Abuja, Nigeria",
    lastActive: "3 days ago",
    current: false,
    icon: "desktop",
  },
];

function SecurityActivityIcon({
  type,
}: {
  type: SecurityActivity["icon"];
}) {
  if (type === "login") {
    return <UserCheck className="h-4 w-4" />;
  }

  if (type === "password") {
    return <KeyRound className="h-4 w-4" />;
  }

  if (type === "pin") {
    return <LockKeyhole className="h-4 w-4" />;
  }

  return <Smartphone className="h-4 w-4" />;
}

export default function SecurityPage() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometric, setBiometric] = useState(true);
  const [transactionPin, setTransactionPin] = useState(true);
  const [withdrawalProtection, setWithdrawalProtection] = useState(true);
  const [onlineAlerts, setOnlineAlerts] = useState(true);
  const [showPin, setShowPin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSessions, setShowSessions] = useState(false);
  const [selectedSession, setSelectedSession] = useState<
    (typeof sessions)[number] | null
  >(null);
  const [copied, setCopied] = useState(false);

  const activeControls = [
    twoFactor,
    biometric,
    transactionPin,
    withdrawalProtection,
  ].filter(Boolean).length;

  const copySecurityId = async () => {
    try {
      await navigator.clipboard.writeText("OLX-SEC-849201");
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
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#059669]">
            <ShieldCheck className="h-4 w-4" />
            Account protection
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#071a33] sm:text-3xl">
            Security
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-[#718096] sm:text-base">
            Manage your account protection, authentication methods, devices,
            and security preferences.
          </p>
        </div>

        {/* Security score / overview */}
        <section className="overflow-hidden rounded-2xl border border-[#d9eee6] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#eaf8f2]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <ShieldCheck className="h-8 w-8 text-[#059669]" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold text-[#071a33]">
                      Your account is protected
                    </h2>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf8f2] px-2.5 py-1 text-xs font-bold text-[#059669]">
                      <Check className="h-3 w-3" />
                      Secure
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#718096]">
                    Your key security controls are active. Keep your recovery
                    details and devices up to date to maintain account
                    protection.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-[#f6f9f8] px-3 py-1.5 text-xs font-semibold text-[#071a33]">
                      {activeControls}/4 core controls active
                    </span>

                    <span className="rounded-lg bg-[#f6f9f8] px-3 py-1.5 text-xs font-semibold text-[#718096]">
                      Last reviewed today
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center border-t border-[#d9eee6] bg-[#f2fbf7] px-5 py-5 lg:w-72 lg:border-l lg:border-t-0 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#059669]">
                  Security ID
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <code className="text-sm font-bold text-[#071a33]">
                    OLX-SEC-849201
                  </code>

                  <button
                    type="button"
                    onClick={copySecurityId}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#718096] shadow-sm transition hover:text-[#059669]"
                    aria-label="Copy security ID"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-[#059669]" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-xs leading-5 text-[#718096]">
                  Keep this ID available when contacting OLAVEXA support about
                  account security.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
          {/* Main controls */}
          <div className="space-y-6">
            {/* Authentication */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                    <LockKeyhole className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-[#071a33]">
                      Authentication
                    </h2>
                    <p className="mt-1 text-sm text-[#718096]">
                      Choose how OLAVEXA verifies sensitive account actions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-[#e5ece9]">
                {/* 2FA */}
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6f9f8] text-[#071a33]">
                      <Shield className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#071a33]">
                        Two-factor authentication
                      </p>

                      <p className="mt-1 max-w-lg text-xs leading-5 text-[#718096]">
                        Require an additional verification code when signing in
                        from a new device.
                      </p>

                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#059669]">
                        <Check className="h-3 w-3" />
                        Authenticator app enabled
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      twoFactor ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                    }`}
                    aria-label="Toggle two-factor authentication"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        twoFactor ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Biometric */}
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6f9f8] text-[#071a33]">
                      <Fingerprint className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#071a33]">
                        Biometric authentication
                      </p>

                      <p className="mt-1 max-w-lg text-xs leading-5 text-[#718096]">
                        Use your device biometric authentication for supported
                        sensitive actions.
                      </p>

                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#059669]">
                        <Check className="h-3 w-3" />
                        Enabled on supported devices
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setBiometric(!biometric)}
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      biometric ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                    }`}
                    aria-label="Toggle biometric authentication"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        biometric ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Transaction PIN */}
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6f9f8] text-[#071a33]">
                      <KeyRound className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#071a33]">
                        Transaction PIN
                      </p>

                      <p className="mt-1 max-w-lg text-xs leading-5 text-[#718096]">
                        Require your transaction PIN before wallet withdrawals
                        and other protected actions.
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="font-mono text-xs font-bold tracking-[0.3em] text-[#071a33]">
                          {showPin ? "4829" : "••••"}
                        </span>

                        <button
                          type="button"
                          onClick={() => setShowPin(!showPin)}
                          className="text-[#718096] transition hover:text-[#059669]"
                          aria-label={showPin ? "Hide PIN" : "Show PIN"}
                        >
                          {showPin ? (
                            <EyeOff className="h-3.5 w-3.5" />
                          ) : (
                            <Eye className="h-3.5 w-3.5" />
                          )}
                        </button>

                        <button
                          type="button"
                          className="text-xs font-semibold text-[#059669] hover:underline"
                        >
                          Change PIN
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTransactionPin(!transactionPin)}
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      transactionPin ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                    }`}
                    aria-label="Toggle transaction PIN"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        transactionPin ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Password */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                    <KeyRound className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-[#071a33]">
                      Password & login
                    </h2>
                    <p className="mt-1 text-sm text-[#718096]">
                      Keep your primary account credentials protected.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex flex-col gap-4 rounded-xl border border-[#e5ece9] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#071a33]">
                      Account password
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-mono text-sm tracking-widest text-[#718096]">
                        {showPassword ? "OLAVEXA2026" : "••••••••••"}
                      </span>

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[#718096] transition hover:text-[#059669]"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    <p className="mt-2 text-xs text-[#718096]">
                      Last changed 2 days ago
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e5ece9] px-4 py-2.5 text-sm font-semibold text-[#071a33] transition hover:border-[#10b981] hover:text-[#059669]"
                  >
                    Change password
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#f9fcfb] p-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#d97706]" />

                  <p className="text-xs leading-5 text-[#718096]">
                    OLAVEXA will never ask you to share your password,
                    transaction PIN, recovery phrase, or authentication codes.
                  </p>
                </div>
              </div>
            </section>

            {/* Transaction protection */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff8e8] text-[#d97706]">
                    <WalletCards className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-[#071a33]">
                      Transaction protection
                    </h2>
                    <p className="mt-1 text-sm text-[#718096]">
                      Add additional checks around account funds and
                      transactions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-[#e5ece9]">
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <p className="text-sm font-bold text-[#071a33]">
                      Withdrawal protection
                    </p>

                    <p className="mt-1 max-w-xl text-xs leading-5 text-[#718096]">
                      Require additional verification before withdrawals are
                      completed from your wallet.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setWithdrawalProtection(!withdrawalProtection)
                    }
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      withdrawalProtection
                        ? "bg-[#10b981]"
                        : "bg-[#cbd5e1]"
                    }`}
                    aria-label="Toggle withdrawal protection"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        withdrawalProtection ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-sm font-bold text-[#071a33]">
                      Transaction limits
                    </p>

                    <p className="mt-1 text-xs text-[#718096]">
                      Daily withdrawal limit
                    </p>
                  </div>

                  <span className="text-sm font-bold text-[#071a33]">
                    ₦5,000,000
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Devices */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#e5ece9] p-5">
                <div>
                  <h2 className="text-base font-bold text-[#071a33]">
                    Active sessions
                  </h2>

                  <p className="mt-1 text-xs text-[#718096]">
                    Devices currently signed into your account
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                  <Monitor className="h-4 w-4" />
                </div>
              </div>

              <div className="divide-y divide-[#e5ece9]">
                {sessions.slice(0, showSessions ? sessions.length : 2).map(
                  (session) => (
                    <button
                      key={session.id}
                      type="button"
                      onClick={() => setSelectedSession(session)}
                      className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-[#f9fcfb]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6f9f8] text-[#071a33]">
                        {session.icon === "mobile" ? (
                          <Smartphone className="h-4 w-4" />
                        ) : (
                          <Laptop className="h-4 w-4" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-sm font-bold text-[#071a33]">
                            {session.device}
                          </p>

                          {session.current && (
                            <span className="rounded-full bg-[#eaf8f2] px-2 py-0.5 text-[10px] font-bold text-[#059669]">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs text-[#718096]">
                          {session.location}
                        </p>

                        <p className="mt-1 text-[11px] font-medium text-[#a0aec0]">
                          {session.lastActive}
                        </p>
                      </div>

                      <ChevronRight className="h-4 w-4 shrink-0 text-[#a0aec0]" />
                    </button>
                  ),
                )}
              </div>

              <div className="border-t border-[#e5ece9] p-4">
                <button
                  type="button"
                  onClick={() => setShowSessions(!showSessions)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f6f9f8] px-4 py-2.5 text-sm font-semibold text-[#071a33] transition hover:bg-[#eaf8f2] hover:text-[#059669]"
                >
                  {showSessions ? "Show fewer sessions" : "View all sessions"}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </section>

            {/* Security activity */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#e5ece9] p-5">
                <div>
                  <h2 className="text-base font-bold text-[#071a33]">
                    Security activity
                  </h2>

                  <p className="mt-1 text-xs text-[#718096]">
                    Recent account security events
                  </p>
                </div>

                <Clock3 className="h-4 w-4 text-[#718096]" />
              </div>

              <div className="divide-y divide-[#e5ece9]">
                {securityActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex gap-3 p-4"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        activity.status === "Success"
                          ? "bg-[#eaf8f2] text-[#059669]"
                          : "bg-[#fff8e8] text-[#d97706]"
                      }`}
                    >
                      <SecurityActivityIcon type={activity.icon} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-bold text-[#071a33]">
                          {activity.title}
                        </p>

                        {activity.status === "Review" ? (
                          <span className="shrink-0 rounded-full bg-[#fff8e8] px-2 py-1 text-[10px] font-bold text-[#d97706]">
                            Review
                          </span>
                        ) : (
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#10b981]" />
                        )}
                      </div>

                      <p className="mt-1 text-xs text-[#718096]">
                        {activity.description}
                      </p>

                      <p className="mt-1 text-[11px] text-[#a0aec0]">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Alerts */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="border-b border-[#e5ece9] p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef4ff] text-[#2563eb]">
                    <RefreshCw className="h-4 w-4" />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold text-[#071a33]">
                      Security notifications
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-[#718096]">
                      Receive alerts when important security events happen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#071a33]">
                      Login & transaction alerts
                    </p>
                    <p className="mt-1 text-xs text-[#718096]">
                      Email and in-app notifications
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOnlineAlerts(!onlineAlerts)}
                    className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                      onlineAlerts ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                    }`}
                    aria-label="Toggle security notifications"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        onlineAlerts ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom security notice */}
        <section className="rounded-2xl border border-[#d9eee6] bg-[#f2fbf7] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#059669] shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <h2 className="text-sm font-bold text-[#071a33]">
                Security reminder
              </h2>

              <p className="mt-1 max-w-3xl text-xs leading-5 text-[#718096]">
                Never share your OLAVEXA password, transaction PIN, recovery
                phrase, or one-time authentication codes. OLAVEXA support will
                never request these credentials from you.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#071a33] shadow-sm transition hover:text-[#059669]"
            >
              Security guide
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>
      </div>

      {/* Session detail modal */}
      {selectedSession && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#04111f]/45 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setSelectedSession(null)}
        >
          <div
            className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e5ece9] p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#059669]">
                  Device session
                </p>

                <h2 className="mt-1 text-lg font-bold text-[#071a33]">
                  {selectedSession.device}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSession(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f9f8] text-[#718096] transition hover:bg-[#eaf8f2] hover:text-[#071a33]"
                aria-label="Close device details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center gap-4 rounded-2xl bg-[#f6f9f8] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#071a33] shadow-sm">
                  {selectedSession.icon === "mobile" ? (
                    <Smartphone className="h-5 w-5" />
                  ) : (
                    <Laptop className="h-5 w-5" />
                  )}
                </div>

                <div>
                  <p className="text-sm font-bold text-[#071a33]">
                    {selectedSession.location}
                  </p>

                  <p className="mt-1 text-xs text-[#718096]">
                    {selectedSession.lastActive}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#718096]">Device</span>
                  <span className="text-sm font-semibold text-[#071a33]">
                    {selectedSession.device}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#718096]">Location</span>
                  <span className="text-sm font-semibold text-[#071a33]">
                    {selectedSession.location}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#718096]">Status</span>

                  {selectedSession.current ? (
                    <span className="rounded-full bg-[#eaf8f2] px-2.5 py-1 text-xs font-bold text-[#059669]">
                      Current session
                    </span>
                  ) : (
                    <span className="rounded-full bg-[#f6f9f8] px-2.5 py-1 text-xs font-bold text-[#718096]">
                      Active
                    </span>
                  )}
                </div>
              </div>

              {!selectedSession.current && (
                <button
                  type="button"
                  onClick={() => setSelectedSession(null)}
                  className="w-full rounded-xl border border-[#fee2e2] bg-[#fff7f7] px-4 py-3 text-sm font-bold text-[#dc2626] transition hover:bg-[#fff1f1]"
                >
                  Sign out this device
                </button>
              )}

              <button
                type="button"
                onClick={() => setSelectedSession(null)}
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
