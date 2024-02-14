import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { Checkmark } from "@/shared/icons";

import { Button } from "../Button/Button";

import styles from "./Table.module.scss";

export const Table = ({ items, list, formData, setFormData }) => {
  const isMatches = useMediaQuery("(max-width: 480px)");

  const { selectedPlanPrice } = formData;

  const handleSelectPlan = (plan) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedPlanPrice: plan?.title,
    }));
  };

  console.log(selectedPlanPrice, "selectedPlanPrice");

  return (
    <div className={styles.table}>
      <table className={styles.price}>
        <colgroup>
          <col style={{ width: "300px" }} />
          <col style={{ width: "290px" }} />
          <col style={{ width: "290px" }} />
          <col style={{ width: "290px" }} />
        </colgroup>
        <thead>
          <tr>
            <th className={styles.main}>
              <div className={styles.featured}>Feature</div>
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
                  <span className={styles.mouth}>{item.price && "/Month"}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {list?.map((row, index) => (
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

              {/* <td>
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
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.planButtons}>
        {items?.map((item) => (
          <Button
            variant={selectedPlanPrice === item.title ? "outline" : "contained"}
            type="button"
            key={item.id}
            className={classNames(styles.button, {
              [styles.selected]: selectedPlanPrice === item.id,
            })}
            onClick={() => handleSelectPlan(item)}
          >
            {selectedPlanPrice === item.title ? (
              <div className={styles.select_svg}>
                <Checkmark />
                Choose Plan
              </div>
            ) : (
              "Choose Plan"
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};
