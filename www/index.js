import init, { World } from "snake";

init().then((_) => {
  const world = World.new();
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
});
