"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor"); // TODO DO NOT REMOVE THIS, YOU NEED IN THIS IN EVERY SPEC!
/**
 * Provides helper methods which allow for testing common test cases.
 * @see Page Object in Selenium
 * @type BetterProtractorService - If you add a new method here, please add the method signature in index.d.ts!
 */
var BetterProtractorService = /** @class */ (function () {
    function BetterProtractorService(isDisabled) {
        if (isDisabled === void 0) { isDisabled = false; }
        if (isDisabled) {
            this.disableAngular();
        }
    }
    /**
     * Navigate to a route.
     * @returns {wdpromise.Promise<any>}
     * @param path {string}
     */
    BetterProtractorService.prototype.navigateToRoute = function (path) {
        if (path === void 0) { path = '/'; }
        return protractor_1.browser.get(path);
    };
    ;
    /**
     * Get an element by its DOM id
     * @returns {ElementFinder}
     * @param elementId {string}
     */
    BetterProtractorService.prototype.getDomElementById = function (elementId) {
        return protractor_1.element(protractor_1.by.id(elementId));
    };
    ;
    /**
     * Get an element by its DOM tag
     * @returns {ElementFinder}
     * @param elementTag {string}
     */
    BetterProtractorService.prototype.getDomElementByTag = function (elementTag) {
        return protractor_1.element(protractor_1.by.tagName(elementTag));
    };
    ;
    /**
     * Get an element by its XPath
     * @returns {ElementFinder}
     * @param xpath {string}
     */
    BetterProtractorService.prototype.getDomElementByXPath = function (xpath) {
        return protractor_1.element(protractor_1.by.xpath(xpath));
    };
    ;
    /**
     * Get an element by CSS query
     * @returns {ElementFinder}
     * @param selector {string}
     */
    BetterProtractorService.prototype.getDomElementByCss = function (selector) {
        return protractor_1.element(protractor_1.by.css(selector));
    };
    ;
    /**
     * Get an element
     * @returns {WebElementPromise}
     * @param element
     */
    BetterProtractorService.prototype.getElementAsWebElement = function (element) {
        return element.getWebElement();
    };
    ;
    /**
     * @param selector {string}
     * @param index {number}
     * @return {ElementFinder}
     */
    BetterProtractorService.prototype.getDomElementByIndex = function (selector, index) {
        return protractor_1.protractor.element.all(protractor_1.by.css(selector)).get(index);
    };
    ;
    /**
     * @param css {string} the CSS selector
     * @param text {string}
     */
    BetterProtractorService.prototype.getDomElementByText = function (css, text) {
        return protractor_1.element(protractor_1.by.cssContainingText(css, text));
    };
    ;
    /**
     * Fill a <input> or <textarea> with content
     * @param selector {string}
     * @param input
     */
    BetterProtractorService.prototype.fillInput = function (selector, input) {
        return this.getDomElementByCss(selector).sendKeys(input);
    };
    ;
    /**
     * Submit the form containing the element
     * @param element {WebElement}
     */
    BetterProtractorService.prototype.submitForm = function (element) {
        return element.submit();
    };
    ;
    /**
     * Click a element
     * @returns {Promise}
     * @param element
     */
    BetterProtractorService.prototype.clickElement = function (element) {
        return element.click();
    };
    ;
    /**
     * Click a element by CSS
     * @returns {Promise}
     * @param css {string}
     */
    BetterProtractorService.prototype.clickElementByCss = function (css) {
        return this.clickElement(protractor_1.element(protractor_1.by.css(css)));
    };
    ;
    /**
     * Click a element by ID
     * @returns {Promise}
     * @param elementId {string}
     */
    BetterProtractorService.prototype.clickElementById = function (elementId) {
        return this.clickElement(protractor_1.element(protractor_1.by.id(elementId)));
    };
    ;
    /**
     * Click a element with an tag
     * @returns {Promise}
     * @param elementTag {string}
     */
    BetterProtractorService.prototype.clickElementByTag = function (elementTag) {
        return this.clickElement(protractor_1.element(protractor_1.by.tagName(elementTag)));
    };
    ;
    /**
     * Click a element by XPath
     * @returns {Promise}
     * @param xpath {string}
     */
    BetterProtractorService.prototype.clickElementByXPath = function (xpath) {
        return this.clickElement(protractor_1.element(protractor_1.by.xpath(xpath)));
    };
    ;
    /**
     * Click element by link text
     * @param text {string}
     * @returns {Promise}
     */
    BetterProtractorService.prototype.clickElementByLinkText = function (text) {
        return this.clickElement(protractor_1.element(protractor_1.by.linkText(text)));
    };
    ;
    /**
     * Click a web element. Try this if clickElement() is not working
     * @param element {WebElement}
     */
    BetterProtractorService.prototype.clickWebElement = function (element) {
        return protractor_1.browser.actions().mouseMove(element).click().perform();
    };
    ;
    /**
     * Press key on keyboard (e.g. TAB or ENTER)
     * @param key {string}
     */
    BetterProtractorService.prototype.pressKey = function (key) {
        return protractor_1.browser.actions().sendKeys(key).perform();
    };
    ;
    /**
     * Press a mouse button
     * @param action {string}
     */
    BetterProtractorService.prototype.pressMouseButton = function (action) {
        return protractor_1.browser.actions().click(action).perform();
    };
    ;
    /**
     * Don't let Protractor close the browser after execution
     * @return {*}
     */
    BetterProtractorService.prototype.pauseBrowser = function () {
        return protractor_1.browser.pause();
    };
    ;
    /**
     * Don't let Protractor close the browser after execution for a specific time. You can use this as an alternative in case pauseBrowser() does not work.
     * @param time {number} in milliseconds
     */
    BetterProtractorService.prototype.pauseBrowserTemporarily = function (time) {
        return protractor_1.browser.sleep(time);
    };
    ;
    /**
     * Wait for Angular to be initialized
     * @return {void|promise.Promise<any>}
     */
    BetterProtractorService.prototype.waitForBrowser = function () {
        return protractor_1.browser.waitForAngular();
    };
    ;
    /**
     * Get the current browser URL
     * @returns {promise.Promise<string>}
     * @param useDriver {boolean}
     */
    BetterProtractorService.prototype.getUrl = function (useDriver) {
        if (useDriver === void 0) { useDriver = false; }
        var usedBrowser = useDriver ? protractor_1.browser.driver : protractor_1.browser;
        return usedBrowser.getCurrentUrl()
            .then(function (url) {
            return url;
        });
    };
    ;
    /**
     * Check if a element is visible and if it can be selected
     * @param element
     * @return {wdpromise.Promise<boolean> | webdriver.promise.Promise.<boolean>}
     */
    BetterProtractorService.prototype.checkIfExists = function (element) {
        return element.isPresent();
    };
    ;
    /**
     * Check if a element is visible
     * @param element
     * @return {wdpromise.Promise<boolean> | webdriver.promise.Promise.<boolean>}
     */
    BetterProtractorService.prototype.checkIfVisible = function (element) {
        return element.isDisplayed();
    };
    ;
    /**
     * Get an attribute from a DOM element (e.g. class)
     * @param element
     * @param attribute {string} e.g. 'value' (to get input value) or 'class'
     */
    BetterProtractorService.prototype.getAttributeFromDomElement = function (element, attribute) {
        return element.getAttribute(attribute);
    };
    ;
    /**
     * @param contains {string | Array}
     * @param url {string} if not passed, then current url will be used
     * @return {boolean}
     */
    BetterProtractorService.prototype.checkIfRouteContains = function (contains, url) {
        if (url === void 0) { url = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!url) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getUrl()];
                    case 1:
                        url = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (Array.isArray(contains)) {
                            // TODO check if this works
                            return [2 /*return*/, (contains.indexOf(url) !== -1)];
                        }
                        else {
                            return [2 /*return*/, typeof url === 'string' ? (url.indexOf(contains) !== -1) : false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * Clear an input
     * @param selector {string}
     */
    BetterProtractorService.prototype.clearInput = function (selector) {
        return this.getDomElementByCss(selector).clear();
    };
    ;
    /**
     * Use this method to set the browser window to a specific size.
     * If this method crashes the browser, then you need to update with "webdriver-manager update".
     * @param mobileWidth {number}
     * @param mobileHeight {number}
     */
    BetterProtractorService.prototype.showMobileView = function (mobileWidth, mobileHeight) {
        if (mobileWidth === void 0) { mobileWidth = 360; }
        if (mobileHeight === void 0) { mobileHeight = 640; }
        return protractor_1.browser.driver.manage().window().setSize(mobileWidth, mobileHeight);
    };
    ;
    /**
     * Get height and width of browser window
     * @return {promise.Promise<ISize>}
     */
    BetterProtractorService.prototype.getWindowSize = function () {
        return protractor_1.browser.driver.manage().window().getSize().then(function (size) {
            return size;
        });
    };
    ;
    /**
     * Use this method to maximize the browser window.
     * If this method crashes the browser, then you need to update with "webdriver-manager update".
     * @return {promise.Promise<void>}
     */
    BetterProtractorService.prototype.maximizeWindow = function () {
        return protractor_1.browser.driver.manage().window().maximize();
    };
    ;
    /**
     * Get browser cookies
     * @returns {promise.Promise<IWebDriverOptionsCookie>}
     */
    BetterProtractorService.prototype.getCookies = function () {
        return protractor_1.browser.manage().getCookies().then(function (cookies) {
            return cookies;
        });
    };
    ;
    /**
     * Get a style property of an element (e.g. 'color')
     * @param element
     * @param property {string}
     */
    BetterProtractorService.prototype.getStyleValue = function (element, property) {
        return element.getCssValue(property);
    };
    ;
    /**
     * Get currently used language
     * @return {!promise.Promise<string>|promise.Promise<string>}
     */
    BetterProtractorService.prototype.getLanguage = function () {
        return protractor_1.browser.executeScript('return window.navigator.language;');
    };
    ;
    /**
     * Scroll to a DOM element
     * @param selector
     * @returns {promise.Promise<void>}
     */
    BetterProtractorService.prototype.scrollToElement = function (selector) {
        return protractor_1.browser.executeScript('document.querySelector(' + selector + ').scrollIntoView()');
    };
    ;
    /**
     * Disable Angular (for non-Angular pages or if you encounter problems with Angular lifecycle)
     * @return {promise.Promise<boolean>}
     */
    BetterProtractorService.prototype.disableAngular = function () {
        return protractor_1.browser.waitForAngularEnabled(false);
    };
    ;
    return BetterProtractorService;
}());
exports.BetterProtractorService = BetterProtractorService;
//# sourceMappingURL=index.js.map