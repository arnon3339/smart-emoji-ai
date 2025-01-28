import Posts from "@/components/posts";
import PostsProviderWraper from "@/components/posts-provider";
import TheForm from "@/components/the-form";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-4xl font-bold">SmartEmoji AI</h1>
      <PostsProviderWraper>
          <TheForm />
          <Posts/>
        </PostsProviderWraper>
    </div>
  );
}
