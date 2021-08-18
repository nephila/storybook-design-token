"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSourceType = exports.TokenPresenter = void 0;
var TokenPresenter;
(function (TokenPresenter) {
    TokenPresenter["ANIMATION"] = "Animation";
    TokenPresenter["BORDER"] = "Border";
    TokenPresenter["BORDER_RADIUS"] = "BorderRadius";
    TokenPresenter["COLOR"] = "Color";
    TokenPresenter["EASING"] = "Easing";
    TokenPresenter["FONT_FAMILY"] = "FontFamily";
    TokenPresenter["FONT_SIZE"] = "FontSize";
    TokenPresenter["FONT_WEIGHT"] = "FontWeight";
    TokenPresenter["GRADIENT"] = "Gradient";
    TokenPresenter["LINE_HEIGHT"] = "LineHeight";
    TokenPresenter["OPACITY"] = "Opacity";
    TokenPresenter["SHADOW"] = "Shadow";
    TokenPresenter["SPACING"] = "Spacing";
    TokenPresenter["SVG"] = "Svg";
})(TokenPresenter = exports.TokenPresenter || (exports.TokenPresenter = {}));
var TokenSourceType;
(function (TokenSourceType) {
    TokenSourceType["CSS"] = "CSS";
    TokenSourceType["LESS"] = "Less";
    TokenSourceType["SCSS"] = "SCSS";
    TokenSourceType["SVG"] = "SVG";
    TokenSourceType["THEO"] = "THEO";
})(TokenSourceType = exports.TokenSourceType || (exports.TokenSourceType = {}));
