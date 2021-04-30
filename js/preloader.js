

function go() {
  var cnv = document.getElementById(`circle`);
  var ctx = cnv.getContext(`2d`);
  let centerX = 0;
  let centerY = 0;
  function init() {
    cnv.width  = innerWidth;
    cnv.height = innerHeight;
    centerX = cnv.width  / 2;// центровка
    centerY = cnv.height / 2;
  }
  init();

  const numberOfRings     = 3;
  const ringRadiusOffset  = 10;//отступ кругов
  const ringRadius        = 100; //размер
  const waveOffset        = 30;
  const colors            = [`#6000bf`, `#5400a8`, `#430086`];
  let startAngle          = 0;

  function updateRings() {
    for (let i = 0; i < numberOfRings; i++) {
      let radius = i * ringRadiusOffset + ringRadius;
      let offsetAngle = i * waveOffset * Math.PI / 180;
      drawRing(radius, colors[i], offsetAngle);
    }

    startAngle >= 360? startAngle = 0 : startAngle++;
  }

  const maxWavesAmplitude = 17;
  const numberOfWaves     = 7;

  function drawRing(radius, color, offsetAngle) {
    ctx.strokeStyle = color;
    ctx.lineWidth   = 9;

    ctx.beginPath();

    for (let j = -180; j < 180; j++) {
      let currentAngle  = (j + startAngle) * Math.PI / 180;
      let displacement  = 0;
      let now = Math.abs(j);

      if (now > 70) {
        displacement = (now - 70) / 70;
      }

      if (displacement >= 1) {
        displacement = 1;
      }

      let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
      let x = centerX + Math.cos(currentAngle) * waveAmplitude;
      let y = centerY + Math.sin(currentAngle) * waveAmplitude;
      j > -180? ctx.lineTo(x, y) : ctx.moveTo(x, y);

    }
    ctx.closePath();
    ctx.stroke();
  }

  function loop() {
    cnv.width |= 0; // ctx.clearRect(0, 0, cnv.width, cnv.height);
    updateRings();
    requestAnimationFrame(loop);
  }
  loop();

  window.addEventListener(`resize`, init);

setTimeout(function(){

  cnv.style.display = "none";
  cnv.style.zIndex = "-3";
  

  return

},6000)


};
