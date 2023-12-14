/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game-view */ \"./src/scripts/game-view.js\");\n\n\nconst gameCanvas = document.getElementById(\"game-canvas\");\nconst ctx = gameCanvas.getContext(\"2d\");\ngameCanvas.width = _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardWidth;\ngameCanvas.height = _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHeight;\n_scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawBoard(ctx, _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardColor, 0, 0, _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardWidth, _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHeight);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ007QUFFM0MsTUFBTUUsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDekQsTUFBTUMsR0FBRyxHQUFHSCxVQUFVLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFdkNKLFVBQVUsQ0FBQ0ssS0FBSyxHQUFHTiwwREFBUSxDQUFDTyxVQUFVO0FBQ3RDTixVQUFVLENBQUNPLE1BQU0sR0FBR1IsMERBQVEsQ0FBQ1MsV0FBVztBQUV4Q1QsMERBQVEsQ0FBQ1UsU0FBUyxDQUFDTixHQUFHLEVBQUVKLDBEQUFRLENBQUNXLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFWCwwREFBUSxDQUFDTyxVQUFVLEVBQUVQLDBEQUFRLENBQUNTLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hpZ2hlcl9vcl9sb3dlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZS12aWV3XCI7XG5cbmNvbnN0IGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gZ2FtZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmdhbWVDYW52YXMud2lkdGggPSBHYW1lVmlldy5ib2FyZFdpZHRoO1xuZ2FtZUNhbnZhcy5oZWlnaHQgPSBHYW1lVmlldy5ib2FyZEhlaWdodDtcblxuR2FtZVZpZXcuZHJhd0JvYXJkKGN0eCwgR2FtZVZpZXcuYm9hcmRDb2xvciwgMCwgMCwgR2FtZVZpZXcuYm9hcmRXaWR0aCwgR2FtZVZpZXcuYm9hcmRIZWlnaHQpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImdhbWVDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiYm9hcmRXaWR0aCIsImhlaWdodCIsImJvYXJkSGVpZ2h0IiwiZHJhd0JvYXJkIiwiYm9hcmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game-view.js":
/*!**********************************!*\
  !*** ./src/scripts/game-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor() {}\n  static boardColor = \"pink\";\n  static boardWidth = 1000;\n  static boardHeight = 1000;\n  static drawBoard(ctx, color) {\n    let x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    let y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n    let width = arguments.length > 4 ? arguments[4] : undefined;\n    let height = arguments.length > 5 ? arguments[5] : undefined;\n    ctx.clearRect(x, y, width, height);\n    ctx.fillStyle = color;\n    ctx.fillRect(x, y, width, height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNYQyxXQUFXQSxDQUFBLEVBQUcsQ0FFZDtFQUNBLE9BQU9DLFVBQVUsR0FBRyxNQUFNO0VBQzFCLE9BQU9DLFVBQVUsR0FBRyxJQUFJO0VBQ3hCLE9BQU9DLFdBQVcsR0FBRyxJQUFJO0VBRXpCLE9BQU9DLFNBQVNBLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUErQjtJQUFBLElBQTdCQyxDQUFDLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7SUFBQSxJQUFFRyxDQUFDLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7SUFBQSxJQUFFSSxLQUFLLEdBQUFKLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBQSxJQUFFRyxNQUFNLEdBQUFMLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFDeERMLEdBQUcsQ0FBQ1MsU0FBUyxDQUFDUCxDQUFDLEVBQUVJLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLENBQUM7SUFDbENSLEdBQUcsQ0FBQ1UsU0FBUyxHQUFHVCxLQUFLO0lBQ3JCRCxHQUFHLENBQUNXLFFBQVEsQ0FBQ1QsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxDQUFDO0VBQ2pDO0FBR0o7QUFFQSwrREFBZWQsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2hpZ2hlcl9vcl9sb3dlci8uL3NyYy9zY3JpcHRzL2dhbWUtdmlldy5qcz9jNmE2Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKXtcblxuICAgIH1cbiAgICBzdGF0aWMgYm9hcmRDb2xvciA9IFwicGlua1wiO1xuICAgIHN0YXRpYyBib2FyZFdpZHRoID0gMTAwMDtcbiAgICBzdGF0aWMgYm9hcmRIZWlnaHQgPSAxMDAwO1xuXG4gICAgc3RhdGljIGRyYXdCb2FyZChjdHgsIGNvbG9yLCB4ID0gMCwgeSA9IDAsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjdHguY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3OyJdLCJuYW1lcyI6WyJHYW1lVmlldyIsImNvbnN0cnVjdG9yIiwiYm9hcmRDb2xvciIsImJvYXJkV2lkdGgiLCJib2FyZEhlaWdodCIsImRyYXdCb2FyZCIsImN0eCIsImNvbG9yIiwieCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game-view.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(ele) {\n    this.ele = ele;\n    console.log(this);\n    this.ele.innerHTML = \"<h1>it's Alive!!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxTQUFTLEdBQUcseUJBQXlCO0lBRTlDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0wsR0FBRyxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7RUFDeEQ7RUFFQUEsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDSixHQUFHLENBQUNPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDNUM7QUFDSjtBQUVBLCtEQUFlVixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGlnaGVyX29yX2xvd2VyLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+aXQncyBBbGl2ZSEhISE8L2gxPlwiO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaWdoZXJfb3JfbG93ZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;