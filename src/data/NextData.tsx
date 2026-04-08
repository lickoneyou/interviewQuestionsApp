import CodeNumber from '../components/Basic/CodeNumbers';

const Next = {
  Next: {
    'Серверные vs Клиентские компоненты': {
      id: 'next-1',
      title: 'Серверные vs Клиентские компоненты',
      jsx: (
        <div>
          <p>
            <b>Серверные компоненты</b> - компоненты, которые рендерятся
            исключительно на сервере.
          </p>
          <p>Возможности:</p>
          <ul>
            <li>✅ async/await прямо в компоненте</li>
            <li>✅ Прямой доступ к БД, файловой системе</li>
            <li>✅ Работа с серверными переменными окружения</li>
            <li>✅ Тяжелые вычисления (не нагружают клиент)</li>
            <li>✅ Использование headers(), cookies() из next/headers</li>
          </ul>
          <p>Ограничения:</p>
          <ul>
            <li>❌ Нет useState, useEffect, useReducer</li>
            <li>❌ Нет браузерных API (window, localStorage, document)</li>
            <li>❌ Нет событий (onClick, onChange)</li>
            <li>
              ❌ Нельзя использовать хуки роутера (usePathname, useRouter)
            </li>
          </ul>
          <p>
            <b>Клиентские компоненты</b> - которые рендерятся и на сервере (для
            SSR), и на клиенте (гидратация).
          </p>
          <p>Возможности:</p>
          <ul>
            <li>✅ Все хуки React (useState, useEffect, useContext)</li>
            <li>
              ✅ Браузерные API (window, localStorage, Intersection Observer)
            </li>
            <li>✅ Обработчики событий (onClick, onChange, onSubmit)</li>
            <li>✅ Хуки Next.js роутера (usePathname, useSearchParams)</li>
            <li>✅ Сторонние библиотеки с состоянием (Zustand, Redux)</li>
          </ul>
          <p>Ограничения:</p>
          <ul>
            <li>
              ❌ Нельзя использовать async/await напрямую (нужен useEffect или
              библиотеки)
            </li>
            <li>❌ Нет прямого доступа к БД (только через API)</li>
            <li>❌ Увеличивает размер бандла</li>
          </ul>
        </div>
      ),
    },
    Роутинг: {
      id: 'next-2',
      title: 'Роутинг',
      jsx: (
        <div>
          <p>
            Каждая папка в <b>app/</b> — это сегмент URL, а специальные файлы
            определяют, что показывать.
          </p>
          <pre>{`
          app/
          ├── page.tsx           # → /
          ├── about/
          │   └── page.tsx       # → /about
          └── blog/
            └── [slug]/
            └── page.tsx   # → /blog/hello-world
          `}</pre>
          <p>ПОЛНЫЙ СПИСОК СПЕЦИАЛЬНЫХ ФАЙЛОВ</p>
          <ul>
            <li>
              <b>page.tsx</b> - Страница (UI)
            </li>
            <li>
              <b>layout.tsx</b> - Обертка для страниц, сохраняется при навигации
            </li>
            <li>
              <b>template.tsx</b> - Как layout, но создается заново при
              навигации
            </li>
            <li>
              <b>loading.tsx</b> - UI загрузки (Suspense)
            </li>
            <li>
              <b>error.tsx</b> - UI ошибки (Error Boundary)
            </li>
            <li>
              <b>not-found.tsx</b> - UI 404
            </li>
            <li>
              <b>route.ts</b> - API эндпоинт
            </li>
            <li>
              <b>middleware.ts</b> - Перехват запросов (в корне)
            </li>
          </ul>
          <p>ТИПЫ МАРШРУТОВ</p>
          <ul>
            <li>
              Статические маршруты
              <pre>{`
              app/
              ├── page.tsx           # /
              ├── about/page.tsx     # /about
              └── contact/page.tsx   # /contact
              `}</pre>
            </li>
            <li>
              Динамические маршруты
              <pre>{`
              # Одиночный параметр
              app/blog/[slug]/page.tsx          # /blog/hello-world
              # params: { slug: 'hello-world' }

              # Несколько параметров
              app/category/[category]/[id]/page.tsx  # /category/phones/123
              # params: { category: 'phones', id: '123' }
              `}</pre>
            </li>
            <li>
              Catch-all маршруты ([...slug])
              <pre>{`
              app/docs/[...slug]/page.tsx
              # /docs/getting-started/installation
              # params: { slug: ['getting-started', 'installation'] }
              `}</pre>
            </li>
            <li>
              Optional catch-all ([[...slug]])
              <pre>{`
              app/docs/[[...slug]]/page.tsx
              # /docs → params.slug = undefined
              # /docs/getting-started → params.slug = ['getting-started']
              `}</pre>
            </li>
            <li>
              Группы маршрутов ((folder))
              <pre>{`
              app/(marketing)/page.tsx      # / (без /marketing)
              app/(shop)/products/page.tsx  # /products (без /shop)
              # Скобки НЕ влияют на URL, только на организацию
              `}</pre>
            </li>
            <li>
              Параллельные маршруты (@folder)
              <pre>{`
              app/@auth/login/page.tsx      # Модалка логина
              app/@dashboard/page.tsx       # Дашборд
              # Рендерятся одновременно
              `}</pre>
            </li>
            <li>
              Перехватывающие маршруты ((..)folder)
              <pre>{`
              app/(.)photos/[id]/page.tsx   # Перехватывает /photos/123
              # Аналогично относительным путям в файловой системе
              `}</pre>
            </li>
          </ul>
          <p>НАВИГАЦИЯ</p>
          <p>Компонент Link (предпочтительный способ)</p>
          <pre>
            <CodeNumber length={18} />
            <code>
              <code>{`import Link from 'next/link';`}</code>
              <code>{`  `}</code>
              <code>{'export default function Navigation() {'}</code>
              <code>
                {'  '}
                {'return ('}
              </code>
              <code>
                {'    '}
                {'<nav>'}
              </code>
              <code>
                {'      '}
                {'<Link href="/">Главная</Link>'}
              </code>
              <code>
                {'      '}
                {'<Link href="/about">О нас</Link>'}
              </code>
              <code>
                {'      '}
                {'<Link href="/products/123">Товар</Link>'}
              </code>
              <code>
                {'      '}
                {'<Link href="/blog/post-1">Статья</Link>'}
              </code>
              <code>{'  '}</code>
              <code>
                {'      '}
                {'{/* С заменой истории */}'}
              </code>
              <code>
                {'      '}
                {
                  '<Link href="/dashboard" replace>Дашборд (без добавления в историю)</Link>'
                }
              </code>
              <code>{'  '}</code>
              <code>
                {'      '}
                {'{/* С prefetch (по умолчанию true в production) */}'}
              </code>
              <code>
                {'      '}
                {
                  '<Link href="/heavy-page" prefetch={false}>Тяжелая страница</Link>'
                }
              </code>
              <code>
                {'    '}
                {'</nav>'}
              </code>
              <code>
                {'  '}
                {');'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>Хук useRouter (для программной навигации)</p>
          <pre>
            <CodeNumber length={17} />
            <code>
              <code>'use client';</code>
              <code>{`import { useRouter } from 'next/navigation';`}</code>
              <code>{'  '}</code>
              <code>{'export default function NavigationButtons() {'}</code>
              <code>
                {'  '}
                {'const router = useRouter();'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'return ('}
              </code>
              <code>
                {'    '}
                {'<div>'}
              </code>
              <code>
                {'      '}
                {`<button onClick={() => router.push('/about')}>О нас</button>`}
              </code>
              <code>
                {'      '}
                {`<button onClick={() => router.replace('/')}>На главную (без истории)</button>`}
              </code>
              <code>
                {'      '}
                {`<button onClick={() => router.back()}>Назад</button>`}
              </code>
              <code>
                {'      '}
                {`<button onClick={() => router.forward()}>Вперед</button>`}
              </code>
              <code>
                {'      '}
                {`<button onClick={() => router.refresh()}>Обновить данные</button>`}
              </code>
              <code>
                {'      '}
                {`<button onClick={() => router.prefetch('/heavy')}>Предзагрузить</button>`}
              </code>
              <code>
                {'    '}
                {'</div>'}
              </code>
              <code>
                {'  '}
                {');'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>ПОЛУЧЕНИЕ ПАРАМЕТРОВ</p>
          <p>В серверном компоненте</p>
          <pre>
            <CodeNumber length={18} />
            <code>
              <code className='comment'>
                {'// app/products/[category]/[id]/page.tsx'}
              </code>
              <code>{`export default async function ProductPage({ `}</code>
              <code>
                {'  '}
                {'params,'}
              </code>
              <code>
                {'  '}
                {'searchParams '}
              </code>
              <code>{'}: {'}</code>
              <code>
                {'  '}
                {'params: { category: string; id: string };'}
              </code>
              <code>
                {'  '}
                {
                  'searchParams: { [key: string]: string | string[] | undefined };'
                }
              </code>
              <code>{'}) {'}</code>
              <code className='comment'>
                {'  '}
                {'// params из динамического маршрута'}
              </code>
              <code>
                {'  '}
                {`console.log(params.category); // 'phones'`}
              </code>
              <code>
                {'  '}
                {`console.log(params.id);       // '123'`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// searchParams из query-строки`}
              </code>
              <code>
                {'  '}
                {`console.log(searchParams.sort);   // 'price'`}
              </code>
              <code>
                {'  '}
                {`console.log(searchParams.page);   // '2'`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'return <div>Product</div>;'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>На клиенте</p>
          <pre>
            <CodeNumber length={13} />
            <code>
              <code>'use client';</code>
              <code>{`import { useParams, useSearchParams, usePathname } from 'next/navigation';`}</code>
              <code>{'  '}</code>
              <code>{'export default function ClientComponent() {'}</code>
              <code>
                {'  '}
                {`const params = useParams();           // { category: 'phones', id: '123' }`}
              </code>
              <code>
                {'  '}
                {`const searchParams = useSearchParams(); // URLSearchParams объект`}
              </code>
              <code>
                {'  '}
                {`const pathname = usePathname();       // '/products/phones/123'`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`const sort = searchParams.get('sort');   // 'price'`}
              </code>
              <code>
                {'  '}
                {`const page = searchParams.get('page');   // '2'`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'return <div>...</div>;'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    Кэширование: {
      id: 'next-3',
      title: 'Кэширование',
      jsx: (
        <div>
          <p>
            <b>Data Cache (Кэш данных)</b> - Кэширует результаты fetch()
            запросов на сервере.
          </p>
          <pre>
            <CodeNumber length={9} />
            <code>
              <code className='comment'>{'// app/products/page.tsx'}</code>
              <code>{'export default async function ProductsPage() {'}</code>
              <code className='comment'>
                {'  '}
                {`// ✅ Этот запрос будет кэшироваться по умолчанию`}
              </code>
              <code>
                {'  '}
                {`const products = await fetch('https://api.example.com/products', {`}
              </code>
              <code>
                {'    '}
                {`cache: 'force-cache' // по умолчанию`}
              </code>
              <code>
                {'  '}
                {`}).then(r => r.json());`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'return <ProductList products={products} />;'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>Стратегии кэширования fetch:</p>
          <ul>
            <li>
              <b>{`fetch(url, { cache: 'force-cache' })`}</b> - Кэшировать
              навсегда (по умолчанию)
            </li>
            <li>
              <b>{`fetch(url, { cache: 'no-store' })`}</b> - Не кэшировать
              (всегда свежие данные)
            </li>
            <li>
              <b>{`fetch(url, { next: { revalidate: 60 } })`}</b> - Кэшировать с
              перевалидацией через 60 секунд
            </li>
            <li>
              <b>{`fetch(url, { next: { tags: ['products', 'category-1'] } })`}</b>{' '}
              - Кэшировать с тегом (для ручной инвалидации)
            </li>
          </ul>
          <p>
            <b>Full Route Cache</b> - Кэширует полностью сгенерированный HTML
            страницы.
          </p>
          <pre>
            <CodeNumber length={7} />
            <code>
              <code className='comment'>{`// app/products/page.tsx`}</code>
              <code>{`export const dynamic = 'force-static'; // ✅ Кэшируем HTML`}</code>
              <code>{'  '}</code>
              <code>{`export default async function ProductsPage() {`}</code>
              <code>
                {'  '}
                {`const products = await getProducts(); // Данные тоже кэшируются`}
              </code>
              <code>
                {'  '}
                {`return <ProductList products={products} />;`}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>✅ Плюсы:</p>
          <ul>
            <li>Максимальная скорость</li>
            <li>Минимальная нагрузка на сервер/БД</li>
            <li>Отлично для статичного контента</li>
          </ul>
          <p>❌ Минусы:</p>
          <ul>
            <li>Данные не обновляются без пересборки</li>
            <li>Не подходит для частых обновлений</li>
          </ul>
          <p>
            <b>Router Cache</b> - React-кэш на клиенте, хранит страницы при
            навигации.
          </p>
          <pre>
            <CodeNumber length={8} />
            <code>
              <code className='comment'>{`// Это происходит автоматически при использовании <Link>`}</code>
              <code>{`<Link href="/products">Товары</Link>`}</code>
              <code className='comment'>{`// Next.js предзагружает и кэширует страницу /products на клиенте`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Настройка длительности кэша`}</code>
              <code>{`<Link href="/products" prefetch={true}>Товары</Link>`}</code>
              <code className='comment'>{`// prefetch={true} (по умолчанию) - кэшировать`}</code>
              <code className='comment'>{`// prefetch={false} - не кэшировать`}</code>
            </code>
          </pre>
          <p>Время жизни Router Cache:</p>
          <ul>
            <li>
              <b>Static</b> страницы: 5 минут
            </li>
            <li>
              <b>Dynamic</b> страницы: 30 секунд
            </li>
          </ul>
        </div>
      ),
    },
    'Streaming, Suspense и dynamic': {
      id: 'next-4',
      title: `Streaming, Suspense и dynamic`,
      jsx: (
        <div>
          <p>
            <b>Streaming</b> — это процесс отправки HTML по частям.
          </p>
          <p>
            <b>Suspense</b> - Показывает fallback пока грузятся данные
          </p>
          <pre>
            <CodeNumber length={9} />
            <code>
              <code className='comment'>{`// ✅ Данные из БД долгие`}</code>
              <code>{`<Suspense fallback={<Spinner />}>`}</code>
              <code>
                {'  '}
                {'<SlowDataComponent />  {/* async component */}'}
              </code>
              <code>{`</Suspense>`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Медленный API запрос`}</code>
              <code>{`<Suspense fallback={<div>Загрузка...</div>}>`}</code>
              <code>
                {'  '}
                {`<UserProfile userId={id} />`}
              </code>
              <code>{`</Suspense>`}</code>
            </code>
          </pre>
          <p>
            <b>dynamic()</b> - Загружает код компонента лениво
          </p>
          <pre>
            <CodeNumber length={10} />
            <code>
              <code className='comment'>{`// ✅ Тяжелая библиотека`}</code>
              <code>{`const Editor = dynamic(() => import('@monaco-editor/react'))`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Модалка (не нужна сразу)`}</code>
              <code>{`const Modal = dynamic(() => import('./Modal'), { ssr: false })`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Тяжелый график (внизу страницы)`}</code>
              <code>{`const Chart = dynamic(() => import('./HeavyChart'), {`}</code>
              <code>
                {'  '}
                {`loading: () => <div>Загрузка графика...</div>`}
              </code>
              <code>{`})`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'Metadata API': {
      id: 'next-5',
      title: `Metadata API`,
      jsx: (
        <div>
          <p>
            <b>Metadata API</b> — это система для управления HTML-тегами{' '}
            {'<head>'} (title, description, open graph, и т.д.) непосредственно
            из компонентов страницы.
          </p>
          <pre>
            <CodeNumber length={10}/>
            <code>
              <code>{`import { Metadata } from 'next';`}</code>
              <code>{'  '}</code>
              <code>{`export const metadata: Metadata = {`}</code>
              <code>{'  '}{`title: 'О нас | Мой сайт',`}</code>
              <code>{'  '}{`description: 'Узнайте больше о нашей компании',`}</code>
              <code>{'};'}</code>
              <code>{'  '}</code>
              <code>{'export default function About() {'}</code>
              <code>{'  '}{'return <h1>О нас</h1>;'}</code>
              <code>{'}'}</code>
            </code>
          </pre>
        </div>
      ),
    },
  },
};

export default Next;
