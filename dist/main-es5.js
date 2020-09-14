function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-my-loader></app-my-loader>\r\n<app-footer></app-footer>\r\n<app-scrolltotop></app-scrolltotop>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBasicelementsBasicelementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section section-basic\">\r\n    <div class=\"container\">\r\n      <h3 class=\"title\">Basic Elements</h3>\r\n      <div id=\"buttons\">\r\n          <h4>Buttons</h4>\r\n          <p class=\"category\">Pick your style</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your size</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\r\n                  <button class=\"btn btn-primary\">Regular</button>\r\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your color</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn\">Default</button>\r\n                  <button class=\"btn btn-primary\">Primary</button>\r\n                  <button class=\"btn btn-info\">Info</button>\r\n                  <button class=\"btn btn-success\">Success</button>\r\n                  <button class=\"btn btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-danger\">Danger</button>\r\n                  <button class=\"btn btn-neutral\">Neutral</button>\r\n              </div>\r\n          </div>\r\n          <h4>Links</h4>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                  <button class=\"btn btn-link\">Default</button>\r\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\r\n                  <button class=\"btn btn-link btn-info\">Info</button>\r\n                  <button class=\"btn btn-link btn-success\">Success</button>\r\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div id=\"inputs\">\r\n          <h4>Inputs</h4>\r\n          <p class=\"category\">Form Controls</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-success\">\r\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-danger\">\r\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                          <i class=\"fa fa-user-circle\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">\r\n                            <i class=\"now-ui-icons users_single-02\"></i>\r\n                        </span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\" id=\"checkRadios\">\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Checkboxes</p>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Checked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Checked\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Radios</p>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is on\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is on\r\n                </label>\r\n            </div>\r\n        </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Toggle Buttons</p>\r\n              <bSwitch\r\n                  [(ngModel)]=\"state\">\r\n              </bSwitch>\r\n              <bSwitch> Toggle is off\r\n              </bSwitch>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Sliders</p>\r\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\r\n              <br>\r\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsComponentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\r\n\r\n    </div>\r\n      <div class=\"container\">\r\n          <div class=\"content-center brand\">\r\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\r\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\r\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\r\n          </div>\r\n          <h6 class=\"category category-absolute\">Designed by\r\n              <a href=\"https://invisionapp.com/\" target=\"_blank\">\r\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\r\n              </a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\r\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\r\n              </a>.</h6>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"main\">\r\n    <div class=\"section section-images\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"hero-images-container\">\r\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-1\">\r\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-2\">\r\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      <app-basicelements></app-basicelements>\r\n      <app-navigation></app-navigation>\r\n      <div class=\"section section-tabs\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Icons on Card</p>\r\n                      <!-- Nav tabs -->\r\n\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Background on Card</p>\r\n                      <!-- Tabs with Background on Card -->\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\r\n                                    <ngb-tab title=\"Home\">\r\n                                      <ng-template ngbTabContent>\r\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Profile\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Messages\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Settings\">\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- End Tabs on plain Card -->\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-pagination\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Progress Bars</h4>\r\n                      <div class=\"progress-container\">\r\n                        <span class=\"progress-badge\">Default</span>\r\n\r\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <div class=\"progress-container progress-primary\">\r\n                          <span class=\"progress-badge\">Primary</span>\r\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <br />\r\n                      <h4>Navigation Pills</h4>\r\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"far fa-gem\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"fa fa-thermometer-full\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab [disabled]=\"true\">\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-exclamation\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Pagination</h4>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\r\n                      <br/>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\r\n                      <br>\r\n                      <h4>Labels</h4>\r\n                      <span class=\"badge badge-default\">Default</span>\r\n                      <span class=\"badge badge-primary\">Primary</span>\r\n                      <span class=\"badge badge-success\">Success</span>\r\n                      <span class=\"badge badge-info\">Info</span>\r\n                      <span class=\"badge badge-warning\">Warning</span>\r\n                      <span class=\"badge badge-danger\">Danger</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section\" id=\"notifications\">\r\n          <div class=\"container\">\r\n            <h4>Notifications</h4>\r\n          </div>\r\n          <app-notification></app-notification>\r\n      </div>\r\n      <app-typography></app-typography>\r\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\r\n          <div class=\"container\">\r\n              <h3 class=\"title\">Angular Native Components</h3>\r\n              <div class=\"row\" id=\"modals\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Modal</h4>\r\n                      <ngbd-modal-component></ngbd-modal-component>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Popovers</h4>\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\r\n                          On right\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\r\n                          On top\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\r\n                          On left\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                  </div>\r\n                  <br />\r\n                  <br />\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Datetimepicker</h4>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                              <div class=\"datepicker-container\">\r\n                                  <div class=\"form-group\">\r\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\r\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\r\n                \t\t\t            </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <!--                 end collapse -->\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Tooltips</h4>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n                         On right\r\n                     </button>\r\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n                       On left\r\n                     </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n                         On top\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                      <div class=\"clearfix\"></div>\r\n                      <br>\r\n                      <br>\r\n                  </div>\r\n              <!-- </div>\r\n            </div> -->\r\n          </div>\r\n\r\n          <div class=\"section\" id=\"carousel\">\r\n              <div class=\"container\">\r\n                  <div class=\"title\">\r\n                      <h4>Carousel</h4>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                      <div class=\"col-8\">\r\n                        <ngb-carousel>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Nature, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Somewhere Beyond, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Yellowstone National Park, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                        </ngb-carousel>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-nucleo-icons\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <h2 class=\"title\">Nucleo Icons</h2>\r\n                      <h5 class=\"description\">\r\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\r\n                      </h5>\r\n                      <!-- <div class=\"nucleo-container\">\r\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\r\n      </div> -->\r\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\r\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <div class=\"icons-container\">\r\n                          <i class=\"now-ui-icons ui-1_send\"></i>\r\n                          <i class=\"now-ui-icons ui-2_like\"></i>\r\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                          <i class=\"now-ui-icons text_bold\"></i>\r\n                          <i class=\"now-ui-icons tech_headphones\"></i>\r\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                          <i class=\"now-ui-icons design_palette\"></i>\r\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                          <i class=\"now-ui-icons location_pin\"></i>\r\n                          <i class=\"now-ui-icons objects_key-25\"></i>\r\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n          <div class=\"container text-center\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"col-md-12 col-lg-8\">\r\n                      <h2 class=\"title\">Completed with examples</h2>\r\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\r\n          <div class=\"container login-page\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 content-center ml-auto mr-auto\">\r\n                  <div class=\"card card-login card-plain\">\r\n                      <form class=\"form\" method=\"\" action=\"\">\r\n                          <div class=\"header header-primary text-center\">\r\n                              <div class=\"logo-container\">\r\n                                  <img src=\"assets/img/now-logo.png\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"content\">\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                            </div>\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"footer text-center\">\r\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\r\n                          </div>\r\n                          <div class=\"text-center\">\r\n                              <h6>\r\n                                  <a href=\"#pablo\" class=\"link\">Create Account</a>\r\n                              </h6>\r\n                          </div>\r\n                          <div class=\"text-center\">\r\n                              <h6>\r\n                                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\r\n                              </h6>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-center\">\r\n                  <a [routerLink]=\"['/customer/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-examples\" data-background-color=\"black\">\r\n          <div class=\"space-50\"></div>\r\n          <div class=\"container text-center\">\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/customer/landing']\">\r\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/customer/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/customer/profile']\">\r\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/customer/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\r\n          <div class=\"container\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\r\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\r\n                  </div>\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\r\n                          Download Angular\r\n                      </a>\r\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\r\n                          Download PSD/Sketch\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <div class=\"row text-center mt-5\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h2>Want more?</h2>\r\n                      <h5 class=\"description\">We've just launched\r\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\r\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <div class=\"row justify-content-md-center sharing-area text-center\">\r\n                <div class=\"text-center col-md-12 col-lg-8\">\r\n                  <h3>Thank you for supporting us!</h3>\r\n                </div>\r\n                <div class=\"text-center col-md-12 col-lg-8\">\r\n                  <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\r\n                    <i class=\"fab fa-linkedin\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\r\n                    <i class=\"fab fa-github\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <footer class=\"footer\" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <nav>\r\n              <ul>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com\">\r\n                          Creative Tim\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com/about-us\">\r\n                          About Us\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"http://blog.creative-tim.com\">\r\n                          Blog\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                          MIT License\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </nav>\r\n          <div class=\"copyright\">\r\n              &copy;\r\n            {{data | date: 'yyyy'}}, Designed by\r\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\r\n Launch Modal\r\n</button>\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header justify-content-center\">\r\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <h4 class=\"title title-up\">Modal title</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\r\n        </p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\r\n   Launch Modal Mini\r\n</button>\r\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n      <div class=\"modal-profile\">\r\n          <i class=\"now-ui-icons users_circle-08\"></i>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <p>Always have an access to your profile</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-loader/my-loader.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-loader/my-loader.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyLoaderMyLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"progress-loader\" [hidden]=\"!loading\">\n    <div class=\"loading-spinner\">\n        <img src=\"../../../assets/images/laloader.gif\">\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item active\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                  <div ngbDropdown class=\"dropdown\">\r\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                        <p>\r\n                                            Dropdown\r\n                                        </p>\r\n                                      </a>\r\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                      </div>\r\n                                  </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu with Icons</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\r\n                            <ul class=\"navbar-nav ml-auto\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"dropdown\">\r\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                        </a>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <div class=\"dropdown-header\">Dropdown header</div>\r\n                                            <a class=\"dropdown-item\">Action</a>\r\n                                            <a class=\"dropdown-item\">Another action</a>\r\n                                            <a class=\"dropdown-item\">Something else here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Another separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n        <h4>Navigation</h4>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\r\n            <!-- Navbar Primary  -->\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Primary -->\r\n            <!-- Navbar Info -->\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Info -->\r\n            <!-- Navbar Success -->\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Success -->\r\n            <!-- Navbar Warning -->\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-google-plus\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Warning -->\r\n            <!-- Navbar Danger -->\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Share</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Tweet</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-pinterest\"></i>\r\n                                    <p>Pin</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Danger -->\r\n            <!-- Navbar Transparent -->\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Facebook</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Twitter</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                    <p>Instagram</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Transparent-->\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\r\n        <div class=\"container\">\r\n            <div class=\"alert-wrapper\">\r\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                  <span aria-hidden=\"true\">\r\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  </span>\r\n                </button>\r\n                <div class=\"message\">\r\n                    <ng-container *ngIf=\"alert.icon\">\r\n                      <div class=\"alert-icon\">\r\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\r\n                      </div>\r\n                    </ng-container>\r\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ngb-alert>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/basket/basket.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/basket/basket.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerBasketBasketComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Spotlex</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"css/style.css\">\n</head>\n<body>\n    <div class=\"container\" style=\"margin-top: 6%;\">\n        <div class=\"row\">\n            <!--Left Form Start-->\n            <div class=\"col-md-8 bg-clr\">\n                <div class=\"dashboard-tabs-content-box\">\n                    <div class=\"dashboard-tabs-content-title\">\n                        <h3>Address</h3>\n                    </div>\n                    <div class=\"dashboard-tabs-content-inn\">\n                        <form [formGroup]=\"informationForm\" (ngSubmit)=\"EditAddress()\" class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"dashboard-form-wrap\">\n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputState\" class=\"col-sm-6 col-form-label\">Select Address<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-6\">\n                                            <select id=\"inputState\" class=\"form-control arrow-down  form-control-lg\">\n                                                <option selected=\"\">Your Post Code</option>\n                                                <option ></option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.address\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('address').hasError(validation.type) && (informationForm.get('address').dirty || informationForm.get('address').touched)\">*{{validation.message}}</span>\n                                    </div>\n                                    <div class=\"form-group form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Post Code<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-6 input-group\">\n                                            <input type=\"text\" formControlName=\"postcode\" [(ngModel)]=\"post_code\" class=\"form-control form-control-lg\"\n                                                placeholder=\"se187bg\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-1.png\"\n                                                        alt=\"form-field-icon-1.png\" /></span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-3 \">\n                                            <button type=\"button\" (click)=\"checkPostCode()\" \n                                                    class=\"btn w-100 h-100 find-btn btn-success\">Find \n                                                    <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.postcode\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('postcode').hasError(validation.type) && (informationForm.get('postcode').dirty || informationForm.get('postcode').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Building Name or\n                                            Number<span class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <input type=\"text\" formControlName=\"building_name_no\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Building Name or Number\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-2.png\"\n                                                        alt=\"form-field-icon-2.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.building_name_no\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('building_name_no').hasError(validation.type) && (informationForm.get('building_name_no').dirty || informationForm.get('building_name_no').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Street Name<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9  input-group\">\n                                            <input type=\"text\"  formControlName=\"street_name\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Street Name\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-3.png\"\n                                                        alt=\"form-field-icon-3.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.street_name\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('street_name').hasError(validation.type) && (informationForm.get('street_name').dirty || informationForm.get('street_name').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Town<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9  input-group\">\n                                            <input type=\"text\"  formControlName=\"town\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Town\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-4.png\"\n                                                        alt=\"form-field-icon-4.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.town\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('town').hasError(validation.type) && (informationForm.get('town').dirty || informationForm.get('town').touched)\">*{{validation.message}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5 offset-md-1\">\n                                <div class=\"dashboard-form-wrap\">\n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputState\" class=\"col-sm-3 col-form-label\">First Name<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <input type=\"text\" formControlName=\"first_name\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Enter Your First Name\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-5.png\"\n                                                        alt=\"form-field-icon-5.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.first_name\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('first_name').hasError(validation.type) && (informationForm.get('first_name').dirty || informationForm.get('first_name').touched)\">*{{validation.message}}</span>\n                                    </div>\n                                    <div class=\"form-group form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Last Name<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <input type=\"text\" formControlName=\"last_name\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Enter Your Last Name\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-5.png\"\n                                                        alt=\"form-field-icon-5.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.last_name\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('last_name').hasError(validation.type) && (informationForm.get('last_name').dirty || informationForm.get('last_name').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Email Address<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <input type=\"text\" formControlName=\"email\" disabled=\"disabled\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Enter Your Email Address\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-6.png\"\n                                                        alt=\"form-field-icon-6.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.email\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('email').hasError(validation.type) && (informationForm.get('email').dirty || informationForm.get('email').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Password<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <input type=\"text\" formControlName=\"password\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Enter Your Current Password\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-7.png\"\n                                                        alt=\"form-field-icon-7.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.password\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('password').hasError(validation.type) && (informationForm.get('password').dirty || informationForm.get('password').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Create New Password\n                                        </label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <input type=\"text\" formControlName=\"new_password\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Enter Your New Password\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-8.png\"\n                                                        alt=\"form-field-icon-8.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.new_password\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('new_password').hasError(validation.type) && (informationForm.get('new_password').dirty || informationForm.get('new_password').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Confirm Password\n                                        </label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <input type=\"text\" formControlName=\"password_confirmation\" class=\"form-control form-control-lg\"\n                                                placeholder=\"Confirm Your New Password\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-8.png\"\n                                                        alt=\"form-field-icon-8.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.password_confirmation\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('password_confirmation').hasError(validation.type) && (informationForm.get('password_confirmation').dirty || informationForm.get('password_confirmation').touched)\">*{{validation.message}}</span>\n                                    </div>\n            \n                                    <div class=\"form-group  form-row\">\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Phone Number<span\n                                                class=\"required\">*</span></label>\n                                        <div class=\"col-sm-9 input-group\">\n                                            <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\" id=\"basic-addon3\">\n                                                    <select class=\"selectpicker\" data-width=\"fit\">\n                                                        <option\n                                                            data-content='<span class=\"flag-icon flag-icon-us\"></span>'>\n                                                        </option>\n                                                        <option\n                                                            data-content='<span class=\"flag-icon flag-icon-mx\"></span>'>\n                                                        </option>\n                                                    </select>\n                                                </span>\n                                            </div>\n                                            <input type=\"text\" formControlName=\"phone_number\" class=\"form-control form-control-lg\"\n                                                placeholder=\"123 456 7890\">\n                                            <div class=\"input-group-append\">\n                                                <span class=\"input-group-text\"><img\n                                                        src=\"assets/images/form-field-icon-9.png\"\n                                                        alt=\"form-field-icon-9.png\" /></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.phone_number\">\n                                        <span class=\"validation-error\"\n                                            *ngIf=\"informationForm.get('phone_number').hasError(validation.type) && (informationForm.get('phone_number').dirty || informationForm.get('phone_number').touched)\">*{{validation.message}}</span>\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"col-lg-12\">\n                                <div class=\"buttons-outer text-center\">\n                                    <button class=\"btn primary_border_btn nm_btn\"  (click)=\"goBack()\"  type=\"button\">Back</button>\n                                    <button type=\"button\" (click)=\"EditAddress()\" class=\"btn primary_btn nm_btn\">Save Changes</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <!--Left Form Closed-->\n            \n             <!--Right Section Start-->\n             <div class=\"col-md-4\">\n                 <div class=\"titleWidget d-flex justify-content-between align-items-center\">\n                    <h2>Items</h2>\n                    <a  routerLink=\"/basket\" routerLinkActive=\"active\" class=\"hand\" >Edit <i class=\"fa fa-edit\"></i></a>\n                 </div>\n                 <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->\n\n                 <div class=\"table-responsive\">\n                    <table class=\"table customtable borderBottom\">\n                        <tbody>\n                            <tr *ngFor=\"let cartData of CartItemsData; let i =index\">\n                                <!-- <p>{{cartData}}</p> -->\n                                <td class=\"prodImg\" width=\"50\"><img src=\"{{cartData.image}}\" alt=\"\"></td>\n                                <td><a>{{cartData.quantity}}x</a></td>\n                                <td>{{cartData.name}}</td>\n                                <td class=\"text-right\">£ {{cartData.sale_price ? cartData.sale_price :cartData.price}}</td>\n                                <td class=\"text-right actionCol\"> \n                                    <a class=\"hand\" (click)=\"removeItem(cartData.id,i)\"><i class=\"fa fa-times\"></i></a>\n                                </td>\n                            </tr>\n                            \n                        </tbody>\n                    </table>\n                 </div>\n\n                 <div class=\"totalWidget\">\n                    <p class=\"totalitems\">Total Items: {{totalItems}}</p>\n                    <p class=\"totalAmounts\">Total Amounts:£ {{totalPrice}}</p>\n\n                 </div>\n                 <p class=\"mt-4\">\n                     <textarea name=\"\" id=\"\" cols=\"30\" rows=\"5\" class=\"form-control\"></textarea>\n                 </p>\n                 <button class=\"btn primary_btn nm_btn btn-shadow arrowBtn\" (click) =\"goToCheckout()\">Next <i class=\"fa fa-angle-right\"></i></button>\n                \n            </div>\n            <!--Right Section Closed-->\n        </div>\n    </div>\n    \n</body>\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/checkout/checkout.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/checkout/checkout.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <section class=\"checkout-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"section-header\">\n                        <h2>Times<a href=\"#\">Edit</a></h2>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"collaction\">\n                                <h4 class=\"hand\">Collaction time</h4>\n                                <p-calendar\n                                [(ngModel)]=\"value\"\n                                placeholder=\"MM/DD/YYYY\"\n                                [readonlyInput]=\"true\"\n                                [minDate]=\"minDate\"\n                                [maxDate]=\"maxDate\"\n                                yearRange=\"2001:2018\"\n                                [monthNavigator]=\"true\"\n                                [yearNavigator]=\"true\"\n                                dateFormat=\"MM d, yy\"\n                                [showIcon]=\"true\"\n                                (onSelect)=\"onDateSelected($event, 0)\"\n                            >\n                            </p-calendar>\n                                <td>{{collectionDateTime | date:'MMM-dd-yyyy '}}</td>\n                                <p>{{ setCollectionSlotValue }}</p>\n                            </div>\n                        </div>\n                        <p-dialog header=\"Select a collection time slot\" [(visible)]=\"displayCollection\" [style]=\"{width: '20vw'}\" [baseZIndex]=\"10000\">\n                            <table style=\"text-align: center; margin-left: 50px;\">\n                                <tr>\n                                  <th>Collection Timeslot</th>\n                                </tr>\n                                <tr  *ngFor=\"let slots of collectionSlot; let i =index\">\n                                  <td [ngClass]=\"{'success-msg': slots.blocked_collection_slot === 0, 'gray':slots.blocked_collection_slot === 1}\" (click)=\"selectedCollectionSlot(slots)\">\n                                    <a class=\"hand\">\n                                      {{slots.collection_time_start}}-{{slots.collection_time_end}}\n                                    </a>\n                                </td>\n                                </tr>\n                              </table>\n                           \n                        <!-- <p-footer>\n                            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"displayBasic=false\" label=\"Yes\"></button>\n                            <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"displayBasic=false\" label=\"No\" class=\"ui-button-secondary\"></button>\n                        </p-footer> -->\n                    </p-dialog>\n                        <p-dialog header=\"Select a delivery time slot\" [(visible)]=\"displayDelivery\" [style]=\"{width: '20vw'}\" [baseZIndex]=\"10000\">\n                            <table style=\"text-align: center; margin-left: 50px;\">\n                                <tr>\n                                  <th>Delivery Timeslot</th>\n                                </tr>\n                                <tr  *ngFor=\"let slots of deliverySlot; let i =index\">\n                                 <td [ngClass]=\"{'success-msg': slots.blocked_delivery_slot === 0, 'gray':slots.blocked_delivery_slot === 1}\" (click)=\"selectedDeliverySlot(slots)\">\n                                    <a class=\"hand\">\n                                      {{slots.delivery_time_start}}-{{slots.delivery_time_end}}\n                                    </a>\n                                </td>\n                                </tr>\n                              </table>\n                        \n                        <!-- <p-footer>\n                            <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"displayBasic=false\" label=\"Yes\"></button>\n                            <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"displayBasic=false\" label=\"No\" class=\"ui-button-secondary\"></button>\n                        </p-footer> -->\n                    </p-dialog>\n                            <div class=\"col-sm-6\">\n                            <div class=\"collaction\">\n                                <h4 class=\"hand\">Delivery time</h4>\n                                <p-calendar\n                                [(ngModel)]=\"value\"\n                                placeholder=\"MM/DD/YYYY\"\n                                [readonlyInput]=\"true\"\n                                [minDate]=\"minDate\"\n                                [maxDate]=\"maxDate\"\n                                yearRange=\"2001:2018\"\n                                [monthNavigator]=\"true\"\n                                [yearNavigator]=\"true\"\n                                dateFormat=\"MM d, yy\"\n                                [showIcon]=\"true\"\n                                (onSelect)=\"onDateSelected($event,1)\"\n                            >\n                            </p-calendar>\n                            <td>{{deliveryDateTime | date:'MMM-dd-yyyy '}}</td>\n                            <p>{{setDeliverySlotValue}}</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <a href=\"#\" class=\"a-link\">Save date to calendar</a> -->\n                    <h3>Delevery Instruction</h3>\n                    <!-- <form [formGroup]=\"deliveryNotesForm\"> -->\n                    <textarea  [(ngModel)]=\"delivery_notes\" placeholder=\"Cleaning instructions (optional)\"></textarea>\n                    <!-- </form> -->\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"checkout-box\">\n                        <div class=\"checkout-header\">\n                            <h2>Checkout</h2>\n                        </div>\n                        <div class=\"checkout-body\">\n                            <form [formGroup]=\"couponForm\" (ngSubmit)=\"applyCoupon()\">\n                            <div class=\"code-here\">\n                                <input type=\"text\" formControlName=\"coupon_code\" placeholder=\"Voucher Code\">\n                                <input type=\"submit\" value=\"Submit\" class=\"btn-back\">\n                            </div>\n                            <!-- <span  class=\"validation-error\">{{errorMessage}}</span> -->\n                            <!-- <span  class=\"success-msg\">{{successMsg}}</span> -->\n                            <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.coupon_code\">\n                                <span class=\"validation-error\"\n                                    *ngIf=\"couponForm.get('coupon_code').hasError(validation.type) && (couponForm.get('coupon_code').dirty || couponForm.get('coupon_code').touched)\">*{{validation.message}}\n                                </span>\n                            </div>\n                        </form>\n                            <div class=\"subtotal\">\n                                <h5>Subtotal<span>£{{finalPrice}}</span></h5>\n                                <hr>\n                                <h4>Total<span>£{{finalPrice}}</span></h4>\n                            </div>\n                            <input type=\"button\" value=\"Place order\" (click)=\"addCardDetails()\" class=\"theme-btn\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <a (click)=\"goBack()\" class=\"btn-back hand\">Back</a>\n        </div>\n    </section>\n    <section class=\"select-cart\">\n        <div class=\"container\">\n           <div class=\"row\">\n               <div class=\"col-sm-7\">\n                       <h4>Minimum Order Value $15</h4>\n               </div>\n               <!-- <div class=\"col-sm-5 text-right\">\n                   <h4>Total: $ 5.20</h4>\n               </div>     -->\n               <div class=\"col-sm-7\">\n                   <a href=\"#\" class=\"support-here\">\n                     <span> <i class=\"fa fa-commenting\" aria-hidden=\"true\"></i></span>\n                       Support\n                   </a>\n               </div> \n                 <!-- <div class=\"col-sm-5 text-right\">\n                   <a href=\"#\" class=\"your-basket\">\n                       Your Basket<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                   </a>\n                 </div> -->\n           </div>\n       </div>\n       <p-dialog header=\"Add card details to make a payment\" [(visible)]=\"addCard\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\">\n        <form [formGroup]=\"AddCardForm\" (ngSubmit)=\"addCardToPay()\" >\n          <div class=\"form-container\" style=\"background:#f7fcff\">\n                <input id=\"column-left\" type=\"text\" formControlName=\"name_on_card\"  placeholder=\"Name\"/>\n                <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.name_on_card\">\n                    <span class=\"validation-error\"\n                        *ngIf=\"AddCardForm.get('name_on_card').hasError(validation.type) && (AddCardForm.get('name_on_card').dirty || AddCardForm.get('name_on_card').touched)\">*{{validation.message}}\n                    </span>\n                </div>\n                <input id=\"input-field\" type=\"text\" formControlName=\"card_no\" placeholder=\"Card Number\"/>\n                <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.card_no\">\n                    <span class=\"validation-error\"\n                        *ngIf=\"AddCardForm.get('card_no').hasError(validation.type) && (AddCardForm.get('card_no').dirty || AddCardForm.get('card_no').touched)\">*{{validation.message}}\n                    </span>\n                </div>\n                <input id=\"column-left\" type=\"text\" formControlName=\"expiry_month\"  placeholder=\"Expiry Month\">\n                <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.expiry_month\">\n                    <span class=\"validation-error\"\n                        *ngIf=\"AddCardForm.get('expiry_month').hasError(validation.type) && (AddCardForm.get('expiry_month').dirty || AddCardForm.get('expiry_month').touched)\">*{{validation.message}}\n                    </span>\n                </div>\n                <input id=\"column-left\" type=\"text\" formControlName=\"expiry_year\"  placeholder=\"Expiry Year\">\n                <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.expiry_year\">\n                    <span class=\"validation-error\"\n                        *ngIf=\"AddCardForm.get('expiry_year').hasError(validation.type) && (AddCardForm.get('expiry_year').dirty || AddCardForm.get('expiry_year').touched)\">*{{validation.message}}\n                    </span>\n                </div>\n                <input id=\"column-right\" type=\"text\"  formControlName=\"cvv\" placeholder=\"CCV\"/>\n                <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.cvv\">\n                    <span class=\"validation-error\"\n                        *ngIf=\"AddCardForm.get('cvv').hasError(validation.type) && (AddCardForm.get('cvv').dirty || AddCardForm.get('cvv').touched)\">*{{validation.message}}\n                    </span>\n                </div>\n                <input type=\"submit\" value=\"Pay Now\" class=\"theme-btn\">\n            </div>\n          </form>\n        </p-dialog>\n   </section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/commercial/commercial.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/commercial/commercial.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerCommercialCommercialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <section class=\"banner commercial-banner inner-banner\" style=\"background-image:url('assets/images/banner-2.jpg')\">\r\n    <div class=\"container\">\r\n        <div class=\"banner-content\">\r\n            <h1>Commercial Services</h1>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"section regular-content-box commercial-content-box\">  \r\n<div class=\"container\">\r\n    <div class=\"regular-content-inn text-center\">\r\n      <h3>Medical & Dental, Health & Fitness, Hotel & Rentals, Salons & Spas, <br />\r\nMaintenance, Food Service, Recreation, Hospitality, Janitorial, <br />\r\nUniforms, Towels, Linens</h3>\r\n      <p>We collect, clean and deliver garments when our professional laundry and dry cleaning services are complete. We understand that every business has specific needs, so we\r\nendeavour to provide the highest standards at competitive prices with reliable results. We could stick to a rigid price list like every other laundry service, but we have decided to ask you what your pricing needs are. Your business is unique and your laundry needs are unique. We want to create a Laundry Plan that is the perfect fit for you – from when your pick up occurs to the amount due on your invoice.</p>\r\n    </div> \r\n</div>\r\n</section>\r\n<section class=\"how-it-work\">\r\n    <div class=\"container\">\r\n        <div class=\"how-it-work-inn\">\r\n            <div class=\"title-heading\">\r\n                <h3>HOW IT WORKS</h3>\r\n                <p>It’s EASY! Just tell us about your laundry needs, your desired frequency and your budget\r\n                we’ll give you several options, at different prices so you can choose the Laundry Plan that suits your business.</p>\r\n            </div>\r\n\r\n            <div class=\"how-it-ser row\">\r\n                <div class=\"col-lg-3 text-center\">\r\n                    <div class=\"service-box\">\r\n                    <figure class=\"service-figure service-figure-box\" style=\"background-image:url('assets/images/service-img-1.jpg')\"></figure>\r\n                    <h3>Budget</h3>\r\n                    <p>Tell us your budget<p>\r\n                 </div>\r\n                </div>\r\n\r\n\r\n                 <div class=\"col-lg-3 text-center\">\r\n                    <div class=\"service-box\">\r\n                    <figure class=\"service-figure service-figure-box\" style=\"background-image:url('assets/images/service-img-2.jpg')\"></figure>\r\n                    <h3>Laundry Needs</h3>\r\n                    <p>Describe your laundry needs<p>\r\n                 </div>\r\n                </div>\r\n\r\n\r\n                 <div class=\"col-lg-3 text-center\">\r\n                    <div class=\"service-box\">\r\n                    <figure class=\"service-figure service-figure-box\" style=\"background-image:url('assets/images/service-img-3.jpg')\"></figure>\r\n                    <h3>Service Plan</h3>\r\n                    <p>We’ll develop a service plan<p>\r\n                 </div>\r\n                </div>\r\n\r\n                 <div class=\"col-lg-3 text-center\">\r\n                    <div class=\"service-box\">\r\n                    <figure class=\"service-figure service-figure-box\" style=\"background-image:url('assets/images/service-img-4.jpg')\"></figure>\r\n                    <h3>Convenience</h3>\r\n                    <p>We’ll meet your requirements<p>\r\n                 </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"section choose-us-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"choose-us-inn\">\r\n            <div class=\"title-heading text-center\">\r\n                <h3>WHY CHOOSE US?</h3>\r\n                <p>The personalised service you will receive is not the only benefit that our corporate clients enjoy.</p>\r\n            </div>\r\n\r\n            <div class=\"how-it-ser row\">\r\n                <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                    <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-1.png\" alt=\"choose-icon-1.png\" />\r\n                    </figure>\r\n                    <h3>No Contract</h3>\r\n                    <p>No length of service or minimum commitment<p>\r\n                 </div>\r\n                </div>\r\n\r\n\r\n                 <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                   <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-2.png\" alt=\"choose-icon-2.png\" />\r\n                    </figure>\r\n                    <h3>Flexible Billing</h3>\r\n                    <p>Choose from monthly or weekly billing options<p>\r\n                 </div>\r\n                </div>\r\n\r\n\r\n                 <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                   <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-3.png\" alt=\"choose-icon-3.png\" />\r\n                    </figure>\r\n                    <h3>Easy Payment</h3>\r\n                    <p>Pay by bank transfer, credit card, or direct debit<p>\r\n                 </div>\r\n                </div>\r\n\r\n                 <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                  <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-4.png\" alt=\"choose-icon-4.png\" />\r\n                    </figure>\r\n                    <h3>No Hidden Fees</h3>\r\n                    <p>Our pricing is clear and all inclusive<p>\r\n                 </div>\r\n                </div>\r\n\r\n\r\n\r\n                 <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                   <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-5.png\" alt=\"choose-icon-5.png\" />\r\n                    </figure>\r\n                    <h3>Simple Scheduling</h3>\r\n                    <p>We’ll work around your schedule and availability<p>\r\n                 </div>\r\n                </div> \r\n                \r\n\r\n\r\n                 <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                  <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-6.png\" alt=\"choose-icon-6.png\" />\r\n                    </figure>\r\n                    <h3>Pick up & Delivery</h3>\r\n                    <p>Pick up and delivery is completely free<p>\r\n                 </div>\r\n                </div>\r\n                \r\n\r\n\r\n                 <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                  <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-7.png\" alt=\"choose-icon-7.png\" />\r\n                    </figure>\r\n                    <h3>Adjustable Frequency</h3>\r\n                    <p>Automate your services or schedule them accordingly<p>\r\n                 </div>\r\n                </div>\r\n                \r\n\r\n               <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                   <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-8.png\" alt=\"choose-icon-8.png\" />\r\n                    </figure>\r\n                    <h3>Priority Client Care</h3>\r\n                    <p>We work to ensure that you are happy with our service<p>\r\n                 </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box service-box-icon\">\r\n                   <figure class=\"service-figure-icon\">\r\n                      <img src=\"assets/images/choose-icon-9.png\" alt=\"choose-icon-9.png\" />\r\n                    </figure>\r\n                    <h3>Limitless Options</h3>\r\n                    <p>Items are processed and delivered according to your requirements.<p>\r\n                 </div>\r\n                </div>\r\n                \r\n\r\n             </div> \r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"enquire-form-sec section white-bg-field\">\r\n<div class=\"container\">\r\n <div class=\"enquire-form-main\">\r\n    <div class=\"title-heading text-center\">\r\n                <h3>COMPLETE THE FORM BELOW TO PROCESS YOUR ENQUIRY</h3>\r\n                <p>Let us know about your laundry needs and we'll arrange a consultation</p>\r\n            </div>\r\n\r\n            <div class=\"enquier-frm  row\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Nature Of Business\" />\r\n                </div>\r\n              </div>\r\n\r\n               <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Business Address\" />\r\n                </div>\r\n              </div>\r\n\r\n              \r\n               <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Post Code\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Contact Name\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Contact Number\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" />\r\n                </div>\r\n              </div>\r\n\r\n\r\n               <div class=\"col-lg-12\"> \r\n                <div class=\"form-group\">\r\n                 <textarea class=\"form-control form-textarea\" placeholder=\"Describe your laundry needs and specify your budget\" ></textarea>\r\n                </div>\r\n              </div>\r\n\r\n               <div class=\"col-lg-12\">\r\n                <div class=\"form-group submit_btn_outer\">\r\n                <button class=\"btn primary_btn nm_btn\">SUBMIT</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n </div>\r\n</div>\r\n</section> -->\r\n\r\n<section>\r\n\r\n  <h1 style=\"text-align: center; margin-top: 10%;\">This page will be in Wordpress plateform</h1>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  customer works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/dashboard/dashboard.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/dashboard/dashboard.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"dashboard-main\">\r\n    <div class=\"title\">\r\n        <h2>Welcome Maria!</h2>\r\n    </div>\r\n    <div class=\"dashboard-inner\">\r\n        <ul class=\"nav\" id=\"dashboard-tabs\">\r\n            <li (click)=\"showChat()\">\r\n                <a class=\"hand\" id=\"help-ssupport-block\">\r\n                    <div class=\"dashboard-menu-box\">\r\n                        <h3>Help</h3>\r\n                        <figure class=\"footer-icon\">\r\n                            <img src=\"assets/images/dashboard-menu-icon1.png\" />\r\n                        </figure>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\" hand\" id=\"dashboard-tabs-1\" data-toggle=\"tab\" routerLink=\"/neworder\" routerLinkActive=\"active\" role=\"tab\"\r\n                    aria-controls=\"place-new-order\" aria-selected=\"true\">\r\n                    <div class=\"dashboard-menu-box\">\r\n                        <h3>PLACE NEW ORDER</h3>\r\n                        <figure class=\"footer-icon\">\r\n                            <img src=\"assets/images/dashboard-menu-icon2.png\" alt=\"dashboard-menu-icon2.png\" />\r\n                        </figure>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li (click)=\"getAccountSetting()\">\r\n                <a id=\"dashboard-tabs-2\" data-toggle=\"tab\" href=\"#account-setting\" role=\"tab\"\r\n                    aria-controls=\"account-setting\" aria-selected=\"false\">\r\n                    <div class=\"dashboard-menu-box\">\r\n                        <h3>ACCOUNT SETTING</h3>\r\n                        <figure class=\"footer-icon\">\r\n                            <img src=\"assets/images/dashboard-menu-icon3.png\" alt=\"dashboard-menu-icon3.png\" />\r\n                        </figure>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li (click)=\"getOrderHistory()\">\r\n                <a id=\"dashboard-tabs-3\" data-toggle=\"tab\" href=\"#order-history\" role=\"tab\"\r\n                    aria-controls=\"order-history\" aria-selected=\"false\">\r\n                    <div class=\"dashboard-menu-box\">\r\n                        <h3>ORDER HISTORY</h3>\r\n                        <figure class=\"footer-icon\">\r\n                            <img src=\"assets/images/dashboard-menu-icon4.png\" alt=\"dashboard-menu-icon4.png\" />\r\n                        </figure>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a id=\"dashboard-tabs-4\" data-toggle=\"tab\" href=\"#refer-friend\" role=\"tab\" aria-controls=\"refer-friend\"\r\n                    aria-selected=\"false\">\r\n                    <div class=\"dashboard-menu-box\">\r\n                        <h3>REFER YOUR FRIENDS</h3>\r\n                        <figure class=\"footer-icon\">\r\n                            <img src=\"assets/images/dashboard-menu-icon5.png\" alt=\"dashboard-menu-icon5.png\" />\r\n                        </figure>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a id=\"dashboard-tabs-5\" class=\"active\" data-toggle=\"tab\" href=\"#loyality-point\" role=\"tab\"\r\n                    aria-controls=\"loyality-point\" aria-selected=\"false\">\r\n                    <div class=\"dashboard-menu-box\">\r\n                        <h3>LOYALTY POINTS</h3>\r\n                        <figure class=\"footer-icon\">\r\n                            <img src=\"assets/images/dashboard-menu-icon6.png\" alt=\"dashboard-menu-icon6.png\" />\r\n                        </figure>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li (click)=\"getCouponVoucher()\">\r\n                <a id=\"dashboard-tabs-6\" data-toggle=\"tab\" href=\"#coupen\" role=\"tab\" aria-controls=\"coupen\"\r\n                    aria-selected=\"false\">\r\n                    <div class=\"dashboard-menu-box\">\r\n                        <h3>COUPON/VOUCHER </h3>\r\n                        <figure class=\"footer-icon\">\r\n                            <img src=\"assets/images/dashboard-menu-icon7.png\" alt=\"dashboard-menu-icon7.png\" />\r\n                        </figure>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <!-- <a href=\"javascript:void(0);\"> -->\r\n                    <div *ngIf=\"showSupport\" (click)=\"closeChat()\" class=\"chat-support-wrap show\">\r\n                        <div class=\"char-tile\">\r\n                            <h3>Live Support chat</h3>\r\n                            <a click=\"closeChat()\" class=\"chat-close-btn hand\"><span class=\"cust-clr\">X</span></a>\r\n                        </div>\r\n                        <div class=\"chat-support-content-wrap\">\r\n                            <ul>\r\n                                <li>\r\n                                    <div class=\"chat-box\">\r\n                                        <figure class=\"img-box\"\r\n                                            style=\"background-image:url('assets/images/avtar-1.png')\">\r\n                                        </figure>\r\n                                        <div class=\"chat-text-box\">\r\n                                            <p>Hello! Can I help you?</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"chat-box user-chat\">\r\n                                        <figure class=\"img-box\"\r\n                                            style=\"background-image:url('assets/images/avtar-1.png')\"></figure>\r\n                                        <div class=\"chat-text-box\">\r\n                                            <p>Yes, can I pay via PayPal?</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"chat-box\">\r\n                                        <figure class=\"img-box\"\r\n                                            style=\"background-image:url('assets/images/avtar-1.png')\"></figure>\r\n                                        <div class=\"chat-text-box\">\r\n                                            <p>Sure you can!</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"chat-box user-chat\">\r\n                                        <figure class=\"img-box\"\r\n                                            style=\"background-image:url('assets/images/avtar-1.png')\"></figure>\r\n                                        <div class=\"chat-text-box\">\r\n                                            <p>Thanks</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n\r\n                            </ul>\r\n                            <div class=\"type-msg-wrap\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your message\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                <!-- </a> -->\r\n            </li>\r\n        </ul>\r\n        <div class=\"tab-content\" id=\"dashboard-tabs-content\">\r\n\r\n            <div class=\"tab-pane fade \" id=\"place-new-order\" role=\"tabpanel\" aria-labelledby=\"dashboard-tabs-1\">\r\n\r\n                <div class=\"dashboard-tabs-content-box\">\r\n                    <div class=\"dashboard-tabs-content-title\">\r\n                        <h3>Cooming Soon</h3>\r\n                    </div>\r\n                    <div class=\"dashboard-tabs-content-inn\">\r\n                        working...\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"account-setting\" role=\"tabpanel\" aria-labelledby=\"dashboard-tabs-2\">\r\n\r\n                <div class=\"dashboard-tabs-content-box\">\r\n                    <div class=\"dashboard-tabs-content-title\">\r\n                        <h3>Account Details</h3>\r\n                    </div>\r\n                    <div class=\"dashboard-tabs-content-inn\">\r\n                        <form [formGroup]=\"userInfoForm\" (ngSubmit)=\"updateUserInfo()\" class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"dashboard-form-wrap\">\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputState\" class=\"col-sm-3 col-form-label\">Select Address<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9\">\r\n                                            <!-- *ngFor=\"let addr of fullAddress\" -->\r\n                                            <select id=\"inputState\" formControlName=\"address\" class=\"form-control arrow-down  form-control-lg\">\r\n                                                <option selected=\"selected\">Your Post Code</option>\r\n                                                <option  [value]=\"fullAddress\"><option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.address\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('address').hasError(validation.type) && (userInfoForm.get('address').dirty || userInfoForm.get('address').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n                                    <div class=\"form-group form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Post Code<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-6 input-group\">\r\n                                            <input type=\"text\" formControlName=\"postcode\" [(ngModel)]=\"post_code\"  class=\"form-control form-control-lg\"\r\n                                                placeholder=\"se187bg\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-1.png\"\r\n                                                        alt=\"form-field-icon-1.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-3 \">\r\n                                            <button type=\"button\" (click)=\"checkPostCode()\" class=\"btn w-100 h-100 find-btn btn-success\">Find <i\r\n                                                    class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.postcode\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('postcode').hasError(validation.type) && (userInfoForm.get('postcode').dirty || userInfoForm.get('postcode').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Building Name or\r\n                                            Number<span class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <input type=\"text\" formControlName=\"building_name_no\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Building Name or Number\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-2.png\"\r\n                                                        alt=\"form-field-icon-2.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.building_name_no\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('building_name_no').hasError(validation.type) && (userInfoForm.get('building_name_no').dirty || userInfoForm.get('building_name_no').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Street Name<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9  input-group\">\r\n                                            <input type=\"text\"  formControlName=\"street_name\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Street Name\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-3.png\"\r\n                                                        alt=\"form-field-icon-3.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.street_name\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('street_name').hasError(validation.type) && (userInfoForm.get('street_name').dirty || userInfoForm.get('street_name').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Town<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9  input-group\">\r\n                                            <input type=\"text\"  formControlName=\"town\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Town\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-4.png\"\r\n                                                        alt=\"form-field-icon-4.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.town\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('town').hasError(validation.type) && (userInfoForm.get('town').dirty || userInfoForm.get('town').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-5 offset-md-1\">\r\n                                <div class=\"dashboard-form-wrap\">\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputState\" class=\"col-sm-3 col-form-label\">First Name<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <input type=\"text\" formControlName=\"first_name\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Enter Your First Name\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-5.png\"\r\n                                                        alt=\"form-field-icon-5.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.first_name\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('first_name').hasError(validation.type) && (userInfoForm.get('first_name').dirty || userInfoForm.get('first_name').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n                                    <div class=\"form-group form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Last Name<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <input type=\"text\" formControlName=\"last_name\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Enter Your Last Name\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-5.png\"\r\n                                                        alt=\"form-field-icon-5.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.last_name\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('last_name').hasError(validation.type) && (userInfoForm.get('last_name').dirty || userInfoForm.get('last_name').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Email Address<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <input type=\"text\" disabled=\"disabled\" formControlName=\"email\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Enter Your Email Address\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-6.png\"\r\n                                                        alt=\"form-field-icon-6.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.email\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('email').hasError(validation.type) && (userInfoForm.get('email').dirty || userInfoForm.get('email').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Password<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <input type=\"password\" formControlName=\"password\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Enter Your Current Password\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-7.png\"\r\n                                                        alt=\"form-field-icon-7.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.password\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('password').hasError(validation.type) && (userInfoForm.get('password').dirty || userInfoForm.get('password').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Create New Password\r\n                                        </label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <input type=\"password\" formControlName=\"new_password\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Enter Your New Password\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-8.png\"\r\n                                                        alt=\"form-field-icon-8.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.new_password\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('new_password').hasError(validation.type) && (userInfoForm.get('new_password').dirty || userInfoForm.get('new_password').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Confirm Password\r\n                                        </label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <input type=\"password\" formControlName=\"password_confirmation\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"Confirm Your New Password\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-8.png\"\r\n                                                        alt=\"form-field-icon-8.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.password_confirmation\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('password_confirmation').hasError(validation.type) && (userInfoForm.get('password_confirmation').dirty || userInfoForm.get('password_confirmation').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group  form-row\">\r\n                                        <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Phone Number<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <div class=\"col-sm-9 input-group\">\r\n                                            <div class=\"input-group-prepend\">\r\n                                                <span class=\"input-group-text\" id=\"basic-addon3\">\r\n                                                    <select class=\"selectpicker\" data-width=\"fit\">\r\n                                                        <option\r\n                                                            data-content='<span class=\"flag-icon flag-icon-us\"></span>'>\r\n                                                        </option>\r\n                                                        <option\r\n                                                            data-content='<span class=\"flag-icon flag-icon-mx\"></span>'>\r\n                                                        </option>\r\n                                                    </select>\r\n                                                </span>\r\n                                            </div>\r\n                                            <input type=\"text\" formControlName=\"phone_number\" class=\"form-control form-control-lg\"\r\n                                                placeholder=\"123 456 7890\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\"><img\r\n                                                        src=\"assets/images/form-field-icon-9.png\"\r\n                                                        alt=\"form-field-icon-9.png\" /></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.phone_number\">\r\n                                        <span class=\"validation-error\"\r\n                                            *ngIf=\"userInfoForm.get('phone_number').hasError(validation.type) && (userInfoForm.get('phone_number').dirty || userInfoForm.get('phone_number').touched)\">*{{validation.message}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"buttons-outer text-center\">\r\n                                    <button class=\"btn primary_border_btn nm_btn\" type=\"button\">Back</button>\r\n                                    <button type=\"button\" (click)=\"updateUserInfo()\" class=\"btn primary_btn nm_btn\">Save Changes</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            \r\n            <div class=\"tab-pane fade\" id=\"order-history\" role=\"tabpanel\" aria-labelledby=\"dashboard-tabs-3\">\r\n                <div class=\"dashboard-tabs-content-box\">\r\n                    <div class=\"dashboard-tabs-content-title\">\r\n                        <h3>Check your order history</h3>\r\n                    </div>\r\n                    <div class=\"dashboard-tabs-content-inn\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"dashboard-history-table-wrap\">\r\n                                    <table id=\"order-table\" class=\"table table-striped table-bordered\"\r\n                                        style=\"width:100%\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Order</th>\r\n                                                <th>Date</th>\r\n                                                <th>Status</th>\r\n                                                <th>Total</th>\r\n                                                <th>Actions</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let orderItem of allOrders\">\r\n                                                <td><a href=\"#\" class=\"\">#{{orderItem.id}}</a></td>\r\n                                                <td>{{orderItem.updated_at}}</td>\r\n                                                <td>{{orderItem.status}}</td>\r\n                                                <td>{{orderItem.actual_price}}</td>\r\n                                                <td><a class=\"link_bttn hand\" (click)=\"viewOrderDetail(orderItem.id)\">View</a></td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"order-details-wrap\">\r\n                                    <div class=\"title\">\r\n                                        <h3>Order details</h3>\r\n                                        <p>Order #{{orderDetail?.id}} was placed on January 14, 2019 and is currently Processing</p>\r\n                                    </div>\r\n                                    <div class=\"table-wrap table-row\">\r\n                                        <table class=\"table order-detail-table\" style=\"width:100%\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>Product</th>\r\n                                                    <th>Total</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <th><a href=\"#\">{{orderDetail?.order_history[0].name}}</a> </th>\r\n                                                    <td>£1.50</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <th>Subtotal:</th>\r\n                                                    <td><strong>£1.50</strong></td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <th>Paymnet Method:</th>\r\n                                                    <td>Debit/Credit Card</td>\r\n                                                </tr>\r\n\r\n                                                <tr>\r\n                                                    <th>TOTAL:</th>\r\n                                                    <td><strong>£1.50</strong></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    <div class=\"table-row schedule-collection-wrap\">\r\n                                        <p><strong>Schedule your collection date:</strong> 14 January, 2019</p>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"table-wrap table-row\">\r\n                                        <table class=\"table order-detail-table\" style=\"width:100%\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <th><strong>Select your collection day and time slots:</strong></th>\r\n                                                    <td>Wednesday - 19:00-20:00</td>\r\n                                                </tr>\r\n                                            </tbody >\r\n                                        </table>\r\n                                    </div>\r\n                                    \r\n                                    <div class=\"billing-adress-wrap table-row\">\r\n                                        <h3>Billing address</h3>\r\n                                        <p>Patrick Ejezie<br />\r\n                                            2 Burrage Place,<br />\r\n                                            SE18 78G<br />\r\n                                            Info.spotlex@gmail.com</p>\r\n                                    </div>\r\n\r\n                                    <div class=\"table-row order-detail-button text-right\">\r\n                                        <button class=\"btn primary_btn\">Reorder</button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"refer-friend\" role=\"tabpanel\" aria-labelledby=\"dashboard-tabs-3\">\r\n                <div class=\"dashboard-tabs-content-box\">\r\n                    <div class=\"dashboard-tabs-content-title\">\r\n                        <h3>Refer Your Friends</h3>\r\n                    </div>\r\n                    <div class=\"dashboard-tabs-content-inn row\">\r\n                        <div class=\"col-md-2 offset-md-2\">\r\n                            <div class=\"sm-buttons-outer\">\r\n                                <ul>\r\n                                    <li>\r\n                                        <a href=\"www.facebook.com\" class=\"facebook\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                                            Share on Facebook </a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"www.twitter.com\" class=\"twitter\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                                            Share on Twitter</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"www.gmail.com\" class=\"googlePlus\"><i class=\"fa fa-google-plus\"\r\n                                                aria-hidden=\"true\"></i> Share on Google+</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-5 offset-md-1\">\r\n                            <div class=\"reger-frient-content\">\r\n                                <h4>Refer friends now</h4>\r\n                                <p>When your friend completes their first Spotlex order using your referral code, you'll\r\n                                    receive £10 of Spotlex credit</p>\r\n\r\n                                <div class=\"newsletter-wrap\">\r\n                                    <form>\r\n                                        <input type=\"text\" class=\"form-control\" value=\"ORDER1\" readonly />\r\n                                        <button type=\"button\" class=\"btn primary_btn\">Copy</button>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade active show\" id=\"loyality-point\" role=\"tabpanel\"\r\n                aria-labelledby=\"dashboard-tabs-3\">\r\n                <div class=\"dashboard-tabs-content-box\">\r\n                    <div class=\"dashboard-tabs-content-title\">\r\n                        <h3>Loyalty Points</h3>\r\n                    </div>\r\n                    <div class=\"dashboard-tabs-content-inn text-center\">\r\n                        <h3>You have {{loyalityPoint}} points</h3>\r\n                        <p>For every pound you spend you earn one point. Once you reach 150 points, you will\r\n                            receive<br /> a 10GBP discount to use on future orders.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"coupen\" role=\"tabpanel\" aria-labelledby=\"dashboard-tabs-3\">\r\n                    <div class=\"dashboard-tabs-content-box\">\r\n                        <div class=\"dashboard-tabs-content-title\">\r\n                            <div class=\"row mr-lf\">\r\n                            <div *ngFor=\"let item of Coupons\" class=\"box\">\r\n                                <div class=\"inner\">\r\n                                 <p>Coupon Code:-{{item.coupon_code}}</p>\r\n                                    <div class=\"coupon\">\r\n                                    <span class=\"scissors\">✂</span>\r\n                                    <span class=\"code\">{{item.price}} {{item.discount_type}}</span>  \r\n                                    </div>\r\n                              </div>\r\n                             </div>\r\n                             </div>\r\n                            </div>\r\n                        <!-- <div class=\"dashboard-tabs-content-inn\">\r\n                            working...\r\n                        </div> -->\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/landing/landing.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/landing/landing.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"banner home-banner\">\r\n    <div id=\"home-banner\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <!-- The slideshow -->\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\"\r\n                    style=\"background-image:url('assets/images/home-slide-1.jpg')\">\r\n            </div>\r\n            <div class=\"carousel-item\"\r\n                 style=\"background-image:url('assets/images/home-slide-1.jpg')\">\r\n            </div>\r\n            <div class=\"carousel-item\"\r\n                 style=\"background-image:url('assets/images/home-slide-1.jpg')\">\r\n            </div>\r\n        </div>\r\n        <div class=\"banner-content-wrap\">\r\n            <div class=\"container\">\r\n                <div class=\"banner-content\">\r\n                    <h1>dRY cLEANING aND lAUNDRY ON-DEMAND <br/> at tHE TOUCH OF a bUTTON</h1>\r\n                        <div class=\"book-now-wrap\">\r\n                            <input type=\"text\" id=\"post_code\" name=\"post_code\" class=\"form-control\"\r\n                                   placeholder=\"Enter Postcode\"/>\r\n                            <a type=\"button\" id=\"post_code_button\" class=\"btn book_btn\" onclick=\"ckeckPostCode(this)\" id=\"find_post_code\" >Book Now</a>\r\n                        </div>\r\n                                  <div class=\"alert alert-danger print-error-msg\" style=\"display:none\">\r\n                                        <ul>\r\n                                            \r\n                                        </ul>\r\n                                    </div>\r\n            <div style=\"display: none;\" id=\"check_postcode_loader\" class=\"alert alert-success alert-dismissible col-sm-12\">\r\n                           <div class=\"threedotspineer\">\r\n                          <div class=\"bounce1\"></div>\r\n                          <div class=\"bounce2\"></div>\r\n                          <div class=\"bounce3\"></div>\r\n                        </div>\r\n                            One moment, checking postcode\r\n                        </div>\r\n                    <p *ngIf=\"signInButton\"><strong >Already have an account?</strong> <a class=\"hand\"  routerLink =\"/login\" routerLinkActive=\"active\" >Sign in here</a>\r\n                    </p>\r\n                </div>\r\n\r\n                <!-- Left and right controls -->\r\n                <a class=\"carousel-control-prev\" href=\"#home-banner\" data-slide=\"prev\">\r\n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <a class=\"carousel-control-next\" href=\"#home-banner\" data-slide=\"next\">\r\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- how it section -->\r\n<section class=\"how-it-work bg-white\" id=\"how-it-works\">\r\n    <div class=\"container\">\r\n        <div class=\"how-it-work-inn\">\r\n            <div class=\"title-heading\">\r\n                <h3>HOW IT WORKS</h3>\r\n                <p>Trained professionals collect, clean and deliver laundry at the click of a button.\r\n                    You will never have to do laundry or ironing ever again!</p>\r\n            </div>\r\n\r\n            <div class=\"how-it-ser row\">\r\n                <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box\">\r\n                        <figure class=\"service-figure service-arrow-figure\"\r\n                                style=\"background-image:url('../../../assets/images/how-it-work-1.jpg');\"></figure>\r\n                        <h3>SCHEDULE YOUR FREE COLLECTION </h3>\r\n                        <p>Register to schedule your collection via mobile app or online\r\n                            We’ll bring a bag. We offer a variety of time slots on each day\r\n                            of the week from Monday – Sunday.\r\n                        <p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-box\">\r\n                        <figure class=\"service-figure service-arrow-figure\"\r\n                                style=\"background-image:url('../../../assets/images/how-it-work-2.jpg');\"></figure>\r\n                        <h3>PROFESSIONAL SERVICE</h3>\r\n                        <p>Whatever we collect will be taken for a professional service,\r\n                            Whether it be dry cleaning, laundry or alterations.\r\n                        <p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 text-center\">\r\n                    <div class=\"service-figure service-box\">\r\n                        <figure class=\"service-figure  service-arrow-figure\"\r\n                                style=\"background-image:url('../../../assets/images/how-it-work-3.jpg');\"></figure>\r\n                        <h3>FREE DELIVERY</h3>\r\n                        <p>You will receive your delivery in less than 48 hours of your chosen service.\r\n                            Your items will be spotless and we won’t charge a penny for delivery.\r\n                        <p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"section tap-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex align-items-center\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"tap-left-block text-center\">\r\n                    <div class=\"title-heading\">\r\n                        <h3>Tap, track & sit back</h3>\r\n                        <p>Watch our video to see how it is done <br/> Saving your time to do what you love most.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"book-now-wrap \">\r\n                        <input type=\"text\" class=\"form-control\"  href=\"signup\" placeholder=\"Enter Postcode\"/>\r\n                        <button class=\"btn book_btn\">Book Now</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"offset-lg-1 col-lg-4 \">\r\n                <div class=\"tap-right-block video-block\">\r\n                    <video width=\"320\" height=\"240\" controls>\r\n                        <source src=\"../../../assets/video/dummy.mp4 \" type=\"video/mp4\">\r\n                        <source src=\"../../../assets/video/dummy.mp4\" type=\"video/ogg\">\r\n                        Your browser does not support the video tag.\r\n                    </video>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"our-grantee-sec bg-grey section\">\r\n    <div class=\"container\">\r\n        <div class=\"title-heading text-center\">\r\n            <h3>Our Guarantee</h3>\r\n            <p>We are dedicated to ensuring your satisfaction</p>\r\n        </div>\r\n\r\n        <div class=\"list-icon-block\">\r\n            <ul>\r\n                <li><i class=\"fa fa-heart\" aria-hidden=\"true\"></i> <strong>WE PROMISE 100% HAPPINESS:</strong> If\r\n                    you’re not completely happy with your laundry or cleaning, we’ll re-process your order for free!\r\n                <li>\r\n                <li><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i><strong>OUR SERVICE IS CONVENIENT:</strong> We\r\n                    collect, clean and deliver at a time that suits you.\r\n                </li>\r\n                <li><i class=\"fa fa-leaf\" aria-hidden=\"true\"></i> <strong>ENVIRONMENTALLY CONSCIOUS:</strong> We\r\n                    have the environment in mind. No harsh chemicals are used.\r\n                </li>\r\n                <li><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> <strong>QUALITY SERVICES:</strong> We are\r\n                    dedicated to ensuring high-quality services so your items are returned in an exceptional\r\n                    condition every time you place an order.\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"truepoilet-sec\"\r\n         style=\"background-image:url('../../../assets/images/truepliot-bg.jpg')\">\r\n    <div class=\"container\">\r\n        <div class=\"truepoilet-inn\">\r\n            <h3>We are now on trustpilot, watch this space for impressive reviews!</h3>\r\n            <figure><img src=\"../../../assets/images/truepoilet-logo.png\" alt=\"truepoilet-logo.png\"/>\r\n            </figure>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section exp-sec bg-grey \">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"title-heading text-center\">\r\n                    <h3>Experience Laundry & dry cleaning <br/> at your fingertips</h3>\r\n                    <p>Many app make life easier, but Spotlex does laundry & <br/>\r\n                        dry cleaning with optimal care. Experience our quality <br/>\r\n                        service with a few simple clicks.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"download-box\">\r\n\r\n                    <div class=\"title-heading text-center\">\r\n                        <h3>Download The App</h3>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"book-now-wrap download-form-box\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"mobile_number\" id=\"mobile_number\" placeholder=\"Mobile Number\"/>\r\n                        <button class=\"btn book_btn\" id=\"send_app_link\" onclick='sendAppLink()'>Get the dowload link</button>\r\n                        <button style=\"display: none;\" id=\"sending_msg_loader\" class=\"btn book_btn\">\r\n                            <i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\r\n                            Sending...\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"download-option-wrap\">\r\n                        <ul>\r\n                            <li><a href=\"#\"><img src=\"../../../assets/images/google-play.png\"></a>\r\n                            </li>\r\n                            <li><a href=\"#\"><img src=\"../../../assets/images/ios-icon.png\"></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"about-service section\">\r\n    <div class=\"container\">\r\n        <div class=\"title-heading text-center\">\r\n            <h3>ABOUT OUR SERVICES</h3>\r\n            <p>Spotlex is a fast-growing on-demand business</p>\r\n        </div>\r\n\r\n        <div class=\"about-cont\">\r\n            <p>We offer on demand laundry and dry cleaning services, which include specialism such as alterations\r\n                and commercial laundry. We collect, clean and deliver to your door in less than 48 hours. Our London\r\n                based service is available within most London postcodes and its surrounding environ. Spotlex\r\n                customers enjoy a smarter and simpler way of doing laundry and dry cleaning. If your suit needs to\r\n                be cleaned in a particular way, or your dress has specific care instructions, you can rely on us for\r\n                quality and care. Our dry cleaning experts handle everything from daily work attire to delicate\r\n                fabrics/fragile garments. Simply let us know your preferences when ordering via apps or online.</p>\r\n\r\n            <p>Spotlex is dedicated to providing high-quality services, through our trusted partners’ network. Our\r\n                work is even backed by a definitive quality guarantee. Our flexible collection and drop off\r\n                schedules prevent customers from dealing with restrictive opening times. Orders can be placed 24/7\r\n                with free collection and free delivery.</p>\r\n        </div>\r\n\r\n\r\n        <div class=\"about-cont-list-wrap dot_list\">\r\n            <h3>Our services at a glance:</h3>\r\n\r\n            <ul>\r\n                <li>Dry Cleaning Service</li>\r\n                <li>Laundry Free Pickup & Delivery</li>\r\n                <li>Dress Dry Cleaning</li>\r\n                <li>Duvet Cleaning</li>\r\n                <li>Shirt Service</li>\r\n                <li>Alteration Service</li>\r\n                <li>Ironing Services</li>\r\n                <li>Bedding Service</li>\r\n                <li>Airbnb Host Laundry Service</li>\r\n                <li>Laundry Service</li>\r\n                <li>Suit Dry Cleaning</li>\r\n                <li>Commercial & Restaurant Laundry Service</li>\r\n                <li>Wash & Fold</li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"about-cont\">\r\n            <p>If you still have questions or concerns, do not hesitate to get in touch. We love to receive\r\n                feedback, questions and ideas as we want to keep improving and meeting your needs. To contact us for\r\n                a quick response email info@spotlex.co.uk or text 07478221373.</p>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\" refer-friend-sec text-center\"\r\n         style=\"background-image:url('../../../assets/images/truepliot-bg.jpg');\">\r\n    <div class=\"container\">\r\n        <div class=\"refer-friend-inn\">\r\n            <h3>REFER A FRIEND TO GET A DISCOUNT YOU CAN BOTH ENJOY</h3>\r\n            <p>When your friend places an order with Spotlex you will both receive £10 off any order worth £15 or\r\n                more!</p>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<section class=\"section review-sec\">\r\n    <div class=\"container\">\r\n        <div class=\"review-inn\">\r\n            <div class=\"title-heading text-center\">\r\n                <h3>OUR CUSTOMER REVIEWS</h3>\r\n            </div>\r\n            <div class=\"review-block\">\r\n                <img src=\"../../../assets/images/review-img.jpg\" alt=\"review-img.jpg\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/login/login.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/login/login.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\" filter-color=\"orange\">\r\n    <!-- <div class=\"page-header-image\" style=\"background-image:url('../../../assets/assets/images/login-form-before.png')\"> -->\r\n    <div class=\"container\">\r\n        <section class=\"account_main login_sec\">\r\n            <div class=\"container\">\r\n                <div class=\"account-form login-form\">\r\n                    <div class=\"account-form-inn\">\r\n                        <div class=\"account-title\">\r\n                            <h3>SIGN IN</h3>\r\n                        </div>\r\n                          <div class=\"account-from-block\">\r\n                            <form [formGroup]=\"userLoginForm\" (ngSubmit)=\"getUserLogin()\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email address\">\r\n                                </div>\r\n                                <div *ngFor=\"let validation of account_validation_messages.email\">\r\n                                    <span class=\"validation-error\"\r\n                                        *ngIf=\"userLoginForm.get('email').hasError(validation.type) && (userLoginForm.get('email').dirty || userLoginForm.get('email').touched)\">*{{validation.message}}</span>\r\n                                </div>\r\n                                <div class=\"form-group\"\r\n                                    [ngClass]=\"{'has-error':userLoginForm.get('email').invalid && (userLoginForm.get('email').dirty || userLoginForm.get('email').touched)}\">\r\n                                </div>\r\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                                <div *ngFor=\"let validation of account_validation_messages.password\">\r\n                                    <span class=\"validation-error\"\r\n                                        *ngIf=\"userLoginForm.get('password').hasError(validation.type) && (userLoginForm.get('password').dirty || userLoginForm.get('password').touched)\">*{{validation.message}}</span>\r\n                                </div>\r\n                                <div class=\"form-group account-from-btn-block custom-margin\">\r\n                                    <button type=\"submit\" class=\"btn primary_btn nm_btn\">SIGN IN</button>\r\n                                    <a data-target=\"#resetpass\" routerLinkActive=\"active\"  data-toggle=\"modal\"  class=\"link-btn\">Forgot Password?</a>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n<!-- </div> -->\r\n</div>\r\n<!-- <p-toast position=\"top-right\"></p-toast> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pricing/pricing.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pricing/pricing.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerPricingPricingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    <div class=\"container\">\r\n        <div class=\"require-wrap\">\r\n            <h3>What Service do you require?</h3>\r\n            <div class=\"search-wrap has-search\">\r\n                <span class=\"fa fa-search form-control-feedback\"></span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n<section class=\"price-list-wrap\">\r\n    <div class=\"container\">\r\n        <ul class=\"nav\" id=\"myTab\" role=\"tablist\">\r\n            <li *ngFor=\"let catList of categories; let i = index\"  class=\"nav-item\">\r\n                <!-- data-toggle=\"tab\" -->\r\n                <a class=\"nav-link hand\">\r\n                    <div class=\"icon-box-wrap\">\r\n                        <figure class=\"icon-wrap\">\r\n                            <img src=\"{{catList.image}}\" alt=\"category image\" (click)=\"getProductByCatId(catList.id);\">\r\n                        </figure>\r\n                        <h3>{{catList.name}}</h3>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            \r\n        </ul>\r\n\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n            <div class=\"tab-pane fade\" id=\"service-tab-1\">\r\n              \r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-2\">\r\n\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-3\">\r\n\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-4\">\r\n\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-5\">\r\n\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-6\">\r\n\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-7\">\r\n\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-8\">\r\n\r\n            </div>\r\n            <div>\r\n            <div class=\"tab-content\" id=\"myTabContent\">\r\n                <div class=\"tab-pane fade  show active\">\r\n                    <div class=\"row\" >\r\n                        <div *ngFor=\"let products of productOfCategory; let i =index\" class=\"col-sm-6 boxes\">\r\n                            <div class=\"product-outer\">\r\n                                <div class=\"image-outer\">\r\n                                <img src=\"{{products.image}}\">\r\n                                </div>\r\n                                <div class=\"content-area\">\r\n                                    <h3>{{products.name}}</h3>\r\n                                     <p class=\"contentScroll\">{{products.description}}</p>\r\n                                </div>\r\n                                \r\n                                <div class=\"bottom-text position-relative\">\r\n                                    <span class=\"quantity-badge d-flex justify-content-center align-items-center\">{{getQuantity(products.id,userId)}}</span>\r\n                                    <a (click)=\"addToCart(products,'minus')\" class=\"cust-cur\" [ngClass]=\"{'disabled' : getQuantity(products.id,userId) == 0}\"><span>-</span></a>\r\n                                  <div class=\"price-value\">£{{products.price}}</div>\r\n                                    <a (click)=\"addToCart(products,'plus')\" class=\"cust-cur\"><span>+</span></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                 </div>\r\n                </div>\r\n            <!-- <div class=\"tab-pane fade  show active\" id=\"service-tab-9\"> -->\r\n\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"tab_title col-md-11 offset-md-1\">\r\n                        <p><strong>Price List</strong></p>\r\n                    </div>\r\n                    <div class=\"col-md-5 offset-md-1\">\r\n                        <div class=\"price-list-box\">\r\n                            <ul>\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Apron - Press Only</span>\r\n                                        <span>£3.00</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Blanket - Press Only</span>\r\n                                        <span>£15.00</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Blouse - Press Only</span>\r\n                                        <span>£3.50</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Child’d Dress - Press Only </span>\r\n                                        <span>£4.75</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Child’s Item - Press Only</span>\r\n                                        <span>£2.50</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Child’s Jacket - Press Only</span>\r\n                                        <span>£2.95</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Child’s Jacket - Press Only</span>\r\n                                        <span>£2.50</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Child’s Trousers - Press Only</span>\r\n                                        <span>£1.80</span>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 \">\r\n                        <div class=\"price-list-box\">\r\n                            <ul>\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Napkin - Press Only</span>\r\n                                        <span>£1.00</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Napkin - Press Only</span>\r\n                                        <span>£6.90</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Pashmina</span>\r\n                                        <span>£5.80</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Pashmina - Press Only </span>\r\n                                        <span>£6.00</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Pillowcase - Press Only</span>\r\n                                        <span>£1.60</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Polo Shirt - Press Only</span>\r\n                                        <span>£3.00</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Pyjama Bottoms - Press Only</span>\r\n                                        <span>£3.00</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <div class=\"price-list-data\">\r\n                                        <span>Pyjama Top - Press Only</span>\r\n                                        <span>£3.00</span>\r\n                                    </div>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12 text-center find-looking-wrap\">\r\n                        <div class=\"title-heading\">\r\n                            <h3>CAN’T FIND WHAT YOU’RE LOOKING FOR?</h3>\r\n                            <p>If you have an item you would like us to take care of but can't see it listed please contact us to clarify the price.</p> <br />\r\n\r\n                            <p>The Minimum order is £15 you can give us fewer items and the order will be rounded up to £15. Collection and Delivery is FREE, a supplement of £10 will apply if you are not in for a collection or delivery.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n            <!-- </div> -->\r\n            <div class=\"tab-pane fade\" id=\"service-tab-10\">\r\n\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"service-tab-11\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"select-cart active\">\r\n    <div class=\"container\">\r\n       <div class=\"row\">\r\n           <div class=\"col-sm-7\">\r\n                   <h4>Minimum Order Value £{{minValue}}</h4>\r\n           </div>\r\n           <div class=\"col-sm-5 text-right\">\r\n               <h4>Total: £ 5.20</h4>\r\n           </div>    \r\n           <div class=\"col-sm-7\">\r\n               <a href=\"#\" class=\"support-here\">\r\n                 <span> <i class=\"fa fa-commenting\" aria-hidden=\"true\"></i></span>\r\n                   Support\r\n               </a>\r\n           </div> \r\n           <!-- routerLink=\"/checkout\" routerLinkActive=\"active\" -->\r\n             <div class=\"col-sm-5 text-right\">\r\n               <a class=\"your-basket hand\" *ngIf=\"!showSpkiItemDiv\" (click)=\"skipItem()\">\r\n                   Skip Item Selection<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n               </a>\r\n               <a class=\"your-basket\" routerLink=\"/basket\" routerLinkActive=\"active\" *ngIf=\"showSpkiItemDiv\">\r\n                   Your Basket <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n               </a>\r\n             </div>\r\n       </div>\r\n   </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/profile/profile.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/profile/profile.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <div class=\"photo-container\">\r\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\r\n                </div>\r\n                <h3 class=\"title\">Ryan Scheinder</h3>\r\n                <p class=\"category\">Photographer</p>\r\n                <div class=\"content\">\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>48</h2>\r\n                        <p>Bookmarks</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n          <div class=\"button-container\">\r\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\r\n                <i class=\"fab fa-instagram\"></i>\r\n              </a>\r\n          </div>\r\n          <h3 class=\"title\">About me</h3>\r\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"title text-center\">My Portfolio</h4>\r\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons design_image\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons location_world\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons sport_user-run\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer footer-default\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/about-us\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n                {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/referfriend/referfriend.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/referfriend/referfriend.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerReferfriendReferfriendComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <section class=\"banner refer-banner inner-banner\" style=\"background-image:url('assets/images/refer_friend.jpg')\">\r\n    <div class=\"container\">\r\n      <div class=\"banner-content\">\r\n        <h1>Refer a friend</h1>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n  <section class=\"refer-section\">\r\n   <div class=\"container\">\r\n    <div class=\"refer-sec-content\">\r\n      <h3>REFER A FRIEND TO RECEIVE A DISCOUNT YOU CAN BOTH ENJOY!</h3>\r\n  \r\n      <p>Your friend will get £10 off the first order she/he makes that is worth £15 or more <br />\r\n      and we’ll give you £10 off your next order, for each friend you refer.</p>\r\n    </div>\r\n  </div>\r\n  </section>\r\n  \r\n  <section class=\"how-it-work\">\r\n    <div class=\"container\">\r\n      <div class=\"how-it-work-inn dot_list\">\r\n        <div class=\"title-heading\">\r\n          <h3>HOW IT WORKS</h3>\r\n        </div>\r\n  \r\n        <ul>\r\n          <li>Start by Sending or sharing your Unique Referral Code with your friends either through email or social media. Get your Unique Referral Code HERE</li>\r\n          <li>Your friend will need to register with Spotlex</li>\r\n          <li>Once your friend places an order that is worth £15 or more you will receive a discount code to enter as you checkout and the value of £10 will be deducted from your order.</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <section>\r\n\r\n    <h1 style=\"text-align: center; margin-top: 10%;\">This page will be in Wordpress plateform</h1>\r\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/signup/signup.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/signup/signup.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tab-pane fade\" id=\"account-setting\" role=\"tabpanel\" aria-labelledby=\"dashboard-tabs-2\">\n    <div class=\"dashboard-tabs-content-box\">\n        <div class=\"dashboard-tabs-content-title\">\n            <h3>Account Details</h3>\n        </div>\n        <div class=\"dashboard-tabs-content-inn\">\n            <form [formGroup]=\"userSignupForm\" (ngSubmit)=\"signUp()\" class=\"row\">\n                <div class=\"col-md-5\">\n                    <div class=\"dashboard-form-wrap\">\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputState\" class=\"col-sm-3 col-form-label\">Select Address<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9\">\n                                <select id=\"inputState\" formControlName=\"address\" class=\"form-control arrow-down  form-control-lg\">\n                                    <option selected=\"\">Your Post Code</option>\n                                    <option>...</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.address\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('address').hasError(validation.type) && (userSignupForm.get('address').dirty || userSignupForm.get('address').touched)\">*{{validation.message}}</span>\n                        </div>\n                        <div class=\"form-group form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Post Code<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-6 input-group\">\n                                <input type=\"text\" formControlName=\"postcode\" class=\"form-control form-control-lg\"\n                                    placeholder=\"se187bg\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-1.png\"\n                                            alt=\"form-field-icon-1.png\" /></span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3 \">\n                                <button type=\"button\" class=\"btn w-100 h-100 find-btn btn-success\">Find <i\n                                        class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.postcode\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('postcode').hasError(validation.type) && (userSignupForm.get('postcode').dirty || userSignupForm.get('postcode').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Building Name or\n                                Number<span class=\"required\">*</span></label>\n                            <div class=\"col-sm-9 input-group\">\n                                <input type=\"text\" formControlName=\"building_name_no\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Building Name or Number\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-2.png\"\n                                            alt=\"form-field-icon-2.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.building_name_no\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('building_name_no').hasError(validation.type) && (userSignupForm.get('building_name_no').dirty || userSignupForm.get('building_name_no').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Street Name<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9  input-group\">\n                                <input type=\"text\"  formControlName=\"street_name\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Street Name\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-3.png\"\n                                            alt=\"form-field-icon-3.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.street_name\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('street_name').hasError(validation.type) && (userSignupForm.get('street_name').dirty || userSignupForm.get('street_name').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Town<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9  input-group\">\n                                <input type=\"text\"  formControlName=\"town\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Town\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-4.png\"\n                                            alt=\"form-field-icon-4.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.town\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('town').hasError(validation.type) && (userSignupForm.get('town').dirty || userSignupForm.get('town').touched)\">*{{validation.message}}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 offset-md-1\">\n                    <div class=\"dashboard-form-wrap\">\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputState\" class=\"col-sm-3 col-form-label\">First Name<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9 input-group\">\n                                <input type=\"text\" formControlName=\"first_name\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Enter Your First Name\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-5.png\"\n                                            alt=\"form-field-icon-5.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.first_name\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('first_name').hasError(validation.type) && (userSignupForm.get('first_name').dirty || userSignupForm.get('first_name').touched)\">*{{validation.message}}</span>\n                        </div>\n                        <div class=\"form-group form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Last Name<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9 input-group\">\n                                <input type=\"text\" formControlName=\"last_name\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Enter Your Last Name\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-5.png\"\n                                            alt=\"form-field-icon-5.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.last_name\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('last_name').hasError(validation.type) && (userSignupForm.get('last_name').dirty || userSignupForm.get('last_name').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Email Address<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9 input-group\">\n                                <input type=\"text\" formControlName=\"email\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Enter Your Email Address\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-6.png\"\n                                            alt=\"form-field-icon-6.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.email\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('email').hasError(validation.type) && (userSignupForm.get('email').dirty || userSignupForm.get('email').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Password<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9 input-group\">\n                                <input type=\"text\" formControlName=\"password\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Enter Your Current Password\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-7.png\"\n                                            alt=\"form-field-icon-7.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.password\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('password').hasError(validation.type) && (userSignupForm.get('password').dirty || userSignupForm.get('password').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Create New Password\n                            </label>\n                            <div class=\"col-sm-9 input-group\">\n                                <input type=\"text\" formControlName=\"new_password\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Enter Your New Password\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-8.png\"\n                                            alt=\"form-field-icon-8.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.new_password\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('new_password').hasError(validation.type) && (userSignupForm.get('new_password').dirty || userSignupForm.get('new_password').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Confirm Password\n                            </label>\n                            <div class=\"col-sm-9 input-group\">\n                                <input type=\"text\" formControlName=\"password_confirmation\" class=\"form-control form-control-lg\"\n                                    placeholder=\"Confirm Your New Password\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-8.png\"\n                                            alt=\"form-field-icon-8.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.password_confirmation\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('password_confirmation').hasError(validation.type) && (userSignupForm.get('password_confirmation').dirty || userSignupForm.get('password_confirmation').touched)\">*{{validation.message}}</span>\n                        </div>\n\n                        <div class=\"form-group  form-row\">\n                            <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Phone Number<span\n                                    class=\"required\">*</span></label>\n                            <div class=\"col-sm-9 input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon3\">\n                                        <select class=\"selectpicker\" data-width=\"fit\">\n                                            <option\n                                                data-content='<span class=\"flag-icon flag-icon-us\"></span>'>\n                                            </option>\n                                            <option\n                                                data-content='<span class=\"flag-icon flag-icon-mx\"></span>'>\n                                            </option>\n                                        </select>\n                                    </span>\n                                </div>\n                                <input type=\"text\" formControlName=\"phone_number\" class=\"form-control form-control-lg\"\n                                    placeholder=\"123 456 7890\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\"><img\n                                            src=\"assets/images/form-field-icon-9.png\"\n                                            alt=\"form-field-icon-9.png\" /></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"validation-error\" *ngFor=\"let validation of account_validation_messages.phone_number\">\n                            <span class=\"validation-error\"\n                                *ngIf=\"userSignupForm.get('phone_number').hasError(validation.type) && (userSignupForm.get('phone_number').dirty || userSignupForm.get('phone_number').touched)\">*{{validation.message}}</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-12\">\n                    <div class=\"buttons-outer text-center\">\n                        <button class=\"btn primary_border_btn nm_btn\" type=\"button\">Back</button>\n                        <button type=\"button\" (click)=\"signUp()\" class=\"btn primary_btn nm_btn\">Save Changes</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/track-driver/track-driver.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/track-driver/track-driver.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerTrackDriverTrackDriverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<agm-map \r\n  [latitude]=\"lat\"\r\n  [longitude]=\"lng\"\r\n  [zoom]=\"zoom\" (mapReady)=\"onMapReady($event)\">\r\n</agm-map>\r\n\r\n  <!-- <div class=\"controls\">\r\n    <button (click)=\"play()\">Play</button>\r\n    <button (click)=\"pause()\">Pause</button>\r\n    <button (click)=\"reset()\">Reset</button>\r\n    <button (click)=\"next()\">Next</button>\r\n    <button (click)=\"prev()\">Previous</button>\r\n    <button (click)=\"fast()\">Fast</button>\r\n    <span id=\"speed\">Speed: {{ speedMultiplier }}x</span>\r\n    <button (click)=\"slow()\">Slow</button>\r\n  </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\r\n    <div class=\"container \">\r\n        <p>© Spotlex Ltd 2019 - Company Registration No:11350371</p>\r\n    </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"row\">\r\n                <!--------Header Start---------->\r\n    <nav class=\"navbar navbar-expand-lg\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\"><img src=\"assets/images/logo.png\" alt=\"logo.png\" /></a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li *ngIf=\"!signInButton\" class=\"nav-item \">\r\n                        <a class=\"nav-link\"  routerLink=\"login\" routerLinkActive=\"active\">Sign In</a>\r\n                    </li>\r\n                    <li *ngIf=\"signInButton\" class=\"nav-item \">\r\n                        <a class=\"nav-link\"  routerLink=\"/dashboard\" routerLinkActive=\"active\">My Account</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" routerLink=\"#\" routerLinkActive=\"active\" >Pricing</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#how-it-works\">DOWNLOAD THE APP</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\">\r\n                        <!-- <a class=\"nav-link\" routerLink=\"/commercial\" routerLinkActive=\"active\">Commercial</a> -->\r\n                        <a class=\"nav-link\" href=\"http://52.56.145.178/index.php/commercial/\">Commercial</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\">\r\n                        <!-- <a class=\"nav-link\" routerLink=\"/refer-to-friend\" routerLinkActive=\"active\">Refer a friend</a> -->\r\n                        <a class=\"nav-link\" href=\"http://52.56.145.178/index.php/refer-a-friend\">Refer a friend</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\">\r\n                        <a *ngIf=\"!signInButton\" class=\"nav-link order_btn\" routerLink=\"/login\" routerLinkActive=\"active\">Order Now</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a *ngIf=\"signInButton\" class=\"nav-link order_btn hand\" (click)=\"logOut()\" routerLinkActive=\"active\">Logout</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n            <!-- End Navbar Transparent-->\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/scrolltotop/scrolltotop.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/scrolltotop/scrolltotop.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedScrolltotopScrolltotopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\r\n    <button (click)=\"scrollToTop()\">\r\n        <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\r\n\r\n    </button>\r\n  </div>";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(renderer, router, document, element, location, http) {
        _classCallCheck(this, AppComponent);

        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.http = http;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var navbar = this.element.nativeElement.children[0].children[0];
          this._router = this.router.events.filter(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }).subscribe(function (event) {
            if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
            } else {
              window.document.activeElement.scrollTop = 0;
            }

            _this.navbar.sidebarClose(); // event


            _this.renderer.listen('window', 'scroll', function () {
              var number = window.scrollY;

              var _location = _this.location.path();

              _location = _location.split('/')[2];

              if (number > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');
              } else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                // remove logic
                navbar.classList.add('navbar-transparent');
              }
            });
          });
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - currentScroll / 8);
            }
          })();
        }
      }, {
        key: "makeHttpCall",
        value: function makeHttpCall() {
          this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(function (r) {
            console.log(r);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])], AppComponent.prototype, "navbar", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _customer_customer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./customer/customer.module */
    "./src/app/customer/customer.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./interceptor/interceptor */
    "./src/app/interceptor/interceptor.ts");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/fesm2015/primeng-messages.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _shared_scrolltotop_scrolltotop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/scrolltotop/scrolltotop.component */
    "./src/app/shared/scrolltotop/scrolltotop.component.ts");
    /* harmony import */


    var _customer_track_driver_track_driver_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./customer/track-driver/track-driver.component */
    "./src/app/customer/track-driver/track-driver.component.ts");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/loader.service */
    "./src/app/services/loader.service.ts");
    /* harmony import */


    var _interceptor_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./interceptor/loader-interceptor.service */
    "./src/app/interceptor/loader-interceptor.service.ts");
    /* harmony import */


    var _components_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/my-loader/my-loader.component */
    "./src/app/components/my-loader/my-loader.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"); // this is needed!
    // import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _shared_scrolltotop_scrolltotop_component__WEBPACK_IMPORTED_MODULE_16__["ScrolltotopComponent"], _customer_track_driver_track_driver_component__WEBPACK_IMPORTED_MODULE_17__["TrackDriverComponent"], _components_my_loader_my_loader_component__WEBPACK_IMPORTED_MODULE_20__["MyLoaderComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _customer_customer_module__WEBPACK_IMPORTED_MODULE_7__["CustomerModule"], // FormControl,
      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_14__["MessagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
        // please get your own API key here:
        // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
        apiKey: 'AIzaSyAKgOi2zKNGl5XacmeTTjEL1wthOdF7DXU'
      }) // ToastModule,
      ],
      providers: [_services_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["LoaderInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_13__["MyInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/components.component */
    "./src/app/components/components.component.ts");
    /* harmony import */


    var _customer_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customer/landing/landing.component */
    "./src/app/customer/landing/landing.component.ts");
    /* harmony import */


    var _customer_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./customer/login/login.component */
    "./src/app/customer/login/login.component.ts");
    /* harmony import */


    var _customer_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./customer/profile/profile.component */
    "./src/app/customer/profile/profile.component.ts");
    /* harmony import */


    var _customer_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./customer/pricing/pricing.component */
    "./src/app/customer/pricing/pricing.component.ts");
    /* harmony import */


    var _customer_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./customer/dashboard/dashboard.component */
    "./src/app/customer/dashboard/dashboard.component.ts");
    /* harmony import */


    var _customer_commercial_commercial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./customer/commercial/commercial.component */
    "./src/app/customer/commercial/commercial.component.ts");
    /* harmony import */


    var _customer_referfriend_referfriend_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./customer/referfriend/referfriend.component */
    "./src/app/customer/referfriend/referfriend.component.ts");
    /* harmony import */


    var _customer_track_driver_track_driver_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./customer/track-driver/track-driver.component */
    "./src/app/customer/track-driver/track-driver.component.ts");
    /* harmony import */


    var _customer_basket_basket_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./customer/basket/basket.component */
    "./src/app/customer/basket/basket.component.ts");
    /* harmony import */


    var _customer_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./customer/checkout/checkout.component */
    "./src/app/customer/checkout/checkout.component.ts");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/auth.guard */
    "./src/app/shared/auth.guard.ts");
    /* harmony import */


    var _customer_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./customer/signup/signup.component */
    "./src/app/customer/signup/signup.component.ts");

    var routes = [// { path: '', redirectTo: '', pathMatch: 'full' },
    {
      path: '',
      component: _customer_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
      pathMatch: 'full',
      canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    }, {
      path: 'index',
      component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"]
    }, {
      path: 'login',
      component: _customer_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }, {
      path: 'profile',
      component: _customer_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
    }, {
      path: 'neworder',
      component: _customer_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"]
    }, {
      path: 'dashboard',
      component: _customer_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
      canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    }, {
      path: 'commercial',
      component: _customer_commercial_commercial_component__WEBPACK_IMPORTED_MODULE_11__["CommercialComponent"]
    }, {
      path: 'refer-to-friend',
      component: _customer_referfriend_referfriend_component__WEBPACK_IMPORTED_MODULE_12__["ReferfriendComponent"]
    }, {
      path: 'track-driver',
      component: _customer_track_driver_track_driver_component__WEBPACK_IMPORTED_MODULE_13__["TrackDriverComponent"]
    }, {
      path: 'basket',
      component: _customer_basket_basket_component__WEBPACK_IMPORTED_MODULE_14__["BasketComponent"]
    }, {
      path: 'checkout/:skip',
      component: _customer_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"]
    }, {
      path: 'checkout',
      component: _customer_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"]
    }, {
      path: 'signup',
      component: _customer_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"]
    }, {
      path: 'basket',
      component: _customer_basket_basket_component__WEBPACK_IMPORTED_MODULE_14__["BasketComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
      providers: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      exports: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/basicelements/basicelements.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/basicelements/basicelements.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBasicelementsBasicelementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/basicelements/basicelements.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/basicelements/basicelements.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BasicelementsComponent */

  /***/
  function srcAppComponentsBasicelementsBasicelementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function () {
      return BasicelementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BasicelementsComponent = /*#__PURE__*/function () {
      function BasicelementsComponent() {
        _classCallCheck(this, BasicelementsComponent);

        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
      }

      _createClass(BasicelementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dropdownList = [{
            "id": 1,
            "itemName": "Roman"
          }, {
            "id": 2,
            "itemName": "Paris"
          }, {
            "id": 3,
            "itemName": "Bucharest"
          }, {
            "id": 4,
            "itemName": "Rome"
          }, {
            "id": 5,
            "itemName": "New York"
          }, {
            "id": 6,
            "itemName": "Miami"
          }, {
            "id": 7,
            "itemName": "Piatra Neamt"
          }, {
            "id": 8,
            "itemName": "Paris"
          }, {
            "id": 9,
            "itemName": "Bucharest"
          }, {
            "id": 10,
            "itemName": "Rome"
          }, {
            "id": 11,
            "itemName": "New York"
          }, {
            "id": 12,
            "itemName": "Miami"
          }, {
            "id": 13,
            "itemName": "Piatra Neamt"
          }];
          this.selectedItems = [];
          this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
          };
          this.dropdownList1 = [{
            "id": 1,
            "itemName": "Roman"
          }, {
            "id": 2,
            "itemName": "Paris"
          }, {
            "id": 3,
            "itemName": "Bucharest"
          }, {
            "id": 4,
            "itemName": "Rome"
          }, {
            "id": 5,
            "itemName": "New York"
          }, {
            "id": 6,
            "itemName": "Miami"
          }, {
            "id": 7,
            "itemName": "Piatra Neamt"
          }, {
            "id": 8,
            "itemName": "Paris"
          }, {
            "id": 9,
            "itemName": "Bucharest"
          }, {
            "id": 10,
            "itemName": "Rome"
          }, {
            "id": 11,
            "itemName": "New York"
          }, {
            "id": 12,
            "itemName": "Miami"
          }, {
            "id": 13,
            "itemName": "Piatra Neamt"
          }];
          this.selectedItems1 = [];
          this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
          };
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
        }
      }]);

      return BasicelementsComponent;
    }();

    BasicelementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basicelements',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basicelements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basicelements.component.scss */
      "./src/app/components/basicelements/basicelements.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BasicelementsComponent);
    /***/
  },

  /***/
  "./src/app/components/components.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/components.component.ts ***!
    \****************************************************/

  /*! exports provided: ComponentsComponent */

  /***/
  function srcAppComponentsComponentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function () {
      return ComponentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rellax */
    "./node_modules/rellax/rellax.js");
    /* harmony import */


    var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

    var ComponentsComponent = /*#__PURE__*/function () {
      function ComponentsComponent(renderer, config) {
        _classCallCheck(this, ComponentsComponent);

        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
      }

      _createClass(ComponentsComponent, [{
        key: "isWeekend",
        value: function isWeekend(date) {
          var d = new Date(date.year, date.month - 1, date.day);
          return d.getDay() === 0 || d.getDay() === 6;
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(date, current) {
          return date.month !== current.month;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.add('navbar-transparent');
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('index-page');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.remove('navbar-transparent');
          var body = document.getElementsByTagName('body')[0];
          body.classList.remove('index-page');
        }
      }]);

      return ComponentsComponent;
    }();

    ComponentsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]
      }];
    };

    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-components',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./components.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html"))["default"],
      styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])], ComponentsComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-nouislider */
    "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
    /* harmony import */


    var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/fesm2015/jw-bootstrap-switch-ng2.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./basicelements/basicelements.component */
    "./src/app/components/basicelements/basicelements.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components.component */
    "./src/app/components/components.component.ts");
    /* harmony import */


    var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./notification/notification.component */
    "./src/app/components/notification/notification.component.ts");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/components/modal/modal.component.ts"); // import { MyLoaderComponent } from './my-loader/my-loader.component';


    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]],
      declarations: [_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"], _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalBasic"]],
      exports: [_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/modal/modal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/modal/modal.component.ts ***!
    \*****************************************************/

  /*! exports provided: NgbdModalBasic */

  /***/
  function srcAppComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function () {
      return NgbdModalBasic;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var NgbdModalBasic = /*#__PURE__*/function () {
      function NgbdModalBasic(modalService) {
        _classCallCheck(this, NgbdModalBasic);

        this.modalService = modalService;
      }

      _createClass(NgbdModalBasic, [{
        key: "open",
        value: function open(content, type, modalDimension) {
          var _this2 = this;

          if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, {
              windowClass: 'modal-mini modal-primary',
              size: 'sm'
            }).result.then(function (result) {
              _this2.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
            });
          } else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, {
              windowClass: 'modal-login modal-primary'
            }).result.then(function (result) {
              _this2.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
            });
          } else {
            this.modalService.open(content).result.then(function (result) {
              _this2.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
            });
          }
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return NgbdModalBasic;
    }();

    NgbdModalBasic.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    NgbdModalBasic = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngbd-modal-component',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], NgbdModalBasic);
    /***/
  },

  /***/
  "./src/app/components/my-loader/my-loader.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/my-loader/my-loader.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyLoaderMyLoaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* my-loader.component.css */\r\n.loading-spinner{    \r\n    background-color: none;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: grid;\r\n    z-index: 99999;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1sb2FkZXIvbXktbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktbG9hZGVyL215LWxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbXktbG9hZGVyLmNvbXBvbmVudC5jc3MgKi9cclxuLmxvYWRpbmctc3Bpbm5lcnsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/my-loader/my-loader.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/my-loader/my-loader.component.ts ***!
    \*************************************************************/

  /*! exports provided: MyLoaderComponent */

  /***/
  function srcAppComponentsMyLoaderMyLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLoaderComponent", function () {
      return MyLoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/loader.service */
    "./src/app/services/loader.service.ts");

    var MyLoaderComponent = /*#__PURE__*/function () {
      function MyLoaderComponent(loaderService) {
        var _this3 = this;

        _classCallCheck(this, MyLoaderComponent);

        this.loaderService = loaderService;
        this.loaderService.isLoading.subscribe(function (v) {
          // console.log(v);
          _this3.loading = v;
        });
      }

      _createClass(MyLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyLoaderComponent;
    }();

    MyLoaderComponent.ctorParameters = function () {
      return [{
        type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    MyLoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-loader',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-loader/my-loader.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-loader.component.css */
      "./src/app/components/my-loader/my-loader.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])], MyLoaderComponent);
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/components/navigation/navigation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/notification/notification.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/notification/notification.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotificationNotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/notification/notification.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/notification/notification.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppComponentsNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationComponent = /*#__PURE__*/function () {
      function NotificationComponent() {
        _classCallCheck(this, NotificationComponent);

        this.alerts = [];
        this.alerts.push({
          id: 1,
          type: 'success',
          strong: 'Well done!',
          message: 'You successfully read this important alert message.',
          icon: 'ui-2_like'
        }, {
          id: 2,
          strong: 'Heads up!',
          type: 'info',
          message: 'This is an info alert',
          icon: 'travel_info'
        }, {
          id: 3,
          type: 'warning',
          strong: 'Warning!',
          message: 'This is a warning alert',
          icon: 'ui-1_bell-53'
        }, {
          id: 4,
          type: 'danger',
          strong: 'Oh snap!',
          message: 'This is a danger alert',
          icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) {
          return Object.assign({}, alert);
        });
      }

      _createClass(NotificationComponent, [{
        key: "closeAlert",
        value: function closeAlert(alert) {
          var index = this.alerts.indexOf(alert);
          this.alerts.splice(index, 1);
        }
      }]);

      return NotificationComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notification.component.scss */
      "./src/app/components/notification/notification.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NotificationComponent);
    /***/
  },

  /***/
  "./src/app/customer/basket/basket.component.css":
  /*!******************************************************!*\
    !*** ./src/app/customer/basket/basket.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerBasketBasketComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-clr{\r\n    background-color: #e8f7ff;\r\n}\r\n\r\n.hand{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jbHJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmN2ZmO1xyXG59XHJcblxyXG4uaGFuZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/customer/basket/basket.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/basket/basket.component.ts ***!
    \*****************************************************/

  /*! exports provided: BasketComponent */

  /***/
  function srcAppCustomerBasketBasketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketComponent", function () {
      return BasketComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/validation.service */
    "./src/app/services/validation.service.ts");
    /* harmony import */


    var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var BasketComponent = /*#__PURE__*/function () {
      function BasketComponent(formBuilder, authservice, route, toastr) {
        _classCallCheck(this, BasketComponent);

        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.route = route;
        this.toastr = toastr;
        this.post_code = '';
        this.account_validation_messages = app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].account_validation_messages;
        this.informationForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_!#$%&\'*+/=? \\"`{|}~^.-]+@[a-zA-Z0-9.-]+$'), app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].avoidEmptyStrigs]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
          street_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          town: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          building_name_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(BasketComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserData();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this4 = this;

          this.authservice.getUser().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.userId = res['data'].id;
                        this.informationForm.patchValue(res['data']);
                        this.getCartItems(res['data'].id);
                      } else {}

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (error) {
            _this4.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
          });
        }
      }, {
        key: "getCartItems",
        value: function getCartItems(userId) {
          var _this5 = this;

          this.authservice.getCartItems(userId).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.CartItemsData = res['CartData'];
                        this.totalItems = res['quantity_count'];
                        this.totalPrice = 0;
                        res['CartData'].forEach(function (element) {
                          var total = 0;

                          for (var i = 0; i < element.price.length; i++) {
                            total += element.price[i];
                          }

                          _this6.totalPrice = total;
                        });
                      } else {}

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (error) {
            _this5.toastr.error(error.error.message, 'Spotlex');
          });
        } // totalItemsPrice(votes) {
        //    console.log(votes, 'asdsadsdgaskdgak')
        // }

      }, {
        key: "EditAddress",
        value: function EditAddress() {
          var _this7 = this;

          this.authservice.updateAddress(this.informationForm.value).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.toastr.success(res['message'], 'Update Address!');
                      } else {
                        this.toastr.error(res['message'], 'Update Address!');
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }, function (error) {
            _this7.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
          });
        }
      }, {
        key: "goToCheckout",
        value: function goToCheckout() {
          // this.route.navigate(['/ckeckout', this.totalPrice]);
          this.route.navigate(['/checkout']);
        }
      }, {
        key: "checkPostCode",
        value: function checkPostCode() {
          var _this8 = this;

          this.authservice.checkPostCode({
            post_code: this.post_code
          }).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.toastr.success(res['message'], 'Spotlex');
                        this.informationForm.patchValue({
                          address: res['data'].full_address,
                          street_name: res['data'].route,
                          town: res['data'].postal_town
                        });
                      } else {}

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (error) {
            _this8.toastr.error(error.error.message, 'Update Address!');
          });
        }
      }, {
        key: "removeItem",
        value: function removeItem(id, i) {
          var _this9 = this;

          console.log(id, 'datadatadatadatadatadata');
          this.authservice.removeItems({
            id: id
          }).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.CartItemsData = res['CartData'];
                        this.totalItems = res['quantity_count'];
                        this.totalPrice = 0;
                        res['CartData'].forEach(function (element) {
                          var total = 0; // tslint:disable-next-line:no-shadowed-variable

                          for (var _i = 0; _i < element.price.length; _i++) {
                            total += element.price[_i];
                          }

                          _this10.totalPrice = total;
                        });
                      } else {}

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }, function (error) {
            _this9.toastr.error(error.error.message, 'Update Address!');
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          window.history.go(-1);
          return false;
        }
      }]);

      return BasketComponent;
    }();

    BasketComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    BasketComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basket',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basket.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/basket/basket.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basket.component.css */
      "./src/app/customer/basket/basket.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])], BasketComponent);
    /***/
  },

  /***/
  "./src/app/customer/checkout/checkout.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/customer/checkout/checkout.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerCheckoutCheckoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hand{\r\ncursor: pointer;    \r\n}\r\n.validation-error{\r\n    color:red;\r\n}\r\n.success-msg{\r\n    color:green;\r\n}\r\n.gray {\r\n    background-color: #d1cbcb;\r\n}\r\nbody {\r\n  padding: 60px 0;\r\n  background-color: rgba(178,209,229,0.7);\r\n  margin: 0 auto;\r\n  width: 600px;\r\n}\r\n.body-text {\r\n  padding: 0 20px 30px 20px;\r\n  font-family: \"Roboto\";\r\n  font-size: 1em;\r\n  color: #333;\r\n  text-align: center;\r\n  line-height: 1.2em;\r\n}\r\n.form-container {\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.card-wrapper {\r\n  background-color: #6FB7E9;\r\n  width: 100%;\r\n  display: flex;\r\n\r\n}\r\n.personal-information {\r\n  background-color: #3C8DC5;\r\n  color: #fff;\r\n  padding: 1px 0;\r\n  text-align: center;\r\n}\r\nh1 {\r\n  font-size: 1.3em;\r\n  font-family: \"Roboto\"\r\n}\r\ninput {\r\n  margin: 1px 0;\r\n  padding-left: 3%;\r\n  font-size: 14px;\r\n}\r\ninput[type=\"text\"]{\r\n  display: block;\r\n  height: 50px;\r\n  width: 97%;\r\n  border: none;\r\n}\r\ninput[type=\"email\"]{\r\n  display: block;\r\n  height: 50px;\r\n  width: 97%;\r\n  border: none;\r\n}\r\ninput[type=\"submit\"]{\r\n  display: block;\r\n  height: 60px;\r\n  width: 100%;\r\n  border: none;\r\n  background-color: #3C8DC5;\r\n  color: #fff;\r\n  margin-top: 2px;\r\n  curson: pointer;\r\n  font-size: 0.9em;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"]:hover{\r\n  background-color: #6FB7E9;\r\n  transition: 0.3s ease;\r\n}\r\n#column-left {\r\n  width: 46.8%;\r\n  float: left;\r\n  margin-bottom: 2px;\r\n}\r\n#column-right {\r\n  width: 46.8%;\r\n  float: right;\r\n}\r\n@media only screen and (max-width: 480px){\r\n  body {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n  .form-container {\r\n    margin: 0 2%;\r\n  }\r\n  input {\r\n    font-size: 1em;\r\n  }\r\n  #input-button {\r\n    width: 100%;\r\n  }\r\n  #input-field {\r\n    width: 96.5%;\r\n  }\r\n  h1 {\r\n    font-size: 1.2em;\r\n  }\r\n  input {\r\n    margin: 2px 0;\r\n  }\r\n  input[type=\"submit\"]{\r\n    height: 50px;\r\n  }\r\n  #column-left {\r\n    width: 96.5%;\r\n    display: block;\r\n    float: none;\r\n  }\r\n  #column-right {\r\n    width: 96.5%;\r\n    display: block;\r\n    float: none;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUlBO0VBQ0UsZUFBZTtFQUNmLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTs7QUFFZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmR7XHJcbmN1cnNvcjogcG9pbnRlcjsgICAgXHJcbn1cclxuLnZhbGlkYXRpb24tZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLnN1Y2Nlc3MtbXNne1xyXG4gICAgY29sb3I6Z3JlZW47XHJcbn1cclxuLmdyYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxY2JjYjtcclxufVxyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsOTAwLDcwMCw1MDApO1xyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LDIwOSwyMjksMC43KTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNjAwcHg7XHJcbn1cclxuLmJvZHktdGV4dCB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDMwcHggMjBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXJkLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2RkI3RTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuLnBlcnNvbmFsLWluZm9ybWF0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M4REM1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDFweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIlxyXG59XHJcbmlucHV0IHtcclxuICBtYXJnaW46IDFweCAwO1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogOTclO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl17XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA5NyU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M4REM1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBjdXJzb246IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2RkI3RTk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG59XHJcbiNjb2x1bW4tbGVmdCB7XHJcbiAgd2lkdGg6IDQ2LjglO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG4jY29sdW1uLXJpZ2h0IHtcclxuICB3aWR0aDogNDYuOCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICBib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgMiU7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICAjaW5wdXQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjaW5wdXQtZmllbGQge1xyXG4gICAgd2lkdGg6IDk2LjUlO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW46IDJweCAwO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAjY29sdW1uLWxlZnQge1xyXG4gICAgd2lkdGg6IDk2LjUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgI2NvbHVtbi1yaWdodCB7XHJcbiAgICB3aWR0aDogOTYuNSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/customer/checkout/checkout.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/customer/checkout/checkout.component.ts ***!
    \*********************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppCustomerCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/services/validation.service */
    "./src/app/services/validation.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent(formBuilder, authservice, route, toastr, activatedRoute) {
        _classCallCheck(this, CheckoutComponent);

        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.route = route;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.account_validation_messages = app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].account_validation_messages;
        this.isCouponCode = false;
        this.skipItemSelection = false;
        this.minDate = new Date();
        this.value = new Date();
        this.couponForm = this.formBuilder.group({
          coupon_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.AddCardForm = this.formBuilder.group({
          name_on_card: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          card_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          expiry_month: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          expiry_year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var skipItemSelection = this.activatedRoute.snapshot.params.skip;

          if (skipItemSelection) {
            this.isSkipItem = atob(skipItemSelection);
            this.skipItemSelection = true;
            this.finalPrice = 15;
          }

          this.getUserData();
        }
        /**
        * Function to validate all form fields
        * @param formGroup
        */

      }, {
        key: "validateAllFormFields",
        value: function validateAllFormFields(formGroup) {
          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            control.markAsTouched({
              onlySelf: true
            });
            control.markAsDirty({
              onlySelf: true
            });
          });
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this11 = this;

          this.authservice.getUser().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.userId = res['data'].id;
                        this.getPrice(res['data'].id);
                      } else {}

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }, function (error) {
            _this11.toastr.error(error.error.message, 'Spotlex!');
          });
        }
      }, {
        key: "getPrice",
        value: function getPrice(userId) {
          var _this12 = this;

          this.authservice.getCartItems(userId).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.finalPrice = 0;
                        res['CartData'].forEach(function (element) {
                          var total = 0;

                          for (var i = 0; i < element.price.length; i++) {
                            total = element.price;
                          }

                          _this13.finalPrice = total;
                        });
                      } else {}

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }, function (error) {
            _this12.toastr.error(error.error.message, 'Spotlex!');
          });
        }
      }, {
        key: "applyCoupon",
        value: function applyCoupon() {
          var _this14 = this;

          if (this.couponForm.invalid) {
            this.validateAllFormFields(this.couponForm);
            return true;
          } else {
            this.isCouponCode = this.couponForm.value.coupon_code;
            this.authservice.applyCoupon({
              'couponcode': this.couponForm.value,
              'actual_price': this.finalPrice
            }).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (res['status'] === true) {
                          // tslint:disable-next-line:radix
                          this.finalPrice = this.finalPrice - parseInt(res['couponData'].discount);
                          this.isCouponCode = true;
                          this.toastr.success(res['message'], 'Spotlex!');
                        } else {
                          this.isCouponCode = false;
                          this.toastr.error(res['message'], 'Spotlex!');
                        }

                      case 1:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }, function (error) {
              _this14.toastr.error(error.error.message, 'Spotlex!');
            });
          }
        }
      }, {
        key: "onDateSelected",
        value: function onDateSelected(e, type) {
          var _this15 = this;

          var newDate = e.toLocaleDateString();

          if (type === 0) {
            this.collectionDateTime = e;
            this.displayDelivery = false;
            this.authservice.getTimeSlot({
              collection_date: newDate
            }).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (res['status'] === true) {
                          this.collectionSlot = res['timeslot'];
                          this.displayCollection = true;
                        } else {}

                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            }, function (error) {
              _this15.toastr.error(error.error.message, 'Spotlex!');
            });
          } else {
            this.deliveryDateTime = e;
            this.displayCollection = false;
            this.authservice.getTimeSlot({
              delivery_date: newDate
            }).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (res['status'] === true) {
                          this.deliverySlot = res['timeslot'];
                          this.displayDelivery = true;
                        } else {}

                      case 1:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            }, function (error) {
              _this15.toastr.error(error.error.message, 'Spotlex!');
            });
          }
        }
      }, {
        key: "addCardDetails",
        value: function addCardDetails() {
          if (!this.deliveryDate || !this.collectionDate) {
            this.toastr.error('Please select Collection date and time or Delivery date and time', 'Spotlex!');
            return;
          } else {
            this.addCard = true;
          }
        }
      }, {
        key: "addCardToPay",
        value: function addCardToPay() {
          var _this16 = this;

          if (this.AddCardForm.invalid) {
            this.validateAllFormFields(this.AddCardForm);
            return true;
          } else {
            this.authservice.addCardToPay(this.AddCardForm.value).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (res['status'] === true) {
                          this.cardToken = res['card_token'];
                          this.toastr.info('please wait... do not refresh and back your browser!', 'Spotlex!');
                          this.checkOut();
                        } else {
                          this.toastr.error(res['message'], 'Spotlex!');
                        }

                      case 1:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }, function (error) {
              _this16.toastr.error(error.error.message, 'Spotlex!');
            });
          }
        }
      }, {
        key: "checkOut",
        value: function checkOut() {
          var _this17 = this;

          var payLoad = {
            'is_couponcode': this.isCouponCode,
            'card_token': this.cardToken,
            'cleaningInstructions': this.delivery_notes,
            'delivery_notes': this.delivery_notes,
            'delivery_slot_id': this.deliverySlotId,
            'collection_slot_id': this.collectionSlotId,
            'delivery_time': this.deliveryTime,
            'delivery_date': this.deliveryDate,
            'collection_time': this.collectionTime,
            'collection_date': this.collectionDate,
            'user_id': this.userId,
            'final_price': this.finalPrice,
            'actual_price': this.finalPrice,
            'couponcode': this.isCouponCode ? this.isCouponCode : '',
            'is_skip_items': this.skipItemSelection
          };
          console.log(payLoad, 'payLoadpayLoadpayLoadpayLoadpayLoadpayLoad');
          this.authservice.checkOut(payLoad).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.addCard = false;
                        this.toastr.success(res['message'], 'Spotlex!');
                      } else {
                        this.toastr.error(res['message'], 'Spotlex!');
                      }

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }, function (error) {
            _this17.toastr.error('error', 'Spotlex', error.error.message);
          });
        }
      }, {
        key: "selectedCollectionSlot",
        value: function selectedCollectionSlot(slotData) {
          console.log(slotData, 'poiutghfxhsfdhsagfdhasdfashgdfashdagfsdhgadasd');

          if (slotData.blocked_collection_slot === 0) {
            this.collectionSlotId = slotData.id;
            this.setCollectionSlotValue = slotData.collection_time_start + '-' + slotData.collection_time_end;
            this.collectionDate = slotData.collection_date;
            this.collectionTime = slotData.collection_time_start + '-' + slotData.collection_time_end;
          }

          if (slotData.blocked_collection_slot === 1) {
            alert('this timeslot is not available');
          }
        }
      }, {
        key: "selectedDeliverySlot",
        value: function selectedDeliverySlot(slotData) {
          console.log(slotData, 'poiutghfxhsfdhsagfdhasdfashgdfashdagfsdhgadasd');

          if (slotData.blocked_delivery_slot === 0) {
            this.setDeliverySlotValue = slotData.delivery_time_start + '-' + slotData.delivery_time_end;
            this.deliveryDate = slotData.collection_date;
            this.deliveryTime = slotData.collection_time_start + '-' + slotData.collection_time_end;
            this.deliverySlotId = slotData.id;
          }

          if (slotData.blocked_delivery_slot === 1) {
            alert('this timeslot is not available');
            return;
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          window.history.go(-1);
          return false;
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    CheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/checkout/checkout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./checkout.component.css */
      "./src/app/customer/checkout/checkout.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], CheckoutComponent);
    /***/
  },

  /***/
  "./src/app/customer/commercial/commercial-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/customer/commercial/commercial-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: CommercialRoutingModule */

  /***/
  function srcAppCustomerCommercialCommercialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommercialRoutingModule", function () {
      return CommercialRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var CommercialRoutingModule = function CommercialRoutingModule() {
      _classCallCheck(this, CommercialRoutingModule);
    };

    CommercialRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommercialRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer/commercial/commercial.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/customer/commercial/commercial.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerCommercialCommercialComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2NvbW1lcmNpYWwvY29tbWVyY2lhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer/commercial/commercial.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/customer/commercial/commercial.component.ts ***!
    \*************************************************************/

  /*! exports provided: CommercialComponent */

  /***/
  function srcAppCustomerCommercialCommercialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommercialComponent", function () {
      return CommercialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommercialComponent = /*#__PURE__*/function () {
      function CommercialComponent() {
        _classCallCheck(this, CommercialComponent);
      }

      _createClass(CommercialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommercialComponent;
    }();

    CommercialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-commercial',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./commercial.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/commercial/commercial.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./commercial.component.css */
      "./src/app/customer/commercial/commercial.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CommercialComponent);
    /***/
  },

  /***/
  "./src/app/customer/commercial/commercial.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/customer/commercial/commercial.module.ts ***!
    \**********************************************************/

  /*! exports provided: CommercialModule */

  /***/
  function srcAppCustomerCommercialCommercialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommercialModule", function () {
      return CommercialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _commercial_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./commercial-routing.module */
    "./src/app/customer/commercial/commercial-routing.module.ts");
    /* harmony import */


    var _commercial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./commercial.component */
    "./src/app/customer/commercial/commercial.component.ts");

    var CommercialModule = function CommercialModule() {
      _classCallCheck(this, CommercialModule);
    };

    CommercialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_commercial_component__WEBPACK_IMPORTED_MODULE_4__["CommercialComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _commercial_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommercialRoutingModule"]]
    })], CommercialModule);
    /***/
  },

  /***/
  "./src/app/customer/customer.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/customer/customer.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerCustomerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer/customer.component.ts":
  /*!************************************************!*\
    !*** ./src/app/customer/customer.component.ts ***!
    \************************************************/

  /*! exports provided: CustomerComponent */

  /***/
  function srcAppCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomerComponent = /*#__PURE__*/function () {
      function CustomerComponent() {
        _classCallCheck(this, CustomerComponent);
      }

      _createClass(CustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('customer....');
        }
      }]);

      return CustomerComponent;
    }();

    CustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-examples',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customer.component.scss */
      "./src/app/customer/customer.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CustomerComponent);
    /***/
  },

  /***/
  "./src/app/customer/customer.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/customer/customer.module.ts ***!
    \*********************************************/

  /*! exports provided: CustomerModule */

  /***/
  function srcAppCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerModule", function () {
      return CustomerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-nouislider */
    "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
    /* harmony import */


    var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/fesm2015/jw-bootstrap-switch-ng2.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/customer/landing/landing.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/customer/login/login.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/customer/profile/profile.component.ts");
    /* harmony import */


    var _customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./customer.component */
    "./src/app/customer/customer.component.ts");
    /* harmony import */


    var _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pricing/pricing.module */
    "./src/app/customer/pricing/pricing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard/dashboard.module */
    "./src/app/customer/dashboard/dashboard.module.ts");
    /* harmony import */


    var _commercial_commercial_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./commercial/commercial.module */
    "./src/app/customer/commercial/commercial.module.ts");
    /* harmony import */


    var _referfriend_referfriend_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./referfriend/referfriend.module */
    "./src/app/customer/referfriend/referfriend.module.ts");
    /* harmony import */


    var _basket_basket_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./basket/basket.component */
    "./src/app/customer/basket/basket.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/customer/checkout/checkout.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/customer/signup/signup.component.ts");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/fesm2015/primeng-calendar.js");
    /* harmony import */


    var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/dynamicdialog */
    "./node_modules/primeng/fesm2015/primeng-dynamicdialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_listbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/listbox */
    "./node_modules/primeng/fesm2015/primeng-listbox.js");

    var CustomerModule = function CustomerModule() {
      _classCallCheck(this, CustomerModule);
    };

    CustomerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__["NouisliderModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"], _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_11__["PricingModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"], _commercial_commercial_module__WEBPACK_IMPORTED_MODULE_13__["CommercialModule"], _referfriend_referfriend_module__WEBPACK_IMPORTED_MODULE_14__["ReferfriendModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__["DynamicDialogModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_21__["ToastModule"], primeng_listbox__WEBPACK_IMPORTED_MODULE_22__["ListboxModule"]],
      declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _customer_component__WEBPACK_IMPORTED_MODULE_10__["CustomerComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _basket_basket_component__WEBPACK_IMPORTED_MODULE_15__["BasketComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"]]
    })], CustomerModule);
    /***/
  },

  /***/
  "./src/app/customer/dashboard/dashboard-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/customer/dashboard/dashboard-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppCustomerDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer/dashboard/dashboard.component.css":
  /*!************************************************************!*\
    !*** ./src/app/customer/dashboard/dashboard.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".validation-error{\r\n    text-align: center !important;\r\n    color: #ff0000;\r\n    /* padding: 1px 91px 0px 1px; */\r\n}\r\n.dashboard-inner>ul{\r\n    margin-left: -15px;\r\n    margin-right: -15px;\r\n}\r\n.dashboard-inner>ul>li{\r\n    margin: 0;\r\n    padding: 0 15px 30px;\r\n    width:100%;\r\n}\r\n.dashboard-menu-box{width:auto;}\r\n.dashboard-inner>ul>li:last-child {position: static;}\r\n.dashboard-inner>ul>li:last-child .chat-support-wrap{bottom: 0; right:0; left:auto; top:auto; z-index: 999999; position: fixed;}\r\n@media (min-width:650px){\r\n    .dashboard-inner>ul>li{\r\n        flex:0 0 50%;\r\n        max-width: 50%;\r\n    }\r\n}\r\n@media (min-width:991px){\r\n    .dashboard-inner>ul>li{\r\n        flex:0 0 33.33%;\r\n        max-width: 33.33%;\r\n    }\r\n}\r\n@media (min-width:1200px){\r\n    .dashboard-inner>ul>li{\r\n        flex:0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n}\r\n.hand{\r\n    cursor: pointer;\r\n}\r\n.cust-clr{\r\n    color: white;\r\n}\r\nbody {\r\n    padding: 2em;\r\n    font-family: sans-serif;\r\n  }\r\n.box {\r\n      text-align: center;\r\n  }\r\n.coupon {\r\n      display: inline-block;\r\n      border: 1px dashed #000;\r\n      padding: 0.8em 1.2em;\r\n      position: relative;\r\n      font-weight: bold;\r\n      background: #FFC107;\r\n  }\r\nspan.scissors {\r\n      position: absolute;\r\n      top: -12px;\r\n      right: 0;\r\n  }\r\n.inner {\r\n      display: inline-block;\r\n      border: 1px solid #e8dddd;\r\n      padding: 1.2em 2.2em 2.2em 2.2em;\r\n  }\r\n.mr-lf{\r\n    margin-left: 117px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsVUFBVTtBQUNkO0FBRUEsb0JBQW9CLFVBQVUsQ0FBQztBQUMvQixtQ0FBbUMsZ0JBQWdCLENBQUM7QUFDcEQscURBQXFELFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO0FBRS9IO0lBQ0k7UUFFSSxZQUFZO1FBQ1osY0FBYztJQUNsQjtBQUNKO0FBRUE7SUFDSTtRQUVJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFFSSxZQUFZO1FBQ1osY0FBYztJQUNsQjtBQUNKO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBR0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCO0FBQ0E7TUFDSSxrQkFBa0I7RUFDdEI7QUFDQTtNQUNJLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIsb0JBQW9CO01BQ3BCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsbUJBQW1CO0VBQ3ZCO0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFFBQVE7RUFDWjtBQUNBO01BQ0kscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6QixnQ0FBZ0M7RUFDcEM7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9ye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIC8qIHBhZGRpbmc6IDFweCA5MXB4IDBweCAxcHg7ICovXHJcbn1cclxuLmRhc2hib2FyZC1pbm5lcj51bHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaW5uZXI+dWw+bGl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMzBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtbWVudS1ib3h7d2lkdGg6YXV0bzt9XHJcbi5kYXNoYm9hcmQtaW5uZXI+dWw+bGk6bGFzdC1jaGlsZCB7cG9zaXRpb246IHN0YXRpYzt9XHJcbi5kYXNoYm9hcmQtaW5uZXI+dWw+bGk6bGFzdC1jaGlsZCAuY2hhdC1zdXBwb3J0LXdyYXB7Ym90dG9tOiAwOyByaWdodDowOyBsZWZ0OmF1dG87IHRvcDphdXRvOyB6LWluZGV4OiA5OTk5OTk7IHBvc2l0aW9uOiBmaXhlZDt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo2NTBweCl7XHJcbiAgICAuZGFzaGJvYXJkLWlubmVyPnVsPmxpe1xyXG4gICAgICAgIC1tcy1mbGV4OjAgMCA1MCU7XHJcbiAgICAgICAgZmxleDowIDAgNTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTFweCl7XHJcbiAgICAuZGFzaGJvYXJkLWlubmVyPnVsPmxpe1xyXG4gICAgICAgIC1tcy1mbGV4OjAgMCAzMy4zMyU7XHJcbiAgICAgICAgZmxleDowIDAgMzMuMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMuMzMlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpe1xyXG4gICAgLmRhc2hib2FyZC1pbm5lcj51bD5saXtcclxuICAgICAgICAtbXMtZmxleDowIDAgMjUlO1xyXG4gICAgICAgIGZsZXg6MCAwIDI1JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmhhbmR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmN1c3QtY2xye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvdXBvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICMwMDA7XHJcbiAgICAgIHBhZGRpbmc6IDAuOGVtIDEuMmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xyXG4gIH1cclxuICBcclxuICBzcGFuLnNjaXNzb3JzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICByaWdodDogMDtcclxuICB9XHJcbiAgLmlubmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThkZGRkO1xyXG4gICAgICBwYWRkaW5nOiAxLjJlbSAyLjJlbSAyLjJlbSAyLjJlbTtcclxuICB9XHJcblxyXG4gIC5tci1sZntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTdweDtcclxuICB9XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/customer/dashboard/dashboard.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/customer/dashboard/dashboard.component.ts ***!
    \***********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppCustomerDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/validation.service */
    "./src/app/services/validation.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(formBuilder, authservice, route, toastr) {
        _classCallCheck(this, DashboardComponent);

        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.route = route;
        this.toastr = toastr;
        this.post_code = '';
        this.account_validation_messages = _services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].account_validation_messages;
        this.showSupport = false;
        this.userInfoForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_!#$%&\'*+/=? \\"`{|}~^.-]+@[a-zA-Z0-9.-]+$'), _services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].avoidEmptyStrigs]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
          postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
          password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
          first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
          street_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          town: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          building_name_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserData();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this18 = this;

          this.authservice.getUser().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.loyalityPoint = res['data'].loyalty_point;
                        this.userId = res['data'].id;
                        this.userInfoForm.patchValue(res['data']);
                      } else {}

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }, function (error) {
            _this18.toastr.success(error.error.message);
          });
        }
      }, {
        key: "updateUserInfo",
        value: function updateUserInfo() {
          var _this19 = this;

          if (this.userInfoForm.invalid) {
            this.validateAllFormFields(this.userInfoForm);
            return true;
          } else {
            this.authservice.updateAddress(this.userInfoForm.value).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        if (res['status'] === true) {
                          this.toastr.success(res['message']);
                        } else {
                          this.toastr.error(res['message'], 'Spotlex');
                        }

                      case 1:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));
            }, function (error) {
              _this19.toastr.error(error.error.message, 'Spotlex');
            });
          }
        }
      }, {
        key: "showChat",
        value: function showChat() {
          this.showSupport = true;
        }
      }, {
        key: "closeChat",
        value: function closeChat() {
          this.showSupport = false;
        }
      }, {
        key: "getCouponVoucher",
        value: function getCouponVoucher() {
          var _this20 = this;

          this.authservice.getCoupon().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.Coupons = res['data'];
                      } else {}

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }, function (error) {
            _this20.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
          });
        }
      }, {
        key: "getAccountSetting",
        value: function getAccountSetting() {}
      }, {
        key: "checkPostCode",
        value: function checkPostCode() {
          var _this21 = this;

          this.authservice.checkPostCode({
            post_code: this.post_code
          }).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.toastr.success(res['message'], 'Spotlex');
                        this.userInfoForm.patchValue({
                          //  address: res['data'].full_address,
                          street_name: res['data'].route,
                          town: res['data'].postal_town
                        });
                        this.fullAddress = res['data'].full_address;
                      } else {
                        this.toastr.error(res['message'], 'Spotlex');
                      }

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }, function (error) {
            _this21.toastr.error(error.error.message, 'Update Address!');
          });
        }
      }, {
        key: "viewOrderDetail",
        value: function viewOrderDetail(orderId) {
          var result = this.allOrders.filter(function (element) {
            if (element.id === orderId) {
              return true;
            }
          });
          console.log(result[0]);
          this.orderDetail = result[0];
        }
      }, {
        key: "getOrderHistory",
        value: function getOrderHistory() {
          var _this22 = this;

          this.authservice.getOrderHistory({
            'user_id': this.userId
          }).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.allOrders = res['currentOrders'];
                        this.authservice.showToastrMessage('success', 'Spotlex', res['message']);
                      } else {}

                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }, function (error) {
            _this22.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
          });
        }
        /**
         * Function to validate all form fields
         * @param formGroup
         */

      }, {
        key: "validateAllFormFields",
        value: function validateAllFormFields(formGroup) {
          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            control.markAsTouched({
              onlySelf: true
            });
            control.markAsDirty({
              onlySelf: true
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/customer/dashboard/dashboard.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/customer/dashboard/dashboard.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/customer/dashboard/dashboard.module.ts ***!
    \********************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppCustomerDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/customer/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/customer/dashboard/dashboard.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/customer/landing/landing.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/customer/landing/landing.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerLandingLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hand {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcHJvamVjdC9mcm9udGVuZC9zcmMvYXBwL2N1c3RvbWVyL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VzdG9tZXIvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuaGFuZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/customer/landing/landing.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/customer/landing/landing.component.ts ***!
    \*******************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppCustomerLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);

        this.data = new Date();
        this.signInButton = true;
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var userData = localStorage.getItem('la_user_token');

          if (userData.length > 0) {
            this.signInButton = false;
          }

          var body = document.getElementsByTagName('body')[0];
          body.classList.add('landing-page');
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.add('navbar-transparent');
        } // tslint:disable-next-line:use-life-cycle-interface

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var body = document.getElementsByTagName('body')[0];
          body.classList.remove('landing-page');
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.remove('navbar-transparent');
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/landing/landing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./landing.component.scss */
      "./src/app/customer/landing/landing.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LandingComponent);
    /***/
  },

  /***/
  "./src/app/customer/login/login.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/customer/login/login.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom-margin {\n  margin-top: 20px;\n}\n\n.account-form {\n  max-width: 700px;\n  width: 100%;\n  margin: 100px auto !important;\n  position: relative;\n}\n\n.validation-error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcHJvamVjdC9mcm9udGVuZC9zcmMvYXBwL2N1c3RvbWVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b21lci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tbWFyZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFjY291bnQtZm9ybXtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0byAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi52YWxpZGF0aW9uLWVycm9yIHtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4iLCIuY3VzdG9tLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hY2NvdW50LWZvcm0ge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMDBweCBhdXRvICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZhbGlkYXRpb24tZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/customer/login/login.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/customer/login/login.component.ts ***!
    \***************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCustomerLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/validation.service */
    "./src/app/services/validation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, authservice, route, toastr) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.route = route;
        this.toastr = toastr;
        this.user = [];
        this.account_validation_messages = _services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].account_validation_messages;
        this.data = new Date();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('login-page');
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.add('navbar-transparent');
          this.userLoginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_!#$%&\'*+/=? \\"`{|}~^.-]+@[a-zA-Z0-9.-]+$'), _services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].avoidEmptyStrigs]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "getUserLogin",
        value: function getUserLogin() {
          var _this23 = this;

          if (this.userLoginForm.invalid) {
            this.validateAllFormFields(this.userLoginForm);
            return true;
          }

          this.authservice.login(this.userLoginForm.value).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!(res['status'] === true)) {
                        _context18.next = 9;
                        break;
                      }

                      this.toastr.success(res['message'], 'Spotlex');
                      _context18.next = 4;
                      return this.authservice.showToastrMessage('success', 'User Login', res['message']);

                    case 4:
                      localStorage.setItem('la_user_token', res['token']);
                      localStorage.setItem('la_user_token_data', JSON.stringify(res['data']));
                      this.route.navigate(['']);
                      _context18.next = 10;
                      break;

                    case 9:
                      if (res['status'] === false) {
                        this.toastr.error(res['message'], 'Spotlex');
                      } else {
                        console.log(res, 'resres');
                        this.toastr.error(res['message'], 'Spotlex');
                      }

                    case 10:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }, function (error) {
            _this23.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
          });
        }
        /**
        * Function to validate all form fields
        * @param formGroup
        */

      }, {
        key: "validateAllFormFields",
        value: function validateAllFormFields(formGroup) {
          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            control.markAsTouched({
              onlySelf: true
            });
            control.markAsDirty({
              onlySelf: true
            });
          });
        } // tslint:disable-next-line:use-life-cycle-interface

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var body = document.getElementsByTagName('body')[0];
          body.classList.remove('login-page');
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.remove('navbar-transparent');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/customer/login/login.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/customer/pricing/pricing-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/customer/pricing/pricing-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: PricingRoutingModule */

  /***/
  function srcAppCustomerPricingPricingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingRoutingModule", function () {
      return PricingRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var PricingRoutingModule = function PricingRoutingModule() {
      _classCallCheck(this, PricingRoutingModule);
    };

    PricingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PricingRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer/pricing/pricing.component.css":
  /*!********************************************************!*\
    !*** ./src/app/customer/pricing/pricing.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerPricingPricingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hand{\r\n    cursor: pointer;\r\n}\r\n.quantity-badge{\r\n    border: 1px solid #00ae;\r\n    width: 30px;\r\n    height: 30px;    \r\n    font-size: 23px;\r\n    border-radius: 100%;    \r\n    \r\n    background-color: #00adee; \r\n    font-size:17px;  \r\n    position: absolute; top:0; right:57px;                                                                                                                                                                                                                                                                                                                                                                                                    \r\n}\r\n.content-area{word-break: break-all;}\r\n.bottom-text{padding-top: 40px; bottom: 0;}\r\n.contentScroll{max-height: 85px; overflow: auto;}\r\n.disabled{\r\n    opacity: 0.6;\r\n    cursor: default !important;\r\n    pointer-events: none !important;\r\n}\r\n@media screen and (min-width: 1500px){\r\n.container {\r\n    max-width: 1470px;\r\n}\r\na.your-basket {\r\n    margin-right: 25px;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQixFQUFFLEtBQUssRUFBRSxVQUFVO0FBQ3pDO0FBRUEsY0FBYyxxQkFBcUIsQ0FBQztBQUVwQyxhQUFhLGlCQUFpQixFQUFFLFNBQVMsQ0FBQztBQUMxQyxlQUFlLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztBQUVoRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsK0JBQStCO0FBQ25DO0FBRUE7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW5ke1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5xdWFudGl0eS1iYWRnZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGFlO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7ICAgIFxyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTsgICAgXHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZWU7IFxyXG4gICAgZm9udC1zaXplOjE3cHg7ICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjA7IHJpZ2h0OjU3cHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG59XHJcblxyXG4uY29udGVudC1hcmVhe3dvcmQtYnJlYWs6IGJyZWFrLWFsbDt9XHJcblxyXG4uYm90dG9tLXRleHR7cGFkZGluZy10b3A6IDQwcHg7IGJvdHRvbTogMDt9XHJcbi5jb250ZW50U2Nyb2xse21heC1oZWlnaHQ6IDg1cHg7IG92ZXJmbG93OiBhdXRvO31cclxuXHJcbi5kaXNhYmxlZHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KXtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDE0NzBweDtcclxufVxyXG5hLnlvdXItYmFza2V0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/customer/pricing/pricing.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/customer/pricing/pricing.component.ts ***!
    \*******************************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppCustomerPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product-category.service */
    "./src/app/services/product-category.service.ts");
    /* harmony import */


    var _services_price_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/price.service */
    "./src/app/services/price.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PricingComponent = /*#__PURE__*/function () {
      function PricingComponent(productCategoryService, priceservice, authservice, router) {
        _classCallCheck(this, PricingComponent);

        this.productCategoryService = productCategoryService;
        this.priceservice = priceservice;
        this.authservice = authservice;
        this.router = router;
        this.quantity = 0;
        this.showSpkiItemDiv = false;
        this.minValue = 15;
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserData();
        }
      }, {
        key: "onScroll",
        value: function onScroll(e) {
          if (this.productOfCategory.length >= 100) {
            console.log('No more items');
            return;
          } // console.log('scrolled!!', e);
          // const moreProducts = ti
          // this.productOfCategory = [...this.productOfCategory, ...moreProducts];

        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this24 = this;

          this.authservice.getUser().subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.userData = res['data'];
                        this.userId = res['data'].id;
                        this.getCategoryList();
                      } else {
                        console.log(res);
                      }

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }, function (error) {
            console.log('error', 'Spotlex', error.error.message);
          });
        }
      }, {
        key: "getCategoryList",
        value: function getCategoryList() {
          var _this25 = this;

          var payload = {
            user_id: this.userData['id']
          };
          this.productCategoryService.getCategoryList(payload).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var i, obj;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      if (res['status'] === true) {
                        this.quantityCount = res['quantity_count'];

                        if (this.quantityCount.length > 0) {
                          this.showSpkiItemDiv = true;
                        }

                        this.categories = res['categoriesArray'];

                        for (i = 0; i < res['categoriesArray'].length; i++) {
                          obj = res['categoriesArray'][i];

                          if (i === 0) {
                            this.getProductByCatId(obj.id);
                          }
                        }
                      } else {
                        console.log(res);
                      }

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }, function (error) {
            console.log('error', 'Spotlex', error.error.message);
          });
        }
      }, {
        key: "getProductByCatId",
        value: function getProductByCatId(id) {
          var _this26 = this;

          this.selectedCategory = id;
          this.categories.forEach(function (element) {
            if (element['id'] === id) {
              _this26.productOfCategory = element['category_product']['data'];
            }
          });
        }
      }, {
        key: "skipItem",
        value: function skipItem() {
          this.router.navigate(['/checkout', btoa('skipItem')]);
        }
      }, {
        key: "getQuantity",
        value: function getQuantity(productId, userId) {
          if (this.quantityCount.length <= 0 || this.quantityCount.length === '') {
            this.showSpkiItemDiv = false;
          }

          var result = this.quantityCount.filter(function (element) {
            if (element.product_id === productId) {
              return true;
            }
          });
          return result[0] ? result[0].quantity : 0;
        }
      }, {
        key: "addToCart",
        value: function addToCart(product, value) {
          var _this27 = this;

          this.quantity = this.getQuantity(product.id, this.userId);

          if (this.quantity && this.quantity > 0) {
            if (value === 'plus') {
              this.quantity++;
            } else if (value === 'minus') {
              this.quantity--;
            }
          } else if (value === 'plus') {
            this.quantity = 1;
          }

          var payLoad = {
            'user_id': this.userData.id,
            'product_id': product.id,
            'name': product.name,
            'price': product.price,
            'sale_price': product.sale_price ? product.sale_price : 0,
            'quantity': this.quantity,
            'category_id': this.selectedCategory,
            'description': product.description,
            'image': product.image
          };
          this.priceservice.addToCart(payLoad).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var index, prod;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      if (res['status'] === true) {
                        if (res['CartItem'].length > 0) {
                          this.showSpkiItemDiv = false;
                        } else {
                          this.showSpkiItemDiv = true;
                        }

                        this.badgeCount = res['CartItem'].quantity;
                        index = this.quantityCount.findIndex(function (item) {
                          return item.product_id === product.id;
                        });

                        if (index <= 0) {
                          prod = {
                            'product_id': product.id,
                            'category_id': this.selectedCategory,
                            'quantity': this.quantity
                          };
                          this.quantityCount.push(prod);
                        } else {
                          this.quantityCount[index].quantity = this.quantity;
                        }

                        this.quantity = 0;
                      } else {}

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }, function (error) {});
        }
      }]);

      return PricingComponent;
    }();

    PricingComponent.ctorParameters = function () {
      return [{
        type: _services_product_category_service__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryService"]
      }, {
        type: _services_price_service__WEBPACK_IMPORTED_MODULE_3__["PriceService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    PricingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pricing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pricing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pricing/pricing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pricing.component.css */
      "./src/app/customer/pricing/pricing.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_product_category_service__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryService"], _services_price_service__WEBPACK_IMPORTED_MODULE_3__["PriceService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], PricingComponent);
    /***/
  },

  /***/
  "./src/app/customer/pricing/pricing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/customer/pricing/pricing.module.ts ***!
    \****************************************************/

  /*! exports provided: PricingModule */

  /***/
  function srcAppCustomerPricingPricingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingModule", function () {
      return PricingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pricing-routing.module */
    "./src/app/customer/pricing/pricing-routing.module.ts");
    /* harmony import */


    var _pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pricing.component */
    "./src/app/customer/pricing/pricing.component.ts");

    var PricingModule = function PricingModule() {
      _classCallCheck(this, PricingModule);
    };

    PricingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pricing_routing_module__WEBPACK_IMPORTED_MODULE_3__["PricingRoutingModule"]]
    })], PricingModule);
    /***/
  },

  /***/
  "./src/app/customer/profile/profile.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/customer/profile/profile.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer/profile/profile.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/customer/profile/profile.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppCustomerProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rellax */
    "./node_modules/rellax/rellax.js");
    /* harmony import */


    var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.data = new Date();
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('profile-page');
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.add('navbar-transparent');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var body = document.getElementsByTagName('body')[0];
          body.classList.remove('profile-page');
          var navbar = document.getElementsByTagName('nav')[0];
          navbar.classList.remove('navbar-transparent');
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/profile/profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/customer/profile/profile.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/customer/referfriend/referfriend-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/customer/referfriend/referfriend-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: ReferfriendRoutingModule */

  /***/
  function srcAppCustomerReferfriendReferfriendRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferfriendRoutingModule", function () {
      return ReferfriendRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var ReferfriendRoutingModule = function ReferfriendRoutingModule() {
      _classCallCheck(this, ReferfriendRoutingModule);
    };

    ReferfriendRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReferfriendRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer/referfriend/referfriend.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/customer/referfriend/referfriend.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerReferfriendReferfriendComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3JlZmVyZnJpZW5kL3JlZmVyZnJpZW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/customer/referfriend/referfriend.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/customer/referfriend/referfriend.component.ts ***!
    \***************************************************************/

  /*! exports provided: ReferfriendComponent */

  /***/
  function srcAppCustomerReferfriendReferfriendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferfriendComponent", function () {
      return ReferfriendComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReferfriendComponent = /*#__PURE__*/function () {
      function ReferfriendComponent() {
        _classCallCheck(this, ReferfriendComponent);
      }

      _createClass(ReferfriendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReferfriendComponent;
    }();

    ReferfriendComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-referfriend',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./referfriend.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/referfriend/referfriend.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./referfriend.component.css */
      "./src/app/customer/referfriend/referfriend.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ReferfriendComponent);
    /***/
  },

  /***/
  "./src/app/customer/referfriend/referfriend.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/customer/referfriend/referfriend.module.ts ***!
    \************************************************************/

  /*! exports provided: ReferfriendModule */

  /***/
  function srcAppCustomerReferfriendReferfriendModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferfriendModule", function () {
      return ReferfriendModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _referfriend_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./referfriend-routing.module */
    "./src/app/customer/referfriend/referfriend-routing.module.ts");
    /* harmony import */


    var _referfriend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./referfriend.component */
    "./src/app/customer/referfriend/referfriend.component.ts");

    var ReferfriendModule = function ReferfriendModule() {
      _classCallCheck(this, ReferfriendModule);
    };

    ReferfriendModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_referfriend_component__WEBPACK_IMPORTED_MODULE_4__["ReferfriendComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _referfriend_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReferfriendRoutingModule"]]
    })], ReferfriendModule);
    /***/
  },

  /***/
  "./src/app/customer/signup/signup.component.css":
  /*!******************************************************!*\
    !*** ./src/app/customer/signup/signup.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer/signup/signup.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/customer/signup/signup.component.ts ***!
    \*****************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppCustomerSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/services/validation.service */
    "./src/app/services/validation.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, authservice, route) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.route = route;
        this.account_validation_messages = app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].account_validation_messages;
        this.userSignupForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_!#$%&\'*+/=? \\"`{|}~^.-]+@[a-zA-Z0-9.-]+$'), app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].avoidEmptyStrigs]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
          street_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          town: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          building_name_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp() {
          var _this28 = this;

          if (this.userSignupForm.invalid) {
            this.validateAllFormFields(this.userSignupForm);
            return true;
          } else {
            this.authservice.login(this.userSignupForm.value).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                return regeneratorRuntime.wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        if (res['status'] === true) {
                          this.authservice.showToastrMessage('success', 'Spotlex', res['message']);
                        } else {
                          this.authservice.showToastrMessage('error', 'Spotlex', res['message']);
                        }

                      case 1:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22, this);
              }));
            }, function (error) {
              _this28.authservice.showToastrMessage('error', 'Spotlex', error.error.message);
            });
          }
        }
        /**
        * Function to validate all form fields
        * @param formGroup
        */

      }, {
        key: "validateAllFormFields",
        value: function validateAllFormFields(formGroup) {
          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            control.markAsTouched({
              onlySelf: true
            });
            control.markAsDirty({
              onlySelf: true
            });
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/signup/signup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/customer/signup/signup.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/customer/track-driver/track-driver.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/customer/track-driver/track-driver.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerTrackDriverTrackDriverComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "agm-map {\r\n    height: 500px;\r\n  }\r\n  \r\n  \r\n  * {\r\n    font-family: Lato;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  \r\n  a {\r\n    color: darkblue;\r\n  }\r\n  \r\n  \r\n  .controls {\r\n    position: absolute;\r\n    z-index: 999;\r\n    top: 120px;\r\n    right: 20px;\r\n  }\r\n  \r\n  \r\n  button {\r\n    font-size: 14px;\r\n    background: blue;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  \r\n  button:hover, button:focus {\r\n    background: red;\r\n  }\r\n  \r\n  \r\n  .active {\r\n    background: red;\r\n  }\r\n  \r\n  \r\n  .hidden {\r\n    display: none;\r\n  }\r\n  \r\n  \r\n  span {\r\n    color: red;\r\n    background: white;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvdHJhY2stZHJpdmVyL3RyYWNrLWRyaXZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmOzs7RUFHQTtJQUNFLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7OztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztFQUNiOzs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7OztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7OztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvdHJhY2stZHJpdmVyL3RyYWNrLWRyaXZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250cm9scyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IDEyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciwgYnV0dG9uOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/customer/track-driver/track-driver.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/customer/track-driver/track-driver.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TrackDriverComponent */

  /***/
  function srcAppCustomerTrackDriverTrackDriverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackDriverComponent", function () {
      return TrackDriverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var travel_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! travel-marker */
    "./node_modules/travel-marker/dist/travel-marker.es2015.js");

    var TrackDriverComponent = /*#__PURE__*/function () {
      function TrackDriverComponent() {
        _classCallCheck(this, TrackDriverComponent);

        // google maps zoom level
        // tslint:disable-next-line:member-ordering
        this.zoom = 15; // initial center position for the map

        this.lat = 51.512802;
        this.lng = -0.091324;
        this.marker = null; // speedMultiplier to control animation speed

        this.speedMultiplier = 1;
      }

      _createClass(TrackDriverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onMapReady",
        value: function onMapReady(map) {
          console.log(map);
          this.map = map; // this.calcRoute();

          this.mockDirections(); // this.initEvents();
        }
        /**
         *                  IMPORTANT NOTICE
         *  Google stopped its FREE TIER for Directions service.
         *  Hence the below route calculation will not work unless you provide your own key with directions api enabled
         *
         *  Meanwhile, for the sake of demo, precalculated value will be used
         */
        // get locations from direction service

      }, {
        key: "calcRoute",
        value: function calcRoute() {
          var _this29 = this;

          this.line = new google.maps.Polyline({
            strokeOpacity: 0.5,
            path: [],
            map: this.map
          });
          var start = new google.maps.LatLng(51.513237, -0.099102);
          var end = new google.maps.LatLng(51.514786, -0.080799);
          var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.BICYCLING
          };
          this.directionsService = new google.maps.DirectionsService();
          this.directionsService.route(request, function (response, status) {
            // Empty response as API KEY EXPIRED
            console.log(response);

            if (status == google.maps.DirectionsStatus.OK) {
              var legs = response.routes[0].legs;

              for (var i = 0; i < legs.length; i++) {
                var steps = legs[i].steps;

                for (var j = 0; j < steps.length; j++) {
                  var nextSegment = steps[j].path;

                  for (var k = 0; k < nextSegment.length; k++) {
                    _this29.line.getPath().push(nextSegment[k]);
                  }
                }
              }

              _this29.initRoute();
            }
          });
        }
        /**
         *                  IMPORTANT NOTICE
         *  Google stopped its FREE TIER for Directions service.
         *  Hence the below route calculation will not work unless you provide your own key with directions api enabled
         *
         *  Meanwhile, for the sake of demo, precalculated value will be used
         */
        // mock directions api

      }, {
        key: "mockDirections",
        value: function mockDirections() {
          var _this30 = this;

          var locationData = [[51.51324, -0.09909000000000001], [51.51478, -0.08078]];
          console.log(locationData);
          var locationArray = locationData.map(function (l) {
            return new google.maps.LatLng(l[0], l[1]);
          });
          this.line = new google.maps.Polyline({
            strokeOpacity: 0.5,
            path: [],
            map: this.map
          });
          locationArray.forEach(function (l) {
            return _this30.line.getPath().push(l);
          });
          var start = new google.maps.LatLng(51.513237, -0.099102);
          var end = new google.maps.LatLng(51.514786, -0.080799);
          var startMarker = new google.maps.Marker({
            position: start,
            map: this.map,
            label: 'A'
          });
          var endMarker = new google.maps.Marker({
            position: end,
            map: this.map,
            label: 'B'
          });
          this.initRoute();
        } // initialize travel marker

      }, {
        key: "initRoute",
        value: function initRoute() {
          var _this31 = this;

          var route = this.line.getPath().getArray(); // options

          var options = {
            map: this.map,
            speed: 50,
            interval: 10,
            speedMultiplier: this.speedMultiplier,
            markerOptions: {
              title: 'Travel Marker',
              animation: google.maps.Animation.DROP,
              icon: {
                url: 'https://i.imgur.com/eTYW75M.png',
                // This marker is 20 pixels wide by 32 pixels high.
                animation: google.maps.Animation.DROP,
                // size: new google.maps.Size(256, 256),
                scaledSize: new google.maps.Size(128, 128),
                // The origin for this image is (0, 0).
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (0, 32).
                anchor: new google.maps.Point(53, 110)
              }
            }
          }; // define marker

          this.marker = new travel_marker__WEBPACK_IMPORTED_MODULE_2__["TravelMarker"](options); // add locations from direction service

          this.marker.addLocation(route);
          setTimeout(function () {
            return _this31.play();
          }, 2000);
        } // play animation

      }, {
        key: "play",
        value: function play() {
          this.marker.play();
        } // pause animation

      }, {
        key: "pause",
        value: function pause() {
          this.marker.pause();
        } // reset animation

      }, {
        key: "reset",
        value: function reset() {
          this.marker.reset();
        } // jump to next location

      }, {
        key: "next",
        value: function next() {
          this.marker.next();
        } // jump to previous location

      }, {
        key: "prev",
        value: function prev() {
          this.marker.prev();
        } // fast forward

      }, {
        key: "fast",
        value: function fast() {
          this.speedMultiplier *= 2;
          this.marker.setSpeedMultiplier(this.speedMultiplier);
        } // slow motion

      }, {
        key: "slow",
        value: function slow() {
          this.speedMultiplier /= 2;
          this.marker.setSpeedMultiplier(this.speedMultiplier);
        }
      }, {
        key: "initEvents",
        value: function initEvents() {
          this.marker.event.onEvent(function (event, data) {
            console.log(event, data);
          });
        }
      }]);

      return TrackDriverComponent;
    }();

    TrackDriverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-track-driver',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./track-driver.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/track-driver/track-driver.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./track-driver.component.css */
      "./src/app/customer/track-driver/track-driver.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TrackDriverComponent);
    /***/
  },

  /***/
  "./src/app/interceptor/interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/interceptor/interceptor.ts ***!
    \********************************************/

  /*! exports provided: MyInterceptor */

  /***/
  function srcAppInterceptorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyInterceptor", function () {
      return MyInterceptor;
    });

    var MyInterceptor = /*#__PURE__*/function () {
      function MyInterceptor() {
        _classCallCheck(this, MyInterceptor);
      }

      _createClass(MyInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          this.setUser();

          if (this.authHeader == null) {
            return next.handle(req.clone());
          }

          var clonedReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.authHeader)
          });
          return next.handle(clonedReq);
        }
      }, {
        key: "setUser",
        value: function setUser() {
          this.authHeader = localStorage.getItem('la_user_token');
        }
      }]);

      return MyInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/interceptor/loader-interceptor.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/interceptor/loader-interceptor.service.ts ***!
    \***********************************************************/

  /*! exports provided: LoaderInterceptor */

  /***/
  function srcAppInterceptorLoaderInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () {
      return LoaderInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/loader.service */
    "./src/app/services/loader.service.ts");

    var LoaderInterceptor = /*#__PURE__*/function () {
      function LoaderInterceptor(loaderService) {
        _classCallCheck(this, LoaderInterceptor);

        this.loaderService = loaderService;
        this.requests = [];
      }

      _createClass(LoaderInterceptor, [{
        key: "removeRequest",
        value: function removeRequest(req) {
          var i = this.requests.indexOf(req);

          if (i >= 0) {
            this.requests.splice(i, 1);
          }

          this.loaderService.isLoading.next(this.requests.length > 0);
        }
      }, {
        key: "intercept",
        value: function intercept(req, next) {
          var _this32 = this;

          this.requests.push(req); // console.log(`No of requests--->${this.requests.length}`);

          this.loaderService.isLoading.next(true);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var subscription = next.handle(req).subscribe(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this32.removeRequest(req);

                observer.next(event);
              }
            }, function (err) {
              alert('error' + err);

              _this32.removeRequest(req);

              observer.error(err);
            }, function () {
              _this32.removeRequest(req);

              observer.complete();
            }); // remove request from queue when cancelled

            return function () {
              _this32.removeRequest(req);

              subscription.unsubscribe();
            };
          });
        }
      }]);

      return LoaderInterceptor;
    }();

    LoaderInterceptor.ctorParameters = function () {
      return [{
        type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }];
    };

    LoaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])], LoaderInterceptor);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
      }
      /*
      * API for Manage Users
      *
      */


      _createClass(AuthService, [{
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.apiUrl + '/api/user');
        }
        /*
        * API for Manage Users
        *
        */
        //  getUserById() {
        //   return this.http.get(this.apiUrl + '/api/user');
        // }

      }, {
        key: "getOrderHistory",
        value: function getOrderHistory(userId) {
          return this.http.post(this.apiUrl + '/api/getcurrentorders', userId);
        }
      }, {
        key: "getCartItems",
        value: function getCartItems(userId) {
          return this.http.get(this.apiUrl + "/api/getcart_item/".concat(userId));
        }
      }, {
        key: "userLogout",
        value: function userLogout() {
          return this.http.get(this.apiUrl + '/api/auth/logout');
        }
      }, {
        key: "addCardToPay",
        value: function addCardToPay(cardInfo) {
          return this.http.post(this.apiUrl + '/api/addcarddetails', cardInfo);
        }
      }, {
        key: "login",
        value: function login(loginData) {
          return this.http.post(this.apiUrl + '/api/login', loginData);
        }
      }, {
        key: "applyCoupon",
        value: function applyCoupon(couponData) {
          return this.http.post(this.apiUrl + '/api/applycoupon', couponData);
        }
      }, {
        key: "checkPostCode",
        value: function checkPostCode(postCode) {
          return this.http.post(this.apiUrl + '/api/checkPostCode', postCode);
        }
      }, {
        key: "getTimeSlot",
        value: function getTimeSlot(date) {
          return this.http.post(this.apiUrl + '/api/gettimeslot', date);
        }
      }, {
        key: "checkOut",
        value: function checkOut(checkoutData) {
          return this.http.post(this.apiUrl + '/api/chargeorder', checkoutData);
        }
      }, {
        key: "updateAddress",
        value: function updateAddress(payload) {
          return this.http.post(this.apiUrl + '/api/updateaddress', payload);
        }
      }, {
        key: "removeItems",
        value: function removeItems(id) {
          return this.http.post(this.apiUrl + '/api/removeitems', id);
        }
      }, {
        key: "removeToken",
        value: function removeToken() {
          localStorage.removeItem('la_user_token');
          localStorage.removeItem('la_user_token_data');
        }
      }, {
        key: "getCoupon",
        value: function getCoupon() {
          return this.http.get(this.apiUrl + '/api/getcoupons');
        }
        /**
         * Function to show toastr message
         * @param status
         * @param summary
         * @param detail
         */

      }, {
        key: "showToastrMessage",
        value: function showToastrMessage(status, summary, detail) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/loader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/loader.service.ts ***!
    \********************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService = function LoaderService() {
      _classCallCheck(this, LoaderService);

      this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    };

    LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoaderService);
    /***/
  },

  /***/
  "./src/app/services/price.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/price.service.ts ***!
    \*******************************************/

  /*! exports provided: PriceService */

  /***/
  function srcAppServicesPriceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceService", function () {
      return PriceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PriceService = /*#__PURE__*/function () {
      function PriceService(http) {
        _classCallCheck(this, PriceService);

        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
      }
      /*
      * API for Get Pricing
      *
      */


      _createClass(PriceService, [{
        key: "getPriceList",
        value: function getPriceList() {
          return this.http.get(this.apiUrl + '/api/admin/pricelist/');
        }
        /*
        * API for Get Pricing
        *
        */

      }, {
        key: "addToCart",
        value: function addToCart(cartData) {
          return this.http.post(this.apiUrl + '/api/add_and_remove_cart/', cartData);
        }
      }]);

      return PriceService;
    }();

    PriceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    PriceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], PriceService);
    /***/
  },

  /***/
  "./src/app/services/product-category.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/product-category.service.ts ***!
    \******************************************************/

  /*! exports provided: ProductCategoryService */

  /***/
  function srcAppServicesProductCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function () {
      return ProductCategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductCategoryService = /*#__PURE__*/function () {
      function ProductCategoryService(http) {
        _classCallCheck(this, ProductCategoryService);

        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
      }
      /*
      * API for Get Category List
      *
      */


      _createClass(ProductCategoryService, [{
        key: "getCategoryList",
        value: function getCategoryList(userId) {
          return this.http.post(this.apiUrl + '/api/getcategory_list', userId);
        }
      }]);

      return ProductCategoryService;
    }();

    ProductCategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProductCategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ProductCategoryService);
    /***/
  },

  /***/
  "./src/app/services/validation.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/validation.service.ts ***!
    \************************************************/

  /*! exports provided: ValidationService */

  /***/
  function srcAppServicesValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationService", function () {
      return ValidationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValidationService = /*#__PURE__*/function () {
      function ValidationService() {
        _classCallCheck(this, ValidationService);
      }

      _createClass(ValidationService, null, [{
        key: "numberNotRequiredValidator",
        value: function numberNotRequiredValidator(number) {
          if (number.pristine) {
            return null;
          }

          var NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
          number.markAsTouched();
          var value = number.value.trim();

          if (NUMBER_REGEXP.test(value)) {
            return {
              numberNotRequiredValidator: true
            };
          }

          return null;
        }
      }, {
        key: "percentValidation",
        value: function percentValidation(number) {
          if (number.pristine) {
            return null;
          }

          number.markAsTouched(); // tslint:disable-next-line:prefer-const
          // tslint:disable-next-line:radix

          var temp_number = parseInt(number.value);

          if (temp_number > 100 || temp_number < 0) {
            return {
              percentValidation: true
            };
          } else {
            return null;
          }
        }
      }, {
        key: "avoidEmptyStrigs",
        value: function avoidEmptyStrigs(value) {
          if (value.pristine) {
            return null;
          }

          value.markAsTouched();

          if (value.value.trim() === '' && value.value.length > 0) {
            return {
              avoidEmptyStrigs: true
            };
          }

          return null;
        }
      }, {
        key: "emailValidator",
        value: function emailValidator(value) {
          if (value.pristine) {
            return null;
          }

          if (value.value.length === 0) {
            return;
          }

          var EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          value.markAsTouched();

          if (EMAIL_REGEXP.test(value.value)) {
            return null;
          }

          return {
            emailValidator: true
          };
        }
      }, {
        key: "nameValidator",
        value: function nameValidator(value) {
          if (value.pristine) {
            return null;
          }

          if (value.value.length === 0) {
            return;
          }

          var EMAIL_REGEXP = /^[^\s]+$/;
          value.markAsTouched();

          if (EMAIL_REGEXP.test(value.value)) {
            return null;
          }

          return {
            namelValidator: true
          };
        }
      }]);

      return ValidationService;
    }();

    ValidationService.account_validation_messages = {
      'first_name': [{
        type: 'required',
        message: 'First Name is required'
      }, {
        type: 'minlength',
        message: 'Username must be at least 5 characters long'
      }, {
        type: 'maxlength',
        message: 'Username cannot be more than 25 characters long'
      }, {
        type: 'pattern',
        message: 'Your username must contain only numbers and letters'
      }, {
        type: 'validUsername',
        message: 'Your username has already been taken'
      }],
      'email': [{
        type: 'required',
        message: 'Email is required'
      }, {
        type: 'pattern',
        message: 'Enter a valid Email'
      }, {
        type: 'emailValidator',
        message: 'Enter a valid email'
      }],
      'password': [{
        type: 'required',
        message: 'Password is required'
      }, {
        type: 'pattern',
        message: 'Enter a valid password'
      }, {
        type: 'emailValidator',
        message: 'Enter a valid password'
      }, {
        type: 'minlength',
        message: 'Password must be at least 6 characters long'
      }],
      'last_name': [{
        type: 'required',
        message: 'Last Name is required'
      }, {
        type: 'pattern',
        message: 'Last Name should contain alphabets only'
      }, {
        type: 'numberNotRequiredValidator',
        message: 'Last Name should not contain numbers.'
      }, {
        type: 'avoidEmptyStrigs',
        message: 'Last Name should not be empty string.'
      }, {
        type: 'nameValidator',
        message: 'Enter a valid name'
      }],
      'item_code': [{
        type: 'required',
        message: 'Item Code is required'
      }, {
        type: 'pattern',
        message: 'Invalid Code'
      }],
      'name': [{
        type: 'required',
        message: 'Category Name is required'
      }, {
        type: 'maxlength',
        message: 'Name cannot be more than 30 characters long'
      }],
      'description': [{
        type: 'required',
        message: 'Description is required'
      }, {
        type: 'pattern',
        message: 'Invalid '
      }],
      'quantity': [{
        type: 'required',
        message: 'Quantity is required'
      }],
      'length': [{
        type: 'required',
        message: 'required'
      }],
      'width': [{
        type: 'required',
        message: 'required'
      }],
      'height': [{
        type: 'required',
        message: 'required'
      }],
      'dimension_unit': [{
        type: 'required',
        message: 'required'
      }],
      'weight_value': [{
        type: 'required',
        message: 'required'
      }],
      'weight_unit': [{
        type: 'required',
        message: 'required'
      }],
      'category': [{
        type: 'required',
        message: 'Category is required'
      }],
      'unit': [{
        type: 'required',
        message: 'unit is required'
      }],
      'price': [{
        type: 'required',
        message: 'Price is required'
      }, {
        type: 'pattern',
        message: 'Invalid Price'
      }],
      'color': [{
        type: 'required',
        message: 'Color is required'
      }],
      'postcode': [{
        type: 'required',
        message: 'Post code is required'
      }],
      'city': [{
        type: 'required',
        message: 'City is required'
      }],
      'state': [{
        type: 'required',
        message: 'State is required'
      }],
      'street_name': [{
        type: 'required',
        message: 'Street name is required'
      }],
      'street_2': [{
        type: 'required',
        message: 'Street 2 is required'
      }],
      'phone_number': [{
        type: 'required',
        message: 'Phone No is required'
      }],
      'building_name_no': [{
        type: 'required',
        message: 'Building Name or Number is required'
      }],
      'address': [{
        type: 'required',
        message: 'Address Name is required'
      }],
      'town': [{
        type: 'required',
        message: 'Town is required'
      }],
      'coupon_code': [{
        type: 'required',
        message: 'please enter coupon code.'
      }],
      'card_no': [{
        type: 'required',
        message: 'please enter card number.'
      }],
      'expiry_month': [{
        type: 'required',
        message: 'please enter card expiry month.'
      }],
      'expiry_year': [{
        type: 'required',
        message: 'please enter card expiry year.'
      }],
      'name_on_card': [{
        type: 'required',
        message: 'please enter name.'
      }]
    };
    ValidationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ValidationService);
    /***/
  },

  /***/
  "./src/app/shared/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      // canActivate(
      //   next: ActivatedRouteSnapshot,
      //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //   return true;
      // }
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          try {
            var token = localStorage.getItem('la_user_token');

            if (!token) {
              this.router.navigate(['/login']);
            } else {
              return true;
            }
          } catch (err) {
            this.router.navigate(['/login']);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/shared/footer/footer.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".section-navbars {\n  padding: 2px 0 !important;\n}\n\n.order_btn {\n  padding: 0px 5px !important;\n}\n\n.navbar.navbar-expand-lg .navbar-nav li {\n  margin-right: 47px !important;\n}\n\n.hand {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvcHJvamVjdC9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtBQ0VKOztBRENBO0VBQ0ksNkJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tbmF2YmFyc3tcclxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm9yZGVyX2J0bntcclxuICAgIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IGxpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhhbmR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLy8gI21lbnUtZHJvcGRvd24ge1xyXG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vIH0iLCIuc2VjdGlvbi1uYXZiYXJzIHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyX2J0biB7XG4gIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5oYW5kIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(location, element, router, authservice) {
        _classCallCheck(this, NavbarComponent);

        this.location = location;
        this.element = element;
        this.router = router;
        this.authservice = authservice; // tslint:disable-next-line:no-inferrable-types

        this.signInButton = false;
        this.sidebarVisible = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var navbar = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
          var userToken = localStorage.getItem('la_user_token');

          if (userToken) {
            this.signInButton = true;
          }
        }
      }, {
        key: "sidebarOpen",
        value: function sidebarOpen() {
          var toggleButton = this.toggleButton;
          var html = document.getElementsByTagName('html')[0];
          setTimeout(function () {
            toggleButton.classList.add('toggled');
          }, 500);
          html.classList.add('nav-open');
          this.sidebarVisible = true;
        }
      }, {
        key: "sidebarClose",
        value: function sidebarClose() {
          var html = document.getElementsByTagName('html')[0]; // console.log(html);

          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          html.classList.remove('nav-open');
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          // const toggleButton = this.toggleButton;
          // const body = document.getElementsByTagName('body')[0];
          if (this.sidebarVisible === false) {
            this.sidebarOpen();
          } else {
            this.sidebarClose();
          }
        }
      }, {
        key: "isDocumentation",
        value: function isDocumentation() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee === '/documentation') {
            return true;
          } else {
            return false;
          }
        } // scroll(id) {
        //     console.log(`scrolling to ${id}`);
        //     const el = document.getElementById(id);
        //     el.scrollIntoView();
        //   }

      }, {
        key: "orderNow",
        value: function orderNow() {// if (this.signInButton === true) {
          //     this.router.navigate(['/', 'login']);
          // }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.authservice.removeToken();
          this.router.navigateByUrl('/login');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/shared/navbar/navbar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/scrolltotop/scrolltotop.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/shared/scrolltotop/scrolltotop.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedScrolltotopScrolltotopComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scroll-to-top {\r\n    /* display: -webkit-box;\r\n    display: -ms-flexbox; */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #ee7e31;\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    border-radius: 100%;\r\n    position: fixed;\r\n    bottom: 30px;\r\n    right: 30px;\r\n    transition: background-color .3s, opacity .5s, visibility .5s;\r\n    opacity: 0;\r\n    visibility: visible;\r\n    z-index: 1000;\r\n    \r\n    transition: all .2s ease-in-out;\r\n   }\r\n   .show-scrollTop {\r\n    opacity: 1;\r\n    transition: all .2s ease-in-out;\r\n   }\r\n   .scroll-to-top:hover {\r\n    cursor: pointer;\r\n    background-color: #333\r\n   }\r\n   /* .scroll-to-top {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    background-color: #ee7e31;\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    border-radius: 100%;\r\n    position: fixed;\r\n    bottom: 30px;\r\n    right: 30px;\r\n    -webkit-transition: background-color .3s, opacity .5s, visibility .5s;\r\n    -o-transition: background-color .3s, opacity .5s, visibility .5s;\r\n    transition: background-color .3s, opacity .5s, visibility .5s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    z-index: 1000\r\n}\r\n\r\n.scroll-to-top:after {\r\n    content: \"\\f077\";\r\n    font-family: FontAwesome;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 1em;\r\n    line-height: 2;\r\n    color: #fff\r\n}\r\n\r\n.scroll-to-top:hover {\r\n    cursor: pointer;\r\n    background-color: #333\r\n}\r\n\r\n.scroll-to-top:active {\r\n    background-color: #555\r\n}\r\n\r\n.scroll-to-top.show {\r\n    opacity: 1;\r\n    visibility: visible\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Njcm9sbHRvdG9wL3Njcm9sbHRvdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTsyQkFDdUI7SUFDdkIsYUFBYTtJQUdiLG1CQUFtQjtJQUduQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFHWCw2REFBNkQ7SUFDN0QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhOztJQUViLCtCQUErQjtHQUNoQztHQUNBO0lBQ0MsVUFBVTtJQUNWLCtCQUErQjtHQUNoQztHQUNBO0lBQ0MsZUFBZTtJQUNmO0dBQ0Q7R0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Njcm9sbHRvdG9wL3Njcm9sbHRvdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLXRvLXRvcCB7XHJcbiAgICAvKiBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlN2UzMTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcywgb3BhY2l0eSAuNXMsIHZpc2liaWxpdHkgLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MsIG9wYWNpdHkgLjVzLCB2aXNpYmlsaXR5IC41cztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzLCBvcGFjaXR5IC41cywgdmlzaWJpbGl0eSAuNXM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgIH1cclxuICAgLnNob3ctc2Nyb2xsVG9wIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICB9XHJcbiAgIC5zY3JvbGwtdG8tdG9wOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzNcclxuICAgfVxyXG5cclxuICAgLyogLnNjcm9sbC10by10b3Age1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTdlMzE7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MsIG9wYWNpdHkgLjVzLCB2aXNpYmlsaXR5IC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzLCBvcGFjaXR5IC41cywgdmlzaWJpbGl0eSAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcywgb3BhY2l0eSAuNXMsIHZpc2liaWxpdHkgLjVzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDEwMDBcclxufVxyXG5cclxuLnNjcm9sbC10by10b3A6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXGYwNzdcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLnNjcm9sbC10by10b3A6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzM1xyXG59XHJcblxyXG4uc2Nyb2xsLXRvLXRvcDphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NVxyXG59XHJcblxyXG4uc2Nyb2xsLXRvLXRvcC5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXHJcbn0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/scrolltotop/scrolltotop.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/scrolltotop/scrolltotop.component.ts ***!
    \*************************************************************/

  /*! exports provided: ScrolltotopComponent */

  /***/
  function srcAppSharedScrolltotopScrolltotopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrolltotopComponent", function () {
      return ScrolltotopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ScrolltotopComponent = /*#__PURE__*/function () {
      function ScrolltotopComponent(document) {
        _classCallCheck(this, ScrolltotopComponent);

        this.document = document;
      }

      _createClass(ScrolltotopComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
          } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - currentScroll / 8);
            }
          })();
        }
      }]);

      return ScrolltotopComponent;
    }();

    ScrolltotopComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], ScrolltotopComponent.prototype, "onWindowScroll", null);
    ScrolltotopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scrolltotop',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./scrolltotop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/scrolltotop/scrolltotop.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./scrolltotop.component.css */
      "./src/app/shared/scrolltotop/scrolltotop.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document])], ScrolltotopComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      url: '3.11.134.243',
      // url: 'http://127.0.0.1:8000',
      frontEndUrl: 'http://127.0.0.1:4200'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /*!
    
    =========================================================
    * Now UI Kit Angular - v1.2.0
    =========================================================
    
    * Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
    * Copyright 2019 Creative Tim (https://www.creative-tim.com)
    * Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)
    
    * Coded by Creative Tim
    
    =========================================================
    
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /var/www/html/project/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map