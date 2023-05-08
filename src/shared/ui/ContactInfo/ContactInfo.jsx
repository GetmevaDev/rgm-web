import React from "react";

import styles from "./ContactInfo.module.scss";

export const ContactInfo = () => (
  <div className={styles.info}>
    <h4 className={styles.title}>We are here!</h4>

    <div
      className={styles.description}
      dangerouslySetInnerHTML={{
        __html: `
					1501 Broadway, 12th Floor, 
					New York, NY 10036 <br/>
					<br/>
					(888) 982-1410 <br/>
					<br/>
					info@robertgerov.com
		`,
      }}
    />
  </div>
);
