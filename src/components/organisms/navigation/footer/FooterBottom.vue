<template>
  <div
    class="[&>*:nth-child(5n+1)]:bg-yellow-primary *:text-white-primary [&>*:nth-child(5n+1)]:text-black-primary [&>*:nth-child(5n+2)]:bg-pink-primary [&>*:nth-child(5n+3)]:bg-green-primary [&>*:nth-child(5n+4)]:bg-orange-primary [&>*:nth-child(5n+4)]:text-black-primary [&>*:nth-child(5n)]:bg-purple-primary auto-cols-fr grid-flow-col items-center text-sm md:grid [&>*]:flex [&>*]:h-full [&>*]:w-full [&>*]:items-center [&>*]:justify-center [&>*]:gap-2 [&>*]:px-4 [&>*]:py-2 [&>*]:text-center [&>*:nth-child(5n)]:text-white [&>*:nth-child(5n+1)]:text-black [&>*:nth-child(5n+2)]:text-white [&>*:nth-child(5n+3)]:text-white [&>*:nth-child(5n+4)]:text-black"
  >
    <slot />
  </div>
</template>
