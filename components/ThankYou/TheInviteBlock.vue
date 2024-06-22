<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-center text-xl font-bold">
      Thanks. Your application has been submitted.
    </div>
    <div class="text-huge uppercase">
      Invite Your Friends <strong>To Apply—And Earn.</strong>
    </div>
    <div class="flex items-center justify-center gap-3 text-lg">
      <p class="underline text-blue-900 font-bold underline-offset-2">
        Earn $50
      </p>
      for every person you invite whose application we accept!
    </div>
    <div class="py-20 text-start pointer-events-none inset-x-0 bottom-0 px-6 w-full">
      <div class="rounded-xl bg-black p-6 shadow-lg ring-1 ring-gray-900/10">
        <p class="text-huge leading-6 text-white">
          Invite And Get
          <strong class="underline underline-offset-2 text-purple">$50</strong>
        </p>
        <div>
          <div class="pt-10">
            <label for="email" class="block text-sm font-medium leading-4 text-white">Share Your Link</label>
            <div class="mt-2 flex rounded-md shadow-sm w-2/4">
              <div class="relative flex flex-grow items-stretch focus-within:z-10">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="email" name="email" readonly id="email"
                  class="block w-full rounded-none rounded-l-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value="https://thefreewebsiteguys.com/?js=426886" />
              </div>
              <button type="button"
                class="relative !cursor-pointer bg-blue-200 -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="py-10">
        <p class="text-huge text-center uppercase">
          It’s Easy To <strong class="font-semibold">Get Started</strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
