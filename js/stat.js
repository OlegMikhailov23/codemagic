'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var messages = ['Ура вы победили!', 'Список результатов: ', 'Java is AWSOME'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var drawText = function (ctx, message, x, y, font, color) {
  ctx.fillStyle = color || '#000000';
  ctx.font = font || '16px PT Mono';
  ctx.fillText(message, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var j = 0; j < messages.length; j++) {
    drawText(ctx, messages[j], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP * j);
  }
  // ctx.fillStyle = '#000';

  // var maxTime = getMaxElement(times);

  // for (var i = 0; i < names.length; i++) {
  //   ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
  //   ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT, BAR_HEIGHT);
  // }
};
