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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/mobilenav.js":
/*!*****************************!*\
  !*** ./src/js/mobilenav.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btn = document.querySelector('.js-mobilemenu-btn');\r\nconst mobilemenu = document.querySelector('.js-mobilemenu');\r\nconst mobilemenu_overlay = document.querySelector('.js-mobilemenu-overlay');\r\n\r\n\r\n//Mobilenav\r\nbtn.addEventListener('click', function() {\r\n    btn.classList.toggle('is-active');\r\n    mobilemenu.classList.toggle('is-active');\r\n    mobilemenu_overlay.classList.toggle('is-active');\r\n}, false);\r\n\r\nmobilemenu_overlay.addEventListener('click', function() {\r\n    btn.classList.remove('is-active');\r\n    mobilemenu.classList.remove('is-active');\r\n    mobilemenu_overlay.classList.remove('is-active');\r\n}, false);\r\n\n\n//# sourceURL=webpack:///./src/js/mobilenav.js?");

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const toggleActive = (state) => {\r\n    const stateClass = 'is-active';\r\n    const header = document.querySelector('.js-header');\r\n    if (state) {\r\n        header.classList.add(stateClass);\r\n    } else {\r\n        header.classList.remove(stateClass);\r\n    }\r\n};\r\n\r\nwindow.addEventListener('scroll', () => {\r\n    const breakpoint = 1;\r\n    const pos = window.pageYOffset;\r\n\r\n    if (pos > breakpoint) {\r\n        toggleActive(true);\r\n    } \r\n    else {\r\n        toggleActive(false);\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/scroll.js?");

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/js/mobilenav.js ./src/js/scroll.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\mina-5u\\public_html\\coupdefoudre\\coupdefoudre_html\\src\\js\\mobilenav.js */\"./src/js/mobilenav.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\mina-5u\\public_html\\coupdefoudre\\coupdefoudre_html\\src\\js\\scroll.js */\"./src/js/scroll.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/mobilenav.js_./src/js/scroll.js?");

/***/ })

/******/ });