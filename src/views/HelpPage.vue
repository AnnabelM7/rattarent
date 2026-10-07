<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'Kuidas ma sõiduki broneerin?',
    answer: 'Vali sõiduki tüüp, vajuta "Vali" ja täida broneeringu vorm. Rakendust pole vaja.'
  },
  {
    question: 'Kui palju rent maksab?',
    answer: 'Linnaratas maksab 4 € / h, elektritõuks 7 € / h ja elektriratas 8 € / h.'
  },
  {
    question: 'Kas ma saan broneeringu tühistada?',
    answer: 'Jah, broneeringu saab tasuta tühistada kuni 1 tund enne algust.'
  },
  {
    question: 'Kus ma sõiduki tagastan?',
    answer: 'Sõiduki võib tagastada igasse Tartu Ratta tagastuspunkti.'
  },
  {
    question: 'Mis juhtub, kui sõiduk läheb katki?',
    answer: 'Anna meile kohe teada telefonil või e-posti teel. Aitame lahenduse leida.'
  }
]

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <main class="page">
    <h1>Abi</h1>
    <p class="intro">Vastused kõige sagedasematele küsimustele.</p>

    <section class="faq">
      <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="faq-item"
      >
        <button class="faq-question" @click="toggle(index)">
          <span>{{ faq.question }}</span>
          <span class="icon">{{ openIndex === index ? '−' : '+' }}</span>
        </button>
        <p v-if="openIndex === index" class="faq-answer">
          {{ faq.answer }}
        </p>
      </div>
    </section>

    <section class="contact">
      <h2>Ei leidnud vastust?</h2>
      <p>E-post: info@tarturatas.ee</p>
      <p>Telefon: +372 1234 5678</p>
    </section>
  </main>
</template>

<style scoped>
.page {
  flex: 1;
  padding: 48px;
  max-width: 800px;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
}

.intro {
  color: var(--text-muted);
  margin-bottom: 40px;
}

.faq {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 56px;
}

.faq-item {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 20px 28px;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  text-align: left;
}

.icon {
  font-size: 20px;
  color: var(--green-dark);
}

.faq-answer {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-muted);
}

.contact h2 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.contact p {
  font-size: 14px;
  font-weight: 600;
  color: var(--green-dark);
  margin-bottom: 4px;
}
</style>