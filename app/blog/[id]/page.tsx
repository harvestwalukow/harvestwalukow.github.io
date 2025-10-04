import { getPostData, getAllPostIds } from "@/lib/posts";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function Post({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const postData = await getPostData(id);

  if (!postData) {
    notFound();
  }

  return (
    <article className="max-w-xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{postData.title}</h1>
      <div className="text-muted-foreground mt-2">
        {new Date(postData.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div
        className="prose dark:prose-invert mt-8"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
