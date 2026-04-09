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
  },
};

export default ReactNative;
