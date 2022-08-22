import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCommentsForArticleId,
  selectComments,
  isLoadingComments,
} from "../comments/commentsSlice";
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice";
import CommentList from "../../components/CommentList";
import CommentForm from "../../components/CommentForm";

const Comments = () => {
  const dispatch = useDispatch();
  const article = useSelector(selectCurrentArticle);
  // Declare additional selected data here.
  const comments = [];
  const commentsAreLoading = false;
  console.log("hey");

  const fetchC = async (id) => {
    // const response = await fetch(`/api/articles`);
    const response = await fetch(`api/articles/${id}`);
    // return await response.json();
    const data = await response.json();
    // return json;
    console.log(data);
  };
  const fetchGH = async () => {
    const response = await fetch(`https://api.github.com/users/efgarro`);
    const data = await response.json();
    console.log(data);
  };

  fetchC(2);
  fetchGH();

  // Dispatch loadCommentsForArticleId with useEffect here.

  if (commentsAreLoading) return <div>Loading Comments</div>;
  if (!article) return null;

  return (
    <div className="comments-container">
      <h3 className="comments-title">Comments</h3>
      <CommentList comments={[]} />
      <CommentForm articleId={article.id} />
    </div>
  );
};

export default Comments;
