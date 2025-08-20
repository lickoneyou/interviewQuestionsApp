import data from '../../data/data';
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Container,
  Title,
}           from '@mantine/core';
import Link from 'next/link';

import { Data, FullData } from '../../types';

import styles from './AccordionFAQ.module.css';

const AccordionFAQ = function() {
  const chapters = Object.keys(data as FullData);

  return (
    <Container size="sm" className={styles.wrapper}>
      <Title ta="center" className={styles.title}>
        Questions
      </Title>

      <Accordion variant="separated">
        {Array.isArray(chapters) && chapters.map((chapter, index) => {
          const ch: Data = (data as FullData)[chapter];

          return (
            <AccordionItem className={styles.item} value={chapter} key={index}>
              <AccordionControl>{chapter}</AccordionControl>
              <AccordionPanel>
                <div className={styles.accordionPanelValue}>
                  {Object.values(ch)
                    .map((el, ind) => (
                      <Link key={el.id} href={el.id}>
                        {Object.keys(ch)[ind]}
                      </Link>
                    ))}
                </div>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default AccordionFAQ;
