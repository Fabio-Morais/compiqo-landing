"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Translations } from "../lib/i18n";

export function InterestForm({ t }: { t: Translations }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });

      if (!response.ok) {
        throw new Error(t.interest.form.errorSending);
      }

      setIsSuccess(true);
      setEmail("");
      setName("");
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setError(t.interest.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
          {t.interest.form.successTitle}
        </h3>
        <p className="text-green-700 dark:text-green-300">
          {t.interest.form.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t.interest.form.name}
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={t.interest.form.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t.interest.form.email}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={t.interest.form.emailPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t.interest.form.message}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder={t.interest.form.messagePlaceholder}
        />
      </div>
      {error && (
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            {t.interest.form.sending}
          </>
        ) : (
          <>
            <Mail className="mr-2 w-4 h-4" />
            {t.interest.form.submit}
          </>
        )}
      </Button>
    </form>
  );
}

