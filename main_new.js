(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);

$(document).ready(function () {
    
    var state=0;
    var flg=0;
    var flg2=0;
    var left1 = 175;
    var right1 = 75;
    var left2 = 175+150;
    var left3 = 175+300;
    var left4 = 175+450;
    var left5 = 175+600;
    var left6 = 175+750;
    var left7 = 175+900;
    var left8 = 175+1050;
    
    var wid=window.innerWidth;
    var hei=window.innerHeight;
    $("body").css("height",27584+hei+"px");
    
    //products//
    
    
    
    $("#pl1").click(function(){$("#pro1").fadeIn();});
    $(".hover1").click(function(){$("#pro1").fadeOut();});
    $(".hover2").click(function(){$("#pro1").fadeOut();});
    
    $("#pl2").click(function(){$("#pro2").fadeIn();});
    $(".hover1").click(function(){$("#pro2").fadeOut();});
    $(".hover2").click(function(){$("#pro2").fadeOut();});
    
    $("#pl3").click(function(){$("#pro3").fadeIn();});
    $(".hover1").click(function(){$("#pro3").fadeOut();});
    $(".hover2").click(function(){$("#pro3").fadeOut();});
    
    $("#pl4").click(function(){$("#pro4").fadeIn();});
    $(".hover1").click(function(){$("#pro4").fadeOut();});
    $(".hover2").click(function(){$("#pro4").fadeOut();});
    
    $("#pl5").click(function(){$("#pro5").fadeIn();});
    $(".hover1").click(function(){$("#pro5").fadeOut();});
    $(".hover2").click(function(){$("#pro5").fadeOut();});
    
    $("#pl6").click(function(){$("#pro6").fadeIn();});
    $(".hover1").click(function(){$("#pro6").fadeOut();});
    $(".hover2").click(function(){$("#pro6").fadeOut();});
    
    $("#pl7").click(function(){$("#pro7").fadeIn();});
    $(".hover1").click(function(){$("#pro7").fadeOut();});
    $(".hover2").click(function(){$("#pro7").fadeOut();});
    
    $("#pl8").click(function(){$("#pro8").fadeIn();});
    $(".hover1").click(function(){$("#pro8").fadeOut();});
    $(".hover2").click(function(){$("#pro8").fadeOut();});
    
    $("#pl9").click(function(){$("#pro9").fadeIn();});
    $(".hover1").click(function(){$("#pro9").fadeOut();});
    $(".hover2").click(function(){$("#pro9").fadeOut();});
    
    $("#pl10").click(function(){$("#pro10").fadeIn();});
    $(".hover1").click(function(){$("#pro10").fadeOut();});
    $(".hover2").click(function(){$("#pro10").fadeOut();});
    
    $("#pl11").click(function(){$("#pro11").fadeIn();});
    $(".hover1").click(function(){$("#pro11").fadeOut();});
    $(".hover2").click(function(){$("#pro11").fadeOut();});
    
    $("#pl12").click(function(){$("#pro12").fadeIn();});
    $(".hover1").click(function(){$("#pro12").fadeOut();});
    $(".hover2").click(function(){$("#pro12").fadeOut();});
    
    $("#pl13").click(function(){$("#pro13").fadeIn();});
    $(".hover1").click(function(){$("#pro13").fadeOut();});
    $(".hover2").click(function(){$("#pro13").fadeOut();});
    
    $("#pl14").click(function(){$("#pro14").fadeIn();});
    $(".hover1").click(function(){$("#pro14").fadeOut();});
    $(".hover2").click(function(){$("#pro14").fadeOut();});
    
    $("#pl15").click(function(){$("#pro15").fadeIn();});
    $(".hover1").click(function(){$("#pro15").fadeOut();});
    $(".hover2").click(function(){$("#pro15").fadeOut();});
    
    $("#pl16").click(function(){$("#pro16").fadeIn();});
    $(".hover1").click(function(){$("#pro16").fadeOut();});
    $(".hover2").click(function(){$("#pro16").fadeOut();});
    
    $("#pl17").click(function(){$("#pro17").fadeIn();});
    $(".hover1").click(function(){$("#pro17").fadeOut();});
    $(".hover2").click(function(){$("#pro17").fadeOut();});
    
    $("#pl18").click(function(){$("#pro18").fadeIn();});
    $(".hover1").click(function(){$("#pro18").fadeOut();});
    $(".hover2").click(function(){$("#pro18").fadeOut();});
    
    $("#pl19").click(function(){$("#pro19").fadeIn();});
    $(".hover1").click(function(){$("#pro19").fadeOut();});
    $(".hover2").click(function(){$("#pro19").fadeOut();});
    
    $("#pl20").click(function(){$("#pro20").fadeIn();});
    $(".hover1").click(function(){$("#pro20").fadeOut();});
    $(".hover2").click(function(){$("#pro20").fadeOut();});
    
    $("#pl21").click(function(){$("#pro21").fadeIn();});
    $(".hover1").click(function(){$("#pro21").fadeOut();});
    $(".hover2").click(function(){$("#pro21").fadeOut();});
    
    $("#pl22").click(function(){$("#pro22").fadeIn();});
    $(".hover1").click(function(){$("#pro22").fadeOut();});
    $(".hover2").click(function(){$("#pro22").fadeOut();});
    
    $("#pl23").click(function(){$("#pro23").fadeIn();});
    $(".hover1").click(function(){$("#pro23").fadeOut();});
    $(".hover2").click(function(){$("#pro23").fadeOut();});
    
    $("#pl24").click(function(){$("#pro24").fadeIn();});
    $(".hover1").click(function(){$("#pro24").fadeOut();});
    $(".hover2").click(function(){$("#pro24").fadeOut();});
    
    $("#pl25").click(function(){$("#pro25").fadeIn();});
    $(".hover1").click(function(){$("#pro25").fadeOut();});
    $(".hover2").click(function(){$("#pro25").fadeOut();});
    
    $("#pl26").click(function(){$("#pro26").fadeIn();});
    $(".hover1").click(function(){$("#pro26").fadeOut();});
    $(".hover2").click(function(){$("#pro26").fadeOut();});
    
    $("#pl27").click(function(){$("#pro27").fadeIn();});
    $(".hover1").click(function(){$("#pro27").fadeOut();});
    $(".hover2").click(function(){$("#pro27").fadeOut();});
    
    $("#pl28").click(function(){$("#pro28").fadeIn();});
    $(".hover1").click(function(){$("#pro28").fadeOut();});
    $(".hover2").click(function(){$("#pro28").fadeOut();});
    
    $("#pl29").click(function(){$("#pro29").fadeIn();});
    $(".hover1").click(function(){$("#pro29").fadeOut();});
    $(".hover2").click(function(){$("#pro29").fadeOut();});
    
    $("#pl30").click(function(){$("#pro30").fadeIn();});
    $(".hover1").click(function(){$("#pro30").fadeOut();});
    $(".hover2").click(function(){$("#pro30").fadeOut();});
    
    $("#pl31").click(function(){$("#pro31").fadeIn();});
    $(".hover1").click(function(){$("#pro31").fadeOut();});
    $(".hover2").click(function(){$("#pro31").fadeOut();});

    $("#pl202").click(function(){$("#pro202").fadeIn();});
    $(".hover1").click(function(){$("#pro202").fadeOut();});
    $(".hover2").click(function(){$("#pro202").fadeOut();});
    
    ///////////
    
    
    $(".btn").mouseenter(function(){$(".morebox").stop(true).animate({bottom:"0%"},300,'easeInOutQuad');
                                    $(".infobox").stop(true).animate({bottom:"40%"},300,'easeInOutQuad');});
    $(".productbox").mouseover(function(){$(".morebox").stop(true).animate({bottom:"-40%"},300,'easeInOutQuad');
                                         $(".infobox").stop(true).animate({bottom:"0%"},300,'easeInOutQuad');});
    $(".hover1").mouseover(function(){$(".morebox").stop(true).animate({bottom:"-40%"},300,'easeInOutQuad');
                                     $(".infobox").stop(true).animate({bottom:"0%"},300,'easeInOutQuad');});
    $(".hover2").mouseover(function(){$(".morebox").stop(true).animate({bottom:"-40%"},300,'easeInOutQuad');
                                     $(".infobox").stop(true).animate({bottom:"0%"},300,'easeInOutQuad');});
    
    $("#cir1").click(function(){
            
            $("#bar2").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"100%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"200%"},1500,'easeInOutQuart');
            $("#circ1").fadeIn();$("#circ2").fadeOut();$("#circ3").fadeOut(); 
        state=0;
    });
    
    $("#cir2").click(function(){
            
            $("#bar2").stop(true).animate({left:"-100%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"100%"},1500,'easeInOutQuart');
            $("#circ2").fadeIn();$("#circ1").fadeOut();$("#circ3").fadeOut();
        state=1;
    });
                      
    $("#cir3").click(function(){
            
            $("#bar2").stop(true).animate({left:"-200%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"-100%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#circ3").fadeIn();$("#circ2").fadeOut();$("#circ1").fadeOut();
        state=2;
    });
    
                         
    if(state==0){$("#circ1").fadeIn();$("#circ2").fadeOut();$("#circ3").fadeOut();}
    if(state==1){$("#circ2").fadeIn();$("#circ1").fadeOut();$("#circ3").fadeOut();}
    if(state==2){$("#circ3").fadeIn();$("#circ2").fadeOut();$("#circ1").fadeOut();}
    $("#btnright1").click(function(){
        if(state==0){
            
            $("#bar2").stop(true).animate({left:"-100%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"100%"},1500,'easeInOutQuart');
            $("#circ2").fadeIn();$("#circ1").fadeOut();$("#circ3").fadeOut();
            state=1;
        }
        else if(state==1){
            
            $("#bar2").stop(true).animate({left:"-200%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"-100%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#circ3").fadeIn();$("#circ2").fadeOut();$("#circ1").fadeOut();
            state=2;
        }
        else if(state==2){
            
            $("#bar2").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"100%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"200%"},1500,'easeInOutQuart');
            $("#circ1").fadeIn();$("#circ2").fadeOut();$("#circ3").fadeOut();
            state=0;
        }
    });

    
    $("#btnleft1").click(function(){
        if(state==1){
            
            $("#bar2").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"100%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"200%"},1500,'easeInOutQuart');
            $("#circ1").fadeIn();$("#circ2").fadeOut();$("#circ3").fadeOut();
            state=0;
        }
        else if(state==2){
            
            $("#bar2").stop(true).animate({left:"-100%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"100%"},1500,'easeInOutQuart');
            $("#circ2").fadeIn();$("#circ1").fadeOut();$("#circ3").fadeOut();
            state=1;
        }
        else if(state==0){
            
            $("#bar2").stop(true).animate({left:"-200%"},1500,'easeInOutQuart');
            $("#bar3").stop(true).animate({left:"-100%"},1500,'easeInOutQuart');
            $("#bar4").stop(true).animate({left:"0%"},1500,'easeInOutQuart');
            $("#circ3").fadeIn();$("#circ2").fadeOut();$("#circ1").fadeOut();
            state=2;
        }
    });
    
    $("#btn3").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:0}, 2500, 'easeInOutQuad' );
   
    });
    
    $("#cell1").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:2000}, 2500, 'easeInOutQuad' );
         $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });
    
    $("#cell2").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:5400}, 2500, 'easeInOutQuad' );
         $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });

    $("#cell3").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:8300}, 2500, 'easeInOutQuad' );
         $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });
    
    
    
     $("#cell4").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:11300}, 2500, 'easeInOutQuad' );
         $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
         $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
         $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });
    
    $("#cell5").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:14300}, 2500, 'easeInOutQuad' );
         $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });
    
    $("#cell6").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:17400}, 2500, 'easeInOutQuad' );
        $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });
    
    
    $("#cell7").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:21500}, 2500, 'easeInOutQuad' );
        $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });
    
    
    
    $("#cell8").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:24400}, 2500, 'easeInOutQuad' );
        $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });

     $("#cell9").click(function(){
        
        $("body,html").stop(true).animate({scrollTop:27500}, 2500, 'easeInOutQuad' );
        $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").fadeOut();
        $(".navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        flg=0;
    });
    
    $("#menu").click(function(){
    if(flg==0) {   

    
        $("#container").stop(true).animate({left:"100%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"100%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"100%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"100%"},1000,'easeInOutQuart');
        $("#navigator").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("body").css('overflow','hidden');
        $("#logosmall").stop(true).animate({opacity:'1'},400);
        $("#menucover").show();
        flg=1;
    }
    else {
        
        $("#container").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".sroll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#roll").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $(".showpro").stop(true).animate({left:"0%"},1000,'easeInOutQuart');
        $("#navigator").stop(true).animate({left:"-100%"},1000,'easeInOutQuart');
        $("body").css("overflow","auto");
        $("#menucover").hide();
        if(flg2==0){
        $("#logosmall").stop(true).animate({opacity:'0'},300);}
        flg=0;
    }
    });

    
    var nesbat=hei/wid;
    
    $(window).scroll(function(){
          var delay = 0;
          var topPosion = $(window).scrollTop();
          var unit = $(window).scrollTop() / 10;
          if ((topPosion >= 17200)&&(topPosion <= 18300)) {
            delay = unit - 1720;
          }
          if(topPosion >= 18300) {
            delay = 1830-1720;
          }
          // var unit2 = ( $(window).scrollTop() / 10 ) - 325;
          // var unit3 = $(window).scrollTop() / 10 - (175+150+150+50+100);
          // var unit4 = $(window).scrollTop() / 10 - (175+150+150+50+200+100+100);
          // var unit5 = $(window).scrollTop() / 10 - (175+150+150+50+200+100+100+100);
          // var unit6 = $(window).scrollTop() / 10 - (175+150+150+50+200+100+100+100);
        
          var unithei = unit * -1 ;
        
          left1 = 175 - unit ;
          right1 = -75 + unit ;
          left2 = 175+150 - unit;
          left3 = 175+300 - unit; 
          left4 = 175+450 - unit ;
          left5 = 175+600 - unit ;
          left21 = 175+750 - unit;
          left31 = 175+900 - unit;
          left6 = 175+1050 - unit ;
          left7 = 175+1300 - unit ;
          left8 = 175+1450 - unit;
          left9 = 175+1600 - unit + delay;
          left10 = 175+1750 - unit + delay;
          left11 = 175+1900 - unit + delay;
          left12 = 175+2050 - unit + delay;
          left13 = 175+2200 - unit + delay;
          left14 = 175+2350 - unit + delay;
          left15 = 175+2500 - unit + delay;
            
            
          $("#roll").css("top",unithei+"%");
            
        
            $("#slide1").css("left",left1+"%");
            $("#maskleft").css("right",right1+(-0.1)+"%");
            $("#maskright").css("left",left1+150+(-0.1)+"%");
        
            $("#slide2").css("left",left2+"%");
            $("#maskright2").css("left",left2+150+(-0.1)+"%");
        
            $("#slide3").css("left",left3+"%");
            $("#maskright3").css("left",left3+150+(-0.1)+"%");
        
            $("#slide4").css("left",left4+"%");
            $("#maskright4").css("left",left4+150+(-0.1)+"%");
        
            $("#slide5").css("left",left5+"%");
            $("#maskright5").css("left",left5+150+(-0.1)+"%");

            $("#slide21").css("left",left21+"%");
            $("#maskright21").css("left",left21+150+(-0.1)+"%");
        
            $("#slide31").css("left",left31+"%");
            $("#maskright31").css("left",left31+150+(-0.1)+"%");
        
            $("#slide6").css("left",left6+"%");
            $("#maskright6").css("left",left6+150+(-0.1)+"%");
        
            $("#slide7").css("left",left7-100+"%");
            $("#maskright7").css("left",left7+50+(-0.1)+"%");
        
            $("#slide8").css("left",left8-100+"%");
            $("#maskright8").css("left",left8+50+(-0.1)+"%");

            $("#slide9").css("left",left9-100+"%");
            $("#maskright9").css("left",left9+50+(-0.1)+"%");

            $("#slide10").css("left",left10-100+"%");
            $("#maskright10").css("left",left10+50+(-0.1)+"%");

            $("#slide11").css("left",left11-100+"%");
            $("#maskright11").css("left",left11+50+(-0.1)+"%");

            $("#slide12").css("left",left12-100+"%");
            $("#maskright12").css("left",left12+50+(-0.1)+"%");

            $("#slide13").css("left",left13-100+"%");
            $("#maskright13").css("left",left13+50+(-0.1)+"%");

            $("#slide14").css("left",left14-100+"%");
            $("#maskright14").css("left",left14+50+(-0.1)+"%");

            $("#slide15").css("left",left15-100+"%");
            $("#maskright15").css("left",left15+50+(-0.1)+"%");
        
        
            // if(unit<175+50+100){
            //     flg2=0;
            //     $("#slide0").css("background-size",100+(unit/25)+"%");
            //     $("#slide1").css("background-size",100+(unit/25)+"%");
            //     $("#maskl1").css("background-size",100+(unit/25)+"%");
            //     $("#maskr1").css("background-size",100+(unit/25)+"%");
            //     $("#logosmall").stop(true).animate({opacity:'0'},300);
            // }
        
            // if(unit>175+150-100 && unit<175+150+150+50+100){
            //    flg2=1;
            //    $("#slide2").css("background-size",100+(unit2/25)+5+"%");
            //    $("#maskr2").css("background-size",100+(unit2/25)+5+"%");
            //    $("#slide3").css("background-size",100+(unit2/25)+5+"%"); 
            //    $("#maskr3").css("background-size",100+(unit2/25)+5+"%");
            //     $("#logosmall").stop(true).animate({opacity:'1'},400);
            // }
        
            // if(unit>175+150+150+50+100-100 && unit<175+150+150+50+200+100+100){
            //    $("#slide4").css("background-size",100+(unit3/25)+5+"%");
            //    $("#maskr4").css("background-size",100+(unit3/25)+5+"%");
            //    $("#slide5").css("background-size",100+(unit3/25)+5+"%");
            //    $("#maskr5").css("background-size",100+(unit3/25)+5+"%");
            //    $(".maskprorr").css("background-size",100+(unit3/25)+5+"%");
            //    $(".maskproll").css("background-size",100+(unit3/25)+5+"%");
            //     $("#logosmall").stop(true).animate({opacity:'1'},400);
                
            // }
        
            // if(unit>175+150+150+50+200+100+100-100 && unit<175+150+150+50+200+200+100+100+100){
            //    $("#slide21").css("background-size",100+(unit4/25)+5+"%");
            //    $("#maskr21").css("background-size",100+(unit4/25)+5+"%");
            //    $("#slide31").css("background-size",100+(unit4/25)+5+"%");
            //    $("#maskr31").css("background-size",100+(unit4/25)+5+"%"); 
            //    $("#slide6").css("background-size",100+(unit4/25)+5+"%");
            //    $("#maskr6").css("background-size",100+(unit4/25)+5+"%");
            //    $("#slide7").css("background-size",100+(unit4/25)+5+"%");
            //    $("#maskr7").css("background-size",100+(unit4/25)+5+"%"); 
            //     $("#logosmall").stop(true).animate({opacity:'1'},400);
            // }
        
            // if(unit>175+150+150+50+200+200+100+100){
            //    $("#slide8").css("background-size",100+(unit5/25)+"%");
            //    $("#maskr8").css("background-size",100+(unit5/25)+"%"); 
            //    $("#shaddow").css("opacity",((unit6-225)/100));
            //     $("#logosmall").stop(true).animate({opacity:'1'},400);
            // }
        
    });
    
});