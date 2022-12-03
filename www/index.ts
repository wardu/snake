import init, { World, Direction } from "snake";
import { now } from "./date";

init().then((wasm) => {
  const CELL_SIZE = 14;

  const WORLD_WIDTH = 20;
  const snakeSpawnIdx = now(WORLD_WIDTH * WORLD_WIDTH);

  const world = World.new(WORLD_WIDTH, snakeSpawnIdx);
  const worldWidth = world.get_width();

  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  const context = canvas.getContext("2d");

  canvas.height = worldWidth * CELL_SIZE;
  canvas.width = worldWidth * CELL_SIZE;

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp": {
        world.snake_direction(Direction.Up);
        break;
      }
      case "ArrowDown": {
        world.snake_direction(Direction.Down);
        break;
      }
      case "ArrowLeft": {
        world.snake_direction(Direction.Left);
        break;
      }
      case "ArrowRight": {
        world.snake_direction(Direction.Right);
        break;
      }
    }
  });

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

  const drawReward = () => {
    const idx = world.reward_cell();
    const col = idx % worldWidth;
    const row = Math.floor(idx / worldWidth);

    context.beginPath();
    context.fillStyle = "red";
    context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    context.stroke();
  };

  const drawSnake = () => {
    const snakeCells = new Uint32Array(
      wasm.memory.buffer,
      world.snake_cells(),
      world.snake_length()
    );

    snakeCells.forEach((cellIdx, i) => {
      const col = cellIdx % worldWidth;
      const row = Math.floor(cellIdx / worldWidth);

      context.fillStyle = i === 0 ? "green" : "black";

      context.beginPath();
      context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    context.stroke();
  };

  const paint = () => {
    drawWorld();
    drawSnake();
    drawReward();
  };

  const update = () => {
    const FPS = 10;
    setTimeout(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      world.step();
      paint();
      requestAnimationFrame(update);
    }, 1000 / FPS);
  };

  paint();
  update();
  console.log("world", world);
});
