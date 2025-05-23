<template>
  <section class="py-20">
    <div class="mx-auto max-w-screen-xl px-4">
      <!-- Header Section -->
      <div class="mx-auto mb-14 max-w-[845px] text-center">
        <h2 class="text-black-primary mb-8 text-5xl font-bold">About us</h2>
        <p class="text-black-primary text-lg">
          EDUC offers diverse opportunities for universities, partners, communities, and lifelong
          learners. Discover its key action areas!
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Feature Card 1 -->
        <div
          class="border-pink-primary shadow-pink-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
        >
          <div class="flex-grow">
            <h3 class="text-pink-primary mb-4 text-2xl font-bold">Address global challenges</h3>
            <p class="text-black-primary text-base">
              Students, researchers, and staff build a network of shared knowledge and values
              through digital tools and face-to-face interaction, while connecting local
              environments to address global challenges.
            </p>
          </div>
          <div class="pt-6">
            <button
              class="text-pink-primary inline-flex items-center gap-2 text-base font-medium hover:underline"
            >
              Learn more
              <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
            </button>
          </div>
        </div>

        <!-- Feature Card 2 -->
        <div
          class="border-green-primary shadow-green-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
        >
          <div class="flex-grow">
            <h3 class="text-green-primary mb-4 text-2xl font-bold">Foster diversity</h3>
            <p class="text-black-primary text-base">
              We envision inclusive, equitable, and sustainable institutions. EDUC Alliance fosters
              diversity, values uniqueness, and adapts to a dynamic educational landscape.
            </p>
          </div>
          <div class="pt-6">
            <button
              class="text-green-primary inline-flex items-center gap-2 text-base font-medium hover:underline"
            >
              Learn more
              <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
            </button>
          </div>
        </div>

        <!-- Feature Card 3 -->
        <div
          class="border-violet-primary shadow-violet-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
        >
          <div class="flex-grow">
            <h3 class="text-violet-primary mb-4 text-2xl font-bold">Inclusion & gender equality</h3>
            <p class="text-black-primary text-base">
              Inclusion and gender equality are central to our mission. Each institution has plans
              to drive change, ensuring practices welcome underrepresented groups and foster
              positive encounters.
            </p>
          </div>
          <div class="pt-6">
            <button
              class="text-violet-primary inline-flex items-center gap-2 text-base font-medium hover:underline"
            >
              Learn more
              <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Features section with colorful cards and action buttons
</script>
