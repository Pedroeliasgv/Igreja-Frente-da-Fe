import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { MapPin, Phone, Mail, Send, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato & Localização — Igreja Frente da Fé" },
      {
        name: "description",
        content:
          "Entre em contato com a Igreja Frente da Fé. Endereço, telefone, WhatsApp e formulário direto para sua mensagem.",
      },
      { property: "og:title", content: "Contato — Frente da Fé" },
    ],
  }),
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

function ContatoPage() {
  const ref = useReveal<HTMLDivElement>();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SiteLayout>
      <div ref={ref}>
        <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 lg:pb-28 lg:pt-48">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--gold-deep)]/30 via-ink to-ink" />
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Fale Conosco <span className="h-px w-8 bg-gold" />
            </p>
            <h1 className="font-serif text-5xl leading-tight text-ivory text-balance md:text-7xl">
              Estamos prontos para <span className="italic text-gradient-gold">te receber</span>.
            </h1>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:px-10">
            {/* Form */}
            <div className="reveal lg:col-span-3">
              <SectionHeader
                eyebrow="Mensagem"
                title="Envie sua mensagem"
                align="left"
              />
              <form onSubmit={onSubmit} className="mt-10 space-y-5" noValidate>
                <Field
                  label="Nome completo"
                  name="name"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  error={errors.name}
                />
                <Field
                  label="E-mail"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  error={errors.email}
                />
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Sua mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Como podemos te ajudar?"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Mensagem enviada
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="reveal space-y-5 lg:col-span-2">
              <InfoCard
                icon={MapPin}
                title="Endereço"
                lines={["Av. Andrômeda, 885", "Alphaville · Barueri, SP", "CEP 06473-000"]}
              />
              <InfoCard
                icon={Phone}
                title="Telefone"
                lines={["(11) 99993-6035", "Seg a Sex · 9h às 18h"]}
                href="tel:+551199993-6035"
              />
              <InfoCard
                icon={Mail}
                title="E-mail"
                lines={["contato@frentedafe.com.br"]}
                href="mailto:contato@frentedafe.com.br"
              />
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-[#25D366] p-6 text-white transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-90">WhatsApp</p>
                    <p className="font-serif text-xl">Fale agora conosco</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-secondary/40 pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Localização da Igreja Frente da Fé"
                src="https://www.google.com/maps?q=Av.+Andr%C3%B4meda,+885+-+Alphaville+Empresarial,+Barueri+-+SP,+06473-000&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://maps.google.com/?q=Av.+Principal+1500+S%C3%A3o+Paulo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold"
              >
                <MapPin className="h-4 w-4" /> Como chegar
              </a>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";
  const props = href ? { href } : {};
  return (
    <Wrapper
      {...props}
      className="block rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold hover-lift"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-ink shadow-gold">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold-deep)]">
            {title}
          </p>
          <div className="mt-2 space-y-1 text-foreground">
            {lines.map((l) => (
              <p key={l} className="text-sm">{l}</p>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
