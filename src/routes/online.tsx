import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Play } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/online")({
  component: OnlinePage,
  head: () => ({
    meta: [
      { title: "Assista Online — Igreja Frente da Fé" },
      {
        name: "description",
        content:
          "Acompanhe os cultos da Igreja Frente da Fé ao vivo e assista pregações anteriores no nosso canal do YouTube.",
      },
      { property: "og:title", content: "Assista Online — Frente da Fé" },
      { property: "og:image", content: "/images/ministry-praise.jpg" },
      { name: "twitter:image", content: "/images/ministry-praise.jpg" },
    ],
  }),
});

const praiseImg = "/images/ministry-praise.jpg";

const recent = [
  { title: "A fé que move montanhas", pastor: "Pr. Daniel Almeida", duration: "48 min" },
  { title: "O peso da glória de Deus", pastor: "Pra. Lúcia Almeida", duration: "52 min" },
  { title: "Identidade no Pai", pastor: "Pr. Marcos Lima", duration: "45 min" },
  { title: "Vida de oração", pastor: "Pr. Daniel Almeida", duration: "50 min" },
  { title: "O chamado do servo", pastor: "Pr. Marcos Lima", duration: "41 min" },
  { title: "Restauração no deserto", pastor: "Pra. Lúcia Almeida", duration: "55 min" },
];

function OnlinePage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <SiteLayout>
      <div ref={ref}>

        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 lg:pb-28 lg:pt-48">
          <img
            src={praiseImg}
            alt="Congregação em culto"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero" />

          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              Ao Vivo & Sob Demanda
            </p>

            <h1 className="font-serif text-5xl leading-tight text-ivory md:text-7xl">
              Adore conosco, <span className="italic text-gradient-gold">de qualquer lugar</span>.
            </h1>
          </div>
        </section>

        {/* PLAYER */}
        <section className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">

            <div className="aspect-video overflow-hidden rounded-3xl bg-ink shadow-elegant">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/live_stream?channel=UCBR8-60-B28hp2BmDPdntcQ"
                title="Culto ao vivo — Igreja Frente da Fé"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-serif text-2xl text-foreground">Culto ao Vivo</p>
                <p className="text-muted-foreground">Conecte-se com a transmissão oficial.</p>
              </div>

              <a
                href="https://www.youtube.com/@profetaevaniovale"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white"
              >
                <FaYoutube className="h-5 w-5" />
                Inscreva-se no canal
              </a>
            </div>
          </div>
        </section>

        {/* PREGAÇÕES */}
        <section className="bg-secondary/40 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <SectionHeader
              eyebrow="Biblioteca"
              title="Últimas pregações"
              description="Reveja mensagens e fortaleça sua fé."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((v, i) => (
                <a
                  key={v.title}
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl bg-card border border-border"
                >
                  <div className="relative aspect-video">
                    <img
                      src={praiseImg}
                      alt={v.title}
                      className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-ink">
                        <Play className="h-5 w-5" />
                      </span>
                    </div>

                    <span className="absolute bottom-2 right-2 rounded bg-ink/80 px-2 py-1 text-xs text-white">
                      {v.duration}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.pastor}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

      </div>
    </SiteLayout>
  );
}