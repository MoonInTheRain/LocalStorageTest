System.register("chunks:///_virtual/LocalSaveTest.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,r,o,n,a,s,l,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,s=t.EditBox,l=t.Button,c=t.sys,u=t.Component}],execute:function(){var p,v,d,f,y,g,h;n._RF.push({},"2947dAISMhF/KBGeuLtVISJ","LocalSaveTest",void 0);var S=a.ccclass,L=a.property;t("LocalSaveTest",(p=S("LocalSaveTest"),v=L(s),d=L(l),p((g=e((y=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,r(e,"edit",g,o(e)),r(e,"saveButton",h,o(e)),e}return i(e,t),e.prototype.start=function(){var t=this,e=c.localStorage.getItem("test");e&&(this.edit.string=e),this.saveButton.node.on(l.EventType.CLICK,(function(){c.localStorage.setItem("test",t.edit.string)}))},e}(u)).prototype,"edit",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=e(y.prototype,"saveButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=y))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./LocalSaveTest.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});