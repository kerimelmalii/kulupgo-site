/* KulüpGO — illüstrasyon ve ikon kütüphanesi (hepsi özgün SVG) */
(function(){
var INK='#101D34',Y='#EDC94F',CH='#F4F0E6',PA='#FBF9F4',G='#101D34',GD='#0A1324',R='#C4503F';
var uid=0;

/* ---------- ikonlar (24px, çizgi) ---------- */
var ICONS={
users:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
check:'M3 5h18v16H3zM3 10h18M8 3v4M16 3v4M8.5 15.5l2.5 2.5 4.5-5',
clip:'M9 3h6v3H9zM6 5h3M15 5h3v16H6V5M9 11h6M9 15h6',
ball:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8l3.5 2.5-1.3 4H9.8l-1.3-4zM12 8V3M15.5 10.5L20 9M14.2 14.5l3 4M9.8 14.5l-3 4M8.5 10.5L4 9',
coin:'M3 7h18v13H3zM3 7l3-4h12l3 4M15 13.5h3',
box:'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',
chart:'M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-8',
globe:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
shield:'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
lock:'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',
arrow:'M4 12h16M14 6l6 6-6 6',
tick:'M5 12l5 5 9-10',
menu:'M4 7h16M4 12h16M4 17h16',
x:'M6 6l12 12M18 6L6 18',
building:'M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 10h2M14 10h2',
export:'M12 4v12M7 11l5 5 5-5M4 20h16',
import:'M12 16V4M7 9l5-5 5 5M4 20h16',
key:'M8 14a4 4 0 1 1 3.9-5H21v4h-3v3h-3v-3h-3.1A4 4 0 0 1 8 14z',
eye:'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
file:'M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7',
phone:'M8 3h8v18H8zM11 18h2',
mail:'M3 5h18v14H3zM3 6l9 7 9-7',
pin:'M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12zM12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
bolt:'M13 2L4 14h7l-1 8 9-12h-7z',
list:'M9 6h11M9 12h11M9 18h11M4 6h1M4 12h1M4 18h1',
whistle:'M3 10h10a6 6 0 1 1-4.5 10M3 10l3-3h7M10 14a2 2 0 1 0 0 .1'
};
function icon(n,sw){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||2)+'" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true"><path d="'+ICONS[n]+'"/></svg>';}

/* ---------- logo ---------- */
function ring(){return '<svg class="ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="10"/><path d="M50.0 33.0L50.0 12.0M66.2 44.7L86.1 38.3M60.0 63.8L72.3 80.7M40.0 63.8L27.7 80.7M33.8 44.7L13.9 38.3" stroke="currentColor" stroke-width="6" stroke-linecap="butt" fill="none"/><polygon points="50.0,33.0 66.2,44.7 60.0,63.8 40.0,63.8 33.8,44.7" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>';}
function logoMark(){return '<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="26" fill="#101D34"/><g transform="translate(18 18) scale(.64)" style="color:#C5F438"><circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" stroke-width="10"/><path d="M50.0 33.0L50.0 12.0M66.2 44.7L86.1 38.3M60.0 63.8L72.3 80.7M40.0 63.8L27.7 80.7M33.8 44.7L13.9 38.3" stroke="currentColor" stroke-width="6" stroke-linecap="butt" fill="none"/><polygon points="50.0,33.0 66.2,44.7 60.0,63.8 40.0,63.8 33.8,44.7" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></g></svg>';}
function logo(){return '<a class="logo" href="#" aria-label="KulüpGO ana sayfa"><span class="wm">KulüpG</span>'+ring()+'</a>';}

/* ---------- yardımcı ---------- */
function poly(cx,cy,r,rot){var p=[],i,a;for(i=0;i<5;i++){a=(rot+i*72)*Math.PI/180;p.push((cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1));}return p.join(' ');}

/* ---------- nesneler (viewBox 0 0 120 120 iç içerik) ---------- */
var OBJ={
ball:function(){
  var id='bc'+(++uid),s='',i,a,x,y;
  s+='<defs><clipPath id="'+id+'"><circle cx="60" cy="60" r="46"/></clipPath></defs>';
  s+='<circle cx="60" cy="60" r="46" fill="'+PA+'"/>';
  s+='<g clip-path="url(#'+id+')" fill="'+INK+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round">';
  s+='<polygon points="'+poly(60,60,17,-90)+'"/>';
  for(i=0;i<5;i++){a=(-90+i*72)*Math.PI/180;
    s+='<line x1="'+(60+17*Math.cos(a)).toFixed(1)+'" y1="'+(60+17*Math.sin(a)).toFixed(1)+'" x2="'+(60+34*Math.cos(a)).toFixed(1)+'" y2="'+(60+34*Math.sin(a)).toFixed(1)+'"/>';
    x=60+52*Math.cos(a+0.0);y=60+52*Math.sin(a);
    s+='<polygon points="'+poly(x,y,17,-90+i*72+36)+'"/>';}
  s+='</g><circle cx="60" cy="60" r="46" fill="none" stroke="'+INK+'" stroke-width="4"/>';
  return s;},
boot:function(){
  return '<g transform="translate(-4 4) scale(.78) translate(18 6)">'+
  '<path d="M18 84C18 66 20 52 24 44h26c4 8 12 14 24 16 22 4 46 6 64 18 8 5 8 12 2 14H18z" fill="'+Y+'" stroke="'+INK+'" stroke-width="5" stroke-linejoin="round"/>'+
  '<path d="M14 92h132l-2 9H16z" fill="'+INK+'"/>'+
  '<g fill="'+INK+'"><rect x="28" y="101" width="9" height="11"/><rect x="52" y="101" width="9" height="11"/><rect x="100" y="101" width="9" height="11"/><rect x="124" y="101" width="9" height="11"/></g>'+
  '<path d="M64 62l-10-10M76 66l-10-10M88 69l-10-10" stroke="'+INK+'" stroke-width="4" fill="none"/>'+
  '<path d="M34 80q42-12 90 6" stroke="'+PA+'" stroke-width="5" fill="none"/></g>';},
whistle:function(){
  return '<circle cx="74" cy="30" r="9" fill="none" stroke="'+INK+'" stroke-width="5"/>'+
  '<rect x="8" y="52" width="52" height="24" fill="'+CH+'" stroke="'+INK+'" stroke-width="5"/>'+
  '<circle cx="76" cy="70" r="30" fill="'+Y+'" stroke="'+INK+'" stroke-width="5"/>'+
  '<circle cx="76" cy="70" r="10" fill="'+INK+'"/>';},
flag:function(){
  return '<path d="M42 12v96" stroke="'+INK+'" stroke-width="5"/>'+
  '<polygon points="44,14 98,32 44,52" fill="'+Y+'" stroke="'+INK+'" stroke-width="5" stroke-linejoin="round"/>'+
  '<ellipse cx="42" cy="108" rx="20" ry="6" fill="'+INK+'"/><path d="M42 96v12" stroke="'+INK+'" stroke-width="5"/>';},
cone:function(){
  return '<polygon points="60,14 88,96 32,96" fill="'+Y+'" stroke="'+INK+'" stroke-width="5" stroke-linejoin="round"/>'+
  '<polygon points="53,38 67,38 71,52 49,52" fill="'+PA+'" stroke="'+INK+'" stroke-width="3"/>'+
  '<polygon points="45,64 75,64 79,78 41,78" fill="'+PA+'" stroke="'+INK+'" stroke-width="3"/>'+
  '<rect x="22" y="96" width="76" height="11" fill="'+INK+'"/>';},
bib:function(){
  return '<path d="M36 12h12c2 12 22 12 24 0h12l18 28-12 6v58H30V46L18 40z" fill="'+Y+'" stroke="'+INK+'" stroke-width="5" stroke-linejoin="round"/>'+
  '<text x="60" y="84" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="40" fill="'+INK+'">9</text>';},
goal:function(){
  var s='',i;
  for(i=0;i<=6;i++){s+='<path d="M'+(26+i*14.6)+' 30V100" stroke="'+CH+'" stroke-width="1.6" opacity=".7"/>';}
  for(i=0;i<=4;i++){s+='<path d="M20 '+(30+i*17.5)+'H116" stroke="'+CH+'" stroke-width="1.6" opacity=".7"/>';}
  return s+'<path d="M20 100V30h96v70" fill="none" stroke="'+PA+'" stroke-width="6"/><path d="M8 100h104" stroke="'+PA+'" stroke-width="3"/>';},
cards:function(){
  return '<rect x="24" y="24" width="44" height="64" fill="'+Y+'" stroke="'+INK+'" stroke-width="5" transform="rotate(-12 46 56)"/>'+
  '<rect x="56" y="30" width="44" height="64" fill="'+R+'" stroke="'+INK+'" stroke-width="5" transform="rotate(12 78 62)"/>';},
clip:function(){
  return '<rect x="22" y="20" width="76" height="92" fill="'+PA+'" stroke="'+INK+'" stroke-width="5"/>'+
  '<rect x="42" y="10" width="36" height="18" fill="'+Y+'" stroke="'+INK+'" stroke-width="5"/>'+
  '<path d="M36 52h48M36 68h48M36 84h30" stroke="'+INK+'" stroke-width="5"/>';},
shield:function(){
  return '<path d="M60 10l40 14v32c0 26-16 42-40 54C36 98 20 82 20 56V24z" fill="'+Y+'" stroke="'+INK+'" stroke-width="5" stroke-linejoin="round"/>'+
  '<path d="M60 10v100" stroke="'+INK+'" stroke-width="4"/><path d="M38 52l14 14 28-30" stroke="'+INK+'" stroke-width="7" fill="none"/>';}
};
var IMG={ball:'top',boot:'krampon',whistle:'duduk',flag:'bayrak',cone:'konik',bib:'forma',cards:'kartlar',clip:'pano',shield:'eldiven',glove:'eldiven',goal:'kupa',trophy:'kupa'};
function img(name,cls,label){return '<img class="il'+(cls?' '+cls:'')+'" src="img/'+IMG[name]+'.webp" alt="'+(label||'')+'" loading="lazy" decoding="async">';}
function art(name,cls,label){if(IMG[name])return img(name,cls,label);return '<svg class="'+(cls||'')+'" viewBox="0 0 120 120" role="'+(label?'img':'presentation')+'"'+(label?' aria-label="'+label+'"':' aria-hidden="true"')+'>'+OBJ[name]()+'</svg>';}

/* ---------- saha + taktik tahtası ---------- */
function pitchLines(sw){
  var s='<g fill="none" stroke="'+CH+'" stroke-width="'+(sw||2.5)+'" stroke-opacity=".85">';
  s+='<rect x="25" y="25" width="630" height="408"/><path d="M340 25v408"/><circle cx="340" cy="229" r="55"/>';
  s+='<rect x="25" y="108" width="99" height="242"/><rect x="25" y="174" width="33" height="110"/>';
  s+='<rect x="556" y="108" width="99" height="242"/><rect x="622" y="174" width="33" height="110"/>';
  s+='<path d="M124 185A55 55 0 0 1 124 273M556 185A55 55 0 0 0 556 273"/>';
  s+='<path d="M25 37a12 12 0 0 0 12-12M655 37a12 12 0 0 1-12-12M25 421a12 12 0 0 1 12 12M655 421a12 12 0 0 0-12 12"/></g>';
  s+='<g fill="'+CH+'"><circle cx="340" cy="229" r="4"/><circle cx="91" cy="229" r="3.5"/><circle cx="589" cy="229" r="3.5"/></g>';
  return s;
}
function stripes(){var s='',i;for(i=0;i<10;i++){s+='<rect x="'+(25+i*63)+'" y="25" width="63" height="408" fill="'+(i%2?'#0E3C2C':'#101D34')+'"/>';}return s;}
function pitch(o){
  o=o||{};var id='ar'+(++uid),s='';
  s+='<svg viewBox="0 0 680 458" role="img" aria-label="'+(o.label||'Taktik tahtası: 4-3-3 dizilişi, paslaşma okları')+'"><defs><marker id="'+id+'" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5 0 10z" fill="'+Y+'"/></marker></defs>';
  s+='<rect width="680" height="458" fill="'+G+'"/>'+stripes()+pitchLines(o.sw);
  if(o.players!==false){
    var P=[[1,60,229],[2,150,98],[4,140,184],[5,140,274],[3,150,360],[6,235,229],[8,258,148],[10,258,310],[7,372,92],[9,392,229],[11,372,366]];
    var O=[[462,160],[470,229],[462,298],[540,196],[540,262]];
    s+='<g fill="none" stroke="'+Y+'" stroke-width="3" stroke-dasharray="9 7" marker-end="url(#'+id+')"><path d="M244 229Q258 190 258 166"/><path d="M270 148Q320 110 358 100"/><path d="M262 322Q330 300 376 246"/></g>';
    s+='<g fill="none" stroke="'+CH+'" stroke-width="3" marker-end="url(#'+id+')"><path d="M392 100Q440 70 500 82"/><path d="M410 229H484"/></g>';
    s+='<g fill="none" stroke="'+CH+'" stroke-width="3">';
    O.forEach(function(p){s+='<path d="M'+(p[0]-9)+' '+(p[1]-9)+'l18 18M'+(p[0]+9)+' '+(p[1]-9)+'l-18 18"/>';});
    s+='</g><g font-family="Manrope,Arial" font-weight="800" font-size="15" text-anchor="middle">';
    P.forEach(function(p){s+='<circle cx="'+p[1]+'" cy="'+p[2]+'" r="17" fill="'+Y+'" stroke="'+INK+'" stroke-width="3"/><text x="'+p[1]+'" y="'+(p[2]+5.5)+'" fill="'+INK+'">'+p[0]+'</text>';});
    s+='</g><g transform="translate(414 238) scale(.34)">'+OBJ.ball()+'</g>';
  }
  return s+'</svg>';
}
function pitchBg(op){return '<svg class="bg" viewBox="0 0 680 458" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="opacity:'+(op||1)+'">'+pitchLines(2)+'</svg>';}

/* ---------- blog kapakları ---------- */
function postArt(name){return img(name);}

window.SK={ring:ring,img:img,icon:icon,logo:logo,logoMark:logoMark,art:art,pitch:pitch,pitchBg:pitchBg,postArt:postArt,ICONS:ICONS};
})();
