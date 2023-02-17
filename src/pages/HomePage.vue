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
      <div>
        <a href="/" class="btn mt-3 px-5 py-2 btn-outline-info">KONTAKT</a>
      </div>
      <div style="padding-top:20rem"></div>
      <h3>Skilled:</h3>
      <div>
        <img src="../assets/icons/html5.png" alt="HTML5">
        <img src="../assets/icons/css3.png" alt="CCS3">
        <img src="../assets/icons/js.png" alt="JavaScript">
        <img src="../assets/icons/wp.png" alt="WordPress">
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
  <div id="arrowDown">
    <img src="../assets/arrow/arrowDown9.gif" alt="arrowDown" class="w-100">
</div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      quoteElem: String,
      randomNumber: Number,
      randomWord: 'Das Leben hat zu viele Variablen.',
      wordsList: [
        '"Relax, Breath & Move."',
        '- よろしくお願いします(^｡^)',
        '"Das Leben hat zu viele Variablen."',
        '"Kunst. Kultur. Schönheit."',
        '<i>Sucht den Cursor seiner Maus...</i>',
        '"Jackpot!!"',
        // '"Ich hab doch gesagt, dass ich paar Minuten später komm/ Wieso klingelt jetzt jede Dekade mein Telefon"<br>- Maeckes'
      ],
      captionToggled: false,
    }
  },
  mounted() {
    this.picker();
    window.setInterval(() => {
      this.picker();
    }, 9800);
  },
  methods: {
    picker: function () {
      this.randomNumber = Math.floor(Math.random() * this.wordsList.length);
      this.randomWord = this.wordsList[this.randomNumber]
    },
    toggleCaption: function () {
      let portraitCaption = document.getElementById('portraitCaption');
      if (this.captionToggled) {
        portraitCaption.style.height = "0";
        // portraitCaption.style.lineHeight = "0";
      } else {
        portraitCaption.style.height = "48px";
        // portraitCaption.style.lineHeight = "2";
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
  position: absolute;
  /* background-color: red; */
  height: 80px;
  width: 50px;
  left: 1.5rem;
  bottom: calc(var(--navbarBottomHeight) + 3rem);
}
</style>
