// public/main.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize fabric canvas
    const canvas = new fabric.Canvas('canvas');

    // Add a rectangle to the canvas
    const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 200,
        height: 100,
        angle: 30
    });
    canvas.add(rect);

    // Add circle to the canvas
    const circle = new fabric.Circle({
        radius: 50,
        fill: 'blue',
        left: 300,
        top: 100
    });
    canvas.add(circle);
});
