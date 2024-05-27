const React = {
  React: {
    'Виртуальный DOM': {
      id: '61',
      title: 'Виртуальный DOM',
      jsx: (
        <div>
          <p>
            <b>Виртуальный DOM</b> нужен для того, чтобы кадлый раз не обновлять
            реальный дом.
          </p>
          <p>
            Основное дерево <b>Сurrent tree</b>, при изменении чего либо на
            сайте стоится новое дерево, которое называется{' '}
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
    },
    'Предохранители(Error Boundary)': {
      id: '64',
      title: 'Предохранители(Error Boundary)',
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
    },
    Рефы: {
      id: '67',
      title: 'Рефы',
    },
    Хуки: {
      id: '68',
      title: 'Хуки',
    },
    'Реакт версия 18.0': {
      id: '69',
      title: 'Реакт версия 18.0',
    },
    'Оптимизация производительности': {
      id: '610',
      title: 'Оптимизация производительности',
    },
  },
}

export default React
