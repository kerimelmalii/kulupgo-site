/* Sayfalar 2: referanslar, hakkımızda, blog, SSS, iletişim, demo, kayıt, giriş, hukuki */
(function(){
var D=DATA,I=SK.icon,P=window.PAGES,pageHero=P._pageHero,secHead=P._secHead,ctaBand=P._ctaBand,postCard=P._postCard,fmt=P._fmt,arrow=P._arrow;

/* ---------------- REFERANSLAR ---------------- */
function quote(t){
  return '<div class="quote"><span class="tag y">Taslak yer tutucu</span><blockquote>'+t+'</blockquote><div class="who"><span class="av">?</span><span>[Ad Soyad], [Görev], [Kulüp]</span></div></div>';
}
P['referanslar']={title:'Referanslar | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Referanslar',eyebrow:'Referanslar',title:'Kulüpler ne diyor?',lead:'KulüpGO’yu ilk kulübümüz Altınşehir ile birlikte geliştiriyoruz. Bu sayfada kulüp yöneticilerinin, antrenörlerin ve velilerin gerçek yorumları yer alacak.',art:'cards'});
  h+='<section class="sec"><div class="wrap">'+secHead('İlk kulüp','Altınşehir ile başladık.','Ürün, ilk müşterimiz Altınşehir’in günlük ihtiyaçlarıyla şekillendi.')+
   '<div class="split"><div class="card" style="box-shadow:var(--sh)"><div class="logo-wall" style="grid-template-columns:1fr;width:140px"><div>[LOGO İZNİ BEKLENİYOR]</div></div><h3>Altınşehir Spor Kulübü</h3><ul class="ticks"><li>[Takım sayısı]</li><li>[Oyuncu sayısı]</li><li>[Kullanılan plan ve modüller]</li></ul></div>'+quote('[Kulüp yöneticisinden 2–3 cümle: KulüpGO’yu neden seçtiniz, ilk ayda ne değişti?]')+'</div></div></section>';
  h+='<section class="sec paper"><div class="wrap">'+secHead('Rol rol yorumlar','Yönetici, antrenör ve velinin sesi.','Aşağıdaki kartlar tasarım içindir. Gerçek yorumlar, yorumu yapan kişinin onayıyla eklenecektir.')+
   '<div class="row c3">'+[['Yönetici','[Yönetici yorumu: aidat ve ay sonu özetinde ne değişti?]'],['Antrenör','[Antrenör yorumu: yoklama ve maç kadrosu sürecinde ne değişti?]'],['Veli','[Veli yorumu: çocuğun bilgisine ulaşmak nasıl bir fark yarattı?]']].map(function(x){return '<div><span class="tag g" style="margin-bottom:14px">'+x[0]+'</span>'+quote(x[1])+'</div>';}).join('')+'</div></div></section>';
  h+='<section class="sec"><div class="wrap">'+secHead('Kulüpler','KulüpGO kullanan kulüpler.')+
   '<div class="logo-wall"><div class="real">Altınşehir<br><small>(logo izni bekleniyor)</small></div><div>[Kulüp logosu]</div><div>[Kulüp logosu]</div><div>[Kulüp logosu]</div></div>'+
   '<div class="notice" style="margin-top:28px"><b>Yayına almadan önce:</b> logo ve yorum paylaşımı için her kulüpten yazılı izin al. Yorum metinlerini kişinin onayladığı haliyle kullan.</div></div></section>';
  return h+ctaBand('Sıradaki referans sen olabilirsin.');
}};

/* ---------------- HAKKIMIZDA ---------------- */
P['hakkimizda']={title:'Hakkımızda | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Hakkımızda',eyebrow:'Hakkımızda',title:'Futbol kulüpleri defter ve WhatsApp grubundan çıksın.',lead:'KulüpGO, futbol kulüplerinin günlük işlerini tek yerden yönetmesi için geliştirilen bir yazılım. Küçük kulüplerin büyük işlerini sade ve güvenli hale getiriyoruz.',art:'bib'});
  h+='<section class="sec"><div class="wrap split"><div>'+secHead('Hikâye','Neden yapıyoruz?')+'<p class="lead">[KURUCU HİKÂYESİ: Fikir nasıl doğdu? Bir kulübün hangi sorunu görüldü? Kısa ve kişisel 2–3 paragraf buraya yazılacak.]</p></div><div class="board">'+SK.img('boot','','Krampon')+'</div></div></section>';
  h+='<section class="sec dark"><div class="wrap">'+secHead('İlkeler','Dört şeyden taviz vermiyoruz.')+
   '<div class="row c4">'+[['whistle','Saha önce','Antrenör sahadayken telefonuyla iki dokunuşta yoklama alabilmeli. Her tasarım kararı buradan geçer.'],['shield','Veli güveni','Çocuk verisi tutan hiçbir ekran, veliye “emin misiniz?” dedirtmemeli.'],['check','Sadelik','Bir kulüp, eğitim almadan ilk gün kullanabilmeli.'],['lock','Güvenlik','Yetki kuralları ekranda değil, veritabanında uygulanır.']].map(function(x){return '<div class="card"><div class="ico">'+I(x[0],2)+'</div><h4>'+x[1]+'</h4><p>'+x[2]+'</p></div>';}).join('')+'</div></div></section>';
  h+='<section class="sec"><div class="wrap split"><div>'+secHead('Yol haritası','Neredeyiz, sırada ne var?','Şeffaf olmak istiyoruz. Hazır olanı da, yapılacak olanı da açıkça yazıyoruz.')+'</div>'+
   '<div class="timeline">'+[['Hazır: veritabanı ve güvenlik katmanı','35 tablo, satır düzeyinde güvenlik, denetim kaydı, plan limitleri.'],['Sırada: yönetim paneli ve mobil uygulama arayüzü','Yönetici, antrenör ve veli ekranları.'],['Sırada: davet e-postaları ve ödeme','Davet gönderen sunucu fonksiyonu, abonelik ödemesi ve ödeme sonrası plan güncellemesi.'],['Sırada: tanıtım sitesi ve kulüp web sitesi şablonu','Bu site ve kulüplerin herkese açık siteleri.']].map(function(s){return '<div><h4>'+s[0]+'</h4><p class="muted">'+s[1]+'</p></div>';}).join('')+'</div></div></section>';
  h+='<section class="sec paper"><div class="wrap">'+secHead('Ekip','KulüpGO’nun arkasındakiler.','[Ekip üyeleri, fotoğraflar ve kısa tanıtımlar eklenecek.]')+
   '<div class="row c4">'+[1,2,3,4].map(function(){return '<div class="quote"><span class="av" style="width:72px;height:72px">?</span><b style="font-family:var(--f-display)">[Ad Soyad]</b><span class="muted">[Görev]</span></div>';}).join('')+'</div></div></section>';
  return h+ctaBand('Birlikte yeni sezonu planlayalım.');
}};

/* ---------------- BLOG ---------------- */
P['blog']={title:'Blog | KulüpGO',
html:function(){
  var cats=['Tümü'],i,h;
  D.POSTS.forEach(function(p){if(cats.indexOf(p.cat)<0)cats.push(p.cat);});
  var f=D.POSTS[0];
  h=pageHero({crumb:'Blog',eyebrow:'Blog',title:'Kulüp yönetimi üzerine kısa yazılar.',lead:'Aidat, yoklama, karne, çocuk verisi, maç günü ve malzeme. Her yazı bir kulüp yöneticisinin ya da antrenörün iş listesine bir madde ekler.',art:'clip'});
  h+='<section class="sec tight"><div class="wrap"><a class="card hoverable" href="#blog-'+f.slug+'" style="text-decoration:none;display:grid;grid-template-columns:1fr 1fr;gap:0;padding:0;overflow:hidden"><div class="post-art" style="aspect-ratio:auto;min-height:260px;border:0;border-right:1px solid var(--rule)">'+SK.postArt(f.art)+'</div><div style="padding:36px;display:flex;flex-direction:column;gap:14px;justify-content:center"><div class="meta"><span class="tag g">Öne çıkan</span><span class="tag y">'+f.cat+'</span><span>'+f.date+'</span></div><h2 style="font-size:2rem">'+f.title+'</h2><p>'+f.sum+'</p><span class="link" style="align-self:flex-start">Yazıyı oku</span></div></a></div></section>';
  h+='<section class="sec tight" style="padding-top:0"><div class="wrap"><div class="filter" id="blog-filter" role="group" aria-label="Kategori">'+cats.map(function(c,i){return '<button type="button" data-cat="'+c+'" aria-pressed="'+(i===0)+'">'+c+'</button>';}).join('')+'</div><div class="row c3" id="blog-grid" style="margin-top:32px">'+D.POSTS.map(postCard).join('')+'</div></div></section>';
  h+='<section class="sec paper tight"><div class="wrap split"><div><h2 style="font-size:2rem">Yeni yazılardan haberin olsun.</h2><p class="lead" style="margin-top:12px">Ayda en fazla bir e-posta.</p></div><form class="form" id="news" style="grid-template-columns:1fr auto;align-items:end"><div class="field"><label for="n-mail">E-posta adresin</label><input id="n-mail" type="email" placeholder="ornek@kulup.com" required></div><button class="btn primary" type="submit">Abone ol</button><p id="news-msg" style="grid-column:1/-1"></p></form></div></section>';
  return h+ctaBand();
},
init:function(root){
  var btns=root.querySelectorAll('#blog-filter button'),grid=root.querySelector('#blog-grid');
  btns.forEach(function(b){b.addEventListener('click',function(){
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
    var c=b.getAttribute('data-cat');
    grid.innerHTML=D.POSTS.filter(function(p){return c==='Tümü'||p.cat===c;}).map(postCard).join('');
  });});
  root.querySelector('#news').addEventListener('submit',function(e){e.preventDefault();root.querySelector('#news-msg').innerHTML='<span class="ok-msg" style="display:block">Teşekkürler. (Taslak: bülten kaydı henüz sunucuya bağlı değil.)</span>';});
}};

function articleHTML(p){
  var idx=D.POSTS.indexOf(p),nx=D.POSTS[(idx+1)%D.POSTS.length],h='';
  h+='<section class="page-hero" style="padding-bottom:40px"><div class="wrap" style="grid-template-columns:1fr"><div style="max-width:820px"><div class="crumbs"><a href="#">Ana sayfa</a> / <a href="#blog">Blog</a> / '+p.cat+'</div><div class="meta" style="margin-bottom:18px"><span class="tag y">'+p.cat+'</span><span>'+p.date+'</span><span>'+p.min+' dk okuma</span><span>KulüpGO Ekibi</span></div><h1 style="font-size:clamp(2.1rem,4.6vw,3.6rem)">'+p.title+'</h1><p class="lead" style="margin-top:20px">'+p.sum+'</p></div></div></section>';
  h+='<section class="sec"><div class="wrap"><div class="post-art" style="max-width:720px;margin:0 auto 44px;border:1px solid var(--rule);box-shadow:var(--sh)">'+SK.postArt(p.art)+'</div><article class="article">';
  p.body.forEach(function(b){
    if(b.call){h+='<div class="callout">'+b.call+'</div>';return;}
    if(b.h)h+='<h2>'+b.h+'</h2>';
    (b.p||[]).forEach(function(t){h+='<p>'+t+'</p>';});
    if(b.ul)h+='<ul>'+b.ul.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>';
  });
  h+='</article></div></section>';
  h+='<section class="sec paper tight"><div class="wrap"><div class="row c2"><div class="card" style="box-shadow:var(--sh)"><h3>Bunu tek panelde yönet.</h3><p>14 gün ücretsiz dene, kulübünü kur.</p><a class="btn primary" style="align-self:flex-start" href="#kayit">Denemeye başla</a></div><a class="card hoverable" href="#blog-'+nx.slug+'" style="text-decoration:none"><span class="tag y" style="align-self:flex-start">Sıradaki yazı</span><h3>'+nx.title+'</h3><span class="link" style="align-self:flex-start">Oku</span></a></div></div></section>';
  return h;
}
D.POSTS.forEach(function(p){P['blog-'+p.slug]={title:p.title+' | KulüpGO Blog',html:function(){return articleHTML(p);}};});

/* ---------------- SSS ---------------- */
function faqItem(f){return '<details class="faq" data-g="'+f.g+'"><summary>'+f.q+'</summary><div class="ans">'+f.a+'</div></details>';}
P._faqItem=faqItem;
P['sss']={title:'Sık sorulan sorular | KulüpGO',
html:function(){
  var gs=['Tümü'];D.FAQ.forEach(function(f){if(gs.indexOf(f.g)<0)gs.push(f.g);});
  var h=pageHero({crumb:'SSS',eyebrow:'Sık sorulan sorular',title:'Aklındaki sorular, kısa cevaplar.',lead:'Burada bulamadığın bir şey varsa bize yaz, aynı gün dönmeye çalışalım.',art:'whistle'});
  h+='<section class="sec"><div class="wrap" style="max-width:860px"><div class="filter" id="faq-filter" role="group" aria-label="Konu" style="margin-bottom:32px">'+gs.map(function(g,i){return '<button type="button" data-g="'+g+'" aria-pressed="'+(i===0)+'">'+g+'</button>';}).join('')+'</div><div id="faq-list">'+D.FAQ.map(faqItem).join('')+'</div>'+
   '<div class="card" style="margin-top:48px;box-shadow:var(--sh)"><h3>Cevabı bulamadın mı?</h3><p>Sorunu yaz, ekibimiz dönsün.</p><a class="btn primary" style="align-self:flex-start" href="#iletisim">Bize yaz</a></div></div></section>';
  return h;
},
init:function(root){
  var btns=root.querySelectorAll('#faq-filter button'),list=root.querySelector('#faq-list');
  btns.forEach(function(b){b.addEventListener('click',function(){
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
    var g=b.getAttribute('data-g');
    list.querySelectorAll('details').forEach(function(d){d.hidden=!(g==='Tümü'||d.getAttribute('data-g')===g);});
  });});
}};

/* ---------------- FORM YARDIMCILARI ---------------- */
function field(id,label,type,ph,extra){return '<div class="field"><label for="'+id+'">'+label+'</label><input id="'+id+'" name="'+id+'" type="'+(type||'text')+'" placeholder="'+(ph||'')+'" maxlength="200" '+(extra||'')+'></div>';}
function bindForm(root,sel,msg){
  var f=root.querySelector(sel);if(!f)return;
  f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');if(m)m.innerHTML='<div class="ok-msg">'+msg+'</div>';});
}

/* ---------------- İLETİŞİM ---------------- */
P['iletisim']={title:'İletişim | KulüpGO',
html:function(){
  var h=pageHero({crumb:'İletişim',eyebrow:'İletişim',title:'Bize yaz, sahaya dönelim.',lead:'Ürün, fiyat, kurulum ya da iş birliği. Hangi konuda olursa olsun mesajını bırak.',art:'ball'});
  h+='<section class="sec"><div class="wrap split" style="align-items:start"><form class="form" id="contact-form">'+
   '<div class="f2">'+field('c-ad','Ad soyad','text','Adın','required autocomplete="name"')+field('c-mail','E-posta','email','ornek@kulup.com','required autocomplete="email"')+'</div>'+
   field('c-kulup','Kulüp adı','text','Varsa kulübünün adı')+
   '<div class="field"><label for="c-konu">Konu</label><select id="c-konu"><option>Ürün hakkında soru</option><option>Fiyat ve plan</option><option>Kurulum ve veri aktarımı</option><option>Teknik destek</option><option>İş birliği</option></select></div>'+
   '<div class="field"><label for="c-msg">Mesajın</label><textarea id="c-msg" maxlength="2000" required></textarea></div>'+
   '<button class="btn primary lg" type="submit" style="justify-self:start">Mesajı gönder '+arrow()+'</button><div class="form-msg"></div></form>'+
   '<div style="display:grid;gap:18px"><div class="card"><div class="ico">'+I('mail',2)+'</div><h4>E-posta</h4><p>[destek e-posta adresi]</p></div><div class="card"><div class="ico">'+I('phone',2)+'</div><h4>Telefon ve WhatsApp</h4><p>[telefon numarası]</p></div><div class="card"><div class="ico">'+I('pin',2)+'</div><h4>Adres</h4><p>[şirket adresi]</p></div><div class="card"><div class="ico">'+I('check',2)+'</div><h4>Çalışma saatleri</h4><p>[hafta içi çalışma saatleri]</p></div></div></div></section>';
  return h;
},
init:function(r){bindForm(r,'#contact-form','Teşekkürler, mesajın alındı. (Taslak: form henüz sunucuya bağlı değil.)');}};

/* ---------------- DEMO ---------------- */
P['demo']={title:'Demo talep et | KulüpGO',
html:function(){
  var h=pageHero({crumb:'Demo',eyebrow:'Demo talebi',title:'Kulübüne özel kısa bir gösterim.',lead:'Kulübünün büyüklüğünü ve ihtiyacını anlat. KulüpGO’yu senin kulübünün verisi üzerinde göstereceğimiz kısa bir görüşme ayarlayalım.',art:'flag'});
  h+='<section class="sec"><div class="wrap split" style="align-items:start"><div>'+secHead('Görüşmede','Ne konuşacağız?')+'<div class="timeline">'+[['Kulübünü dinleriz','Kaç takım, kaç oyuncu, bugün neyi nasıl yapıyorsunuz?'],['Sana uygun planı seçeriz','Başlangıç, Profesyonel veya Kulüp. Limitleri birlikte kontrol ederiz.'],['Rolleri gösteririz','Yönetici, antrenör ve veli ekranlarını canlı geziriz.'],['14 günlük denemeyi başlatırız','İstersen kulübünü o görüşmede birlikte kurarız.']].map(function(s){return '<div><h4>'+s[0]+'</h4><p class="muted">'+s[1]+'</p></div>';}).join('')+'</div></div>'+
   '<form class="form card" id="demo-form" style="box-shadow:var(--sh);padding:32px"><div class="f2">'+field('d-ad','Ad soyad','text','Adın','required')+field('d-mail','E-posta','email','ornek@kulup.com','required')+'</div><div class="f2">'+field('d-tel','Telefon','tel','05xx xxx xx xx')+field('d-kulup','Kulüp adı','text','Kulübünün adı','required')+'</div>'+
   '<div class="f2"><div class="field"><label for="d-rol">Kulüpteki rolün</label><select id="d-rol"><option>Kulüp sahibi</option><option>Yönetici</option><option>Antrenör</option><option>Diğer</option></select></div><div class="field"><label for="d-oyuncu">Yaklaşık oyuncu sayısı</label><select id="d-oyuncu"><option>60 ve altı</option><option>61–250</option><option>250 üstü</option></select></div></div>'+
   '<div class="field"><label for="d-not">Eklemek istediğin bir şey var mı?</label><textarea id="d-not" maxlength="2000"></textarea></div><button class="btn primary lg" type="submit">Demo talep et '+arrow()+'</button><div class="form-msg"></div></form></div></section>';
  return h;
},
init:function(r){bindForm(r,'#demo-form','Talebin alındı. (Taslak: form henüz sunucuya bağlı değil.)');}};

/* ---------------- KAYIT ---------------- */
P['kayit']={title:'14 gün ücretsiz dene | KulüpGO',
html:function(){
  return '<section class="auth"><div class="auth-art">'+SK.logo()+'<div><span class="eyebrow">14 günlük deneme</span><h2 style="font-size:clamp(2rem,4vw,3.2rem)">Kulübünü bu akşam kur.</h2><ul class="ticks" style="margin-top:28px"><li>Takımlarını ve oyuncularını ekle</li><li>Antrenörleri ve velileri davet et</li><li>İlk idmanın yoklamasını panelden al</li><li>Bir hesapla en fazla 3 kulüp açabilirsin</li></ul></div><p class="muted" style="font-size:.9rem">Davetle mi geldin? E-postandaki davet linkini kullan. Davet linkleri yalnızca davet edilen e-posta adresiyle kabul edilir.</p></div>'+
  '<div class="auth-form"><h1 style="font-size:2.2rem;margin-bottom:8px">Hesap oluştur</h1><p class="muted" style="margin-bottom:28px">Zaten hesabın var mı? <a class="link" href="#giris">Giriş yap</a></p>'+
  '<form class="form" id="signup"><div class="f2">'+field('k-ad','Ad soyad','text','Adın','required autocomplete="name"')+field('k-mail','E-posta','email','ornek@kulup.com','required autocomplete="email"')+'</div>'+
  field('k-sifre','Şifre','password','En az 8 karakter','required minlength="8" autocomplete="new-password"')+field('k-kulup','Kulüp adı','text','Örn. Örnek Spor Kulübü','required')+
  '<div class="field"><label for="k-slug">Kulüp adresin</label><div class="affix"><input id="k-slug" placeholder="kulubun-adi" aria-describedby="slug-h"><span>.kulupgo.com</span></div><small id="slug-h">Kulüp web sitesi ek hizmetini alırsan sitenin adresi bu olur.</small></div>'+
  '<fieldset style="border:0;padding:0;margin:0"><legend style="font-weight:700;font-size:.92rem;margin-bottom:8px">Plan seç (deneme sonunda değiştirebilirsin)</legend><div class="radios">'+D.PLANS.map(function(p,i){return '<label><input type="radio" name="plan" value="'+p.id+'"'+(i===1?' checked':'')+'>'+p.name+'<span class="p">'+fmt(p.m)+' TL/ay</span></label>';}).join('')+'</div></fieldset>'+
  '<label style="display:flex;gap:10px;font-size:.88rem;align-items:flex-start"><input type="checkbox" required style="margin-top:4px;width:18px;height:18px;accent-color:var(--ink)"><span><a class="link" href="#mesafeli-satis">Satış sözleşmesini</a>, <a class="link" href="#gizlilik">gizlilik politikasını</a> ve <a class="link" href="#kvkk">KVKK aydınlatma metnini</a> okudum.</span></label>'+
  '<button class="btn primary lg block" type="submit">14 günlük denemeyi başlat '+arrow()+'</button><div class="form-msg"></div></form></div></section>';
},
init:function(r){
  var name=r.querySelector('#k-kulup'),slug=r.querySelector('#k-slug');
  var tr={'ç':'c','ğ':'g','ı':'i','ö':'o','ş':'s','ü':'u'};
  name.addEventListener('input',function(){
    if(slug.dataset.touched)return;
    slug.value=name.value.toLowerCase().replace(/[çğıöşü]/g,function(c){return tr[c];}).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  });
  slug.addEventListener('input',function(){slug.dataset.touched='1';});
  bindForm(r,'#signup','Hesabın hazır. (Taslak: kayıt henüz sunucuya bağlı değil.)');
}};

/* ---------------- GİRİŞ ---------------- */
P['giris']={title:'Giriş | KulüpGO',
html:function(){
  return '<section class="auth"><div class="auth-art">'+SK.logo()+'<div><span class="eyebrow">Tekrar hoş geldin</span><h2 style="font-size:clamp(2rem,4vw,3.2rem)">Takımın seni bekliyor.</h2><p class="lead" style="margin-top:18px">Yönetici, antrenör ve veli aynı girişi kullanır. Seni rolüne uygun ekrana yönlendiririz.</p></div><div style="max-width:140px">'+SK.art('whistle')+'</div></div>'+
  '<div class="auth-form"><h1 style="font-size:2.2rem;margin-bottom:8px">Giriş yap</h1><p class="muted" style="margin-bottom:28px">Hesabın yok mu? <a class="link" href="#kayit">14 gün ücretsiz dene</a></p>'+
  '<form class="form" id="login"><div id="step1" class="form">'+field('g-mail','E-posta','email','ornek@kulup.com','required autocomplete="username"')+field('g-sifre','Şifre','password','','required autocomplete="current-password"')+'<a class="link" href="#giris" style="justify-self:start;font-size:.92rem">Şifremi unuttum</a><button class="btn primary lg block" type="submit">Giriş yap '+arrow()+'</button></div>'+
  '<div id="step2" class="form" hidden><div class="notice">Yöneticiler için iki adımlı doğrulama zorunludur. Doğrulama uygulamandaki 6 haneli kodu gir.</div>'+field('g-kod','Doğrulama kodu','text','000000','inputmode="numeric" maxlength="6" autocomplete="one-time-code"')+'<button class="btn primary lg block" type="submit">Doğrula</button></div><div class="form-msg"></div></form></div></section>';
},
init:function(r){
  var f=r.querySelector('#login'),s1=r.querySelector('#step1'),s2=r.querySelector('#step2'),step=1;
  f.addEventListener('submit',function(e){e.preventDefault();
    if(step===1){step=2;s1.hidden=true;s2.hidden=false;return;}
    f.querySelector('.form-msg').innerHTML='<div class="ok-msg">Giriş başarılı. (Taslak: giriş henüz sunucuya bağlı değil.)</div>';
  });
}};

/* ---------------- HUKUKİ ---------------- */
Object.keys(D.LEGAL).forEach(function(k){
  var L=D.LEGAL[k];
  P[k]={title:L.t+' | KulüpGO',html:function(){
    return '<section class="page-hero"><div class="wrap" style="grid-template-columns:1fr"><div><div class="crumbs"><a href="#">Ana sayfa</a> / '+L.t+'</div><h1 style="font-size:clamp(2rem,4.5vw,3.4rem)">'+L.t+'</h1></div></div></section>'+
    '<section class="sec"><div class="wrap legal"><div class="legal-note">'+L.intro+'</div>'+L.s.map(function(s){return '<h2>'+s[0]+'</h2><p>'+s[1]+'</p>';}).join('')+'<p class="muted" style="margin-top:36px;font-size:.9rem">Son güncelleme: [TARİH]</p></div></section>';
  }};
});

/* ---------------- 404 ---------------- */
P['404']={title:'Sayfa bulunamadı | KulüpGO',
html:function(){return '<section class="sec"><div class="wrap" style="text-align:center;display:grid;gap:22px;justify-items:center"><div style="width:180px">'+SK.art('cards')+'</div><span class="eyebrow">Hakem düdük çaldı</span><h1>Bu sayfa ofsaytta kaldı.</h1><p class="lead">Aradığın sayfayı bulamadık. Ana sayfaya dönüp oradan devam edebilirsin.</p><a class="btn primary lg" href="#">Ana sayfaya dön</a></div></section>';}};
})();
