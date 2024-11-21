<template>
  <section class="animationLeft pb-5 container px-0 mx-auto">
    <HeaderTwo msg="Partner" />
    <section class="">
      <div class="text-left row justify-content-center">
        <div class="col-7 col-md-6 col-lg-5 col-xl-4">
          <img src="../assets/partner/dukkart5.png" class="w-100 rounded-5">
        </div>
        <div class="col-12 col-md-6 col-lg-5 col-xl-4">
          <h2 class="pt-3">Sergej Dukkardt</h2>
          <p class="px-3 mx-auto">Fotograf. Media Creator. Mietstudio.</p>
          <div class="pt-3">
            <a href="http://dukkart.de" class="px-3 mx-3 button-outline" target="_blank">Website</a>
          </div>
          <div class="pt-5">
            <a href="http://dreamstudiobadoeynhausen.de" class="px-3 mx-3 button-outline" target="_blank">Mietstudio</a>
          </div>
          <div class="pt-5">
            <a href="https://www.instagram.com/dukkart/" class="px-3 mx-3 button-outline" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-3 pt-md-5">
      <div class="pt-5 pt-md-3 text-right row justify-content-center">
        <div class="col-12 col-md-6 col-lg-5 col-xl-4 order-2 order-md-1">
          <h2 class="pt-3">Reza Jaxon</h2>
          <p class="px-3 mx-auto">Tänzer. Graffiti-Artist. Designer.</p>
          <div class="pt-3">
            <a href="https://shibuy.art/" class="px-3 mx-3 button-outline" target="_blank">Website</a>
          </div>
          <div class="pt-5">
            <a href="https://www.instagram.com/jaxon_the_6th/" class="px-3 mx-3 button-outline"
              target="_blank">Instagram</a>
          </div>
        </div>
        <div class="col-7 col-md-6 col-lg-5 col-xl-4 order-1 order-md-2">
          <img src="../assets/partner/jaxon6.png" class="w-100 rounded-5 del1">
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "ToolsPage"
}
</script>

<style scoped>
img {
  max-width: 350px;
  transition: .6s ease-in-out;
  animation: portraitImg 4s infinite;
}

.del1 {
  animation-delay: 2s;
}

@keyframes portraitImg {
  00% {
    border: 0px solid var(--teal);
  }

  70% {
    border: 0px solid var(--teal);
  }

  80% {
    border: 6px solid var(--teal);
  }

  95% {
    border-bottom: 9px solid var(--teal);
  }

  100% {
    border: 0px solid var(--teal);
  }
}
</style>