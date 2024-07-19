'use client'
import { HeaderSearch } from '@/components/HeaderSearch/HeaderSearch'
import data from '@/data/data'
import getData from '@/handlers/getData'
import { Button } from '@mantine/core'
import { usePathname, useRouter } from 'next/navigation'
import styles from '../../page.module.css'
import { IconCircleArrowLeft } from '@tabler/icons-react'
import { IconCircleArrowRight } from '@tabler/icons-react'
import getQuestionIndex from '@/handlers/getQuestionIndex'
import getAllQuestions from '@/handlers/getAllQuestions'

const Question = () => {
  const questionID = usePathname().replace('/', '')
  const pageData = getData(questionID, data)
  const title = Object.keys(pageData).join('')
  const jsx = pageData[title]?.jsx
  const iconLeft = <IconCircleArrowLeft stroke={2} />
  const iconRight = <IconCircleArrowRight stroke={2} />
  const allQuestions = getAllQuestions()
  const router = useRouter()
  router.push(allQuestions[getQuestionIndex(questionID)].id)
  
  return (
    <div
      className={styles.App}
      tabIndex="-1"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          if (getQuestionIndex(questionID) > 0)
            router.push(allQuestions[getQuestionIndex(questionID) - 1].id)
        }
        if (e.key === 'ArrowRight') {
          if (allQuestions[getQuestionIndex(questionID) + 1])
            router.push(allQuestions[getQuestionIndex(questionID) + 1].id)
        }
      }}
    >
      <HeaderSearch isQuestion={true} />
      <div className={styles.answerWrapper}>
        <h1>{title}</h1>
        {jsx}
      </div>
      <div className={styles.btnWrapper}>
        {getQuestionIndex(questionID) > 0 ? (
          <Button
            justify="center"
            leftSection={iconLeft}
            variant="transparent"
            color="azur"
            mt="md"
            onClick={() =>
              router.push(allQuestions[getQuestionIndex(questionID) - 1].id)
            }
          >
            {allQuestions[getQuestionIndex(questionID) - 1].title}
          </Button>
        ) : (
          false
        )}
        {allQuestions.length - 1 > getQuestionIndex(questionID) ? (
          <Button
            justify="center"
            rightSection={iconRight}
            variant="transparent"
            color="azur"
            mt="md"
            onClick={() =>
              router.push(allQuestions[getQuestionIndex(questionID) + 1].id)
            }
          >
            {allQuestions[getQuestionIndex(questionID) + 1].title}
          </Button>
        ) : (
          false
        )}
      </div>
    </div>
  )
}

export default Question
