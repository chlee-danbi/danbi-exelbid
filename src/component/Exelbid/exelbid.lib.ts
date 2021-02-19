// export default (function (w: any, d: any, s: string, u: string) {
//   let ss: any, fs: any, t: any;
//   if (w.exelbidtag) return;
//   t = w.exelbidtag = {};
//   // @ts-ignore
//   if (!window.t) window.t = t;
//   t.push = function () {
//     t.callFunc ? t.callFunc.apply(t, arguments) : t.cmd.push(arguments);
//   };
//   t.cmd = [];
//   ss = document.createElement(s);
//   ss.async = !0;
//   ss.src = u;
//   fs = d.getElementsByTagName(s)[0];
//   fs.parentNode.insertBefore(ss, fs);
// })(window, document, "script", "//st2.exelbid.com/js/ads.js");

export default (function (
  window: (Window & typeof globalThis) | any,
  document: Document,
  exelbidCdnSrc: string
) {
  let t: any;

  if (window.exelbidtag) return;
  t = window.exelbidtag = {};

  if (!window.t) window.t = t;
  t.push = function () {
    t.callFunc ? t.callFunc.apply(t, arguments) : t.cmd.push(arguments);
  };
  t.cmd = [];

  const script = document.createElement("script");
  // => type 을 text/javascript 로 설정하면 광고가 삽입되지 않음
  // script.type = "text/javscript";
  script.async = true;
  script.src = exelbidCdnSrc;

  const fs: HTMLScriptElement = document.getElementsByTagName("script")[0];
  fs?.parentNode?.insertBefore(script, fs);
})(window, document, "//st2.exelbid.com/js/ads.js");
