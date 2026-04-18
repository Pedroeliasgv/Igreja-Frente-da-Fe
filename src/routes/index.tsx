import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Play, MapPin } from "lucide-react";
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

function HomePage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <SiteLayout>
      <div ref={ref}>

        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden bg-ink">
          <img
            src="/images/hero-worship.jpg"
            alt="Congregação em culto"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-hero" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40">
            <h1 className="font-serif text-5xl text-ivory md:text-7xl">
              Um lugar para viver fé, propósito e transformação.
            </h1>

            <div className="mt-10 flex gap-4">
              <Link
                to="/contato"
                className="rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink"
              >
                Visite-nos <ArrowRight className="inline h-4 w-4" />
              </Link>

              <Link
                to="/online"
                className="rounded-full border border-ivory/30 px-7 py-4 text-sm text-ivory"
              >
                <Play className="inline h-4 w-4" /> Culto Online
              </Link>
            </div>
          </div>
        </section>

        {/* MINISTRIES */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Ministérios" title="Encontre o seu lugar para servir" />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ministries.map((m) => (
                <Link key={m.title} to={m.to} className="block rounded-2xl overflow-hidden">
                  <img src={m.img} className="h-full w-full object-cover" />
                  <div className="p-4">
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <MapPin className="mx-auto h-10 w-10" />
          <h2 className="mt-6 text-4xl">Sua primeira visita pode mudar tudo.</h2>
        </section>

      </div>
    </SiteLayout>
  );
}