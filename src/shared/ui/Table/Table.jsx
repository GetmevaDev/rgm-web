import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { useMediaQuery } from "@/shared/hooks";

import styles from "./Table.module.scss";

export const Table = ({ items, list }) => {
  const isMatches = useMediaQuery("(max-width: 480px)");

  return (
    <div className={styles.table}>
      <table className={styles.price}>
        <colgroup>
          <col style={{ width: "285px" }} />
          <col style={{ width: "215px" }} />
          <col style={{ width: "215px" }} />
          <col style={{ width: "215px" }} />
          <col style={{ width: "215px" }} />
        </colgroup>
        <thead>
          <tr>
            <th className={styles.main}>
              <div className={styles.featured}>Featured</div>
              <div className={styles.description} />
              <div className={styles.price_inner}>
                <span className={styles.dollar} />
                <span className={styles.price} />
                <span className={styles.mouth} />
              </div>
            </th>

            {items?.map((item) => (
              <th className={classNames(styles.main)} key={item.id}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
                <div className={styles.price_inner}>
                  <span className={styles.dollar}>{item.price && "$"}</span>
                  <span className={styles.price}>
                    {item.price && ` ${item.price}`}
                  </span>
                  <span className={styles.mouth}>{item.price && "/Mouth"}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {list.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? styles.even_row : styles.row}
            >
              <td className={styles.row_td}>{row.Item}</td>
              <td>
                {row.available1 ? (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/arrow-khaki.svg"
                  />
                ) : (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/close-seo.svg"
                  />
                )}
              </td>
              <td>
                {row.available2 ? (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/arrow-khaki.svg"
                  />
                ) : (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/close-seo.svg"
                  />
                )}
              </td>

              <td
                className={
                  index % 2 === 0 ? styles.even_highlight : styles.highlight
                }
              >
                {row.available3 ? (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/arrow-white.svg"
                  />
                ) : (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/close-khaki.svg"
                  />
                )}
              </td>

              <td>
                {row.available4 ? (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/arrow-khaki.svg"
                  />
                ) : (
                  <Image
                    width={!isMatches ? 25 : 20}
                    height={!isMatches ? 25 : 20}
                    alt="arrow"
                    src="/images/close-seo.svg"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
