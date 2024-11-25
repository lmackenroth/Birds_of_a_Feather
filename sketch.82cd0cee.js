/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! p5.js v1.11.1 October 31, 2024 */

/***/ }),

/***/ "./src/birdBody.ts":
/*!*************************!*\
  !*** ./src/birdBody.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body)
/* harmony export */ });
class body {
    constructor(p5) {
        this.triangles = [];
        this.p5 = p5;
        this.fillColor = p5.color(255, 255, 255);
        this.strokeColor = p5.color(0, 0, 0);
        console.log('triangles initialized');
    }
    draw() {
        this.p5.stroke(this.strokeColor);
        this.p5.fill(this.fillColor);
        this.triangles.forEach((triangle) => {
            this.p5.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3);
        });
    }
    move() {
    }
    setColors() {
        this.strokeColor = this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255));
        this.fillColor = this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255));
    }
    AddTriangle() {
        const x = this.p5.mouseX;
        const y = this.p5.mouseY;
        const angle = this.p5.radians(30);
        const size = this.p5.random(20, 50);
        const x1 = x;
        const y1 = y - size;
        const x2 = x - size * this.p5.cos(angle);
        const y2 = y + size * this.p5.sin(angle);
        const x3 = x + size * this.p5.cos(angle);
        const y3 = y + size * this.p5.sin(angle);
        this.triangles.push({
            x1, x2, x3, y1, y2, y3
        });
    }
}


/***/ }),

/***/ "./src/gradiant.ts":
/*!*************************!*\
  !*** ./src/gradiant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gradiants)
/* harmony export */ });
class gradiants {
    constructor(p5) {
        this.p5 = p5;
        console.log('Gradiant initialized');
    }
    render() {
        const p5 = this.p5;
        for (let y = 0; y < p5.height; y++) {
            const inter = p5.map(y, 0, p5.height, 0, 1);
            const c = p5.lerpColor(p5.color(50, 30, 200), p5.color(100, 50, 10), inter);
            p5.stroke(c);
            p5.line(0, y, p5.width, y);
        }
    }
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gradiant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradiant */ "./src/gradiant.ts");
/* harmony import */ var _birdBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./birdBody */ "./src/birdBody.ts");



function project(p5) {
    let gradiant;
    let birdBody;
    p5.setup = () => {
        p5.createCanvas(1000, 500);
        gradiant = new _gradiant__WEBPACK_IMPORTED_MODULE_1__["default"](p5);
        birdBody = new _birdBody__WEBPACK_IMPORTED_MODULE_2__.body(p5);
    };
    p5.draw = () => {
        gradiant.render();
        birdBody.draw();
        birdBody.setColors();
    };
    p5.mousePressed = () => {
        birdBody.AddTriangle();
    };
}
new (p5__WEBPACK_IMPORTED_MODULE_0___default())(project);

})();

/******/ })()
;
//# sourceMappingURL=sketch.82cd0cee.map