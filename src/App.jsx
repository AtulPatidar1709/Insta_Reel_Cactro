import { useState } from "react";
import posts from "./data/stories.json";
import "./App.css";
import PostsSection from './Components/postsSection'
import ReelModal from "./Components/ReelModel";

export default function App() {

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-md mx-auto sm:hidden">
      <PostsSection
        posts={posts}
        onOpen={(index) => {
          setActiveIndex(index);
          setOpen(true);
        }}
      />

      {open && (
        <ReelModal
          posts={posts}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={() => setOpen(false)}
        />
      )}

    </div>
  );
}
