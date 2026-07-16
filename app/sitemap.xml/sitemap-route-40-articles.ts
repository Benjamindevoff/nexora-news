const paths = [
  "",
  "about",
  "contact",
  "editorial-policy",
  "corrections-policy",
  "privacy",
  "terms",
  "cookies",
  "dmca",
  "article/computacion-cuantica-que-es-y-por-que-todavia-no-reemplazara-a-tu-computadora",
  "article/el-verdadero-costo-de-almacenar-todo-en-la-nube",
  "article/hogares-inteligentes-sin-complicaciones-por-donde-empezar",
  "article/baterias-de-estado-solido-la-promesa-detras-de-la-proxima-generacion-energetica",
  "article/derecho-a-reparar-por-que-arreglar-un-dispositivo-se-volvio-tan-dificil",
  "article/aprender-programacion-sin-memorizar-cientos-de-comandos",
  "article/que-es-una-api-explicado-con-el-ejemplo-de-un-restaurante",
  "article/codigo-limpio-decisiones-pequenas-que-evitan-problemas-grandes",
  "article/bases-de-datos-sql-y-nosql-como-elegir-sin-caer-en-modas",
  "article/pruebas-automatizadas-el-cinturon-de-seguridad-del-software",
  "article/gobierno-digital-mas-que-convertir-formularios-en-paginas-web",
  "article/datos-abiertos-como-la-informacion-publica-puede-generar-valor-social",
  "article/como-disenar-politicas-publicas-basadas-en-evidencia",
  "article/brecha-digital-el-problema-no-termina-con-entregar-dispositivos",
  "article/participacion-ciudadana-digital-oportunidades-y-riesgos",
  "article/como-verificar-una-noticia-antes-de-compartirla",
  "article/economia-de-la-atencion-por-que-las-plataformas-compiten-por-cada-segundo",
  "article/crear-un-podcast-desde-cero-con-recursos-basicos",
  "article/algoritmos-de-recomendacion-como-deciden-que-contenido-mostrarte",
  "article/periodismo-movil-producir-contenidos-profesionales-desde-un-telefono",
  "article/how-small-ai-models-are-changing-on-device-computing",
  "article/what-ai-benchmarks-can-and-cannot-prove",
  "article/passkeys-explained-beyond-the-password",
  "article/zero-trust-is-an-architecture-not-a-product",
  "article/why-software-supply-chain-security-matters",
  "article/why-typescript-became-a-default-for-large-web-projects",
  "article/how-to-evaluate-an-open-source-dependency",
  "article/why-web-performance-is-an-accessibility-issue",
  "article/what-data-centers-mean-for-local-power-grids",
  "article/the-real-tradeoffs-of-satellite-internet",
  "article/how-digital-public-services-can-earn-trust",
  "article/why-ai-regulation-keeps-returning-to-transparency",
  "article/why-semiconductor-policy-is-about-more-than-factories",
  "article/how-to-read-claims-about-green-technology",
  "article/a-practical-guide-to-verifying-breaking-news",
  "article/inteligencia-artificial-generativa-que-puede-hacer-y-donde-se-equivoca",
  "article/contrasenas-seguras-por-que-la-longitud-importa-mas-que-la-complejidad-extrema",
  "article/phishing-como-reconocer-mensajes-disenados-para-robar-informacion",
  "article/sesgos-en-inteligencia-artificial-cuando-los-datos-reproducen-desigualdades",
  "article/copias-de-seguridad-la-estrategia-sencilla-que-puede-salvar-todos-tus-archivos",
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const baseUrl = "https://nexoranews.xyz";
  const today = new Date().toISOString().split("T")[0];

  const urls = paths
    .map((path) => {
      const url = path ? `${baseUrl}/${path}` : `${baseUrl}/`;
      const isArticle = path.startsWith("article/");

      return `
  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${isArticle ? "monthly" : "weekly"}</changefreq>
    <priority>${path === "" ? "1.0" : isArticle ? "0.8" : "0.6"}</priority>
  </url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
