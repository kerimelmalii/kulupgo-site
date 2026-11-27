/* Canlı demo: tamamen sahte veriyle çalışan yönetim paneli. Hiçbir şey sunucuya gitmez. */
(function(){
var I=SK.icon;
var TEAMS=['U12','U14','U16'];
var NAMES={
 U12:['Ahmet K.','Berk Y.','Cem A.','Doruk S.','Efe T.','Furkan M.'],
 U14:['Ali Y.','Burak T.','Can E.','Deniz A.','Emre K.','Furkan S.','Kerem D.','Mert B.','Onur C.','Poyraz H.','Rüzgar N.','Selim V.','Tuna G.','Umut Ş.'],
 U16:['Yiğit A.','Zeki B.','Alp C.','Baran D.','Cihan E.','Doğan F.']
};
var POS14=['OS','DEF','FOR','OS','DEF','DEF','DEF','KL','OS','FOR','DEF','OS','KL','FOR'];
var POSX=['KL','DEF','DEF','OS','OS','FOR'];
var NO14=[10,4,9,8,5,3,2,1,6,11,7,14,12,15];
var EXTRA=['Veli Ç.','Tarık Z.','Barış L.','Murat P.'];
var FEE=1200,SPONSOR=15000,GIDER=21000;
function pad(n){return ('0000'+n).slice(-4);}
function tl(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' ₺';}
function now(){var d=new Date();return ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2);}

function create(){
  var S={role:'yonetici',view:'ozet',team:'U14',tf:'Tümü',q:'',sel:null,players:[],log:[],att:{},score:{},sq:{},gk:null,cap:null,saved:false,karne:false,zp:null,zim:[],extra:0,
    stock:[{n:'Antrenman topu',q:14,k:10},{n:'Yelek',q:9,k:12},{n:'Eşofman takımı (M)',q:3,k:5},{n:'Forma seti',q:18,k:6}]};
  var n=1;
  TEAMS.forEach(function(t){NAMES[t].forEach(function(nm,i){
    S.players.push({id:pad(n),name:nm,team:t,pos:t==='U14'?POS14[i]:POSX[i%6],foot:i%3===0?'Sol':'Sağ',boy:(t==='U12'?138:t==='U14'?152:168)+i*2,kilo:(t==='U12'?32:t==='U14'?42:56)+i,lic:(['06.2027','03.2027','11.2026','09.2027'])[i%4],no:t==='U14'?NO14[i]:i+1,paid:n%4!==0,parent:nm.split(' ')[0]+' ailesi'});
    n++;});});
  S.players[6].paid=false; // Ali Y. (U14 ilk oyuncu)
  var ali=S.players.filter(function(p){return p.team==='U14';})[0];ali.paid=false;
  S.aliId=ali.id;S.zp=ali.id;
  var u14=S.players.filter(function(p){return p.team==='U14';});
  var A=[7,1,4,5,6,0,3,8,2,9,11],Y=[10,12,13];
  u14.forEach(function(p,i){S.sq[p.id]={r:A.indexOf(i)>=0?'as':Y.indexOf(i)>=0?'yedek':'',no:p.no};});
  S.gk=u14[7].id;S.cap=u14[0].id;
  [0,1,2,4,6,7].forEach(function(i){S.att[u14[i].id]='g';});S.att[u14[3].id]='i';S.att[u14[5].id]='n';
  S.zim=[{p:ali.id,item:'Eşofman takımı (M)'}];
  S.log=[{t:'09:12',w:'Yönetici',x:'Oyuncu bilgisi düzenlendi · 0012'},{t:'09:48',w:'Antrenör (U16)',x:'Yoklama kaydedildi · U16'},{t:'10:05',w:'Yönetici',x:'Stok girişi: Antrenman topu ×6'}];
  return S;
}
function add(S,w,x){S.log.unshift({t:now(),w:w,x:x});if(S.log.length>40)S.log.pop();}
function P(S,id){return S.players.filter(function(p){return p.id===id;})[0];}
function inTeam(S,t){return S.players.filter(function(p){return p.team===t;});}
function pill(c,t){return '<span class="pill '+c+'">'+t+'</span>';}
function who(S){return S.role==='yonetici'?'Yönetici':'Antrenör (U14)';}

var ADM=[['ozet','chart','Özet'],['oyuncu','users','Oyuncular'],['yoklama','check','Yoklama'],['esame','ball','Maç kadrosu'],['aidat','coin','Aidat'],['malzeme','box','Malzeme']];
var CCH=[['takim','users','Takımım'],['yoklama','check','Yoklama'],['esame','ball','Maç kadrosu'],['karne','file','Karneler'],['para','coin','Gelir-gider']];

/* ---------- görünümler ---------- */
function vOzet(S){
  var paid=S.players.filter(function(p){return p.paid;}).length,tot=S.players.length,gelir=paid*FEE+SPONSOR,crit=S.stock.filter(function(s){return s.q<=s.k;}).length;
  var u=inTeam(S,'U14'),g=0,iz=0,ng=0;u.forEach(function(p){var a=S.att[p.id];if(a==='g')g++;else if(a==='i')iz++;else if(a==='n')ng++;});
  var h='<div class="win-h"><div><h3>Kasım özeti</h3><p>Örnek veri · Yaptığın her işlem aşağıdaki kayda düşer.</p></div></div>';
  h+='<div class="stats"><div class="stat-c"><small>Aktif oyuncu</small><b>'+tot+'</b></div><div class="stat-c"><small>Kasım aidatı</small><b>'+paid+' / '+tot+'</b><div class="bar"><i style="width:'+Math.round(paid/tot*100)+'%"></i></div></div><div class="stat-c"><small>Aylık net</small><b>'+(gelir-GIDER>=0?'+':'')+tl(gelir-GIDER)+'</b></div><div class="stat-c'+(crit?' warn':'')+'"><small>Kritik stok</small><b>'+crit+'</b></div></div>';
  h+='<div class="two"><div class="panel"><h4>Son işlemler</h4><ul class="feed">'+S.log.slice(0,7).map(function(l){return '<li><time>'+l.t+'</time><span><b>'+l.w+'</b> · '+l.x+'</span></li>';}).join('')+'</ul></div>';
  h+='<div class="panel"><h4>Bugünün idmanı · U14</h4><div class="det"><div><span>Geldi</span><b>'+g+'</b></div><div><span>İzinli</span><b>'+iz+'</b></div><div><span>Gelmedi</span><b>'+ng+'</b></div></div><div class="bar"><i style="width:'+Math.round(g/u.length*100)+'%"></i></div><p class="muted" style="font-size:.8rem">Yoklama sekmesinden değiştir, burası güncellenir.</p></div></div>';
  return h;
}
function vOyuncu(S){
  var list=S.players.filter(function(p){return (S.tf==='Tümü'||p.team===S.tf)&&(!S.q||(p.name+' '+p.id).toLowerCase().indexOf(S.q.toLowerCase())>=0);});
  var h='<div class="win-h"><div><h3>Oyuncular</h3><p>'+S.players.length+' aktif oyuncu</p></div><button class="sbtn p" data-act="addp">+ Oyuncu ekle</button></div>';
  h+='<div class="toolbar"><input class="search" id="dq" placeholder="Ad veya numara ara" value="'+S.q.replace(/"/g,'')+'" aria-label="Oyuncu ara"><div class="seg sm">'+['Tümü'].concat(TEAMS).map(function(t){return '<button data-act="tf" data-v="'+t+'" aria-pressed="'+(S.tf===t)+'">'+t+'</button>';}).join('')+'</div></div>';
  h+='<div style="display:grid;grid-template-columns:minmax(0,1fr) 250px;gap:14px;min-height:0;flex:1"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>No</th><th>Oyuncu</th><th>Takım</th><th>Mevki</th><th>Aidat</th></tr></thead><tbody>'+
   list.map(function(p){return '<tr data-act="sel" data-id="'+p.id+'" class="'+(S.sel===p.id?'sel':'')+'"><td>'+p.id+'</td><td><b>'+p.name+'</b></td><td>'+p.team+'</td><td>'+p.pos+'</td><td>'+(p.paid?pill('ok','Ödendi'):pill('late','Bekliyor'))+'</td></tr>';}).join('')+
   (list.length?'':'<tr><td colspan="5" class="muted">Sonuç yok.</td></tr>')+'</tbody></table></div>';
  var s=S.sel&&P(S,S.sel);
  h+='<div class="panel">'+(s?'<h4>'+s.name+'</h4><span class="tag" style="align-self:flex-start">'+s.team+' · No '+s.id+'</span><div class="det"><div><span>Mevki</span><b>'+s.pos+'</b></div><div><span>Güçlü ayak</span><b>'+s.foot+'</b></div><div><span>Boy / kilo</span><b>'+s.boy+' cm / '+s.kilo+' kg</b></div><div><span>Lisans bitişi</span><b>'+s.lic+'</b></div><div><span>Veli</span><b>'+s.parent+'</b></div></div>':'<h4>Oyuncu kartı</h4><p class="muted" style="font-size:.88rem">Listeden bir oyuncuya tıkla.</p>')+'</div></div>';
  return h;
}
function vYoklama(S){
  var coach=S.role==='antrenor',team=coach?'U14':S.team,list=inTeam(S,team),g=0,iz=0,ng=0;
  list.forEach(function(p){var a=S.att[p.id];if(a==='g')g++;else if(a==='i')iz++;else if(a==='n')ng++;});
  var h='<div class="win-h"><div><h3>Yoklama · '+team+'</h3><p>Salı idmanı · '+g+' geldi, '+iz+' izinli, '+ng+' gelmedi</p></div><button class="sbtn p" data-act="savea">Yoklamayı kaydet</button></div>';
  if(!coach)h+='<div class="toolbar"><div class="seg sm">'+TEAMS.map(function(t){return '<button data-act="team" data-v="'+t+'" aria-pressed="'+(S.team===t)+'">'+t+'</button>';}).join('')+'</div></div>';
  h+='<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Oyuncu</th><th>Mevki</th><th>Yoklama</th><th>Puan <span class="muted" style="font-weight:500">(veli göremez)</span></th></tr></thead><tbody>'+
   list.map(function(p){var a=S.att[p.id]||'';
    return '<tr><td><b>'+p.name+'</b></td><td>'+p.pos+'</td><td><div class="att">'+[['g','Geldi'],['i','İzinli'],['n','Gelmedi']].map(function(b){return '<button class="'+b[0]+'" data-act="att" data-id="'+p.id+'" data-v="'+b[0]+'" aria-pressed="'+(a===b[0])+'">'+b[1]+'</button>';}).join('')+'</div></td><td>'+(a==='g'?'<select class="sel-s" data-act="score" data-id="'+p.id+'" aria-label="Puan">'+['—',1,2,3,4,5,6,7,8,9,10].map(function(v){return '<option value="'+(v==='—'?'':v)+'"'+((S.score[p.id]||'')==(v==='—'?'':v)?' selected':'')+'>'+v+'</option>';}).join('')+'</select>':'<span class="muted">—</span>')+'</td></tr>';}).join('')+'</tbody></table></div>';
  return h;
}
function esameState(S){
  var u=inTeam(S,'U14'),as=0,ye=0,nums={},dup=false;
  u.forEach(function(p){var q=S.sq[p.id];if(q.r==='as')as++;else if(q.r==='yedek')ye++;if(q.r){if(nums[q.no])dup=true;nums[q.no]=1;}});
  var gk=S.gk&&S.sq[S.gk]&&S.sq[S.gk].r==='as',cap=S.cap&&S.sq[S.cap]&&S.sq[S.cap].r==='as';
  var c=[[as===11,'İlk 11 tamam: '+as+' / 11'],[ye<=10,'Yedek sayısı: '+ye+' / en fazla 10'],[!!gk,'Tek kaleci seçili ve ilk 11\'de'],[!!cap,'Tek kaptan seçili ve ilk 11\'de'],[!dup,'Forma numaraları birbirinden farklı']];
  return {c:c,ok:c.every(function(x){return x[0];})};
}
function vEsame(S){
  var u=inTeam(S,'U14'),st=esameState(S);
  var h='<div class="win-h"><div><h3>Maç kadrosu · U14</h3><p>Cumartesi 11:00 · Deplasman · Kurallar canlı denetlenir</p></div><button class="sbtn p" data-act="saveq"'+(st.ok?'':' disabled')+'>Kadroyu kaydet</button></div>';
  h+='<div class="sq"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Oyuncu</th><th>Durum</th><th>No</th><th>K</th><th>C</th></tr></thead><tbody>'+
   u.map(function(p){var q=S.sq[p.id];
    return '<tr><td><b>'+p.name+'</b> <span class="muted">'+p.pos+'</span></td><td><select class="sel-s" data-act="esr" data-id="'+p.id+'" aria-label="Durum"><option value=""'+(q.r===''?' selected':'')+'>—</option><option value="as"'+(q.r==='as'?' selected':'')+'>İlk 11</option><option value="yedek"'+(q.r==='yedek'?' selected':'')+'>Yedek</option></select></td><td><input class="num" type="number" min="1" max="99" value="'+q.no+'" data-act="esn" data-id="'+p.id+'" aria-label="Forma no"></td><td><input type="radio" name="gk" data-act="gk" data-id="'+p.id+'"'+(S.gk===p.id?' checked':'')+' aria-label="Kaleci"></td><td><input type="radio" name="cap" data-act="cap" data-id="'+p.id+'"'+(S.cap===p.id?' checked':'')+' aria-label="Kaptan"></td></tr>';}).join('')+'</tbody></table></div>'+
   '<div class="panel" style="align-self:start"><h4>Kural denetimi</h4><ul class="checks">'+st.c.map(function(x){return '<li class="'+(x[0]?'ok':'bad')+'">'+x[1]+'</li>';}).join('')+'</ul><p class="muted" style="font-size:.8rem">'+(st.ok?'Kadro hazır. Kaydedince veli kendi ekranında görür.':'Kurallar sağlanmadan kadro kaydedilemez.')+'</p></div></div>';
  return h;
}
function vAidat(S){
  var list=S.players.filter(function(p){return S.tf==='Tümü'||p.team===S.tf;}),paid=S.players.filter(function(p){return p.paid;}).length;
  var h='<div class="win-h"><div><h3>Kasım aidatı</h3><p>'+paid+' / '+S.players.length+' ödendi · Tahsil edilen '+tl(paid*FEE)+'</p></div></div>';
  h+='<div class="toolbar"><div class="seg sm">'+['Tümü'].concat(TEAMS).map(function(t){return '<button data-act="tf" data-v="'+t+'" aria-pressed="'+(S.tf===t)+'">'+t+'</button>';}).join('')+'</div></div>';
  h+='<div class="tbl-wrap"><table class="tbl"><thead><tr><th>No</th><th>Oyuncu</th><th>Takım</th><th>Tutar</th><th>Durum</th><th></th></tr></thead><tbody>'+
   list.map(function(p){return '<tr><td>'+p.id+'</td><td><b>'+p.name+'</b></td><td>'+p.team+'</td><td>'+tl(FEE)+'</td><td>'+(p.paid?pill('ok','Ödendi'):pill('late','Bekliyor'))+'</td><td style="text-align:right"><button class="sbtn xs'+(p.paid?'':' p')+'" data-act="pay" data-id="'+p.id+'">'+(p.paid?'Geri al':'Ödendi işaretle')+'</button></td></tr>';}).join('')+'</tbody></table></div>';
  return h;
}
function vMalzeme(S){
  var u=inTeam(S,'U14');
  var h='<div class="win-h"><div><h3>Malzeme ve stok</h3><p>Stok çıkışı oyuncuya zimmet olarak yazılır</p></div><div class="toolbar"><label for="zp" class="muted" style="font-size:.85rem">Zimmet verilecek</label><select class="sel-s" id="zp" data-act="zp">'+u.map(function(p){return '<option value="'+p.id+'"'+(S.zp===p.id?' selected':'')+'>'+p.name+'</option>';}).join('')+'</select></div></div>';
  h+='<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Ürün</th><th>Stok</th><th>Kritik seviye</th><th>Durum</th><th></th></tr></thead><tbody>'+
   S.stock.map(function(s,i){var st=s.q<=s.k/2?pill('bad','Kritik'):s.q<=s.k?pill('late','Azaldı'):pill('ok','Yeterli');
    return '<tr><td><b>'+s.n+'</b></td><td>'+s.q+'</td><td>'+s.k+'</td><td>'+st+'</td><td style="text-align:right;white-space:nowrap"><button class="sbtn xs" data-act="zim" data-i="'+i+'"'+(s.q<1?' disabled':'')+'>Zimmetle</button> <button class="sbtn xs" data-act="stk" data-i="'+i+'">+5 giriş</button></td></tr>';}).join('')+'</tbody></table></div>';
  h+='<div class="panel"><h4>Zimmet kayıtları</h4><div class="det">'+(S.zim.length?S.zim.slice(0,5).map(function(z){return '<div><span>'+P(S,z.p).name+'</span><b>'+z.item+'</b></div>';}).join(''):'<div><span>Henüz kayıt yok</span></div>')+'</div></div>';
  return h;
}
function vTakim(S){
  var u=inTeam(S,'U14'),g=u.filter(function(p){return S.att[p.id]==='g';}).length;
  var h='<div class="win-h"><div><h3>U14 takımım</h3><p>Yalnızca atandığın takımı görürsün</p></div></div>';
  h+='<div class="stats"><div class="stat-c"><small>Oyuncu</small><b>'+u.length+'</b></div><div class="stat-c"><small>Bugün gelen</small><b>'+g+'</b></div><div class="stat-c"><small>Sıradaki maç</small><b style="font-size:1.1rem;padding-top:6px">Cmt 11:00</b></div><div class="stat-c"><small>Maç kadrosu</small><b style="font-size:1.1rem;padding-top:6px">'+(S.saved?'Kaydedildi':'Bekliyor')+'</b></div></div>';
  h+='<div class="tbl-wrap"><table class="tbl"><thead><tr><th>No</th><th>Oyuncu</th><th>Mevki</th><th>Lisans</th></tr></thead><tbody>'+u.map(function(p){return '<tr><td>'+p.no+'</td><td><b>'+p.name+'</b></td><td>'+p.pos+'</td><td>'+p.lic+'</td></tr>';}).join('')+'</tbody></table></div>';
  return h;
}
function karneBars(){return [['Teknik',8],['Taktik',7],['Fiziksel',8],['Mental',9],['Takım oyunu',9]].map(function(r){return '<div style="display:grid;grid-template-columns:100px 1fr 24px;gap:10px;align-items:center;font-size:.88rem"><span>'+r[0]+'</span><div class="bar"><i style="width:'+r[1]*10+'%"></i></div><b>'+r[1]+'</b></div>';}).join('');}
function vKarne(S){
  var h='<div class="win-h"><div><h3>Dönem karnesi · Ali Y.</h3><p>Karne, sen paylaşana kadar veliye görünmez</p></div><button class="sbtn p" data-act="karne">'+(S.karne?'Paylaşımı kaldır':'Veliyle paylaş')+'</button></div>';
  h+='<div class="two"><div class="panel"><h4>Puanlar</h4>'+karneBars()+'<div class="det"><div><span>Güçlü yön</span><b>Takım arkadaşlarını oyuna katıyor</b></div><div><span>Gelişim alanı</span><b>Zayıf ayakla pas</b></div></div></div><div class="panel"><h4>Kulüp içi not</h4><p style="font-size:.9rem">Fiziksel gelişimi bu dönem hızlandı. Maç temposuna uyumu izlenecek.</p><span class="lock">'+I('lock',2)+'Veli göremez</span><p class="muted" style="font-size:.82rem">Durum: '+(S.karne?'Veliyle paylaşıldı':'Paylaşılmadı')+'</p></div></div>';
  return h;
}
function vPara(){return '<div class="lockcard">'+I('lock',2)+'<h3 style="color:var(--ink)">Bu alan yalnızca yöneticiye açık</h3><p>Gelir, gider, aidat ve maaş bilgisi antrenör hesabında görünmez. Kural, ekranda değil veritabanında uygulanır.</p></div>';}

function vVeli(S){
  var ali=P(S,S.aliId),q=S.sq[S.aliId],a=S.att[S.aliId],att=8,tot=9;
  if(a){tot++;if(a==='g')att++;}
  var zim=S.zim.filter(function(z){return z.p===S.aliId;});
  var ph='<div class="phone"><div class="phone-top"><small>Merhaba, Ayşe Hanım</small><b>Ali Y. · U14</b></div><div class="phone-body">'+
   '<div class="pbox"><small>Sıradaki maç</small><b>Cumartesi 11:00 · Deplasman</b>'+(S.saved&&q.r?'<div style="margin-top:6px">'+pill('ok',q.r==='as'?'İlk 11 · No '+q.no:'Yedek · No '+q.no)+'</div>':'<div class="muted" style="font-size:.74rem;margin-top:4px">Kadro henüz açıklanmadı</div>')+'</div>'+
   '<div class="pbox"><small>İdman devamı</small><b>'+att+' / '+tot+' idman</b><div class="bar" style="margin-top:7px"><i style="width:'+Math.round(att/tot*100)+'%"></i></div></div>'+
   '<div class="pbox"><small>Kasım aidatı</small><b>'+(ali.paid?pill('ok','Ödendi'):pill('late','Bekliyor'))+'</b></div>'+
   '<div class="pbox"><small>Zimmet</small><b>'+(zim.length?zim.map(function(z){return z.item;}).join(', '):'Zimmet yok')+'</b></div>'+
   '<div class="pbox" style="'+(S.karne?'':'opacity:.65')+'"><small>Dönem karnesi</small>'+(S.karne?'<b>8.2 · Antrenör karneyi paylaştı</b>':'<b>Henüz paylaşılmadı</b>')+'</div>'+
   '</div><div class="phone-nav"><span class="on">Ana sayfa</span><span>Maçlar</span><span>Gelişim</span><span>Aidat</span></div></div>';
  return '<div class="pwrap"><div class="pgrid">'+ph+'<div class="tips"><h3>Veli yalnızca kendi çocuğunu görür.</h3><p>Bu ekran, diğer rollerde yaptığın işlemlere bağlı. Rol değiştirip dene:</p><ul class="ticks"><li>Yönetici olarak Ali Y.\'nin aidatını ödendi yap</li><li>Antrenör olarak yoklamayı değiştir ve maç kadrosunu kaydet</li><li>Antrenör olarak karneyi veliyle paylaş</li></ul><p class="muted" style="font-size:.85rem">İdman puanı, kulüp içi not, maaş ve rakip analizi velide hiçbir zaman görünmez.</p></div></div></div>';
}

/* ---------- iskelet ---------- */
function layout(S){
  var nav=S.role==='yonetici'?ADM:CCH,h='';
  h+='<div class="demo-top"><div class="seg" role="group" aria-label="Rol">'+[['yonetici','Yönetici'],['antrenor','Antrenör'],['veli','Veli']].map(function(r){return '<button type="button" data-act="role" data-v="'+r[0]+'" aria-pressed="'+(S.role===r[0])+'">'+r[1]+'</button>';}).join('')+'</div><div class="demo-hint"><i></i>Canlı demo · örnek veri · her şey tıklanabilir</div></div>';
  h+='<div class="win"><div class="win-chrome"><i></i><i></i><i></i><span>app.kulupgo.com</span></div>';
  if(S.role==='veli'){h+='<div class="win-body noside"><div class="win-main" style="padding:0">'+vVeli(S)+'</div></div></div>';return h;}
  h+='<div class="win-body"><nav class="win-side" aria-label="Panel menüsü"><div class="who">Örnek SK<small>'+(S.role==='yonetici'?'Yönetici':'Antrenör · U14')+'</small></div>'+
   nav.map(function(n){var locked=S.role==='antrenor'&&n[0]==='para';return '<button type="button" data-act="'+(locked?'locked':'view')+'" data-v="'+n[0]+'"'+(S.view===n[0]?' aria-current="true"':'')+(locked?' class="lockrow"':'')+'>'+I(n[1],2)+n[2]+(locked?' '+I('lock',2):'')+'</button>';}).join('')+'<div class="sp"></div></nav>';
  var v=S.view,body='';
  if(S.role==='yonetici')body=v==='ozet'?vOzet(S):v==='oyuncu'?vOyuncu(S):v==='yoklama'?vYoklama(S):v==='esame'?vEsame(S):v==='aidat'?vAidat(S):vMalzeme(S);
  else body=v==='takim'?vTakim(S):v==='yoklama'?vYoklama(S):v==='esame'?vEsame(S):v==='karne'?vKarne(S):vPara();
  return h+'<div class="win-main">'+body+'</div></div></div>';
}

function mount(el){
  var S=create();
  function toast(m){var w=el.querySelector('.win');if(!w)return;var o=w.querySelector('.toast');if(o)o.remove();var t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=m;w.appendChild(t);setTimeout(function(){if(t.parentNode)t.remove();},2600);}
  function render(msg,keepFocus){
    var mn=el.querySelector('.win-main'),st=mn?mn.scrollTop:0,wrap=el.querySelector('.tbl-wrap'),ws=wrap?wrap.scrollTop:0;
    el.innerHTML='<div class="demo">'+layout(S)+'</div>';
    var m2=el.querySelector('.win-main');if(m2)m2.scrollTop=st;var w2=el.querySelector('.tbl-wrap');if(w2)w2.scrollTop=ws;
    if(keepFocus){var q=el.querySelector('#dq');if(q){q.focus();var l=q.value.length;q.setSelectionRange(l,l);}}
    if(msg)toast(msg);
  }
  el.addEventListener('click',function(e){
    var t=e.target.closest('[data-act]');if(!t||t.tagName==='SELECT'||t.tagName==='INPUT')return;
    var a=t.getAttribute('data-act'),v=t.getAttribute('data-v'),id=t.getAttribute('data-id'),i=+t.getAttribute('data-i');
    if(a==='role'){S.role=v;S.view=v==='yonetici'?'ozet':v==='antrenor'?'takim':'ana';render();}
    else if(a==='view'){S.view=v;render();}
    else if(a==='locked'){toast('Bu alan yalnızca yöneticiye açık.');}
    else if(a==='tf'){S.tf=v;render();}
    else if(a==='team'){S.team=v;render();}
    else if(a==='sel'){S.sel=id;render();}
    else if(a==='addp'){var nm=EXTRA[S.extra%EXTRA.length];S.extra++;var nid=pad(S.players.length+1);S.players.push({id:nid,name:nm,team:'U12',pos:'OS',foot:'Sağ',boy:140,kilo:34,lic:'09.2027',no:S.players.length+1,paid:false,parent:nm.split(' ')[0]+' ailesi'});S.sel=nid;add(S,'Yönetici','Oyuncu eklendi · '+nid+' '+nm);render('Oyuncu eklendi · No '+nid);}
    else if(a==='att'){S.att[id]=S.att[id]===v?'':v;if(S.att[id]!=='g')delete S.score[id];render();}
    else if(a==='savea'){var u=inTeam(S,S.role==='antrenor'?'U14':S.team),g=0,iz=0,ng=0;u.forEach(function(p){var x=S.att[p.id];if(x==='g')g++;else if(x==='i')iz++;else if(x==='n')ng++;});add(S,who(S),'Yoklama kaydedildi · '+(S.role==='antrenor'?'U14':S.team)+': '+g+' geldi, '+iz+' izinli, '+ng+' gelmedi');render('Yoklama kaydedildi');}
    else if(a==='saveq'){S.saved=true;add(S,who(S),'Maç kadrosu kaydedildi · U14 · Cumartesi maçı');render('Maç kadrosu kaydedildi. Veli ekranına yansıdı.');}
    else if(a==='pay'){var p=P(S,id);p.paid=!p.paid;add(S,'Yönetici',p.paid?'Aidat kaydı eklendi · '+p.id+' '+p.name+' · '+tl(FEE):'Aidat kaydı geri alındı · '+p.id+' '+p.name);render(p.paid?'Aidat işlendi · '+p.name:'Aidat geri alındı');}
    else if(a==='zim'){var s=S.stock[i],pl=P(S,S.zp);if(s.q>0){s.q--;S.zim.unshift({p:S.zp,item:s.n});add(S,'Yönetici','Zimmet: '+s.n+' → '+pl.name);render('Zimmetlendi · '+pl.name);}}
    else if(a==='stk'){var s2=S.stock[i];s2.q+=5;add(S,'Yönetici','Stok girişi: '+s2.n+' ×5');render('Stok girişi yapıldı');}
    else if(a==='karne'){S.karne=!S.karne;add(S,'Antrenör (U14)',S.karne?'Karne veliyle paylaşıldı · Ali Y.':'Karne paylaşımı kaldırıldı · Ali Y.');render(S.karne?'Karne veliyle paylaşıldı':'Paylaşım kaldırıldı');}
  });
  el.addEventListener('change',function(e){
    var t=e.target,a=t.getAttribute('data-act'),id=t.getAttribute('data-id');if(!a)return;
    if(a==='score'){S.score[id]=t.value;}
    else if(a==='esr'){S.sq[id].r=t.value;if(t.value!=='as'){if(S.gk===id)S.gk=null;if(S.cap===id)S.cap=null;}S.saved=false;render();}
    else if(a==='esn'){S.sq[id].no=parseInt(t.value,10)||0;S.saved=false;render();}
    else if(a==='gk'){S.gk=id;S.saved=false;render();}
    else if(a==='cap'){S.cap=id;S.saved=false;render();}
    else if(a==='zp'){S.zp=t.value;}
  });
  el.addEventListener('input',function(e){if(e.target.id==='dq'){S.q=e.target.value;render(null,true);}});
  render();
}
window.DEMO={mount:mount};
})();
