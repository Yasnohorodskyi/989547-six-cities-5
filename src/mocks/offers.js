import {getRandomInteger, getRandomElementsArray} from "./utils.js";
import {NAMES, TYPES, TITLES, CITIES, FEATURES, INFO} from "../consts.js";

const MIN_ROOMS_COUNT = 1;
const MAX_ROOMS_COUNT = 8;
const AVATAR_URL = `https://api.adorable.io/avatars/`;
const IMG_URL = `http://picsum.photos/`;
const MIN_RATE_COUNT = 1;
const MAX_RATE_COUNT = 5;
const MIN_ADULTS_COUNT = 1;
const MAX_ADULTS_COUNT = 8;

export let COORDS = [
  [
    52.3909553943508,
    4.85309666406198
  ],
  [
    52.369553943508,
    4.85309666406198
  ],
  [
    52.3909553943508,
    4.929309666406198,
  ],
  [
    52.3809553943508,
    4.939309666406198
  ]
];

const getRandomTitle = () => {
  const getIndex = getRandomInteger(0, TITLES.length - 1);
  return TITLES[getIndex];
};

const getRandomType = () => {
  const getIndex = getRandomInteger(0, TYPES.length - 1);
  return TYPES[getIndex];
};

const getRandomCity = () => {
  const getIndex = getRandomInteger(0, CITIES.length - 1);
  return CITIES[getIndex];
};

const image = () => {
  return {
    url: `${IMG_URL}260/200?r=${Math.random()}`,
    description: `photo studio`,
    id: new Date() + parseInt(Math.random() * 1000, 10)
  };
};

const getImages = () => {
  const images = new Array(6).fill().map(image);

  return images;
};

const generateComment = () => {
  const getName = NAMES[getRandomInteger(0, NAMES.length - 1)];
  return {
    avatar: `${IMG_URL}54?r=${Math.random()}`,
    name: getName,
    date: new Date(),
    rate: Number(getRandomInteger(MIN_RATE_COUNT, MAX_RATE_COUNT)),
    review: INFO[getRandomInteger(0, INFO.length - 1)],
    id: new Date() + parseInt(Math.random() * 1000, 10)
  };
};

const generateComments = () => {
  return new Array(getRandomInteger(1, 6)).fill().map(generateComment);
};

const generateCoordinates = () => {
  const randomIndex = getRandomInteger(0, COORDS.length - 1);
  const randomCoord = COORDS[randomIndex];

  COORDS = [
    ...COORDS.slice(0, randomIndex),
    ...COORDS.slice(randomIndex + 1)
  ];

  return randomCoord;
};

const getOffer = () => {
  return {
    id: Date.now() + parseInt(Math.random() * 1000, 10),
    city: getRandomCity(),
    title: getRandomTitle(),
    rate: Number(getRandomInteger(MIN_RATE_COUNT, MAX_RATE_COUNT)),
    type: getRandomType(),
    rooms: Number(getRandomInteger(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT)),
    adults: Number(getRandomInteger(MIN_ADULTS_COUNT, MAX_ADULTS_COUNT)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isPremium: Boolean(getRandomInteger(0, 1)),
    cost: Number(getRandomInteger(40, 300)),
    inside: getRandomElementsArray(FEATURES),
    info: getRandomElementsArray(INFO),
    coords: generateCoordinates(),
    host: {
      avatar: `${AVATAR_URL}74`,
      name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    },
    images: getImages(),
    comments: generateComments(),
    nearOffers: [
      {
        id: Date.now() + parseInt(Math.random() * 1000, 10),
        city: getRandomCity(),
        title: getRandomTitle(),
        rate: Number(getRandomInteger(MIN_RATE_COUNT, MAX_RATE_COUNT)),
        type: getRandomType(),
        rooms: Number(getRandomInteger(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT)),
        adults: Number(getRandomInteger(MIN_ADULTS_COUNT, MAX_ADULTS_COUNT)),
        isFavorite: Boolean(getRandomInteger(0, 1)),
        isPremium: Boolean(getRandomInteger(0, 1)),
        cost: Number(getRandomInteger(40, 300)),
        inside: getRandomElementsArray(FEATURES),
        info: getRandomElementsArray(INFO),
        coords: [
          52.3909553943508,
          4.85309666406198
        ],
        host: {
          avatar: `${AVATAR_URL}74`,
          name: NAMES[getRandomInteger(0, NAMES.length - 1)],
        },
        images: getImages(),
        comments: generateComments(),
      },
      {
        id: Date.now() + parseInt(Math.random() * 1000, 10),
        city: getRandomCity(),
        title: getRandomTitle(),
        rate: Number(getRandomInteger(MIN_RATE_COUNT, MAX_RATE_COUNT)),
        type: getRandomType(),
        rooms: Number(getRandomInteger(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT)),
        adults: Number(getRandomInteger(MIN_ADULTS_COUNT, MAX_ADULTS_COUNT)),
        isFavorite: Boolean(getRandomInteger(0, 1)),
        isPremium: Boolean(getRandomInteger(0, 1)),
        cost: Number(getRandomInteger(40, 300)),
        inside: getRandomElementsArray(FEATURES),
        info: getRandomElementsArray(INFO),
        coords: [
          52.369553943508,
          4.85309666406198
        ],
        host: {
          avatar: `${AVATAR_URL}74`,
          name: NAMES[getRandomInteger(0, NAMES.length - 1)],
        },
        images: getImages(),
        comments: generateComments(),
      },
      {
        id: Date.now() + parseInt(Math.random() * 1000, 10),
        city: getRandomCity(),
        title: getRandomTitle(),
        rate: Number(getRandomInteger(MIN_RATE_COUNT, MAX_RATE_COUNT)),
        type: getRandomType(),
        rooms: Number(getRandomInteger(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT)),
        adults: Number(getRandomInteger(MIN_ADULTS_COUNT, MAX_ADULTS_COUNT)),
        isFavorite: Boolean(getRandomInteger(0, 1)),
        isPremium: Boolean(getRandomInteger(0, 1)),
        cost: Number(getRandomInteger(40, 300)),
        inside: getRandomElementsArray(FEATURES),
        info: getRandomElementsArray(INFO),
        coords: [
          52.3809553943508,
          4.939309666406198
        ],
        host: {
          avatar: `${AVATAR_URL}74`,
          name: NAMES[getRandomInteger(0, NAMES.length - 1)],
        },
        images: getImages(),
        comments: generateComments(),
      }
    ]
  };
};

const getOffers = () => {
  return new Array(4).fill().map(getOffer);
};

export default getOffers();
