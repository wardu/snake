use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

#[global_allocator]
static ALLOC: WeeAlloc = WeeAlloc::INIT;

struct SnakeCell(usize);
struct Snake {
    body: Vec<SnakeCell>,
}

impl Snake {
    fn new(spawn_index: usize) -> Snake {
        Snake {
            body: vec![(SnakeCell(spawn_index))],
        }
    }
}
#[wasm_bindgen]
pub struct World {
    width: usize,
    snake: Snake,
}

#[wasm_bindgen]
impl World {
    pub fn new() -> World {
        World {
            width: 10,
            snake: Snake::new(10),
        }
    }
    pub fn get_width(&self) -> usize {
        self.width
    }

    pub fn snake_head_idx(&self) -> usize {
        self.snake.body[0].0
    }
}
