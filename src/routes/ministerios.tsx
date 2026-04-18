import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import youthImg from "@/assets/ministry-youth.jpg";
import kidsImg from "@/assets/ministry-kids.jpg";
import praiseImg from "@/assets/ministry-praise.jpg";
import couplesImg from "@/assets/ministry-couples.jpg";

export const Route = createFileRoute("/ministerios")({
  component: MinisteriosPage,
  head: () => ({
    meta: [
      { title: "Ministérios — Igreja Frente da Fé" },
      {
        name: "description",
        content:
          "Conheça os ministérios da Igreja Frente da Fé: Jovens, Crianças, Louvor e Casais. Encontre seu lugar para servir.",
      },
      { property: "og:title", content: "Ministérios — Frente da Fé" },
      { property: "og:image", content: youthImg },
      { name: "twitter:image", content: youthImg },
    ],
  }),
});

const ministries = [
  {
    title: "Jovens",
    img: youthImg,
    text: "Geração corajosa, cheia do Espírito, levantada para impactar escolas, universidades e comunidades. Encontros aos sábados, conexões e missões.",
  },
  {
    title: "Crianças",
    img: kidsImg,
    text: "Espaço seguro, alegre e cheio de fé. Ensinamos a Palavra de forma criativa, formando o coração das nossas crianças desde cedo.",
  },
  {
    title: "Louvor",
    img: praiseImg,
    text: "Ministério de adoração comprometido com a presença de Deus. Cantores, instrumentistas e técnicos servindo com excelência espiritual e técnica.",
  },
  {
    title: "Casais",
    img: couplesImg,
    text: "Edificando casamentos sólidos segundo a Palavra. Encontros mensais, aconselhamento e comunhão para fortalecer lares.",
  },
];

function MinisteriosPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <SiteLayout>
      <div ref={ref}>
        <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 lg:pb-28 lg:pt-48">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--gold-deep)]/30 via-ink to-ink" />
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Ministérios <span className="h-px w-8 bg-gold" />
            </p>
            <h1 className="font-serif text-5xl leading-tight text-ivory text-balance md:text-7xl">
              Cada chamado tem um <span className="italic text-gradient-gold">lugar</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-ivory/70 md:text-lg">
              Servir é uma das maiores expressões da fé. Conheça nossos
              ministérios e descubra onde Deus quer te usar.
            </p>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-10">
            {ministries.map((m, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={m.title}
                  className="reveal grid gap-12 lg:grid-cols-2 lg:items-center"
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elegant">
                      <img
                        src={m.img}
                        alt={`Ministério ${m.title}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        width={1280}
                        height={896}
                      />
                    </div>
                  </div>
                  <div className={reverse ? "lg:order-1" : ""}>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold-deep)]">
                      0{i + 1} · Ministério
                    </p>
                    <h2 className="mt-4 font-serif text-4xl text-foreground text-balance md:text-5xl">
                      {m.title}
                    </h2>
                    <p className="mt-6 text-muted-foreground leading-relaxed md:text-lg">
                      {m.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <SectionHeader
              eyebrow="Quero servir"
              title="Pronto para fazer parte?"
              description="Fale com nossa equipe e descubra como dar o próximo passo no ministério que combina com você."
            />
            <a
              href="/contato"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
            >
              Falar com a equipe
            </a>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
