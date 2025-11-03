import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <div className="max-w-xl mx-auto px-5 py-16">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <div className="mt-8 grid gap-4">
          {allPostsData.map(({ id, date, title, pinned }) => (
            <Link href={`/blog/${id}`} key={id}>
              <Card className="hover:bg-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {title}
                    {pinned && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white text-black border border-gray-200">
                        Pinned
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
