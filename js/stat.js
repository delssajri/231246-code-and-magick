'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);  // Создадим прямоугольник черного цвета
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270); // Создадим прямоугольник белого цвета
  ctx.fillStyle = '#000'; 
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramWidth = 40; // Ширина колонки
  var barHeight = 150; // Максимальная высота
  var indent = 50; // Расстояние между колонками
  var initialX = 120; // Начальная координата X
  var initialY = 100; // Начальная координата Y
  var max = -1;
  var maxIndex = -1;
  var initialYNew = -1; // Обновленная начальная координата Y
  var colorme = 'rgba(255, 0, 0, 1)'; // Цвет моего игрока

  // Найдем элемент с максимальным временем
  for (var i = 0; i < times.length; i++) {
    if (max < times[i]) {
      max = times[i];
      maxIndex = i;
    }
  }

  var step = barHeight/max;

  for (var i = 0; i < times.length; i++) {
    var rand = Math.random();
    ctx.fillStyle = names[i] == 'Вы' ? colorme : 'rgba(38, 31, 240,' + rand +')';

    if (i == maxIndex) {
      initialYNew = initialY;
    }
    else {
      initialYNew = initialY + barHeight - times[i] * step;
    }

    var widthBase = i * (indent + histogramWidth);
    ctx.fillText(Math.round(times[i]), initialX + widthBase, initialYNew - 10);
    ctx.fillRect(initialX + widthBase, initialYNew, histogramWidth, times[i] * step); // Строим гисторгамму
    ctx.fillText(names[i], initialX + widthBase, initialYNew + times[i] * step + 20);
  }

}