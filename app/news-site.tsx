import type { ReactNode } from "react";

type NewsItem = {
  title: string;
  link: string;
  description: string;
  publishedAt: string;
  source: string;
  category: string;
};

type FeedDefinition = {
  name: string;
  slug: string;
  url: string;
};

const FEEDS: FeedDefinition[] = [
  {
    name: "Technology",
    slug: "technology",
    url: "https://news.google.com/rss/search?q=technology&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "Artificial Intelligence",
    slug: "ai",
    url: "https://news.google.com/rss/search?q=artificial+intelligence&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    url: "https://news.google.com/rss/search?q=cybersecurity&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "World",
    slug: "world",
    url: "https://news.google.com/rss/search?q=world+news&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "Business",
    slug: "business",
    url: "https://news.google.com/rss/search?q=business&hl=en-US&gl=US&ceid=US:en",
  },
];

const LEGAL_PAGES: Record<
  string,
  { title: string; content: ReactNode }
> = {
  "/about": {
    title: "About Nexora News",
    content: (
      <>
        <p>
          Nexora News is an independent news-discovery website focused on
          technology, artificial intelligence, cybersecurity, business and
          major world developments.
        </p>
        <p>
          We organize timely headlines from identified publishers and always
          link readers to the original source. Nexora News does not claim
          ownership of third-party reporting.
        </p>
      </>
    ),
  },
  "/contact": {
    title: "Contact",
    content: (
      <>
        <p>Questions, corrections and business inquiries:</p>
        <p>
          <a href="mailto:blancobenjamin353@gmail.com">
            blancobenjamin353@gmail.com
          </a>
        </p>
      </>
    ),
  },
  "/privacy": {
    title: "Privacy Policy",
    content: (
      <>
        <p>
          Nexora News may use analytics, cookies and advertising technologies
          to understand site usage and support the service.
        </p>
        <p>
          Third-party services, including Google, may process data according to
          their own privacy policies. Users can manage consent choices through
          the consent message shown where legally required.
        </p>
      </>
    ),
  },
  "/terms": {
    title: "Terms of Use",
    content: (
      <>
        <p>
          The site is provided for general informational purposes. Headlines,
          summaries and links may change as publishers update their reporting.
        </p>
        <p>
          External links lead to third-party websites whose content and
          availability are outside Nexora News&apos; control.
        </p>
      </>
    ),
  },
  "/editorial-policy": {
    title: "Editorial Policy",
    content: (
      <>
        <p>
          Nexora News identifies the original publisher for every syndicated
          headline and links directly to the source. We do not present
          third-party reporting as our own.
        </p>
        <p>
          Original commentary, when published, will be clearly labeled and
          attributed to its author.
        </p>
      </>
    ),
  },
  "/corrections-policy": {
    title: "Corrections Policy",
    content: (
      <>
        <p>
          To report an inaccurate headline, broken link or attribution issue,
          contact us with the page URL and a description of the problem.
        </p>
        <p>Verified errors will be corrected or removed promptly.</p>
      </>
    ),
  },
  "/advertising": {
    title: "Advertising",
    content: (
      <>
        <p>
          Advertising helps support Nexora News. Paid placements will be
          visually separated from editorial content and labeled as advertising
          or sponsored content.
        </p>
      </>
    ),
  },
  "/cookies": {
    title: "Cookie Policy",
    content: (
      <>
        <p>
          Cookies may be used for essential functionality, audience measurement
          and advertising. Where required, visitors can consent, refuse or
          manage their choices through the site&apos;s consent platform.
        </p>
      </>
    ),
  },
  "/ethics": {
    title: "Ethics",
    content: (
      <>
        <p>
          We aim to be transparent about sources, distinguish news from opinion,
          avoid deceptive presentation and correct verified errors.
        </p>
      </>
    ),
  },
  "/dmca": {
    title: "DMCA and Copyright",
    content: (
      <>
        <p>
          Nexora News displays limited headline and summary information for
          discovery purposes and links to original publishers.
        </p>
        <p>
          Copyright concerns can be sent to
          {" "}
          <a href="mailto:blancobenjamin353@gmail.com">
            blancobenjamin353@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
};

function decodeXml(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .trim();
}

function stripHtml(value: string): string {
  return decodeXml(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readTag(block: string, tag: string): string {
  const match = block.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"),
  );
  return match ? decodeXml(match[1]) : "";
}

function parseFeed(xml: string, category: string): NewsItem[] {
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];

  return blocks
    .map((block) => {
      const rawTitle = readTag(block, "title");
      const sourceTag = readTag(block, "source");
      const titleParts = rawTitle.split(" - ");
      const inferredSource =
        titleParts.length > 1 ? titleParts.at(-1)?.trim() ?? "" : "";
      const cleanTitle =
        inferredSource && !sourceTag
          ? titleParts.slice(0, -1).join(" - ").trim()
          : rawTitle;

      return {
        title: cleanTitle,
        link: readTag(block, "link"),
        description: stripHtml(readTag(block, "description")),
        publishedAt: readTag(block, "pubDate"),
        source: sourceTag || inferredSource || "Original publisher",
        category,
      };
    })
    .filter(
      (item) =>
        item.title.length > 10 &&
        item.link.startsWith("http") &&
        item.source.length > 0,
    );
}

async function fetchFeed(feed: FeedDefinition): Promise<NewsItem[]> {
  try {
    const response = await fetch(feed.url, {
      headers: {
        "User-Agent": "NexoraNews/1.0 (+https://nexoranews.xyz)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      console.error(`Feed failed: ${feed.name} (${response.status})`);
      return [];
    }

    return parseFeed(await response.text(), feed.slug).slice(0, 12);
  } catch (error) {
    console.error(`Feed error: ${feed.name}`, error);
    return [];
  }
}

async function getNews(): Promise<NewsItem[]> {
  const results = await Promise.all(FEEDS.map(fetchFeed));
  const seen = new Set<string>();

  return results
    .flat()
    .sort((a, b) => {
      const aTime = Date.parse(a.publishedAt) || 0;
      const bTime = Date.parse(b.publishedAt) || 0;
      return bTime - aTime;
    })
    .filter((item) => {
      const key = item.title.toLowerCase().replace(/\W+/g, "");
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently published";

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(date);
}

function displayCategory(slug: string): string {
  return FEEDS.find((feed) => feed.slug === slug)?.name ?? "Latest";
}

function Header() {
  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>LIVE NEWS DISCOVERY</span>
          <span>Updated automatically from identified publishers</span>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="/" aria-label="Nexora News home">
            <span className="brand-mark">N</span>
            <span>
              NEXORA <b>NEWS</b>
            </span>
          </a>

          <nav aria-label="Main navigation">
            <a href="/">Latest</a>
            {FEEDS.map((feed) => (
              <a href={`/${feed.slug}`} key={feed.slug}>
                {feed.name}
              </a>
            ))}
            <a href="/about">About</a>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">N</span>
            <span>
              NEXORA <b>NEWS</b>
            </span>
          </div>
          <p>
            Timely headlines with clear attribution and direct links to original
            publishers.
          </p>
        </div>

        <div>
          <h3>Sections</h3>
          {FEEDS.map((feed) => (
            <a href={`/${feed.slug}`} key={feed.slug}>
              {feed.name}
            </a>
          ))}
        </div>

        <div>
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/editorial-policy">Editorial Policy</a>
          <a href="/corrections-policy">Corrections</a>
          <a href="/advertising">Advertising</a>
        </div>

        <div>
          <h3>Legal</h3>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
          <a href="/ethics">Ethics</a>
          <a href="/dmca">DMCA</a>
        </div>
      </div>

      <div className="shell copyright">
        © {new Date().getFullYear()} Nexora News. Headlines belong to their
        respective publishers.
      </div>
    </footer>
  );
}

function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="shell legal-page">
      <p className="eyebrow">NEXORA NEWS</p>
      <h1>{title}</h1>
      <div className="legal-copy">{children}</div>
    </main>
  );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <article className={index === 0 ? "news-card featured" : "news-card"}>
      <div className="card-top">
        <span className="category">{displayCategory(item.category)}</span>
        <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
      </div>

      <h2>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {item.title}
        </a>
      </h2>

      {item.description && (
        <p className="description">
          {item.description.length > 240
            ? `${item.description.slice(0, 237)}...`
            : item.description}
        </p>
      )}

      <div className="source-row">
        <span>
          Source: <strong>{item.source}</strong>
        </span>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={`Read the original article from ${item.source}`}
        >
          Read original ↗
        </a>
      </div>
    </article>
  );
}

function Styles() {
  return (
    <style>{`
      :root {
        --ink: #171719;
        --muted: #6d6d73;
        --paper: #f7f4ee;
        --card: #ffffff;
        --line: #ddd8ce;
        --accent: #7b1020;
        --accent-dark: #520a15;
      }

      * { box-sizing: border-box; }
      body { margin: 0; background: var(--paper); color: var(--ink); }
      a { color: inherit; }
      .shell { width: min(1180px, calc(100% - 36px)); margin: 0 auto; }
      .topbar { background: var(--accent-dark); color: white; font-size: 12px; letter-spacing: .08em; }
      .topbar-inner { min-height: 34px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
      .site-header { background: rgba(255,255,255,.96); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 20; backdrop-filter: blur(12px); }
      .header-inner { min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 28px; }
      .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-family: Georgia, serif; font-size: 22px; letter-spacing: .04em; }
      .brand b { color: var(--accent); }
      .brand-mark { width: 38px; height: 38px; border-radius: 10px; display: grid; place-items: center; background: var(--accent); color: white; font-weight: 800; }
      nav { display: flex; flex-wrap: wrap; gap: 18px; align-items: center; }
      nav a { text-decoration: none; font-size: 14px; font-weight: 700; }
      nav a:hover { color: var(--accent); }
      .hero { padding: 64px 0 34px; border-bottom: 1px solid var(--line); }
      .eyebrow { margin: 0 0 12px; color: var(--accent); font-size: 12px; letter-spacing: .14em; font-weight: 800; }
      .hero h1, .legal-page h1 { margin: 0; font-family: Georgia, serif; font-size: clamp(40px, 7vw, 76px); line-height: .98; max-width: 900px; }
      .hero p { max-width: 760px; margin: 22px 0 0; color: var(--muted); font-size: 18px; line-height: 1.65; }
      .notice { margin: 28px 0 0; padding: 14px 16px; background: #fff8e8; border: 1px solid #ead5a0; border-radius: 12px; color: #5b481a; font-size: 14px; line-height: 1.5; }
      .news-layout { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 30px; padding: 34px 0 70px; }
      .news-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
      .news-card { background: var(--card); border: 1px solid var(--line); border-radius: 18px; padding: 22px; box-shadow: 0 10px 32px rgba(35,29,20,.05); display: flex; flex-direction: column; min-height: 290px; }
      .news-card.featured { grid-column: 1 / -1; min-height: 350px; padding: 32px; background: linear-gradient(135deg, #fff, #f4e8e8); }
      .card-top { display: flex; justify-content: space-between; gap: 16px; align-items: center; color: var(--muted); font-size: 12px; }
      .category { color: var(--accent); font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }
      .news-card h2 { margin: 18px 0 12px; font-family: Georgia, serif; font-size: 25px; line-height: 1.18; }
      .news-card.featured h2 { font-size: clamp(32px, 5vw, 54px); max-width: 900px; }
      .news-card h2 a { text-decoration: none; }
      .news-card h2 a:hover { color: var(--accent); }
      .description { margin: 0; color: var(--muted); line-height: 1.62; }
      .source-row { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; gap: 16px; color: var(--muted); font-size: 13px; }
      .source-row a { color: var(--accent); font-weight: 800; text-decoration: none; white-space: nowrap; }
      aside { position: sticky; top: 104px; align-self: start; }
      .side-box { background: #1c1b1d; color: white; border-radius: 18px; padding: 24px; }
      .side-box h2 { margin: 0 0 12px; font-family: Georgia, serif; }
      .side-box p { color: #cfcbd0; line-height: 1.6; }
      .side-box ol { margin: 18px 0 0; padding-left: 22px; }
      .side-box li { margin: 13px 0; line-height: 1.4; }
      .side-box a { text-decoration: none; }
      .side-box a:hover { color: #f5b5bf; }
      .error-box { grid-column: 1 / -1; padding: 34px; background: white; border: 1px solid var(--line); border-radius: 18px; }
      .legal-page { min-height: 65vh; padding-top: 72px; padding-bottom: 80px; }
      .legal-copy { max-width: 760px; margin-top: 32px; font-size: 18px; line-height: 1.75; color: #454249; }
      footer { background: #171719; color: white; padding: 54px 0 22px; }
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 34px; }
      .footer-grid h3 { margin-top: 0; }
      .footer-grid a { display: block; color: #c8c5ca; margin: 10px 0; text-decoration: none; }
      .footer-grid p { color: #c8c5ca; line-height: 1.6; max-width: 380px; }
      .footer-brand { color: white; }
      .copyright { border-top: 1px solid #353237; margin-top: 36px; padding-top: 20px; color: #aaa6ac; font-size: 13px; }

      @media (max-width: 900px) {
        .header-inner { align-items: flex-start; padding: 18px 0; flex-direction: column; }
        nav { gap: 12px 16px; }
        .news-layout { grid-template-columns: 1fr; }
        aside { position: static; }
        .footer-grid { grid-template-columns: repeat(2, 1fr); }
      }

      @media (max-width: 620px) {
        .topbar-inner span:last-child { display: none; }
        .news-grid { grid-template-columns: 1fr; }
        .news-card.featured { grid-column: auto; }
        .source-row { align-items: flex-start; flex-direction: column; }
        .footer-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

export default async function NewsSite({ path }: { path: string }) {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const legalPage = LEGAL_PAGES[normalizedPath];

  if (legalPage) {
    return (
      <>
        <Styles />
        <Header />
        <LegalPage title={legalPage.title}>{legalPage.content}</LegalPage>
        <Footer />
      </>
    );
  }

  const routeSlug = normalizedPath.split("/").filter(Boolean)[0] ?? "latest";
  const knownCategory =
    routeSlug === "latest" || FEEDS.some((feed) => feed.slug === routeSlug);
  const selectedCategory = knownCategory ? routeSlug : "latest";

  const allNews = await getNews();
  const filteredNews =
    selectedCategory === "latest"
      ? allNews
      : allNews.filter((item) => item.category === selectedCategory);

  const visibleNews = filteredNews.slice(0, selectedCategory === "latest" ? 20 : 15);
  const trending = allNews.slice(1, 7);

  return (
    <>
      <Styles />
      <Header />

      <section className="hero">
        <div className="shell">
          <p className="eyebrow">
            {selectedCategory === "latest"
              ? "LATEST DEVELOPMENTS"
              : displayCategory(selectedCategory)}
          </p>
          <h1>
            {selectedCategory === "latest"
              ? "What matters now."
              : `${displayCategory(selectedCategory)} news`}
          </h1>
          <p>
            Current headlines gathered from identified publishers. Every item
            shows its source and opens the original report.
          </p>
          <div className="notice">
            Nexora News is a news-discovery service. Headlines and summaries are
            attributed to their original publishers; links open the source
            article in a new tab.
          </div>
        </div>
      </section>

      <main className="shell news-layout">
        <section className="news-grid" aria-label="Latest news">
          {visibleNews.length > 0 ? (
            visibleNews.map((item, index) => (
              <NewsCard
                item={item}
                index={index}
                key={`${item.link}-${index}`}
              />
            ))
          ) : (
            <div className="error-box">
              <h2>News is temporarily unavailable</h2>
              <p>
                The live feeds could not be reached right now. Please refresh
                the page in a few minutes.
              </p>
            </div>
          )}
        </section>

        <aside>
          <div className="side-box">
            <p className="eyebrow">TRENDING SOURCES</p>
            <h2>More current coverage</h2>
            <p>
              A quick route to additional reports from publishers appearing in
              today&apos;s feed.
            </p>
            <ol>
              {trending.map((item, index) => (
                <li key={`${item.link}-trend-${index}`}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}
