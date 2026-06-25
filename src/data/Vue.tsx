import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const Vue = {
  Vue: {
    'Особенности Vue': {
      get title() {
        return 'Особенности Vue';
      },
      get id() {
        return slugifyText(this.title);
      },
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
      get title() {
        return 'Отличия между Options API и Composition API';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Options API (классический подход):</p>
          <CodeHighlighter 
            language={'html'}
            code={`<template>
  <button @click="count++">Кликнули {{ count }} раз</button>
</template>
  
<script>
export default {
  data() {
    return {
      count: 0
    {
  {
}
</script>`}
          />
          <p>Composition API (новый подход)</p>
          <CodeHighlighter 
            language={'html'}
            code={`<template>
  <button @click="count++">Кликнули {{ count }} раз</button>
</template>
  
<script setup>
import { ref } from 'vue'
  
const count = ref(0)
</script>`}
          />
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
      get title() {
        return 'Интерполяция';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Интерполяция</b> — это синтаксис для отображения данных из
            JavaScript в HTML-шаблонах с помощью двойных фигурных скобок{' '}
            <b>{'{{ }}'}</b>.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
const count = 0
</script>
  
<template>
  <h1>{{ 0 }}</h1>
</template>`}
          />
        </div>
      ),
    },
    'v-bind': {
      get title() {
        return 'v-bind';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>v-bind</b> - cвязывает атрибут HTML (например, href, src, class,
            style) или входной параметр компонента с выражением JavaScript из
            данных Vue.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
const color = 'red'
</script>
  
<template>
  <h1 :class="color">Title</h1>
</template>`}
          />
        </div>
      ),
    },
    slot: {
      get title() {
        return 'slot';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Slot</b> — это механизм, позволяющий передавать и вставлять
            контент (HTML, компоненты, текст) в определённые места внутри
            компонента.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`//App.vue
<script setup>
import Comp from './Comp.vue'
</script>
  
<template>
  <Comp>
    <template #default>default</template>
    <template #header>header</template>
  </Comp>
<template>`}
          />
          <CodeHighlighter 
            language={'html'}
            code={`//Comp.vue
<template>
  <div>
    <slot name="header"/>
    <div>
      <slot />
    </div>
  </div>
</template>`}
          />
        </div>
      ),
    },
    'defineProps и withDefaults': {
      get title() {
        return 'defineProps и withDefaults';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Props</b> - это механизм передачи данных от родительского
            компонента к дочернему.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`// App.vue
<script setup>
import Comp from './Comp.vue'
</script>
  
<template>
  <Comp title='myTitle' :count='10'/>
</template>`}
          />
          <CodeHighlighter 
            language={'html'}
            code={`// Comp.vue
<script setup lang="ts">
interface Props {
  title: string,
  count: number
}
  
const {title, count} = defineProps<Props>()
</script>
  
<template>
  <h1>{{title}}</h1>
  <p>count: {{count}}</p>
</template>`}
          />
          <p>
            <b>withDefaults</b> — это утилита TypeScript в Composition API Vue
            3, которая позволяет задавать значения по умолчанию для props в
            компонентах с использованием <b>{'<script setup>'}</b>
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup lang="ts">
interface Props {
  title?: string,
  count?: number
}
  
const props = withDefaults(defineProps<Props>(), {
  title: 'title',
  count: 15
})
</script>
  
<template>
  <h1>{{props.title}}</h1>
  <p>count: {{props.count}}</p>
</template>`}
          />
        </div>
      ),
    },
    Event: {
      get title() {
        return 'Event';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Event</b> - это механизм для обработки взаимодействия
            пользователя с элементами интерфейса (клики, ввод текста и т.д.) и
            коммуникации между компонентами.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
import { ref } from 'vue'
  
const count = ref(0)
  
function countUp() {
  ++count.value
}
</script>
  
<template>
  <p>count: {{count}}</p>
  <button @click='countUp'>Add</button>
</template>`}
          />
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
      get title() {
        return 'Emits';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Emits</b> — это способ, с помощью которого дочерний компонент
            отправляет события родительскому компоненту.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`// App.vue
<script setup>
import { ref } from 'vue'
  
import Comp from './Comp.vue'
  
const count = ref(0)
  
function updateCount(newCount) {
  count.value = newCount
}
</script>
  
<template>
  <p>count: {{count}}</p>
  <Comp @update-count='updateCount'/>
</template>`}
          />
          <CodeHighlighter 
            language={'html'}
            code={`// Comp.vue
<script setup lang="ts">
const emit = defineEmits(['updateCount'])
  
function handleClick() {
  emit('updateCount', 12)
}
</script>
  
<template>
  <button @click='handleClick'>Add</button>
</template>`}
          />
        </div>
      ),
    },
    'ref и reactive': {
      get title() {
        return 'ref и reactive';
      },
      get id() {
        return slugifyText(this.title);
      },
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
    'nextTick()': {
      get title() {
        return 'nextTick()';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>nextTick()</b> — это метод Vue, который позволяет отложить
            выполнение кода до следующего цикла обновления DOM. Это полезно,
            когда нужно работать с DOM после того, как Vue обновил его в ответ
            на изменение данных.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
import { ref, nextTick } from 'vue'
  
const msg = ref(1)
  
async function fn() {
  msg.value = 2
  await nextTick()
  const value = document.getElementById('msg').innerHTML
  console.log(value) // без nextTick выведет '1' c '2'
}
</script>
  
<template>
  <p id="msg">{{msg}}</p>
  <button @click="fn">Кнопка</button>
</template>`}
          />
        </div>
      ),
    },
    computed: {
      get title() {
        return 'computed';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>computed</b> это реактивные <span>вычисляемые свойства</span>,
            которые автоматически обновляются при изменении зависимых реактивных
            данных.
          </p>
          <p>Основные принципы:</p>
          <ul>
            <li>
              <b>Кэширование</b> — результат вычисляется только при изменении
              зависимостей
            </li>
            <li>
              <b>Реактивность</b> — автоматически отслеживает зависимости
            </li>
            <li>
              <b>Оптимизация</b> — предотвращает лишние перерасчеты
            </li>
          </ul>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
import { ref, computed } from 'vue'
  
const msg = ref(1)
const num = ref(1)
  
const value = computed(() => {
  return msg.value + 1
})
  
function fn() {
  msg.value = msg.value - num.value
  num.value += 1
}
// первый клик value = 1
// второй клик value = -1
</script>
  
<template>
  <p>{{value}}</p>
  <button @click="fn">Кнопка</button>
</template>`}
          />
        </div>
      ),
    },
    'v-if v-else': {
      get title() {
        return 'v-if v-else';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>v-if</b> и <b>v-else</b> — это{' '}
            <span>директивы условного рендеринга</span> во Vue.js, которые
            позволяют показывать или скрывать элементы в зависимости от условий.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
import { ref } from 'vue'
  
const isVisible = ref(true)
  
function fn() {
  isVisible.value = !isVisible.value
}
</script>
  
<template>
  <p v-if="isVisible">true</p>
  <p v-else>false</p>
  <button @click="fn">Кнопка</button>
</template>`}
          />
        </div>
      ),
    },
    'v-show': {
      get title() {
        return 'v-show';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>v-show</b> это директива для условного отображения элементов,
            которая работает через CSS-свойство <b>display.</b>
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
import { ref } from 'vue'
  
const isVisible = ref(true)
  
function fn() {
  isVisible.value = !isVisible.value
}
</script>
  
<template>
  <p class="text" v-show="isVisible">true</p>
  '//' при false text получит display: none
  <button @click="fn">Кнопка</button>
</template>`}
          />
        </div>
      ),
    },
    'v-for': {
      get title() {
        return 'v-for';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>v-for</b> — это директива во Vue.js, используемая для{' '}
            <span>рендеринга списков</span> данных. Она позволяет отображать
            элементы массива или объекта, создавая шаблон для каждого элемента.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
const arr = [1,2,3,4,5]
</script>
  
<template>
  <ul>
    <li v-for="element in arr" :key="element">{{element}}</li>
  </ul>
</template>`}
          />
        </div>
      ),
    },
    'v-model и defineModel()': {
      get title() {
        return 'v-model и defineModel()';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>v-model</b> - Двусторонняя привязка данных
          </p>
          <p>
            <b>defineModel()</b> - Упрощает создание пользовательских
            компонентов с поддержкой v-model в Composition API.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`// App.vue
<script setup>
import { ref } from 'vue'
  
import Comp from './Comp.vue'
  
const value = ref('')
</script>
  
<template>
  <p>{{value}}</p>
  <Comp v-model="value" />
</template>`}
          />
          <CodeHighlighter 
            language={'html'}
            code={`// Comp.vue
<script setup>
import { defineModel } from 'vue';
  
const model = defineModel()
</script>
  
<template>
  <input :value="model" @input="model = $event.target.value" />
</template>`}
          />
        </div>
      ),
    },
    'Хуки жизненного цикла': {
      get title() {
        return 'Хуки жизненного цикла';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <ul>
            <li>
              <b>onBeforeMount()</b> - До монтирования
            </li>
            <li>
              <b>onMounted()</b> - После монтирования
            </li>
            <li>
              <b>onBeforeUpdate()</b> - До обновления
            </li>
            <li>
              <b>onUpdated()</b> - После обновления
            </li>
            <li>
              <b>onBeforeUnmount()</b> - До размонтирования
            </li>
            <li>
              <b>onUnmounted()</b> - После размонтирования
            </li>
          </ul>
        </div>
      ),
    },
    watch: {
      get title() {
        return 'watch';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>watch</b> — это реактивная функция, которая отслеживает изменения
            одного или нескольких реактивных источников и выполняет колбэк при
            их изменении.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
import { ref, watch } from 'vue'
  
let count = ref(0)
let secondCount = ref(1)
  
watch([count, secondCount], () => {
  console.log(count.value, 'count')
// выведет в консоль 0 при изменении secondCount
})
  
secondCount.value = 2
</script>`}
          />
        </div>
      ),
    },
    'Provide Inject': {
      get title() {
        return 'Provide Inject';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>provide</b> и <b>inject</b> — это механизм в Vue для передачи
            данных от родительского компонента к глубоко вложенным дочерним
            компонентам, минуя промежуточные компоненты (пропуская{' '}
            <span>"props drilling"</span>).
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`// App.vue
<script setup>
import { ref, provide } from 'vue'
  
import Comp from './Comp.vue'
  
let count = ref(10)
  
provide('count', count)
</script>
  
<template>
  <Comp />
</template>`}
          />
          <CodeHighlighter 
            language={'html'}
            code={`// Comp.vue
<script setup>
import { inject } from 'vue';
  
const count = inject('count')
</script>
  
<template>{{count}}</template>`}
          />
        </div>
      ),
    },
    useTemplateRef: {
      get title() {
        return 'useTemplateRef';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>useTemplateRef</b> — это функция, возвращающая мутирующую
            (mutable) ref-ссылку на элемент шаблона.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup>
import { useTemplateRef, onMounted } from 'vue'
  
const elem = useTemplateRef('elem')
  
onMounted(() => {
  elem.value.innerHTML = '1'
})
</script>
  
<template>
  <div ref="elem">100</div>
</template>`}
          />
        </div>
      ),
    },
    Teleport: {
      get title() {
        return 'Teleport';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Teleport</b> — это встроенный компонент Vue 3, который позволяет
            «телепортировать» часть HTML-разметки в другое место в DOM, за
            пределами текущей иерархии компонента. Это особенно полезно для
            элементов вроде модальных окон, которые должны отображаться поверх
            всего контента, без ограничений CSS от родительских элементов.
          </p>
          <p>
            Атрибут <b>defer</b> заставляет Teleport ждать, пока цель появится в{' '}
            <span>DOM</span>.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`// App.vue
<script setup>
import Comp  from './Comp.vue';
</script>
  
<template>
  <div class="wrapper">
    <div>
      <Comp />
    /div>
  </div>
</template>`}
          />
          <CodeHighlighter 
            language={'html'}
            code={`// Comp.vue
<script setup>
import { Teleport } from 'vue';
</script>
  
<template>
  <Teleport defer to=".wrapper">
    <div class="comp">component</div>
  </Teleport>
</template>`}
          />
        </div>
      ),
    },
    Transition: {
      get title() {
        return 'Transition';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Transition</b> - это встроенный компонент для плавного
            анимирования появления.
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<template>
  <Transition>
    <Teleport to="body">
      <div class="modal_overlay">
        <div class="modal"></div>
      </div>
    </Teleport>
  </Transition>
</template>
  
<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>`}
          />
        </div>
      ),
    },
    Pinia: {
      get title() {
        return 'Pinia';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Подключение:</p>
          <CodeHighlighter 
            code={`import { createApp } from 'vue'
import { createPinia } from 'pinia'
  
import App from './App.vue'
  
const app = createApp(App)
  
app.use(createPinia())
  
app.mount('#app')`}
          />
          <p>Создание стора:</p>
          <CodeHighlighter 
            code={`import { defineStore } from 'pinia'
import { ref } from 'vue'
  
export const useStore = defineStore('store', () => {
  const value = ref([])
  
  const fn = () => {
  //...
  }
  
  return { value, fn }
})`}
          />
        </div>
      ),
    },
    Router: {
      get title() {
        return 'Router';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Подключение:</p>
          <CodeHighlighter 
            code={`import { createApp } from 'vue'
import router from './router'
  
import App from './App.vue'
  
const app = createApp(App)
  
app.use(router)
  
app.mount('#app')`}
          />
          <p>Роуты:</p>
          <CodeHighlighter 
            code={`import { createRouter, createWebHistory } from 'vue-router'
  
import Main from '@/pages/Main.vue'
import Card from '@/pages/Card.vue'
import Product from '@/pages/Product.vue'
  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main },
    { path: '/card', component: Card },
    { path: '/product/:id', component: Product },
  ],
})
  
export default router`}
          />
          <p>Подключение в App.vue:</p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
  
<template>
  <RouterView />
</template>`}
          />
          <p>
            Для роутов используется <b>RouterLink</b>
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<RouterLink to="/">Go to Home</RouterLink>`}
          />
          <p>
            или <b>router.push</b>
          </p>
          <CodeHighlighter 
            language={'html'}
            code={`<script setup lang="ts">
import { useRouter } from 'vue-router'
  
const router = useRouter()
</script>
  
<template>
  <Button @click="router.push('/')" label="Go to Home" />
</template>`}
          />
        </div>
      ),
    },
  },
};

export default Vue;
