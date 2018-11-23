import { PROPERTIES_NAMES, QUESTION_TYPES, LANGUAGES } from "./constants";

export const questions = [{
  id: 1,
  nextId: 2,
  type: QUESTION_TYPES.RADIO,
  title: "Хочешь, чтобы было тепло или это не важно?",
  options: [
    {
      id: 1,
      text: "Хочу, чтобы было очень жарко",
      calculate: countryData =>
        countryData[PROPERTIES_NAMES.T_WINTER] >= 5 && countryData[PROPERTIES_NAMES.T_SUMMER] >= 25
    },
    {
      id: 2,
      text: "Мне не важно",
      calculate: () => false,
    },
    {
      id: 3,
      text: "Мне нравится когда холодно",
      calculate: countryData => countryData[PROPERTIES_NAMES.T_WINTER] <= -10 && countryData[PROPERTIES_NAMES.T_SUMMER] <= 15
    },
    {
      id: 4,
      text: "Люблю умеренный климат",
      calculate: countryData =>
        countryData[PROPERTIES_NAMES.T_WINTER] >= -10 && countryData[PROPERTIES_NAMES.T_WINTER] <= 5 &&
        countryData[PROPERTIES_NAMES.T_SUMMER] >= 15 && countryData[PROPERTIES_NAMES.T_SUMMER] <= 25
    }
  ],
}, {
  id: 2,
  nextId: 3,
  type: QUESTION_TYPES.CHECKBOX,
  title: "Отношение к новым языкам",
  options: [
    {
      id: 1,
      text: 'Готов выучить любой язык',
      multiple: false,
      calculate: () => false,
    },
    {
      id: 2,
      text: 'Английский',
      multiple: true,
      calculate: countryData =>
        (countryData[PROPERTIES_NAMES.LANGUAGE] || []).includes(LANGUAGES.ENGLISH),
    },
    {
      id: 3,
      text: 'Немецкий',
      multiple: true,
      calculate: countryData =>
        (countryData[PROPERTIES_NAMES.LANGUAGE] || []).includes(LANGUAGES.GERMAN),
    },
    {
      id: 4,
      text: 'Французский',
      multiple: true,
      calculate: countryData =>
        (countryData[PROPERTIES_NAMES.LANGUAGE] || []).includes(LANGUAGES.FRENCH),
    },
    {
      id: 5,
      text: 'Не готов учить новые языки',
      multiple: false,
      calculate: countryData =>
        countryData[PROPERTIES_NAMES.RUSSIAN_SPEAKERS] >= 50,
    },
  ]
}, {
  id: 3,
  type: QUESTION_TYPES.ICON_CHECKBOX,
  title: "На чём любишь добираться до работы",
  options: [
    {
      id: 1,
      text: 'Велосипед',
      multiple: true,
      icon: 'directions_bike',
      calculate: () => false,
    },
    {
      id: 2,
      text: 'Автомобиль',
      multiple: true,
      icon: 'directions_car',
      calculate: () => false,
    },
    {
      id: 3,
      text: 'Пешком',
      multiple: true,
      icon: 'directions_walk',
      calculate: () => false,
    },
    {
      id: 4,
      text: 'Общественный транспорт',
      multiple: true,
      icon: 'directions_bus',
      calculate: () => false,
    },
    {
      id: 5,
      text: 'Такси',
      multiple: true,
      icon: 'local_taxi',
      calculate: () => false,
    },
  ]
}];
