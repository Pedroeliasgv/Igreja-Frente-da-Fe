import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-ivory">
      <div className="max-w-md text-center">
        <p className="font-serif text-7xl text-gradient-gold">404</p>
        <h1 className="mt-4 font-serif text-2xl">Página nÃ£o encontrada</h1>
        <p className="mt-3 text-sm text-ivory/60">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-105"
        >
          Voltar ao iní­cio
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Igreja Frente da Fé â€” Viva fÃ©, propÃ³sito e transformaÃ§Ã£o" },
      {
        name: "description",
        content:
          "A Igreja Frente da Fé© á um lugar de acolhimento, adoração e transformação. Conheça nossos cultos, ministérios e participe presencialmente ou online.",
      },
      { name: "author", content: "Igreja Frente da FÃ©" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:title", content: "Igreja Frente da FÃ©" },
      {
        property: "og:description",
        content: "Um lugar para viver fÃ©, propÃ³sito e transformaÃ§Ã£o.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
