import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Play, Calendar, Heart, Users, MapPin, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
const heroImg = "/images/hero-worship.jpg";
const pastorImg = "/images/pastor.jpg";
const bibleImg = "/images/bible-light.jpg";
const youthImg = "/images/ministry-youth.jpg";
const kidsImg = "/images/ministry-kids.jpg";
const praiseImg = "/images/ministry-praise.jpg";
const couplesImg = "/images/ministry-couples.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Igreja Frente da Fé â€” Viva fé, propósito e transformação" },
      {
        name: "description",
        content:
          "Conheça a Igreja Frente da Fé. Cultos presenciais e online, ministérios para toda a famí­lia e uma comunidade que transforma vidas.",
      },
      { property: "og:title", content: "Igreja Frente da Fé" },
      {
        property: "og:description",
        content: "Um lugar para viver fé, propósito e transformação.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

const ministries = [
  { title: "Jovens", description: "Geração levantada para impactar.", img: youthImg, to: "/ministerios" },
  { title: "Crianças", description: "Plantando sementes de fé desde cedo.", img: kidsImg, to: "/ministerios" },
  { title: "Louvor", description: "Adoração que toca o coração de Deus.", img: praiseImg, to: "/ministerios" },
  { title: "Casais", description: "Edificando lares segundo a Palavra.", img: couplesImg, to: "/ministerios" },
];

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Membro há 3 anos",
    text: "Encontrei na Frente da Fé não só uma igreja, mas uma família. Minha vida tomou um novo rumo.",
  },
  {
    name: "Carlos Mendes",
    role: "Lí­der de jovens",
    text: "A Palavra que ouvi aqui me restaurou. Hoje sirvo com alegria e vejo Deus mover vidas a cada culto.",
  },
  {
    name: "Patrí­cia Rocha",
    role: "Membro há 5 anos",
    text: "O acolhimento é genuí­no. Meus filhos amam a igreja e meu casamento foi renovado.",
  },
];

function HomePage() {
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => {
    document.title = "Igreja Frente da FÃ© â€” Viva fÃ©, propÃ³sito e transformaÃ§Ã£o";
  }, []);

  return (
    <SiteLayout>
      <div ref={ref}>
        {/* HERO */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
          <img
            src={heroImg}
            alt="Congregação adorando em culto da Igreja Frente da Fé"
            className="absolute inset-0 h-full w-full object-cover opacity-70 animate-fade-in"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
            <div className="max-w-3xl animate-fade-up">
              <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-shimmer" />
                Bem-vindo a  Frente da Fé©
              </p>
              <h1 className="font-serif text-5xl leading-[1.05] text-ivory text-balance md:text-7xl lg:text-[5.5rem]">
                Um lugar para viver{" "}
                <span className="text-gradient-gold italic">fé, propósito</span>{" "}
                e transformação.
              </h1>
              <p className="mt-7 max-w-xl text-base text-ivory/75 md:text-lg">
                Mais que uma igreja, somos uma família. Venha descobrir o plano
                de Deus para sua vida em meio a uma comunidade que acolhe, ora
                e cresce junto.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
                >
                  Visite-nos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/online"
                  className="group inline-flex items-center gap-3 rounded-full border border-ivory/30 bg-ink/40 px-7 py-4 text-sm font-semibold text-ivory backdrop-blur transition-all hover:border-gold hover:text-gold"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-ink">
                    <Play className="h-3 w-3 fill-current" />
                  </span>
                  Assistir Culto Online
                </Link>
              </div>
            </div>
          </div>

          {/* scroll indicator */}
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/30 p-1.5">
              <span className="h-2 w-1 rounded-full bg-gold animate-float" />
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: Heart,
                  title: "Acolhimento",
                  text: "Você é bem-vindo. Aqui, ninguém fica sozinho.",
                },
                {
                  icon: Users,
                  title: "Comunidade",
                  text: "Vidas conectadas em pequenos grupos, ministérios e celebração.",
                },
                {
                  icon: Calendar,
                  title: "Propósito",
                  text: "Descubra para que você foi criado e viva o chamado de Deus.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="reveal group rounded-2xl border border-border bg-card p-8 hover-lift">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-ink shadow-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">{title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PASTOR / ABOUT */}
        <section className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32">
          <img
            src={bibleImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
            loading="lazy"
            width={1280}
            height={896}
          />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
            <div className="reveal relative">
              <div className="absolute -inset-4 -z-10 bg-gradient-gold opacity-30 blur-2xl" />
              <img
                src={pastorImg}
                alt="Pastor presidente da Igreja Frente da FÃ©"
                className="rounded-2xl object-cover shadow-elegant"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-gold p-6 text-ink shadow-gold lg:block">
                <p className="font-serif text-3xl">+15</p>
                <p className="text-xs uppercase tracking-widest">anos de ministérios</p>
              </div>
            </div>
            <div className="reveal">
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Mensagem do Pastor
              </p>
              <h2 className="font-serif text-4xl leading-tight text-ivory text-balance md:text-5xl">
                "A casa de Deus é o lugar onde a sua história{" "}
                <span className="italic text-gold">encontra a Dele</span>."
              </h2>
              <p className="mt-6 text-ivory/70 leading-relaxed">
                Há mais de uma década cuidando de vidas, nossa missão é conduzir 
                cada pessoa a um encontro real com Jesus com a Palavra no centro, 
                a oração como fundamento e o amor como marca.
              </p>
              <p className="mt-4 font-serif text-lg italic text-gold">Pr. Evanio Vale</p>
              <Link
                to="/sobre"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ivory link-underline"
              >
                Conheça nossa história <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Agenda da Semana"
              title="Cultos & Programação"
              description="Reúna sua famí­lia e venha celebrar conosco. Todos os cultos são abertos a visitantes."
            />
            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { day: "Domingo", times: ["10h00", "18h00"], label: "Celebração" },
                { day: "Quarta", times: ["19h30"], label: "Estudo Bíblico" },
                { day: "Sexta", times: ["20h00"], label: "Culto de Oração" },
                { day: "Sábado", times: ["19h00"], label: "Jovens" },
              ].map((s, i) => (
                <div
                  key={s.day}
                  className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover-lift"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-gold opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold-deep)]">
                    {s.label}
                  </p>
                  <p className="mt-3 font-serif text-3xl text-foreground">{s.day}</p>
                  <div className="mt-6 space-y-2">
                    {s.times.map((t) => (
                      <p key={t} className="font-serif text-2xl text-gradient-gold">
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MINISTRIES */}
        <section className="bg-secondary/40 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Ministérios"
              title="Encontre o seu lugar para servir"
              description="Cada vida tem um chamado. Conheça nossos ministérios e descubra onde você pode crescer e impactar."
            />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ministries.map((m, i) => (
                <Link
                  key={m.title}
                  to={m.to}
                  className="reveal group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink shadow-soft hover-lift"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img
                    src={m.img}
                    alt={`Ministério de ${m.title}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={1280}
                    height={896}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-serif text-2xl text-ivory">{m.title}</h3>
                    <p className="mt-1 text-sm text-ivory/70">{m.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                      Saiba mais <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeader
              eyebrow="Testemunhos"
              title="Vidas que Deus tem transformado"
            />
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  className="reveal relative rounded-2xl border border-border bg-card p-8 hover-lift"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/15" />
                  <blockquote className="font-serif text-lg leading-relaxed text-foreground italic">
                    "{t.text}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--gold-deep)]/30 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
            <div className="reveal">
              <MapPin className="mx-auto h-10 w-10 text-gold" />
              <h2 className="mt-6 font-serif text-4xl text-balance md:text-6xl">
                Sua primeira visita pode mudar tudo.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-ivory/70 md:text-lg">
                Te esperamos com um café, um sorriso e a presença de Deus. Venha
                conhecer a família Frente da Fé.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contato"
                  className="rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
                >
                  Quero visitar
                </Link>
                <Link
                  to="/doacoes"
                  className="rounded-full border border-ivory/30 px-7 py-4 text-sm font-semibold text-ivory transition-all hover:border-gold hover:text-gold"
                >
                  Contribuir com a obra
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
