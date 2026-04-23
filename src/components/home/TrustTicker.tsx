"use client";

import { motion } from "framer-motion";

const clients = [
    "APIConnect",
    "Siemens Building Technologies",
    "TForce Freight",
    "Iodine Software",
    "Dun & Bradstreet",
    "Living Security",
    "WiFi Alliance",
    "NRCCUA",
    "AIQUEOUS",
    "ProjectManager",
    "CulturSys",
    "WellSmith",
    "Calavista Software",
    "Evergreen Beauty College",
    "Infinite Giving",
    "Encino Energy",
    "TriggerPoint Media"
];

export default function TrustTicker() {
    return (
        <section className="py-10 bg-white border-b border-authority-navy/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-authority-navy/40">Trusted by Product Teams in Austin and Beyond</h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex space-x-16 items-center animate-scroll whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {/* First set of logos */}
                    {clients.map((client, index) => (
                        <span key={index} className="text-xl md:text-2xl font-bold font-heading text-authority-navy/50 whitespace-nowrap">
                            {client}
                        </span>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {clients.map((client, index) => (
                        <span key={`duplicate-${index}`} className="text-xl md:text-2xl font-bold font-heading text-authority-navy/50 whitespace-nowrap">
                            {client}
                        </span>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            </div>
        </section>
    );
}
