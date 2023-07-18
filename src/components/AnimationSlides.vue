<script>
//
</script>

<style>
@keyframes slideFromTop {
  from {
    transform: translateY(-100vw);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-100vw);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  from {
    transform: translateX(100vw);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideFromBottom {
  from {
    transform: translateY(100vw);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slideToRight {
  from {
    transform: translateX(100vw);
  }

  to {
    transform: translateX(0);
  }
}

:not(#homepage).animationLeft>section:nth-of-type(1) {
  animation: slideFromLeft .3s;
}

.animationLeft>section:nth-of-type(2) {
  animation: slideFromRight .6s;
}

.animationLeft>section:nth-of-type(3),
.animationLeft>section:nth-of-type(4),
.animationLeft>section:nth-of-type(5),
.animationLeft>section:nth-of-type(6) {
  animation: slideFromLeft .9s;
}

.animationRight>section:nth-of-type(1) {
  animation: slideFromRight .3s;
}

.animationRight>section:nth-of-type(2) {
  animation: slideFromLeft 6s;
}

.animationRight>section:nth-of-type(3),
.animationRight>section:nth-of-type(4),
.animationRight>section:nth-of-type(5),
.animationRight>section:nth-of-type(6) {
  animation: slideFromRight 9s;
}

.slideFromLeft3ms {
  animation: slideFromLeft .3s;
}

.slideFromRight3ms {
  animation: slideFromRight .3s;
}

.slideFromRight6ms {
  animation: slideFromRight .6s;
}

.slideFromLeft9ms {
  animation: slideFromLeft .9s;
}

.slideFromLeft12ms {
  animation: slideFromLeft 1.2s;
}

.slideFromLeft24ms {
  animation: slideFromLeft 2.4s;
}

.slideFromRight12ms {
  animation: slideFromRight 1.2s;
}

.slideFromRight24ms {
  animation: slideFromRight 2.4s;
}

.slideFromTop3ms {
  animation: slideFromTop .3s;
}

.slideFromTop6ms {
  animation: slideFromTop .6s;
}

.slideFromBottom6ms {
  animation: slideFromBottom .6s;
}

.slideFromBottom3ms {
  animation: slideFromBottom .3s;
}
</style>