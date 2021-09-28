/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/downloaderIndex.ts":
/*!********************************!*\
  !*** ./src/downloaderIndex.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var downloader_1 = __webpack_require__(/*! ./specialized/downloader */ "./src/specialized/downloader.ts");
function tryGetInfo(name) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(downloader_1.modelNameUrl(name))];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Not found');
                    return [4 /*yield*/, response.text()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var modelNameInput = document.getElementById('model-name');
var techDiv = document.getElementById('tech');
var sbDiv = document.getElementById('sb');
var okDiv = document.getElementById('youareok');
var waitDiv = document.getElementById('waitinfo');
var tryButton = document.getElementById('trybutton');
var goButton = document.getElementById('go');
var modelName = '';
function finishinput() {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tryButton.disabled = true;
                    return [4 /*yield*/, tryGetInfo(modelNameInput.value).catch(function (e) {
                            sbDiv.hidden = false;
                            techDiv.innerText = e instanceof Error ? e.message : e;
                            return undefined;
                        })];
                case 1:
                    r = _a.sent();
                    if (typeof r === 'string') {
                        sbDiv.hidden = true;
                        okDiv.hidden = false;
                        modelNameInput.disabled = true;
                        tryButton.disabled = true;
                        modelName = r;
                    }
                    else {
                        tryButton.disabled = false;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function downloadFile(origin, ext, dest) {
    return __awaiter(this, void 0, void 0, function () {
        var response, blob, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(origin + ext)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.arrayBuffer()];
                case 2:
                    blob = _a.sent();
                    return [4 /*yield*/, fetch(dest + ext, { method: 'POST', body: blob, headers: { 'Content-Type': 'application/octet-stream' } })]; // 用Blob就不行，真是奇怪呢
                case 3:
                    _a.sent(); // 用Blob就不行，真是奇怪呢
                    waitDiv.innerText += ext + "\u4E0B\u8F7D\u6210\u529F\n";
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    waitDiv.innerText += ext + "\u4E0B\u8F7D\u5931\u8D25\n";
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function startDownload() {
    return __awaiter(this, void 0, void 0, function () {
        var origin, dest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    goButton.disabled = true;
                    waitDiv.innerText = '';
                    origin = downloader_1.modelOrigin(modelNameInput.value, modelName);
                    dest = "https://huidesktop/sandbox/" + modelName;
                    return [4 /*yield*/, Promise.all([
                            downloadFile(origin, '.skel', dest),
                            downloadFile(origin, '.png', dest),
                            downloadFile(origin, '.atlas', dest)
                        ])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fetch('https://huidesktop/sandbox/model_config.json', { method: 'POST', body: modelName })];
                case 2:
                    _a.sent();
                    waitDiv.innerText += '下载完成，即将自动刷新主窗口';
                    window.opener.onDownloadModelSuccess();
                    window.close();
                    return [2 /*return*/];
            }
        });
    });
}
tryButton.onclick = finishinput;
goButton.onclick = startDownload;
fetch('/sandbox/modelName.txt').then(function (r) {
    if (r.ok) {
        return r.text();
    }
    else
        return null;
}).then(function (v) {
    if (typeof v === 'string') {
        modelNameInput.value = v;
        return finishinput();
    }
}).catch(function (e) { return console.error(e); });


/***/ }),

/***/ "./src/specialized/downloader.ts":
/*!***************************************!*\
  !*** ./src/specialized/downloader.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.modelOrigin = exports.modelNameUrl = void 0;
// 获取模型文件名字（xxx.skel, xxx.png, xxx.atlas的xxx）
exports.modelNameUrl = function (name) { return "https://desktop.huix.cc/api/azurLane/" + name + "/model"; };
// 获取下载模型文件的基础URL（在其后加.skel等）
exports.modelOrigin = function (name, modelName) { return "https://desktop.huix.cc/api/azurLane/" + name + "/model/" + modelName; };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/downloaderIndex.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZG93bmxvYWRlckluZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zcGVjaWFsaXplZC9kb3dubG9hZGVyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBHQUFvRTtBQUVwRSxTQUFlLFVBQVUsQ0FBRSxJQUFZOzs7Ozt3QkFDcEIscUJBQU0sS0FBSyxDQUFDLHlCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7O29CQUExQyxRQUFRLEdBQUcsU0FBK0I7b0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQztvQkFDdkMscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRTt3QkFBNUIsc0JBQU8sU0FBcUI7Ozs7Q0FDN0I7QUFFRCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBcUI7QUFDaEYsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQW1CO0FBQ2pFLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFtQjtBQUM3RCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBbUI7QUFDbkUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQW1CO0FBQ3JFLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFzQjtBQUMzRSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBc0I7QUFFbkUsSUFBSSxTQUFTLEdBQUcsRUFBRTtBQUVsQixTQUFlLFdBQVc7Ozs7OztvQkFDeEIs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QUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekIsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3hCLE9BQU8sV0FBVyxFQUFFO0tBQ3JCO0FBQ0gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxjQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQzVFL0IsNkNBQTZDO0FBQ2hDLG9CQUFZLEdBQUcsVUFBQyxJQUFZLElBQWEsaURBQXdDLElBQUksV0FBUSxFQUFwRCxDQUFvRDtBQUUxRyw2QkFBNkI7QUFDaEIsbUJBQVcsR0FBRyxVQUFDLElBQVksRUFBRSxTQUFpQixJQUFhLGlEQUF3QyxJQUFJLGVBQVUsU0FBVyxFQUFqRSxDQUFpRTs7Ozs7OztVQ0p6STtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJzZXR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsTmFtZVVybCwgbW9kZWxPcmlnaW4gfSBmcm9tICcuL3NwZWNpYWxpemVkL2Rvd25sb2FkZXInXHJcblxyXG5hc3luYyBmdW5jdGlvbiB0cnlHZXRJbmZvIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobW9kZWxOYW1lVXJsKG5hbWUpKVxyXG4gIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignTm90IGZvdW5kJylcclxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpXHJcbn1cclxuXHJcbmNvbnN0IG1vZGVsTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsLW5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbmNvbnN0IHRlY2hEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjaCcpIGFzIEhUTUxEaXZFbGVtZW50XHJcbmNvbnN0IHNiRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NiJykgYXMgSFRNTERpdkVsZW1lbnRcclxuY29uc3Qgb2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91YXJlb2snKSBhcyBIVE1MRGl2RWxlbWVudFxyXG5jb25zdCB3YWl0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXRpbmZvJykgYXMgSFRNTERpdkVsZW1lbnRcclxuY29uc3QgdHJ5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyeWJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50XHJcbmNvbnN0IGdvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcclxuXHJcbmxldCBtb2RlbE5hbWUgPSAnJ1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmluaXNoaW5wdXQgKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gIHRyeUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICBjb25zdCByID0gYXdhaXQgdHJ5R2V0SW5mbyhtb2RlbE5hbWVJbnB1dC52YWx1ZSkuY2F0Y2goZSA9PiB7XHJcbiAgICBzYkRpdi5oaWRkZW4gPSBmYWxzZVxyXG4gICAgdGVjaERpdi5pbm5lclRleHQgPSBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiBlXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfSlcclxuICBpZiAodHlwZW9mIHIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBzYkRpdi5oaWRkZW4gPSB0cnVlXHJcbiAgICBva0Rpdi5oaWRkZW4gPSBmYWxzZVxyXG4gICAgbW9kZWxOYW1lSW5wdXQuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICB0cnlCdXR0b24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICBtb2RlbE5hbWUgPSByXHJcbiAgfSBlbHNlIHtcclxuICAgIHRyeUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZEZpbGUgKG9yaWdpbjogc3RyaW5nLCBleHQ6IHN0cmluZywgZGVzdDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gob3JpZ2luICsgZXh0KVxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpXHJcbiAgICAgIGF3YWl0IGZldGNoKGRlc3QgKyBleHQsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGJsb2IsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0gfSkgLy8g55SoQmxvYuWwseS4jeihjO+8jOecn+aYr+Wlh+aAquWRolxyXG4gICAgICB3YWl0RGl2LmlubmVyVGV4dCArPSBgJHtleHR95LiL6L295oiQ5YqfXFxuYFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHdhaXREaXYuaW5uZXJUZXh0ICs9IGAke2V4dH3kuIvovb3lpLHotKVcXG5gXHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdGFydERvd25sb2FkICgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBnb0J1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuICB3YWl0RGl2LmlubmVyVGV4dCA9ICcnXHJcbiAgY29uc3Qgb3JpZ2luID0gbW9kZWxPcmlnaW4obW9kZWxOYW1lSW5wdXQudmFsdWUsIG1vZGVsTmFtZSlcclxuICBjb25zdCBkZXN0ID0gYGh0dHBzOi8vaHVpZGVza3RvcC9zYW5kYm94LyR7bW9kZWxOYW1lfWBcclxuICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBkb3dubG9hZEZpbGUob3JpZ2luLCAnLnNrZWwnLCBkZXN0KSxcclxuICAgIGRvd25sb2FkRmlsZShvcmlnaW4sICcucG5nJywgZGVzdCksXHJcbiAgICBkb3dubG9hZEZpbGUob3JpZ2luLCAnLmF0bGFzJywgZGVzdCldKVxyXG4gIGF3YWl0IGZldGNoKCdodHRwczovL2h1aWRlc2t0b3Avc2FuZGJveC9tb2RlbF9jb25maWcuanNvbicsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IG1vZGVsTmFtZSB9KVxyXG4gIHdhaXREaXYuaW5uZXJUZXh0ICs9ICfkuIvovb3lrozmiJDvvIzljbPlsIboh6rliqjliLfmlrDkuLvnqpflj6MnXHJcbiAgd2luZG93Lm9wZW5lci5vbkRvd25sb2FkTW9kZWxTdWNjZXNzKClcclxuICB3aW5kb3cuY2xvc2UoKVxyXG59XHJcblxyXG50cnlCdXR0b24ub25jbGljayA9IGZpbmlzaGlucHV0XHJcbmdvQnV0dG9uLm9uY2xpY2sgPSBzdGFydERvd25sb2FkXHJcblxyXG5mZXRjaCgnL3NhbmRib3gvbW9kZWxOYW1lLnR4dCcpLnRoZW4ociA9PiB7XHJcbiAgaWYgKHIub2spIHtcclxuICAgIHJldHVybiByLnRleHQoKVxyXG4gIH0gZWxzZSByZXR1cm4gbnVsbFxyXG59KS50aGVuKHYgPT4ge1xyXG4gIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcclxuICAgIG1vZGVsTmFtZUlucHV0LnZhbHVlID0gdlxyXG4gICAgcmV0dXJuIGZpbmlzaGlucHV0KClcclxuICB9XHJcbn0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSlcclxuIiwiLy8g6I635Y+W5qih5Z6L5paH5Lu25ZCN5a2X77yIeHh4LnNrZWwsIHh4eC5wbmcsIHh4eC5hdGxhc+eahHh4eO+8iVxyXG5leHBvcnQgY29uc3QgbW9kZWxOYW1lVXJsID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiBgaHR0cHM6Ly9kZXNrdG9wLmh1aXguY2MvYXBpL2F6dXJMYW5lLyR7bmFtZX0vbW9kZWxgXHJcblxyXG4vLyDojrflj5bkuIvovb3mqKHlnovmlofku7bnmoTln7rnoYBVUkzvvIjlnKjlhbblkI7liqAuc2tlbOetie+8iVxyXG5leHBvcnQgY29uc3QgbW9kZWxPcmlnaW4gPSAobmFtZTogc3RyaW5nLCBtb2RlbE5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiBgaHR0cHM6Ly9kZXNrdG9wLmh1aXguY2MvYXBpL2F6dXJMYW5lLyR7bmFtZX0vbW9kZWwvJHttb2RlbE5hbWV9YFxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Rvd25sb2FkZXJJbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=