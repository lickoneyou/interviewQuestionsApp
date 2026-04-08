const Next = {
  Next: {
    'Серверные vs Клиентские компоненты': {
      id: 'next-1',
      title: 'Серверные vs Клиентские компоненты',
      jsx: (
      <div>
        <p><b>Серверные компоненты</b> - компоненты, которые рендерятся исключительно на сервере.</p>
        <p>Возможности:</p>
        <ul>
          <li>✅ async/await прямо в компоненте</li>
          <li>✅ Прямой доступ к БД, файловой системе</li>
          <li>✅ Работа с серверными переменными окружения</li>
          <li>✅ Тяжелые вычисления (не нагружают клиент)</li>
          <li>✅ Использование headers(), cookies() из next/headers</li>
        </ul>
        <p>Ограничения:</p>
        <ul>
          <li>❌ Нет useState, useEffect, useReducer</li>
          <li>❌ Нет браузерных API (window, localStorage, document)</li>
          <li>❌ Нет событий (onClick, onChange)</li>
          <li>❌ Нельзя использовать хуки роутера (usePathname, useRouter)</li>
        </ul>
        <p><b>Клиентские компоненты</b> - которые рендерятся и на сервере (для SSR), и на клиенте (гидратация).</p>
        <p>Возможности:</p>
        <ul>
          <li>✅ Все хуки React (useState, useEffect, useContext)</li>
          <li>✅ Браузерные API (window, localStorage, Intersection Observer)</li>
          <li>✅ Обработчики событий (onClick, onChange, onSubmit)</li>
          <li>✅ Хуки Next.js роутера (usePathname, useSearchParams)</li>
          <li>✅ Сторонние библиотеки с состоянием (Zustand, Redux)</li>
        </ul>
        <p>Ограничения:</p>
        <ul>
          <li>❌ Нельзя использовать async/await напрямую (нужен useEffect или библиотеки)</li>
          <li>❌ Нет прямого доступа к БД (только через API)</li>
          <li>❌ Увеличивает размер бандла</li>
        </ul>
      </div>
      ),
    },
  },
};

export default Next;
