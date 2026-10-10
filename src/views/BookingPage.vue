<template>
  <main class="page">

    <h1>Broneeri</h1>
    <p class="intro">Vali sobiv sõiduk ja rendiaeg ning täida broneerimiseks vajalikud andmed.</p>

    <form class="booking-form" onsubmit="alert('Broneering kinnitatud! Head sõitu!'); return false;">

      <h2>1. Vali sõiduk</h2>
      <label for="vehicle">Sõiduki tüüp</label>
      <select id="vehicle" required>
        <option value="">Vali sõiduk</option>
        <option value="elektriratas">Elektriratas – 8 €/h</option>
        <option value="linnaratas">Linnaratas – 4 €/h</option>
        <option value="elektritouks">Elektritõuks – 7 €/h</option>
      </select>

      <h2>2. Vali rendiaeg</h2>
      <label for="duration">Rendi kestus</label>
      <select id="duration" required>
        <option value="">Vali kestus</option>
        <option value="1">1 tund</option>
        <option value="2">2 tundi</option>
        <option value="3">3 tundi</option>
        <option value="4">4 tundi</option>
      </select>

      <h2>3. Sinu andmed</h2>

      <label for="name">Nimi</label>
      <input type="text" id="name" placeholder="Sisesta oma nimi" required>

      <label for="email">E-post</label>
      <input type="email" id="email" placeholder="Sisesta oma e-post" required>

      <label for="phone">Telefon</label>
      <input type="tel" id="phone" placeholder="Sisesta telefoninumber" required>

      <button type="submit" class="booking-button">KINNITA BRONEERING</button>
    </form>

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

.booking-form {
  background-color: white;
  border: 1px solid #ddd8c8;
  border-radius: 20px;
  padding: 30px;
  margin-top: 40px;
  max-width: 600px;
}

.booking-form h2 {
  color: #205c3d;
  margin-bottom: 24px;
}

.booking-form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.booking-form select {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd8c8;
  border-radius: 10px;
  background-color: white;
  font-size: 16px;
}

.booking-form h2:not(:first-child) {
  margin-top: 32px;
}

.booking-form input {
  display: block;
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd8c8;
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.booking-button {
  background-color: #205c3d;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 16px 28px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.booking-button:hover {
  background-color: #17452d;
}

</style>
