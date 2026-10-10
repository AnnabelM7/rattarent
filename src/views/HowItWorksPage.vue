<template>
  <main class="page">

    <h1>Kuidas töötab</h1>
    <p class="intro">Rendi jalgratas või tõukeratas lihtsalt kolme sammuga.</p>

    <section class="steps">
    <div>
      <h2>1. Vali sõiduk</h2>
      <p>Vali endale sobiv jalgratas või tõukeratas.</p>
    </div>
    <div>
      <h2>2. Broneeri</h2>
      <p>Sisesta vajalikud andmed ja kinnita broneering.</p>
    </div>
    <div>
      <h2>3. Alusta sõitu</h2>
      <p>Võta sõiduk ja naudi sõitu Tartus!</p>
    </div>
    </section>

    <RouterLink to="/soidukid" class="button">
      VAATA SÕIDUKEID
    </RouterLink>

    <section class="contact">
      <h2>Vajad lisainfot?</h2>
      <p>E-post: info@tarturatas.ee</p>
      <p>Telefon: +372 1234 5678</p>
    </section>
    
  </main>
</template>

<style scoped>

.page {
  flex: 1;
  padding: 48px;
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

.steps {
  display: flex;
  gap: 24px;
  margin-top: 70px;
}

.steps div {
  flex: 1;
  background-color: white;
  border: 1px solid #ddd8c8;
  border-radius: 20px;
  padding: 30px;
}

.steps h2 {
  color: #205c3d;
  margin-bottom: 16px;
}

.steps p {
  color: #68716b;
}

.button {
  display: inline-block;
  margin-top: 32px;
  padding: 16px 28px;
  background-color: #205c3d;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 768px) {
  .steps {
    flex-direction: column;
  }

  .page {
    padding: 24px;
  }
}

.contact {
  margin-top: 80px;
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

