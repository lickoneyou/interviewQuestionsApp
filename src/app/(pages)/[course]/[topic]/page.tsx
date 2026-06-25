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
      return allQuestions[
        getQuestionIndex(questionID, params.course as string) + (num || 0)
      ];
    },
    [allQuestions, getQuestionIndex, questionID, params],
  );

  return (
    <div
      className={styles.App}
      tabIndex={-1}
      onKeyDown={(event) => {
        if (typeof params.course === 'string') {
          if (event.key === 'ArrowLeft') {
            if (getQuestionIndex(questionID, params.course) > 0) {
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
        }
      }}
    >
      <HeaderSearch isQuestion={true} />
      <div className={styles.answerWrapper}>
        <h1>{currentQuestion().title}</h1>
        {currentQuestion().jsx}
      </div>
      <div className={styles.btnWrapper}>
        {typeof params.course === 'string' &&
          getQuestionIndex(questionID, params.course) > 0 && (
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
        {typeof params.course === 'string' &&
          allQuestions.length - 1 >
            getQuestionIndex(questionID, params.course) && (
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
