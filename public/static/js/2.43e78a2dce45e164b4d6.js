webpackJsonp([2],{100:function(t,e,n){var i=n(108),o=n(98);t.exports=Object.keys||function(t){return i(t,o)}},101:function(t,e,n){var i=n(3),o=n(7),A=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return A[t]||(A[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(99)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},102:function(t,e,n){t.exports={default:n(103),__esModule:!0}},103:function(t,e,n){n(111),t.exports=n(3).Object.assign},104:function(t,e,n){var i=n(87),o=n(88),A=n(110);t.exports=function(t){return function(e,n,a){var r,l=i(e),s=o(l.length),d=A(a,s);if(t&&n!=n){for(;s>d;)if((r=l[d++])!=r)return!0}else for(;s>d;d++)if((t||d in l)&&l[d]===n)return t||d||0;return!t&&-1}}},106:function(t,e,n){"use strict";var i=n(100),o=n(107),A=n(109),a=n(89),r=n(85),l=Object.assign;t.exports=!l||n(10)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=i})?function(t,e){for(var n=a(t),l=arguments.length,s=1,d=o.f,c=A.f;l>s;)for(var C,p=r(arguments[s++]),f=d?i(p).concat(d(p)):i(p),B=f.length,g=0;B>g;)c.call(p,C=f[g++])&&(n[C]=p[C]);return n}:l},107:function(t,e){e.f=Object.getOwnPropertySymbols},108:function(t,e,n){var i=n(29),o=n(87),A=n(104)(!1),a=n(92)("IE_PROTO");t.exports=function(t,e){var n,r=o(t),l=0,s=[];for(n in r)n!=a&&i(r,n)&&s.push(n);for(;e.length>l;)i(r,n=e[l++])&&(~A(s,n)||s.push(n));return s}},109:function(t,e){e.f={}.propertyIsEnumerable},110:function(t,e,n){var i=n(86),o=Math.max,A=Math.min;t.exports=function(t,e){return t=i(t),t<0?o(t+e,0):A(t,e)}},111:function(t,e,n){var i=n(27);i(i.S+i.F,"Object",{assign:n(106)})},112:function(t,e,n){t.exports=n.p+"static/img/back.d06bcf3.png"},128:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(83),o=n.n(i),A=n(28),a=n(9),r=n.n(a),l=n(215),s=n.n(l),d=(n(16),n(217)),c=n.n(d),C=n(96),p=n.n(C);e.default={data:function(){return{loading:!1,content:null,bookDetail:{},likes:[],showmore:!1}},created:function(){this.getBookDetail(this.$route.params.id)},methods:{getBookDetail:function(t){var e=this;this.loading=!0,r.a.get(this.common.api+"/booklist?id="+t).then(function(t){e.loading=!1,e.showmore=!1,e.bookDetail=t.data,e.likes=t.data.like.split("-")})},openBook:function(){this.$store.state.bar=!1},back:function(){this.$router.go(-1)},loadImage:function(t){this.common.defaultImage(t)}},computed:o()({},n.i(A.b)(["curBookDetailId"])),components:{Similar:s.a,Rate:c.a,Loading:p.a},watch:{$route:function(t,e){this.getBookDetail(t.params.id)}}}},138:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(83),o=n.n(i),A=n(9),a=n.n(A),r=n(28);e.default={data:function(){return{bookDetail:{}}},props:{like:{type:String,required:!0}},computed:o()({},n.i(r.b)([])),created:function(){this.getBookDetail(this.like)},methods:{getBookDetail:function(t){var e=this;a.a.get(this.common.api+"/booklist?id="+t).then(function(t){e.bookDetail=t.data})},toBookDetail:function(t){this.$router.push({path:"/bookdetail/"+t}),document.body.scrollTop=0},loadImage:function(t){this.common.defaultImage(t)}},filters:{},watch:{like:function(t,e){this.getBookDetail(t)}}}},140:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["score"],computed:{itemClasses:function(){for(var t=[],e=Math.floor(2*this.score)/2,n=e%1!=0,i=Math.floor(e),o=0;o<i;o++)t.push("on");for(n&&t.push("half");t.length<5;)t.push("off");return t}},methods:{}}},174:function(t,e,n){e=t.exports=n(76)(),e.push([t.i,'.similar{width:110px;height:165px}.similar .similar-img{height:140px}.similar img{width:100%;height:100%}.similar img[src=""]{opacity:0}',"",{version:3,sources:["/home/cxl/wsfitem/vue-reader/src/components/Similar.vue"],names:[],mappings:"AACA,SACE,YAAa,AACb,YAAc,CACf,AACD,sBACE,YAAc,CACf,AACD,aACE,WAAY,AACZ,WAAa,CACd,AACD,qBACE,SAAW,CACZ",file:"Similar.vue",sourcesContent:['\n.similar {\n  width: 110px;\n  height: 165px;\n}\n.similar .similar-img {\n  height: 140px;\n}\n.similar img {\n  width: 100%;\n  height: 100%;\n}\n.similar img[src=""] {\n  opacity: 0;\n}\n'],sourceRoot:""}])},175:function(t,e,n){e=t.exports=n(76)(),e.push([t.i,".ell{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.book-detail{padding:0 20px}.loading{position:fixed;top:0;left:0;bottom:0;right:0;z-index:999;background-color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.detail-linear{background:linear-gradient(0deg,#fff,hsla(0,0%,100%,0) 8rem) no-repeat bottom}.detail-linear .detail-top{position:fixed;display:-ms-flexbox;display:flex;left:0;top:0;right:0;height:50px;background-color:#eee}.detail-linear .detail-top a:first-of-type{-ms-flex:1;flex:1}.detail-linear .detail-top i.back{position:absolute;left:10px;top:10px;width:30px;height:30px;background:url("+n(112)+")}.detail-linear .detail-top h2{margin:0 40px;font-size:18px;line-height:50px;color:#ed424b}.detail-linear .detail-con{display:-ms-flexbox;display:flex;margin-top:50px;padding:15px 0 18px}.detail-linear .detail-con .detail-img{width:100px;margin-right:25px}.detail-linear .detail-con .detail-img img{width:100%}.detail-linear .detail-con .detail-main{-ms-flex:1;flex:1}.detail-linear .detail-con .detail-main h3{font-size:18px;line-height:1.5;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.detail-linear .detail-con .detail-main p{font-size:14px;line-height:1.8;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.detail-linear .read-btn{display:-ms-flexbox;display:flex}.detail-linear .read-btn>div{-ms-flex:1;flex:1;padding-bottom:20px;border-bottom:1px solid #ddd}.detail-linear .read-btn>div:first-child{margin-right:15px}.detail-linear .read-btn>div button{display:block;margin:0 auto;width:100%;height:33px;line-height:33px;font-size:15px;vertical-align:middle;border:none;border-radius:3px}.detail-linear .read-btn>div:first-of-type button{background-color:#ed424b}.detail-linear .read-btn>div:first-of-type button a{color:#fff}.detail-linear .read-btn>div:nth-child(2) button{color:#333;background-color:#fff;border:1px solid #ddd}.home-btn{padding:15px 15px 0 0}.home-btn .iconfont{font-size:22px;color:#ed424b}.detail-intro{padding:20px 0;font-size:16px;text-indent:2em;line-height:1.6;border-bottom:1px solid #ddd}.detail-intro p.show5{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-clamp:5;-webkit-line-clamp:5}.detail-tag{padding:20px 0;border-bottom:1px solid #ddd}.detail-tag h3{font-size:16px;margin-bottom:10px}.detail-tag ul li{float:left;padding:3px 10px;margin-right:10px;color:#333;border:1px solid #ccc;border-radius:5px}.detail-like{padding:20px 0}.detail-like h3{font-size:16px;margin-bottom:20px}.detail-like .like-list{display:-ms-flexbox;display:flex}.detail-like .like-list li{-ms-flex:1;flex:1}","",{version:3,sources:["/home/cxl/wsfitem/vue-reader/src/components/BookDetail.vue"],names:[],mappings:"AACA,KACE,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,aACE,cAAgB,CACjB,AACD,SACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,YAAa,AACb,sBAAuB,AACvB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CACzB,AACD,eACE,6EAA+F,CAChG,AACD,2BACE,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,OAAQ,AACR,MAAO,AACP,QAAS,AACT,YAAa,AACb,qBAAuB,CACxB,AACD,2CACE,WAAY,AACR,MAAQ,CACb,AACD,kCACE,kBAAmB,AACnB,UAAW,AACX,SAAU,AACV,WAAY,AACZ,YAAa,AACb,wCAA6C,CAC9C,AACD,8BACE,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,aAAe,CAChB,AACD,2BACE,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,mBAAqB,CACtB,AACD,uCACE,YAAa,AACb,iBAAmB,CACpB,AACD,2CACE,UAAY,CACb,AACD,wCACE,WAAY,AACR,MAAQ,CACb,AACD,2CACE,eAAgB,AAChB,gBAAiB,AACjB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,0CACE,eAAgB,AAChB,gBAAiB,AACjB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,yBACE,oBAAqB,AACrB,YAAc,CACf,AACD,6BACE,WAAY,AACR,OAAQ,AACZ,oBAAqB,AACrB,4BAA8B,CAC/B,AACD,yCACE,iBAAmB,CACpB,AACD,oCACE,cAAe,AACf,cAAe,AACf,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,sBAAuB,AACvB,YAAa,AACb,iBAAmB,CACpB,AACD,kDACE,wBAA0B,CAC3B,AACD,oDACE,UAAY,CACb,AACD,iDACE,WAAY,AACZ,sBAAuB,AACvB,qBAAuB,CACxB,AACD,UACE,qBAAuB,CACxB,AACD,oBACE,eAAgB,AAChB,aAAe,CAChB,AACD,cACE,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,gBAAiB,AACjB,4BAA8B,CAC/B,AACD,sBACE,gBAAiB,AACjB,uBAAwB,AACxB,oBAAqB,AACrB,aAAc,AACd,oBAAsB,CACvB,AACD,YACE,eAAgB,AAChB,4BAA8B,CAC/B,AACD,eACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,kBACE,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,sBAAuB,AACvB,iBAAmB,CACpB,AACD,aACE,cAAgB,CACjB,AACD,gBACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,wBACE,oBAAqB,AACrB,YAAc,CACf,AACD,2BACE,WAAY,AACR,MAAQ,CACb",file:"BookDetail.vue",sourcesContent:['\n.ell {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.book-detail {\n  padding: 0 20px;\n}\n.loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 999;\n  background-color: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.detail-linear {\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0) 8rem) no-repeat center bottom;\n}\n.detail-linear .detail-top {\n  position: fixed;\n  display: -ms-flexbox;\n  display: flex;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 50px;\n  background-color: #eee;\n}\n.detail-linear .detail-top a:first-of-type {\n  -ms-flex: 1;\n      flex: 1;\n}\n.detail-linear .detail-top i.back {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  width: 30px;\n  height: 30px;\n  background: url("../assets/images/back.png");\n}\n.detail-linear .detail-top h2 {\n  margin: 0 40px;\n  font-size: 18px;\n  line-height: 50px;\n  color: #ed424b;\n}\n.detail-linear .detail-con {\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 50px;\n  padding: 15px 0 18px;\n}\n.detail-linear .detail-con .detail-img {\n  width: 100px;\n  margin-right: 25px;\n}\n.detail-linear .detail-con .detail-img img {\n  width: 100%;\n}\n.detail-linear .detail-con .detail-main {\n  -ms-flex: 1;\n      flex: 1;\n}\n.detail-linear .detail-con .detail-main h3 {\n  font-size: 18px;\n  line-height: 1.5;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.detail-linear .detail-con .detail-main p {\n  font-size: 14px;\n  line-height: 1.8;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.detail-linear .read-btn {\n  display: -ms-flexbox;\n  display: flex;\n}\n.detail-linear .read-btn > div {\n  -ms-flex: 1;\n      flex: 1;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #ddd;\n}\n.detail-linear .read-btn > div:first-child {\n  margin-right: 15px;\n}\n.detail-linear .read-btn > div button {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  height: 33px;\n  line-height: 33px;\n  font-size: 15px;\n  vertical-align: middle;\n  border: none;\n  border-radius: 3px;\n}\n.detail-linear .read-btn > div:first-of-type button {\n  background-color: #ed424b;\n}\n.detail-linear .read-btn > div:first-of-type button a {\n  color: #fff;\n}\n.detail-linear .read-btn > div:nth-child(2) button {\n  color: #333;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.home-btn {\n  padding: 15px 15px 0 0;\n}\n.home-btn .iconfont {\n  font-size: 22px;\n  color: #ed424b;\n}\n.detail-intro {\n  padding: 20px 0;\n  font-size: 16px;\n  text-indent: 2em;\n  line-height: 1.6;\n  border-bottom: 1px solid #ddd;\n}\n.detail-intro p.show5 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-clamp: 5;\n  -webkit-line-clamp: 5;\n}\n.detail-tag {\n  padding: 20px 0;\n  border-bottom: 1px solid #ddd;\n}\n.detail-tag h3 {\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n.detail-tag ul li {\n  float: left;\n  padding: 3px 10px;\n  margin-right: 10px;\n  color: #333;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.detail-like {\n  padding: 20px 0;\n}\n.detail-like h3 {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n.detail-like .like-list {\n  display: -ms-flexbox;\n  display: flex;\n}\n.detail-like .like-list li {\n  -ms-flex: 1;\n      flex: 1;\n}\n'],sourceRoot:""}])},181:function(t,e,n){e=t.exports=n(76)(),e.push([t.i,".rate-score{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.rate-score .star-item{display:inline-block;width:20px;height:20px;background-size:100% 100%}.rate-score .star-item.on{background:url("+n(208)+")}.rate-score .star-item.half{background:url("+n(206)+")}.rate-score .star-item.off{background:url("+n(207)+")}.rate-score .star-item:last-of-type{margin-right:10px}","",{version:3,sources:["/home/cxl/wsfitem/vue-reader/src/components/rate/rate.vue"],names:[],mappings:"AACA,YACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AACD,uBACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,yBAA2B,CAC5B,AACD,0BACE,wCAA+B,CAChC,AACD,4BACE,wCAAiC,CAClC,AACD,2BACE,wCAAgC,CACjC,AACD,oCACE,iBAAmB,CACpB",file:"rate.vue",sourcesContent:['\n.rate-score {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.rate-score .star-item {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-size: 100% 100%;\n}\n.rate-score .star-item.on {\n  background: url("star_on.png");\n}\n.rate-score .star-item.half {\n  background: url("star_half.png");\n}\n.rate-score .star-item.off {\n  background: url("star_off.png");\n}\n.rate-score .star-item:last-of-type {\n  margin-right: 10px;\n}\n'],sourceRoot:""}])},187:function(t,e,n){var i=n(174);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(77)("0cbcea3c",i,!0)},188:function(t,e,n){var i=n(175);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(77)("745d180d",i,!0)},194:function(t,e,n){var i=n(181);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(77)("f4204fa0",i,!0)},206:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjdENENFN0E2Qjg0MTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjdENENFN0I2Qjg0MTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyN0Q0Q0U3ODZCODQxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyN0Q0Q0U3OTZCODQxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiYx+oIAAAGzSURBVHjapJPLK0RhGId/c840mebilmbKJbllKNnyB0iKobGxsyLlEhtyWUg2IzYmxYakkAaFspiVomajLJQs2Mj9EiYzMWP8TrnMjOmcw7z19N3OefrO+75HMzk9C6VwYLTRjYE9Ts9jz9pbmqPWWqgIE+67ODzGE8aGoPSAHWM2Ix4qOc0lxoSFlPUBYek5DSlJSFiHcYMZNw0RW8VE/LcwCb5OEUFT1BZQIPfOd1GqMaXTwZ8p4i1LRChLQNCSjOu2OO+UkRAJkBfXzJw0Bljtd+lQcz9tXTDj1s6byCbchdlWhfRJ4mPhBSnNPqR5kHicEK92Db1BThqaMDSRjrPuf8q8/OSDqKIsYqTnCnkdYQhvfxBJufR8yX5VeQVDrkvkO0LQ+lTIpJxtUXYi2zZu9G8EYDxSIbwhl4p9yPYR2X+lKoSWz79HXqjHcwVbSK9CqCOpikI2d1XMVvgJGZsc46XBqijk51b+ZN1weoHCmnk4a7ncIevk7q/CclbZf4uc0TtkF7FI2xHH12SV7JJXRWE9nPl+mPd5K9sShgc/mz42wuSQLJML/suGyMMPAQYAj4R6EIkKIE4AAAAASUVORK5CYII="},207:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzUxNkE5MDU2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzUxNkE5MDY2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNTE2QTkwMzZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNTE2QTkwNDZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psq9gWwAAAEySURBVHjaYpw8cz4DEUAKSj9Dl8hJS0DhszAQB7RxGYgOiDGQB4gVkNhf8ClmIsJALSBmhGItQooJGcgMxBpIfA2oGNkGqgAxBxKfAypGVBgyQTWAMBeU1sOiByT2F4h/APG3KbMWgOgfwNj+BzPQAojV0FyCDwgCsRO6INTgWyBXnQTiewyUA5AZJ0Eu/A/ER4D4MxCbk2nYSaCXL6KH4UWooY6EYhIJgMJyP9Cwe7gSNkjiGxC7ERGmoDDbBTTsBaFkA1LwmgjXvYaqJZgOQTlCnAgDxaFqCRoIShZsRBjIBlVL0EAJLGI3oJigWhYCit5Ak9QrJINtgVgYSe01Ygz8BcSnoYr/I8mBDF4HLXVMsbkQ3cugPPwciFcC8VU0w2DgP1QOpOY5MMtxI0sCBBgAgiRDCdTDUTMAAAAASUVORK5CYII="},208:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzIxRTIyNkM2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzUxNkE4RkU2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MjFFMjI2QTZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MjFFMjI2QjZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqgV8k8AAAEtSURBVHjaYvw/k4EY4AjE/4H4AIZM2n8ULgsDcSAHSh8gpJAYA+WA2B+J/QifYiYiDMwCYmYoziSkmJCBHECcjMRPgYqRbWAkEIsg8UWgYkSFIQtUgxgQi0PZxVj0lADxDyB+A8QvGWYxvgKz0/7/AUkyApNNN5BOBGJhBsrAWyCeD/JyBRCvYqAcgMyoAHnzLzQm7wNxF5mGlQG93I0eKSCBMGj4EAt+gPVADcMWy6uB2AUaHsSEmQvQsNWEks1RID5FhIGnoGoJpkOQmBURBlpi04/NQG0g5ifCQAGoWoIG2qDxQeXTHCj+jyZnTaqB56FeS4ViEPsCkrwtsQZ+hJaBpkB8EkkOxDaByn0ixoVSQHwQiNWBeCo00aODv1A5NSA+BMzL0siSAAEGAFbSPvm9m4DCAAAAAElFTkSuQmCC"},215:function(t,e,n){n(187);var i=n(26)(n(138),n(219),null,null);t.exports=i.exports},217:function(t,e,n){n(194);var i=n(26)(n(140),n(226),null,null);t.exports=i.exports},219:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"similar",on:{click:function(e){t.toBookDetail(t.bookDetail.id)}}},[n("div",{staticClass:"similar-img"},[n("img",{attrs:{src:t.bookDetail.images,alt:""},on:{error:function(e){t.loadImage(e)}}})]),t._v(" "),n("p",[t._v(t._s(t.bookDetail.name))])])},staticRenderFns:[]}},220:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-detail"},[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),t.bookDetail?n("div",{staticClass:"detail-content"},[n("div",{staticClass:"detail-linear"},[n("header",{staticClass:"detail-top"},[n("a",{on:{click:t.back}},[n("i",{staticClass:"back"}),t._v(" "),n("h2",{staticClass:"detail-title"},[t._v(t._s(t.bookDetail.name))])]),t._v(" "),n("router-link",{staticClass:"home-btn",attrs:{to:"/"}},[n("i",{staticClass:"iconfont icon-home"})])],1),t._v(" "),t.loading?t._e():n("div",{staticClass:"detail-con"},[n("div",{staticClass:"detail-img"},[n("img",{attrs:{src:t.bookDetail.images,alt:""},on:{error:function(e){t.loadImage(e)}}})]),t._v(" "),n("div",{staticClass:"detail-main"},[n("h3",{staticClass:"name"},[t._v(t._s(t.bookDetail.name))]),t._v(" "),n("p",{staticClass:"author"},[t._v("作者："+t._s(t.bookDetail.author))]),t._v(" "),n("p",{staticClass:"type"},[t._v("分类："+t._s(t.bookDetail.type))]),t._v(" "),n("p",{staticClass:"word-count"},[t._v(t._s(t.bookDetail.wordcount)+"万字")]),t._v(" "),n("rate",{attrs:{score:t.bookDetail.ratings}})],1)]),t._v(" "),t.loading?t._e():n("div",{staticClass:"read-btn"},[n("div",[n("button",{on:{click:t.openBook}},[n("router-link",{attrs:{to:{path:"/reader/"+t.bookDetail.id}}},[t._v("开始阅读")])],1)]),t._v(" "),n("div",[n("button",{on:{click:t.openBook}},[n("router-link",{attrs:{to:{path:"/reader/"+t.bookDetail.id}}},[t._v("开始阅读")])],1)])])]),t._v(" "),t.loading?t._e():n("div",[n("div",{staticClass:"detail-intro"},[n("p",{class:{show5:!t.showmore},on:{click:function(e){t.showmore=!t.showmore}}},[t._v(t._s(t.bookDetail.intro))])]),t._v(" "),n("div",{staticClass:"detail-tag"},[n("h3",{staticClass:"tag"},[t._v("类别标签")]),t._v(" "),n("ul",{staticClass:"tag-btn clearfix"},[n("li",[t._v("\n            "+t._s(t.bookDetail.type)+"\n          ")]),t._v(" "),n("li",[t._v("\n            东方玄幻\n          ")])])]),t._v(" "),n("div",{staticClass:"detail-like"},[n("h3",{staticClass:"like-title"},[t._v("喜欢本书的人也喜欢")]),t._v(" "),n("ul",{staticClass:"like-list"},t._l(t.likes,function(t,e){return n("li",[n("similar",{key:e,attrs:{like:t}})],1)}))])])]):t._e()],1)},staticRenderFns:[]}},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rate-score"},[t._l(t.itemClasses,function(t,e){return n("span",{staticClass:"star-item",class:t})}),t._v(t._s(t.score)+"\n")],2)},staticRenderFns:[]}},78:function(t,e,n){n(188);var i=n(26)(n(128),n(220),null,null);t.exports=i.exports},83:function(t,e,n){"use strict";e.__esModule=!0;var i=n(102),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},84:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},85:function(t,e,n){var i=n(91);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},86:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},87:function(t,e,n){var i=n(85),o=n(84);t.exports=function(t){return i(o(t))}},88:function(t,e,n){var i=n(86),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},89:function(t,e,n){var i=n(84);t.exports=function(t){return Object(i(t))}},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{size:{type:Number,default:50},stroke:{type:Number,default:3.5},color:{type:String,default:"#ed424b"}},computed:{loadingSize:function(){var t=this.size+"px";return{width:t,height:t}},loadingColor:function(){return{stroke:this.color}}}}},91:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},92:function(t,e,n){var i=n(101)("keys"),o=n(93);t.exports=function(t){return i[t]||(i[t]=o(t))}},93:function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},94:function(t,e,n){e=t.exports=n(76)(),e.push([t.i,".loading-component{display:inline-block;pointer-events:none;will-change:transform,opacity;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%)}.spinner{animation:rotator 1.4s linear infinite}@keyframes rotator{0%{transform:rotate(0deg)}to{transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite}@keyframes colors{0%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}to{stroke:#4285f4}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}to{stroke-dashoffset:187;transform:rotate(450deg)}}","",{version:3,sources:["/home/cxl/wsfitem/vue-reader/src/components/Loading/Loading.vue"],names:[],mappings:"AACA,mBACE,qBAAsB,AACtB,oBAAqB,AACrB,8BAAgC,AAChC,eAAgB,AAChB,SAAU,AACV,QAAS,AACT,8BAAiC,CAClC,AACD,SACE,sCAAwC,CACzC,AACD,mBACA,GACI,sBAAwB,CAC3B,AACD,GACI,wBAA0B,CAC7B,CACA,AACD,MACE,qBAAsB,AACtB,oBAAqB,AACrB,wBAAyB,AACzB,wCAA0C,CAC3C,AACD,kBACA,GACI,cAAgB,CACnB,AACD,IACI,cAAgB,CACnB,AACD,IACI,cAAgB,CACnB,AACD,IACI,cAAgB,CACnB,AACD,GACI,cAAgB,CACnB,CACA,AACD,gBACA,GACI,qBAAuB,CAC1B,AACD,IACI,wBAAyB,AACzB,wBAA0B,CAC7B,AACD,GACI,sBAAuB,AACvB,wBAA0B,CAC7B,CACA",file:"Loading.vue",sourcesContent:["\n.loading-component {\n  display: inline-block;\n  pointer-events: none;\n  will-change: transform, opacity;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.spinner {\n  animation: rotator 1.4s linear infinite;\n}\n@keyframes rotator {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(270deg);\n}\n}\n.path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  animation: dash 1.4s ease-in-out infinite;\n}\n@keyframes colors {\n0% {\n    stroke: #4285F4;\n}\n25% {\n    stroke: #DE3E35;\n}\n50% {\n    stroke: #F7C223;\n}\n75% {\n    stroke: #1B9A59;\n}\n100% {\n    stroke: #4285F4;\n}\n}\n@keyframes dash {\n0% {\n    stroke-dashoffset: 187;\n}\n50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n}\n100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n}\n}\n"],sourceRoot:""}])},95:function(t,e,n){var i=n(94);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(77)("12d0c0c5",i,!0)},96:function(t,e,n){n(95);var i=n(26)(n(90),n(97),null,null);t.exports=i.exports},97:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-component"},[n("svg",{staticClass:"spinner",style:t.loadingSize,attrs:{viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"path",style:t.loadingColor,attrs:{fill:"none","stroke-width":t.stroke,"stroke-linecap":"round",cx:"33",cy:"33",r:"30"}})])])},staticRenderFns:[]}},98:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},99:function(t,e){t.exports=!0}});
//# sourceMappingURL=2.43e78a2dce45e164b4d6.js.map