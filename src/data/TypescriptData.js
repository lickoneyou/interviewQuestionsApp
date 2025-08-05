const Typescript = {
  Typescript: {
    Типы: {
      id: '71',
      title: 'Типы',
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
                <td>как <b>any</b> только требует проверок <b>typeof</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    Дженерики: {
      id: '72',
      title: 'Дженерики',
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
      id: '73',
      title: 'Модификаторы доступа',
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
      id: '74',
      title: 'Типы Утилит(Utility Types)',
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
      id: '75',
      title: 'Narrowing (сужение типов)',
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
      id: '76',
      title: 'Преимущества interface / type',
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
      id: '77',
      title: 'Intersection type',
      jsx: (
        <div>
          <p><b>Intersection type</b> - тип, который создается путем объединения нескольких типов с использованием оператора <b>"&"</b></p>
           <pre>
            <div className="numbers">
              <code className="codeNumber">1</code>
              <code className="codeNumber">2</code>
              <code className="codeNumber">3</code>
              <code className="codeNumber">4</code>
              <code className="codeNumber">5</code>
              <code className="codeNumber">6</code>
              <code className="codeNumber">7</code>
              <code className="codeNumber">8</code>
              <code className="codeNumber">9</code>
              <code className="codeNumber">10</code>
              <code className="codeNumber">11</code>
              <code className="codeNumber">12</code>
              <code className="codeNumber">13</code>
              <code className="codeNumber">14</code>
            </div>
            <code>
              <code>
                <b>interface</b> Named {'{'}
              </code>
              <code>
                {'  '}name: <b>string</b>;
              </code>
              <code>
                {'}'}
              </code>
              <code>
                {'  '}
              </code>
              <code>
                <b>interface</b> Aged {'{'}
              </code>
              <code>
                {'  '}name: <b>number</b>;
              </code>
              <code>
                {'}'}
              </code>
              <code>
                {'  '}
              </code>
              <code><b>type</b> Person = Named & Aged;</code>
              <code>
                {'  '}
              </code>
              <code>
                <b>let</b> person: Person = {'{'}
              </code>
              <code>{'  '} name: "Name",</code>
              <code>{'  '} age: 30,</code>
              <code>{'}'}</code>
            </code>
           </pre>
        </div>
      )
    },
    'Супертип/Сабдтип': {
      id: '78',
      title: 'Супертип/Сабдтип',
      jsx: (
        <div>
          <p><b>Супертип</b> - это тип, от которого наследуются другие типы <span>подтипы</span>.</p>
          <p><b>Сабдтип</b> - это тип, который наследуется от другого типа.</p>
        </div>
      )
    },
    'Литералы': {
      id: '79',
      title: 'Литералы',
      jsx: (
        <div>
          <p><b>Литералы</b> - позволяют указать конкретное значение, а не просто тип данных, как это делают обычные типы.</p>
          <pre>
            <div className="numbers">
              <code className="codeNumber">1</code>
            </div>
            <code>
              <code>let <b>myString</b>: "hello" = "hello";</code>
            </code>
          </pre>
          <p><b>Шаблонные литеральные типы</b>- позволяют создавать строковые литералы на основе других типов или значений.</p>
          <pre>
            <div className="numbers">
              <code className="codeNumber">1</code>
            </div>
            <code>
              <code><b>type</b> Size = "small" | "medium" | "large";</code>
            </code>
          </pre>
        </div>
      )
    },
    'keyof/typeof': {
      id: '710',
      title: 'keyof/typeof',
      jsx: (
        <div>
          <p><b>typeof</b> - позволяет получить тип значения во время компиляции</p>
          <pre>
           <div className="numbers">
            <code className="codeNumber">1</code>
            <code className="codeNumber">2</code>
           </div>
           <code>
            <code>
              <b>let</b> str = "hello";
            </code>
            <code>
              <b>let</b> num: <b>typeof</b> str = "world"; // num будет иметь тип string
            </code>
           </code>
          </pre>
          <p><b>keyof</b> - возвращает объединение строковых литералов, представляющих ключи объекта</p>
          <pre>
            <div className="numbers">
              <code className="codeNumber">1</code>
              <code className="codeNumber">2</code>
              <code className="codeNumber">3</code>
              <code className="codeNumber">4</code>
              <code className="codeNumber">5</code>
              <code className="codeNumber">6</code>
            </div>
            <code>
              <code>
                <b>interface</b> Person {'{'}
              </code>
              <code>
                {'  '}name: <b>string</b>;
              </code>
              <code>
                {'  '}age: <b>number</b>;
              </code>
              <code>
                {'}'}
              </code>
              <code>
                {'  '}
              </code>
              <code><b>type</b> PersonKeys = <b>keyof</b> Person; // PersonKeys будет типом "name" | "age"</code>
            </code>
          </pre>
        </div>
      )
    },
    'Assertion Function with Type Guard': {
      id: '711',
      title: 'Assertion Function with Type Guard',
      jsx: (
        <div>
          <ul>
            Assertion Function with Type Guard (утверждающая функция с защитником типа) — это специальная функция, которая:
            <li>Выполняет проверку типа во время выполнения</li>
            <li><b>Гарантирует</b>, что после её успешного выполнения аргумент будет иметь определённый тип</li>
            <li>Если проверка не проходит — выбрасывает исключение</li>
          </ul>
          <pre>
          <div className="numbers">
              <code className="codeNumber">1</code>
              <code className="codeNumber">2</code>
              <code className="codeNumber">3</code>
              <code className="codeNumber">4</code>
              <code className="codeNumber">5</code>
              <code className="codeNumber">6</code>
              <code className="codeNumber">7</code>
              <code className="codeNumber">8</code>
              <code className="codeNumber">9</code>
              <code className="codeNumber">10</code>
              <code className="codeNumber">11</code>
              <code className="codeNumber">12</code>
              <code className="codeNumber">13</code>
              <code className="codeNumber">14</code>
              <code className="codeNumber">15</code>
              <code className="codeNumber">16</code>
              <code className="codeNumber">17</code>
              <code className="codeNumber">18</code>
              <code className="codeNumber">19</code>
              <code className="codeNumber">20</code>
              <code className="codeNumber">21</code>
            </div>
            <code>
              <code>
                <b>interface</b> User {'{'}
              </code>
              <code>
              {'  '}id: <b>string</b>;
              </code>
              <code>
              {'  '}name: <b>string</b>;
              </code>
              <code>
              {'  '}displayName: <b>string</b>;
              </code>
              <code>{'  '}</code>
              <code>
                <b>function</b> assertDisplayName(user: <b>User</b>): <b>asserts</b> user <b>is</b> User <b>&</b> {'{'} displayName: <b>string</b> {'}'} {'{'}
              </code>
              <code>
              {'  '}<b>if</b> (<b>!</b>('displayName' <b>in</b> user)) {'{'}
              </code>
              <code>{'    '}<b>throw new</b> Error('User has no displayName property');
              </code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code><b>function</b> logUserDisplayName(user: <b>User</b>) {'{'}
              </code>
              <code>
                {'  '}<b>assertDisplayName</b>(user);
              </code>
              <code>{'  '}</code>
              <code>
              {'  '}<b>console.log</b>(user.displayName.<b>toUpperCase()</b>);
              </code>
              <code>
              {'}'}
              </code>
              <code>{'  '}</code>
              <code><b>const</b> user1: User = {'{'} id: '1', name: 'Alice', displayName: 'Alice123' {'}'};
              </code>
              <code>
                <b>logUserDisplayName</b>(user1); // Работает
              </code>
              <code>{'  '}</code>
              <code>
              <b>const</b> user2: User = {'{'} id: '2', name: 'Bob' {'}'};
              </code>
              <code><b>logUserDisplayName</b>(user2); // Выбросит ошибку: User has no displayName property
              </code>
            </code>
          </pre>
        </div>
      )
    },
    'Перегрузка функций': {
      id: '712',
      title: 'Перегрузка функций',
      jsx: (
        <div>
        <p><b>Перегрузка функций</b> - позволяет создавать несколько версий одной функции, каждая из которых принимает разные типы или количество аргументов, обеспечивая большую гибкость и удобство использования.</p>
        <pre>
          <div className="numbers">
            <code className="codeNumber">1</code>
            <code className="codeNumber">2</code>
            <code className="codeNumber">3</code>
            <code className="codeNumber">4</code>
            <code className="codeNumber">5</code>
            <code className="codeNumber">6</code>
            <code className="codeNumber">7</code>
            <code className="codeNumber">8</code>
          </div>
          <code>
            <code><b>function</b> add(a: <b>number</b>, b: <b>number</b>): <b>number</b>;
            </code>
            <code><b>function</b> add(a: <b>string</b>, b: <b>string</b>): <b>string</b>;
            </code>
            <code><b>function</b> add(a: <b>any</b>, b: <b>any</b>): <b>any</b> {'{'}
            </code>
            <code>{'  '} <b>return</b> a + b;</code>
            <code>{'}'}</code>
            <code>{'  '}</code>
            <code><b>let</b> result1 = add(1, 2); {'// 3'}</code>
            <code><b>let</b> result2 = add("Hello, ", "world!"); {'// "Hello, world!"'}</code>
          </code>
        </pre>
        </div>
      )
    },
    'Условные типы': {
      id: '713',
      title: 'Условные типы',
      jsx: (
        <div>
          <p><b>Условные типы</b> - это особенный синтаксис для работы с типами, позволяющий определять типы данных на основе условий.</p>
           <pre>
            <div className="numbers">
              <code className="codeNumber">1</code>
            </div>
            <code>
              <code>T <b>extends</b> U ? X : Y</code>
            </code>
           </pre>
           <ul>
            <b>Где:</b>
            <li><b>T</b> и <b>U</b> - это типы.</li>
            <li><b>extends</b> - оператор, проверяющий, можно ли присвоить <b>T</b> типу <b>U</b>.</li>
            <li><b>?</b> и <b>:</b> - тернарный оператор, определяющий результат.</li>
            <li><b>X</b> - тип, который будет возвращен, если <b>T</b> extends <b>U</b> истинно.</li>
            <li><b>Y</b> - тип, который будет возвращен, если <b>T</b> extends <b>U</b> ложно.</li>
           </ul>
        </div>
      )
    }
  },
}

export default Typescript
