<template>
  <main id="homepage" class="page animationLeft container px-0 mx-auto">
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
        <a href="mailto:&#x61;&#x6c;&#x65;&#x78;&#x61;&#x6e;&#x64;&#x65;&#x72;&#x73;&#x63;&#x68;&#x61;&#x72;&#x6f;&#x77;&#x40;&#x69;&#x63;&#x6c;&#x6f;&#x75;&#x64;&#x2e;&#x63;&#x6f;&#x6d;"
          class="button">Kontakt</a>
      </div>
    </section>
    <section>
      <div id="arrowDown" class="mx-auto">
        <img v-if="downAnimation === 1" src="../assets/icons/arrow/arrowDown9.gif" alt="arrowDown" class="w-100">
        <img v-else src="../assets/icons/arrow/scrollDown.gif" alt="arrowDown" class="w-100">
      </div>
    </section>

    <!-- <SkillsElem title="Skilled" :arrImages=this.skills /> -->
    <!-- <SkillsElem title="Currently learning" :arrImages=this.learning /> -->
    <!-- <SkillsElem title="Next up" :arrImages=this.next /> -->
    <!-- <SkillsElem title="Mehr von mir" :arrLinks=this.socials /> -->

    <section class="d-md-none">
      <div class="pt-5">
        <a href="https://github.com/lilalunex" class="px-3 mx-3 button-outline" target="_blank">Github</a>
        <a href="https://instagram.com/lilalunex" class="px-3 mx-3 button-outline" target="_blank">Instagram</a>
      </div>
      <div class="pt-5">
        <a href="https://www.linkedin.com/in/alexander-lunex-scharow-675903265/" class="px-3 mx-3 button-outline"
          target="_blank">LinkedIn</a>
        <a href="https://www.xing.com/profile/AlexanderLunex_Scharow/cv" class="px-3 mx-3 button-outline"
          target="_blank">Xing</a>
      </div>
    </section>

    <section class="pt-5 d-none d-md-block">
      <a href="https://github.com/lilalunex" class="px-3 mx-3 button-outline" target="_blank">Github</a>
      <a href="https://instagram.com/lilalunex" class="px-3 mx-3 button-outline" target="_blank">Instagram</a>
      <a href="https://www.linkedin.com/in/alexander-lunex-scharow-675903265/" class="px-3 mx-3 button-outline"
        target="_blank">LinkedIn</a>
      <a href="https://www.xing.com/profile/AlexanderLunex_Scharow/cv" class="px-3 mx-3 button-outline" target="_blank">Xing</a>
    </section>

    <!-- <section class="pt-5 d-none d-md-block">
      <a href="https://instagram.com/lilalunex" class="px-3 mx-3 button-outline" target="_blank">Instagram</a><br />
      <p class="mini pt-4">
        Could link more platforms.<br />But there is not much to see.
      </p>
    </section> -->

    <section>
      <p class="mini pt-5">build: 20.07.2023 20:14</p>
    </section>
  </main>
</template>

<script>
// import SkillsElem from '@/components/SkillsElem.vue';

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
        '"Relax, Breath & Move."',
        '"Kunst. Kultur. Schönheit."',
        '<i>Sucht den Cursor seiner Maus...</i>',
        '"Jackpot!!"',
        '<i>Einfach mal alles komplett anders machen.</i>',
        // '"Ich hab doch gesagt, dass ich paar Minuten später komm/<br>Wieso klingelt jetzt jede Dekade mein Telefon"',
      ],
      skills: ["html5", "css3", "js", "bs", "tw", "sass", "wp", "mysql", "woo"],
      learning: ["vue"],
      next: ["react", "nuxt", "next", "lottiefiles"],
      socials: [
        { name: "Github", link: "https://github.com/lilalunex" },
        { name: "Instagram", link: "https://instagram.com/lilalunex" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/alexander-lunex-scharow-675903265/" },
        { name: "Xing", link: "https://www.xing.com/profile/AlexanderLunex_Scharow/cv" },
      ],
      captionToggled: false,
    }
  },
  // components: {
  //   SkillsElem
  // },
  mounted() {
    this.helpCounter = 0;
    this.randomNumber = Math.floor(Math.random() * this.wordsList.length);
    this.randomWord = this.wordsList[this.randomNumber]
    window.setInterval(() => {
      this.picker();
    }, 4000);
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
#portraitHolder img {
  max-width: clamp(160px, 30%, 350px);
  transition: .6s ease-in-out;
  animation: portraitImg 4s infinite;
  cursor: pointer;
}

.imgSpacer {
  min-height: clamp(160px, 35vw, 200px);
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
  transition: .4s ease-in-out;
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

@media only screen and (min-height: 1100px) {
  #arrowDown {
    display: none;
  }
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
