<template>
  <main id="homepage" class="page animationLeft">
    <HeaderTwo msg="Yet another web developer" class="slideFromTop3ms" />
    <section id="portraitHolder" class="position-relative">
      <img v-if="randomPortrait === 1" @click="toggleCaption" id="portrait" src="../assets/portraits/portrait1.jpg"
        alt="Lunex" class="w-100 rounded-5 pb-sm-2">
      <img v-else @click="toggleCaption" id="portrait" src="../assets/portraits/portrait2.jpg" alt="Lunex"
        class="w-100 rounded-5 pb-sm-2">
      <div class="imgSpacer"></div>
      <div id="portraitCaption" class="pt-2">
        <p>📸&nbsp;&nbsp;Sergej Dukkardt</p>
      </div>
      <div class="quote pt-2">
        <p class="px-3 mx-auto" v-html="randomWord"></p>
      </div>
    </section>
    <section id="content" class="pt-3">
      <div class="mt-3 mb-5 my-md-5 contact">
        <a href="/" class="button">Kontakt</a>
      </div>
      <div id="arrowDown" class="mx-auto">
        <img v-if="downAnimation === 1" src="../assets/icons/arrow/arrowDown9.gif" alt="arrowDown" class="w-100">
        <img v-else src="../assets/icons/arrow/scrollDown.gif" alt="arrowDown" class="w-100">
      </div>
      <h3>Skilled:</h3>
      <div class="pt-3 skills">
        <img v-for="item in skills" :key="item" :src="getImgUrl(item)" alt="{{ item }}">
      </div>
      <h3>Currently learning:</h3>
      <div class="skills">
        <img v-for="item in learning" :key="item" :src="getImgUrl(item)" alt="{{ item }}">
      </div>
      <h3>Next up:</h3>
      <div>
        <p>React, Nuxt, Next, animations</p>
      </div>
      <p class="mini pt-5">build: sag ich nicht</p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      quoteElem: String,
      downAnimation: Number,
      randomNumber: Number,
      randomPortrait: Number,
      randomTitle: Number,
      portraitSrc: "",
      randomWord: '',
      wordsList: [
        '- よろしくお願いします(^｡^)',
        '"Das Leben hat zu viele Variablen."',
        '"Relax, Breath & Move."',
        '"Kunst. Kultur. Schönheit."',
        '<i>Sucht den Cursor seiner Maus...</i>',
        '"Jackpot!!"',
        '<i>Einfach mal alles komplett anders machen.</i>',
        'Website Crack.'
      ],
      skills: ["html5", "css3", "js", "bs", "tw", "wp", "woo"],
      learning: ["vue"],
      captionToggled: false,
    }
  },
  mounted() {
    this.randomNumber = Math.floor(Math.random() * this.wordsList.length);
    this.randomWord = this.wordsList[this.randomNumber]
    window.setInterval(() => {
      this.picker();
    }, 6000);
    this.downAnimation = Math.random() < 0.5 ? 1 : 2;
    this.randomPortrait = Math.random() < 0.5 ? 1 : 2;
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context('../assets/icons/skills/', false, /\.png$/)
      return images('./' + pet + ".png")
    },
    picker: function () {
      this.randomNumber = Math.floor(Math.random() * this.wordsList.length);
      this.randomWord = this.wordsList[this.randomNumber]
    },
    toggleCaption: function () {
      let portraitCaption = document.getElementById('portraitCaption');
      if (this.captionToggled) {
        portraitCaption.style.height = "0";
      } else {
        portraitCaption.style.height = "48px";
      }
      this.captionToggled = !this.captionToggled
    }
  }
}
</script>

<style scoped>
#portraitHolder img {
  position: absolute;
  transform: translateX(-50%);
  max-width: clamp(160px, 40%, 200px);
  transition: .6s ease-in-out;
  animation: portraitImg 6s infinite;
  cursor: pointer;
}

.imgSpacer {
  min-height: clamp(160px, 20vw, 210px);
}

@keyframes portraitImg {
  00% {
    border: 0px solid var(--teal);
  }

  85% {
    border: 0px solid var(--teal);
  }

  90% {
    border: 3px solid var(--teal);
  }

  95% {
    border-bottom: 6px solid var(--teal);
  }

  100% {
    border: 0px solid var(--teal);
  }
}

p.mini {
  font-size: .75rem;
  color: #aaa !important;
}

/* .quote.animate {
  animation: quoteAnimation 3s infinite;
} */

h3 {
  padding-top: 3rem;
}

#portraitCaption {
  display: block;
  /* line-height: 2; */
  height: 0;
  overflow: hidden;
  transition: .3s ease-in-out;
}

#portraitCaption p {
  transition: .3s ease-in-out;
}

#arrowDown {
  /* position: absolute; */
  /* background-color: red; */
  height: 80px;
  width: 50px;
  /* left: 1.5rem; */
  /* left: 50vw; */
  /* transform: translateX(-50%); */
  /* bottom: calc(var(--navbarBottomHeight) + 1.5rem); */
}

.skills img {
  max-width: clamp(65px, 10%, 120px);
  padding-left: .25rem;
  padding-right: .25rem;
  width: 100%;
  padding-bottom: .5rem;
}

.skipScreen {
  padding-top: calc(calc(100vh / 2) - calc(1.25 * var(--navbarBottomHeight)));
  padding-top: clamp(calc(calc(100vh / 2) - calc(1.25 * var(--navbarBottomHeight))), 100vh, calc(calc(100vh / 2) - calc(.75 * var(--navbarBottomHeight))));
  /* padding-top: clamp(calc(667px - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight))); */
}

@keyframes quoteAnimation {
  0% {
    transform: translateX(0)
  }

  88% {
    transform: translateX(0)
  }

  90% {
    transform: translateX(1000vw)
  }

  91% {
    transform: translateX(-100vw) translateY(-1000vw)
  }

  92% {
    transform: translateX(1000vw) translateY(-1000vw)
  }

  94% {
    transform: translateX(-1000vw) translateY(0)
  }

  100% {
    transform: translateX(0) translateY(0)
  }
}

div.quote {
  /* min-height: 140px; */
  transition: .3s ease-in-out;
  /* animation: quoteAnimation 4s infinite; */
}
</style>
