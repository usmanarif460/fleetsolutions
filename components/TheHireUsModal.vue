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
                <span>1</span>
                <span class="text-purple block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="currentColor"
                    className="size-6 text-purple"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </span>
              <div class="flex flex-col">
                <label for="client-name" class="text-2xl">
                  Enter Client Name Here *
                </label>
                <input
                  type="text"
                  id="client-name"
                  class="focus:border-none focus:ring-0 text-4xl border-b-purple border-b-4 caret-purple placeholder:text-4xl placeholder:text-purple/80 block pt-2 h-20 w-96"
                  placeholder="Type your answer here..."
                />
              </div>
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
<script setup></script>
