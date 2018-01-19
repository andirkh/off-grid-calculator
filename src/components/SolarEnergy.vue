<template>
  <div class="center">
    <h3>Produksi Daya</h3>
    <label>Daya Solar Panel total (Watt):</label>
    <input
      type="number"
      v-model.number="solarPanelWatt"

      placeholder="Daya solar panel keseluruhan setelah dirangkai" />
    <br />
    <label>Lama Charging per hari (sun hours/day):</label>
    <input type="number" v-model.number="sunHours" placeholder="Lama charging dalam sehari (jam)" />
    <p>Produksi Daya/hari : {{ dailyPowerProduction }} Watt</p>
    <p>Produksi Daya/tahun : {{ yearlyEnergyCreation }} Watt</p>

    <br />

    <h3>Investasi: </h3>
    <label> Harga Solar Panel: </label>
    <input type="number" v-model.number="solarPanelPrice" placeholder="Harga Solar Panel Keseluruhan" />
    <br />
    <label> Harga Solar Controller: </label>
    <input type="number" v-model.number="controllerPrice" placeholder="Harga Controller" />
    <br />
    <label> Harga Baterai</label>
    <input type="number" v-model.number="batteryPrice" placeholder="Harga Baterai/Aki Keseluruhan" />
    <br />
    <label> Harga Inverter </label>
    <input type="number" v-model.number="inverterPrice" placeholder="Harga Inverter" />
    <br />
    <label> Harga Komponen Lain </label>
    <input type="number" v-model.number="miscPrice" placeholder="Harga Komponen Lain" />
    <br />
    <p>Total Biaya Sistem: {{ formatMoney(systemCost) }}</p>
    <p>Nilai Produksi per-tahun: {{ formatMoney(yearlyValueCreation) }}</p>
    <p>Balik Modal pada tahun ke {{ isNaN(systemPaybackPeriod) ? 0 : systemPaybackPeriod.toString().slice(0,3) }}</p>
  </div>
</template>

<script>
export default {
  name: 'SolarEnergy',
  data () {
    return {
      sunHours: null,
      solarPanelWatt: null,

      solarPanelPrice: null,
      controllerPrice: null,
      batteryPrice: null,
      inverterPrice: null,
      miscPrice: null,

      tdlPLN: 1.350

    }
  },
  methods: {
    formatMoney: function(a){
      if (a === 0) {
    		return "0"
    	} else if (a > 0) {
    		let s = a.toString(),
    				i = s.length % 3;
    		let parts = i ? [ s.substr( 0, i ) ] : [];

    		for( ; i < s.length ; i += 3 ) {
    				parts.push( s.substr( i, 3 ) );
    		}
    		return "Rp. " + parts.join('.');
    	}
    }
  },
  computed: {
    dailyPowerProduction: function(){
      return Number(this.solarPanelWatt) * Number(this.sunHours)
    },
    systemCost: function(){
      return Number(this.solarPanelPrice) + Number(this.controllerPrice) + Number(this.batteryPrice) + Number(this.inverterPrice) + Number(this.miscPrice)
    },
    yearlyEnergyCreation: function(){
      return 365 * Number(this.sunHours) * Number(this.solarPanelWatt)
    },
    yearlyValueCreation: function(){
      return Number(this.yearlyEnergyCreation) * Number(this.tdlPLN)
    },
    systemPaybackPeriod: function(){
      return Number(this.systemCost) / Number(this.yearlyValueCreation)
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
