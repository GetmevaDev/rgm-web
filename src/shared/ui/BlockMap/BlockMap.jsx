import { ContactInfo } from "../ContactInfo/ContactInfo";
import { Map } from "../Map/Map";

import styles from "./BlockMap.module.scss";

export const BlockMap = () => (
  <div className={styles.map}>
    <div className={styles.map_inner}>
      <Map />
    </div>

    <div className={styles.contact}>
      <ContactInfo />
    </div>
  </div>
);
