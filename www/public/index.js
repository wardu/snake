/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../pkg/snake.js":
/*!***********************!*\
  !*** ../pkg/snake.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Direction\": () => (/* binding */ Direction),\n/* harmony export */   \"GameStatus\": () => (/* binding */ GameStatus),\n/* harmony export */   \"World\": () => (/* binding */ World),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initSync\": () => (/* binding */ initSync)\n/* harmony export */ });\n/* harmony import */ var _snippets_snake_32a0c41fa34359f1_www_date_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/snake-32a0c41fa34359f1/www/date.ts */ \"../pkg/snippets/snake-32a0c41fa34359f1/www/date.ts\");\n\n\nlet wasm;\n\nconst cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n*/\nconst Direction = Object.freeze({ Up:0,\"0\":\"Up\",Down:1,\"1\":\"Down\",Left:2,\"2\":\"Left\",Right:3,\"3\":\"Right\", });\n/**\n*/\nconst GameStatus = Object.freeze({ Won:0,\"0\":\"Won\",Lost:1,\"1\":\"Lost\",Played:2,\"2\":\"Played\", });\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        const obj = Object.create(World.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_world_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} snake_idx\n    * @returns {World}\n    */\n    static new(width, snake_idx) {\n        const ret = wasm.world_new(width, snake_idx);\n        return World.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_width() {\n        const ret = wasm.world_get_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    points() {\n        const ret = wasm.world_points(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    reward_cell() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_reward_cell(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    snake_head_idx() {\n        const ret = wasm.world_snake_head_idx(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    */\n    start_game() {\n        wasm.world_start_game(this.ptr);\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    game_status() {\n        const ret = wasm.world_game_status(this.ptr);\n        return ret === 3 ? undefined : ret;\n    }\n    /**\n    * @returns {string}\n    */\n    game_status_text() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_game_status_text(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n    /**\n    * @param {number} direction\n    */\n    snake_direction(direction) {\n        wasm.world_snake_direction(this.ptr, direction);\n    }\n    /**\n    * @returns {number}\n    */\n    snake_length() {\n        const ret = wasm.world_snake_length(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    snake_cells() {\n        const ret = wasm.world_snake_cells(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    step() {\n        wasm.world_step(this.ptr);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction getImports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_now_61b97ba55edefa52 = function(arg0) {\n        const ret = (0,_snippets_snake_32a0c41fa34359f1_www_date_ts__WEBPACK_IMPORTED_MODULE_0__.now)(arg0 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction initMemory(imports, maybe_memory) {\n\n}\n\nfunction finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedInt32Memory0 = new Int32Array();\n    cachedUint8Memory0 = new Uint8Array();\n\n\n    return wasm;\n}\n\nfunction initSync(module) {\n    const imports = getImports();\n\n    initMemory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n}\n\nasync function init(input) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! snake_bg.wasm */ \"../pkg/snake_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = getImports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    initMemory(imports);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://www/../pkg/snake.js?");

/***/ }),

/***/ "../pkg/snippets/snake-32a0c41fa34359f1/www/date.ts":
/*!**********************************************************!*\
  !*** ../pkg/snippets/snake-32a0c41fa34359f1/www/date.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"now\": () => (/* binding */ now)\n/* harmony export */ });\nfunction now(max) {\n    return Math.floor(Math.random() * max);\n}\n\n\n//# sourceURL=webpack://www/../pkg/snippets/snake-32a0c41fa34359f1/www/date.ts?");

/***/ }),

/***/ "./date.ts":
/*!*****************!*\
  !*** ./date.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"now\": () => (/* binding */ now)\n/* harmony export */ });\nfunction now(max) {\n    return Math.floor(Math.random() * max);\n}\n\n\n//# sourceURL=webpack://www/./date.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snake */ \"../pkg/snake.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ \"./date.ts\");\n\n\n(0,snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(function (wasm) {\n    var CELL_SIZE = 14;\n    var WORLD_WIDTH = 10;\n    var snakeSpawnIdx = (0,_date__WEBPACK_IMPORTED_MODULE_0__.now)(WORLD_WIDTH * WORLD_WIDTH);\n    var world = snake__WEBPACK_IMPORTED_MODULE_1__.World[\"new\"](WORLD_WIDTH, snakeSpawnIdx);\n    var worldWidth = world.get_width();\n    var points = document.getElementById(\"points\");\n    var gameStatus = document.getElementById(\"game-status\");\n    var gameControlButton = document.getElementById(\"game-control-btn\");\n    var canvas = document.getElementById(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    gameControlButton.addEventListener(\"click\", function () {\n        var status = world.game_status();\n        if (status === undefined) {\n            world.start_game();\n            play();\n            gameControlButton.innerText = \"Stop\";\n        }\n        else {\n            location.reload();\n        }\n        world.start_game();\n        play();\n    });\n    canvas.height = worldWidth * CELL_SIZE;\n    canvas.width = worldWidth * CELL_SIZE;\n    document.addEventListener(\"keydown\", function (event) {\n        switch (event.key) {\n            case \"ArrowUp\": {\n                world.snake_direction(snake__WEBPACK_IMPORTED_MODULE_1__.Direction.Up);\n                break;\n            }\n            case \"ArrowDown\": {\n                world.snake_direction(snake__WEBPACK_IMPORTED_MODULE_1__.Direction.Down);\n                break;\n            }\n            case \"ArrowLeft\": {\n                world.snake_direction(snake__WEBPACK_IMPORTED_MODULE_1__.Direction.Left);\n                break;\n            }\n            case \"ArrowRight\": {\n                world.snake_direction(snake__WEBPACK_IMPORTED_MODULE_1__.Direction.Right);\n                break;\n            }\n        }\n    });\n    var drawWorld = function () {\n        context.beginPath();\n        for (var i = 0; i <= worldWidth; i++) {\n            context.moveTo(i * CELL_SIZE, 0);\n            context.lineTo(i * CELL_SIZE, worldWidth * CELL_SIZE);\n        }\n        for (var j = 0; j <= worldWidth; j++) {\n            context.moveTo(0, j * CELL_SIZE);\n            context.lineTo(worldWidth * CELL_SIZE, j * CELL_SIZE);\n        }\n        context.stroke();\n    };\n    var drawReward = function () {\n        var idx = world.reward_cell();\n        var col = idx % worldWidth;\n        var row = Math.floor(idx / worldWidth);\n        context.beginPath();\n        context.fillStyle = \"red\";\n        context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        context.stroke();\n    };\n    var drawSnake = function () {\n        var snakeCells = new Uint32Array(wasm.memory.buffer, world.snake_cells(), world.snake_length());\n        snakeCells\n            .filter(function (cellIdx, i) { return !(i > 0 && cellIdx === snakeCells[0]); })\n            .forEach(function (cellIdx, i) {\n            var col = cellIdx % worldWidth;\n            var row = Math.floor(cellIdx / worldWidth);\n            context.fillStyle = i === 0 ? \"green\" : \"black\";\n            context.beginPath();\n            context.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        });\n        context.stroke();\n    };\n    var drawGameStatus = function () {\n        gameStatus.textContent = world.game_status_text();\n        points.textContent = world.points().toString();\n    };\n    var paint = function () {\n        drawWorld();\n        drawSnake();\n        drawReward();\n        drawGameStatus();\n    };\n    var play = function () {\n        var status = world.game_status();\n        if (status == snake__WEBPACK_IMPORTED_MODULE_1__.GameStatus.Won || status == snake__WEBPACK_IMPORTED_MODULE_1__.GameStatus.Lost) {\n            gameControlButton.textContent = \"Restart\";\n            return;\n        }\n        var FPS = 3;\n        setTimeout(function () {\n            context.clearRect(0, 0, canvas.width, canvas.height);\n            world.step();\n            paint();\n            requestAnimationFrame(play);\n        }, 1000 / FPS);\n    };\n    paint();\n});\n\n\n//# sourceURL=webpack://www/./index.ts?");

/***/ }),

/***/ "../pkg/snake_bg.wasm":
/*!****************************!*\
  !*** ../pkg/snake_bg.wasm ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5504135d521f6e9b92e.wasm\";\n\n//# sourceURL=webpack://www/../pkg/snake_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;