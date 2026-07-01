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
    Слайсы: {
      get title() {
        return 'Слайсы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Слайсы</b> — это динамические массивы. Это самая важная структура
            данных в Go. Вы будете использовать их постоянно. Они содержат:
          </p>
          <ul>
            <li>
              <b>Указатель</b> на массив
            </li>
            <li>
              <b>Длину (len)</b> — сколько элементов используется
            </li>
            <li>
              <b>Емкость (cap)</b> — сколько элементов может вместить
            </li>
          </ul>
          <CodeHighlighter
            code={`// 1. Пустой слайс (nil)
var s1 []int
fmt.Println(s1 == nil) // true

// 2. Создание через make()
s2 := make([]int, 5)    // len=5, cap=5, все элементы 0
s3 := make([]int, 3, 5) // len=3, cap=5

// 3. С литералом
s4 := []int{1, 2, 3, 4, 5} // len=5, cap=5

// 4. Из массива (срезка)
arr := [5]int{1, 2, 3, 4, 5}
s5 := arr[1:4] // [2 3 4], len=3, cap=4`}
          />
          <h2>ОПЕРАЦИИ СО СЛАЙСАМИ</h2>
          <CodeHighlighter
            code={`s := []int{1, 2, 3}
fmt.Println(s) // [1 2 3]

// Добавить один элемент
s = append(s, 4)
fmt.Println(s) // [1 2 3 4]

// Добавить несколько элементов
s = append(s, 5, 6, 7)
fmt.Println(s) // [1 2 3 4 5 6 7]

// Добавить другой слайс (с ...)
other := []int{8, 9, 10}
s = append(s, other...)
fmt.Println(s) // [1 2 3 4 5 6 7 8 9 10]`}
          />
          <h2>Чтение и изменение</h2>
          <CodeHighlighter
            code={`s := []int{10, 20, 30, 40, 50}

// Чтение
fmt.Println(s[0]) // 10
fmt.Println(s[2]) // 30

// Изменение
s[1] = 99
fmt.Println(s) // [10 99 30 40 50]

// Длина и емкость
fmt.Println("len:", len(s)) // 5
fmt.Println("cap:", cap(s)) // 5`}
          />
          <h2>Срезка (создание нового слайса из существующего)</h2>
          <CodeHighlighter
            code={`s := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

// Взять элементы с 2 по 5 (индекс 2 включительно, 5 исключительно)
sub := s[2:5]
fmt.Println(sub) // [3 4 5]

// Взять с начала до индекса 5
sub2 := s[:5]
fmt.Println(sub2) // [1 2 3 4 5]

// Взять с индекса 5 до конца
sub3 := s[5:]
fmt.Println(sub3) // [6 7 8 9 10]

// Взять весь слайс
sub4 := s[:]
fmt.Println(sub4) // [1 2 3 4 5 6 7 8 9 10]`}
          />
          <h2>LEN И CAP (ВАЖНО!)</h2>
          <CodeHighlighter
            code={`// len = количество элементов
// cap = максимальное количество элементов (без переаллокации)

s := make([]int, 3, 5)
fmt.Printf("len=%d, cap=%d\\n", len(s), cap(s)) // len=3, cap=5

// Добавляем элементы
s = append(s, 4)
fmt.Printf("len=%d, cap=%d\\n", len(s), cap(s)) // len=4, cap=5

s = append(s, 5)
fmt.Printf("len=%d, cap=%d\\n", len(s), cap(s)) // len=5, cap=5

// Добавляем еще (cap удваивается!)
s = append(s, 6)
fmt.Printf("len=%d, cap=%d\\n", len(s), cap(s)) // len=6, cap=10`}
          />
          <h2>ОБХОД СЛАЙСОВ</h2>
          <CodeHighlighter
            code={`s := []string{"Go", "Python", "Java"}

// Через for
for i := 0; i < len(s); i++ {
    fmt.Println(s[i])
}

// Через range
for i, v := range s {
    fmt.Printf("Индекс %d: %s\\n", i, v)
}

// Только значения
for _, v := range s {
    fmt.Println(v)
}`}
          />
          <h2>МАССИВЫ VS СЛАЙСЫ</h2>
          <table>
            <thead>
              <tr>
                <th>СВОЙСТВО</th>
                <th>МАССИВ</th>
                <th>СЛАЙС</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Размер</td>
                <td>Фиксированный</td>
                <td>Динамический</td>
              </tr>
              <tr>
                <td>Передача</td>
                <td>По значению (копия)</td>
                <td>По ссылке (указатель)</td>
              </tr>
              <tr>
                <td>Где используется</td>
                <td>Редко</td>
                <td>Всегда</td>
              </tr>
              <tr>
                <td>Нулевое значение</td>
                <td>Все элементы 0</td>
                <td>nil</td>
              </tr>
              <tr>
                <td>Объявление</td>
                <td>[3]int{'1,2,3'}</td>
                <td>[]int{'1,2,3'}</td>
              </tr>
              <tr>
                <td>Добавление</td>
                <td>Нет</td>
                <td>append()</td>
              </tr>
              <tr>
                <td>Длина/емкость</td>
                <td>Только len</td>
                <td>len и cap</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    Мапы: {
      get title() {
        return 'Мапы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Мапа</b> — это хеш-таблица (аналог объекта/словаря). Хранит пары
            ключ → значение.
          </p>
          <CodeHighlighter
            code={`// 1. Пустая мапа (nil)
var m1 map[string]int
fmt.Println(m1 == nil) // true
// m1["key"] = 1 // ОШИБКА! assignment to entry in nil map

// 2. Создание через make (пустая, но готова к работе)
m2 := make(map[string]int)
m2["age"] = 25 // OK

// 3. С литералом
m3 := map[string]int{
    "apple":  5,
    "banana": 3,
    "orange": 7,
}

// 4. Пустая мапа (не nil)
m4 := map[string]int{}`}
          />
          <h2>ОСНОВНЫЕ ОПЕРАЦИИ</h2>
          <CodeHighlighter
            code={`m := map[string]int{
    "apple":  5,
    "banana": 3,
    "orange": 7,
}

// Чтение значения
fmt.Println(m["apple"]) // 5

// Изменение значения
m["apple"] = 10
fmt.Println(m["apple"]) // 10

// Добавление нового ключа
m["grape"] = 8
fmt.Println(m) // map[apple:10 banana:3 grape:8 orange:7]

// Удаление ключа
delete(m, "banana")
fmt.Println(m) // map[apple:10 grape:8 orange:7]

// Проверка существования ключа
value, exists := m["apple"]
if exists {
    fmt.Println("apple существует:", value)
} else {
    fmt.Println("apple не найден")
}

// Короткая проверка
if _, exists := m["orange"]; exists {
    fmt.Println("orange есть")
}`}
          />
          <h2>ПРОВЕРКА СУЩЕСТВОВАНИЯ КЛЮЧА</h2>
          <p>
            <span>Проблема</span>: чтение несуществующего ключа возвращает{' '}
            <span>zero value</span>, а не ошибку.
          </p>
          <CodeHighlighter
            code={`m := map[string]int{"apple": 5}

// Несуществующий ключ → 0
fmt.Println(m["banana"]) // 0

// Как отличить "ключа нет" от "ключ есть, но значение 0"?
value := m["apple"] // 5
value2 := m["banana"] // 0 (не понятно, есть ключ или нет)`}
          />
          <p>
            <span>Решение</span>: использовать второе возвращаемое значение{' '}
            <span>ok</span>.
          </p>
          <CodeHighlighter
            code={`m := map[string]int{"apple": 5}

// Проверка существования
value, ok := m["banana"]
if ok {
    fmt.Println("Значение:", value)
} else {
    fmt.Println("Ключа нет")
}

// Игнорируем значение, проверяем только наличие
if _, ok := m["apple"]; ok {
    fmt.Println("apple есть")
}`}
          />
          <h2>ПЕРЕБОР МАП</h2>
          <CodeHighlighter
            code={`m := map[string]int{
    "apple":  5,
    "banana": 3,
    "orange": 7,
}

// Перебор по ключам и значениям
for key, value := range m {
    fmt.Printf("%s: %d\\n", key, value)
}

// Только ключи
for key := range m {
    fmt.Println(key)
}

// Только значения
for _, value := range m {
    fmt.Println(value)
}`}
          />
        </div>
      ),
    },
    Структуры: {
      get title() {
        return 'Структуры';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Структура</b> — это составной тип данных, который объединяет
            несколько полей в одну сущность. Это аналог классов в ООП, но без
            наследования.
          </p>
          <CodeHighlighter
            code={`// Определение структуры
type User struct {
    Name  string
    Age   int
    Email string
}

// Создание экземпляра
var user1 User // Все поля с zero value ("", 0, "")
user1.Name = "Alice"
user1.Age = 25
user1.Email = "alice@mail.com"

// Создание через литерал (по порядку)
user2 := User{"Bob", 30, "bob@mail.com"}

// Создание через литерал (по именам полей - рекомендуется)
user3 := User{
    Name:  "John",
    Age:   28,
    Email: "john@mail.com",
}

// Частичная инициализация (остальные zero value)
user4 := User{Name: "Kate"} // Age=0, Email=""`}
          />
          <h2>ДОСТУП К ПОЛЯМ (ЧЕРЕЗ ТОЧКУ)</h2>
          <CodeHighlighter
            code={`type Person struct {
    Name string
    Age  int
}

p := Person{Name: "Alice", Age: 25}

// Чтение
fmt.Println(p.Name) // Alice
fmt.Println(p.Age)  // 25

// Изменение
p.Age = 26
fmt.Println(p.Age) // 26`}
          />
          <h2>МЕТОДЫ СТРУКТУР</h2>
          <CodeHighlighter
            code={`type User struct {
    Name string
    Age  int
}

// Метод с получателем по значению (копия)
func (u User) Greet() {
    fmt.Printf("Привет, я %s, мне %d лет\n", u.Name, u.Age)
}

// Метод с получателем по указателю (изменяет оригинал)
func (u *User) Birthday() {
    u.Age++ // Изменяет оригинал
}

// Использование
user := User{Name: "Alice", Age: 25}
user.Greet()      // Привет, я Alice, мне 25 лет
user.Birthday()
fmt.Println(user.Age) // 26`}
          />
          <h2>VALUE RECEIVER VS POINTER RECEIVER</h2>
          <table>
            <thead>
              <tr>
                <th>RECEIVER</th>
                <th>КОГДА ИСПОЛЬЗОВАТЬ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Value receiver (u User)</td>
                <td>Не изменяет структуру, читает данные</td>
              </tr>
              <tr>
                <td>Pointer receiver (u *User)</td>
                <td>Изменяет структуру, экономит память</td>
              </tr>
            </tbody>
          </table>
          <CodeHighlighter
            code={`type Counter struct {
    count int
}

// Value receiver (читает)
func (c Counter) Value() int {
    return c.count
}

// Pointer receiver (изменяет)
func (c *Counter) Increment() {
    c.count++
}

c := Counter{count: 0}
c.Increment()
c.Increment()
fmt.Println(c.Value()) // 2`}
          />
          <h2>ЭКСПОРТ ПОЛЕЙ И МЕТОДОВ</h2>
          <ul>
            <li>Заглавная буква = публичный (экспортируемый)</li>
            <li>Строчная буква = приватный (внутри пакета)</li>
          </ul>
          <CodeHighlighter
            code={`package user

// Экспортируемая структура
type User struct {
    Name string // Экспортируемое поле
    age  int    // Приватное поле (внутри пакета)
}

// Экспортируемый метод
func (u User) GetAge() int {
    return u.age
}

// Приватный метод
func (u User) calculate() int {
    return u.age * 2
}`}
          />
        </div>
      ),
    },
    'Экспорт/импорт пакетов': {
      get title() {
        return 'Экспорт/импорт пакетов';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>ОСНОВНЫЕ ПОНЯТИ</h2>
          <p>
            <b>Пакет (package)</b> - Группа файлов <span>.go</span> в одной
            папке, объединенных общим именем
          </p>
          <p>
            <b>Модуль (module)</b> - Набор связанных пакетов с файлом{' '}
            <span>go.mod</span>
            (корень проекта)
          </p>
          <p>
            <b>Экспорт</b> - Имена с заглавной буквы видны из других пакетов
          </p>
          <p>
            <b>Импорт</b> - Подключение других пакетов через <span>import</span>
          </p>
          <CodeHighlighter
            code={`// main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello")
}`}
          />
          <p>Правила:</p>
          <ul>
            <li>
              В одной папке все файлы должны иметь <span>одинаковое</span> имя
              пакета
            </li>
            <li>
              <span>package main</span> — точка входа (исполняемый файл)
            </li>
            <li>Остальные пакеты — библиотеки</li>
          </ul>
          <h2>ЭКСПОРТ (ПУБЛИЧНЫЕ VS ПРИВАТНЫЕ)</h2>
          <ul>
            <li>
              <b>Заглавная буква</b> → экспортируемый (публичный)
            </li>
            <li>
              <b>Строчная буква</b> → приватный (внутри пакета)
            </li>
          </ul>
          <CodeHighlighter
            code={`// user/user.go
package user

// Экспортируемая структура
type User struct {
    Name string // Экспортируемое поле
    age  int    // Приватное поле
}

// Экспортируемая функция
func NewUser(name string, age int) *User {
    return &User{
        Name: name,
        age:  age,
    }
}

// Экспортируемый метод
func (u User) GetAge() int {
    return u.age
}

// Приватный метод (только внутри пакета)
func (u User) isAdult() bool {
    return u.age >= 18
}`}
          />
          <h2>ИМПОРТ ПАКЕТОВ</h2>
          <CodeHighlighter
            code={`// main.go
package main

import (
    "fmt"           // Стандартный пакет
    "strings"       // Стандартный пакет
    "myproject/user" // Свой пакет
    "myproject/utils" // Свой пакет
)

func main() {
    // Использование экспортированных имен
    u := user.NewUser("Alice", 25)
    fmt.Println(u.Name) // Alice
    
    // Приватное поле недоступно
    // fmt.Println(u.age) // ОШИБКА
}`}
          />
          <h2>СОЗДАНИЕ МОДУЛЯ</h2>
          <CodeHighlighter
            language={'bash'}
            code={`# Создаем папку
mkdir myproject
cd myproject

# Инициализируем модуль
go mod init myproject

# Файл go.mod создан`}
          />
        </div>
      ),
    },
    Интерфейсы: {
      get title() {
        return 'Интерфейсы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Интерфейс</b> — это контракт (набор методов). Если у структуры
            есть все методы интерфейса — она неявно удовлетворяет этому
            интерфейсу. В отличие от других языков, в Go не нужно явно указывать
            implements.
          </p>
          <CodeHighlighter
            code={`// Интерфейс с одним методом
type Greeter interface {
    Greet() string
}

// Интерфейс с несколькими методами
type Shape interface {
    Area() float64
    Perimeter() float64
}

// Пустой интерфейс (любой тип)
type Any interface{}`}
          />
          <h2>ЗАЧЕМ НУЖНЫ ИНТЕРФЕЙСЫ</h2>
          <ol>
            <li>
              <h3>Полиморфизм (разные типы через один интерфейс)</h3>
              <CodeHighlighter
                code={`type Animal interface {
    Speak() string
}

type Dog struct{}
func (d Dog) Speak() string { return "Гав!" }

type Cat struct{}
func (c Cat) Speak() string { return "Мяу!" }

func MakeSound(a Animal) {
    fmt.Println(a.Speak())
}

func main() {
    MakeSound(Dog{}) // Гав!
    MakeSound(Cat{}) // Мяу!
}`}
              />
            </li>
            <li>
              <h3>Слабая связанность (зависимости от интерфейсов)</h3>
              <CodeHighlighter
                code={`type Storage interface {
    Save(data string) error
    Load(id string) (string, error)
}

// Реализация для файлов
type FileStorage struct {}
func (f FileStorage) Save(data string) error { /* ... */ }
func (f FileStorage) Load(id string) (string, error) { /* ... */ }

// Реализация для БД
type DBStorage struct {}
func (d DBStorage) Save(data string) error { /* ... */ }
func (d DBStorage) Load(id string) (string, error) { /* ... */ }

// Сервис работает с любым Storage
type Service struct {
    storage Storage
}

func (s Service) Process(data string) error {
    return s.storage.Save(data)
}`}
              />
            </li>
            <li>
              <h3>Тестирование (моки)</h3>
              <CodeHighlighter
                code={`// Интерфейс для тестирования
type UserRepository interface {
    GetUser(id int) (User, error)
}

// Реальная реализация
type PostgresRepo struct {}
func (p PostgresRepo) GetUser(id int) (User, error) { /* ... */ }

// Мок для тестов
type MockRepo struct {}
func (m MockRepo) GetUser(id int) (User, error) {
    return User{Name: "Mock"}, nil
}`}
              />
            </li>
          </ol>
        </div>
      ),
    },
    'Встраивание структур (embedding)': {
      get title() {
        return 'Встраивание структур (embedding)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            Встраивание (embedding) — это способ <span>композиции</span>{' '}
            структур. Вместо наследования (как в ООП), Go предлагает встраивать
            одну структуру в другую, получая доступ к её полям и методам как к
            своим.
          </p>
          <CodeHighlighter
            code={`type Address struct {
    City    string
    Street  string
    ZipCode int
}

type User struct {
    Name    string
    Address // ← Встраивание (без имени!)
}

func main() {
    u := User{
        Name: "Alice",
        Address: Address{
            City:    "Moscow",
            Street:  "Tverskaya",
            ZipCode: 101000,
        },
    }
    
    // Прямой доступ к полям Address
    fmt.Println(u.City)    // Moscow (а не u.Address.City)
    fmt.Println(u.Street)  // Tverskaya
    fmt.Println(u.ZipCode) // 101000
}`}
          />
        </div>
      ),
    },
    'Пользовательский ввод': {
      get title() {
        return 'Пользовательский ввод';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>fmt.Scan()</b> - Читает значения через пробел/перевод строки.
          </p>
          <CodeHighlighter
            code={`package main

import "fmt"

func main() {
    var name string
    var age int
    
    fmt.Print("Введите имя и возраст: ")
    n, err := fmt.Scan(&name, &age) // Читаем 2 значения
    
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Printf("Прочитано %d значений\\n", n)
    fmt.Printf("Имя: %s, Возраст: %d\\n", name, age)
}`}
          />
          <p>
            <b>fmt.Scanln()</b> - Читает до перевода строки.
          </p>
          <CodeHighlighter
            code={`func main() {
    var name string
    var age int
    
    fmt.Print("Введите имя: ")
    fmt.Scanln(&name) // Читает до Enter
    
    fmt.Print("Введите возраст: ")
    fmt.Scanln(&age)
    
    fmt.Printf("Имя: %s, Возраст: %d\\n", name, age)
}`}
          />
          <p>
            <b>fmt.Scanf()</b> - Читает по шаблону (как в C).
          </p>
          <CodeHighlighter
            code={`func main() {
    var name string
    var age int
    
    fmt.Print("Введите в формате: имя возраст: ")
    _, err := fmt.Scanf("%s %d", &name, &age)
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Printf("Имя: %s, Возраст: %d\\n", name, age)
}`}
          />
          <p>
            <b>bufio.NewScanner()</b> - Лучший способ для строк с пробелами и
            построчного ввода.
          </p>
          <CodeHighlighter
            code={`package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    // Создаем сканер для чтения из stdin
    scanner := bufio.NewScanner(os.Stdin)
    
    fmt.Print("Введите текст: ")
    scanner.Scan() // Читаем одну строку
    text := scanner.Text() // Получаем строку
    
    fmt.Printf("Вы ввели: %s\\n", text)
    
    // Проверка на ошибку
    if err := scanner.Err(); err != nil {
        fmt.Println("Ошибка:", err)
    }
}`}
          />
          <p>
            <b>bufio.NewReader()</b> - Чтение по символам, строкам, с
            разделителями.
          </p>
          <CodeHighlighter
            code={`package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    reader := bufio.NewReader(os.Stdin)
    
    // 1. Чтение до символа новой строки
    fmt.Print("Введите строку: ")
    line, err := reader.ReadString('\n')
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    fmt.Printf("Вы ввели: %s", line) // line уже с \\n
    
    // 2. Чтение до любого разделителя
    fmt.Print("Введите текст до запятой: ")
    text, err := reader.ReadString(',')
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    fmt.Printf("До запятой: %s\\n", text)
    
    // 3. Чтение одного символа
    fmt.Print("Нажмите любую клавишу: ")
    char, _, err := reader.ReadRune()
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    fmt.Printf("Вы нажали: %c\\n", char)
}`}
          />
        </div>
      ),
    },
    'Работа с файлами': {
      get title() {
        return 'Работа с файлами';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>ОСНОВНЫЕ ОПЕРАЦИИ</h2>
          <table>
            <thead>
              <tr>
                <th>ОПЕРАЦИЯ</th>
                <th>ФУНКЦИЯ</th>
                <th>ЧТО ДЕЛАЕТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Открыть</td>
                <td>os.Open()</td>
                <td>Открывает файл для чтения</td>
              </tr>
              <tr>
                <td>Создать/открыть</td>
                <td>os.Create()</td>
                <td>Создает файл (перезаписывает)</td>
              </tr>
              <tr>
                <td>Открыть с опциями</td>
                <td>os.OpenFile()</td>
                <td>Гибкое открытие (чтение/запись/добавление)</td>
              </tr>
              <tr>
                <td>Закрыть</td>
                <td>file.Close()</td>
                <td>Закрывает файл (обязательно!)</td>
              </tr>
              <tr>
                <td>Читать</td>
                <td>file.Read()</td>
                <td>Читает байты</td>
              </tr>
              <tr>
                <td>Записать</td>
                <td>file.Write()</td>
                <td>Записывает байты</td>
              </tr>
              <tr>
                <td>Записать строку</td>
                <td>file.WriteString()</td>
                <td>Записывает строку</td>
              </tr>
            </tbody>
          </table>
          <h2>ОТКРЫТИЕ ФАЙЛА ДЛЯ ЧТЕНИЯ</h2>
          <CodeHighlighter
            code={`package main

import (
    "fmt"
    "os"
)

func main() {
    // Открываем файл
    file, err := os.Open("data.txt")
    if err != nil {
        fmt.Println("Ошибка открытия:", err)
        return
    }
    defer file.Close() // Обязательно закрываем!
    
    // Читаем содержимое...
    fmt.Println("Файл открыт успешно")
}`}
          />
          <h2>ЧТЕНИЕ ФАЙЛА</h2>
          <ol>
            <li>
              <h3>Чтение всего файла (простой)</h3>
              <CodeHighlighter
                code={`package main

import (
    "fmt"
    "os"
)

func main() {
    // Читаем весь файл
    data, err := os.ReadFile("data.txt")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Println(string(data))
}`}
              />
              <ul>
                <li>
                  <b>Плюс</b>: Просто
                </li>
                <li>
                  <b>Минус</b>: Весь файл в памяти
                </li>
              </ul>
            </li>
            <li>
              <h3>Чтение по байтам (буфер)</h3>
              <CodeHighlighter
                code={`package main

import (
    "fmt"
    "os"
)

func main() {
    file, err := os.Open("data.txt")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    defer file.Close()
    
    // Буфер на 1024 байта
    buffer := make([]byte, 1024)
    
    for {
        n, err := file.Read(buffer)
        if err != nil {
            if err.Error() == "EOF" {
                break // Конец файла
            }
            fmt.Println("Ошибка чтения:", err)
            return
        }
        
        // Выводим прочитанное (только n байт)
        fmt.Print(string(buffer[:n]))
    }
}`}
              />
            </li>
            <li>
              <h3>Построчное чтение (рекомендуется)</h3>
              <CodeHighlighter
                code={`package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    file, err := os.Open("data.txt")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    defer file.Close()
    
    scanner := bufio.NewScanner(file)
    
    for scanner.Scan() {
        line := scanner.Text()
        fmt.Println(line)
    }
    
    if err := scanner.Err(); err != nil {
        fmt.Println("Ошибка сканера:", err)
    }
}`}
              />
              <ul>
                <li>
                  <b>Плюс</b>: Не загружает весь файл в память
                </li>
                <li>
                  <b>Минус</b>: Медленнее для больших файлов
                </li>
              </ul>
            </li>
          </ol>
          <h2>ЗАПИСЬ В ФАЙЛ</h2>
          <ol>
            <li>
              <h3>Запись строки (простой)</h3>
              <CodeHighlighter
                code={`package main

import (
    "fmt"
    "os"
)

func main() {
    // Создаем файл (перезаписывает существующий)
    file, err := os.Create("output.txt")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    defer file.Close()
    
    // Записываем строку
    _, err = file.WriteString("Hello, World!\\n")
    if err != nil {
        fmt.Println("Ошибка записи:", err)
        return
    }
    
    // Записываем еще
    _, err = file.WriteString("Вторая строка\\n")
    if err != nil {
        fmt.Println("Ошибка записи:", err)
        return
    }
    
    fmt.Println("Файл записан")
}`}
              />
            </li>
            <li>
              <h3>Запись байтов</h3>
              <CodeHighlighter
                code={`file, err := os.Create("output.bin")
if err != nil {
    fmt.Println("Ошибка:", err)
    return
}
defer file.Close()

// Записываем байты
data := []byte{72, 101, 108, 108, 111}
_, err = file.Write(data)
if err != nil {
    fmt.Println("Ошибка:", err)
    return
}`}
              />
            </li>
            <li>
              <h3>Запись с форматированием</h3>
              <CodeHighlighter
                code={`package main

import (
    "fmt"
    "os"
)

func main() {
    file, err := os.Create("output.txt")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    defer file.Close()
    
    // fmt.Fprintf - запись с форматированием
    name := "Alice"
    age := 25
    
    _, err = fmt.Fprintf(file, "Имя: %s, Возраст: %d\\n", name, age)
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Println("Данные записаны")
}`}
              />
            </li>
            <li>
              <h3>Дозапись в конец файла</h3>
              <CodeHighlighter
                code={`package main

import (
    "fmt"
    "os"
)

func main() {
    // O_APPEND - дозапись, O_CREATE - создать если нет, O_WRONLY - только запись
    file, err := os.OpenFile("output.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    defer file.Close()
    
    _, err = file.WriteString("Дописываем строку\\n")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Println("Строка добавлена")
}`}
              />
            </li>
          </ol>
          <h2>ПРОВЕРКА СУЩЕСТВОВАНИЯ ФАЙЛА</h2>
          <CodeHighlighter
            code={`package main

import (
    "fmt"
    "os"
)

func fileExists(filename string) bool {
    _, err := os.Stat(filename)
    if err == nil {
        return true
    }
    if os.IsNotExist(err) {
        return false
    }
    return false
}

func main() {
    filename := "data.txt"
    
    if fileExists(filename) {
        fmt.Printf("Файл %s существует\\n", filename)
    } else {
        fmt.Printf("Файл %s не существует\\n", filename)
    }
}`}
          />
          <h2>ПОЛУЧЕНИЕ ИНФОРМАЦИИ О ФАЙЛЕ</h2>
          <CodeHighlighter
            code={`package main

import (
    "fmt"
    "os"
)

func main() {
    fileInfo, err := os.Stat("data.txt")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Println("Имя:", fileInfo.Name())
    fmt.Println("Размер:", fileInfo.Size(), "байт")
    fmt.Println("Директория:", fileInfo.IsDir())
    fmt.Println("Права:", fileInfo.Mode())
    fmt.Println("Время изменения:", fileInfo.ModTime())
}`}
          />
          <h2>УДАЛЕНИЕ ФАЙЛА</h2>
          <CodeHighlighter
            code={`package main

import (
    "fmt"
    "os"
)

func main() {
    err := os.Remove("temp.txt")
    if err != nil {
        fmt.Println("Ошибка удаления:", err)
        return
    }
    
    fmt.Println("Файл удален")
}`}
          />
          <h2>РАБОТА С ДИРЕКТОРИЯМИ</h2>
          <ol>
            <li>
              <h3>Создание директории</h3>
              <CodeHighlighter
                code={`// Создать одну папку
err := os.Mkdir("mydir", 0755)
if err != nil {
    fmt.Println("Ошибка:", err)
}

// Создать вложенные папки
err = os.MkdirAll("path/to/dir", 0755)
if err != nil {
    fmt.Println("Ошибка:", err)
}`}
              />
            </li>
            <li>
              <h3>Чтение содержимого директории</h3>
              <CodeHighlighter
                code={`package main

import (
    "fmt"
    "os"
)

func main() {
    entries, err := os.ReadDir(".")
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    for _, entry := range entries {
        if entry.IsDir() {
            fmt.Println("[DIR]", entry.Name())
        } else {
            info, _ := entry.Info()
            fmt.Printf("[FILE] %s (%d байт)\\n", entry.Name(), info.Size())
        }
    }
}`}
              />
            </li>
          </ol>
        </div>
      ),
    },
    'JSON (encoding/json)': {
      get title() {
        return 'JSON (encoding/json)';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>ОСНОВНЫЕ ОПЕРАЦИИ</h2>
          <table>
            <thead>
              <tr>
                <th>ОПЕРАЦИЯ</th>
                <th>ФУНКЦИЯ</th>
                <th>ЧТО ДЕЛАЕТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Структура → JSON</td>
                <td>json.Marshal()</td>
                <td>Преобразует в JSON (байты)</td>
              </tr>
              <tr>
                <td>Структура → JSON (красивый)</td>
                <td>json.MarshalIndent()</td>
                <td>Преобразует с отступами</td>
              </tr>
              <tr>
                <td>JSON → Структура</td>
                <td>json.Unmarshal()</td>
                <td>Парсит JSON в структуру</td>
              </tr>
              <tr>
                <td>Потоковая запись</td>
                <td>json.NewEncoder().Encode()</td>
                <td>Записывает JSON в io.Writer</td>
              </tr>
              <tr>
                <td>Потоковое чтение</td>
                <td>json.NewDecoder().Decode()</td>
                <td>Читает JSON из io.Reader</td>
              </tr>
            </tbody>
          </table>
          <h2>ТЕГИ СТРУКТУР</h2>
          <CodeHighlighter
            code={`type User struct {
    Name     string \`json:"name"\`           // Имя в JSON
    Age      int    \`json:"age"\`            // Имя в JSON
    Email    string \`json:"email"\`          // Имя в JSON
    Password string \`json:"-"\`              // Скрыть поле (не выводить)
    Active   bool   \`json:"active,omitempty"\` // Если false — не выводить
    City     string \`json:"city,omitempty"\` // Если пусто — не выводить
}`}
          />
          <h2>MARSHAL (СТРУКТУРА → JSON)</h2>
          <CodeHighlighter
            code={`package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name     string \`json:"name"\`
    Age      int    \`json:"age"\`
    Email    string \`json:"email,omitempty"\`
    Password string \`json:"-"\`           // Скрываем
    Active   bool   \`json:"active,omitempty"\`
}

func main() {
    user := User{
        Name:  "Alice",
        Age:   25,
        Email: "alice@mail.com",
        Active: true,
    }
    
    // Маршалим в JSON
    data, err := json.Marshal(user)
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Println(string(data))
    // {"name":"Alice","age":25,"email":"alice@mail.com","active":true}
}`}
          />
          <h2>UNMARSHAL (JSON → СТРУКТУРА)</h2>
          <CodeHighlighter
            code={`package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name  string \`json:"name"\`
    Age   int    \`json:"age"\`
    Email string \`json:"email,omitempty"\`
}

func main() {
    jsonData := \`{"name":"Bob","age":30,"email":"bob@mail.com"}\`
    
    var user User
    
    // Парсим JSON
    err := json.Unmarshal([]byte(jsonData), &user)
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    
    fmt.Printf("%+v\\n", user)
    // {Name:Bob Age:30 Email:bob@mail.com}
}`}
          />
          <h2>MAP И JSON</h2>
          <ol>
            <li>
              <h3>JSON → Map</h3>
              <CodeHighlighter
                code={`jsonData := \`{"name":"Alice","age":25,"city":"Moscow"}\`

var result map[string]interface{}
err := json.Unmarshal([]byte(jsonData), &result)
if err != nil {
    fmt.Println("Ошибка:", err)
    return
}

fmt.Println(result["name"]) // Alice
fmt.Println(result["age"])  // 25
fmt.Println(result["city"]) // Moscow

// Проверка типов
if age, ok := result["age"].(float64); ok {
    fmt.Println("Возраст:", int(age))
}`}
              />
            </li>
            <li>
              <h3>Map → JSON</h3>
              <CodeHighlighter
                code={`data := map[string]interface{}{
    "name": "Alice",
    "age":  25,
    "city": "Moscow",
}

jsonData, err := json.Marshal(data)
if err != nil {
    fmt.Println("Ошибка:", err)
    return
}

fmt.Println(string(jsonData))
// {"age":25,"city":"Moscow","name":"Alice"}`}
              />
            </li>
          </ol>
        </div>
      ),
    },
    'Работа со строками': {
      get title() {
        return 'Работа со строками';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>ОСНОВНЫЕ ПАКЕТЫ ДЛЯ СТРОК</h2>
          <table>
            <thead>
              <tr>
                <th>ПАКЕТ</th>
                <th>ЧТО ДЕЛАЕТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>strings</td>
                <td>
                  Основные операции со строками (поиск, замена, разделение)
                </td>
              </tr>
              <tr>
                <td>strconv</td>
                <td>Преобразование строк ↔ числа, парсинг</td>
              </tr>
              <tr>
                <td>fmt</td>
                <td>Форматирование строк (Sprintf), вывод</td>
              </tr>
              <tr>
                <td>unicode</td>
                <td>Работа с символами (буквы, цифры)</td>
              </tr>
              <tr>
                <td>regexp</td>
                <td>Регулярные выражения</td>
              </tr>
            </tbody>
          </table>
          <h2>strings — ОСНОВНЫЕ ОПЕРАЦИИ</h2>
          <ol>
            <li>
              <h3>Проверка и поиск</h3>
              <CodeHighlighter
                code={`package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, World!"
    
    // Содержит подстроку
    fmt.Println(strings.Contains(s, "World"))   // true
    fmt.Println(strings.Contains(s, "Go"))      // false
    
    // Начинается/заканчивается
    fmt.Println(strings.HasPrefix(s, "Hello"))  // true
    fmt.Println(strings.HasSuffix(s, "!"))      // true
    
    // Индекс подстроки
    fmt.Println(strings.Index(s, "World"))      // 7
    fmt.Println(strings.Index(s, "Go"))         // -1
    
    // Количество вхождений
    fmt.Println(strings.Count(s, "l"))          // 3
}`}
              />
            </li>
            <li>
              <h3>Изменение строк</h3>
              <CodeHighlighter
                code={`s := "Hello, World!"

// Замена
fmt.Println(strings.Replace(s, "World", "Go", 1))   // Hello, Go!
fmt.Println(strings.ReplaceAll(s, "l", "L"))        // HeLLo, WorLd!

// Регистр
fmt.Println(strings.ToUpper(s)) // HELLO, WORLD!
fmt.Println(strings.ToLower(s)) // hello, world!
fmt.Println(strings.Title(s))   // Hello, World!

// Удаление пробелов
s2 := "  Hello, World!  "
fmt.Println(strings.TrimSpace(s2))      // Hello, World!
fmt.Println(strings.Trim(s2, " !"))     // Hello, World
fmt.Println(strings.TrimLeft(s2, " "))  // Hello, World!  
fmt.Println(strings.TrimRight(s2, " ")) //   Hello, World!`}
              />
            </li>
            <li>
              <h3>Разделение и соединение</h3>
              <CodeHighlighter
                code={`// Разделение (Split)
s := "apple,banana,orange,grape"
fruits := strings.Split(s, ",")
fmt.Println(fruits) // [apple banana orange grape]

// Разделение с ограничением
parts := strings.SplitN(s, ",", 2)
fmt.Println(parts) // [apple banana,orange,grape]

// Соединение (Join)
joined := strings.Join(fruits, " - ")
fmt.Println(joined) // apple - banana - orange - grape

// Разбивка по пробелам (Fields)
s2 := "apple banana  orange   grape"
fields := strings.Fields(s2)
fmt.Println(fields) // [apple banana orange grape]`}
              />
            </li>
            <li>
              <h3>Повторение и сравнение</h3>
              <CodeHighlighter
                code={`// Повторение
fmt.Println(strings.Repeat("Go", 3)) // GoGoGo

// Сравнение (регистрозависимое)
fmt.Println(strings.Compare("a", "b")) // -1
fmt.Println(strings.Compare("a", "a")) // 0
fmt.Println(strings.Compare("b", "a")) // 1

// Сравнение без учета регистра
fmt.Println(strings.EqualFold("Go", "go")) // true

// Проверка на пустоту
s := ""
fmt.Println(s == "")                       // true
fmt.Println(len(s) == 0)                   // true
fmt.Println(strings.TrimSpace(s) == "")    // true`}
              />
            </li>
          </ol>
          <h2>strconv — ПРЕОБРАЗОВАНИЕ СТРОК И ЧИСЕЛ</h2>
          <ol>
            <li>
              <h3>Число → Строка</h3>
              <CodeHighlighter
                code={`import "strconv"

// int → string
age := 25
s1 := strconv.Itoa(age)
fmt.Println(s1) // "25"

// int64 → string
var num64 int64 = 100
s2 := strconv.FormatInt(num64, 10) // 10 = десятичная система
fmt.Println(s2) // "100"

// float64 → string
price := 99.99
s3 := strconv.FormatFloat(price, 'f', 2, 64)
fmt.Println(s3) // "99.99"

// bool → string
flag := true
s4 := strconv.FormatBool(flag)
fmt.Println(s4) // "true"`}
              />
            </li>
            <li>
              <h3>Строка → Число</h3>
              <CodeHighlighter
                code={`// string → int
s := "42"
num, err := strconv.Atoi(s)
if err != nil {
    fmt.Println("Ошибка:", err)
}
fmt.Println(num) // 42

// string → int64
s2 := "1234567890"
num64, err := strconv.ParseInt(s2, 10, 64)
if err != nil {
    fmt.Println("Ошибка:", err)
}
fmt.Println(num64) // 1234567890

// string → float64
s3 := "3.14159"
floatNum, err := strconv.ParseFloat(s3, 64)
if err != nil {
    fmt.Println("Ошибка:", err)
}
fmt.Println(floatNum) // 3.14159

// string → bool
s4 := "true"
flag, err := strconv.ParseBool(s4)
if err != nil {
    fmt.Println("Ошибка:", err)
}
fmt.Println(flag) // true`}
              />
            </li>
          </ol>
          <h2>fmt.Sprintf — ФОРМАТИРОВАНИЕ СТРОК</h2>
          <CodeHighlighter
            code={`name := "Alice"
age := 25
height := 1.75

// Базовое форматирование
s1 := fmt.Sprintf("Имя: %s, Возраст: %d", name, age)
fmt.Println(s1) // Имя: Alice, Возраст: 25

// С дробными числами
s2 := fmt.Sprintf("Рост: %.2f м", height)
fmt.Println(s2) // Рост: 1.75 м

// С выравниванием
s3 := fmt.Sprintf("|%10s|%5d|", name, age)
fmt.Println(s3) // |     Alice|   25|

// С типом переменной
var x interface{} = 42
s4 := fmt.Sprintf("Тип: %T, Значение: %v", x, x)
fmt.Println(s4) // Тип: int, Значение: 42`}
          />
          <p>Основные форматы:</p>
          <table>
            <thead>
              <tr>
                <th>ФОРМАТ</th>
                <th>ЧТО ДЕЛАЕТ</th>
                <th>ПРИМЕР</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>%s</td>
                <td>Строка</td>
                <td>"Hello"</td>
              </tr>
              <tr>
                <td>%d</td>
                <td>Целое число</td>
                <td>42</td>
              </tr>
              <tr>
                <td>%f</td>
                <td>Дробное число</td>
                <td>3.141590</td>
              </tr>
              <tr>
                <td>%.2f</td>
                <td>Дробное с 2 знаками</td>
                <td>3.14</td>
              </tr>
              <tr>
                <td>%t</td>
                <td>Логическое</td>
                <td>true</td>
              </tr>
              <tr>
                <td>%v</td>
                <td>Любой тип (стандартный)</td>
                <td>42 / "Hello"</td>
              </tr>
              <tr>
                <td>%T</td>
                <td>Тип переменной</td>
                <td>int</td>
              </tr>
              <tr>
                <td>%q</td>
                <td>Строка в кавычках</td>
                <td>"Hello"</td>
              </tr>
              <tr>
                <td>%x</td>
                <td>HEX</td>
                <td>2a</td>
              </tr>
              <tr>
                <td>%b</td>
                <td>Бинарное</td>
                <td>101010</td>
              </tr>
              <tr>
                <td>%p</td>
                <td>Адрес указателя</td>
                <td>0xc000...</td>
              </tr>
              <tr>
                <td>%+v</td>
                <td>Структура с полями</td>
                <td>{'Name:Alice Age:25'}</td>
              </tr>
            </tbody>
          </table>
          <h2>СТРОКИ КАК БАЙТЫ И РУНЫ</h2>
          <ol>
            <li>
              <h3>Байты → Строка</h3>
              <CodeHighlighter
                code={`// Строка → байты
str := "Hello"
bytes := []byte(str)
fmt.Println(bytes) // [72 101 108 108 111]

// Байты → строка
str2 := string(bytes)
fmt.Println(str2) // Hello`}
              />
            </li>
            <li>
              <h3>Руны → Строка</h3>
              <CodeHighlighter
                code={`// Строка → руны (Unicode символы)
str := "Привет"
runes := []rune(str)
fmt.Println(runes) // [1055 1088 1080 1074 1077 1090]

// Руны → строка
str2 := string(runes)
fmt.Println(str2) // Привет`}
              />
            </li>
            <li>
              <h3>Конвертация строки в число с базой</h3>
              <CodeHighlighter
                code={`// Парсинг чисел в разных системах
hex := "FF"
num, _ := strconv.ParseInt(hex, 16, 64)
fmt.Println(num) // 255

binary := "1010"
num2, _ := strconv.ParseInt(binary, 2, 64)
fmt.Println(num2) // 10

// Число → строка с указанием базы
s1 := strconv.FormatInt(255, 16)
fmt.Println(s1) // "ff"

s2 := strconv.FormatInt(10, 2)
fmt.Println(s2) // "1010"`}
              />
            </li>
          </ol>
        </div>
      ),
    },
    'Обработка ошибок': {
      get title() {
        return 'Обработка ошибок';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>error</b> — это интерфейс:
          </p>
          <CodeHighlighter
            code={`type error interface {
    Error() string
}`}
          />
          <p>
            Любой тип, реализующий метод <span>Error() string </span>,
            становится ошибкой.
          </p>
          <CodeHighlighter
            code={`// Создание ошибки
err := errors.New("что-то пошло не так")
fmt.Println(err) // что-то пошло не так

// Создание с форматированием
err2 := fmt.Errorf("ошибка в функции %s: %d", "process", 404)
fmt.Println(err2) // ошибка в функции process: 404`}
          />
          <h2>
            ПАТТЕРН: <span>if err != nil</span>
          </h2>
          <CodeHighlighter
            code={`func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("деление на ноль")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Ошибка:", err)
        return
    }
    fmt.Println("Результат:", result)
}`}
          />
          <h2>ПРОВЕРКА ТИПА ОШИБКИ</h2>
          <ol>
            <li>
              <h3>errors.Is() — проверка по значению</h3>
              <CodeHighlighter
                code={`import "errors"

var ErrNotFound = errors.New("not found")
var ErrInvalid = errors.New("invalid input")

func findUser(id int) error {
    if id < 0 {
        return ErrInvalid
    }
    if id == 0 {
        return ErrNotFound
    }
    return nil
}

func main() {
    err := findUser(0)
    if err != nil {
        if errors.Is(err, ErrNotFound) {
            fmt.Println("Пользователь не найден")
        } else if errors.Is(err, ErrInvalid) {
            fmt.Println("Неверный ID")
        } else {
            fmt.Println("Другая ошибка:", err)
        }
    }
}`}
              />
            </li>
            <li>
              <h3>errors.As() — проверка по типу</h3>
              <CodeHighlighter
                code={`type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("ошибка валидации поля %s: %s", e.Field, e.Message)
}

func validateUser(name string) error {
    if name == "" {
        return ValidationError{Field: "name", Message: "не может быть пустым"}
    }
    return nil
}

func main() {
    err := validateUser("")
    if err != nil {
        var valErr ValidationError
        if errors.As(err, &valErr) {
            fmt.Printf("Ошибка в поле %s: %s\\n", valErr.Field, valErr.Message)
        } else {
            fmt.Println("Ошибка:", err)
        }
    }
}`}
              />
            </li>
          </ol>
          <h2>ОШИБКИ В СТАНДАРТНОЙ БИБЛИОТЕКЕ</h2>
          <table>
            <thead>
              <tr>
                <th>ПАКЕТ</th>
                <th>ОШИБКА</th>
                <th>ЧТО ОЗНАЧАЕТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>os</td>
                <td>os.ErrNotExist</td>
                <td>Файл не найден</td>
              </tr>
              <tr>
                <td>os</td>
                <td>os.ErrPermission</td>
                <td>Нет прав</td>
              </tr>
              <tr>
                <td>io</td>
                <td>io.EOF</td>
                <td>Конец файла</td>
              </tr>
              <tr>
                <td>sql</td>
                <td>sql.ErrNoRows</td>
                <td>Нет строк в результате</td>
              </tr>
              <tr>
                <td>json</td>
                <td>json.UnmarshalTypeError</td>
                <td>Неверный тип при парсинге</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'panic и recover': {
      get title() {
        return 'panic и recover';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>panic</b> — это состояние, когда программа не может продолжать
            выполнение. Вызывает:
          </p>
          <ul>
            <li>Остановку текущей функции</li>
            <li>
              Раскрутку стека (выполнение всех <span>defer</span>)
            </li>
            <li>Завершение программы с сообщением</li>
          </ul>
          <CodeHighlighter
            code={`func main() {
    fmt.Println("Начало")
    panic("что-то пошло не так")
    fmt.Println("Конец") // НЕ выполнится
}
// Вывод:
// Начало
// panic: что-то пошло не так
// goroutine 1 [running]:
// ...`}
          />
          <p>
            Когда используется <span>panic</span>:
          </p>
          <ul>
            <li>
              Невосстановимая ошибка (например, не удалось открыть обязательный
              конфиг)
            </li>
            <li>Ошибка программиста (выход за границы массива)</li>
            <li>В тестах (для быстрого завершения)</li>
          </ul>
          <hr />
          <p>
            <b>recover</b> — функция, которая перехватывает panic и позволяет
            программе продолжить работу.
          </p>
          <CodeHighlighter
            code={`func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Паника перехвачена:", r)
        }
    }()
    
    panic("ошибка!")
    fmt.Println("Не выполнится")
}
// Вывод: Паника перехвачена: ошибка!`}
          />
        </div>
      ),
    },
    Горутины: {
      get title() {
        return 'Горутины';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Горутины</b> — это легковесные потоки (green threads). Они
            позволяют выполнять функции параллельно, используя гораздо меньше
            ресурсов, чем системные потоки.
          </p>
          <CodeHighlighter
            code={`func sayHello() {
    fmt.Println("Привет из горутины!")
}

func main() {
    go sayHello() // Запуск горутины
    
    time.Sleep(time.Second) // Ждем, чтобы горутина успела выполниться
    fmt.Println("Главная функция")
}`}
          />
          <p>
            <b>Важно</b>: Если главная функция завершится, все горутины
            завершатся вместе с ней.
          </p>
          <h2>Как запустить</h2>
          <table>
            <thead>
              <tr>
                <th>Способ</th>
                <th>Код</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>С именованной функцией</td>
                <td>go print()</td>
              </tr>
              <tr>
                <td>С анонимной</td>
                <td>go func() {`fmt.Println("hi")`}()</td>
              </tr>
              <tr>
                <td>С передачей аргумента</td>
                <td>go func(x int) {`fmt.Println(x)`}(10)</td>
              </tr>
            </tbody>
          </table>
          <h2>Как дождаться горутин (основной паттерн)</h2>
          <CodeHighlighter
            code={`var wg sync.WaitGroup

wg.Add(1)          // +1 горутина
go func() {
    defer wg.Done() // -1 при завершении
    // работа
}()
wg.Wait()          // блокировка, пока счетчик не станет 0`}
          />
          <h2>Когда использовать</h2>
          <table>
            <thead>
              <tr>
                <th>Сценарий</th>
                <th>Использовать</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Параллельные HTTP-запросы</td>
                <td>Горутины + WaitGroup</td>
              </tr>
              <tr>
                <td>Фоновые задачи (логгирование, отправка почты)</td>
                <td>Горутины</td>
              </tr>
              <tr>
                <td>Обработка очереди задач</td>
                <td>Пул горутин (воркеры)</td>
              </tr>
              <tr>
                <td>Одновременные вычисления</td>
                <td>Горутины</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    Каналы: {
      get title() {
        return 'Каналы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Канал</b> — это <span>типизированная очередь</span> для обмена
            данными между горутинами.
          </p>
          <p>Создание:</p>
          <CodeHighlighter code={`ch := make(chan int) // канал для int`} />
          <p>Операции:</p>
          <CodeHighlighter
            code={`ch <- 42   // отправить значение в канал
value := <-ch // получить значение из канала`}
          />
          <h2>НЕБУФЕРИЗИРОВАННЫЕ КАНАЛЫ</h2>
          <p>Синхронные — отправка блокируется, пока кто-то не прочитает.</p>
          <CodeHighlighter
            code={`ch := make(chan int) // без размера → небуферизированный`}
          />
          <p>Как работает:</p>
          <CodeHighlighter
            code={`func main() {
    ch := make(chan int)

    go func() {
        ch <- 42 // БЛОКИРУЕТСЯ, пока main не прочитает
        fmt.Println("Отправлено")
    }()

    time.Sleep(time.Second)
    value := <-ch // РАЗБЛОКИРУЕТ отправку
    fmt.Println("Получено:", value)
}`}
          />
          <p>
            <b>Важно</b>: отправка и получение <span>блокируют</span> друг друга
            до готовности обоих.
          </p>
          <h2>БУФЕРИЗИРОВАННЫЕ КАНАЛЫ</h2>
          <p>
            <b>Асинхронные</b> — отправка не блокируется, пока буфер не
            заполнится.
          </p>
          <CodeHighlighter
            code={`ch := make(chan int, 2) // буфер на 2 элемента`}
          />
          <p>Как работает:</p>
          <CodeHighlighter
            code={`func main() {
    ch := make(chan int, 2)

    ch <- 1 // не блокируется
    ch <- 2 // не блокируется
    // ch <- 3 // БЛОКИРУЕТСЯ (буфер полон)

    fmt.Println(<-ch) // 1
    fmt.Println(<-ch) // 2
}`}
          />
          <h2>СРАВНЕНИЕ</h2>
          <table>
            <thead>
              <tr>
                <th>СВОЙСТВО</th>
                <th>НЕБУФЕРИЗИРОВАННЫЙ</th>
                <th>БУФЕРИЗИРОВАННЫЙ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Размер</td>
                <td>0 (нет буфера)</td>
                <td>Задан (например, 5)</td>
              </tr>
              <tr>
                <td>Отправка</td>
                <td>Блокируется до получения</td>
                <td>Блокируется только при полном буфере</td>
              </tr>
              <tr>
                <td>Получение</td>
                <td>Блокируется до отправки</td>
                <td>Блокируется только при пустом буфере</td>
              </tr>
              <tr>
                <td>Синхронизация</td>
                <td>Полная (отправитель и получатель встречаются)</td>
                <td>Частичная (только при заполнении/опустошении)</td>
              </tr>
              <tr>
                <td>Когда использовать</td>
                <td>Когда нужна точная синхронизация</td>
                <td>Для асинхронной обработки, накопления данных</td>
              </tr>
            </tbody>
          </table>
          <h2>КАНАЛЫ И WAITGROUP (СРАВНЕНИЕ)</h2>
          <table>
            <thead>
              <tr>
                <th>СЦЕНАРИЙ</th>
                <th>WaitGroup</th>
                <th>Канал</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ожидать завершения горутин</td>
                <td>✅</td>
                <td>❌ (но можно через done)</td>
              </tr>
              <tr>
                <td>Передать результат</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Передать несколько значений</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Синхронизация</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    select: {
      get title() {
        return 'select';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>select</b> — позволяет горутине ждать несколько каналов
            одновременно. Он блокируется, пока один из case не будет готов
            (канал не получит или не отправит данные).
          </p>
          <CodeHighlighter
            code={`select {
case msg := <-ch1:
    // ch1 готов к чтению
case ch2 <- 42:
    // ch2 готов к записи
}`}
          />
          <h2>Как работает select</h2>
          <ul>
            <li>Блокирует горутину</li>
            <li>
              Ждёт, пока <span>любой</span> канал станет готов
            </li>
            <li>
              Выполняет <span>один</span> случайный готовый <span>case</span>
            </li>
            <li>Если готовы несколько — выбирает случайный</li>
          </ul>
          <CodeHighlighter
            code={`func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "один"
    }()
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "два"
    }()

    select {
    case msg := <-ch1:
        fmt.Println(msg) // выполнится первым (через 1 сек)
    case msg := <-ch2:
        fmt.Println(msg) // не выполнится
    }
}`}
          />
          <p>
            <b>default</b> — выполняется сразу, если{' '}
            <span>ни один канал не готов</span>.
          </p>
          <CodeHighlighter
            code={`select {
case msg := <-ch:
    fmt.Println(msg)
default:
    fmt.Println("Ничего нет, идём дальше")
}`}
          />
          <p>
            <b>Важно</b>: с <b>default</b> select <span>НЕ БЛОКИРУЕТСЯ</span>!
          </p>
          <table>
            <thead>
              <tr>
                <th>Задача</th>
                <th>Без default</th>
                <th>С default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Проверить, есть ли данные</td>
                <td>Блокируется, если данных нет</td>
                <td>Не блокируется</td>
              </tr>
              <tr>
                <td>Отправить, если есть место</td>
                <td>Блокируется, если места нет</td>
                <td>Не блокируется</td>
              </tr>
              <tr>
                <td>Таймауты</td>
                <td>Через time.After</td>
                <td>Через time.After + default (реже)</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Закрытие каналов. Аксиомы каналов': {
      get title() {
        return 'Закрытие каналов. Аксиомы каналов';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Закрытие</b> — это сигнал получателям, что данных больше не будет
          </p>
          <p>Используется:</p>
          <ul>
            <li>
              Чтобы остановить <span>for range</span> по каналу
            </li>
            <li>Чтобы сигнализировать об окончании работы</li>
            <li>Чтобы избежать deadlock</li>
          </ul>
          <h2>Чтение из закрытого канала</h2>
          <p>
            Закрытый канал <span>НЕ БЛОКИРУЕТСЯ</span> — чтение сразу возвращает
            zero value.
          </p>
          <CodeHighlighter
            code={`ch := make(chan int)
close(ch)

v := <-ch
fmt.Println(v) // 0 (int zero value)`}
          />
          <p>
            Чтобы отличить реальное значение от zero value — используйте второе
            значение ok:
          </p>
          <CodeHighlighter
            code={`v, ok := <-ch
if !ok {
    fmt.Println("Канал закрыт")
} else {
    fmt.Println("Получено:", v)
}`}
          />
          <h2>Аксиомы каналов</h2>
          <table>
            <thead>
              <tr>
                <th>АКСИОМА</th>
                <th>ОПИСАНИЕ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Чтение из закрытого канала</td>
                <td>Возвращает zero value, не блокируется</td>
              </tr>
              <tr>
                <td>Чтение из закрытого канала с ok</td>
                <td>v, ok := {'<'}-ch → ok == false</td>
              </tr>
              <tr>
                <td>Отправка в закрытый канал</td>
                <td>ПАНИКА! panic: send on closed channel</td>
              </tr>
              <tr>
                <td>Повторное закрытие канала</td>
                <td>ПАНИКА! panic: close of closed channel</td>
              </tr>
              <tr>
                <td>Закрытие nil канала</td>
                <td>ПАНИКА! panic: close of nil channel</td>
              </tr>
              <tr>
                <td>Чтение из nil канала</td>
                <td>Блокируется навсегда (deadlock)</td>
              </tr>
              <tr>
                <td>Отправка в nil канал</td>
                <td>Блокируется навсегда (deadlock)</td>
              </tr>
            </tbody>
          </table>
          <h2>Кто должен закрывать канал</h2>
          <p>
            <b>Правило</b>: <span>Отправитель</span> закрывает канал. Получатель
            НЕ закрывает.
          </p>
          <CodeHighlighter
            code={`func producer(ch chan int) {
    for i := 0; i < 5; i++ {
        ch <- i
    }
    close(ch) // отправитель закрывает
}

func main() {
    ch := make(chan int)
    go producer(ch)

    for v := range ch {
        fmt.Println(v) // 0,1,2,3,4
    }
    // range завершится, когда канал закроется
}`}
          />
          <h2>for range по каналу</h2>
          <p>
            Читает данные, пока канал открыт. Как только закрыт — завершается.
          </p>
          <CodeHighlighter
            code={`func main() {
    ch := make(chan int)

    go func() {
        for i := 0; i < 3; i++ {
            ch <- i
        }
        close(ch)
    }()

    for v := range ch {
        fmt.Println(v) // 0, 1, 2
    }
    fmt.Println("Канал закрыт, цикл завершён")
}`}
          />
          <p>
            <b>Важно</b>: если не закрыть канал — for range будет ждать вечно
            (deadlock).
          </p>
        </div>
      ),
    },
    'sync.WaitGroup': {
      get title() {
        return 'sync.WaitGroup';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>sync.WaitGroup</b> — это счётчик горутин. Он позволяет главной
            горутине дождаться завершения всех запущенных горутин.
          </p>
          <p>Счётчик:</p>
          <ul>
            <li>
              <b>Add(n)</b> - увеличивает счётчик на n
            </li>
            <li>
              <b>Done()</b> - уменьшает счётчик на 1 (вызывается в конце
              горутины)
            </li>
            <li>
              <b>Wait()</b> - блокируется, пока счётчик не станет 0
            </li>
          </ul>
          <CodeHighlighter
            code={`var wg sync.WaitGroup

wg.Add(1)          // +1 горутина
go func() {
    defer wg.Done() // -1 при завершении
    // работа
}()
wg.Wait()          // ждём, пока счётчик станет 0`}
          />
          <p>
            <b>Add()</b> должен вызываться ДО запуска горутины.
          </p>
          <CodeHighlighter
            code={`// ПРАВИЛЬНО
wg.Add(1)
go func() {
    defer wg.Done()
}()

// ОШИБКА (гонка данных)
go func() {
    wg.Add(1) // поздно! Wait() может уже начаться
    defer wg.Done()
}()`}
          />
          <h2>Несколько горутин</h2>
          <CodeHighlighter
            code={`func main() {
    var wg sync.WaitGroup

    for i := 0; i < 5; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            fmt.Printf("Горутина %d\\n", id)
        }(i)
    }

    wg.Wait()
    fmt.Println("Все завершены")
}`}
          />
          <h2>Когда использовать WaitGroup</h2>
          <table>
            <thead>
              <tr>
                <th>СЦЕНАРИЙ</th>
                <th>НУЖЕН ЛИ WAITGROUP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Запустили горутину и ждём результат</td>
                <td>✅ Да</td>
              </tr>
              <tr>
                <td>Запустили фоновую задачу (логгирование)</td>
                <td>❌ Нет (можно не ждать)</td>
              </tr>
              <tr>
                <td>Несколько параллельных запросов</td>
                <td>✅ Да</td>
              </tr>
              <tr>
                <td>Главная функция должна завершиться после всех горутин</td>
                <td>✅ Да</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'context.Context': {
      get title() {
        return 'context.Context';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>context.Context</b> — это интерфейс, который передаёт:
          </p>
          <ul>
            <li>
              <b>Сигналы отмены</b> (cancel)
            </li>
            <li>
              <b>Таймауты / дедлайны</b> (timeout/deadline)
            </li>
            <li>
              <b>Значения (ключ-значение)</b> — редко, только для request-scoped
              данных
            </li>
          </ul>
          <h2>Создание контекстов</h2>
          <table>
            <thead>
              <tr>
                <th>ФУНКЦИЯ</th>
                <th>ЧТО ДЕЛАЕТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>context.Background()</td>
                <td>Пустой контекст (корень)</td>
              </tr>
              <tr>
                <td>context.TODO()</td>
                <td>Заглушка, когда непонятно</td>
              </tr>
              <tr>
                <td>context.WithCancel(parent)</td>
                <td>Возвращает контекст + функцию cancel</td>
              </tr>
              <tr>
                <td>context.WithTimeout(parent, time)</td>
                <td>Отмена через время</td>
              </tr>
              <tr>
                <td>context.WithDeadline(parent, time)</td>
                <td>Отмена к конкретному времени</td>
              </tr>
              <tr>
                <td>context.WithValue(parent, key, val)</td>
                <td>Добавляет значение</td>
              </tr>
            </tbody>
          </table>
          <h2>WithCancel — ручная отмена</h2>
          <p>
            Сигнал отмены через вызов <span>cancel()</span>.
          </p>
          <CodeHighlighter
            code={`func main() {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel() // обязательно вызвать, чтобы освободить ресурсы

    go func() {
        select {
        case <-time.After(5 * time.Second):
            fmt.Println("Горутина завершилась сама")
        case <-ctx.Done():
            fmt.Println("Горутина отменена")
        }
    }()

    time.Sleep(2 * time.Second)
    cancel() // отменяем горутину
    time.Sleep(100 * time.Millisecond)
}`}
          />
          <p>
            <span>ctx.Done()</span> — возвращает канал, который закрывается при
            отмене.
          </p>
          <h2>WithTimeout — таймаут</h2>
          <p>Отмена автоматически через N секунд.</p>
          <CodeHighlighter
            code={`func main() {
    // отмена через 2 секунды
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    select {
    case <-time.After(3 * time.Second):
        fmt.Println("Операция завершилась")
    case <-ctx.Done():
        fmt.Println("Таймаут:", ctx.Err()) // context deadline exceeded
    }
}`}
          />
          <h2>WithDeadline — отмена к конкретному времени</h2>
          <p>Отмена в конкретный момент времени.</p>
          <CodeHighlighter
            code={`func main() {
    deadline := time.Now().Add(2 * time.Second)
    ctx, cancel := context.WithDeadline(context.Background(), deadline)
    defer cancel()

    select {
    case <-time.After(3 * time.Second):
        fmt.Println("Операция завершилась")
    case <-ctx.Done():
        fmt.Println("Дедлайн:", ctx.Err()) // context deadline exceeded
    }
}`}
          />
          <h2>Проверка отмены</h2>
          <CodeHighlighter
            code={`// 1. Через канал Done()
select {
case <-ctx.Done():
    fmt.Println("Отменено:", ctx.Err()) // context.Canceled
default:
    // продолжаем работу
}

// 2. Через метод Err()
if ctx.Err() != nil {
    fmt.Println("Контекст отменён:", ctx.Err())
}`}
          />
          <p>
            <b>ctx.Err()</b> возвращает:
          </p>
          <ul>
            <li>
              <b>nil</b> — если контекст ещё активен
            </li>
            <li>
              <b>context.Canceled</b> — если отменён через cancel
            </li>
            <li>
              <b>context.DeadlineExceeded</b> — если истёк таймаут/дедлайн
            </li>
          </ul>
          <h2>Передача контекста</h2>
          <p>Контекст передаётся явно первым параметром.</p>
          <CodeHighlighter
            code={`func process(ctx context.Context, data string) error {
    // проверяем отмену
    select {
    case <-ctx.Done():
        return ctx.Err()
    default:
        // работаем
        fmt.Println("Обработка:", data)
        return nil
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
    defer cancel()

    // передаём контекст
    err := process(ctx, "данные")
    if err != nil {
        fmt.Println("Ошибка:", err)
    }
}`}
          />
          <h2>WithValue — значения в контексте</h2>
          <p>Добавляет пару ключ-значение в контекст.</p>
          <CodeHighlighter
            code={`type key string

const userIDKey key = "userID"

func main() {
    ctx := context.WithValue(context.Background(), userIDKey, 42)

    // передаём контекст
    process(ctx)
}

func process(ctx context.Context) {
    // получаем значение
    if userID, ok := ctx.Value(userIDKey).(int); ok {
        fmt.Println("User ID:", userID)
    }
}`}
          />
          <p>Ограничения:</p>
          <ul>
            <li>
              Только для <b>request-scoped</b> данных (ID запроса, пользователь)
            </li>
            <li>Не для передачи бизнес-данных (лучше передавать явно)</li>
            <li>
              Ключ должен быть кастомным типом (чтобы избежать конфликтов)
            </li>
          </ul>
          <p>
            Когда использовать <span>WithValue</span>
          </p>
          <table>
            <thead>
              <tr>
                <th>✅ НУЖНО</th>
                <th>❌ НЕ НУЖНО</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Request ID для логирования</td>
                <td>Параметры бизнес-логики</td>
              </tr>
              <tr>
                <td>User ID / токен авторизации</td>
                <td>Данные для расчётов</td>
              </tr>
              <tr>
                <td>Deadline / trace ID</td>
                <td>Крупные структуры данных</td>
              </tr>
              <tr>
                <td>Флаги для middleware</td>
                <td>Передача значений в функции (используйте параметры)</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Состояние гонки. Атомики. Мьютексы': {
      get title() {
        return 'Состояние гонки. Атомики. Мьютексы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Состояние гонки</b> — когда несколько горутин одновременно
            обращаются к одной переменной, и хотя бы одна из них{' '}
            <span>изменяет</span> её.
          </p>
          <CodeHighlighter
            code={`func main() {
    var wg sync.WaitGroup
    counter := 0

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter++ // ГОНКА! несколько горутин меняют counter
        }()
    }

    wg.Wait()
    fmt.Println(counter) // НЕ 1000 (будет меньше, например 982)
}`}
          />
          <p>
            <b>Почему</b>: операция counter++ не атомарна:
          </p>
          <ol>
            <li>Прочитать текущее значение</li>
            <li>Увеличить на 1</li>
            <li>Записать новое значение</li>
          </ol>
          <p>Между шагами может вклиниться другая горутина.</p>
          <h2>Встроенный детектор гонок в Go:</h2>
          <CodeHighlighter
            language={'bash'}
            code={`go run -race main.go
go test -race ./...`}
          />
          <h2>Решения проблемы гонки</h2>
          <table>
            <thead>
              <tr>
                <th>МЕТОД</th>
                <th>КОГДА ИСПОЛЬЗОВАТЬ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Атомики (sync/atomic)</td>
                <td>Простые операции с числами (счётчики, флаги)</td>
              </tr>
              <tr>
                <td>Мьютекс (sync.Mutex)</td>
                <td>Сложные операции, структуры, несколько полей</td>
              </tr>
              <tr>
                <td>RWMutex (sync.RWMutex)</td>
                <td>Частое чтение, редкая запись</td>
              </tr>
              <tr>
                <td>Каналы</td>
                <td>Передача данных между горутинами</td>
              </tr>
            </tbody>
          </table>
          <h2>sync/atomic — Атомарные операции</h2>
          <p>
            <b>Атомики</b> — операции, которые выполняются за один шаг
            (непрерываемо).
          </p>
          <p>
            <b>Пакет</b>: sync/atomic
          </p>
          <p>Основные функции:</p>
          <table>
            <thead>
              <tr>
                <th>ФУНКЦИЯ</th>
                <th>ЧТО ДЕЛАЕТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AddInt64(&x, 1)</td>
                <td>Прибавить к int64</td>
              </tr>
              <tr>
                <td>AddInt32(&x, 1)</td>
                <td>Прибавить к int32</td>
              </tr>
              <tr>
                <td>LoadInt64(&x)</td>
                <td>Прочитать int64</td>
              </tr>
              <tr>
                <td>StoreInt64(&x, val)</td>
                <td>Записать int64</td>
              </tr>
              <tr>
                <td>SwapInt64(&x, val)</td>
                <td>Обменять (вернуть старое)</td>
              </tr>
              <tr>
                <td>CompareAndSwapInt64(&x, old, new)</td>
                <td>Обменять, если равно old</td>
              </tr>
            </tbody>
          </table>
          <CodeHighlighter
            code={`import "sync/atomic"

var counter int64

func main() {
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            atomic.AddInt64(&counter, 1) // атомарно
        }()
    }

    wg.Wait()
    fmt.Println(atomic.LoadInt64(&counter)) // 1000
}`}
          />
          <p>
            <b>Когда использовать</b>: простые счётчики, флаги состояния.
          </p>
          <hr />
          <h2>sync.Mutex — Взаимное исключение</h2>
          <p>
            <b>Мьютекс</b> — блокирует доступ к ресурсу, чтобы только одна
            горутина могла его менять.
          </p>
          <p>Методы:</p>
          <ul>
            <li>
              <b>Lock()</b> — захватить блокировку (если занята — ждать)
            </li>
            <li>
              <b>Unlock()</b> — освободить блокировку
            </li>
          </ul>
          <CodeHighlighter
            code={`import "sync"

var counter int
var mu sync.Mutex

func main() {
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mu.Lock()          // захватили блокировку
            counter++          // безопасно
            mu.Unlock()        // освободили
        }()
    }

    wg.Wait()
    fmt.Println(counter) // 1000
}`}
          />
          <p>
            <b>Важно</b>: всегда используйте <span>defer mu.Unlock()</span>,
            чтобы освободить блокировку даже при панике.
          </p>
          <CodeHighlighter
            code={`mu.Lock()
defer mu.Unlock()
// работа`}
          />
          <hr />
          <h2>sync.RWMutex — Блокировка для чтения/записи</h2>
          <p>
            <b>RWMutex</b> — позволяет множественное чтение, но эксклюзивную
            запись.
          </p>
          <p>Методы:</p>
          <ul>
            <li>
              <span>RLock()</span> / <span>RUnlock()</span> — блокировка для
              чтения (много горутин)
            </li>
            <li>
              <span>Lock()</span> / <span>Unlock()</span> — блокировка для
              записи (эксклюзив)
            </li>
          </ul>
          <CodeHighlighter
            code={`type SafeCounter struct {
    mu    sync.RWMutex
    value int
}

func (c *SafeCounter) Read() int {
    c.mu.RLock()         // блокировка чтения (не блокирует другие чтения)
    defer c.mu.RUnlock()
    return c.value
}

func (c *SafeCounter) Write(val int) {
    c.mu.Lock()          // эксклюзивная блокировка
    defer c.mu.Unlock()
    c.value = val
}`}
          />
          <h2>Сравнение методов</h2>
          <table>
            <thead>
              <tr>
                <th>МЕТОД</th>
                <th>СКОРОСТЬ</th>
                <th>БЕЗОПАСНОСТЬ</th>
                <th>СЛОЖНОСТЬ</th>
                <th>ПРИМЕНЕНИЕ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Атомики</td>
                <td>⚡⚡⚡ Очень быстрый</td>
                <td>✅ Безопасен</td>
                <td>Простой</td>
                <td>Счётчики, флаги</td>
              </tr>
              <tr>
                <td>Mutex</td>
                <td>⚡⚡ Средний</td>
                <td>✅ Безопасен</td>
                <td>Средний</td>
                <td>Любые ресурсы</td>
              </tr>
              <tr>
                <td>RWMutex</td>
                <td>⚡ Быстрее на чтении</td>
                <td>✅ Безопасен</td>
                <td>Сложнее</td>
                <td>Кэш, конфиги</td>
              </tr>
              <tr>
                <td>Без синхронизации</td>
                <td>⚡⚡⚡ Самый быстрый</td>
                <td>❌ Гонка</td>
                <td>Нет</td>
                <td>Только для однопоточного кода</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'sync.Once': {
      get title() {
        return 'sync.Once';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>sync.Once</b> — гарантирует, что переданная функция выполнится
            только один раз, даже если вызвать <span>Do()</span> из разных
            горутин.
          </p>
          <p>
            <b>Метод</b>: <span>Do(f func())</span> — вызывает <span>f()</span>{' '}
            один раз.
          </p>
          <CodeHighlighter
            code={`var once sync.Once

once.Do(func() {
    fmt.Println("Выполнится один раз")
})
once.Do(func() {
    fmt.Println("Не выполнится")
})
// Вывод: Выполнится один раз`}
          />
          <h2>Основные правила</h2>
          <table>
            <thead>
              <tr>
                <th>ПРАВИЛО</th>
                <th>ОПИСАНИЕ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Однократность</td>
                <td>Функция выполняется только один раз</td>
              </tr>
              <tr>
                <td>Горутино-безопасность</td>
                <td>Можно вызывать из нескольких горутин</td>
              </tr>
              <tr>
                <td>Блокировка</td>
                <td>
                  Если Do() вызван одновременно — только один вызов выполняется,
                  остальные ждут
                </td>
              </tr>
              <tr>
                <td>Паника</td>
                <td>
                  Если функция паникует — Once считается НЕ выполненным (можно
                  вызвать снова)
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Где использовать sync.Once</h2>
          <table>
            <thead>
              <tr>
                <th>СЦЕНАРИЙ</th>
                <th>ПРИМЕР</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Инициализация</td>
                <td>Создание подключения к БД</td>
              </tr>
              <tr>
                <td>Singleton</td>
                <td>Глобальный экземпляр структуры</td>
              </tr>
              <tr>
                <td>Ленивая инициализация</td>
                <td>Создать объект только при первом использовании</td>
              </tr>
              <tr>
                <td>Регистрация</td>
                <td>Зарегистрировать драйвер или хендлер</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'HTTP-СЕРВЕР': {
      get title() {
        return 'HTTP-СЕРВЕР';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>Основные компоненты</h2>
          <table>
            <thead>
              <tr>
                <th>КОМПОНЕНТ</th>
                <th>ЧТО ДЕЛАЕТ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>http.HandleFunc(pattern, handler)</td>
                <td>Регистрирует обработчик для пути</td>
              </tr>
              <tr>
                <td>http.Handle(pattern, handler)</td>
                <td>Регистрирует обработчик (реализующий http.Handler)</td>
              </tr>
              <tr>
                <td>http.ListenAndServe(addr, handler)</td>
                <td>Запускает сервер</td>
              </tr>
              <tr>
                <td>http.ListenAndServeTLS(addr, cert, key, handler)</td>
                <td>Запускает HTTPS</td>
              </tr>
              <tr>
                <td>http.Handler</td>
                <td>Интерфейс с методом ServeHTTP(w, r)</td>
              </tr>
            </tbody>
          </table>
          <CodeHighlighter
            code={`package main

import (
    "fmt"
    "net/http"
)

func main() {
    // регистрируем обработчик
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "Привет, мир!")
    })

    // запускаем сервер
    http.ListenAndServe(":8080", nil)
}`}
          />
          <h2>Обработчики (Handlers)</h2>
          <CodeHighlighter
            code={`func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello, World!")
}

func main() {
    http.HandleFunc("/hello", helloHandler)
    http.ListenAndServe(":8080", nil)
}`}
          />
          <h2>Чтение данных из запроса</h2>
          <CodeHighlighter
            code={`func handler(w http.ResponseWriter, r *http.Request) {
    // 1. Параметры URL (query string)
    name := r.URL.Query().Get("name")
    fmt.Fprintf(w, "Привет, %s!\\n", name)

    // 2. Метод запроса
    fmt.Fprintf(w, "Метод: %s\\n", r.Method)

    // 3. Путь
    fmt.Fprintf(w, "Путь: %s\\n", r.URL.Path)

    // 4. Заголовки
    fmt.Fprintf(w, "User-Agent: %s\\n", r.Header.Get("User-Agent"))

    // 5. Тело запроса (POST)
    if r.Method == "POST" {
        body, _ := io.ReadAll(r.Body)
        defer r.Body.Close()
        fmt.Fprintf(w, "Тело: %s\\n", string(body))
    }
}`}
          />
        </div>
      ),
    },
    Роутинг: {
      get title() {
        return 'Роутинг';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>Стандартный роутинг (http.ServeMux)</h2>
          <p>Стандартный роутер не поддерживает:</p>
          <ul>
            <li>Параметры в пути (/users/{'id'})</li>
            <li>Методы HTTP (GET, POST) — только путь</li>
            <li>Вложенные маршруты</li>
          </ul>
          <CodeHighlighter
            code={`func main() {
    mux := http.NewServeMux()

    mux.HandleFunc("/", homeHandler)
    mux.HandleFunc("/users", usersHandler)
    mux.HandleFunc("/users/", userHandler) // /users/1, /users/2

    http.ListenAndServe(":8080", mux)
}`}
          />
          <p>Ограничения:</p>
          <CodeHighlighter
            code={`// НЕЛЬЗЯ сделать:
// /users/{id} → нужно парсить руками
// GET /users и POST /users на разные обработчики`}
          />
          <h2>Chi — самый популярный легковесный роутер</h2>
          <h3>Установка:</h3>
          <CodeHighlighter
            language={`bash`}
            code={`go get github.com/go-chi/chi/v5`}
          />
          <h3>Особенности:</h3>
          <ul>
            <li>✅ Параметры в пути</li>
            <li>✅ Методы HTTP</li>
            <li>✅ Middleware (встроенные)</li>
            <li>✅ Группировка маршрутов</li>
            <li>✅ Совместим со стандартным http.Handler</li>
          </ul>
          <CodeHighlighter
            code={`package main

import (
    "fmt"
    "net/http"

    "github.com/go-chi/chi/v5"
)

func main() {
    r := chi.NewRouter()

    // 1. Простые маршруты
    r.Get("/", homeHandler)
    r.Get("/hello", helloHandler)

    // 2. Параметры в пути
    r.Get("/users/{id}", userHandler)
    r.Get("/posts/{postID}/comments/{commentID}", nestedHandler)

    // 3. Разные методы
    r.Post("/users", createUserHandler)
    r.Put("/users/{id}", updateUserHandler)
    r.Delete("/users/{id}", deleteUserHandler)

    http.ListenAndServe(":8080", r)
}

func userHandler(w http.ResponseWriter, r *http.Request) {
    // получаем параметр
    id := chi.URLParam(r, "id")
    fmt.Fprintf(w, "Пользователь ID: %s", id)
}`}
          />
          <h2>Сравнение роутеров</h2>
          <table>
            <thead>
              <tr>
                <th>СВОЙСТВО</th>
                <th>Стандартный</th>
                <th>Chi</th>
                <th>Gorilla/Mux</th>
                <th>Gin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Параметры пути</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Методы HTTP</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Middleware</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Скорость</td>
                <td>Быстрый</td>
                <td>Очень быстрый</td>
                <td>Быстрый</td>
                <td>Очень быстрый</td>
              </tr>
              <tr>
                <td>Размер</td>
                <td>~0 КБ</td>
                <td>~50 КБ</td>
                <td>~100 КБ</td>
                <td>~200 КБ</td>
              </tr>
              <tr>
                <td>Уровень</td>
                <td>Низкий</td>
                <td>Средний</td>
                <td>Средний</td>
                <td>Высокий</td>
              </tr>
              <tr>
                <td>Популярность</td>
                <td>Всегда</td>
                <td>Очень популярный</td>
                <td>Популярный</td>
                <td>Очень популярный</td>
              </tr>
              <tr>
                <td>Обработка ошибок</td>
                <td>Ручная</td>
                <td>Встроенная</td>
                <td>Ручная</td>
                <td>Встроенная</td>
              </tr>
            </tbody>
          </table>
          <h2>Gorilla/Mux (альтернатива)</h2>
          <h3>Установка:</h3>
          <CodeHighlighter
            language={'bash'}
            code={`go get github.com/gorilla/mux`}
          />
          <CodeHighlighter
            code={`import "github.com/gorilla/mux"

func main() {
    r := mux.NewRouter()

    // параметры
    r.HandleFunc("/users/{id}", userHandler).Methods("GET")
    r.HandleFunc("/users", createUserHandler).Methods("POST")

    // квари (query)
    r.HandleFunc("/search", searchHandler).Queries("q", "{query}")

    http.ListenAndServe(":8080", r)
}

func userHandler(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id := vars["id"]
    fmt.Fprintf(w, "User ID: %s", id)
}`}
          />
          <h2>Когда что использовать</h2>
          <table>
            <thead>
              <tr>
                <th>СЦЕНАРИЙ</th>
                <th>ВЫБОР</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Микросервис, API</td>
                <td>Chi</td>
              </tr>
              <tr>
                <td>Простой сервер (1-2 эндпоинта)</td>
                <td>Стандартный</td>
              </tr>
              <tr>
                <td>Крупный проект с вложенными маршрутами</td>
                <td>Chi или Gin</td>
              </tr>
              <tr>
                <td>Существующий проект на Gorilla</td>
                <td>Оставить</td>
              </tr>
              <tr>
                <td>Нужно быстро и популярно</td>
                <td>Chi или Gin</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Обработка запросов — чтение тела, парсинг JSON': {
      get title() {
        return 'Обработка запросов — чтение тела, парсинг JSON';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>Чтение тела запроса (io.ReadAll)</h2>
          <CodeHighlighter
            code={`func handler(w http.ResponseWriter, r *http.Request) {
    // читаем тело
    body, err := io.ReadAll(r.Body)
    if err != nil {
        http.Error(w, "Ошибка чтения тела", http.StatusBadRequest)
        return
    }
    defer r.Body.Close() // обязательно закрываем
    
    fmt.Fprintf(w, "Получено: %s", string(body))
}`}
          />
          <h2>Парсинг JSON в структуру</h2>
          <CodeHighlighter
            code={`type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email,omitempty"\`
}

func createUser(w http.ResponseWriter, r *http.Request) {
    body, err := io.ReadAll(r.Body)
    if err != nil {
        http.Error(w, "Ошибка чтения", http.StatusBadRequest)
        return
    }
    defer r.Body.Close()

    var user User
    err = json.Unmarshal(body, &user)
    if err != nil {
        http.Error(w, "Ошибка парсинга JSON", http.StatusBadRequest)
        return
    }

    fmt.Printf("Создан пользователь: %+v\\n", user)
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(map[string]interface{}{
        "status": "ok",
        "user":   user,
    })
}`}
          />
          <h2>JSON Decoder (потоковое чтение)</h2>
          <CodeHighlighter
            code={`func handler(w http.ResponseWriter, r *http.Request) {
    var user User
    
    // создаём декодер из тела
    decoder := json.NewDecoder(r.Body)
    
    // парсим напрямую
    err := decoder.Decode(&user)
    if err != nil {
        http.Error(w, "Неверный JSON", http.StatusBadRequest)
        return
    }
    defer r.Body.Close()
    
    // работаем с user
}`}
          />
        </div>
      ),
    },
    'Запись ответов — w.write, json, статусы': {
      get title() {
        return 'Запись ответов — w.write, json, статусы';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>w.Write — запись тела ответа</h2>
          <CodeHighlighter
            code={`func handler(w http.ResponseWriter, r *http.Request) {
    // простая строка
    w.Write([]byte("Hello, World!"))
    
    // или через fmt.Fprintf (удобнее)
    fmt.Fprintf(w, "Привет, %s!", "User")
}`}
          />
          <h2>Установка статус-кодов</h2>
          <CodeHighlighter
            code={`func handler(w http.ResponseWriter, r *http.Request) {
    // 1. Статус по умолчанию — 200 OK
    w.Write([]byte("OK"))

    // 2. Явная установка
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("OK"))

    // 3. Создание ресурса (201)
    w.WriteHeader(http.StatusCreated)
    w.Write([]byte("User created"))

    // 4. Ошибка клиента (400)
    w.WriteHeader(http.StatusBadRequest)
    w.Write([]byte("Invalid request"))

    // 5. Не найдено (404)
    w.WriteHeader(http.StatusNotFound)
    w.Write([]byte("Not found"))

    // 6. Внутренняя ошибка (500)
    w.WriteHeader(http.StatusInternalServerError)
    w.Write([]byte("Internal error"))
}`}
          />
          <h2>Установка заголовков</h2>
          <CodeHighlighter
            code={`func handler(w http.ResponseWriter, r *http.Request) {
    // 1. Content-Type
    w.Header().Set("Content-Type", "application/json")
    
    // 2. CORS
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    
    // 3. Кэширование
    w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
    
    // 4. Кастомный заголовок
    w.Header().Set("X-Request-ID", "12345")
    
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("OK"))
}`}
          />
        </div>
      ),
    },
    Middleware: {
      get title() {
        return 'Middleware';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Middleware</b> — функция, которая оборачивает обработчик и
            выполняет код до и/или после него.
          </p>
          <CodeHighlighter
            code={`func middleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // ДО обработчика
        next.ServeHTTP(w, r) // вызов обработчика
        // ПОСЛЕ обработчика
    })
}`}
          />
        </div>
      ),
    },
    Логгирование: {
      get title() {
        return 'Логгирование';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>log</h2>
          <CodeHighlighter
            code={`import "log"

func main() {
    log.Println("Сообщение")
    log.Printf("Форматированное %s", "сообщение")
    log.Fatal("Критическая ошибка") // выводит и завершает программу
    log.Panic("Паника")             // выводит и вызывает panic
}`}
          />
          <h2>slog — структурированное логирование</h2>
          <CodeHighlighter
            code={`import "log/slog"

func main() {
    // 1. Простое логирование
    slog.Info("Сообщение", "key", "value")
    slog.Debug("Отладка", "count", 42)
    slog.Warn("Предупреждение")
    slog.Error("Ошибка", "err", err)
}`}
          />
          <h2>Когда использовать</h2>
          <table>
            <thead>
              <tr>
                <th>ЗАДАЧА</th>
                <th>log</th>
                <th>slog</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Простое сообщение</td>
                <td>log.Println("msg")</td>
                <td>slog.Info("msg")</td>
              </tr>
              <tr>
                <td>С форматированием</td>
                <td>log.Printf("msg %s", val)</td>
                <td>slog.Info("msg", "key", val)</td>
              </tr>
              <tr>
                <td>Уровни</td>
                <td>Свои функции</td>
                <td>Debug, Info, Warn, Error</td>
              </tr>
              <tr>
                <td>Формат</td>
                <td>Текст</td>
                <td>Text или JSON</td>
              </tr>
              <tr>
                <td>Запись в файл</td>
                <td>log.SetOutput(file)</td>
                <td>slog.New(slog.NewJSONHandler(file, nil))</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Переменные окружения и конфигурация': {
      get title() {
        return 'Переменные окружения и конфигурация';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>Переменные окружения (os.Getenv)</h2>
          <CodeHighlighter
            code={`import "os"

func main() {
    // 1. Получить переменную
    host := os.Getenv("HOST")
    fmt.Println(host) // вернет "" если не задана

    // 2. Получить с проверкой
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080" // значение по умолчанию
    }

    // 3. Проверить существование
    val, exists := os.LookupEnv("API_KEY")
    if !exists {
        fmt.Println("API_KEY не задан")
    }

    // 4. Установить переменную (в текущем процессе)
    os.Setenv("APP_MODE", "production")

    // 5. Удалить переменную
    os.Unsetenv("TEMP_VAR")
}`}
          />
          <h2>Конфигурация с Viper</h2>
          <h3>Установка</h3>
          <CodeHighlighter
            language={'bash'}
            code={'go get github.com/spf13/viper'}
          />
          <h3>Возможности:</h3>
          <ul>
            <li>Чтение из .env, .json, .yaml, .toml</li>
            <li>Автоматическая подгрузка изменений</li>
            <li>Переменные окружения</li>
            <li>Значения по умолчанию</li>
          </ul>
          <h3>Файл config.yaml:</h3>
          <CodeHighlighter
            language={'yaml'}
            code={`host: localhost
port: 8080
env: development

database:
  host: localhost
  port: 5432
  user: postgres
  password: secret
  name: myapp

redis:
  host: localhost
  port: 6379`}
          />
          <h3>Пример использования:</h3>
          <CodeHighlighter
            code={`import "github.com/spf13/viper"

func main() {
    // 1. Инициализация Viper
    viper.SetConfigName("config")     // имя файла (без расширения)
    viper.SetConfigType("yaml")       // тип файла
    viper.AddConfigPath(".")          // путь к файлу
    viper.AddConfigPath("./config")   // дополнительные пути
    
    // 2. Загружаем конфиг
    err := viper.ReadInConfig()
    if err != nil {
        log.Fatal("Ошибка загрузки конфига:", err)
    }
    
    // 3. Читаем значения
    host := viper.GetString("host")
    port := viper.GetInt("port")
    env := viper.GetString("env")
    
    dbHost := viper.GetString("database.host")
    dbPort := viper.GetInt("database.port")
    
    // 4. В структуру
    type Config struct {
        Host string \`mapstructure:"host"\`
        Port int    \`mapstructure:"port"\`
        Env  string \`mapstructure:"env"\`
        DB   struct {
            Host string \`mapstructure:"host"\`
            Port int    \`mapstructure:"port"\`
            User string \`mapstructure:"user"\`
            Pass string \`mapstructure:"password"\`
            Name string \`mapstructure:"name"\`
        } \`mapstructure:"database"\`
    }
    
    var config Config
    err = viper.Unmarshal(&config)
    if err != nil {
        log.Fatal("Ошибка парсинга:", err)
    }
}`}
          />
        </div>
      ),
    },
    'Работа с БД — database/sql + драйвер': {
      get title() {
        return 'Работа с БД — database/sql + драйвер';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <h2>Установка драйвера</h2>
          <h3>PostgreSQL:</h3>
          <CodeHighlighter
            language={'bash'}
            code={`go get github.com/lib/pq`}
          />
          <h3>MySQL:</h3>
          <CodeHighlighter
            language={'bash'}
            code={`go get github.com/go-sql-driver/mysql`}
          />
          <hr />
          <h2>Подключение к БД</h2>
          <h3>PostgreSQL:</h3>
          <CodeHighlighter
            code={`import (
    "database/sql"
    _ "github.com/lib/pq"
)

func main() {
    connStr := "host=localhost port=5432 user=postgres password=secret dbname=myapp sslmode=disable"
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()
    
    // проверка подключения
    if err := db.Ping(); err != nil {
        log.Fatal(err)
    }
}`}
          />
          <h3>MySQL:</h3>
          <CodeHighlighter
            code={`connStr := "user:password@tcp(localhost:3306)/dbname?parseTime=true"
db, err := sql.Open("mysql", connStr)`}
          />
          <h2>CRUD операции</h2>
          <h3>Структура:</h3>
          <CodeHighlighter
            code={`type User struct {
    ID    int
    Name  string
    Email string
    Age   int
}`}
          />
          <h3>CREATE (INSERT):</h3>
          <CodeHighlighter
            code={`func createUser(db *sql.DB, user User) (int, error) {
    query := \`INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING id\`
    var id int
    err := db.QueryRow(query, user.Name, user.Email, user.Age).Scan(&id)
    return id, err
}`}
          />
          <h3>READ (SELECT):</h3>
          <CodeHighlighter
            code={`func getUser(db *sql.DB, id int) (User, error) {
    var user User
    query := \`SELECT id, name, email, age FROM users WHERE id = $1\`
    err := db.QueryRow(query, id).Scan(&user.ID, &user.Name, &user.Email, &user.Age)
    return user, err
}`}
          />
          <h3>READ (все строки):</h3>
          <CodeHighlighter
            code={`func getUsers(db *sql.DB) ([]User, error) {
    rows, err := db.Query(\`SELECT id, name, email, age FROM users\`)
    if err != nil {
        return nil, err
    }
    defer rows.Close()
    
    var users []User
    for rows.Next() {
        var u User
        err := rows.Scan(&u.ID, &u.Name, &u.Email, &u.Age)
        if err != nil {
            return nil, err
        }
        users = append(users, u)
    }
    return users, rows.Err()
}`}
          />
          <h3>UPDATE:</h3>
          <CodeHighlighter
            code={`func updateUser(db *sql.DB, user User) error {
    query := \`UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4\`
    _, err := db.Exec(query, user.Name, user.Email, user.Age, user.ID)
    return err
}`}
          />
          <h3>DELETE:</h3>
          <CodeHighlighter
            code={`func deleteUser(db *sql.DB, id int) error {
    _, err := db.Exec(\`DELETE FROM users WHERE id = $1\`, id)
    return err
}`}
          />
        </div>
      ),
    },
    'Миграции схем': {
      get title() {
        return 'Миграции схем';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Миграции</b> — это управление изменениями схемы БД через код
            (SQL-файлы).
          </p>
          <h2>Установка migrate</h2>
          <CodeHighlighter
            language={'bash'}
            code={'go get -u github.com/golang-migrate/migrate/v4'}
          />
          <h2>Создание миграций</h2>
          <CodeHighlighter
            language={'bash'}
            code={`# Создать файлы миграции
migrate create -ext sql -dir migrations -seq init_schema`}
          />
          <p>Создаст два файла:</p>
          <CodeHighlighter
            language={'bash'}
            code={`migrations/
├── 000001_init_schema.up.sql      # вперёд
└── 000001_init_schema.down.sql    # откат`}
          />
          <h3>000001_init_schema.up.sql:</h3>
          <CodeHighlighter
            language={'sql'}
            code={`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);`}
          />
          <h3>000001_init_schema.down.sql:</h3>
          <CodeHighlighter
            language={'bash'}
            code={`DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;`}
          />
          <h2>Применение миграций</h2>
          <h3>Применить все миграции (up):</h3>
          <CodeHighlighter
            language={'bash'}
            code={`migrate -path migrations -database "postgresql://user:pass@localhost:5432/dbname?sslmode=disable" up`}
          />
          <h3>Откатить последнюю (down 1):</h3>
          <CodeHighlighter
            language={'bash'}
            code={`migrate -path migrations -database "postgresql://user:pass@localhost:5432/dbname?sslmode=disable" down 1`}
          />
          <h3>Откатить все:</h3>
          <CodeHighlighter
            language={'bash'}
            code={`migrate -path migrations -database "postgresql://user:pass@localhost:5432/dbname?sslmode=disable" down`}
          />
          <h3>Принудительно установить версию:</h3>
          <CodeHighlighter
            language={'bash'}
            code={`migrate -path migrations -database "postgresql://user:pass@localhost:5432/dbname?sslmode=disable" force 2`}
          />
          <h3>Посмотреть версию:</h3>
          <CodeHighlighter
            language={'bash'}
            code={`migrate -path migrations -database "postgresql://user:pass@localhost:5432/dbname?sslmode=disable" version`}
          />
        </div>
      ),
    },
    'Graceful shutdown': {
      get title() {
        return 'Graceful shutdown';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Graceful shutdown</b> — плавное завершение сервера при получении
            сигнала (Ctrl+C, SIGTERM).
          </p>
          <p>Что должно произойти:</p>
          <ul>
            <li>Сервер перестаёт принимать новые запросы</li>
            <li>Завершаются текущие запросы</li>
            <li>Закрываются соединения с БД</li>
            <li>Программа завершается</li>
          </ul>
          <p>Зачем:</p>
          <ul>
            <li>Не обрывать запросы клиентов</li>
            <li>Освободить ресурсы</li>
            <li>Корректно завершить транзакции</li>
          </ul>
          <CodeHighlighter 
            code={`package main

import (
    "context"
    "fmt"
    "log"
    "net/http"
    "os"
    "os/signal"
    "time"
)

func main() {
    // 1. Создаём сервер
    srv := &http.Server{
        Addr:    ":8080",
        Handler: http.HandlerFunc(handler),
    }

    // 2. Запускаем в горутине
    go func() {
        log.Println("Сервер запущен на :8080")
        if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
            log.Fatal(err)
        }
    }()

    // 3. Ждём сигнал (Ctrl+C)
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, os.Interrupt, syscall.SIGTERM)
    <-quit
    log.Println("Получен сигнал завершения")

    // 4. Graceful shutdown
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    if err := srv.Shutdown(ctx); err != nil {
        log.Fatal("Ошибка при завершении:", err)
    }

    log.Println("Сервер остановлен")
}

func handler(w http.ResponseWriter, r *http.Request) {
    time.Sleep(2 * time.Second) // имитация долгой работы
    fmt.Fprintln(w, "OK")
}`}
          />
        </div>
      ),
    },
  },
};

export default Golang;
