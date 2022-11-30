import init, { World } from "snake";

init().then((_) => {
  const CELL_SIZE = 14;

  const world = World.new();
  const worldWidth = world.get_width();

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  canvas.height = worldWidth * CELL_SIZE;
  canvas.width = worldWidth * CELL_SIZE;

  const drawWorld = () => {
    context.beginPath();

    for (let i = 0; i <= worldWidth; i++) {
      context.moveTo(i * CELL_SIZE, 0);
      context.lineTo(i * CELL_SIZE, worldWidth * CELL_SIZE);
    }
    for (let j = 0; j <= worldWidth; j++) {
      context.moveTo(0, j * CELL_SIZE);
      context.lineTo(worldWidth * CELL_SIZE, j * CELL_SIZE);
    }

    context.stroke();
  };

  const drawSnake = () => {
    const snakeIdx = world.snake_head_idx();
    const col = snakeIdx % worldWidth;
    const row = Math.floor(snakeIdx / worldWidth);

    context.beginPath();
    context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    context.stroke();
  };

  drawWorld();
  drawSnake();
});
