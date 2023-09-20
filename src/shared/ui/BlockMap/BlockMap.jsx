import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ContactInfo } from "../ContactInfo/ContactInfo";
import { OutPerfom } from "../OutPerfom/OutPerfom";
import { CustomerReviews, DigitalServices, Map } from "..";

import styles from "./BlockMap.module.scss";

export const BlockMap = () => {
  const [data, setData] = useState([]);
  const [dataServices, setDataServices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://cms-rgm.herokuapp.com/api/layout?populate=deep")
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data?.attributes?.CustomerReviews);
        setDataServices(data?.data?.attributes?.DigitalServices);
        console.log(data, "data");
      })
      .catch((error) => {
        console.error("Error fetching data from Strapi:", error);
      });
  }, []);

  const isHomePage = router.pathname === "/";

  return (
    <>
      <div className="layout">
        <CustomerReviews data={data} setData={setData} />

        <OutPerfom />
      </div>

      {!isHomePage && (
        <div>
          <DigitalServices services={dataServices} />
        </div>
      )}

      <div className={styles.map}>
        <div className={styles.map_inner}>
          <Map />
        </div>

        <div className={styles.contact}>
          <ContactInfo />
        </div>
      </div>
    </>
  );
};
