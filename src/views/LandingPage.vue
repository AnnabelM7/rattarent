<script setup>
import VehicleCard from '../components/VehicleCard.vue'

const vehicles = [
  { name: 'Elektriratas', price: 8 },
  { name: 'Linnaratas', price: 4 },
  { name: 'Elektritõuks', price: 7 }
]
</script>

<template>
  <main class="landing">
    <section class="hero">
      <h1>Liigu Tartus<br />omal moel.</h1>
      <p>
        Vali elektriratas, tavaratas või tõukeratas. Broneeri veebis ja
        sõida siis, kui sul vaja.
      </p>
      <RouterLink to="/soidukid" class="cta">VAATA LIIKUREID</RouterLink>
    </section>

    <section class="popular">
      <h2>Populaarsed sõidukid täna!</h2>
      <div class="cards">
        <VehicleCard
            v-for="v in vehicles"
            :key="v.name"
            :name="v.name"
            :price="v.price"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.landing {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 48px;
}

.hero h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 24px;
}

.hero p {
  max-width: 460px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-muted);
  margin-bottom: 48px;
}

.cta {
  display: inline-block;
  background: var(--green-dark);
  color: var(--white);
  padding: 16px 24px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}

.popular {
  justify-self: center;
  width: 100%;
  max-width: 300px;
}

.popular h2 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 32px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 800px) {
  .landing {
    grid-template-columns: 1fr;
    padding: 24px;
  }

  .hero h1 {
    font-size: 36px;
  }
}

</style>