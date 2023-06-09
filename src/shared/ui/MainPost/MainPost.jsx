/* eslint-disable react/jsx-no-useless-fragment */
import { en, format } from "date-fns";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { SearchInput } from "@/widgets";

import styles from "./MainPost.module.scss";

export const MainPost = ({
  title,
  description,
  image,
  alt,
  id,
  date,
  data1,
}) => {
  const [results, setResults] = useState([]);

  const latest = data1.sort(
    (a, b) =>
      new Date(b.attributes?.createdAt) - new Date(a.attributes?.createdAt)
  );

  const md = new MarkdownIt({
    html: true,
  });

  const htmlContentDescription = md.render(description);
  const htmlContentTitle = md.render(title);
  const inputDate = new Date(date);
  const formattedDate = format(inputDate, "d MMMM yyyy", {
    locale: en,
  });

  return (
    <div className={styles.post}>
      <div className={styles.left}>
        <Image
          width={700}
          height={400}
          src={image}
          alt={alt}
          className={styles.image}
        />
        <div
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: htmlContentTitle }}
        />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: htmlContentDescription }}
        />

        <div className={styles.bottom}>
          <div className={styles.date}>{formattedDate}</div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.search}>
          <div className={styles.block}>
            <SearchInput results={results} setResults={setResults} />
          </div>
          <div className={styles.latest_posts}>
            <h6 className={styles.latest_post_title}>Latest Post</h6>

            {results.length !== 0 ? (
              results?.data?.map((result) => {
                const resDate = new Date(result?.attributes?.createdAt);
                const resFormDate = format(resDate, "d MMMM yyyy", {
                  locale: en,
                });
                return (
                  <Link
                    href={result?.id.toString()}
                    className={styles.latest_post}
                  >
                    <div>
                      <div className={styles.latest_title}>
                        {result?.attributes?.title}
                      </div>
                      <div className={styles.latest_date}>{resFormDate}</div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <>
                {latest?.slice(0, 3).map((post) => {
                  const resDate = new Date(post?.attributes?.createdAt);
                  const resFormDate = format(resDate, "d MMMM yyyy", {
                    locale: en,
                  });
                  return (
                    <Link
                      href={post?.id.toString()}
                      className={styles.latest_post}
                    >
                      <div>
                        <div className={styles.latest_title}>
                          {post?.attributes?.title}
                        </div>
                        <div className={styles.latest_date}>{resFormDate}</div>
                      </div>
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
