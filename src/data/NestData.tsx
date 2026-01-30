const Nest = {
  NestJs: {
    'NestJS что это, как подключить': {
      id: '101',
      title: 'NestJS что это, как подключить',
      jsx: (
        <div>
          <p>
            <b>NestJS</b> — это фреймворк для создания серверных приложений на
            платформе Node.js.
          </p>
          <p>Основные характеристики:</p>
          <ul>
            <li>
              <b>Модульность</b> - Приложение строится из модулей{' '}
              <b>(@Module())</b>, которые организуют связанные компоненты
            </li>
            <li>
              <b>Контроллеры</b> - Контроллеры <b>(@Controller())</b>{' '}
              обрабатывают HTTP-запросы и определяют маршруты API с помощью
              декораторов <b>(@Get(), @Post())</b>
            </li>
            <li>
              <b>Сервисы</b> - Бизнес-логика инкапсулируется в сервисах{' '}
              <b>(@Injectable())</b>
            </li>
            <li>
              <b>Другие ключевые компоненты</b> - Посредники <b>(Middleware)</b>
              , охранники <b>(Guards)</b> для авторизации, перехватчики{' '}
              <b>(Interceptors)</b> и каналы <b>(Pipes)</b> для преобразования и
              валидации данных
            </li>
          </ul>
          <p>Особенности:</p>
          <ul>
            <li>Встроенная поддержка микросервисов, GraphQL и WebSockets</li>
            <li>Автогенерация документации API (Swagger/OpenAPI)</li>
            <li>Строгая типизация TypeScript снижает количество ошибок</li>
          </ul>
          <p>Как начать:</p>
          <ul>
            <li>
              Установите NestJS CLI: <b>npm i -g @nestjs/cli</b>
            </li>
          </ul>
          <p>Создание проекта и модулей:</p>
          <ul>
            <li>
              Создание проекта - <b>nest new my-project</b>
            </li>
            <li>
              Создание контроллера - <b>nest g co users</b>
            </li>
            <li>
              Создание сервиса - <b>nest g s users</b>
            </li>
            <li>
              Создание модуля - <b>nest g mo users</b>
            </li>
            <li>
              Создание всего сразу(ресурса) - <b>nest g mo users</b>
            </li>
          </ul>
        </div>
      ),
    },
    Entity: {
      id: '102',
      title: 'Entity',
      jsx: (
        <div>
          <p>
            <b>Entity</b> - это класс, который отображает структуру таблицы базы
            данных.
          </p>
          <pre>
            <div className='numbers'>
              <code className='codeNumber'>1</code>
              <code className='codeNumber'>2</code>
              <code className='codeNumber'>3</code>
              <code className='codeNumber'>4</code>
              <code className='codeNumber'>5</code>
              <code className='codeNumber'>6</code>
              <code className='codeNumber'>7</code>
              <code className='codeNumber'>8</code>
              <code className='codeNumber'>9</code>
              <code className='codeNumber'>10</code>
              <code className='codeNumber'>11</code>
              <code className='codeNumber'>12</code>
              <code className='codeNumber'>13</code>
              <code className='codeNumber'>14</code>
              <code className='codeNumber'>15</code>
              <code className='codeNumber'>16</code>
              <code className='codeNumber'>17</code>
              <code className='codeNumber'>18</code>
              <code className='codeNumber'>19</code>
              <code className='codeNumber'>20</code>
            </div>
            <code>
              <code>{'// user.entity.ts'}</code>
              <code>{`import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';`}</code>
              <code>{'  '}</code>
              <code>{'@Entity()'}</code>
              <code>
                {'  '}
                {`export class User {`}
              </code>
              <code>
                {'    '}
                {'@PrimaryGeneratedColumn()'}
              </code>
              <code>
                {'    '}
                {'id: number;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {'@Column()'}
              </code>
              <code>
                {'    '}
                {'name: string;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {'@Column({ unique: true })'}
              </code>
              <code>
                {'    '}
                {'email: string;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {'@Column()'}
              </code>
              <code>
                {'    '}
                {'age: number;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'    '}
                {'@Column({ default: true })'}
              </code>
              <code>
                {'    '}
                {'isActive: boolean;'}
              </code>
              <code>
                {'  '}
                {'}'}
              </code>
            </code>
          </pre>
        </div>
      ),
    },
  },
};

export default Nest;
