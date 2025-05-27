<template>
  <Card class="border-pink-primary max-w-[628px] border-2">
    <CardBody class="p-6">
      <p class="text-sm font-medium tracking-wider uppercase">
        The Department of microsystems at the University of South-eastern Norway
      </p>
      <CardDivider class="mt-3 mb-4" />
      <div class="mb-2 flex items-center gap-2">
        <Badge color="black" size="sm">Full-time</Badge>
        <Badge color="pink" size="sm">Graduates</Badge>
      </div>
      <h4 class="text-2xl font-bold">Researcher in electrode material for sodium ion battery</h4>
      <CardDivider class="mt-4 mb-3" />
      <p>
        As part of the project your main responsibilities and duties are implementation of the
        project related to the development of carbon electrode materials for sodium ion battery.
      </p>
      <CardDivider class="my-3" />
      <div class="grid gap-2 md:grid-cols-2">
        <div class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'flag']" class="size-4" />
          <p>Horten, Norway</p>
        </div>
        <div class="flex items-center gap-2">
          <font-awesome-icon :icon="['fas', 'money-bill']" class="size-4" />
          <p>NOK 624.500–821.100 per year</p>
        </div>
      </div>
      <CardDivider class="mt-3" />
    </CardBody>
    <CardFooter class="px-6 pb-6">
      <GhostButton class="text-pink-primary" size="auto">
        View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
      </GhostButton>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardBody, CardFooter } from "./atoms/data-display/card"
import { Badge } from "./atoms/feedback"
import CardDivider from "./atoms/data-display/card/CardDivider.vue"
import { GhostButton } from "./atoms/buttons"
</script>
