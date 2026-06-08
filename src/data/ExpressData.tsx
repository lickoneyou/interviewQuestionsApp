import CodeNumber from '../components/Basic/CodeNumbers';

const ExpressJs = {
  ExpressJs: {
    'Установка и первый сервер': {
      id: 'express-1',
      title: `Установка и первый сервер`,
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
          <pre>
            <CodeNumber length={7} />
            <code>
              <code className='comment'>{`# Создаем проект`}</code>
              <code>{`mkdir my-express-app`}</code>
              <code>{`cd my-express-app`}</code>
              <code>{`npm init -y`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`# Устанавливаем express`}</code>
              <code>{`npm install express`}</code>
            </code>
          </pre>
          <p>Сервер</p>
          <pre>
            <CodeNumber length={12} />
            <code>
              <code className='comment'>{`// app.js`}</code>
              <code>{`const express = require('express');`}</code>
              <code>{'  '}</code>
              <code>{`const app = express();  // создаем приложение`}</code>
              <code>{'  '}</code>
              <code>{`app.get('/', (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.send('Hello World!');`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>{`app.listen(3000, () => {`}</code>
              <code>
                {'  '}
                {`console.log('Сервер запущен на http://localhost:3000');`}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>Запуск:</p>
          <pre>
            <CodeNumber length={1} />
            <code>
              <code>{`node app.js`}</code>
            </code>
          </pre>
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
      id: 'express-2',
      title: 'Роутинг',
      jsx: (
        <div>
          <p>Базовые методы</p>
          <pre>
            <CodeNumber length={19} />
            <code>
              <code>{`app.get('/users', (req, res) => {      // Чтение`}</code>
              <code>
                {'  '}
                {`res.json(users);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>{`app.post('/users', (req, res) => {     // Создание`}</code>
              <code>
                {'  '}
                {`res.status(201).json(newUser);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>{`app.put('/users/:id', (req, res) => {  // Полное обновление`}</code>
              <code>
                {'  '}
                {`res.json(updatedUser);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>{`app.patch('/users/:id', (req, res) => { // Частичное обновление`}</code>
              <code>
                {'  '}
                {`res.json(updatedUser);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>{`app.delete('/users/:id', (req, res) => { // Удаление`}</code>
              <code>
                {'  '}
                {`res.status(204).send();`}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>Маршруты с параметрами (req.params)</p>
          <pre>
            <CodeNumber length={18} />
            <code>
              <code className='comment'>{`// /users/5 → req.params = { id: '5' }`}</code>
              <code>{`app.get('/users/:id', (req, res) => {`}</code>
              <code>
                {'  '}
                {`const id = parseInt(req.params.id);`}
              </code>
              <code>
                {'  '}
                {`const user = users.find(u => u.id === id);`}
              </code>
              <code>
                {''}
                {`res.json(user);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Несколько параметров`}</code>
              <code className='comment'>{`// /posts/123/comments/456 → req.params = { postId: '123', commentId: '456' }`}</code>
              <code>{`app.get('/posts/:postId/comments/:commentId', (req, res) => {`}</code>
              <code>
                {'  '}
                {`console.log(req.params);`}
              </code>
              <code>
                {'  '}
                {`res.json(req.params);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Параметр с регуляркой (только цифры)`}</code>
              <code>{`app.get('/users/:id(\\d+)', (req, res) => {`}</code>
              <code>
                {'  '}
                {`// id всегда будет числовой строкой`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Параметры могут быть опциональными</p>
          <pre>
            <CodeNumber length={9} />
            <code>
              <code className='comment'>{`// /users/5 → req.params.id = '5'`}</code>
              <code className='comment'>{`// /users → req.params.id = undefined`}</code>
              <code>{`app.get('/users/:id?', (req, res) => {`}</code>
              <code>
                {'  '}
                {`if (req.params.id) {`}
              </code>
              <code>
                {'    '}
                {`res.json({ id: req.params.id });`}
              </code>
              <code>
                {'  '}
                {`} else {`}
              </code>
              <code>
                {'    '}
                {`res.json({ message: 'Список всех пользователей' });`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Query параметры (req.query)</p>
          <pre>
            <CodeNumber length={19} />
            <code>
              <code className='comment'>{`// GET /users?page=2&limit=10&sort=name`}</code>
              <code className='comment'>{`// req.query = { page: '2', limit: '10', sort: 'name' }`}</code>
              <code>{'  '}</code>
              <code>{`app.get('/users', (req, res) => {`}</code>
              <code>
                {'  '}
                {`const { page = 1, limit = 10, sort = 'id' } = req.query;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.json({`}
              </code>
              <code>
                {'    '}
                {`page: parseInt(page),`}
              </code>
              <code>
                {'    '}
                {`limit: parseInt(limit),`}
              </code>
              <code>
                {'    '}
                {`sort,`}
              </code>
              <code>
                {'    '}
                {`data: users.slice((page - 1) * limit, page * limit)`}
              </code>
              <code>
                {'  '}
                {'});'}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Булевы значения ( ?active=true )`}</code>
              <code>{`app.get('/products', (req, res) => {`}</code>
              <code>
                {'  '}
                {`const isActive = req.query.active === 'true';`}
              </code>
              <code className='comment'>{`// или для чисел: const minPrice = parseInt(req.query.minPrice) || 0`}</code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Тело запроса (req.body)</p>
          <pre>
            <CodeNumber length={12} />
            <code>
              <code className='comment'>{`// ОБЯЗАТЕЛЬНО подключить middleware ДО маршрутов`}</code>
              <code>{`app.use(express.json());        // для application/json`}</code>
              <code>{`app.use(express.urlencoded({ extended: true })); // для form-data (HTML формы)`}</code>
              <code>{'  '}</code>
              <code>{`app.post('/users', (req, res) => {`}</code>
              <code>
                {'  '}
                {`console.log(req.body); // { name: 'Alice', email: 'alice@example.com' }`}
              </code>
              <code>
                {'  '}
                {`res.json(req.body);`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// extended: true — позволяет вложенные объекты`}</code>
              <code className='comment'>{`// extended: false — только простые key=value`}</code>
              <code className='comment'>{`// req.body.name, req.body.address.city (если extended: true)`}</code>
            </code>
          </pre>
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
          <pre>
            <CodeNumber length={26} />
            <code>
              <code className='comment'>{`// Вместо этого:`}</code>
              <code>{`app.get('/users', getUsers);`}</code>
              <code>{`app.post('/users', createUser);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Лучше (группировка):`}</code>
              <code>{`app.route('/users')`}</code>
              <code>
                {'  '}
                {`.get((req, res) => {`}
              </code>
              <code>
                {'    '}
                {`res.json(users);`}
              </code>
              <code>
                {'  '}
                {`})`}
              </code>
              <code>
                {'  '}
                {`.post((req, res) => {`}
              </code>
              <code>
                {'    '}
                {`const newUser = { id: Date.now(), ...req.body };`}
              </code>
              <code>
                {'    '}
                {`users.push(newUser);`}
              </code>
              <code>
                {'    '}
                {`res.status(201).json(newUser);`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>{'  '}</code>
              <code>{`app.route('/users/:id')`}</code>
              <code>
                {'  '}
                {`.get((req, res) => {`}
              </code>
              <code>
                {'    '}
                {`const user = users.find(u => u.id === parseInt(req.params.id));`}
              </code>
              <code>
                {'    '}
                {`res.json(user);`}
              </code>
              <code>
                {'  '}
                {`})`}
              </code>
              <code>
                {'  '}
                {`.put((req, res) => {`}
              </code>
              <code className='comment'>
                {'  '}
                {`// обновление`}
              </code>
              <code>
                {'  '}
                {`})`}
              </code>
              <code>
                {'  '}
                {`.delete((req, res) => {`}
              </code>
              <code className='comment'>
                {'  '}
                {`// удаление`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>app.all() — все HTTP методы</p>
          <pre>
            <CodeNumber length={12} />
            <code>
              <code className='comment'>{`// Обрабатывает GET, POST, PUT, DELETE и т.д.`}</code>
              <code>{`app.all('/secret', (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.json({ message: 'Этот эндпоинт принимает любые методы' });`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Проверка авторизации для всех методов`}</code>
              <code>{`app.all('/admin/*', (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`if (!req.headers.authorization) {`}
              </code>
              <code>
                {'    '}
                {`return res.status(401).send('Unauthorized');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>Паттерны маршрутов</p>
          <pre>
            <CodeNumber length={15} />
            <code>
              <code className='comment'>{`// Строка`}</code>
              <code>{`app.get('/about', handler);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Строка с параметром`}</code>
              <code>{`app.get('/users/:userId', handler);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Несколько параметров`}</code>
              <code>{`app.get('/flights/:from-:to', handler);`}</code>
              <code className='comment'>{`// /flights/Moscow-London → { from: 'Moscow', to: 'London' }`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Регулярное выражение`}</code>
              <code>{`app.get(/.*fly$/, handler); // заканчивается на 'fly'`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Массив паттернов`}</code>
              <code>{`app.get(['/users', '/user-list', '/members'], handler);`}</code>
            </code>
          </pre>
          <p>
            Порядок маршрутов <span>ВАЖЕН!</span>
          </p>
          <pre>
            <CodeNumber length={7} />
            <code>
              <code className='comment'>{`// ❌ Плохо (конкретный никогда не сработает)`}</code>
              <code>{`app.get('/users/:id', handler);      // перехватит /users/me`}</code>
              <code>{`app.get('/users/me', handler);       // никогда не вызовется`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Хорошо (конкретный раньше)`}</code>
              <code>{`app.get('/users/me', handler);       // сначала конкретный`}</code>
              <code>{`app.get('/users/:id', handler);      // потом общий`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    Middleware: {
      id: 'express-3',
      title: `Middleware`,
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
          <pre>
            {`Запрос → middleware1 → middleware2 → middleware3 → route → Ответ
           ↓              ↓              ↓
        next()         next()         next()`}
          </pre>
          <pre>
            <CodeNumber length={4} />
            <code>
              <code>app.use(middleware1);</code>
              <code>app.use(middleware2);</code>
              <code>app.use(middleware3);</code>
              <code>app.get('/', handler);</code>
            </code>
          </pre>
          <p>Сигнатура middleware</p>
          <pre>
            <CodeNumber length={13} />
            <code>
              <code>{`function myMiddleware(req, res, next) {`}</code>
              <code className='comment'>{`// 1. Что-то делаем`}</code>
              <code>{"console.log('1');"}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 2. Меняем req/res`}</code>
              <code>{`req.timestamp = Date.now();`}</code>
              <code>{'  '}</code>
              <code className='comment'>{` // 3. Либо завершаем запрос`}</code>
              <code className='comment'>{`// if (!req.headers.token) return res.status(401).send('No token');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 4. Либо передаем дальше`}</code>
              <code>{`next();`}</code>
              <code>{`}`}</code>
            </code>
          </pre>
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
          <pre>
            <CodeNumber length={26} />
            <code>
              <code>{`const express = require('express');`}</code>
              <code>{`const app = express();`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Глобальный middleware (для всех запросов)`}</code>
              <code>{`app.use((req, res, next) => {`}</code>
              <code>
                {'  '}
                {
                  'console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);'
                }
              </code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Для конкретного пути`}</code>
              <code>{`app.use('/api', (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`console.log('Только для /api/*');`}
              </code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Несколько middleware подряд`}</code>
              <code>{`app.use('/users', `}</code>
              <code>
                {'  '}
                {`(req, res, next) => {`}
              </code>
              <code>
                {'    '}
                {`console.log('Middleware 1 для /users');`}
              </code>
              <code>
                {'    '}
                {`next();`}
              </code>
              <code>{'  },'}</code>
              <code>
                {'  '}
                {`(req, res, next) => {`}
              </code>
              <code>
                {'    '}
                {`console.log('Middleware 2 для /users');`}
              </code>
              <code>
                {'    '}
                {`next();`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{');'}</code>
            </code>
          </pre>
          <p>Router-level middleware (express.Router)</p>
          <pre>
            <CodeNumber length={21} />
            <code>
              <code>{`const express = require('express');`}</code>
              <code>{'const router = express.Router();'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Middleware для всех роутов этого роутера`}</code>
              <code>{`router.use((req, res, next) => {`}</code>
              <code>
                {'  '}
                {`console.log('Time:', Date.now());`}
              </code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Middleware для конкретного маршрута`}</code>
              <code>{`router.use('/protected', (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`if (!req.headers.authorization) {`}
              </code>
              <code>
                {'    '}
                {`return res.status(401).send('Unauthorized');`}
              </code>
              <code>{'  }'}</code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{'});'}</code>
              <code>{`router.get('/protected/data', (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.json({ secret: 'data' });`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>{`app.use('/api', router);`}</code>
            </code>
          </pre>
          <p>Built-in middleware (встроенные)</p>
          <pre>
            <CodeNumber length={15} />
            <code>
              <code className='comment'>{`// Парсинг JSON`}</code>
              <code>{`app.use(express.json());`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Парсинг URL-encoded (form data)`}</code>
              <code>{`app.use(express.urlencoded({ extended: true }));`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Отдача статических файлов`}</code>
              <code>{`app.use(express.static('public'));`}</code>
              <code>{`app.use('/static', express.static('public'));`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Raw body (строка/буфер)`}</code>
              <code>{`app.use(express.raw());`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Text body`}</code>
              <code>{`app.use(express.text());`}</code>
            </code>
          </pre>
          <p>Error-handling middleware</p>
          <p>
            <span>Особенность</span>: принимает 4 аргумента (err, req, res,
            next)
          </p>
          <pre>
            <CodeNumber length={29} />
            <code>
              <code className='comment'>{`// Обычный middleware, который вызывает ошибку`}</code>
              <code>{`app.get('/error', (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`next(new Error('Что-то пошло не так'));`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Error-handling middleware (ДОЛЖЕН быть последним)`}</code>
              <code>{`app.use((err, req, res, next) => {`}</code>
              <code>
                {'  '}
                {`console.error(err.stack);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`const status = err.status || 500;`}
              </code>
              <code>
                {'  '}
                {`const message = err.message || 'Internal Server Error';`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.status(status).json({`}
              </code>
              <code>
                {'    '}
                {`error: {`}
              </code>
              <code>
                {'      '}
                {`message,`}
              </code>
              <code>
                {'      '}
                {`status`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Можно создать несколько (например, для 404)`}</code>
              <code>{`app.use((req, res) => {`}</code>
              <code>
                {'  '}
                {`res.status(404).json({ error: 'Not Found' });`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Затем error-handling`}</code>
              <code>{`app.use((err, req, res, next) => {`}</code>
              <code className='comment'>
                {'  '}
                {`// обрабатываем ошибки`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Third-party middleware (популярные)</p>
          <pre>npm install morgan cors helmet compression rate-limit</pre>
          <pre>
            <CodeNumber length={30} />
            <code>
              <code>{`const express = require('express');`}</code>
              <code>{`const morgan = require('morgan');`}</code>
              <code>{`const cors = require('cors');`}</code>
              <code>{`const helmet = require('helmet');`}</code>
              <code>{`const compression = require('compression');`}</code>
              <code>{`const rateLimit = require('express-rate-limit');`}</code>
              <code>{'  '}</code>
              <code>{`const app = express();`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Логирование`}</code>
              <code>{`app.use(morgan('dev'));  // 'combined', 'common', 'short', 'tiny'`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Безопасность`}</code>
              <code>{`app.use(helmet());  // ставит безопасные заголовки`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// CORS`}</code>
              <code>{`app.use(cors());  // разрешить все источники`}</code>
              <code className='comment'>{`// или с опциями:`}</code>
              <code>{`app.use(cors({ origin: 'https://myfrontend.com' }));`}</code>
              <code>{'  '}</code>
              <code>{`// Сжатие ответов`}</code>
              <code>{`app.use(compression());`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Rate limiting`}</code>
              <code>{`const limiter = rateLimit({`}</code>
              <code>
                {'  '}
                {`windowMs: 15 * 60 * 1000, // 15 минут`}
              </code>
              <code>
                {'  '}
                {`max: 100, // максимум 100 запросов`}
              </code>
              <code>
                {'  '}
                {`message: 'Too many requests from this IP'`}
              </code>
              <code>{'});'}</code>
              <code>{`app.use('/api', limiter);`}</code>
            </code>
          </pre>
          <p>Порядок middleware — критически важен!</p>
          <pre>
            <CodeNumber length={9} />
            <code>
              <code>{`const app = express();`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ❌ Неправильно (будет 404)`}</code>
              <code>{`app.get('/users', handler);`}</code>
              <code>{`app.use(express.json());  // поздно, запрос уже обработан`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Правильно`}</code>
              <code>{`app.use(express.json());  // сначала middleware`}</code>
              <code>{`app.get('/users', handler);`}</code>
            </code>
          </pre>
          <p>Полный правильный порядок:</p>
          <pre>
            <CodeNumber length={29} />
            <code>
              <code className='comment'>{`// 1. Безопасность и логирование (самые первые)`}</code>
              <code>{`app.use(helmet());`}</code>
              <code>{`app.use(cors());`}</code>
              <code>{`app.use(morgan('dev'));`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 2. Парсеры тела запроса`}</code>
              <code>{`app.use(express.json());`}</code>
              <code>{`app.use(express.urlencoded({ extended: true }));`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 3. Статика (может быть рано, если не нужна)`}</code>
              <code>{`app.use(express.static('public'));`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 4. Кастомные middleware`}</code>
              <code>{`app.use(authMiddleware);`}</code>
              <code>{`app.use(loggerMiddleware);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 5. Роуты`}</code>
              <code>{`app.use('/api', apiRouter);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 6. 404 обработчик (если не найден маршрут)`}</code>
              <code>{`app.use((req, res) => {`}</code>
              <code>
                {'  '}
                {`res.status(404).json({ error: 'Not Found' });`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 7. Error-handling middleware (самый последний)`}</code>
              <code>{`app.use((err, req, res, next) => {`}</code>
              <code>
                {'  '}
                {`console.error(err);`}
              </code>
              <code>
                {'  '}
                {`res.status(500).json({ error: 'Internal Server Error' });`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'express.Router': {
      id: 'express-4',
      title: 'express.Router',
      jsx: (
        <div>
          <b>Router</b> - мини-приложение Express, позволяющее группировать
          маршруты в отдельные модули.
          <pre>
            <CodeNumber length={9} />
            <code>
              <code>const express = require('express');</code>
              <code>const router = express.Router();</code>
              <code>{'  '}</code>
              <code className='comment'>{`// router работает как app, но только для своих маршрутов`}</code>
              <code>{`router.get('/users', (req, res) => { ... });`}</code>
              <code>{`router.post('/users', (req, res) => { ... });`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Подключаем к приложению`}</code>
              <code>{`app.use('/api', router);  // все маршруты router будут с префиксом /api`}</code>
            </code>
          </pre>
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
          <pre>
            <CodeNumber length={24} />
            <code>
              <code className='comment'>{`// routes/users.js`}</code>
              <code>{`const express = require('express');`}</code>
              <code>{`const router = express.Router();`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Middleware только для этого роутера`}</code>
              <code>{`router.use((req, res, next) => {`}</code>
              <code>
                {'  '}
                {`console.log('Time:', Date.now());`}
              </code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Маршруты`}</code>
              <code>{`router.get('/', (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.json([{ id: 1, name: 'Alice' }]);`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`router.get('/:id', (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.json({ id: req.params.id, name: 'User' });`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`router.post('/', (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.status(201).json({ id: Date.now(), ...req.body });`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = router;`}</code>
            </code>
          </pre>
          <pre>
            <CodeNumber length={11} />
            <code>
              <code className='comment'>{`// app.js`}</code>
              <code>{`const express = require('express');`}</code>
              <code>{`const userRoutes = require('./routes/users');`}</code>
              <code>{'  '}</code>
              <code>{`const app = express();`}</code>
              <code>{`app.use(express.json());`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Подключаем роутер с префиксом /users`}</code>
              <code>{`app.use('/users', userRoutes);`}</code>
              <code>{'  '}</code>
              <code>{`app.listen(3000);`}</code>
            </code>
          </pre>
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
      id: 'express-5',
      title: `Обработка ошибок`,
      jsx: (
        <div>
          <p>
            В Express ошибки обрабатываются <span>специальными middleware</span>{' '}
            с 4 параметрами: (<b>err</b>, <b>req</b>, <b>res</b>, <b>next</b>)
          </p>
          <pre>
            <CodeNumber length={7} />
            <code>
              <code className='comment'>{`// Обычный middleware (3 параметра)`}</code>
              <code>{`app.use((req, res, next) => { ... });`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Error-handling middleware (4 параметра) — ОБЯЗАТЕЛЬНО все 4!`}</code>
              <code>{`app.use((err, req, res, next) => {`}</code>
              <code>
                {'  '}
                {`res.status(500).json({ error: err.message });`}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>
            <b>Важно</b>: Error-handling middleware должен быть{' '}
            <span>последним</span> в цепочке.
          </p>
          <p>Способы генерации ошибок</p>
          <pre>
            <CodeNumber length={21} />
            <code>
              <code className='comment'>{`// 1. throw в синхронном коде`}</code>
              <code>{`app.get('/sync-error', (req, res) => {`}</code>
              <code>
                {'  '}
                {`throw new Error('Что-то сломалось');`}
              </code>
              <code>{`});`}</code>
              <code> </code>
              <code className='comment'>{`// 2. next(err) — ручная передача ошибки`}</code>
              <code>{`app.get('/next-error', (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`const err = new Error('Ошибка валидации');`}
              </code>
              <code>
                {'  '}
                {`err.status = 400;`}
              </code>
              <code>
                {'  '}
                {`next(err);  // отправляем в error-handler`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// 3. Ошибки в асинхронном коде (промисы)`}</code>
              <code>{`app.get('/async-error', async (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`try {`}
              </code>
              <code>
                {'    '}
                {`const data = await someAsyncFunction();`}
              </code>
              <code>
                {'    '}
                {`res.json(data);`}
              </code>
              <code>
                {'  '}
                {`} catch (err) {`}
              </code>
              <code>
                {'    '}
                {`next(err);  // передаем в error-handler`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Проблема: асинхронные ошибки не ловятся автоматически</p>
          <pre>
            <CodeNumber length={24} />
            <code>
              <code className='comment'>{`// ❌ Так НЕ РАБОТАЕТ — throw в асинхронной функции`}</code>
              <code>{`app.get('/broken', async (req, res) => {`}</code>
              <code>
                {'  '}
                {`throw new Error('Эта ошибка не будет поймана Express');`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Правильно — try/catch + next`}</code>
              <code>{`app.get('/fixed', async (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`try {`}
              </code>
              <code>
                {'    '}
                {`const data = await riskyOperation();`}
              </code>
              <code>
                {'    '}
                {`res.json(data);`}
              </code>
              <code>
                {'  '}
                {`} catch (err) {`}
              </code>
              <code>
                {'    '}
                {`next(err);`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Еще лучше — обертка (wrapper)`}</code>
              <code>{`const asyncHandler = (fn) => (req, res, next) => {`}</code>
              <code>
                {'  '}
                {`Promise.resolve(fn(req, res, next)).catch(next);`}
              </code>
              <code>{`};`}</code>
              <code>{'  '}</code>
              <code>{`app.get('/wrapped', asyncHandler(async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const data = await riskyOperation();`}
              </code>
              <code>
                {'  '}
                {`res.json(data);`}
              </code>
              <code>{`}));`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'Работа с БД': {
      id: 'express-6',
      title: 'Работа с БД',
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
          <pre>npm install pg</pre>
          <p>Подключение и пул соединений</p>
          <pre>
            <CodeNumber length={15} />
            <code>
              <code className='comment'>{`// db/pool.js`}</code>
              <code>{`const { Pool } = require('pg');`}</code>
              <code>{'  '}</code>
              <code>{`const pool = new Pool({`}</code>
              <code>
                {'  '}
                {`host: process.env.DB_HOST || 'localhost',`}
              </code>
              <code>
                {'  '}
                {`port: process.env.DB_PORT || 5432,`}
              </code>
              <code>
                {'  '}
                {`database: process.env.DB_NAME || 'mydb',`}
              </code>
              <code>
                {'  '}
                {`user: process.env.DB_USER || 'postgres',`}
              </code>
              <code>
                {'  '}
                {`password: process.env.DB_PASSWORD || 'password',`}
              </code>
              <code>
                {'  '}
                {`max: 20,              // максимум соединений в пуле`}
              </code>
              <code>
                {'  '}
                {`idleTimeoutMillis: 30000,`}
              </code>
              <code>
                {'  '}
                {`connectionTimeoutMillis: 2000,`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = pool;`}</code>
            </code>
          </pre>
          <p>Репозиторий (слой работы с БД)</p>
          <pre>
            <CodeNumber length={68} />
            <code>
              <code className='comment'>{`// repositories/userRepository.js`}</code>
              <code>{`const pool = require('../db/pool');`}</code>
              <code>{'  '}</code>
              <code>{`class UserRepository {`}</code>
              <code>
                {'  '}
                {`async findAll() {`}
              </code>
              <code>
                {'    '}
                {`const result = await pool.query('SELECT id, name, email, created_at FROM users');`}
              </code>
              <code>
                {'    '}
                {`return result.rows;`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async findById(id) {`}
              </code>
              <code>
                {'    '}
                {`const result = await pool.query(`}
              </code>
              <code>
                {'      '}
                {`'SELECT id, name, email, created_at FROM users WHERE id = $1',`}
              </code>
              <code>
                {'      '}
                {`id]`}
              </code>
              <code>
                {'    '}
                {`);`}
              </code>
              <code>
                {'    '}
                {`return result.rows[0];`}
              </code>
              <code>
                {'  '}
                {'}'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async findByEmail(email) {`}
              </code>
              <code>
                {'    '}
                {`const result = await pool.query(`}
              </code>
              <code>
                {'      '}
                {`'SELECT * FROM users WHERE email = $1',`}
              </code>
              <code>
                {'      '}
                {`[email]`}
              </code>
              <code>
                {'    '}
                {`);`}
              </code>
              <code>
                {'    '}
                {`return result.rows[0];`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async create(userData) {`}
              </code>
              <code>
                {'    '}
                {`const { name, email, password_hash } = userData;`}
              </code>
              <code>
                {'    '}
                {`const result = await pool.query(`}
              </code>
              <code>
                {'      '}
                {'`INSERT INTO users (name, email, password_hash) '}
              </code>
              <code>
                {'      '}
                {`VALUES ($1, $2, $3) `}
              </code>
              <code>
                {'      '}
                {'RETURNING id, name, email, created_at`,'}
              </code>
              <code>
                {'      '}
                {`[name, email, password_hash]`}
              </code>
              <code>
                {'    '}
                {`);`}
              </code>
              <code>
                {'    '}
                {`return result.rows[0];`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async update(id, updates) {`}
              </code>
              <code>
                {'    '}
                {`const fields = [];`}
              </code>
              <code>
                {'    '}
                {`const values = [];`}
              </code>
              <code>
                {'    '}
                {`let index = 1;`}
              </code>
              <code> </code>
              <code>
                {'    '}
                {`if (updates.name) {`}
              </code>
              <code>
                {'      '}
                {'fields.push(`name = $${index++}`);'}
              </code>
              <code>
                {'      '}
                {`values.push(updates.name);`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'    '}
                {`if (updates.email) {`}
              </code>
              <code>
                {'      '}
                {'fields.push(`email = $${index++}`);'}
              </code>
              <code>
                {'      '}
                {`values.push(updates.email);`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`if (fields.length === 0) return null;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`values.push(id);`}
              </code>
              <code>
                {'    '}
                {'const query = `'}
              </code>
              <code>
                {'      '}
                {`UPDATE users `}
              </code>
              <code>
                {'      '}
                {"SET ${fields.join(', ')} "}
              </code>
              <code>
                {'      '}
                {'WHERE id = $${index}'}
              </code>
              <code>
                {'      '}
                {`RETURNING id, name, email, created_at`}
              </code>
              <code>
                {'    '}
                {'`;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`const result = await pool.query(query, values);`}
              </code>
              <code>
                {'    '}
                {`return result.rows[0];`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async delete(id) {`}
              </code>
              <code>
                {'    '}
                {`const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);`}
              </code>
              <code>
                {'    '}
                {`return result.rowCount > 0;`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = new UserRepository();`}</code>
            </code>
          </pre>
          <p>Контроллер с использованием репозитория</p>
          <pre>
            <CodeNumber length={31} />
            <code>
              <code className='comment'>{`// controllers/userController.js`}</code>
              <code>{`const userRepository = require('../repositories/userRepository');`}</code>
              <code>{`const { ValidationError, NotFoundError } = require('../utils/errors');`}</code>
              <code>{`const bcrypt = require('bcrypt');`}</code>
              <code>{'  '}</code>
              <code>{`exports.getAllUsers = async (req, res) => {`}</code>
              <code>
                {'    '}
                {`const users = await userRepository.findAll();`}
              </code>
              <code>
                {'    '}
                {`res.json(users);`}
              </code>
              <code>
                {'  '}
                {`};`}
              </code>
              <code>{'  '}</code>
              <code>{`exports.getUserById = async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const user = await userRepository.findById(req.params.id);`}
              </code>
              <code>
                {'  '}
                {`if (!user) throw new NotFoundError('User');`}
              </code>
              <code>
                {'  '}
                {`res.json(user);`}
              </code>
              <code>{'};'}</code>
              <code>{`exports.createUser = async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const { name, email, password } = req.body;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (!name || !email || !password) {`}
              </code>
              <code>
                {'    '}
                {`throw new ValidationError('Name, email and password are required');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Проверка уникальности email`}
              </code>
              <code>
                {'  '}
                {`const existing = await userRepository.findByEmail(email);`}
              </code>
              <code>
                {'  '}
                {`if (existing) throw new ValidationError('Email already exists');`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`const password_hash = await bcrypt.hash(password, 10);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`const user = await userRepository.create({ name, email, password_hash });`}
              </code>
              <code>
                {'  '}
                {`res.status(201).json(user);`}
              </code>
              <code>{'};'}</code>
            </code>
          </pre>
          <p>Роуты</p>
          <pre>
            <CodeNumber length={10} />
            <code>
              <code className='comment'>{`// routes/users.js`}</code>
              <code>{`const router = require('express').Router();`}</code>
              <code>{`const asyncHandler = require('../utils/asyncHandler');`}</code>
              <code>{`const userController = require('../controllers/userController');`}</code>
              <code>{'  '}</code>
              <code>{`router.get('/', asyncHandler(userController.getAllUsers));`}</code>
              <code>{`router.get('/:id', asyncHandler(userController.getUserById));`}</code>
              <code>{`router.post('/', asyncHandler(userController.createUser));`}</code>
              <code>{'  '}</code>
              <code>{`module.exports = router;`}</code>
            </code>
          </pre>
          <p>Транзакции</p>
          <pre>
            <CodeNumber length={42} />
            <code>
              <code className='comment'>{`// services/orderService.js`}</code>
              <code>{`const pool = require('../db/pool');`}</code>
              <code>{'  '}</code>
              <code>{`class OrderService {`}</code>
              <code>
                {'    '}
                {`async createOrder(userId, items) {`}
              </code>
              <code>
                {'      '}
                {`const client = await pool.connect();`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`try {`}
              </code>
              <code>
                {'    '}
                {`await client.query('BEGIN');`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'    '}
                {`// 1. Создаем заказ`}
              </code>
              <code>
                {'    '}
                {`const orderResult = await client.query(`}
              </code>
              <code>
                {'      '}
                {`'INSERT INTO orders (user_id, status, created_at) VALUES ($1, $2, NOW()) RETURNING id',`}
              </code>
              <code>
                {'      '}
                {`[userId, 'pending']`}
              </code>
              <code>
                {'    '}
                {`);`}
              </code>
              <code>
                {'    '}
                {`const orderId = orderResult.rows[0].id;`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'    '}
                {`// 2. Добавляем товары в заказ`}
              </code>
              <code>
                {'    '}
                {`for (const item of items) {`}
              </code>
              <code>
                {'      '}
                {`await client.query(`}
              </code>
              <code>
                {'        '}
                {`'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)'`}
              </code>
              <code>
                {'        '}
                {`[orderId, item.productId, item.quantity, item.price]`}
              </code>
              <code>{'  '}</code>
              <code>
                {'      '}
                {`// 3. Обновляем остатки`}
              </code>
              <code>
                {'      '}
                {`await client.query(`}
              </code>
              <code>
                {'        '}
                {`'UPDATE products SET stock = stock - $1 WHERE id = $2',`}
              </code>
              <code>
                {'        '}
                {`[item.quantity, item.productId]`}
              </code>
              <code>
                {'      '}
                {`);`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`await client.query('COMMIT');`}
              </code>
              <code>
                {'    '}
                {`return { orderId, status: 'created' };`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`} catch (err) {`}
              </code>
              <code>
                {'      '}
                {`await client.query('ROLLBACK');`}
              </code>
              <code>
                {'      '}
                {`throw err;`}
              </code>
              <code>
                {'    '}
                {`} finally {`}
              </code>
              <code>
                {'      '}
                {`client.release();`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>Часть 3: MongoDB с Mongoose (ODM)</p>
          <pre>npm install mongoose</pre>
          <p>Подключение</p>
          <pre>
            <CodeNumber length={17} />
            <code>
              <code className='comment'>{`// db/mongoose.js`}</code>
              <code>{`const mongoose = require('mongoose');`}</code>
              <code>{'  '}</code>
              <code>{`const connectDB = async () => {`}</code>
              <code>
                {'  '}
                {`try {`}
              </code>
              <code>
                {'    '}
                {`await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {`}
              </code>
              <code>
                {'      '}
                {`useNewUrlParser: true,`}
              </code>
              <code>
                {'      '}
                {`useUnifiedTopology: true,`}
              </code>
              <code>
                {'    '}
                {`});`}
              </code>
              <code>
                {'    '}
                {`console.log('MongoDB connected');`}
              </code>
              <code>
                {'  '}
                {`} catch (err) {`}
              </code>
              <code>
                {'    '}
                {`console.error('MongoDB connection error:', err);`}
              </code>
              <code>
                {'  '}
                {`process.exit(1);`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{`}`}</code>
              <code>{'  '}</code>
              <code>{`module.exports = connectDB;`}</code>
            </code>
          </pre>
          <p>Схема и модель</p>
          <pre>
            <CodeNumber length={58} />
            <code>
              <code className='comment'>{`// models/User.js`}</code>
              <code>{`const mongoose = require('mongoose');`}</code>
              <code>{`const bcrypt = require('bcrypt');`}</code>
              <code>{'  '}</code>
              <code>{`const userSchema = new mongoose.Schema({`}</code>
              <code>
                {'  '}
                {`name: {`}
              </code>
              <code>
                {'    '}
                {`type: String,`}
              </code>
              <code>
                {'    '}
                {`required: [true, 'Name is required'],`}
              </code>
              <code>
                {'    '}
                {`trim: true,`}
              </code>
              <code>
                {'    '}
                {`minlength: [2, 'Name must be at least 2 characters'],`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`email: {`}
              </code>
              <code>
                {'    '}
                {`type: String,`}
              </code>
              <code>
                {'    '}
                {`required: [true, 'Email is required'],`}
              </code>
              <code>
                {'    '}
                {`unique: true,`}
              </code>
              <code>
                {'    '}
                {`lowercase: true,`}
              </code>
              <code>
                {'    '}
                {`trim: true,`}
              </code>
              <code>
                {'    '}
                {`match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`password: {`}
              </code>
              <code>
                {'    '}
                {`type: String,`}
              </code>
              <code>
                {'    '}
                {`required: [true, 'Password is required'],`}
              </code>
              <code>
                {'    '}
                {`minlength: [6, 'Password must be at least 6 characters'],`}
              </code>
              <code>
                {'    '}
                {`select: false, // не возвращать по умолчанию`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`role: {`}
              </code>
              <code>
                {'    '}
                {`type: String,`}
              </code>
              <code>
                {'    '}
                {`enum: ['user', 'admin'],`}
              </code>
              <code>
                {'    '}
                {`default: 'user',`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`createdAt: {`}
              </code>
              <code>
                {'    '}
                {`type: Date,`}
              </code>
              <code>
                {'    '}
                {`default: Date.now,`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>{'}, {'}</code>
              <code>
                {'  '}
                {`timestamps: true, // автоматически добавляет createdAt и updatedAt`}
              </code>
              <code>
                {'  '}
                {`toJSON: { virtuals: true },`}
              </code>
              <code>
                {'  '}
                {`toObject: { virtuals: true },`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Хеширование пароля перед сохранением`}</code>
              <code>{"userSchema.pre('save', async function(next) {"}</code>
              <code>
                {'  '}
                {`if (!this.isModified('password')) return next();`}
              </code>
              <code>
                {'  '}
                {`this.password = await bcrypt.hash(this.password, 10);`}
              </code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Метод для сравнения пароля`}</code>
              <code>{`userSchema.methods.comparePassword = async function(candidatePassword) {`}</code>
              <code>
                {'  '}
                {`return await bcrypt.compare(candidatePassword, this.password);`}
              </code>
              <code>{'};'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Виртуальное поле (не хранится в БД)`}</code>
              <code>{`userSchema.virtual('profileUrl').get(function() {`}</code>
              <code>
                {'  '}
                {'return `/users/${this._id}`;'}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = mongoose.model('User', userSchema);`}</code>
            </code>
          </pre>
          <p>Репозиторий/Сервис с Mongoose</p>
          <pre>
            <CodeNumber length={59} />
            <code>
              <code className='comment'>{`// services/userService.js`}</code>
              <code>{`const User = require('../models/User');`}</code>
              <code>{'  '}</code>
              <code>{`class UserService {`}</code>
              <code>
                {'  '}
                {`async findAll() {`}
              </code>
              <code>
                {'    '}
                {`return await User.find().select('-password');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async findById(id) {`}
              </code>
              <code>
                {'    '}
                {`return await User.findById(id).select('-password');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async findByEmail(email) {`}
              </code>
              <code>
                {'    '}
                {`return await User.findOne({ email }).select('+password');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async create(userData) {`}
              </code>
              <code>
                {'    '}
                {`const user = new User(userData);`}
              </code>
              <code>
                {'    '}
                {`await user.save();`}
              </code>
              <code>
                {'    '}
                {`user.password = undefined; // убираем из ответа`}
              </code>
              <code>
                {'    '}
                {`return user;`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async update(id, updates) {`}
              </code>
              <code>
                {'    '}
                {`const allowed = ['name', 'email'];`}
              </code>
              <code>
                {'    '}
                {`const updateData = {};`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`for (const key of allowed) {`}
              </code>
              <code>
                {'      '}
                {`if (updates[key]) updateData[key] = updates[key];`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`return await User.findByIdAndUpdate(id, updateData, {`}
              </code>
              <code>
                {'      '}
                {`new: true, // возвращаем обновленный документ`}
              </code>
              <code>
                {'      '}
                {`runValidators: true, // запускаем валидацию`}
              </code>
              <code>
                {'    '}
                {`}).select('-password');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async delete(id) {`}
              </code>
              <code>
                {'    '}
                {`return await User.findByIdAndDelete(id);`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`async findPaginated(page = 1, limit = 10) {`}
              </code>
              <code>
                {'    '}
                {`const skip = (page - 1) * limit;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`const [users, total] = await Promise.all([`}
              </code>
              <code>
                {'      '}
                {`User.find().select('-password').skip(skip).limit(limit),`}
              </code>
              <code>
                {'      '}
                {`User.countDocuments(),`}
              </code>
              <code>
                {'    '}
                {`]);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`return {`}
              </code>
              <code>
                {'      '}
                {`data: users,`}
              </code>
              <code>
                {'      '}
                {`total,`}
              </code>
              <code>
                {'      '}
                {`page,`}
              </code>
              <code>
                {'      '}
                {`totalPages: Math.ceil(total / limit),`}
              </code>
              <code>
                {'    '}
                {`};`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = new UserService();`}</code>
            </code>
          </pre>
          <p>Часть 4: Sequelize (ORM для SQL)</p>
          <pre>
            <CodeNumber length={2} />
            <code>
              <code>{`npm install sequelize pg pg-hstore`}</code>
              <code className='comment'>{`# или для MySQL: npm install sequelize mysql2`}</code>
            </code>
          </pre>
          <p>Подключение</p>
          <pre>
            <CodeNumber length={17} />
            <code>
              <code className='comment'>{`// db/sequelize.js`}</code>
              <code>{`const { Sequelize } = require('sequelize');`}</code>
              <code>{'  '}</code>
              <code>{`const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {`}</code>
              <code>
                {'  '}
                {`host: process.env.DB_HOST,`}
              </code>
              <code>
                {'  '}
                {`dialect: 'postgres', // или 'mysql', 'sqlite', 'mssql'`}
              </code>
              <code>
                {'  '}
                {`logging: process.env.NODE_ENV === 'development' ? console.log : false,`}
              </code>
              <code>
                {'  '}
                {`pool: {`}
              </code>
              <code>
                {'    '}
                {`max: 5,`}
              </code>
              <code>
                {'    '}
                {`min: 0,`}
              </code>
              <code>
                {'    '}
                {`acquire: 30000,`}
              </code>
              <code>
                {'    '}
                {`idle: 10000,`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = sequelize;`}</code>
            </code>
          </pre>
          <p>Модель</p>
          <pre>
            <CodeNumber length={45} />
            <code>
              <code className='comment'>{`// models/User.js`}</code>
              <code>{`const { DataTypes } = require('sequelize');`}</code>
              <code>{`const sequelize = require('../db/sequelize');`}</code>
              <code>{'  '}</code>
              <code>{`const User = sequelize.define('User', {`}</code>
              <code>
                {'  '}
                {`id: {`}
              </code>
              <code>
                {'    '}
                {`type: DataTypes.INTEGER,`}
              </code>
              <code>
                {'    '}
                {`autoIncrement: true,`}
              </code>
              <code>
                {'    '}
                {`primaryKey: true,`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`name: {`}
              </code>
              <code>
                {'    '}
                {`type: DataTypes.STRING,`}
              </code>
              <code>
                {'    '}
                {`allowNull: false,`}
              </code>
              <code>
                {'    '}
                {`validate: {`}
              </code>
              <code>
                {'      '}
                {`len: [2, 100],`}
              </code>
              <code>
                {'    '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`email: {`}
              </code>
              <code>
                {'    '}
                {`type: DataTypes.STRING,`}
              </code>
              <code>
                {'    '}
                {`allowNull: false,`}
              </code>
              <code>
                {'    '}
                {`unique: true,`}
              </code>
              <code>
                {'    '}
                {`validate: {`}
              </code>
              <code>
                {'      '}
                {`isEmail: true,`}
              </code>
              <code>
                {'    '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`password: {`}
              </code>
              <code>
                {'    '}
                {`type: DataTypes.STRING,`}
              </code>
              <code>
                {'    '}
                {`allowNull: false,`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`role: {`}
              </code>
              <code>
                {'    '}
                {`type: DataTypes.ENUM('user', 'admin'),`}
              </code>
              <code>
                {'    '}
                {`defaultValue: 'user',`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>{'}, {'}</code>
              <code>
                {'  '}
                {`timestamps: true, // adds createdAt and updatedAt`}
              </code>
              <code>
                {'  '}
                {`paranoid: true,   // soft delete (deletedAt)`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Ассоциации (отношения)`}</code>
              <code>{'User.associate = (models) => {'}</code>
              <code>
                {'  '}
                {`User.hasMany(models.Post, { foreignKey: 'userId' });`}
              </code>
              <code>
                {'  '}
                {`User.belongsToMany(models.Role, { through: 'UserRoles' });`}
              </code>
              <code>{`};`}</code>
              <code>{'  '}</code>
              <code>{`module.exports = User;`}</code>
            </code>
          </pre>
          <p>Использование в контроллере</p>
          <pre>
            <CodeNumber length={44} />
            <code>
              <code className='comment'>{`// controllers/userController.js`}</code>
              <code>{`const User = require('../models/User');`}</code>
              <code>{`const { ValidationError, NotFoundError } = require('../utils/errors');`}</code>
              <code>{'  '}</code>
              <code>{`exports.getAllUsers = async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const users = await User.findAll({`}
              </code>
              <code>
                {'    '}
                {`attributes: ['id', 'name', 'email', 'createdAt'],`}
              </code>
              <code>
                {'    '}
                {`order: [['createdAt', 'DESC']],`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>
                {'  '}
                {`res.json(users);`}
              </code>
              <code>{`};`}</code>
              <code>{'  '}</code>
              <code>{`exports.getUserById = async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const user = await User.findByPk(req.params.id, {`}
              </code>
              <code>
                {'    '}
                {`attributes: ['id', 'name', 'email', 'createdAt'],`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>
                {'  '}
                {`if (!user) throw new NotFoundError('User');`}
              </code>
              <code>
                {'  '}
                {`res.json(user);`}
              </code>
              <code>{`};`}</code>
              <code>{'  '}</code>
              <code>{`exports.createUser = async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const { name, email, password } = req.body;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`const existing = await User.findOne({ where: { email } });`}
              </code>
              <code>
                {'  '}
                {`if (existing) throw new ValidationError('Email already exists');`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`const user = await User.create({ name, email, password });`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.status(201).json({`}
              </code>
              <code>
                {'    '}
                {`id: user.id,`}
              </code>
              <code>
                {'    '}
                {`name: user.name,`}
              </code>
              <code>
                {'    '}
                {`email: user.email,`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>{'};'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Сложные запросы с include`}</code>
              <code>{`exports.getUserWithPosts = async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const user = await User.findByPk(req.params.id, {`}
              </code>
              <code>
                {'    '}
                {`include: [{`}
              </code>
              <code>
                {'      '}
                {`model: Post,`}
              </code>
              <code>
                {'      '}
                {`as: 'posts',`}
              </code>
              <code>
                {'      '}
                {`attributes: ['id', 'title', 'createdAt'],`}
              </code>
              <code>
                {'    '}
                {`}],`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>
                {'  '}
                {`res.json(user);`}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>Миграции и настройка окружения</p>
          <pre>
            <CodeNumber length={16} />
            <code>
              <code># .env</code>
              <code>NODE_ENV=development</code>
              <code>PORT=3000</code>
              <code>{'  '}</code>
              <code># Database</code>
              <code>DB_HOST=localhost</code>
              <code>DB_PORT=5432</code>
              <code>DB_NAME=mydb</code>
              <code>DB_USER=postgres</code>
              <code>DB_PASSWORD=secret</code>
              <code>{'  '}</code>
              <code># MongoDB</code>
              <code>MONGODB_URI=mongodb://localhost:27017/myapp</code>
              <code>{'  '}</code>
              <code># JWT</code>
              <code>JWT_SECRET=your-super-secret-key</code>
            </code>
          </pre>
          <p>Конфигурация</p>
          <pre>
            <CodeNumber length={30} />
            <code>
              <code className='comment'>{`// config/db.js`}</code>
              <code>{`require('dotenv').config();`}</code>
              <code>{'  '}</code>
              <code>{`const config = {`}</code>
              <code>
                {'  '}
                {`development: {`}
              </code>
              <code>
                {'    '}
                {`host: process.env.DB_HOST,`}
              </code>
              <code>
                {'    '}
                {`port: process.env.DB_PORT,`}
              </code>
              <code>
                {'    '}
                {`database: process.env.DB_NAME,`}
              </code>
              <code>
                {'    '}
                {`username: process.env.DB_USER,`}
              </code>
              <code>
                {'    '}
                {`password: process.env.DB_PASSWORD,`}
              </code>
              <code>
                {'    '}
                {`dialect: 'postgres',`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`test: {`}
              </code>
              <code>
                {'    '}
                {`database: 'mydb_test',`}
              </code>
              <code>
                {'    '}
                {`dialect: 'postgres',`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`production: {`}
              </code>
              <code>
                {'    '}
                {`host: process.env.DB_HOST,`}
              </code>
              <code>
                {'    '}
                {`database: process.env.DB_NAME,`}
              </code>
              <code>
                {'    '}
                {`username: process.env.DB_USER,`}
              </code>
              <code>
                {'    '}
                {`password: process.env.DB_PASSWORD,`}
              </code>
              <code>
                {'    '}
                {`dialect: 'postgres',`}
              </code>
              <code>
                {'    '}
                {`ssl: true,`}
              </code>
              <code>
                {'    '}
                {`dialectOptions: {`}
              </code>
              <code>
                {'      '}
                {`ssl: { require: true },`}
              </code>
              <code>
                {'    '}
                {`},`}
              </code>
              <code>
                {'  '}
                {`},`}
              </code>
              <code>{'};'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = config[process.env.NODE_ENV || 'development'];`}</code>
            </code>
          </pre>
          <p>Готовый шаблон подключения к БД</p>
          <pre>
            <CodeNumber length={35} />
            <code>
              <code className='comment'>{`// app.js (полный пример)`}</code>
              <code>const express = require('express');</code>
              <code>require('dotenv').config();</code>
              <code>{'  '}</code>
              <code>{`const connectDB = require('./db/mongoose'); // или pg, sequelize`}</code>
              <code>{`const userRoutes = require('./routes/users');`}</code>
              <code>{'  '}</code>
              <code>const app = express();</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Middleware`}</code>
              <code>{`app.use(express.json());`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Подключение к БД`}</code>
              <code>connectDB();</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Роуты`}</code>
              <code>app.use('/api/users', userRoutes);</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Error handler`}</code>
              <code>{`app.use((err, req, res, next) => {`}</code>
              <code className='comment'>
                {'  '}
                {`// Обработка ошибок БД`}
              </code>
              <code>
                {'  '}
                {`if (err.code === '23505') { // PostgreSQL duplicate key`}
              </code>
              <code>
                {'    '}
                {`return res.status(409).json({ error: 'Duplicate entry' });`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`if (err.name === 'ValidationError') { // Mongoose validation`}
              </code>
              <code>
                {'    '}
                {`return res.status(400).json({ error: err.message });`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.status(err.status || 500).json({ error: err.message });`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>const PORT = process.env.PORT || 3000;</code>
              <code>{`app.listen(PORT, () => {`}</code>
              <code>
                {'  '}
                {'console.log(`Server running on port ${PORT}`);'}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'Аутентификация и авторизация (JWT, bcrypt)': {
      id: 'express-7',
      title: 'Аутентификация и авторизация (JWT, bcrypt)',
      jsx: (
        <div>
          <p>Установка зависимостей</p>
          <pre>
            <CodeNumber length={2} />
            <code>
              <code>npm install jsonwebtoken bcrypt express</code>
              <code>
                npm install --save-dev @types/jsonwebtoken @types/bcrypt # для
                TypeScript
              </code>
            </code>
          </pre>
          <p>Хеширование паролей с bcrypt</p>
          <pre>
            <CodeNumber length={17} />
            <code>
              <code className='comment'>{`// utils/password.js`}</code>
              <code>{`const bcrypt = require('bcrypt');`}</code>
              <code>{'  '}</code>
              <code>{`const SALT_ROUNDS = 10;  // сложность хеширования (10-12 оптимально)`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Хеширование пароля`}</code>
              <code>{`async function hashPassword(password) {`}</code>
              <code>
                {'  '}
                {`const salt = await bcrypt.genSalt(SALT_ROUNDS);`}
              </code>
              <code>
                {'  '}
                {`return await bcrypt.hash(password, salt);`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Проверка пароля`}</code>
              <code>{`async function verifyPassword(password, hash) {`}</code>
              <code>
                {'  '}
                {`return await bcrypt.compare(password, hash);`}
              </code>
              <code>{`}`}</code>
              <code>{'  '}</code>
              <code>{`module.exports = { hashPassword, verifyPassword };`}</code>
            </code>
          </pre>
          <p>Использование в модели пользователя</p>
          <pre>
            <CodeNumber length={25} />
            <code>
              <code className='comment'>{`// models/User.js (Mongoose)`}</code>
              <code>{`const mongoose = require('mongoose');`}</code>
              <code>{`const { hashPassword, verifyPassword } = require('../utils/password');`}</code>
              <code>{'  '}</code>
              <code>{`const userSchema = new mongoose.Schema({`}</code>
              <code>
                {'  '}
                {`email: { type: String, required: true, unique: true },`}
              </code>
              <code>
                {'  '}
                {`password: { type: String, required: true, select: false }, // select false — не возвращать по умолчанию`}
              </code>
              <code>
                {'  '}
                {`name: String,`}
              </code>
              <code>
                {'  '}
                {`role: { type: String, enum: ['user', 'admin'], default: 'user' }`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Хешируем пароль перед сохранением`}</code>
              <code>{`userSchema.pre('save', async function(next) {`}</code>
              <code>
                {'  '}
                {`if (!this.isModified('password')) return next();`}
              </code>
              <code>
                {'  '}
                {`this.password = await hashPassword(this.password);`}
              </code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Метод для проверки пароля`}</code>
              <code>{`userSchema.methods.comparePassword = async function(candidatePassword) {`}</code>
              <code>
                {'  '}
                {`return await verifyPassword(candidatePassword, this.password);`}
              </code>
              <code>{`};`}</code>
              <code>{'  '}</code>
              <code>{`module.exports = mongoose.model('User', userSchema);`}</code>
            </code>
          </pre>
          <p>JWT — генерация и верификация</p>
          <pre>
            <CodeNumber length={44} />
            <code>
              <code className='comment'>{`// utils/jwt.js`}</code>
              <code>{`const jwt = require('jsonwebtoken');`}</code>
              <code>{'  '}</code>
              <code>{`const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-it';`}</code>
              <code>{`const JWT_EXPIRES_IN = '7d';  // 7 дней`}</code>
              <code>{`const JWT_REFRESH_EXPIRES_IN = '30d';`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Генерация access токена`}</code>
              <code>{`function generateAccessToken(payload) {`}</code>
              <code>
                {'  '}
                {`return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Генерация refresh токена`}</code>
              <code>{`function generateRefreshToken(payload) {`}</code>
              <code>
                {'  '}
                {`return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });`}
              </code>
              <code></code>
              <code>{`}`}</code>
              <code className='comment'>{`// Верификация токена`}</code>
              <code>{`function verifyToken(token) {`}</code>
              <code>
                {'  '}
                {`try {`}
              </code>
              <code>
                {'    '}
                {`return jwt.verify(token, JWT_SECRET);`}
              </code>
              <code>
                {'  '}
                {`} catch (error) {`}
              </code>
              <code>
                {'    '}
                {`if (error.name === 'TokenExpiredError') {`}
              </code>
              <code>
                {'      '}
                {`throw new Error('Token expired');`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'    '}
                {`if (error.name === 'JsonWebTokenError') {`}
              </code>
              <code>
                {'      '}
                {`throw new Error('Invalid token');`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'    '}
                {`throw error;`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{`}`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Декодирование без верификации (небезопасно, только для отладки)`}</code>
              <code>{`function decodeToken(token) {`}</code>
              <code>
                {'  '}
                {`return jwt.decode(token);`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = {`}</code>
              <code>
                {'  '}
                {`generateAccessToken,`}
              </code>
              <code>
                {'  '}
                {`generateRefreshToken,`}
              </code>
              <code>
                {'  '}
                {`verifyToken,`}
              </code>
              <code>
                {'  '}
                {`decodeToken`}
              </code>
              <code>{'};'}</code>
            </code>
          </pre>
          <p>Middleware для авторизации</p>
          <pre>
            <CodeNumber length={69} />
            <code>
              <code className='comment'>{`// middleware/auth.js`}</code>
              <code>{`const { verifyToken } = require('../utils/jwt');`}</code>
              <code>{`const User = require('../models/User');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Проверка наличия токена`}</code>
              <code>{`function authenticate(req, res, next) {`}</code>
              <code>
                {'  '}
                {`try {`}
              </code>
              <code className='comment'>
                {'    '}
                {`// Получаем токен из заголовка Authorization`}
              </code>
              <code>
                {'      '}
                {`const authHeader = req.headers.authorization;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'      '}
                {`if (!authHeader || !authHeader.startsWith('Bearer ')) {`}
              </code>
              <code>
                {'        '}
                {`return res.status(401).json({ `}
              </code>
              <code>
                {'          '}
                {`error: 'No token provided or invalid format' `}
              </code>
              <code>
                {'        '}
                {`});`}
              </code>
              <code>
                {'      '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`const token = authHeader.split(' ')[1];`}
              </code>
              <code>
                {'    '}
                {`const decoded = verifyToken(token);`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'    '}
                {`// Сохраняем данные пользователя в req`}
              </code>
              <code>
                {'    '}
                {`req.user = decoded;`}
              </code>
              <code>
                {'    '}
                {`next();`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`} catch (err) {`}
              </code>
              <code>
                {'    '}
                {`if (err.message === 'Token expired') {`}
              </code>
              <code>
                {'      '}
                {`return res.status(401).json({ error: 'Token expired' });`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'    '}
                {`if (err.message === 'Invalid token') {`}
              </code>
              <code>
                {'      '}
                {`return res.status(401).json({ error: 'Invalid token' });`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'    '}
                {`res.status(500).json({ error: 'Authentication error' });`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Проверка роли (после authenticate)`}</code>
              <code>{`function authorize(...roles) {`}</code>
              <code>
                {'  '}
                {`return (req, res, next) => {`}
              </code>
              <code>
                {'    '}
                {`if (!req.user) {`}
              </code>
              <code>
                {'      '}
                {`return res.status(401).json({ error: 'Not authenticated' });`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`if (!roles.includes(req.user.role)) {`}
              </code>
              <code>
                {'      '}
                {`return res.status(403).json({ `}
              </code>
              <code>
                {'        '}
                {`error: 'Access denied. Required role: ' + roles.join(' or ') `}
              </code>
              <code>
                {'      '}
                {`});`}
              </code>
              <code>
                {'    '}
                {'}'}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`next();`}
              </code>
              <code>
                {'  '}
                {`};`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {'// Опциональная аутентификация (не блокирует)'}
              </code>
              <code>{'function optionalAuth(req, res, next) {'}</code>
              <code>
                {'  '}
                {`const authHeader = req.headers.authorization;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (authHeader && authHeader.startsWith('Bearer ')) {`}
              </code>
              <code>
                {'    '}
                {`try {`}
              </code>
              <code>
                {'      '}
                {`const token = authHeader.split(' ')[1];`}
              </code>
              <code>
                {'      '}
                {`const decoded = verifyToken(token);`}
              </code>
              <code>
                {'      '}
                {`req.user = decoded;`}
              </code>
              <code>
                {'    '}
                {`} catch (err) {`}
              </code>
              <code className='comment'>
                {'      '}
                {`// Игнорируем ошибки токена при опциональной аутентификации`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`next();`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = { authenticate, authorize, optionalAuth };`}</code>
            </code>
          </pre>
          <p>Регистрация и логин</p>
          <pre>
            <CodeNumber length={144} />
            <code>
              <code className='comment'>{`// controllers/authController.js`}</code>
              <code>{`const User = require('../models/User');`}</code>
              <code>{`const { generateAccessToken, generateRefreshToken } = require('../utils/jwt');`}</code>
              <code>{`const { ValidationError, UnauthorizedError } = require('../utils/errors');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Регистрация`}</code>
              <code>{`async function register(req, res) {`}</code>
              <code>
                {'  '}
                {`const { email, password, name } = req.body;`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Валидация`}
              </code>
              <code>
                {'  '}
                {`if (!email || !password) {`}
              </code>
              <code>
                {'   '}
                {`throw new ValidationError('Email and password are required');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (password.length < 6) {`}
              </code>
              <code>
                {'    '}
                {`throw new ValidationError('Password must be at least 6 characters');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Проверка существующего пользователя`}
              </code>
              <code>
                {'  '}
                {`const existingUser = await User.findOne({ email });`}
              </code>
              <code>
                {'  '}
                {`if (existingUser) {`}
              </code>
              <code>
                {'    '}
                {`throw new ValidationError('Email already registered');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Создание пользователя`}
              </code>
              <code>
                {'  '}
                {`const user = await User.create({`}
              </code>
              <code>
                {'    '}
                {`email,`}
              </code>
              <code>
                {'    '}
                {`password,  // хешируется в pre-save хуке`}
              </code>
              <code>
                {'    '}
                {`name: name || email.split('@')[0],`}
              </code>
              <code>
                {'    '}
                {`role: 'user'`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Генерация токенов`}
              </code>
              <code>
                {'  '}
                {`const payload = { id: user._id, email: user.email, role: user.role };`}
              </code>
              <code>
                {'  '}
                {`const accessToken = generateAccessToken(payload);`}
              </code>
              <code>
                {'  '}
                {`const refreshToken = generateRefreshToken(payload);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.status(201).json({`}
              </code>
              <code>
                {'    '}
                {`message: 'User registered successfully',`}
              </code>
              <code>
                {'    '}
                {`user: {`}
              </code>
              <code>
                {'      '}
                {`id: user._id,`}
              </code>
              <code>
                {'      '}
                {`email: user.email,`}
              </code>
              <code>
                {'      '}
                {`name: user.name,`}
              </code>
              <code>
                {'      '}
                {`role: user.role`}
              </code>
              <code>
                {'    '}
                {'},'}
              </code>
              <code>
                {'    '}
                {`tokens: {`}
              </code>
              <code>
                {'      '}
                {`accessToken,`}
              </code>
              <code>
                {'      '}
                {`refreshToken`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Логин`}</code>
              <code>{'async function login(req, res) {'}</code>
              <code>
                {'  '}
                {`const { email, password } = req.body;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (!email || !password) {`}
              </code>
              <code>
                {'    '}
                {`throw new ValidationError('Email and password are required');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Ищем пользователя с паролем (+password)`}
              </code>
              <code>
                {'  '}
                {`const user = await User.findOne({ email }).select('+password');`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (!user) {`}
              </code>
              <code>
                {'    '}
                {`throw new UnauthorizedError('Invalid email or password');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>{`// Проверяем пароль`}</code>
              <code>
                {'  '}
                {`const isPasswordValid = await user.comparePassword(password);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (!isPasswordValid) {`}
              </code>
              <code>
                {'    '}
                {`throw new UnauthorizedError('Invalid email or password');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Генерация токенов`}
              </code>
              <code>
                {'  '}
                {`const payload = { id: user._id, email: user.email, role: user.role };`}
              </code>
              <code>
                {'  '}
                {`const accessToken = generateAccessToken(payload);`}
              </code>
              <code>
                {'  '}
                {`const refreshToken = generateRefreshToken(payload);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.json({`}
              </code>
              <code>
                {'    '}
                {`message: 'Login successful',`}
              </code>
              <code>
                {'    '}
                {`user: {`}
              </code>
              <code>
                {'      '}
                {`id: user._id,`}
              </code>
              <code>
                {'      '}
                {`email: user.email,`}
              </code>
              <code>
                {'      '}
                {`name: user.name,`}
              </code>
              <code>
                {'      '}
                {`role: user.role`}
              </code>
              <code>
                {'    '}
                {`},`}
              </code>
              <code>
                {'    '}
                {`tokens: {`}
              </code>
              <code>
                {'      '}
                {`accessToken,`}
              </code>
              <code>
                {'      '}
                {`refreshToken`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`});`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Обновление токена (refresh)`}</code>
              <code>{`async function refreshToken(req, res) {`}</code>
              <code>
                {'  '}
                {`const { refreshToken } = req.body;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (!refreshToken) {`}
              </code>
              <code>
                {'    '}
                {`throw new ValidationError('Refresh token required');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`try {`}
              </code>
              <code>
                {'    '}
                {`const decoded = verifyToken(refreshToken);`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'    '}
                {`// Проверяем, что пользователь все еще существует`}
              </code>
              <code>
                {'    '}
                {`const user = await User.findById(decoded.id);`}
              </code>
              <code>
                {'    '}
                {`if (!user) {`}
              </code>
              <code>
                {'      '}
                {`throw new UnauthorizedError('User not found');`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'    '}
                {`// Генерируем новые токены`}
              </code>
              <code>
                {'    '}
                {`const payload = { id: user._id, email: user.email, role: user.role };`}
              </code>
              <code>
                {'    '}
                {`const newAccessToken = generateAccessToken(payload);`}
              </code>
              <code>
                {'    '}
                {`const newRefreshToken = generateRefreshToken(payload);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`res.json({`}
              </code>
              <code>
                {'      '}
                {`tokens: {`}
              </code>
              <code>
                {'        '}
                {`accessToken: newAccessToken,`}
              </code>
              <code>
                {'        '}
                {`refreshToken: newRefreshToken`}
              </code>
              <code>
                {'      '}
                {`}`}
              </code>
              <code>
                {'    '}
                {`});`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`} catch (err) {`}
              </code>
              <code>
                {'    '}
                {`throw new UnauthorizedError('Invalid or expired refresh token');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Получение текущего пользователя`}</code>
              <code>{`async function getMe(req, res) {`}</code>
              <code>
                {'  '}
                {`const user = await User.findById(req.user.id).select('-password');`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (!user) {`}
              </code>
              <code>
                {'    '}
                {`throw new NotFoundError('User');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.json(user);`}
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>{`module.exports = {`}</code>
              <code>
                {'  '}
                {`register,`}
              </code>
              <code>
                {'  '}
                {`login,`}
              </code>
              <code>
                {'  '}
                {`refreshToken,`}
              </code>
              <code>{'  '}</code>
              <code>{`};`}</code>
            </code>
          </pre>
          <p>Роуты аутентификации</p>
          <pre>
            <CodeNumber length={20} />
            <code>
              <code className='comment'>{`// routes/auth.js`}</code>
              <code>{`const router = require('express').Router();`}</code>
              <code>{`const asyncHandler = require('../utils/asyncHandler');`}</code>
              <code>{`const { authenticate } = require('../middleware/auth');`}</code>
              <code>{`const authController = require('../controllers/authController');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Публичные маршруты`}</code>
              <code>{`router.post('/register', asyncHandler(authController.register));`}</code>
              <code>{`router.post('/login', asyncHandler(authController.login));`}</code>
              <code>{`router.post('/refresh', asyncHandler(authController.refreshToken));`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Защищенные маршруты`}</code>
              <code>{`router.get('/me', authenticate, asyncHandler(authController.getMe));`}</code>
              <code>{`router.post('/logout', authenticate, asyncHandler(async (req, res) => {`}</code>
              <code className='comment'>
                {'  '}
                {`// На клиенте нужно удалить токены`}
              </code>
              <code className='comment'>
                {'  '}
                {`// В реальном проекте можно добавить черный список токенов`}
              </code>
              <code>
                {'  '}
                {`res.json({ message: 'Logged out successfully' });`}
              </code>
              <code>{'}));'}</code>
              <code>{'  '}</code>
              <code>module.exports = router;</code>
            </code>
          </pre>
          <p>Защита маршрутов по ролям</p>
          <pre>
            <CodeNumber length={24} />
            <code>
              <code className='comment'>{`// routes/admin.js`}</code>
              <code>{`const router = require('express').Router();`}</code>
              <code>{`const { authenticate, authorize } = require('../middleware/auth');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Все маршруты в этом роутере требуют аутентификации`}</code>
              <code>{`router.use(authenticate);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Только админы могут получить список всех пользователей`}</code>
              <code>{`router.get('/users', authorize('admin'), async (req, res) => {`}</code>
              <code>
                {'  '}
                {`const users = await User.find().select('-password');`}
              </code>
              <code>
                {'  '}
                {`res.json(users);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Админы и менеджеры могут просматривать отчеты`}</code>
              <code>{`router.get('/reports', authorize('admin', 'manager'), async (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.json({ report: 'sales_data' });`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Обычный пользователь может просматривать свою статистику`}</code>
              <code>{`router.get('/my-stats', authorize('user', 'admin'), async (req, res) => {`}</code>
              <code>
                {'  '}
                {`res.json({ stats: { visits: 42 } });`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>module.exports = router;</code>
            </code>
          </pre>
        </div>
      ),
    },
  },
};

export default ExpressJs;
