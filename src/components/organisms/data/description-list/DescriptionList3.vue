<template>
  <article
    class="bg-white-primary border-black-quaternary mx-auto max-w-4xl overflow-hidden rounded-xl border"
  >
    <!-- Header Section with Background -->
    <div class="relative flex h-80 flex-col justify-between p-8">
      <BackgroundImage
        src="/assets/background/project/1.svg"
        alt="Project Background"
        class="rounded-xl"
      />

      <!-- Content over background -->
      <div class="relative z-10 flex h-full flex-col justify-between">
        <div>
          <Badge color="white" size="sm">Research</Badge>
          <h3 class="text-white-primary mt-3 text-4xl font-bold">
            “Smart city app”: Circular Economy IoT framework
          </h3>
        </div>

        <!-- Owner and Rating Info -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <!-- Owner Section -->
          <div class="flex flex-col gap-2">
            <h3 class="text-white-primary text-base font-bold">Owner</h3>
            <div class="flex items-center gap-2">
              <Avatar size="xs">
                <AvatarImage src="https://cataas.com/cat?type=square&width=24" alt="Owner" />
                <AvatarFallback>ZB</AvatarFallback>
              </Avatar>
              <button
                class="text-white-primary flex items-center gap-2 text-base font-medium hover:underline"
              >
                Zsolt Bedo
                <font-awesome-icon
                  :icon="['fas', 'arrow-up-right-from-square']"
                  class="text-white-primary/80 text-xs"
                />
              </button>
            </div>
          </div>

          <!-- Rating Section -->
          <div class="flex flex-col gap-2">
            <h3 class="text-white-primary text-base font-bold">10 Rates</h3>
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1">
                <font-awesome-icon :icon="['fas', 'star']" class="text-white-primary size-4" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-white-primary size-4" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-white-primary size-4" />
                <font-awesome-icon
                  :icon="['fas', 'star-half-stroke']"
                  class="text-white-primary size-4"
                />
                <font-awesome-icon :icon="['far', 'star']" class="text-white-primary size-4" />
              </div>
              <span class="text-white-primary text-base font-medium">3.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="space-y-4 p-8">
      <!-- Duration and Location -->
      <div class="border-black-primary border-b pb-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <h3 class="text-base font-bold">Duration</h3>
            <span class="text-base font-medium">2022-04-29</span>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-base font-bold">Location of implementation</h3>
            <span class="text-base font-medium">Hungary, Pécs</span>
          </div>
        </div>
      </div>

      <!-- Description Section -->
      <div class="border-black-primary space-y-4 border-b pb-4">
        <h3 class="text-base font-bold">Description</h3>
        <p class="text-base leading-relaxed">
          We intend to build an IoT framework that is able to monitor and to simulate as a lining
          lab the "circularity" of a city environment.
        </p>
      </div>

      <!-- Detailed Description Section -->
      <div class="border-black-primary space-y-4 border-b pb-4">
        <h3 class="text-base font-bold">Detailed description</h3>
        <p class="text-base leading-relaxed">
          This cloud based digital tool would have the capability of collect real time information
          via sensors on the energy, waste, water, goods/services cycles of the city that enables it
          to generate indicators that inform decision makers on the "circularity" of the city. Such
          a tool would better support different level professionals to make sound decisions on
          future projects as the system would also be able to support simulations similarly to the
          concept of living labs.
        </p>
      </div>

      <!-- Sharing Reason Section -->
      <div class="border-black-primary space-y-4 border-b pb-4">
        <h3 class="text-base font-bold">Sharing reason</h3>
        <p class="text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id
          tortor. Aliquam erat volutpat. Nulla accumsan, elit sit amet varius semper, nulla mauris
          mollis quam, tempor suscipit diam nulla vel leo.
        </p>
      </div>

      <!-- Topics Section -->
      <div class="border-black-primary space-y-4 border-b pb-4">
        <h3 class="text-base font-bold">Topics</h3>
        <div class="flex flex-wrap gap-2">
          <Badge color="black" size="sm">IoT</Badge>
          <Badge color="black" size="sm">sensor technology</Badge>
          <Badge color="black" size="sm">zero carbon</Badge>
          <Badge color="black" size="sm">circular economy</Badge>
        </div>
      </div>

      <!-- Contact Person Section -->
      <div class="space-y-4">
        <h3 class="text-base font-bold">Contact person</h3>
        <div class="flex items-center gap-2">
          <Avatar size="xs">
            <AvatarImage src="https://cataas.com/cat?type=square&width=24" alt="Contact" />
            <AvatarFallback>ZB</AvatarFallback>
          </Avatar>
          <button class="flex items-center gap-2 text-base font-medium hover:underline">
            Zsolt Bedo
            <font-awesome-icon
              :icon="['fas', 'arrow-up-right-from-square']"
              class="text-black-sexternary text-xs"
            />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Badge } from "../../../atoms/feedback"
import { BackgroundImage } from "../../../atoms/content"
import { Avatar, AvatarImage, AvatarFallback } from "../../../atoms/data-display/avatar"

// Description list component for project showcases with background header and detailed information
</script>
