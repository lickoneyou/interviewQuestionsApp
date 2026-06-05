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
            <CodeNumber length={11}/>
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
          </pre>
          <p>Итог:</p>
          <ul>
            <li><b>GET /users</b> → routes/users.js router.get('/')</li>
            <li><b>GET /users/123</b> → router.get('/:id')</li>
            <li><b>POST /users</b> → router.post('/')</li>
          </ul>
        </div>
      ),
    },
  },
};

export default ExpressJs;
