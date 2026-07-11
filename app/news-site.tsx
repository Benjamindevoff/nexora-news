type Article = {
  slug: string;
  category: string;
  type: "Explainer" | "Analysis" | "Guide";
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  body: string[];
};

const articles: Article[] = [
  {
    slug: "how-small-ai-models-are-changing-on-device-computing",
    category: "Artificial Intelligence",
    type: "Explainer",
    title: "How small AI models are changing on-device computing",
    excerpt: "Smaller language and vision models are moving useful AI features from remote data centers onto phones, laptops and embedded devices.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-10",
    readTime: "7 min read",
    body: [
      "Artificial intelligence has often been presented as a service that lives somewhere else. A user sends a request to a remote data center, powerful accelerators process it, and a response returns over the internet. That model remains important, but a second approach is becoming more practical: running compact models directly on the device in a person’s hand, car, workplace or home.",
      "On-device models do not need to match the broad capability of the largest cloud systems to be useful. A model designed for transcription, summarization, image classification or command recognition can be optimized for one task and run with far fewer parameters. This specialization reduces memory use, power consumption and latency.",
      "Privacy is one of the strongest arguments for local processing. When audio, images or documents can be analyzed without leaving the device, the amount of sensitive information sent to a third party is reduced. Local processing does not automatically make a product private, because applications may still collect metadata or upload results, but it gives developers a stronger technical foundation for data minimization.",
      "Reliability is another advantage. A local feature can continue working when a connection is slow, expensive or unavailable. That matters in transportation, industrial equipment, emergency response and regions with inconsistent connectivity. It also removes part of the delay created by a network round trip.",
      "The trade-offs are real. Smaller models can produce weaker results, and mobile hardware has strict thermal and battery limits. Developers must decide which tasks should remain local, which require cloud processing and how the two systems should cooperate. The best products will probably use a hybrid design rather than choosing only one side.",
      "For users, the change may be less visible than the technology behind it. Instead of opening a separate chatbot, people may encounter AI as faster search, better accessibility, smarter camera tools and software that adapts to context while keeping more information on the device.",
    ],
  },
  {
    slug: "what-ai-benchmarks-can-and-cannot-prove",
    category: "Artificial Intelligence",
    type: "Analysis",
    title: "What AI benchmarks can — and cannot — prove",
    excerpt: "Benchmark scores are useful signals, but they are not a complete measure of whether an AI system is reliable, safe or useful.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-09",
    readTime: "8 min read",
    body: [
      "AI model releases are frequently summarized by a table of benchmark scores. The appeal is obvious: a single number makes comparison simple. Yet the same simplicity can hide important differences in how a model was tested, what the benchmark measures and whether the result reflects real-world use.",
      "A benchmark is most useful when its task is clearly defined and its examples remain separate from the model’s training data. If a model has seen identical or closely related questions during training, a high score may reflect memorization rather than general reasoning. This is difficult to rule out completely for models trained on large collections of public text.",
      "Prompting also changes results. A model may receive a carefully engineered instruction, multiple examples or repeated attempts before its best answer is counted. Those conditions can be appropriate for research, but they should be disclosed. A score produced under heavy optimization should not be presented as though it came from an ordinary first attempt.",
      "Different benchmarks measure different abilities. Coding tests may emphasize short functions, while production engineering requires maintenance, security, architecture and collaboration. Knowledge tests may reward factual recall but say little about whether a model recognizes uncertainty. A system can perform well on a narrow test and still fail in a workflow that matters to users.",
      "Independent evaluation helps because it reduces the incentive to select only favorable tests. Human review also remains necessary for qualities that are hard to compress into one metric, including clarity, harmful errors, consistency and the ability to follow domain-specific constraints.",
      "The responsible way to read benchmark claims is to treat them as evidence, not as a final verdict. Ask what was measured, whether the test was public, how many attempts were allowed and whether another organization reproduced the result. A model should ultimately be judged against the task it is expected to perform.",
    ],
  },
  {
    slug: "passkeys-explained-beyond-the-password",
    category: "Cybersecurity",
    type: "Guide",
    title: "Passkeys explained: what changes when the password disappears",
    excerpt: "Passkeys replace shared secrets with cryptographic credentials, reducing phishing risk while creating new recovery questions.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-08",
    readTime: "7 min read",
    body: [
      "Passwords work by asking a user and a service to share the same secret. That design creates a permanent target: the secret can be guessed, reused, stolen in a breach or captured by a convincing phishing page. Passkeys use a different model based on public-key cryptography.",
      "When a passkey is created, the device stores a private key and the service receives a related public key. The private key is not sent to the website during login. Instead, the device proves that it possesses the key by signing a challenge. A fake website cannot simply collect the credential and replay it elsewhere.",
      "Passkeys are usually unlocked with the same method used to unlock a device, such as a fingerprint, facial recognition or local PIN. The biometric data normally stays on the device; it is used to authorize access to the private key rather than being transmitted to every service.",
      "The largest practical challenge is account recovery. People lose phones, replace computers and forget which account synchronized a credential. Platforms can sync passkeys across trusted devices, while some services support additional recovery methods. Each option must balance convenience against the risk that an attacker abuses the recovery process.",
      "Organizations also need to consider shared devices, employee departures and regulated environments. A consumer-friendly synchronization system may not match the controls required by an enterprise. Device management and hardware security keys remain important for higher-risk accounts.",
      "Passkeys are not a universal cure for account compromise, but they remove several common password failures at once. The transition will be gradual because services must support older users and devices, yet the underlying security improvement is substantial.",
    ],
  },
  {
    slug: "zero-trust-is-an-architecture-not-a-product",
    category: "Cybersecurity",
    type: "Analysis",
    title: "Zero trust is an architecture, not a product",
    excerpt: "The phrase is frequently used in marketing, but its practical meaning is continuous verification and limited access.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-07",
    readTime: "6 min read",
    body: [
      "Zero trust is often advertised as something an organization can purchase. In practice, it is a way of designing access decisions. The central idea is that being inside a corporate network should not automatically make a user, device or application trustworthy.",
      "Traditional networks relied heavily on a protected perimeter. Once an employee connected through an office network or virtual private network, many internal resources became reachable. That model became harder to defend as cloud services, remote work and third-party integrations expanded.",
      "A zero-trust design evaluates several signals before granting access: identity, device health, location, requested resource and current risk. Access should be limited to what is necessary for the task, and a decision may be reevaluated when circumstances change.",
      "This requires more than an identity provider. Organizations need accurate inventories, strong authentication, segmented systems, useful logs and a process for removing unnecessary privileges. Weak asset management can undermine an otherwise sophisticated access platform.",
      "Implementation should begin with high-value resources and measurable goals. Replacing every system at once is expensive and risky. A phased approach can reduce standing privileges, require stronger authentication and isolate sensitive applications without interrupting the entire organization.",
      "The term becomes useful when it describes concrete controls. It becomes empty when attached to a product without explaining which trust assumptions are being removed.",
    ],
  },
  {
    slug: "why-software-supply-chain-security-matters",
    category: "Cybersecurity",
    type: "Explainer",
    title: "Why software supply-chain security matters",
    excerpt: "Modern applications depend on thousands of external components, making the build process part of the security boundary.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-06",
    readTime: "7 min read",
    body: [
      "A modern application is rarely written from the first line to the last by one team. It depends on operating systems, package managers, open-source libraries, hosted build services and deployment platforms. This accelerates development, but every dependency becomes part of the software supply chain.",
      "An attacker does not always need to break the final application directly. Compromising a popular package, maintainer account or build system can distribute malicious code through trusted channels. The victim may install the update because it appears to come from a legitimate source.",
      "Dependency scanning helps identify known vulnerabilities, but it is only one layer. Teams should also control who can publish releases, require strong authentication, review unexpected ownership changes and limit the permissions available to build systems.",
      "Reproducible and signed builds improve confidence by making it easier to verify that an artifact corresponds to reviewed source code. A software bill of materials can document included components, although a list alone does not prove that each component is safe.",
      "Reducing dependency count is an underrated defense. Every package adds maintenance and trust obligations. A small utility may not justify introducing a large dependency tree, especially in security-sensitive software.",
      "Supply-chain security is ultimately about preserving evidence from source to deployment. Organizations need to know what entered a build, who approved it and whether the artifact changed before reaching users.",
    ],
  },
  {
    slug: "why-typescript-became-a-default-for-large-web-projects",
    category: "Programming",
    type: "Analysis",
    title: "Why TypeScript became a default for large web projects",
    excerpt: "TypeScript does not eliminate JavaScript errors, but it gives teams a shared language for describing data and interfaces.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-05",
    readTime: "6 min read",
    body: [
      "JavaScript’s flexibility helped it become the language of the web. The same flexibility can make large applications difficult to change safely. A value expected to be a string may become undefined, an API response may change shape, or a function may be called with an invalid argument.",
      "TypeScript adds a static type system on top of JavaScript. The types are checked during development and removed when the code is compiled. Browsers still run JavaScript, but developers receive earlier feedback about many incompatible assumptions.",
      "The main benefit is not that every bug disappears. Types cannot prove that a business rule is correct or that a network request will succeed. Their value is communication: an interface records what a function expects, what an object contains and which cases must be handled.",
      "Types also improve tooling. Editors can offer more accurate completion, navigation and automated refactoring. These features matter when a codebase is maintained by many people over several years.",
      "There is a cost. Complex type definitions can become harder to understand than the code they describe, and teams can waste time chasing theoretical precision. Good TypeScript code uses the type system to clarify important boundaries rather than turning every expression into a puzzle.",
      "The language became popular because it supports gradual adoption. A project can begin with ordinary JavaScript and add stricter checks over time. That allows teams to improve safety without rewriting an entire application.",
    ],
  },
  {
    slug: "how-to-evaluate-an-open-source-dependency",
    category: "Programming",
    type: "Guide",
    title: "How to evaluate an open-source dependency before adding it",
    excerpt: "A package saves time only when its maintenance, security and long-term cost are understood.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-04",
    readTime: "7 min read",
    body: [
      "Installing a package can turn hours of work into a one-line command. The immediate convenience is visible; the future responsibility is not. Every dependency introduces code, update decisions and trust in people outside the project.",
      "Begin by asking whether the dependency is necessary. A small and stable function may be simpler to implement locally. A complex parser, cryptographic library or framework is different: using a well-reviewed project is usually safer than creating a private replacement.",
      "Examine maintenance activity, but do not confuse frequent commits with quality. Mature software may change slowly. More useful signals include clear release notes, responsive handling of security reports, documented support policy and multiple trusted maintainers.",
      "Review the dependency tree. A tiny package can pull in dozens of transitive packages, each with its own maintainers and risks. Lockfiles improve repeatability, but they do not remove the need to understand updates.",
      "Check the license before adoption. A technically excellent library may impose conditions that do not fit the project’s distribution model. Legal review becomes more important for commercial software and embedded products.",
      "Finally, define an exit strategy. Know which parts of the application depend on the package and avoid spreading library-specific assumptions everywhere. A dependency is easier to replace when it sits behind a clear internal interface.",
    ],
  },
  {
    slug: "why-web-performance-is-an-accessibility-issue",
    category: "Programming",
    type: "Explainer",
    title: "Why web performance is also an accessibility issue",
    excerpt: "Slow pages do more than frustrate users; they can exclude people with limited devices, data plans or network access.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-03",
    readTime: "6 min read",
    body: [
      "Web performance is often discussed as a conversion or search-ranking concern. It is also an accessibility issue. A page that requires a powerful phone, large data transfer or stable broadband may be effectively unavailable to many users.",
      "Heavy JavaScript can delay interaction even after visible content appears. On lower-cost hardware, parsing and executing code may take longer than downloading it. Reducing unnecessary client-side work can improve the experience without changing the visual design.",
      "Images are another common source of waste. Correct dimensions, modern formats and responsive delivery reduce bandwidth while preserving quality. Decorative media should not block access to essential information.",
      "Performance also affects assistive technology. Constant layout shifts, delayed controls and interface elements that appear after focus has moved can make navigation confusing. Stable structure benefits keyboard and screen-reader users as well as everyone else.",
      "A useful performance process measures real devices and networks, not only a developer laptop. Automated tests are valuable, but field data reveals how the site behaves for actual visitors.",
      "The fastest page is not automatically the most accessible, and accessibility requires much more than speed. Still, performance is part of inclusive design because it determines who can successfully reach and use the content.",
    ],
  },
  {
    slug: "what-data-centers-mean-for-local-power-grids",
    category: "Technology",
    type: "Analysis",
    title: "What data centers mean for local power grids",
    excerpt: "The growth of cloud and AI infrastructure is turning electricity planning into a central technology policy question.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-02",
    readTime: "8 min read",
    body: [
      "Data centers convert electricity into computation, storage and network services. As demand for cloud platforms and artificial intelligence grows, the size and concentration of new facilities are creating difficult questions for local power systems.",
      "A large project can require a connection comparable to other major industrial loads. Utilities must determine whether generation, transmission and substations can support the demand without reducing reliability for existing customers.",
      "Timing is a major challenge. A technology company may want capacity within a few years, while new transmission lines and power plants can take much longer to approve and construct. This mismatch can produce connection queues, higher costs or temporary reliance on existing fossil generation.",
      "Data centers can also provide benefits. Long-term contracts may support new energy projects, and flexible computing workloads could potentially shift some demand away from stressed periods. Those benefits depend on transparent agreements and technical capability rather than broad sustainability claims.",
      "Water use deserves separate scrutiny because some cooling systems consume significant volumes, especially in hot climates. Reporting should distinguish water withdrawn, water consumed and the local availability of the resource.",
      "Communities need clear information about jobs, tax revenue, infrastructure costs and environmental impact. The policy question is not simply whether data centers are good or bad; it is who pays for upgrades, who receives the benefits and what conditions protect the wider public.",
    ],
  },
  {
    slug: "the-real-tradeoffs-of-satellite-internet",
    category: "Technology",
    type: "Explainer",
    title: "The real trade-offs of satellite internet",
    excerpt: "Low-Earth-orbit systems can expand coverage, but capacity, cost and orbital management still matter.",
    author: "Benjamin Blanco",
    publishedAt: "2026-07-01",
    readTime: "7 min read",
    body: [
      "Satellite internet can reach places where laying fiber or cable is too expensive. Newer constellations in low Earth orbit reduce the delay associated with traditional geostationary satellites because signals travel a much shorter distance.",
      "Lower latency makes video calls, cloud applications and interactive services more practical. For rural homes, ships, aircraft and disaster recovery, the technology can provide connectivity where terrestrial networks are unavailable.",
      "Coverage does not mean unlimited capacity. Many users in the same area share satellite and ground-station resources. Performance can change as adoption grows, weather interferes or the network shifts traffic between satellites.",
      "Equipment and subscription costs may remain high for households with limited income. A service can be technically available while still being economically inaccessible. Public connectivity programs should evaluate affordability as well as geographic coverage.",
      "Large constellations also create concerns about space debris, collision avoidance and effects on astronomical observations. Operators and regulators need reliable coordination because orbital space is a shared environment.",
      "Satellite networks are best understood as one layer of communications infrastructure. They can complement fiber, mobile networks and fixed wireless systems, but they do not remove the need for investment in terrestrial connectivity.",
    ],
  },
  {
    slug: "how-digital-public-services-can-earn-trust",
    category: "Politics",
    type: "Analysis",
    title: "How digital public services can earn public trust",
    excerpt: "A government website is not successful merely because a paper form became an online form.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-30",
    readTime: "7 min read",
    body: [
      "Governments increasingly move applications, payments and records online. The change can reduce waiting time and administrative cost, but a poorly designed digital service can simply move bureaucracy from a counter to a screen.",
      "A trustworthy service begins with a clear user need. People should not have to understand the internal structure of an agency to complete a task. Forms should request only necessary information and explain why sensitive data is collected.",
      "Accessibility is a legal and practical requirement. Public services must work with keyboards, screen readers, older devices and slow connections. An online-only process can exclude people unless assisted and offline alternatives remain available.",
      "Security should be proportional to risk. Strong identity verification may be necessary for tax or health records, but excessive checks can create barriers. Agencies need a way to recover accounts without making recovery the weakest point in the system.",
      "Transparency matters when automated systems influence eligibility or enforcement. People should know when automation is used, what information affected a decision and how to appeal an error.",
      "The strongest digital services are maintained as long-term public infrastructure. Launching a polished website is easier than funding updates, support, security testing and policy changes over many years.",
    ],
  },
  {
    slug: "why-ai-regulation-keeps-returning-to-transparency",
    category: "Politics",
    type: "Explainer",
    title: "Why AI regulation keeps returning to transparency",
    excerpt: "Lawmakers disagree about many AI rules, but repeatedly focus on disclosure, documentation and accountability.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-29",
    readTime: "7 min read",
    body: [
      "Artificial intelligence regulation covers very different systems, from recommendation tools to software used in employment, credit and public services. A single technical rule is unlikely to fit every use, which is why many policy proposals begin with transparency.",
      "Transparency can mean several things. A user may need to know that they are interacting with an automated system. A regulator may require documentation about training data, testing and known limitations. An affected person may need an explanation of how a decision was reached.",
      "Disclosure alone is not enough. A company can publish a long technical report that few people can understand while leaving the practical risk unchanged. Information must be relevant to the audience and connected to a way of correcting harm.",
      "Risk-based approaches try to apply stronger obligations to systems with greater consequences. The difficulty is defining risk before deployment and updating the assessment when a model is used in a new context.",
      "Independent audits can add credibility, but audit quality depends on access, standards and incentives. A narrow test may miss discrimination, security failures or misuse that appears only in real operations.",
      "Transparency is attractive because it supports many other forms of oversight. It does not decide what uses should be prohibited, but it creates evidence needed for enforcement, research and public debate.",
    ],
  },
  {
    slug: "why-semiconductor-policy-is-about-more-than-factories",
    category: "World",
    type: "Analysis",
    title: "Why semiconductor policy is about more than building factories",
    excerpt: "Chip resilience depends on equipment, materials, skills and international coordination as much as fabrication capacity.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-28",
    readTime: "8 min read",
    body: [
      "Governments increasingly treat semiconductors as strategic infrastructure. The visible response is often a subsidy for a new fabrication plant, but the supply chain extends far beyond the building where chips are manufactured.",
      "Advanced production depends on specialized equipment, chemicals, design software, packaging and highly trained workers. A country can expand fabrication capacity while remaining dependent on foreign suppliers for critical stages.",
      "Workforce development takes time. Engineers, technicians and construction specialists cannot be created by a single grant. Training programs need stable demand and cooperation between schools, manufacturers and local communities.",
      "Energy, water and transport infrastructure also shape where facilities can operate. Semiconductor plants require reliable utilities and extremely controlled production environments. Public incentives should account for these supporting costs.",
      "International cooperation remains necessary because complete self-sufficiency would be expensive and inefficient. Resilience is more realistic when it means diversified suppliers, shared standards and the ability to recover from disruption.",
      "Industrial policy should therefore be evaluated by the network it creates, not only by the number of announced factories. The most important results may appear in skills, supplier development and long-term research capacity.",
    ],
  },
  {
    slug: "how-to-read-claims-about-green-technology",
    category: "World",
    type: "Guide",
    title: "How to read claims about green technology",
    excerpt: "Environmental claims become more useful when readers separate operational efficiency from full life-cycle impact.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-27",
    readTime: "6 min read",
    body: [
      "A product described as green may use less energy during operation, contain recycled material or support a lower-carbon system. These are different claims, and each requires different evidence.",
      "Operational efficiency is often easiest to measure. A new device may consume less electricity than an older model. But manufacturing emissions, mining, transport and disposal can still represent a large share of its total impact.",
      "Life-cycle analysis attempts to include these stages. The result depends on assumptions about product lifetime, electricity sources and recycling. Two studies can reach different conclusions without either being fraudulent if their boundaries differ.",
      "Comparisons should use the same functional unit. A battery, vehicle or data center must be evaluated by the service it provides, not only by its weight or headline energy use.",
      "Offsets deserve particular caution. A company may report a net-zero activity while continuing to emit and purchasing credits elsewhere. Readers should ask which emissions were reduced directly and which were balanced through another project.",
      "The most credible environmental claim states its scope, method and limitations. Precision is more informative than a broad label that suggests an entire product has no impact.",
    ],
  },
  {
    slug: "a-practical-guide-to-verifying-breaking-news",
    category: "Media Literacy",
    type: "Guide",
    title: "A practical guide to verifying breaking news online",
    excerpt: "The first version of a major event is often incomplete. A few simple checks can prevent false claims from spreading.",
    author: "Benjamin Blanco",
    publishedAt: "2026-06-26",
    readTime: "7 min read",
    body: [
      "Breaking news creates pressure to understand an event before reliable information is available. Images, short videos and anonymous claims move quickly because they appear to offer immediate certainty.",
      "Start with the original source. A screenshot of a post can remove context or alter the account name. Open the underlying link, check the publication time and determine whether the account has a history connected to the event.",
      "Location and timing can sometimes be verified through visible landmarks, weather, shadows or signs. Reverse-image search may reveal that an image came from an older event in another country.",
      "Look for independent confirmation. Ten accounts repeating the same claim do not represent ten sources if they all rely on one unverified post. Strong confirmation comes from separate observers, official records or reporters who explain what they verified.",
      "Language is a useful signal. Reliable early reporting often includes uncertainty: officials have not confirmed, the cause remains unknown, or the number may change. Absolute confidence without evidence should increase skepticism.",
      "Waiting is a verification tool. Sharing a claim five minutes later rarely causes harm, while amplifying a false accusation can. The goal is not to distrust everything; it is to match confidence to the quality of available evidence.",
    ],
  }
];

const sections = ["Artificial Intelligence", "Cybersecurity", "Programming", "Technology", "Politics", "World", "Media Literacy"];

function articlePath(article: Article) {
  return `/article/${article.slug}`;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00Z`));
}

function Header() {
  return (
    <>
      <div className="utility">
        <div className="shell utility-inner">
          <span>INDEPENDENT EXPLAINERS AND ANALYSIS</span>
          <span>NEXORA NEWS</span>
        </div>
      </div>
      <header className="header">
        <div className="shell header-inner">
          <a className="brand" href="/">
            <span className="mark">N</span>
            <span>NEXORA <b>NEWS</b></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/latest">Latest</a>
            <a href="/about">About</a>
            <a href="/editorial-policy">Editorial Policy</a>
            <a href="/contact">Contact</a>
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
          <a className="brand footer-brand" href="/">
            <span className="mark">N</span>
            <span>NEXORA <b>NEWS</b></span>
          </a>
          <p>
            Original explainers and analysis about technology, security,
            software, policy and the digital world.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/editorial-policy">Editorial Policy</a>
          <a href="/corrections-policy">Corrections</a>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
          <a href="/dmca">DMCA</a>
        </div>
      </div>
      <div className="shell copyright">
        © {new Date().getFullYear()} Nexora News. All rights reserved.
      </div>
    </footer>
  );
}

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={featured ? "card featured" : "card"}>
      <div className="meta">
        <span>{article.category}</span>
        <span>{article.type}</span>
      </div>
      <h2><a href={articlePath(article)}>{article.title}</a></h2>
      <p>{article.excerpt}</p>
      <div className="byline">
        <span>By {article.author}</span>
        <span>{formatDate(article.publishedAt)} · {article.readTime}</span>
      </div>
      <a className="read" href={articlePath(article)}>Read full article →</a>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <p className="kicker">NEXORA ORIGINALS</p>
          <h1>Understand the systems shaping the digital world.</h1>
          <p className="deck">
            Original explainers and analysis written to add context—not copied
            headlines, invented metrics or automatic summaries.
          </p>
        </div>
      </section>

      <main className="shell home">
        <ArticleCard article={articles[0]} featured />
        <section className="grid" aria-label="Original articles">
          {articles.slice(1).map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </section>
      </main>
    </>
  );
}

function ArticlePage({ article }: { article: Article }) {
  return (
    <main>
      <article className="article-page">
        <header className="article-header shell">
          <div className="meta">
            <span>{article.category}</span>
            <span>{article.type}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="standfirst">{article.excerpt}</p>
          <div className="article-byline">
            <strong>By {article.author}</strong>
            <span>Published {formatDate(article.publishedAt)}</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className="article-body">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <aside className="editor-note">
            <strong>Editorial note</strong>
            <p>
              This article is an original Nexora News explainer. It is intended
              for general information and does not replace professional legal,
              financial or cybersecurity advice.
            </p>
          </aside>
        </div>
      </article>

      <section className="shell related">
        <p className="kicker">KEEP READING</p>
        <h2>Related explainers</h2>
        <div className="grid">
          {articles
            .filter((candidate) => candidate.slug !== article.slug)
            .slice(0, 3)
            .map((candidate) => (
              <ArticleCard article={candidate} key={candidate.slug} />
            ))}
        </div>
      </section>
    </main>
  );
}

function StaticPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="shell static-page">
      <p className="kicker">NEXORA NEWS</p>
      <h1>{title}</h1>
      <div className="static-copy">{children}</div>
    </main>
  );
}

const staticPages: Record<string, { title: string; content: React.ReactNode }> = {
  "/about": {
    title: "About Nexora News",
    content: (
      <>
        <p>Nexora News publishes original explainers and analysis about technology, cybersecurity, programming, public policy and digital media.</p>
        <p>Articles are written to clarify complex subjects. We do not present automated summaries or third-party reporting as original journalism.</p>
      </>
    ),
  },
  "/contact": {
    title: "Contact",
    content: <p>Email: <a href="mailto:blancobenjamin353@gmail.com">blancobenjamin353@gmail.com</a></p>,
  },
  "/editorial-policy": {
    title: "Editorial Policy",
    content: (
      <>
        <p>We aim to publish accurate, clearly labeled and original material. Analysis, guides and explainers are identified by type.</p>
        <p>When an article relies on outside reporting or research, the source should be named and linked. Material errors are corrected transparently.</p>
      </>
    ),
  },
  "/corrections-policy": {
    title: "Corrections Policy",
    content: <p>Send the article URL and a description of the suspected error to our contact email. Verified material errors will be corrected promptly.</p>,
  },
  "/privacy": {
    title: "Privacy Policy",
    content: <p>Nexora News may use cookies, analytics and advertising services. Where required, visitors can manage consent through the consent message displayed on the site.</p>,
  },
  "/terms": {
    title: "Terms of Use",
    content: <p>Content is provided for general informational purposes. External services and links are governed by their own terms and policies.</p>,
  },
  "/cookies": {
    title: "Cookie Policy",
    content: <p>Cookies may support essential features, analytics, preferences and advertising. Consent controls are provided where legally required.</p>,
  },
  "/dmca": {
    title: "DMCA and Copyright",
    content: <p>Copyright concerns may be submitted to blancobenjamin353@gmail.com with enough information to identify the relevant material.</p>,
  },
};

function Styles() {
  return (
    <style>{`
      :root {
        --paper: #f4f1ea;
        --ink: #181719;
        --muted: #666269;
        --card: #fff;
        --line: #ddd7cd;
        --red: #781324;
        --dark-red: #4f0b16;
      }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; background: var(--paper); color: var(--ink); }
      a { color: inherit; }
      .shell { width: min(1160px, calc(100% - 36px)); margin: 0 auto; }
      .utility { background: var(--dark-red); color: #fff; font-size: 11px; letter-spacing: .12em; }
      .utility-inner { min-height: 32px; display: flex; justify-content: space-between; align-items: center; }
      .header { background: rgba(255,255,255,.96); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 10; backdrop-filter: blur(14px); }
      .header-inner { min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
      .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-family: Georgia, serif; letter-spacing: .04em; font-size: 21px; }
      .brand b { color: var(--red); }
      .mark { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 11px; background: var(--red); color: #fff; font-weight: 800; }
      nav { display: flex; flex-wrap: wrap; gap: 18px; }
      nav a { text-decoration: none; font-size: 14px; font-weight: 700; }
      nav a:hover { color: var(--red); }
      .hero { border-bottom: 1px solid var(--line); padding: 76px 0 52px; }
      .kicker { color: var(--red); font-weight: 800; letter-spacing: .14em; font-size: 12px; }
      .hero h1, .article-header h1, .static-page h1 { font-family: Georgia, serif; font-size: clamp(44px, 7vw, 78px); line-height: 1; margin: 12px 0 20px; max-width: 980px; }
      .deck, .standfirst { max-width: 800px; color: var(--muted); font-size: 20px; line-height: 1.65; }
      .home { padding: 36px 0 80px; }
      .grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px; }
      .card { background: var(--card); border: 1px solid var(--line); border-radius: 18px; padding: 24px; display: flex; flex-direction: column; min-height: 340px; box-shadow: 0 8px 30px rgba(40,30,22,.05); }
      .card.featured { margin-bottom: 26px; min-height: 410px; padding: 38px; background: linear-gradient(135deg, #fff, #f3e5e7); }
      .meta { display: flex; gap: 10px; flex-wrap: wrap; }
      .meta span { color: var(--red); font-size: 11px; text-transform: uppercase; letter-spacing: .1em; font-weight: 800; }
      .card h2 { font-family: Georgia, serif; font-size: 27px; line-height: 1.16; margin: 18px 0 14px; }
      .card.featured h2 { font-size: clamp(38px, 5vw, 62px); max-width: 900px; }
      .card h2 a { text-decoration: none; }
      .card h2 a:hover { color: var(--red); }
      .card > p { color: var(--muted); line-height: 1.62; }
      .byline { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 5px; color: var(--muted); font-size: 13px; }
      .read { margin-top: 18px; color: var(--red); font-weight: 800; text-decoration: none; }
      .article-page { padding: 64px 0 20px; }
      .article-header { border-bottom: 1px solid var(--line); padding-bottom: 38px; }
      .article-byline { display: flex; flex-wrap: wrap; gap: 14px 24px; color: var(--muted); margin-top: 28px; }
      .article-body { width: min(760px, calc(100% - 36px)); margin: 42px auto 70px; font-family: Georgia, serif; font-size: 20px; line-height: 1.82; }
      .article-body p { margin: 0 0 28px; }
      .editor-note { margin-top: 44px; padding: 22px; border-left: 4px solid var(--red); background: #fff; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; }
      .editor-note p { margin: 8px 0 0; }
      .related { border-top: 1px solid var(--line); padding: 52px 0 80px; }
      .related > h2 { font-family: Georgia, serif; font-size: 38px; }
      .static-page { min-height: 65vh; padding: 72px 0 90px; }
      .static-copy { max-width: 760px; color: #444047; font-size: 19px; line-height: 1.8; }
      footer { background: #181719; color: #fff; padding: 52px 0 22px; }
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 34px; }
      .footer-grid p, .footer-grid a { color: #c9c5ca; }
      .footer-grid a { display: block; margin: 10px 0; text-decoration: none; }
      .footer-brand { color: #fff; }
      .copyright { margin-top: 38px; border-top: 1px solid #39363a; padding-top: 20px; color: #aaa5ad; font-size: 13px; }
      @media (max-width: 900px) {
        .header-inner { align-items: flex-start; flex-direction: column; padding: 18px 0; }
        .grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
      }
      @media (max-width: 620px) {
        .utility-inner span:last-child { display: none; }
        .grid { grid-template-columns: 1fr; }
        .card.featured { padding: 26px; }
        .footer-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}

export default function NewsSite({ path }: { path: string }) {
  const cleanPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const articleSlug = cleanPath.startsWith("/article/")
    ? cleanPath.slice("/article/".length)
    : "";
  const article = articles.find((item) => item.slug === articleSlug);
  const staticPage = staticPages[cleanPath];

  return (
    <>
      <Styles />
      <Header />
      {article ? (
        <ArticlePage article={article} />
      ) : staticPage ? (
        <StaticPage title={staticPage.title}>{staticPage.content}</StaticPage>
      ) : (
        <Home />
      )}
      <Footer />
    </>
  );
}
