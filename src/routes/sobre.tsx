import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { BookOpen, Compass, Heart } from "lucide-react";

const pastorImg = "/images/pastor.jpg";
const churchImg = "/images/church-interior.jpg";

export const Route = createFileRoute("/sobre")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Sobre — Igreja Frente da Fé" },
      {
        name: "description",
        content:
          "Conheça a história, missão, visão e valores da Igreja Frente da Fé, e a mensagem do nosso pastor presidente.",
      },
      { property: "og:title", content: "Sobre a Igreja Frente da Fé" },
      { property: "og:image", content: "/images/church-interior.jpg" },
      { name: "twitter:image", content: "/images/church-interior.jpg" },
    ],
  }),
});

function AboutPage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <SiteLayout>
      <div ref={ref}>
        <PageHero
          eyebrow="Nossa Igreja"
          title="Uma história escrita pela mão de Deus."
          image={churchImg}
        />

        {/* HISTÓRIA */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
            <div className="reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-deep)]">
                Nossa História
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance md:text-5xl">
                Do altar simples ao mover de uma geração.
              </h2>
            </div>

            <div className="reveal space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A Igreja Frente da Fé nasceu em 2023, fruto da visão de um pequeno
                grupo de famílias que ousaram crer em algo maior.
              </p>
              <p>
                Reuniões em uma sala alugada se transformaram em um movimento de fé
                que hoje alcança milhares de vidas.
              </p>
              <p>
                Hoje, somos uma família comprometida em pregar o Evangelho com
                excelência e amor.
              </p>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="bg-secondary/40 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Pilares"
              title="Missão, Visão e Valores"
              description="O que nos move e direciona em cada decisão como igreja."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Compass,
                  title: "Missão",
                  text: "Levar o Evangelho com excelência e formar discípulos.",
                },
                {
                  icon: BookOpen,
                  title: "Visão",
                  text: "Ser uma igreja relevante que transforma vidas e cidades.",
                },
                {
                  icon: Heart,
                  title: "Valores",
                  text: "Palavra, oração, integridade, família e amor ao próximo.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="reveal rounded-2xl bg-card border border-border p-10 hover-lift"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-ink shadow-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">{title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PASTOR */}
        <section className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
            <div className="reveal">
              <img
                src={pastorImg}
                alt="Pr. Evanio Vale"
                className="rounded-2xl object-cover shadow-elegant"
                loading="lazy"
              />
            </div>

            <div className="reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Pastor Presidente
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Pr. Evanio Vale
              </h2>

              <p className="mt-6 text-ivory/70 leading-relaxed">
                Pastor há mais de 15 anos, lidera a Igreja Frente da Fé com visão,
                cuidado e amor pelas vidas.
              </p>

              <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-xl italic text-ivory/90">
                "Cada vida importa para Deus."
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

/* HERO COMPONENT */
function PageHero({
  eyebrow,
  title,
  image,
}: {
  eyebrow: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 lg:pb-28 lg:pt-48">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
          <span className="h-px w-8 bg-gold" />
        </p>

        <h1 className="font-serif text-5xl text-ivory md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}