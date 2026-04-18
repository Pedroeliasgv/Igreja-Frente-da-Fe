import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Iní­cio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/cultos", label: "Cultos" },
  { to: "/online", label: "Online" },
  { to: "/ministerios", label: "Ministérios" },
  { to: "/doacoes", label: "Doações" },
  { to: "/contato", label: "Contato" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" aria-label="Igreja Frente da FÃ© â€” InÃ­cio">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
            <span className="font-serif text-lg font-bold text-ink">F</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base text-ivory tracking-wide">
              Frente da Fé
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80">
              Igreja
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="NavegaÃ§Ã£o principal">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "link-underline text-sm font-medium tracking-wide transition-colors",
                  active ? "text-gold" : "text-ivory/80 hover:text-ivory",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contato"
            className="rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
          >
            Visite-nos
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2" aria-label="Navegação móvel">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-white/5 text-gold"
                    : "text-ivory/85 hover:bg-white/5 hover:text-ivory",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contato"
            className="mt-3 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-ink shadow-gold"
          >
            Visite-nos
          </Link>
        </nav>
      </div>
    </header>
  );
}
