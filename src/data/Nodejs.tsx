import CodeNumber from "../components/Basic/CodeNumbers";

const Nodejs = {
  Nodejs: {
    'Основы и инициализация': {
      id: 'node-1',
      title: 'Основы и инициализация',
      jsx: (
        <div>
          <p>Создание проекта - <b>npm init</b></p>
          <p>package.json</p>
          <pre>
            <CodeNumber length={8}/>
            <code>
              <code>{'{'}</code>
              <code>{'  '}{'"name": "my-app",'}</code>
              <code>{'  '}{'"version": "1.0.0",'}</code>
              <code>{'  '}{'"main": "index.js",        // точка входа'}</code>
              <code>{'  '}{'"scripts": {'}</code>
              <code>{'    '}{'"start": "node index.js" // npm run start'}</code>
              <code>{'  '}{'}'}</code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>Запуск</p>
          <ul>
            <li>node index.js</li>
            <li>если прописан в scripts - npm run start</li>
          </ul>
        </div>
      )
    }
  }
}

export default Nodejs