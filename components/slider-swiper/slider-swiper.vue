<template>
    <div class="box-container">
        <swiper class="slider" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide"><img src="@/assets/img/1.jpg" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="@/assets/img/2.jpg" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="@/assets/img/3.jpg" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="@/assets/img/4.jpg" alt=""></swiper-slide>
            <swiper-slide class="slide"><img src="@/assets/img/5.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-next'
          }
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
    
      }
    },
    mounted() {
  
    }
  }
</script>

<style scoped lang='scss'>

.slider {
    display: flex;
    justify-content: center;
   
}

.slide {
    max-height: 600px;
    
   
    img {
        max-height: 600px;
    }
}

</style>