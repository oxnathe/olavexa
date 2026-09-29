"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  ChevronRight,
  CreditCard,
  Globe2,
  KeyRound,
  Languages,
  LockKeyhole,
  Mail,
  Moon,
  Palette,
  Phone,
  Save,
  ShieldCheck,
  Smartphone,
  Sun,
  User,
  WalletCards,
  X,
} from "lucide-react";

type Section = "Profile" | "Preferences" | "Notifications" | "Account";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<Section>("Profile");

  const [firstName, setFirstName] = useState("OLAVEXA");
  const [lastName, setLastName] = useState("USER");
  const [email, setEmail] = useState("user@olavexa.app");
  const [phone, setPhone] = useState("+234 901 902 8248");

  const [currency, setCurrency] = useState("NGN");
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");

  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [marketingAlerts, setMarketingAlerts] = useState(false);
  const [priceAlerts, setPriceAlerts] = useState(true);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const saveSettings = () => {
    setShowSuccess(true);

    window.setTimeout(() => {
      setShowSuccess(false);
    }, 2200);
  };

  const sections: Array<{
    id: Section;
    label: string;
    description: string;
    icon: typeof User;
  }> = [
    {
      id: "Profile",
      label: "Profile",
      description: "Personal information",
      icon: User,
    },
    {
      id: "Preferences",
      label: "Preferences",
      description: "Language, currency and appearance",
      icon: Palette,
    },
    {
      id: "Notifications",
      label: "Notifications",
      description: "Manage alerts and updates",
      icon: Bell,
    },
    {
      id: "Account",
      label: "Account",
      description: "Account and connected services",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-full bg-[#f6f9f8]">
      <div className="mx-auto max-w-[1500px] space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#059669]">
            <User className="h-4 w-4" />
            Account configuration
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#071a33] sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-[#718096] sm:text-base">
            Manage your OLAVEXA profile, preferences, notifications, and
            account controls.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Settings navigation */}
          <aside className="h-fit rounded-2xl border border-[#e5ece9] bg-white p-2 shadow-sm">
            <div className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const active = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                      active
                        ? "bg-[#eaf8f2] text-[#059669]"
                        : "text-[#718096] hover:bg-[#f6f9f8] hover:text-[#071a33]"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        active
                          ? "bg-white text-[#059669] shadow-sm"
                          : "bg-[#f6f9f8] text-[#718096]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold">{section.label}</p>
                      <p className="mt-0.5 truncate text-[11px] opacity-75">
                        {section.description}
                      </p>
                    </div>

                    <ChevronRight
                      className={`h-4 w-4 shrink-0 ${
                        active ? "opacity-100" : "opacity-50"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-3 border-t border-[#e5ece9] pt-3">
              <div className="rounded-xl bg-[#f9fcfb] p-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#059669]" />
                  <p className="text-xs font-bold text-[#071a33]">
                    Account protected
                  </p>
                </div>

                <p className="mt-1 text-[11px] leading-5 text-[#718096]">
                  Your security controls are active.
                </p>
              </div>
            </div>
          </aside>

          {/* Main settings */}
          <main className="min-w-0 space-y-6">
            {/* Profile */}
            {activeSection === "Profile" && (
              <>
                <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
                  <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                    <h2 className="text-base font-bold text-[#071a33]">
                      Profile information
                    </h2>

                    <p className="mt-1 text-sm text-[#718096]">
                      Keep your personal account information up to date.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071a33] text-lg font-bold text-white">
                        OU
                      </div>

                      <div>
                        <p className="text-sm font-bold text-[#071a33]">
                          OLAVEXA USER
                        </p>

                        <p className="mt-1 text-xs text-[#718096]">
                          Verified account
                        </p>

                        <button
                          type="button"
                          className="mt-2 text-xs font-bold text-[#059669] hover:underline"
                        >
                          Change profile photo
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-semibold text-[#071a33]">
                          First name
                        </span>

                        <input
                          value={firstName}
                          onChange={(event) =>
                            setFirstName(event.target.value)
                          }
                          className="h-11 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm text-[#071a33] outline-none transition placeholder:text-[#a0aec0] focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/10"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-semibold text-[#071a33]">
                          Last name
                        </span>

                        <input
                          value={lastName}
                          onChange={(event) =>
                            setLastName(event.target.value)
                          }
                          className="h-11 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm text-[#071a33] outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/10"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#071a33]">
                          <Mail className="h-3.5 w-3.5 text-[#718096]" />
                          Email address
                        </span>

                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="h-11 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm text-[#071a33] outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/10"
                        />

                        <span className="mt-1.5 block text-[11px] font-semibold text-[#059669]">
                          Verified
                        </span>
                      </label>

                      <label className="block">
                        <span className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#071a33]">
                          <Phone className="h-3.5 w-3.5 text-[#718096]" />
                          Phone number
                        </span>

                        <input
                          type="tel"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          className="h-11 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm text-[#071a33] outline-none transition focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/10"
                        />

                        <span className="mt-1.5 block text-[11px] font-semibold text-[#059669]">
                          Verified
                        </span>
                      </label>
                    </div>
                  </div>
                </section>

                <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>

                      <div>
                        <h2 className="text-sm font-bold text-[#071a33]">
                          Identity verification
                        </h2>

                        <p className="mt-1 text-xs leading-5 text-[#718096]">
                          Your account verification status helps unlock
                          protected OLAVEXA features.
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#eaf8f2] px-3 py-1.5 text-xs font-bold text-[#059669]">
                      <Check className="h-3.5 w-3.5" />
                      Verified
                    </span>
                  </div>
                </section>
              </>
            )}

            {/* Preferences */}
            {activeSection === "Preferences" && (
              <>
                <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
                  <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                    <h2 className="text-base font-bold text-[#071a33]">
                      Regional preferences
                    </h2>

                    <p className="mt-1 text-sm text-[#718096]">
                      Choose how values and content are displayed across
                      OLAVEXA.
                    </p>
                  </div>

                  <div className="divide-y divide-[#e5ece9]">
                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                          <WalletCards className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-[#071a33]">
                            Default currency
                          </p>
                          <p className="mt-1 text-xs text-[#718096]">
                            Used for balances and transaction displays
                          </p>
                        </div>
                      </div>

                      <select
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        className="h-10 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm font-semibold text-[#071a33] outline-none focus:border-[#10b981] sm:w-40"
                      >
                        <option value="NGN">NGN — Naira</option>
                        <option value="USD">USD — Dollar</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                          <Languages className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-[#071a33]">
                            Language
                          </p>
                          <p className="mt-1 text-xs text-[#718096]">
                            Language used throughout the app
                          </p>
                        </div>
                      </div>

                      <select
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                        className="h-10 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm font-semibold text-[#071a33] outline-none focus:border-[#10b981] sm:w-40"
                      >
                        <option>English</option>
                        <option>French</option>
                        <option>Yoruba</option>
                      </select>
                    </div>
                  </div>
                </section>

                <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
                  <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                    <h2 className="text-base font-bold text-[#071a33]">
                      Appearance
                    </h2>

                    <p className="mt-1 text-sm text-[#718096]">
                      Customize how the OLAVEXA Web App looks.
                    </p>
                  </div>

                  <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-6">
                    {[
                      {
                        name: "Light",
                        icon: Sun,
                        description: "Bright interface",
                      },
                      {
                        name: "Dark",
                        icon: Moon,
                        description: "Low-light interface",
                      },
                      {
                        name: "System",
                        icon: Smartphone,
                        description: "Follow device",
                      },
                    ].map((option) => {
                      const Icon = option.icon;
                      const selected = theme === option.name;

                      return (
                        <button
                          key={option.name}
                          type="button"
                          onClick={() => setTheme(option.name)}
                          className={`rounded-2xl border p-4 text-left transition ${
                            selected
                              ? "border-[#10b981] bg-[#eaf8f2]"
                              : "border-[#e5ece9] hover:border-[#10b981]/50"
                          }`}
                        >
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              selected
                                ? "bg-white text-[#059669]"
                                : "bg-[#f6f9f8] text-[#718096]"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <p className="text-sm font-bold text-[#071a33]">
                              {option.name}
                            </p>

                            {selected && (
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10b981] text-white">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </div>

                          <p className="mt-1 text-xs text-[#718096]">
                            {option.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </section>

                <div className="rounded-2xl border border-[#d9eee6] bg-[#f2fbf7] p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-5 w-5 text-[#059669]" />

                    <div>
                      <p className="text-sm font-bold text-[#071a33]">
                        Current preferences
                      </p>

                      <p className="mt-1 text-xs text-[#718096]">
                        {currency} · {language} · {theme} theme
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Notifications */}
            {activeSection === "Notifications" && (
              <>
                <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
                  <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                        <Bell className="h-5 w-5" />
                      </div>

                      <div>
                        <h2 className="text-base font-bold text-[#071a33]">
                          Notification preferences
                        </h2>

                        <p className="mt-1 text-sm text-[#718096]">
                          Choose the alerts you want to receive.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-[#e5ece9]">
                    {[
                      {
                        title: "Transaction alerts",
                        description:
                          "Deposits, withdrawals, trades and bill payments",
                        value: transactionAlerts,
                        setValue: setTransactionAlerts,
                        icon: WalletCards,
                      },
                      {
                        title: "Security alerts",
                        description:
                          "New logins, password changes and security events",
                        value: securityAlerts,
                        setValue: setSecurityAlerts,
                        icon: ShieldCheck,
                      },
                      {
                        title: "Market price alerts",
                        description:
                          "Updates when tracked assets reach your targets",
                        value: priceAlerts,
                        setValue: setPriceAlerts,
                        icon: Bell,
                      },
                      {
                        title: "Product updates",
                        description:
                          "News, feature announcements and optional offers",
                        value: marketingAlerts,
                        setValue: setMarketingAlerts,
                        icon: Smartphone,
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="flex items-center justify-between gap-4 p-5 sm:p-6"
                        >
                          <div className="flex min-w-0 items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6f9f8] text-[#071a33]">
                              <Icon className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-sm font-bold text-[#071a33]">
                                {item.title}
                              </p>

                              <p className="mt-1 max-w-xl text-xs leading-5 text-[#718096]">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => item.setValue(!item.value)}
                            className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                              item.value ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                            }`}
                            aria-label={`Toggle ${item.title}`}
                          >
                            <span
                              className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                                item.value ? "left-6" : "left-1"
                              }`}
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-[#2563eb]" />

                    <div>
                      <p className="text-sm font-bold text-[#071a33]">
                        Notification channels
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#718096]">
                        Security-critical notifications may be delivered
                        through multiple channels to help protect your account.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#e5ece9] p-4">
                      <p className="text-xs font-bold text-[#071a33]">
                        Email
                      </p>
                      <p className="mt-1 text-xs text-[#718096]">
                        user@olavexa.app
                      </p>
                      <span className="mt-2 inline-flex rounded-full bg-[#eaf8f2] px-2 py-1 text-[10px] font-bold text-[#059669]">
                        Enabled
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#e5ece9] p-4">
                      <p className="text-xs font-bold text-[#071a33]">
                        In-app
                      </p>
                      <p className="mt-1 text-xs text-[#718096]">
                        OLAVEXA notifications
                      </p>
                      <span className="mt-2 inline-flex rounded-full bg-[#eaf8f2] px-2 py-1 text-[10px] font-bold text-[#059669]">
                        Enabled
                      </span>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Account */}
            {activeSection === "Account" && (
              <>
                <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
                  <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                    <h2 className="text-base font-bold text-[#071a33]">
                      Account controls
                    </h2>

                    <p className="mt-1 text-sm text-[#718096]">
                      Manage connected services and important account actions.
                    </p>
                  </div>

                  <div className="divide-y divide-[#e5ece9]">
                    <button
                      type="button"
                      className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-[#f9fcfb] sm:p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                        <Smartphone className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#071a33]">
                          Connected devices
                        </p>

                        <p className="mt-1 text-xs text-[#718096]">
                          Review and manage devices signed into your account.
                        </p>
                      </div>

                      <ChevronRight className="h-4 w-4 text-[#a0aec0]" />
                    </button>

                    <button
                      type="button"
                      className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-[#f9fcfb] sm:p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                        <CreditCard className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#071a33]">
                          Payment preferences
                        </p>

                        <p className="mt-1 text-xs text-[#718096]">
                          Manage default payment and card preferences.
                        </p>
                      </div>

                      <ChevronRight className="h-4 w-4 text-[#a0aec0]" />
                    </button>

                    <button
                      type="button"
                      className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-[#f9fcfb] sm:p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff8e8] text-[#d97706]">
                        <KeyRound className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#071a33]">
                          API & connected services
                        </p>

                        <p className="mt-1 text-xs text-[#718096]">
                          Manage approved integrations and access permissions.
                        </p>
                      </div>

                      <ChevronRight className="h-4 w-4 text-[#a0aec0]" />
                    </button>
                  </div>
                </section>

                <section className="rounded-2xl border border-[#fee2e2] bg-white shadow-sm">
                  <div className="border-b border-[#fee2e2] p-5 sm:p-6">
                    <h2 className="text-base font-bold text-[#dc2626]">
                      Danger zone
                    </h2>

                    <p className="mt-1 text-sm text-[#718096]">
                      These actions can affect access to your OLAVEXA account.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#071a33]">
                          Close account
                        </p>

                        <p className="mt-1 max-w-xl text-xs leading-5 text-[#718096]">
                          Permanently close your OLAVEXA account. This action
                          should only be performed after reviewing your
                          balances and transaction history.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowDeleteModal(true)}
                        className="inline-flex w-fit items-center justify-center rounded-xl border border-[#fecaca] bg-[#fff7f7] px-4 py-2.5 text-sm font-bold text-[#dc2626] transition hover:bg-[#fff1f1]"
                      >
                        Close account
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Save bar */}
            <div className="sticky bottom-4 z-20 flex flex-col gap-3 rounded-2xl border border-[#d9eee6] bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs text-[#718096]">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                Changes are saved to your account preferences.
              </div>

              <button
                type="button"
                onClick={saveSettings}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#071a33] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0a2547]"
              >
                {showSuccess ? (
                  <>
                    <Check className="h-4 w-4" />
                    Changes saved
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Save changes
                  </>
                )}
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Close account modal */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#04111f]/45 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            className="w-full max-w-md rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#fee2e2] p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#dc2626]">
                  Account control
                </p>

                <h2 className="mt-1 text-lg font-bold text-[#071a33]">
                  Close your account?
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f9f8] text-[#718096] transition hover:text-[#071a33]"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 p-5">
              <div className="rounded-xl bg-[#fff7f7] p-4">
                <p className="text-sm font-semibold text-[#dc2626]">
                  This is a demo action.
                </p>

                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  No real account will be closed. Production account closure
                  will require additional verification and confirmation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="w-full rounded-xl bg-[#071a33] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0a2547]"
              >
                Keep my account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
