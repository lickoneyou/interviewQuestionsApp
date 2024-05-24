import { Autocomplete, rem } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import styles from './HeaderSearch.module.css'

export function HeaderSearch() {
  return (
    <header className={styles.header}>
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
          // todo add autoCompleted at data
          data={[]}
          visibleFrom="xs"
        />
      </div>
    </header>
  )
}
