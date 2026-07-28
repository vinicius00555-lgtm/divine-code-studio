import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Gift, Lock, Mail, Smartphone, ShieldCheck, Star } from "lucide-react";

const CHECKOUT = "https://pay.kiwify.com/QhbFna5";
const HERO_BG =
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/zcp5f2JYNk1Xc2OV/teste-wp-dWxO7M149zSxqZ4n.webp";
const MOCKUP =
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=965,fit=crop/zcp5f2JYNk1Xc2OV/mockup-ca3digo-divino-copiar-mv0JOxgVJxsM0wXR.webp";
const COVER =
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1282,fit=crop/zcp5f2JYNk1Xc2OV/capa-2-3-yvQhqJvAdNHHaRXO.png";
const GARANTIA =
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=325,fit=crop/zcp5f2JYNk1Xc2OV/garantia-YrDNbk5xkXtbRqee.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Código de la Fe — Comprende la Biblia con claridad" },
      {
        name: "description",
        content:
          "El método simple que ya ayudó a miles de personas a entender la Biblia desde cero. Ebook + 5 bonos gratis por solo $6,90 USD.",
      },
      { property: "og:title", content: "El Código de la Fe — Comprende la Biblia con claridad" },
      {
        property: "og:description",
        content:
          "Método paso a paso para estudiar la Biblia, con 5 ebooks de regalo y garantía de 7 días.",
      },
      { property: "og:image", content: COVER },
      { name: "twitter:image", content: COVER },
    ],
  }),
  component: Index,
});

function Cta({ children }: { children: string }) {
  return (
    <div className="flex justify-center">
      <Button variant="cta" size="cta" asChild>
        <a href={CHECKOUT} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    </div>
  );
}

const descubrimientos = [
  "Cómo interpretar versículos difíciles de la Biblia",
  "Cómo entender conexiones y códigos bíblicos ocultos",
  "Un método simple para estudiar la Biblia con constancia",
  "Cómo desarrollar una relación más profunda con Dios",
  "Cómo aplicar los principios bíblicos en tu vida diaria",
];

const pilares = [
  {
    title: "Interpretación Versículo por Versículo",
    text: "Cada pasaje es analizado cuidadosamente para revelar su verdadero significado.",
  },
  {
    title: "Estudios Guiados por Temas Bíblicos",
    text: "Aprenderás a conectar versículos y comprender cómo diferentes partes de la Biblia se relacionan entre sí.",
  },
  {
    title: "Revelación de Conexiones y Códigos Bíblicos",
    text: "Muchos versículos contienen mensajes profundos que solo se entienden dentro de su contexto.",
  },
  {
    title: "Método Paso a Paso de Estudio",
    text: "Un sistema organizado que te permitirá seguir estudiando la Biblia sin perderte ni abandonar el proceso.",
  },
];

const paraQuien = [
  "Han intentado leer la Biblia pero no lograron entender muchas partes",
  "Sienten que les falta orientación para estudiar",
  "Desean crecer espiritualmente",
  "Quieren entender el significado real de los versículos",
  "Buscan tener una relación más profunda con Dios",
  "Desean estudiar la Biblia de forma organizada",
];

const ventajas = [
  {
    title: "Método estructurado paso a paso",
    text: "Tendrás una guía organizada que facilita la memorización y la aplicación práctica.",
  },
  {
    title: "Profundidad espiritual real",
    text: "Descubre el significado espiritual detrás de los textos y fortalece tu fe.",
  },
  {
    title: "Explicaciones claras y didácticas",
    text: "Interpretaciones profundas explicadas de manera sencilla.",
  },
  {
    title: "Comprensión profunda",
    text: "Entenderás la narrativa bíblica desde Génesis hasta Apocalipsis.",
  },
];

const bonos = [
  {
    n: "BONO 1",
    title: "Los 10 Mandamientos: Historia y Aplicación Espiritual",
    text: "Descubre el origen, el significado profundo y cómo aplicar los mandamientos en la vida moderna.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/zcp5f2JYNk1Xc2OV/1754593755-mePJ4397ZvULDebL.png",
  },
  {
    n: "BONO 2",
    title: "Los Milagros de Jesús",
    text: "Explora cada milagro del Señor: sanidades, prodigios y señales, con contexto bíblico y lección espiritual.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/zcp5f2JYNk1Xc2OV/1754593871-Y4LvzE71PnUOvDn5.png",
  },
  {
    n: "BONO 3",
    title: "Historias Bíblicas para toda la familia",
    text: "Una colección visual y resumida de las historias más poderosas del Antiguo y Nuevo Testamento.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/zcp5f2JYNk1Xc2OV/1754593730-m6Lbn4NRZqUoJ327.png",
  },
  {
    n: "BONO 4",
    title: "Devocionales de Poder: 30 días para profundizar tu fe",
    text: "Devocionales con reflexiones, versículos clave y oraciones para fortalecer tu conexión diaria con Dios.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/zcp5f2JYNk1Xc2OV/1754593687-dJobMGvyM8TbRGP6.png",
  },
  {
    n: "BONO 5",
    title: "Manual de Interpretación Bíblica para Principiantes",
    text: "Una guía clara y práctica para interpretar correctamente los textos bíblicos y evitar errores comunes.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=512,fit=crop/zcp5f2JYNk1Xc2OV/1754593781-m5KnqWzo1ltzlGw0.png",
  },
];

const entregables = [
  "170 Bosquejos del Libro de Josué",
  "Éxodo — Versículo por Versículo",
  "Génesis — Versículo por Versículo",
  "Levítico — Versículo por Versículo",
  "30 Días de Oración",
];

const faq = [
  {
    q: "1. ¿Cómo recibiré el material después de la compra?",
    a: "Una vez confirmado el pago, recibirás un correo electrónico con el acceso inmediato a todo el contenido digital. Todo es 100% online y accesible desde cualquier dispositivo.",
  },
  {
    q: "2. ¿Y si el material no es lo que esperaba?",
    a: "Tienes 7 días de garantía incondicional. Si el contenido no cumple tus expectativas, puedes solicitar tu reembolso total sin complicaciones.",
  },
  {
    q: "3. ¿Necesito conocimientos previos de la Biblia?",
    a: "¡Para nada! El Código de la Fe fue diseñado para todos: nuevos creyentes, estudiantes, líderes, padres o pastores. El lenguaje es claro, práctico y accesible.",
  },
  {
    q: "4. ¿Por qué es tan económico? ¿Es un producto confiable?",
    a: "Queremos que miles de personas tengan acceso a este estudio sin barreras. Más de 4.000 personas ya han confiado en nosotros.",
  },
  {
    q: "5. ¿Puedo pagar en mi moneda local?",
    a: "Sí. Aunque el precio esté en USD, al momento de la compra podrás pagar automáticamente en tu moneda local, con tarjeta de crédito, débito o billetera digital.",
  },
];

function Index() {
  return (
    <main className="bg-night min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-muted-foreground">
            El Código de la Fe
          </p>
          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            <span className="block text-foreground">
              "El método simple que ha ayudado a más de 3.000 personas a entender la Biblia incluso
              desde cero"
            </span>
            <span className="text-gradient-gold mt-6 block text-4xl sm:text-6xl">
              EL CÓDIGO DE LA FE
            </span>
          </h1>
          <div className="mt-8 flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-current" />
            ))}
          </div>
          <img
            src={MOCKUP}
            alt="Colección de ebooks El Código de la Fe"
            className="mx-auto mt-8 w-full max-w-2xl"
            loading="eager"
          />
          <div className="mt-10">
            <Cta>Quiero comprender la Biblia</Cta>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={COVER}
            alt="Portada del ebook El Código de la Fe"
            className="mx-auto w-full max-w-sm rounded-xl shadow-gold"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Muchas personas comienzan a leer la Biblia con buenas intenciones...
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                Pero después de un tiempo se sienten frustradas porque{" "}
                <strong className="text-foreground">no entienden algunos versículos</strong> o{" "}
                <strong className="text-foreground">no saben cómo continuar su estudio</strong>.
              </p>
              <p>
                La Biblia es un libro poderoso, pero también está llena de símbolos, contextos
                históricos y conexiones entre textos que muchas veces pasan desapercibidos.
              </p>
              <p>
                Por eso fue creado{" "}
                <strong className="text-primary">El Código de la Fe</strong>: un material diseñado
                para ayudarte a comprender las Escrituras de forma clara y organizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESCUBRIRÁS */}
      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Lo que descubrirás en este material
          </h2>
          <ul className="mt-8 space-y-4">
            {descubrimientos.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Cta>Acceder al Código de la Fe ahora</Cta>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Cómo funciona el método
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          El método de El Código de la Fe está basado en cuatro pilares principales:
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pilares.map((p, i) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="text-gradient-gold text-4xl font-black">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Este material es para ti si...
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {paraQuien.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-lg bg-card p-4 text-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Cta>Acceder al El Código de la Fe</Cta>
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Ventajas de usar <span className="text-gradient-gold">El Código de la Fe</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {ventajas.map((v) => (
            <article
              key={v.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <ShieldCheck className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BONOS */}
      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl font-black uppercase sm:text-4xl">
            ¡Bonos exclusivos por <span className="text-gradient-gold">tiempo limitado</span>!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Al adquirir El Código de la Fe hoy, recibirás totalmente GRATIS estos 5 regalos
            exclusivos que complementarán tu estudio y crecimiento espiritual.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {bonos.map((b) => (
              <article
                key={b.n}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img src={b.img} alt={b.title} className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    <Gift className="size-3.5" /> {b.n}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-xl font-bold">
            🎉 ¡Todo esto valorado en <span className="line-through opacity-60">$19,50 USD</span>…
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Pero solo hoy tendrás acceso también a estos 5 bonos totalmente gratis.
          </p>
          <div className="mt-8">
            <Cta>Quiero los bonos</Cta>
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
          Más de <span className="text-gradient-gold">4.000 cristianos</span> ya están transformando
          su estudio bíblico con nosotros
        </h2>
        <p className="mt-4 text-muted-foreground">
          Testimonios reales de personas que ya viven una nueva experiencia espiritual gracias a
          este material.
        </p>
        <img src={MOCKUP} alt="Material completo" className="mx-auto mt-8 w-full max-w-xl" loading="lazy" />
      </section>

      {/* OFERTA */}
      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            ¿Cuánto va a costar todo esto?
          </h2>
          <div className="mt-8 rounded-3xl border border-primary/40 bg-card p-8 text-center shadow-gold">
            <p className="text-muted-foreground">Tener acceso a todo el contenido costaba</p>
            <p className="mt-1 text-2xl font-bold line-through opacity-60">$13,80</p>
            <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
              por tan solo
            </p>
            <p className="text-gradient-gold text-6xl font-black">$6,90</p>
            <p className="mt-2 text-sm text-muted-foreground">(Puedes pagar en tu moneda local)</p>

            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm">
              {entregables.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{e}</span>
                </li>
              ))}
              {bonos.map((b) => (
                <li key={b.n} className="flex items-start gap-3">
                  <Gift className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    {b.n}: {b.title}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Lock className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>Acceso seguro y 100% digital</span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>Compatible con cualquier dispositivo</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>Entrega inmediata al correo electrónico</span>
              </li>
            </ul>

            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-primary">
              Precio especial de lanzamiento · Oferta limitada
            </p>
            <div className="mt-6">
              <Cta>Quiero el Código de la Fe</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
          <img src={GARANTIA} alt="Garantía de 7 días" className="mx-auto w-48" loading="lazy" />
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Garantía Incondicional de 7 Días
            </h2>
            <p className="mt-4 font-semibold">
              ¿Aún tienes dudas? Tranquilo, tu compra está 100% protegida.
            </p>
            <p className="mt-3 text-muted-foreground">
              Si por cualquier motivo el contenido que recibes no cumple con lo prometido, tienes
              hasta 7 días para solicitar el reembolso completo, sin preguntas ni complicaciones.
            </p>
            <p className="mt-3 text-muted-foreground">
              Recuerda que tu acceso es de por vida, y constantemente añadimos nuevos materiales
              diseñados para fortalecer tu fe, tu ministerio y tu enseñanza en la Iglesia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card/40 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">❓ Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12">
            <Cta>Quiero el Código de la Fe</Cta>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} El Código de la Fe. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
