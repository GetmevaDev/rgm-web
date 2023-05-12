import React from "react";

import { PriceItem } from "./Item/PriceItem";

import styles from "./Price.module.scss";

const prices = [
  {
    id: 1,
    title: "GMB SEO",
    description: "Google My Business Marketing",
    price: 349,
    list: [
      { id: 1, title: "Information Optimization" },
      { id: 2, title: "Category Optimization" },
      { id: 3, title: "Photo Optimization" },
      { id: 4, title: "Product Optimization" },
      { id: 5, title: "Services Optimization" },
      { id: 6, title: "UTM Tracking Codes" },
      { id: 7, title: "Post Copy Writing and " },
      { id: 8, title: "Management" },
      { id: 9, title: "Suspension Removal" },
      { id: 10, title: "Reputation Management" },
      { id: 11, title: "Description Copy Writing" },
    ],
  },

  {
    id: 2,
    title: "Essential SEO",
    description: "Generally a 5x ROI for Small Businesses",
    price: 799,
    list: [
      { id: 1, title: "Information Optimization" },
      { id: 2, title: "Category Optimization" },
      { id: 3, title: "Photo Optimization" },
      { id: 4, title: "Product Optimization" },
      { id: 5, title: "Services Optimization" },
      { id: 6, title: "UTM Tracking Codes" },
      { id: 7, title: "Post Copy Writing and " },
      { id: 8, title: "Management" },
      { id: 9, title: "Suspension Removal" },
      { id: 10, title: "Reputation Management" },
      { id: 11, title: "Description Copy Writing" },
    ],
  },

  {
    id: 3,
    title: "SEO PRO",
    description: "Most Popular - 10X ROI for Small Businesses",
    price: 1499,
    list: [
      { id: 1, title: "Information Optimization" },
      { id: 2, title: "Category Optimization" },
      { id: 3, title: "Photo Optimization" },
      { id: 4, title: "Product Optimization" },
      { id: 5, title: "Services Optimization" },
      { id: 6, title: "UTM Tracking Codes" },
      { id: 7, title: "Post Copy Writing and " },
      { id: 8, title: "Management" },
      { id: 9, title: "Suspension Removal" },
      { id: 10, title: "Reputation Management" },
      { id: 11, title: "Description Copy Writing" },
    ],
  },

  {
    id: 4,
    title: "Enterprise SEO",
    description: "For Larger Organizations",
    price: 2999,
    list: [
      { id: 1, title: "Information Optimization" },
      { id: 2, title: "Category Optimization" },
      { id: 3, title: "Photo Optimization" },
      { id: 4, title: "Product Optimization" },
      { id: 5, title: "Services Optimization" },
      { id: 6, title: "UTM Tracking Codes" },
      { id: 7, title: "Post Copy Writing and " },
      { id: 8, title: "Management" },
      { id: 9, title: "Suspension Removal" },
      { id: 10, title: "Reputation Management" },
      { id: 11, title: "Description Copy Writing" },
    ],
  },
];

export const Price = () => (
  <div className={styles.price}>
    {prices.map((item) => (
      <PriceItem key={item.id} {...item} />
    ))}
  </div>
);
