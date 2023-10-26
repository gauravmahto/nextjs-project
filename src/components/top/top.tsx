'use client'

import styles from './top.module.css';

import Logo from './logo';
import SearchBar from './search-bar';

export default function Top() {

  return (
    <div className={styles.search}>
      <div className={`${styles.top}`}>
        <Logo width={18} height={18} />
      </div>
      <SearchBar />
    </div>
  );

}
