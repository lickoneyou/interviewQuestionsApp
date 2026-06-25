import CodeNumber from '../components/Basic/CodeNumbers';
import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const Typescript = {
  Typescript: {
    Типы: {
      get title() {
        return 'Типы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <table>
            <thead>
              <tr>
                <th>Тип</th>
                <th>Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>boolean</b>
                </td>
                <td>для определения булевого значения</td>
              </tr>
              <tr>
                <td>
                  <b>number</b>
                </td>
                <td>определяет число</td>
              </tr>
              <tr>
                <td>
                  <b>string</b>
                </td>
                <td>определяет строку</td>
              </tr>
              <tr>
                <td>
                  <b>null</b>
                </td>
                <td>определяет null</td>
              </tr>
              <tr>
                <td>
                  <b>undefined</b>
                </td>
                <td>определяет undefined</td>
              </tr>
              <tr>
                <td>
                  <b>void</b>
                </td>
                <td>для определения отсутствующих типов</td>
              </tr>
              <tr>
                <td>
                  <b>number[]</b>
                </td>
                <td>для определения массива чисел</td>
              </tr>
              <tr>
                <td>
                  <b>any</b>
                </td>
                <td>все что угодно</td>
              </tr>
              <tr>
                <td>
                  <b>ENUM</b>
                </td>
                <td>для создания именованных констант</td>
              </tr>
              <tr>
                <td>
                  <b>never</b>
                </td>
                <td>функция вызывает ошибку, бесконечный цикл</td>
              </tr>
              <tr>
                <td>
                  <b>object</b>
                </td>
                <td>для обозначения объекта</td>
              </tr>
              <tr>
                <td>
                  <b>type</b>
                </td>
                <td>для создания пользовательского типа</td>
              </tr>
              <tr>
                <td>
                  <b>unknown</b>
                </td>
                <td>
                  как <b>any</b> только требует проверок <b>typeof</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    Дженерики: {
      get title() {
        return 'Дженерики';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Дженерики</b> позволяют нам создавать повторно используемые
            компоненты, работающие с разными типами передаваемых им данных.
          </p>
        </div>
      ),
    },
    'Модификаторы доступа': {
      get title() {
        return 'Модификаторы доступа';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            В <b>Typescript</b> три модификатора доступа: <b>public</b>,{' '}
            <b>protected</b> и <b>private</b>.
          </p>
          <p>
            Если к свойствам или функциям не применяется модификатор, то такие
            свойства и функции расцениваются как будто они были определены с
            модификатором <b>public</b>.
          </p>
          <p>
            Если же к свойствам и методам применяется модификатор <b>private</b>
            , то к ним нельзя будет обратиться извне при создании объекта
            данного класса.
          </p>
          <p>
            Модификатор <b>protected</b> определяет поля и методы, которые извне
            класса видны только в классах-наследниках.
          </p>
        </div>
      ),
    },
    'Типы Утилит(Utility Types)': {
      get title() {
        return 'Типы Утилит(Utility Types)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Awaited{'<T>'}</b> - это специальный тип, который может быть
            использован для обозначения типа, который будет возвращен из
            асинхронной функции.
          </p>
          <p>
            <b>Partial{'<T>'}</b> - делает все свойства объекта типа <b>T</b>{' '}
            необязательными.
          </p>
          <p>
            <b>Required{'<T>'}</b> - делает все свойства объекта типа <b>T</b>{' '}
            обязательными.
          </p>
          <p>
            <b>Readonly{'<T>'}</b> - делает все свойства объекта типа <b>T</b>{' '}
            доступными только для чтения.
          </p>
          <p>
            <b>Record{'<Keys, Type>'}</b> - создает тип, который является
            записью с ключами, определенными в первом параметре, и значениями
            типа, определенного во втором параметре.
          </p>
          <p>
            <b>Pick{'<T, K extends keyof T>'}</b> - выбирает свойства объекта
            типа <b>T</b> с ключами, указанными в <b>K</b>.
          </p>
          <p>
            <b>Omit{'<T, K extends keyof T>'}</b> - выбирает свойства объекта
            типа <b>T</b>, исключая те, которые указаны в <b>K</b>.
          </p>
          <p>
            <b>Exclude{'<UnionType, ExcludedMembers>'}</b> - исключает
            определенные типы из объединенного типа.
          </p>
          <p>
            <b>Extract{'<Type, Union>'}</b> - извлекает из типа <b>Type</b>{' '}
            только те типы, которые присутствуют в <b>Union</b>.
          </p>
          <p>
            <b>NonNullable{'<Type>'}</b> - звлекает тип из <b>Type</b>, исключая{' '}
            <b>null</b> и <b>undefined</b>.
          </p>
          <p>
            <b>Parameters{'<Type>'}</b> - извлекает типы аргументов функции{' '}
            <b>Type</b>.
          </p>
          <p>
            <b>ConstructorParameters{'<Type>'}</b> - извлекает типы аргументов
            конструктора <b>Type</b>.
          </p>
          <p>
            <b>ReturnType{'<Type>'}</b> - извлекает тип возвращаемого значения
            функции <b>Type</b>.
          </p>
          <p>
            <b>InstanceType{'<Type>'}</b> - извлекает тип экземпляра класса{' '}
            <b>Type</b>.
          </p>
          <p>
            <b>ThisParameterType{'<Type>'}</b> - извлекает тип <b>this</b> из
            функции <b>Type</b>.
          </p>
          <p>
            <b>OmitThisParameter{'<Type>'}</b> - определяет функцию без типа{' '}
            <b>this</b>.
          </p>
          <p>
            <b>ThisType{'<Type>'}</b> - добавляет тип <b>this</b> к функции{' '}
            <b>Type</b>.
          </p>
          <p>
            <b>Uppercase{'<StringType>'}</b>, <b>Lowercase{'<StringType>'}</b>,{' '}
            <b>Capitalize{'<StringType>'}</b>,{' '}
            <b>Uncapitalize{'<StringType>'}</b> - это утилитные типы для
            манипуляции строками, которые изменяют регистр строки в соответствии
            с их именем.
          </p>
        </div>
      ),
    },
    'Narrowing (сужение типов)': {
      get title() {
        return 'Narrowing (сужение типов)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Narrowing</b> (сужение типов) - это когда переменная может
            перейти от менее точного типа к более точному, что позволяет писать
            более безопасный код, который не будет фейлится в рантайме.
          </p>
        </div>
      ),
    },
    'Преимущества interface / type': {
      get title() {
        return 'Преимущества interface / type';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <ul>
            Преимущества <b>interface</b>:
            <li>
              <b>Расширяемость</b> - интерфейс можно расширить с помощью
              ключевого слова <b>extends</b>
            </li>
            <li>
              <b>Объединение деклараций</b> - можно объединить несколько
              интерфейсов с одинаковым именем
            </li>
          </ul>
          <ul>
            Ограничения <b>interface</b>:
            <li>
              Не подходит для объявления <b>union</b> типов
            </li>
            <li>
              Не может представлять <b>примитивные типы</b>
            </li>
          </ul>
          <ul>
            Преимущества <b>type</b>:
            <li>
              <b>Гибкость</b> - позволяет определить <b>union</b> и{' '}
              <b>intersection</b> типы
            </li>
            <li>
              Поддержка <b>примитивных типов</b>
            </li>
            <li>
              Можно использовать <b>typeof</b>
            </li>
          </ul>
          <p>
            Использовать <b>interface</b> следует если вам нужно объявить тип
            объекта или класса, который будет реализовывать этот тип.
          </p>
          <p>
            Использовать <b>type</b> следует если вам нужна большая гибкость для
            создания сложных и комбинированных типов, или если тип может быть{' '}
            <b>примитивом</b>.
          </p>
        </div>
      ),
    },
    'Intersection type': {
      get title() {
        return 'Intersection type';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Intersection type</b> - тип, который создается путем объединения
            нескольких типов с использованием оператора <b>"&"</b>
          </p>
          <CodeHighlighter 
            code={`interface Named {
  name: string;
}
  
interface Aged {
  name: number;
}
  
type Person = Named & Aged;
  
let person: Person = {
   name: "Name",
   age: 30,
}`}
          />
        </div>
      ),
    },
    'Супертип/Сабдтип': {
      get title() {
        return 'Супертип/Сабдтип';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Супертип</b> - это тип, от которого наследуются другие типы{' '}
            <span>подтипы</span>.
          </p>
          <p>
            <b>Сабдтип</b> - это тип, который наследуется от другого типа.
          </p>
        </div>
      ),
    },
    Литералы: {
      get title() {
        return 'Литералы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Литералы</b> - позволяют указать конкретное значение, а не просто
            тип данных, как это делают обычные типы.
          </p>
          <CodeHighlighter 
            code={`let myString: "hello" = "hello";`}
          />
          <p>
            <b>Шаблонные литеральные типы</b>- позволяют создавать строковые
            литералы на основе других типов или значений.
          </p>
          <CodeHighlighter 
              code={`type Size = "small" | "medium" | "large";`}
            />
        </div>
      ),
    },
    'keyof/typeof': {
      get title() {
        return 'keyof/typeof';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>typeof</b> - позволяет получить тип значения во время компиляции
          </p>
          <CodeHighlighter 
            code={`let str = "hello";
let num: typeof str = "world"; // num будет иметь тип string`}
          />
          <p>
            <b>keyof</b> - возвращает объединение строковых литералов,
            представляющих ключи объекта
          </p>
          <CodeHighlighter 
            code={`interface Person {
  name: string;
  age: number;
}
  
type PersonKeys = keyof Person; // PersonKeys будет типом "name" | "age"`}
          />
        </div>
      ),
    },
    'Assertion Function with Type Guard': {
      get title() {
        return 'Assertion Function with Type Guard';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <ul>
            Assertion Function with Type Guard (утверждающая функция с
            защитником типа) — это специальная функция, которая:
            <li>Выполняет проверку типа во время выполнения</li>
            <li>
              <b>Гарантирует</b>, что после её успешного выполнения аргумент
              будет иметь определённый тип
            </li>
            <li>Если проверка не проходит — выбрасывает исключение</li>
          </ul>
          <CodeHighlighter 
            code={`interface User {
  id: string;
  name: string;
  displayName: string;
  
function assertDisplayName(user: User): asserts user is User & { displayName: string } {
  if (!('displayName' in user)) {
    throw new Error('User has no displayName property');
}
  
function logUserDisplayName(user: User) {
  assertDisplayName(user);
  
  console.log(user.displayName.toUpperCase());
}
  
const user1: User = { id: '1', name: 'Alice', displayName: 'Alice123' };
logUserDisplayName(user1); // Работает
  
const user2: User = { id: '2', name: 'Bob' };
logUserDisplayName(user2); // Выбросит ошибку: User has no displayName property`}
          />
        </div>
      ),
    },
    'Перегрузка функций': {
      get title() {
        return 'Перегрузка функций';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Перегрузка функций</b> - позволяет создавать несколько версий
            одной функции, каждая из которых принимает разные типы или
            количество аргументов, обеспечивая большую гибкость и удобство
            использования.
          </p>
          <CodeHighlighter 
            code={`function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}
  
let result1 = add(1, 2); // 3
let result2 = add("Hello, ", "world!"); // "Hello, world!"`}
          />
        </div>
      ),
    },
    'Условные типы': {
      get title() {
        return 'Условные типы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Условные типы</b> - это особенный синтаксис для работы с типами,
            позволяющий определять типы данных на основе условий.
          </p>
          <CodeHighlighter 
            code={`T extends U ? X : Y`}
          />
          <ul>
            <b>Где:</b>
            <li>
              <b>T</b> и <b>U</b> - это типы.
            </li>
            <li>
              <b>extends</b> - оператор, проверяющий, можно ли присвоить{' '}
              <b>T</b> типу <b>U</b>.
            </li>
            <li>
              <b>?</b> и <b>:</b> - тернарный оператор, определяющий результат.
            </li>
            <li>
              <b>X</b> - тип, который будет возвращен, если <b>T</b> extends{' '}
              <b>U</b> истинно.
            </li>
            <li>
              <b>Y</b> - тип, который будет возвращен, если <b>T</b> extends{' '}
              <b>U</b> ложно.
            </li>
          </ul>
        </div>
      ),
    },
    infer: {
      get title() {
        return 'infer';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>infer</b> работает в связке с условными типами, которые позволяют
            создавать типы, зависящие от других типов.
          </p>
          <p>
            Когда вы используете <b>infer</b> в условном типе, TypeScript
            пытается вывести конкретный тип из заданного типа. Например, если вы
            работаете с массивом, <b>infer</b> может вывести тип элементов
            массива.
          </p>
          <CodeHighlighter 
            code={`type ElementType<T> = T extends (infer U)[] ? U : T;
  
type Arr = numbe[];
type Num = ElementType<Arr>; //  Num будет number
  
type Str = ElementType<string>; // Str будет string`}
          />
        </div>
      ),
    },
    'Рекурсивные типы': {
      get title() {
        return 'Рекурсивные типы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Рекурсивные типы</b> позволяют описывать типы, которые ссылаются
            на самих себя в своем определении, это достигается путем
            использования типа внутри его собственного определения, что
            позволяет TypeScript обрабатывать сложные вложенные структуры
          </p>
          <CodeHighlighter 
            code={`type NestedValue = {
  value: string;
  next?: NestedValue;
};
  
const list: NestedValue = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c'
    }
  }
};`}
          />
        </div>
      ),
    },
  },
};

export default Typescript;
