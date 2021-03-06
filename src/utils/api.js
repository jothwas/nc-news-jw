import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-jw.herokuapp.com/api",
});

export const fetchAllArticles = ({
  sort_by,
  order,
  topic,
  page,
  limit,
  created_at,
  comment_count,
}) => {
  return newsApi
    .get("/articles", {
      params: {
        sort_by: sort_by,
        order: order,
        created_at: created_at,
        topic: topic,
        page: page,
        limit: limit,
        comment_count: comment_count,
      },
    })
    .then(({ data: { articles } }) => articles);
};

export const fetchIndividualArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => article);
};

export const fetchArticleComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => comments);
};

export const patchArticleVotes = (article_id, votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: votes });
};

export const patchCommentVotes = (comment_id, votes) => {
  return newsApi.patch(`/comments/${comment_id}`, { inc_votes: votes });
};

export const postComment = (article_id, username, comment) => {
  return newsApi.post(`/articles/${article_id}/comments`, {
    username: username,
    comment: comment,
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const postArticle = (newArticle) => {
  return newsApi
    .post(`/articles`, newArticle)
    .then(({ data: { article } }) => article);
};

export const deleteArticle = (article_id) => {
  return newsApi.delete(`/articles/${article_id}`);
};
