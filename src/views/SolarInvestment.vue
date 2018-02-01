<template>
  <div class="finder left">
      <h1 style="text-align: center">Off-Grid Investment</h1>
    <div class="form-box">

      <p>Hobi atau ingin memasang DIY solar panel? atau penasaran tentang biaya investasi yg dikeluarkan serta kapan mbaliknya? ini kalkulator untukmu.</p>

      <br />

      <h2>Produksi Daya</h2>
      <label class="label-form">Daya Solar Panel total (Watt):</label>
      <input class="big-input"
        type="number"
        v-model.number="solarPanelWatt"
        placeholder="Masukin Daya solar panel keseluruhan setelah dirangkai" />
      <p class="small-text">*tips: Solar panel dipasaran ada yg 100W dan bisa kamu rangkai jadi 500W misalnya.</p>
      <br />

      <label class="label-form">Lama Charging per hari (sun hours/day):</label>
      <input class="big-input" max="24"  type="number" v-model.number="sunHours" placeholder="Masukin Lama charging dalam sehari (jam)" />
      <p class="small-text" v-if="sunHours < 24">*tips: Biasanya 5jam sudah standar, pastinya tdk mungkin diatas 24jam kalo dipasang di Bumi.</p>
      <p class="small-text" style="color: #ef567a" v-if="sunHours > 24">*DI BUMI MAKSIMAL SEHARI CUMA 24JAM BOSQUU</p>

      <br />
      <p>Produksi Daya/hari : <strong>{{ dailyPowerProduction }} Wh</strong></p>
      <p>Produksi Daya/tahun : <strong>{{ yearlyEnergyCreation }} Wh/y</strong></p>

      <br />

      <h2>Investasi </h2>
      <label class="label-form"> Harga Solar Panel: </label>
      <input class="big-input"  type="number" v-model.number="solarPanelPrice" placeholder="Masukin Harga Solar Panel Keseluruhan" />
      <p class="small-text">*tips: Coba research layaknya dikasih harga berapa kalo daya total solar panelnya {{solarPanelWatt}}</p>
      <br />
      <label class="label-form"> Harga Solar Controller: </label>
      <input class="big-input"  type="number" v-model.number="controllerPrice" placeholder="Masukin Harga Controller" />
      <p class="small-text">*tips: Biasanya sih 600.000 udah dapet bagus.</p>
      <br />
      <label class="label-form"> Harga Baterai: </label>
      <input class="big-input"  type="number" v-model.number="batteryPrice" placeholder="Masukin Harga Baterai/Aki Keseluruhan" />
      <p class="small-text">*tips: Coba di kira-kira kalo daya dari solar panel {{solarPanelWatt}}, kira-kira cocok sama aki harga seberapa.</p>
      <br />
      <label class="label-form"> Harga Inverter: </label>
      <input class="big-input"  type="number" v-model.number="inverterPrice" placeholder="Masukin Harga Inverter" />
      <p class="small-text">*tips: Biasanya 1,4jt udah dapet Inverter yg Pure Sine Wave.</p>
      <br />
      <label class="label-form"> Harga Komponen Lain dan Jasa: </label>
      <input class="big-input"  type="number" v-model.number="miscPrice" placeholder="Masukin Harga Komponen Lain" />
      <p class="small-text">*tips: Harga kabel, dan harga-harga tidak terduga lain seperti biaya pemasangan.</p>
      <br />
      <label class="label-form">TDL PLN</label>
      <select v-model="tdlPLN" class="big-input">
        <option disabled value="">Rumah Tangga R1:</option>
        <option v-bind:value="0.415">R-1/450 VA (Subsidi)</option>
        <option v-bind:value="0.586">R-1/900 VA (Subsidi)</option>
        <option v-bind:value="1.352">R-1/900 VA-RTM (Rumah Tangga Mampu)</option>
        <option v-bind:value="1.46728">R-1/1300 VA</option>
        <option v-bind:value="1.46728">R-1/2200 VA</option>
        <option v-bind:value="1.46728">R-2/3500 VA, 4400 VA, 5500 VA</option>
        <option v-bind:value="1.46728">R-3/6600 VA ke atas</option>

        <option disabled value="">Bisnis B1 (Subsidi):</option>
        <option v-bind:value="0.535">B-1/450 VA</option>
        <option v-bind:value="0.63">B-1/900 VA</option>
        <option v-bind:value="0.966">B-1/1300 VA</option>
        <option v-bind:value="1.1">B-1/2200 VA</option>
        <option v-bind:value="1.1">B-1/3500 VA</option>
        <option v-bind:value="1.1">B-1/4400 VA</option>
        <option v-bind:value="1.1">B-1/5500 VA</option>

        <option disabled value="">Sosial (Subsidi):</option>
        <option v-bind:value="0.325">S-2/450 VA	</option>
        <option v-bind:value="0.455">S-2/900 VA</option>
        <option v-bind:value="0.708">S-2/1300 VA</option>
        <option v-bind:value="0.76">S-2/2200 VA</option>
        <option v-bind:value="0.9">S-2/3500 VA s.d 200 kVA</option>

        <option disabled value="">Industri (Subsidi):</option>
        <option v-bind:value="0.485">I-1/450 VA</option>
        <option v-bind:value="0.6">I-1/900 VA</option>
        <option v-bind:value="0.93">I-1/1300 VA</option>
        <option v-bind:value="0.96">I-1/2200 VA</option>
        <option v-bind:value="1.112">I-1/3500 VA s.d 14 kVA</option>

        <option disabled value="">Publik (Subsidi):</option>
        <option v-bind:value="0.685">P-1/450 VA</option>
        <option v-bind:value="0.76">P-1/900 VA</option>
        <option v-bind:value="1.049">P-1/1300 VA</option>
        <option v-bind:value="1.076">P-1/2200 VA</option>
        <option v-bind:value="1.076">P-1/3500 VA</option>
        <option v-bind:value="1.076">P-1/4400 VA</option>
        <option v-bind:value="1.076">P-1/5500 VA</option>
      </select>
      <br />
      <p>Total Biaya Sistem: <strong>{{ formatMoney(systemCost) }}</strong> (cost)</p>
      <p>Nilai Produksi Daya/tahun: <strong>{{ formatMoney(yearlyValueCreation) }}</strong> (income)</p>
      <p>Balik Modal pada tahun ke <strong>{{ isNaN(systemPaybackPeriod) ? 0 : systemPaybackPeriod.toString().slice(0,3) }}</strong> <button v-on:click="seeInsight" v-if="systemCost > 0">maksudnya?</button></p>

      <br />

      <div v-if="insightOpen">
        <h2>Maksudnya</h2>
        <p>Dari data perkiraan yg kamu isi, biaya yg dibutuhkan untuk membangun sistem tersebut adalah sekitar <strong>{{formatMoney(systemCost)}}</strong>. Tiap tahun, sistemmu dapat menghasilkan listrik yg jika dirupiahin bisa sekitar <strong>{{ formatMoney(yearlyValueCreation) }}</strong> relatif terhadap TDL PLN yg sedang kamu pakai sekarang. Jadi sekitar... ya kira-kira {{(yearlyValueCreation / systemCost * 100).toString().slice(0,5)}}% lah dari modalmu akan kembali tiap tahun. Oleh karena itu, dibutuhkan waktu {{systemPaybackPeriod.toString().slice(0,3)}} tahun agar modalmu kembali. </p>

        <p>Setelah modalmu kembali, kamu baru bisa benar-benar menghemat tagihan listrikmu dan mendapatkan benefit yg sebenarnya. Solar panelmu akan menghemat pengeluaran listrik senilai <strong>{{ formatMoney(Math.round(yearlyValueCreation / 12)) }}</strong> perbulannya. Lumayan?</p>

        <br />
        <br />

        <button class="create-button" v-on:click="sebentar">Aduh, saya penasaran</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolarInvestment',
  data () {
    return {
      insightOpen: false,
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
    sebentar: function(){
      alert("sebentar sabar ya, masih saya buatin page selanjutnya, hehe.")
    },
    seeInsight: function(){
      this.insightOpen = true;
    },
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
      return Math.round(Number(this.yearlyEnergyCreation) * Number(this.tdlPLN))
    },
    systemPaybackPeriod: function(){
      return Number(this.systemCost) / Number(this.yearlyValueCreation)
    }
  }
}
</script>

<style>
</style>
