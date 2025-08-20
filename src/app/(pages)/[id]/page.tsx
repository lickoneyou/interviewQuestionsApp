'use client';
import React, { useEffect, useMemo } from 'react';
import { Button }                    from '@mantine/core';
import { usePathname, useRouter }    from 'next/navigation';
import { IconCircleArrowLeft }       from '@tabler/icons-react';
import { IconCircleArrowRight }      from '@tabler/icons-react';

import styles from '../../page.module.css';

import { HeaderSearch } from '../../../components/HeaderSearch/HeaderSearch';
import data             from '../../../data/data';
import getData          from '../../../handlers/getData';
import getQuestionIndex from '../../../handlers/getQuestionIndex';
import getAllQuestions  from '../../../handlers/getAllQuestions';

const Question = function() {
  const path   = usePathname();
  const router = useRouter();

  const questionID = useMemo(() => {
    return path.replace('/', '');
  }, [path]);

  const pageData = useMemo(() => {
    return getData(questionID, data);
  }, [data, getData, questionID]);

  const title = useMemo(() => {
    return pageData ? Object.keys(pageData)
      .join('') : '';
  }, [pageData]);

  const jsx = useMemo(() => {
    return pageData ? pageData[title].jsx : <></>;
  }, [pageData, title]);

  const iconLeft = useMemo(() => {
    return (
      <IconCircleArrowLeft stroke={2} />
    );
  }, []);

  const iconRight = useMemo(() => {
    return (
      <IconCircleArrowRight stroke={2} />
    );
  }, []);

  const allQuestions = getAllQuestions();

  useEffect(() => {
    router.push(allQuestions[getQuestionIndex(questionID)].id);
  }, []);

  return (
    <div
      className={styles.App}
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          if (getQuestionIndex(questionID) > 0) {
            router.push(allQuestions[getQuestionIndex(questionID) - 1].id);
          }
        }
        if (event.key === 'ArrowRight') {
          if (allQuestions[getQuestionIndex(questionID) + 1]) {
            router.push(allQuestions[getQuestionIndex(questionID) + 1].id);
          }
        }
      }}
    >
      <HeaderSearch isQuestion={true} />
      <div className={styles.answerWrapper}>
        <h1>{title}</h1>
        {jsx}
      </div>
      <div className={styles.btnWrapper}>
        {getQuestionIndex(questionID) > 0 && (
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
        )}
        {allQuestions.length - 1 > getQuestionIndex(questionID) && (
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
        )}
      </div>
    </div>
  );
};

export default Question;
