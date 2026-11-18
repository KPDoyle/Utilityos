export const money = (v, decimals = 0) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: decimals, minimumFractionDigits: decimals }).format(Number(v) || 0);
export const today = () => new Date().toISOString().slice(0, 10);
export const dateAfter = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
export const formatDate = (v) => v ? new Date(v + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Not set';
export const daysUntil = (v) => Math.ceil((new Date(v + 'T12:00:00') - new Date(today() + 'T12:00:00')) / 86400000);
export const uid = () => crypto.randomUUID();
export const categories = ['Electricity', 'Gas', 'Water', 'Broadband', 'Waste & recycling', 'Insurance', 'Card payments', 'Phone & mobile', 'Security', 'Cleaning', 'EPOS', 'Maintenance'];
export const checklist = ['Confirm tenancy and opening date', 'Record opening meter readings', 'Arrange electricity supply', 'Arrange water and wastewater', 'Book broadband installation', 'Set up waste and recycling', 'Arrange business insurance', 'Set up card payments and EPOS', 'Review licences and safety checks', 'Set up accounting handoff'];
export function seed() {
  const sites = [{id:'s1', name:'The Daily Grind',type:'Café & coffee shop',address:'24 Market Street, Warwick',postcode:'CV34 4SL',opening:dateAfter(-250),status:'Trading',budget:2200,checks:checklist.map(()=>true)}, {id:'s2',name:'Grain & Green',type:'Restaurant',address:'8 Regent Street, Leamington Spa',postcode:'CV32 5HQ',opening:dateAfter(-150),status:'Trading',budget:3200,checks:checklist.map(()=>true)}, {id:'s3',name:'The Daily Grind · Riverside',type:'Café & coffee shop',address:'12 Bridge Street, Stratford-upon-Avon',postcode:'CV37 6AB',opening:dateAfter(28),status:'Opening soon',budget:1800,checks:[true,true,true,true,false,false,true,false,false,false]}];
  const services = [
    ['Electricity','Bright Energy','s1',682,32,'Active'],['Gas','Bright Energy','s1',218,32,'Active'],['Water','Clearwater Business','s1',92,200,'Active'],['Broadband','Connect Fibre','s1',49,18,'Renewal due'],['Waste & recycling','Green Loop','s1',126,90,'Active'],['Insurance','Cover Collective','s1',83,155,'Active'],['Card payments','CounterPay','s1',94,180,'Active'],
    ['Electricity','Bright Energy','s2',1150,70,'Active'],['Gas','Bright Energy','s2',476,70,'Active'],['Water','Clearwater Business','s2',148,230,'Active'],['Broadband','Connect Fibre','s2',69,165,'Active'],['Waste & recycling','Green Loop','s2',210,110,'Active'],['Insurance','Cover Collective','s2',124,100,'Active'],['Card payments','CounterPay','s2',142,180,'Active'],
    ['Electricity','Bright Energy','s3',330,365,'Scheduled'],['Water','Clearwater Business','s3',65,365,'Scheduled'],['Insurance','Cover Collective','s3',75,365,'Scheduled']
  ].map((s,i)=>({id:'v'+i,category:s[0],provider:s[1],site:s[2],monthly:s[3],renewal:dateAfter(s[4]),status:s[5],reference:`UOS-${30100+i}`,notice:30,account:s[0]==='Insurance'?'490':'445',notes:'Illustrative supplier and contract. No live service agreement.'}));
  const bills = [
    {id:'b1',provider:'Bright Energy',site:'s1',category:'Electricity',net:682,vat:136.4,date:dateAfter(-8),due:dateAfter(6),reference:'BE-10482',status:'Needs review',account:'445',flag:'Usage is 18% above the previous sample period.'},
    {id:'b2',provider:'Connect Fibre',site:'s1',category:'Broadband',net:49,vat:9.8,date:dateAfter(-5),due:dateAfter(9),reference:'CF-8021',status:'Approved',account:'445'},
    {id:'b3',provider:'Green Loop',site:'s2',category:'Waste & recycling',net:210,vat:42,date:dateAfter(-6),due:dateAfter(8),reference:'GL-2914',status:'Needs review',account:'445'},
    {id:'b4',provider:'Clearwater Business',site:'s1',category:'Water',net:92,vat:0,date:dateAfter(-10),due:dateAfter(4),reference:'CW-5208',status:'Approved',account:'445'},
    {id:'b5',provider:'Bright Energy',site:'s2',category:'Electricity',net:1150,vat:230,date:dateAfter(-20),due:dateAfter(-6),reference:'BE-10362',status:'Paid',account:'445'},
    {id:'b6',provider:'Cover Collective',site:'s2',category:'Insurance',net:124,vat:0,date:dateAfter(-18),due:dateAfter(-4),reference:'CC-8109',status:'Paid',account:'490'}
  ];
  return {version:1,profile:{business:'The Good Company',name:'Alex',email:'',sector:'Hospitality'},sites,services,bills,cases:[],shortlist:[],documents:[],activity:[{id:'a1',date:new Date().toISOString(),text:'Welcome to your UtilityOS example workspace.'}],preferences:{renewalDays:30,billAlerts:true,weeklyDigest:false},onboarded:false};
}
export const offers = [
 {id:'q1',category:'Electricity',provider:'Bright Energy',plan:'Business Flex 12',monthly:542.68,term:12,setup:0,green:true,notice:30,detail:'Illustrative 12-month electricity contract. Estimate assumes 24,000 kWh/year; actual quotes require meter and usage data.',features:['Renewable electricity option','Monthly billing','Usage reporting'],unit:'26.1p / kWh',standing:'68p / day'},
 {id:'q2',category:'Electricity',provider:'Northstar Power',plan:'Fixed & Simple 24',monthly:522.20,term:24,setup:0,green:false,notice:60,detail:'Illustrative fixed-rate plan. Estimate assumes 24,000 kWh/year. Exit terms and actual pricing require a supplier quote.',features:['Fixed unit rate','Dedicated business support','24-month price certainty'],unit:'25.0p / kWh',standing:'73p / day'},
 {id:'q3',category:'Electricity',provider:'Evergreen Supply',plan:'Green Business 12',monthly:557.29,term:12,setup:0,green:true,notice:30,detail:'Illustrative renewable electricity plan. Estimate assumes 24,000 kWh/year.',features:['Renewable electricity option','Monthly meter insights','12-month commitment'],unit:'26.8p / kWh',standing:'70p / day'},
 {id:'q4',category:'Broadband',provider:'Connect Fibre',plan:'Business Fibre 300',monthly:39,term:24,setup:49,green:false,notice:30,detail:'Illustrative fibre package. Availability depends on postcode, site survey and installation capacity.',features:['300 Mbps download','Static IP option','Business support'],unit:'300 Mbps',standing:'£49 installation'},
 {id:'q5',category:'Broadband',provider:'BlueLine',plan:'Always On 500',monthly:55,term:12,setup:0,green:false,notice:30,detail:'Illustrative connectivity plan. Check postcode availability and service-level terms before contracting.',features:['500 Mbps download','4G backup option','Priority fault handling'],unit:'500 Mbps',standing:'No setup fee'},
 {id:'q6',category:'Waste & recycling',provider:'Green Loop',plan:'Circular Business',monthly:112,term:12,setup:0,green:true,notice:30,detail:'Illustrative weekly general waste and recycling collection. Final pricing depends on bin sizes and collection schedule.',features:['Separate recycling','Weekly collection','Collection records'],unit:'Weekly collection',standing:'Bins included'},
 {id:'q7',category:'Card payments',provider:'CounterPay',plan:'Counter Essentials',monthly:25,term:12,setup:0,green:false,notice:30,detail:'Illustrative terminal rental only. Card processing is an additional 1.2% of transaction value plus 5p per transaction; this is not a total processing cost comparison.',features:['Contactless terminal','EPOS compatibility','Settlement reporting'],unit:'1.2% + 5p / transaction',standing:'£25 terminal / month'},
 {id:'q8',category:'Insurance',provider:'Cover Collective',plan:'Hospitality Essentials',monthly:78,term:12,setup:0,green:false,notice:30,detail:'Illustrative premium only, not an insurance recommendation or offer. Cover limits, exclusions, taxes and suitability require an authorised broker review.',features:['Liability cover options','Contents cover options','Business interruption options'],unit:'Subject to underwriting',standing:'Broker review required'},
 {id:'q9',category:'Water',provider:'Clearwater Business',plan:'Water Simplified',monthly:85,term:12,setup:0,green:false,notice:30,detail:'Illustrative water and wastewater estimate. Eligibility and price depend on region, meter and consumption.',features:['Consolidated statements','Meter reading reminders','Leak investigation support'],unit:'Usage based',standing:'Quote required'},
 {id:'q10',category:'Gas',provider:'Northstar Power',plan:'Business Gas 12',monthly:197.84,term:12,setup:0,green:false,notice:30,detail:'Illustrative gas estimate based on 30,000 kWh/year. Meter details required for a firm offer.',features:['Fixed unit rate','Monthly statement','Meter readings portal'],unit:'7.5p / kWh',standing:'34p / day'}
];
export function summary(data,site='all') {
 const services=data.services.filter(s=>site==='all'||s.site===site), bills=data.bills.filter(b=>site==='all'||b.site===site);
 return {monthly:services.filter(s=>s.status!=='Scheduled').reduce((a,s)=>a+s.monthly,0), scheduled:services.filter(s=>s.status==='Scheduled').reduce((a,s)=>a+s.monthly,0),annual:services.reduce((a,s)=>a+s.monthly*12,0),services:services.length,review:bills.filter(b=>b.status==='Needs review').length,due:bills.filter(b=>!['Paid','Disputed'].includes(b.status)).reduce((a,b)=>a+b.net+b.vat,0)};
}
export function csvEncode(rows) { return rows.map(row=>row.map(v=>{let s=String(v??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}).join(',')).join('\r\n'); }
export function parseCSV(text) { const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);if(row.some(x=>x.trim()))rows.push(row);row=[];cell='';}else cell+=c;} if(quoted)throw new Error('Unclosed quote in CSV.');row.push(cell);if(row.some(x=>x.trim()))rows.push(row);return rows; }
export function invoiceRows(bills,sites) { return [['Supplier','Reference','Site','Invoice date','Due date','Category','Net GBP','VAT GBP','Gross GBP','Account code','Status'],...bills.map(b=>[b.provider,b.reference,sites.find(s=>s.id===b.site)?.name,b.date,b.due,b.category,b.net.toFixed(2),b.vat.toFixed(2),(b.net+b.vat).toFixed(2),b.account,b.status])]; }
export function validWorkspace(d) {
 try {
  const str=v=>typeof v==='string', amount=v=>Number.isFinite(v)&&v>=0;
  const date=v=>str(v)&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&!isNaN(new Date(v))&&new Date(v).toISOString().slice(0,10)===v;
  const list=k=>Array.isArray(d[k])&&d[k].length<=10000;
  if(d?.version!==1||!['sites','services','bills','cases','shortlist','documents','activity'].every(list))return false;
  if(!d.profile||!['name','business','email','sector'].every(k=>str(d.profile[k]))||!d.profile.name.trim()||!d.profile.business.trim())return false;
  if(!d.preferences||!Number.isInteger(d.preferences.renewalDays)||d.preferences.renewalDays<0||d.preferences.renewalDays>365)return false;
  if(!d.sites.length||!d.sites.every(s=>['id','name','type','address','postcode'].every(k=>str(s[k]))&&date(s.opening)&&amount(s.budget)&&Array.isArray(s.checks)&&s.checks.length===checklist.length&&s.checks.every(c=>typeof c==='boolean')&&['Trading','Opening soon'].includes(s.status)))return false;
  const ids=new Set(d.sites.map(s=>s.id));if(ids.size!==d.sites.length)return false;
  if(!d.services.every(s=>['id','provider','reference','notes'].every(k=>str(s[k]))&&categories.includes(s.category)&&ids.has(s.site)&&amount(s.monthly)&&date(s.renewal)&&Number.isInteger(s.notice)&&s.notice>=0&&s.notice<=365&&['Active','Renewal due','Scheduled'].includes(s.status)))return false;
  if(!d.bills.every(b=>['id','provider','reference','account'].every(k=>str(b[k]))&&ids.has(b.site)&&categories.includes(b.category)&&amount(b.net)&&amount(b.vat)&&date(b.date)&&date(b.due)&&['Needs review','Approved','Paid','Disputed'].includes(b.status)&&(b.flag===undefined||str(b.flag))))return false;
  if(!d.cases.every(c=>['id','subject','provider','message'].every(k=>str(c[k]))&&ids.has(c.site)&&date(c.date)&&['Draft','Complete'].includes(c.status)))return false;
  if(!d.documents.every(x=>str(x.id)&&str(x.name)&&amount(x.size)&&date(x.date)))return false;
  if(!d.activity.every(x=>str(x.id)&&str(x.text)&&str(x.date)&&!isNaN(new Date(x.date))))return false;
  if(!d.shortlist.every(x=>str(x)&&offers.some(o=>o.id===x)))return false;
  return ['services','bills','cases','documents','activity'].every(k=>new Set(d[k].map(x=>x.id)).size===d[k].length);
 } catch { return false; }
}
