import { getPostsService } from "@/features/posts/services/get-posts/service";

export const Posts = async () => {
  const postsData = await getPostsService();

  return (
    <ul className="flex flex-col gap-4">
      {postsData.map((post) => (
        <li key={post.id}>{post.body}</li>
      ))}
    </ul>
  );
};
