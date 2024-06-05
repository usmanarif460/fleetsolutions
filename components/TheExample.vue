<template>
  <section
    class="flex items-center justify-center bg-neutral-300 py-[180px] relative"
  >
    <div class="max-w-7xl p-2.5">
      <h2 class="uppercase lg:text-huge pb-5 mb-4">
        Take a <strong>look on few examples</strong>
      </h2>
      <Carousel :items-to-show="2">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">
            {{ slide }}
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}
.carousel__prev {
  position: absolute;
  left: 0;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
