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
    Циклы: {
      get title() {
        return 'Циклы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>FOR</p>
          <CodeHighlighter
            code={`for i := 0; i < 5; i++ {
    fmt.Println(i) // 0, 1, 2, 3, 4
}`}
          />
          <p>В Go можно опустить любую часть for:</p>
          <CodeHighlighter
            code={`// Как while (условие)
x := 0
for x < 5 {
    fmt.Println(x) // 0, 1, 2, 3, 4
    x++
}

// Бесконечный цикл (как while true)
for {
    fmt.Println("Бесконечность")
    break // Выход
}`}
          />
          <p>
            Самый частый способ перебора массивов, слайсов, мап и строк:{' '}
            <b>FOR RANGE</b>
          </p>
          <CodeHighlighter
            code={`nums := []int{10, 20, 30, 40}

for i, val := range nums {
    fmt.Printf("Индекс %d, Значение %d\n", i, val)
}
// Индекс 0, Значение 10
// Индекс 1, Значение 20
// Индекс 2, Значение 30
// Индекс 3, Значение 40`}
          />
          <h2>BREAK И CONTINUE</h2>
          <CodeHighlighter
            code={`// break - выход из цикла
for i := 0; i < 10; i++ {
    if i == 5 {
        break // Выход при i == 5
    }
    fmt.Println(i) // 0, 1, 2, 3, 4
}

// continue - пропуск итерации
for i := 0; i < 10; i++ {
    if i%2 == 0 {
        continue // Пропускаем четные
    }
    fmt.Println(i) // 1, 3, 5, 7, 9
}`}
          />
        </div>
      ),
    },
    Функции: {
      get title() {
        return 'Функции';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>ОБЪЯВЛЕНИЕ ФУНКЦИИ</p>
          <CodeHighlighter
            code={`// Простая функция
func greet() {
    fmt.Println("Привет!")
}

// С одним параметром
func greetName(name string) {
    fmt.Println("Привет,", name)
}

// С одним возвращаемым значением
func add(a int, b int) int {
    return a + b
}

// Сокращенная запись для одинаковых типов
func add(a, b int) int {
    return a + b
}`}
          />
          <p>НЕСКОЛЬКО ВОЗВРАЩАЕМЫХ ЗНАЧЕНИЙ</p>
          <CodeHighlighter
            code={`// Возвращаем два значения
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("деление на ноль")
    }
    return a / b, nil
}

// Использование
result, err := divide(10, 2)
if err != nil {
    fmt.Println("Ошибка:", err)
} else {
    fmt.Println("Результат:", result)
}

// Можно игнорировать одно из значений через _
result, _ := divide(10, 2) // Игнорируем ошибку (НО ТАК НЕ ДЕЛАЙТЕ!)`}
          />
          <p>ИМЕНОВАННЫЕ ВОЗВРАЩАЕМЫЕ ЗНАЧЕНИЯ</p>
          <CodeHighlighter
            code={`// Объявляем имена переменных для возврата
func getCoordinates() (x, y int) {
    x = 10
    y = 20
    return // "Голый" return - вернет x и y
}

// Использование
x, y := getCoordinates()
fmt.Println(x, y) // 10, 20`}
          />
          <p>ВАРИАДИЧЕСКИЕ ФУНКЦИИ (ПЕРЕМЕННОЕ ЧИСЛО ПАРАМЕТРОВ)</p>
          <CodeHighlighter
            code={`// Сумма любого количества чисел
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

fmt.Println(sum(1, 2, 3))       // 6
fmt.Println(sum(10, 20, 30, 40)) // 100

// Передача слайса в вариадическую функцию
numbers := []int{1, 2, 3, 4}
fmt.Println(sum(numbers...)) // 10 (разворачиваем слайс)`}
          />
          <p>ОТЛОЖЕННЫЙ ВЫЗОВ</p>
          <CodeHighlighter
            code={`func readFile() {
    file := openFile()
    defer file.Close() // Закроется в конце функции
    
    // Работаем с файлом...
    // file.Close() вызовется автоматически
}`}
          />
        </div>
      ),
    },
    defer: {
      get title() {
        return 'defer';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>defer</b> — это отложенный вызов функции. Функция выполнится в
            самом конце, перед выходом из текущей функции, даже если произошла
            ошибка или паника.
          </p>
          <h2>Синтаксис</h2>
          <CodeHighlighter
            code={`func main() {
    fmt.Println("1. Старт")
    
    defer fmt.Println("3. Выполнится последним")
    
    fmt.Println("2. Конец")
}

// Вывод:
// 1. Старт
// 2. Конец
// 3. Выполнится последнимs`}
          />
          <h2>ГДЕ ПРИМЕНЯЕТСЯ</h2>
          <ul>
            <li>
              <h3>Закрытие ресурсов</h3>
              <CodeHighlighter
                code={`func readFile() {
    file, err := os.Open("data.txt")
    if err != nil {
        return
    }
    defer file.Close() // Закроется в конце функции
    // Работаем с файлом...
    // Когда функция закончится, file.Close() вызовется автоматически
}`}
              />
            </li>
            <li>
              <h2>Освобождение блокировок</h2>
              <CodeHighlighter
                code={`func updateData() {
    mu.Lock()
    defer mu.Unlock() // Разблокируется в конце
    // Критическая секция
}`}
              />
            </li>
            <li>
              <h3>Закрытие соединений с БД</h3>
              <CodeHighlighter
                code={`func getUsers() {
    db, err := sql.Open("postgres", "...")
    if err != nil {
        return
    }
    defer db.Close() // Закроется в конце
    // Работаем с БД
}`}
              />
            </li>
          </ul>
          <p>
            Выполняются <span>в обратном порядке</span> (LIFO — Last In First
            Out):
          </p>
          <CodeHighlighter
            code={`func main() {
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    fmt.Println("Основной код")
}

// Вывод:
// Основной код
// 3
// 2
// 1`}
          />
        </div>
      ),
    },
    Указатели: {
      get title() {
        return 'Указатели';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Указатели</b> — это переменные, которые хранят адрес другой
            переменной.
          </p>
          <p>Обозначения:</p>
          <ul>
            <li>
              <b>&</b> — оператор взятия адреса
            </li>
            <li>
              <b>*</b> - оператор разыменования
            </li>
            <li>
              <b>*T</b> — тип "указатель на T"
            </li>
          </ul>
          <h2>СИНТАКСИС</h2>
          <CodeHighlighter
            code={`// Обычная переменная
x := 42

// Указатель на x (сохраняем адрес x)
p := &x

// Разыменование (читаем значение по адресу)
fmt.Println(*p) // 42

// Изменяем значение через указатель
*p = 100
fmt.Println(x) // 100 (изменилось!)`}
          />
          <h2>ОБЪЯВЛЕНИЕ УКАЗАТЕЛЕЙ</h2>
          <CodeHighlighter
            code={`// Нулевой указатель (nil)
var p *int // nil (ни на что не указывает)

// Создание указателя на существующую переменную
x := 10
p = &x

// Создание указателя через new() (выделяет память с нулевым значением)
p2 := new(int) // *int, указывает на 0
*p2 = 42       // Теперь там 42`}
          />
          <h2>Где применяется</h2>
          <ul>
            <li>
              <h3>Изменение переменной внутри функции</h3>
              <CodeHighlighter
                code={`// БЕЗ указателя (передача по значению)
func changeValue(x int) {
    x = 100 // Изменяет копию
}

a := 5
changeValue(a)
fmt.Println(a) // 5 (не изменилось!)

// С указателем (передача по ссылке)
func changeValuePtr(x *int) {
    *x = 100 // Изменяет оригинал
}

b := 5
changeValuePtr(&b) // Передаем адрес
fmt.Println(b) // 100 (изменилось!)`}
              />
            </li>
            <li>
              <h3>Экономия памяти</h3>
              <CodeHighlighter
                code={`type BigStruct struct {
    Data [1000000]int
}

// Копирует 1 миллион элементов! (медленно)
func processByValue(data BigStruct) { }

// Копирует только адрес (быстро)
func processByPointer(data *BigStruct) { }`}
              />
            </li>
            <li>
              <h3>Nil (значение "ничего")</h3>
              <CodeHighlighter
                code={`func findUser(id int) *User {
    if id < 0 {
        return nil // "пользователь не найден"
    }
    return &User{ID: id}
}

user := findUser(-1)
if user == nil {
    fmt.Println("Пользователь не найден")
}`}
              />
            </li>
          </ul>
          <h2>НЮАНСЫ РАЗЫМЕНОВАНИЯ</h2>
          <CodeHighlighter
            code={`var p *int // nil

// ОШИБКА: panic: runtime error: invalid memory address
// fmt.Println(*p)

// ПРАВИЛЬНО:
if p != nil {
    fmt.Println(*p)
} else {
    fmt.Println("Указатель пуст")
}`}
          />
          <h2>УКАЗАТЕЛИ VS ЗНАЧЕНИЯ</h2>
          <table>
            <thead>
              <tr>
                <th>СИТУАЦИЯ</th>
                <th>ИСПОЛЬЗУЙТЕ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Нужно изменить оригинал</td>
                <td>Указатель</td>
              </tr>
              <tr>
                <td>Большие структуры ({'>'} 64 байт)</td>
                <td>Указатель (экономия памяти)</td>
              </tr>
              <tr>
                <td>Структура с мьютексом</td>
                <td>Указатель (мьютекс нельзя копировать)</td>
              </tr>
              <tr>
                <td>Маленькая структура (3-4 поля)</td>
                <td>Значение (быстрее, безопаснее)</td>
              </tr>
              <tr>
                <td>Нужна защита от изменений</td>
                <td>Значение (копия не изменит оригинал)</td>
              </tr>
              <tr>
                <td>Nil (null)</td>
                <td>Указатель (nil указывает на "пусто")</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    Массивы: {
      get title() {
        return 'Массивы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Массивы</b> — это фиксированный набор элементов одного типа.
            Размер указывается при объявлении и не может меняться.
          </p>
          <CodeHighlighter
            code={`// Массив из 5 чисел (все по умолчанию 0)
var arr1 [5]int
fmt.Println(arr1) // [0 0 0 0 0]

// Массив с инициализацией
arr2 := [3]int{1, 2, 3}
fmt.Println(arr2) // [1 2 3]

// Частичная инициализация (остальные 0)
arr3 := [5]int{1, 2, 3}
fmt.Println(arr3) // [1 2 3 0 0]

// Автоматический подсчет размера
arr4 := [...]int{1, 2, 3, 4, 5} // Размер = 5
fmt.Println(len(arr4)) // 5

// Инициализация по индексам
arr5 := [5]int{0: 10, 2: 30, 4: 50}
fmt.Println(arr5) // [10 0 30 0 50]`}
          />
          <h2>ОСНОВНЫЕ ОПЕРАЦИИ</h2>
          <CodeHighlighter
            code={`arr := [5]int{10, 20, 30, 40, 50}

// Чтение элемента
fmt.Println(arr[0]) // 10
fmt.Println(arr[2]) // 30

// Изменение элемента
arr[1] = 99
fmt.Println(arr) // [10 99 30 40 50]

// Длина массива
fmt.Println(len(arr)) // 5

// Перебор массива (классический)
for i := 0; i < len(arr); i++ {
    fmt.Println(arr[i])
}

// Перебор массива (range)
for i, value := range arr {
    fmt.Printf("arr[%d] = %d\n", i, value)
}

// Только значения
for _, value := range arr {
    fmt.Println(value)
}`}
          />
          <h2>КОГДА ИСПОЛЬЗОВАТЬ МАССИВЫ</h2>
          <table>
            <thead>
              <tr>
                <th>ПРИМЕНЕНИЕ</th>
                <th>ПОЧЕМУ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Фиксированные данные</td>
                <td>Например, дни недели: [7]string</td>
              </tr>
              <tr>
                <td>Буферы фиксированного размера</td>
                <td>Например, [1024]byte</td>
              </tr>
              <tr>
                <td>Производительность</td>
                <td>Массивы быстрее слайсов</td>
              </tr>
              <tr>
                <td>В остальных случаях</td>
                <td>Используйте слайсы (следующая тема)</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  },
};

export default Golang;
