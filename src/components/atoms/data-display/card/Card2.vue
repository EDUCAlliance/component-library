<template>
  <Card class="w-[412px]">
    <CardHeader class="h-[264px]">
      <BackgroundImage src="/assets/example-image-card.jpg" alt="Project 1" />
      <Badge size="sm" color="white">Project</Badge>
      <h4 class="relative text-2xl font-bold text-balance">
        “Smart city app”: Circular Economy IoT framework
      </h4>
    </CardHeader>
    <CardBody>
      <p>
        We intend to build an IoT framework that is able to monitor and to simulate as a lining lab
        the "circularity" of a city environment...
      </p>
      <CardDivider class="mt-4" />
      <div class="flex items-center gap-3 py-3">
        <p class="text-base font-bold">Owner</p>
        <div class="flex items-center gap-2">
          <Avatar size="xs">
            <AvatarImage src="https://cataas.com/cat?type=square&width=64" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <p>John Doe</p>
        </div>
      </div>
      <CardDivider />
    </CardBody>
    <CardFooter>
      <GhostButton class="text-violet-primary" size="auto">
        View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
      </GhostButton>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardBody, CardFooter } from "./atoms/card"
import BackgroundImage from "./atoms/BackgroundImage.vue"
import Badge from "./atoms/others/Badge.vue"
import CardDivider from "./atoms/card/CardDivider.vue"
import { Avatar, AvatarImage, AvatarFallback } from "./atoms/others/avatar"
import GhostButton from "./atoms/buttons/GhostButton.vue"
</script>
