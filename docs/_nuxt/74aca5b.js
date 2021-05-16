(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{385:function(e,t,r){"use strict";r.r(t);r(23),r(29),r(55),r(8);var n={name:"PurchaseInvestment",data:function(){return{dataKeys:["priceOfSale","appraisedPrice","relativePercent","premium","deposit","migrantLoan","movingExpenses","unionMemberPrice","unionMemberDivideDownPayment","amountOfRight"],priceOfSale:0,appraisedPrice:0,relativePercent:0,premium:0,deposit:0,migrantLoan:0,movingExpenses:0,unionMemberPrice:0,amountOfRight:0,firstPrice:0,secondPrice:0,unionMemberDividePrice:0,unionMemberDivideDownPayment:0,totalPrice:0}},mounted:function(){this.initData(),this.visitPrices()},watch:{},computed:{},methods:{initData:function(){this.priceOfSale=3e8,this.appraisedPrice=1e8,this.relativePercent=100,this.premium=1e8,this.deposit=5e7,this.movingExpenses=5e6,this.migrantLoan=this.calcMigrantLoanLoan(),this.unionMemberPrice=0,this.amountOfRight=this.appraisedPrice*this.relativePercent/100,this.unionMemberDividePrice=this.priceOfSale-this.amountOfRight,this.unionMemberDivideDownPayment=this.unionMemberDividePrice/10},removeComma:function(e){return Number(String(e).replace(/,/gi,""))},updatePrice:function(e,t){console.log(e,t),this[e]=this.removeComma(t),"appraisedPrice"===e&&(this.calcMigrantLoanLoan(),this.calcAmountOfRight()),"relativePercent"===e&&this.calcAmountOfRight(),this.unionMemberDividePrice=this.removeComma(this.priceOfSale)-this.removeComma(this.amountOfRight),this.unionMemberDivideDownPayment=this.unionMemberDividePrice/10,this.visitPrices(),this.firstResult()},calcMigrantLoanLoan:function(){return this.migrantLoan=.4*this.removeComma(this.appraisedPrice),this.migrantLoan},calcAmountOfRight:function(){this.amountOfRight=this.removeComma(this.appraisedPrice)*this.removeComma(this.relativePercent)/100},visitPrice:function(e){return Number(e).toLocaleString()},visitPrices:function(){var e=this;this.dataKeys.forEach((function(t){return e[t]=e.visitPrice(e.removeComma(e[t]))}))},firstResult:function(){return this.firstPrice=this.removeComma(this.amountOfRight)+this.removeComma(this.premium)-this.removeComma(this.deposit),this.visitPrice(this.firstPrice)},secondResult:function(){return this.secondPrice=this.removeComma(this.migrantLoan)+this.removeComma(this.movingExpenses)-this.removeComma(this.deposit),this.visitPrice(this.secondPrice)},plusFirstSecond:function(){return this.visitPrice(this.firstPrice+-this.secondPrice)},finalPrice:function(){return this.totalPrice=this.removeComma(this.plusFirstSecond())+this.removeComma(this.unionMemberDividePrice)/10,this.visitPrice(this.totalPrice)}}},o=r(81),v=r(108),c=r.n(v),l=r(338),m=r(335),d=r(381),_=r(333),h=r(137),f=r(382),P=r(383),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-item-group",[r("v-container",[r("v-row",[r("v-col",[r("v-card",[r("v-card-title",[r("span",{staticClass:"title font-weight-light"},[e._v("매입 시 투자금")])]),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("조합원 분양가")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("priceOfSale",e.priceOfSale)}},model:{value:e.priceOfSale,callback:function(t){e.priceOfSale=t},expression:"priceOfSale"}})],1),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("감정평가액")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("appraisedPrice",e.appraisedPrice)}},model:{value:e.appraisedPrice,callback:function(t){e.appraisedPrice=t},expression:"appraisedPrice"}})],1),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("비례율")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("relativePercent",e.relativePercent)}},model:{value:e.relativePercent,callback:function(t){e.relativePercent=t},expression:"relativePercent"}})],1),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("프리미엄")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("premium",e.premium)}},model:{value:e.premium,callback:function(t){e.premium=t},expression:"premium"}})],1),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("전세 보증금")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("deposit",e.deposit)}},model:{value:e.deposit,callback:function(t){e.deposit=t},expression:"deposit"}})],1),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("이주비 대출금")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("migrantLoan",e.migrantLoan)}},model:{value:e.migrantLoan,callback:function(t){e.migrantLoan=t},expression:"migrantLoan"}})],1),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("이사비")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("movingExpenses",e.movingExpenses)}},model:{value:e.movingExpenses,callback:function(t){e.movingExpenses=t},expression:"movingExpenses"}})],1),e._v(" "),r("v-card-text",[r("v-card-subtitle",[e._v("조합원분양 계약금")]),e._v(" "),r("v-text-field",{staticStyle:{color:"white","font-weight":"bold"},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePrice("unionMemberDivideDownPayment",e.unionMemberDivideDownPayment)}},model:{value:e.unionMemberDivideDownPayment,callback:function(t){e.unionMemberDivideDownPayment=t},expression:"unionMemberDivideDownPayment"}})],1)],1)],1),e._v(" "),r("v-col",[r("v-card",[r("v-card-title",[e._v("매입 시 투자금")]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",[e._v("권리가액")]),e._v(" "),r("v-col",[e._v(e._s(e.amountOfRight)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("프리미엄")]),e._v(" "),r("v-col",[e._v(e._s(e.premium)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("전세보증금")]),e._v(" "),r("v-col",[e._v(e._s(e.deposit)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("총 금액")]),e._v(" "),r("v-col",[e._v(e._s(e.firstResult())+"원")])],1)],1)],1),e._v(" "),r("v-card",[r("v-card-title",[e._v("이주 시 필요한 투자금")]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",[e._v("이주비 대출")]),e._v(" "),r("v-col",[e._v(e._s(e.migrantLoan)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("이사비")]),e._v(" "),r("v-col",[e._v(e._s(e.movingExpenses)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("전세보증금")]),e._v(" "),r("v-col",[e._v(e._s(e.deposit)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("총 금액")]),e._v(" "),r("v-col",[e._v("- "+e._s(e.secondResult())+"원")])],1)],1)],1),e._v(" "),r("v-card",[r("v-card-title",[e._v("매입 + 이주 투자금")]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",[e._v("매입 총 투자금")]),e._v(" "),r("v-col",[e._v(e._s(e.firstResult())+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("이주 총 투자금")]),e._v(" "),r("v-col",[e._v(e._s(e.secondResult())+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("합계 금액")]),e._v(" "),r("v-col",[e._v(e._s(e.plusFirstSecond())+"원")])],1)],1)],1),e._v(" "),r("v-card",[r("v-card-title",[e._v("조합원 분양 시 필요한 투자금")]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",[e._v("조합원 분양가")]),e._v(" "),r("v-col",[e._v(e._s(e.priceOfSale)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("권리가액")]),e._v(" "),r("v-col",[e._v(e._s(e.premium)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("조합원 분담금")]),e._v(" "),r("v-col",[e._v(e._s(e.visitPrice(e.unionMemberDividePrice))+"원")])],1)],1)],1),e._v(" "),r("v-card",[r("v-card-title",[e._v("총 투자금")]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",[e._v("매입 투자금")]),e._v(" "),r("v-col",[e._v(e._s(e.visitPrice(e.firstPrice))+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("이주 시 필요한 투자금")]),e._v(" "),r("v-col",[e._v("- "+e._s(e.secondResult())+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("조합원 분양 시 필요한 투자금 * 10%")]),e._v(" "),r("v-col",[e._v(e._s(e.unionMemberDivideDownPayment)+"원")])],1),e._v(" "),r("v-row",[r("v-col",[e._v("총 금액")]),e._v(" "),r("v-col",[e._v(e._s(e.finalPrice())+"원")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"5e0f2355",null);t.default=component.exports;c()(component,{VCard:l.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VCol:d.a,VContainer:_.a,VItemGroup:h.b,VRow:f.a,VTextField:P.a})}}]);