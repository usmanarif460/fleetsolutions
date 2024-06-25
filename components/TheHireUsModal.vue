<template>
  <article class="h-screen w-screen fixed top-0 right-0 bg-black/80 z-50">
    <div class="w-full h-full flex items-center justify-center">
      <dialog
        class="h-4/5 w-4/5 bg-white flex items-center justify-center rounded-md"
      >
        <div class="flex items-center justify-between w-full px-6">
          <div class="px-2 flex-1">
            <div class="flex items-center gap-4">
              <span class="text-purple text-2xl flex items-center self-start">
                <span>{{ currentStep }}</span>
                <span class="text-purple block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-purple"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </span>
              <form class="flex flex-col" @submit.prevent="submitStep">
                <label :for="`input-${currentStep}`" class="text-2xl">
                  {{ currentLabel }} *
                </label>
                <input
                  v-model="inputValue"
                  :type="currentType"
                  :id="`input-${currentStep}`"
                  class="focus:border-none focus:ring-0 text-4xl border-b-purple border-b-4 caret-purple placeholder:text-4xl placeholder:text-purple/80 block pt-2 h-20 w-96"
                  placeholder="Type your answer here..."
                  required
                />
                <button
                  class="bg-primary max-w-max px-4 py-2 text-3xl text-white font-bold mt-4"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="h-96 w-96 bg-primary"></div>
          </div>
        </div>
      </dialog>
    </div>
  </article>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const formData = ref({
  clientName: "",
  companyName: "",
  title: "",
  email: "",
  phoneNumber: "",
  companyAddress: "",
});
const steps = [
  {
    id: 1,
    label: "Enter Client Name Here",
    type: "text",
    key: "clientName",
  },
  {
    id: 2,
    label: "Enter Company Name Here",
    type: "text",
    key: "companyName",
  },
  {
    id: 3,
    label: "Enter Title Here",
    type: "text",
    key: "title",
  },
  {
    id: 4,
    label: "Enter Your Email Here",
    type: "email",
    key: "email",
  },
  {
    id: 5,
    label: "Enter Your Phone Number Here",
    type: "number",
    key: "phoneNumber",
  },
  {
    id: 6,
    label: "Enter Your Company Address Here",
    type: "text",
    key: "companyAddress",
  },
];

const currentStep = ref(1);

const currentLabel = computed(() => {
  return steps.find((step) => step.id === currentStep.value)?.label || "";
});

const currentType = computed(() => {
  return steps.find((step) => step.id === currentStep.value)?.type || "text";
});

const currentKey = computed(() => {
  return steps.find((step) => step.id === currentStep.value)?.key || "";
});

const inputValue = ref("");

watch(currentStep, () => {
  inputValue.value = formData.value[currentKey.value] || "";
});

const submitStep = () => {
  if (currentKey.value) {
    formData.value[currentKey.value] = inputValue.value;
    console.log("From Data", formData);
  }
  if (currentStep.value < steps.length) {
    currentStep.value++;
  } else {
    alert("All steps completed!");
  }
};
</script>
