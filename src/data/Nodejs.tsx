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
  },
};

export default Nodejs;
