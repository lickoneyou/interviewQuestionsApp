'use client';
import React, { useCallback, useMemo } from 'react';
import { Button } from '@mantine/core';
import { useRouter, useParams } from 'next/navigation';
import { IconCircleArrowLeft } from '@tabler/icons-react';
import { IconCircleArrowRight } from '@tabler/icons-react';

import styles from '../../../page.module.css';

import { HeaderSearch } from '../../../../components/HeaderSearch/HeaderSearch';
import getQuestionIndex from '../../../../handlers/getQuestionIndex';
import getAllQuestions from '../../../../handlers/getAllQuestions';
import slugifyText from '../../../../handlers/slugifyText';

const Question = function () {
  const router = useRouter();
  const params = useParams();

  const allQuestions = getAllQuestions();

  const questionID = useMemo(() => {
    return params.topic as string;
  }, [params]);

  const currentQuestion = useCallback(
    (num?: number) => {
      return allQuestions[getQuestionIndex(questionID) + (num || 0)];
    },
    [allQuestions, getQuestionIndex, questionID],
  );

  return (
    <div
      className={styles.App}
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          if (getQuestionIndex(questionID) > 0) {
            const { id, stack } = currentQuestion(-1);

            router.push(`/${slugifyText(stack)}/${id}`);
          }
        }
        if (event.key === 'ArrowRight') {
          if (currentQuestion(1)) {
            const { id, stack } = currentQuestion(1);

            router.push(`/${slugifyText(stack)}/${id}`);
          }
        }
      }}
    >
      <HeaderSearch isQuestion={true} />
      <div className={styles.answerWrapper}>
        <h1>{currentQuestion().title}</h1>
        {currentQuestion().jsx}
      </div>
      <div className={styles.btnWrapper}>
        {getQuestionIndex(questionID) > 0 && (
          <Button
            justify='center'
            leftSection={<IconCircleArrowLeft stroke={2} />}
            variant='transparent'
            color='azur'
            mt='md'
            onClick={() => {
              const { id, stack } = currentQuestion(-1);

              router.push(`/${slugifyText(stack)}/${id}`);
            }}
          >
            {currentQuestion(-1).title}
          </Button>
        )}
        {allQuestions.length - 1 > getQuestionIndex(questionID) && (
          <Button
            justify='center'
            rightSection={<IconCircleArrowRight stroke={2} />}
            variant='transparent'
            color='azur'
            mt='md'
            onClick={() => {
              const { id, stack } = currentQuestion(1);

              router.push(`/${slugifyText(stack)}/${id}`);
            }}
          >
            {currentQuestion(1).title}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Question;
