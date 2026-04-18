import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { BookOpen, Compass, Heart } from "lucide-react";
import pastorImg from "@/assets/pastor.jpg";
import churchImg from "@/assets/church-interior.jpg";

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
      { property: "og:image", content: churchImg },
      { name: "twitter:image", content: churchImg },
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
                grupo de famílias que ousaram crer em algo maior. Reuniões em uma
                sala alugada se transformaram em um movimento de fé que hoje
                alcança milhares de vidas dentro e fora do Brasil.
              </p>
              <p>
                Ao longo dos anos, vimos lares restaurados, vícios quebrados,
                propósitos despertados. Cada testemunho é um capítulo da bondade
                de Deus operando em meio ao Seu povo.
              </p>
              <p>
                Hoje, somos uma família comprometida em pregar o Evangelho com
                excelência, acolher com amor genuíno e formar discípulos que
                impactem suas cidades.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
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
                  text: "Levar o Evangelho com excelência, formando discípulos que vivem o propósito de Deus.",
                },
                {
                  icon: BookOpen,
                  title: "Visão",
                  text: "Ser uma igreja relevante, espiritualmente saudável, que transforma cidades e nações.",
                },
                {
                  icon: Heart,
                  title: "Valores",
                  text: "Palavra, oração, integridade, família, serviço e amor genuíno ao próximo.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="reveal rounded-2xl bg-card border border-border p-10 hover-lift">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-ink shadow-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">{title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pastor */}
        <section className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
            <div className="reveal">
              <img
                src={pastorImg}
                alt="Pr. Evanio Vale — Pastor presidente da Igreja Frente da Fé"
                className="rounded-2xl object-cover shadow-elegant"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Pastor Presidente
              </p>
              <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
                Pr. Evanio Vale
              </h2>
              <p className="mt-6 text-ivory/70 leading-relaxed">
                Pastor há mais de 15 anos, é casado com a pastora Paulyceya e pai de
                dois filhos. Apaixonado pela Palavra e pelo cuidado com o
                rebanho, lidera a Frente da Fé com sensibilidade espiritual e
                visão de futuro.
              </p>
              <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-xl italic text-ivory/90">
                "Cada vida importa para Deus. Nosso compromisso é fazer com que
                cada uma se sinta em casa na presença Dele."
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 lg:pb-28 lg:pt-48">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
          <span className="h-px w-8 bg-gold" />
        </p>
        <h1 className="font-serif text-5xl leading-tight text-ivory text-balance md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
