"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignTokenDocBlock = void 0;
var react_1 = __importStar(require("react"));
var blocks_1 = require("@storybook/addon-docs/blocks");
var theming_1 = require("@storybook/theming");
var useTokenTabs_1 = require("../hooks/useTokenTabs");
var TokenCards_1 = require("./TokenCards");
var TokenTable_1 = require("./TokenTable");
var DesignTokenDocBlock = function (_a) {
    var categoryName = _a.categoryName, _b = _a.viewType, viewType = _b === void 0 ? 'table' : _b, _c = _a.showValueColumn, showValueColumn = _c === void 0 ? true : _c;
    var context = react_1.useContext(blocks_1.DocsContext);
    var tabs = useTokenTabs_1.useTokenTabs(context.parameters.designToken).tabs;
    var tab = react_1.useMemo(function () { return tabs.find(function (t) { return t.label === categoryName; }); }, [
        categoryName,
        tabs
    ]);
    var Container = theming_1.styled.div(function () { return ({
        margin: '25px 0 40px',
        '*': {
            boxSizing: 'border-box'
        }
    }); });
    var Card = react_1.useMemo(function () {
        return theming_1.styled.div(function () { return ({
            boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 1px, rgb(0 0 0 / 7%) 0px 0px 0px 1px',
            borderRadius: 4,
            padding: 20
        }); });
    }, []);
    if (!tab) {
        return null;
    }
    return (react_1.default.createElement(Container, { className: "design-token-container" },
        viewType === 'table' && (react_1.default.createElement(Card, { className: "design-token-card" },
            react_1.default.createElement(TokenTable_1.TokenTable, { categories: tab.categories, readonly: true, showValueColumn: showValueColumn }))),
        viewType === 'card' && (react_1.default.createElement(TokenCards_1.TokenCards, { categories: tab.categories, readonly: true, showValueColumn: showValueColumn }))));
};
exports.DesignTokenDocBlock = DesignTokenDocBlock;
