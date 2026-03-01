import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Client ka sahi number yahan daalein
  const message = "Namaste AquaPure! Mujhe drinking water delivery ke baare mein jaankari chahiye.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 active:scale-95",
        "after:absolute after:inset-0 after:rounded-full after:bg-[#25D366] after:animate-ping after:opacity-20"
      )}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">WhatsApp us</span>
    </a>
  );
};

export default WhatsAppButton;