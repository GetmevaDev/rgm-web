import { ContactInfo } from "../ContactInfo/ContactInfo";
import { CustomerReviews, Map } from "..";

import styles from "./BlockMap.module.scss";

export const BlockMap = () => (
  <>
    <div className="layout">
      <CustomerReviews />
    </div>
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
