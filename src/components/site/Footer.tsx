import { Link } from "@tanstack/react-router";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-ivory/80">
      <div className="absolute inset-x-0 top-0 gold-divider" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        
        {/* LOGO + SOCIAL */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
              <span className="font-serif text-lg font-bold text-ink">F</span>
            </span>
            <div>
              <p className="font-serif text-lg text-ivory">Frente da Fé</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80">
                Igreja
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-ivory/65">
            Um lugar para viver fé, propósito e transformação. Venha fazer parte
            da nossa família.
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
              { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
              { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory/80 transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Navegação
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              ["/sobre", "Sobre nós"],
              ["/cultos", "Cultos & Programação"],
              ["/online", "Assista Online"],
              ["/ministerios", "Ministérios"],
              ["/doacoes", "Doações"],
              ["/contato", "Contato"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-ivory/70 transition-colors hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CULTOS */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Cultos
          </h3>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li><span className="text-ivory">Domingo</span> · 10h e 18h</li>
            <li><span className="text-ivory">Quarta</span> · 19h30 — Estudo</li>
            <li><span className="text-ivory">Sexta</span> · 20h — Oração</li>
            <li><span className="text-ivory">Sábado</span> · 19h — Jovens</li>
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Contato
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-ivory/70">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>
              Av. Andrômeda, 885", <br/>
              "Alphaville · Barueri, SP", "CEP 06473-000
              </span>
            </li>

            <li className="flex gap-3 text-ivory/70">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <a href="tel:+5511999999999" className="hover:text-gold">
                (11) 99993-6035
              </a>
            </li>

            <li className="flex gap-3 text-ivory/70">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <a
                href="mailto:contato@frentedafe.com.br"
                className="hover:text-gold"
              >
                contato@frentedafe.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ivory/50 lg:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Igreja Frente da Fé. Todos os direitos reservados.
          </p>
          <p className="font-serif italic text-gold/70">
            "Porque pela graça sois salvos, por meio da fé." — Efésios 2:8
          </p>
        </div>
      </div>
    </footer>
  );
}