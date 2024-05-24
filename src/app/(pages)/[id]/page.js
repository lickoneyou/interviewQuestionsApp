'use client'
import { HeaderSearch } from '@/components/HeaderSearch/HeaderSearch'
import data from '@/data/data'
import getData from '@/handlers/getData'
import { usePathname } from 'next/navigation'
import styles from '../../page.module.css'

const Question = () => {
  const questionID = usePathname().replace('/', '')
  const pageData = getData(questionID, data)
  const title = Object.keys(pageData).join('')
  const jsx = pageData[title]?.jsx

  return (
    <div className={styles.App}>
      <HeaderSearch isQuestion={true}/>
      <div className={styles.answerWrapper}>
        <h1>{title}</h1>
        {jsx}
      </div>
    </div>
  )
}

export default Question
