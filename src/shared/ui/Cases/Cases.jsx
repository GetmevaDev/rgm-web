import React from "react";

import { ROUTES } from "@/shared/constants";

import { CaseItem } from "./Item/CaseItem";

import styles from "./Cases.module.scss";

const cases = [
  {
    id: 1,
    image: "/images/case-1.svg",
    title: "YagoLaw.com",
    description: `
			Yago Law, wanted to build a new web presence that emulates their commitment to cut the complex legal speak in order for them to reach their audience in a new way.
		`,
    button: "Read more",
    buttonLink: ROUTES.CASE_YAGOLAW,
  },
  {
    id: 2,
    image: "/images/case-2.svg",

    title: "Gentle Touch Endo",
    description: `
		Gentle Touch Endo set out to build a new web presence in order to increase their already existing search engine ranking, and to continue to close the gap in an underserved market.
		`,
    button: "Read more",
    buttonLink: ROUTES.CASE_GENTLE,
  },
  {
    id: 3,
    image: "/images/case-3.svg",

    title: "BB Tax & Advisory",
    description: `
	BB Tax & Advisory is a full service bookkeeping, accounting and financial advisory firm specializing in the complex needs of small businesses owners and middle-class families.
		`,
    button: "Read more",
    buttonLink: ROUTES.CASE_BB,
  },
  {
    id: 4,
    image: "/images/case-4.svg",
    title: "All Smiles Dental Spa",
    description: `
		All Smiles Dental Spa set out to build a new website presence to increase their already existing search engine ranking and continue to close the gap in an underserved market.
		`,
    button: "Read more",
    buttonLink: ROUTES.CASE_SMILES,
  },
];

export const Cases = () => (
  <div className={styles.cases}>
    <div className={styles.cases_inner}>
      {cases.map((item) => (
        <CaseItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
