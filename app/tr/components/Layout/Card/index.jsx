import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ src }) => (
  <span className={`${styles.card} rounded-2xl`}>
    <Link href={src.href} className="flex-1">
      <Image
        src={src.src}
        alt="Navbar"
        width={600}
        height={600}
        className={styles.card__blur}
        loading="eager"
        priority={true}
      />
      <Image
        src={src.src}
        alt="Navbar"
        width={600}
        height={600}
        className={styles.card__img}
        loading="eager"
        priority={true}
      />
    </Link>
  </span>
);
