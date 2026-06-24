'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import slugifyText from '../../handlers/slugifyText';

import styles from './CourseTopict.module.css';

import data from '../../data/data';

import type { Data, FullData } from '../../types';

const CourseTopics = () => {
  const params = useParams();

  const chapters = useMemo(() => {
    return Object.keys(data as FullData);
  }, [data]);

  const title = useMemo(() => {
    return chapters.filter((title) => slugifyText(title) === params.course);
  }, [chapters, params]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {Array.isArray(chapters) &&
        chapters.map((chapter) => {
          if (slugifyText(chapter) === params.course) {
            const ch: Data = (data as FullData)[chapter];

            return Object.keys(ch).map((title, index) => {
              return (
                <Link
                  className={styles.links}
                  key={`${index}-${slugifyText(title)}`}
                  href={`${params.course}/${slugifyText(title)}`}
                >
                  {title}
                </Link>
              );
            });
          }
        })}
    </main>
  );
};

export default CourseTopics;
