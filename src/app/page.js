import { AccordionFAQ } from '@/components/Accordion/AccordionFAQ'
import { HeaderSearch } from '@/components/HeaderSearch/HeaderSearch'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.App}>
      <HeaderSearch />
      <AccordionFAQ />
    </div>
  )
}
