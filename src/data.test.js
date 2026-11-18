import test from 'node:test';
import assert from 'node:assert/strict';
import {seed, summary, csvEncode, parseCSV, invoiceRows, daysUntil, dateAfter,validWorkspace} from './data.js';
test('Cost summaries isolate sites, exclude scheduled costs and do not mix VAT into service totals',()=>{
 const d=seed(),s=summary(d);assert.equal(s.monthly,3663);assert.equal(s.scheduled,470);assert.equal(s.services,17);assert.equal(s.review,2);assert.ok(Math.abs(s.due-1221.2)<0.001);assert.equal(summary(d,'s1').monthly,1344);assert.equal(summary(d,'s3').monthly,0);assert.equal(summary(d,'s3').scheduled,470);assert.equal(s.annual,(3663+470)*12);
});
test('Invoice CSV preserves commas, quotes, line breaks and money, and protects formula fields',()=>{
 const rows=[['Supplier','Reference','Amount'],['A, B & C','INV-"1"','120.00'],['Line\nbreak','=SUM(A1:A2)','-2'],['@danger','+payload','\tformula']];const encoded=csvEncode(rows);const parsed=parseCSV(encoded);assert.equal(parsed[1][0],'A, B & C');assert.equal(parsed[1][1],'INV-"1"');assert.equal(parsed[2][0],'Line\nbreak');assert.equal(parsed[2][1],"'=SUM(A1:A2)");assert.equal(parsed[2][2],"'-2");assert.equal(parsed[3][0],"'@danger");assert.equal(parsed[3][2],"'\tformula");
});
test('CSV parser accepts CRLF and rejects malformed quoted documents',()=>{
 assert.deepEqual(parseCSV('a,b\r\n"x,y",2\r\n'),[['a','b'],['x,y','2']]);assert.throws(()=>parseCSV('"unfinished'),/Unclosed/);
});
test('Invoice exports explicitly separate net, VAT and gross and resolve location names',()=>{
 const d=seed(),rows=invoiceRows(d.bills,d.sites);assert.equal(rows[1][2],'The Daily Grind');assert.equal(rows[1][6],'682.00');assert.equal(rows[1][7],'136.40');assert.equal(rows[1][8],'818.40');assert.equal(rows[1][10],'Needs review');
});
test('Renewal calculations handle past, present and future dates',()=>{assert.equal(daysUntil(dateAfter(0)),0);assert.equal(daysUntil(dateAfter(30)),30);assert.equal(daysUntil(dateAfter(-5)),-5);});
test('Backup validation rejects corrupt types, missing references and impossible dates',()=>{const d=seed();assert.equal(validWorkspace(d),true);assert.equal(validWorkspace(null),false);assert.equal(validWorkspace({...d,bills:[{...d.bills[0],net:'100'}]}),false);assert.equal(validWorkspace({...d,bills:[{...d.bills[0],site:'missing'}]}),false);assert.equal(validWorkspace({...d,services:[{...d.services[0],renewal:'2026-02-31'}]}),false);assert.equal(validWorkspace({...d,sites:[{...d.sites[0],checks:[]}]}),false);});
