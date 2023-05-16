import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./DevelopTeam.module.scss";

const technologies = [
  { id: 1, image: "/svg/react.svg", width: 42, height: 49, text: "React" },
  { id: 2, image: "/svg/react.svg", width: 42, height: 49, text: "NodeJS" },
  { id: 3, image: "/svg/react.svg", width: 42, height: 49, text: ".NET Core" },
  { id: 4, image: "/svg/react.svg", width: 42, height: 49, text: "Go" },
  { id: 5, image: "/svg/react.svg", width: 42, height: 49, text: "MongoDB" },
  { id: 6, image: "/svg/react.svg", width: 42, height: 49, text: "SQL" },
  { id: 7, image: "/svg/react.svg", width: 42, height: 49, text: "jQuery" },
  { id: 8, image: "/svg/react.svg", width: 42, height: 49, text: "AJAX" },
  { id: 9, image: "/svg/react.svg", width: 42, height: 49, text: "AWS" },
  { id: 10, image: "/svg/react.svg", width: 42, height: 49, text: "ReactJS" },
  { id: 11, image: "/svg/react.svg", width: 42, height: 49, text: "Unity" },
  { id: 12, image: "/svg/react.svg", width: 42, height: 49, text: "Unity" },
  { id: 13, image: "/svg/react.svg", width: 42, height: 49, text: "Unity" },
  { id: 14, image: "/svg/react.svg", width: 42, height: 49, text: "Unity" },
  { id: 15, image: "/svg/react.svg", width: 42, height: 49, text: "Unity" },
  { id: 16, image: "/svg/react.svg", width: 42, height: 49, text: "Unity" },
];

export const DevelopTeam = () => (
  <div className={styles.develop}>
    <Typography tag="h2" className={styles.title}>
      Your Full Stack Development Team
    </Typography>

    <div className={styles.main}>
      <div
        className={styles.left}
        dangerouslySetInnerHTML={{
          __html: ` RGM builds a wide array of products to fit the needs of the smallest
        mainstreet businesses to intricate CRM and ERP systems for fortune 500
        businesses. 
				</br>
				</br>
				
				We understand the intricacies of appealing to online
        consumers and the smallest details your business tools need to fit into
        your workflow rather than increasing it.
				</br>
				</br>
				
				To build a stellar web product,
        you need to utilize multiple development technologies. Some are great
        for designing the frontend, but others are ideal for backend work. Our
        experienced team of analysts will direct you to the best technologies
        for your specific project needs. 
				</br>
				</br>
				
				<b>What you need. Not what we do. We do</b>
        not limit your product on a specialty stack or platform, we build on
        technology that suits your business goals!
				</br>
				</br>
				Our full stack development
        team has you covered from the client side to the server side. Clean code
        and a comprehensive testing process ensures that your app will stand the
        test of time and provide a foundation to scale for the future.`,
        }}
      />

      <div className={styles.right}>
        <ul className={styles.list}>
          {technologies.map((item) => (
            <li className={styles.item} key={item.id}>
              <Image
                width={item.width}
                height={item.height}
                src={item.image}
                alt={item.text}
              />
              <div className={styles.text}>
                <span>-</span>
                {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
