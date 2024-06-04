const BasicCS = {
  'Basic CS principles': {
    'Система контроля версий': {
      id: '11',
      title: 'Система контроля версий',
      jsx: (
        <div>
          <p>
            <b>Git</b> - это консольная утилита, для отслеживания и ведения
            истории изменения файлов, в вашем проекте. Чаще всего его используют
            для кода, но можно и для других файлов. Например, для картинок -
            полезно для дизайнеров.
          </p>
          <p>
            С помощью <b>Git-a</b> вы можете откатить свой проект до более
            старой версии, сравнивать, анализировать или сливать свои изменения
            в репозиторий.
          </p>
          <p>
            Репозиторием называют хранилище вашего кода и историю его изменений.
            <b>Git</b> работает локально и все ваши репозитории хранятся в
            определенных папках на жестком диске.
          </p>
          <ul>
            Так же ваши репозитории можно хранить и в интернете. Обычно для
            этого используют три сервиса:
            <li>GitHub</li>
            <li>Bitbucket</li>
            <li>GitLab</li>
          </ul>
          Каждая точка сохранения вашего проекта носит название коммит (
          <span>commit</span>). У каждого <span>commit-a</span> есть{' '}
          <span>hash (уникальный id) и комментарий</span>. Из таких{' '}
          <span>commit-ов</span> собирается <b>ветка</b>. <b>Ветка</b> - это
          история изменений. У каждой ветки есть свое название. Репозиторий
          может содержать в себе несколько веток, которые создаются из других
          веток или вливаются в них.
        </div>
      ),
    },
    'Bash: Основы командной строки': {
      id: '12',
      title: 'Bash: Основы командной строки',
      jsx: (
        <div>
          <p>
            Терминал позволяет взаимодействовать с операционной системой путем
            ввода текстовых команд.
          </p>
          <ul>
            Основные команды <b>Bash</b> :
            <li>
              {' '}
              <b>man</b> : выводит руководство пользователя (справку) по
              команде.
            </li>
            <li>
              <b>pwd</b> : выводит сведения о рабочей директории.
            </li>
            <li>
              <b>ls</b> : выводит содержимое директории.
            </li>
            <li>
              <b>ps</b> : позволяет просматривать сведения о работающих
              процессах.
            </li>
            <br />
            <li>
              <b>cd</b> : изменение рабочей директории.
            </li>
            <li>
              <b>touch</b> : создание файла.
            </li>
            <li>
              <b>mkdir</b> : создание директории.
            </li>
            <li>
              <b>cp</b>: копирование файла.
            </li>
            <li>
              <b>mv</b> : перемещение или удаление файла.
            </li>
            <li>
              <b>ln</b> : создание ссылки.
            </li>
            <br />
            <li>
              <b>head</b> : чтение начала файла.
            </li>
            <li>
              <b>tail</b> : чтение конца файла.
            </li>
            <li>
              <b>cat</b> : чтение файла и вывод его содержимого на экран или
              конкатенация файлов.
            </li>
            <br />
            <li>
              <b>rm</b> : удаление файла.
            </li>
            <li>
              <b>kill</b> : остановка процесса.
            </li>
            <br />
            <li>
              <b>grep</b> : поиск информации.
            </li>
            <li>
              <b>ag</b> : продвинутая команда для поиска.
            </li>
          </ul>
        </div>
      ),
    },
    'Основные принципы ООП': {
      id: '13',
      title: 'Основные принципы ООП',
      jsx: (
        <div>
          <p>
            Основой ООП являются <b>класс</b> и <b>конструктор</b>. Конструктор
            - это функция, которая служит шаблоном для построения объекта. Это
            функция, которая вызывается с ключевым словом <b>New</b>, в
            результате этого создается пустой объект, к которому привязывается{' '}
            <b>this</b>.
          </p>
          <ul>
            Неявно просходит:
            <li>Создается новый объект</li>
            <li>
              На этот объект устанавливается <b>this</b>
            </li>
            <li>Функция возвращает этот объект</li>
          </ul>
          <p>
            <b>Инкапсуляция</b> - класс, является капсулой, которая содержит
            свои свойства и методы. Например, человек имеет свойства рост, вес,
            имя и методы ходить, есть и тд.
          </p>
          <p>
            <b>Наследование</b> - расширение существующего класса. Например,
            класс человек, от которого через ключевое слово <b>extends</b> можно
            создать класс программист, со своими свойствами и методами, которые
            расширят класс человек.
          </p>
          <p>
            <b>Полиформизм</b> - принцип, который позволяет одному и тому же
            фрагменту кода работать с разными типами данных.
          </p>
        </div>
      ),
    },
    SOLID: {
      id: '14',
      title: 'SOLID',
      jsx: (
        <div>
          <ul>
            Хорошая кодовая база:
            <li>
              <span>Маштабируемость</span> - легко вносить изменения
            </li>
            <li>
              Новым людям <span>легко вникнуть в проект</span>
            </li>
            <li>
              Код должен быть <span>простым</span>
            </li>
          </ul>
          <p>
            <b>Single Responsibility</b> (Принцип единственной ответственности)
            - каждый класс должен решать только за одну операцию.
          </p>
          <p>
            <b>Open-Closed</b> (Принцип открытости-закрытости) - классы должны 
            быть открыты для расширения, но закрыты для модификации.
          </p>
          <p>
            <b>Liskov Substitution</b> (Принцип подстановки Барбары Лисков) -
            каждый класс должен дополнять, а не замещать поведение базового
            класса.
          </p>
          <p>
            <b>Interface Segregation</b> (Принцип разделения интерфейсов) -
            класс должен производить только те операции, которые необходимы для
            осуществления его функций, не нужно создавать функционал, которым не
            пользуемся.
          </p>
          <p>
            <b>Dependency Inversion</b> (Принцип инверсии зависимостей) - модули
            верхнего уровня не должны зависеть от модулей нижнего уровня.
          </p>
        </div>
      ),
    },
    'Команды Git': {
      id: '15',
      title: 'Команды Git',
      jsx: (
        <div>
          <p>
            <b>git add</b> добавляет содержимое рабочего каталога в индекс
            (staging area) для последующего коммита.
          </p>
          <p>
            <b>git status</b> показывает состояния файлов в рабочем каталоге.
          </p>
          <p>
            <b>git commit</b> берёт все данные, добавленные в индекс с помощью{' '}
            <b>git add</b>, и сохраняет их слепок во внутренней базе данных, а
            затем сдвигает указатель текущей ветки на этот слепок.
          </p>
          <p>
            <b>git reset</b> используется для отмены изменений.
          </p>
          <p>
            <b>git rm</b> используется для удаления файлов из индекса и рабочей
            копии.
          </p>
          <p>
            <b>git mv</b> используется для перемещения файлов.
          </p>
          <p>
            <b>git clean</b> используется для удаления мусора из рабочего
            каталога.
          </p>
          <p>
            <b>git branch</b> показывает ветки.
          </p>
          <p>
            <b>git checkout</b> используется для переключения веток.
          </p>
          <p>
            <b>git merge</b> используется для слияния одной или нескольких веток
            в текущую.
          </p>
          <p>
            <b>git log</b> используется для просмотра истории коммитов.
          </p>
          <p>
            <b>git fetch</b> связывается с удалённым репозиторием и забирает из
            него все изменения, которых у вас пока нет и сохраняет их локально.
          </p>
          <p>
            <b>git pull</b> вначале забирает изменения из указанного удалённого
            репозитория, а затем пытается слить их с текущей веткой.
          </p>
          <p>
            <b>git push</b> используется для передачи изменений в удаленный
            репозиторий.
          </p>
          <p>
            <b>git remote</b> служит для управления списком удалённых
            репозиториев.
          </p>
          <p>
            <b>git show</b> используется для просмотра информации о коммите.
          </p>
          <p>
            <b>git cherry-pick</b> берёт изменения, вносимые одним коммитом, и
            пытается повторно применить их в виде нового коммита в текущей
            ветке. Эта возможность полезна в ситуации, когда нужно забрать
            парочку коммитов из другой ветки, а не сливать ветку целиком со
            всеми внесёнными в неё изменениями.
          </p>
          <p>
            <b>git rebase</b> выполняет ту же работу что и{' '}
            <b>git cherry-pick</b>, но для цепочки коммитов, тем самым как бы
            перенося ветку на новое место.
          </p>
          <p>
            <b>git revert</b> полная противоположность <b>git cherry-pick</b>.
            Она создаёт новый коммит, который вносит изменения, противоположные
            указанному коммиту, по существу отменяя его.
          </p>
        </div>
      ),
    },
    GitFlow: {
      id: '16',
      title: 'GitFlow',
      jsx: (
        <div>
          <p>
            <b>GitFlow</b> - методика работы с Git, в которой используются
            функциональные ветки и несколько основных.
          </p>
          <ul>
            Плюсы:
            <li>Удобный код ревью</li>
            <li>Подходит для релизов 1 раз в 1-2 недели</li>
            <li>Хорошо подходит для работы с несколькими релизами команды</li>
          </ul>
          <ul>
            Минусы:
            <li>Сложно делать много частых релизов</li>
            <li>Много merge коммитов</li>
          </ul>
        </div>
      ),
    },
  },
}

export default BasicCS
