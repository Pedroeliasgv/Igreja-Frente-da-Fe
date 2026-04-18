import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Igreja%20Frente%20da%20F%C3%A9."
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elegant transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-medium sm:inline">Fale conosco</span>
    </a>
  );
}
