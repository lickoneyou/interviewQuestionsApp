'use client'

import getAllQuestions from '@/handlers/getAllQuestions'
import getAutoCompletedData from '@/handlers/getAutoCompletedData'
import { Autocomplete, Button, rem } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './HeaderSearch.module.css'
import { notifications } from '@mantine/notifications'

export function HeaderSearch({ isQuestion = false }) {
  const router = useRouter()
  const flex = isQuestion ? { display: 'flex' } : {}
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className={styles.header} style={flex}>
      {isQuestion ? (
        <Button
          variant="transparent"
          size="md"
          color="azure"
          onClick={() => router.push('/')}
        >
          Главная
        </Button>
      ) : (
        false
      )}
      <div className={styles.inner}>
        <Autocomplete
          className={styles.search}
          placeholder="Search"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
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
            const id = getAllQuestions().find((question) =>
              question['title']
                .toLowerCase()
                .includes(searchValue.toLowerCase()),
            )?.id
            id
              ? router.push(id)
              : notifications.show({
                  title: 'Ничего не нашли 🤥',
                  color: 'red',
                  loading: true,
                  withBorder: true,
                  autoClose: 2000,
                })
          }}
        >
          Найти
        </Button>
      </div>
    </header>
  )
}
