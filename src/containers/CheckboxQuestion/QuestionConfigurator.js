const options = [
  {
    id: 1,
    text: 'Готов выучить любой язык',
    checked: false,
    isDependency: true,
    changeDataValues: () => ('Well, ok'),
  },
  {
    id: 2,
    text: 'Английский',
    checked: false,
    isDependency: false,
    changeDataValues: () => ('English + 1'),
  },
  {
    id: 3,
    text: 'Немецкий',
    checked: false,
    isDependency: false,
    changeDataValues: () => ('Germany + 1'),
  },
  {
    id: 4,
    text: 'Французский',
    checked: false,
    isDependency: false,
    changeDataValues: () => ('French + 1'),
  },
  {
    id: 5,
    text: 'Не готов учить новые языки',
    checked: false,
    isDependency: true,
    changeDataValues: () => ('Belarus + 1, other lanquages - 1'),
  },
];

export default options;