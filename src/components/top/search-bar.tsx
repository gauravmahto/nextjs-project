import { useState } from 'react';

import styles from './search-bar.module.css';
import Logo from './logo';

export default function SearchBar() {

  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e: Event) => {

    e.preventDefault();

    console.log(e.target);

  };

  return (
    <section className={`${styles.container} w-full max-w-full flex-start`}>

      <form className='w-full flex glassmorphism' action={''} onSubmit={handleSubmit}>

        <input type='text' placeholder='Search' name='q' value={searchText} className={styles.search}
          onChange={(e) => setSearchText(e.target.value)} />

        <button type='submit' className='button'><Logo width={18} height={18} /></button>

      </form>

    </section>
  );

}
