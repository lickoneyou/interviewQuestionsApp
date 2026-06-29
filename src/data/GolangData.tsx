import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const Golang = {
  Golang: {
    'Переменные и константы (var, :=, const)': {
      get title() {
        return 'Переменные и константы (var, :=, const)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Синтаксис: var имя тип</p>
          <CodeHighlighter
            code={`var name string       // "": пустая строка (zero value для string)
var age int           // 0
var isActive bool     // false
var price float64     // 0.0  `}
          />
          <p>Групповое объявление</p>
          <CodeHighlighter
            code={`var (
    firstName string
    lastName  string
    salary    int
)`}
          />
          <p>Инициализация при объявлении:</p>
          <CodeHighlighter
            code={`var city string = "Moscow"
var year int = 2024`}
          />
          <hr />
          <p>Короткая форма объявления (:=)</p>
          <CodeHighlighter
            code={`city := "Moscow"
year := 2024`}
          />
          <p>Множественное присваивание:</p>
          <CodeHighlighter code={`name, age := "John", 30`} />
          <p>
            <b>Особенность</b>: если переменная уже объявлена, := нельзя
            использовать повторно.
          </p>
          <CodeHighlighter
            code={`age := 25   // OK
age := 30   // ОШИБКА: no new variables on left side of :=`}
          />
          <p>Но можно присвоить новое значение простым =:</p>
          <CodeHighlighter code={`age = 30   // OK`} />
          <hr />
          <p>Константы объявляются с помощью ключевого слова const:</p>
          <CodeHighlighter
            code={`const Pi = 3.14
const Greeting = "Hello, World!"`}
          />
          <p>Групповое объявление:</p>
          <CodeHighlighter
            code={`const (
    Pi = 3.14
    Greeting = "Hello, World!"
)`}
          />
          <hr />
          <p>Zero value (нулевое значение)</p>
          <table>
            <thead>
              <tr>
                <th>Тип</th>
                <th>Zero value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>int</td>
                <td>0</td>
              </tr>
              <tr>
                <td>string</td>
                <td>""</td>
              </tr>
              <tr>
                <td>bool</td>
                <td>false</td>
              </tr>
              <tr>
                <td>float</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>pointer, slice, map, channel, func, interface</td>
                <td>nil</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Базовые типы данных': {
      get title() {
        return 'Базовые типы данных';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <table>
            <thead>
              <tr>
                <th>ТИП</th>
                <th>ЧТО ЭТО</th>
                <th>ПРИМЕР</th>
                <th>ZERO VALUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>int</td>
                <td>
                  <b>Целое число</b>. Используйте всегда, когда нужно число без
                  запятой.
                </td>
                <td>age := 25</td>
                <td>0</td>
              </tr>
              <tr>
                <td>float64</td>
                <td>
                  <b>Число с плавающей точкой</b>. Используйте, когда нужно
                  число с запятой.
                </td>
                <td>temperature := 98.6</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>string</td>
                <td>
                  <b>Строка</b>. Используйте для хранения текста.
                </td>
                <td>name := "Alice"</td>
                <td>""</td>
              </tr>
              <tr>
                <td>bool</td>
                <td>
                  <b>Булево значение</b>. Используйте для хранения истинных или
                  ложных значений.
                </td>
                <td>isStudent := true</td>
                <td>false</td>
              </tr>
              <tr>
                <td>byte</td>
                <td>
                  <b>Байт</b>. Используйте для хранения 8-битных значений.
                </td>
                <td>data := byte(255)</td>
                <td>0</td>
              </tr>
              <tr>
                <td>rune</td>
                <td>
                  <b>Символ</b>. Используйте для хранения Unicode символов.
                </td>
                <td>char := rune('A')</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Приведение типов': {
      get title() {
        return 'Приведение типов';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <table>
            <thead>
              <tr>
                <th>ОТКУДА → КУДА</th>
                <th>СИНТАКСИС</th>
                <th>РЕЗУЛЬТАТ</th>
                <th> ПРИМЕР</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>int → float64</td>
                <td>float64(x)</td>
                <td>Дробное число</td>
                <td>float64(5) → 5.0</td>
              </tr>
              <tr>
                <td>float64 → int</td>
                <td>int(x)</td>
                <td>Дробная часть отбрасывается (НЕ округляется!)</td>
                <td>int(3.99) → 3</td>
              </tr>
              <tr>
                <td>int → string</td>
                <td>strconv.Itoa(x)</td>
                <td>Текст с числом</td>
                <td>strconv.Itoa(42) → "42"</td>
              </tr>
              <tr>
                <td>string → int</td>
                <td>strconv.Atoi(s)</td>
                <td>Число или ошибка</td>
                <td>strconv.Atoi("42") → 42, nil</td>
              </tr>
              <tr>
                <td>int → byte</td>
                <td>byte(x)</td>
                <td>Байт (0-255)</td>
                <td>byte(65) → 'A'</td>
              </tr>
              <tr>
                <td>byte → int</td>
                <td>int(b)</td>
                <td>Число</td>
                <td>int('A') → 65</td>
              </tr>
              <tr>
                <td>string → []byte</td>
                <td>[]byte(s)</td>
                <td>Срез байтов</td>
                <td>[]byte("Hi") → [72 105]</td>
              </tr>
              <tr>
                <td>[]byte → string</td>
                <td>string(b)</td>
                <td>Строка</td>
                <td>string([72 105]) → "Hi"</td>
              </tr>
              <tr>
                <td>string → []rune</td>
                <td>[]rune(s)</td>
                <td>Срез рун (символов)</td>
                <td>[]rune("Привет") → [1055 1088 ...]</td>
              </tr>
              <tr>
                <td>[]rune → string</td>
                <td>string(r)</td>
                <td>Строка</td>
                <td>string([]rune{1055}) → "П"</td>
              </tr>
              <tr>
                <td>int → int64</td>
                <td>int64(x)</td>
                <td>Просто число</td>
                <td>int64(42) → 42</td>
              </tr>
              <tr>
                <td>float32 → float64</td>
                <td>float64(x)</td>
                <td>Просто число</td>
                <td>float64(3.14) → 3.14</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Условные ветвления': {
      get title() {
        return 'Условные ветвления';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <CodeHighlighter
            code={`score := 85

if score >= 90 {
    fmt.Println("Отлично!")
} else if score >= 75 {
    fmt.Println("Хорошо")
} else if score >= 50 {
    fmt.Println("Удовлетворительно")
} else {
    fmt.Println("Не сдал")
}`}
          />
          <p>Операторы сравнения</p>
          <table>
            <thead>
              <tr>
                <th>Оператор</th>
                <th>Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>==</td>
                <td>Равно</td>
              </tr>
              <tr>
                <td>!=</td>
                <td>Не равно</td>
              </tr>
              <tr>
                <td>{'<'}</td>
                <td>Меньше</td>
              </tr>
              <tr>
                <td>{'>'}</td>
                <td>Больше</td>
              </tr>
              <tr>
                <td>{'<='}</td>
                <td>Меньше или равно</td>
              </tr>
              <tr>
                <td>{'>='}</td>
                <td>Больше или равно</td>
              </tr>
            </tbody>
          </table>
          <p>Логические операторы:</p>
          <table>
            <thead>
              <tr>
                <th>Оператор</th>
                <th>Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&&</td>
                <td>И (AND)</td>
              </tr>
              <tr>
                <td>||</td>
                <td>ИЛИ (OR)</td>
              </tr>
              <tr>
                <td>!</td>
                <td>НЕ (NOT)</td>
              </tr>
            </tbody>
          </table>
          <p>SWITCH</p>
          <CodeHighlighter 
            code={`day := "Monday"

switch day {
case "Monday":
    fmt.Println("Понедельник")
case "Tuesday":
    fmt.Println("Вторник")
case "Wednesday":
    fmt.Println("Среда")
default:
    fmt.Println("Другой день")
}`}
          />
        </div>
      ),
    },
  },
};

export default Golang;
