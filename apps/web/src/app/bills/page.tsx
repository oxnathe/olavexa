"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Banknote,
  Check,
  ChevronDown,
  Copy,
  CreditCard,
  FileText,
  Lightbulb,
  Loader2,
  Phone,
  Receipt,
  Search,
  ShieldCheck,
  Smartphone,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";

type BillCategory =
  | "All"
  | "Electricity"
  | "Airtime"
  | "Data"
  | "Cable TV";

type Bill = {
  id: number;
  category: Exclude<BillCategory, "All">;
  name: string;
  provider: string;
  amount: string;
  status: "Completed" | "Pending";
  reference: string;
  date: string;
};

const categories = [
  { label: "All", icon: Receipt },
  { label: "Electricity", icon: Lightbulb },
  { label: "Airtime", icon: Phone },
  { label: "Data", icon: Wifi },
  { label: "Cable TV", icon: Tv },
] as const;

const providers = {
  Electricity: [
    "Ikeja Electric",
    "Eko Electricity",
    "Abuja Electricity",
    "Kano Electricity",
  ],
  Airtime: ["MTN", "Airtel", "Glo", "9mobile"],
  Data: ["MTN", "Airtel", "Glo", "9mobile"],
  "Cable TV": ["DSTV", "GOtv", "StarTimes"],
} as const;

const recentBills: Bill[] = [
  {
    id: 1,
    category: "Electricity",
    name: "Ikeja Electric",
    provider: "Prepaid Meter",
    amount: "₦35,000.00",
    status: "Completed",
    reference: "OLX-ELC-849201",
    date: "Today, 10:42 AM",
  },
  {
    id: 2,
    category: "Data",
    name: "MTN",
    provider: "20GB Data Bundle",
    amount: "₦7,500.00",
    status: "Completed",
    reference: "OLX-DAT-738114",
    date: "Yesterday, 6:18 PM",
  },
  {
    id: 3,
    category: "Airtime",
    name: "Airtel",
    provider: "Airtime Top-up",
    amount: "₦5,000.00",
    status: "Completed",
    reference: "OLX-AIR-629481",
    date: "Sep 27, 2:31 PM",
  },
  {
    id: 4,
    category: "Cable TV",
    name: "DSTV",
    provider: "Compact Plus",
    amount: "₦29,500.00",
    status: "Pending",
    reference: "OLX-TV-518273",
    date: "Sep 26, 9:05 AM",
  },
];

const savedBeneficiaries = [
  {
    name: "Home Electricity",
    provider: "Ikeja Electric",
    identifier: "Meter •••• 4821",
    category: "Electricity",
    icon: Lightbulb,
  },
  {
    name: "My MTN Line",
    provider: "MTN",
    identifier: "0803 ••• •921",
    category: "Airtime",
    icon: Phone,
  },
  {
    name: "Home DSTV",
    provider: "DSTV",
    identifier: "Smartcard •••• 1094",
    category: "Cable TV",
    icon: Tv,
  },
];

export default function BillsPage() {
  const [category, setCategory] = useState<BillCategory>("All");
  const [provider, setProvider] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [amount, setAmount] = useState("");
  const [showProviders, setShowProviders] = useState(false);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const currentProviders =
    category !== "All" ? providers[category] : [];

  const filteredBills = useMemo(() => {
    const query = search.trim().toLowerCase();

    return recentBills.filter((bill) => {
      const matchesCategory =
        category === "All" || bill.category === category;

      const matchesSearch =
        !query ||
        bill.name.toLowerCase().includes(query) ||
        bill.provider.toLowerCase().includes(query) ||
        bill.reference.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const selectCategory = (nextCategory: BillCategory) => {
    setCategory(nextCategory);
    setProvider("");
    setMessage("");
  };

  const copyReference = async (reference: string) => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(reference);

      window.setTimeout(() => {
        setCopied("");
      }, 1600);
    } catch {
      setCopied("");
    }
  };

  const handlePayment = () => {
    if (
      category === "All" ||
      !provider ||
      !identifier.trim() ||
      !amount.trim()
    ) {
      setMessage("Complete the bill details before continuing.");
      return;
    }

    setIsProcessing(true);
    setMessage("");

    window.setTimeout(() => {
      setIsProcessing(false);
      setMessage(
        "Demo payment created successfully. No real money was charged."
      );
    }, 900);
  };

  const balance = "₦1,245,122.50";

  return (
    <main className="min-h-screen bg-[#f6f9f8] px-4 py-6 text-[#071a33] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#059669]">
                  Bills & Payments
                </p>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Pay your bills
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#718096]">
                Pay electricity, airtime, data and cable subscriptions
                directly from your OLAVEXA wallet.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[#e5ece9] bg-white px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                <Banknote size={19} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#718096]">
                  Available balance
                </p>
                <p className="mt-0.5 text-sm font-bold">{balance}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Category selector */}
        <section className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((item) => {
            const Icon = item.icon;
            const active = category === item.label;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => selectCategory(item.label)}
                className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${
                  active
                    ? "border-[#10b981] bg-[#071a33] text-white shadow-lg shadow-[#071a33]/10"
                    : "border-[#e5ece9] bg-white text-[#071a33] hover:-translate-y-0.5 hover:border-[#10b981]/40 hover:shadow-md"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    active
                      ? "bg-[#10b981] text-white"
                      : "bg-[#eaf8f2] text-[#059669]"
                  }`}
                >
                  <Icon size={18} />
                </span>

                <span>
                  <span className="block text-sm font-semibold">
                    {item.label}
                  </span>
                  <span
                    className={`mt-0.5 block text-[10px] ${
                      active ? "text-white/55" : "text-[#718096]"
                    }`}
                  >
                    {item.label === "All"
                      ? "All bill payments"
                      : `Pay ${item.label.toLowerCase()}`}
                  </span>
                </span>
              </button>
            );
          })}
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          {/* Payment form */}
          <section className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#059669]">
                  New payment
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {category === "All"
                    ? "Choose a bill category"
                    : `Pay ${category}`}
                </h2>
              </div>

              <div className="hidden rounded-xl bg-[#f6f9f8] px-3 py-2 sm:block">
                <ShieldCheck size={18} className="text-[#059669]" />
              </div>
            </div>

            {category === "All" ? (
              <div className="rounded-2xl border border-dashed border-[#cddbd5] bg-[#f8fbfa] p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8f2] text-[#059669]">
                  <Receipt size={24} />
                </div>

                <h3 className="mt-4 text-base font-bold">
                  Select a payment category
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#718096]">
                  Choose electricity, airtime, data or cable TV above to
                  continue with your payment.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Provider */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#071a33]">
                    Provider
                  </label>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowProviders((value) => !value)}
                      className="flex w-full items-center justify-between rounded-xl border border-[#e5ece9] bg-white px-4 py-3.5 text-left text-sm transition hover:border-[#10b981]/50"
                    >
                      <span
                        className={
                          provider ? "text-[#071a33]" : "text-[#718096]"
                        }
                      >
                        {provider || `Select ${category} provider`}
                      </span>

                      <ChevronDown
                        size={17}
                        className={`text-[#718096] transition-transform ${
                          showProviders ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {showProviders && (
                      <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-[#e5ece9] bg-white p-1 shadow-xl">
                        {currentProviders.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setProvider(item);
                              setShowProviders(false);
                            }}
                            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition hover:bg-[#f6f9f8]"
                          >
                            {item}
                            {provider === item && (
                              <Check size={16} className="text-[#059669]" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Identifier */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#071a33]">
                    {category === "Electricity"
                      ? "Meter number"
                      : category === "Cable TV"
                        ? "Smartcard / IUC number"
                        : "Phone number"}
                  </label>

                  <input
                    value={identifier}
                    onChange={(event) => setIdentifier(event.target.value)}
                    placeholder={
                      category === "Electricity"
                        ? "Enter meter number"
                        : category === "Cable TV"
                          ? "Enter smartcard number"
                          : "0803 000 0000"
                    }
                    className="w-full rounded-xl border border-[#e5ece9] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aec0] focus:border-[#10b981] focus:ring-4 focus:ring-[#10b981]/10"
                  />
                </div>

                {/* Amount */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#071a33]">
                    Amount
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#718096]">
                      ₦
                    </span>

                    <input
                      value={amount}
                      onChange={(event) =>
                        setAmount(event.target.value.replace(/[^\d.]/g, ""))
                      }
                      inputMode="decimal"
                      placeholder="0.00"
                      className="w-full rounded-xl border border-[#e5ece9] bg-white py-3.5 pl-9 pr-4 text-sm font-semibold outline-none transition placeholder:text-[#a0aec0] focus:border-[#10b981] focus:ring-4 focus:ring-[#10b981]/10"
                    />
                  </div>
                </div>

                {/* Quick amounts */}
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#718096]">
                    Quick amount
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["₦1,000", "₦2,000", "₦5,000", "₦10,000"].map(
                      (quickAmount) => (
                        <button
                          key={quickAmount}
                          type="button"
                          onClick={() =>
                            setAmount(quickAmount.replace(/[₦,]/g, ""))
                          }
                          className="rounded-lg border border-[#e5ece9] bg-[#f8fbfa] px-3 py-2 text-xs font-semibold text-[#071a33] transition hover:border-[#10b981]/40 hover:bg-[#eaf8f2]"
                        >
                          {quickAmount}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-2xl bg-[#f6f9f8] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#718096]">Payment amount</span>
                    <span className="font-semibold">
                      ₦{Number(amount || 0).toLocaleString("en-NG", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-[#e5ece9] pt-3 text-sm">
                    <span className="text-[#718096]">Service fee</span>
                    <span className="font-semibold text-[#059669]">
                      ₦0.00
                    </span>
                  </div>
                </div>

                {message && (
                  <div
                    className={`rounded-xl px-4 py-3 text-xs leading-5 ${
                      message.startsWith("Demo")
                        ? "bg-[#eaf8f2] text-[#047857]"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {message}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a33] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#102947] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay bill
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#718096]">
                  <ShieldCheck size={14} className="text-[#059669]" />
                  Protected by OLAVEXA security
                </div>
              </div>
            )}
          </section>

          {/* Saved beneficiaries */}
          <section className="rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#059669]">
                  Saved
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  Beneficiaries
                </h2>
              </div>

              <button
                type="button"
                className="rounded-lg p-2 text-[#718096] transition hover:bg-[#f6f9f8] hover:text-[#071a33]"
                aria-label="Search beneficiaries"
              >
                <Search size={17} />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {savedBeneficiaries.map((beneficiary) => {
                const Icon = beneficiary.icon;

                return (
                  <button
                    key={beneficiary.name}
                    type="button"
                    onClick={() => {
                      setCategory(
                        beneficiary.category as Exclude<
                          BillCategory,
                          "All"
                        >
                      );
                      setProvider(beneficiary.provider);
                      setIdentifier(beneficiary.identifier);
                      setMessage("");
                    }}
                    className="group flex w-full items-center gap-3 rounded-2xl border border-[#e5ece9] p-3 text-left transition hover:border-[#10b981]/40 hover:bg-[#f8fbfa]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                      <Icon size={17} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">
                        {beneficiary.name}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-[#718096]">
                        {beneficiary.provider} · {beneficiary.identifier}
                      </span>
                    </span>

                    <ArrowRight
                      size={16}
                      className="text-[#a0aec0] transition group-hover:translate-x-0.5 group-hover:text-[#059669]"
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#cddbd5] px-4 py-3 text-xs font-semibold text-[#059669] transition hover:border-[#10b981] hover:bg-[#eaf8f2]"
            >
              + Add beneficiary
            </button>

            <div className="mt-6 rounded-2xl bg-[#071a33] p-5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <CreditCard size={18} />
                </span>

                <div>
                  <p className="text-sm font-semibold">
                    Pay directly from wallet
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    No card required for your OLAVEXA bill payments.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recent payments */}
        <section className="mt-6 rounded-3xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#059669]">
                Payment history
              </p>
              <h2 className="mt-1 text-xl font-bold">
                Recent bill payments
              </h2>
            </div>

            <div className="relative w-full sm:w-72">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#718096]"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search payments..."
                className="w-full rounded-xl border border-[#e5ece9] bg-[#f8fbfa] py-2.5 pl-9 pr-3 text-xs outline-none transition focus:border-[#10b981]"
              />
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="border-b border-[#e5ece9] text-left">
                  <th className="px-3 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#718096]">
                    Bill
                  </th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#718096]">
                    Amount
                  </th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#718096]">
                    Status
                  </th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#718096]">
                    Reference
                  </th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#718096]">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredBills.map((bill) => {
                  const Icon =
                    bill.category === "Electricity"
                      ? Lightbulb
                      : bill.category === "Airtime"
                        ? Phone
                        : bill.category === "Data"
                          ? Wifi
                          : Tv;

                  return (
                    <tr
                      key={bill.id}
                      className="border-b border-[#f0f4f2] last:border-0"
                    >
                      <td className="px-3 py-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf8f2] text-[#059669]">
                            <Icon size={16} />
                          </span>

                          <div>
                            <p className="text-sm font-semibold">
                              {bill.name}
                            </p>
                            <p className="mt-0.5 text-[10px] text-[#718096]">
                              {bill.provider}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-3 py-4 text-sm font-semibold">
                        {bill.amount}
                      </td>

                      <td className="px-3 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${
                            bill.status === "Completed"
                              ? "bg-[#eaf8f2] text-[#047857]"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {bill.status}
                        </span>
                      </td>

                      <td className="px-3 py-4">
                        <button
                          type="button"
                          onClick={() => copyReference(bill.reference)}
                          className="flex items-center gap-2 text-xs text-[#718096] transition hover:text-[#059669]"
                        >
                          {bill.reference}
                          {copied === bill.reference ? (
                            <Check size={13} className="text-[#059669]" />
                          ) : (
                            <Copy size={13} />
                          )}
                        </button>
                      </td>

                      <td className="px-3 py-4 text-xs text-[#718096]">
                        {bill.date}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredBills.length === 0 && (
              <div className="py-10 text-center">
                <FileText
                  size={25}
                  className="mx-auto text-[#a0aec0]"
                />
                <p className="mt-3 text-sm font-semibold">
                  No payments found
                </p>
                <p className="mt-1 text-xs text-[#718096]">
                  Try another search or category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Security note */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#e5ece9] bg-white p-4 sm:flex-row sm:items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
            <ShieldCheck size={18} />
          </div>

          <div className="flex-1">
            <p className="text-xs font-bold">Secure bill payments</p>
            <p className="mt-1 text-[11px] leading-5 text-[#718096]">
              OLAVEXA protects payment activity with transaction
              monitoring and wallet security controls.
            </p>
          </div>

          <span className="text-[10px] font-semibold text-[#059669]">
            Demo environment
          </span>
        </div>
      </div>
    </main>
  );
}
