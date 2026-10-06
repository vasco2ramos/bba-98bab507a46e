(function(){
const SRC=document.currentScript.src;
const ROOT=SRC.slice(0,SRC.indexOf('assets/js/main.js'));
const CFG={phone:'+34 XXX XXX XXX',email:'booking@barcelonaboys-agency.com',ref:'BBA-101026-FERNANDO'};
window.BBA={ROOT,CFG};
const U=(id,w=700)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
BBA.U=U;
BBA.boys=[
{id:'dante',n:'Dante',r:'The Entertainer',d:'Dynamic, playful and charismatic. Sets the room alight from the first minute.',s:'Classic striptease / crowd interaction',img:'1475403614135-5f1aa0eb5015',st:'a',tags:['classic']},
{id:'nick',n:'Nick',r:'The Dancer',d:'Professional dancer with years of salsa and bachata experience.',s:'Latin / dance / choreography',img:'1690267590629-2fe06a978cd5',st:'a',tags:['latin','dance']},
{id:'martin',n:'Martin',r:'The Versatile One',d:'Confident performer with extensive experience in private celebrations.',s:'Classic / VIP / groom shows',img:'1519085360753-af0119f7cbe7',st:'b',tags:['classic','groom','vip']},
{id:'daniel',n:'Daniel',r:'The Fitness Model',d:'Athletic, disciplined and energetic, with a polished stage routine.',s:'Fitness / choreography',img:'1582439170934-d089aa10abda',st:'a',tags:['dance']},
{id:'anton',n:'Anton',r:'The Gentleman',d:'Elegant, sophisticated and perfectly suited to VIP private events.',s:'Suit reveal / elegant shows',img:'1617137984095-74e4e5e3613f',st:'a',tags:['vip','classic']},
{id:'andre',n:'Andre',r:'The Charmer',d:'Confident, playful and highly interactive with the whole room.',s:'Groom experiences',img:'1507003211169-0a1dd7228f2d',st:'b',tags:['groom']},
{id:'jack',n:'Jack',r:'The Showman',d:'Strong stage presence and theatrical, story-led performances.',s:'Costume / character shows',img:'1546572797-e8c933a75a1f',st:'a',tags:['vip']},
{id:'miguel',n:'Miguel',r:'The Latin',d:'High-energy Latin dance and performance with real heat.',s:'Salsa / bachata / choreography',img:'1695927621677-ec96e048dce2',st:'a',tags:['latin','dance']},
{id:'ivan',n:'Ivan',r:'The Catalan',d:'Barcelona-based professional performer, at home in any private setting.',s:'Private parties',img:'1541112324160-e8a425b58dac',st:'a',tags:['classic']},
{id:'victor',n:'Victor',r:'The Caribbean',d:'Warm personality and a dance-focused, feel-good show.',s:'Latin / Caribbean',img:'1698099402140-74eb1b9124c0',st:'b',tags:['latin','dance']},
{id:'alex',n:'Alex',r:'The Athlete',d:'Sporty, energetic and physical, with a high-impact finale.',s:'Fitness / dance',img:'1754475172820-6053bbed3b25',st:'a',tags:['dance']},
{id:'fernando',n:'Fernando',r:'The New Face',d:'Confident, charismatic and polished. Our newest performer for groom-focused shows.',s:'Groom Special / private parties / classic',img:null,st:'a',isNew:true,tags:['groom','classic']}
];
BBA.imgOf=b=>b.img?U(b.img,700):ROOT+'assets/img/fernando.jpg';
const logo=`<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8cf91"/><stop offset="1" stop-color="#a47c34"/></linearGradient></defs><circle cx="32" cy="32" r="30" fill="#0a0908" stroke="url(#lg)" stroke-width="1.4"/><circle cx="32" cy="32" r="25.5" fill="none" stroke="#6e1423" stroke-width="1"/><path d="M32 9 L38 32 L32 55 L26 32Z" fill="none" stroke="url(#lg)" stroke-width=".8" opacity=".6"/><text x="32" y="40" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-size="25" font-weight="600" fill="url(#lg)" letter-spacing="-1">BB</text><circle cx="32" cy="9" r="1.6" fill="#c9a45c"/><circle cx="32" cy="55" r="1.6" fill="#c9a45c"/></svg>`;
BBA.logo=logo;
const links=[['index.html','Home','home'],['boys.html','Boys','boys'],['shows.html','Shows','shows'],['packages.html','Packages','packages'],['about.html','About Us','about'],['book.html','Booking','book'],['contact.html','Contact','contact']];
const page=document.body.dataset.page||'';
const act=p=>(p===page||(page==='profile'&&p==='boys'))?' on':'';
const R=ROOT;
const header=`<header class="top" id="hdr"><div class="wrap nav"><a class="logo" href="${R}index.html" aria-label="Barcelona Boys Agency">${logo}<span class="lt"><span class="l1">BARCELONA BOYS</span><span class="l2">Agency</span></span></a><nav class="menu">${links.map(l=>`<a class="${act(l[2]).trim()}" href="${R}${l[0]}">${l[1]}</a>`).join('')}</nav><a class="btn gold sm" href="${R}book.html">Book Now</a><button class="burger" id="bg" aria-label="Menu"><span></span><span></span><span></span></button></div></header><div class="mobnav" id="mn">${links.map(l=>`<a href="${R}${l[0]}">${l[1]}</a>`).join('')}<a class="btn gold" style="font-family:Montserrat;font-size:12px" href="${R}book.html">Book Now</a></div>`;
const footer=`<footer><div class="wrap"><div class="fgrid"><div><a class="logo" href="${R}index.html">${logo}<span class="lt"><span class="l1">BARCELONA BOYS</span><span class="l2">Agency</span></span></a><p style="margin-top:18px;max-width:280px">Barcelona's Private Male Entertainment Agency. Professional. Discreet. Unforgettable.</p></div><div><h4>Explore</h4>${links.slice(0,5).map(l=>`<a href="${R}${l[0]}">${l[1]}</a>`).join('')}</div><div><h4>Information</h4><a href="${R}book.html">Booking</a><a href="${R}contact.html">Contact</a><a href="${R}privacy.html">Privacy Policy</a><a href="${R}terms.html">Terms &amp; Conditions</a></div><div><h4>Private Events Department</h4><p>${CFG.phone}</p><p>${CFG.email}</p><p>Mon–Sun · 10:00–00:00</p><p>Barcelona · Catalunya · Spain</p></div></div><div class="fbot"><span>© 2026 Barcelona Boys Agency S.L. All rights reserved. Performers are 18+. Private events only.</span><span><a href="${R}privacy.html">Privacy</a><a href="${R}terms.html">Terms</a></span></div></div></footer>
<a class="wa" href="#" data-wa aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.3 1.3-1.8 1.3-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.300 2.400 1.500.3.1.5.1.6-.1l.9-1.100c.2-.3.4-.2.6-.1l1.900.9c.3.1.5.2.5.3.1.2.1.700-.1 1.300Z"/></svg></a>
<div class="cookie" id="ck"><p>We use cookies to improve your experience and to keep our booking system secure. See our <a href="${R}privacy.html">Privacy Policy</a>.</p><div class="row"><button class="btn gold sm" data-ck="1">Accept all</button><button class="btn sm" data-ck="0">Essential only</button></div></div><div class="toast" id="ts"></div>`;
document.body.insertAdjacentHTML('afterbegin',header);
document.body.insertAdjacentHTML('beforeend',footer);
const hd=document.getElementById('hdr');
const sc=()=>hd.classList.toggle('solid',scrollY>30);sc();addEventListener('scroll',sc,{passive:true});
const bg=document.getElementById('bg'),mn=document.getElementById('mn');
bg.onclick=()=>{bg.classList.toggle('open');mn.classList.toggle('open')};
const toast=m=>{const t=document.getElementById('ts');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),3800)};BBA.toast=toast;
document.addEventListener('click',e=>{
 const w=e.target.closest('[data-wa]');if(w){e.preventDefault();toast('WhatsApp is available to confirmed clients. Please use the booking form.')}
 const t=e.target.closest('[data-tel]');if(t){e.preventDefault();toast('Our booking line is busy. Please use the booking form and we will call you back.')}
 const c=e.target.closest('[data-ck]');if(c){try{localStorage.setItem('bba_ck',c.dataset.ck)}catch(_){ }document.getElementById('ck').classList.remove('on')}
});
try{if(!localStorage.getItem('bba_ck'))setTimeout(()=>document.getElementById('ck').classList.add('on'),1400)}catch(_){setTimeout(()=>document.getElementById('ck').classList.add('on'),1400)}
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
BBA.observe=()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
// card renderer
BBA.card=b=>`<a class="boy reveal" href="${R}${b.id==='fernando'?'fernando.html':'profile.html?p='+b.id}" data-tags="${b.tags.join(' ')}"><div class="ph"><img loading="lazy" src="${BBA.imgOf(b)}" alt="${b.n}, ${b.r}" style="${b.id==='fernando'?'object-position:50% 12%':''}"><span class="av"><i class="dot ${b.st==='b'?'red':''}"></i>${b.st==='b'?'Booked this weekend':'Available'}</span>${b.isNew?'<span class="new">NEW</span>':''}</div><div class="in"><h3>${b.n.toUpperCase()}</h3><div class="role">${b.r}</div><p>${b.d}</p><div class="spec"><b>Speciality</b>${b.s}</div><span class="view">VIEW PROFILE</span></div></a>`;
BBA.observe();
})();
