import React from "react";

import { ItemBlank } from "./ItemBlank/ItemBlank";

import styles from "./Blanks.module.scss";

const arr = [
  {
    id: 1,
    title: "Overview",
    description:
      "We set out to create a well organized user experience and sophisticated-looking website that showcases the client’s wide spectrum of specialities. Creating a UX that efficiently organized the large amount of information, graphs, statistics and specialities offered by the client. We art directed and produced the website and graphics. We designed the wireframes which were crucial in organizing the site’s content.",
    image: "/images/mockup.jpg",
    reverse: true,
    color: "white",
    width: 584,
    height: 465,
  },

  {
    id: 2,
    title: "Wireframes",
    description:
      "The design team wireframed all the pages of the site in an effort to segment and distribute the large amount of information. We were mindful of not overwhelming the user with a complex UI. As with all wireframes, this was where we identified where we would make use of images, graphs and secondary navigations.",
    image: "/images/mockup-1.jpg",
    reverse: false,
    color: "gray",
    width: 584,
    height: 436,
  },

  {
    id: 3,
    title: "MockUps",
    description:
      "After finalizing the wireframes we applied the content and branding elements to create high-fidelity mockups. This project highlights the importance of putting strategy before design. A well planned out UX will always benefit the interface design.",
    image: "/images/mockup-2.jpg",
    reverse: true,
    color: "white",
    width: 359,
    height: 436,
  },
];

export const Blanks = () => (
  <div className={styles.blanks}>
    {arr.map((item) => (
      <ItemBlank
        color={item.color}
        reverse={item.reverse}
        key={item.id}
        {...item}
      />
    ))}
  </div>
);
