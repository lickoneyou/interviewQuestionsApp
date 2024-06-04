const React = {
  React: {
    'Виртуальный DOM': {
      id: '61',
      title: 'Виртуальный DOM',
      jsx: (
        <div>
          <p>
            <b>Виртуальный DOM</b> нужен для того, чтобы каждый раз не обновлять
            реальный дом.
          </p>
          <p>
            Основное дерево <b>Сurrent tree</b>, при изменении чего либо на
            сайте строится новое дерево, которое называется{' '}
            <b>Work in progress tree</b>, далее происходит сравнение{' '}
            <b>Work in progress tree</b> с <b>Сurrent tree</b> и вычисляется
            разница между ними, эта разница отражается в{' '}
            <b>рендеринг окружения</b> и происходит обновление <b>DOM дерева</b>
            , получается <b>Work in progress tree</b> становится{' '}
            <b>Сurrent tree</b>.
          </p>
        </div>
      ),
    },
    'Жизненный цикл компонента': {
      id: '62',
      title: 'Жизненный цикл компонента',
      jsx: (
        <div>
          <p>
            <b>Initialization</b> - это фаза, на которой компонент начинает свой
            путь установив состояние и пропсы (<b>constructor</b>).
          </p>
          <p>
            <b>Mounting</b> - это фаза, на которой компонент монтируется в DOM.{' '}
            <b>componentWillMount</b> - перед рендерингом, в основном для
            настройки компонента. <b>componentDidMount</b> - вызывается после
            монтирования компонента в DOM, вызывается <b>1 раз</b> в жизненном
            цикле. <b>componentWillReceiveProps</b> - уведомляет, про то, что
            приходят новые входящие свойства в компонент.
          </p>
          <p>
            <b>Updation</b> - это то место, где состояние компонента изменяется,
            и происходит повторный ре-рендеринг. <b>shouldComponentUpdate</b> -
            возвращает true или false и служит для оптимизации. Решает, нужно ли
            делать ре-рендеринг. <b>componentWillUpdate</b> - уведомляет, что
            компонент будет обновлен. <b>componentDidUpdate</b> - уведомляет,
            что компонент был обновлен.
          </p>
          <p>
            <b>Unmounting</b> - это метод <b>componentWillUnmount</b>, который
            вызывается после размонтирования компонента (перед его удалением).
            Означает конец жизненного цикла компонента.
          </p>
        </div>
      ),
    },
    Контекст: {
      id: '63',
      title: 'Контекст',
      jsx: (
        <div>
          <p>
            <b>Context</b> - это механизм, который помогает передавать данные от
            одного компонента в другой, минуя промежуточные компоненты.
          </p>
          <p>
            Для того чтобы использовать контекст, нужно из React импортировать
            метод <b>createContext</b>. Для того, чтобы использовать{' '}
            <b>контекст</b> в компонете отправителя, оборачиваем{' '}
            <b>дочерний элемент</b> (контекст используется с методом{' '}
            <b>.Provider</b>). В <b>value</b> записываем контекст. Этот контекст
            можно получить используя хук <b>useContext</b>.
          </p>
        </div>
      ),
    },
    'Предохранители(Error Boundary)': {
      id: '64',
      title: 'Предохранители(Error Boundary)',
      jsx: (
        <div>
          <p>
            <b>Предохранители</b> - это компоненты React, которые отлавливают
            ошибки JavaScript, в любом месте деревьев, их дочерних компонентов,
            сохраняют их в журнале ошибок и выводят запасной UI вместо
            рухнувшего дерева компонентов.
          </p>
          <p>
            Предохранители <b>отлавливают ошибки</b> при рендеринге, в методах
            жизненного цикла и конструкторах деревьев компонентов, расположенных
            под ними.
          </p>
          <p>
            Предохранители <b>не поймают ошибки</b> в обработчиках событий,
            асинхронном коде, серверном рендеринге, в самом предохранителе.
          </p>
          <p>
            <b>getDerivedStateFromError</b> - срабатывает при рендеринге
            запасного UI в случае отлова ошибки.
          </p>
          <p>
            <b>componentDidCatch</b> - сработает при написании кода для
            журналирования информации об отловленной ошибке.
          </p>
        </div>
      ),
    },
    'Алгоритм согласования(Reconcilation)': {
      id: '65',
      title: 'Алгоритм согласования(Reconcilation)',
      jsx: (
        <div>
          <ul>
            <b>React Reconciliation</b> - это алгоритм за которым стоит то, что
            мы называем виртуальным домом. Это механизм{' '}
            <b>сравнения деревьев</b>
            <li>
              Элементы сравниваются <span>последовательно</span>
            </li>
            <li>
              Если у элемента изменился тип <span>он перемонтируется</span>
            </li>
            <li>
              Мы можем указать <b>key</b> для изменения порядка элементов без
              перемонтирования
            </li>
          </ul>
        </div>
      ),
    },
    'Компоненты высшего порядка': {
      id: '66',
      title: 'Компоненты высшего порядка',
      jsx: (
        <div>
          <p>
            <b>Компонент высшего порядка</b> - это компонент, который принимает
            на вход другой компронент и возвращает этот компонент с добавленной
            функциональностью.
          </p>
          <p>
            <b>forwardRef</b> - с помощью него создается компонент, и он нужен
            для того, чтобы прокидывать <b>ref</b> к пользовательскому
            компоненту.
          </p>
          <p>
            <b>React.memo</b> - это компонент высшего порядка.
          </p>
          <p>
            Если компонент всегда рендерит одно и тоже при неизменяющихся
            пропсах, мы можем обернуть его в вызов <b>React.memo</b> для
            повышения производительности в некоторых случаях, мемоизируя тем
            самым результат. Это значит что <b>React</b> будет использовать
            результат последнего рендеринга, избегая повторного рендеринга.
          </p>
        </div>
      ),
    },
    Рефы: {
      id: '67',
      title: 'Рефы',
      jsx: (
        <div>
          <p>
            <b>useRef</b> - возвращает объект со свойтвом <b>current</b>, если
            мы добавим элементу атрибут <b>ref</b>, <b>current</b> будет
            указывать на этот элемент.
          </p>
          <p>
            <b>useRef</b> не выполняет повторный ререндеринг компонента.
          </p>
          <p>
            Если мы используем ссылки на большое количество компонентов, код
            может стать менее читабельным и эффективным.
          </p>
          <ul>
            <b>useRef</b> полезен для:
            <li>Доступа к элементам DOM</li>
            <li>Cохранения предыдущего состояния</li>
            <li>Cохранения значений, которые не влияют на рендеринг</li>
          </ul>
        </div>
      ),
    },
    Хуки: {
      id: '68',
      title: 'Хуки',
      jsx: (
        <div>
          <p>
            <b>useState</b> - предназначен для того, чтобы взаимодействовать со
            стейтом. Параметром мы передаем <b>начальное состояние</b>. Хук
            возвращает массив, где 1 элемент это <b>состояние</b>, а второй{' '}
            <b>функция</b>, которая позволяет изменить это состояние.
          </p>
          <p>
            <b>useEffect</b> - нужен для эмуляции жизненных циклов компонента.
          </p>
          <p>
            Если его использовать без <b>[]</b>, функция в нем будет вызвана
            сразу при загрузке страницы и при любом обновлении.
          </p>
          <p>
            Если передать <span>пустой</span> <b>[]</b>, функция внутри{' '}
            <b>useEffect</b> будет вызвана <b>1 раз</b>, таким образом
            происходит эмуляция метода <b>componentDidMount</b>.
          </p>
          <p>
            Если в массив мы отправим <b>стейт</b>, функция внутри{' '}
            <b>useEffect</b> будет вызвана каждый раз, как этот <b>стейт</b>{' '}
            будет изменен.
          </p>
          <p>
            <b>useLayoutEffect</b> - тоже замое что и <b>useEffect</b>, только
            он вызывается до того, как браузер перерисует экран, в отличии от{' '}
            <b>useEffect</b>, который вызывается после, он <b>синхронный</b>, в
            то время как <b>useEffect асинхронный</b>.
          </p>
          <p>
            <b>useImperativeHandle</b> - нужен для того, чтобы родительский
            компонент мог пользоваться методами дочернего компонента.
          </p>
          <p>
            <b>useCallback</b> - нужен для того, чтобы момоизировать функцию.
            Например, если нужно использовать одну и туже функцию для нескольких
            компонеё, ее можно обернуть в <b>useCallback</b>, тогда функция
            будет создаваться <b>1 раз</b>, а для остальных компонентов будет
            использоваться мемоизированная функция.
          </p>
          <p>
            <b>useMemo</b> - нужен для кэширования и оптимизации, первым
            параметром принимает функцию, вторым - массив зависимостей.
          </p>
        </div>
      ),
    },
    'Реакт версия 18.0': {
      id: '69',
      title: 'Реакт версия 18.0',
      jsx: (
        <div>
          <p>
            <b>Batching</b> - процесс группировки нескольких вызовов обновления
            состояния в один этап рендеринга. Каждое изменение стейта вызывает
            перерисовку компонента, теперь перересовка изменений объединяется, и
            рендер происходит <b>1 раз</b>.
          </p>
          <p>
            <b>Конкурентный режим</b> - позволяет сделать перерисовку основного
            интерфейса отложенной (строит очередь приоритетов и определяет,
            когда эту перерисовку провести). Хуки: <b>useTransition</b> и{' '}
            <b>useDeferredValue</b>.
          </p>
          <p>
            Хук <b>useId</b> - возвращает уникальный ID.
          </p>
        </div>
      ),
    },
    'Оптимизация производительности': {
      id: '610',
      title: 'Оптимизация производительности',
      jsx: (
        <div>
          <p>
            Для оптимизации производительности можно использовать хуки{' '}
            <b>useMemo</b>, <b>useCallback</b> в <b>React 18</b> появились хуки{' '}
            <b>useTransition</b> и <b>useDeferredValue</b>.
          </p>
        </div>
      ),
    },
    'Императивный / Декларативный подход': {
      id: '611',
      title: 'Императивный / Декларативный подход',
      jsx: (
        <div>
          <p>
            <b>Императивный подход</b> - подход, при котором указыватеся каждый
            шаг.
          </p>
          <p>
            <b>Декларативный подход</b> - заключается в указании какого
            результата вы хотите достичь, вместо шагов, необходимых для его
            получения (<b>React</b>).
          </p>
        </div>
      ),
    },
  },
}

export default React
