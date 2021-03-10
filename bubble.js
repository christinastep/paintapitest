class Bubble {
    paint(context, canvas, properties) {
        const circleSize = 10; 
        const bodyWidth = canvas.width;
        const bodyHeight = canvas.height;

        const maxX = Math.floor(bodyWidth / circleSize);
        const maxY = Math.floor(bodyHeight / circleSize); 

        for (let y = 0; y < maxY; y++) {
          for (let x = 0; x < maxX; x++) {
            context.fillStyle = '#eee';
            context.beginPath();
            context.arc(x * circleSize * 2 + circleSize, y * circleSize * 2 + circleSize, circleSize, 0, 2 * Math.PI, true);
            context.closePath();
            context.fill();
          }
       }
    }
}
registerPaint('bubble', Bubble);
