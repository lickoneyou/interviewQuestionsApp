'use client';
import React, { useState }           from 'react';
import { Autocomplete, Button, rem } from '@mantine/core';
import { notifications }             from '@mantine/notifications';
import { IconSearch }                from '@tabler/icons-react';
import { useRouter }                 from 'next/navigation';

import styles from './HeaderSearch.module.css';

import getAutoCompletedData from '../../handlers/getAutoCompletedData';
import getAllQuestions      from '../../handlers/getAllQuestions';

export function HeaderSearch({ isQuestion = false }) {
  const router                        = useRouter();
  const flex                          = isQuestion ? { display: 'flex' } : {};
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className={styles.header} style={flex}>
      {isQuestion && (
        <Button
          variant="transparent"
          size="md"
          color="azure"
          onClick={() => router.push('/')}
        >
          Главная
        </Button>
      )}
      <div className={styles.inner}>
        <Autocomplete
          className={styles.search}
          placeholder="Search"
          leftSection={
            <IconSearch
              style={{
                width:  rem(16),
                height: rem(16),
              }}
              stroke={1.5}
            />
          }
          data={getAutoCompletedData()}
          visibleFrom="xs"
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
        <Button
          variant="outline"
          color="azure"
          onClick={() => {
            const id = getAllQuestions()
              .find((question) =>
                question['title']
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()),
              )?.id;
            id
              ? router.push(id)
              : notifications.show({
                title:      'Ничего не нашли 🤥',
                message:    '',
                color:      'red',
                loading:    true,
                withBorder: true,
                autoClose:  2000,
              });
          }}
        >
          Найти
        </Button>
      </div>
    </header>
  );
}
