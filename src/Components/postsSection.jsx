export default function PostsSection({ posts, onOpen }) {
  return (
    <div className="grid grid-cols-3 gap-1 sm:grid-cols-4">
      {posts.map((post, i) => (
        <div
          key={i}
          onClick={() => onOpen(i)}
          className="cursor-pointer aspect-9/16 overflow-hidden"
        >
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
