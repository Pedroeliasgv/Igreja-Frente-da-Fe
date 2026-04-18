import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Play, Calendar, Heart, Users, MapPin, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Igreja Frente da Fé — Viva fé, propósito e transformação" },
      {
        name: "description",
        content:
          "Conheça a Igreja Frente da Fé. Cultos presenciais e online, ministérios para toda a família e uma comunidade que transforma vidas.",
      },
      { property: "og:title", content: "Igreja Frente da Fé" },
      {
        property: "og:description",
        content: "Um lugar para viver fé, propósito e transformação.",
      },
      { property: "og:image", content: "/images/hero-worship.jpg" },
      { name: "twitter:image", content: "/images/hero-worship.jpg" },
    ],
  }),
});

const ministries = [
  { title: "Jovens", description: "Geração levantada para impactar.", img: "/images/ministry-youth.jpg", to: "/ministerios" },
  { title: "Crianças", description: "Plantando sementes de fé desde cedo.", img: "/images/ministry-kids.jpg", to: "/ministerios" },
  { title: "Louvor", description: "Adoração que toca o coração de Deus.", img: "/images/ministry-praise.jpg", to: "/ministerios" },
  { title: "Casais", description: "Edificando lares segundo a Palavra.", img: "/images/ministry-couples.jpg", to: "/ministerios" },
];

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Membro há 3 anos",
    text: "Encontrei na Frente da Fé não só uma igreja, mas uma família. Minha vida tomou um novo rumo.",
  },
  {
    name: "Carlos Mendes",
    role: "Líder de jovens",
    text: "A Palavra que ouvi aqui me restaurou. Hoje sirvo com alegria e vejo Deus mover vidas a cada culto.",
  },
  {
    name: "Patrícia Rocha",
    role: "Membro há 5 anos",
    text: "O acolhimento é genuíno. Meus filhos amam a igreja e meu casamento foi renovado.",
  },
];

function HomePage() {
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => {
    document.title = "Igreja Frente da Fé — Viva fé, propósito e transformação";
  }, []);

  return (
    <SiteLayout>
      <div ref={ref}>

        {/* HERO */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
          <img
            src="/images/hero-worship.jpg"
            alt="Congregação adorando em culto da Igreja Frente da Fé"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-hero" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
            <div className="max-w-3xl animate-fade-up">
              <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
                Bem-vindo à Frente da Fé
              </p>

              <h1 className="font-serif text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]">
                Um lugar para viver{" "}
                <span className="text-gradient-gold italic">fé, propósito</span>{" "}
                e transformação.
              </h1>

              <p className="mt-7 max-w-xl text-ivory/75 md:text-lg">
                Mais que uma igreja, somos uma família. Venha descobrir o plano de Deus para sua vida.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
                >
                  Visite-nos
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/online"
                  className="inline-flex items-center gap-3 rounded-full border border-ivory/30 bg-ink/40 px-7 py-4 text-sm font-semibold text-ivory backdrop-blur"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink">
                    <Play className="h-3 w-3" />
                  </span>
                  Assistir Culto Online
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MINISTRIES */}
        <section className="bg-secondary/40 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Ministérios"
              title="Encontre o seu lugar para servir"
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ministries.map((m) => (
                <Link
                  key={m.title}
                  to={m.to}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink"
                >
                  <img
                    src={m.img}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-ivory">
                    <h3 className="font-serif text-2xl">{m.title}</h3>
                    <p className="text-sm text-ivory/70">{m.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink py-24 text-ivory">
          <img
            src="/images/bible-light.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <MapPin className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">
              Sua primeira visita pode mudar tudo.
            </h2>
            <p className="mt-6 text-ivory/70">
              Te esperamos com um café, um sorriso e a presença de Deus.
            </p>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}