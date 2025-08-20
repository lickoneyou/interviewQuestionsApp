import React from 'react';

import styles from './page.module.css';

import AccordionFAQ     from '../components/Accordion/AccordionFAQ';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';

export default function Home() {
  return (
    <div className={styles.App}>
      <HeaderSearch />
      <AccordionFAQ />
    </div>
  );
}
