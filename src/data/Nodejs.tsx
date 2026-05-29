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
  },
};

export default Nodejs;
