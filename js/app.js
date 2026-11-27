/* Yönlendirici, üst ve alt bilgi */
(function(){
var P=window.PAGES,I=SK.icon;
var NAV=[['ozellikler','Özellikler'],['fiyatlar','Fiyatlar'],['hakkimizda','Hakkımızda']];
var MORE=[['panel','Roller'],['guvenlik','Güvenlik'],['blog','Blog'],['sss','Sık sorulan sorular']];
function link(h,t){return '<a href="#'+h+'">'+t+'</a>';}
function shell(){
  var app=document.getElementById('shell');
  app.innerHTML=
  '<a class="skip" href="#icerik" id="skip">İçeriğe geç</a>'+
  '<div class="announce"><div class="wrap"><b>Yeni sezon</b><span>Yeni kulüpler 14 günlük deneme ile başlar.</span><a href="#kayit">Hemen dene</a></div></div>'+
  '<header class="hdr" id="hdr"><div class="wrap">'+SK.logo()+
  '<nav class="nav" id="nav" aria-label="Ana menü">'+NAV.map(function(n){return '<a href="#'+n[0]+'" data-r="'+n[0]+'">'+n[1]+'</a>';}).join('')+MORE.map(function(n){return '<a class="more" href="#'+n[0]+'" data-r="'+n[0]+'">'+n[1]+'</a>';}).join('')+'</nav>'+
  '<div class="hdr-cta"><a class="btn sm" href="#giris">Giriş</a><a class="btn primary sm" href="#kayit">14 gün ücretsiz dene</a></div>'+
  '<button class="burger" id="burger" type="button" aria-label="Menüyü aç" aria-expanded="false">'+I('menu',2)+'</button></div></header>'+
  '<main id="icerik" tabindex="-1"></main>'+
  '<footer class="ftr"><div class="wrap"><div class="ftr-grid"><div>'+SK.logo()+'<p>Futbol kulüpleri için yönetim yazılımı. Oyuncu, idman, maç, aidat ve malzeme tek panelde.</p></div>'+
  '<div><h5>Ürün</h5><ul><li>'+link('ozellikler','Özellikler')+'</li><li>'+link('panel','Roller ve ekranlar')+'</li><li>'+link('fiyatlar','Fiyatlar')+'</li><li>'+link('guvenlik','Güvenlik')+'</li><li>'+link('web-sitesi','Kulüp web sitesi')+'</li></ul></div>'+
  '<div><h5>Şirket</h5><ul><li>'+link('hakkimizda','Hakkımızda')+'</li><li>'+link('referanslar','Referanslar')+'</li><li>'+link('blog','Blog')+'</li><li>'+link('iletisim','İletişim')+'</li><li>'+link('demo','Demo talep et')+'</li></ul></div>'+
  '<div><h5>Destek</h5><ul><li>'+link('sss','Sık sorulan sorular')+'</li><li>'+link('giris','Giriş yap')+'</li><li>'+link('kayit','14 gün ücretsiz dene')+'</li></ul></div>'+
  '<div><h5>Hukuki</h5><ul><li>'+link('gizlilik','Gizlilik politikası')+'</li><li>'+link('kvkk','KVKK aydınlatma metni')+'</li><li>'+link('mesafeli-satis','Mesafeli satış sözleşmesi')+'</li><li>'+link('iade','İptal ve iade')+'</li></ul></div></div>'+
  '<div class="ftr-bot"><span>© 2026 KulüpGO. Tüm hakları saklıdır.</span><span>kulupgo.com · Tasarım taslağı: içerikteki [köşeli parantezler] doldurulacak alanlardır.</span></div></div></footer>';
  var hdr=document.getElementById('hdr'),b=document.getElementById('burger');
  b.addEventListener('click',function(){var o=hdr.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Menüyü kapat':'Menüyü aç');});
  document.getElementById('skip').addEventListener('click',function(e){e.preventDefault();document.getElementById('icerik').focus();});
}
function route(){
  var r=decodeURIComponent((location.hash||'').replace(/^#/,''));
  var key=(r&&r.charAt(0)!=='_'&&P[r])?r:(r?'404':'');
  var pg=P[key],main=document.getElementById('icerik');
  main.innerHTML=pg.html();
  document.title=pg.title;
  if(pg.init)pg.init(main);
  var base=key.indexOf('blog-')===0?'blog':key;
  document.querySelectorAll('#nav a').forEach(function(a){if(a.getAttribute('data-r')===base)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  var hdr=document.getElementById('hdr');hdr.classList.remove('open');
  document.getElementById('burger').setAttribute('aria-expanded','false');
  window.scrollTo(0,0);
}
shell();
window.addEventListener('hashchange',route);
route();
})();
