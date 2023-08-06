import { getDocs, collection, query, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import Post from "./Post";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}
const MainPage = () => {
  const [user] = useAuthState(auth);
  const [postList, setPostList] = useState<Post[] | null>(null);
  const postRef = collection(db, "post");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <div>
        {user ? (
          postList?.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <>
            <p className="text-center">Please Login to continue</p>
          </>
        )}
      </div>
    </>
  );
};

export default MainPage;
