import CodeNumber from '../components/Basic/CodeNumbers';
import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const ExpressJs = {
  ExpressJs: {
    'Установка и первый сервер': {
      get title() {
        return 'Установка и первый сервер';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Express</b> - веб-фреймворк для Node.js — надстройка над
            встроенным модулем <span>http</span>. Упрощает:
          </p>
          <ul>
            <li>Роутинг (не нужно вручную парсить req.url)</li>
            <li>Middleware (цепочки обработки)</li>
            <li>Отправку ответов (не нужно писать заголовки вручную)</li>
          </ul>
          <p>Установка</p>
          <CodeHighlighter
            language={'bash'}
            code={`# Создаем проект
mkdir my-express-app
cd my-express-app
npm init -y
  
# Устанавливаем express
npm install express`}
          />
          <p>Сервер</p>
          <CodeHighlighter
            code={`// app.js
const express = require('express');
  
const app = express();  // создаем приложение
  
app.get('/', (req, res) => {
  res.send('Hello World!');
});
  
app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});`}
          />
          <p>Запуск:</p>
          <CodeHighlighter language={'bash'} code={`node app.js`} />
          <p>Сравнение: чистый http vs Express</p>
          <table>
            <thead>
              <tr>
                <th>Действие</th>
                <th>Чистый http</th>
                <th>Express</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Создание сервера</td>
                <td>http.createServer()</td>
                <td>express()</td>
              </tr>
              <tr>
                <td>GET маршрут</td>
                <td>if (req.url === '/' && req.method === 'GET')</td>
                <td>app.get('/')</td>
              </tr>
              <tr>
                <td>Отправить JSON</td>
                <td>{`res.writeHead(200, {'Content-Type': 'application/json'}) + res.end(JSON.stringify(data))`}</td>
                <td>res.json(data)</td>
              </tr>
              <tr>
                <td>Статус код</td>
                <td>res.statusCode = 404</td>
                <td>res.status(404).send()</td>
              </tr>
            </tbody>
          </table>
          <p>Основные методы</p>
          <table>
            <thead>
              <tr>
                <th>Метод</th>
                <th>Что делает</th>
                <th>Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>app.get(path, handler)</td>
                <td>Обработка GET запросов</td>
                <td>app.get('/users', handler)</td>
              </tr>
              <tr>
                <td>app.post(path, handler)</td>
                <td>Обработка POST запросов</td>
                <td>app.post('/users', handler)</td>
              </tr>
              <tr>
                <td>app.put(path, handler)</td>
                <td>Обработка PUT запросов</td>
                <td>app.put('/users/:id', handler)</td>
              </tr>
              <tr>
                <td>app.delete(path, handler)</td>
                <td>Обработка DELETE</td>
                <td>app.delete('/users/:id', handler)</td>
              </tr>
              <tr>
                <td>app.use(middleware)</td>
                <td>Подключение middleware</td>
                <td>app.use(express.json())</td>
              </tr>
              <tr>
                <td>app.listen(port, callback)</td>
                <td>Запуск сервера</td>
                <td>app.listen(3000)</td>
              </tr>
            </tbody>
          </table>
          <p>Методы ответа (res)</p>
          <table>
            <thead>
              <tr>
                <th>Метод</th>
                <th>Что делает</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>res.send(data)</td>
                <td>Отправить ответ (автоопределяет Content-Type)</td>
              </tr>
              <tr>
                <td>res.json(data)</td>
                <td>Отправить JSON (ставит Content-Type: application/json)</td>
              </tr>
              <tr>
                <td>res.status(code)</td>
                <td>Установить HTTP статус (можно чейнить)</td>
              </tr>
              <tr>
                <td>res.redirect(url)</td>
                <td>Редирект (302)</td>
              </tr>
              <tr>
                <td>res.sendFile(path)</td>
                <td>Отдать файл</td>
              </tr>
              <tr>
                <td>res.end()</td>
                <td>Завершить ответ (без данных)</td>
              </tr>
            </tbody>
          </table>
          <p>Методы запроса (req)</p>
          <table>
            <thead>
              <tr>
                <th>Свойство/Метод</th>
                <th>Что дает</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>req.params</td>
                <td>Параметры из URL (/users/:id → req.params.id)</td>
              </tr>
              <tr>
                <td>req.query</td>
                <td>Query параметры (?name=Alice → req.query.name)</td>
              </tr>
              <tr>
                <td>req.body</td>
                <td>Тело запроса (POST/PUT) — требует express.json()</td>
              </tr>
              <tr>
                <td>req.headers</td>
                <td>Заголовки запроса</td>
              </tr>
              <tr>
                <td>req.method</td>
                <td>HTTP метод (GET, POST...)</td>
              </tr>
              <tr>
                <td>req.url</td>
                <td>Путь запроса</td>
              </tr>
            </tbody>
          </table>
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
          <p>Базовые методы</p>
          <CodeHighlighter
            code={`app.get('/users', (req, res) => {      // Чтение
  res.json(users);
});
  
app.post('/users', (req, res) => {     // Создание
  res.status(201).json(newUser);
});
  
app.put('/users/:id', (req, res) => {  // Полное обновление
  res.json(updatedUser);
});
  
app.patch('/users/:id', (req, res) => { // Частичное обновление
  res.json(updatedUser);
});
  
app.delete('/users/:id', (req, res) => { // Удаление
  res.status(204).send();
});`}
          />
          <p>Маршруты с параметрами (req.params)</p>
          <CodeHighlighter
            code={`// /users/5 → req.params = { id: '5' }
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
res.json(user);
});
  
// Несколько параметров
// /posts/123/comments/456 → req.params = { postId: '123', commentId: '456' }
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  console.log(req.params);
  res.json(req.params);
});
  
// Параметр с регуляркой (только цифры)
app.get('/users/:id(\d+)', (req, res) => {
  // id всегда будет числовой строкой
});`}
          />
          <p>Параметры могут быть опциональными</p>
          <CodeHighlighter
            code={`// /users/5 → req.params.id = '5'
// /users → req.params.id = undefined
app.get('/users/:id?', (req, res) => {
  if (req.params.id) {
    res.json({ id: req.params.id });
  } else {
    res.json({ message: 'Список всех пользователей' });
  }
});`}
          />
          <p>Query параметры (req.query)</p>
          <CodeHighlighter
            code={`// GET /users?page=2&limit=10&sort=name
// req.query = { page: '2', limit: '10', sort: 'name' }
  
app.get('/users', (req, res) => {
  const { page = 1, limit = 10, sort = 'id' } = req.query;
  
  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    sort,
    data: users.slice((page - 1) * limit, page * limit)
  });
});
  
// Булевы значения ( ?active=true )
app.get('/products', (req, res) => {
  const isActive = req.query.active === 'true';
// или для чисел: const minPrice = parseInt(req.query.minPrice) || 0
});`}
          />
          <p>Тело запроса (req.body)</p>
          <CodeHighlighter
            code={`// ОБЯЗАТЕЛЬНО подключить middleware ДО маршрутов
app.use(express.json());        // для application/json
app.use(express.urlencoded({ extended: true })); // для form-data (HTML формы)
  
app.post('/users', (req, res) => {
  console.log(req.body); // { name: 'Alice', email: 'alice@example.com' }
  res.json(req.body);
});
  
// extended: true — позволяет вложенные объекты
// extended: false — только простые key=value
// req.body.name, req.body.address.city (если extended: true)`}
          />
          <p>Что приходит в req.body в зависимости от Content-Type:</p>
          <table>
            <thead>
              <tr>
                <th>Content-Type</th>
                <th>req.body</th>
                <th>Нужный middleware</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>application/json</td>
                <td>Объект JS</td>
                <td>express.json()</td>
              </tr>
              <tr>
                <td>application/x-www-form-urlencoded</td>
                <td>Объект JS</td>
                <td>express.urlencoded()</td>
              </tr>
              <tr>
                <td>text/plain</td>
                <td>Строка</td>
                <td>(без middleware)</td>
              </tr>
              <tr>
                <td>multipart/form-data</td>
                <td>Не парсится</td>
                <td>нужен multer</td>
              </tr>
            </tbody>
          </table>
          <p>app.route() — группировка методов для одного пути</p>
          <CodeHighlighter
            code={`// Вместо этого:
app.get('/users', getUsers);
app.post('/users', createUser);
  
// Лучше (группировка):
app.route('/users')
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
app.route('/users/:id')
  .get((req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    res.json(user);
  })
  .put((req, res) => {
  // обновление
  })
  .delete((req, res) => {
  // удаление
});`}
          />
          <p>app.all() — все HTTP методы</p>
          <CodeHighlighter
            code={`// Обрабатывает GET, POST, PUT, DELETE и т.д.
app.all('/secret', (req, res) => {
  res.json({ message: 'Этот эндпоинт принимает любые методы' });
});
  
// Проверка авторизации для всех методов
app.all('/admin/*', (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
});`}
          />
          <p>Паттерны маршрутов</p>
          <CodeHighlighter
            code={`// Строка
app.get('/about', handler);
  
// Строка с параметром
app.get('/users/:userId', handler);
  
// Несколько параметров
app.get('/flights/:from-:to', handler);
// /flights/Moscow-London → { from: 'Moscow', to: 'London' }
  
// Регулярное выражение
app.get(/.*fly$/, handler); // заканчивается на 'fly'
  
// Массив паттернов
app.get(['/users', '/user-list', '/members'], handler);`}
          />
          <p>
            Порядок маршрутов <span>ВАЖЕН!</span>
          </p>
          <CodeHighlighter
            code={`// ❌ Плохо (конкретный никогда не сработает)
app.get('/users/:id', handler);      // перехватит /users/me
app.get('/users/me', handler);       // никогда не вызовется
  
// ✅ Хорошо (конкретный раньше)
app.get('/users/me', handler);       // сначала конкретный
app.get('/users/:id', handler);      // потом общий`}
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
            Middleware — это функция, которая имеет доступ к <span>req</span>,{' '}
            <span>res</span> и <span>next()</span>. Может:
          </p>
          <ul>
            <li>Выполнить любой код</li>
            <li>
              Изменить <span>req</span> и <span>res</span>
            </li>
            <li>Завершить запрос-ответ</li>
            <li>Вызвать следующий middleware в цепочке</li>
          </ul>
          <p>Конвейер обработки (цепочка middleware)</p>
          <CodeHighlighter
            language={'bash'}
            code={`Запрос → middleware1 → middleware2 → middleware3 → route → Ответ
           ↓              ↓              ↓
        next()         next()         next()`}
          />
          <CodeHighlighter
            code={`app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.get('/', handler);`}
          />
          <p>Сигнатура middleware</p>
          <CodeHighlighter
            code={`function myMiddleware(req, res, next) {
// 1. Что-то делаем
console.log('1');
  
// 2. Меняем req/res
req.timestamp = Date.now();
  
 // 3. Либо завершаем запрос
// if (!req.headers.token) return res.status(401).send('No token');
  
// 4. Либо передаем дальше
next();
}`}
          />
          <p>Типы middleware</p>
          <table>
            <thead>
              <tr>
                <th>Тип</th>
                <th>Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application-level</td>
                <td>app.use(logger)</td>
              </tr>
              <tr>
                <td>Router-level</td>
                <td>router.use(auth)</td>
              </tr>
              <tr>
                <td>Error-handling</td>
                <td>{`app.use((err, req, res, next) => {})`}</td>
              </tr>
              <tr>
                <td>Built-in</td>
                <td>express.json(), express.static()</td>
              </tr>
              <tr>
                <td>Third-party</td>
                <td>morgan, cors, helmet</td>
              </tr>
            </tbody>
          </table>
          <p>Application-level middleware (app.use)</p>
          <CodeHighlighter
            code={`const express = require('express');
const app = express();
  
// Глобальный middleware (для всех запросов)
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next();
});
  
// Для конкретного пути
app.use('/api', (req, res, next) => {
  console.log('Только для /api/*');
  next();
});
  
// Несколько middleware подряд
app.use('/users', 
  (req, res, next) => {
    console.log('Middleware 1 для /users');
    next();
  },
  (req, res, next) => {
    console.log('Middleware 2 для /users');
    next();
  }
);`}
          />
          <p>Router-level middleware (express.Router)</p>
          <CodeHighlighter
            code={`const express = require('express');
const router = express.Router();
  
// Middleware для всех роутов этого роутера
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
  
// Middleware для конкретного маршрута
router.use('/protected', (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
});
router.get('/protected/data', (req, res) => {
  res.json({ secret: 'data' });
});
  
app.use('/api', router);`}
          />
          <p>Built-in middleware (встроенные)</p>
          <CodeHighlighter
            code={`// Парсинг JSON
app.use(express.json());
  
// Парсинг URL-encoded (form data)
app.use(express.urlencoded({ extended: true }));
  
// Отдача статических файлов
app.use(express.static('public'));
app.use('/static', express.static('public'));
  
// Raw body (строка/буфер)
app.use(express.raw());
  
// Text body
app.use(express.text());`}
          />
          <p>Error-handling middleware</p>
          <p>
            <span>Особенность</span>: принимает 4 аргумента (err, req, res,
            next)
          </p>
          <CodeHighlighter
            code={`// Обычный middleware, который вызывает ошибку
app.get('/error', (req, res, next) => {
  next(new Error('Что-то пошло не так'));
});
  
// Error-handling middleware (ДОЛЖЕН быть последним)
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    error: {
      message,
      status
    }
  });
});
  
// Можно создать несколько (например, для 404)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});
  
// Затем error-handling
app.use((err, req, res, next) => {
  // обрабатываем ошибки
});`}
          />
          <p>Third-party middleware (популярные)</p>
          <CodeHighlighter
            language={'bash'}
            code={`npm install morgan cors helmet compression rate-limit`}
          />
          <CodeHighlighter
            code={`const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
  
const app = express();
  
// Логирование
app.use(morgan('dev'));  // 'combined', 'common', 'short', 'tiny'
  
// Безопасность
app.use(helmet());  // ставит безопасные заголовки
  
// CORS
app.use(cors());  // разрешить все источники
// или с опциями:
app.use(cors({ origin: 'https://myfrontend.com' }));
  
// Сжатие ответов
app.use(compression());
  
// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // максимум 100 запросов
  message: 'Too many requests from this IP'
});
app.use('/api', limiter);`}
          />
          <p>Порядок middleware — критически важен!</p>
          <CodeHighlighter
            code={`const app = express();
  
// ❌ Неправильно (будет 404)
app.get('/users', handler);
app.use(express.json());  // поздно, запрос уже обработан
  
// ✅ Правильно
app.use(express.json());  // сначала middleware
app.get('/users', handler);`}
          />
          <p>Полный правильный порядок:</p>
          <CodeHighlighter
            code={`// 1. Безопасность и логирование (самые первые)
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
  
// 2. Парсеры тела запроса
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
// 3. Статика (может быть рано, если не нужна)
app.use(express.static('public'));
  
// 4. Кастомные middleware
app.use(authMiddleware);
app.use(loggerMiddleware);
  
// 5. Роуты
app.use('/api', apiRouter);
  
// 6. 404 обработчик (если не найден маршрут)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});
  
// 7. Error-handling middleware (самый последний)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});`}
          />
        </div>
      ),
    },
    'express.Router': {
      get title() {
        return 'express.Router';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <b>Router</b> - мини-приложение Express, позволяющее группировать
          маршруты в отдельные модули.
          <CodeHighlighter
            code={`const express = require('express');
const router = express.Router();
  
// router работает как app, но только для своих маршрутов
router.get('/users', (req, res) => { ... });
router.post('/users', (req, res) => { ... });
  
// Подключаем к приложению
app.use('/api', router);  // все маршруты router будут с префиксом /api`}
          />
          <table>
            <thead>
              <tr>
                <th>Проблема</th>
                <th>Решение Router</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Все маршруты в одном файле</td>
                <td>Разбивка по модулям</td>
              </tr>
              <tr>
                <td>Трудно поддерживать</td>
                <td>Каждый модуль отвечает за свою сущность</td>
              </tr>
              <tr>
                <td>Middleware для конкретной группы</td>
                <td>Можно применить только к роутеру</td>
              </tr>
              <tr>
                <td>Переиспользование логики</td>
                <td>Один роутер можно подключить несколько раз</td>
              </tr>
            </tbody>
          </table>
          <CodeHighlighter
            code={`// routes/users.js
const express = require('express');
const router = express.Router();
  
// Middleware только для этого роутера
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
  
// Маршруты
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});
  
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'User' });
});
  
router.post('/', (req, res) => {
  res.status(201).json({ id: Date.now(), ...req.body });
});
  
module.exports = router;`}
          />
          <CodeHighlighter
            code={`// app.js
const express = require('express');
const userRoutes = require('./routes/users');
  
const app = express();
app.use(express.json());
  
// Подключаем роутер с префиксом /users
app.use('/users', userRoutes);
  
app.listen(3000);`}
          />
          <p>Итог:</p>
          <ul>
            <li>
              <b>GET /users</b> → routes/users.js router.get('/')
            </li>
            <li>
              <b>GET /users/123</b> → router.get('/:id')
            </li>
            <li>
              <b>POST /users</b> → router.post('/')
            </li>
          </ul>
        </div>
      ),
    },
    'Обработка ошибок': {
      get title() {
        return 'Обработка ошибок';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            В Express ошибки обрабатываются <span>специальными middleware</span>{' '}
            с 4 параметрами: (<b>err</b>, <b>req</b>, <b>res</b>, <b>next</b>)
          </p>
          <CodeHighlighter
            code={`// Обычный middleware (3 параметра)
app.use((req, res, next) => { ... });
  
// Error-handling middleware (4 параметра) — ОБЯЗАТЕЛЬНО все 4!
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});`}
          />
          <p>
            <b>Важно</b>: Error-handling middleware должен быть{' '}
            <span>последним</span> в цепочке.
          </p>
          <p>Способы генерации ошибок</p>
          <CodeHighlighter
            code={`// 1. throw в синхронном коде
app.get('/sync-error', (req, res) => {
  throw new Error('Что-то сломалось');
});
 
// 2. next(err) — ручная передача ошибки
app.get('/next-error', (req, res, next) => {
  const err = new Error('Ошибка валидации');
  err.status = 400;
  next(err);  // отправляем в error-handler
});
  
// 3. Ошибки в асинхронном коде (промисы)
app.get('/async-error', async (req, res, next) => {
  try {
    const data = await someAsyncFunction();
    res.json(data);
  } catch (err) {
    next(err);  // передаем в error-handler
  }
});`}
          />
          <p>Проблема: асинхронные ошибки не ловятся автоматически</p>
          <CodeHighlighter
            code={`// ❌ Так НЕ РАБОТАЕТ — throw в асинхронной функции
app.get('/broken', async (req, res) => {
  throw new Error('Эта ошибка не будет поймана Express');
});
  
// ✅ Правильно — try/catch + next
app.get('/fixed', async (req, res, next) => {
  try {
    const data = await riskyOperation();
    res.json(data);
  } catch (err) {
    next(err);
  }
});
  
// ✅ Еще лучше — обертка (wrapper)
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
  
app.get('/wrapped', asyncHandler(async (req, res) => {
  const data = await riskyOperation();
  res.json(data);
}));`}
          />
        </div>
      ),
    },
    'Работа с БД': {
      get title() {
        return 'Работа с БД';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Подходы к работе с БД в Express</p>
          <table>
            <thead>
              <tr>
                <th>Подход</th>
                <th>Пример</th>
                <th>Когда использовать</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Raw SQL</td>
                <td>pg, mysql2</td>
                <td>Полный контроль, сложные запросы</td>
              </tr>
              <tr>
                <td>Query Builder</td>
                <td>knex.js</td>
                <td>Динамические запросы, средний уровень</td>
              </tr>
              <tr>
                <td>ORM</td>
                <td>Sequelize, TypeORM, Prisma</td>
                <td>Быстрая разработка, отношения, миграции</td>
              </tr>
              <tr>
                <td>ODM</td>
                <td>Mongoose</td>
                <td>MongoDB</td>
              </tr>
            </tbody>
          </table>
          <p>PostgreSQL с raw SQL (pg)</p>
          <CodeHighlighter language={'bash'} code={`npm install pg`} />
          <p>Подключение и пул соединений</p>
          <CodeHighlighter
            code={`// db/pool.js
const { Pool } = require('pg');
  
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'mydb',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  max: 20,              // максимум соединений в пуле
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
  
module.exports = pool;`}
          />
          <p>Репозиторий (слой работы с БД)</p>
          <CodeHighlighter
            code={`// repositories/userRepository.js
const pool = require('../db/pool');
  
class UserRepository {
  async findAll() {
    const result = await pool.query('SELECT id, name, email, created_at FROM users');
    return result.rows;
  }
  
  async findById(id) {
    const result = await pool.query(
      'SELECT id, name, email, created_at FROM users WHERE id = $1',
      id]
    );
    return result.rows[0];
  }
  
  async findByEmail(email) {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0];
  }
  
  async create(userData) {
    const { name, email, password_hash } = userData;
    const result = await pool.query(
      \`INSERT INTO users (name, email, password_hash) 
      VALUES ($1, $2, $3) 
      RETURNING id, name, email, created_at\`,
      [name, email, password_hash]
    );
    return result.rows[0];
  }
  
  async update(id, updates) {
    const fields = [];
    const values = [];
    let index = 1;
 
    if (updates.name) {
      fields.push(\`name = $\${index++}\`);
      values.push(updates.name);
    }
    if (updates.email) {
      fields.push(\`email = $\${index++}\`);
      values.push(updates.email);
    }
  
    if (fields.length === 0) return null;
  
    values.push(id);
    const query = \`
      UPDATE users 
      SET \${fields.join(', ')} 
      WHERE id = $\${index}
      RETURNING id, name, email, created_at
   \`;
  
    const result = await pool.query(query, values);
    return result.rows[0];
  }
  
  async delete(id) {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
    return result.rowCount > 0;
  }
}
  
module.exports = new UserRepository();`}
          />
          <p>Контроллер с использованием репозитория</p>
          <CodeHighlighter
            code={`// controllers/userController.js
const userRepository = require('../repositories/userRepository');
const { ValidationError, NotFoundError } = require('../utils/errors');
const bcrypt = require('bcrypt');
  
exports.getAllUsers = async (req, res) => {
    const users = await userRepository.findAll();
    res.json(users);
  };
  
exports.getUserById = async (req, res) => {
  const user = await userRepository.findById(req.params.id);
  if (!user) throw new NotFoundError('User');
  res.json(user);
};
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    throw new ValidationError('Name, email and password are required');
  }
  
  // Проверка уникальности email
  const existing = await userRepository.findByEmail(email);
  if (existing) throw new ValidationError('Email already exists');
  
  const password_hash = await bcrypt.hash(password, 10);
  
  const user = await userRepository.create({ name, email, password_hash });
  res.status(201).json(user);
};`}
          />
          <p>Роуты</p>
          <CodeHighlighter
            code={`// routes/users.js
const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const userController = require('../controllers/userController');
  
router.get('/', asyncHandler(userController.getAllUsers));
router.get('/:id', asyncHandler(userController.getUserById));
router.post('/', asyncHandler(userController.createUser));
  
module.exports = router;`}
          />
          <p>Транзакции</p>
          <CodeHighlighter
            code={`// services/orderService.js
const pool = require('../db/pool');
  
class OrderService {
    async createOrder(userId, items) {
      const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
  
    // 1. Создаем заказ
    const orderResult = await client.query(
      'INSERT INTO orders (user_id, status, created_at) VALUES ($1, $2, NOW()) RETURNING id',
      [userId, 'pending']
    );
    const orderId = orderResult.rows[0].id;
  
    // 2. Добавляем товары в заказ
    for (const item of items) {
      await client.query(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)'
        [orderId, item.productId, item.quantity, item.price]
  
      // 3. Обновляем остатки
      await client.query(
        'UPDATE products SET stock = stock - $1 WHERE id = $2',
        [item.quantity, item.productId]
      );
    }
  
    await client.query('COMMIT');
    return { orderId, status: 'created' };
  
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  }
}`}
          />
          <p>Часть 3: MongoDB с Mongoose (ODM)</p>
          <CodeHighlighter language={'bash'} code={`npm install mongoose`} />
          <p>Подключение</p>
          <CodeHighlighter
            code={`// db/mongoose.js
const mongoose = require('mongoose');
  
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  process.exit(1);
  }
}
  
module.exports = connectDB;`}
          />

          <p>Схема и модель</p>
          <CodeHighlighter
            code={`// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
  
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^S+@S+.S+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false, // не возвращать по умолчанию
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true, // автоматически добавляет createdAt и updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});
  
// Хеширование пароля перед сохранением
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
  
// Метод для сравнения пароля
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
  
// Виртуальное поле (не хранится в БД)
userSchema.virtual('profileUrl').get(function() {
  return \`/users/\${this._id}\`;
});
  
module.exports = mongoose.model('User', userSchema);`}
          />
          <p>Репозиторий/Сервис с Mongoose</p>
          <CodeHighlighter
            code={`// services/userService.js
const User = require('../models/User');
  
class UserService {
  async findAll() {
    return await User.find().select('-password');
  }
  
  async findById(id) {
    return await User.findById(id).select('-password');
  }
  
  async findByEmail(email) {
    return await User.findOne({ email }).select('+password');
  }
  
  async create(userData) {
    const user = new User(userData);
    await user.save();
    user.password = undefined; // убираем из ответа
    return user;
  }
  
  async update(id, updates) {
    const allowed = ['name', 'email'];
    const updateData = {};
  
    for (const key of allowed) {
      if (updates[key]) updateData[key] = updates[key];
    }
  
    return await User.findByIdAndUpdate(id, updateData, {
      new: true, // возвращаем обновленный документ
      runValidators: true, // запускаем валидацию
    }).select('-password');
  }
  
  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
  
  async findPaginated(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
  
    const [users, total] = await Promise.all([
      User.find().select('-password').skip(skip).limit(limit),
      User.countDocuments(),
    ]);
  
    return {
      data: users,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}
  
module.exports = new UserService();`}
          />
          <p>Часть 4: Sequelize (ORM для SQL)</p>
          <CodeHighlighter
            language={'bash'}
            code={`npm install sequelize pg pg-hstore
# или для MySQL: npm install sequelize mysql2`}
          />
          <p>Подключение</p>
          <CodeHighlighter
            code={`// db/sequelize.js
const { Sequelize } = require('sequelize');
  
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // или 'mysql', 'sqlite', 'mssql'
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
  
module.exports = sequelize;`}
          />
          <p>Модель</p>
          <CodeHighlighter
            code={`// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
  
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 100],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
  paranoid: true,   // soft delete (deletedAt)
});
  
// Ассоциации (отношения)
User.associate = (models) => {
  User.hasMany(models.Post, { foreignKey: 'userId' });
  User.belongsToMany(models.Role, { through: 'UserRoles' });
};
  
module.exports = User;`}
          />
          <p>Использование в контроллере</p>
          <CodeHighlighter
            code={`// controllers/userController.js
const User = require('../models/User');
const { ValidationError, NotFoundError } = require('../utils/errors');
  
exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email', 'createdAt'],
    order: [['createdAt', 'DESC']],
  });
  res.json(users);
};
  
exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: ['id', 'name', 'email', 'createdAt'],
  });
  if (!user) throw new NotFoundError('User');
  res.json(user);
};
  
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  const existing = await User.findOne({ where: { email } });
  if (existing) throw new ValidationError('Email already exists');
  
  const user = await User.create({ name, email, password });
  
  res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
};
  
// Сложные запросы с include
exports.getUserWithPosts = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [{
      model: Post,
      as: 'posts',
      attributes: ['id', 'title', 'createdAt'],
    }],
  });
  res.json(user);
}`}
          />
          <p>Миграции и настройка окружения</p>
          <CodeHighlighter
            language={'markdown'}
            code={`# .env
NODE_ENV=development
PORT=3000
  
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydb
DB_USER=postgres
DB_PASSWORD=secret
  
# MongoDB
MONGODB_URI=mongodb://localhost:27017/myapp
  
# JWT
JWT_SECRET=your-super-secret-key`}
          />
          <p>Конфигурация</p>
          <CodeHighlighter
            code={`// config/db.js
require('dotenv').config();
  
const config = {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
  },
  test: {
    database: 'mydb_test',
    dialect: 'postgres',
  },
  production: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: { require: true },
    },
  },
};
  
module.exports = config[process.env.NODE_ENV || 'development'];`}
          />
          <p>Готовый шаблон подключения к БД</p>
          <CodeHighlighter
            code={`// app.js (полный пример)
const express = require('express');
require('dotenv').config();
  
const connectDB = require('./db/mongoose'); // или pg, sequelize
const userRoutes = require('./routes/users');
  
const app = express();
  
// Middleware
app.use(express.json());
  
// Подключение к БД
connectDB();
  
// Роуты
app.use('/api/users', userRoutes);
  
// Error handler
app.use((err, req, res, next) => {
  // Обработка ошибок БД
  if (err.code === '23505') { // PostgreSQL duplicate key
    return res.status(409).json({ error: 'Duplicate entry' });
  }
  if (err.name === 'ValidationError') { // Mongoose validation
    return res.status(400).json({ error: err.message });
  }
  
  res.status(err.status || 500).json({ error: err.message });
});
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
          />
        </div>
      ),
    },
    'Аутентификация и авторизация (JWT, bcrypt)': {
      get title() {
        return 'Аутентификация и авторизация (JWT, bcrypt)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Установка зависимостей</p>
          <CodeHighlighter
            language={'bash'}
            code={`npm install jsonwebtoken bcrypt express
npm install --save-dev @types/jsonwebtoken @types/bcrypt # для TypeScript`}
          />
          <p>Хеширование паролей с bcrypt</p>
          <CodeHighlighter
            code={`// utils/password.js
const bcrypt = require('bcrypt');
  
const SALT_ROUNDS = 10;  // сложность хеширования (10-12 оптимально)
  
// Хеширование пароля
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return await bcrypt.hash(password, salt);
}
  
// Проверка пароля
async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
  
module.exports = { hashPassword, verifyPassword };`}
          />
          <p>Использование в модели пользователя</p>
          <CodeHighlighter
            code={`// models/User.js (Mongoose)
const mongoose = require('mongoose');
const { hashPassword, verifyPassword } = require('../utils/password');
  
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // select false — не возвращать по умолчанию
  name: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});
  
// Хешируем пароль перед сохранением
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await hashPassword(this.password);
  next();
});
  
// Метод для проверки пароля
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await verifyPassword(candidatePassword, this.password);
};
  
module.exports = mongoose.model('User', userSchema);`}
          />
          <p>JWT — генерация и верификация</p>
          <CodeHighlighter
            code={`// utils/jwt.js
const jwt = require('jsonwebtoken');
  
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-it';
const JWT_EXPIRES_IN = '7d';  // 7 дней
const JWT_REFRESH_EXPIRES_IN = '30d';
  
// Генерация access токена
function generateAccessToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}
  
// Генерация refresh токена
function generateRefreshToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });
}
// Верификация токена
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token expired');
    }
    if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    }
    throw error;
  }
}
  
// Декодирование без верификации (небезопасно, только для отладки)
function decodeToken(token) {
  return jwt.decode(token);
}
  
module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  decodeToken
};`}
          />
          <p>Middleware для авторизации</p>
          <CodeHighlighter
            code={`// middleware/auth.js
const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');
  
// Проверка наличия токена
function authenticate(req, res, next) {
  try {
    // Получаем токен из заголовка Authorization
      const authHeader = req.headers.authorization;
  
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
          error: 'No token provided or invalid format' 
        });
      }
  
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
  
    // Сохраняем данные пользователя в req
    req.user = decoded;
    next();
  
  } catch (err) {
    if (err.message === 'Token expired') {
      return res.status(401).json({ error: 'Token expired' });
    }
    if (err.message === 'Invalid token') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    res.status(500).json({ error: 'Authentication error' });
  }
}
  
// Проверка роли (после authenticate)
function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
  
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'Access denied. Required role: ' + roles.join(' or ') 
      });
    }
  
    next();
  };
}
  
// Опциональная аутентификация (не блокирует)
function optionalAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = verifyToken(token);
      req.user = decoded;
    } catch (err) {
      // Игнорируем ошибки токена при опциональной аутентификации
    }
  }
  
  next();
}
  
module.exports = { authenticate, authorize, optionalAuth };`}
          />
          <p>Регистрация и логин</p>
          <CodeHighlighter
            code={`// controllers/authController.js
const User = require('../models/User');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');
const { ValidationError, UnauthorizedError } = require('../utils/errors');
  
// Регистрация
async function register(req, res) {
  const { email, password, name } = req.body;
  
  // Валидация
  if (!email || !password) {
   throw new ValidationError('Email and password are required');
  }
  
  if (password.length < 6) {
    throw new ValidationError('Password must be at least 6 characters');
  }
  
  // Проверка существующего пользователя
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ValidationError('Email already registered');
  }
  
  // Создание пользователя
  const user = await User.create({
    email,
    password,  // хешируется в pre-save хуке
    name: name || email.split('@')[0],
    role: 'user'
  });
  
  // Генерация токенов
  const payload = { id: user._id, email: user.email, role: user.role };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  
  res.status(201).json({
    message: 'User registered successfully',
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    tokens: {
      accessToken,
      refreshToken
    }
  });
}
  
// Логин
async function login(req, res) {
  const { email, password } = req.body;
  
  if (!email || !password) {
    throw new ValidationError('Email and password are required');
  }
  
  // Ищем пользователя с паролем (+password)
  const user = await User.findOne({ email }).select('+password');
  
  if (!user) {
    throw new UnauthorizedError('Invalid email or password');
  }
  
// Проверяем пароль
  const isPasswordValid = await user.comparePassword(password);
  
  if (!isPasswordValid) {
    throw new UnauthorizedError('Invalid email or password');
  }
  
  // Генерация токенов
  const payload = { id: user._id, email: user.email, role: user.role };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  
  res.json({
    message: 'Login successful',
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    tokens: {
      accessToken,
      refreshToken
    }
  });
}
  
// Обновление токена (refresh)
async function refreshToken(req, res) {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    throw new ValidationError('Refresh token required');
  }
  
  try {
    const decoded = verifyToken(refreshToken);
  
    // Проверяем, что пользователь все еще существует
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new UnauthorizedError('User not found');
    }
  
    // Генерируем новые токены
    const payload = { id: user._id, email: user.email, role: user.role };
    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);
  
    res.json({
      tokens: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken
      }
    });
  
  } catch (err) {
    throw new UnauthorizedError('Invalid or expired refresh token');
  }
}
  
// Получение текущего пользователя
async function getMe(req, res) {
  const user = await User.findById(req.user.id).select('-password');
  
  if (!user) {
    throw new NotFoundError('User');
  }
  
  res.json(user);
}
  
module.exports = {
  register,
  login,
  refreshToken,
  
};`}
          />
          <p>Роуты аутентификации</p>
          <CodeHighlighter
            code={`// routes/auth.js
const router = require('express').Router();
const asyncHandler = require('../utils/asyncHandler');
const { authenticate } = require('../middleware/auth');
const authController = require('../controllers/authController');
  
// Публичные маршруты
router.post('/register', asyncHandler(authController.register));
router.post('/login', asyncHandler(authController.login));
router.post('/refresh', asyncHandler(authController.refreshToken));
  
// Защищенные маршруты
router.get('/me', authenticate, asyncHandler(authController.getMe));
router.post('/logout', authenticate, asyncHandler(async (req, res) => {
  // На клиенте нужно удалить токены
  // В реальном проекте можно добавить черный список токенов
  res.json({ message: 'Logged out successfully' });
}));
  
module.exports = router;
`}
          />
          <p>Защита маршрутов по ролям</p>
          <CodeHighlighter
            code={`// routes/admin.js
const router = require('express').Router();
const { authenticate, authorize } = require('../middleware/auth');
  
// Все маршруты в этом роутере требуют аутентификации
router.use(authenticate);
  
// Только админы могут получить список всех пользователей
router.get('/users', authorize('admin'), async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});
  
// Админы и менеджеры могут просматривать отчеты
router.get('/reports', authorize('admin', 'manager'), async (req, res) => {
  res.json({ report: 'sales_data' });
});
  
// Обычный пользователь может просматривать свою статистику
router.get('/my-stats', authorize('user', 'admin'), async (req, res) => {
  res.json({ stats: { visits: 42 } });
});
  
module.exports = router;`}
          />
        </div>
      ),
    },
    'Валидация данных (express-validator, Joi, Zod)': {
      get title() {
        return 'Валидация данных (express-validator, Joi, Zod)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Зачем нужна валидация</p>
          <table>
            <thead>
              <tr>
                <th>Причина</th>
                <th>Объяснение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Безопасность</td>
                <td>Защита от SQL инъекций, XSS, инъекций</td>
              </tr>
              <tr>
                <td>Целостность данных</td>
                <td>Гарантия что данные соответствуют схеме</td>
              </tr>
              <tr>
                <td>UX</td>
                <td>Понятные ошибки для пользователя</td>
              </tr>
              <tr>
                <td>Снижение нагрузки</td>
                <td>Отбраковка невалидных запросов до БД</td>
              </tr>
            </tbody>
          </table>
          <p>express-validator</p>
          <CodeHighlighter
            language={'bash'}
            code={`npm install express-validator`}
          />
          <p>Базовое использование</p>
          <CodeHighlighter
            code={`const { body, validationResult } = require('express-validator');
  
// Маршрут с валидацией
app.post('/users',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty().trim().isLength({ min: 2, max: 50 }),
  body('age').optional().isInt({ min: 18, max: 120 }),
  
(req, res) => {
  // Проверка результатов
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  res.json({ message: 'User created', data: req.body });
  }
);`}
          />
          <p>Joi</p>
          <CodeHighlighter language={'bash'} code={`npm install joi`} />
          <p>Создание схемы</p>
          <CodeHighlighter
            code={`const Joi = require('joi');
  
const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  age: Joi.number().integer().min(18).max(120).optional(),
  role: Joi.string().valid('user', 'admin').default('user'),
  tags: Joi.array().items(Joi.string()).optional(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    zip: Joi.string().pattern(/^d{5}$/)
  }).optional()
});
  
// Валидация
const { error, value } = userSchema.validate(req.body);
  
if (error) {
  return res.status(400).json({ 
    error: error.details[0].message 
  });
}
  
res.json({ validated: value });`}
          />
          <p>Zod (TypeScript-first, современный)</p>
          <CodeHighlighter language={'bash'} code={`npm install zod`} />
          <p>Схемы Zod</p>
          <CodeHighlighter
            code={`const z = require('zod');
  
// Схема пользователя
const UserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6),
  age: z.number().int().min(18).max(120).optional(),
  role: z.enum(['user', 'admin']).default('user')
});
  
// Валидация
try {
  const validated = UserSchema.parse(req.body);
  res.json(validated);
} catch (error) {
  res.status(400).json({ errors: error.errors });
}`}
          />
          <p>Сравнение подходов</p>
          <table>
            <thead>
              <tr>
                <th>Характеристика</th>
                <th>express-validator</th>
                <th>Joi</th>
                <th>Zod</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Простота</td>
                <td>+++</td>
                <td>++</td>
                <td>++</td>
              </tr>
              <tr>
                <td>TypeScript поддержка</td>
                <td>-</td>
                <td>+</td>
                <td>+++</td>
              </tr>
              <tr>
                <td>Кастомные валидации</td>
                <td>++</td>
                <td>+++</td>
                <td>+++</td>
              </tr>
              <tr>
                <td>Производительность</td>
                <td>+++</td>
                <td>++</td>
                <td>+++</td>
              </tr>
              <tr>
                <td>Сообщество</td>
                <td>+++</td>
                <td>+++</td>
                <td>+ (растущее)</td>
              </tr>
              <tr>
                <td>Интеграция с Express</td>
                <td>встроенная</td>
                <td>через middleware</td>
                <td>через middleware</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Логирование и мониторинг': {
      get title() {
        return 'Логирование и мониторинг';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Зачем нужно логирование</p>
          <table>
            <thead>
              <tr>
                <th>Цель</th>
                <th>Что дает</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Отладка</td>
                <td>Понимание что происходит в приложении</td>
              </tr>
              <tr>
                <td>Мониторинг</td>
                <td>Отслеживание ошибок и производительности</td>
              </tr>
              <tr>
                <td>Аудит</td>
                <td>Кто, когда и что делал</td>
              </tr>
              <tr>
                <td>Аналитика</td>
                <td>Популярные маршруты, время ответа</td>
              </tr>
            </tbody>
          </table>
          <p>Morgan (HTTP логгер)</p>
          <CodeHighlighter language={'bash'} code={`npm install morgan`} />
          <p>Базовое использование</p>
          <CodeHighlighter
            code={`onst morgan = require('morgan');
const express = require('express');
const app = express();
  
// Простой логгер
app.use(morgan('tiny'));
// вывод: GET /users 200 12 - 3ms
  
// Для разработки (подробный)
app.use(morgan('dev'));
// вывод: GET /users 200 12.345 ms - 123
  
// Для продакшена (комбинированный)
app.use(morgan('combined'));
// вывод: ::1 - - [08/Jun/2024:12:00:00 +0000] "GET /users HTTP/1.1" 200 123 "-" "curl/7.68.0"`}
          />
          <p>Форматы Morgan</p>
          <table>
            <thead>
              <tr>
                <th>Формат</th>
                <th>Пример вывода</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tiny</td>
                <td>GET /users 200 12 - 3ms</td>
              </tr>
              <tr>
                <td>dev</td>
                <td>GET /users 200 12.345 ms - 123</td>
              </tr>
              <tr>
                <td>short</td>
                <td>::1 GET /users 200 12 - 3ms</td>
              </tr>
              <tr>
                <td>common</td>
                <td>::1 - - [08/Jun/2024:12:00:00] "GET /users" 200 12</td>
              </tr>
              <tr>
                <td>combined</td>
                <td>Полный с referrer и user-agent</td>
              </tr>
            </tbody>
          </table>
          <p>Winston (полноценный логгер)</p>
          <CodeHighlighter language={'bash'} code={`npm install winston`} />
          <p>Базовая настройка</p>
          <CodeHighlighter
            code={`// logger.js
const winston = require('winston');
const path = require('path');
  
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    // Ошибки в отдельный файл
    new winston.transports.File({
      filename: path.join('logs', 'error.log'),
      level: 'error'
    }),
    // Все логи в общий файл
    new winston.transports.File({
      filename: path.join('logs', 'combined.log')
    })
  ]
});
  
// В разработке еще и в консоль
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}
  
module.exports = logger;`}
          />
          <p>Структура логов</p>
          <table>
            <thead>
              <tr>
                <th>Уровень</th>
                <th>Значение</th>
                <th>Когда использовать</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>error</td>
                <td>Критическая ошибка</td>
                <td>БД недоступна, исключение</td>
              </tr>
              <tr>
                <td>warn</td>
                <td>Предупреждение</td>
                <td>Почти лимит, deprecated API</td>
              </tr>
              <tr>
                <td>info</td>
                <td>Информация</td>
                <td>Пользователь вошел, запрос выполнен</td>
              </tr>
              <tr>
                <td>debug</td>
                <td>Отладка</td>
                <td>Детали запросов, значения переменных</td>
              </tr>
              <tr>
                <td>verbose</td>
                <td>Очень подробно</td>
                <td>Трассировка вызовов</td>
              </tr>
            </tbody>
          </table>
          <p>Пример структурированного лога</p>
          <CodeHighlighter
            code={`// Хорошо (структурированный)
logger.info('User logged in', {
  userId: 123,
  email: 'user@example.com',
  ip: '192.168.1.1',
  timestamp: new Date().toISOString()
});
  
// Плохо (строка)
logger.info(\`User \${userId} logged in from \${ip}\`);`}
          />
          <p>Мониторинг (metrics)</p>
          <p>express-status-monitor</p>
          <CodeHighlighter
            language={'bash'}
            code={`npm install express-status-monitor`}
          />
          <CodeHighlighter
            code={`const statusMonitor = require('express-status-monitor');
  
app.use(statusMonitor());
// Доступно на /status`}
          />
          <p>response-time (измерение времени ответа)</p>
          <CodeHighlighter
            language={'bash'}
            code={`npm install response-time`}
          />
          <CodeHighlighter
            code={`const responseTime = require('response-time');
  
app.use(responseTime((req, res, time) => {
  logger.debug(\`\${req.method} \${req.url} - \${time.toFixed(2)}ms\`);
}));`}
          />
        </div>
      ),
    },
    'Развертывание Express': {
      get title() {
        return 'Развертывание Express';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Структура env файлов</p>
          <CodeHighlighter
            language={'markdown'}
            code={`# .env (не коммитим)
NODE_ENV=production
PORT=3000
  
# База данных
DB_HOST=localhost
DB_NAME=myapp
DB_USER=postgres
DB_PASSWORD=secret
  
# JWT
JWT_SECRET=very-long-secret-key
  
# Внешние сервисы
REDIS_URL=redis://localhost:6379`}
          />
          <CodeHighlighter
            code={`// config/index.js
require('dotenv').config();
  
const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
};
  
module.exports = config;`}
          />
          <p>package.json скрипты</p>
          <CodeHighlighter
            language={'json'}
            code={`{
  "scripts": {
    "start": "node app.js",
    "start:prod": "NODE_ENV=production node app.js",
    "dev": "nodemon app.js",
    "pm2:start": "pm2 start ecosystem.config.js",
    "pm2:stop": "pm2 stop ecosystem.config.js",
    "pm2:restart": "pm2 restart ecosystem.config.js"
  }
}`}
          />
          <p>Проверка окружения при запуске</p>
          <CodeHighlighter
            code={`// app.js (в начале)
const config = require('./config');
  
// Проверка обязательных переменных
const requiredEnv = ['JWT_SECRET'];
if (config.isProduction) {
  requiredEnv.push('DB_HOST', 'DB_PASSWORD');
}
  
for (const env of requiredEnv) {
  if (!process.env[env]) {
    console.error(\`❌ Missing required env: \${env}\`);
    process.exit(1);
  }
}
  
console.log(\`✅ Running in \${config.env} mode on port \${config.port}\`);`}
          />
          <p>Настройка Express для продакшена</p>
          <CodeHighlighter
            code={`// app.js
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const config = require('./config');
  
const app = express();
  
// Безопасность
app.use(helmet()); // Защитные заголовки
  
// CORS (ограниченный для продакшена)
const corsOptions = {
  origin: config.isProduction 
    ? ['https://myapp.com', 'https://api.myapp.com']
    : '*',
  credentials: true,
};
app.use(cors(corsOptions));
  
// Сжатие ответов
app.use(compression());
  
// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: config.isProduction ? 100 : 10000, // лимит запросов
  message: 'Too many requests from this IP',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);
  
// Более строгий лимит для аутентификации
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true,
});
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);
  
// Парсинг с лимитами
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  
// Доверять прокси (если за Nginx/Cloudflare)
if (config.isProduction) {
  app.set('trust proxy', 1);
}
  
// Статика с кэшированием
app.use('/static', express.static('public', {
  maxAge: '1y',
  etag: true,
  lastModified: true,
}));
  
module.exports = app;`}
          />
          <p>Отключение debug в продакшене</p>
          <CodeHighlighter
            code={`// logger.js
const winston = require('winston');
  
const level = process.env.NODE_ENV === 'production' ? 'info' : 'debug';
  
const logger = winston.createLogger({
  level,
  // ... остальная конфигурация
});`}
          />
          <p>PM2 — менеджер процессов</p>
          <CodeHighlighter language={'bash'} code={`npm install -g pm2`} />
          <p>Запуск через PM2</p>
          <CodeHighlighter
            code={`# Базовый запуск
pm2 start app.js --name myapp
  
# С указанием окружения
pm2 start app.js --env production --name myapp
  
# С параметрами
pm2 start app.js --name myapp -- --port=3001
  
# Просмотр списка процессов
pm2 list
  
# Логи
pm2 logs myapp
pm2 logs --lines 100
  
# Мониторинг
pm2 monit
  
# Остановка/перезапуск/удаление
pm2 stop myapp
pm2 restart myapp
pm2 delete myapp
  
# Сохранить конфигурацию (автозапуск после перезагрузки)
pm2 save
pm2 startup`}
          />
          <p>ecosystem.config.js</p>
          <CodeHighlighter
            code={`// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'myapp',
    script: './app.js',
    instances: 'max',              // по числу CPU ядер
    exec_mode: 'cluster',         // кластерный режим
    watch: false,                  // не следить за изменениями в проде
    max_memory_restart: '1G',     // перезапуск при 1GB памяти
  
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
  
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_file: './logs/combined.log',
    time: true,
  
    // Автоматический перезапуск
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
  
    // Переменные окружения из файла
    env_file: '.env'
  }]
};`}
          />
          <CodeHighlighter
            language={'bash'}
            code={`# Запуск с ecosystem
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup # автозапуск при загрузке системы`}
          />
          <p>Dockerfile</p>
          <CodeHighlighter
            language={'markdown'}
            code={`# Dockerfile
FROM node:20-alpine
  
WORKDIR /app
  
# Копируем package files
COPY package*.json ./
  
# Устанавливаем только production зависимости
RUN npm ci --only=production && npm cache clean --force
  
# Копируем исходники
COPY . .
  
# Создаем пользователя не root
RUN addgroup -g 1001 -S nodejs && \
  adduser -S nodejs -u 1001 && \
  chown -R nodejs:nodejs /app
  
USER nodejs
  
EXPOSE 3000
  
CMD ["node", "app.js"]`}
          />
          <p>docker-compose.yaml</p>
          <CodeHighlighter
            language={'yaml'}
            code={`version: '3.8'
  
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      PORT: 3000
    env_file:
      - .env
    depends_on:
      - db
      - redis
    restart: unless-stopped
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: \${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped
  
  redis:
    image: redis:7-alpine
    restart: unless-stopped
  
  volumes:
    postgres_data:`}
          />
          <CodeHighlighter
            language={'bash'}
            code={`# Сборка и запуск
docker-compose up -d --build
  
# Просмотр логов
docker-compose logs -f app
  
# Остановка
docker-compose down`}
          />
          <p>Конфигурация Nginx</p>
          <CodeHighlighter
            language={'nginx'}
            code={`# /etc/nginx/sites-available/myapp
server {
  listen 80;
  server_name api.myapp.com;
  return 301 https://$server_name$request_uri;
}
  
server {
  listen 443 ssl http2;
  server_name api.myapp.com;
  
  # SSL сертификаты (Let's Encrypt)
  ssl_certificate /etc/letsencrypt/live/api.myapp.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/api.myapp.com/privkey.pem;
  
  # Безопасность
  add_header Strict-Transport-Security "max-age=31536000" always;
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;
  
  # Логи
  access_log /var/log/nginx/myapp-access.log;
  error_log /var/log/nginx/myapp-error.log;
  
  # Лимиты
  client_max_body_size 10M;
  
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
  
    # Таймауты
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
  }
  
  # Статика (если есть)
  location /static {
    alias /var/www/myapp/static;
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}`}
          />
          <CodeHighlighter
            language={'bash'}
            code={`# Активация сайта
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx`}
          />
          <p>SSL/TLS (Let's Encrypt)</p>
          <CodeHighlighter
            language={'bash'}
            code={`# Установка certbot
sudo apt install certbot python3-certbot-nginx
  
# Получение сертификата
sudo certbot --nginx -d api.myapp.com
  
# Автообновление
sudo certbot renew --dry-run`}
          />
          <p>Health check endpoint</p>
          <CodeHighlighter
            code={`// routes/health.js
const router = require('express').Router();
const db = require('../db/pool');
  
router.get('/health', async (req, res) => {
  const checks = {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    status: 'healthy'
  };
  
  // Проверка БД
  try {
    await db.query('SELECT 1');
    checks.database = 'connected';
  } catch (err) {
    checks.database = 'disconnected';
    checks.status = 'unhealthy';
  }
  
  const statusCode = checks.status === 'healthy' ? 200 : 503;
  res.status(statusCode).json(checks);
});
  
// Более простой вариант
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});
  
module.exports = router;`}
          />
          <p>Sentry для отслеживания ошибок</p>
          <CodeHighlighter
            language={'bash'}
            code={`npm install @sentry/node`}
          />
          <CodeHighlighter
            code={`// sentry.js
const Sentry = require('@sentry/node');
const config = require('./config');
  
if (config.isProduction) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: config.env,
    tracesSampleRate: 0.1, // 10% запросов
  });
}
  
module.exports = Sentry;`}
          />
          <CodeHighlighter
            code={`// app.js
const Sentry = require('./sentry');
  
if (config.isProduction) {
  app.use(Sentry.Handlers.requestHandler());
}
  
// Роуты...
  
if (config.isProduction) {
  app.use(Sentry.Handlers.errorHandler());
}
  
app.use((err, req, res, next) => {
  // Sentry автоматически ловит ошибки
  res.status(500).json({ error: 'Internal Server Error' });
});`}
          />
          <p>Graceful Shutdown</p>
          <CodeHighlighter
            code={`// server.js
const app = require('./app');
const config = require('./config');
const logger = require('./logger');
  
const server = app.listen(config.port, () => {
  logger.info(\`Server running on port \${config.port}\`);
});
  
// Graceful shutdown
const shutdown = async (signal) => {
  logger.info(\`\${signal} received, closing server...\`);
  
  server.close(async () => {
    logger.info('HTTP server closed');
  
    // Закрыть соединения с БД
    await db.pool.end();
    logger.info('Database connections closed');
  
    logger.info('Shutdown complete');
    process.exit(0);
  });
  
  // Принудительное завершение через 10 секунд
  setTimeout(() => {
    logger.error('Forced shutdown');
    process.exit(1);
  }, 10000);
};
  
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));`}
          />
        </div>
      ),
    },
  },
};

export default ExpressJs;
