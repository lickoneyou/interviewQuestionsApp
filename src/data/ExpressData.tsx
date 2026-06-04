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
      title: 'Обработка маршрутов (роутинг)',
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
  },
};

export default ExpressJs;
