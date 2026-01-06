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
    Интерполяция: {
      id: '93',
      title: 'Интерполяция',
      jsx: (
        <div>
          <p>
            <b>Интерполяция</b> — это синтаксис для отображения данных из
            JavaScript в HTML-шаблонах с помощью двойных фигурных скобок{' '}
            <b>{'{{ }}'}</b>.
          </p>
          <pre>
            <div className='numbers'>
              <code className='codeNumber'>1</code>
              <code className='codeNumber'>2</code>
              <code className='codeNumber'>3</code>
              <code className='codeNumber'>4</code>
              <code className='codeNumber'>5</code>
              <code className='codeNumber'>6</code>
              <code className='codeNumber'>7</code>
            </div>
            <code>
              <code>{'<script setup>'}</code>
              <code>const count = 0</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<h1>{{ 0 }}</h1>'}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'v-bind': {
      id: '94',
      title: 'v-bind',
      jsx: (
        <div>
          <p>
            <b>v-bind</b> - cвязывает атрибут HTML (например, href, src, class,
            style) или входной параметр компонента с выражением JavaScript из
            данных Vue.
          </p>
          <pre>
            <div className='numbers'>
              <code className='codeNumber'>1</code>
              <code className='codeNumber'>2</code>
              <code className='codeNumber'>3</code>
              <code className='codeNumber'>4</code>
              <code className='codeNumber'>5</code>
              <code className='codeNumber'>6</code>
              <code className='codeNumber'>7</code>
            </div>
            <code>
              <code>{'<script setup>'}</code>
              <code>const color = 'red'</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<h1 :class="color">Title</h1>'}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    slot: {
      id: '95',
      title: 'slot',
      jsx: (
        <div>
          <p>
            <b>Slot</b> — это механизм, позволяющий передавать и вставлять
            контент (HTML, компоненты, текст) в определённые места внутри
            компонента.
          </p>
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
            </div>
            <code>
              <code className='comment'>{'//'}App.vue</code>
              <code>{'<script setup>'}</code>
              <code>import Comp from './Comp.vue'</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<Comp>'}
              </code>
              <code>
                {'    '}
                {'<template #default>default</template>'}
              </code>
              <code>
                {'    '}
                {'<template #header>header</template>'}
              </code>
              <code>
                {'  '}
                {'</Comp>'}
              </code>
              <code>{'<template>'}</code>
            </code>
          </pre>
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
              <code className='comment'>{'//'}Comp.vue</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<div>'}
              </code>
              <code>
                {'    '}
                {'<slot name="header"/>'}
              </code>
              <code>
                {'    '}
                {'<div>'}
              </code>
              <code>
                {'      '}
                {'<slot />'}
              </code>
              <code>
                {'    '}
                {'</div>'}
              </code>
              <code>
                {'  '}
                {'</div>'}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'defineProps и withDefaults': {
      id: '96',
      title: 'defineProps и withDefaults',
      jsx: (
        <div>
          <p>
            <b>Props</b> - это механизм передачи данных от родительского
            компонента к дочернему.
          </p>
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
            </div>
            <code>
              <code className='comment'>{'//'} App.vue</code>
              <code>{'<script setup>'}</code>
              <code>import Comp from './Comp.vue'</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {"<Comp title='myTitle' :count='10'/>"}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
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
              <code className='codeNumber'>14</code>
            </div>
            <code>
              <code className='comment'>{'//'} Comp.vue</code>
              <code>{'<script setup lang="ts">'}</code>
              <code>{'interface Props {'}</code>
              <code>{'  '}title: string,</code>
              <code>{'  '}count: number</code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>{'const {title, count} = defineProps<Props>()'}</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<h1>{{title}}</h1>'}
              </code>
              <code>
                {'  '}
                {'<p>count: {{count}}</p>'}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
          <p>
            <b>withDefaults</b> — это утилита TypeScript в Composition API Vue
            3, которая позволяет задавать значения по умолчанию для props в
            компонентах с использованием <b>{'<script setup>'}</b>
          </p>
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
              <code className='codeNumber'>14</code>
              <code className='codeNumber'>15</code>
              <code className='codeNumber'>16</code>
            </div>
            <code>
              <code>{'<script setup lang="ts">'}</code>
              <code>{'interface Props {'}</code>
              <code>{'  '}title?: string,</code>
              <code>{'  '}count?: number</code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>
                {'const props = withDefaults(defineProps<Props>(), {'}
              </code>
              <code>{'  '}title: 'title',</code>
              <code>{'  '}count: 15</code>
              <code>{'})'}</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<h1>{{props.title}}</h1>'}
              </code>
              <code>
                {'  '}
                {'<p>count: {{props.count}}</p>'}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    Event: {
      id: '97',
      title: 'Event',
      jsx: (
        <div>
          <p>
            <b>Event</b> - это механизм для обработки взаимодействия
            пользователя с элементами интерфейса (клики, ввод текста и т.д.) и
            коммуникации между компонентами.
          </p>
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
              <code className='codeNumber'>14</code>
            </div>
            <code>
              <code>{'<script setup>'}</code>
              <code>{"import { ref } from 'vue'"}</code>
              <code>{'  '}</code>
              <code>const count = ref(0)</code>
              <code>{'  '}</code>
              <code>{'function countUp() {'}</code>
              <code>{'  '}++count.value</code>
              <code>{'}'}</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<p>count: {{count}}</p>'}
              </code>
              <code>
                {'  '}
                {"<button @click='countUp'>Add</button>"}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
          <ul>
            Vue предоставляет модификаторы для частых операций:
            <li>
              <b>@click.stop</b> Остановка всплытия (stopPropagation)
            </li>
            <li>
              <b>@submit.prevent</b> Предотвращение действия по умолчанию
              (preventDefault)
            </li>
            <li>
              <b>@click.stop.prevent</b> Модификатор по цепочке
            </li>
            <li>
              <b>@click.once</b> Только один раз
            </li>
            <li>
              <b>@keyup.enter</b> Модификаторы клавиш
            </li>
          </ul>
        </div>
      ),
    },
    Emits: {
      id: '98',
      title: 'Emits',
      jsx: (
        <div>
          <p>
            <b>Emits</b> — это способ, с помощью которого дочерний компонент
            отправляет события родительскому компоненту.
          </p>
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
              <code className='codeNumber'>14</code>
              <code className='codeNumber'>15</code>
              <code className='codeNumber'>16</code>
              <code className='codeNumber'>17</code>
            </div>
            <code>
              <code className='comment'>{'//'} App.vue</code>
              <code>{'<script setup>'}</code>
              <code>{"import { ref } from 'vue'"}</code>
              <code>{'  '}</code>
              <code>{"import Comp from './Comp.vue'"}</code>
              <code>{'  '}</code>
              <code>const count = ref(0)</code>
              <code>{'  '}</code>
              <code>{'function updateCount(newCount) {'}</code>
              <code>
                {'  '}
                {'count.value = newCount'}
              </code>
              <code>{'}'}</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {'<p>count: {{count}}</p>'}
              </code>
              <code>
                {'  '}
                {"<Comp @update-count='updateCount'/>"}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
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
            </div>
            <code>
              <code className='comment'>{'//'} Comp.vue</code>
              <code>{'<script setup lang="ts">'}</code>
              <code>const emit = defineEmits(['updateCount'])</code>
              <code>{'  '}</code>
              <code>{'function handleClick() {'}</code>
              <code>{'  '}emit('updateCount', 12)</code>
              <code>{'}'}</code>
              <code>{'</script>'}</code>
              <code>{'  '}</code>
              <code>{'<template>'}</code>
              <code>
                {'  '}
                {"<button @click='handleClick'>Add</button>"}
              </code>
              <code>{'</template>'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    'ref и reactive': {
      id: '99',
      title: 'ref',
      jsx: (
        <div>
          <p>
            <b>ref</b> оборачивает значение в реактивный объект, позволяя
            отслеживать его изменения и автоматически обновлять UI.
          </p>
          <p>Особенности работы:</p>
          <ul>
            <li>
              Обертка в объект: <b>ref</b> всегда возвращает объект со свойством{' '}
              <b>.value</b>
            </li>
            <li>
              Реактивность: Vue отслеживает изменения <b>.value</b>
            </li>
            <li>
              Автоматическая распаковка: В шаблонах не нужно использовать{' '}
              <b>.value</b>(Unwrap)
            </li>
          </ul>
          <p>Разница между ref и reactive</p>
          <p>ref:</p>
          <ul>
            <li>Работает с любыми типами данных</li>
            <li>
              Использует <b>.value</b> для доступа
            </li>
            <li>Можно переприсваивать полностью</li>
          </ul>
          <p>reactive:</p>
          <ul>
            <li>Только для объектов/массивов</li>
            <li>Прямой доступ к свойствам</li>
            <li>Нельзя переприсвоить полностью</li>
          </ul>
        </div>
      ),
    },
  },
};

export default Vue;
