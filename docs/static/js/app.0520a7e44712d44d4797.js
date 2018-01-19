webpackJsonp([1],{NHnr:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=a("7+uW"),t={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{attrs:{id:"app"}},[a("h1",{staticStyle:{"text-align":"center"}},[e._v("Off-Grid")]),e._v(" "),a("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},t,!1,function(e){a("lTFA")},null,null).exports,i=a("/ocq"),l={name:"SolarEnergy",data:function(){return{sunHours:null,solarPanelWatt:null,solarPanelPrice:null,controllerPrice:null,batteryPrice:null,inverterPrice:null,miscPrice:null,tdlPLN:1.35}},methods:{formatMoney:function(e){if(0===e)return"0";if(e>0){for(var r=e.toString(),a=r.length%3,o=a?[r.substr(0,a)]:[];a<r.length;a+=3)o.push(r.substr(a,3));return"Rp. "+o.join(".")}}},computed:{dailyPowerProduction:function(){return Number(this.solarPanelWatt)*Number(this.sunHours)},systemCost:function(){return Number(this.solarPanelPrice)+Number(this.controllerPrice)+Number(this.batteryPrice)+Number(this.inverterPrice)+Number(this.miscPrice)},yearlyEnergyCreation:function(){return 365*Number(this.sunHours)*Number(this.solarPanelWatt)},yearlyValueCreation:function(){return Math.round(Number(this.yearlyEnergyCreation)*Number(this.tdlPLN))},systemPaybackPeriod:function(){return Number(this.systemCost)/Number(this.yearlyValueCreation)}}},s={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"finder left"},[a("div",{staticClass:"form-box"},[a("h2",[e._v("Produksi Daya")]),e._v(" "),a("label",{staticClass:"label-form"},[e._v("Daya Solar Panel total (Watt):")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.solarPanelWatt,expression:"solarPanelWatt",modifiers:{number:!0}}],staticClass:"big-input",attrs:{type:"number",placeholder:"Daya solar panel keseluruhan setelah dirangkai"},domProps:{value:e.solarPanelWatt},on:{input:function(r){r.target.composing||(e.solarPanelWatt=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),a("br"),e._v(" "),a("label",{staticClass:"label-form"},[e._v("Lama Charging per hari (sun hours/day):")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sunHours,expression:"sunHours",modifiers:{number:!0}}],staticClass:"big-input",attrs:{type:"number",placeholder:"Lama charging dalam sehari (jam)"},domProps:{value:e.sunHours},on:{input:function(r){r.target.composing||(e.sunHours=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),a("p",[e._v("Produksi Daya/hari : "),a("strong",[e._v(e._s(e.dailyPowerProduction)+" Wh")])]),e._v(" "),a("p",[e._v("Produksi Daya/tahun : "),a("strong",[e._v(e._s(e.yearlyEnergyCreation)+" Wh/y")])]),e._v(" "),a("br"),e._v(" "),a("h2",[e._v("Investasi: ")]),e._v(" "),a("label",{staticClass:"label-form"},[e._v(" Harga Solar Panel: ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.solarPanelPrice,expression:"solarPanelPrice",modifiers:{number:!0}}],staticClass:"big-input",attrs:{type:"number",placeholder:"Harga Solar Panel Keseluruhan"},domProps:{value:e.solarPanelPrice},on:{input:function(r){r.target.composing||(e.solarPanelPrice=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),a("br"),e._v(" "),a("label",{staticClass:"label-form"},[e._v(" Harga Solar Controller: ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.controllerPrice,expression:"controllerPrice",modifiers:{number:!0}}],staticClass:"big-input",attrs:{type:"number",placeholder:"Harga Controller"},domProps:{value:e.controllerPrice},on:{input:function(r){r.target.composing||(e.controllerPrice=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),a("br"),e._v(" "),a("label",{staticClass:"label-form"},[e._v(" Harga Baterai: ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.batteryPrice,expression:"batteryPrice",modifiers:{number:!0}}],staticClass:"big-input",attrs:{type:"number",placeholder:"Harga Baterai/Aki Keseluruhan"},domProps:{value:e.batteryPrice},on:{input:function(r){r.target.composing||(e.batteryPrice=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),a("br"),e._v(" "),a("label",{staticClass:"label-form"},[e._v(" Harga Inverter: ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.inverterPrice,expression:"inverterPrice",modifiers:{number:!0}}],staticClass:"big-input",attrs:{type:"number",placeholder:"Harga Inverter"},domProps:{value:e.inverterPrice},on:{input:function(r){r.target.composing||(e.inverterPrice=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),a("br"),e._v(" "),a("label",{staticClass:"label-form"},[e._v(" Harga Komponen Lain: ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.miscPrice,expression:"miscPrice",modifiers:{number:!0}}],staticClass:"big-input",attrs:{type:"number",placeholder:"Harga Komponen Lain"},domProps:{value:e.miscPrice},on:{input:function(r){r.target.composing||(e.miscPrice=e._n(r.target.value))},blur:function(r){e.$forceUpdate()}}}),e._v(" "),a("br"),e._v(" "),a("label",{staticClass:"label-form"},[e._v("TDL PLN")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.tdlPLN,expression:"tdlPLN"}],staticClass:"big-input",on:{change:function(r){var a=Array.prototype.filter.call(r.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.tdlPLN=r.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Rumah Tangga R1:")]),e._v(" "),a("option",{domProps:{value:.415}},[e._v("R-1/450 VA (Subsidi)")]),e._v(" "),a("option",{domProps:{value:.586}},[e._v("R-1/900 VA (Subsidi)")]),e._v(" "),a("option",{domProps:{value:1.352}},[e._v("R-1/900 VA-RTM (Rumah Tangga Mampu)")]),e._v(" "),a("option",{domProps:{value:1.46728}},[e._v("R-1/1300 VA")]),e._v(" "),a("option",{domProps:{value:1.46728}},[e._v("R-1/2200 VA")]),e._v(" "),a("option",{domProps:{value:1.46728}},[e._v("R-2/3500 VA, 4400 VA, 5500 VA")]),e._v(" "),a("option",{domProps:{value:1.46728}},[e._v("R-3/6600 VA ke atas")]),e._v(" "),a("option",{attrs:{disabled:"",value:""}},[e._v("Bisnis B1 (Subsidi):")]),e._v(" "),a("option",{domProps:{value:.535}},[e._v("B-1/450 VA")]),e._v(" "),a("option",{domProps:{value:.63}},[e._v("B-1/900 VA")]),e._v(" "),a("option",{domProps:{value:.966}},[e._v("B-1/1300 VA")]),e._v(" "),a("option",{domProps:{value:1.1}},[e._v("B-1/2200 VA")]),e._v(" "),a("option",{domProps:{value:1.1}},[e._v("B-1/3500 VA")]),e._v(" "),a("option",{domProps:{value:1.1}},[e._v("B-1/4400 VA")]),e._v(" "),a("option",{domProps:{value:1.1}},[e._v("B-1/5500 VA")]),e._v(" "),a("option",{attrs:{disabled:"",value:""}},[e._v("Sosial (Subsidi):")]),e._v(" "),a("option",{domProps:{value:.325}},[e._v("S-2/450 VA\t")]),e._v(" "),a("option",{domProps:{value:.455}},[e._v("S-2/900 VA")]),e._v(" "),a("option",{domProps:{value:.708}},[e._v("S-2/1300 VA")]),e._v(" "),a("option",{domProps:{value:.76}},[e._v("S-2/2200 VA")]),e._v(" "),a("option",{domProps:{value:.9}},[e._v("S-2/3500 VA s.d 200 kVA")]),e._v(" "),a("option",{attrs:{disabled:"",value:""}},[e._v("Industri (Subsidi):")]),e._v(" "),a("option",{domProps:{value:.485}},[e._v("I-1/450 VA")]),e._v(" "),a("option",{domProps:{value:.6}},[e._v("I-1/900 VA")]),e._v(" "),a("option",{domProps:{value:.93}},[e._v("I-1/1300 VA")]),e._v(" "),a("option",{domProps:{value:.96}},[e._v("I-1/2200 VA")]),e._v(" "),a("option",{domProps:{value:1.112}},[e._v("I-1/3500 VA s.d 14 kVA")]),e._v(" "),a("option",{attrs:{disabled:"",value:""}},[e._v("Publik (Subsidi):")]),e._v(" "),a("option",{domProps:{value:.685}},[e._v("P-1/450 VA")]),e._v(" "),a("option",{domProps:{value:.76}},[e._v("P-1/900 VA")]),e._v(" "),a("option",{domProps:{value:1.049}},[e._v("P-1/1300 VA")]),e._v(" "),a("option",{domProps:{value:1.076}},[e._v("P-1/2200 VA")]),e._v(" "),a("option",{domProps:{value:1.076}},[e._v("P-1/3500 VA")]),e._v(" "),a("option",{domProps:{value:1.076}},[e._v("P-1/4400 VA")]),e._v(" "),a("option",{domProps:{value:1.076}},[e._v("P-1/5500 VA")])]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Total Biaya Sistem: "),a("strong",[e._v(e._s(e.formatMoney(e.systemCost)))]),e._v(" (cost)")]),e._v(" "),a("p",[e._v("Nilai Produksi Daya/tahun: "),a("strong",[e._v(e._s(e.formatMoney(e.yearlyValueCreation)))]),e._v(" (income)")]),e._v(" "),a("p",[e._v("Balik Modal pada tahun ke "),a("strong",[e._v(e._s(isNaN(e.systemPaybackPeriod)?0:e.systemPaybackPeriod.toString().slice(0,3)))])])])])},staticRenderFns:[]};var u=a("VU/8")(l,s,!1,function(e){a("q8JI")},null,null).exports;o.a.use(i.a);var v=new i.a({routes:[{path:"/",name:"SolarEnergy",component:u}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:v,components:{App:n},template:"<App/>"})},lTFA:function(e,r){},q8JI:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.0520a7e44712d44d4797.js.map