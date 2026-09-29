"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  HelpCircle,
  LifeBuoy,
  Mail,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Wallet,
  X,
} from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I deposit money into my OLAVEXA wallet?",
    answer:
      "Open Wallet, select Deposit, choose your available funding method, enter the amount and follow the confirmation steps. Production deposits will use verified payment rails.",
    category: "Wallet",
  },
  {
    question: "How long does a withdrawal take?",
    answer:
      "Withdrawal timing depends on the selected payment rail and verification status. OLAVEXA will show the transaction status in Activity after a withdrawal is submitted.",
    category: "Wallet",
  },
  {
    question: "How do I buy crypto?",
    answer:
      "Go to Trade, select the asset you want to purchase, enter the NGN amount and review the estimated receive amount, rate, fees and slippage before confirming.",
    category: "Trading",
  },
  {
    question: "Where can I see my transaction history?",
    answer:
      "Open Activity from the sidebar. You can filter transactions by category, status and date period, and search using a transaction reference or description.",
    category: "Activity",
  },
  {
    question: "How do I protect my account?",
    answer:
      "Use the Security page to manage two-factor authentication, biometric authentication, transaction PIN protection, withdrawal protection and active sessions.",
    category: "Security",
  },
  {
    question: "Can I use OLAVEXA on multiple devices?",
    answer:
      "Yes. Your account can have multiple active sessions. You can review connected devices and sign out sessions you no longer recognize from the security controls.",
    category: "Security",
  },
  {
    question: "How does the OLAVEXA virtual card work?",
    answer:
      "The virtual card can be used for supported online payments. Card controls such as freezing, international payments, contactless payments and online payments can be managed from the Card page.",
    category: "Card",
  },
  {
    question: "Can I pay Nigerian bills through OLAVEXA?",
    answer:
      "The Bills section is designed for supported Nigerian electricity, airtime, data and cable TV payments. Production availability will depend on the connected bill-payment providers.",
    category: "Bills",
  },
];

const categories = [
  {
    label: "Wallet",
    icon: Wallet,
    description: "Deposits, withdrawals and balances",
  },
  {
    label: "Trading",
    icon: ArrowRight,
    description: "Buying and selling assets",
  },
  {
    label: "Security",
    icon: ShieldCheck,
    description: "Account protection and access",
  },
  {
    label: "Card",
    icon: Smartphone,
    description: "Virtual card and payments",
  },
];

const recentTickets = [
  {
    id: "OLX-SUP-48291",
    subject: "Card payment clarification",
    status: "Resolved",
    date: "Sep 28, 2026",
  },
  {
    id: "OLX-SUP-37184",
    subject: "Wallet deposit question",
    status: "In review",
    date: "Sep 25, 2026",
  },
];

export default function SupportPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [copiedTicket, setCopiedTicket] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        category === "All" || faq.category === category;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const copyTicket = async (id: string) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedTicket(id);

      window.setTimeout(() => {
        setCopiedTicket(null);
      }, 1800);
    } catch {
      setCopiedTicket(id);

      window.setTimeout(() => {
        setCopiedTicket(null);
      }, 1800);
    }
  };

  const submitTicket = () => {
    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
      setShowTicketModal(false);
    }, 1800);
  };

  return (
    <div className="min-h-full bg-[#f6f9f8]">
      <div className="mx-auto max-w-[1500px] space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <section className="overflow-hidden rounded-3xl bg-[#071a33] shadow-sm">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#10b981]/10 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#059669]/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#6ee7b7]">
                <LifeBuoy className="h-4 w-4" />
                OLAVEXA Support
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                How can we help?
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                Find answers, explore support resources, or contact the OLAVEXA
                support team.
              </p>

              <div className="mt-6 max-w-2xl">
                <div className="flex items-center rounded-2xl border border-white/10 bg-white/10 px-4 backdrop-blur">
                  <Search className="h-5 w-5 shrink-0 text-white/50" />

                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search for help..."
                    className="h-13 min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/40"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="text-white/50 transition hover:text-white"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support cards */}
        <section className="grid gap-4 md:grid-cols-3">
          <button
            type="button"
            onClick={() => setShowTicketModal(true)}
            className="group rounded-2xl border border-[#d9eee6] bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#10b981]/40 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf8f2] text-[#059669]">
                <MessageCircle className="h-5 w-5" />
              </div>

              <ArrowRight className="h-4 w-4 text-[#a0aec0] transition group-hover:translate-x-1 group-hover:text-[#059669]" />
            </div>

            <h2 className="mt-5 text-sm font-bold text-[#071a33]">
              Contact support
            </h2>

            <p className="mt-1 text-xs leading-5 text-[#718096]">
              Send a support request and receive help from the OLAVEXA team.
            </p>
          </button>

          <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
              <Clock3 className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-sm font-bold text-[#071a33]">
              Support availability
            </h2>

            <p className="mt-1 text-xs leading-5 text-[#718096]">
              General support requests are reviewed during the support
              team's operating hours.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#059669]">
              <span className="h-2 w-2 rounded-full bg-[#10b981]" />
              Support channel available
            </div>
          </div>

          <div className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff8e8] text-[#d97706]">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-sm font-bold text-[#071a33]">
              Security support
            </h2>

            <p className="mt-1 text-xs leading-5 text-[#718096]">
              Never share your password, transaction PIN or authentication
              codes with anyone.
            </p>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <main className="min-w-0 space-y-6">
            {/* Help categories */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5">
                <h2 className="text-base font-bold text-[#071a33]">
                  Browse help topics
                </h2>

                <p className="mt-1 text-sm text-[#718096]">
                  Explore common areas of the OLAVEXA platform.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {categories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setCategory(item.label);
                        setSearch("");
                      }}
                      className={`rounded-xl border p-4 text-left transition ${
                        category === item.label
                          ? "border-[#10b981] bg-[#eaf8f2]"
                          : "border-[#e5ece9] hover:border-[#10b981]/40 hover:bg-[#f9fcfb]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#059669] shadow-sm">
                          <Icon className="h-4 w-4" />
                        </div>

                        <ArrowRight className="h-4 w-4 text-[#a0aec0]" />
                      </div>

                      <p className="mt-4 text-sm font-bold text-[#071a33]">
                        {item.label}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#718096]">
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* FAQ */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="border-b border-[#e5ece9] p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-base font-bold text-[#071a33]">
                      Frequently asked questions
                    </h2>

                    <p className="mt-1 text-sm text-[#718096]">
                      Quick answers to common OLAVEXA questions.
                    </p>
                  </div>

                  {category !== "All" && (
                    <button
                      type="button"
                      onClick={() => setCategory("All")}
                      className="w-fit rounded-lg bg-[#f6f9f8] px-3 py-2 text-xs font-bold text-[#071a33] hover:bg-[#eaf8f2]"
                    >
                      Show all topics
                    </button>
                  )}
                </div>
              </div>

              <div className="divide-y divide-[#e5ece9]">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq) => {
                    const originalIndex = faqs.indexOf(faq);
                    const open = openFAQ === originalIndex;

                    return (
                      <div key={faq.question}>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFAQ(open ? null : originalIndex)
                          }
                          className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-[#f9fcfb] sm:p-6"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6f9f8] text-[#059669]">
                            <HelpCircle className="h-4 w-4" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-[#071a33]">
                              {faq.question}
                            </p>

                            <span className="mt-1 inline-flex rounded-full bg-[#f6f9f8] px-2 py-1 text-[10px] font-bold text-[#718096]">
                              {faq.category}
                            </span>
                          </div>

                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-[#718096] transition ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {open && (
                          <div className="px-5 pb-5 pl-[68px] sm:px-6 sm:pb-6 sm:pl-[84px]">
                            <p className="max-w-3xl text-xs leading-6 text-[#718096]">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-10 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f6f9f8] text-[#718096]">
                      <Search className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#071a33]">
                      No help articles found
                    </h3>

                    <p className="mt-1 text-xs text-[#718096]">
                      Try a different search term or browse another category.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact methods */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-base font-bold text-[#071a33]">
                Other ways to get help
              </h2>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-[#e5ece9] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf8f2] text-[#059669]">
                      <Mail className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#071a33]">
                        Email support
                      </p>

                      <p className="mt-1 text-[11px] text-[#718096]">
                        support@olavexa.app
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#e5ece9] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef4ff] text-[#2563eb]">
                      <MessageCircle className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#071a33]">
                        In-app support
                      </p>

                      <p className="mt-1 text-[11px] text-[#718096]">
                        Available from your OLAVEXA account
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-[#f9fcfb] p-4">
                <div className="flex items-start gap-2">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#059669]" />

                  <p className="text-[11px] leading-5 text-[#718096]">
                    Support will never ask you for your password, transaction
                    PIN, recovery phrase or one-time authentication code.
                  </p>
                </div>
              </div>
            </section>

            {/* Recent tickets */}
            <section className="rounded-2xl border border-[#e5ece9] bg-white shadow-sm">
              <div className="border-b border-[#e5ece9] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-bold text-[#071a33]">
                      Recent support requests
                    </h2>

                    <p className="mt-1 text-[11px] text-[#718096]">
                      Your latest support activity
                    </p>
                  </div>

                  <LifeBuoy className="h-5 w-5 text-[#059669]" />
                </div>
              </div>

              <div className="divide-y divide-[#e5ece9]">
                {recentTickets.map((ticket) => (
                  <div key={ticket.id} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-bold text-[#071a33]">
                        {ticket.subject}
                      </p>

                      <span
                        className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${
                          ticket.status === "Resolved"
                            ? "bg-[#eaf8f2] text-[#059669]"
                            : "bg-[#fff8e8] text-[#b45309]"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] text-[#718096]">
                      {ticket.date}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <code className="truncate text-[10px] font-semibold text-[#718096]">
                        {ticket.id}
                      </code>

                      <button
                        type="button"
                        onClick={() => copyTicket(ticket.id)}
                        className="inline-flex shrink-0 items-center gap-1 text-[10px] font-bold text-[#059669] hover:underline"
                      >
                        {copiedTicket === ticket.id ? (
                          <>
                            <CheckCircle2 className="h-3 w-3" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowTicketModal(true)}
                className="flex w-full items-center justify-center gap-2 border-t border-[#e5ece9] p-4 text-xs font-bold text-[#059669] transition hover:bg-[#f9fcfb]"
              >
                <MessageCircle className="h-4 w-4" />
                Create support request
              </button>
            </section>
          </aside>
        </div>
      </div>

      {/* Support ticket modal */}
      {showTicketModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#04111f]/45 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setShowTicketModal(false)}
        >
          <div
            className="w-full max-w-lg rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e5ece9] p-5 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#059669]">
                  Support request
                </p>

                <h2 className="mt-1 text-lg font-bold text-[#071a33]">
                  Contact OLAVEXA Support
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowTicketModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f9f8] text-[#718096] transition hover:text-[#071a33]"
                aria-label="Close support form"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              {submitted ? (
                <div className="rounded-2xl bg-[#eaf8f2] p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#059669]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-[#071a33]">
                    Request submitted
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#718096]">
                    Your demo support request has been created successfully.
                  </p>
                </div>
              ) : (
                <>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-[#071a33]">
                      Topic
                    </span>

                    <select className="h-11 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm text-[#071a33] outline-none focus:border-[#10b981]">
                      <option>Wallet</option>
                      <option>Trading</option>
                      <option>Card</option>
                      <option>Bills</option>
                      <option>Security</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-[#071a33]">
                      Subject
                    </span>

                    <input
                      placeholder="What do you need help with?"
                      className="h-11 w-full rounded-xl border border-[#e5ece9] bg-white px-3 text-sm text-[#071a33] outline-none placeholder:text-[#a0aec0] focus:border-[#10b981]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-[#071a33]">
                      Message
                    </span>

                    <textarea
                      rows={5}
                      placeholder="Describe your issue..."
                      className="w-full resize-none rounded-xl border border-[#e5ece9] bg-white p-3 text-sm text-[#071a33] outline-none placeholder:text-[#a0aec0] focus:border-[#10b981]"
                    />
                  </label>

                  <div className="rounded-xl bg-[#f9fcfb] p-3">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#059669]" />

                      <p className="text-[11px] leading-5 text-[#718096]">
                        Never include passwords, transaction PINs, recovery
                        phrases or authentication codes in your message.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={submitTicket}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a33] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0a2547]"
                  >
                    <Send className="h-4 w-4" />
                    Submit request
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
