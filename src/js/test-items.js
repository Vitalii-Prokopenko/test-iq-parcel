export const testItems = [
  {
    itemNumber: 1,
    title: 'Ваш пол:',
    image: [],
    type: 'sex',
    style: 'list',
    answers: ['мужчина', 'женщина'],
  },
  {
    itemNumber: 2,
    title: 'Укажите ваш возраст:',
    image: [],
    type: 'age',
    style: 'list',
    answers: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'],
  },
  {
    itemNumber: 3,
    title: 'Выберите лишнее:',
    image: [],
    type: 'building',
    style: 'list',
    answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
  },
  {
    itemNumber: 4,
    title: 'Продолжите числовой ряд: 18 20 24 32',
    image: [],
    type: 'number',
    style: 'list',
    answers: [62, 48, 74, 57, 60, 77],
  },
  {
    itemNumber: 5,
    title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    image: [],
    type: 'first-color',
    style: 'matrix',
    answers: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B3AC',
    ],
  },
  {
    itemNumber: 6,
    title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    image: [],
    type: 'second-color',
    style: 'matrix',
    answers: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B3AC',
    ],
  },
  {
    itemNumber: 7,
    title: 'Какой из городов лишний?',
    image: [],
    type: 'city',
    style: 'list',
    answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
  },
  {
    itemNumber: 8,
    title: 'Выберите правильную фигуру из четырёх пронумерованных.',
    image: [
      './images/webp/test8-img.webp',
      './images/webp/test8-img-@2x.webp',
      './images/png/test8-img.jpg',
      './images/png/test8-img-@2x.jpg',
    ],
    type: 'figurine',
    style: 'cubes',
    answers: [1, 2, 3, 4],
  },
  {
    itemNumber: 9,
    title: 'Вам привычнее и важнее:',
    image: [],
    type: 'mindset',
    style: 'list',
    answers: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт',
    ],
  },
  {
    itemNumber: 10,
    title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    image: [
      './images/webp/test10-img.webp',
      './images/webp/test10-img-@2x.webp',
      './images/png/test10-img.jpg',
      './images/png/test10-img-@2x.jpg',
    ],
    type: 'viewpoint',
    style: 'list',
    answers: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия'],
  },
  {
    itemNumber: 11,
    title: 'Вставьте подходящее число',
    image: [
      './images/webp/test11-img.webp',
      './images/webp/test11-img-@2x.webp',
      './images/png/test11-img.jpg',
      './images/png/test11-img-@2x.jpg',
    ],
    type: 'next-number',
    style: 'cubes',
    answers: [34, 36, 53, 44, 66, 42],
  },
];
