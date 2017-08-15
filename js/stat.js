window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; 
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; 
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000'; 
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramWidth = 40;
  var barHeight = 150;
  var indent = 40;
  var initialX = 120;
  var initialY = 100;
  var max = -1;
  var maxIndex = -1;
  var initialYNew = -1;
  
  for (var i = 0; i < times.length; i++) {
    if (max < times[i]) {
      max = times[i];
      maxIndex = i;
    }
  }
 
  var step = barHeight/max;

  for(var i = 0; i < times.length; i++) {
    var rand = Math.random();
    if (names[i]!='Вы') {
      ctx.fillStyle = 'rgba(38, 31, 240,' + rand +')'; 
    }
    else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    if (i == maxIndex) {
      initialYNew = initialY;
    }
    else {
      initialYNew = initialY + barHeight - times[i]*step;;
    }
    ctx.fillText(Math.round(times[i]), initialX + indent * i + histogramWidth*i, initialYNew - 10);
    ctx.fillRect(initialX + indent * i + histogramWidth*i, initialYNew, histogramWidth, times[i]*step);
    ctx.fillText(names[i], initialX + indent * i + histogramWidth*i, initialYNew + times[i]*step + 20);
  }
}