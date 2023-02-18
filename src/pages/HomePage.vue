<template>
  <section id="homepage" class="page animationLeft">
    <HeaderTwo msg="Yet another web developer" class="slideFromTop3ms" />
    <div id="portraitHolder">
      <img @click="toggleCaption" id="portrait" src="../assets/portraits/audi.jpg" alt="Lunex"
        class="w-100 rounded-5 pb-sm-2">
      <div id="portraitCaption" class="pt-2">
        <p>📸&nbsp;&nbsp;Sergej Dukkardt</p>
      </div>
    </div>
    <div id="content">
      <p class="pt-3 px-3 mx-auto" v-html="randomWord"></p>
      <div class="py-5">
        <a href="/" class="button">KONTAKT</a>
      </div>
      <div v-if="showAnimation" id="arrowDown" class="d-lg-none mx-auto">
        <img v-if="downAnimation" src="../assets/icons/arrow/arrowDown9.gif" alt="arrowDown" class="w-100">
        <img v-else src="../assets/icons/arrow/scrollDown.gif" alt="arrowDown" class="w-100">
      </div>
      <h3 class="skipScreen">Skilled:</h3>
      <div id="skills" class="pt-3">
        <img v-for="item in skills" :key="item" :src="getImgUrl(item)" alt="{{ item }}" class="w-100">
      </div>
      <h3>Currently learning:</h3>
      <div>
        <p>vue</p>
      </div>
      <h3>Next up:</h3>
      <div>
        <p>React, Nuxt, Next, animations</p>
      </div>
      <p class="mini pt-5">build: v0 (02.02.2023)</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      quoteElem: String,
      downAnimation: Boolean,
      showAnimation: Boolean,
      randomNumber: Number,
      randomWord: 'Das Leben hat zu viele Variablen.',
      wordsList: [
        '"Relax, Breath & Move."',
        '- よろしくお願いします(^｡^)',
        '"Das Leben hat zu viele Variablen."',
        '"Kunst. Kultur. Schönheit."',
        '<i>Sucht den Cursor seiner Maus...</i>',
        '"Jackpot!!"',
        'Einfach mal alles komplett anders machen.'
      ],
      skills: ["html5", "css3", "js", "bs", "wp"],
      captionToggled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.showAnimation = true;
    console.log("showAnimation: " + this.showAnimation);
    this.picker();
    window.setInterval(() => {
      this.picker();
    }, 9800);
    if (Math.random() < 0.5) this.downAnimation = true;
    else this.downAnimation = false;
    // window.addEventListener("scroll", function () {
    // if (window.scrollY == 0) {
    // this.showAnimation = false;
    // console.log("showAnimation changed: " + this.showAnimation);
    // } else {
    // this.showAnimation = true;
    // console.log("showAnimation changed: " + this.showAnimation);
    // }
    // });
  },
  // created () {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // unmounted () {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  methods: {
    getImgUrl(pet) {
      var images = require.context('../assets/icons/skills/', false, /\.png$/)
      return images('./' + pet + ".png")
    },
    // handleScroll (event) {
    // console.log("scroll" + event)
    // },
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
  max-width: clamp(160px, 40%, 200px);
}

p.mini {
  font-size: .75rem;
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
  animation: quoteAnimation 10s infinite;
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
  left: 50vw;
  /* transform: translateX(-50%); */
  bottom: calc(var(--navbarBottomHeight) + 3rem);
}

#skills img {
  max-width: clamp(65px, 10%, 120px);
  padding-left: .25rem;
  padding-right: .25rem;
}

.skipScreen {
  padding-top: calc(calc(100vh / 2) - calc(1.25 * var(--navbarBottomHeight)));
  /* padding-top: clamp(calc(667px - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight))); */
}
</style>
