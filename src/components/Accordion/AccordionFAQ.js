import data from '@/data/data'
import {
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
  Container,
  Title,
} from '@mantine/core'
import Link from 'next/link'

import styles from './AccordionFAQ.module.css'

export function AccordionFAQ() {
  const chapters = Object.keys(data)

  return (
    <Container size="sm" className={styles.wrapper}>
      <Title ta="center" className={styles.title}>
        Questions
      </Title>

      <Accordion variant="separated">
        {chapters.map((chapter, index) => (
          <AccordionItem className={styles.item} value={chapter} key={index}>
            <AccordionControl>{chapter}</AccordionControl>
            <AccordionPanel>
              <div className={styles.accordionPanelValue}>
                {Object.values(data[chapter]).map((el, ind) => (
                  <Link key={el.id} href={el.id}>
                    {Object.keys(data[chapter])[ind]}
                  </Link>
                ))}
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}
