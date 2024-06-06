<template>
  <section class="py-[180px] flex items-center justify-center">
    <div class="max-w-7xl">
      <h2 class="lg:text-huge mb-4 font-medium uppercase text-center">
        A professional
        <strong class="font-bold">website that you'll love.</strong>
      </h2>
      <p class="text-center">Fast, mobile optimized and SEO ready.</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-12">
        <TheFeatureCard img-url="/images/crown-left.png" :img-height="50" :img-width="50" heading="mobile optimized"
          description="With over 50% of internet traffic coming from cell phones, we make sure your site is fully mobile optimized." />
        <TheFeatureCard img-url="/images/crown-left.png" :img-height="50" :img-width="50" heading="Stunning designs"
          description="We use some of the world’s most cutting-edge website designs, built by leading graphic designers." />
        <TheFeatureCard img-url="/images/crown-left.png" :img-height="50" :img-width="50" heading="SEO ready"
          description="We ensure that your website is set up to rank highly on Google and other search engines." />
        <TheFeatureCard img-url="/images/crown-left.png" :img-height="50" :img-width="50" heading="Maximum load speed"
          description="We make sure your website visitors don’t wait a millisecond longer than they have to." />
        <TheFeatureCard img-url="/images/crown-left.png" :img-height="50" :img-width="50"
          heading="Cutting-edge security"
          description="All our websites have the leading security features installed, including automated daily back-ups." />
        <TheFeatureCard img-url="/images/crown-left.png" :img-height="50" :img-width="50" heading="Easily customizable"
          description="We’ll show you how to edit your own website so you’ll never have to hire a web developer." />
      </div>
    </div>
  </section>
</template>
<script setup></script>
