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
  },
};

export default ExpressJs;
