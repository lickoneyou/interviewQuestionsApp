const HTTP = {
  HTTP: {
    'HTTP basics': {
      id: '21',
      jsx: (
        <div>
          <p>
            <b>HTTP</b> - это гипертекстовый транспортный протокол.
            Первоначально идея <b>HTTP</b> - это обмен гипертекстовыми
            документами <b>HTML</b>, но сейчас с помощью HTTP{' '}
            <span>можно передавать</span> : тексты, файлы, HTML, XML, json.
          </p>
          <ul>
            Структура HTTP:
            <li>
              Первая строчка - это <span>стартовая строка</span>,{' '}
              <b>состоит из 3ех частей</b> :
              <ul>
                <li>Метод</li>
                <li>URL</li>
                <li>Версия HTTP</li>
              </ul>
            </li>
            <li>
              <span>Заголовки.</span> B заголовках указывается информация о
              хосте, с которого был отправлен запрос, информация о браузере,
              типе устройства, с которого отправляется запрос, тип контента,
              например: json, текст. Также могут отправляться различные
              авторизационные заголовки с токенами. С помощью заголовков
              обеспечивается безопасность взаимодействия различных источников в
              сети - <b>CORS заголовки</b>.
            </li>
            <li>
              <span>Тело сообщения</span>. В нем клиент <span>отправляет</span>{' '}
              серверу какие-то данные.
            </li>
          </ul>
        </div>
      ),
    },
    'Методы HTTP запроса': {
      id: '22',
      jsx: (
        <div>
          <ul>
            Методы HTTP:
            <li>
              <b>GET</b> - получение ресурсов
            </li>
            <li>
              <b>POST</b> - передача данных (создание ресурса)
            </li>
            <li>
              <b>PUT</b> - обновление ресурса
            </li>
            <li>
              <b>PATH</b> - обновление фрагмента ресурса (частичное)
            </li>
            <li>
              <b>DELET</b> - удаление ресурса
            </li>
          </ul>
        </div>
      ),
    },
    'Коды ответа': {
      id: '23',
    },
    'HTTP-кеширование': {
      id: '24',
    },
    HTTPS: {
      id: '25',
    },
    CORS: {
      id: '26',
    },
    WebSocket: {
      id: '27',
    },
    'HTTP-куки': {
      id: '28',
    },
  },
}

export default HTTP
