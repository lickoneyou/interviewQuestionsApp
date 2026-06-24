import CodeNumber from '../components/Basic/CodeNumbers';
import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const Next = {
  Next: {
    'Серверные vs Клиентские компоненты': {
      get title() {
        return 'Серверные vs Клиентские компоненты';
      },
      get id() {
        return slugifyText(this.title);
      },
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
      get title() {
        return 'Роутинг';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            Каждая папка в <b>app/</b> — это сегмент URL, а специальные файлы
            определяют, что показывать.
          </p>
          <CodeHighlighter 
            language={'bash'}
            code={`app/
├── page.tsx           # → /
├── about/
│   └── page.tsx       # → /about
└── blog/
└── [slug]/
└── page.tsx   # → /blog/hello-world`}
          />
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
              <CodeHighlighter 
                language='bash'
                code={`app/
├── page.tsx           # /
├── about/page.tsx     # /about
└── contact/page.tsx   # /contact`}
              />
            </li>
            <li>
              Динамические маршруты
              <CodeHighlighter 
                language='bash'
                code={`# Одиночный параметр
app/blog/[slug]/page.tsx          # /blog/hello-world
# params: { slug: 'hello-world' }

# Несколько параметров
app/category/[category]/[id]/page.tsx  # /category/phones/123
# params: { category: 'phones', id: '123' }`}
              />
            </li>
            <li>
              Catch-all маршруты ([...slug])
              <CodeHighlighter 
                language='bash'
                code={`app/docs/[...slug]/page.tsx
# /docs/getting-started/installation
# params: { slug: ['getting-started', 'installation'] }`}
              />
            </li>
            <li>
              Optional catch-all ([[...slug]])
              <CodeHighlighter 
                language={'bash'}
                code={`app/docs/[[...slug]]/page.tsx
# /docs → params.slug = undefined
# /docs/getting-started → params.slug = ['getting-started']`}
              />
            </li>
            <li>
              Группы маршрутов ((folder))
              <CodeHighlighter 
                language='bash'
                code={`app/(marketing)/page.tsx      # / (без /marketing)
app/(shop)/products/page.tsx  # /products (без /shop)
# Скобки НЕ влияют на URL, только на организацию`}
              />
            </li>
            <li>
              Параллельные маршруты (@folder)
              <CodeHighlighter 
                language={'bash'}
                code={`app/@auth/login/page.tsx      # Модалка логина
app/@dashboard/page.tsx       # Дашборд
# Рендерятся одновременно`}
              />
            </li>
            <li>
              Перехватывающие маршруты ((..)folder)
              <CodeHighlighter 
                language={'bash'}
                code={`app/(.)photos/[id]/page.tsx   # Перехватывает /photos/123
# Аналогично относительным путям в файловой системе`}
              />
            </li>
          </ul>
          <p>НАВИГАЦИЯ</p>
          <p>Компонент Link (предпочтительный способ)</p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import Link from 'next/link';
  
export default function Navigation() {
  return (
    <nav>
      <Link href="/">Главная</Link>
      <Link href="/about">О нас</Link>
      <Link href="/products/123">Товар</Link>
      <Link href="/blog/post-1">Статья</Link>
  
      {/* С заменой истории */}
      <Link href="/dashboard" replace>Дашборд (без добавления в историю)</Link>
  
      {/* С prefetch (по умолчанию true в production) */}
      <Link href="/heavy-page" prefetch={false}>Тяжелая страница</Link>
    </nav>
  );
}`}
          />
          <p>Хук useRouter (для программной навигации)</p>
          <CodeHighlighter 
            language={'jsx'}
            code={`'use client';
import { useRouter } from 'next/navigation';
  
export default function NavigationButtons() {
  const router = useRouter();
  
  return (
    <div>
      <button onClick={() => router.push('/about')}>О нас</button>
      <button onClick={() => router.replace('/')}>На главную (без истории)</button>
      <button onClick={() => router.back()}>Назад</button>
      <button onClick={() => router.forward()}>Вперед</button>
      <button onClick={() => router.refresh()}>Обновить данные</button>
      <button onClick={() => router.prefetch('/heavy')}>Предзагрузить</button>
    </div>
  );
}`}
          />
          <p>ПОЛУЧЕНИЕ ПАРАМЕТРОВ</p>
          <p>В серверном компоненте</p>
          <CodeHighlighter 
            language={'jsx'}
            code={`// app/products/[category]/[id]/page.tsx
export default async function ProductPage({ 
  params,
  searchParams 
}: {
  params: { category: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // params из динамического маршрута
  console.log(params.category); // 'phones'
  console.log(params.id);       // '123'
  
  // searchParams из query-строки
  console.log(searchParams.sort);   // 'price'
  console.log(searchParams.page);   // '2'
  
  return <div>Product</div>;
}`}
          />
          <p>На клиенте</p>
          <CodeHighlighter 
            language={'jsx'}
            code={`'use client';
import { useParams, useSearchParams, usePathname } from 'next/navigation';
  
export default function ClientComponent() {
  const params = useParams();           // { category: 'phones', id: '123' }
  const searchParams = useSearchParams(); // URLSearchParams объект
  const pathname = usePathname();       // '/products/phones/123'
  
  const sort = searchParams.get('sort');   // 'price'
  const page = searchParams.get('page');   // '2'
  
  return <div>...</div>;
}`}
          />
        </div>
      ),
    },
    Кэширование: {
      get title() {
        return 'Кэширование';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Data Cache (Кэш данных)</b> - Кэширует результаты fetch()
            запросов на сервере.
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`// app/products/page.tsx
export default async function ProductsPage() {
  // ✅ Этот запрос будет кэшироваться по умолчанию
  const products = await fetch('https://api.example.com/products', {
    cache: 'force-cache' // по умолчанию
  }).then(r => r.json());
  
  return <ProductList products={products} />;
}`}
          />
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
          <CodeHighlighter 
            language={'jsx'}
            code={`// app/products/page.tsx
export const dynamic = 'force-static'; // ✅ Кэшируем HTML
  
export default async function ProductsPage() {
  const products = await getProducts(); // Данные тоже кэшируются
  return <ProductList products={products} />;
}`}
          />
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
          <CodeHighlighter 
            language={'jsx'}
            code={`// Это происходит автоматически при использовании <Link>
<Link href="/products">Товары</Link>
// Next.js предзагружает и кэширует страницу /products на клиенте
  
// Настройка длительности кэша
<Link href="/products" prefetch={true}>Товары</Link>
// prefetch={true} (по умолчанию) - кэшировать
// prefetch={false} - не кэшировать`}
          />
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
      get title() {
        return 'Streaming, Suspense и dynamic';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Streaming</b> — это процесс отправки HTML по частям.
          </p>
          <p>
            <b>Suspense</b> - Показывает fallback пока грузятся данные
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`// ✅ Данные из БД долгие
<Suspense fallback={<Spinner />}>
  <SlowDataComponent />  {/* async component */}
</Suspense>
  
// ✅ Медленный API запрос
<Suspense fallback={<div>Загрузка...</div>}>
  <UserProfile userId={id} />
</Suspense>`}
          />
          <p>
            <b>dynamic()</b> - Загружает код компонента лениво
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`// ✅ Тяжелая библиотека
const Editor = dynamic(() => import('@monaco-editor/react'))
  
// ✅ Модалка (не нужна сразу)
const Modal = dynamic(() => import('./Modal'), { ssr: false })
  
// ✅ Тяжелый график (внизу страницы)
const Chart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div>Загрузка графика...</div>
})`}
          />
        </div>
      ),
    },
    'Metadata API': {
      get title() {
        return 'Metadata API';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Metadata API</b> — это система для управления HTML-тегами{' '}
            {'<head>'} (title, description, open graph, и т.д.) непосредственно
            из компонентов страницы.
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { Metadata } from 'next';
  
export const metadata: Metadata = {
  title: 'О нас | Мой сайт',
  description: 'Узнайте больше о нашей компании',
};
  
export default function About() {
  return <h1>О нас</h1>;
}`}
          />
        </div>
      ),
    },
    'next/image': {
      get title() {
        return 'next/image';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>next/image</b> — это компонент, который автоматически
            оптимизирует изображения: сжимает, меняет формат, делает lazy
            loading и многое другое.
          </p>
          <p>Плюсы</p>
          <ul>
            <li>✅ Lazy loading по умолчанию</li>
            <li>✅ Автоматическая оптимизация</li>
            <li>✅ Автоматическое определение размеров</li>
            <li>✅ Автоматический WebP/AVIF</li>
            <li>✅ Блокирует место под изображение</li>
            <li>✅ Автоматическая адаптация под экран</li>
          </ul>
          <p>Базовое использование</p>
                    <CodeHighlighter 
            language={'jsx'}
            code={`import Image from 'next/image';
  
export default function Avatar() {
  return (
    <Image
      src="/avatar.jpg"           // Путь к изображению
      alt="Аватар пользователя"   // Alt текст (обязателен!)
      width={100}                 // Ширина в пикселях
      height={100}                // Высота в пикселях
    />
  );
}`}
          />
        </div>
      ),
    },
    Middleware: {
      get title() {
        return 'Middleware';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Middleware</b> — функция, которая выполняется <span>между</span>{' '}
            запросом пользователя и ответом сервера.
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`// middleware.ts (в корне проекта)
export function middleware(request: NextRequest) {
  // Делаем что-то с запросом
  return NextResponse.next(); // Пропускаем дальше
}`}
          />
          <p>🛠️ ДЛЯ ЧЕГО НУЖНО?</p>
          <ul>
            <li>
              <b>Защита страниц</b> - Проверяет авторизацию до показа страницы
            </li>
            <li>
              <b>Редиректы</b> - Перенаправляет пользователя
            </li>
            <li>
              <b>Проксирование API</b> - Скрывает реальные API за своим URL
            </li>
            <li>
              <b>Добавление заголовков</b> - Добавляет X-Custom-Header
            </li>
            <li>
              <b>Логирование</b> - Записывает все запросы
            </li>
            <li>
              <b>Гео-таргетинг</b> - Определяет страну и редиректит
            </li>
          </ul>
          <p>📍 ЧАСТЫЕ КЕЙСЫ</p>
          <ul>
            <li>
              Защита админки
              <CodeHighlighter 
                language={'jsx'}
                code={`const token = request.cookies.get('token');
if (pathname.startsWith('/admin') && !token) {
  return NextResponse.redirect(new URL('/login', request.url));
}`}
              />
            </li>
            <li>
              Редирект со старых URL
              <CodeHighlighter 
                language={'jsx'}
                code={`if (pathname === '/old-blog') {
  return NextResponse.redirect(new URL('/blog', request.url));
}`}
              />
            </li>
            <li>
              Проксирование API (скрываем реальный URL)
              <CodeHighlighter 
                language={'jsx'}
                code={`if (pathname === '/api/weather') {
  const data = await fetch(\`https://api.weatherapi.com/...\`);
  return NextResponse.json(data);
}`}
              />
            </li>
            <li>
              Добавление заголовков
              <CodeHighlighter 
                language={'jsx'}
                code={`const response = NextResponse.next();
response.headers.set('X-Request-ID', crypto.randomUUID());
return response;`}
              />
            </li>
            <li>
              A/B тестирование
              <CodeHighlighter 
                language={'jsx'}
                code={`const variant = Math.random() < 0.5 ? 'A' : 'B';
return NextResponse.rewrite(new URL(\`/ab/\${variant}\${pathname}\`, request.url));`}
              />
            </li>
          </ul>
          <p>Действия</p>
          <ul>
            <li>
              <b>return NextResponse.next()</b> - Пропустить
            </li>
            <li>
              <b>return NextResponse.redirect(url)</b> - Редирект
            </li>
            <li>
              <b>return NextResponse.rewrite(url)</b> - Подменить
            </li>
            <li>
              <b>return NextResponse.json({})</b> - Ответить JSON
            </li>
            <li>
              <b>response.headers.set('key', 'value')</b> - Добавить заголовок
            </li>
          </ul>
        </div>
      ),
    },
  },
};

export default Next;
