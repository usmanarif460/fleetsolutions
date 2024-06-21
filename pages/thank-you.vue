<template>
  <section class="max-w-7xl mx-auto flex flex-col items-center p-20 justify-center">
    <div class="flex flex-col items-center justify-center">
      <div class="text-center text-xl font-bold">
        Thanks. Your application has been submitted.
      </div>
      <div class="text-huge">Invite Your Friends <strong>To Apply—And Earn.</strong></div>
      <div class="flex items-center justify-center gap-3 text-lg">
        <p class="underline text-blue-500 underline-offset-2">Earn $50</p> for every person you invite whose application
        we accept!
      </div>
      <div class=" py-20 pointer-events-none inset-x-0 bottom-0 px-6  w-full">
        <div class=" rounded-xl bg-black p-6 shadow-lg ring-1 ring-gray-900/10">
          <p class="text-huge leading-6 text-white">Invite And Get <strong
              class="underline underline-offset-2 text-purple">$50</strong></p>
          <div>
            <div class="pt-10 w-1/2">
              <label for="email" class="block text-sm font-medium leading-4 text-white">Share Your Link</label>
              <div class="mt-2 flex rounded-md shadow-sm">
                <div class="relative flex flex-grow items-stretch focus-within:z-10">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input type="email" name="email" id="email"
                    class="block w-full rounded-none rounded-l-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="https://thefreewebsiteguys.com/?js=426886" />
                </div>
                <button type="button"
                  class="relative bg-blue-200  -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Copy
                </button>
              </div>
            </div>
          </div>

        </div>
        <div class="py-10">
          <p class="text-huge text-center">It’s Easy To <strong class="font-semibold">Get Started</strong></p>
        </div>


      </div>
    </div>

    <div class="py-10 border-b-2">
      <div class="grid grid-cols-3 gap-5">
        <div>
          <div class="relative w-1/4 mx-auto rounded-full shadow-lg p-6">
            <IconsThankYouIconOne />
            <p class="absolute right-0 top-0 bg-purple px-2 text-white rounded-full text-lg font-bold">1</p>

          </div>
          <p class="mt-5">Share your link with friends on email, social media, or chat. You’ll be giving them a slight
            statistical
            edge.</p>
        </div>
        <div>
          <div class="relative w-1/4 mx-auto rounded-full shadow-lg p-6">
            <IconsThankYouIcontwo />
            <p class="absolute right-0 top-0 bg-purple px-2 text-white rounded-full text-lg font-bold">2</p>
          </div>
          <p class="mt-5">We’ll give several extra points in our review process to those who come in through your custom
            link.
          </p>
        </div>
        <div>
          <div class="relative w-1/4 mx-auto rounded-full shadow-lg p-6">
            <IconsThankYouIconThree />
            <p class="absolute right-0 top-0 bg-purple px-2 text-white rounded-full text-lg font-bold">3</p>

          </div>
          <p class="mt-5">You’ll earn <span class="text-purple">$50</span> for every person you invite whose website we
            build.
          </p>
        </div>

      </div>
    </div>
    <div class="py-10">
      <div>
        <p>*While we don’t earn money in offering free websites, a percentage of our clients come back to us for
          paid
          projects further down the line (which is why we offer an affiliate program). See more about <a href="#"
            class="underline underline-offset-2 text-blue-400">why
            we offer free websites</a>, and our affiliate program’s <a href="#"
            class="underline underline-offset-2 text-blue-400">Terms and
            Conditions.</a></p>
      </div>
    </div>


  </section>
  <TheFooter />
</template>
