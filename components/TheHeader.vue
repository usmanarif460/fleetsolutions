<template>
  <div
    class="bg-gradient-to-r from-indigo-100 to-violet-400 w-full object-cover pb-[5vh] min-h-[60vh]"
  >
    <div
      class="max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-5 px-12"
    >
      <TheLogo class="self-start" />
      <div class="flex w-full items-center justify-center">
        <div class="flex gap-5 items-center justify-center w-full md:w-6/12">
          <img src="/images/crown-left.png" alt="" />
          <p class="text-base text-white text-center md:text-left">
            Working Since 2013 on several platforms <br />
            Making <span class="underline text-primary">Clients</span> happier
            morre than ever
          </p>
          <img src="/images/crown-right.png" alt="" />
        </div>
      </div>

      <h1
        class="text-center text-white text-4xl lg:text-huge lg:leading-10 uppercase font-bold"
      >
        Design Your website, promote it, develop it and grow your
        <span class="underline text-primary">business</span>
        with us.
      </h1>
      <TheButton button-text="Apply in 2 minutes" />
    </div>
  </div>
</template>

<script setup></script>
