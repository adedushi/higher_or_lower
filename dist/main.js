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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game-view */ \"./src/scripts/game-view.js\");\n/* harmony import */ var _scripts_product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/product.js */ \"./src/scripts/product.js\");\n\n\n\nconst gameCanvas = document.getElementById(\"game-canvas\");\nconst ctx = gameCanvas.getContext(\"2d\");\ngameCanvas.width = _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardWidth;\ngameCanvas.height = _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHeight;\n_scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawBoard(ctx, _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardColor, 0, 0, _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardWidth, _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHeight);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxQztBQUNNO0FBQ0E7QUFFM0MsTUFBTUcsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDekQsTUFBTUMsR0FBRyxHQUFHSCxVQUFVLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFdkNKLFVBQVUsQ0FBQ0ssS0FBSyxHQUFHUCwwREFBUSxDQUFDUSxVQUFVO0FBQ3RDTixVQUFVLENBQUNPLE1BQU0sR0FBR1QsMERBQVEsQ0FBQ1UsV0FBVztBQUV4Q1YsMERBQVEsQ0FBQ1csU0FBUyxDQUFDTixHQUFHLEVBQUVMLDBEQUFRLENBQUNZLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFWiwwREFBUSxDQUFDUSxVQUFVLEVBQUVSLDBEQUFRLENBQUNVLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hpZ2hlcl9vcl9sb3dlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZS12aWV3XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9zY3JpcHRzL3Byb2R1Y3QuanNcIjtcblxuY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG5jb25zdCBjdHggPSBnYW1lQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuZ2FtZUNhbnZhcy53aWR0aCA9IEdhbWVWaWV3LmJvYXJkV2lkdGg7XG5nYW1lQ2FudmFzLmhlaWdodCA9IEdhbWVWaWV3LmJvYXJkSGVpZ2h0O1xuXG5HYW1lVmlldy5kcmF3Qm9hcmQoY3R4LCBHYW1lVmlldy5ib2FyZENvbG9yLCAwLCAwLCBHYW1lVmlldy5ib2FyZFdpZHRoLCBHYW1lVmlldy5ib2FyZEhlaWdodCk7Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsIlByb2R1Y3QiLCJnYW1lQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImJvYXJkV2lkdGgiLCJoZWlnaHQiLCJib2FyZEhlaWdodCIsImRyYXdCb2FyZCIsImJvYXJkQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game-view.js":
/*!**********************************!*\
  !*** ./src/scripts/game-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor() {}\n  static boardColor = \"pink\";\n  static boardWidth = 500;\n  static boardHeight = window.screen.height / 3;\n  static drawBoard(ctx, color) {\n    let x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    let y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n    let width = arguments.length > 4 ? arguments[4] : undefined;\n    let height = arguments.length > 5 ? arguments[5] : undefined;\n    ctx.clearRect(x, y, width, height);\n    ctx.fillStyle = color;\n    ctx.fillRect(x, y, width, height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNYQyxXQUFXQSxDQUFBLEVBQUcsQ0FFZDtFQUNBLE9BQU9DLFVBQVUsR0FBRyxNQUFNO0VBQzFCLE9BQU9DLFVBQVUsR0FBRyxHQUFHO0VBQ3ZCLE9BQU9DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxDQUFDO0VBRTdDLE9BQU9DLFNBQVNBLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUErQjtJQUFBLElBQTdCQyxDQUFDLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7SUFBQSxJQUFFRyxDQUFDLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7SUFBQSxJQUFFSSxLQUFLLEdBQUFKLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFBQSxJQUFFUCxNQUFNLEdBQUFLLFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7SUFDeERMLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDTixDQUFDLEVBQUVJLENBQUMsRUFBRUMsS0FBSyxFQUFFVCxNQUFNLENBQUM7SUFDbENFLEdBQUcsQ0FBQ1MsU0FBUyxHQUFHUixLQUFLO0lBQ3JCRCxHQUFHLENBQUNVLFFBQVEsQ0FBQ1IsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLEtBQUssRUFBRVQsTUFBTSxDQUFDO0VBQ2pDO0FBR0o7QUFFQSwrREFBZVAsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2hpZ2hlcl9vcl9sb3dlci8uL3NyYy9zY3JpcHRzL2dhbWUtdmlldy5qcz9jNmE2Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKXtcblxuICAgIH1cbiAgICBzdGF0aWMgYm9hcmRDb2xvciA9IFwicGlua1wiO1xuICAgIHN0YXRpYyBib2FyZFdpZHRoID0gNTAwO1xuICAgIHN0YXRpYyBib2FyZEhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC8gMztcblxuICAgIHN0YXRpYyBkcmF3Qm9hcmQoY3R4LCBjb2xvciwgeCA9IDAsIHkgPSAwLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiXSwibmFtZXMiOlsiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImJvYXJkQ29sb3IiLCJib2FyZFdpZHRoIiwiYm9hcmRIZWlnaHQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJoZWlnaHQiLCJkcmF3Qm9hcmQiLCJjdHgiLCJjb2xvciIsIngiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ5Iiwid2lkdGgiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game-view.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(ele) {\n    this.ele = ele;\n    console.log(this);\n    this.ele.innerHTML = \"<h1>it's Alive!!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxTQUFTLEdBQUcseUJBQXlCO0lBRTlDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0wsR0FBRyxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7RUFDeEQ7RUFFQUEsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDSixHQUFHLENBQUNPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDNUM7QUFDSjtBQUVBLCtEQUFlVixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGlnaGVyX29yX2xvd2VyLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+aXQncyBBbGl2ZSEhISE8L2gxPlwiO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/product.js":
/*!********************************!*\
  !*** ./src/scripts/product.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Product {\n  constructor(product_id) {\n    this.product_id = product_id;\n  }\n}\nconst product_id = \"6514055\";\nconst API_KEY = \"\";\nconst bbURL = `https://api.bestbuy.com/v1/products(sku=${product_id})?apiKey=${API_KEY}&sort=name.asc&show=name,image,salePrice,url&format=json`;\nconst fetchProduct = async e => {\n  // e.preventDefault();\n\n  try {\n    let res = await fetch(bbURL);\n    if (res.ok) {\n      let resBody = await res.json();\n      let productName = resBody.products[0].name;\n      let productImage = resBody.products[0].image;\n      let productPrice = resBody.products[0].salePrice;\n      let productURL = resBody.products[0].url;\n      console.log(productName);\n    }\n  } catch (err) {\n    console.error(err);\n  }\n};\nconst gameCanvas = document.getElementById(\"game-canvas\");\ngameCanvas.addEventListener('click', fetchProduct());\nconst products = [6514052, 6514055, 6553101, 6491295, 6537363, 6450247, 6482022, 6501902, 6537422, 6537371, 6558847, 6507324, 6531621, 6471969, 6191309, 6421866, 6513002, 6513000, 6410013, 6512370, 6530134, 6420141, 6420142, 6529899, 6325628, 6419631, 6447499, 6323156, 6427952, 6492267, 6467055, 6397576, 6397590, 6546221, 6546219, 6443500, 6360748, 6468484, 6447149, 6511565, 6488940, 6555625, 6447922, 4943603, 6447914, 6418524, 6447911, 4299700, 6519870, 6411917, 6356535, 6454256, 6472669, 6471418, 6427076, 6488911, 6426700, 6213287, 6514475, 6511782, 6567807, 6441423, 6550180, 6461328, 6454736, 6544304, 6454733, 6377587, 6564054, 6427739, 6344419, 6505155, 6187502, 6361926, 6535019, 5255027, 6411140, 6464936, 6762924, 6519391, 6530352, 6550445, 6540329, 6514441, 6385560, 6551564, 6473099, 6551163, 6485426, 6545966, 6550535, 6522416, 6323759, 6546137, 6548200, 6364719, 5852906, 6494388, 6213101, 6473808];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wcm9kdWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPO0VBQ1RDLFdBQVdBLENBQUNDLFVBQVUsRUFBQztJQUNuQixJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBVTtFQUNoQztBQUNKO0FBRUEsTUFBTUEsVUFBVSxHQUFHLFNBQVM7QUFDNUIsTUFBTUMsT0FBTyxHQUFHLEVBQUU7QUFDbEIsTUFBTUMsS0FBSyxHQUFJLDJDQUEwQ0YsVUFBVyxZQUFXQyxPQUFRLDBEQUF5RDtBQUVoSixNQUFNRSxZQUFZLEdBQUcsTUFBT0MsQ0FBQyxJQUFLO0VBQzlCOztFQUVBLElBQUk7SUFDQSxJQUFJQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixLQUFLLENBQUM7SUFFaEMsSUFBSUcsR0FBRyxDQUFDRSxFQUFFLEVBQUM7TUFDUCxJQUFJQyxPQUFPLEdBQUcsTUFBTUgsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUM5QixJQUFJQyxXQUFXLEdBQUdGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJO01BQzFDLElBQUlDLFlBQVksR0FBR0wsT0FBTyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUs7TUFDNUMsSUFBSUMsWUFBWSxHQUFHUCxPQUFPLENBQUNHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssU0FBUztNQUNoRCxJQUFJQyxVQUFVLEdBQUdULE9BQU8sQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxHQUFHO01BQ3hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsV0FBVyxDQUFDO0lBQzVCO0VBRUEsQ0FBQyxDQUFDLE9BQU1XLEdBQUcsRUFBRTtJQUNURixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0VBQ3RCO0FBQ0osQ0FBQztBQUVELE1BQU1FLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3pERixVQUFVLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRXZCLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFHcEQsTUFBTVEsUUFBUSxHQUFHLENBQ2pCLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE9BQU8sQ0FDTjtBQUVELCtEQUFlYixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGlnaGVyX29yX2xvd2VyLy4vc3JjL3NjcmlwdHMvcHJvZHVjdC5qcz9hZDIwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2R1Y3R7XG4gICAgY29uc3RydWN0b3IocHJvZHVjdF9pZCl7XG4gICAgICAgIHRoaXMucHJvZHVjdF9pZCA9IHByb2R1Y3RfaWQ7XG4gICAgfVxufVxuXG5jb25zdCBwcm9kdWN0X2lkID0gXCI2NTE0MDU1XCI7XG5jb25zdCBBUElfS0VZID0gXCJcIjtcbmNvbnN0IGJiVVJMID0gYGh0dHBzOi8vYXBpLmJlc3RidXkuY29tL3YxL3Byb2R1Y3RzKHNrdT0ke3Byb2R1Y3RfaWR9KT9hcGlLZXk9JHtBUElfS0VZfSZzb3J0PW5hbWUuYXNjJnNob3c9bmFtZSxpbWFnZSxzYWxlUHJpY2UsdXJsJmZvcm1hdD1qc29uYDtcblxuY29uc3QgZmV0Y2hQcm9kdWN0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYmJVUkwpO1xuXG4gICAgaWYgKHJlcy5vayl7XG4gICAgICAgIGxldCByZXNCb2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgbGV0IHByb2R1Y3ROYW1lID0gcmVzQm9keS5wcm9kdWN0c1swXS5uYW1lXG4gICAgICAgIGxldCBwcm9kdWN0SW1hZ2UgPSByZXNCb2R5LnByb2R1Y3RzWzBdLmltYWdlXG4gICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSByZXNCb2R5LnByb2R1Y3RzWzBdLnNhbGVQcmljZVxuICAgICAgICBsZXQgcHJvZHVjdFVSTCA9IHJlc0JvZHkucHJvZHVjdHNbMF0udXJsXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3ROYW1lKVxuICAgIH1cblxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoUHJvZHVjdCgpKTtcblxuXG5jb25zdCBwcm9kdWN0cyA9IFtcbjY1MTQwNTIsXG42NTE0MDU1LFxuNjU1MzEwMSxcbjY0OTEyOTUsXG42NTM3MzYzLFxuNjQ1MDI0NyxcbjY0ODIwMjIsXG42NTAxOTAyLFxuNjUzNzQyMixcbjY1MzczNzEsXG42NTU4ODQ3LFxuNjUwNzMyNCxcbjY1MzE2MjEsXG42NDcxOTY5LFxuNjE5MTMwOSxcbjY0MjE4NjYsXG42NTEzMDAyLFxuNjUxMzAwMCxcbjY0MTAwMTMsXG42NTEyMzcwLFxuNjUzMDEzNCxcbjY0MjAxNDEsXG42NDIwMTQyLFxuNjUyOTg5OSxcbjYzMjU2MjgsXG42NDE5NjMxLFxuNjQ0NzQ5OSxcbjYzMjMxNTYsXG42NDI3OTUyLFxuNjQ5MjI2NyxcbjY0NjcwNTUsXG42Mzk3NTc2LFxuNjM5NzU5MCxcbjY1NDYyMjEsXG42NTQ2MjE5LFxuNjQ0MzUwMCxcbjYzNjA3NDgsXG42NDY4NDg0LFxuNjQ0NzE0OSxcbjY1MTE1NjUsXG42NDg4OTQwLFxuNjU1NTYyNSxcbjY0NDc5MjIsXG40OTQzNjAzLFxuNjQ0NzkxNCxcbjY0MTg1MjQsXG42NDQ3OTExLFxuNDI5OTcwMCxcbjY1MTk4NzAsXG42NDExOTE3LFxuNjM1NjUzNSxcbjY0NTQyNTYsXG42NDcyNjY5LFxuNjQ3MTQxOCxcbjY0MjcwNzYsXG42NDg4OTExLFxuNjQyNjcwMCxcbjYyMTMyODcsXG42NTE0NDc1LFxuNjUxMTc4MixcbjY1Njc4MDcsXG42NDQxNDIzLFxuNjU1MDE4MCxcbjY0NjEzMjgsXG42NDU0NzM2LFxuNjU0NDMwNCxcbjY0NTQ3MzMsXG42Mzc3NTg3LFxuNjU2NDA1NCxcbjY0Mjc3MzksXG42MzQ0NDE5LFxuNjUwNTE1NSxcbjYxODc1MDIsXG42MzYxOTI2LFxuNjUzNTAxOSxcbjUyNTUwMjcsXG42NDExMTQwLFxuNjQ2NDkzNixcbjY3NjI5MjQsXG42NTE5MzkxLFxuNjUzMDM1MixcbjY1NTA0NDUsXG42NTQwMzI5LFxuNjUxNDQ0MSxcbjYzODU1NjAsXG42NTUxNTY0LFxuNjQ3MzA5OSxcbjY1NTExNjMsXG42NDg1NDI2LFxuNjU0NTk2NixcbjY1NTA1MzUsXG42NTIyNDE2LFxuNjMyMzc1OSxcbjY1NDYxMzcsXG42NTQ4MjAwLFxuNjM2NDcxOSxcbjU4NTI5MDYsXG42NDk0Mzg4LFxuNjIxMzEwMSxcbjY0NzM4MDhcbl1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwibmFtZXMiOlsiUHJvZHVjdCIsImNvbnN0cnVjdG9yIiwicHJvZHVjdF9pZCIsIkFQSV9LRVkiLCJiYlVSTCIsImZldGNoUHJvZHVjdCIsImUiLCJyZXMiLCJmZXRjaCIsIm9rIiwicmVzQm9keSIsImpzb24iLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RzIiwibmFtZSIsInByb2R1Y3RJbWFnZSIsImltYWdlIiwicHJvZHVjdFByaWNlIiwic2FsZVByaWNlIiwicHJvZHVjdFVSTCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImdhbWVDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/product.js\n");

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