import Link from "next/link";

import { ROUTES } from "@/shared/constants";
import { Typography } from "@/shared/ui";

import styles from "./not-found.module.scss";

const NotFound = () => (
  <div className={styles.not_found}>
    <Typography>404</Typography>

    <Typography tag="div" size="mini">
      resource not available in this universe
    </Typography>

    <Typography tag="div" size="mini">
      <Link href={ROUTES.ROOT}>Go to Home </Link>
    </Typography>
  </div>
);

export default NotFound;
