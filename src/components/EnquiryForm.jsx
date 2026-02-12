import React, { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Submitting..." });

    try {
      // TODO: replace with your real backend endpoint
      await new Promise((r) => setTimeout(r, 500));
      setStatus({ state: "success", msg: "Thanks! We’ll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus({ state: "error", msg: "Something went wrong. Please try again." });
    }
  }

  const input =
    "w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400/30";
  const label = "text-xs text-slate-300";
  const grid = "grid grid-cols-1 md:grid-cols-2 gap-3";

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={grid}>
        <label className="grid gap-2">
          <span className={label}>Name</span>
          <input className={input} name="name" value={form.name} onChange={onChange} required />
        </label>
        <label className="grid gap-2">
          <span className={label}>Email</span>
          <input
            className={input}
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </label>
      </div>

      <div className={grid}>
        <label className="grid gap-2">
          <span className={label}>Phone</span>
          <input className={input} name="phone" value={form.phone} onChange={onChange} />
        </label>
        <label className="grid gap-2">
          <span className={label}>Subject</span>
          <input className={input} name="subject" value={form.subject} onChange={onChange} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className={label}>Message</span>
        <textarea
          className={input}
          rows={4}
          name="message"
          value={form.message}
          onChange={onChange}
          required
        />
      </label>

      <button
        type="submit"
        disabled={status.state === "loading"}
        className="inline-flex items-center justify-center rounded-xl border border-sky-400/40 bg-sky-400/10 px-4 py-2 font-semibold hover:bg-sky-400/15 disabled:opacity-60"
      >
        {status.state === "loading" ? "Submitting..." : "Submit"}
      </button>

      {status.state !== "idle" && (
        <p
          className={`text-sm ${
            status.state === "success"
              ? "text-emerald-300"
              : status.state === "error"
              ? "text-rose-300"
              : "text-slate-300"
          }`}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
}
