function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(t,e,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function E(t){return c=t,a=setTimeout(T,e),l?b(t):u}function S(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function T(){var t=m();if(S(t))return O(t);a=setTimeout(T,function(t){var n=e-(t-f);return s?p(n,i-(t-c)):n}(t))}function O(t){return a=void 0,v&&r?b(t):(r=o=void 0,u)}function j(){var t=m(),n=S(t);if(r=arguments,o=this,f=t,n){if(void 0===a)return E(f);if(s)return a=setTimeout(T,e),b(f)}return void 0===a&&(a=setTimeout(T,e)),u}return e=y(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},j.flush=function(){return void 0===a?u:O(m())},j}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:r,maxWait:e,trailing:o})};const b={formEl:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),STORAGE_KEY:"feedback-form-state"};!function(){const t=JSON.parse(localStorage.getItem(b.STORAGE_KEY));t&&(b.input.value=t.email,b.textarea.value=t.message)}(),b.formEl.addEventListener("input",t(e)((function(t){E[t.target.name]=t.target.value,localStorage.setItem(b.STORAGE_KEY,JSON.stringify(E))}),500)),b.formEl.addEventListener("submit",(function(t){t.preventDefault(),console.log(E),localStorage.removeItem(b.STORAGE_KEY),t.currentTarget.reset()}));const E={};
//# sourceMappingURL=03-feedback.e3300866.js.map