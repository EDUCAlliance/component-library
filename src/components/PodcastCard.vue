<template>
  <Card class="w-[412px]">
    <CardHeader class="h-[412px]">
      <BackgroundImage src="/assets/example-image-microphone.jpg" alt="Podcast Episode" />
      <BackgroundImage src="/assets/background/podcast/1-1.svg" alt="Podcast Episode" />
      <h4 class="relative text-3xl font-bold text-balance">
        EDUCast: Five Years of EDUC: Milestones, Memories and the Road Ahead
      </h4>
      <div class="relative flex gap-1">
        <Badge size="sm" color="black">Season 2</Badge>
        <Badge size="sm" color="white">Episode 1</Badge>
      </div>
    </CardHeader>
    <CardBody class="text-black-primary">
      <div class="flex items-center gap-3">
        <p class="text-base font-bold">Guest</p>
        <p class="text-sm">Prof. Dr. István Tarrósy (Director of the Inter...)</p>
      </div>
      <CardDivider class="mt-3" />
    </CardBody>
    <CardFooter>
      <GhostButton class="text-pink-primary" size="auto">
        View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
      </GhostButton>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardBody, CardFooter, CardDivider } from "./atoms/data-display/card"
import BackgroundImage from "./atoms/content/BackgroundImage.vue"
import { Badge } from "./atoms/feedback"
import { GhostButton } from "./atoms/buttons"
</script>
