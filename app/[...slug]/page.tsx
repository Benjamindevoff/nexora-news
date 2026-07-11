import NewsSite from "../news-site";

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <NewsSite path={`/${slug.join("/")}`} />;
}
