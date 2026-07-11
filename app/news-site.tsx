"use client";

/* eslint-disable @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect */

import { FormEvent, useEffect, useMemo, useState } from "react";

type Story = {
  id: number;
  category: string;
  categorySlug: string;
  type: "News" | "Analysis" | "Opinion" | "Fact Check" | "Developing Story";
  title: string;
  summary: string;
  author: string;
  time: string;
  accent: string;
  reads: string;
};

const stories: Story[] = [
  { id: 1, category: "Artificial Intelligence", categorySlug: "ai", type: "Analysis", title: "The race for smaller, smarter AI moves from the cloud to the edge", summary: "A practical look at how efficient models could reshape devices, privacy and the economics of artificial intelligence.", author: "Maya Chen", time: "8 min read", accent: "signal", reads: "48.2K" },
  { id: 2, category: "Cybersecurity", categorySlug: "cybersecurity", type: "News", title: "Security teams rethink identity as the network perimeter fades", summary: "New defensive strategies put verified access and human behavior at the center.", author: "Noah Brooks", time: "5 min read", accent: "grid", reads: "36.1K" },
  { id: 3, category: "Programming", categorySlug: "programming", type: "Analysis", title: "Why typed systems are winning the next era of web development", summary: "Teams are trading shortcuts for confidence as software complexity rises.", author: "Elena Ortiz", time: "7 min read", accent: "code", reads: "31.7K" },
  { id: 4, category: "Politics", categorySlug: "politics", type: "News", title: "States test a new generation of digital public services", summary: "Policy leaders weigh speed, accountability and local control in modernization plans.", author: "James Carter", time: "6 min read", accent: "civic", reads: "27.9K" },
  { id: 5, category: "World News", categorySlug: "world-news", type: "Developing Story", title: "Allied economies outline framework for resilient technology trade", summary: "The proposal focuses on critical infrastructure, transparent rules and supply-chain security.", author: "Amelia Grant", time: "4 min read", accent: "world", reads: "25.4K" },
  { id: 6, category: "Artificial Intelligence", categorySlug: "ai", type: "Fact Check", title: "What benchmark scores can — and cannot — tell us about AI", summary: "A clear guide to reading the numbers behind major model announcements.", author: "Maya Chen", time: "6 min read", accent: "matrix", reads: "22.8K" },
  { id: 7, category: "Cybersecurity", categorySlug: "cybersecurity", type: "Analysis", title: "The quiet shift toward passwordless infrastructure", summary: "Passkeys are maturing, but deployment choices still determine whether they improve security.", author: "Noah Brooks", time: "8 min read", accent: "lock", reads: "20.3K" },
  { id: 8, category: "Programming", categorySlug: "programming", type: "Opinion", title: "Good software still begins with a clear problem", summary: "Tooling changes quickly. Sound engineering judgment compounds.", author: "Elena Ortiz", time: "4 min read", accent: "terminal", reads: "18.6K" },
  { id: 9, category: "Politics", categorySlug: "politics", type: "Analysis", title: "The local policy choices shaping America’s technology map", summary: "Energy, education and permitting are becoming decisive competitive levers.", author: "James Carter", time: "9 min read", accent: "map", reads: "16.9K" },
  { id: 10, category: "World News", categorySlug: "world-news", type: "News", title: "Ports accelerate automation while keeping human oversight", summary: "Operators balance resilience and productivity with workforce transition plans.", author: "Amelia Grant", time: "5 min read", accent: "port", reads: "14.2K" },
];

const categoryInfo: Record<string, { name: string; kicker: string }> = {
  ai: { name: "Artificial Intelligence", kicker: "Models, policy and the systems changing how we work." },
  cybersecurity: { name: "Cybersecurity", kicker: "Threat intelligence, digital resilience and practical defense." },
  programming: { name: "Programming", kicker: "Engineering ideas, tools and the craft behind modern software." },
  politics: { name: "Politics", kicker: "Power, policy and institutions — reported with facts and context." },
  "world-news": { name: "World News", kicker: "Global developments and the forces shaping the international order." },
  opinion: { name: "Opinion", kicker: "Clearly labeled arguments from Nexora contributors and guest voices." },
  latest: { name: "Latest News", kicker: "The newest reporting and analysis from the Nexora newsroom." },
};

const nav = [
  ["Home", "/"], ["AI", "/ai"], ["Cybersecurity", "/cybersecurity"], ["Programming", "/programming"],
  ["Politics", "/politics"], ["World", "/world-news"], ["Opinion", "/opinion"], ["Latest", "/latest"],
];

function storyHref(story: Story) {
  return `/${story.categorySlug}/${story.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>;
}

function Icon({ name }: { name: "search" | "sun" | "menu" | "arrow" | "clock" | "mail" | "close" }) {
  const chars = { search: "⌕", sun: "◐", menu: "☰", arrow: "↗", clock: "◷", mail: "✉", close: "×" };
  return <span aria-hidden="true" className={`icon icon-${name}`}>{chars[name]}</span>;
}

function Art({ kind, large = false }: { kind: string; large?: boolean }) {
  return (
    <div className={`story-art art-${kind} ${large ? "art-large" : ""}`} role="img" aria-label="Abstract editorial illustration for this sample story">
      <span className="art-orbit" /><span className="art-line" /><span className="art-glow" />
      <b>N</b><small>NEXORA / SIGNAL</small>
    </div>
  );
}

function Badge({ type }: { type: Story["type"] }) {
  return <span className={`badge badge-${type.toLowerCase().replaceAll(" ", "-")}`}>{type}</span>;
}

function StoryCard({ story, compact = false }: { story: Story; compact?: boolean }) {
  return (
    <article className={`story-card ${compact ? "compact" : ""}`}>
      {!compact && <a href={storyHref(story)} aria-label={story.title}><Art kind={story.accent} /></a>}
      <div className="story-card-body">
        <div className="eyebrow"><a href={`/${story.categorySlug}`}>{story.category}</a><Badge type={story.type} /></div>
        <h3><a href={storyHref(story)}>{story.title}</a></h3>
        {!compact && <p>{story.summary}</p>}
        <div className="byline"><span>By {story.author}</span><span><Icon name="clock" /> {story.time}</span></div>
      </div>
    </article>
  );
}

function Ad({ label = "ADVERTISEMENT" }: { label?: string }) {
  return <div className="ad" aria-label="Reserved advertising space"><span>{label}</span><strong>Space reserved for future partners</strong></div>;
}

function Newsletter({ minimal = false }: { minimal?: boolean }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function submit(e: FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setMessage("Enter a valid email address.");
    setMessage("You’re on the list. Please check your inbox to confirm.");
    setEmail("");
  }
  return (
    <div className={`newsletter ${minimal ? "newsletter-minimal" : ""}`}>
      {!minimal && <div className="newsletter-copy"><span className="section-kicker">THE NEXORA BRIEF</span><h2>Signal, not noise.</h2><p>A sharp weekday briefing on technology, power and the world — written for readers who want context.</p></div>}
      <form onSubmit={submit}><label className="sr-only" htmlFor={minimal ? "foot-email" : "email"}>Email address</label><div className="input-row"><Icon name="mail" /><input id={minimal ? "foot-email" : "email"} value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email" /><button type="submit">Subscribe <span>→</span></button></div>{message && <p className="form-message" role="status">{message}</p>}<small>By subscribing, you agree to our Privacy and Cookie policies.</small></form>
    </div>
  );
}

function Header({ onSearch }: { onSearch: () => void }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  return <>
    <div className="utility"><div className="container"><span>Friday, July 10, 2026</span><span className="utility-center">INDEPENDENT JOURNALISM FOR A CHANGING WORLD</span><span>New York&nbsp;&nbsp; 72°F</span></div></div>
    <header className="header">
      <div className="container masthead">
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Icon name={open ? "close" : "menu"} /></button>
        <a href="/" className="brand"><Mark /><span>NEXORA</span><em>NEWS</em></a>
        <div className="mast-actions"><button onClick={onSearch} className="round-btn" aria-label="Search"><Icon name="search" /></button><button onClick={() => setDark(!dark)} className="round-btn" aria-label="Toggle dark mode"><Icon name="sun" /></button><a className="brief-btn" href="#newsletter">Get the Brief</a></div>
      </div>
      <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Main navigation"><div className="container">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/about">About</a></div></nav>
    </header>
  </>;
}

function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-top"><div className="footer-brand"><a href="/" className="brand brand-light"><Mark /><span>NEXORA</span><em>NEWS</em></a><p>Independent reporting on technology, politics and world affairs. Facts first. Context always.</p><div className="social"><a href="https://x.com" aria-label="X">X</a><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://linkedin.com" aria-label="LinkedIn">in</a><a href="https://youtube.com" aria-label="YouTube">▶</a></div></div><div className="footer-col"><h4>Sections</h4><a href="/ai">Artificial Intelligence</a><a href="/cybersecurity">Cybersecurity</a><a href="/programming">Programming</a><a href="/politics">Politics</a><a href="/world-news">World News</a></div><div className="footer-col"><h4>Company</h4><a href="/about">About Us</a><a href="/contact">Contact</a><a href="/editorial-policy">Editorial Policy</a><a href="/corrections-policy">Corrections</a><a href="/advertising">Advertising</a></div><div className="footer-col"><h4>Stay informed</h4><p>Get our essential stories in your inbox.</p><Newsletter minimal /></div></div>
    <div className="footer-bottom"><span>© 2026 Nexora News. All rights reserved.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cookies">Cookies</a><a href="/ethics">Ethics</a><a href="/dmca">DMCA</a></div></div>
  </div></footer>;
}

function HomePage() {
  const hero = stories[0];
  return <>
    <div className="breaking"><div className="container"><b>BREAKING</b><span>•••</span><p>Sample newsroom: Nexora News launches its public design preview</p><a href="/latest">Follow live <span>→</span></a></div></div>
    <main>
      <section className="container hero-section">
        <div className="edition-note"><span>NEXORA MORNING EDITION</span><span>15 STORIES &nbsp;•&nbsp; UPDATED 8:42 AM ET</span></div>
        <div className="hero-grid">
          <article className="hero-story"><a href={storyHref(hero)}><Art kind={hero.accent} large /></a><div className="hero-overlay"><div className="eyebrow"><a href="/ai">ARTIFICIAL INTELLIGENCE</a><Badge type="Analysis" /></div><h1><a href={storyHref(hero)}>{hero.title}</a></h1><p>{hero.summary}</p><div className="byline light"><span>By {hero.author}</span><span><Icon name="clock" /> {hero.time}</span></div></div></article>
          <div className="hero-side"><StoryCard story={stories[1]} /><StoryCard story={stories[2]} /></div>
        </div>
        <p className="demo-note">Editorial demo — all displayed stories are fictional samples created to demonstrate the platform.</p>
      </section>
      <section className="container section-block"><div className="section-head"><div><span className="section-kicker">THE NEWSROOM</span><h2>Latest News</h2></div><a href="/latest">View all latest <span>→</span></a></div><div className="latest-grid"><div className="latest-list">{stories.slice(3, 7).map(s => <StoryCard key={s.id} story={s} />)}</div><aside className="side-column"><div className="side-box"><div className="side-title"><span>Most Read</span><small>24 HOURS</small></div>{stories.slice(0,5).map((s,i) => <a className="ranked" href={storyHref(s)} key={s.id}><b>{String(i+1).padStart(2,"0")}</b><span><em>{s.category}</em><strong>{s.title}</strong><small>{s.reads} reads</small></span></a>)}</div><Ad /></aside></div></section>
      <Ad label="ADVERTISEMENT · RESPONSIVE LEADERBOARD" />
      <section className="container section-block categories"><div className="section-head"><div><span className="section-kicker">DEEPER COVERAGE</span><h2>Explore by section</h2></div></div>{Object.entries(categoryInfo).slice(0,5).map(([slug, info], idx) => { const catStories = stories.filter(s => s.categorySlug === slug); return <div className="category-row" key={slug}><div className="category-label"><span>0{idx+1}</span><h3>{info.name}</h3><p>{info.kicker}</p><a href={`/${slug}`}>Explore section <span>→</span></a></div><div className="category-feature"><StoryCard story={catStories[0]} /></div><div className="category-briefs">{[...catStories, stories[(idx+5)%stories.length]].slice(1,3).map((s, briefIndex) => <StoryCard compact key={`${slug}-${s.id}-${briefIndex}`} story={s} />)}</div></div>})}</section>
      <section className="trending"><div className="container"><div className="section-head inverse"><div><span className="section-kicker">IN THE CONVERSATION</span><h2>Trending now</h2></div><span className="live-dot">LIVE</span></div><div className="trend-grid">{stories.slice(5,9).map((s,i)=><a href={storyHref(s)} className="trend-item" key={s.id}><span className="trend-no">0{i+1}</span><div><em>{s.category}</em><h3>{s.title}</h3><small>{s.reads} readers</small></div><Icon name="arrow" /></a>)}</div></div></section>
      <section className="container newsletter-wrap" id="newsletter"><Newsletter /></section>
    </main>
  </>;
}

function CategoryPage({ slug }: { slug: string }) {
  const info = categoryInfo[slug] ?? categoryInfo.latest;
  const filtered = slug === "latest" || slug === "opinion" ? stories : stories.filter(s => s.categorySlug === slug);
  const list = filtered.length >= 3 ? filtered : [...filtered, ...stories.filter(s => !filtered.includes(s))].slice(0,6);
  return <main className="container inner-page"><div className="breadcrumb"><a href="/">Home</a><span>/</span>{info.name}</div><header className="category-hero"><span className="section-kicker">NEXORA NEWS SECTION</span><h1>{info.name}</h1><p>{info.kicker}</p></header><div className="category-lead"><StoryCard story={list[0]} /><div className="lead-copy"><Badge type={list[0].type} /><h2><a href={storyHref(list[0])}>{list[0].title}</a></h2><p>{list[0].summary}</p><div className="byline"><span>By {list[0].author}</span><span>{list[0].time}</span></div></div></div><div className="section-head compact-head"><div><span className="section-kicker">LATEST</span><h2>More from {info.name}</h2></div></div><div className="listing-layout"><div className="article-list">{list.slice(1).map(s => <StoryCard key={s.id} story={s} />)}<button className="load-more">Load more stories</button></div><aside><div className="side-box"><div className="side-title"><span>Popular</span><small>THIS WEEK</small></div>{stories.slice(1,5).map((s,i)=><a className="ranked" href={storyHref(s)} key={s.id}><b>0{i+1}</b><span><em>{s.category}</em><strong>{s.title}</strong></span></a>)}</div><Ad /></aside></div></main>;
}

function ArticlePage({ story }: { story: Story }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard?.writeText(window.location.href); setCopied(true); setTimeout(()=>setCopied(false),1500); };
  return <main className="article-page"><div className="container article-header"><div className="breadcrumb"><a href="/">Home</a><span>/</span><a href={`/${story.categorySlug}`}>{story.category}</a><span>/</span>{story.type}</div><div className="eyebrow"><a href={`/${story.categorySlug}`}>{story.category}</a><Badge type={story.type} /></div><h1>{story.title}</h1><p className="dek">{story.summary}</p><div className="article-meta"><div className="author-avatar">{story.author.split(" ").map(x=>x[0]).join("")}</div><div><strong>{story.author}</strong><span>Senior Correspondent</span></div><div className="meta-dates"><span>Published July 10, 2026</span><span>Updated 9:18 AM ET · {story.time}</span></div></div></div><div className="container article-visual"><Art kind={story.accent} large /><small>Conceptual illustration for this fictional demonstration article. Nexora News / Studio</small></div><div className="container article-layout"><aside className="share-rail"><span>SHARE</span><a href={`https://x.com/intent/tweet?text=${encodeURIComponent(story.title)}`} aria-label="Share on X">X</a><a href="https://facebook.com" aria-label="Share on Facebook">f</a><a href="https://linkedin.com" aria-label="Share on LinkedIn">in</a><button onClick={copy} aria-label="Copy link">{copied ? "✓" : "↗"}</button></aside><article className="article-body"><p className="sample-alert"><strong>Sample content:</strong> This fictional article demonstrates Nexora News’ editorial format. It does not report a real-world event.</p><p className="dropcap">The biggest changes in technology rarely arrive all at once. They emerge through dozens of practical decisions: where a system runs, who controls its data, how it earns trust and what happens when it fails.</p><p>This shift matters because it changes both the economics and the politics of modern computing. Smaller systems can reduce latency and cost while giving organizations more control over sensitive information.</p><h2>A new center of gravity</h2><p>For years, scale was the industry’s dominant measure of progress. Now, efficiency is becoming just as consequential. Teams are asking whether a capable system can operate closer to the people and devices that depend on it.</p><blockquote>“The most useful system is not always the largest one. It is the one that fits the problem, the risk and the people it serves.”<cite>— Nexora News analysis desk</cite></blockquote><p>The trade-offs remain real. Compact systems may be faster and more private, but they require careful evaluation, strong safeguards and clear responsibility.</p><Ad label="ADVERTISEMENT · IN-ARTICLE" /><h2>What to watch next</h2><p>Three signals will define the next phase: better efficiency, clearer standards and more credible measurement. Public policy will matter too, particularly where infrastructure and accountability intersect.</p><h3>The bottom line</h3><p>The direction is clear even if the timing is not. Computing is becoming more distributed, and the organizations that adapt thoughtfully will be best positioned to turn technical progress into durable value.</p><div className="sources"><h3>Sources & methodology</h3><p>This demonstration article uses no external factual claims. In published reporting, Nexora lists primary documents, on-record interviews and supporting references here.</p></div><div className="tags"><span>Tags</span><a href="/ai">Technology</a><a href="/ai">Innovation</a><a href="/ai">Policy</a></div><div className="correction">See an error? <a href="/corrections-policy">Read our corrections policy</a> or <a href="/contact">contact the newsroom</a>.</div></article><aside className="article-aside"><span className="section-kicker">UP NEXT</span><StoryCard compact story={stories[(story.id)%stories.length]} /><StoryCard compact story={stories[(story.id+2)%stories.length]} /><Ad /></aside></div><section className="container related"><div className="section-head"><div><span className="section-kicker">KEEP READING</span><h2>Related stories</h2></div></div><div className="related-grid">{stories.filter(s=>s.id!==story.id).slice(0,3).map(s=><StoryCard key={s.id} story={s}/>)}</div></section></main>;
}

const legalContent: Record<string, { title: string; intro: string; sections: [string,string][] }> = {
  about: { title: "About Nexora News", intro: "Independent journalism for readers navigating technology, power and a changing world.", sections: [["Our mission","Nexora News exists to deliver accurate, useful reporting with clear labels, transparent sourcing and respect for the reader’s time."],["Our standards","We separate reporting from opinion, seek primary sources, disclose uncertainty and correct material errors visibly."],["Our perspective","Our editorial outlook values individual liberty, accountable government, open markets and strong institutions. Facts remain the foundation of every report."]] },
  "editorial-policy": { title: "Editorial Policy", intro: "The standards that guide every Nexora News report, analysis and opinion.", sections: [["Verification","Reporters confirm material claims through primary documents, direct interviews and credible independent sources whenever possible."],["Labels and sourcing","News, Analysis, Opinion, Fact Check and Developing Story labels tell readers what kind of work they are reading. Unconfirmed information is never presented as fact."],["Conflicts and corrections","Contributors disclose relevant conflicts. Substantive corrections are appended to the article with a clear description of what changed."]] },
  "corrections-policy": { title: "Corrections Policy", intro: "Accuracy is a continuing obligation, not a one-time claim.", sections: [["How we correct","When a material error is confirmed, we update the article promptly and explain the change in a visible correction note."],["Correction format","Correction: A previous version of this article stated… The article has been updated."],["Report an error","Send the article URL and supporting information through our contact page. The standards editor reviews every credible submission."]] },
  privacy: { title: "Privacy Policy", intro: "How Nexora News handles information responsibly.", sections: [["Information we collect","We collect only the information needed to provide subscriptions, measure site performance and protect the service."],["Your choices","You may unsubscribe from newsletters, reject non-essential cookies and request access to or deletion of personal data."],["Data stewardship","We limit access, use appropriate safeguards and do not sell personal information."]] },
  terms: { title: "Terms of Use", intro: "Terms governing access to Nexora News and its services.", sections: [["Using the service","You may use Nexora News for lawful, personal and informational purposes."],["Content","Our reporting and original design are protected by applicable intellectual-property laws."],["Limitations","The service is provided for general information and is not professional legal, financial or medical advice."]] },
  cookies: { title: "Cookie Policy", intro: "A plain-language guide to cookies and measurement.", sections: [["Essential cookies","These support security, preferences and core site functions."],["Analytics","Optional measurement helps us understand performance and improve the reading experience."],["Control","You can change cookie preferences in your browser or through the consent banner."]] },
  ethics: { title: "Ethics Policy", intro: "Trust requires independence, fairness and accountability.", sections: [["Independence","Editorial decisions are made independently from advertisers, donors and commercial partners."],["Fairness","We give subjects a meaningful chance to respond and include relevant context and competing evidence."],["Transparency","We disclose uncertainty, correct mistakes and explain our methods when they matter to the reader."]] },
  advertising: { title: "Advertising", intro: "Clear separation between journalism and commercial messages.", sections: [["Independence","Advertisers do not review or direct editorial coverage."],["Labeling","Paid placements are visually separated and clearly labeled."],["Partnerships","For future partnership inquiries, contact our business team through the contact page."]] },
  dmca: { title: "DMCA Policy", intro: "How to submit a good-faith copyright notice.", sections: [["Notice requirements","Identify the copyrighted work, the allegedly infringing material and provide accurate contact information."],["Review","We review complete notices and may remove or restrict material when legally required."],["Counter-notices","Affected contributors may respond with a valid counter-notification under applicable law."]] },
};

function InfoPage({ page }: { page: keyof typeof legalContent }) { const data=legalContent[page]??legalContent.about; return <main className="container prose-page"><div className="breadcrumb"><a href="/">Home</a><span>/</span>{data.title}</div><header><span className="section-kicker">NEXORA NEWS</span><h1>{data.title}</h1><p>{data.intro}</p><small>Last updated: July 10, 2026</small></header><div className="prose-layout"><aside><strong>ON THIS PAGE</strong>{data.sections.map(([h])=><a href={`#${h.toLowerCase().replaceAll(" ","-")}`} key={h}>{h}</a>)}</aside><article>{data.sections.map(([h,p])=><section id={h.toLowerCase().replaceAll(" ","-")} key={h}><h2>{h}</h2><p>{p}</p></section>)}<div className="policy-contact"><h3>Questions about this policy?</h3><p>Our standards team welcomes specific questions and feedback.</p><a href="/contact">Contact Nexora News →</a></div></article></div></main> }

function ContactPage() { const [sent,setSent]=useState(false); return <main className="container prose-page contact-page"><div className="breadcrumb"><a href="/">Home</a><span>/</span>Contact</div><header><span className="section-kicker">GET IN TOUCH</span><h1>Contact Nexora News</h1><p>Tips, corrections and thoughtful feedback help make our journalism stronger.</p></header><div className="contact-grid"><div><h2>Choose the right desk</h2><div className="contact-cards"><div><span>NEWS TIPS</span><h3>Have a story?</h3><p>Share documents or context with the newsroom.</p></div><div><span>CORRECTIONS</span><h3>Spot an error?</h3><p>Include the article URL and supporting details.</p></div><div><span>BUSINESS</span><h3>Work with us</h3><p>Advertising and partnership inquiries.</p></div></div></div><form onSubmit={(e)=>{e.preventDefault();setSent(true)}}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Topic<select><option>General inquiry</option><option>News tip</option><option>Correction</option><option>Advertising</option></select></label><label>Message<textarea required rows={6} placeholder="How can we help?" /></label><button type="submit">Send message →</button>{sent&&<p className="form-message">Thanks — your demonstration message has been validated locally.</p>}</form></div></main> }

function AdminPage() { const [title,setTitle]=useState("Untitled article"); const [status,setStatus]=useState("Draft"); return <main className="admin-page"><aside className="admin-nav"><a className="brand brand-light" href="/"><Mark /><span>NEXORA</span><em>NEWS</em></a><small>NEWSROOM CMS · DEMO</small><nav><a className="active" href="/admin">▦ Dashboard</a><a href="/admin">✎ Articles</a><a href="/admin">◉ Media</a><a href="/admin">♙ Authors</a><a href="/admin">◫ Comments</a><a href="/admin">✉ Newsletter</a><a href="/admin">⌁ Analytics</a></nav><a href="/">← View public site</a></aside><section className="admin-main"><header><div><span>EDITORIAL WORKSPACE</span><h1>Good morning, Editor.</h1></div><button onClick={()=>setStatus("Draft saved")}>+ New article</button></header><div className="admin-notice"><strong>Demonstration workspace</strong><span>This interface previews the planned newsroom workflow. Hosted authentication and publishing require a connected production database.</span></div><div className="admin-stats"><div><span>Published today</span><strong>15</strong><small>On target</small></div><div><span>Scheduled</span><strong>8</strong><small>Next at 11:30 AM</small></div><div><span>Pending review</span><strong>4</strong><small>2 high priority</small></div><div><span>Views today</span><strong>84.2K</strong><small>↑ 12.4%</small></div></div><div className="editor-panel"><div className="editor-head"><div><span>QUICK DRAFT</span><h2>Create a story</h2></div><span className="status-pill">{status}</span></div><label>Headline<input value={title} onChange={e=>setTitle(e.target.value)} /></label><div className="editor-row"><label>Category<select><option>Artificial Intelligence</option><option>Cybersecurity</option><option>Programming</option><option>Politics</option><option>World News</option></select></label><label>Article type<select><option>News</option><option>Analysis</option><option>Opinion</option><option>Fact Check</option></select></label></div><label>Summary<textarea rows={3} placeholder="Write a concise summary for search and social…" /></label><div className="editor-actions"><button onClick={()=>setStatus("Draft saved")}>Save draft</button><button onClick={()=>setStatus("Ready for review")}>Send for review</button></div></div></section></main> }

function SearchOverlay({ close }: { close: () => void }) { const [q,setQ]=useState(""); const results=useMemo(()=>stories.filter(s=>(s.title+s.summary+s.category+s.author).toLowerCase().includes(q.toLowerCase())),[q]); return <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search Nexora News"><div className="search-panel"><button className="search-close" onClick={close} aria-label="Close search">×</button><span className="section-kicker">SEARCH NEXORA NEWS</span><h2>What are you looking for?</h2><div className="search-input"><Icon name="search" /><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search stories, topics or authors…" /></div>{q&&<div className="search-results"><small>{results.length} RESULTS</small>{results.slice(0,5).map(s=><a onClick={close} href={storyHref(s)} key={s.id}><span>{s.category}</span><strong>{s.title}</strong><em>→</em></a>)}{!results.length&&<p>No sample stories match your search.</p>}</div>}<p className="search-hint">Try “AI”, “security”, “policy” or an author’s name.</p></div></div> }

function CookieBanner() { const [visible,setVisible]=useState(false); useEffect(()=>{setVisible(localStorage.getItem("nexora-cookie-choice")!="set")},[]); if(!visible)return null; const choose=()=>{localStorage.setItem("nexora-cookie-choice","set");setVisible(false)}; return <div className="cookie"><div><strong>Your privacy, your choice</strong><p>We use essential cookies and optional analytics to improve Nexora News.</p></div><div><a href="/cookies">Learn more</a><button onClick={choose} className="secondary">Essential only</button><button onClick={choose}>Accept all</button></div></div> }

export default function NewsSite({ path }: { path: string }) {
  const [search,setSearch]=useState(false);
  const segments=path.split("/").filter(Boolean);
  const first=segments[0]??"";
  let content;
  if(path==="/") content=<HomePage/>;
  else if(first==="admin") content=<AdminPage/>;
  else if(first==="contact") content=<ContactPage/>;
  else if(categoryInfo[first]&&segments.length===1) content=<CategoryPage slug={first}/>;
  else if(legalContent[first]) content=<InfoPage page={first}/>;
  else if(segments.length>=2) { const found=stories.find(s=>storyHref(s)===path)??stories.find(s=>s.categorySlug===first)??stories[0]; content=<ArticlePage story={found}/>; }
  else content=<InfoPage page="about"/>;
  if(first==="admin") return content;
  return <div className="site-shell"><Header onSearch={()=>setSearch(true)}/>{content}<Footer/>{search&&<SearchOverlay close={()=>setSearch(false)}/>}<CookieBanner/></div>;
}
