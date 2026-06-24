import React from 'react';

import { HeaderSearch } from '../../../components/HeaderSearch/HeaderSearch';
import CourseTopics from '../../../components/CourseTopics/CourseTopics';

import styles from '../../page.module.css'

const Course = () => {
  return (
    <div className={styles.App}>
      <HeaderSearch isQuestion/>
      <CourseTopics />
    </div>
  );
};

export default Course;
