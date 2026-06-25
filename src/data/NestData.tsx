import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const Nest = {
  NestJs: {
    'NestJS что это, как подключить': {
      get title() {
        return 'NestJS что это, как подключить';
      },
      get id() {
        return slugifyText(this.title);
      },
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
              Создание всего сразу(ресурса) - <b>nest g resource users</b>
            </li>
          </ul>
        </div>
      ),
    },
    Entity: {
      get title() {
        return 'Entity';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Entity</b> - это класс, который отображает структуру таблицы базы
            данных.
          </p>
          <CodeHighlighter 
            code={`// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
  
@Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    age: number;
  
    @Column({ default: true })
    isActive: boolean;
  }`}
          />
        </div>
      ),
    },
    DTO: {
      get title() {
        return 'DTO';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>DTO</b> - это объект, который определяет как данные будут
            передаваться по сети. Он не содержит бизнес-логику, только правила
            валидации и типизации.
          </p>
          <CodeHighlighter 
            code={`// create-user.dto.ts
import { IsEmail, IsInt, IsString, Min, Max } from 'class-validator';
  
export class CreateUserDto {
  @IsString()
  name: string;
  
  @IsEmail()
  email: string;
  
  @IsInt()
  @Min(18)
  @Max(100)
  age: number;
}`}
          />
        </div>
      ),
    },
    Service: {
      get title() {
        return 'Service';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Service</b> - это класс, содержащий бизнес-логику приложения. Он
            не зависит от HTTP-контекста и может использоваться в разных частях
            приложения.
          </p>
          <CodeHighlighter 
            code={`// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
  
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {}
  
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {}
  
  async remove(id: number): Promise<void> {
}`}
          />
        </div>
      ),
    },
    Module: {
      get title() {
        return 'Module';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Module</b> - это класс, декорированный <span>@Module()</span>,
            который организует код в приложении NestJS. Он служит контейнером
            для связанных компонентов (контроллеров, провайдеров).
          </p>
          <p>Из чего состоит:</p>
          <ul>
            <li>
              <b>controllers</b> — классы, обрабатывающие HTTP-запросы.
            </li>
            <li>
              <b>providers</b> — сервисы, репозитории, фабрики (внедряются через
              DI).
            </li>
            <li>
              <b>imports</b> — список других модулей, чьи провайдеры нужны
              текущему.
            </li>
            <li>
              <b>exports</b> — какие провайдеры текущего модуля доступны для
              других модулей.
            </li>
          </ul>
          <CodeHighlighter 
            code={`@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}`}
          />
        </div>
      ),
    },
    Controller: {
      get title() {
        return 'Controller';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Controller</b> - это класс, декорированный{' '}
            <span>@Controller()</span>, который отвечает за приём HTTP-запросов
            и возврат ответов. Он работает как «маршрутизатор» в приложении.
          </p>
          <p>Основные элементы:</p>
          <ul>
            <li>
              <b>Декораторы маршрутов</b>: <span>@Get()</span>,{' '}
              <span>@Post()</span>, <span>@Put()</span>, <span>@Delete()</span>{' '}
              и т.д. — связывают метод с HTTP-методом и путём.
            </li>
            <li>
              <b>Декораторы параметров</b>: <span>@Body()</span>,{' '}
              <span>@Param()</span>, <span>@Query()</span>, <span>@Req()</span>,
              <span>@Res()</span> — извлекают данные из запроса.
            </li>
            <li>
              <b>Возврат ответа</b>: можно вернуть Promise, Observable или
              просто объект/строку (Nest сам сериализует в JSON).
            </li>
          </ul>
          <p>Зачем нужен:</p>
          <ul>
            <li>
              Обрабатывать входящие запросы по определённым маршрутам (например,
              GET /users).
            </li>
            <li>
              Валидировать входные данные (обычно через DTO + ValidationPipe).
            </li>
            <li>
              Передавать управление сервисам (бизнес-логика вынесена в
              провайдеры).
            </li>
            <li>Формировать HTTP-ответ (статус, тело, заголовки).</li>
          </ul>
          <CodeHighlighter 
            code={`import { Controller, Get, Post, Body, Param } from '@nestjs/common';
  
@Controller('users')         // базовый путь /users
export class UserController {
  @Get()                    // GET /users
  findAll() {
    return ['user1', 'user2'];
  }
  
  @Get(':id')               // GET /users/123
  findOne(@Param('id') id: string) {
    return { id, name: 'John' };
  }
  
  @Post()                   // POST /users
  create(@Body() createUserDto: CreateUserDto) {
    return { message: 'User created', data: createUserDto };
  }
}`}
          />
        </div>
      ),
    },
    ORM: {
      get title() {
        return 'ORM';
      },
      get id() {
        return slugifyText(this.title);
      },
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
      get title() {
        return 'TypeORM';
      },
      get id() {
        return slugifyText(this.title);
      },
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
          <CodeHighlighter 
            code={`// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
  
@Entity() // Указывает, что это модель таблицы
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column({ unique: true })
  email: string;
}`}
          />
          <CodeHighlighter 
            code={`// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
  
@Module({
  imports: [TypeOrmModule.forFeature([User])], // Регистрируем сущность
  providers: [UsersService],
})
export class UsersModule `}
          />
          <CodeHighlighter 
            code={`// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
  
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // Внедряем репозиторий для User
    private usersRepository: Repository<User>,
  ) {}
  
  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(userData);
    return this.usersRepository.save(newUser); // Автоматический INSERT
  }
  
  async findAll(): Promise<User[]> {
    return this.usersRepository.find(); // Автоматический SELECT *
  }
}`}
          />
        </div>
      ),
    },
    'class-validator и class-transformer': {
      get title() {
        return 'class-validator и class-transformer';
      },
      get id() {
        return slugifyText(this.title);
      },
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
          <CodeHighlighter 
            code={`import { IsString, IsEmail, IsInt, Min, Length } from 'class-validator';
import { Type, Transform } from 'class-transformer';
  
export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  @Transform(({ value }) => value.trim()) // Убираем пробелы в начале и конце
  name: string;
  
  @IsEmail()
  @Min(18)
  @Type(() => Number) // Явно преобразуем строку из запроса в число
  age: number;
}`}
          />
        </div>
      ),
    },
    'PostgreSQL установка и подключение': {
      get title() {
        return 'PostgreSQL установка и подключение';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Установка</b>: brew install postgresql@17
          </p>
          <p>
            <b>Запуск</b>: brew services start postgresql@17
          </p>
          <p>
            <b>Остановка</b>: brew services stop postgresql@17
          </p>
          <p>
            <b>Проверка статуса</b>: brew services list | grep postgresql
          </p>
          <p>Подключени:</p>
          <CodeHighlighter 
            code={`import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
  
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'kirill',
      password: 'root',
      database: 'online_store',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule {}`}
          />
        </div>
      ),
    },
    'Настройка CORS': {
      get title() {
        return 'Настройка CORS';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Подключение:</p>
          <CodeHighlighter 
            code={`import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
  
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
  
bootstrap();`}
          />
          <p>Параметры:</p>
          <ul>
            <li>
              origin: 'http://localhost:5173' - Разрешает доступ для домена.
              Можно указать массив для нескольких доменов:{' '}
              <b>['http://localhost:5173', 'http://example.com']</b>. Можно
              использовать <b>'*'</b> для разрешения всем доменам
            </li>
            <li>
              methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' - Разрешенные
              HTTP-методы
            </li>
            <li>
              credentials: true - Разрешает отправку учетных данных (cookies,
              авторизационные заголовки)
            </li>
            <li>
              allowedHeaders: 'Content-Type, Accept, Authorization' -
              Разрешенные HTTP-заголовки
            </li>
          </ul>
        </div>
      ),
    },
    Swagger: {
      get title() {
        return 'Swagger';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Swagger</b> — это набор инструментов и спецификация для описания,
            разработки и тестирования RESTful API.
          </p>
          <p>Подключение:</p>
          <CodeHighlighter 
            code={`// main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
  
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle("Online Store")
    .setDescription("Online Store Documentation")
    .setVersion("1.0.0")
    .addTag("online-store")
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/docs", app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
  
bootstrap();`}
          />
          <CodeHighlighter 
            code={`// create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
  
export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.ru',
    description: 'Email',
  })
  @IsEmail(
    {},
    {
      message: 'Wrong email',
    },
  )
  readonly email: string;
  
  @ApiProperty({
    example: '123456',
    description: 'Password',
  })
  @IsString({
    message: 'Must be string',
  })
  @MinLength(6, {
    message: 'Min length must be more or equl 6',
  })
  @MaxLength(12, {
    message: 'Max length must be less 12',
  })
  readonly password: string;
}`}
          />
        </div>
      ),
    },
    JWT: {
      get title() {
        return 'JWT';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>JWT (JSON Web Token)</b> — это "цифровой пропуск", который хранит
            данные пользователя и защищен от подделки подписью. Cостоит из трех
            частей, разделенных точками <b>.</b> <span>xxxxx.yyyyy.zzzzz</span>
          </p>
          <p>Структура JWT:</p>
          <ul>
            <li>Header</li>
            <li>Payload</li>
            <li>Signature</li>
          </ul>
          <p>Библиотеки</p>
          <ul>
            <li>
              @nestjs/jwt - Предоставляет <b>JwtService</b>, который является
              оберткой над популярной библиотекой <b>jsonwebtoken</b>. С его
              помощью мы генерируем токен при логине и можем проверить
              валидность входящего токена.
            </li>
            <li>
              passport - Предоставляет абстракции для аутентификации (например,
              через JWT, локальную форму, OAuth и т.д.).
            </li>
            <li>
              @nestjs/passport - Предоставляет декораторы (например,
              <b>@UseGuards(AuthGuard('jwt'))</b>) и утилиты для создания
              стратегий аутентификации.
            </li>
            <li>
              passport-jwt - Содержит логику того, как извлечь JWT из запроса
              (например, из заголовка Authorization) и как его
              расшифровать/проверить.{' '}
            </li>
            <li>bcrypt - Библиотека для хэширования паролей</li>
            <li>
              jwt-decode - Клиентская библиотека для декодирования JWT без
              проверки подписи
            </li>
          </ul>
        </div>
      ),
    },
    Миграция: {
      get title() {
        return 'Миграция';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>data-source.ts</b> - файл нужен для TypeORM CLI, чтобы он знал,
            как подключаться к базе и где искать entity.
          </p>
          <CodeHighlighter 
            code={`// src/data-source.ts
import { DataSource } from "typeorm";
import { config } from "dotenv";
  
config();
  
export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432")
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
  entities: ["src/**/*.entity.ts"],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
  logging: true,
});`}
          />
          <p>Важно:</p>
          <ul>
            <li>
              <b>entities: ["src/**/*.entity.ts"]</b> - подхватит все entity
              автоматически
            </li>
            <li>
              <b>synchronize: false</b> - в проде должно быть false всегда!
            </li>
          </ul>
          <p>synchronize: true vs false</p>
          <ul>
            <li>
              <b>synchronize: true</b> - Автоматом обновляет базу при изменении
              entity
            </li>
            <li>
              <b>synchronize: false</b> - Ты сам контролируешь изменения через
              миграции
            </li>
          </ul>
          <p>Команды для миграций</p>
          <CodeHighlighter 
            code={`{
  "scripts": {
    "typeorm": "ts-node ./node_modules/typeorm/cli.js",
    "migration:show": "npm run typeorm -- migration:show -d src/data-source.ts",
    "migration:generate": "npm run typeorm -- migration:generate -d src/data-source.ts",
    "migration:run": "npm run typeorm -- migration:run -d src/data-source.ts",
    "migration:revert": "npm run typeorm -- migration:revert -d src/data-source.ts",
    "migration:create": "ts-node ./node_modules/typeorm/cli.js migration:create"
  }
}`}
          />
          <ul>
            <li>
              <b>npm run migration:show</b> - Показывает статус всех миграций
            </li>
            <li>
              <b>npm run migration:generate -- src/migrations/Name</b> -
              Авто-генерация миграции (сравнивает entity с БД)
            </li>
            <li>
              <b>npm run migration:create -- src/migrations/Name</b> - Создать
              пустую миграцию (писать руками)
            </li>
            <li>
              <b>npm run migration:run</b> - Применить все невыполненные
              миграции
            </li>
            <li>
              <b>npm run migration:revert</b> - Откатить последнюю миграцию
            </li>
          </ul>
        </div>
      ),
    },
  },
};

export default Nest;
