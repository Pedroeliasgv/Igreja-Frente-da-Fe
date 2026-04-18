import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { Calendar, Clock, Sparkles } from "lucide-react";

// 🔥 MUDANÇA IMPORTANTE: usar path direto (mais seguro no Vercel)
const churchImg = "/assets/church-interior.jpg";

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
  {
    day: "Domingo",
    label: "Celebração",
    times: ["10h00", "18h00"],
    desc: "Culto principal com louvor, palavra e ministração.",
  },
  {
    day: "Quarta",
    label: "Estudo Bíblico",
    times: ["19h30"],
    desc: "Imersão profunda na Palavra e edificação da fé.",
  },
  {
    day: "Sexta",
    label: "Culto de Oração",
    times: ["20h00"],
    desc: "Tempo de intercessão, libertação e busca por avivamento.",
  },
  {
    day: "Sábado",
    label: "Culto de Jovens",
    times: ["19h00"],
    desc: "Geração reunida para adorar e ser transformada.",
  },
];

const events = [
  {
    date: "12 MAI",
    title: "Conferência da Família",
    desc: "Três noites de palestras com convidados especiais.",
  },
  {
    date: "08 JUN",
    title: "Batismo nas Águas",
    desc: "Celebração da entrega de novas vidas a Cristo.",
  },
  {
    date: "20 JUL",
    title: "Acampamento de Jovens",
    desc: "Final de semana intenso de fé e comunhão.",
  },
];

function CultosPage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <SiteLayout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 lg:pt-48">
          <img
            src={churchImg}
            alt="Culto da igreja"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-hero" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="text-gold text-xs uppercase tracking-widest">
              Agenda
            </p>
            <h1 className="font-serif text-5xl text-ivory md:text-7xl">
              Cultos & Programação
            </h1>
            <p className="mt-6 text-ivory/70">
              Reúna sua família e venha celebrar a presença de Deus.
            </p>
          </div>
        </section>

        {/* SCHEDULE */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Toda Semana" title="Programação" />

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className="rounded-2xl border border-border bg-card p-10"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gold text-xs uppercase">{s.label}</p>
                      <h2 className="text-3xl font-serif">{s.day}</h2>
                    </div>
                    <Calendar />
                  </div>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    {s.times.map((t) => (
                      <span
                        key={t}
                        className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2"
                      >
                        <Clock size={14} /> {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="bg-secondary/40 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Eventos" title="Especiais" />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {events.map((e) => (
                <div
                  key={e.title}
                  className="rounded-2xl bg-ink p-8 text-ivory"
                >
                  <p className="text-gold text-2xl">{e.date}</p>
                  <h3 className="mt-3 text-2xl font-serif">{e.title}</h3>
                  <p className="mt-2 text-ivory/70">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-gold p-12 text-center">
            <Sparkles className="mx-auto" />
            <h2 className="mt-6 text-4xl font-serif">Não pode vir?</h2>
            <p className="mt-4">Assista nossos cultos online.</p>

            <Link
              to="/online"
              className="mt-8 inline-block rounded-full bg-ink px-7 py-4 text-ivory"
            >
              Assistir ao vivo
            </Link>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}