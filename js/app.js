//banner
var swiper = new Swiper('.swiper-banner', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
//产品列表幻灯片
var swiper = new Swiper('.swiper-product', {
    slidesPerView: 3, 
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
new Vue({
    el: '#header',
    data: {
        mindex: 0,
        openMenu:false
    },
    methods:{
        openDropMenu(index){
            this.mindex = index;
        },
        closeDropMenu() {
            this.mindex = 0;
        },
        showMenu(){
            this.openMenu = !this.openMenu;
        }
    }
})