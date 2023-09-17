!function(){var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r="Expected a function",o=0/0,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),g=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return d.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function y(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function T(t){if("number"==typeof t)return t;if("symbol"==typeof(n=t)||n&&"object"==typeof n&&"[object Symbol]"==g.call(n))return o;if(y(t)){var n,i="function"==typeof t.valueOf?t.valueOf():t;t=y(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):u.test(t)?o:+t}i=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(t,n,i){var o=!0,a=!0;if("function"!=typeof t)throw TypeError(r);return y(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(t,n,i){var o,a,u,f,l,c,s=0,m=!1,d=!1,g=!0;if("function"!=typeof t)throw TypeError(r);function j(n){var i=o,r=a;return o=a=void 0,s=n,f=t.apply(r,i)}function x(t){var i=t-c,r=t-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===c||i>=n||i<0||d&&r>=u}function S(){var t,i,r,o=b();if(x(o))return h(o);// Restart the timer.
l=setTimeout(S,(t=o-c,i=o-s,r=n-t,d?v(r,u-i):r))}function h(t){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(l=void 0,g&&o)?j(t):(o=a=void 0,f))}function O(){var t,i=b(),r=x(i);if(o=arguments,a=this,c=i,r){if(void 0===l)return(// Reset any `maxWait` timer.
s=t=c,// Start the timer for the trailing edge.
l=setTimeout(S,n),m?j(t):f);if(d)return(// Handle invocations in a tight loop.
l=setTimeout(S,n),j(c))}return void 0===l&&(l=setTimeout(S,n)),f}return n=T(n)||0,y(i)&&(m=!!i.leading,u=(d="maxWait"in i)?p(T(i.maxWait)||0,n):u,g="trailing"in i?!!i.trailing:g),O.cancel=function(){void 0!==l&&clearTimeout(l),s=0,o=c=a=l=void 0},O.flush=function(){return void 0===l?f:h(b())},O}(t,n,{leading:o,maxWait:n,trailing:a})};let j="feedback-form-state",x={input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},S=document.querySelector(".feedback-form");S.addEventListener("input",((t=i)&&t.__esModule?t.default:t)(function(t){h[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))},500)),S.addEventListener("submit",function(t){if(t.preventDefault(),console.log("Будь ласка, заповніть поля!"),""===O.email||""===O.message)return alert("Будь ласка, заповніть поля!");console.log(`email: ${x.input.value}, message: ${x.textarea.value}`),t.currentTarget.reset(),localStorage.removeItem(j),h={email:"",message:""},e.currentTarget.reset(),dataForm={}});let h={email:"",message:""},O=JSON.parse(localStorage.getItem(j));O.email&&O.message?(x.input.value=O.email,x.textarea.value=O.message,h.email=O.email,h.message=O.message):console.log("є пусті поля")}();//# sourceMappingURL=03-feedback.2d2f8981.js.map

//# sourceMappingURL=03-feedback.2d2f8981.js.map
