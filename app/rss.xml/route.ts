const items = [
  ["The race for smaller, smarter AI moves from the cloud to the edge", "ai/the-race-for-smaller-smarter-ai-moves-from-the-cloud-to-the-edge"],
  ["Security teams rethink identity as the network perimeter fades", "cybersecurity/security-teams-rethink-identity-as-the-network-perimeter-fades"],
  ["Why typed systems are winning the next era of web development", "programming/why-typed-systems-are-winning-the-next-era-of-web-development"],
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Nexora News</title><link>https://nexoranews.xyz</link><description>Independent reporting on technology, politics and world affairs.</description><language>en-us</language>${items.map(([title, path]) => `<item><title><![CDATA[${title}]]></title><link>https://nexoranews.xyz/${path}</link><guid>https://nexoranews.xyz/${path}</guid><pubDate>Fri, 10 Jul 2026 12:00:00 GMT</pubDate><description><![CDATA[Fictional demonstration content for the Nexora News platform.]]></description></item>`).join("")}</channel></rss>`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=900" } });
}
