import CodeNumber from '../components/Basic/CodeNumbers';

const ReactNative = {
  ReactNative: {
    'Основные встроенные компоненты': {
      id: 'react-native-1',
      title: 'Основные встроенные компоненты',
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
          <pre>
            <CodeNumber length={9} />
            <code>
              <code>{'<TouchableOpacity'}</code>
              <code>
                {'  '}
                {'onPress={() => {}}'}
              </code>
              <code>
                {'  '}
                {'activeOpacity={0.7}        // прозрачность при нажатии (0-1)'}
              </code>
              <code>
                {'  '}
                {'disabled={false}'}
              </code>
              <code>
                {'  '}
                {'style={styles.button}'}
              </code>
              <code>{'>'}</code>
              <code>
                {'  '}
                {'<Text style={styles.buttonText}>Кастомная кнопка</Text>'}
              </code>
              <code>
                {'  '}
                {'<Icon name="arrow" />'}
              </code>
              <code>{'</TouchableOpacity>'}</code>
            </code>
          </pre>
          <p>
            <b>TouchableHighlight</b> - с цветовым фидбеком
          </p>
          <pre>
            <CodeNumber length={7} />
            <code>
              <code>{'<TouchableHighlight'}</code>
              <code>
                {'  '}
                {'onPress={() => {}}'}
              </code>
              <code>
                {'  '}
                {'underlayColor="#ddd"        // цвет подложки при нажатии'}
              </code>
              <code>
                {'  '}
                {'activeOpacity={0.8}'}
              </code>
              <code>{'>'}</code>
              <code>
                {'  '}
                {'<View><Text>Кнопка</Text></View>'}
              </code>
              <code>{'</TouchableHighlight>'}</code>
            </code>
          </pre>
          <p>
            <b>TouchableWithoutFeedback</b> - без визуального фидбека
          </p>
          <pre>
            <CodeNumber length={3} />
            <code>
              <code>{'<TouchableWithoutFeedback onPress={() => {}}>'}</code>
              <code>
                {'  '}
                {'<View><Text>Невидимая зона клика</Text></View>'}
              </code>
              <code>{'</TouchableWithoutFeedback>'}</code>
            </code>
          </pre>
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
          <pre>
            <CodeNumber length={16} />
            <code>
              <code className='comment'>
                {'// Локальное изображение (требует require)'}
              </code>
              <code>{`<Image source={require('./assets/logo.png')} style={{ width: 100, height: 100 }} />`}</code>
              <code>{'  '}</code>
              <code className='comment'>
                {'// Сетевое изображение (нужен uri)'}
              </code>
              <code>{`<Image `}</code>
              <code>
                {'  '}
                {`source={{ uri: 'https://example.com/image.jpg' }}`}
              </code>
              <code>
                {'  '}
                {'style={{ width: 200, height: 200 }}'}
              </code>
              <code>
                {'  '}
                {`resizeMode="cover"          // cover, contain, stretch, repeat, center`}
              </code>
              <code>
                {'  '}
                {`onLoad={() => console.log('загружено')}`}
              </code>
              <code>
                {'  '}
                {`onError={(e) => console.log('ошибка', e.nativeEvent.error)}`}
              </code>
              <code>{'/>'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Для фонового изображения — используй ImageBackground`}</code>
              <code>{`<ImageBackground source={require('./bg.png')} style={{ flex: 1 }}>`}</code>
              <code>
                {'  '}
                {'<Text>Поверх картинки</Text>'}
              </code>
              <code>{'</ImageBackground>'}</code>
            </code>
          </pre>
          <p>
            <b>{'<SafeAreaView>'}</b> - Только для iPhone X и новее (с «челкой»
            и динамическим островом)
          </p>
          <pre>
            <CodeNumber length={5} />
            <code>
              <code>{`import { SafeAreaView } from 'react-native';`}</code>
              <code>{'  '}</code>
              <code>{`<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>`}</code>
              <code>
                {'  '}
                {'<Text>Контент не залезет под челку</Text>'}
              </code>
              <code>{'</SafeAreaView>'}</code>
            </code>
          </pre>
          <p>
            <b>{'<Modal>'}</b>
          </p>
          <pre>
            <CodeNumber length={13} />
            <code>
              <code>{'<Modal'}</code>
              <code>
                {'  '}
                {'visible={isVisible}'}
              </code>
              <code>
                {'  '}
                {`transparent={true}           // прозрачный фон`}
              </code>
              <code>
                {'  '}
                {`animationType="slide"        // slide, fade, none`}
              </code>
              <code>
                {'  '}
                {`onRequestClose={() => setIsVisible(false)}  // для Android (кнопка назад)`}
              </code>
              <code>{'>'}</code>
              <code>
                {'  '}
                {`<View style={styles.modalOverlay}>`}
              </code>
              <code>
                {'    '}
                {`<View style={styles.modalContent}>`}
              </code>
              <code>
                {'      '}
                {`<Text>Модальное окно</Text>`}
              </code>
              <code>
                {'      '}
                {`<Button title="Закрыть" onPress={() => setIsVisible(false)} />`}
              </code>
              <code>
                {'    '}
                {`</View>`}
              </code>
              <code>
                {'  '}
                {'</View>'}
              </code>
              <code>{'</Modal>'}</code>
            </code>
          </pre>
          <p>
            <b>{'<ActivityIndicator>'}</b> - лоадер
          </p>
          <pre>
            <CodeNumber length={5} />
            <code>
              <code>{`<ActivityIndicator`}</code>
              <code>
                {'  '}
                {`size="large"        // small, large, или число (Android)`}
              </code>
              <code>
                {'  '}
                {'color="#0000ff"'}
              </code>
              <code>
                {'  '}
                {'animating={true}'}
              </code>
              <code>{'/>'}</code>
            </code>
          </pre>
          <p>
            <b>{'<StatusBar>'}</b> - управление верхней панелью
          </p>
          <pre>
            <CodeNumber length={6} />
            <code>
              <code>{'<StatusBar '}</code>
              <code>
                {'  '}
                {`barStyle="light-content"   // dark-content, light-content, default`}
              </code>
              <code>
                {'  '}
                {`backgroundColor="black"    // только Android`}
              </code>
              <code>
                {'  '}
                {`translucent={true}         // полупрозрачная`}
              </code>
              <code>
                {'  '}
                {`hidden={false}`}
              </code>
              <code>{'/>'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    StyleSheet: {
      id: 'react-native-2',
      title: 'StyleSheet',
      jsx: (
        <div>
          <p>Создание стилей</p>
          <pre>
            <CodeNumber length={19} />
            <code>
              <code>{`import { StyleSheet } from 'react-native';`}</code>
              <code>{'  '}</code>
              <code>{'const styles = StyleSheet.create({'}</code>
              <code>
                {'  '}
                {`container: {`}
              </code>
              <code>
                {'    '}
                {`flex: 1,`}
              </code>
              <code>
                {'    '}
                {`padding: 20,`}
              </code>
              <code>
                {'    '}
                {`backgroundColor: '#fff',`}
              </code>
              <code>
                {'  '}
                {'},'}
              </code>
              <code>
                {'  '}
                {`title: {`}
              </code>
              <code>
                {'    '}
                {`fontSize: 24,`}
              </code>
              <code>
                {'    '}
                {`fontWeight: 'bold',`}
              </code>
              <code>
                {'    '}
                {`color: '#333',`}
              </code>
              <code>
                {'  '}
                {'},'}
              </code>
              <code>{'});'}</code>
              <code>{'  '}</code>
              <code className='comment'>{`// Использование`}</code>
              <code>{'<View style={styles.container}>'}</code>
              <code>
                {'  '}
                {'<Text style={styles.title}>Заголовок</Text>'}
              </code>
              <code>{'</View>'}</code>
            </code>
          </pre>
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
      id: 'react-native-3',
      title: 'Специфичные хуки',
      jsx: (
        <div>
          <p>
            <b>useWindowDimensions</b> - Возвращает актуальные размеры окна и
            обновляется при повороте экрана или изменении размеров окна. Хук,
            подписывается на изменения (при повороте экрана компонент
            перерендерится).
          </p>
          <pre>
            <CodeNumber length={20} />
            <code>
              <code>{`import { useWindowDimensions, View, Text } from 'react-native';`}</code>
              <code>{'  '}</code>
              <code>{'function ResponsiveComponent() {'}</code>
              <code>
                {'  '}
                {`const { width, height, scale, fontScale } = useWindowDimensions();`}
              </code>
              <code>{'  '}</code>
              <code className='comment'>
                {'  '}
                {`// Адаптивная верстка`}
              </code>
              <code>
                {'  '}
                {'const isLandscape = width > height;'}
              </code>
              <code>
                {'  '}
                {'const isTablet = width > 768;'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`return (`}
              </code>
              <code>
                {'    '}
                {`<View style={{`}
              </code>
              <code>
                {'      '}
                {`width: width * 0.9,           // 90% ширины экрана`}
              </code>
              <code>
                {'      '}
                {`padding: width > 500 ? 24 : 16,`}
              </code>
              <code>
                {'      '}
                {`flexDirection: isLandscape ? 'row' : 'column',`}
              </code>
              <code>
                {'    '}
                {'}}>'}
              </code>
              <code>
                {'      '}
                {`<Text>Ширина: {width}, Высота: {height}</Text>`}
              </code>
              <code>
                {'      '}
                {`<Text>Масштаб: {scale}, Масштаб шрифта: {fontScale}</Text>`}
              </code>
              <code>
                {'    '}
                {'</View>'}
              </code>
              <code>
                {'  '}
                {');'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>
            <b>useColorScheme</b> - Возвращает текущую цветовую схему
            устройства, установленную пользователем в настройках ОС
          </p>
          <pre>
            <CodeNumber length={22} />
            <code>
              <code>{`mport { useColorScheme, View, Text, StyleSheet } from 'react-native';`}</code>
              <code>{'  '}</code>
              <code>{'function ThemedComponent() {'}</code>
              <code>
                {'  '}
                {`const colorScheme = useColorScheme(); // 'light' | 'dark' | null`}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {`const styles = StyleSheet.create({`}
              </code>
              <code>
                {'    '}
                {`container: {`}
              </code>
              <code>
                {'      '}
                {`backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',`}
              </code>
              <code>
                {'    '}
                {'},'}
              </code>
              <code>
                {'    '}
                {'text: {'}
              </code>
              <code>
                {'      '}
                {`color: colorScheme === 'dark' ? '#fff' : '#333',`}
              </code>
              <code>
                {'    '}
                {'},'}
              </code>
              <code>
                {'  '}
                {'});'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'return ('}
              </code>
              <code>
                {'    '}
                {`<View style={styles.container}>`}
              </code>
              <code>
                {'      '}
                {`<Text style={styles.text}>`}
              </code>
              <code>
                {'        '}
                {`Текущая тема: {colorScheme === 'dark' ? '🌙 Темная' : '☀️ Светлая'}`}
              </code>
              <code>
                {'      '}
                {'</Text>'}
              </code>
              <code>
                {'    '}
                {'</View>'}
              </code>
              <code>
                {'  '}
                {');'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>
            <b>useAccessibilityInfo</b> - Позволяет узнать, включены ли на
            устройстве специальные возможности: экранный диктор
            (VoiceOver/TalkBack), уменьшенное движение, высокая контрастность и
            т.д.
          </p>
          <pre>
            <CodeNumber length={23} />
            <code>
              <code>{`import { useAccessibilityInfo, Text } from 'react-native';`}</code>
              <code>{'  '}</code>
              <code>{'function AccessibleComponent() {'}</code>
              <code>
                {'  '}
                {'const {'}
              </code>
              <code>
                {'    '}
                {`isScreenReaderEnabled,      // VoiceOver/TalkBack включен?`}
              </code>
              <code>
                {'    '}
                {`isReduceMotionEnabled,      // уменьшенное движение?`}
              </code>
              <code>
                {'    '}
                {`isAccessibilityServiceEnabled, // Android: сервис доступности включен?`}
              </code>
              <code>
                {'    '}
                {`isBoldTextEnabled,          // iOS: жирный текст?`}
              </code>
              <code>
                {'    '}
                {`isGrayscaleEnabled,         // iOS: оттенки серого?`}
              </code>
              <code>
                {'    '}
                {`isInvertColorsEnabled,      // iOS: инверсия цветов?`}
              </code>
              <code>
                {'  '}
                {'} = useAccessibilityInfo();'}
              </code>
              <code>{'  '}</code>
              <code>
                {'  '}
                {'return ('}
              </code>
              <code>
                {'    '}
                {'<View>'}
              </code>
              <code>
                {'      '}
                {'<Text>'}
              </code>
              <code>
                {'        '}
                {`{isScreenReaderEnabled && '🔊 Экранный диктор активен'}`}
              </code>
              <code>
                {'      '}
                {'</Text>'}
              </code>
              <code>
                {'      '}
                {`{isReduceMotionEnabled && (`}
              </code>
              <code>
                {'        '}
                {`<Text>♿️ Анимации отключены (используем fade вместо slide)</Text>`}
              </code>
              <code>
                {'      '}
                {')}'}
              </code>
              <code>
                {'    '}
                {'</View>'}
              </code>
              <code>
                {'  '}
                {');'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
        </div>
      ),
    },
    Навигация: {
      id: 'react-native-4',
      title: 'Навигация',
      jsx: (
        <div>
          <p>
            <b>Stack Navigator</b> - Вы открываете новый экран — он ложится
            сверху. Нажимаете "Назад" — верхний лист убирается
          </p>
          <pre>
            <CodeNumber length={12} />
            <code>
              <code>{`import { createNativeStackNavigator } from '@react-navigation/native-stack';`}</code>
              <code>{'  '}</code>
              <code>{'const Stack = createNativeStackNavigator();'}</code>
              <code>{'  '}</code>
              <code>{'function MyStack() {'}</code>
              <code>
                {'  '}
                {'return ('}
              </code>
              <code>
                {'    '}
                {'<Stack.Navigator initialRouteName="Home">'}
              </code>
              <code>
                {'    '}
                {'<Stack.Screen name="Home" component={HomeScreen} />'}
              </code>
              <code>
                {'    '}
                {'<Stack.Screen name="Profile" component={ProfileScreen} />'}
              </code>
              <code>
                {'    '}
                {'</Stack.Navigator>'}
              </code>
              <code>
                {'  '}
                {' );'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>
            <b>Tab Navigator</b> - Панель вкладок в браузере. Вы всегда видите
            главные разделы и можете переключаться между ними мгновенно, не
            теряя контекст
          </p>
          <pre>
            <CodeNumber length={12} />
            <code>
              <code>{`import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';`}</code>
              <code>{'  '}</code>
              <code>{'const Tab = createBottomTabNavigator();'}</code>
              <code>{'  '}</code>
              <code>{'function MyTabs() {'}</code>
              <code>
                {'  '}
                {'return ('}
              </code>
              <code>
                {'    '}
                {'<Tab.Navigator>'}
              </code>
              <code>
                {'      '}
                {'<Tab.Screen name="Feed" component={FeedScreen} />'}
              </code>
              <code>
                {'      '}
                {'<Tab.Screen name="Search" component={SearchScreen} />'}
              </code>
              <code>
                {'    '}
                {'</Tab.Navigator>'}
              </code>
              <code>
                {'  '}
                {');'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
          <p>
            <b>Drawer Navigator</b> - Основные вкладки на виду, а настройки,
            выход висят сбоку и появляются только когда свайпнешь или нажмешь
            иконку гамбургера
          </p>
          <pre>
            <CodeNumber length={12} />
            <code>
              <code>{`import { createDrawerNavigator } from '@react-navigation/drawer';`}</code>
              <code>{'  '}</code>
              <code>{'const Drawer = createDrawerNavigator();'}</code>
              <code>{'  '}</code>
              <code>{'function MyDrawer() {'}</code>
              <code>
                {'  '}
                {'return ('}
              </code>
              <code>
                {'    '}
                {'<Drawer.Navigator>'}
              </code>
              <code>
                {'      '}
                {
                  '<Drawer.Screen name="Main" component={MyTabs} /> {/* Можно вкладывать табы! */}'
                }
              </code>
              <code>
                {'      '}
                {'<Drawer.Screen name="Settings" component={SettingsScreen} />'}
              </code>
              <code>
                {'    '}
                {'</Drawer.Navigator>'}
              </code>
              <code>
                {'  '}
                {');'}
              </code>
              <code>{'}'}</code>
            </code>
          </pre>
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
  },
};

export default ReactNative;
