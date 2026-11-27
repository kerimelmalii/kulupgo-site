/* KulüpGO — içerik verisi. Fiyat ve limitler proje şemasından (v2) alınmıştır. */
window.DATA={
PLANS:[
 {id:'baslangic',name:'Başlangıç',m:499,y:4990,team:'2',player:'60',staff:'3',tag:'Küçük kulüpler ve yeni açılan okullar için',
  feats:['Takım ve oyuncu kartları','İdman programı ve yoklama','Fikstür ve maç kadrosu','Gelir ve gider takibi','Yönetici, antrenör ve veli davetleri']},
 {id:'profesyonel',name:'Profesyonel',m:999,y:9990,team:'6',player:'250',staff:'10',pop:true,tag:'Birden çok yaş grubu çalıştıran kulüpler için',
  feats:['Başlangıç planındaki her şey','Veli paneli','Gelişim testleri ve dönemlik karne','İdman planı ve hazır şablonlar','Maç notları, rakip analizi, maç raporu','Malzeme, stok ve zimmet']},
 {id:'kulup',name:'Kulüp',m:1499,y:14990,team:'Sınırsız',player:'Sınırsız',staff:'Sınırsız',tag:'Çok tesisli ve büyük kulüpler için',
  feats:['Profesyonel planındaki her şey','Sınırsız takım, oyuncu ve personel','Çoklu tesis','Dışa aktarma','Toplu içe aktarma']}
],
MODULES:[
 {id:'oyuncu',icon:'users',art:'bib',title:'Takımlar ve oyuncular',lead:'Her oyuncunun kartı tek yerde.',
  body:'A takım, U19, U18, futbol okulu: kulübündeki bütün takımları aç, oyuncuları ekle. Her oyuncuya kulübe özel 0001, 0002 gibi bir numara verilir. Silinen numara bir daha kullanılmaz, böylece kayıtlar karışmaz.',
  pts:['Mevki, güçlü ayak, boy ve kilo','Lisans numarası ve bitiş tarihi','Fotoğraf ve not alanı','Takım geçmişi ve sakatlık kayıtları','Veli bilgileri oyuncu kartında']},
 {id:'idman',icon:'check',art:'cone',title:'İdman, yoklama ve plan',lead:'İdmanın ilk beş dakikasında yoklama biter.',
  body:'Antrenör sahada yoklamayı işaretler: geldi, gelmedi, izinli. İdman sonunda 1 ile 10 arasında performans puanı ve not girer. Puanlar ayrı bir tabloda durur ve veli hiçbir zaman göremez.',
  pts:['Geldi, gelmedi, izinli yoklaması','1–10 performans puanı ve not','Isınma, taktik gibi bloklarla idman planı','Her blok için süre ve ekipman','Hazır şablonları kaydet, tekrar kullan']},
 {id:'mac',icon:'ball',art:'flag',title:'Maçlar ve maç kadrosu',lead:'Fikstürden maç raporuna kadar tek akış.',
  body:'Fikstürü, saati, iç saha veya deplasmanı ve forma rengini gir. Maç kadrosunu hazırla: 11 as, en fazla 10 yedek, maça özel forma numaraları. Maç bitince sistem dakikaları, golleri, asistleri ve kartları olaylardan kendisi hesaplar.',
  pts:['Maç kadrosu: 11 as ve en fazla 10 yedek','Tek kaleci ve tek kaptan kuralı otomatik denetlenir','Gol, asist, değişiklik, sarı ve kırmızı kart olayları','Maç bitince oyuncu istatistikleri ve skor güncellenir','Rakip analizi ve maç raporu yalnızca personele açık']},
 {id:'para',icon:'coin',art:'cards',title:'Gelir ve gider',lead:'Aidat kimde ödendi, kasada ne kaldı.',
  body:'Aidat, sponsorluk, maaş, elektrik, saha bakımı, hakem ve lisans gibi hazır kategorilerle başla, kendi kategorilerini ekle. Aylık gelir, gider ve net özet hazır gelir. Bu alan yalnızca yöneticiye açıktır.',
  pts:['Hazır ve özel kategoriler','Aynı oyuncu için aynı ay iki kez aidat girilemez','Aylık gelir, gider ve net özeti','Veli yalnızca kendi çocuğunun aidat durumunu görür']},
 {id:'gelisim',icon:'chart',art:'clip',title:'Gelişim ve karne',lead:'Çocuğun gelişimi sayılarla ve cümlelerle.',
  body:'Yo-Yo IR1, 30 m sprint, dikey sıçrama, T-test, boy ve kilo testlerini kaydet. Takım ortalamalarını isimsiz gör. Dönem sonunda teknik, taktik, fiziksel, mental ve takım oyunu için 1–10 puanlı karne hazırla.',
  pts:['Fiziksel testler ve takım ortalamaları (isimsiz)','Beş başlıkta karne puanı','Güçlü yönler, gelişim alanları, veliye mesaj','Antrenör “veliyle paylaş” demeden karne görünmez','Kulüp içi not ayrı tutulur, veli göremez']},
 {id:'malzeme',icon:'box',art:'whistle',title:'Malzeme ve stok',lead:'Forma kimde, top kaç tane, kritik seviye ne?',
  body:'Stok miktarını ve kritik seviyeyi takip et. Formayı, eşofmanı, ekipmanı beden bilgisiyle oyuncuya zimmetle, iade alındığında kapat. Her giriş ve çıkış hareketi kayıt altında kalır.',
  pts:['Stok ve kritik seviye uyarısı','Beden bilgisiyle zimmet ve iade','Giriş ve çıkış hareketleri','Veli çocuğunun zimmetini görür']}
],
ROLES:[
 {id:'yonetici',name:'Yönetici',short:'Kulübün tamamı',desc:'Kulübü bilgisayardan yöneten kişi. Her şeyi görür ve düzenler. Para, maaş ve denetim kaydı yalnızca onun erişebildiği alanlardır.',
  pts:['Tüm takımlar, oyuncular ve personel','Gelir, gider, aidat ve maaş','Denetim kaydı','Davet gönderme ve rol yönetimi','İki adımlı doğrulama zorunlu']},
 {id:'antrenor',name:'Antrenör',short:'Atandığı takımlar',desc:'Sadece atandığı takımların oyuncularını, idmanlarını, maçlarını, puanlarını ve karnelerini görür. Maç kadrosunu yalnızca o takımın antrenörü yazabilir.',
  pts:['Yoklama ve idman puanı girişi','İdman planı ve şablonlar','Maç kadrosu ve maç olayları','Karne yazma ve veliyle paylaşma','Para ve maaş alanları kapalı']},
 {id:'veli',name:'Veli',short:'Yalnızca kendi çocuğu',desc:'Kendi çocuğunun yoklamasını, maçlarını, istatistiklerini, test sonuçlarını, aidat durumunu ve zimmetini görür. Karneyi ancak antrenör paylaşırsa görür.',
  pts:['Yoklama ve maç programı','Maç istatistikleri ve test sonuçları','Aidat durumu ve zimmet','Paylaşılan karne ve antrenör mesajı','İdman puanı, iç not, maaş ve rakip analizi kapalı']}
],
PERM:[
 ['Oyuncu ve takım bilgisi','Tümü','Atandığı takımlar','Yalnızca kendi çocuğu'],
 ['Yoklama','Tümünü düzenler','Takımlarını düzenler','Çocuğunu görür'],
 ['İdman puanları','Görür','Görür','x'],
 ['Maç kadrosu','Düzenler','Kendi takımını yazar','Çocuğunun maçlarını görür'],
 ['Rakip analizi, maç raporu','Görür','Görür','x'],
 ['Karne','Tümü','Takımlarının karneleri','Paylaşılırsa görür'],
 ['Karne iç notu','Görür','Görür','x'],
 ['Aidat ve gelir-gider','Düzenler','x','Çocuğunun aidat durumu'],
 ['Maaş ve denetim kaydı','Görür','x','x']
],
SECURITY:[
 {icon:'building',t:'Kulüp izolasyonu',d:'Her tabloda bir kulüp kimliği var ve kayıtlar birbirine bu kimlikle bağlanır. Bir kulübün verisi başka bir kulübün oyuncusuna veritabanı seviyesinde bağlanamaz.'},
 {icon:'shield',t:'Satır düzeyinde güvenlik',d:'35 tablonun hepsinde açık. Yetki kontrolü uygulamaya bırakılmaz, doğrudan veritabanında yapılır.'},
 {icon:'key',t:'İki adımlı doğrulama',d:'Yöneticiler için zorunlu. Antrenörler için kulüp isterse açılır.'},
 {icon:'lock',t:'Hassas verilerin ayrılması',d:'Maaş, aidat, idman puanı ve karne iç notu ayrı tablolarda durur. Yetkisiz rol bu tablolara erişemez.'},
 {icon:'list',t:'Değiştirilemeyen denetim kaydı',d:'Oyuncu, para, üyelik, maç kadrosu ve stok gibi tablolardaki her değişiklik kimin, neyi, ne zaman değiştirdiğiyle kaydedilir. Kayıt değiştirilemez ve silinemez.'},
 {icon:'eye',t:'Özel fotoğraf deposu',d:'Oyuncu fotoğrafları özel (private) bir depoda tutulur. Yalnızca personel ve kendi çocuğunun fotoğrafı için veli erişebilir.'},
 {icon:'file',t:'İptalde veri silinmez',d:'Abonelik iptal edildiğinde kulüp salt okunur hale gelir. Veri silinmez, yalnızca yeni kayıt girilemez.'},
 {icon:'coin',t:'Plan ve durum sunucuda',d:'Plan ve abonelik durumunu kullanıcı kendisi değiştiremez. Bunlar ödeme sonrasında sunucu tarafında güncellenir.'}
],
FAQ:[
 {g:'Genel',q:'KulüpGO kimler için?',a:'Futbol kulüpleri, futbol okulları ve alt yapı çalıştıran dernekler için. Oyuncu kaydından idmana, maçtan aidata kadar günlük işleri tek yerde toplar.'},
 {g:'Genel',q:'Kimler giriş yapabilir?',a:'Dört rol var: sahip, yönetici, antrenör ve veli. Bir kişi aynı anda birden fazla role sahip olabilir, örneğin hem antrenör hem veli.'},
 {g:'Genel',q:'Kulübe kişileri nasıl eklerim?',a:'Davetle. Davet linki tek kullanımlıdır, 7 gün geçerlidir ve yalnızca davet edilen e-posta adresiyle kabul edilebilir. Antrenör davetine takımlar, veli davetine çocuğun kaydı önceden bağlanır.'},
 {g:'Genel',q:'Mobil uygulama var mı?',a:'Android ve iPhone uygulaması panelle aynı verilere bağlanacak şekilde tasarlanıyor. Uygulamalar şu an hazırlık aşamasında. Panel ise bilgisayar, tablet ve telefon tarayıcısında çalışır.'},
 {g:'Fiyat',q:'Deneme süresi var mı?',a:'Evet. Yeni kulüpler 14 günlük deneme ile başlar.'},
 {g:'Fiyat',q:'Yıllık ödemede indirim var mı?',a:'Yıllık ödemede 2 ay bedava. Örneğin Profesyonel plan aylık 999 TL, yıllık 9.990 TL.'},
 {g:'Fiyat',q:'Plan limitini aşarsam ne olur?',a:'Limitler veritabanında uygulanır. Örneğin Başlangıç planında 61. aktif oyuncuyu eklemeye çalışırsan “Planınız en fazla 60 aktif oyuncuya izin veriyor” uyarısı çıkar. Üst plana geçerek devam edebilirsin.'},
 {g:'Fiyat',q:'Bir hesapla kaç kulüp açabilirim?',a:'Bir hesap en fazla 3 kulüp açabilir.'},
 {g:'Fiyat',q:'Aboneliğimi iptal edersem verilerim ne olur?',a:'Kulüp salt okunur hale gelir. Verin silinmez, ama yeni kayıt girilemez.'},
 {g:'Güvenlik',q:'Veli başka çocukların bilgisini görebilir mi?',a:'Hayır. Veli yalnızca kendi çocuğunun yoklamasını, maçlarını, istatistiklerini, test sonuçlarını, aidat durumunu ve zimmetini görür. Bu kural uygulamada değil, veritabanında uygulanır.'},
 {g:'Güvenlik',q:'Çocukların fotoğrafları nerede duruyor?',a:'Özel bir depoda. Fotoğrafa yalnızca kulüp personeli ve kendi çocuğunun fotoğrafı için veli erişebilir.'},
 {g:'Güvenlik',q:'Kulüp web sitesinde oyuncu adı görünüyor mu?',a:'Yalnızca velisi izin verdiyse görünür.'},
 {g:'Web sitesi',q:'Kulüp web sitesi ücretli mi?',a:'Evet, ek hizmettir: aylık 999 TL, yıllık 9.990 TL. Site, kulübün adresinde (örneğin altinsehirsk.kulupgo.com) yayınlanır. İleride kulübün kendi alan adı da bağlanabilecek.'},
 {g:'Web sitesi',q:'Sitede neler gösterilir?',a:'Kulüp adı, rengi ve logosu, fikstür ve sonuçlar, kadro. Panele girdiğin fikstür ve skorlar siteye otomatik yansır.'}
],
POSTS:[
 {slug:'aidat-takibi',cat:'Yönetim',art:'cards',date:'12 Kasım 2026',min:4,title:'Aidat takibi: ayın 5’inde elinde defter olmasın',
  sum:'Kim ödedi, kim unuttu, kim iki ay biriktirdi? Aidatı düzene sokmak için beş basit kural.',
  body:[
   {p:['Aidat, küçük kulüplerin en çok zaman yediği iş. Çoğu kulüpte hâlâ bir defter, bir WhatsApp grubu ve bir de hafızası iyi biri var. Sorun şu: o kişi tatile çıktığında bütün düzen duruyor.']},
   {h:'1. Tek bir liste, tek bir sahip',p:['Aidat bilgisi yalnızca bir yerde tutulmalı. İki liste olduğu anda biri eskir. Listeyi kimin güncellediği de belli olmalı.']},
   {h:'2. Ay ay görün',p:['“Kim borçlu?” sorusu ancak ay bazlı bir tabloyla cevaplanır. Oyuncuyu satıra, ayı sütuna koy. Boş hücreler zaten konuşur.']},
   {h:'3. Aynı ay iki kez girme',p:['En sık yapılan hata, aynı ödemenin iki kez işlenmesi. KulüpGO bir oyuncu için aynı ay ikinci aidat girişine izin vermez.']},
   {h:'4. Aileyi hatırlat, ama kapıda değil',p:['Ödeme durumunu veliye kendi ekranında göstermek, antrenörün sahada hatırlatma yapmasından çok daha rahat bir yöntem. Veli yalnızca kendi çocuğunun aidat durumunu görür.']},
   {h:'5. Ay sonunda net rakamı bil',p:['Gelir, gider ve net. Üç sayı. Elektrik, saha bakımı, hakem ve lisans giderlerini aynı yerde tutarsan ay sonunda ne kadar yeri olduğunu hesaplamak için tablo çizmen gerekmez.']},
   {call:'Aidat ve gider kayıtları yalnızca yöneticiye açıktır. Antrenörler bu alanı görmez.'}
  ]},
 {slug:'yoklama',cat:'Antrenörler',art:'cone',date:'5 Kasım 2026',min:3,title:'İdman yoklaması iki dakikada nasıl alınır',
  sum:'Kâğıt liste, çağırma, sayma… Yoklamayı idmanın içinden çıkarmanın yolları.',
  body:[
   {p:['İdmanın ilk beş dakikası yoklamayla geçiyorsa, haftada saatler kaybediliyor demektir. Üstelik kâğıt liste idman sonunda kaybolur, ay sonunda kimse neyi nereye yazdığını hatırlamaz.']},
   {h:'Üç seçenek yeter',p:['Her oyuncu için yalnızca üç durum işaretle: geldi, gelmedi, izinli. “İzinli” seçeneği, devamsızlık istatistiğini haksız yere bozmamak için önemli.']},
   {h:'Isınma sırasında işaretle',p:['Oyuncular ısınırken listeye bak. Çağırmak yerine işaretle. Listede zaten takımın oyuncuları olduğu için kimseyi aramak gerekmez.']},
   {h:'Puanı sonra gir',p:['İdman sonunda 1–10 arası performans puanı ve kısa not yeterli. Bu puanlar velilere gösterilmez; antrenör ve yönetim içindir.']},
   {h:'Devamsızlık konuşulabilir olsun',p:['Ay sonunda “kim kaç idmana geldi” sorusunun cevabı hazır olunca veli görüşmeleri çok daha somut geçer.']}
  ]},
 {slug:'gelisim-karnesi',cat:'Gelişim',art:'clip',date:'28 Ekim 2026',min:5,title:'Veliye karne verirken yazılacak beş cümle',
  sum:'Puan tek başına yetmez. İyi bir karne, çocuğa ve aileye ne yapacaklarını söyler.',
  body:[
   {p:['Karne, velinin kulübü değerlendirdiği an. Çocuğa 7 yazmak kolay. Asıl iş, o 7’nin ne anlama geldiğini ve bir sonraki dönemde ne değişeceğini yazmak.']},
   {h:'Beş başlık, beş puan',p:['Teknik, taktik, fiziksel, mental ve takım oyunu. Her biri için 1–10 arası puan ver. Başlık sayısını artırmak karneyi iyi yapmaz, okunmaz hale getirir.']},
   {h:'Cümleler',ul:['Bu dönem en çok geliştiği alan.','Şu an en güçlü olduğu yön.','Önümüzdeki dönem birlikte çalışılacak tek konu.','Evde veya takımla yapılabilecek küçük bir öneri.','Çocuğa doğrudan, cesaretlendirici bir kapanış.']},
   {h:'İç notu ayır',p:['Antrenörün kulüp içi gözlemi, veliyle paylaşılan metinden farklı olmalı. KulüpGO’da karnenin iç notu ayrı tutulur ve veli göremez.']},
   {h:'Paylaşmak antrenörün elinde',p:['Karne, antrenör “veliyle paylaş” demeden velinin ekranında görünmez. Böylece yazım bitmeden yarım bir karne ailelere ulaşmaz.']}
  ]},
 {slug:'cocuk-verisi',cat:'Güvenlik',art:'shield',date:'20 Ekim 2026',min:5,title:'Çocuk verisi tutan kulüp neleri düşünmeli?',
  sum:'Fotoğraf, kimlik, sağlık, iletişim… Kulüplerin veri sorumluluğuna dair genel bir çerçeve.',
  body:[
   {call:'Bu yazı genel bilgi içindir, hukuki danışmanlık değildir. Kulübün özel durumu için bir avukata danışılmalıdır.'},
   {p:['Futbol kulüpleri, farkında olmadan çok miktarda çocuk verisi tutar: ad soyad, doğum tarihi, fotoğraf, veli telefonu, sakatlık notu, boy ve kilo. Bu verilerin sorumluluğu kulüptedir.']},
   {h:'Ne topladığını bil',p:['İlk adım, hangi veriyi neden tuttuğunu listelemek. Gerekmeyen veriyi toplamamak en güvenli yöntemdir.']},
   {h:'Kim ne görüyor?',p:['Her antrenörün her takımın bilgisine erişmesi gerekmez. Yetkiyi rolle sınırla: antrenör kendi takımını, veli kendi çocuğunu görsün.']},
   {h:'Fotoğraf ve paylaşım',p:['Çocuk fotoğraflarının kulüp sitesinde veya sosyal medyada paylaşılması için velinin izni gerekir. KulüpGO’da oyuncu adı kulüp sitesinde yalnızca veli izin verdiyse görünür.']},
   {h:'Kayıt tut',p:['Önemli verilerin kim tarafından, ne zaman değiştirildiğini görebilmek, bir sorun çıktığında en büyük avantajdır.']},
   {h:'Aydınlatma ve onay',p:['Kişisel verilerin işlenmesi konusunda velileri bilgilendirmen ve gerekli durumlarda onay alman gerekir. Metinleri hazırlarken bir hukukçudan destek almak doğru olur.']}
  ]},
 {slug:'mac-kadrosu-kontrol',cat:'Maç günü',art:'flag',date:'14 Ekim 2026',min:4,title:'Maç günü kadro listesi için kontrol listesi',
  sum:'Son dakikada fark edilen eksik lisans, tekrar eden forma numarası ve kaptan karışıklığı için beş kontrol.',
  body:[
   {p:['Maç kadrosu, maçın kâğıt tarafı. Hata olduğunda sahaya hakem ve rakip önünde çıkıyor, düzeltmesi ise dakikalar alıyor. Kontrolü maç gününe bırakma.']},
   {h:'Maçtan önce',ul:['Kadrodaki her oyuncunun lisans bitiş tarihine bak.','İlk 11 ve yedek sayısını doğrula.','Forma numaralarının tekrar etmediğinden emin ol.','Kaleciyi ve kaptanı işaretle. Kadroda bir kaptan ve bir kaleci olmalı.','Forma rengini ve iç saha veya deplasman bilgisini gir.']},
   {h:'Sistem sana ne kazandırır',p:['KulüpGO’da maç kadrosu 11 as ve en fazla 10 yedekten oluşur. Her oyuncuya o maça özel forma numarası verilir ve tek kaleci, tek kaptan kuralı veritabanında denetlenir. Maç kadrosunu yalnızca o takımın antrenörü yazabilir.']},
   {h:'Maçtan sonra',p:['Olayları gir: gol, asist, oyuncu değişikliği, sarı ve kırmızı kart. Maçı bitirdiğinde her oyuncunun dakikası, golü, asisti ve kartları bu olaylardan hesaplanır.']}
  ]},
 {slug:'malzeme-zimmet',cat:'Malzeme',art:'bib',date:'7 Ekim 2026',min:3,title:'Forma ve malzeme zimmeti: kayıp nasıl azalır?',
  sum:'Beden bilgisi, teslim tarihi ve iade kaydı ile malzeme kaybını azaltmanın basit yolu.',
  body:[
   {p:['Her sezon sonunda aynı konuşma yapılır: “Kırk forma verdik, otuz iki döndü.” Kayıp malzeme, kulübün sessiz giderlerinden biridir.']},
   {h:'Zimmet bir kayıttır',p:['Kime, ne zaman, hangi beden, hangi ürün. Dört bilgi yeter. Teslim anında kaydedilen zimmet, iade günü tartışmayı bitirir.']},
   {h:'Kritik seviyeyi belirle',p:['Her ürün için bir alt sınır koy. Stok o seviyenin altına düşünce bir uyarı çıksın ki sezonun ortasında topsuz kalma.']},
   {h:'Hareketleri sakla',p:['Giriş ve çıkış kayıtları, stok sayımı sırasında “eksik nereye gitti?” sorusunun cevabıdır.']},
   {h:'Veli de görsün',p:['KulüpGO’da veli kendi çocuğunun zimmetini görür. Ailenin elinde ne olduğunu bilmesi, iade sürecini kolaylaştırır.']}
  ]}
],
LEGAL:{
 gizlilik:{t:'Gizlilik Politikası',intro:'Bu metin taslaktır. Yayına almadan önce şirket bilgileri doldurulmalı ve bir hukukçu tarafından gözden geçirilmelidir.',
  s:[['Biz kimiz','[ŞİRKET UNVANI], [ADRES], [VERGİ DAİRESİ / NO] bilgileriyle faaliyet gösteren KulüpGO hizmetinin sahibidir.'],
   ['Hangi verileri topluyoruz','Hesap oluştururken ad, e-posta ve kulüp bilgilerini; kulüp kullanımı sırasında kulübün girdiği oyuncu, antrenör, veli, idman, maç ve ödeme kayıtlarını işleriz.'],
   ['Kulüp verisi kimin','Kulübün girdiği oyuncu ve veli verileri bakımından kulüp veri sorumlusudur. KulüpGO bu verileri kulübün talimatıyla işleyen taraftır.'],
   ['Güvenlik','Verilere rol bazlı erişim, kulüp izolasyonu, iki adımlı doğrulama ve değiştirilemeyen denetim kaydı ile koruma sağlanır. Ayrıntılar için Güvenlik sayfasına bakın.'],
   ['Saklama ve silme','[SAKLAMA SÜRELERİ BURAYA YAZILACAK]. Abonelik iptalinde kulüp salt okunur hale gelir ve veri silinmez.'],
   ['İletişim','[E-POSTA ADRESİ]']]},
 kvkk:{t:'KVKK Aydınlatma Metni',intro:'Bu metin taslaktır. 6698 sayılı Kanun kapsamındaki yükümlülükler için bir hukukçudan destek alınmalıdır.',
  s:[['Veri sorumlusu','[ŞİRKET UNVANI / ADRES / İLETİŞİM]'],
   ['İşlenen veriler','Kimlik, iletişim, ödeme, görsel ve kulüp faaliyetine ilişkin veriler. Çocuklara ait veriler veli veya kulüp yetkilisi aracılığıyla işlenir.'],
   ['İşleme amaçları','Hizmetin sunulması, abonelik ve ödeme süreçlerinin yürütülmesi, güvenliğin sağlanması, yasal yükümlülüklerin yerine getirilmesi.'],
   ['Hukuki sebepler','[HUKUKİ SEBEPLER HUKUKÇU TARAFINDAN BELİRLENECEK]'],
   ['Aktarım','[VERİ AKTARIMI VE ALTYAPI SAĞLAYICILARI YAZILACAK]'],
   ['Haklarınız','Kanunun 11. maddesi kapsamındaki haklarınızı [E-POSTA ADRESİ] üzerinden kullanabilirsiniz.']]},
 'mesafeli-satis':{t:'Mesafeli Satış Sözleşmesi',intro:'Bu metin taslaktır. Ödeme altyapısının onayı için gerekli olan sözleşme metni hukukçu tarafından hazırlanmalıdır.',
  s:[['Taraflar','Satıcı: [ŞİRKET UNVANI / ADRES / VERGİ NO]. Alıcı: abonelik kaydını oluşturan kulüp yetkilisi.'],
   ['Hizmet','KulüpGO kulüp yönetim yazılımı aboneliği. Başlangıç, Profesyonel ve Kulüp planları ile kulüp web sitesi ek hizmeti.'],
   ['Bedel ve ödeme','Plan bedelleri Fiyatlar sayfasında gösterilir. Abonelik aylık veya yıllık olarak ödenir. Yıllık ödemede 2 ay bedava uygulanır.'],
   ['Deneme','Yeni kulüpler 14 günlük deneme ile başlar.'],
   ['Cayma ve iptal','[CAYMA HAKKI VE İPTAL KOŞULLARI HUKUKÇU TARAFINDAN YAZILACAK]'],
   ['Uyuşmazlık','[YETKİLİ MAHKEME / TÜKETİCİ HAKEM HEYETİ BİLGİSİ]']]},
 iade:{t:'İptal ve İade Koşulları',intro:'Bu metin taslaktır. Koşullar yayından önce netleştirilmelidir.',
  s:[['İptal','Aboneliğini istediğin zaman iptal edebilirsin. İptal edilen abonelikte kulüp salt okunur hale gelir. Veri silinmez, yeni kayıt girilemez.'],
   ['İade','[İADE KOŞULLARI BURAYA YAZILACAK]'],
   ['Plan değişikliği','Plan ve abonelik durumu ödeme sonrasında sunucu tarafında güncellenir. Üst plana geçiş [GEÇİŞ KOŞULLARI BURAYA YAZILACAK].'],
   ['İletişim','[E-POSTA ADRESİ]']]}
}
};
