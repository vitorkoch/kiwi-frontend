<template>
  <h1
    class="font-display text-4xl text-center col-start-2 col-end-2 row-start-1 row-end-1 text-accent font-bold"
  >
    Chat
  </h1>
  <ChatGroup groupName="Os IF'anos" :isVerified="true" groupImageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fifrs.edu.br%2Fviamao%2Fwp-content%2Fuploads%2Fsites%2F11%2F2018%2F08%2Flogo_if_vertical-1.png&f=1&nofb=1&ipt=4761751a96310b6f49a60f9c54b9418feb70e0e389664844129fff1f9c8b771c&ipo=images">
    <ChatMessage :isSender="false"> Olá mundo! </ChatMessage>
    <ChatMessage :isSender="true"> Olá mundo! </ChatMessage>
  </ChatGroup>
</template>
