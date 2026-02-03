import CodeNumber from '../components/Basic/CodeNumbers';

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
            <CodeNumber length={20} />
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
    DTO: {
      id: '103',
      title: 'DTO',
      jsx: (
        <div>
          <p>
            <b>DTO</b> - это объект, который определяет как данные будут
            передаваться по сети. Он не содержит бизнес-логику, только правила
            валидации и типизации.
          </p>
          <pre>
            <CodeNumber length={15} />
            <code>
              <code className='comment'>{'// create-user.dto.ts'}</code>
              <code>{`import { IsEmail, IsInt, IsString, Min, Max } from 'class-validator';`}</code>
              <code>{'  '}</code>
              <code>{'export class CreateUserDto {'}</code>
              <code>
                {'  '}
                {'@IsString()'}
              </code>
              <code>
                {'  '}
                {'name: string;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'@IsEmail()'}
              </code>
              <code>
                {'  '}
                {'email: string;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'@IsInt()'}
              </code>
              <code>
                {'  '}
                {'@Min(18)'}
              </code>
              <code>
                {'  '}
                {'@Max(100)'}
              </code>
              <code>
                {'  '}
                {'age: number;'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    Service: {
      id: '104',
      title: 'Service',
      jsx: (
        <div>
          <p>
            <b>Service</b> - это класс, содержащий бизнес-логику приложения. Он
            не зависит от HTTP-контекста и может использоваться в разных частях
            приложения.
          </p>
          <pre>
            <CodeNumber length={21} />
            <code>
              <code className='comment'>{'// users.service.ts'}</code>
              <code>{`import { Injectable } from '@nestjs/common';`}</code>
              <code>{`import { InjectRepository } from '@nestjs/typeorm';`}</code>
              <code>{`import { Repository } from 'typeorm';`}</code>
              <code>{`import { User } from './user.entity';`}</code>
              <code>{`import { CreateUserDto } from './dto/create-user.dto';`}</code>
              <code>{`import { UpdateUserDto } from './dto/update-user.dto';`}</code>
              <code>{'  '}</code>
              <code>{'@Injectable()'}</code>
              <code>{'export class UsersService {'}</code>
              <code>
                {'  '}
                {'constructor('}
              </code>
              <code>
                {'    '}
                {'@InjectRepository(User)'}
              </code>
              <code>
                {'    '}
                {'private usersRepository: Repository<User>,'}
              </code>
              <code>
                {'  '}
                {') {}'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'async create(createUserDto: CreateUserDto): Promise<User> {}'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {
                  'async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {}'
                }
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'async remove(id: number): Promise<void> {'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    ORM: {
      id: '105',
      title: 'ORM',
      jsx: (
        <div>
          <p>
            <b>ORM</b> позволяет работать с объектами и классами в вашем коде, в
            то время как система сама заботится о том, как эти объекты
            превращаются в строки и колонки в базе данных.
          </p>
          <p>Преимущества:</p>
          <ul>
            <li>
              Ускорение разработки: Снижает количество кода и автоматизирует
              рутинные CRUD-запросы
            </li>
            <li>
              Абстракция от cистемs управления базами данных (СУБД): Легко
              сменить базу данных (PostgreSQL, MySQL), изменив только настройки
            </li>
            <li>
              Безопасность: Автоматическое экранирование данных защищает от
              SQL-инъекций
            </li>
            <li>
              Удобство работы: Встроенные функции для связей, транзакций,
              миграций и кэширования
            </li>
          </ul>
          <p>Недостатки:</p>
          <ul>
            <li>
              Накладные расходы: Сложные запросы могут работать медленнее
              ручного SQL
            </li>
            <li>
              Кривая обучения: Требует времени на освоение специфики фреймворка
            </li>
            <li>
              «Магия» под капотом: Бывает сложно понять, какой SQL сгенерируется
              и как его оптимизировать
            </li>
            <li>
              Проблема N+1: При неверной настройке ORM может выполнить множество
              лишних запросов
            </li>
          </ul>
        </div>
      ),
    },
  },
};

export default Nest;
