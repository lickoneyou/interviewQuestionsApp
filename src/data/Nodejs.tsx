import CodeNumber from '../components/Basic/CodeNumbers';

const Nodejs = {
  Nodejs: {
    'Основы и инициализация': {
      id: 'node-1',
      title: 'Основы и инициализация',
      jsx: (
        <div>
          <p>
            Создание проекта - <b>npm init</b>
          </p>
          <p>package.json</p>
          <pre>
            <CodeNumber length={8} />
            <code>
              <code>{'{'}</code>
              <code>
                {'  '}
                {'"name": "my-app",'}
              </code>
              <code>
                {'  '}
                {'"version": "1.0.0",'}
              </code>
              <code>
                {'  '}
                {'"main": "index.js",        // точка входа'}
              </code>
              <code>
                {'  '}
                {'"scripts": {'}
              </code>
              <code>
                {'    '}
                {'"start": "node index.js" // npm run start'}
              </code>
              <code>
                {'  '}
                {'}'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>Запуск</p>
          <ul>
            <li>node index.js</li>
            <li>если прописан в scripts - npm run start</li>
          </ul>
        </div>
      ),
    },
    Модули: {
      id: 'node-2',
      title: 'Модули',
      jsx: (
        <div>
          <p>Экспорт</p>
          <pre>
            <CodeNumber length={6} />
            <code>
              <code className='comment'>{'// math.js'}</code>
              <code>{'const add = (a, b) => a + b;'}</code>
              <code>{'const multiply = (a, b) => a * b;'}</code>
              <code>{'  '}</code>
              <code>{'module.exports = { add, multiply };'}</code>
              <code className='comment'>
                {'// или по одному: module.exports.add = add;'}
              </code>
            </code>
          </pre>
          <p>Импорт</p>
          <pre>
            <CodeNumber length={5} />
            <code>
              <code className='comment'>{'/ app.js'}</code>
              <code>{`const math = require('./math.js');        // берем всё`}</code>
              <code>{`const { add } = require('./math.js');     // деструктуризация`}</code>
              <code>{'  '}</code>
              <code>{'console.log(add(2, 3));   // 5'}</code>
            </code>
          </pre>
          <p>path</p>
          <pre>
            <CodeNumber length={7} />
            <code>
              <code>{`const path = require('path');`}</code>
              <code>{'  '}</code>
              <code>{`path.join('folder', 'file.txt');        // folder/file.txt`}</code>
              <code>{`path.resolve('index.js');               // абсолютный путь`}</code>
              <code>{`path.dirname('/a/b/c.js');              // /a/b`}</code>
              <code>{`path.basename('/a/b/c.js');             // c.js`}</code>
              <code>{`path.extname('/a/b/c.js');              // .js`}</code>
            </code>
          </pre>
          <p>os</p>
          <pre>
            <CodeNumber length={8} />
            <code>
              <code>{`const os = require('os');`}</code>
              <code>{'  '}</code>
              <code>{`os.platform();          // 'win32' / 'linux' / 'darwin'`}</code>
              <code>{`os.cpus();              // информация о процессорах`}</code>
              <code>{`os.totalmem();          // всего памяти (байт)`}</code>
              <code>{`os.freemem();           // свободно памяти`}</code>
              <code>{`os.homedir();           // домашняя папка`}</code>
              <code>{`os.userInfo();          // информация о пользователе`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'Файловая система': {
      id: 'node-3',
      title: 'Файловая система',
      jsx: (
        <div>
          <p>Подключение</p>
          <pre>
            <CodeNumber length={2} />
            <code>
              <code>{`const fs = require('fs');`}</code>
              <code>{`const fsPromises = require('fs').promises;  // современный вариант`}</code>
            </code>
          </pre>
          <p>Чтение файла (readFile)</p>
          <pre>
            <CodeNumber length={11} />
            <code>
              <code className='comment'>{'// Синхронно'}</code>
              <code>{`const data = fs.readFileSync('./file.txt', 'utf8');`}</code>
              <code>{`console.log(data);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{'// Асинхронно (Promises)'}</code>
              <code>{`const fs = require('fs').promises;`}</code>
              <code>{'  '}</code>
              <code>{`async function read() {`}</code>
              <code>
                {'  '}
                {`const data = await fs.readFile('./file.txt', 'utf8');`}
              </code>
              <code>
                {'  '}
                {`console.log(data);`}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>Запись файла (writeFile)</p>
          <pre>
            <CodeNumber length={4} />
            <code>
              <code>{`fs.writeFileSync('./output.txt', 'Hello World');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Или асинхронно`}</code>
              <code>{`await fs.writeFile('./output.txt', 'Hello World');`}</code>
            </code>
          </pre>
          <p>Добавление в файл (appendFile)</p>
          <pre>
            <CodeNumber length={2} />
            <code>
              <code>{`fs.appendFileSync('./log.txt', 'Новая строка');`}</code>
              <code>{`await fs.appendFile('./log.txt', 'Еще строка');`}</code>
            </code>
          </pre>
          <p>Создание папки (mkdir)</p>
          <pre>
            <CodeNumber length={5} />
            <code>
              <code>{`fs.mkdirSync('./my-folder');`}</code>
              <code>{`await fs.mkdir('./my-folder');`}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {'// С вложенными папками (рекурсивно)'}
              </code>
              <code>{`await fs.mkdir('./a/b/c', { recursive: true });`}</code>
            </code>
          </pre>
          <p>Удаление папки (rmdir / rm)</p>
          <pre>
            <CodeNumber length={6} />
            <code>
              <code className='comment'>
                {'// Старый способ (только пустые папки)'}
              </code>
              <code>{`fs.rmdirSync('./empty-folder');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Новый способ (рекурсивно с содержимым)`}</code>
              <code>{`fs.rmSync('./folder', { recursive: true, force: true });`}</code>
              <code>{`await fs.rm('./folder', { recursive: true, force: true });`}</code>
            </code>
          </pre>
          <p>Удаление файла (unlink)</p>
          <pre>
            <CodeNumber length={2} />
            <code>
              <code>{`fs.unlinkSync('./file.txt');`}</code>
              <code>{`await fs.unlink('./file.txt');`}</code>
            </code>
          </pre>
          <p>Полезные методы</p>
          <ul>
            <li>
              <b>fs.readdir()</b> - Чтение содержимого папки
            </li>
            <li>
              <b>fs.stat()</b> - Информация о файле/папке (размер, дата)
            </li>
            <li>
              <b>fs.existsSync()</b> - Проверка существования (только синхронно)
            </li>
            <li>
              <b>fs.copyFile()</b> - Копирование файла
            </li>
            <li>
              <b>fs.rename()</b> - Переименование/перемещение
            </li>
          </ul>
        </div>
      ),
    },
    'Пути (path)': {
      id: 'node-4',
      title: 'Пути (path)',
      jsx: (
        <div>
          <p>Модуль path</p>
          <pre>
            <CodeNumber length={32} />
            <code>
              <code>{`const path = require('path');`}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {'// path.join() - Склеивает части пути (с учетом OS)'}
              </code>
              <code>{`path.join('folder', 'file.txt') // folder/file.txt`}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {'// path.resolve() - Строит абсолютный путь'}
              </code>
              <code>{`path.resolve('index.js')  // /full/path/index.js`}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {'// path.basename() - Имя файла (с расширением)'}
              </code>
              <code>{`path.basename('/a/b/c.js')  // c.js`}</code>
              <code className='comment'>
                {'// path.dirname() - Путь без имени файла'}
              </code>
              <code>{`path.dirname('/a/b/c.js') // /a/b`}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {'// path.extname() - Расширение файла'}
              </code>
              <code>{`path.extname('/a/b/c.js') //  .js`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// path.parse() - Разбирает путь на части, возвращает объект`}</code>
              <code>{`console.log(path.parse('/home/user/dir/file.txt'))`}</code>
              <code className='comment'>{'//  {'}</code>
              <code className='comment'>
                {'//  '}
                {'"root": "/",'}
              </code>
              <code className='comment'>
                {'//  '}
                {'"dir": "/home/user/dir",'}
              </code>
              <code className='comment'>
                {'//  '}
                {'"base": "file.txt",'}
              </code>
              <code className='comment'>
                {'//  '}
                {'"ext": ".txt",'}
              </code>
              <code className='comment'>
                {'//  '}
                {'"name": "file"'}
              </code>
              <code className='comment'>{'//  }'}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {
                  '// path.format() - Собирает путь из частей, обратный к parse()'
                }
              </code>
              <code>{`const fullPath = path.format({`}</code>
              <code>
                {'  '}
                {`dir: '/home/user',`}
              </code>
              <code>
                {'  '}
                {`name: 'file',`}
              </code>
              <code>
                {'  '}
                {`ext: '.txt'`}
              </code>
              <code>{`}); // '/home/user/file.txt'`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    Buffer: {
      id: 'node-5',
      title: 'Buffer',
      jsx: (
        <div>
          <p>
            <b>Buffer</b> — для работы с сырыми данными (массивами байтов).
            Файлы, сеть, криптография.
          </p>
          <p>Когда нужен Buffer?</p>
          <ul>
            <li>
              <span>Бинарные файлы (изображения, видео, PDF)</span> - Не
              являются текстом
            </li>
            <li>
              <span>Сетевое взаимодействие (TCP, HTTP)</span> - Данные идут
              байтами
            </li>
            <li>
              <span>Криптография (crypto module)</span> - Работает с байтами
            </li>
            <li>
              <span>Стримы</span> - Передают чанками байтов
            </li>
            <li>
              <span>Эффективность</span> - Копирование больших данных
            </li>
          </ul>
          <p>Создание буфера</p>
          <pre>
            <CodeNumber length={10} />
            <code>
              <code className='comment'>{'// Из строки'}</code>
              <code>{`const buf1 = Buffer.from('Hello');`}</code>
              <code>{`const buf2 = Buffer.from('Привет', 'utf8');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Пустой буфер заданного размера`}</code>
              <code>{`const buf3 = Buffer.alloc(10);        // заполнен нулями (безопасно)`}</code>
              <code>{`const buf4 = Buffer.allocUnsafe(10);  // быстрее, но может содержать "мусор"`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Из массива байтов`}</code>
              <code>{`const buf5 = Buffer.from([72, 101, 108, 108, 111]); // 'Hello'`}</code>
            </code>
          </pre>
          <p>{'Основные операции'}</p>
          <pre>
            <CodeNumber length={17} />
            <code>
              <code>{`const buf = Buffer.from('Hello Node');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Длина (в байтах)`}</code>
              <code>{`console.log(buf.length);  // 10`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Чтение байта`}</code>
              <code>{`console.log(buf[0]);      // 72 (код 'H')`}</code>
              <code>{`console.log(buf[1]);      // 101 (код 'e')`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Запись байта`}</code>
              <code>{`buf[0] = 104;             // 'h'`}</code>
              <code>{`console.log(buf.toString()); // 'hello Node'`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Преобразование в строку`}</code>
              <code>{`buf.toString();           // 'hello Node'`}</code>
              <code>{`buf.toString('utf8');     // то же самое`}</code>
              <code>{`buf.toString('hex');      // 68656c6c6f204e6f6465`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'HTTP-сервер': {
      id: 'node-6',
      title: 'HTTP-сервер',
      jsx: (
        <div>
          <p>Создание сервера</p>
          <pre>
            <CodeNumber length={6} />
            <code>
              <code>{`const http = require('http');`}</code>
              <code>{'  '}</code>
              <code>{`const server = http.createServer((req, res) => {`}</code>
              <code className='comment'>{`// req — входящий запрос (IncomingMessage)`}</code>
              <code className='comment'>{`// res — исходящий ответ (ServerResponse)`}</code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Объект req</p>
          <ul>
            <li>
              <b>req.url</b> - Путь запроса (<span>{`/users?id=1`}</span>)
            </li>
            <li>
              <b>req.method</b> - HTTP метод (
              <span>GET, POST, PUT, DELETE</span>)
            </li>
            <li>
              <b>req.headers</b> - Заголовки (объект) (
              <span>{`{ 'user-agent': '...' }`}</span>)
            </li>
          </ul>
          <p>Объект res</p>
          <ul>
            <li>
              <b>res.writeHead(code, headers)</b> - Установить статус и
              заголовки
            </li>
            <li>
              <b>res.setHeader(name, value)</b> - Установить заголовок
            </li>
            <li>
              <b>res.write(data)</b> - Отправить часть данных (chunk)
            </li>
            <li>
              <b>res.end(data)</b> - Завершить ответ (обязательно!)
            </li>
          </ul>
          <p>Простейший сервер</p>
          <pre>
            <CodeNumber length={10} />
            <code>
              <code>{`const http = require('http');`}</code>
              <code>{'  '}</code>
              <code>{`const server = http.createServer((req, res) => {`}</code>
              <code>
                {'  '}
                {`res.writeHead(200, { 'Content-Type': 'text/plain' });`}
              </code>
              <code>
                {'  '}
                {`res.end('Hello World!');`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`server.listen(3000, () => {`}</code>
              <code>
                {'  '}
                {`console.log('Сервер запущен на http://localhost:3000');`}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>Обработка маршрутов</p>
          <pre>
            <CodeNumber length={25} />
            <code>
              <code>{`const http = require('http');`}</code>
              <code>{'  '}</code>
              <code>{`const server = http.createServer((req, res) => {`}</code>
              <code>
                {'  '}
                {`const { url, method } = req;`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (url === '/' && method === 'GET') {`}
              </code>
              <code>
                {'    '}
                {`res.writeHead(200, { 'Content-Type': 'text/html' });`}
              </code>
              <code>
                {'    '}
                {`res.end('<h1>Главная</h1>');`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`} else if (url === '/about' && method === 'GET') {`}
              </code>
              <code>
                {'    '}
                {`res.writeHead(200, { 'Content-Type': 'text/html' });`}
              </code>
              <code>
                {'    '}
                {`res.end('<h1>О нас</h1>');`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`} else if (url === '/api/users' && method === 'GET') {`}
              </code>
              <code>
                {'    '}
                {`const users = [{ id: 1, name: 'Alice' }];`}
              </code>
              <code>
                {'    '}
                {`res.writeHead(200, { 'Content-Type': 'application/json' });`}
              </code>
              <code>
                {'    '}
                {`res.end(JSON.stringify(users));`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`} else {`}
              </code>
              <code>
                {'    '}
                {`res.writeHead(404, { 'Content-Type': 'text/plain' });`}
              </code>
              <code>
                {'    '}
                {`res.end('404 Not Found');`}
              </code>
              <code>{'  }'}</code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`server.listen(3000);`}</code>
            </code>
          </pre>
          <p>Чтение тела запроса (POST)</p>
          <pre>
            <CodeNumber length={28} />
            <code>
              <code>{`const http = require('http');`}</code>
              <code>{'  '}</code>
              <code>{`const server = http.createServer((req, res) => {`}</code>
              <code>
                {'  '}
                {`if (req.method === 'POST' && req.url === '/submit') {`}
              </code>
              <code>
                {'    '}
                {`let body = '';`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`req.on('data', chunk => {`}
              </code>
              <code>
                {'      '}
                {`body += chunk.toString();`}
              </code>
              <code>
                {'    '}
                {`});`}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {`eq.on('end', () => {`}
              </code>
              <code>
                {'      '}
                {`console.log('Получены данные:', body);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'      '}
                {'try {'}
              </code>
              <code>
                {'        '}
                {`const data = JSON.parse(body);`}
              </code>
              <code>
                {'        '}
                {`res.writeHead(200, { 'Content-Type': 'application/json' });`}
              </code>
              <code>
                {'        '}
                {`res.end(JSON.stringify({ received: true, data }));`}
              </code>
              <code>
                {'      '}
                {'} catch (err) {'}
              </code>
              <code>
                {'        '}
                {`res.writeHead(400, { 'Content-Type': 'application/json' });`}
              </code>
              <code>
                {'        '}
                {`res.end(JSON.stringify({ error: 'Invalid JSON' }));`}
              </code>
              <code>
                {'      '}
                {'}'}
              </code>
              <code>
                {'    '}
                {'});'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`} else {`}
              </code>
              <code>
                {'    '}
                {`res.writeHead(404);`}
              </code>
              <code>
                {'    '}
                {`res.end();`}
              </code>
              <code>
                {'  '}
                {'}'}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>Параметры запроса</p>
          <pre>
            <CodeNumber length={11} />
            <code>
              <code className='comment'>{`// GET /users?name=Alice&age=25`}</code>
              <code>{`const url = require('url');`}</code>
              <code>{'  '}</code>
              <code>{`const server = http.createServer((req, res) => {`}</code>
              <code>
                {'  '}
                {`const parsedUrl = url.parse(req.url, true); // true = парсить query`}
              </code>
              <code>
                {'  '}
                {`console.log(parsedUrl.pathname);   // '/users'`}
              </code>
              <code>
                {'  '}
                {`console.log(parsedUrl.query);      // { name: 'Alice', age: '25' }`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`res.writeHead(200, { 'Content-Type': 'application/json' });`}
              </code>
              <code>
                {'  '}
                {`res.end(JSON.stringify({ query: parsedUrl.query }));`}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>Динамические маршруты</p>
          <pre>
            <CodeNumber length={13} />
            <code>
              <code className='comment'>{`// GET /users/123`}</code>
              <code>{`const server = http.createServer((req, res) => {`}</code>
              <code>
                {'  '}
                {`const match = req.url.match(/^\/users\/(\d+)$/);`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`if (match) {`}
              </code>
              <code>
                {'    '}
                {`const userId = match[1];`}
              </code>
              <code>
                {'    '}
                {`res.writeHead(200, { 'Content-Type': 'application/json' });`}
              </code>
              <code>
                {'    '}
                {
                  'res.end(JSON.stringify({ userId, message: `Пользователь ${userId}` }));'
                }
              </code>
              <code>
                {'  '}
                {`} else {`}
              </code>
              <code>
                {'    '}
                {`res.writeHead(404);`}
              </code>
              <code>
                {'    '}
                {`res.end('Not found');`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Статус-коды</p>
          <ul>
            <li>
              <b>200</b> - OK (<span>Всё хорошо</span>)
            </li>
            <li>
              <b>201</b> - Created (<span>Ресурс создан (POST)</span>)
            </li>
            <li>
              <b>204</b> - No Content (<span>Успешно, но тело пустое</span>)
            </li>
            <li>
              <b>400</b> - Bad Request (<span>Ошибка в запросе клиента</span>)
            </li>
            <li>
              <b>401</b> - Unauthorized (<span>Требуется авторизация</span>)
            </li>
            <li>
              <b>403</b> - Forbidden (<span>Доступ запрещен</span>)
            </li>
            <li>
              <b>404</b> - Not Found (<span>Ресурс не найден</span>)
            </li>
            <li>
              <b>500</b> - Internal Server Error (<span>Ошибка сервера</span>)
            </li>
          </ul>
          <p>Заголовки (Content-Type)</p>
          <ul>
            <li>
              <b>text/plain</b> - Обычный текст
            </li>
            <li>
              <b>text/html</b> - HTML страница
            </li>
            <li>
              <b>text/css</b> - CSS файл
            </li>
            <li>
              <b>application/json</b> - JSON данные
            </li>
            <li>
              <b>application/x-www-form-urlencoded</b> - HTML формы
            </li>
            <li>
              <b>image/png</b> - Изображение
            </li>
            <li>
              <b>multipart/form-data</b> - Загрузка файлов
            </li>
          </ul>
        </div>
      ),
    },
    Streams: {
      id: 'node-7',
      title: 'Streams',
      jsx: (
        <div>
          <p>
            <b>Стримы</b> — это потоковая обработка данных по частям{' '}
            <span>(чанкам)</span>, без загрузки всего файла в память.
          </p>
          <p>Проблема без стримов:</p>
          <pre>
            <CodeNumber length={2} />
            <code>
              <code className='comment'>{`// ❌ Весь файл (10 ГБ) загрузится в память`}</code>
              <code>{`const data = await fs.readFile('./huge-file.mp4');`}</code>
            </code>
          </pre>
          <p>Решение со стримами:</p>
          <pre>
            <CodeNumber length={2} />
            <code>
              <code className='comment'>{`// ✅ Читаем и обрабатываем по кусочкам`}</code>
              <code>{`const stream = fs.createReadStream('./huge-file.mp4');`}</code>
            </code>
          </pre>
          <p>Типы стримов</p>
          <ul>
            <li>
              <b>Readable</b> - Чтение данных (
              <span>{`fs.createReadStream()`}</span>)
            </li>
            <li>
              <b>Writable</b> - Запись данных (
              <span>{`fs.createWriteStream()`}</span>)
            </li>
            <li>
              <b>Duplex</b> - Чтение + запись (<span>{`сетевые сокеты`}</span>)
            </li>
            <li>
              <b>Transform</b> - Изменяет данные на лету (
              <span>{`zlib.createGzip()`}</span>)
            </li>
          </ul>
          <p>Readable Stream</p>
          <pre>
            <CodeNumber length={19} />
            <code>
              <code>{`const fs = require('fs');`}</code>
              <code>{`const readable = fs.createReadStream('./input.txt', {`}</code>
              <code>
                {'  '}
                {`encoding: 'utf8',`}
              </code>
              <code>
                {'  '}
                {`highWaterMark: 64 * 1024  // чанк по 64KB (по умолчанию)`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// События`}</code>
              <code>{`readable.on('data', (chunk) => {`}</code>
              <code>
                {'  '}
                {'console.log(`Получен чанк размером: ${chunk.length} байт`);'}
              </code>
              <code>
                {'  '}
                {`console.log(chunk);`}
              </code>
              <code>{'});'}</code>
              <code>{`readable.on('end', () => {`}</code>
              <code>
                {'  '}
                {`console.log('Файл прочитан полностью');`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`readable.on('error', (err) => {`}</code>
              <code>
                {'  '}
                {`console.error('Ошибка:', err);`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>Writable Stream</p>
          <pre>
            <CodeNumber length={17} />
            <code>
              <code>{`const fs = require('fs');`}</code>
              <code>{`const writable = fs.createWriteStream('./output.txt');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Запись данных`}</code>
              <code>{`writable.write('Первая строка');`}</code>
              <code>{`writable.write('Вторая строка\n');`}</code>
              <code>{`writable.end('Последняя строка\n');  // end() завершает поток`}</code>
              <code>{'  '}</code>
              <code>{`writable.on('finish', () => {`}</code>
              <code>
                {'  '}
                {`console.log('Запись завершена');`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code>{`writable.on('error', (err) => {`}</code>
              <code>
                {'  '}
                {`console.error('Ошибка:', err);`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>
            <b>pipe()</b> - соединяет <span>Readable</span> →{' '}
            <span>Writable</span>, автоматически управляя потоком
            (backpressure).
          </p>
          <pre>
            <CodeNumber length={9} />
            <code>
              <code>{`const fs = require('fs');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Копирование файла (эффективно!)`}</code>
              <code>{`const readable = fs.createReadStream('./source.mp4');`}</code>
              <code>{`const writable = fs.createWriteStream('./destination.mp4');`}</code>
              <code>{'  '}</code>
              <code>{`readable.pipe(writable);`}</code>
              <code>{'  '}</code>
              <code>{`readable.on('end', () => console.log('Копирование завершено'));`}</code>
            </code>
          </pre>
          <p>Короткая запись:</p>
          <pre>
            <CodeNumber length={1} />
            <code>
              <code>{`fs.createReadStream('./source.mp4').pipe(fs.createWriteStream('./dest.mp4'));`}</code>
            </code>
          </pre>
          <p>pipe vs ручное копирование</p>
          <pre>
            <CodeNumber length={6} />
            <code>
              <code className='comment'>{`// ❌ Плохо (весь файл в память)`}</code>
              <code>{`const data = fs.readFileSync('./source.mp4');`}</code>
              <code>{`fs.writeFileSync('./dest.mp4', data);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// ✅ Хорошо (по чанкам)`}</code>
              <code>{`fs.createReadStream('./source.mp4').pipe(fs.createWriteStream('./dest.mp4'));`}</code>
            </code>
          </pre>
          <p>Transform Stream</p>
          <pre>
            <CodeNumber length={15} />
            <code>
              <code>{`const { Transform } = require('stream');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Создаем трансформер (например, в верхний регистр)`}</code>
              <code>{`const upperCaseTransform = new Transform({`}</code>
              <code>
                {'  '}
                {`transform(chunk, encoding, callback) {`}
              </code>
              <code>
                {'    '}
                {`const result = chunk.toString().toUpperCase();`}
              </code>
              <code>
                {'    '}
                {`this.push(result);`}
              </code>
              <code>
                {'    '}
                {`callback();`}
              </code>
              <code>{'  }'}</code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Использование`}</code>
              <code>{`fs.createReadStream('./input.txt')`}</code>
              <code>
                {'  '}
                {`.pipe(upperCaseTransform)`}
              </code>
              <code>
                {'  '}
                {`.pipe(fs.createWriteStream('./output.txt'));`}
              </code>
            </code>
          </pre>
          <p>Готовые трансформеры</p>
          <pre>
            <CodeNumber length={12} />
            <code>
              <code>{`const zlib = require('zlib');`}</code>
              <code>{`const fs = require('fs');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Сжатие файла`}</code>
              <code>{`fs.createReadStream('./big-file.txt')`}</code>
              <code>
                {'  '}
                {`.pipe(zlib.createGzip())`}
              </code>
              <code>
                {'  '}
                {`.pipe(fs.createWriteStream('./big-file.txt.gz'));`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>{`// Распаковка`}</code>
              <code>{`fs.createReadStream('./big-file.txt.gz')`}</code>
              <code>
                {'  '}
                {`.pipe(zlib.createGunzip())`}
              </code>
              <code>
                {'  '}
                {`.pipe(fs.createWriteStream('./big-file-restored.txt'));`}
              </code>
            </code>
          </pre>
          <p>HTTP-сервер со стримами </p>
          <pre>
            <CodeNumber length={18} />
            <code>
              <code>{`const http = require('http');`}</code>
              <code>{`const fs = require('fs');`}</code>
              <code>{`const path = require('path');`}</code>
              <code>{'  '}</code>
              <code>{`const server = http.createServer((req, res) => {`}</code>
              <code className='comment'>
                {'  '}
                {`// ❌ Плохо: читаем весь файл в память`}
              </code>
              <code className='comment'>
                {'  '}
                {`// const data = fs.readFileSync('./big-video.mp4');`}
              </code>
              <code className='comment'>
                {'  '}
                {`// res.end(data);`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// ✅ Хорошо: стримим клиенту`}
              </code>
              <code>
                {'  '}
                {`const stream = fs.createReadStream('./big-video.mp4');`}
              </code>
              <code>
                {'  '}
                {`stream.pipe(res);  // res — это Writable Stream!`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`stream.on('error', (err) => {`}
              </code>
              <code>
                {'  '}
                {`res.statusCode = 404;`}
              </code>
              <code>
                {'  '}
                {`res.end('File not found');`}
              </code>
              <code>{`  });`}</code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>❌ Без стримов</p>
          <ul>
            <li>Файл загружается в RAM</li>
            <li>При 1 ГБ файле → 1 ГБ RAM</li>
            <li>Медленный старт ответа</li>
          </ul>
          <p>✅ Со стримами</p>
          <ul>
            <li>Файл читается по частям</li>
            <li>При 1 ГБ файле → ~64KB RAM</li>
            <li>Мгновенный старт (TTFB)</li>
          </ul>
          <p>
            Остановка потока (<span>unpipe</span>, <span>destroy</span>)
          </p>
          <pre>
            <CodeNumber length={13} />
            <code>
              <code>{`const readable = fs.createReadStream('./file.txt');`}</code>
              <code>{`const writable = fs.createWriteStream('./output.txt');`}</code>
              <code>{'  '}</code>
              <code>{`readable.pipe(writable);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Отключить поток`}</code>
              <code>{`setTimeout(() => {`}</code>
              <code>
                {'  '}
                {`readable.unpipe(writable);`}
              </code>
              <code>
                {'  '}
                {`console.log('Поток остановлен');`}
              </code>
              <code>{`}, 1000);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Уничтожить поток`}</code>
              <code>{`readable.destroy();`}</code>
            </code>
          </pre>
          <p>
            <b>pipeline()</b> — правильный способ (с обработкой ошибок)
          </p>
          <pre>
            <CodeNumber length={28} />
            <code>
              <code>{`const { pipeline } = require('stream');`}</code>
              <code>{`const fs = require('fs');`}</code>
              <code>{`const zlib = require('zlib');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// pipe() не всегда правильно пробрасывает ошибки`}</code>
              <code className='comment'>{`// pipeline() — современная альтернатива`}</code>
              <code>{'  '}</code>
              <code>{`pipeline(`}</code>
              <code>
                {'  '}
                {`fs.createReadStream('./input.txt'),`}
              </code>
              <code>
                {'  '}
                {`zlib.createGzip(),`}
              </code>
              <code>
                {'  '}
                {`fs.createWriteStream('./input.txt.gz'),`}
              </code>
              <code>
                {'  '}
                {`(err) => {`}
              </code>
              <code>
                {'    '}
                {`if (err) {`}
              </code>
              <code>
                {'      '}
                {`console.error('Ошибка:', err);`}
              </code>
              <code>
                {'    '}
                {`} else {`}
              </code>
              <code>
                {'      '}
                {`console.log('Готово!');`}
              </code>
              <code>
                {'    '}
                {`}`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{`);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// С версией promises (Node.js 15+)`}</code>
              <code>{`const { pipeline } = require('stream/promises');`}</code>
              <code>{'  '}</code>
              <code>{`await pipeline(`}</code>
              <code>
                {'  '}
                {`fs.createReadStream('./input.txt'),`}
              </code>
              <code>
                {'  '}
                {`zlib.createGzip(),`}
              </code>
              <code>
                {'  '}
                {`fs.createWriteStream('./input.txt.gz')`}
              </code>
              <code>{`);`}</code>
            </code>
          </pre>
          <p>
            <b>Backpressure</b> - когда Writable медленнее Readable →
            накапливается буфер.
          </p>
          <pre>
            <CodeNumber length={14} />
            <code>
              <code>{`const readable = fs.createReadStream('./huge.txt');`}</code>
              <code>{`const writable = fs.createWriteStream('./output.txt');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// pipe() автоматически управляет backpressure`}</code>
              <code>{`readable.pipe(writable);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Ручная реализация`}</code>
              <code>{`readable.on('data', (chunk) => {`}</code>
              <code>
                {'  '}
                {`const canWrite = writable.write(chunk);`}
              </code>
              <code>
                {'  '}
                {`if (!canWrite) {`}
              </code>
              <code>
                {'    '}
                {`readable.pause();  // приостановить чтение`}
              </code>
              <code>
                {'    '}
                {`writable.once('drain', () => readable.resume());  // возобновить`}
              </code>
              <code>
                {'  '}
                {'}'}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
        </div>
      ),
    },
    EventEmitter: {
      id: 'node-8',
      title: `EventEmitter`,
      jsx: (
        <div>
          <p>
            <b>EventEmitter</b> - Встроенный модуль для создания
            событийно-ориентированной архитектуры. Многие объекты Node.js
            наследуют EventEmitter (streams, http.Server, process).
          </p>
          <pre>
            <CodeNumber length={11} />
            <code>
              <code>{`const EventEmitter = require('events');`}</code>
              <code>{'  '}</code>
              <code>{`const emitter = new EventEmitter();`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Подписка на событие (слушатель)`}</code>
              <code>{`emitter.on('greet', (name) => {`}</code>
              <code>
                {'  '}
                {'console.log(`Hello, ${name}!`);'}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Генерация события`}</code>
              <code>{`emitter.emit('greet', 'Alice');  // Hello, Alice!`}</code>
            </code>
          </pre>
          <p>Методы</p>
          <ul>
            <li>
              <b>on(event, listener)</b> - Добавить слушатель
            </li>
            <li>
              <b>once(event, listener)</b> - Слушатель сработает один раз
            </li>
            <li>
              <b>emit(event, ...args)</b> - Вызвать событие
            </li>
            <li>
              <b>off(event, listener)</b> - Удалить слушатель
            </li>
            <li>
              <b>removeListener(event, listener)</b> - То же что off
            </li>
            <li>
              <b>removeAllListeners(event)</b> - Удалить всех слушателей
            </li>
            <li>
              <b>listeners(event)</b> - Получить массив слушателей
            </li>
            <li>
              <b>eventNames()</b> - Список активных событий
            </li>
          </ul>
        </div>
      ),
    },
    'NPM и сторонние пакеты': {
      id: 'node-9',
      title: 'NPM и сторонние пакеты',
      jsx: (
        <div>
          <p>
            <b>Node Package Manager</b> - менеджер пакетов для Node.js
          </p>
          <p>Основные команды</p>
          <ul>
            <li>
              <b>npm init -y</b> - Создать package.json
            </li>
            <li>
              <b>{'npm install <package>'}</b> - Установить пакет
            </li>
            <li>
              <b>{'npm i <package>'}</b> - То же (сокращенно)
            </li>
            <li>
              <b>npm install</b> - Установить всё из package.json
            </li>
            <li>
              <b>{'npm uninstall <package>'}</b> - Удалить пакет
            </li>
            <li>
              <b>npm update</b> - Обновить пакеты
            </li>
            <li>
              <b>npm list</b> - Показать установленные пакеты
            </li>
            <li>
              <b>npm outdated</b> - Показать устаревшие пакеты
            </li>
          </ul>
          <p>Важные пакеты</p>
          <ul>
            <li>
              <b>nodemon</b> - авторестарт при изменениях
            </li>
            <li>
              <b>dotenv</b> - переменные окружения
            </li>
            <li>
              <b>cross-env</b> - кросс-платформенные переменные окружения
            </li>
          </ul>
        </div>
      ),
    },
    'Child Process': {
      id: 'node-10',
      title: 'Child Process',
      jsx: (
        <div>
          <p>
            <b>Child Process</b> - модуль для запуска внешних команд, других
            скриптов или системных программ из Node.js.
          </p>
          <p>Применение</p>
          <ul>
            <li>
              <b>Выполнить команду ОС</b> - ls -la, dir
            </li>
            <li>
              <b>Запустить Python/Shell скрипт</b> - python script.py
            </li>
            <li>
              <b>Создать тяжелые вычисления</b> - Отдельный процесс для
              CPU-нагрузки
            </li>
            <li>
              <b>Многопроцессность</b> - fork() для масштабирования
            </li>
          </ul>
          <p>Способы запуска</p>
          <ul>
            <li>
              <b>exec()</b> - Короткие команды, небольшой вывод. Возвращает
              буфер (весь вывод сразу)
            </li>
            <li>
              <b>execFile()</b> - Запуск .exe или бинарника. Возвращает буфер
            </li>
            <li>
              <b>spawn()</b> - Длительные процессы, большой вывод. Возвращает
              Stream
            </li>
            <li>
              <b>fork()</b> - Запуск другого Node.js модуля. Возвращает
              ChildProcess с IPC
            </li>
          </ul>
          <p>exec()</p>
          <pre>
            <CodeNumber length={19} />
            <code>
              <code>{`const { exec } = require('child_process');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Выполнить команду`}</code>
              <code>{`exec('ls -la', (error, stdout, stderr) => {`}</code>
              <code>
                {'  '}
                {`if (error) {`}
              </code>
              <code>
                {'    '}
                {'console.error(`Ошибка: ${error.message}`);'}
              </code>
              <code>
                {'    '}
                {`return;`}
              </code>
              <code>{'  }'}</code>
              <code>
                {'  '}
                {`if (stderr) {`}
              </code>
              <code>
                {'    '}
                {'console.error(`Stderr: ${stderr}`);'}
              </code>
              <code>
                {'  '}
                {`return;`}
              </code>
              <code>{'  }'}</code>
              <code>
                {'  '}
                {'console.log(`Вывод:\n${stdout}`);'}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Для Windows`}</code>
              <code>{`exec('dir', { shell: 'cmd.exe' }, (err, stdout) => {`}</code>
              <code>
                {'  '}
                {`console.log(stdout);`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>
            <b>Ограничение:</b> Буфер по умолчанию <span>1MB</span> (можно
            увеличить)
          </p>
          <p>execFile()</p>
          <pre>
            <CodeNumber length={11} />
            <code>
              <code>{`const { execFile } = require('child_process');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Запуск внешней программы с аргументами`}</code>
              <code>{`execFile('node', ['--version'], (err, stdout) => {`}</code>
              <code>
                {'  '}
                {`console.log('Node version:', stdout);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Запуск Python`}</code>
              <code>{`execFile('python', ['script.py', 'arg1'], (err, stdout) => {`}</code>
              <code>
                {'  '}
                {`console.log('Python output:', stdout);`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>spawn()</p>
          <pre>
            <CodeNumber length={20} />
            <code>
              <code>{`const { spawn } = require('child_process');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Создаем процесс`}</code>
              <code>{`const ls = spawn('ls', ['-la', '/usr']);`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Слушаем stdout (читаем по кусочкам)`}</code>
              <code>{`ls.stdout.on('data', (data) => {`}</code>
              <code>
                {'  '}
                {'console.log(`Чанк: ${data.length} байт`);'}
              </code>
              <code>
                {'  '}
                {`console.log(data.toString());`}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Слушаем stderr`}</code>
              <code>{`ls.stderr.on('data', (data) => {`}</code>
              <code>
                {'  '}
                {'console.error(`Ошибка: ${data}`);'}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Ждем завершения`}</code>
              <code>{`ls.on('close', (code) => {`}</code>
              <code>
                {'  '}
                {'console.log(`Процесс завершен с кодом ${code}`);'}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
          <p>
            <b>Преимущество spawn</b>: не ждет завершения, данные идут по
            стримам (хорошо для больших объемов).
          </p>
          <p>fork()</p>
          <pre>
            <CodeNumber length={21} />
            <code>
              <code className='comment'>{`// parent.js`}</code>
              <code>{`const { fork } = require('child_process');`}</code>
              <code>{'  '}</code>
              <code>{`const child = fork('./child.js');`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Отправляем данные дочернему процессу`}</code>
              <code>{`child.send({ hello: 'world' });`}</code>
              <code>{'  '}</code>
              <code>{`// Получаем ответ`}</code>
              <code>{`child.on('message', (message) => {`}</code>
              <code>
                {`  `}
                {`console.log('От ребенка:', message);`}
              </code>
              <code>
                {'  '}
                {`child.kill();`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// child.js`}</code>
              <code>{`process.on('message', (message) => {`}</code>
              <code>
                {'  '}
                {`console.log('Родитель сказал:', message);`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Отправляем ответ`}
              </code>
              <code>
                {'  '}
                {`process.send({ reply: 'Принято!' });`}
              </code>
              <code>{'});'}</code>
            </code>
          </pre>
          <p>
            <b>fork()</b> создает отдельный Node.js процесс с собственным Event
            Loop.
          </p>
          <p>IPC (Inter-Process Communication)</p>
          <pre>
            <CodeNumber length={20} />
            <code>
              <code className='comment'>{`// Родитель`}</code>
              <code>{`const child = fork('./worker.js');`}</code>
              <code>{'  '}</code>
              <code>{`child.send({ task: 'calculate', data: 1000 });`}</code>
              <code>{'  '}</code>
              <code>{`child.on('message', (result) => {`}</code>
              <code>
                {'  '}
                {`console.log('Результат:', result);`}
              </code>
              <code>{`});`}</code>
              <code>{'  '}</code>
              <code>{`child.on('exit', (code) => {`}</code>
              <code>
                {'  '}
                {'console.log(`Ребенок завершен с кодом ${code}`);'}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// worker.js`}</code>
              <code>{`process.on('message', async (msg) => {`}</code>
              <code>
                {'  '}
                {`if (msg.task === 'calculate') {`}
              </code>
              <code>
                {'    '}
                {`const result = heavyCalculation(msg.data);`}
              </code>
              <code>
                {'    '}
                {`process.send({ result });`}
              </code>
              <code>
                {'  '}
                {`}`}
              </code>
              <code>{`});`}</code>
            </code>
          </pre>
        </div>
      ),
    },
  },
};

export default Nodejs;
