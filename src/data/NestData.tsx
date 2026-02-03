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
    TypeORM: {
      id: '106',
      title: 'TypeORM',
      jsx: (
        <div>
          <p>
            <b>TypeORM</b> - это одна из ведущих ORM для TypeScript и Node.js
          </p>
          <p>Особенности</p>
          <ul>
            <li>
              Поддержка TypeScript: Типы сущностей (Entity) и репозиториев
              (Repository) тесно интегрированы, что даёт лучшую
              автодополняемость и безопасность типов
            </li>
            <li>
              Два паттерна: Поддерживает как Data Mapper (работа через
              репозиторий), так и Active Record (методы прямо в сущности)
            </li>
            <li>
              Декларативный стиль: Структура таблиц описывается через декораторы
              (@Entity(), @Column()), что делает код очень читаемым
            </li>
          </ul>
          <p>Реализация:</p>
          <pre>
            <CodeNumber length={14} />
            <code>
              <code className='comment'>{'// user.entity.ts'}</code>
              <code>{`import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';`}</code>
              <code>{'  '}</code>
              <code>{'@Entity() // Указывает, что это модель таблицы'}</code>
              <code>{'export class User {'}</code>
              <code>{'  '}@PrimaryGeneratedColumn()</code>
              <code>{'  '}id: number;</code>
              <code>{'  '}</code>
              <code>{'  '}@Column()</code>
              <code>{'  '}name: string;</code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'@Column({ unique: true })'}
              </code>
              <code>{'  '}email: string;</code>
              <code>{'}'}</code>
            </code>
          </pre>
          <pre>
            <CodeNumber length={11} />
            <code>
              <code className='comment'>{'// users.module.ts'}</code>
              <code>{`import { Module } from '@nestjs/common';`}</code>
              <code>{`import { TypeOrmModule } from '@nestjs/typeorm';`}</code>
              <code>{`import { User } from './user.entity';`}</code>
              <code>{`import { UsersService } from './users.service';`}</code>
              <code>{'  '}</code>
              <code>{'@Module({'}</code>
              <code>
                {'  '}
                {
                  'imports: [TypeOrmModule.forFeature([User])], // Регистрируем сущность'
                }
              </code>
              <code>{'  '}providers: [UsersService],</code>
              <code>{'})'}</code>
              <code>export class UsersModule {}</code>
            </code>
          </pre>
          <pre>
            <CodeNumber length={22} />
            <code>
              <code className='comment'>{'// users.service.ts'}</code>
              <code>{`import { Injectable } from '@nestjs/common';`}</code>
              <code>{`import { InjectRepository } from '@nestjs/typeorm';`}</code>
              <code>{`import { Repository } from 'typeorm';`}</code>
              <code>{`import { User } from './user.entity';`}</code>
              <code>{'  '}</code>
              <code>@Injectable()</code>
              <code>{'export class UsersService {'}</code>
              <code>
                {'  '}
                {'constructor('}
              </code>
              <code>
                {'    '}
                {'@InjectRepository(User) // Внедряем репозиторий для User'}
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
                {'async create(userData: Partial<User>): Promise<User> {'}
              </code>
              <code>
                {'    '}
                {'const newUser = this.usersRepository.create(userData);'}
              </code>
              <code>
                {'    '}
                {
                  'return this.usersRepository.save(newUser); // Автоматический INSERT'
                }
              </code>
              <code>
                {'  '}
                {'}'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'async findAll(): Promise<User[]> {'}
              </code>
              <code>
                {'    '}
                {
                  'return this.usersRepository.find(); // Автоматический SELECT *'
                }
              </code>
              <code>
                {'  '}
                {'}'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'class-validator и class-transformer': {
      id: '107',
      title: 'class-validator и class-transformer',
      jsx: (
        <div>
          <p>
            <b>class-validator</b> и <b>class-transformer</b> используются
            вместе для валидации и преобразования входящих данных (например,
            тела запроса, параметров) в удобные для работы объекты DTO (Data
            Transfer Object). Этот подход обеспечивает безопасность и
            целостность данных на уровне контроллера.
          </p>
          <p>class-validator</p>
          <ul>
            <li>
              <b>Основная задача</b>: Проверка данных (валидация). Декораторы
              накладывают правила на поля DTO.
            </li>
            <li>
              <b>Пример</b>: @IsString(), @IsNumber(), @IsEmail(), @MinLength(8)
            </li>
          </ul>
          <p>class-transformer</p>
          <ul>
            <li>
              <b>Основная задача</b>: Преобразование данных. Превращает сырые
              данные из запроса в экземпляр класса DTO. Также преобразует типы
              (строку в число, массив строк в массив объектов и т.д.).
            </li>
            <li>
              <b>Пример</b>:{' '}
              {'@Type(() => Number), @Transform(({ value }) => value.trim())'}
            </li>
          </ul>
          <p>ValidationPipe</p>
          <ul>
            <li>
              <b>Основная задача</b>: Связующее звено. Активирует работу обеих
              библиотек. Используется глобально или на уровне контроллера.
            </li>
            <li>
              <b>Пример</b>:{' '}
              {'app.useGlobalPipes(new ValidationPipe({ transform: true }))'}
            </li>
          </ul>
          <pre>
            <CodeNumber length={14}/>
            <code>
              <code>{`import { IsString, IsEmail, IsInt, Min, Length } from 'class-validator';`}</code>
              <code>{`import { Type, Transform } from 'class-transformer';`}</code>
              <code>{'  '}</code>
              <code>{'export class CreateUserDto {'}</code>
              <code>{'  '}@IsString()</code>
              <code>{'  '}@Length(2, 30)</code>
              <code>{'  '}{`@Transform(({ value }) => value.trim()) // Убираем пробелы в начале и конце`}</code>
              <code>{'  '}name: string;</code>
              <code>{'  '}</code>
              <code>{'  '}@IsEmail()</code>
              <code>{'  '}@Min(18)</code>
              <code>{'  '}{`@Type(() => Number) // Явно преобразуем строку из запроса в число`}</code>
              <code>{'  '}age: number;</code>
              <code>{'}'}</code>
            </code>
          </pre>
        </div>
      ),
    },
  },
};

export default Nest;
