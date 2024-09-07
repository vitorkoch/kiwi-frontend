<script setup>
import {
  PhChatCircleText,
  PhHouse,
  PhMagnifyingGlass,
  PhBookmarkSimple,
  PhPlusCircle,
  PhUserCircle,
  PhGearSix,
} from "@phosphor-icons/vue";
</script>

<template>
  <aside>
    <nav
      class="bg-primary rounded-[2.5rem] fixed top-1/2 -translate-y-1/2 w-[8rem] h-[95vh] left-[.5rem] flex items-center justify-between flex-col p-4 hover:translate-x-2 active:scale-95 duration-300 border-b-2 border-solid border-accent"
    >
      <img src="/svg/kiwi-logo.svg" width="64px" />

      <div
        id="navigation-icons"
        class="w-full flex items-center justify-center"
      >
        <ul class="flex items-center justify-center gap-5 flex-col">
          <li class="hover:scale-110 active:scale-90 duration-300">
            <a href="/" class="text-4xl" title="Home">
              <LucideHome class="size-8" />
            </a>
          </li>
          <li class="hover:scale-110 active:scale-90 duration-300">
            <NuxtLink
              to="/"
              class="text-4xl hover:scale-105 active:scale-95"
              title="Search"
            >
              <LucideSearch class="size-8"/>
            </NuxtLink>
          </li>
          <li class="hover:scale-110 active:scale-90 duration-300">
            <a
              href="#"
              class="text-4xl hover:scale-105 active:scale-95"
              title="Bookmarks"
            >
              <LucideBookmark class="size-8"/>
            </a>
          </li>
          <li class="hover:scale-110 active:scale-90 duration-300">
            <a
              href="#"
              class="text-4xl hover:scale-105 active:scale-95"
              title="Post"
            >
              <LucideCirclePlus class="size-8" />
            </a>
          </li>
          <li class="hover:scale-110 active:scale-90 duration-300">
            <a
              href="/chat"
              class="text-4xl hover:scale-105 active:scale-95"
              title="Chat"
            >
              <LucideMessageSquareText class="size-8" />
            </a>
          </li>
          <li class="hover:scale-110 active:scale-90 duration-300">
            <a
              href="#"
              class="text-4xl hover:scale-105 active:scale-95"
              title="Profile"
            >
              <LucideCircleUser class="size-8"/>
            </a>
          </li>
          <li class="hover:scale-110 active:scale-90 duration-300">
            <a
              href="#"
              class="text-4xl hover:scale-105 active:scale-95"
              title="Settings"
            >
              <LucideSettings class="size-8"/>
            </a>
          </li>
        </ul>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="w-full text-2xl font-display"
        aria-label="KIWI"
      >
        <text
          class="fill-accent stroke-secondary"
          stroke-width="6"
          font-family="inherit"
          paint-order="stroke fill"
          text-anchor="middle"
        >
          <tspan x="50%" y="0" dy="1em">K</tspan>
          <tspan x="50%" y="1em" dy="1em">I</tspan>
          <tspan x="50%" y="2em" dy="1em">W</tspan>
          <tspan x="50%" y="3em" dy="1em" dx="-3px">I</tspan>
        </text>
      </svg>
    </nav>
  </aside>
</template>
