'use strict';

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

var namesArray = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnamesArray = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatsColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = ['black',
  'red',
  'blue',
  'yellow',
  'green'
];

var numberOfWizards = 4;

var generateTestWizard = function (number, names, surnames, coats, eyes) {
  var setObjects = [];

  for (var i = 0; i < number; i++) {
    var randomNumberOne = Math.floor(Math.random() * 7);
    var randomNumberTwo = Math.floor(Math.random() * 7);
    var randomNumberThree = Math.floor(Math.random() * 5);
    var randomNumberThour = Math.floor(Math.random() * 4);

    var objWizard = {}; // Создание объекта

    // Зададим объекту параметры
    objWizard.name = names[randomNumberOne] + ' ' + surnames[randomNumberTwo];
    objWizard.coatColor = coats[randomNumberThree];
    objWizard.eyesColor = eyes[randomNumberThour];

    setObjects.push(objWizard);
  }
  return setObjects;
};

var generateWizard = function (wizards) {
  var template = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();
  var galleryWizards = document.querySelector('.setup-similar-list');

  for (var i = 0; i < wizards.length; i++) {
    var elementWizard = template.cloneNode(true);
    elementWizard.querySelector('.setup-similar-label').textContent = wizards[i].name;
    var elemCoat = elementWizard.querySelector('.wizard-coat');
    elemCoat.setAttribute('style', 'fill: ' + wizards[i].coatColor);
    var elemEyes = elementWizard.querySelector('.wizard-eyes');
    elemEyes.setAttribute('style', 'fill: ' + wizards[i].eyesColor);
    fragment.appendChild(elementWizard);
  }

  galleryWizards.appendChild(fragment);
};

var wizards = generateTestWizard(numberOfWizards, namesArray, surnamesArray, coatsColor, eyesColor)
;
generateWizard(wizards);

var galleryElement = document.querySelector('.setup-similar');
galleryElement.classList.remove('hidden');

