<template>
  <header class="header">
    <RouterLink to="/" class="logo">TARTU RATAS</RouterLink>
    <nav class="nav">
      <RouterLink to="/soidukid">SÕIDUKID</RouterLink>
      <RouterLink to="/kuidas-tootab">KUIDAS TÖÖTAB</RouterLink>
      <RouterLink to="/abi">ABI</RouterLink>
      <RouterLink to="/broneeri" class="book-btn">BRONEERI</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--green-dark);
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 12px;
  font-weight: 600;
}

.book-btn {
  background: var(--green-dark);
  color: var(--white);
  padding: 10px 20px;
  border-radius: 999px;
}
</style>