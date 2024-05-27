const Typescript = {
  Typescript: {
    Типы: {
      id: '71',
      title: 'Типы',
      jsx: (
        <div>
          <table>
            <thead>
              <tr>
                <th>Тип</th>
                <th>Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>boolean</b>
                </td>
                <td>для определения булевого значения</td>
              </tr>
              <tr>
                <td>
                  <b>number</b>
                </td>
                <td>определяет число</td>
              </tr>
              <tr>
                <td>
                  <b>string</b>
                </td>
                <td>определяет строку</td>
              </tr>
              <tr>
                <td>
                  <b>null</b>
                </td>
                <td>определяет null</td>
              </tr>
              <tr>
                <td>
                  <b>undefined</b>
                </td>
                <td>определяет undefined</td>
              </tr>
              <tr>
                <td>
                  <b>void</b>
                </td>
                <td>для определения отсутствующих типов</td>
              </tr>
              <tr>
                <td>
                  <b>number[]</b>
                </td>
                <td>для определения массива чисел</td>
              </tr>
              <tr>
                <td>
                  <b>any</b>
                </td>
                <td>все что угодно</td>
              </tr>
              <tr>
                <td>
                  <b>ENUM</b>
                </td>
                <td>для создания именованных констант</td>
              </tr>
              <tr>
                <td>
                  <b>never</b>
                </td>
                <td>функция вызывает ошибку, бесконечный цикл</td>
              </tr>
              <tr>
                <td>
                  <b>object</b>
                </td>
                <td>для обозначения объекта</td>
              </tr>
              <tr>
                <td>
                  <b>type</b>
                </td>
                <td>для создания пользовательского типа</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    Дженерики: {
      id: '72',
      title: 'Дженерики',
      jsx: (
        <div>
          <p>
            <b>Дженерики</b> позволяют нам создавать повторно используемые
            компоненты, работающие с разными типами передаваемых им данных.
          </p>
        </div>
      ),
    },
    Классы: {
      id: '73',
      title: 'Классы',
      jsx: (
        <div>
          <p>
            В <b>Typescript</b> три модификатора доступа: <b>public</b>,{' '}
            <b>protected</b> и <b>private</b>.
          </p>
          <p>
            Если к свойствам или функциям не применяется модификатор, то такие
            свойства и функции расцениваются как будто они были определены с
            модификатором <b>public</b>.
          </p>
          <p>
            Если же к свойствам и методам применяется модификатор <b>private</b>
            , то к ним нельзя будет обратиться извне при создании объекта
            данного класса.
          </p>
          <p>
            Модификатор <b>protected</b> определяет поля и методы, которые извне
            класса видны только в классах-наследниках.
          </p>
        </div>
      ),
    },
    'Типы Утилит(Utility Types)': {
      id: '74',
      title: 'Типы Утилит(Utility Types)',
      jsx: (
        <div>
          <p>
            <b>Awaited{'<T>'}</b> - это специальный тип, который может быть
            использован для обозначения типа, который будет возвращен из
            асинхронной функции.
          </p>
          <p>
            <b>Partial{'<T>'}</b> - делает все свойства объекта типа <b>T</b>{' '}
            необязательными.
          </p>
          <p>
            <b>Required{'<T>'}</b> - делает все свойства объекта типа <b>T</b>{' '}
            обязательными.
          </p>
          <p>
            <b>Readonly{'<T>'}</b> - делает все свойства объекта типа <b>T</b>{' '}
            доступными только для чтения.
          </p>
          <p>
            <b>Record{'<Keys, Type>'}</b> - создает тип, который является
            записью с ключами, определенными в первом параметре, и значениями
            типа, определенного во втором параметре.
          </p>
          <p>
            <b>Pick{'<T, K extends keyof T>'}</b> - выбирает свойства объекта
            типа <b>T</b> с ключами, указанными в <b>K</b>.
          </p>
          <p>
            <b>Omit{'<T, K extends keyof T>'}</b> - выбирает свойства объекта
            типа <b>T</b>, исключая те, которые указаны в <b>K</b>.
          </p>
          <p>
            <b>Exclude{'<UnionType, ExcludedMembers>'}</b> - исключает
            определенные типы из объединенного типа.
          </p>
          <p>
            <b>Extract{'<Type, Union>'}</b> - извлекает из типа <b>Type</b>{' '}
            только те типы, которые присутствуют в <b>Union</b>.
          </p>
          <p>
            <b>NonNullable{'<Type>'}</b> - звлекает тип из <b>Type</b>, исключая{' '}
            <b>null</b> и <b>undefined</b>.
          </p>
          <p>
            <b>Parameters{'<Type>'}</b> - извлекает типы аргументов функции{' '}
            <b>Type</b>.
          </p>
          <p>
            <b>ConstructorParameters{'<Type>'}</b> - извлекает типы аргументов
            конструктора <b>Type</b>.
          </p>
          <p>
            <b>ReturnType{'<Type>'}</b> - извлекает тип возвращаемого значения
            функции <b>Type</b>.
          </p>
          <p>
            <b>InstanceType{'<Type>'}</b> - извлекает тип экземпляра класса{' '}
            <b>Type</b>.
          </p>
          <p>
            <b>ThisParameterType{'<Type>'}</b> - извлекает тип <b>this</b> из
            функции <b>Type</b>.
          </p>
          <p>
            <b>OmitThisParameter{'<Type>'}</b> - определяет функцию без типа{' '}
            <b>this</b>.
          </p>
          <p>
            <b>ThisType{'<Type>'}</b> - добавляет тип <b>this</b> к функции{' '}
            <b>Type</b>.
          </p>
          <p>
            <b>Uppercase{'<StringType>'}</b>, <b>Lowercase{'<StringType>'}</b>,{' '}
            <b>Capitalize{'<StringType>'}</b>,{' '}
            <b>Uncapitalize{'<StringType>'}</b> - это утилитные типы для
            манипуляции строками, которые изменяют регистр строки в соответствии
            с их именем.
          </p>
        </div>
      ),
    },
  },
}

export default Typescript
