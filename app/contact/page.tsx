"use client"
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simulate sending the form (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-start">
        Let’s Connect!
        </h1>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300 text-start">
        Have a question, a project idea, or just want to say hello? Fill out the form below, and I’ll get back to you as soon as possible!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 placeholder:text-sm text-sm "
                placeholder="Name..."
                required
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 placeholder:text-sm text-sm "
                placeholder="Email..."
                required
            />
            </div>

            <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 placeholder:text-sm text-sm "
                placeholder="Message..."
                required
            ></textarea>
            </div>
            <div className="flex justify-end">
                <button
                type="submit"
                disabled={status === "loading"}
                className="px-4 py-2 text-white bg-slate-600 rounded-md hover:bg-slate-700 disabled:bg-slate-400"
                >
                {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                <p className="mt-4 text-sm text-green-600">Your message has been sent successfully!</p>
                )}
                {status === "error" && (
                <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again later.</p>
                )}
            </div>
        </form>
    </section>
  );
}
