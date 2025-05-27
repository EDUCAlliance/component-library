<template>
  <Card class="w-[412px]">
    <BackgroundImage src="/assets/background/facilities/element.svg" alt="Project 1" />
    <CardHeader>
      <!-- <BackgroundImage src="/assets/example-image-card.jpg" alt="Project 1" /> -->
      <h4 class="relative text-3xl font-bold text-balance">
        CEING – Interdisciplinary research and gender studies centre
      </h4>
    </CardHeader>
    <CardBody class="text-white-primary mt-12">
      <p class="relative">
        CEING is a Centre of Excellence for the coordination of training and research activities
        based on gender mainstreaming guidelines, which are already present transversally in
        UNICA...
      </p>
      <CardDivider class="mt-4" color="white" />
      <div class="relative flex items-center gap-3 py-3">
        <p class="text-base font-bold">Owner</p>
        <div class="flex items-center gap-2">
          <p>University of Cagliari</p>
        </div>
      </div>
      <CardDivider color="white" />
    </CardBody>
    <CardFooter class="relative">
      <GhostButton class="text-white-primary" size="auto">
        View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
      </GhostButton>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardBody, CardFooter } from "./atoms/data-display/card"
import BackgroundImage from "./atoms/content/BackgroundImage.vue"
import CardDivider from "./atoms/data-display/card/CardDivider.vue"
import { GhostButton } from "./atoms/buttons"
</script>
