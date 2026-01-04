const Vue = {
  Vue: {
    'Особенности Vue': {
      id: '91',
      title: 'Особенности Vue',
      jsx: (
        <div>
          <ul>
            <li>
              Прогрессивность:
              <ul>
                <li>Можно подключать через {'<script>'} тег без сборки.</li>
                <li>
                  Можно использовать как фреймворк с мощной экосистемой (Vue
                  Router, Pinia, Vite).
                </li>
              </ul>
            </li>
            <li>Реактивность на основе Proxy (в Vue 3)</li>
            <li>
              Компонентный подход с Single-File Components (SFC - .vue файлы) -
              Логика (JavaScript), разметка (HTML) и стили (CSS) компонента
              инкапсулируются в одном понятном файле.
              <ul>
                <li>template</li>
                <li>script</li>
                <li>style</li>
              </ul>
            </li>
            <li>
              Композиционный API (Vue 3) - Новый API на основе функций (ref,
              reactive, computed, watch) позволяет гибко организовывать и
              переиспользовать логику (как React Hooks).
            </li>
            <li>
              Простота и низкий порог входа - Синтаксис близок к vanilla HTML,
              CSS и JS. Официальная документация — одна из лучших. Это позволяет
              быстро начать разработку.
            </li>
            <li>
              Интеграция и гибкость:
              <ul>
                <li>
                  Поддерживает рендеринг на стороне сервера (SSR) через Nuxt.js.
                </li>
                <li>Позволяет писать компоненты на TypeScript.</li>
              </ul>
            </li>
            <li>
              Мощная экосистема:
              <ul>
                <li>
                  <b>Vue Router</b> — маршрутизация для SPA.
                </li>
                <li>
                  <b>Pinia</b> — современный state-менеджер (замена Vuex).
                </li>
                <li>
                  <b>Vite</b> — сверхбыстрый инструмент для сборки и разработки
                  (создан создателем Vue).
                </li>
              </ul>
            </li>
            <li>
              Реактивность "из коробки" без дополнительного кода - В отличие от
              React, где нужно явно использовать <b>setState</b> или хуки, в Vue
              данные по умолчанию реактивны.
            </li>
            <li>Директивы v-model для двустороннего связывания</li>
            <li>Инструменты для разработчика (Vue Devtools)</li>
          </ul>
        </div>
      ),
    },
    'Отличия между Options API и Composition API': {
      id: '92',
      title: 'Отличия между Options API и Composition API',
      jsx: (
        <div>
          <p>Options API (классический подход):</p>
          <pre>
            <div className='numbers'>
              <code className='codeNumber'>1</code>
              <code className='codeNumber'>2</code>
              <code className='codeNumber'>3</code>
              <code className='codeNumber'>4</code>
              <code className='codeNumber'>5</code>
              <code className='codeNumber'>6</code>
              <code className='codeNumber'>7</code>
              <code className='codeNumber'>8</code>
              <code className='codeNumber'>9</code>
              <code className='codeNumber'>10</code>
              <code className='codeNumber'>11</code>
              <code className='codeNumber'>12</code>
              <code className='codeNumber'>13</code>
            </div>
            <code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<button @click="count++">Кликнули {{ count }} раз</button>'}
              </code>
              <code>{'</template>'}</code>
              <code>{'  '}</code>
              <code>{'<script>'}</code>
              <code>export default {'{'}</code>
              <code>
                {'  '}data() {'{'}
              </code>
              <code>
                {'    '}return {'{'}
              </code>
              <code>{'      '}count: 0</code>
              <code>
                {'    '}
                {'{'}
              </code>
              <code>
                {'  '}
                {'{'}
              </code>
              <code>{'}'}</code>
              <code>{'</script>'}</code>
            </code>
          </pre>
          <p>Composition API (новый подход)</p>
          <pre>
            <div className='numbers'>
              <code className='codeNumber'>1</code>
              <code className='codeNumber'>2</code>
              <code className='codeNumber'>3</code>
              <code className='codeNumber'>4</code>
              <code className='codeNumber'>5</code>
              <code className='codeNumber'>6</code>
              <code className='codeNumber'>7</code>
              <code className='codeNumber'>8</code>
              <code className='codeNumber'>9</code>
            </div>
            <code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<button @click="count++">Кликнули {{ count }} раз</button>'}
              </code>
              <code>{'</template>'}</code>
              <code>{'  '}</code>
              <code>{'<script setup>'}</code>
              <code>import {'{ ref }'} from 'vue'</code>
              <code>{'  '}</code>
              <code>const count = ref(0)</code>
              <code>{'</script>'}</code>
            </code>
          </pre>
          <p>Ключевые отличия:</p>
          <ul>
            <li>
              Организация кода:
              <ul>
                <li>
                  <b>Options API:</b> Код организован по опциям (data, methods,
                  computed и т.д.)
                </li>
                <li>
                  <b>Composition API:</b> Код организован по логической
                  функциональности (все связанное с одной логикой вместе)
                </li>
              </ul>
            </li>
            <li>
              Переиспользование логики:
              <ul>
                <li>
                  <b>Options API:</b> Mixins, которые имеют проблемы с
                  конфликтами имен и неявными зависимостями
                </li>
                <li>
                  <b>Composition API:</b> Композаблы (composables) - чистые
                  функции JavaScript
                </li>
              </ul>
            </li>
            <li>
              Типизация:
              <ul>
                <li>
                  <b>Options API:</b> Ограниченная поддержка TypeScript
                </li>
                <li>
                  <b>Composition API:</b> Отличная поддержка TypeScript
                </li>
              </ul>
            </li>
            <li>
              this контекст:
              <ul>
                <li>
                  <b>Options API:</b> Используется <b>this</b> для доступа к
                  свойствам
                </li>
                <li>
                  <b>Composition API:</b> Нет <b>this</b>, используются refs и
                  reactive
                </li>
              </ul>
            </li>
            <li>
              Гибкость:
              <ul>
                <li>
                  <b>Options API:</b> Более строгая структура
                </li>
                <li>
                  <b>Composition API:</b> Больше свободы в организации кода
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
  },
};

export default Vue;
