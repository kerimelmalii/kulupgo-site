/* Ürün ekranı taslakları. Tüm isimler ve rakamlar örnek veridir. */
(function(){
var I=SK.icon;
function browser(url,inner){return '<div class="browser"><div class="browser-bar"><i></i><i></i><i></i><span>'+url+'</span></div>'+inner+'</div>';}
function side(who,sub,items,on){
  var s='<aside class="app-side"><div class="who">'+who+'<small>'+sub+'</small></div>';
  items.forEach(function(it,i){s+='<a href="#" tabindex="-1" class="'+(i===on?'on':'')+'">'+I(it[0],2)+it[1]+'</a>';});
  return s+'</aside>';
}
var ADMIN_NAV=[['chart','Özet'],['users','Oyuncular'],['check','İdmanlar'],['ball','Maçlar'],['coin','Gelir-gider'],['box','Malzeme'],['list','Denetim kaydı']];
var COACH_NAV=[['chart','Takımım'],['check','Yoklama'],['clip','İdman planı'],['ball','Maç kadrosu'],['file','Karneler']];

function admin(){
  return browser('app.kulupgo.com/ozet',
  '<div class="app">'+side('Örnek SK','Yönetici',ADMIN_NAV,0)+
  '<div class="app-main"><h4>Kasım özeti <span class="tag" style="vertical-align:middle;margin-left:8px">Örnek veri</span></h4>'+
  '<div class="kpis"><div class="kpi"><small>Aktif oyuncu</small><b>142</b></div><div class="kpi"><small>Bu hafta idman</small><b>18</b></div><div class="kpi"><small>Aylık net</small><b>+38.400 ₺</b></div><div class="kpi warn"><small>Ödemesi bekleyen</small><b>11</b></div></div>'+
  '<table class="mt"><thead><tr><th>Oyuncu</th><th>Takım</th><th>Kasım aidatı</th><th>Lisans bitişi</th></tr></thead><tbody>'+
  '<tr><td>0042 · Ali Y.</td><td>U14</td><td><span class="pill ok">ÖDENDİ</span></td><td>06.2027</td></tr>'+
  '<tr><td>0057 · Burak T.</td><td>U12</td><td><span class="pill late">BEKLİYOR</span></td><td>03.2027</td></tr>'+
  '<tr><td>0063 · Can E.</td><td>U16</td><td><span class="pill ok">ÖDENDİ</span></td><td>11.2026</td></tr>'+
  '<tr><td>0071 · Deniz A.</td><td>Futbol okulu</td><td><span class="pill bad">GECİKTİ</span></td><td>—</td></tr>'+
  '</tbody></table></div></div>');
}
function coach(){
  return browser('app.kulupgo.com/yoklama',
  '<div class="app">'+side('U14 Takımı','Antrenör',COACH_NAV,1)+
  '<div class="app-main"><h4>Salı idmanı <span class="tag" style="vertical-align:middle;margin-left:8px">Örnek veri</span></h4>'+
  '<table class="mt"><thead><tr><th>Oyuncu</th><th>Yoklama</th><th>Puan</th><th>Not</th></tr></thead><tbody>'+
  '<tr><td>Ali Y.</td><td><span class="pill ok">GELDİ</span></td><td>8</td><td>Pas hızı iyi</td></tr>'+
  '<tr><td>Emre K.</td><td><span class="pill ok">GELDİ</span></td><td>7</td><td>Pozisyon alma</td></tr>'+
  '<tr><td>Furkan S.</td><td><span class="pill late">İZİNLİ</span></td><td>—</td><td>Okul gezisi</td></tr>'+
  '<tr><td>Kerem D.</td><td><span class="pill bad">GELMEDİ</span></td><td>—</td><td></td></tr>'+
  '<tr><td>Mert B.</td><td><span class="pill ok">GELDİ</span></td><td>9</td><td>Bitiricilik</td></tr>'+
  '</tbody></table>'+
  '<div class="pbox" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><div><small>Bugünün planı</small><b>Isınma 15 dk · Pas çalışması 25 dk · Küçük alan 30 dk</b></div></div>'+
  '</div></div>');
}
function parent(){
  return '<div class="phone"><div class="phone-top"><small>Merhaba, Ayşe Hanım</small><b>Ali Y. · U14</b></div><div class="phone-body">'+
  '<div class="pbox"><small>Sıradaki maç</small><b>Cumartesi 11:00 · Deplasman</b></div>'+
  '<div class="pbox"><small>İdman devamı</small><b>9 / 10 idman</b><div class="bar" style="margin-top:6px"><i style="width:90%"></i></div></div>'+
  '<div class="pbox"><small>Kasım aidatı</small><b><span class="pill ok">ÖDENDİ</span></b></div>'+
  '<div class="pbox"><small>Zimmet</small><b>Eşofman takımı · M beden</b></div>'+
  '<div class="pbox" style="background:var(--card)"><small style="color:var(--ink)">Yeni karne</small><b>Antrenör karneyi paylaştı</b></div>'+
  '</div><div class="phone-nav"><span class="on">Ana sayfa</span><span>Maçlar</span><span>Gelişim</span><span>Aidat</span></div></div>';
}
function reportCard(){
  var rows=[['Teknik',8],['Taktik',7],['Fiziksel',8],['Mental',9],['Takım oyunu',9]],s='';
  rows.forEach(function(r){s+='<div style="display:grid;grid-template-columns:110px 1fr 30px;gap:10px;align-items:center;font-size:.9rem;font-weight:600"><span>'+r[0]+'</span><div class="bar"><i style="width:'+r[1]*10+'%"></i></div><b style="font-family:var(--f-display)">'+r[1]+'</b></div>';});
  return '<div class="card" style="gap:16px;box-shadow:var(--sh)"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><span class="tag y">Dönem karnesi · Örnek</span><h3 style="margin-top:10px">Ali Y. · U14</h3></div><div class="bigscore" style="font-size:3.4rem">8.2</div></div>'+s+
  '<div style="border-top:1px solid var(--rule);padding-top:14px;font-size:.95rem;color:var(--ink)"><b>Güçlü yön:</b> Takım arkadaşlarını oyuna katıyor.<br><b>Gelişim alanı:</b> Zayıf ayakla pas.<br><b>Veliye mesaj:</b> [Antrenörün yazdığı kısa mesaj burada görünür.]</div>'+
  '<div class="muted" style="font-size:.84rem;display:flex;gap:8px;align-items:center"><span class="lock">'+I('lock',2)+'İç not</span> veli tarafından görülmez.</div></div>';
}
function squad(){
  var rows=[['1','Kaleci','Mert B.','K'],['4','Stoper','Emre K.',''],['8','Orta saha','Ali Y.','C'],['9','Forvet','Can E.','']];
  var t='<table class="mt"><thead><tr><th>No</th><th>Mevki</th><th>Oyuncu</th><th></th></tr></thead><tbody>';
  rows.forEach(function(r){t+='<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+(r[3]==='K'?'<span class="pill late">KALECİ</span>':r[3]==='C'?'<span class="pill ok">KAPTAN</span>':'')+'</td></tr>';});
  return t+'</tbody></table>';
}
function stockTable(){
  return '<table class="mt"><thead><tr><th>Ürün</th><th>Stok</th><th>Kritik</th><th>Durum</th></tr></thead><tbody>'+
  '<tr><td>Antrenman topu</td><td>14</td><td>10</td><td><span class="pill ok">YETERLİ</span></td></tr>'+
  '<tr><td>Yelek (sarı)</td><td>9</td><td>12</td><td><span class="pill late">AZALDI</span></td></tr>'+
  '<tr><td>Eşofman takımı M</td><td>3</td><td>5</td><td><span class="pill bad">KRİTİK</span></td></tr></tbody></table>';
}
function moneyBars(){
  var m=[['Eyl',60,38],['Eki',72,41],['Kas',80,42]],s='<div style="display:flex;gap:22px;align-items:flex-end;height:130px;padding:6px 4px">';
  m.forEach(function(x){s+='<div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1"><div style="display:flex;gap:4px;align-items:flex-end;height:100px"><i style="width:22px;height:'+x[1]+'px;background:var(--pitch);border:1px solid var(--rule)"></i><i style="width:22px;height:'+x[2]+'px;background:var(--card);border:1px solid var(--rule)"></i></div><small style="font-weight:700">'+x[0]+'</small></div>';});
  return s+'</div><div style="display:flex;gap:16px;font-size:.78rem;font-weight:600"><span><i style="display:inline-block;width:10px;height:10px;background:var(--pitch);border:1px solid var(--rule)"></i> Gelir</span><span><i style="display:inline-block;width:10px;height:10px;background:var(--card);border:1px solid var(--rule)"></i> Gider</span><span class="muted">Örnek veri</span></div>';
}
function clubSite(){
  return '<div class="sitemock"><div class="browser-bar"><i></i><i></i><i></i><span>ornek.kulupgo.com</span></div>'+
  '<div style="background:#0F3D2E;color:#fff;padding:18px 22px;display:flex;align-items:center;gap:14px;flex-wrap:wrap"><div style="width:44px;height:44px;border:2px dashed #9FC0AD;display:grid;place-items:center;font-size:.6rem;text-align:center;line-height:1.1">LOGO<br>YERİ</div><b style="font-family:var(--f-display);font-size:1.2rem">Örnek Spor Kulübü</b><span style="margin-left:auto;font-size:.82rem;display:flex;gap:16px"><span>Fikstür</span><span>Sonuçlar</span><span>Kadro</span></span></div>'+
  '<div style="padding:20px 22px;display:grid;gap:14px;background:var(--paper)">'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><div class="pbox"><small>Sıradaki maç · Örnek</small><b>Örnek SK – [Rakip]</b><div class="muted" style="font-size:.78rem">Cumartesi 11:00</div></div><div class="pbox"><small>Son sonuç · Örnek</small><b>[Rakip] 1 – 3 Örnek SK</b></div></div>'+
  '<table class="mt"><thead><tr><th>Kadro</th><th>Mevki</th><th>No</th></tr></thead><tbody><tr><td>Oyuncu adı yalnızca veli izin verdiyse görünür</td><td>—</td><td>—</td></tr></tbody></table></div></div>';
}
window.MK={browser:browser,admin:admin,coach:coach,parent:parent,reportCard:reportCard,squad:squad,stockTable:stockTable,moneyBars:moneyBars,clubSite:clubSite};
})();
