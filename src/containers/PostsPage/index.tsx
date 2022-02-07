import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsDataAction } from "../../store/actions";
import PostsList from "../../components/PostsLists";
import fakeData from "../../assets/data";
import { getPostsData } from "../../store/selectors";

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);

  useEffect(() => {
    setTimeout(() => dispatch(fetchPostsDataAction(fakeData)), 2000);
  }, []);
  return <PostsList data={data} />;
};

export default PostsPage;
