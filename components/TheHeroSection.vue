<template>
  <section class="max-w-7xl px-8 lg:px-0 mx-auto">
    <h2 class="uppercase lg:text-huge pb-5 mb-4"></h2>
    <Carousel :items-to-show="1" class="group min-w-96" :wrap-around="true">
      <Slide v-for="slide in 5" :key="slide">
        <div class="relative carousel__item bg-black h-48">
          <img
            :src="`/images/carousel/image_${slide}.jpg`"
            alt=""
            class="h-full w-full bg-red-500 object-cover"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>
<style lang="css">
@import "vue3-carousel/dist/carousel.css";

.carousel__item {
  min-height: 800px;
  min-width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 16px;
  box-shadow: inset;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination {
  position: absolute;
  bottom: 6px;
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  gap: 10px;
}

.carousel__pagination-button {
  display: block;
  border: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
}

.carousel__pagination-button::after {
  display: block;
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fdb226;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: rgb(240, 196, 70);
}

.carousel__prev,
.carousel__next {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: content-box;
  background: rgb(255 255 255);
  opacity: 1;
  border-radius: 50%;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: white;
  background-color: rgb(240, 196, 70);
}

.tick {
  color: white;
}
</style>
