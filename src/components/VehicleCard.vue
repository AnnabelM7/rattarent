<script setup>
defineProps({
  name: String,
  price: Number,
  info: String,
  available: Number,
  icon: String,
  detailed: Boolean
})
</script>

<template>
  <div class="card" :class="{ detailed }">
    <div v-if="detailed" class="image">{{ icon }}</div>

    <div class="details">
      <h3 class="name">{{ name }}</h3>
      <p v-if="detailed" class="info">{{ info }}</p>
      <p v-else class="price">{{ price }} € / h</p>
    </div>

    <div v-if="detailed" class="price-box">
      <p class="price">{{ price }} € / h</p>
      <span class="badge">{{ available }} saadaval</span>
    </div>

    <RouterLink to="/broneeri" class="select-btn">VALI</RouterLink>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px 28px;
}

.name {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}

.price {
  font-size: 13px;
  font-weight: 600;
  color: var(--green-dark);
}

.select-btn {
  background: var(--green-light);
  color: var(--green-dark);
  padding: 10px 24px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

/* detailed version */
.card.detailed {
  display: grid;
  grid-template-columns: 150px 1fr 1fr auto;
  gap: 32px;
  padding: 18px 20px;
}

.image {
  background: var(--green-light);
  border-radius: 16px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.detailed .name {
  font-size: 17px;
  margin-bottom: 6px;
}

.info {
  font-size: 12px;
  color: var(--text-muted);
}

.detailed .price {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.badge {
  display: inline-block;
  background: var(--green-light);
  color: var(--green-dark);
  padding: 8px 28px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.detailed .select-btn {
  background: var(--green-dark);
  color: var(--white);
  padding: 16px 56px;
  font-size: 13px;
}

@media (max-width: 800px) {
  .card.detailed {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .detailed .select-btn {
    text-align: center;
  }
}
</style>