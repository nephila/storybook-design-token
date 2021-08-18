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
exports.Panel = void 0;
var react_1 = __importStar(require("react"));
var api_1 = require("@storybook/api");
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var useTokenTabs_1 = require("../hooks/useTokenTabs");
var TokenCards_1 = require("./TokenCards");
var TokenTable_1 = require("./TokenTable");
var Panel = function () {
    var config = api_1.useParameter('designToken');
    var _a = useTokenTabs_1.useTokenTabs(config), activeCategory = _a.activeCategory, cardView = _a.cardView, setActiveCategory = _a.setActiveCategory, setCardView = _a.setCardView, styleInjections = _a.styleInjections, tabs = _a.tabs;
    var TokenContainer = react_1.useMemo(function () {
        return theming_1.styled.div(function () { return ({
            padding: 15
        }); });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, styleInjections),
        react_1.default.createElement(components_1.ScrollArea, { vertical: true, horizontal: true },
            react_1.default.createElement(components_1.Tabs, { actions: { onSelect: function (id) { return setActiveCategory(id); } }, selected: activeCategory }, tabs.map(function (tab) { return (react_1.default.createElement("div", { key: tab.label, id: tab.label, title: tab.label },
                react_1.default.createElement(TokenContainer, null,
                    cardView && react_1.default.createElement(TokenCards_1.TokenCards, { categories: tab.categories }),
                    !cardView && react_1.default.createElement(TokenTable_1.TokenTable, { categories: tab.categories })))); }))),
        react_1.default.createElement(components_1.ActionBar, { key: "actionbar", actionItems: [
                {
                    onClick: function () {
                        setCardView(!cardView);
                    },
                    title: cardView ? 'Table View' : 'Card View'
                }
            ] })));
};
exports.Panel = Panel;
