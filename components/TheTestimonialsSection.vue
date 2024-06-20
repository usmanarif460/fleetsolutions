<template>
  <section class="py-24 flex items-center justify-center">
    <article class="w-full lg:max-w-7xl text-center px-8 lg:px-0">
      <h3 class="text-lg md:text-4xl xl:text-huge uppercase mb-8">
        Rated Higher <strong>Than Wix And Squarespace.</strong>
      </h3>
      <p class="mb-12">
        With thousands of positive reviews from clients on Clutch, G2, Facebook,
        TrustPilot, The Free Website Guys is the highest rated free-website
        service in the world. (Not sure? Just google us.)
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20 place-content-center place-items-center">
        <TheReviewCard v-for="review in displayedReviews" :key="review.id" :client-name="review.title.slice(0, 12)"
          :review-text="review.body" :rating="Math.floor(Math.random() * 5) + 1" />
      </div>
      <TheButton v-if="showLoadMoreButton" button-text="Load More" :onClick="loadMoreReviews" />
      <div v-else class="text-gray-600 font-medium h-96 w-full">
        <p>No More Reviews</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const Reviews = ref([]);
const displayedReviews = ref([]);
const pageSize = 6;
let currentPage = 1;

const loadMoreReviews = () => {
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  displayedReviews.value = Reviews.value.slice(startIndex, endIndex);
  currentPage++;
};

const showLoadMoreButton = ref(true);

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    Reviews.value = data;
    loadMoreReviews();
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
});
</script>
