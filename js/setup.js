var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

namesArray = [
'Иван',
'Хуан Себастьян',
'Мария',
'Кристоф',
'Виктор',
'Юлия',
'Люпита',
'Вашингтон'];

surnamesArray = [
'да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'];

coatsColor = [
'rgb(101, 137, 164)',
'rgb(241, 43, 107)',
'rgb(146, 100, 161)',
'rgb(56, 159, 117)',
'rgb(215, 210, 55)',
'rgb(0, 0, 0)'];

eyesColor = ['black',
'red',
'blue',
'yellow',
'green'];

var numberOfWizards = 4;

var generateTestWizard = function (numberOfWizards, namesArray, surnamesArray, coatsColor, eyesColor) {
  var setObjects = [];

  for (var i = 0; i < numberOfWizards; i++) {
    var randomNumberOne = Math.floor(Math.random() * 7);
    var randomNumberTwo = Math.floor(Math.random() * 7);
    var randomNumberThree = Math.floor(Math.random() * 5);
    var randomNumberThour = Math.floor(Math.random() * 4);

    var objWizard = {}; // Создание объекта

    // Зададим объекту параметры
    objWizard.name = namesArray[randomNumberOne] + ' ' + surnamesArray[randomNumberTwo];
    objWizard.coatColor = coatsColor[randomNumberThree];
    objWizard.eyesColor = eyesColor[randomNumberThour];

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
    elementWizard.querySelector('.setup-similar-label').textContent = wizards[i].namesArray;
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