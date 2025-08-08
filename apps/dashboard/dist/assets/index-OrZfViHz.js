import { importShared } from './__federation_fn_import-gVVR6EuA.js';
import { I as Icon, a as _extends, g as genStyleHooks, f as unit, h as ConfigContext, i as addMediaQueryListener, k as removeMediaQueryListener, o as omit, c as classNames, D as Divider, t as toArray, M as MenuItem$1, d as cloneElement, l as Tooltip, n as genFocusOutline, p as textEllipsis, m as merge, q as initSlideMotion, s as initZoomMotion, v as clearFix, r as resetComponent, F as FastColor, x as resetIcon, y as useFullPath, z as useZIndex, A as SubMenu$1, b as useEvent, B as useCSSVarCls, E as ExportMenu, G as RefIcon$3, H as initCollapseMotion, J as MenuItemGroup, u as useComponentConfig, K as _toConsumableArray, T as Typography, j as jsxRuntimeExports, L as ConfigProvider } from './reset-XU8QDKOm.js';
import { r as reactDomExports } from './index-D9Af7wOI.js';
import Overview, { R as RefIcon$4 } from './__federation_expose_Overview-CMndqe7_.js';
import Statistics, { R as RefIcon$1, a as RefIcon$2, b as RefIcon$5 } from './__federation_expose_Statistics-EFsrjILb.js';
import Reports, { R as RefIcon$6 } from './__federation_expose_Reports-CXTy0-OE.js';

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const genCollapseMotion = token => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: 'hidden',
      '&-active': {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: 'hidden',
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});

// This icon file is generated automatically.
var BarsOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };

const React$a = await importShared('react');
var BarsOutlined = function BarsOutlined2(props, ref) {
  return /* @__PURE__ */ React$a.createElement(Icon, _extends({}, props, {
    ref,
    icon: BarsOutlined$1
  }));
};
var RefIcon = /* @__PURE__ */ React$a.forwardRef(BarsOutlined);

const React$9 = await importShared('react');

const LayoutContext = /*#__PURE__*/React$9.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});

const genLayoutStyle = token => {
  const {
    antCls,
    // .ant
    componentCls,
    // .ant-layout
    colorText,
    footerBg,
    headerHeight,
    headerPadding,
    headerColor,
    footerPadding,
    fontSize,
    bodyBg,
    headerBg
  } = token;
  return {
    [componentCls]: {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'column',
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,
      '&, *': {
        boxSizing: 'border-box'
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: 'row',
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: '0 0 auto'
      },
      // RTL
      '&-rtl': {
        direction: 'rtl'
      }
    },
    // ==================== Header ====================
    [`${componentCls}-header`]: {
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: unit(headerHeight),
      background: headerBg,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${antCls}-menu`]: {
        lineHeight: 'inherit'
      }
    },
    // ==================== Footer ====================
    [`${componentCls}-footer`]: {
      padding: footerPadding,
      color: colorText,
      fontSize,
      background: footerBg
    },
    // =================== Content ====================
    [`${componentCls}-content`]: {
      flex: 'auto',
      color: colorText,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
};
const prepareComponentToken$1 = token => {
  const {
    colorBgLayout,
    controlHeight,
    controlHeightLG,
    colorText,
    controlHeightSM,
    marginXXS,
    colorTextLightSolid,
    colorBgContainer
  } = token;
  const paddingInline = controlHeightLG * 1.25;
  return {
    // Deprecated
    colorBgHeader: '#001529',
    colorBgBody: colorBgLayout,
    colorBgTrigger: '#002140',
    bodyBg: colorBgLayout,
    headerBg: '#001529',
    headerHeight: controlHeight * 2,
    headerPadding: `0 ${paddingInline}px`,
    headerColor: colorText,
    footerPadding: `${controlHeightSM}px ${paddingInline}px`,
    footerBg: colorBgLayout,
    siderBg: '#001529',
    triggerHeight: controlHeightLG + marginXXS * 2,
    triggerBg: '#002140',
    triggerColor: colorTextLightSolid,
    zeroTriggerWidth: controlHeightLG,
    zeroTriggerHeight: controlHeightLG,
    lightSiderBg: colorBgContainer,
    lightTriggerBg: colorBgContainer,
    lightTriggerColor: colorText
  };
};
// ============================== Export ==============================
const DEPRECATED_TOKENS = [['colorBgBody', 'bodyBg'], ['colorBgHeader', 'headerBg'], ['colorBgTrigger', 'triggerBg']];
const useStyle$2 = genStyleHooks('Layout', token => [genLayoutStyle(token)], prepareComponentToken$1, {
  deprecatedTokens: DEPRECATED_TOKENS
});

const genSiderStyle = token => {
  const {
    componentCls,
    siderBg,
    motionDurationMid,
    motionDurationSlow,
    antCls,
    triggerHeight,
    triggerColor,
    triggerBg,
    headerHeight,
    zeroTriggerWidth,
    zeroTriggerHeight,
    borderRadiusLG,
    lightSiderBg,
    lightTriggerColor,
    lightTriggerBg,
    bodyBg
  } = token;
  return {
    [componentCls]: {
      position: 'relative',
      // fix firefox can't set width smaller than content on flex item
      minWidth: 0,
      background: siderBg,
      transition: `all ${motionDurationMid}, background 0s`,
      '&-has-trigger': {
        paddingBottom: triggerHeight
      },
      '&-right': {
        order: 1
      },
      [`${componentCls}-children`]: {
        height: '100%',
        // Hack for fixing margin collapse bug
        // https://github.com/ant-design/ant-design/issues/7967
        // solution from https://stackoverflow.com/a/33132624/3040605
        marginTop: -0.1,
        paddingTop: 0.1,
        [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
          width: 'auto'
        }
      },
      [`&-zero-width ${componentCls}-children`]: {
        overflow: 'hidden'
      },
      [`${componentCls}-trigger`]: {
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        height: triggerHeight,
        color: triggerColor,
        lineHeight: unit(triggerHeight),
        textAlign: 'center',
        background: triggerBg,
        cursor: 'pointer',
        transition: `all ${motionDurationMid}`
      },
      [`${componentCls}-zero-width-trigger`]: {
        position: 'absolute',
        top: headerHeight,
        insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
        zIndex: 1,
        width: zeroTriggerWidth,
        height: zeroTriggerHeight,
        color: triggerColor,
        fontSize: token.fontSizeXL,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: siderBg,
        borderRadius: `0 ${unit(borderRadiusLG)} ${unit(borderRadiusLG)} 0`,
        cursor: 'pointer',
        transition: `background ${motionDurationSlow} ease`,
        '&::after': {
          position: 'absolute',
          inset: 0,
          background: 'transparent',
          transition: `all ${motionDurationSlow}`,
          content: '""'
        },
        '&:hover::after': {
          background: `rgba(255, 255, 255, 0.2)`
        },
        '&-right': {
          insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
          borderRadius: `${unit(borderRadiusLG)} 0 0 ${unit(borderRadiusLG)}`
        }
      },
      // Light
      '&-light': {
        background: lightSiderBg,
        [`${componentCls}-trigger`]: {
          color: lightTriggerColor,
          background: lightTriggerBg
        },
        [`${componentCls}-zero-width-trigger`]: {
          color: lightTriggerColor,
          background: lightTriggerBg,
          border: `1px solid ${bodyBg}`,
          // Safe to modify to any other color
          borderInlineStart: 0
        }
      }
    }
  };
};
const useStyle$1 = genStyleHooks(['Layout', 'Sider'], token => [genSiderStyle(token)], prepareComponentToken$1, {
  deprecatedTokens: DEPRECATED_TOKENS
});

var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const React$8 = await importShared('react');

const {useContext,useEffect,useRef: useRef$1,useState: useState$1} = await importShared('react');
const dimensionMaxMap = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
};
const isNumeric = (value) => !Number.isNaN(Number.parseFloat(value)) && isFinite(value);
const SiderContext = /* @__PURE__ */ React$8.createContext({});
const generateId = /* @__PURE__ */ (() => {
  let i = 0;
  return (prefix = "") => {
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider$1 = /* @__PURE__ */ React$8.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    trigger,
    children,
    defaultCollapsed = false,
    theme = "dark",
    style = {},
    collapsible = false,
    reverseArrow = false,
    width = 200,
    collapsedWidth = 80,
    zeroWidthTriggerStyle,
    breakpoint,
    onCollapse,
    onBreakpoint
  } = props, otherProps = __rest$3(props, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
  const {
    siderHook
  } = useContext(LayoutContext);
  const [collapsed, setCollapsed] = useState$1("collapsed" in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = useState$1(false);
  useEffect(() => {
    if ("collapsed" in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!("collapsed" in props)) {
      setCollapsed(value);
    }
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  };
  const {
    getPrefixCls,
    direction
  } = useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout-sider", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls);
  const responsiveHandlerRef = useRef$1(null);
  responsiveHandlerRef.current = (mql) => {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, "responsive");
    }
  };
  useEffect(() => {
    function responsiveHandler(mql2) {
      var _a;
      return (_a = responsiveHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(responsiveHandlerRef, mql2);
    }
    let mql;
    if (typeof (window === null || window === void 0 ? void 0 : window.matchMedia) !== "undefined" && breakpoint && breakpoint in dimensionMaxMap) {
      mql = window.matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
      addMediaQueryListener(mql, responsiveHandler);
      responsiveHandler(mql);
    }
    return () => {
      removeMediaQueryListener(mql, responsiveHandler);
    };
  }, [breakpoint]);
  useEffect(() => {
    const uniqueId = generateId("ant-sider-");
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, "clickTrigger");
  };
  const divProps = omit(otherProps, ["collapsed"]);
  const rawWidth = collapsed ? collapsedWidth : width;
  const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
  const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /* @__PURE__ */ React$8.createElement("span", {
    onClick: toggle,
    className: classNames(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? "right" : "left"}`),
    style: zeroWidthTriggerStyle
  }, trigger || /* @__PURE__ */ React$8.createElement(RefIcon, null)) : null;
  const reverseIcon = direction === "rtl" === !reverseArrow;
  const iconObj = {
    expanded: reverseIcon ? /* @__PURE__ */ React$8.createElement(RefIcon$2, null) : /* @__PURE__ */ React$8.createElement(RefIcon$1, null),
    collapsed: reverseIcon ? /* @__PURE__ */ React$8.createElement(RefIcon$1, null) : /* @__PURE__ */ React$8.createElement(RefIcon$2, null)
  };
  const status = collapsed ? "collapsed" : "expanded";
  const defaultTrigger = iconObj[status];
  const triggerDom = trigger !== null ? zeroWidthTrigger || /* @__PURE__ */ React$8.createElement("div", {
    className: `${prefixCls}-trigger`,
    onClick: toggle,
    style: {
      width: siderWidth
    }
  }, trigger || defaultTrigger) : null;
  const divStyle = Object.assign(Object.assign({}, style), {
    flex: `0 0 ${siderWidth}`,
    maxWidth: siderWidth,
    minWidth: siderWidth,
    width: siderWidth
  });
  const siderCls = classNames(prefixCls, `${prefixCls}-${theme}`, {
    [`${prefixCls}-collapsed`]: !!collapsed,
    [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
    [`${prefixCls}-below`]: !!below,
    [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
  }, className, hashId, cssVarCls);
  const contextValue = React$8.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return wrapCSSVar(/* @__PURE__ */ React$8.createElement(SiderContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ React$8.createElement("aside", Object.assign({
    className: siderCls
  }, divProps, {
    style: divStyle,
    ref
  }), /* @__PURE__ */ React$8.createElement("div", {
    className: `${prefixCls}-children`
  }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null)));
});

const {createContext} = await importShared('react');

const MenuContext = /*#__PURE__*/createContext({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});

var __rest$2 = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const React$7 = await importShared('react');
const MenuDivider = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      dashed
    } = props,
    restProps = __rest$2(props, ["prefixCls", "className", "dashed"]);
  const {
    getPrefixCls
  } = React$7.useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu', customizePrefixCls);
  const classString = classNames({
    [`${prefixCls}-item-divider-dashed`]: !!dashed
  }, className);
  return /*#__PURE__*/React$7.createElement(Divider, Object.assign({
    className: classString
  }, restProps));
};

const React$6 = await importShared('react');
const MenuItem = props => {
  var _a;
  const {
    className,
    children,
    icon,
    title,
    danger,
    extra
  } = props;
  const {
    prefixCls,
    firstLevel,
    direction,
    disableMenuItemTitleTooltip,
    inlineCollapsed: isInlineCollapsed
  } = React$6.useContext(MenuContext);
  const renderItemChildren = inlineCollapsed => {
    const label = children === null || children === void 0 ? void 0 : children[0];
    const wrapNode = /*#__PURE__*/React$6.createElement("span", {
      className: classNames(`${prefixCls}-title-content`, {
        [`${prefixCls}-title-content-with-extra`]: !!extra || extra === 0
      })
    }, children);
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    if (!icon || /*#__PURE__*/React$6.isValidElement(children) && children.type === 'span') {
      if (children && inlineCollapsed && firstLevel && typeof label === 'string') {
        return /*#__PURE__*/React$6.createElement("div", {
          className: `${prefixCls}-inline-collapsed-noicon`
        }, label.charAt(0));
      }
    }
    return wrapNode;
  };
  const {
    siderCollapsed
  } = React$6.useContext(SiderContext);
  let tooltipTitle = title;
  if (typeof title === 'undefined') {
    tooltipTitle = firstLevel ? children : '';
  } else if (title === false) {
    tooltipTitle = '';
  }
  const tooltipProps = {
    title: tooltipTitle
  };
  if (!siderCollapsed && !isInlineCollapsed) {
    tooltipProps.title = null;
    // Reset `open` to fix control mode tooltip display not correct
    // ref: https://github.com/ant-design/ant-design/issues/16742
    tooltipProps.open = false;
  }
  const childrenLength = toArray(children).length;
  let returnNode = /*#__PURE__*/React$6.createElement(MenuItem$1, Object.assign({}, omit(props, ['title', 'icon', 'danger']), {
    className: classNames({
      [`${prefixCls}-item-danger`]: danger,
      [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
    }, className),
    title: typeof title === 'string' ? title : undefined
  }), cloneElement(icon, {
    className: classNames(/*#__PURE__*/React$6.isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : undefined, `${prefixCls}-item-icon`)
  }), renderItemChildren(isInlineCollapsed));
  if (!disableMenuItemTitleTooltip) {
    returnNode = /*#__PURE__*/React$6.createElement(Tooltip, Object.assign({}, tooltipProps, {
      placement: direction === 'rtl' ? 'left' : 'right',
      classNames: {
        root: `${prefixCls}-inline-collapsed-tooltip`
      }
    }), returnNode);
  }
  return returnNode;
};

undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const React$5 = await importShared('react');
const OverrideContext = /*#__PURE__*/React$5.createContext(null);

const getHorizontalStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    horizontalLineHeight,
    colorSplit,
    lineWidth,
    lineType,
    itemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: horizontalLineHeight,
      border: 0,
      borderBottom: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
      boxShadow: 'none',
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'bottom',
        paddingInline: itemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: 'transparent'
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(',')
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: 'none'
      }
    }
  };
};

const getRTLStyle = ({
  componentCls,
  menuArrowOffset,
  calc
}) => ({
  [`${componentCls}-rtl`]: {
    direction: 'rtl'
  },
  [`${componentCls}-submenu-rtl`]: {
    transformOrigin: '100% 0'
  },
  // Vertical Arrow
  [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
    [`${componentCls}-submenu-arrow`]: {
      '&::before': {
        transform: `rotate(-45deg) translateY(${unit(calc(menuArrowOffset).mul(-1).equal())})`
      },
      '&::after': {
        transform: `rotate(45deg) translateY(${unit(menuArrowOffset)})`
      }
    }
  }
});

const accessibilityFocus = token => Object.assign({}, genFocusOutline(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    itemColor,
    itemSelectedColor,
    subMenuItemSelectedColor,
    groupTitleColor,
    itemBg,
    subMenuItemBg,
    itemSelectedBg,
    activeBarHeight,
    activeBarWidth,
    activeBarBorderWidth,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    itemPaddingInline,
    motionDurationMid,
    itemHoverColor,
    lineType,
    colorSplit,
    // Disabled
    itemDisabledColor,
    // Danger
    dangerItemColor,
    dangerItemHoverColor,
    dangerItemSelectedColor,
    dangerItemActiveBg,
    dangerItemSelectedBg,
    // Bg
    popupBg,
    itemHoverBg,
    itemActiveBg,
    menuSubMenuBg,
    // Horizontal
    horizontalItemSelectedColor,
    horizontalItemSelectedBg,
    horizontalItemBorderRadius,
    horizontalItemHoverBg
  } = token;
  return {
    [`${componentCls}-${themeSuffix}, ${componentCls}-${themeSuffix} > ${componentCls}`]: {
      color: itemColor,
      background: itemBg,
      [`&${componentCls}-root:focus-visible`]: Object.assign({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item`]: {
        '&-group-title, &-extra': {
          color: groupTitleColor
        }
      },
      [`${componentCls}-submenu-selected > ${componentCls}-submenu-title`]: {
        color: subMenuItemSelectedColor
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        color: itemColor,
        [`&:not(${componentCls}-item-disabled):focus-visible`]: Object.assign({}, accessibilityFocus(token))
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${itemDisabledColor} !important`
      },
      // Hover
      [`${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
        [`&:hover, > ${componentCls}-submenu-title:hover`]: {
          color: itemHoverColor
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          '&:hover': {
            backgroundColor: itemHoverBg
          },
          '&:active': {
            backgroundColor: itemActiveBg
          }
        },
        [`${componentCls}-submenu-title`]: {
          '&:hover': {
            backgroundColor: itemHoverBg
          },
          '&:active': {
            backgroundColor: itemActiveBg
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: dangerItemColor,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: dangerItemHoverColor
          }
        },
        [`&${componentCls}-item:active`]: {
          background: dangerItemActiveBg
        }
      },
      [`${componentCls}-item a`]: {
        '&, &:hover': {
          color: 'inherit'
        }
      },
      [`${componentCls}-item-selected`]: {
        color: itemSelectedColor,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: dangerItemSelectedColor
        },
        'a, a:hover': {
          color: 'inherit'
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: itemSelectedBg,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: dangerItemSelectedBg
        }
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      [`&${componentCls}-submenu-popup > ${componentCls}`]: {
        backgroundColor: popupBg
      },
      // ===== 设置浮层的颜色 end =======
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: Object.assign(Object.assign({}, themeSuffix === 'dark' ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: activeBarBorderWidth,
          marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
          marginBottom: 0,
          borderRadius: horizontalItemBorderRadius,
          '&::after': {
            position: 'absolute',
            insetInline: itemPaddingInline,
            bottom: 0,
            borderBottom: `${unit(activeBarHeight)} solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          '&:hover, &-active, &-open': {
            background: horizontalItemHoverBg,
            '&::after': {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          },
          '&-selected': {
            color: horizontalItemSelectedColor,
            backgroundColor: horizontalItemSelectedBg,
            '&:hover': {
              backgroundColor: horizontalItemSelectedBg
            },
            '&::after': {
              borderBottomWidth: activeBarHeight,
              borderBottomColor: horizontalItemSelectedColor
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${unit(activeBarBorderWidth)} ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: subMenuItemBg
        },
        [`${componentCls}-item`]: {
          position: 'relative',
          '&::after': {
            position: 'absolute',
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${unit(activeBarWidth)} solid ${itemSelectedColor}`,
            transform: 'scaleY(0.0001)',
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(','),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            '&::after': {
              borderInlineEndColor: dangerItemSelectedColor
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          '&::after': {
            transform: 'scaleY(1)',
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(',')
          }
        }
      }
    }
  };
};

const getVerticalInlineStyle = token => {
  const {
    componentCls,
    itemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    itemMarginBlock,
    itemWidth,
    itemPaddingInline
  } = token;
  const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
  return {
    [`${componentCls}-item`]: {
      position: 'relative',
      overflow: 'hidden'
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: unit(itemHeight),
      paddingInline: itemPaddingInline,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: itemMarginInline,
      marginBlock: itemMarginBlock,
      width: itemWidth
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: itemHeight,
      lineHeight: unit(itemHeight)
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = token => {
  const {
    componentCls,
    iconCls,
    itemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionEaseOut,
    paddingXL,
    itemMarginInline,
    fontSizeLG,
    motionDurationFast,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary,
    collapsedWidth,
    collapsedIconSize
  } = token;
  const inlineItemStyle = {
    height: itemHeight,
    lineHeight: unit(itemHeight),
    listStylePosition: 'inside',
    listStyleType: 'disc'
  };
  return [{
    [componentCls]: {
      '&-inline, &-vertical': Object.assign({
        [`&${componentCls}-root`]: {
          boxShadow: 'none'
        }
      }, getVerticalInlineStyle(token))
    },
    [`${componentCls}-submenu-popup`]: {
      [`${componentCls}-vertical`]: Object.assign(Object.assign({}, getVerticalInlineStyle(token)), {
        boxShadow: boxShadowSecondary
      })
    }
  },
  // Vertical only
  {
    [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
      minWidth: dropdownWidth,
      maxHeight: `calc(100vh - ${unit(token.calc(controlHeightLG).mul(2.5).equal())})`,
      padding: '0',
      overflow: 'hidden',
      borderInlineEnd: 0,
      // https://github.com/ant-design/ant-design/issues/22244
      // https://github.com/ant-design/ant-design/issues/26812
      "&:not([class*='-active'])": {
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    }
  },
  // Inline Only
  {
    [`${componentCls}-inline`]: {
      width: '100%',
      // Motion enhance for first level
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu-title`]: {
          display: 'flex',
          alignItems: 'center',
          transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationFast} ${motionEaseOut}`].join(','),
          [`> ${componentCls}-title-content`]: {
            flex: 'auto',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
          '> *': {
            flex: 'none'
          }
        }
      },
      // >>>>> Sub
      [`${componentCls}-sub${componentCls}-inline`]: {
        padding: 0,
        border: 0,
        borderRadius: 0,
        boxShadow: 'none',
        [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
        [`& ${componentCls}-item-group-title`]: {
          paddingInlineStart: paddingXL
        }
      },
      // >>>>> Item
      [`${componentCls}-item`]: inlineItemStyle
    }
  },
  // Inline Collapse Only
  {
    [`${componentCls}-inline-collapsed`]: {
      width: collapsedWidth,
      [`&${componentCls}-root`]: {
        [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
          [`> ${componentCls}-inline-collapsed-noicon`]: {
            fontSize: fontSizeLG,
            textAlign: 'center'
          }
        }
      },
      [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
        insetInlineStart: 0,
        paddingInline: `calc(50% - ${unit(token.calc(collapsedIconSize).div(2).equal())} - ${unit(itemMarginInline)})`,
        textOverflow: 'clip',
        [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
          opacity: 0
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          margin: 0,
          fontSize: collapsedIconSize,
          lineHeight: unit(itemHeight),
          '+ span': {
            display: 'inline-block',
            opacity: 0
          }
        }
      },
      [`${componentCls}-item-icon, ${iconCls}`]: {
        display: 'inline-block'
      },
      '&-tooltip': {
        pointerEvents: 'none',
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: 'none'
        },
        'a, a:hover': {
          color: colorTextLightSolid
        }
      },
      [`${componentCls}-item-group-title`]: Object.assign(Object.assign({}, textEllipsis), {
        paddingInline: paddingXS
      })
    }
  }];
};

const genMenuItemStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    iconSize,
    iconMarginInlineEnd
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: 'relative',
      display: 'block',
      margin: 0,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding calc(${motionDurationSlow} + 0.1s) ${motionEaseInOut}`].join(','),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: iconSize,
        fontSize: iconSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(','),
        '+ span': {
          marginInlineStart: iconMarginInlineEnd,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(',')
        }
      },
      [`${componentCls}-item-icon`]: Object.assign({}, resetIcon()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: 'none !important',
      cursor: 'not-allowed',
      '&::after': {
        borderColor: 'transparent !important'
      },
      a: {
        color: 'inherit !important',
        cursor: 'not-allowed',
        pointerEvents: 'none'
      },
      [`> ${componentCls}-submenu-title`]: {
        color: 'inherit !important',
        cursor: 'not-allowed'
      }
    }
  };
};
const genSubMenuArrowStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      '&-expand-icon, &-arrow': {
        position: 'absolute',
        top: '50%',
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: 'currentcolor',
        transform: 'translateY(-50%)',
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      '&-arrow': {
        // →
        '&::before, &::after': {
          position: 'absolute',
          width: token.calc(menuArrowSize).mul(0.6).equal(),
          height: token.calc(menuArrowSize).mul(0.15).equal(),
          backgroundColor: 'currentcolor',
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(','),
          content: '""'
        },
        '&::before': {
          transform: `rotate(45deg) translateY(${unit(token.calc(menuArrowOffset).mul(-1).equal())})`
        },
        '&::after': {
          transform: `rotate(-45deg) translateY(${unit(menuArrowOffset)})`
        }
      }
    }
  };
};
// =============================== Base ===============================
const getBaseStyle = token => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    subMenuItemBorderRadius,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    groupTitleLineHeight,
    groupTitleFontSize
  } = token;
  return [
  // Misc
  {
    '': {
      [componentCls]: Object.assign(Object.assign({}, clearFix()), {
        // Hidden
        '&-hidden': {
          display: 'none'
        }
      })
    },
    [`${componentCls}-submenu-hidden`]: {
      display: 'none'
    }
  }, {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), clearFix()), {
      marginBottom: 0,
      paddingInlineStart: 0,
      // Override default ul/ol
      fontSize,
      lineHeight: 0,
      listStyle: 'none',
      outline: 'none',
      // Magic cubic here but smooth transition
      transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
      'ul, ol': {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      // Overflow ellipsis
      '&-overflow': {
        display: 'flex',
        [`${componentCls}-item`]: {
          flex: 'none'
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
        borderRadius: token.itemBorderRadius
      },
      [`${componentCls}-item-group-title`]: {
        padding: `${unit(paddingXS)} ${unit(padding)}`,
        fontSize: groupTitleFontSize,
        lineHeight: groupTitleLineHeight,
        transition: `all ${motionDurationSlow}`
      },
      [`&-horizontal ${componentCls}-submenu`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
        transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-submenu ${componentCls}-sub`]: {
        cursor: 'initial',
        transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(',')
      },
      [`${componentCls}-title-content`]: {
        transition: `color ${motionDurationSlow}`,
        '&-with-extra': {
          display: 'inline-flex',
          alignItems: 'center',
          width: '100%'
        },
        // https://github.com/ant-design/ant-design/issues/41143
        [`> ${antCls}-typography-ellipsis-single-line`]: {
          display: 'inline',
          verticalAlign: 'unset'
        },
        [`${componentCls}-item-extra`]: {
          marginInlineStart: 'auto',
          paddingInlineStart: token.padding
        }
      },
      [`${componentCls}-item a`]: {
        '&::before': {
          position: 'absolute',
          inset: 0,
          backgroundColor: 'transparent',
          content: '""'
        }
      },
      // Removed a Badge related style seems it's safe
      // https://github.com/ant-design/ant-design/issues/19809
      // >>>>> Divider
      [`${componentCls}-item-divider`]: {
        overflow: 'hidden',
        lineHeight: 0,
        borderColor: colorSplit,
        borderStyle: lineType,
        borderWidth: 0,
        borderTopWidth: lineWidth,
        marginBlock: lineWidth,
        padding: 0,
        '&-dashed': {
          borderStyle: 'dashed'
        }
      }
    }), genMenuItemStyle(token)), {
      [`${componentCls}-item-group`]: {
        [`${componentCls}-item-group-list`]: {
          margin: 0,
          padding: 0,
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            paddingInline: `${unit(token.calc(fontSize).mul(2).equal())} ${unit(padding)}`
          }
        }
      },
      // ======================= Sub Menu =======================
      '&-submenu': {
        '&-popup': {
          position: 'absolute',
          zIndex: zIndexPopup,
          borderRadius: borderRadiusLG,
          boxShadow: 'none',
          transformOrigin: '0 0',
          [`&${componentCls}-submenu`]: {
            background: 'transparent'
          },
          // https://github.com/ant-design/ant-design/issues/13955
          '&::before': {
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            width: '100%',
            height: '100%',
            opacity: 0,
            content: '""'
          },
          [`> ${componentCls}`]: Object.assign(Object.assign(Object.assign({
            borderRadius: borderRadiusLG
          }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
              borderRadius: subMenuItemBorderRadius
            },
            [`${componentCls}-submenu-title::after`]: {
              transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
            }
          })
        },
        [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: {
          transformOrigin: '100% 0'
        },
        [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: {
          transformOrigin: '100% 100%'
        },
        [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: {
          transformOrigin: '0 100%'
        },
        [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: {
          transformOrigin: '0 0'
        },
        [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: {
          paddingInlineEnd: token.paddingXS
        },
        [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: {
          paddingInlineStart: token.paddingXS
        },
        [`
          &-placement-topRight,
          &-placement-topLeft
          `]: {
          paddingBottom: token.paddingXS
        },
        [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: {
          paddingTop: token.paddingXS
        }
      }
    }), genSubMenuArrowStyle(token)), {
      [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
        // ↓
        '&::before': {
          transform: `rotate(-45deg) translateX(${unit(menuArrowOffset)})`
        },
        '&::after': {
          transform: `rotate(45deg) translateX(${unit(token.calc(menuArrowOffset).mul(-1).equal())})`
        }
      },
      [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
        // ↑
        transform: `translateY(${unit(token.calc(menuArrowSize).mul(0.2).mul(-1).equal())})`,
        '&::after': {
          transform: `rotate(-45deg) translateX(${unit(token.calc(menuArrowOffset).mul(-1).equal())})`
        },
        '&::before': {
          transform: `rotate(45deg) translateX(${unit(menuArrowOffset)})`
        }
      }
    })
  },
  // Integration with header element so menu items have the same height
  {
    [`${antCls}-layout-header`]: {
      [componentCls]: {
        lineHeight: 'inherit'
      }
    }
  }];
};
const prepareComponentToken = token => {
  var _a, _b, _c;
  const {
    colorPrimary,
    colorError,
    colorTextDisabled,
    colorErrorBg,
    colorText,
    colorTextDescription,
    colorBgContainer,
    colorFillAlter,
    colorFillContent,
    lineWidth,
    lineWidthBold,
    controlItemBgActive,
    colorBgTextHover,
    controlHeightLG,
    lineHeight,
    colorBgElevated,
    marginXXS,
    padding,
    fontSize,
    controlHeightSM,
    fontSizeLG,
    colorTextLightSolid,
    colorErrorHover
  } = token;
  const activeBarWidth = (_a = token.activeBarWidth) !== null && _a !== void 0 ? _a : 0;
  const activeBarBorderWidth = (_b = token.activeBarBorderWidth) !== null && _b !== void 0 ? _b : lineWidth;
  const itemMarginInline = (_c = token.itemMarginInline) !== null && _c !== void 0 ? _c : token.marginXXS;
  const colorTextDark = new FastColor(colorTextLightSolid).setA(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: token.zIndexPopupBase + 50,
    radiusItem: token.borderRadiusLG,
    itemBorderRadius: token.borderRadiusLG,
    radiusSubMenuItem: token.borderRadiusSM,
    subMenuItemBorderRadius: token.borderRadiusSM,
    colorItemText: colorText,
    itemColor: colorText,
    colorItemTextHover: colorText,
    itemHoverColor: colorText,
    colorItemTextHoverHorizontal: colorPrimary,
    horizontalItemHoverColor: colorPrimary,
    colorGroupTitle: colorTextDescription,
    groupTitleColor: colorTextDescription,
    colorItemTextSelected: colorPrimary,
    itemSelectedColor: colorPrimary,
    subMenuItemSelectedColor: colorPrimary,
    colorItemTextSelectedHorizontal: colorPrimary,
    horizontalItemSelectedColor: colorPrimary,
    colorItemBg: colorBgContainer,
    itemBg: colorBgContainer,
    colorItemBgHover: colorBgTextHover,
    itemHoverBg: colorBgTextHover,
    colorItemBgActive: colorFillContent,
    itemActiveBg: controlItemBgActive,
    colorSubItemBg: colorFillAlter,
    subMenuItemBg: colorFillAlter,
    colorItemBgSelected: controlItemBgActive,
    itemSelectedBg: controlItemBgActive,
    colorItemBgSelectedHorizontal: 'transparent',
    horizontalItemSelectedBg: 'transparent',
    colorActiveBarWidth: 0,
    activeBarWidth,
    colorActiveBarHeight: lineWidthBold,
    activeBarHeight: lineWidthBold,
    colorActiveBarBorderSize: lineWidth,
    activeBarBorderWidth,
    // Disabled
    colorItemTextDisabled: colorTextDisabled,
    itemDisabledColor: colorTextDisabled,
    // Danger
    colorDangerItemText: colorError,
    dangerItemColor: colorError,
    colorDangerItemTextHover: colorError,
    dangerItemHoverColor: colorError,
    colorDangerItemTextSelected: colorError,
    dangerItemSelectedColor: colorError,
    colorDangerItemBgActive: colorErrorBg,
    dangerItemActiveBg: colorErrorBg,
    colorDangerItemBgSelected: colorErrorBg,
    dangerItemSelectedBg: colorErrorBg,
    itemMarginInline,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: 'transparent',
    itemHeight: controlHeightLG,
    groupTitleLineHeight: lineHeight,
    collapsedWidth: controlHeightLG * 2,
    popupBg: colorBgElevated,
    itemMarginBlock: marginXXS,
    itemPaddingInline: padding,
    horizontalLineHeight: `${controlHeightLG * 1.15}px`,
    iconSize: fontSize,
    iconMarginInlineEnd: controlHeightSM - fontSize,
    collapsedIconSize: fontSizeLG,
    groupTitleFontSize: fontSize,
    // Disabled
    darkItemDisabledColor: new FastColor(colorTextLightSolid).setA(0.25).toRgbString(),
    // Dark
    darkItemColor: colorTextDark,
    darkDangerItemColor: colorError,
    darkItemBg: '#001529',
    darkPopupBg: '#001529',
    darkSubMenuItemBg: '#000c17',
    darkItemSelectedColor: colorTextLightSolid,
    darkItemSelectedBg: colorPrimary,
    darkDangerItemSelectedBg: colorError,
    darkItemHoverBg: 'transparent',
    darkGroupTitleColor: colorTextDark,
    darkItemHoverColor: colorTextLightSolid,
    darkDangerItemHoverColor: colorErrorHover,
    darkDangerItemSelectedColor: colorTextLightSolid,
    darkDangerItemActiveBg: colorError,
    // internal
    itemWidth: activeBarWidth ? `calc(100% + ${activeBarBorderWidth}px)` : `calc(100% - ${itemMarginInline * 2}px)`
  };
};
// ============================== Export ==============================
const useStyle = (prefixCls, rootCls = prefixCls, injectStyle = true) => {
  const useStyle = genStyleHooks('Menu', token => {
    const {
      colorBgElevated,
      controlHeightLG,
      fontSize,
      darkItemColor,
      darkDangerItemColor,
      darkItemBg,
      darkSubMenuItemBg,
      darkItemSelectedColor,
      darkItemSelectedBg,
      darkDangerItemSelectedBg,
      darkItemHoverBg,
      darkGroupTitleColor,
      darkItemHoverColor,
      darkItemDisabledColor,
      darkDangerItemHoverColor,
      darkDangerItemSelectedColor,
      darkDangerItemActiveBg,
      popupBg,
      darkPopupBg
    } = token;
    const menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
    // Menu Token
    const menuToken = merge(token, {
      menuArrowSize,
      menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
      menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
      menuSubMenuBg: colorBgElevated,
      calc: token.calc,
      popupBg
    });
    const menuDarkToken = merge(menuToken, {
      itemColor: darkItemColor,
      itemHoverColor: darkItemHoverColor,
      groupTitleColor: darkGroupTitleColor,
      itemSelectedColor: darkItemSelectedColor,
      subMenuItemSelectedColor: darkItemSelectedColor,
      itemBg: darkItemBg,
      popupBg: darkPopupBg,
      subMenuItemBg: darkSubMenuItemBg,
      itemActiveBg: 'transparent',
      itemSelectedBg: darkItemSelectedBg,
      activeBarHeight: 0,
      activeBarBorderWidth: 0,
      itemHoverBg: darkItemHoverBg,
      // Disabled
      itemDisabledColor: darkItemDisabledColor,
      // Danger
      dangerItemColor: darkDangerItemColor,
      dangerItemHoverColor: darkDangerItemHoverColor,
      dangerItemSelectedColor: darkDangerItemSelectedColor,
      dangerItemActiveBg: darkDangerItemActiveBg,
      dangerItemSelectedBg: darkDangerItemSelectedBg,
      menuSubMenuBg: darkSubMenuItemBg,
      // Horizontal
      horizontalItemSelectedColor: darkItemSelectedColor,
      horizontalItemSelectedBg: darkItemSelectedBg
    });
    return [
    // Basic
    getBaseStyle(menuToken),
    // Horizontal
    getHorizontalStyle(menuToken),
    // Hard code for some light style
    // Vertical
    getVerticalStyle(menuToken),
    // Hard code for some light style
    // Theme
    getThemeStyle(menuToken, 'light'), getThemeStyle(menuDarkToken, 'dark'),
    // RTL
    getRTLStyle(menuToken),
    // Motion
    genCollapseMotion(menuToken), initSlideMotion(menuToken, 'slide-up'), initSlideMotion(menuToken, 'slide-down'), initZoomMotion(menuToken, 'zoom-big')];
  }, prepareComponentToken, {
    deprecatedTokens: [['colorGroupTitle', 'groupTitleColor'], ['radiusItem', 'itemBorderRadius'], ['radiusSubMenuItem', 'subMenuItemBorderRadius'], ['colorItemText', 'itemColor'], ['colorItemTextHover', 'itemHoverColor'], ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'], ['colorItemTextSelected', 'itemSelectedColor'], ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'], ['colorItemTextDisabled', 'itemDisabledColor'], ['colorDangerItemText', 'dangerItemColor'], ['colorDangerItemTextHover', 'dangerItemHoverColor'], ['colorDangerItemTextSelected', 'dangerItemSelectedColor'], ['colorDangerItemBgActive', 'dangerItemActiveBg'], ['colorDangerItemBgSelected', 'dangerItemSelectedBg'], ['colorItemBg', 'itemBg'], ['colorItemBgHover', 'itemHoverBg'], ['colorSubItemBg', 'subMenuItemBg'], ['colorItemBgActive', 'itemActiveBg'], ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'], ['colorActiveBarWidth', 'activeBarWidth'], ['colorActiveBarHeight', 'activeBarHeight'], ['colorActiveBarBorderSize', 'activeBarBorderWidth'], ['colorItemBgSelected', 'itemSelectedBg']],
    // Dropdown will handle menu style self. We do not need to handle this.
    injectStyle,
    unitless: {
      groupTitleLineHeight: true
    }
  });
  return useStyle(prefixCls, rootCls);
};

const React$4 = await importShared('react');
const SubMenu = props => {
  var _a;
  const {
    popupClassName,
    icon,
    title,
    theme: customTheme
  } = props;
  const context = React$4.useContext(MenuContext);
  const {
    prefixCls,
    inlineCollapsed,
    theme: contextTheme
  } = context;
  const parentPath = useFullPath();
  let titleNode;
  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? (/*#__PURE__*/React$4.createElement("div", {
      className: `${prefixCls}-inline-collapsed-noicon`
    }, title.charAt(0))) : (/*#__PURE__*/React$4.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    const titleIsSpan = /*#__PURE__*/React$4.isValidElement(title) && title.type === 'span';
    titleNode = /*#__PURE__*/React$4.createElement(React$4.Fragment, null, cloneElement(icon, {
      className: classNames(/*#__PURE__*/React$4.isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : undefined, `${prefixCls}-item-icon`)
    }), titleIsSpan ? title : /*#__PURE__*/React$4.createElement("span", {
      className: `${prefixCls}-title-content`
    }, title));
  }
  const contextValue = React$4.useMemo(() => Object.assign(Object.assign({}, context), {
    firstLevel: false
  }), [context]);
  // ============================ zIndex ============================
  const [zIndex] = useZIndex('Menu');
  return /*#__PURE__*/React$4.createElement(MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React$4.createElement(SubMenu$1, Object.assign({}, omit(props, ['icon']), {
    title: titleNode,
    popupClassName: classNames(prefixCls, popupClassName, `${prefixCls}-${customTheme || contextTheme}`),
    popupStyle: Object.assign({
      zIndex
    }, props.popupStyle)
  })));
};

var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const React$3 = await importShared('react');

const {forwardRef: forwardRef$1} = await importShared('react');
function isEmptyIcon(icon) {
  return icon === null || icon === false;
}
const MENU_COMPONENTS = {
  item: MenuItem,
  submenu: SubMenu,
  divider: MenuDivider
};
const InternalMenu = /* @__PURE__ */ forwardRef$1((props, ref) => {
  var _a;
  const override = React$3.useContext(OverrideContext);
  const overrideObj = override || {};
  const {
    getPrefixCls,
    getPopupContainer,
    direction,
    menu
  } = React$3.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    theme = "light",
    expandIcon,
    _internalDisableMenuItemTitleTooltip,
    inlineCollapsed,
    siderCollapsed,
    rootClassName,
    mode,
    selectable,
    onClick,
    overflowedIndicatorPopupClassName
  } = props, restProps = __rest$1(props, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]);
  const passedProps = omit(restProps, ["collapsedWidth"]);
  (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
    mode
  });
  const onItemClick = useEvent((...args) => {
    var _a2;
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, args);
    (_a2 = overrideObj.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(overrideObj);
  });
  const mergedMode = overrideObj.mode || mode;
  const mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
  const mergedInlineCollapsed = inlineCollapsed !== null && inlineCollapsed !== void 0 ? inlineCollapsed : siderCollapsed;
  const defaultMotions = {
    horizontal: {
      motionName: `${rootPrefixCls}-slide-up`
    },
    inline: initCollapseMotion(rootPrefixCls),
    other: {
      motionName: `${rootPrefixCls}-zoom-big`
    }
  };
  const prefixCls = getPrefixCls("menu", customizePrefixCls || overrideObj.prefixCls);
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls, !override);
  const menuClassName = classNames(`${prefixCls}-${theme}`, menu === null || menu === void 0 ? void 0 : menu.className, className);
  const mergedExpandIcon = React$3.useMemo(() => {
    var _a2, _b;
    if (typeof expandIcon === "function" || isEmptyIcon(expandIcon)) {
      return expandIcon || null;
    }
    if (typeof overrideObj.expandIcon === "function" || isEmptyIcon(overrideObj.expandIcon)) {
      return overrideObj.expandIcon || null;
    }
    if (typeof (menu === null || menu === void 0 ? void 0 : menu.expandIcon) === "function" || isEmptyIcon(menu === null || menu === void 0 ? void 0 : menu.expandIcon)) {
      return (menu === null || menu === void 0 ? void 0 : menu.expandIcon) || null;
    }
    const mergedIcon = (_a2 = expandIcon !== null && expandIcon !== void 0 ? expandIcon : overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon) !== null && _a2 !== void 0 ? _a2 : menu === null || menu === void 0 ? void 0 : menu.expandIcon;
    return cloneElement(mergedIcon, {
      className: classNames(`${prefixCls}-submenu-expand-icon`, /* @__PURE__ */ React$3.isValidElement(mergedIcon) ? (_b = mergedIcon.props) === null || _b === void 0 ? void 0 : _b.className : void 0)
    });
  }, [expandIcon, overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon, menu === null || menu === void 0 ? void 0 : menu.expandIcon, prefixCls]);
  const contextValue = React$3.useMemo(() => ({
    prefixCls,
    inlineCollapsed: mergedInlineCollapsed || false,
    direction,
    firstLevel: true,
    theme,
    mode: mergedMode,
    disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
  }), [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
  return wrapCSSVar(/* @__PURE__ */ React$3.createElement(OverrideContext.Provider, {
    value: null
  }, /* @__PURE__ */ React$3.createElement(MenuContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ React$3.createElement(ExportMenu, Object.assign({
    getPopupContainer,
    overflowedIndicator: /* @__PURE__ */ React$3.createElement(RefIcon$3, null),
    overflowedIndicatorPopupClassName: classNames(prefixCls, `${prefixCls}-${theme}`, overflowedIndicatorPopupClassName),
    mode: mergedMode,
    selectable: mergedSelectable,
    onClick: onItemClick
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    style: Object.assign(Object.assign({}, menu === null || menu === void 0 ? void 0 : menu.style), style),
    className: menuClassName,
    prefixCls,
    direction,
    defaultMotions,
    expandIcon: mergedExpandIcon,
    ref,
    rootClassName: classNames(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls),
    _internalComponents: MENU_COMPONENTS
  })))));
});

const React$2 = await importShared('react');

const {forwardRef,useImperativeHandle,useRef} = await importShared('react');
const Menu = /* @__PURE__ */ forwardRef((props, ref) => {
  const menuRef = useRef(null);
  const context = React$2.useContext(SiderContext);
  useImperativeHandle(ref, () => ({
    menu: menuRef.current,
    focus: (options) => {
      var _a;
      (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
    }
  }));
  return /* @__PURE__ */ React$2.createElement(InternalMenu, Object.assign({
    ref: menuRef
  }, props, context));
});
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.Divider = MenuDivider;
Menu.ItemGroup = MenuItemGroup;

function useHasSider(siders, children, hasSider) {
  if (typeof hasSider === 'boolean') {
    return hasSider;
  }
  if (siders.length) {
    return true;
  }
  const childNodes = toArray(children);
  return childNodes.some(node => node.type === Sider$1);
}

var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const React$1 = await importShared('react');
function generator({
  suffixCls,
  tagName,
  displayName
}) {
  return (BasicComponent) => {
    const Adapter = /* @__PURE__ */ React$1.forwardRef((props, ref) => /* @__PURE__ */ React$1.createElement(BasicComponent, Object.assign({
      ref,
      suffixCls,
      tagName
    }, props)));
    return Adapter;
  };
}
const Basic = /* @__PURE__ */ React$1.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    suffixCls,
    className,
    tagName: TagName
  } = props, others = __rest(props, ["prefixCls", "suffixCls", "className", "tagName"]);
  const {
    getPrefixCls
  } = React$1.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const [wrapSSR, hashId, cssVarCls] = useStyle$2(prefixCls);
  const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  return wrapSSR(/* @__PURE__ */ React$1.createElement(TagName, Object.assign({
    className: classNames(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
    ref
  }, others)));
});
const BasicLayout = /* @__PURE__ */ React$1.forwardRef((props, ref) => {
  const {
    direction
  } = React$1.useContext(ConfigContext);
  const [siders, setSiders] = React$1.useState([]);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    hasSider,
    tagName: Tag,
    style
  } = props, others = __rest(props, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]);
  const passedProps = omit(others, ["suffixCls"]);
  const {
    getPrefixCls,
    className: contextClassName,
    style: contextStyle
  } = useComponentConfig("layout");
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const mergedHasSider = useHasSider(siders, children, hasSider);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls);
  const classString = classNames(prefixCls, {
    [`${prefixCls}-has-sider`]: mergedHasSider,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, contextClassName, className, rootClassName, hashId, cssVarCls);
  const contextValue = React$1.useMemo(() => ({
    siderHook: {
      addSider: (id) => {
        setSiders((prev) => [].concat(_toConsumableArray(prev), [id]));
      },
      removeSider: (id) => {
        setSiders((prev) => prev.filter((currentId) => currentId !== id));
      }
    }
  }), []);
  return wrapCSSVar(/* @__PURE__ */ React$1.createElement(LayoutContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ React$1.createElement(Tag, Object.assign({
    ref,
    className: classString,
    style: Object.assign(Object.assign({}, contextStyle), style)
  }, passedProps), children)));
});
const Layout$1 = generator({
  tagName: "div",
  displayName: "Layout"
})(BasicLayout);
const Header = generator({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(Basic);
const Footer = generator({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(Basic);
const Content$1 = generator({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(Basic);

const Layout = Layout$1;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content$1;
Layout.Sider = Sider$1;
Layout._InternalSiderContext = SiderContext;

const {useState} = await importShared('react');
const { Content, Sider } = Layout;
const { Title } = Typography;
const App = () => {
  const [currentPage, setCurrentPage] = useState("overview");
  const menuItems = [
    {
      key: "overview",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$4, {}),
      label: "Overview"
    },
    {
      key: "statistics",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$5, {}),
      label: "Statistics"
    },
    {
      key: "reports",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$6, {}),
      label: "Reports"
    }
  ];
  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Overview, {});
      case "statistics":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Statistics, {});
      case "reports":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reports, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Overview, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConfigProvider,
    {
      theme: {
        token: {
          colorPrimary: "#667eea"
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { style: { minHeight: "100vh" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Sider, { width: 250, style: { background: "#fff" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { level: 4, children: "Dashboard App (Standalone)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Menu,
            {
              mode: "inline",
              selectedKeys: [currentPage],
              items: menuItems,
              onClick: ({ key }) => setCurrentPage(key)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { style: { background: "#f0f2f5" }, children: renderPage() }) })
      ] })
    }
  );
};

const React = await importShared('react');
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );
}
