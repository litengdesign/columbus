var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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