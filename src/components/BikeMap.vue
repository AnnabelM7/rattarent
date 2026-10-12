<script setup>
defineProps({
  vehicles: {
    type: Array,
    required: true
  }
})

</script>
<template>
  <div class="map-card">
    <h2>Rattad sinu lähedal</h2>

    <svg
      class="map"
      viewBox="0 0 640 440"
      role="img"
      aria-label="Tartu kesklinna kaart"
    >
      <!-- Haljasalad -->
      <path
        d="M150 150c25-30 80-30 95-5s5 70-35 78-85-43-60-73z"
        class="park"
      />
      <path
        d="M470 10c40-15 120 0 150 30s-30 70-80 60-110-70-70-90z"
        class="park"
      />
      <path
        d="M20 40c30-20 90-10 100 20s-40 50-70 45S-5 60 20 40z"
        class="park"
      />

      <!-- Tänavad -->
      <g fill="none" stroke-linecap="round">
        <g stroke="#B9AF93" stroke-width="12">
          <path d="M-10 270C110 245 220 230 330 205" />
          <path d="M240 175 300 450" />
          <path d="M330 205 470 335 650 420" />
          <path d="M70 -10 140 450" />
          <path d="M365 160C450 170 540 180 650 212" />
          <path d="M470 -10 560 450" />
          <path d="M-10 385C200 405 400 380 650 440" />
          <path d="M130 120C200 90 300 70 330 -10" />
        </g>

        <g stroke="#FFFDF7" stroke-width="8">
          <path d="M-10 270C110 245 220 230 330 205" />
          <path d="M240 175 300 450" />
          <path d="M330 205 470 335 650 420" />
          <path d="M70 -10 140 450" />
          <path d="M365 160C450 170 540 180 650 212" />
          <path d="M470 -10 560 450" />
          <path d="M-10 385C200 405 400 380 650 440" />
          <path d="M130 120C200 90 300 70 330 -10" />
        </g>
      </g>

      <!-- Emajõgi -->
      <path
        d="M170 -20C255 85 330 140 400 200S530 330 670 365"
        fill="none"
        stroke="#86B7A8"
        stroke-width="32"
        stroke-linecap="round"
      />
      <path
        d="M170 -20C255 85 330 140 400 200S530 330 670 365"
        fill="none"
        stroke="#A9D0C4"
        stroke-width="28"
        stroke-linecap="round"
      />

      <!-- Linnaosad -->
      <g class="districts">
        <text x="30" y="215">TÄHTVERE</text>
        <text x="250" y="40">SUPILINN</text>
        <text x="555" y="300">ANNELINN</text>
        <text x="150" y="428">KARLOVA</text>
        <text x="160" y="285">KESKLINN</text>
      </g>

      <!-- Jaamad -->
      <g class="station">
        <circle cx="105" cy="115" r="5" />
        <text x="105" y="135" text-anchor="middle">TÄHTVERE</text>

        <circle cx="240" cy="175" r="5" />
        <text x="240" y="195" text-anchor="middle">ÜLIKOOL</text>

        <circle cx="330" cy="205" r="5" />
        <text x="330" y="225" text-anchor="middle">RAEKOJA PLATS</text>

        <circle cx="455" cy="335" r="5" />
        <text x="455" y="355" text-anchor="middle">TURU</text>

        <circle cx="290" cy="365" r="5" />
        <text x="290" y="385" text-anchor="middle">KARLOVA</text>

        <circle cx="545" cy="150" r="5" />
        <text x="545" y="170" text-anchor="middle">ANNELINN</text>
      </g>
      
<!-- Sõidukid -->
<g class="vehicles">
  <g
    v-for="(vehicle, index) in vehicles"
    :key="vehicle.id"
    :transform="`translate(${vehicle.x} ${vehicle.y})`"
  >
    <circle r="17" />
    <text y="5" text-anchor="middle">
      {{ index % 2 === 0 ? '⚡' : '🚲' }}
    </text>
  </g>
</g>
</svg>

<div class="availability">
  {{ vehicles.length }} LIIKURIT SAADAVAL
</div>
</div>
</template>

<style scoped>
.map-card {
  padding: 28px;
  background: #d3e9d2;
  border: 1px solid #e2ddcd;
  border-radius: 24px;
  min-width: 0;
}

.map-card h2 {
  margin: 0 0 24px;
  font-size: 24px;
}

.map {
  display: block;
  width: 100%;
  height: auto;
  background: #e9e4d3;
  border-radius: 20px;
}

.park {
  fill: #c9e2c7;
  stroke: #a9cda6;
  stroke-width: 1.5;
}

.districts {
  fill: #7f9682;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.station circle {
  fill: #22613f;
}

.station text {
  fill: #22613f;
  font-size: 9px;
  font-weight: 700;
}

.vehicles g circle {
  fill: #22613f;
  stroke: white;
  stroke-width: 2;
}

.vehicles g text {
  font-size: 15px;
}

.availability {
  display: inline-block;
  margin-top: 24px;
  padding: 14px 22px;
  background: white;
  color: #22613f;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}
</style>