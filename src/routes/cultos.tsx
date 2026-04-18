import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Calendar, Clock, Sparkles } from "lucide-react";
import churchImg from "@/assets/church-interior.jpg";

export const Route = createFileRoute("/cultos")({
  component: CultosPage,
  head: () => ({
    meta: [
      { title: "Cultos & Programação — Igreja Frente da Fé" },
      {
        name: "description",
        content:
          "Confira os dias e horários dos cultos da Igreja Frente da Fé, eventos especiais e cultos transmitidos ao vivo.",
      },
      { property: "og:title", content: "Cultos & Programação" },
      { property: "og:image", content: churchImg },
      { name: "twitter:image", content: churchImg },
    ],
  }),
});

const schedule = [
  { day: "Domingo", label: "Celebração", times: ["10h00", "18h00"], desc: "Culto principal com louvor, palavra e ministração." },
  { day: "Quarta", label: "Estudo Bíblico", times: ["19h30"], desc: "Imersão profunda na Palavra e edificação da fé." },
  { day: "Sexta", label: "Culto de Oração", times: ["20h00"], desc: "Tempo de intercessão, libertação e busca por avivamento." },
  { day: "Sábado", label: "Culto de Jovens", times: ["19h00"], desc: "Geração reunida para adorar e ser transformada." },
];

const events = [
  { date: "12 MAI", title: "Conferência da Família", desc: "Três noites de palestras com convidados especiais." },
  { date: "08 JUN", title: "Batismo nas Águas", desc: "Celebração da entrega de novas vidas a Cristo." },
  { date: "20 JUL", title: "Acampamento de Jovens", desc: "Final de semana intenso de fé e comunhão." },
];

function CultosPage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <SiteLayout>
      <div ref={ref}>
        <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 lg:pb-28 lg:pt-48">
          <img src={churchImg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="eager" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Agenda <span className="h-px w-8 bg-gold" />
            </p>
            <h1 className="font-serif text-5xl leading-tight text-ivory text-balance md:text-7xl">
              Cultos & Programação
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-ivory/70 md:text-lg">
              Reúna sua família e venha celebrar a presença de Deus em qualquer
              dia da semana.
            </p>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader eyebrow="Toda Semana" title="Nossa programação" />
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {schedule.map((s, i) => (
                <div
                  key={s.day}
                  className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-10 hover-lift"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold-deep)]">
                        {s.label}
                      </p>
                      <p className="mt-2 font-serif text-4xl text-foreground">{s.day}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-gold opacity-60" />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {s.times.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-serif text-lg text-foreground"
                      >
                        <Clock className="h-4 w-4 text-gold" />
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Não Perca"
              title="Eventos Especiais"
              description="Datas marcadas no calendário para experiências únicas com Deus."
            />
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {events.map((e, i) => (
                <div
                  key={e.title}
                  className="reveal relative overflow-hidden rounded-2xl bg-ink p-8 text-ivory hover-lift"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
                  <p className="font-serif text-3xl text-gradient-gold">{e.date}</p>
                  <h3 className="mt-4 font-serif text-2xl text-ivory">{e.title}</h3>
                  <p className="mt-3 text-ivory/65">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-gold p-12 text-center text-ink shadow-gold lg:p-16">
            <Sparkles className="mx-auto h-10 w-10" />
            <h2 className="mt-6 font-serif text-4xl text-balance md:text-5xl">
              Não pode estar presente?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/80 md:text-lg">
              Transmitimos nossos cultos ao vivo. Seja onde estiver, adore com a gente.
            </p>
            <Link
              to="/online"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-semibold text-ivory transition-transform hover:scale-105"
            >
              Assistir ao vivo
            </Link>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
