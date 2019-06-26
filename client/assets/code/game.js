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
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar PIXI = __webpack_require__(/*! pixi.js */ \"pixi.js\");\r\nvar GameObject_1 = __webpack_require__(/*! ./GameObject */ \"./client/src/GameObjects/GameObject.ts\");\r\nvar Character = /** @class */ (function (_super) {\r\n    __extends(Character, _super);\r\n    function Character() {\r\n        var _this = _super.call(this) || this;\r\n        _this.hp = 1.0;\r\n        _this.maxHp = 1.0;\r\n        _this.hpBar = new PIXI.Graphics();\r\n        _this.addChild(_this.hpBar);\r\n        return _this;\r\n    }\r\n    Character.prototype.update = function (deltaTime) {\r\n        var sprite = this.currentSprite;\r\n        this.drawHpBar(sprite.position.x + sprite.width * 0.5 - Character.WIDTH * 0.5, sprite.position.y - Character.HEIGHT, this.hp / this.maxHp);\r\n    };\r\n    Character.prototype.drawHpBar = function (x, y, hp) {\r\n        this.hpBar.clear();\r\n        this.hpBar.beginFill(Character.B_COLOR);\r\n        this.hpBar.drawRect(x, y, Character.WIDTH, Character.HEIGHT);\r\n        this.hpBar.beginFill(Character.F_COLOR);\r\n        this.hpBar.drawRect(x, y, Character.WIDTH * hp, Character.HEIGHT);\r\n    };\r\n    Character.prototype.loadTextures = function () { };\r\n    Character.B_COLOR = 0XFF0000;\r\n    Character.F_COLOR = 0X00FF00;\r\n    Character.WIDTH = 150.0;\r\n    Character.HEIGHT = 40.0;\r\n    return Character;\r\n}(GameObject_1.GameObject));\r\nexports.Character = Character;\r\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/Character.ts?");

/***/ }),

/***/ "./client/src/GameObjects/GameObject.ts":
/*!**********************************************!*\
  !*** ./client/src/GameObjects/GameObject.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar PIXI = __webpack_require__(/*! pixi.js */ \"pixi.js\");\r\nvar GameObject = /** @class */ (function (_super) {\r\n    __extends(GameObject, _super);\r\n    function GameObject() {\r\n        var _this = _super.call(this) || this;\r\n        _this.currentSprite = null;\r\n        return _this;\r\n    }\r\n    return GameObject;\r\n}(PIXI.Container));\r\nexports.GameObject = GameObject;\r\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/GameObject.ts?");

/***/ }),

/***/ "./client/src/GameObjects/NPC.ts":
/*!***************************************!*\
  !*** ./client/src/GameObjects/NPC.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Character_1 = __webpack_require__(/*! ./Character */ \"./client/src/GameObjects/Character.ts\");\r\nvar NPC = /** @class */ (function (_super) {\r\n    __extends(NPC, _super);\r\n    function NPC() {\r\n        var _this = _super.call(this) || this;\r\n        _this.loadTextures();\r\n        _this.addChild(_this.hpBar);\r\n        return _this;\r\n    }\r\n    NPC.prototype.update = function (deltaTime) {\r\n        _super.prototype.update.call(this, deltaTime);\r\n    };\r\n    NPC.prototype.loadTextures = function () {\r\n        var texture = PIXI.Texture.fromImage('assets/graphics/Player/player.png', true);\r\n        var sprite = new PIXI.Sprite(texture);\r\n        this.currentSprite = new PIXI.Sprite(texture);\r\n        this.currentSprite.position.x = 100;\r\n        this.currentSprite.position.y = 200;\r\n        // bunny.anchor.x = 0.5;\r\n        // bunny.anchor.y = 0.5;\r\n        // bunny.position.x = 400;\r\n        // bunny.position.y = 300;\r\n        // bunny.scale.x = 2;\r\n        // bunny.scale.y = 2;\r\n        this.addChild(this.currentSprite);\r\n    };\r\n    return NPC;\r\n}(Character_1.Character));\r\nexports.NPC = NPC;\r\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/NPC.ts?");

/***/ }),

/***/ "./client/src/GameObjects/Player.ts":
/*!******************************************!*\
  !*** ./client/src/GameObjects/Player.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Character_1 = __webpack_require__(/*! ./Character */ \"./client/src/GameObjects/Character.ts\");\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    function Player() {\r\n        var _this = _super.call(this) || this;\r\n        _this.movingUp = false;\r\n        _this.movingDown = false;\r\n        _this.movingLeft = false;\r\n        _this.movingRight = false;\r\n        var texture = PIXI.Texture.fromImage('assets/graphics/Player/player.png', true);\r\n        var sprite = new PIXI.Sprite(texture);\r\n        _this.currentSprite = new PIXI.Sprite(texture);\r\n        _this.currentSprite.position.x = 200;\r\n        _this.currentSprite.position.y = 200;\r\n        // bunny.anchor.x = 0.5;\r\n        // bunny.anchor.y = 0.5;\r\n        // bunny.position.x = 400;\r\n        // bunny.position.y = 300;\r\n        // bunny.scale.x = 2;\r\n        // bunny.scale.y = 2;\r\n        _this.addChild(_this.currentSprite);\r\n        window.addEventListener('keydown', _this.keyDownEvent.bind(_this));\r\n        window.addEventListener('keyup', _this.keyUpEvent.bind(_this));\r\n        return _this;\r\n    }\r\n    Player.prototype.update = function (deltaTime) {\r\n        _super.prototype.update.call(this, deltaTime);\r\n    };\r\n    Player.prototype.loadTextures = function () {\r\n    };\r\n    Player.prototype.keyDownEvent = function (event) {\r\n        if (!this.movingUp && event.code === 'KeyW') {\r\n            this.movingUp = true;\r\n            console.log(true, \"[]\");\r\n        }\r\n        if (event.code === 'KeyS') {\r\n            this.movingDown = true;\r\n        }\r\n        if (event.code === 'KeyA') {\r\n            this.movingLeft = true;\r\n        }\r\n        if (event.code === 'KeyD') {\r\n            this.movingRight = true;\r\n        }\r\n    };\r\n    Player.prototype.keyUpEvent = function (event) {\r\n        if (this.movingUp && event.code === 'KeyW') {\r\n            console.log(false, \"[]\");\r\n            this.movingUp = false;\r\n        }\r\n        if (event.code === 'KeyS') {\r\n            this.movingDown = false;\r\n        }\r\n        if (event.code === 'KeyA') {\r\n            this.movingLeft = false;\r\n        }\r\n        if (event.code === 'KeyD') {\r\n            this.movingRight = false;\r\n        }\r\n    };\r\n    return Player;\r\n}(Character_1.Character));\r\nexports.Player = Player;\r\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/Player.ts?");

/***/ }),

/***/ "./client/src/GameObjects/TileMap.ts":
/*!*******************************************!*\
  !*** ./client/src/GameObjects/TileMap.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameObject_1 = __webpack_require__(/*! ./GameObject */ \"./client/src/GameObjects/GameObject.ts\");\r\nvar TileMap = /** @class */ (function (_super) {\r\n    __extends(TileMap, _super);\r\n    function TileMap() {\r\n        var _this = _super.call(this) || this;\r\n        _this.TILE_SIZE = 40;\r\n        _this.WIDTH = 15;\r\n        _this.HEIGHT = 16;\r\n        _this.MAP = [\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\r\n        ];\r\n        var textures = [];\r\n        textures.push(PIXI.Texture.fromImage('assets/graphics/Tiles/grass20.png', true));\r\n        textures.push(PIXI.Texture.fromImage('assets/graphics/Tiles/water.png', true));\r\n        for (var row = 0; row < _this.HEIGHT; row++) {\r\n            for (var col = 0; col < _this.WIDTH; col++) {\r\n                var sprite = new PIXI.Sprite(textures[_this.MAP[row][col]]);\r\n                sprite.position.x = col * _this.TILE_SIZE;\r\n                sprite.position.y = row * _this.TILE_SIZE;\r\n                _this.addChild(sprite);\r\n            }\r\n        }\r\n        return _this;\r\n    }\r\n    TileMap.prototype.update = function (deltaTime) {\r\n        // console.log(deltaTime);\r\n        // this.currentSprite.position.x += 1;\r\n    };\r\n    TileMap.prototype.loadTextures = function () {\r\n    };\r\n    return TileMap;\r\n}(GameObject_1.GameObject));\r\nexports.TileMap = TileMap;\r\n\n\n//# sourceURL=webpack:///./client/src/GameObjects/TileMap.ts?");

/***/ }),

/***/ "./client/src/GameWorld.ts":
/*!*********************************!*\
  !*** ./client/src/GameWorld.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar NPC_1 = __webpack_require__(/*! ./GameObjects/NPC */ \"./client/src/GameObjects/NPC.ts\");\r\nvar TileMap_1 = __webpack_require__(/*! ./GameObjects/TileMap */ \"./client/src/GameObjects/TileMap.ts\");\r\nvar GameWorld = /** @class */ (function (_super) {\r\n    __extends(GameWorld, _super);\r\n    function GameWorld() {\r\n        var _this = _super.call(this) || this;\r\n        _this.mockup();\r\n        return _this;\r\n    }\r\n    GameWorld.prototype.update = function (deltaTime) {\r\n        this.children.forEach(function (object) {\r\n            object.update(deltaTime);\r\n        });\r\n    };\r\n    GameWorld.prototype.mockup = function () {\r\n        var tileMap = new TileMap_1.TileMap();\r\n        this.addChild(tileMap);\r\n        var objOne = new NPC_1.NPC();\r\n        objOne.currentSprite.x = -50;\r\n        objOne.currentSprite.y = 239;\r\n        this.addChild(objOne);\r\n        var objTwo = new NPC_1.NPC();\r\n        objTwo.currentSprite.x = 203;\r\n        objTwo.currentSprite.y = 239;\r\n        this.addChild(objTwo);\r\n        var objThree = new NPC_1.NPC();\r\n        objThree.currentSprite.x = 503;\r\n        objThree.currentSprite.y = 239;\r\n        this.addChild(objThree);\r\n    };\r\n    return GameWorld;\r\n}(PIXI.Container));\r\nexports.GameWorld = GameWorld;\r\n\n\n//# sourceURL=webpack:///./client/src/GameWorld.ts?");

/***/ }),

/***/ "./client/src/MainScene.ts":
/*!*********************************!*\
  !*** ./client/src/MainScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Player_1 = __webpack_require__(/*! ./GameObjects/Player */ \"./client/src/GameObjects/Player.ts\");\r\nvar GameWorld_1 = __webpack_require__(/*! ./GameWorld */ \"./client/src/GameWorld.ts\");\r\nvar UI_1 = __webpack_require__(/*! ./UI/UI */ \"./client/src/UI/UI.ts\");\r\nvar MainScene = /** @class */ (function (_super) {\r\n    __extends(MainScene, _super);\r\n    function MainScene() {\r\n        var _this = _super.call(this) || this;\r\n        _this.gameWorld = new GameWorld_1.GameWorld();\r\n        _this.addChild(_this.gameWorld);\r\n        _this.player = new Player_1.Player();\r\n        _this.addChild(_this.player);\r\n        _this.UI = new UI_1.UI();\r\n        _this.addChild(_this.UI);\r\n        return _this;\r\n    }\r\n    MainScene.prototype.update = function (deltaTime) {\r\n        this.player.update(deltaTime);\r\n        this.gameWorld.update(deltaTime);\r\n        this.UI.update(deltaTime);\r\n        if (this.player.movingUp) {\r\n            this.gameWorld.position.y += 1;\r\n        }\r\n        if (this.player.movingDown) {\r\n            this.gameWorld.position.y -= 1;\r\n        }\r\n        if (this.player.movingLeft) {\r\n            this.gameWorld.position.x += 1;\r\n        }\r\n        if (this.player.movingRight) {\r\n            this.gameWorld.position.x -= 1;\r\n        }\r\n    };\r\n    return MainScene;\r\n}(PIXI.Container));\r\nexports.MainScene = MainScene;\r\n\n\n//# sourceURL=webpack:///./client/src/MainScene.ts?");

/***/ }),

/***/ "./client/src/UI/SkillBar.ts":
/*!***********************************!*\
  !*** ./client/src/UI/SkillBar.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar UIElement_1 = __webpack_require__(/*! ./UIElement */ \"./client/src/UI/UIElement.ts\");\r\nvar SkillBar = /** @class */ (function (_super) {\r\n    __extends(SkillBar, _super);\r\n    function SkillBar() {\r\n        return _super.call(this) || this;\r\n    }\r\n    SkillBar.prototype.update = function (deltaTime) {\r\n        console.log(\"HI\");\r\n        this.drawHpBar();\r\n    };\r\n    SkillBar.prototype.drawHpBar = function () {\r\n        // this.clear();\r\n        this.beginFill(SkillBar.B_COLOR);\r\n        this.drawRect(SkillBar.X, SkillBar.Y, SkillBar.WIDTH, SkillBar.HEIGHT);\r\n    };\r\n    SkillBar.B_COLOR = 0X663300;\r\n    SkillBar.WIDTH = 500;\r\n    SkillBar.HEIGHT = 100;\r\n    SkillBar.X = 150;\r\n    SkillBar.Y = 480;\r\n    return SkillBar;\r\n}(UIElement_1.UIElement));\r\nexports.SkillBar = SkillBar;\r\n\n\n//# sourceURL=webpack:///./client/src/UI/SkillBar.ts?");

/***/ }),

/***/ "./client/src/UI/UI.ts":
/*!*****************************!*\
  !*** ./client/src/UI/UI.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SkillBar_1 = __webpack_require__(/*! ./SkillBar */ \"./client/src/UI/SkillBar.ts\");\r\nvar UI = /** @class */ (function (_super) {\r\n    __extends(UI, _super);\r\n    function UI() {\r\n        var _this = _super.call(this) || this;\r\n        // console.log('ZZZ');\r\n        // this.addChild(this.skillBar);\r\n        _this.addChild(new SkillBar_1.SkillBar());\r\n        return _this;\r\n    }\r\n    UI.prototype.update = function (deltaTime) {\r\n        this.children.forEach(function (userInterface) {\r\n            userInterface.update(deltaTime);\r\n        });\r\n    };\r\n    return UI;\r\n}(PIXI.Container));\r\nexports.UI = UI;\r\n\n\n//# sourceURL=webpack:///./client/src/UI/UI.ts?");

/***/ }),

/***/ "./client/src/UI/UIElement.ts":
/*!************************************!*\
  !*** ./client/src/UI/UIElement.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar UIElement = /** @class */ (function (_super) {\r\n    __extends(UIElement, _super);\r\n    function UIElement() {\r\n        return _super.call(this) || this;\r\n    }\r\n    return UIElement;\r\n}(PIXI.Graphics));\r\nexports.UIElement = UIElement;\r\n\n\n//# sourceURL=webpack:///./client/src/UI/UIElement.ts?");

/***/ }),

/***/ "./client/src/game.ts":
/*!****************************!*\
  !*** ./client/src/game.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar PIXI = __webpack_require__(/*! pixi.js */ \"pixi.js\");\r\nvar MainScene_1 = __webpack_require__(/*! ./MainScene */ \"./client/src/MainScene.ts\");\r\nvar renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0x1099bb });\r\ndocument.body.appendChild(renderer.view);\r\nvar scene = new MainScene_1.MainScene();\r\nmainLoop();\r\nvar prev_time = Date.now();\r\nfunction mainLoop() {\r\n    var delta_time = Date.now() - prev_time;\r\n    prev_time = Date.now();\r\n    requestAnimationFrame(mainLoop);\r\n    scene.update(delta_time);\r\n    renderer.render(scene);\r\n}\r\n\n\n//# sourceURL=webpack:///./client/src/game.ts?");

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