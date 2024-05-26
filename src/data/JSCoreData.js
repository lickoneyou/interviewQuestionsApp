const JSCORE = {
  'JS CORE': {
    'Типы данных JavaScript и структуры данных': {
      id: '51',
      jsx: (
        <div>
          <ul>
            <b>JavaScript</b> имеет <b>8</b> встроенных типов данных:
            <li>null</li>
            <li>undefined</li>
            <li>boolean</li>
            <li>number</li>
            <li>string</li>
            <li>object</li>
            <li>symbol</li>
            <li>BigInt</li>
          </ul>
          <p>Структуры данных:</p>
          <p>
            <b>Массивы</b> — используются для хранения коллекции элементов,
            таких как числа, строки или объекты.
          </p>
          <p>
            <b>Стек</b> — это структура данных, которая работает по принципу{' '}
            <b>LIFO (Last In, First Out)</b>, что означает{' '}
            <span>«последним пришёл — первым вышел»</span> (push / pop).
          </p>
          <p>
            <b>Очередь</b> — это структура данных, которая работает по принципу{' '}
            <b>FIFO (First In, First Out)</b>, что означает{' '}
            <span>«первым пришёл — первым ушел»</span> (shift).
          </p>
          <p>
            <b>Связанный список</b> — это структура данных, которая состоит из
            узлов, каждый из которых содержит данные и ссылку на следующий узел
            в списке.
          </p>
          <ul>
            Существуют два основных типа связанных списков:
            <li>
              <b>Односвязный список</b> — структура данных, состоящая из
              элементов одного типа, последовательно связанных между собой
              указателями. Каждый элемент списка имеет указатель на следующий
              элемент. Последний элемент ни на что не указывает. Элемент, на
              который нет указателя, является первым в списке
            </li>
            <li>
              <b>Двусвязный список</b> — структура данных, в которой каждый
              элемент содержит указатель на следующий и предыдущий элементы. Это
              позволяет двигаться по списку в обоих направлениях
            </li>
          </ul>
          <p>
            <b>Деревья</b> — это структура, которая состоит из связанных узлов.
            Каждый узел дерева содержит данные и ссылки на его дочерние узлы.
            Вершина дерева называется корнем, узлы у которых нет потомков —
            листьями.
          </p>
          <p>
            <b>Бинарное дерево</b> — это структура данных, в которой каждый узел
            имеет не более двух детей, обычно обозначаемых как «левый ребёнок» и
            «правый ребёнок».
          </p>
          <p>
            <b>Графы</b> - это структура данных, которая представляет собой
            узлы, связанные рёбрами.
          </p>
          <ul>
            Графы бывают:
            <li>
              <b>Направленные</b> - в направленном графе рёбра имеют направление
            </li>
            <li>
              <b>Ненаправленные</b> - в ненаправленном графе рёбра не имеют
              направления
            </li>
          </ul>
        </div>
      ),
    },
    'Var, let или const? Проблемы областей видимости переменных': {
      id: '52',
      jsx: (
        <div>
          <p>
            <b>const</b> и <b>let</b> имеют блочную область видимости,{' '}
            <b>var</b> имеет функциональную область видимости.
          </p>
        </div>
      ),
    },
    'Преобразование типов для примитивов': {
      id: '53',
      jsx: (
        <div>
          <ul>
            Существует <b>3</b> наиболее широко используемых преобразования:
            <li>Строковое</li>
            <li>Числовое</li>
            <li>Логическое</li>
          </ul>
          <p>
            <b>String(value)</b> - переводит любое значение в строку.
          </p>
          <p>
            <b>Числовое</b> - происходит при математических операциях. Может
            быть вызвано с помощью <b>Number(value)</b>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Значение</th>
                <th>Становится</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>undefined</b>
                </td>
                <td>
                  <b>NaN</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>null</b>
                </td>
                <td>
                  <b>0</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>true / false</b>
                </td>
                <td>
                  <b>1 / 0</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>string</b>
                </td>
                <td>
                  пробельные символы по краям обрезаются, если{' '}
                  <span>пустая строка</span> - <b>0</b>, если <span>число</span>{' '}
                  - <b>число</b>, инача <b>NaN</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Логическое</b> - происходит в логических операциях. Может быть
            вызвано с помощью <b>Boolean(value)</b>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Значение</th>
                <th>Становится</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>0, null, undefined, NaN, ""</b>
                </td>
                <td>
                  <b>любое другое значение</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>false</b>
                </td>
                <td>
                  <b>true</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    'Операторы Сравнения': {
      id: '54',
    },
    'Логические операторы': {
      id: '55',
    },
    'Условное Ветвление: if ?': {
      id: '56',
    },
    'Циклы while и for': {
      id: '57',
    },
    'Конструкция "switch"': {
      id: '58',
    },
    Функции: {
      id: '59',
    },
    'try…catch': {
      id: '510',
    },
    'Строгий режим': {
      id: '511',
    },
    Массивы: {
      id: '512',
      jsx: (
        <div>
          <p>
            <b>Массив</b> в JavaScript — это особая структура данных, которая
            используется для хранения различных элементов.
          </p>
          <p>Методы:</p>
          <p>
            <b>some()</b> проверяет, удовлетворяет ли какой-либо элемент массива
            условию, заданному в передаваемой функции. Он вернет значение{' '}
            <b>true</b>, если хотя бы один элемент совпадет с проверяемой
            функцией, и значение <b>false</b> — если нет.
          </p>
          <p>
            <b>reduce()</b> принимает функцию, которая имеет в качестве
            аргумента аккумулятор и значение. Он применяет функцию к
            аккумулятору и каждому значению массива, возвращает{' '}
            <b>аккумулятор</b>.
          </p>
          <p>
            <b>every()</b> проверяет, удовлетворяют ли все элементы массива
            условию, заданному в передаваемой функции. Он вернет значение{' '}
            <b>true</b>, если каждый элемент совпадет с проверяемой функцией, и
            значение
            <b>false</b> — если нет.
          </p>
          <p>
            <b>map()</b> принимает функцию в качестве параметра и создает новый
            массив с результатом вызова указанной функции для каждого элемента.
          </p>
          <p>
            <b>flat()</b> сглаживает вложенные массивы в массив верхнего уровня.
          </p>
          <p>
            <b>filter()</b> принимает функцию в качестве параметра и возвращает
            новый массив, содержащий все элементы массива, для которого функция
            вернула <b>true</b>.
          </p>
          <p>
            <b>forEach()</b> применяет функцию к каждому элементу массива.
          </p>
          <p>
            <b>findIndex()</b> - принимает функцию в качестве параметра и в
            дальнейшем применяет ее к массиву. Он возвращает индекс найденного
            элемента, если элемент удовлетворяет условию проверяющей функции,
            переданной в качестве аргумента. Если не удовлетворяет, возвращается{' '}
            <b>–1</b>.
          </p>
          <p>
            <b>find()</b> принимает функцию в качестве аргумента и возвращает
            элемент для которого функция вернула <b>true</b> иначе{' '}
            <b>undefined</b>.
          </p>
          <p>
            <b>sort()</b> принимает функцию в качестве параметра. Он сортирует
            элементы массива и возвращает их.
          </p>
          <p>
            <b>concat()</b> объединяет два или более массива/значения и
            возвращает новый массив.
          </p>
          <p>
            <b>fill()</b> заполняет все элементы массива одинаковым значением{' '}
            <b>fill(value, start, end)</b>.
          </p>
          <p>
            <b>includes()</b> возвращает значение <b>true</b>, если массив
            содержит определенный элемент, иначе <b>false</b>.
          </p>
          <p>
            <b>reverse()</b> переворачивает массив.
          </p>
          <p>
            <b>push()</b> добавляет элемент в конец массива.
          </p>
          <p>
            <b>shift()</b> добавляет элемент в начало массива.
          </p>
          <p>
            <b>pop()</b> удаляет последний элемент.
          </p>
          <p>
            <b>unshift()</b> добавляет элемент в массив на первую позицию.
          </p>
          <p>
            <b>join()</b> переводит массив в строку.
          </p>
        </div>
      ),
    },
    Объекты: {
      id: '513',
    },
    'Сборка Мусора': {
      id: '514',
      jsx: (
        <div>
          <p>
            <b>Сборка мусора</b> выполняется автоматически. Мы не можем ускорить
            или предотвратить ее.
          </p>
          <p>
            Объекты сохраняются в памяти пока они <span>достижимы</span>.
          </p>
        </div>
      ),
    },
    This: {
      id: '515',
      jsx: (
        <div>
          <p>
            Значение <b>this</b> во время вызова является <b>объект</b>.
          </p>
          <p>
            Стрелочные функции являются особенными - у них нет <b>this</b>.
            Когда внутри стрелочной функции обращаются к <b>this</b>, то его
            значение берется извне.
          </p>
        </div>
      ),
    },
    'Оператор new': {
      id: '516',
      jsx: (
        <div>
          <p>
            <b>Функции конструкторы</b> следует вызывать только с помощью{' '}
            <b>new</b>. Такой вызов подразумевает создание <b>this</b>, привязку
            к нему <b>пустого объекта</b>, и возврат этого <b>this</b>.
          </p>
        </div>
      ),
    },
    'Именованное функциональное выражение(Named Function Expression)': {
      id: '517',
      jsx: (
        <div>
          <p>
            <b>Named Function Expression</b> — расширение функциональных
            выражений в JavaScript, позволяющее именовать функцию, созданную как
            часть выражения (FunctionExpression).
          </p>
        </div>
      ),
    },
    Прототипы: {
      id: '518',
      jsx: (
        <div>
          <p>
            <b>__proto__</b> - это свойство, которое является ссылкой на
            прототип объекта.
          </p>
          <p>
            <b>prototype</b> это свойство функции которое позволяет добавлять
            что-то в конструктор.
          </p>
        </div>
      ),
    },
    Классы: {
      id: '519',
    },
    'Асинхронный JavaScript': {
      id: '520',
    },
    Генераторы: {
      id: '521',
    },
    'Модули Иморт Экспорт': {
      id: '522',
    },
    'FetchAPI - Интерфейсывеб API, XMLHttpRequest': {
      id: '523',
    },
    Замыкания: {
      id: '524',
      jsx: (
        <div>
          <b>Замыкание</b> - это способность функции в JavaScript{' '}
          <span>запоминать лексическое окружение</span>, в котором она была
          создана.
        </div>
      ),
    },
    Рекурсия: {
      id: '525',
      jsx: (
        <div>
          <p>
            <b>Рекурсия</b> - это возможность функции вызвать саму себя.
          </p>
        </div>
      ),
    },
    'Map, Set, WeekMap, WeekSet': {
      id: '526',
      jsx: (
        <div>
          <p>
            <b>Map</b> – это коллекция ключ/значение, как и <b>Object</b>. Но
            основное отличие в том, что Map позволяет использовать ключи любого
            типа.
          </p>
          <ul>
            Методы и свойства:
            <li>
              <b>new Map()</b> – создаёт коллекцию
            </li>
            <li>
              <b>map.set(key, value)</b> – записывает по ключу <b>key</b>{' '}
              значение <b>value</b>
            </li>
            <li>
              <b>map.get(key)</b> – возвращает значение по ключу или{' '}
              <b>undefined</b>, если ключ <b>key</b> отсутствует
            </li>
            <li>
              <b>map.has(key)</b> – возвращает <b>true</b>, если ключ <b>key</b>{' '}
              присутствует в коллекции, иначе <b>false</b>
            </li>
            <li>
              <b>map.delete(key)</b> – удаляет элемент (пару «ключ/значение») по
              ключу <b>key</b>
            </li>
            <li>
              <b>map.clear()</b> – очищает коллекцию от всех элементов
            </li>
            <li>
              <b>map.size</b> – возвращает текущее количество элементов
            </li>
          </ul>
          <p>
            <b>Set</b> – это особый вид коллекции, где каждое значение может
            появляться только <span>один раз</span>.
          </p>
          <ul>
            Методы:
            <li>
              <b>new Set(iterable)</b> – создаёт <b>Set</b>, и если в качестве
              аргумента был предоставлен итерируемый объект (обычно это массив),
              то копирует его значения в новый <b>Set</b>
            </li>
            <li>
              <b>set.add(value)</b> – добавляет значение (если оно уже есть, то
              ничего не делает), возвращает тот же объект <b>set</b>
            </li>
            <li>
              <b>set.delete(value)</b> – удаляет значение, возвращает{' '}
              <b>true</b>, если
              <b>value</b> было в множестве на момент вызова, иначе <b>false</b>
            </li>
            <li>
              <b>set.has(value)</b> – возвращает <b>true</b>, если значение
              присутствует в множестве, иначе <b>false</b>
            </li>
            <li>
              <b>set.clear()</b> – удаляет все имеющиеся значения
            </li>
            <li>
              <b>set.size</b> – возвращает количество элементов в множестве
            </li>
          </ul>
          <p>
            <b>WeakMap</b> – это <b>Map</b>-подобная коллекция, позволяющая
            использовать в качестве ключей только объекты, и автоматически
            удаляющая их вместе с соответствующими значениями, как только они
            становятся недостижимыми иными путями.
          </p>
          <p>
            <b>WeakSet</b> – это <b>Set</b>-подобная коллекция, которая хранит
            только объекты и удаляет их, как только они становятся недостижимыми
            иными путями.
          </p>
          <p>
            <b>WeakMap</b> и <b>WeakSet</b> используются как вспомогательные
            структуры данных в дополнение к «основному» месту хранения объекта.
            Если объект удаляется из основного хранилища и нигде не
            используется, кроме как в качестве ключа в <b>WeakMap</b> или в{' '}
            <b>WeakSet</b>, то он будет удалён автоматически.
          </p>
        </div>
      ),
    },
  },
}

export default JSCORE
