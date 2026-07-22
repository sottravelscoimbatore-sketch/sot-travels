(() => {
  'use strict';
  const WA_NUMBER = '919488840240';
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const enquiryModalEl = $('#enquiryModal');
  const reviewModalEl = $('#reviewModal');
  const modalForm = $('#modalEnquiryForm');
  const enquiryModal = enquiryModalEl && window.bootstrap ? bootstrap.Modal.getOrCreateInstance(enquiryModalEl) : null;
  const reviewModal = reviewModalEl && window.bootstrap ? bootstrap.Modal.getOrCreateInstance(reviewModalEl) : null;
  let currentData = null;
  let currentSource = null;

  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const now = new Date();
  const localToday = new Date(now.getTime() - now.getTimezoneOffset()*60000).toISOString().split('T')[0];
  $$('input[type="date"]').forEach(input => input.min = localToday);


  const VEHICLE_OPTIONS = [
    ['', 'Recommend a vehicle'],
    ['Sedan – 4 Seater', 'Sedan – 4 Seater'],
    ['Ertiga – 6 Seater', 'Ertiga – 6 Seater'],
    ['Toyota Innova – 7 Seater', 'Toyota Innova – 7 Seater'],
    ['Innova Crysta – 7 Seater', 'Innova Crysta – 7 Seater'],
    ['Toyota Hycross – 7 Seater', 'Toyota Hycross – 7 Seater'],
    ['Force Traveller – 12 to 14 Seater', 'Force Traveller – 12 to 14 Seater'],
    ['Force Traveller – 15 to 18 Seater', 'Force Traveller – 15 to 18 Seater'],
    ['Urbania – 12 Seater', 'Urbania – 12 Seater'],
    ['Urbania – 16 Seater', 'Urbania – 16 Seater'],
    ['Coach – 21 Seater', 'Coach – 21 Seater'],
    ['Bus', 'Bus']
  ];

  function syncVehicleSelects(){
    const html = VEHICLE_OPTIONS.map(([value, label]) => `<option value="${value}">${label}</option>`).join('');
    $$('select[name="vehicle"]').forEach(select => {
      const current = select.value;
      select.innerHTML = html;
      if(VEHICLE_OPTIONS.some(([value]) => value === current)) select.value = current;
    });
  }
  syncVehicleSelects();

  function enableImageFallback(root=document){
    $$('img[data-fallback]', root).forEach(img => {
      const fail = () => { img.classList.add('d-none'); const parent=img.parentElement; if(parent?.classList.contains('brand-logo')) parent.classList.add('logo-placeholder'); else parent?.classList.add('image-placeholder'); };
      img.addEventListener('error', fail, {once:true});
      if(img.complete && !img.naturalWidth) fail();
    });
  }
  enableImageFallback();

  const menu = $('#siteNav');
  $$('#siteNav a').forEach(link => link.addEventListener('click', () => {
    if(window.innerWidth < 992 && window.bootstrap && menu){
      bootstrap.Collapse.getOrCreateInstance(menu, {toggle:false}).hide();
    }
  }));

  const cleanPhone = value => String(value || '').replace(/\D/g, '').slice(-10);
  const esc = value => String(value || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const labels = {service:'Enquiry type',selection:'Selected option',name:'Name',phone:'Phone',destination:'Destination / places',passengers:'Passengers',pickup:'Pickup location',drop:'Drop location',pickup_date:'Pickup date',pickup_time:'Pickup time',drop_date:'Drop date',drop_time:'Drop time',vehicle:'Vehicle preference',accommodation:'Accommodation',notes:'Additional requirements'};
  const order = ['service','selection','name','phone','destination','passengers','pickup','drop','pickup_date','pickup_time','drop_date','drop_time','vehicle','accommodation','notes'];

  function resetForm(form){
    form.reset(); form.classList.remove('was-validated');
    const alert = $('[data-form-alert]', form); if(alert){ alert.textContent=''; alert.classList.add('d-none'); }
  }
  function showAlert(form, message){
    const alert = $('[data-form-alert]', form); if(!alert) return;
    alert.textContent = message; alert.classList.toggle('d-none', !message);
  }
  function getData(form){
    const data = Object.fromEntries(new FormData(form).entries()); data.phone = cleanPhone(data.phone); return data;
  }
  function validTimes(data){
    if(!data.pickup_date || !data.pickup_time || !data.drop_date || !data.drop_time) return true;
    return new Date(`${data.drop_date}T${data.drop_time}`) > new Date(`${data.pickup_date}T${data.pickup_time}`);
  }
  function showReview(data, source){
    currentData = data; currentSource = source;
    const summary = $('[data-review-summary]');
    if(summary) summary.innerHTML = order.filter(k => data[k] && !(k==='selection' && data[k]==='Website enquiry')).map(k => `<div class="review-row"><span>${labels[k]}</span><strong>${esc(k==='phone' ? `+91 ${data[k]}` : data[k])}</strong></div>`).join('');
    reviewModal?.show();
  }
  function submitForm(form){
    showAlert(form, ''); form.classList.add('was-validated');
    if(!form.checkValidity()) return;
    const data = getData(form);
    if(!/^\d{10}$/.test(data.phone)){ showAlert(form, 'Please enter a valid 10-digit phone number.'); return; }
    if(!validTimes(data)){ showAlert(form, 'Drop date and time must be later than pickup date and time.'); return; }
    if(form.dataset.formSource === 'modal' && enquiryModalEl){
      enquiryModalEl.addEventListener('hidden.bs.modal', () => showReview(data, 'modal'), {once:true}); enquiryModal?.hide();
    } else showReview(data, form.dataset.formSource || 'page');
  }
  $$('[data-review-form]').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); submitForm(form); }));

  function openEnquiry(button){
    if(!modalForm || !enquiryModal) return;
    resetForm(modalForm);
    modalForm.elements.service.value = button.dataset.service || 'General enquiry';
    modalForm.elements.selection.value = button.dataset.selection || 'Website enquiry';
    if(button.dataset.destination) modalForm.elements.destination.value = button.dataset.destination;
    if(button.dataset.vehicle) modalForm.elements.vehicle.value = button.dataset.vehicle;
    if(button.dataset.passengers) modalForm.elements.passengers.value = button.dataset.passengers;
    if(menu && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu,{toggle:false}).hide();
    enquiryModal.show();
  }
  $$('[data-enquire]').forEach(btn => btn.addEventListener('click', () => openEnquiry(btn)));

  $('[data-review-edit]')?.addEventListener('click', () => {
    reviewModalEl?.addEventListener('hidden.bs.modal', () => {
      if(currentSource === 'modal') enquiryModal?.show();
      else document.querySelector(`[data-form-source="${currentSource}"]`)?.scrollIntoView({behavior:'smooth',block:'center'});
    }, {once:true});
    reviewModal?.hide();
  });
  function message(data){
    return [
      '*SOT TRAVELS — NEW ENQUIRY*','',
      `*Enquiry:* ${data.service || 'General enquiry'}`,
      data.selection && data.selection !== 'Website enquiry' ? `*Selected:* ${data.selection}` : '',
      `*Name:* ${data.name}`,`*Phone:* +91 ${data.phone}`,
      `*Destination / Places:* ${data.destination}`,`*Passengers:* ${data.passengers}`,
      `*Pickup:* ${data.pickup}`,`*Drop:* ${data.drop}`,
      `*Pickup date & time:* ${data.pickup_date} ${data.pickup_time}`,
      `*Drop date & time:* ${data.drop_date} ${data.drop_time}`,
      `*Vehicle preference:* ${data.vehicle || 'Please recommend'}`,
      `*Accommodation:* ${data.accommodation || 'No'}`,
      data.notes ? `*Additional requirements:* ${data.notes}` : '', '',
      'Please check availability and share the quotation.'
    ].filter(Boolean).join('\n');
  }
  $('[data-review-submit]')?.addEventListener('click', () => {
    if(currentData) window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message(currentData))}`,'_blank','noopener');
  });

  const vehicles = [
    {rank:4.01,name:'Hyundai Aura',group:'Sedan',seats:'4 Seater',preference:'Sedan – 4 Seater',passengers:4,image:'aura1.webp',text:'Economical for city rides, airport transfers and short outstation trips.'},
    {rank:4.02,name:'Maruti Ciaz',group:'Sedan',seats:'4 Seater',preference:'Sedan – 4 Seater',passengers:4,image:'ciaz1.webp',text:'Spacious sedan for executive travel and comfortable highway journeys.'},
    {rank:4.03,name:'Swift Dzire',group:'Sedan',seats:'4 Seater',preference:'Sedan – 4 Seater',passengers:4,image:'dzire1.webp',text:'A practical choice for couples, small families and regular transfers.'},
    {rank:4.04,name:'Toyota Etios',group:'Sedan',seats:'4 Seater',preference:'Sedan – 4 Seater',passengers:4,image:'etios1.webp',text:'Comfortable sedan with useful luggage space for longer road travel.'},
    {rank:6,name:'Maruti Ertiga',group:'MPV',seats:'6 Seater',preference:'Ertiga – 6 Seater',passengers:6,image:'ertiga1.webp',text:'Family-friendly MPV for small groups and flexible outstation travel.'},
    {rank:7.01,name:'Toyota Innova',group:'MPV',seats:'7 Seater',preference:'Toyota Innova – 7 Seater',passengers:7,image:'innova1.webp',text:'Reliable group comfort for family trips, business travel and tours.'},
    {rank:7.02,name:'Innova Crysta',group:'Premium MPV',seats:'7 Seater',preference:'Innova Crysta – 7 Seater',passengers:7,image:'crysta1.webp',text:'Premium comfort for longer tours, special guests and family holidays.'},
    {rank:7.03,name:'Innova Hycross',group:'Premium MPV',seats:'7 Seater',preference:'Toyota Hycross – 7 Seater',passengers:7,image:'hycross1.webp',text:'Refined MPV option for comfortable local and long-distance journeys.'},
    {rank:12.01,name:'Force Traveller',group:'Traveller',seats:'12 Seater',preference:'Force Traveller – 12 to 14 Seater',passengers:12,image:'TT1.webp',text:'Suitable for families, pilgrimages, functions and group holidays.'},
    {rank:12.02,name:'Force Urbania',group:'Urbania',seats:'12 & 16 Seater',preference:'',passengers:12,image:'Urbania.webp',text:'Premium group travel with comfortable seating and easier cabin movement.'},
    {rank:14,name:'Force Traveller',group:'Traveller',seats:'14 Seater',preference:'Force Traveller – 12 to 14 Seater',passengers:14,image:'TT2.webp',text:'A balanced choice for medium groups travelling together.'},
    {rank:16,name:'Force Traveller',group:'Traveller',seats:'16 Seater',preference:'Force Traveller – 15 to 18 Seater',passengers:16,image:'TT3.webp',text:'Comfortable group movement for tours, events and pilgrimage routes.'},
    {rank:21.01,name:'Tempo Traveller',group:'Large Traveller',seats:'21 Seater',preference:'',passengers:21,image:'TT4.webp',text:'For larger groups that prefer to travel together in one vehicle.'},
    {rank:21.02,name:'Tourist Coach',group:'Coach',seats:'21 Seater',preference:'Coach – 21 Seater',passengers:21,image:'coach1.webp',text:'Coach option for group tours, events and organised travel.'},
    {rank:99,name:'Tourist Bus',group:'Bus',seats:'',preference:'Bus',passengers:30,image:'bus1.webp',text:'For large groups, institutions, company trips and extended tours.'}
  ].sort((a,b)=>a.rank-b.rank);

  const vehicleGrid = $('[data-vehicle-grid]');
  if(vehicleGrid){
    vehicleGrid.innerHTML = vehicles.map(v => `<div class="col-6 col-md-4 col-xl-3"><article class="vehicle-card"><div class="vehicle-media"><img src="images/vehicles/${v.image}" alt="${v.name}" loading="lazy" data-fallback></div><span class="vehicle-type">${v.group}</span><h3>${v.name}</h3>${v.seats ? `<span class="seat-badge">${v.seats}</span>` : ''}<p>${v.text}</p><button class="btn btn-outline-primary btn-sm" data-enquire data-service="Vehicle hire" data-selection="${v.name}${v.seats ? ` — ${v.seats}` : ''}" data-vehicle="${v.preference}" data-passengers="${v.passengers}">Enquire</button></article></div>`).join('');
    enableImageFallback(vehicleGrid);
    $$('[data-enquire]',vehicleGrid).forEach(btn => btn.addEventListener('click',()=>openEnquiry(btn)));
  }

  const tours = [
    {cat:'1-day',days:'1 Day',name:'Ooty Day Trip',image:'ooty.webp',desc:'A focused hill-day route from Coimbatore.',high:['Botanical Garden','Ooty Lake','Viewpoints']},
    {cat:'1-day',days:'1 Day',name:'Isha & Marudhamalai',image:'Isha.webp',desc:'A relaxed spiritual and local sightseeing day.',high:['Adiyogi','Dhyanalinga','Marudhamalai']},
    {cat:'1-day',days:'1 Day',name:'Aliyar & Valparai',image:'Aliyar.webp',desc:'Dam views, hairpin roads and tea-country scenery.',high:['Aliyar Dam','Monkey Falls','Valparai']},
    {cat:'2-days',days:'2 Days / 1 Night',name:'Ooty & Coonoor',image:'coonoor.webp',desc:'A compact Nilgiris escape covering major highlights.',high:['Ooty sights','Coonoor viewpoints','Gardens']},
    {cat:'2-days',days:'2 Days / 1 Night',name:'Mysore Heritage',image:'MysorePalace.webp',desc:'Palace, gardens and family attractions.',high:['Mysore Palace','Brindavan Gardens','Chamundi Hills']},
    {cat:'2-days',days:'2 Days / 1 Night',name:'Kodaikanal Escape',image:'kodaikanal.webp',desc:'Lake, viewpoints and cool-weather relaxation.',high:['Kodai Lake','Coaker’s Walk','Pillar Rocks']},
    {cat:'3-days',days:'3 Days / 2 Nights',name:'Complete Ooty',image:'GreenValley.webp',desc:'Ooty, Coonoor and Pykara with a comfortable pace.',high:['Ooty','Coonoor','Pykara']},
    {cat:'3-days',days:'3 Days / 2 Nights',name:'Munnar Hills',image:'munnar.webp',desc:'Tea estates, viewpoints and nature attractions.',high:['Tea Museum','Mattupetty','Top Station']},
    {cat:'3-days',days:'3 Days / 2 Nights',name:'Coorg Getaway',image:'coorg.webp',desc:'Coffee country, waterfalls and scenic drives.',high:['Abbey Falls','Raja’s Seat','Dubare']},
    {cat:'3-days',days:'3 Days / 2 Nights',name:'Wayanad Nature',image:'Banasura.webp',desc:'Dam, caves and green mountain routes.',high:['Banasura Dam','Edakkal Caves','Viewpoints']},
    {cat:'4-days',days:'4 Days / 3 Nights',name:'Mysore & Coorg',image:'MysorePalace.webp',desc:'A balanced heritage and nature combination.',high:['Mysore Palace','Brindavan Gardens','Coorg']},
    {cat:'4-days',days:'4 Days / 3 Nights',name:'Munnar & Alleppey',image:'alleppey.webp',desc:'Hill-country sightseeing followed by backwater relaxation.',high:['Munnar','Tea estates','Alleppey']},
    {cat:'4-days',days:'4 Days / 3 Nights',name:'Madurai, Rameswaram & Dhanushkodi',image:'dhanushkodi.webp',desc:'Temple, coastal and heritage circuit.',high:['Meenakshi Temple','Rameswaram','Dhanushkodi']},
    {cat:'pilgrimage',days:'Pilgrimage',name:'Navagraha Temple Circuit',image:'Kumbakonam.webp',desc:'A planned temple route around Kumbakonam.',high:['Navagraha temples','Kumbakonam','Flexible pacing']},
    {cat:'pilgrimage',days:'Pilgrimage',name:'Guruvayur & Chottanikkara',image:'Guruvayur.webp',desc:'Kerala temple travel with practical routing.',high:['Guruvayur','Chottanikkara','Optional Kochi stop']}
  ];
  const tourGrid = $('[data-tour-grid]');
  function renderTours(filter='all'){
    if(!tourGrid) return;
    const list = filter==='all' ? tours : tours.filter(t=>t.cat===filter);
    tourGrid.innerHTML = list.map(t => `<div class="col-6 col-lg-4 col-xl-3"><article class="tour-card"><div class="tour-media"><img src="images/destinations/${t.image}" alt="${t.name}" loading="lazy" data-fallback></div><div class="tour-body"><div class="tour-meta"><span>${t.days}</span><span>Customisable</span></div><h3>${t.name}</h3><p>${t.desc}</p><ul class="tour-highlights">${t.high.map(h=>`<li>${h}</li>`).join('')}</ul><button class="btn btn-outline-primary btn-sm" data-enquire data-service="Tour package" data-selection="${t.name} — ${t.days}" data-destination="${t.name}">Enquire</button></div></article></div>`).join('');
    enableImageFallback(tourGrid); $$('[data-enquire]',tourGrid).forEach(btn=>btn.addEventListener('click',()=>openEnquiry(btn)));
  }
  if(tourGrid) renderTours();
  $$('[data-tour-filter]').forEach(btn=>btn.addEventListener('click',()=>{$$('[data-tour-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderTours(btn.dataset.tourFilter)}));

  const hourlyGrid = $('[data-hourly-grid]');
  if(hourlyGrid){
    const hourly = [
      {duration:'8 Hours / 80 KM',vehicle:'Sedan – 4 Seater',text:'Local meetings, errands, appointments and city travel.'},
      {duration:'8 Hours / 80 KM',vehicle:'Ertiga – 6 Seater',text:'Family city use or a small group with several stops.'},
      {duration:'10 Hours / 100 KM',vehicle:'Toyota Innova – 7 Seater',text:'Longer city schedules with improved passenger comfort.'},
      {duration:'10 Hours / 100 KM',vehicle:'Force Traveller – 12 to 14 Seater',text:'Group movement for events, functions and local schedules.'}
    ];
    hourlyGrid.innerHTML = hourly.map(h=>`<div class="col-md-6 col-xl-3"><article class="hourly-card"><span class="capacity">${h.vehicle}</span><h3>${h.duration}</h3><p>${h.text}</p><button class="btn btn-outline-primary btn-sm" data-enquire data-service="Hourly package" data-selection="${h.duration} · ${h.vehicle}" data-vehicle="${h.vehicle}">Request tariff</button></article></div>`).join('');
    $$('[data-enquire]',hourlyGrid).forEach(btn=>btn.addEventListener('click',()=>openEnquiry(btn)));
  }
})();
