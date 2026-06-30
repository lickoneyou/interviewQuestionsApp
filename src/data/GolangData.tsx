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
        return 'Интерфейсы';
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
  },
};

export default Golang;
