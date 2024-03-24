<template>
  <section>
  <main class="main flow">
    <h1 class="main__heading">Precios Membresias</h1>
    <div class="main__cards cards">
      <div class="cards__inner">
        <div v-for="(card, index) in cards" :key="index" class="cards__card card" ref="card"
        @mousemove="onCardMousemove($event, card)" 
             :style="{ '--x': card.mouseX + 'px', '--y': card.mouseY + 'px' }"
             >
          <h2 class="card__heading">{{ card.name }}</h2>
          <p class="card__price">{{ card.price }}</p>
          <ul role="list" class="card__bullets flow">
            <li v-for="(feature, index) in card.features" :key="index">{{ feature }}</li>
          </ul>
          <a :href="`#${card.name.toLowerCase()}`" class="card__cta cta bg-gradient-to-br from-neutral-800 to-zinc-600 hover:from-[--clr] shadow-lg shadow-neutral-900 hover:shadow-lg hover:shadow-[--clr]G hover:border-purple-200">{{ card.cta }}</a>
        </div>
      </div>
      <div class="overlay cards__inner"></div>
    </div>
  </main>
</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const x = ref(0);
const y = ref(0);

const onCardMousemove = (e, card) => {
  card.mouseX = e.pageX - e.currentTarget.offsetLeft;
  card.mouseY = e.pageY - e.currentTarget.offsetTop;
};
const cards = ref([
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      'Access to standard workouts and nutrition plans',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Pro',
    price: '$19.99',
    features: [
      'Access to advanced workouts and nutrition plans',
      'Priority Email support',
      'Exclusive access to live Q&A sessions'
    ],
    cta: 'Upgrade to Pro'
  },
  {
    name: 'Ultimate',
    price: '$29.99',
    features: [
      'Access to all premium workouts and nutrition plans',
      '24/7 Priority support',
      '1-on-1 virtual coaching session every month',
      'Exclusive content and early access to new features'
    ],
    cta: 'Go Ultimate'
  },
  {
    name: 'Ultimate',
    price: '$29.99',
    features: [
      'Access to all premium workouts and nutrition plans',
      '24/7 Priority support',
      '1-on-1 virtual coaching session every month',
      'Exclusive content and early access to new features'
    ],
    cta: 'Go Ultimate'
  }
]);


</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800;900&display=swap");


html,
section {
  height: 100%;
  min-height: 80vh;
}

section {
  display: grid;
  place-items: center;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: 1.1rem;
  line-height: 1.2;

  color: #ddd;
}

ul {
  list-style: none;
  z-index: 10;
}

.main {
  max-width: 90rem;
  padding: 3em 1.5em;
}

.main__heading {
  font-weight: 800;
  font-size: 2.25em;
  margin-bottom: 0.75em;
  text-align: center;
  color: #eceff1;
}



.cards__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5em;
}

.card {
  position:relative;
  --flow-space: 0.5em;
  --hsl: var(--hue), var(--saturation), var(--lightness);
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: start;
  gap: 1.25em;
  color: #eceff1;
  background-color: rgba(45,45,45,1);

  border-radius: 15px;
  overflow: hidden;
}

.cards__inner .card::before{
  content:'';
  top:var(--y);
  left: var(--x);
  transform: translate(-50%,-50%);
  position: absolute;
  background: radial-gradient(var(--clr),transparent,transparent);
  width: 700px;
  height: 700px;
  opacity: 0;
  transition: 0.5s, top 0s, left 0s;
}
.cards__inner .card:hover::before{
  opacity: 1;
}
.cards__inner .card::after{
  content:'';
  position:absolute;
  inset:4px;
  background-color: rgba(45,45,45,0.6);
  border-radius: 15px;
  
}
.card:nth-child(1) {
  --clr:#2CF8C0;
  --hue: 165;
  --saturation: 82.26%;
  --lightness: 51.37%;
}

.card:nth-child(2) {
  --clr:#52A5CD;
  --hue: 291.34;
  --saturation: 95.9%;
  --lightness: 61.76%;
}

.card:nth-child(3) {
  --clr:#7C47DB;
  --hue: 338.69;
  --saturation: 100%;
  --lightness: 48.04%;
}
.card:nth-child(4) {
  --clr:#d12ef1;
  --hue: 338.69;
  --saturation: 100%;
  --lightness: 48.04%;
}

.card__bullets {
  line-height: 1.4;
}

.card__bullets li::before {
  display: inline-block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' title='check' fill='%23dddddd'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /%3E%3C/svg%3E");
  transform: translatey(0.25ch);
  margin-right: 1ch;
}

.card__heading {
  font-size: 1.05em;
  font-weight: 600;
  z-index: 10;
}

.card__price {
  z-index: 10;
  font-size: 1.75em;
  font-weight: 700;
}

.flow > * + * {
  margin-top: var(--flow-space, 1.25em);
}

.cta {
  display: block;
  align-self: end;
  z-index: 10;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #fff;

  padding: 0.7em;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.5s, top 0s, left 0s;
}
.cta:hover{
  background-color: var(--clr);
}

.overlay .cta {
  display: block;
  grid-row: -1;
  width: 100%;
  top:var(--y);
  left: var(--x);
  z-index: 10;
  transform: translate(-50%,-50%);
  position: absolute;
  background: radial-gradient(var(--clr),transparent,transparent);
  box-shadow: 0 0 0 1px hsl(var(--hsl));
}

:not(.overlay) > .card {
  transition: 400ms background ease;
  will-change: background;
}

:not(.overlay) > .card:hover {
  --lightness: 95%;
  background: hsla(var(--clr), 0.4);
}



</style>

<!-- <style scoped>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800;900&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
section {
  height: 100%;
  min-height: 100vh;
}

section {
  display: grid;
  place-items: center;
  font-family: "League Spartan", system-ui, sans-serif;
  font-size: 1.1rem;
  line-height: 1.2;
  background-color: #1d1d1d0e;
  color: #ddd;
}

ul {
  list-style: none;
}

.main {
  max-width: 75rem;
  padding: 3em 1.5em;
}

.main__heading {
  font-weight: 600;
  font-size: 2.25em;
  margin-bottom: 0.75em;
  text-align: center;
  color: #eceff1;
}

.cards {
  position: relative;
}

.cards__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5em;
}

.card {
  --flow-space: 0.5em;
  --hsl: var(--hue), var(--saturation), var(--lightness);
  flex: 1 1 14rem;
  padding: 1.5em 2em;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: start;
  gap: 1.25em;
  color: #eceff1;
  background-color: #2b2b2b;
  border: 1px solid #eceff133;
  border-radius: 15px;
}

.card:nth-child(1) {
  --hue: 165;
  --saturation: 82.26%;
  --lightness: 51.37%;
}

.card:nth-child(2) {
  --hue: 291.34;
  --saturation: 95.9%;
  --lightness: 61.76%;
}

.card:nth-child(3) {
  --hue: 338.69;
  --saturation: 100%;
  --lightness: 48.04%;
}

.card__bullets {
  line-height: 1.4;
}

.card__bullets li::before {
  display: inline-block;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='16' title='check' fill='%23dddddd'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /%3E%3C/svg%3E");
  transform: translatey(0.25ch);
  margin-right: 1ch;
}

.card__heading {
  font-size: 1.05em;
  font-weight: 600;
}

.card__price {
  font-size: 1.75em;
  font-weight: 700;
}

.flow > * + * {
  margin-top: var(--flow-space, 1.25em);
}

.cta {
  display: block;
  align-self: end;
  margin: 1em 0 0.5em 0;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #0d0d0d;
  padding: 0.7em;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
}

.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  user-select: none;
  opacity: var(--opacity, 0);
  -webkit-mask: radial-gradient(
    25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%
  );
  mask: radial-gradient(
    25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%
  );
  transition: 400ms mask ease;
  will-change: mask;
}

.overlay .card {
  background-color: hsla(var(--hsl), 0.15);
  border-color: hsla(var(--hsl), 1);
  box-shadow: 0 0 0 1px inset hsl(var(--hsl));
}

.overlay .cta {
  display: block;
  grid-row: -1;
  width: 100%;
  background-color: hsl(var(--hsl));
  box-shadow: 0 0 0 1px hsl(var(--hsl));
}

:not(.overlay) > .card {
  transition: 400ms background ease;
  will-change: background;
}

:not(.overlay) > .card:hover {
  --lightness: 95%;
  background: hsla(var(--hsl), 0.1);
}

</style> -->