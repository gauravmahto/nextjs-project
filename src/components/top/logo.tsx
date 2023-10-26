import styles from './logo.module.css';

import Image from 'next/image';

export default function Logo({ width = 100, height = 24 }) {

  return (
    <Image
      src="/rock-on.svg"
      alt="Rock On Logo"
      className={"dark:invert " + styles.logo}
      width={width}
      height={height}
      priority
    />
  );

}
