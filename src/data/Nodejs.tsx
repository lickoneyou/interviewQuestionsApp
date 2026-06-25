import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const Nodejs = {
  Nodejs: {
    'Основы и инициализация': {
      get title() {
        return 'Основы и инициализация';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            Создание проекта - <b>npm init</b>
          </p>
          <p>package.json</p>
          <CodeHighlighter
            language={'json'}
            code={`{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",        // точка входа
  "scripts": {
    "start": "node index.js" // npm run start
  }
}`}
          />
          <p>Запуск</p>
          <ul>
            <li>node index.js</li>
            <li>если прописан в scripts - npm run start</li>
          </ul>
        </div>
      ),
    },
    Модули: {
      get title() {
        return 'Модули';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Экспорт</p>
          <CodeHighlighter
            code={`// math.js
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
  
module.exports = { add, multiply };
// или по одному: module.exports.add = add;`}
          />
          <p>Импорт</p>
          <CodeHighlighter
            code={`/ app.js
const math = require('./math.js');        // берем всё
const { add } = require('./math.js');     // деструктуризация
  
console.log(add(2, 3));   // 5`}
          />
          <p>path</p>
          <CodeHighlighter
            code={`const path = require('path');
  
path.join('folder', 'file.txt');        // folder/file.txt
path.resolve('index.js');               // абсолютный путь
path.dirname('/a/b/c.js');              // /a/b
path.basename('/a/b/c.js');             // c.js
path.extname('/a/b/c.js');              // .js
os`}
          />
          <p>os</p>
          <CodeHighlighter
            code={`const os = require('os');
  
os.platform();          // 'win32' / 'linux' / 'darwin'
os.cpus();              // информация о процессорах
os.totalmem();          // всего памяти (байт)
os.freemem();           // свободно памяти
os.homedir();           // домашняя папка
os.userInfo();          // информация о пользователе`}
          />
        </div>
      ),
    },
    'Файловая система': {
      get title() {
        return 'Файловая система';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Подключение</p>
          <CodeHighlighter
            code={`const fs = require('fs');
const fsPromises = require('fs').promises;  // современный вариант
`}
          />
          <p>Чтение файла (readFile)</p>
          <CodeHighlighter
            code={`// Синхронно
const data = fs.readFileSync('./file.txt', 'utf8');
console.log(data);
  
// Асинхронно (Promises)
const fs = require('fs').promises;
  
async function read() {
  const data = await fs.readFile('./file.txt', 'utf8');
  console.log(data);
}`}
          />
          <p>Запись файла (writeFile)</p>
          <CodeHighlighter
            code={`fs.writeFileSync('./output.txt', 'Hello World');
  
// Или асинхронно
await fs.writeFile('./output.txt', 'Hello World');`}
          />
          <p>Добавление в файл (appendFile)</p>
          <CodeHighlighter
            code={`fs.appendFileSync('./log.txt', 'Новая строка');
await fs.appendFile('./log.txt', 'Еще строка');`}
          />
          <p>Создание папки (mkdir)</p>
          <CodeHighlighter
            code={`fs.mkdirSync('./my-folder');
await fs.mkdir('./my-folder');
  
// С вложенными папками (рекурсивно)
await fs.mkdir('./a/b/c', { recursive: true });`}
          />
          <p>Удаление папки (rmdir / rm)</p>
          <CodeHighlighter
            code={`// Старый способ (только пустые папки)
fs.rmdirSync('./empty-folder');
  
// Новый способ (рекурсивно с содержимым)
fs.rmSync('./folder', { recursive: true, force: true });
await fs.rm('./folder', { recursive: true, force: true });`}
          />
          <p>Удаление файла (unlink)</p>
          <CodeHighlighter
            code={`fs.unlinkSync('./file.txt');
await fs.unlink('./file.txt');`}
          />
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
      get title() {
        return 'Пути (path)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Модуль path</p>
          <CodeHighlighter
            code={`const path = require('path');
  
// path.join() - Склеивает части пути (с учетом OS)
path.join('folder', 'file.txt') // folder/file.txt
  
// path.resolve() - Строит абсолютный путь
path.resolve('index.js')  // /full/path/index.js
  
// path.basename() - Имя файла (с расширением)
path.basename('/a/b/c.js')  // c.js
// path.dirname() - Путь без имени файла
path.dirname('/a/b/c.js') // /a/b
  
// path.extname() - Расширение файла
path.extname('/a/b/c.js') //  .js
  
// path.parse() - Разбирает путь на части, возвращает объект
console.log(path.parse('/home/user/dir/file.txt'))
//  {
//  "root": "/",
//  "dir": "/home/user/dir",
//  "base": "file.txt",
//  "ext": ".txt",
//  "name": "file"
//  }
  
// path.format() - Собирает путь из частей, обратный к parse()
const fullPath = path.format({
  dir: '/home/user',
  name: 'file',
  ext: '.txt'
}); // '/home/user/file.txt'`}
          />
        </div>
      ),
    },
    Buffer: {
      get title() {
        return 'Buffer';
      },
      get id() {
        return slugifyText(this.title);
      },
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
          <CodeHighlighter
            code={`// Из строки
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.from('Привет', 'utf8');
  
// Пустой буфер заданного размера
const buf3 = Buffer.alloc(10);        // заполнен нулями (безопасно)
const buf4 = Buffer.allocUnsafe(10);  // быстрее, но может содержать "мусор"
  
// Из массива байтов
const buf5 = Buffer.from([72, 101, 108, 108, 111]); // 'Hello'`}
          />
          <p>{'Основные операции'}</p>
          <CodeHighlighter
            code={`const buf = Buffer.from('Hello Node');
  
// Длина (в байтах)
console.log(buf.length);  // 10
  
// Чтение байта
console.log(buf[0]);      // 72 (код 'H')
console.log(buf[1]);      // 101 (код 'e')
  
// Запись байта
buf[0] = 104;             // 'h'
console.log(buf.toString()); // 'hello Node'
  
// Преобразование в строку
buf.toString();           // 'hello Node'
buf.toString('utf8');     // то же самое
buf.toString('hex');      // 68656c6c6f204e6f6465`}
          />
        </div>
      ),
    },
    'HTTP-сервер': {
      get title() {
        return 'HTTP-сервер';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Создание сервера</p>
          <CodeHighlighter
            code={`const http = require('http');
  
const server = http.createServer((req, res) => {
// req — входящий запрос (IncomingMessage)
// res — исходящий ответ (ServerResponse)
});`}
          />
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
          <CodeHighlighter
            code={`const http = require('http');
  
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});
  
server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});`}
          />
          <p>Обработка маршрутов</p>
          <CodeHighlighter
            code={`const http = require('http');
  
const server = http.createServer((req, res) => {
  const { url, method } = req;
  
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Главная</h1>');
  
  } else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>О нас</h1>');
  
  } else if (url === '/api/users' && method === 'GET') {
    const users = [{ id: 1, name: 'Alice' }];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});
  
server.listen(3000);`}
          />
          <p>Чтение тела запроса (POST)</p>
          <CodeHighlighter
            code={`const http = require('http');
  
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
  
    req.on('data', chunk => {
      body += chunk.toString();
    });
  
    eq.on('end', () => {
      console.log('Получены данные:', body);
  
      try {
        const data = JSON.parse(body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ received: true, data }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  
  } else {
    res.writeHead(404);
    res.end();
  }
});`}
          />
          <p>Параметры запроса</p>
          <CodeHighlighter
            code={`// GET /users?name=Alice&age=25
const url = require('url');
  
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = парсить query
  console.log(parsedUrl.pathname);   // '/users'
  console.log(parsedUrl.query);      // { name: 'Alice', age: '25' }
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ query: parsedUrl.query }));
});`}
          />
          <p>Динамические маршруты</p>
          <CodeHighlighter
            code={`// GET /users/123
const server = http.createServer((req, res) => {
  const match = req.url.match(/^/users/(d+)$/);
  
  if (match) {
    const userId = match[1];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ userId, message: \`Пользователь \${userId}\` }));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});`}
          />
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
      get title() {
        return 'Streams';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Стримы</b> — это потоковая обработка данных по частям{' '}
            <span>(чанкам)</span>, без загрузки всего файла в память.
          </p>
          <p>Проблема без стримов:</p>
          <CodeHighlighter
            code={`// ❌ Весь файл (10 ГБ) загрузится в память
const data = await fs.readFile('./huge-file.mp4');`}
          />
          <p>Решение со стримами:</p>
          <CodeHighlighter
            code={`// ✅ Читаем и обрабатываем по кусочкам
const stream = fs.createReadStream('./huge-file.mp4');`}
          />
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
          <CodeHighlighter
            code={`const fs = require('fs');
const readable = fs.createReadStream('./input.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024  // чанк по 64KB (по умолчанию)
});
  
// События
readable.on('data', (chunk) => {
  console.log(\`Получен чанк размером: \${chunk.length} байт\`);
  console.log(chunk);
});
readable.on('end', () => {
  console.log('Файл прочитан полностью');
});
  
readable.on('error', (err) => {
  console.error('Ошибка:', err);
});`}
          />
          <p>Writable Stream</p>
          <CodeHighlighter
            code={`const fs = require('fs');
const writable = fs.createWriteStream('./output.txt');
  
// Запись данных
writable.write('Первая строка');
writable.write('Вторая строка
');
writable.end('Последняя строка
');  // end() завершает поток
  
writable.on('finish', () => {
  console.log('Запись завершена');
});
  
writable.on('error', (err) => {
  console.error('Ошибка:', err);
});`}
          />
          <p>
            <b>pipe()</b> - соединяет <span>Readable</span> →{' '}
            <span>Writable</span>, автоматически управляя потоком
            (backpressure).
          </p>
          <CodeHighlighter
            code={`const fs = require('fs');
  
// Копирование файла (эффективно!)
const readable = fs.createReadStream('./source.mp4');
const writable = fs.createWriteStream('./destination.mp4');
  
readable.pipe(writable);
  
readable.on('end', () => console.log('Копирование завершено'));`}
          />
          <p>Короткая запись:</p>
          <CodeHighlighter
            code={`fs.createReadStream('./source.mp4').pipe(fs.createWriteStream('./dest.mp4'));`}
          />
          <p>pipe vs ручное копирование</p>
          <CodeHighlighter
            code={`// ❌ Плохо (весь файл в память)
const data = fs.readFileSync('./source.mp4');
fs.writeFileSync('./dest.mp4', data);
  
// ✅ Хорошо (по чанкам)
fs.createReadStream('./source.mp4').pipe(fs.createWriteStream('./dest.mp4'));`}
          />
          <p>Transform Stream</p>
          <CodeHighlighter
            code={`const { Transform } = require('stream');
  
// Создаем трансформер (например, в верхний регистр)
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().toUpperCase();
    this.push(result);
    callback();
  }
});
  
// Использование
fs.createReadStream('./input.txt')
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream('./output.txt'));`}
          />
          <p>Готовые трансформеры</p>
          <CodeHighlighter
            code={`const zlib = require('zlib');
const fs = require('fs');
  
// Сжатие файла
fs.createReadStream('./big-file.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./big-file.txt.gz'));
  
// Распаковка
fs.createReadStream('./big-file.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./big-file-restored.txt'));`}
          />
          <p>HTTP-сервер со стримами </p>
          <CodeHighlighter
            code={`const http = require('http');
const fs = require('fs');
const path = require('path');
  
const server = http.createServer((req, res) => {
  // ❌ Плохо: читаем весь файл в память
  // const data = fs.readFileSync('./big-video.mp4');
  // res.end(data);
  
  // ✅ Хорошо: стримим клиенту
  const stream = fs.createReadStream('./big-video.mp4');
  stream.pipe(res);  // res — это Writable Stream!
  
  stream.on('error', (err) => {
  res.statusCode = 404;
  res.end('File not found');
  });
});`}
          />
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
          <CodeHighlighter
            code={`const readable = fs.createReadStream('./file.txt');
const writable = fs.createWriteStream('./output.txt');
  
readable.pipe(writable);
  
// Отключить поток
setTimeout(() => {
  readable.unpipe(writable);
  console.log('Поток остановлен');
}, 1000);
  
// Уничтожить поток
readable.destroy();`}
          />
          <p>
            <b>pipeline()</b> — правильный способ (с обработкой ошибок)
          </p>
          <CodeHighlighter
            code={`const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');
  
// pipe() не всегда правильно пробрасывает ошибки
// pipeline() — современная альтернатива
  
pipeline(
  fs.createReadStream('./input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./input.txt.gz'),
  (err) => {
    if (err) {
      console.error('Ошибка:', err);
    } else {
      console.log('Готово!');
    }
  }
);
  
// С версией promises (Node.js 15+)
const { pipeline } = require('stream/promises');
  
await pipeline(
  fs.createReadStream('./input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./input.txt.gz')
);`}
          />
          <p>
            <b>Backpressure</b> - когда Writable медленнее Readable →
            накапливается буфер.
          </p>
          <CodeHighlighter
            code={`const readable = fs.createReadStream('./huge.txt');
const writable = fs.createWriteStream('./output.txt');
  
// pipe() автоматически управляет backpressure
readable.pipe(writable);
  
// Ручная реализация
readable.on('data', (chunk) => {
  const canWrite = writable.write(chunk);
  if (!canWrite) {
    readable.pause();  // приостановить чтение
    writable.once('drain', () => readable.resume());  // возобновить
  }
});`}
          />
        </div>
      ),
    },
    EventEmitter: {
      get title() {
        return 'EventEmitter';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>EventEmitter</b> - Встроенный модуль для создания
            событийно-ориентированной архитектуры. Многие объекты Node.js
            наследуют EventEmitter (streams, http.Server, process).
          </p>
          <CodeHighlighter
            code={`const EventEmitter = require('events');
  
const emitter = new EventEmitter();
  
// Подписка на событие (слушатель)
emitter.on('greet', (name) => {
  console.log(\`Hello, \${name}!\`);
});
  
// Генерация события
emitter.emit('greet', 'Alice');  // Hello, Alice!
`}
          />
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
      get title() {
        return 'NPM и сторонние пакеты';
      },
      get id() {
        return slugifyText(this.title);
      },
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
      get title() {
        return 'Child Process';
      },
      get id() {
        return slugifyText(this.title);
      },
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
          <CodeHighlighter
            code={`const { exec } = require('child_process');
  
// Выполнить команду
exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(\`Ошибка: $\{error.message}\`);
    return;
  }
  if (stderr) {
    console.error(\`Stderr: \${stderr}\`);
  return;
  }
  console.log(\`Вывод:
\${stdout}\`);
});
  
// Для Windows
exec('dir', { shell: 'cmd.exe' }, (err, stdout) => {
  console.log(stdout);
});`}
          />
          <p>
            <b>Ограничение:</b> Буфер по умолчанию <span>1MB</span> (можно
            увеличить)
          </p>
          <p>execFile()</p>
          <CodeHighlighter
            code={`const { execFile } = require('child_process');
  
// Запуск внешней программы с аргументами
execFile('node', ['--version'], (err, stdout) => {
  console.log('Node version:', stdout);
});
  
// Запуск Python
execFile('python', ['script.py', 'arg1'], (err, stdout) => {
  console.log('Python output:', stdout);
});`}
          />
          <p>spawn()</p>
          <CodeHighlighter
            code={`const { spawn } = require('child_process');
  
// Создаем процесс
const ls = spawn('ls', ['-la', '/usr']);
  
// Слушаем stdout (читаем по кусочкам)
ls.stdout.on('data', (data) => {
  console.log(\`Чанк: \${data.length} байт\`);
  console.log(data.toString());
});
  
// Слушаем stderr
ls.stderr.on('data', (data) => {
  console.error(\`Ошибка: \${data}\`);
});
  
// Ждем завершения
ls.on('close', (code) => {
  console.log(\`Процесс завершен с кодом \${code}\`);
});`}
          />
          <p>
            <b>Преимущество spawn</b>: не ждет завершения, данные идут по
            стримам (хорошо для больших объемов).
          </p>
          <p>fork()</p>
          <CodeHighlighter
            code={`// parent.js
const { fork } = require('child_process');
  
const child = fork('./child.js');
  
// Отправляем данные дочернему процессу
child.send({ hello: 'world' });
  
// Получаем ответ
child.on('message', (message) => {
  console.log('От ребенка:', message);
  child.kill();
});
  
// child.js
process.on('message', (message) => {
  console.log('Родитель сказал:', message);
  
  // Отправляем ответ
  process.send({ reply: 'Принято!' });
});`}
          />
          <p>
            <b>fork()</b> создает отдельный Node.js процесс с собственным Event
            Loop.
          </p>
          <p>IPC (Inter-Process Communication)</p>
          <CodeHighlighter
            code={`// Родитель
const child = fork('./worker.js');
  
child.send({ task: 'calculate', data: 1000 });
  
child.on('message', (result) => {
  console.log('Результат:', result);
});
  
child.on('exit', (code) => {
  console.log(\`Ребенок завершен с кодом \${code}\`);
});
  
// worker.js
process.on('message', async (msg) => {
  if (msg.task === 'calculate') {
    const result = heavyCalculation(msg.data);
    process.send({ result });
  }
});`}
          />
        </div>
      ),
    },
    Cluster: {
      get title() {
        return 'Cluster';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Cluster</b> - Позволяет создать несколько копий приложения
            (воркеров), работающих на разных ядрах CPU.
          </p>
          <table>
            <thead>
              <tr>
                <th>Проблема</th>
                <th>Решение Cluster</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Node.js однопоточный</td>
                <td>Не использует все ядра CPU</td>
              </tr>
              <tr>
                <td>1 процесс = 1 ядро</td>
                <td>Запускаем N воркеров = N ядер</td>
              </tr>
              <tr>
                <td>При падении сервер недоступен</td>
                <td>Другие воркеры продолжают работу</td>
              </tr>
            </tbody>
          </table>
          <CodeHighlighter
            code={`const cluster = require('cluster');
const http = require('http');
const os = require('os');
  
const numCPUs = os.cpus().length; // количество ядер
  
if (cluster.isMaster) {
  console.log(\`Мастер процесс \${process.pid} запущен\`);
  
  // Создаем воркеров по числу ядер
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  // При смерти воркера — перезапускаем
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Воркер \${worker.process.pid} умер. Создаем нового...\`);
    cluster.fork();
  });
  
} else {
  // Воркер — обычный HTTP сервер
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(\`Привет от воркера \${process.pid}\`);
  }).listen(3000);
  
  console.log(\`Воркер \${process.pid} запущен\`);
}`}
          />
          <table>
            <thead>
              <tr>
                <th>Особенность</th>
                <th>Пояснение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Воркеры не делят память</td>
                <td>Каждый воркер — отдельный процесс</td>
              </tr>
              <tr>
                <td>Общие данные через Redis</td>
                <td>Для кэша, сессий, счетчиков</td>
              </tr>
              <tr>
                <td>Мастер не обрабатывает запросы</td>
                <td>Только управление воркерами</td>
              </tr>
              <tr>
                <td>Автоматическая балансировка</td>
                <td>ОС распределяет соединения</td>
              </tr>
            </tbody>
          </table>
          <p>Когда использовать Cluster?</p>
          <table>
            <thead>
              <tr>
                <th>✅ Использовать</th>
                <th>❌ Не использовать</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Много независимых запросов</td>
                <td>Один глобальный кэш в памяти</td>
              </tr>
              <tr>
                <td>CPU-интенсивные задачи</td>
                <td>Веб-сокеты с состоянием</td>
              </tr>
              <tr>
                <td>Нужен высокий аптайм (перезапуск)</td>
                <td>Синглтон/блокировки</td>
              </tr>
              <tr>
                <td>Используете PM2 (вместо cluster)</td>
                <td>Маленький проект (хватит 1 процесса)</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  },
};

export default Nodejs;
