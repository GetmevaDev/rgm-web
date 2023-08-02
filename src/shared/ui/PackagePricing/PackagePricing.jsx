import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

import { useMediaQuery } from "@/shared/hooks";
import { Checkmark } from "@/shared/icons";

import { Button } from "..";

import styles from "./PackagePricing.module.scss";

export const PackagePricing = ({ items, list, formData, setFormData }) => {
  const isMatches = useMediaQuery("(max-width: 480px)");

  const handleSelectPlan = (item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedPlan: prevFormData.selectedPlan === item ? null : item,
    }));
  };

  return (
    <div className={styles.table}>
      <table className={styles.price}>
        <colgroup>
          <col style={{ width: "290px" }} />
          <col style={{ width: "195px" }} />
          <col style={{ width: "195px" }} />
          <col style={{ width: "195px" }} />
          <col style={{ width: "195px" }} />
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
                <div className={styles.main_inner}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.price_inner}>
                    <span className={styles.price}>
                      {item.price && ` ${item.price}`}
                    </span>
                  </div>
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
              <td className={styles.row_td}>{row.item}</td>
              <td>
                {row?.text1 ? (
                  <div className={styles.row_text}>{row?.text1}</div>
                ) : (
                  <div>
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
                  </div>
                )}
              </td>

              <td>
                {row?.text2 ? (
                  <div className={styles.row_text}>{row?.text2}</div>
                ) : (
                  <div>
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
                  </div>
                )}
              </td>

              <td>
                {row?.text3 ? (
                  <div className={styles.row_text}>{row?.text3}</div>
                ) : (
                  <div>
                    {row.available3 ? (
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
                  </div>
                )}
              </td>

              <td>
                {row?.text4 ? (
                  <div className={styles.row_text}>{row?.text4}</div>
                ) : (
                  <div>
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
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.planButtons}>
        {items?.map((item) => (
          <Button
            variant={formData?.selectedPlan === item ? "outline" : "contained"}
            type="button"
            key={item.id}
            className={classNames(styles.button, {
              [styles.selected]: formData?.selectedPlan === item.id,
            })}
            onClick={() => handleSelectPlan(item)}
          >
            {formData?.selectedPlan === item ? (
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
