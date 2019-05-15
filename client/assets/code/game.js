/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/GameObjects/Character.ts":
/*!*********************************************!*\
  !*** ./client/src/GameObjects/Character.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GameObject_1 = __webpack_require__(/*! ./GameObject */ \"./client/src/GameObjects/GameObject.ts\");\nvar Character = /** @class */ (function (_super) {\n    __extends(Character, _super);\n    function Character() {\n        var _this = _super.call(this) || this;\n        var texture = PIXI.Texture.fromImage('assets/graphics/Player/player.png', true);\n        var sprite = new PIXI.Sprite(texture);\n        _this.currentSprite = new PIXI.Sprite(texture);\n        _this.currentSprite.position.x = 100;\n        _this.currentSprite.position.y = 200;\n        // bunny.anchor.x = 0.5;\n        // bunny.anchor.y = 0.5;\n        // bunny.position.x = 400;\n        // bunny.position.y = 300;\n        // bunny.scale.x = 2;\n        // bunny.scale.y = 2;\n        _this.addChild(_this.currentSprite);\n        _this.hp = 1.0;\n        _this.hpBar = new PIXI.Graphics();\n        _this.addChild(_this.hpBar);\n        return _this;\n    }\n    Character.prototype.update = function (deltaTime) {\n        // console.log(deltaTime);\n        // this.currentSprite.position.x += 1;\n        var width = this.currentSprite.width * 0.8;\n        this.hpBar.clear();\n        this.hpBar.beginFill(0XFF0000);\n        this.hpBar.drawRect(this.currentSprite.x, this.currentSprite.y, width, 30);\n        this.hpBar.beginFill(0X00FF00);\n        this.hpBar.drawRect(this.currentSprite.x, this.currentSprite.y, width * this.hp, 30);\n        this.hp -= 0.01;\n        if (this.hp < 0.0) {\n            this.hp = 1.0;\n        }\n    };\n    Character.prototype.loadTextures = function () {\n    };\n    return Character;\n}(GameObject_1.GameObject));\nexports.Character = Character;\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/Character.ts?");

/***/ }),

/***/ "./client/src/GameObjects/GameObject.ts":
/*!**********************************************!*\
  !*** ./client/src/GameObjects/GameObject.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PIXI = __webpack_require__(/*! pixi.js */ \"pixi.js\");\nvar GameObject = /** @class */ (function (_super) {\n    __extends(GameObject, _super);\n    function GameObject() {\n        var _this = _super.call(this) || this;\n        _this.currentSprite = null;\n        return _this;\n    }\n    return GameObject;\n}(PIXI.Container));\nexports.GameObject = GameObject;\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/GameObject.ts?");

/***/ }),

/***/ "./client/src/GameObjects/Player.ts":
/*!******************************************!*\
  !*** ./client/src/GameObjects/Player.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GameObject_1 = __webpack_require__(/*! ./GameObject */ \"./client/src/GameObjects/GameObject.ts\");\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player() {\n        var _this = _super.call(this) || this;\n        _this.movingUp = false;\n        _this.movingDown = false;\n        _this.movingLeft = false;\n        _this.movingRight = false;\n        var texture = PIXI.Texture.fromImage('assets/graphics/Player/player.png', true);\n        var sprite = new PIXI.Sprite(texture);\n        _this.currentSprite = new PIXI.Sprite(texture);\n        _this.currentSprite.position.x = 200;\n        _this.currentSprite.position.y = 200;\n        // bunny.anchor.x = 0.5;\n        // bunny.anchor.y = 0.5;\n        // bunny.position.x = 400;\n        // bunny.position.y = 300;\n        // bunny.scale.x = 2;\n        // bunny.scale.y = 2;\n        _this.addChild(_this.currentSprite);\n        window.addEventListener('keydown', _this.keyDownEvent.bind(_this));\n        window.addEventListener('keyup', _this.keyUpEvent.bind(_this));\n        return _this;\n    }\n    Player.prototype.update = function (deltaTime) {\n        // console.log(deltaTime);\n        this.currentSprite.position.x += 1;\n    };\n    Player.prototype.loadTextures = function () {\n    };\n    Player.prototype.keyDownEvent = function (event) {\n        if (!this.movingUp && event.code === 'KeyW') {\n            this.movingUp = true;\n            console.log(true, \"[]\");\n        }\n        if (event.code === 'KeyS') {\n            this.movingDown = true;\n        }\n        if (event.code === 'KeyA') {\n            this.movingLeft = true;\n        }\n        if (event.code === 'KeyD') {\n            this.movingRight = true;\n        }\n    };\n    Player.prototype.keyUpEvent = function (event) {\n        if (this.movingUp && event.code === 'KeyW') {\n            console.log(false, \"[]\");\n            this.movingUp = false;\n        }\n        if (event.code === 'KeyS') {\n            this.movingDown = false;\n        }\n        if (event.code === 'KeyA') {\n            this.movingLeft = false;\n        }\n        if (event.code === 'KeyD') {\n            this.movingRight = false;\n        }\n    };\n    return Player;\n}(GameObject_1.GameObject));\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/Player.ts?");

/***/ }),

/***/ "./client/src/GameWorld.ts":
/*!*********************************!*\
  !*** ./client/src/GameWorld.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Character_1 = __webpack_require__(/*! ./GameObjects/Character */ \"./client/src/GameObjects/Character.ts\");\nvar GameWorld = /** @class */ (function (_super) {\n    __extends(GameWorld, _super);\n    function GameWorld() {\n        var _this = _super.call(this) || this;\n        var objOne = new Character_1.Character();\n        objOne.currentSprite.x = -50;\n        objOne.currentSprite.y = 239;\n        _this.addChild(objOne);\n        var objTwo = new Character_1.Character();\n        objTwo.currentSprite.x = 203;\n        objTwo.currentSprite.y = 239;\n        _this.addChild(objTwo);\n        var objThree = new Character_1.Character();\n        objThree.currentSprite.x = 503;\n        objThree.currentSprite.y = 239;\n        _this.addChild(objThree);\n        return _this;\n    }\n    GameWorld.prototype.update = function (deltaTime) {\n        this.children.forEach(function (character) {\n            character.update(deltaTime);\n        });\n    };\n    return GameWorld;\n}(PIXI.Container));\nexports.GameWorld = GameWorld;\n\n\n//# sourceURL=webpack:///./client/src/GameWorld.ts?");

/***/ }),

/***/ "./client/src/MainScene.ts":
/*!*********************************!*\
  !*** ./client/src/MainScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Player_1 = __webpack_require__(/*! ./GameObjects/Player */ \"./client/src/GameObjects/Player.ts\");\nvar GameWorld_1 = __webpack_require__(/*! ./GameWorld */ \"./client/src/GameWorld.ts\");\nvar MainScene = /** @class */ (function (_super) {\n    __extends(MainScene, _super);\n    function MainScene() {\n        var _this = _super.call(this) || this;\n        _this.gameWorld = new GameWorld_1.GameWorld();\n        _this.addChild(_this.gameWorld);\n        _this.player = new Player_1.Player();\n        // this.player.position.x = 500;\n        _this.addChild(_this.player);\n        return _this;\n        // this.addChild(new Player());\n    }\n    MainScene.prototype.update = function (deltaTime) {\n        this.player.update(deltaTime);\n        this.gameWorld.update(deltaTime);\n        if (this.player.movingUp) {\n            this.gameWorld.position.y -= 1;\n        }\n        if (this.player.movingDown) {\n            this.gameWorld.position.y += 1;\n        }\n        if (this.player.movingLeft) {\n            this.gameWorld.position.x -= 1;\n        }\n        if (this.player.movingRight) {\n            this.gameWorld.position.x += 1;\n        }\n    };\n    return MainScene;\n}(PIXI.Container));\nexports.MainScene = MainScene;\n\n\n//# sourceURL=webpack:///./client/src/MainScene.ts?");

/***/ }),

/***/ "./client/src/game.ts":
/*!****************************!*\
  !*** ./client/src/game.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PIXI = __webpack_require__(/*! pixi.js */ \"pixi.js\");\nvar Player_1 = __webpack_require__(/*! ./GameObjects/Player */ \"./client/src/GameObjects/Player.ts\");\nvar MainScene_1 = __webpack_require__(/*! ./MainScene */ \"./client/src/MainScene.ts\");\nvar renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0x1099bb });\ndocument.body.appendChild(renderer.view);\n// var stage = new PIXI.Container();\n// var texture = PIXI.Texture.fromImage('assets/graphics/bunny.png', true);\n// console.log(\"HELLO\");\n// var bunny = new PIXI.Sprite(texture);\n// bunny.anchor.x = 0.5;\n// bunny.anchor.y = 0.5;\n// bunny.position.x = 400;\n// bunny.position.y = 300;\n// bunny.scale.x = 2;\n// bunny.scale.y = 2;\n// stage.addChild(bunny);\nvar scene = new MainScene_1.MainScene();\nvar player = new Player_1.Player();\nmainLoop();\nvar prev_time = Date.now();\nfunction mainLoop() {\n    var delta_time = Date.now() - prev_time;\n    prev_time = Date.now();\n    requestAnimationFrame(mainLoop);\n    scene.update(delta_time);\n    renderer.render(scene);\n}\n\n\n//# sourceURL=webpack:///./client/src/game.ts?");

/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = PIXI;\n\n//# sourceURL=webpack:///external_%22PIXI%22?");

/***/ })

/******/ });