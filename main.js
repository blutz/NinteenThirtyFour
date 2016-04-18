!function(){"use strict";function e(e){e=e||{};var i={},a=e.code||r.code.val();i.code=a,n[a]?(i.activePage="details",i.sessionDetails=t[n[a]],s.bbq.pushState({"application-code":a})):(i.activePage="intro",i.codeError=!0),o(i)}function i(){var i={},a=s.bbq.getState();a["application-code"]?e({code:a["application-code"]}):(i.activePage="intro",o(i))}function o(e){if(r.intro.hide(),r.details.hide(),"intro"==e.activePage)r.intro.show(),r.code.val(e.code),e.codeError?(r.code.addClass("is-invalid-input"),r.codeFormError.show()):(r.code.removeClass("is-invalid-input"),r.codeFormError.hide());else if("details"==e.activePage){r.details.find("h2").html(e.sessionDetails.title),r.details.find("h4").html(e.sessionDetails.subtitle);var i="https://docs.google.com/forms/d/"+e.sessionDetails.formId+"/viewform?embedded=true";r.form[0].src=i,r.details.show()}}var s=jQuery,a=s('meta[name="unicamp-page"]').attr("value");if("camper-application"==a){var t={session1:{},session2:{},session3:{},session4:{},session5:{},session6:{title:"Session 6: Healthy Lifestyles",subtitle:"Children's Hospital Los Angeles",formId:"1uMB3YMnie2Pt3QibExqsN-SY1xqc3saJrR5cafvLBhQ"},session7:{}},n={chla16:"session6"},r={};r.intro=s("#applicationIntro"),r.details=s("#applicationDetails"),r.code=s("#applicationCode"),r.codeForm=s("#applicationCodeForm"),r.codeFormError=s("#applicationCodeFormError"),r.form=s("#applicationForm"),r.codeForm.submit(function(i){i.preventDefault(),e()}),s(window).bind("hashchange",i),s(window).trigger("hashchange")}}();

!function(){"use strict";function t(t,e,i){this.ANIMATION_CLASS_PREFIX="animation-block-",this.el=s(t),this.numBlocks=e,this.elHeight=t.innerHeight(),this.elOffsetTop=t.offset().top,this.deadZone=i,this.sceneHeight=this.elHeight-this.deadZone,this.setBlockOffsets(),s(window).scroll(this.scrollHandler.bind(this))}var s=jQuery;t.prototype.setBlockOffsets=function(){this.blockOffsets=[],this.blockHeight=this.sceneHeight/this.numBlocks;for(var t=0;t<this.numBlocks;t++)this.blockOffsets.push((t+1)*this.blockHeight)},t.prototype.scrollHandler=function(){this.setBlock(this.getCurrentBlock())},t.prototype.getCurrentBlock=function(){for(var t,s=window.scrollY-this.elOffsetTop,e=0;e<this.blockOffsets.length;e++)if(s<this.blockOffsets[e]){t=e+1;break}return t=t||this.blockOffsets.length},t.prototype.setBlock=function(t){var s=this.ANIMATION_CLASS_PREFIX+t;this.el.hasClass(s)||(this.removeAnimationClasses(),this.el.addClass(s))},t.prototype.removeAnimationClasses=function(){for(var t=1;t<this.numBlocks+1;t++)this.el.removeClass(this.ANIMATION_CLASS_PREFIX+t)},s("[data-blocked-animation]").each(function(e,i){var o=s(i),n=parseInt(o.data("blocked-animation-blocks")),l=parseInt(o.data("blocked-animation-dead-zone"))||0;new t(o,n,l)})}();

!function(){"use strict";var t=jQuery,n="expand--collapsed",e="expand__button",i="expand__content",s=250,o=function(n){this.el=t(n),this.toggleButton=this.el.find("."+e);var s=this.el.data("expand");this.contentContainer=t("#"+s),this.contentContainer.length||(this.contentContainer=this.el.find("."+i)),this.isVisible()?this.show():this.hide(),this.setHandlers()};o.prototype.setHandlers=function(){this.toggleButton.click(this.toggle.bind(this))},o.prototype.toggle=function(t){t.preventDefault(),this.isVisible()?this.hide():this.show()},o.prototype.isVisible=function(){return!this.el.hasClass(n)},o.prototype.hide=function(){this.el.addClass(n),this.contentContainer.slideUp(s)},o.prototype.show=function(){this.el.removeClass(n),this.contentContainer.slideDown(s)},t(".expand").each(function(t,n){window.a=new o(n)})}();

!function(){"use strict";var o=jQuery;o("[data-fixed-block]").each(function(n,t){var c=o(t),r=c.parent();o(window).scroll(function(){var o=window.scrollY-r.offset().top;0>o&&(o=0),c.css({"margin-top":o})})})}();

!function(){"use strict";var e=jQuery,t="header__menu-container--closed",i="header__items",n="header__menu-container__expand",s=2e3,h=500,o=function(t){this.containerEl=e(t),this.header=e("header"),this.menuEl=this.containerEl.find("."+i),this.expandEl=this.containerEl.find("."+n),this.open=!0,this.hovered=!1,this.scrolledAway=!1,this.timer=void 0,this.setHandlers(),this.draw()};o.prototype.setHandlers=function(){e(document).scroll(this.handleScroll.bind(this)),this.header.hover(this.handleHoverIn.bind(this),this.handleHoverOut.bind(this))},o.prototype.handleScroll=function(){window.scrollY>h?this.scrolledAway=!0:this.scrolledAway=!1,this.checkAndDrawMenu()},o.prototype.handleHoverIn=function(){this.timer&&window.clearTimeout(this.timer),this.hovered=!0,this.checkAndDrawMenu()},o.prototype.handleHoverOut=function(){this.timer=window.setTimeout(this.checkAndDrawMenu.bind(this),s),this.hovered=!1},o.prototype.checkAndDrawMenu=function(){this.timer=void 0,this.scrolledAway&&!this.hovered?this.open=!1:this.open=!0,this.draw()},o.prototype.draw=function(){this.open&&this.containerEl.hasClass(t)?this.containerEl.removeClass(t):this.open||this.containerEl.hasClass(t)||this.containerEl.addClass(t)};var r=document.getElementById("header-menu");new o(r)}();

!function(){"use strict";var e=jQuery;e(".hover-image").each(function(o,t){var i=e(t).find(".hover-image__text__blurb");e(t).hover(function(){i.stop().show(250)},function(){i.stop().hide(250)})})}();

!function(){"use strict";var t=jQuery;t("[data-rotate-with-scroll]").each(function(o,r){t(window).scroll(function(){var o=window.scrollY/2;t(r).css({transform:"rotate("+o+"deg)"})})})}();

!function(){"use strict";jQuery(document).foundation()}();

!function(){"use strict";var o=jQuery,n=[];o(document).ready(function(){o("[data-steady-background]").each(function(c,s){n.push({el:o(s),offset:o(s).scrollTop()}),o(s).css("background-position-y",0)})}),o(window).scroll(function(){var o=window.scrollY;n.forEach(function(n){var c=n.offset;n.el.css("background-position-y",o-c)})})}();


//# sourceMappingURL=/wp-content/themes/ninteen-thirty-four/main.js.map
