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
        this.lastX1 = null;
        this.lastY1 = null;
        this.p5 = p5;
        console.log('Triangles initialized');
    }
    draw() {
        this.triangles.forEach((triangle) => {
            this.p5.stroke(triangle.strokeColor);
            this.p5.fill(triangle.fillColor);
            this.p5.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3);
        });
    }
    calculateVertices(x, y, size) {
        return {
            x1: x - size / 2,
            y1: y - size,
            x2: x + size / 2,
            y2: y + size,
            x3: x + 3 * (size / 2),
            y3: y + size
        };
    }
    setColors() {
        return {
            fillColor: this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 200),
            strokeColor: this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 120)
        };
    }
    AddTriangle() {
        const x = this.p5.mouseX;
        const y = this.p5.mouseY;
        const size = this.p5.random(5, 10);
        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices(x, y, size);
        const { fillColor, strokeColor } = this.setColors();
        this.triangles.push({ x1, y1, x2, y2, x3, y3, fillColor, strokeColor });
        this.lastX1 = x1;
        this.lastY1 = y1;
        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }
    move() {
    }
}


/***/ }),

/***/ "./src/birdHead.ts":
/*!*************************!*\
  !*** ./src/birdHead.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   head: () => (/* binding */ head)
/* harmony export */ });
/* harmony import */ var _birdBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birdBody */ "./src/birdBody.ts");

class head extends _birdBody__WEBPACK_IMPORTED_MODULE_0__.body {
    constructor(p5) {
        super(p5);
        this.circles = [];
        this.p5 = p5;
        console.log('triangles initialized');
    }
    draw() {
        super.draw();
        this.circles.forEach((circle) => {
            this.p5.stroke(circle.strokeColor);
            this.p5.fill(circle.fillColor);
            this.p5.circle(circle.x, circle.y, 5);
        });
    }
    AddCircle(x, y) {
        const xCircle = x;
        const yCircle = y;
        const fillColor = this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 200);
        const strokeColor = this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 120);
        this.circles.push({ x: xCircle, y: yCircle, fillColor, strokeColor });
        console.log(`Circle added at (${xCircle}, ${yCircle})`);
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
/* harmony import */ var _birdHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./birdHead */ "./src/birdHead.ts");




function project(p5) {
    let gradiant;
    let birdBody;
    let birdHead;
    p5.setup = () => {
        p5.createCanvas(1000, 500);
        gradiant = new _gradiant__WEBPACK_IMPORTED_MODULE_1__["default"](p5);
        birdBody = new _birdBody__WEBPACK_IMPORTED_MODULE_2__.body(p5);
        birdHead = new _birdHead__WEBPACK_IMPORTED_MODULE_3__.head(p5);
    };
    p5.draw = () => {
        gradiant.render();
        birdBody.draw();
        birdHead.draw();
    };
    p5.mousePressed = () => {
        birdBody.AddTriangle();
        if (birdBody.lastX1 !== null && birdBody.lastY1 !== null) {
            birdHead.AddCircle(birdBody.lastX1, birdBody.lastY1);
        }
        else {
            console.log("Error: No triangle coordinates available for adding a circle.");
        }
    };
}
new (p5__WEBPACK_IMPORTED_MODULE_0___default())(project);

})();

/******/ })()
;
//# sourceMappingURL=sketch.23b6293c.map