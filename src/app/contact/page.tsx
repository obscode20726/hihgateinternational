"use client";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        agreed: false,
    });
    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message || !form.agreed) {
            setStatus("Please fill all fields and agree to terms.");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                setForm({ name: "", email: "", message: "", agreed: false });
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch {
            setStatus("Network error.");
        }
    };

    return (
        <>
            <Navbar />
            <section className="bg-white mt-[120px] md:mt-[104px] w-full">
                <div className="max-w-7xl bg-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 max-w-lg mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-orange-600">
                            Contact us
                        </h2>
                        <p className="text-gray-700">
                            We would love to hear from you! If you have any
                            questions or feedback, feel free to reach out.We
                            would love to hear from you! If you have any
                            questions, feedback, or simply want to say hello,
                            please don&apos;t hesitate to get in touch with us.
                            Your thoughts and opinions matter to us, and we are
                            here to assist you in any way we can.
                        </p>

                        <div>
                            <label className="block text-black mb-1 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border text-black px-4 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-black mb-1 font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border text-black px-4 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-black mb-1 font-medium">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full border text-black px-4 py-2 rounded"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="agreed"
                                checked={form.agreed}
                                onChange={handleChange}
                            />
                            <label className="text-black">
                                Terms & Conditions
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-600 text-white px-10 py-3 rounded hover:bg-orange-700"
                        >
                            Submit
                        </button>

                        {status && (
                            <p className="text-sm text-red-500">{status}</p>
                        )}
                    </form>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/65e9c5cb2f6313a8668b14ff_IMG_6694-p-800.jpg"
                            alt="Girl Writing"
                            className="rounded-lg shadow-lg h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
