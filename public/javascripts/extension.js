//var BABYLON;
(function (BABYLON) {
    //var GUI;
    (function (GUI) {
        var MenuStyle = /** @class */ (function () {
            function MenuStyle(options) {
                this.fontSize = 18;
                this.fontStyle = "";
                this.textColor = "Black";
                this.thickness = 1;
                this.height = "40px";
                this.width = "100%";
                this.cornerRadius = 0;
                this.paddingTop = "2px";
                this.paddingRight = "2px";
                this.paddingBottom = "2px";
                this.paddingLeft = "2px";
                this.textPaddingTop = "0px";
                this.textPaddingRight = "0px";
                this.textPaddingBottom = "0px";
                this.textPaddingLeft = "10px";
                this.textHAlign = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                this.textVAlign = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                this.textWrapping = false;
                this.update(options);
            }
            MenuStyle.prototype.clone = function () {
                var style = new MenuStyle();
                style.copyFrom(this);
                return style;
            };
            MenuStyle.prototype.copyFrom = function (style) {
                this.text = style.text;
                this.fontSize = style.fontSize;
                this.fontFamily = style.fontFamily;
                this.textColor = style.textColor;
                this.color = style.color;
                this.thickness = style.thickness;
                this.background = style.background;
                this.height = style.height;
                this.width = style.width;
                this.cornerRadius = style.cornerRadius;
                this.paddingTop = style.paddingTop;
                this.paddingRight = style.paddingRight;
                this.paddingBottom = style.paddingBottom;
                this.paddingLeft = style.paddingLeft;
                this.textPaddingTop = style.textPaddingTop;
                this.textPaddingRight = style.textPaddingRight;
                this.textPaddingBottom = style.textPaddingBottom;
                this.textPaddingLeft = style.textPaddingLeft;
                this.textHAlign = style.textHAlign;
                this.textVAlign = style.textVAlign;
                this.textWrapping = style.textWrapping;
                this.shadowBlur = style.shadowBlur;
                this.shadowOffsetX = style.shadowOffsetX;
                this.shadowOffsetY = style.shadowOffsetY;
                this.shadowColor = style.shadowColor;
            };
            MenuStyle.prototype.update = function (options) {
                if (options) {
                    if (options.text) {
                        this.text = options.text;
                    }
                    if (options.textHAlign) {
                        this.textHAlign = options.textHAlign;
                        if (this.textHAlign !== BABYLON.GUI.Container.HORIZONTAL_ALIGNMENT_LEFT) {
                            this.textPaddingLeft = "0px";
                        }
                        if (this.textHAlign === BABYLON.GUI.Container.HORIZONTAL_ALIGNMENT_RIGHT) {
                            this.textPaddingRight = "10px";
                        }
                    }
                    options.fontFamily ? this.fontFamily = options.fontFamily : null;
                    options.fontSize ? this.fontSize = options.fontSize : null;
                    options.fontStyle ? this.fontStyle = options.fontStyle : null;
                    if (options.borderColor) {
                        this.color = options.borderColor;
                    }
                    if (options.textColor) {
                        this.textColor = options.textColor;
                    }
                    if (options.backgroundColor) {
                        this.background = options.backgroundColor;
                    }
                    if (options.height != null && options.height != undefined) {
                        this.height = options.height;
                    }
                    if (options.width != null && options.width != undefined) {
                        this.width = options.width;
                    }
                    if (options.cornerRadius != null && options.cornerRadius != undefined) {
                        this.cornerRadius = options.cornerRadius;
                    }
                    if (options.padding != null && options.padding != undefined) {
                        this.paddingTop = options.padding;
                        this.paddingRight = options.padding;
                        this.paddingBottom = options.padding;
                        this.paddingLeft = options.padding;
                    }
                    if (options.paddingTop != null && options.paddingTop != undefined) {
                        this.paddingTop = options.paddingTop;
                    }
                    if (options.paddingRight != null && options.paddingRight != undefined) {
                        this.paddingRight = options.paddingRight;
                    }
                    if (options.paddingBottom != null && options.paddingBottom != undefined) {
                        this.paddingBottom = options.paddingBottom;
                    }
                    if (options.paddingLeft != null && options.paddingLeft != undefined) {
                        this.paddingLeft = options.paddingLeft;
                    }
                    if (options.textPadding != null && options.textPadding != undefined) {
                        this.textPaddingTop = options.textPadding;
                        this.textPaddingRight = options.textPadding;
                        this.textPaddingBottom = options.textPadding;
                        this.textPaddingLeft = options.textPadding;
                    }
                    if (options.textPaddingTop != null && options.textPaddingTop != undefined) {
                        this.textPaddingTop = options.textPaddingTop;
                    }
                    if (options.textPaddingRight != null && options.textPaddingRight != undefined) {
                        this.textPaddingRight = options.textPaddingRight;
                    }
                    if (options.textPaddingBottom != null && options.textPaddingBottom != undefined) {
                        this.textPaddingBottom = options.textPaddingBottom;
                    }
                    if (options.textPaddingLeft != null && options.textPaddingLeft != undefined) {
                        this.textPaddingLeft = options.textPaddingLeft;
                    }
                    if (options.borderThickness !== undefined && options.borderThickness !== null) {
                        this.thickness = options.borderThickness;
                    }
                    if (options.textWrapping !== undefined && options.textWrapping !== null) {
                        this.textWrapping = options.textWrapping;
                    }
                    if (options.shadowBlur !== undefined && options.textWrapping !== null) {
                        this.shadowBlur = options.shadowBlur;
                    }
                    if (options.shadowOffsetX !== undefined && options.shadowOffsetX !== null) {
                        this.shadowOffsetX = options.shadowOffsetX;
                    }
                    if (options.shadowOffsetY !== undefined && options.shadowOffsetY !== null) {
                        this.shadowOffsetY = options.shadowOffsetY;
                    }
                    if (options.shadowColor !== undefined && options.shadowColor !== null) {
                        this.shadowColor = options.shadowColor;
                    }
                }
            };
            MenuStyle.prototype.isEqualTo = function (other) {
                return (this.text == other.text &&
                    this.fontStyle == other.fontStyle &&
                    this.fontFamily == other.fontFamily &&
                    this.color == other.color &&
                    this.thickness == other.thickness &&
                    this.background == other.background &&
                    this.height == other.width &&
                    this.width == other.width &&
                    this.cornerRadius == other.cornerRadius &&
                    this.paddingTop == other.paddingTop &&
                    this.paddingRight == other.paddingRight &&
                    this.paddingBottom == other.paddingBottom &&
                    this.paddingLeft == other.paddingLeft &&
                    this.textPaddingTop == other.textPaddingTop &&
                    this.textPaddingRight == other.textPaddingRight &&
                    this.textPaddingBottom == other.textPaddingBottom &&
                    this.textPaddingLeft == other.textPaddingLeft &&
                    this.textHAlign == other.textHAlign &&
                    this.textVAlign == other.textVAlign &&
                    this.shadowBlur == other.shadowBlur &&
                    this.shadowOffsetX == other.shadowOffsetX &&
                    this.shadowOffsetY == other.shadowOffsetY &&
                    this.shadowColor == other.shadowColor &&
                    this.textWrapping == other.textWrapping);
            };
            return MenuStyle;
        }());
        var Menu = /** @class */ (function (_super) {
            __extends(Menu, _super);
            function Menu(name, style) {
                var _this = _super.call(this, name) || this;
                _this.panels = [];
                _this._isVertical = true;
                _this._buttonsMap = {};
                _this._buttons = [];
                _this._buttonsSubmenu = [];
                _this._buttonStyles = [];
                _this._headerControls = [];
                _this._navForwardControls = [];
                _this._navBackControls = [];
                _this._headerHidden = false;
                _this._getNextMenuFunc = function (panelToShow, panelToHide) {
                    return function () {
                        _this.currentPanel = panelToShow;
                        _this.showPanel(panelToShow);
                        _this.hidePanel(panelToHide);
                    };
                };
                _this._itemStyle = new MenuStyle(style);
                _this._headerStyle = new MenuStyle(style);
                _this._headerStyle.update({
                    textHAlign: GUI.Control.HORIZONTAL_ALIGNMENT_CENTER
                });
                _this._forwardButtonStyle = new MenuStyle(style);
                _this._forwardButtonStyle.update({
                    text: ">",
                    padding: "10px",
                    //paddingRight:"10px", 
                    // borderThickness: 0
                    width: "40px"
                });
                _this._backButtonStyle = new MenuStyle(style);
                _this._backButtonStyle.update({
                    text: "<",
                    padding: "2px",
                    //paddingLeft:"10px", 
                    //borderThickness: 0,
                    width: "40px"
                });
                _this.thickness = 0;
                _this.showPanel = function (panel) {
                    _this.addControl(panel);
                };
                _this.hidePanel = function (menu) {
                    _this.removeControl(menu);
                };
                return _this;
            }
            Object.defineProperty(Menu.prototype, "itemPointerUpAnimation", {
                get: function () {
                    return this._itemPointerUpAnimation;
                },
                set: function (value) {
                    this._itemPointerUpAnimation = value;
                    var buttons = this._buttons;
                    for (var i = 0; i < buttons.length; i++) {
                        var button = buttons[i];
                        button.pointerUpAnimation = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Menu.prototype, "itemPointerDownAnimation", {
                get: function () {
                    return this._itemPointerDownAnimation;
                },
                set: function (value) {
                    this._itemPointerDownAnimation = value;
                    var buttons = this._buttons;
                    for (var i = 0; i < buttons.length; i++) {
                        var button = buttons[i];
                        button.pointerDownAnimation = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Menu.prototype, "itemPointerEnterAnimation", {
                get: function () {
                    return this._itemPointerEnterAnimation;
                },
                set: function (value) {
                    this._itemPointerEnterAnimation = value;
                    var buttons = this._buttons;
                    for (var i = 0; i < buttons.length; i++) {
                        var button = buttons[i];
                        button.pointerEnterAnimation = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Menu.prototype, "itemPointerOutAnimation", {
                get: function () {
                    return this._itemPointerOutAnimation;
                },
                set: function (value) {
                    this._itemPointerOutAnimation = value;
                    var buttons = this._buttons;
                    for (var i = 0; i < buttons.length; i++) {
                        var button = buttons[i];
                        button.pointerOutAnimation = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Menu.prototype, "isVertical", {
                get: function () {
                    return this._isVertical;
                },
                set: function (value) {
                    this._isVertical = value;
                    if (this.panels && this.panels.length > 0) {
                        this.panels[0].isVertical = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Menu.prototype._hideHeader = function (header) {
                header.children[0].isVisible = false;
                header.children[0].height = "0px";
                if (header.children.length == 1) {
                    header.height = "0px";
                }
                if (header.parent) {
                    header.parent._markAllAsDirty();
                }
            };
            Menu.prototype._showHeader = function (header) {
                header.children[0].isVisible = true;
                this._styleHeader(header);
                if (header.parent) {
                    header.parent._markAllAsDirty();
                }
            };
            Menu.prototype.hideHeader = function () {
                this._headerHidden = true;
                for (var i = 0; i < this._headerControls.length; i++) {
                    this._hideHeader(this._headerControls[i]);
                }
            };
            Menu.prototype.showHeader = function () {
                this._headerHidden = false;
                for (var i = 0; i < this._headerControls.length; i++) {
                    this._showHeader(this._headerControls[i]);
                }
            };
            Menu.prototype.show = function () {
                if (this._host) {
                    this._host.addControl(this);
                }
            };
            Menu.prototype.hide = function () {
                if (this._host) {
                    this._host.removeControl(this);
                }
            };
            Menu.prototype._getItemStyle = function (item) {
                var index = this._buttons.indexOf(item);
                return this._buttonStyles[index];
            };
            Menu.prototype._selectItem = function (eventData, eventState) {
                var button = eventState.target;
                if (button == this._selectedItem) {
                    return;
                }
                var itemStyle = this._getItemStyle(button);
                var selectedStyle = this._itemSelectedStyle;
                if (itemStyle.isEqualTo(selectedStyle)) {
                    return;
                }
                if (this._selectedItem) {
                    var defaultStyle = this._getItemStyle(this._selectedItem);
                    this._styleItem(this._selectedItem, defaultStyle);
                }
                //don't select submenu button
                if (this._buttonsSubmenu.indexOf(button) != -1) {
                    this._selectedItem = null;
                    return;
                }
                this._styleItem(button, selectedStyle);
                this._selectedItem = button;
            };
            Menu.prototype._pointerEnterItem = function (control, eventState) {
                if (control == this._selectedItem) {
                    return;
                }
                var itemStyle = this._getItemStyle(control);
                var hoverStyle = this._itemHoveredStyle;
                if (itemStyle.isEqualTo(hoverStyle)) {
                    return;
                }
                this._styleItem(control, hoverStyle);
            };
            Menu.prototype._pointerOutItem = function (control, eventState) {
                if (control == this._selectedItem) {
                    return;
                }
                var itemStyle = this._getItemStyle(control);
                var hoverStyle = this._itemHoveredStyle;
                if (itemStyle.isEqualTo(hoverStyle)) {
                    return;
                }
                this._styleItem(control, itemStyle);
            };
            Menu.prototype._createItem = function (itemData) {
                var button = new GUI.Button(itemData.id);
                var textBlock = new GUI.TextBlock(name + "_text", itemData.text);
                button.addControl(textBlock);
                this._styleItem(button);
                this._itemPointerDownAnimation ? button.pointerDownAnimation = this._itemPointerDownAnimation : null;
                this._itemPointerUpAnimation ? button.pointerUpAnimation = this._itemPointerUpAnimation : null;
                this._itemPointerEnterAnimation ? button.pointerEnterAnimation = this._itemPointerEnterAnimation : null;
                this._itemPointerOutAnimation ? button.pointerOutAnimation = this._itemPointerOutAnimation : null;
                if (this._itemHoveredStyle) {
                    button.onPointerOutObservable.add(this._pointerOutItem, -1, false, this);
                    button.onPointerEnterObservable.add(this._pointerEnterItem, -1, false, this);
                }
                if (this._itemSelectedStyle) {
                    button.onPointerUpObservable.add(this._selectItem, -1, false, this);
                }
                if (itemData.subMenu) {
                    var forwardStyle = this._forwardButtonStyle;
                    var forward = new GUI.TextBlock(name + "_expand", forwardStyle.text);
                    this._styleForwardControl(forward);
                    button.addControl(forward);
                    this._navForwardControls.push(forward);
                    //this._buttonsSubmenu[name] = button;
                    this._buttonsSubmenu.push(button);
                }
                if (itemData.style) {
                    var style = this._itemStyle.clone();
                    style.update(itemData.style);
                    this._buttonStyles.push(style);
                    this._styleItem(button, style);
                }
                else {
                    this._buttonStyles.push(this._itemStyle);
                }
                this._buttons.push(button);
                this._buttonsMap[itemData.id] = button;
                return button;
            };
            Menu.prototype._styleItem = function (control, style) {
                var itemStyle = style ? style : this._itemStyle;
                var button = control;
                var textBlock = button.children[0];
                textBlock.textWrapping = true;
                textBlock.textHorizontalAlignment = itemStyle.textHAlign;
                textBlock.textVerticalAlignment = itemStyle.textVAlign;
                textBlock.paddingLeft = itemStyle.textPaddingLeft;
                textBlock.paddingRight = itemStyle.textPaddingRight;
                textBlock.color = itemStyle.textColor;
                button.height = itemStyle.height;
                button.thickness = itemStyle.thickness;
                button.cornerRadius = itemStyle.cornerRadius;
                button.fontSize = itemStyle.fontSize;
                button.fontStyle = itemStyle.fontStyle;
                button.background = itemStyle.background;
                itemStyle.width ? button.width = itemStyle.width : null;
                itemStyle.height ? button.height = itemStyle.height : null;
                itemStyle.fontFamily ? button.fontFamily = itemStyle.fontFamily : null;
                itemStyle.color ? button.color = itemStyle.color : null;
                itemStyle.paddingTop ? button.paddingTop = itemStyle.paddingTop : null;
                itemStyle.paddingRight ? button.paddingRight = itemStyle.paddingRight : null;
                itemStyle.paddingBottom ? button.paddingBottom = itemStyle.paddingBottom : null;
                itemStyle.paddingLeft ? button.paddingLeft = itemStyle.paddingLeft : null;
            };
            Menu.prototype._styleHeader = function (control, style) {
                var headerStyle = style ? style : this._headerStyle;
                var header = control;
                var headerRect = header.children[0];
                headerRect.cornerRadius = headerStyle.cornerRadius;
                headerRect.thickness = headerStyle.thickness;
                headerRect.paddingTop = headerStyle.paddingTop;
                headerRect.paddingRight = headerStyle.paddingRight;
                headerRect.paddingBottom = headerStyle.paddingBottom;
                headerRect.paddingLeft = headerStyle.paddingLeft;
                headerStyle.height ? headerRect.height = headerStyle.height : null;
                headerStyle.height ? header.height = headerStyle.height : null;
                headerStyle.width ? header.width = headerStyle.width : null;
                headerStyle.color ? headerRect.color = headerStyle.color : null;
                headerStyle.background ? headerRect.background = headerStyle.background : null;
                if (headerStyle.shadowBlur != undefined && headerStyle.shadowBlur != null) {
                    headerRect.shadowBlur = headerStyle.shadowBlur;
                }
                if (headerStyle.shadowOffsetX != undefined && headerStyle.shadowOffsetX != null) {
                    headerRect.shadowOffsetX = headerStyle.shadowOffsetX;
                }
                if (headerStyle.shadowOffsetY != undefined && headerStyle.shadowOffsetY != null) {
                    headerRect.shadowOffsetY = headerStyle.shadowOffsetY;
                }
                if (headerStyle.shadowColor != undefined && headerStyle.shadowColor != null) {
                    headerRect.shadowColor = headerStyle.shadowColor;
                }
                var textBlock = headerRect.children[0];
                headerStyle.fontFamily ? textBlock.fontFamily = headerStyle.fontFamily : null;
                headerStyle.color ? textBlock.color = headerStyle.color : null;
                textBlock.fontSize = headerStyle.fontSize;
                textBlock.fontStyle = headerStyle.fontStyle;
                textBlock.color = headerStyle.textColor;
                textBlock.textWrapping = true;
                textBlock.textHorizontalAlignment = headerStyle.textHAlign;
                textBlock.textVerticalAlignment = headerStyle.textVAlign;
                textBlock.paddingTop = headerStyle.textPaddingTop;
                textBlock.paddingRight = headerStyle.textPaddingRight;
                textBlock.paddingBottom = headerStyle.textPaddingBottom;
                textBlock.paddingLeft = headerStyle.textPaddingLeft;
            };
            Menu.prototype._styleBackControl = function (control, style) {
                var headerStyle = style ? style : this._headerStyle;
                var buttonStyle = this._backButtonStyle;
                var backButton = control;
                headerStyle.color ? backButton.color = headerStyle.color : null;
                backButton.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                backButton.thickness = buttonStyle.thickness;
                backButton.width = buttonStyle.width;
                backButton.height = buttonStyle.height;
                backButton.paddingTop = buttonStyle.paddingTop;
                backButton.paddingRight = buttonStyle.paddingRight;
                backButton.paddingBottom = buttonStyle.paddingBottom;
                backButton.paddingLeft = buttonStyle.paddingLeft;
                //backButton.height = buttonHeight;
                //backButton.width = buttonHeight;
                //backButton.width = backProps.width;
                //backButton.thickness = 0;
                buttonStyle.fontFamily ? backButton.fontFamily = buttonStyle.fontFamily : null;
                var backButtonText = backButton.children[0];
                backButtonText.fontSize = buttonStyle.fontSize;
                backButtonText.fontStyle = buttonStyle.fontStyle;
                //backButtonText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
                //backButtonText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER; 
                backButtonText.color = headerStyle.textColor;
                backButtonText.paddingTop = buttonStyle.paddingTop;
                backButtonText.paddingRight = buttonStyle.paddingRight;
                backButtonText.paddingBottom = buttonStyle.paddingBottom;
                backButtonText.paddingLeft = buttonStyle.paddingLeft;
            };
            Menu.prototype._styleForwardControl = function (control, style) {
                var forwardStyle = style ? style : this._forwardButtonStyle;
                var forward = control;
                forward.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                forward.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                forward.paddingRight = forwardStyle.paddingRight;
                forward.color = forwardStyle.textColor;
                forward.fontSize = forwardStyle.fontSize;
                forward.fontStyle = forwardStyle.fontStyle;
                forward.paddingTop = forwardStyle.paddingTop;
                forward.paddingRight = forwardStyle.paddingRight;
                forward.paddingBottom = forwardStyle.paddingBottom;
                forward.paddingLeft = forwardStyle.paddingLeft;
                forwardStyle.fontFamily ? forward.fontFamily = forwardStyle.fontFamily : null;
            };
            Menu.prototype._createMenu = function (menuData, parentMenu) {
                var items = menuData.items;
                var header = new GUI.Container();
                this._headerControls.push(header);
                var headerRect = new GUI.Rectangle('headerRect');
                headerRect.isPointerBlocker = true;
                header.addControl(headerRect);
                var textBlock = new GUI.TextBlock("menuheader", menuData.title);
                headerRect.addControl(textBlock);
                var panel = new GUI.StackPanel(menuData.id);
                panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
                if (this.panels.length == 0) {
                    panel.isVertical = this._isVertical;
                }
                this._styleHeader(header);
                panel.addControl(header);
                var that = this;
                panel.onPointerUpObservable.add(function (eventData, eventState) {
                    that.onPointerUpObservable.notifyObservers(eventData, -1, eventState.target, eventState.currentTarget);
                });
                if (parentMenu) {
                    var backButton = GUI.Button.CreateSimpleButton("backbutton", this._backButtonStyle.text);
                    backButton.onPointerUpObservable.add(this._getNextMenuFunc(parentMenu, panel), -1, false, this);
                    header.addControl(backButton);
                    this._navBackControls.push(backButton);
                    this._styleBackControl(backButton);
                }
                if (items) {
                    var itemData;
                    for (var i = 0; i < items.length; i++) {
                        itemData = items[i];
                        var button = this._createItem(itemData);
                        panel.addControl(button);
                        if (itemData.subMenu) {
                            var submenu = this._createMenu(itemData.subMenu, panel);
                            button.onPointerUpObservable.add(this._getNextMenuFunc(submenu, panel), -1, false, this);
                        }
                    }
                }
                if (this._headerHidden) {
                    this._hideHeader(header);
                }
                this.addControl(panel);
                this.panels.unshift(panel);
                this.hidePanel(panel);
                that.currentPanel = panel;
                return panel;
            };
            Menu.prototype.getChildByName = function (name) {
                for (var _i = 0, _a = this.panels; _i < _a.length; _i++) {
                    var panel = _a[_i];
                    var child = panel.getChildByName(name);
                    if (child) {
                        return child;
                    }
                }
                return null;
            };
            Menu.prototype.getButtonByID = function (id) {
                return this._buttonsMap[id];
            };
            Menu.prototype.hideItem = function (itemID) {
                var button = this._buttonsMap[itemID];
                if (button) {
                    button.isVisible = false;
                    button.width = "0px";
                    button.height = "0px";
                }
            };
            Menu.prototype.showItem = function (itemID) {
                var button = this._buttonsMap[itemID];
                if (button) {
                    button.isVisible = true;
                    this._styleItem(button);
                }
            };
            Menu.prototype.setItemStyle = function (style) {
                this._itemStyle.update(style);
                var buttons = this._buttons;
                for (var i = 0; i < buttons.length; i++) {
                    var button = buttons[i];
                    this._styleItem(button);
                }
            };
            Menu.prototype.setHeaderStyle = function (style) {
                this._headerStyle.update(style);
                var headers = this._headerControls;
                for (var i = 0; i < headers.length; i++) {
                    this._styleHeader(headers[i]);
                }
            };
            Menu.prototype.setNavBackStyle = function (style) {
                this._backButtonStyle.update(style);
                var controls = this._navBackControls;
                for (var i = 0; i < controls.length; i++) {
                    this._styleBackControl(controls[i]);
                }
            };
            Menu.prototype.setNavForwardStyle = function (style) {
                this._forwardButtonStyle.update(style);
                var controls = this._navForwardControls;
                for (var i = 0; i < controls.length; i++) {
                    this._styleForwardControl(controls[i]);
                }
            };
            Menu.prototype.setItemSelectedStyle = function (style) {
                if (!this._itemSelectedStyle) {
                    this._itemSelectedStyle = this._itemStyle.clone();
                }
                this._itemSelectedStyle.update(style);
                var buttons = this._buttons;
                for (var i = 0; i < buttons.length; i++) {
                    var button = buttons[i];
                    button.onPointerUpObservable.removeCallback(this._selectItem);
                    button.onPointerUpObservable.add(this._selectItem, -1, false, this);
                }
            };
            Menu.prototype.setItemHoveredStyle = function (style) {
                if (!this._itemHoveredStyle) {
                    this._itemHoveredStyle = this._itemStyle.clone();
                }
                this._itemHoveredStyle.update(style);
                var buttons = this._buttons;
                for (var i = 0; i < buttons.length; i++) {
                    var button = buttons[i];
                    button.onPointerOutObservable.removeCallback(this._pointerOutItem);
                    button.onPointerEnterObservable.removeCallback(this._pointerEnterItem);
                    button.onPointerOutObservable.add(this._pointerOutItem, -1, false, this);
                    button.onPointerEnterObservable.add(this._pointerEnterItem, -1, false, this);
                }
            };
            Menu.prototype.loadMenuData = function (menuData) {
                this._createMenu(menuData);
                if (this.panels.length > 0) {
                    this.showPanel(this.panels[0]);
                }
            };
            Menu.prototype._getCurrentPanel = function () {
                var panels = this.panels;
                if (panels.length == 0) {
                    var panel = new GUI.StackPanel();
                    panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
                    panel.isVertical = this._isVertical;
                    this.panels.unshift(panel);
                    this.showPanel(panel);
                    this.currentPanel = panel;
                }
                return this.currentPanel;
            };
            Menu.prototype.addControlToMenu = function (control, subMenuID) {
                var addToPanel = null;
                var panels = this.panels;
                if (subMenuID) {
                    for (var _i = 0, panels_1 = panels; _i < panels_1.length; _i++) {
                        var panel = panels_1[_i];
                        if (panel.name == subMenuID) {
                            addToPanel = panel;
                        }
                    }
                }
                else {
                    addToPanel = this._getCurrentPanel();
                }
                if (addToPanel) {
                    addToPanel.addControl(control);
                }
            };
            Menu.prototype.addItem = function (itemData, subMenuID) {
                var addToPanel = null;
                var panels = this.panels;
                if (subMenuID) {
                    for (var _i = 0, panels_2 = panels; _i < panels_2.length; _i++) {
                        var panel = panels_2[_i];
                        if (panel.name == subMenuID) {
                            addToPanel = panel;
                        }
                    }
                }
                else {
                    addToPanel = this._getCurrentPanel();
                }
                if (addToPanel) {
                    var button = this._createItem(itemData);
                    addToPanel.addControl(button);
                    if (itemData.subMenu) {
                        var submenu = this._createMenu(itemData.subMenu, addToPanel);
                        button.onPointerUpObservable.add(this._getNextMenuFunc(submenu, addToPanel), -1, false, this);
                    }
                }
            };
            Menu.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this._buttons.length = 0;
                this._buttonsSubmenu.length = 0;
                this._buttonStyles.length = 0;
                this._headerControls.length = 0;
                this._navForwardControls.length = 0;
                this._navBackControls.length = 0;
                for (var key in this._buttonsMap) {
                    this._buttonsMap[key] = null;
                }
            };
            return Menu;
        }(GUI.Rectangle));
        GUI.Menu = Menu;
    })(GUI = BABYLON.GUI || (BABYLON.GUI = {}));
})(BABYLON || (BABYLON = {}));