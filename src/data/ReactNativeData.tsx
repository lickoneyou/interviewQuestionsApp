import CodeHighlighter from '../components/CodeHighlighter/CodeHighlighter';
import slugifyText from '../handlers/slugifyText';

const ReactNative = {
  ReactNative: {
    'Основные встроенные компоненты': {
      get title() {
        return 'Основные встроенные компоненты'
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>{'<View>'}</b> - аналог {'<div>'}
          </p>
          <p>
            <b>{'<Text>'}</b> - юбой текст на экране должен быть внутри{' '}
            {'<Text>'}
          </p>
          <p>
            <b>{'<TextInput>'}</b> - аналог {'<input> / <textarea>'}
          </p>
          <p>Кнопки:</p>
          <p>
            <b>Button</b> - нельзя стилизовать (только цвет), нет кастомных
            детей.
          </p>
          <p>
            <b>TouchableOpacity</b> - стандарт для 90% кнопок
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`<TouchableOpacity
  onPress={() => {}}
  activeOpacity={0.7}        // прозрачность при нажатии (0-1)
  disabled={false}
  style={styles.button}
>
  <Text style={styles.buttonText}>Кастомная кнопка</Text>
  <Icon name="arrow" />
</TouchableOpacity>`}
          />
          <p>
            <b>TouchableHighlight</b> - с цветовым фидбеком
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`<TouchableHighlight
  onPress={() => {}}
  underlayColor="#ddd"        // цвет подложки при нажатии
  activeOpacity={0.8}
>
  <View><Text>Кнопка</Text></View>
</TouchableHighlight>`}
          />
          <p>
            <b>TouchableWithoutFeedback</b> - без визуального фидбека
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`<TouchableWithoutFeedback onPress={() => {}}>
  <View><Text>Невидимая зона клика</Text></View>
</TouchableWithoutFeedback>`}
          />
          <p>
            <b>ScrollView</b> - для маленьких списков (всё рендерится сразу). До
            20-30 элементов, неизвестная высота, разнородный контент.
          </p>
          <p>
            <b>FlatList</b> - для больших списков (виртуализация)
          </p>
          <p>
            <span>Ключевые отличия FlatList:</span>
          </p>
          <ul>
            <li>
              Автоматическая переиспользование компонентов (как <span>key</span>{' '}
              в React)
            </li>
            <li>
              <span>renderItem</span> получает{' '}
              <span>{'{ item, index, separators }'}</span>
            </li>
            <li>
              Разделители: <span>ItemSeparatorComponent</span> — линия между
              элементами
            </li>
          </ul>
          <p>
            <b>{'<Image>'}</b>
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`// Локальное изображение (требует require)
<Image source={require('./assets/logo.png')} style={{ width: 100, height: 100 }} />
  
// Сетевое изображение (нужен uri)
<Image 
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 200, height: 200 }}
  resizeMode="cover"          // cover, contain, stretch, repeat, center
  onLoad={() => console.log('загружено')}
  onError={(e) => console.log('ошибка', e.nativeEvent.error)}
/>
  
// Для фонового изображения — используй ImageBackground
<ImageBackground source={require('./bg.png')} style={{ flex: 1 }}>
  <Text>Поверх картинки</Text>
</ImageBackground>`}
          />
          <p>
            <b>{'<SafeAreaView>'}</b> - Только для iPhone X и новее (с «челкой»
            и динамическим островом)
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { SafeAreaView } from 'react-native';
  
<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
  <Text>Контент не залезет под челку</Text>
</SafeAreaView>`}
          />
          <p>
            <b>{'<Modal>'}</b>
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`<Modal
  visible={isVisible}
  transparent={true}           // прозрачный фон
  animationType="slide"        // slide, fade, none
  onRequestClose={() => setIsVisible(false)}  // для Android (кнопка назад)
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <Text>Модальное окно</Text>
      <Button title="Закрыть" onPress={() => setIsVisible(false)} />
    </View>
  </View>
</Modal>`}
          />
          <p>
            <b>{'<ActivityIndicator>'}</b> - лоадер
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`<ActivityIndicator
  size="large"        // small, large, или число (Android)
  color="#0000ff"
  animating={true}
/>`}
          />
          <p>
            <b>{'<StatusBar>'}</b> - управление верхней панелью
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`<StatusBar 
  barStyle="light-content"   // dark-content, light-content, default
  backgroundColor="black"    // только Android
  translucent={true}         // полупрозрачная
  hidden={false}
/>`}
          />
        </div>
      ),
    },
    StyleSheet: {
      get title() {
        return 'StyleSheet';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>Создание стилей</p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { StyleSheet } from 'react-native';
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
  
// Использование
<View style={styles.container}>
  <Text style={styles.title}>Заголовок</Text>
</View>`}
          />
          <p>Зачем StyleSheet?</p>
          <ul>
            <li>Оптимизация — стили отправляются в нативный слой один раз</li>
            <li>
              Валидация на этапе компиляции (неправильное свойство = ошибка)
            </li>
            <li>Лучшая производительность, чем инлайн-объекты</li>
          </ul>
        </div>
      ),
    },
    'Специфичные хуки': {
      get title() {
        return 'Специфичные хуки';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>useWindowDimensions</b> - Возвращает актуальные размеры окна и
            обновляется при повороте экрана или изменении размеров окна. Хук,
            подписывается на изменения (при повороте экрана компонент
            перерендерится).
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { useWindowDimensions, View, Text } from 'react-native';
  
function ResponsiveComponent() {
  const { width, height, scale, fontScale } = useWindowDimensions();
  
  // Адаптивная верстка
  const isLandscape = width > height;
  const isTablet = width > 768;
  
  return (
    <View style={{
      width: width * 0.9,           // 90% ширины экрана
      padding: width > 500 ? 24 : 16,
      flexDirection: isLandscape ? 'row' : 'column',
    }}>
      <Text>Ширина: {width}, Высота: {height}</Text>
      <Text>Масштаб: {scale}, Масштаб шрифта: {fontScale}</Text>
    </View>
  );
}`}
          />
          <p>
            <b>useColorScheme</b> - Возвращает текущую цветовую схему
            устройства, установленную пользователем в настройках ОС
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { useColorScheme, View, Text, StyleSheet } from 'react-native';
  
function ThemedComponent() {
  const colorScheme = useColorScheme(); // 'light' | 'dark' | null
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
    },
    text: {
      color: colorScheme === 'dark' ? '#fff' : '#333',
    },
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Текущая тема: {colorScheme === 'dark' ? '🌙 Темная' : '☀️ Светлая'}
      </Text>
    </View>
  );
}`}
          />
          <p>
            <b>useAccessibilityInfo</b> - Позволяет узнать, включены ли на
            устройстве специальные возможности: экранный диктор
            (VoiceOver/TalkBack), уменьшенное движение, высокая контрастность и
            т.д.
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { useAccessibilityInfo, Text } from 'react-native';
  
function AccessibleComponent() {
  const {
    isScreenReaderEnabled,      // VoiceOver/TalkBack включен?
    isReduceMotionEnabled,      // уменьшенное движение?
    isAccessibilityServiceEnabled, // Android: сервис доступности включен?
    isBoldTextEnabled,          // iOS: жирный текст?
    isGrayscaleEnabled,         // iOS: оттенки серого?
    isInvertColorsEnabled,      // iOS: инверсия цветов?
  } = useAccessibilityInfo();
  
  return (
    <View>
      <Text>
        {isScreenReaderEnabled && '🔊 Экранный диктор активен'}
      </Text>
      {isReduceMotionEnabled && (
        <Text>♿️ Анимации отключены (используем fade вместо slide)</Text>
      )}
    </View>
  );
}`}
          />
        </div>
      ),
    },
    Навигация: {
      get title() {
        return 'Навигация';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>Stack Navigator</b> - Вы открываете новый экран — он ложится
            сверху. Нажимаете "Назад" — верхний лист убирается
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
const Stack = createNativeStackNavigator();
  
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
   );
}`}
          />
          <p>
            <b>Tab Navigator</b> - Панель вкладок в браузере. Вы всегда видите
            главные разделы и можете переключаться между ними мгновенно, не
            теряя контекст
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  
const Tab = createBottomTabNavigator();
  
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}`}
          />
          <p>
            <b>Drawer Navigator</b> - Основные вкладки на виду, а настройки,
            выход висят сбоку и появляются только когда свайпнешь или нажмешь
            иконку гамбургера
          </p>
          <CodeHighlighter 
            language={'jsx'}
            code={`import { createDrawerNavigator } from '@react-navigation/drawer';
  
const Drawer = createDrawerNavigator();
  
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MyTabs} /> {/* Можно вкладывать табы! */}
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}`}
          />
          <p>Хуки</p>
          <ul>
            <li>
              <b>useNavigation</b> - для навигации (кнопка "Назад", переход на
              другой экран).
            </li>
            <li>
              <b>useRoute</b> - чтобы получить параметры, переданные на текущий
              экран.
            </li>
            <li>
              <b>useNavigationState</b> - чтобы узнать текущий роут (например,
              выделить активную иконку).
            </li>
          </ul>
        </div>
      ),
    },
    AsyncStorage: {
      get title() {
        return 'AsyncStorage';
      },
      get id() {
        return slugifyText(this.title);
      },
      jsx: (
        <div>
          <p>
            <b>AsyncStorage</b> - работает по принципу "ключ-значение". Все
            ключи и значения — это строки
          </p>
          <p>Основные методы</p>
          <ul>
            <li>
              <b>setItem()</b> - сохраняет или обновляет данные.
            </li>
            <li>
              <b>getItem()</b> - читает данные по ключу.
            </li>
            <li>
              <b>removeItem()</b> - удаляет конкретный ключ.
            </li>
            <li>
              <b>mergeItem()</b> - обновляет только часть сохраненного
              JSON-объекта, не затрагивая остальные поля
            </li>
            <li>
              <b>clear()</b> - Удаляет всё!
            </li>
            <li>
              <b>multiGet() / multiSet()</b> - пакетное чтение или запись
              нескольких ключей за один раз. Это значительно быстрее, чем
              вызывать getItem в цикле
            </li>
          </ul>
        </div>
      ),
    },
  },
};

export default ReactNative;
