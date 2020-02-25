'use strict';

var COMMENT_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var COMMENT_NAMES = ['Максим', 'Тимофей', 'Андрей', 'Артем', 'Игорь', 'Маргарита'];
var PICTURE_DESCRIPTIONS = ['Я', 'Снова я', 'Мои друзья', 'Мои любимые места', 'Игорь', 'Да-да, снова Игорь', 'Ох, уж этот вездесущий Игорь', 'Игорь хочет быть на каждом фото', 'Хобби Игоря', 'Что делать, если ты не Игорь', 'Все лежат, а Игорь просто взял и сел', 'Igor, pull the switch', 'Игорь и пельмени с Урала', 'Игорь и Белые ночи', 'Культурная жизнь Игоря', 'Кулинарные пристрастия Игоря', 'Судя по фото, это уже не мой аккаунт', 'Рейдерский захват аккаунта от Игоря', 'Власть Игоря', 'Позорное бегство', 'Чистосердечное признание', 'Узник замка Иф', 'Отверженные и удивленные', 'Униженные и потаенные', 'Гражданские права и где они обитают'];

var getRandomElement = function (a, b) {
  return Math.floor(Math.random() * (b - a + 1));
};

var PHOTO_URL = [];
for (var i = 1; i <= 25; i++) {
  PHOTO_URL[i] = 'photos/' + i + '.jpg';
}
var picturesElement = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

var pictures = [];
for (var j = 1; j <= 25; j++) {
  pictures[j] = {
    url: PHOTO_URL[j],
    description: PICTURE_DESCRIPTIONS[j],
    likes: getRandomElement(15, 200),
    comments: {
      avatar: 'img/avatar-' + getRandomElement(1, 6) + '.svg',
      message: COMMENT_MESSAGES[getRandomElement(0, 5)],
      name: COMMENT_NAMES[getRandomElement(0, 5)]
    }
  };
}


var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);
  var pictureImg = pictureElement.querySelector('.picture__img');
  pictureImg.src = picture.url;
  pictureImg.alt = picture.description;
  pictureElement.querySelector('.picture__comments').style.fill = picture.comments;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  return pictureElement;
};

var fragment = document.createDocumentFragment();
for (var k = 1; k <= pictures.length - 1; k++) {
  fragment.appendChild(renderPicture(pictures[k]));
}
picturesElement.appendChild(fragment);
