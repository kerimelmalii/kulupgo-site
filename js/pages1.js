/* Sayfalar 1: ana sayfa, özellikler, üye deneyimi, fiyatlar, güvenlik, kulüp sitesi */
(function(){
var D=DATA,I=SK.icon,P={};
window.PAGES=P;
function fmt(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.');}
function arrow(){return I('arrow',2.4);}
function pageHero(o){
  return '<section class="page-hero"><div class="wrap"><div><div class="crumbs"><a href="#">Ana sayfa</a> / '+o.crumb+'</div><span class="eyebrow">'+o.eyebrow+'</span><h1>'+o.title+'</h1><p class="lead" style="margin-top:20px">'+o.lead+'</p>'+(o.cta||'')+'</div><div class="art">'+SK.art(o.art)+'</div></div></section>';
}
function secHead(eyebrow,title,lead,center){
  return '<div class="sec-head'+(center?' center':'')+'"><span class="eyebrow">'+eyebrow+'</span><h2>'+title+'</h2>'+(lead?'<p class="lead">'+lead+'</p>':'')+'</div>';
}
function ctaBand(title,text){
  return '<section class="cta-band"><div class="wrap"><div><h2>'+(title||'Yeni sezona düzenli başla.')+'</h2><p>'+(text||'14 gün ücretsiz dene. Kulübünü kur, antrenörleri ve velileri davet et, ilk idmanın yoklamasını panelden al.')+'</p><div class="hero-cta" style="margin-top:28px"><a class="btn primary lg" href="#kayit">14 gün ücretsiz dene '+arrow()+'</a><a class="btn lg" href="#demo">Demo talep et</a></div></div><div class="cta-art">'+SK.art('ball')+'</div></div></section>';
}
function plansHTML(mode){
  return D.PLANS.map(function(p){
    var y=mode==='y',price=y?p.y:p.m;
    return '<article class="plan'+(p.pop?' pop':'')+'">'+(p.pop?'<span class="ribbon">Önerilen</span>':'')+
    '<div><h3>'+p.name+'</h3><p class="muted" style="margin-top:6px;font-size:.95rem">'+p.tag+'</p></div>'+
    '<div><div class="price"><b>'+fmt(price)+'</b><span>TL / '+(y?'yıl':'ay')+'</span></div><p class="muted" style="font-size:.88rem;margin-top:6px">'+(y?'Aylık '+fmt(Math.round(p.y/12))+' TL’ye denk · 2 ay bedava':'Yıllık ödersen '+fmt(p.y)+' TL')+'</p></div>'+
    '<div class="limits"><div><b>'+p.team+'</b><small>Takım</small></div><div><b>'+p.player+'</b><small>Oyuncu</small></div><div><b>'+p.staff+'</b><small>Personel</small></div></div>'+
    '<ul class="ticks">'+p.feats.map(function(f){return '<li>'+f+'</li>';}).join('')+'</ul>'+
    '<a class="btn'+(p.pop?' primary':'')+' block" href="#kayit">14 gün ücretsiz dene</a></article>';
  }).join('');
}
function bindToggle(root){
  var box=root.querySelector('#plans'),btns=root.querySelectorAll('[data-mode]');
  if(!box)return;
  btns.forEach(function(b){b.addEventListener('click',function(){
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
    box.innerHTML=plansHTML(b.getAttribute('data-mode'));
    var w=root.querySelector('#site-price');if(w){w.innerHTML=b.getAttribute('data-mode')==='y'?'<b>9.990</b><span>TL / yıl</span>':'<b>999</b><span>TL / ay</span>';}
  });});
}
function toggleHTML(){
  return '<div class="toggle" role="group" aria-label="Ödeme dönemi"><button type="button" data-mode="m" aria-pressed="true">Aylık</button><button type="button" data-mode="y" aria-pressed="false">Yıllık<span class="save">2 AY BEDAVA</span></button></div>';
}


var OPSART=['bib','cone','whistle','trophy','boot','glove'];
var OPS=[
 ['users','Oyuncular',['Oyuncu kaydet','Kulübe özel numara ver','Lisans bitişini takip et','Fotoğraf ve not ekle','Sakatlık kaydı tut','Takım geçmişini gör']],
 ['check','İdman',['Yoklama al','Performans puanı gir','İdman planı hazırla','Hazır şablon kaydet','Blok süresi ve ekipman yaz']],
 ['ball','Maçlar',['Fikstür oluştur','Maç kadrosunu hazırla','Gol, asist ve kartları gir','Maçı bitir, istatistikler hesaplansın','Rakip analizi ve maç raporu yaz']],
 ['coin','Gelir ve gider',['Aidat tahsil et','Sponsorluk gelirini yaz','Elektrik, saha, hakem, lisans giderini gir','Aylık net özeti gör']],
 ['chart','Gelişim',['Fiziksel test kaydet','Takım ortalamasını gör','Dönemlik karne yaz','Karneyi veliyle paylaş']],
 ['box','Malzeme',['Stok say','Kritik seviye belirle','Oyuncuya beden bilgisiyle zimmetle','İadeyi kaydet']]
];
var OPSUM=['Kayıt, lisans, sakatlık ve geçmiş, hepsi oyuncu kartında.','Yoklamadan idman planına, antrenörün günlük işi.','Fikstürden maç raporuna, kadro kuralları dahil.','Aidat ve sponsor gelirleri, giderler ve net özet.','Fiziksel testten dönem karnesine, veliyle paylaşılır.','Stok, kritik seviye ve oyuncu bazlı zimmet.'];
function tryChips(){return '<div class="try"><span>Yoklamada bir oyuncuya tıkla</span><span>Aidatı ödendi yap</span><span>Kadroda kuralları boz, uyarıyı gör</span><span>Rolü Veli’ye çevir</span></div>';}
/* ---------------- ANA SAYFA ---------------- */
var REFS=[
 {name:'Altınşehir SK',role:'İlk kulübümüz',q:'[Kulüp yönetiminden kısa bir yorum eklenecek]',tag:'Yorum bekleniyor'},
 {name:'[Kulüp adı]',role:'Yönetici',q:'[Aidat ve ay sonu özeti hakkında yorum]',tag:'Taslak yer tutucu'},
 {name:'[Kulüp adı]',role:'Antrenör',q:'[Yoklama ve maç kadrosu hakkında yorum]',tag:'Taslak yer tutucu'},
 {name:'[Kulüp adı]',role:'Veli',q:'[Çocuğunun bilgisine ulaşmak hakkında yorum]',tag:'Taslak yer tutucu'},
 {name:'[Kulüp adı]',role:'Futbol okulu',q:'[Kayıt ve devam takibi hakkında yorum]',tag:'Taslak yer tutucu'},
 {name:'[Kulüp adı]',role:'Yönetici',q:'[Gelir-gider ve malzeme hakkında yorum]',tag:'Taslak yer tutucu'}
];
function refCard(c){return '<article class="ref"><div class="ref-top"><span class="ref-logo">LOGO</span><div><b>'+c.name+'</b><small>'+c.role+'</small></div></div><p>'+c.q+'</p><span class="tag" style="align-self:flex-start">'+c.tag+'</span></article>';}
P['']={title:'KulüpGO | Futbol kulüpleri için yönetim paneli',
html:function(){
  var h='';
  h+='<section class="hero"><div class="hero-bg" aria-hidden="true"><svg viewBox="0 0 680 458" preserveAspectRatio="xMidYMin meet"><g fill="none" stroke="#101D34" stroke-width="1.6"><rect x="25" y="25" width="630" height="408" rx="6"/><path d="M340 25v408"/><circle cx="340" cy="229" r="55"/><rect x="25" y="108" width="99" height="242"/><rect x="25" y="174" width="33" height="110"/><rect x="556" y="108" width="99" height="242"/><rect x="622" y="174" width="33" height="110"/><path d="M124 185A55 55 0 0 1 124 273M556 185A55 55 0 0 0 556 273"/></g><circle cx="340" cy="229" r="3.5" fill="#101D34"/></svg></div><div class="wrap"><span class="kicker rise">Futbol kulüpleri için yönetim paneli</span>'+
   '<h1 class="rise d1">Sahayı sen yönet, gerisini <span class="brand">Kulüp<mark>GO</mark>.</span></h1>'+
   '<p class="lead rise d2">Kulübünün tüm işlemleri tek platformda: oyuncu, idman, maç, aidat ve malzeme. Her rol kendi ekranından bakar.</p>'+
   '<div class="hero-cta rise d3"><a class="btn primary lg" href="#kayit">14 gün ücretsiz dene</a><a class="btn lg" href="#demo">Demo talep et</a></div>'+
   '<p class="hero-note rise d3">14 günlük deneme · Aylık 499 TL’den başlayan planlar</p></div></section>';

  h+='<section class="sec paper"><div class="wrap">'+secHead('Neler sunuyoruz','Her işlem, tek yerde.','Kulübünde yaptığın her iş bir modülde yazılı. Bir işlemi bir kez girersin, gerisi kendiliğinden güncellenir.',true)+
   '<div class="ops">'+OPS.map(function(o,i){return '<div class="op" tabindex="0"><div class="op-top"><span class="ico">'+I(o[0],1.6)+'</span><span class="op-n">'+o[2].length+' özellik</span></div><ul>'+o[2].map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><div class="op-bot"><h3>'+o[1]+'</h3><p>'+OPSUM[i]+'</p></div></div>';}).join('')+'</div>'+
   '<p style="margin-top:40px;text-align:center"><a class="link" href="#ozellikler">Tüm özellikleri gör</a></p></div></section>';

  h+='<section style="padding:0"><div class="wrap" style="text-align:center;margin-bottom:36px"><span class="eyebrow">Referanslar</span><h2 style="font-size:clamp(1.6rem,3vw,2.2rem)">Sahadaki kulüplerden.</h2></div>'+
   '<div class="marq" aria-label="Referans kulüpler"><div class="marq-track">'+REFS.map(refCard).join('')+'<span style="display:contents" aria-hidden="true">'+REFS.map(refCard).join('')+'</span></div></div>'+
   '<p style="text-align:center;margin-top:28px"><a class="link" href="#referanslar">Tüm referanslar</a></p></section>';

  h+='<section class="sec"><div class="wrap">'+secHead('Üç rol, tek veri','Herkes yalnızca kendi işini görür.','Yönetici kulübü, antrenör takımını, veli çocuğunu görür. Yetki uygulamada değil, veritabanında uygulanır.')+
   '<div class="row c3">'+D.ROLES.map(function(r,i){return '<a class="card hoverable" href="#panel" style="text-decoration:none"><div style="width:120px;margin:-8px 0 0 -8px">'+SK.art(['flag','cards','bib'][i])+'</div><h3>'+r.name+'</h3><span class="tag" style="align-self:flex-start">'+r.short+'</span><p>'+r.desc+'</p><span class="link" style="align-self:flex-start;margin-top:auto">Ekranları gör</span></a>';}).join('')+'</div></div></section>';

  h+='<section class="sec paper"><div class="wrap split"><div>'+secHead('Maç günü','Maç kadron tek ekranda, kurallar arka planda.','11 asıl oyuncu, en fazla 10 yedek, maça özel forma numaraları, tek kaleci ve tek kaptan. Maç bitince her oyuncunun dakikası, golü ve kartları olaylardan hesaplanır.')+
   '<ul class="ticks"><li>Rakip analizi ve maç raporu yalnızca personele açık</li><li>Maç kadrosunu yalnızca o takımın antrenörü yazar</li><li>Veli çocuğunun maç istatistiğini kendi ekranında görür</li></ul><p style="margin-top:28px"><a class="btn" href="#ozellikler">Maç modülünü incele</a></p></div>'+
   '<div class="hero-art"><div class="board">'+SK.img('clip','','Taktik tahtası')+'</div><div class="float"><h5>Kadro denetimi · Cumartesi</h5><div class="chk"><span class="dot y"></span>İlk 11 tamam</div><div class="chk"><span class="dot y"></span>Tek kaleci seçili</div><div class="chk"><span class="dot y"></span>Tek kaptan seçili</div><div class="chk"><span class="dot y"></span>Forma numaraları farklı</div></div></div></div></section>';

  h+='<section class="sec dark"><div class="wrap">'+secHead('Güvenlik','Çocuklarının verisi, üst düzey güvenlikle korunur.','Kulüp izolasyonu, satır düzeyinde güvenlik, yöneticiler için zorunlu iki adımlı doğrulama ve değiştirilemeyen denetim kaydı. Hepsi veritabanı seviyesinde uygulanır.')+
   '<div class="row c3" style="margin-bottom:44px"><div class="stat"><b>35</b><span>tablonun hepsinde satır düzeyinde güvenlik açık</span></div><div class="stat"><b>7</b><span>gün geçerli, tek kullanımlık, e-postaya bağlı davet linki</span></div><div class="stat"><b>4</b><span>rol: sahip, yönetici, antrenör ve veli</span></div></div>'+
   '<div class="row c4">'+D.SECURITY.slice(0,4).map(function(s){return '<div class="card"><div class="ico">'+I(s.icon,2)+'</div><h4>'+s.t+'</h4><p>'+s.d+'</p></div>';}).join('')+'</div><p style="margin-top:36px"><a class="link" href="#guvenlik">Güvenlik sayfasının tamamı</a></p></div></section>';

  h+='<section class="sec"><div class="wrap">'+secHead('Fiyatlar','Kulübün büyüklüğüne göre üç plan.','Her plan 14 günlük deneme ile başlar. Yıllık ödemede 2 ay bedava.')+
   '<div class="row c3">'+D.PLANS.map(function(p){return '<a class="card hoverable" href="#fiyatlar" style="text-decoration:none"><h3>'+p.name+'</h3><div class="price"><b>'+fmt(p.m)+'</b><span>TL / ay</span></div><p>'+p.team+' takım · '+p.player+' oyuncu · '+p.staff+' personel</p></a>';}).join('')+'</div><p style="margin-top:32px"><a class="link" href="#fiyatlar">Planları karşılaştır</a></p></div></section>';

  h+='<section class="sec paper"><div class="wrap">'+secHead('Blog','Kulüp yönetimine dair kısa yazılar.','Aidattan karneye, yoklamadan çocuk verisine.')+
   '<div class="row c3">'+D.POSTS.slice(0,3).map(function(p){return postCard(p);}).join('')+'</div><p style="margin-top:32px"><a class="link" href="#blog">Tüm yazılar</a></p></div></section>';

  h+=ctaBand();
  return h;
},
init:function(){}};

function postCard(p){
  return '<a class="post-card" href="#blog-'+p.slug+'"><div class="post-art">'+SK.postArt(p.art)+'</div><div class="post-body"><div class="meta"><span class="tag y">'+p.cat+'</span><span>'+p.min+' dk okuma</span></div><h3>'+p.title+'</h3><p>'+p.sum+'</p></div></a>';
}
P._postCard=postCard;P._pageHero=pageHero;P._secHead=secHead;P._ctaBand=ctaBand;P._fmt=fmt;P._arrow=arrow;

/* ---------------- ÖZELLİKLER ---------------- */
function visual(id){
  if(id==='oyuncu')return MK.admin();
  if(id==='idman')return MK.coach();
  if(id==='mac')return '<div class="board">'+SK.img('clip','','Taktik tahtası')+'</div>';
  if(id==='para')return '<div class="card" style="box-shadow:var(--sh)"><span class="tag y" style="align-self:flex-start">Aylık özet · Örnek</span>'+MK.moneyBars()+'</div>';
  if(id==='gelisim')return MK.reportCard();
  return '<div class="card" style="box-shadow:var(--sh)"><span class="tag y" style="align-self:flex-start">Stok · Örnek</span>'+MK.stockTable()+'</div>';
}
P['ozellikler']={title:'Özellikler | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Özellikler',eyebrow:'Özellikler',title:'Kulübün bütün işi, altı modülde.',lead:'Oyuncu kaydından maç raporuna, aidattan malzeme zimmetine. Her modül diğerleriyle aynı veriyi kullanır, bu yüzden aynı bilgiyi iki kez girmezsin.',art:'clip',
    cta:'<div class="hero-cta" style="margin-top:28px"><a class="btn primary" href="#kayit">14 gün ücretsiz dene</a><a class="btn" href="#fiyatlar">Planlara bak</a></div>'});
  h+='<div class="strip"><div class="wrap"><div class="strip-in">'+D.MODULES.map(function(m){return '<div>'+I(m.icon,2)+({oyuncu:'Oyuncular',idman:'İdman',mac:'Maçlar',para:'Gelir-gider',gelisim:'Gelişim',malzeme:'Malzeme'})[m.id]+'</div>';}).join('')+'</div></div></div>';
  D.MODULES.forEach(function(m,i){
    var plan=(m.id==='gelisim'||m.id==='malzeme')?'Profesyonel ve üstü':'Tüm planlarda';
    h+='<section class="sec'+(i%2?' paper':'')+'" id="m-'+m.id+'"><div class="wrap split'+(i%2?' rev':'')+'"><div><span class="eyebrow">'+m.title+'</span><h2>'+m.lead+'</h2><p class="lead" style="margin:18px 0 24px">'+m.body+'</p><ul class="ticks">'+m.pts.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><p style="margin-top:22px"><span class="tag '+(plan==='Tüm planlarda'?'g':'y')+'">'+plan+'</span></p></div><div>'+visual(m.id)+'</div></div></section>';
  });
  h+='<section class="sec dark"><div class="wrap">'+secHead('Ayrıca','Kulüp büyüdükçe yanında büyür.')+
   '<div class="row c3">'+
   [['mail','Davetle katılım','Tek kullanımlık, 7 gün geçerli, yalnızca davet edilen e-postayla kabul edilen linkler. Antrenöre takımlar, veliye çocuğun kaydı önceden bağlanır.'],
    ['users','Bir kişi, çok rol','Hem antrenör hem veli olabilirsin. Aynı hesapla iki ekran arasında geçersin.'],
    ['phone','Mobil uygulama','Android ve iPhone uygulaması panelle aynı veriye bağlanır. Hazırlık aşamasında.'],
    ['building','Çoklu tesis','Birden fazla sahası olan kulüpler için Kulüp planında.'],
    ['export','Dışa aktarma','Kulüp planında verini dışa aktar.'],
    ['import','Toplu içe aktarma','Mevcut oyuncu listeni Kulüp planında topluca içeri al.']].map(function(x){return '<div class="card"><div class="ico">'+I(x[0],2)+'</div><h4>'+x[1]+(x[0]==='phone'?' <span class="tag y" style="margin-left:6px">Yakında</span>':'')+'</h4><p>'+x[2]+'</p></div>';}).join('')+'</div></div></section>';
  return h+ctaBand();
}};

/* ---------------- ÜYE DENEYİMİ ---------------- */
P['panel']={title:'Üye deneyimi | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Üye deneyimi',eyebrow:'Roller ve ekranlar',title:'Kim girince ne görür?',lead:'Aynı kulüp, üç farklı ekran. Yönetici her şeyi, antrenör takımını, veli çocuğunu görür. Aşağıda her rolün ekranına bak.',art:'shield'});
  h+='<section class="sec"><div class="wrap"><div class="tabs" role="tablist" aria-label="Rol seç" id="role-tabs">'+D.ROLES.map(function(r,i){return '<button role="tab" type="button" data-role="'+r.id+'" aria-selected="'+(i===0)+'">'+r.name+'</button>';}).join('')+'</div>'+
   '<div id="role-view" style="margin-top:40px"></div></div></section>';
  h+='<section class="sec paper"><div class="wrap">'+secHead('Yetki tablosu','Kim neyi görür, kim neyi düzenler?','Bu kurallar arayüzde değil, veritabanında uygulanır. Yani bir ekranı gizlemek değil, veriye erişimi kapatmak.')+
   '<div class="scroll"><table class="cmp perm"><thead><tr><th>Konu</th><th>Yönetici</th><th>Antrenör</th><th>Veli</th></tr></thead><tbody>'+
   D.PERM.map(function(r){return '<tr><td><b>'+r[0]+'</b></td>'+r.slice(1).map(function(c){return c==='x'?'<td><span class="lock">'+I('lock',2)+'Kapalı</span></td>':'<td>'+c+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div></div></section>';
  h+='<section class="sec"><div class="wrap split"><div>'+secHead('Davet akışı','Kulübe katılmak dört adım.','Kimse kendi başına kulübe giremez. Katılım yalnızca yöneticinin gönderdiği davetle olur.')+'</div>'+
   '<div class="timeline">'+[['Yönetici davet gönderir','Rolü seçer. Antrenör için takımları, veli için çocuğun kaydını bağlar.'],['Davet e-postaya gelir','Link tek kullanımlıdır ve 7 gün geçerlidir.'],['Aynı e-postayla kabul edilir','Link başka bir e-posta adresiyle açılırsa kabul edilemez.'],['Rolüne uygun ekran açılır','Antrenör takımını, veli çocuğunu görür.']].map(function(s){return '<div><h4>'+s[0]+'</h4><p class="muted">'+s[1]+'</p></div>';}).join('')+'</div></div></section>';
  return h+ctaBand();
},
init:function(root){
  var view=root.querySelector('#role-view'),tabs=root.querySelectorAll('#role-tabs button');
  function show(id){
    var r=D.ROLES.filter(function(x){return x.id===id;})[0],vis;
    vis=id==='yonetici'?MK.admin():id==='antrenor'?MK.coach():MK.parent();
    view.innerHTML='<div class="split'+(id==='veli'?'':'')+'"><div><span class="eyebrow">'+r.short+'</span><h2>'+r.name+' ekranı</h2><p class="lead" style="margin:16px 0 22px">'+r.desc+'</p><ul class="ticks">'+r.pts.map(function(x,i){var no=(id==='antrenor'&&i===4)||(id==='veli'&&i===4);return '<li'+(no?' class="no"':'')+'>'+x+'</li>';}).join('')+'</ul></div><div>'+vis+'</div></div>';
  }
  tabs.forEach(function(b){b.addEventListener('click',function(){tabs.forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false');});show(b.getAttribute('data-role'));});});
  show('yonetici');
}};

/* ---------------- FİYATLAR ---------------- */
P['fiyatlar']={title:'Fiyatlar | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Fiyatlar',eyebrow:'Fiyatlar',title:'Kulübünün büyüklüğüne göre öde.',lead:'Üç plan, gizli ücret yok. Her plan 14 günlük deneme ile başlar. Yıllık ödemede 2 ay bedava.',art:'cards'});
  h+='<section class="sec"><div class="wrap"><div style="margin-bottom:44px">'+toggleHTML()+'</div><div class="plans" id="plans">'+plansHTML('m')+'</div><p class="muted" style="margin-top:22px;font-size:.92rem">Fiyatlara uygulanacak vergi bilgisi yayından önce eklenecek. Bir hesap en fazla 3 kulüp açabilir.</p></div></section>';
  var rows=[['Takım ve oyuncu kartları',1,1,1],['İdman programı ve yoklama',1,1,1],['Fikstür ve maç kadrosu',1,1,1],['Gelir ve gider takibi',1,1,1],['Veli paneli',0,1,1],['Gelişim testleri ve karne',0,1,1],['İdman planı ve şablonlar',0,1,1],['Maç notları, rakip analizi, maç raporu',0,1,1],['Malzeme, stok ve zimmet',0,1,1],['Çoklu tesis',0,0,1],['Dışa aktarma',0,0,1],['Toplu içe aktarma',0,0,1]];
  h+='<section class="sec paper"><div class="wrap">'+secHead('Karşılaştırma','Planlar arasındaki fark.')+
   '<div class="scroll"><table class="cmp"><thead><tr><th>Özellik</th><th>Başlangıç</th><th>Profesyonel</th><th>Kulüp</th></tr></thead><tbody>'+
   '<tr class="grp"><td colspan="4">Limitler</td></tr><tr><td>Takım</td><td>2</td><td>6</td><td>Sınırsız</td></tr><tr><td>Aktif oyuncu</td><td>60</td><td>250</td><td>Sınırsız</td></tr><tr><td>Personel</td><td>3</td><td>10</td><td>Sınırsız</td></tr>'+
   '<tr class="grp"><td colspan="4">Modüller</td></tr>'+rows.map(function(r){return '<tr><td>'+r[0]+'</td>'+r.slice(1).map(function(v){return '<td>'+(v?'<span class="yes">'+I('tick',3).replace('<svg','<svg style="width:20px;height:20px;display:inline"')+'</span>':'<span class="no">—</span>')+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>'+
   '<p class="muted" style="margin-top:14px;font-size:.88rem">* Başlangıç planının temel modül kapsamı yayından önce netleştirilecek.</p></div></section>';
  h+='<section class="sec"><div class="wrap split"><div class="card" style="box-shadow:var(--sh);gap:18px"><span class="tag y" style="align-self:flex-start">Ek hizmet</span><h2 style="font-size:2rem">Kulüp web sitesi</h2><div class="price" id="site-price"><b>999</b><span>TL / ay</span></div><p class="muted">Yıllık ödemede 9.990 TL. Mevcut planına eklenir.</p><a class="btn primary" href="#web-sitesi">Detayları gör</a></div>'+
   '<div>'+secHead('Sık sorulanlar','Fiyatlarla ilgili kısa cevaplar.')+D.FAQ.filter(function(f){return f.g==='Fiyat';}).slice(0,4).map(P._faqItem||function(f){return '<details class="faq"><summary>'+f.q+'</summary><div class="ans">'+f.a+'</div></details>';}).join('')+'<p style="margin-top:20px"><a class="link" href="#sss">Tüm sorular</a></p></div></div></section>';
  return h+ctaBand('Önce dene, sonra karar ver.');
},
init:bindToggle};

/* ---------------- GÜVENLİK ---------------- */
P['guvenlik']={title:'Güvenlik | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Güvenlik',eyebrow:'Güvenlik',title:'Üst düzey güvenlik, her katmanda.',lead:'Yetki kontrolü uygulamaya bırakılmaz. Her kural veritabanında uygulanır, her önemli değişiklik kayda geçer.',art:'shield'});
  h+='<section class="sec"><div class="wrap"><div class="row c4">'+D.SECURITY.map(function(s){return '<div class="card"><div class="ico">'+I(s.icon,2)+'</div><h4>'+s.t+'</h4><p>'+s.d+'</p></div>';}).join('')+'</div></div></section>';
  h+='<section class="sec dark"><div class="wrap split"><div>'+secHead('Denetim kaydı','Kim, neyi, ne zaman değiştirdi?','Oyuncu, para, üyelik, maç kadrosu ve stok kayıtlarındaki her değişiklik, değiştirenin ve zamanın bilgisiyle saklanır. Kayıt sonradan değiştirilemez ve silinemez.')+'</div>'+
   '<div class="browser" style="box-shadow:var(--sh)"><div class="browser-bar"><i></i><i></i><i></i><span>app.kulupgo.com/denetim</span></div><div style="padding:16px;background:var(--paper);color:var(--ink)"><table class="mt"><thead><tr><th>Zaman</th><th>Kim</th><th>Ne</th></tr></thead><tbody><tr><td>14:22</td><td>Yönetici</td><td>Aidat kaydı eklendi</td></tr><tr><td>14:05</td><td>Antrenör (U14)</td><td>Maç kadrosu güncellendi</td></tr><tr><td>11:40</td><td>Yönetici</td><td>Stok çıkışı: yelek ×6</td></tr><tr><td>09:12</td><td>Yönetici</td><td>Oyuncu bilgisi düzenlendi</td></tr></tbody></table><p class="muted" style="font-size:.78rem;margin-top:10px">Örnek veri</p></div></div></div></section>';
  h+='<section class="sec"><div class="wrap">'+secHead('Veli güveni','Ailelere söyleyebileceğin üç cümle.')+
   '<div class="row c3">'+[['Çocuğumun bilgisini yalnızca ben görürüm.','Veli yalnızca kendi çocuğunun yoklamasını, maçlarını, testlerini, aidatını ve zimmetini görür.'],['Fotoğraflar herkese açık değil.','Fotoğraflar özel bir depoda durur. Yalnızca personel ve kendi çocuğunun fotoğrafı için veli erişir.'],['Sitede adı yalnızca izin verirsem görünür.','Kulüp web sitesinde oyuncu adı, veli izin vermedikçe gösterilmez.']].map(function(x){return '<div class="card"><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>';}).join('')+'</div>'+
   '<p class="muted" style="margin-top:28px;font-size:.92rem">Kişisel verilerin korunmasına ilişkin metinler için <a class="link" href="#kvkk">KVKK Aydınlatma Metni</a> ve <a class="link" href="#gizlilik">Gizlilik Politikası</a> sayfalarına bakın.</p></div></section>';
  return h+ctaBand('Güvenle başla.');
}};

/* ---------------- KULÜP WEB SİTESİ ---------------- */
P['web-sitesi']={title:'Kulüp web sitesi | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Kulüp web sitesi',eyebrow:'Ek hizmet',title:'Kulübünün herkese açık vitrini.',lead:'Panele girdiğin fikstür ve sonuçlar kulübünün sitesine kendiliğinden yansır. Yeni sayfa açmak, güncellemek, kopyalamak gerekmez.',art:'goal',
   cta:'<div class="hero-cta" style="margin-top:28px"><a class="btn primary" href="#kayit">14 gün ücretsiz dene</a><span class="tag y" style="align-self:center">Aylık 999 TL · Yıllık 9.990 TL</span></div>'});
  h+='<section class="sec"><div class="wrap split"><div>'+secHead('Sitede ne var','Kulübün adı, rengi, logosu ve maçları.')+
   '<ul class="ticks"><li>Kulüp adı, rengi ve logosu</li><li>Fikstür ve sonuçlar</li><li>Kadro</li><li>Oyuncu adı yalnızca veli izin verdiyse görünür</li><li>Adres: <b>kulubun-adi.kulupgo.com</b></li><li class="no">İleride kulübün kendi alan adı da bağlanabilecek</li></ul></div><div>'+MK.clubSite()+'</div></div></section>';
  h+='<section class="sec paper"><div class="wrap">'+secHead('Kurulum','Üç adımda yayında.')+
   '<div class="row c3">'+[['Adresini seç','Kulüp adının kısa halini yaz. Örneğin kulubun-adi.kulupgo.com.'],['Adını, rengini ve logonu ekle','Siteyi kulübünün kimliğine göre ayarla.'],['Maç gir, site güncellensin','Panele girdiğin fikstür ve skorlar sitede görünür.']].map(function(x,i){return '<div class="card"><span class="bigscore">'+(i+1)+'</span><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>';}).join('')+'</div></div></section>';
  return h+ctaBand('Kulübünün sitesini bir akşamda kur.');
}};

/* ---------------- CANLI DEMO ---------------- */
P['_canli-demo']={title:'Canlı demo | KulüpGO',
html:function(){
  return '<section class="hero"><div class="wrap"><span class="eyebrow">Canlı demo</span><h1>Paneli kendin dene.</h1><p class="lead">Aşağıdaki panel örnek verilerle gerçekten çalışır. Yoklama al, aidat işle, maç kadrosu hazırla. Sonra rolü değiştirip velinin ne gördüğüne bak.</p></div></section>'+
  '<section style="padding:24px 0 120px"><div class="wrap"><div id="demo-root"></div>'+tryChips()+'</div></section>'+
  '<section class="sec paper"><div class="wrap split"><div>'+secHead('Demoda neler var','Gerçek kuralların aynısı.','Maç kadrosu kuralları, rol bazlı görünürlük ve işlem kaydı gerçek üründeki mantıkla çalışır. Veriler ve isimler tamamen örnektir, hiçbir şey kaydedilmez.')+'</div><ul class="ticks"><li>Maç kadrosu: 11 as, en fazla 10 yedek, tek kaleci, tek kaptan, benzersiz forma numarası</li><li>Antrenör yalnızca kendi takımını görür, gelir-gider alanı kapalıdır</li><li>Veli yalnızca kendi çocuğunu görür, karne paylaşılmadan görünmez</li><li>Her işlem “Son işlemler” kaydına yazılır</li></ul></div></section>'+ctaBand();
},
init:function(root){DEMO.mount(root.querySelector('#demo-root'));}};
})();
