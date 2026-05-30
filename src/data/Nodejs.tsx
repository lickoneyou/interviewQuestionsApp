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
  },
};

export default Nodejs;
