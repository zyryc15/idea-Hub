import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

interface CreatePostData {
  title: string;
  description: string;
}
const CreatePost = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must create a title."),
    description: yup.string().required("description is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostData>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "post");

  const onCreatePost = async (data: CreatePostData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };
  return (
    <form className="container-sm mt-5" onSubmit={handleSubmit(onCreatePost)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Title..."
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
        <div id="emailHelp" className="form-text">
          A memorable title for your post.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Description..."
          {...register("description")}
        />
        <p>{errors.title?.message}</p>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
