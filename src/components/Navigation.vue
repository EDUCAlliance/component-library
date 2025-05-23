<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/molecules/navigation-menu"
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul
            class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
          >
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                  href="/"
                >
                  <img src="https://www.reka-ui.com/logo.svg" class="h-6 w-6" />
                  <div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                  <p class="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/introduction"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                >
                  <div class="text-sm leading-none font-medium">Introduction</div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/installation"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                >
                  <div class="text-sm leading-none font-medium">Installation</div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    How to install dependencies and structure your app.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/typography"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                >
                  <div class="text-sm leading-none font-medium">Typography</div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <!-- <li v-for="component in components" :key="component.title">
              <NavigationMenuLink as-child>
                <a
                  :href="component.href"
                  class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                >
                  <div class="text-sm leading-none font-medium">{{ component.title }}</div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    {{ component.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li> -->
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/docs/introduction" :class="navigationMenuTriggerStyle()">
          Documentation
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
