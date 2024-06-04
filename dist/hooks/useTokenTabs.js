"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenTabs = void 0;
var react_1 = require("react");
var react_storage_hooks_1 = require("react-storage-hooks");
var postcss_parser_1 = require("../parsers/postcss.parser");
var svg_icon_parser_1 = require("../parsers/svg-icon.parser");
var token_types_1 = require("../types/token.types");
function useTokenTabs(config) {
    var _a = react_1.useState([]), cssCategories = _a[0], setCssCategories = _a[1];
    var _b = react_1.useState([]), lessCategories = _b[0], setLessCategories = _b[1];
    var _c = react_1.useState([]), scssCategories = _c[0], setScssCategories = _c[1];
    var _d = react_1.useState([]), svgIconCategories = _d[0], setSvgIconCategories = _d[1];
    var _e = react_1.useState(), activeCategory = _e[0], setActiveCategory = _e[1];
    var _f = react_storage_hooks_1.useStorageState(localStorage, 'storybook-design-token-addon-card', false), cardView = _f[0], setCardView = _f[1];
    var _g = react_1.useState(''), styleInjections = _g[0], setStyleInjections = _g[1];
    var tabs = react_1.useMemo(function () {
        var categories = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], cssCategories), lessCategories), scssCategories), svgIconCategories).filter(function (category) { return category !== undefined && (category === null || category === void 0 ? void 0 : category.tokens.length) > 0; });
        var categoryNames = Array.from(new Set(categories.map(function (category) { return category === null || category === void 0 ? void 0 : category.name; })));
        return categoryNames.map(function (name) { return ({
            label: name,
            categories: categories.filter(function (category) { return (category === null || category === void 0 ? void 0 : category.name) === name; })
        }); });
    }, [cssCategories, lessCategories, scssCategories, svgIconCategories]);
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        var cssFiles = (_a = config === null || config === void 0 ? void 0 : config.files) === null || _a === void 0 ? void 0 : _a.filter(function (file) {
            return file.filename.endsWith('.css');
        });
        var lessFiles = (_b = config === null || config === void 0 ? void 0 : config.files) === null || _b === void 0 ? void 0 : _b.filter(function (file) {
            return file.filename.endsWith('.less');
        });
        var scssFiles = (_c = config === null || config === void 0 ? void 0 : config.files) === null || _c === void 0 ? void 0 : _c.filter(function (file) {
            return file.filename.endsWith('.scss');
        });
        var svgFiles = (_d = config === null || config === void 0 ? void 0 : config.files) === null || _d === void 0 ? void 0 : _d.filter(function (file) {
            return file.filename.endsWith('.svg');
        });
        setStyleInjections((config === null || config === void 0 ? void 0 : config.styleInjection) || '');
        postcss_parser_1.parseCssFiles(cssFiles, token_types_1.TokenSourceType.CSS, true).then(function (_a) {
            var categories = _a.categories, injectionStyles = _a.injectionStyles;
            setCssCategories(categories);
            if (!(config === null || config === void 0 ? void 0 : config.defaultTab) && categories.length > 0) {
                setActiveCategory(function (activeCategory) { return activeCategory || categories[0].name; });
            }
            setStyleInjections(function (current) { return current + injectionStyles; });
        });
        postcss_parser_1.parseCssFiles(scssFiles, token_types_1.TokenSourceType.SCSS).then(function (_a) {
            var categories = _a.categories, injectionStyles = _a.injectionStyles;
            setScssCategories(categories);
            if (!(config === null || config === void 0 ? void 0 : config.defaultTab) && categories.length > 0) {
                setActiveCategory(function (activeCategory) { return activeCategory || categories[0].name; });
            }
            setStyleInjections(function (current) { return current + injectionStyles; });
        });
        postcss_parser_1.parseCssFiles(lessFiles, token_types_1.TokenSourceType.LESS).then(function (_a) {
            var categories = _a.categories, injectionStyles = _a.injectionStyles;
            setLessCategories(categories);
            if (!(config === null || config === void 0 ? void 0 : config.defaultTab) && categories.length > 0) {
                setActiveCategory(function (activeCategory) { return activeCategory || categories[0].name; });
            }
            setStyleInjections(function (current) { return current + injectionStyles; });
        });
        svg_icon_parser_1.parseSvgFiles(svgFiles).then(function (categories) {
            setSvgIconCategories(categories);
        });
    }, [config]);
    react_1.useEffect(function () {
        if ((config === null || config === void 0 ? void 0 : config.defaultTab) && !activeCategory) {
            setActiveCategory(config.defaultTab);
        }
    }, [activeCategory, config]);
    return {
        activeCategory: activeCategory,
        cardView: cardView,
        setActiveCategory: setActiveCategory,
        setCardView: setCardView,
        styleInjections: styleInjections,
        tabs: tabs
    };
}
exports.useTokenTabs = useTokenTabs;
