'use client'

import getAutoCompletedData from '@/handlers/getAutoCompletedData'
import { Autocomplete, Button, rem } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import styles from './HeaderSearch.module.css'

export function HeaderSearch({ isQuestion = false }) {
  const router = useRouter()
  const flex = isQuestion ? { display: 'flex' } : {}

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
        />
      </div>
    </header>
  )
}
