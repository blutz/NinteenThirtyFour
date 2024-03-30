(()=>{var e,t={929:(e,t,n)=>{"use strict";const a=window.wp.blocks,o=window.React;var r=n(942),l=n.n(r);const i=window.wp.blockEditor,s=window.wp.components,c=window.wp.data;var u=n(495),p=n.n(u);function m(e){const t=e.filter(((t,n)=>e.indexOf(t)!==n));if(t.length)return t}function d(e,t){for(const n of e){let e=1;for(let a=t.indexOf(n);a>=0;a=t.indexOf(n),e++)t[a]=t[a]+"-"+e}}const h=function(e){const t=e.map((e=>{const t=(new DOMParser).parseFromString(e.title,"text/html").documentElement.textContent;return p()(t,{lower:!0,strict:!0,replacement:"",remove:/[\W]/})}));for(;m(t);)d(m(t),t);return t};function b({tab:e,slug:t,deleteTab:n,showDeleteButton:a,showReorderButtons:r,handleMoveUp:l,handleMoveDown:i,isFirst:c,isLast:u}){return(0,o.createElement)("div",{className:"unicamp-blocks__hashtabs__tab-control"},(0,o.createElement)("div",null,e.title,(0,o.createElement)("div",{className:"unicamp-blocks__hashtabs__tab-control__slug"},"#",t)),(0,o.createElement)("div",null,a&&(0,o.createElement)(s.Button,{icon:"no-alt",isDestructive:!0,variant:"tertiary",size:"small",onClick:function(){c&&u||window.confirm("Delete this tab and its content?")&&n()},label:"Delete",showTooltip:!0,disabled:c&&u}),r&&(0,o.createElement)("span",null,(0,o.createElement)(s.Button,{icon:"arrow-up",variant:"tertiary",size:"small",label:"Move up",showTooltip:!0,onClick:l,disabled:c}),(0,o.createElement)(s.Button,{icon:"arrow-down",variant:"tertiary",size:"small",label:"Move up",showTooltip:!0,onClick:i,disabled:u}))))}function f({tabs:e,slugs:t,handleNewTab:n,handleDeleteTab:a,setTabOrder:r}){const[l,c]=(0,o.useState)(!1);return(0,o.createElement)(i.InspectorControls,null,(0,o.createElement)(s.PanelBody,{title:"Tabs"},e.map(((n,i)=>(0,o.createElement)(b,{tab:n,slug:t[i],key:t[i],deleteTab:()=>a(i),showDeleteButton:!l,showReorderButtons:l,handleMoveUp:()=>function(t){if(0===t)return;const n=[...Array(e.length)].map(((e,n)=>n===t?n-1:n===t-1?t:n));r(n)}(i),handleMoveDown:()=>function(t){if(t+1>=e.length)return;const n=[...Array(e.length)].map(((e,n)=>n===t?n+1:n===t+1?t:n));r(n)}(i),isFirst:0===i,isLast:i+1===e.length}))),(0,o.createElement)("div",{className:"unicamp-blocks__hashtabs__control-buttons"},l?(0,o.createElement)(s.Button,{variant:"link",onClick:()=>c(!1)},"Done"):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.Button,{variant:"link",onClick:n},"+ Add tab"),"  •  ",(0,o.createElement)(s.Button,{variant:"link",onClick:()=>c(!0)},"Reorder")))))}const v=JSON.parse('{"UU":"unicamp/unicamp-blocks-hashtabs"}');(0,a.registerBlockType)(v.UU,{edit:function({clientId:e,attributes:{tabs:t},setAttributes:n}){const[a,r]=(0,o.useState)(0),s=(0,o.useMemo)((()=>h(t)),[t]),u=t.map(((e,t)=>["unicamp/unicamp-blocks-hashtab",{hidden:t!==a}])),{updateBlockAttributes:p,replaceInnerBlocks:m}=(0,c.useDispatch)("core/block-editor"),{innerBlocks:d}=(0,c.useSelect)((t=>({innerBlocks:t("core/block-editor").getBlocks(e)}))),b=d.map((e=>e.clientId)),v=b[a];function E(){p(b,{hidden:!0},!1),p([v],{hidden:!1},!1)}return(0,o.useEffect)(E,[a]),(0,o.useEffect)((()=>{d&&void 0===d?.[0]?.attributes?.hidden&&E()}),[d]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(f,{tabs:t,slugs:s,handleNewTab:function(){n({tabs:[...t,{title:`Tab ${t.length+1}`}]})},handleDeleteTab:function(a){const o=[...d];o.splice(a,1),m(e,o);const r=[...t];r.splice(a,1),n({tabs:r})},setTabOrder:function(a){m(e,a.map((e=>d[e]))),n({tabs:a.map((e=>t[e]))})}}),(0,o.createElement)("div",{...(0,i.useBlockProps)()},(0,o.createElement)("ol",{className:"wp-block-unicamp-unicamp-blocks-hashtabs__tabs alignfull"},0===t.length&&(0,o.createElement)("div",null,"Add a tab in the sidebar to get started"),t.map(((e,s)=>(0,o.createElement)("li",{className:l()("wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab",{"wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab--selected":s===a}),key:s},(0,o.createElement)(i.RichText,{tagName:"span",value:e.title,onChange:e=>function(e,a){const o=[...t];o[a]={...t[a]},o[a].title=e,n({tabs:o})}(e,s),onFocus:()=>r(s),multiline:!1}))))),(0,o.createElement)(i.InnerBlocks,{template:u,templateLock:"all"})))},save:function({attributes:{tabs:e}}){const t=h(e);return(0,o.createElement)("div",{...i.useBlockProps.save()},(0,o.createElement)("div",{className:"wp-block-unicamp-unicamp-blocks-hashtabs__tabs-container"},(0,o.createElement)("ol",{className:"wp-block-unicamp-unicamp-blocks-hashtabs__tabs alignfull"},e.map(((e,n)=>(0,o.createElement)("li",{className:"wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab",key:n,"data-slug":t[n],tabIndex:0,role:"button"},(0,o.createElement)(i.RichText.Content,{tagName:"span",value:e.title})))))),(0,o.createElement)(i.InnerBlocks.Content,null))}})},495:function(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),t=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function n(n,a){if("string"!=typeof n)throw new Error("slugify: string argument expected");var o=t[(a="string"==typeof a?{replacement:a}:a||{}).locale]||{},r=void 0===a.replacement?"-":a.replacement,l=void 0===a.trim||a.trim,i=n.normalize().split("").reduce((function(t,n){var l=o[n];return void 0===l&&(l=e[n]),void 0===l&&(l=n),l===r&&(l=" "),t+l.replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return a.strict&&(i=i.replace(/[^A-Za-z0-9\s]/g,"")),l&&(i=i.trim()),i=i.replace(/\s+/g,r),a.lower&&(i=i.toLowerCase()),i}return n.extend=function(t){Object.assign(e,t)},n},e.exports=t(),e.exports.default=t()},942:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,o,r)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,o,r]=e[u],i=!0,s=0;s<n.length;s++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={378:0,990:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[l,i,s]=n,c=0;if(l.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var u=s(a)}for(t&&t(n);c<l.length;c++)r=l[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=globalThis.webpackChunkunicamp_blocks=globalThis.webpackChunkunicamp_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=a.O(void 0,[990],(()=>a(929)));o=a.O(o)})();