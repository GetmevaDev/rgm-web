import React from "react";

import { Post } from "./Post/Post";

import styles from "./Posts.module.scss";

export const Posts = ({ data }) => {
  const reverseData = data.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.posts}>
      {reverseData.map((post) => (
        <Post
          title={post?.attributes?.title}
          description={post?.attributes?.description}
          image={post?.attributes?.image?.data?.attributes?.url}
          alt={post?.attributes?.image?.data?.attributes?.name}
          id={post?.id}
          date={post?.attributes?.createdAt}
        />
      ))}
    </div>
  );
};
