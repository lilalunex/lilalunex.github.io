<template>
  <main id="homepage" class="page animationLeft">
    <HeaderTwo msg="Yet another web developer" class="slideFromTop3ms" />
    <section id="portraitHolder" class="position-relative">
      <img v-if="randomPortrait === 1" @click="toggleCaption" id="portrait" src="../assets/portraits/portrait1.jpg"
        alt="Lunex" class="w-100 rounded-5 pb-sm-2">
      <img v-else-if="randomPortrait === 2" @click="toggleCaption" id="portrait" src="../assets/portraits/portrait2.jpg"
        alt="Lunex" class="w-100 rounded-5 pb-sm-2">
      <img v-else-if="randomPortrait === 3" @click="toggleCaption" id="portrait" src="../assets/portraits/portrait3.jpg"
        alt="Lunex" class="w-100 rounded-5 pb-sm-2">
      <!-- <div class="imgSpacer"></div> -->
      <div id="portraitCaption" class="pt-2">
        <p>📸&nbsp;&nbsp;Sergej Dukkardt</p>
      </div>
      <div class="quote pt-3">
        <!-- <div class=""> -->
        <p class="px-3 mx-auto" v-html="randomWord"></p>
      </div>
    </section>
    <section id="content" class="pt-3">
      <div class="mt-3 mb-4 my-md-5 contact">
        <a href="/" class="button">Kontakt</a>
      </div>
      <div id="arrowDown" class="mx-auto">
        <img v-if="downAnimation === 1" src="../assets/icons/arrow/arrowDown9.gif" alt="arrowDown" class="w-100">
        <img v-else src="../assets/icons/arrow/scrollDown.gif" alt="arrowDown" class="w-100">
      </div>

      <SkillsElem title="Skilled" :arrImages=this.skills />
      <SkillsElem title="Currently learning" :arrImages=this.learning />
      <SkillsElem title="Next up" :arrImages=this.next />
      <SkillsElem title="Mehr von mir" :arrLinks=this.socials />

      <p class="mini pt-5">build: 27.02.2023 12:30</p>
    </section>
  </main>
</template>

<script>
import SkillsElem from '@/components/SkillsElem.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      helpCounter: Number,
      quoteElem: String,
      downAnimation: Number,
      randomNumber: Number,
      randomPortraitTemp: Number,
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
        'Website Crack.',
        'Heute schon genug Wasser getrunken?'
      ],
      skills: ["html5", "css3", "js", "bs", "tw", "sass", "wp", "mysql", "woo"],
      learning: ["vue"],
      next: ["react", "nuxt", "next", "lottiefiles"],
      socials: [
        { name: "Xing", link: "https://www.xing.com/profile/AlexanderLunex_Scharow/cv" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/alexander-lunex-scharow-675903265/" },
        // { name: "instagram", link: "https://instagram.com/lilalunex" },
        { name: "Github", link: "https://github.com/lilalunex" }
      ],
      captionToggled: false,
    }
  },
  components: {
    SkillsElem
  },
  mounted() {
    this.helpCounter = 0;
    this.randomNumber = Math.floor(Math.random() * this.wordsList.length);
    this.randomWord = this.wordsList[this.randomNumber]
    window.setInterval(() => {
      this.picker();
    }, 6000);
    this.downAnimation = Math.random() < 0.5 ? 1 : 2;
    // this.randomPortrait = Math.random() < 0.5 ? 1 : 2;
    this.randomPortraitTemp = Math.random();
    // console.log("randomPortraitTemp: "+this.randomPortraitTemp)
    if (this.randomPortraitTemp < 0.33) this.randomPortrait = 1
    else if (this.randomPortraitTemp < 0.66) this.randomPortrait = 2
    else this.randomPortrait = 3
  },
  methods: {
    // getImgSkills(pet) {
    //   var images = require.context('../assets/icons/skills/', false, /\.png$/)
    //   return images('./' + pet + ".png")
    // },
    getImgPortrait(pet) {
      var images = require.context('../assets/portraits/', false, /\.png$/)
      return images('./' + pet + ".jpg")
    },
    picker: function () {
      this.helpCounter = 0;
      while (this.wordsList[this.randomNumber] == this.randomWord) {
        // console.log("run changing quote: " + this.helpCounter)
        this.randomNumber = Math.floor(Math.random() * this.wordsList.length);
        // if (this.wordsList[this.randomNumber] != this.randomWord) break;
        // console.log("this.randomWord: "+this.randomWord)
        // console.log("this.wordsList[this.randomNumber]: "+this.wordsList[this.randomNumber])
        // this.helpCounter++;
      }
      this.randomWord = this.wordsList[this.randomNumber]
      // console.log(this.randomWord)
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
#portraitHolder {
  /* position: absolute; */
  /* transform: translateX(-50%); */
}

#portraitHolder img {
  max-width: clamp(160px, 30%, 200px);
  transition: .6s ease-in-out;
  animation: portraitImg 6s infinite;
  cursor: pointer;
}

.imgSpacer {
  min-height: clamp(160px, 35vw, 200px);
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
  transition: .6s ease-in-out;
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
