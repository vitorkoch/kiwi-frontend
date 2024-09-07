<template>
  <div
    class="bg-secondary p-8 rounded-2xl flex flex-col items-center justify-start gap-4 h-full"
  >
    <h2 class="font-display text-2xl text-center flex items-center gap-2">
      <LucideUsers />
      Contacts
    </h2>

    <div
      class="bg-primary rounded-full p-4 flex flex-row items-center justify-between border-b-2 border-b-accent w-[90%]"
    >
      <input
        type="text"
        placeholder="Find a friend"
        class="bg-primary focus:outline-none"
      />
      <LucideSearch class="hover:cursor-pointer text-2xl" />
    </div>

    <div
      class="bg-primary rounded-2xl flex flex-col items-center justify-start w-[90%] flex-1"
    >
      <ul class="flex flex-col items-start justify-center gap-2">
        <li class="flex flex-row gap-2 items-center justify-center p-2">
          <img
            src="/images/luva-de-pedreiro.png"
            alt="luva-de-padeiro"
            id="luva-de-padeiro"
            width="64px"
          />
          <label for="luva-de-padeiro">@luva.de.padeiro</label>
        </li>
        <li class="flex flex-row gap-2 items-center justify-center p-2">
          <img src="/images/cr7.png" alt="cr7" id="cr7" width="64px" />
          <label for="cr7">@cr7.rebaixado</label>
        </li>
        <li class="flex flex-row gap-2 items-center justify-center p-2">
          <img
            src="/images/manoel-gomes.png"
            alt="manoel-gomes"
            id="manoel-gomes"
            width="64px"
          />
          <label for="manoel-gomes">@manoel.gomes</label>
        </li>
      </ul>
    </div>
  </div>
</template>
