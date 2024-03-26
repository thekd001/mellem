gsap.registerPlugin(ScrollTrigger);
// header
let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    if(curr >= 50){
        $('.header-inner').addClass('active')
    } else {
        $('.header-inner').removeClass('active')
    }

    if (curr > lastScroll) {
        $('.header-inner').addClass('hide')
    } else {
        $('.header-inner').removeClass('hide')
    }
    lastScroll = curr;
})

// visual
let visual = gsap.timeline({
    onComplete:function(){
        $('body').removeClass('hidden');
        $('.header-inner').removeClass('hide');
    }
})
visual.from(".intro",1,{ yPercent:100 , delay:0.5}, 'a');
visual.from(".intro-inner",1,{ yPercent:-100 , delay:0.5}, 'a');
visual.from('.effect-none',2, {yPercent:100}, 'b');
visual.from('.effect-none .bg-inner',2, {yPercent:-100, scale:1.1 }, 'b');
visual.from('.vis-item .bg-item li:nth-child(1)',1.5, {yPercent:100}, 'b');
visual.from('.vis-item .bg-item li:nth-child(1) .bg-inner',1.5, {yPercent:-100, scale:1.1}, 'b');
visual.from('.vis-item .bg-item li:nth-child(2)',1, {yPercent:100}, 'b');
visual.from('.vis-item .bg-item li:nth-child(2) .bg-inner',1, {yPercent:-100, scale:1.1}, 'b');
visual.from('.vis-item .bg-item li:nth-child(5)',1, {yPercent:100}, 'b');
visual.from('.vis-item .bg-item li:nth-child(5) .bg-inner',1, {yPercent:-100, scale:1.1}, 'b');
visual.from('.vis-item .bg-item li:nth-child(6)',1.5, {yPercent:100}, 'b');
visual.from('.vis-item .bg-item li:nth-child(6) .bg-inner',1.5, {yPercent:-100, scale:1.1}, 'b');
visual.to('.vis-item .bg-item li:nth-child(1)',1, {yPercent:-100}, 'c');
visual.to('.vis-item .bg-item li:nth-child(1) .bg-inner',1, {yPercent:100}, 'c');
visual.to('.vis-item .bg-item li:nth-child(2)',1.5, {yPercent:-100}, 'c');
visual.to('.vis-item .bg-item li:nth-child(2) .bg-inner',1.5, {yPercent:100}, 'c');
visual.to('.vis-item .bg-item li:nth-child(5)',1.5, {yPercent:-100}, 'c');
visual.to('.vis-item .bg-item li:nth-child(5) .bg-inner',1.5, {yPercent:100}, 'c');
visual.to('.vis-item .bg-item li:nth-child(6)',1, {yPercent:-100}, 'c');
visual.to('.vis-item .bg-item li:nth-child(6) .bg-inner',1, {yPercent:100}, 'c');
visual.to('.sec-visual',1,{'--height':0}, 'c');
visual.from('.sec-visual .text-line01',{yPercent:100}, 'd');
visual.from('.sec-visual .text-line02',{yPercent:100}, 'd');

const vis = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-visual",
        start:"0% 0%",
        end:"100% 0%",      
        scrub:0,
    }
});
vis.to('.sec-visual', {opacity:0.2},'a');
vis.to('.sec-visual .visual-inner', {yPercent:40},'a');

// about slide
const slide1 = new Swiper('.slide-wrap',{   
    effect: "fade",
    autoplay:{
        delay:4000,
    },
    allowTouchMove:false,
    loop:true,
})

slide1.autoplay.stop();
slide1.on("slideChangeTransitionStart",function(){
    $('.slide-wrap .swiper-slide').removeClass('pause');
    $('.slide-wrap .swiper-slide').removeClass('on');
    $('.slide-wrap .swiper-slide').removeClass('out');
    $(slide1.visibleSlides).addClass('on');
    setTimeout(() => {
        $(slide1.visibleSlides).removeClass('on');
        $(slide1.visibleSlides).addClass('out');
    }, 3000);
})

slideflag = false;
ScrollTrigger.create({
    trigger:".sec-slide",
    start:"0% 40%",
    end:"100% 0%",
    onEnter:function(){
        if (slideflag == false) {            
            $(slide1.visibleSlides).addClass('on')
            setTimeout(() => {
                $(slide1.visibleSlides).removeClass('on');
                $(slide1.visibleSlides).addClass('out');
            }, 3000);
            slide1.autoplay.start();
            slideflag = true;
        }
    }
})

$('.sec-slide .btn-play').on("click", function(){
    slide1.autoplay.start();
    $(this).addClass('hide');
    $('.sec-slide .btn-stop').removeClass('hide');    
});

$('.sec-slide .btn-stop').on("click", function(){    
    slide1.autoplay.stop();    
    $(this).addClass('hide');
    $('.sec-slide .btn-play').removeClass('hide');
    $('.slide-wrap .swiper-slide-active').addClass('pause');
});

// project
pj = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-project",
        start:"0% 80%",
        end:"100% 100%"
    },
})
pj.from('.sec-project .text01',{yPercent:100});
pj.from('.sec-project .text02',{yPercent:100});
pj.from('.sec-project .right p',{yPercent:100});
pj.from('.sec-project .project-area li:nth-child(1)',{y:100, opacity:0});
pj.from('.sec-project .project-area li:nth-child(2)',{y:100, opacity:0});
pj.from('.sec-project .project-area li:nth-child(3)',{y:100, opacity:0});

// discover
age = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-age",
        start:"0% 80%",
        end:"100% 100%"
    },
})
age.from('.sec-age .text01',{yPercent:100}, 'a');
age.from('.sec-age .text02',{yPercent:100, delay:0.5}, 'a');
age.from('.sec-age .text-area p',{y:100, opacity:0}, 'b');
age.from('.sec-age .btn-wrap',{y:100, opacity:0}, 'b');
age.from('.sec-age .img-area .left',1, {yPercent:-100, delay:0.5}, 'a');
age.from('.sec-age .img-area .left figure',1, {yPercent:100, delay:0.5, scale:1.1}, 'a');
age.from('.sec-age .img-area .right',1.5, {yPercent:-100, delay:0.5}, 'a');
age.from('.sec-age .img-area .right figure',1.5, {yPercent:100, delay:0.5, scale:1.1}, 'a');

// story
share = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-share",
        start:"0% 80%",
        end:"100% 100%"
    },
})
share.from('.sec-share .title h2',{yPercent:100}, 'a');
share.from('.sec-share .title a',{y:100, opacity:0}, 'a');
share.from('.sec-share .share-inner01',{y:100, opacity:0});
share.from('.sec-share .share-inner02',{y:100, opacity:0});
share.from('.sec-share .share-inner03',{y:100, opacity:0});

// nav
$('.nav-item .link').click(function(){
    $('body').toggleClass('on');
    $('.nav').toggleClass('on');
});

let a = 10;
$('.common-menu .text-area li').hover(function(){
    idx=$(this).index();
    a++;    
    $('.common-menu .img-area li').eq(idx+1).siblings().removeClass('show')
    $('.common-menu .img-area li').eq(idx+1).addClass('show')
  
},function(){
    $('.common-menu .img-area li').siblings().removeClass('show')
})