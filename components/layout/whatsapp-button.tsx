"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export function WhatsAppButton() {
  const buttons = [
    {
      href: "https://wa.me/8801738230530",
      icon: <MessageCircle className="h-7 w-7" />,
      color: "bg-green-500 hover:bg-green-600 shadow-green-500/30",
      label: "WhatsApp",
    },
    {
      href: "https://facebook.com/yourpage",
      icon: <FaFacebookF className="h-6 w-6" />,
      color: "bg-[#1877F2] hover:bg-[#166FE5] shadow-blue-500/30",
      label: "Facebook",
    },
    {
      href: "https://youtube.com/@yourchannel",
      icon: <FaYoutube className="h-7 w-7" />,
      color: "bg-red-600 hover:bg-red-700 shadow-red-500/30",
      label: "YouTube",
    },
  ];

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-4">
      {buttons.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${item.color}`}
          aria-label={item.label}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}