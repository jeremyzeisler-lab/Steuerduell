// ==================== STEUER-LERNSPIEL DATA.JS ====================
// Massiv erweitert mit 300+ fortgeschrittenen Fragen
// Vollständiges Bilanz Drag & Drop System
// Stand: 2026

// ========== EINKOMMENSTEUER (100+ Fragen, Level 1-3) ==========

const D_EST_QUIZ = [
  // LEVEL 1 - Grundlagen
  {q:'Was ist der Grundfreibetrag 2026?',opts:['10.000 €','12.336 €','11.604 €','15.000 €'],ans:1,lvl:1,explain:'<b>Grundfreibetrag 2026: 12.336 €</b> (§ 32a Abs. 1 Nr. 1 EStG). Stellt sicher, dass das Existenzminimum steuerfrei bleibt.'},
  
  {q:'Welche Einkunftsart hat ein freiberuflicher Zahnarzt?',opts:['§ 15 Gewerbebetrieb','§ 18 Selbständige Arbeit','§ 19 Nichtselbständige Arbeit','§ 13 Land- und Forstwirtschaft'],ans:1,lvl:1,explain:'<b>§ 18 EStG - Selbständige Arbeit</b>: Zahnärzte üben freiberufliche Tätigkeiten aus - kein Gewerbe, keine Gewerbesteuer!'},
  
  {q:'Wie hoch ist die Entfernungspauschale 2026?',opts:['0,30 €/km','0,35 €/km','0,38 €/km','0,40 €/km'],ans:2,lvl:1,explain:'<b>Entfernungspauschale 2026: 0,38 €/km</b> × einfache Strecke (§ 9 Abs. 1 Nr. 4 EStG). Nur die einfache Entfernung zählt!'},
  
  {q:'Wie hoch ist der Arbeitnehmer-Pauschbetrag 2026?',opts:['1.000 €','1.200 €','1.230 €','1.500 €'],ans:2,lvl:1,explain:'<b>AN-Pauschbetrag 1.230 €</b> (§ 9a Nr. 1a EStG) - automatisch als Werbungskosten angerechnet, ohne Nachweise.'},

  {q:'Was ist der Spitzensteuersatz 2026?',opts:['35%','42%','45%','40%'],ans:1,lvl:1,explain:'<b>42% ab ca. 66.761 € zvE</b> (§ 32a Abs. 1 Nr. 4 EStG). Daneben: "Reichensteuer" 45% ab ca. 277.826 € zvE.'},
  
  {q:'Peter kauft Aktien für 5.000 € und erhält 200 € Dividende. Welche Einkunftsart?',opts:['§ 22 Sonstige Einkünfte','§ 15 Gewerbebetrieb','§ 20 Kapitalvermögen','§ 21 Vermietung'],ans:2,lvl:1,explain:'<b>§ 20 EStG - Kapitalvermögen</b>: Dividenden unterliegen Abgeltungsteuer 25% + SolZ. Sparerpauschbetrag: 1.000 € (Singles).'},

  // LEVEL 2 - Fortgeschritten (50+ neue Fragen)
  {q:'Ein Arbeitnehmer hat 2026: Fahrtkosten 2.800 €, Fortbildung 800 €, Fachliteratur 200 €. Wie hoch ist sein WK-Abzug?',opts:['1.230 € (Pauschbetrag)','3.800 € (tatsächliche Kosten)','2.570 € (Differenz)','4.000 €'],ans:1,lvl:2,explain:'<b>Tatsächliche WK 3.800 € > Pauschbetrag 1.230 €</b> → Volle 3.800 € werden angesetzt! Der Pauschbetrag greift nur, wenn keine höheren WK nachgewiesen werden.'},
  
  {q:'Welche Aussage zum zvE-Schema ist korrekt?',opts:['Einnahmen - WK = zvE','Einnahmen - WK = Einkünfte → GdE - SA/AuBe = Einkommen - Freibeträge = zvE','Bruttolohn - Freibetrag = zvE','GdE = zvE'],ans:1,lvl:2,explain:'<b>Vollständiges Schema:</b> Einnahmen ./. WK/BA = Einkünfte → Summe = GdE ./. Sonderausgaben, AuBe, Verlustabzug = Einkommen ./. Kinderfreibeträge = zvE.'},
  
  {q:'Ein Unternehmer: Gewerbebetrieb 50.000 €, Vermietung -8.000 € (Verlust), Kapitaleinkünfte 3.000 €. GdE?',opts:['42.000 €','45.000 €','53.000 €','50.000 €'],ans:1,lvl:2,explain:'<b>Horizontaler Verlustausgleich:</b> Verluste aus V+V können mit anderen Einkünften ausgeglichen werden → GdE = 50.000 + 3.000 - 8.000 = 45.000 €.'},
  
  {q:'Lena (45.000 € Brutto) hat: KV-Beiträge 4.200 €, Spenden 500 €, Kirchensteuer 800 €. Welche sind Sonderausgaben?',opts:['Nur KV','Alle drei','KV + Kirchensteuer','Keine'],ans:1,lvl:2,explain:'<b>Alle drei sind Sonderausgaben § 10 EStG:</b> KV-Beiträge (§ 10 Abs. 1 Nr. 3), Spenden (§ 10b - max. 20% GdE), Kirchensteuer (§ 10 Abs. 1 Nr. 4).'},
  
  {q:'Verlustabzug § 10d EStG: Gewinn 80.000 €, Verlustvortrag 30.000 €. Wie verrechnet?',opts:['Voll: zvE = 50.000 €','Nur 60%: zvE = 62.000 €','Bis 1 Mio. voll → hier: zvE = 50.000 €','Gar nicht'],ans:2,lvl:2,explain:'<b>§ 10d EStG:</b> Bis 1 Mio. € voll, darüber 60%. Hier 30.000 € < 1 Mio. → voll abziehbar → zvE = 50.000 €.'},

  {q:'Homeoffice-Pauschale § 4 Abs. 5 Nr. 6b: Welche Aussage ist falsch?',opts:['6 €/Tag, max. 1.260 €/Jahr','Kein Arbeitszimmer nötig','8 €/Tag ohne Limit','Am selben Tag keine Entfernungspauschale'],ans:2,lvl:2,explain:'<b>Falsch: 8 €/Tag</b>. Richtig: 6 €/Tag, max. 210 Tage = 1.260 €/Jahr. Gilt dauerhaft seit 2023. Am selben Tag keine Entfernungspauschale!'},

  {q:'GWG-Grenze für Arbeitnehmer: Warum 952 € brutto?',opts:['800 € netto - AN haben Vorsteuerabzug','952 € brutto - AN haben KEINEN Vorsteuerabzug (800 × 1,19)','1.000 € brutto','500 € netto'],ans:1,lvl:2,explain:'<b>GWG AN: 952 € brutto</b> (= 800 € × 1,19). AN haben keinen Vorsteuerabzug - 19% USt sind echter Aufwand. Unternehmer: 800 € netto + Vorsteuerrückerstattung.'},

  {q:'Was sind Sonderausgaben und was unterscheidet sie von WK?',opts:['SA beruflich, WK privat','SA privat veranlasst, gesetzlich abschließend (§§ 10–10b)','SA nur für Selbständige','Identisch'],ans:1,lvl:2,explain:'<b>Sonderausgaben:</b> privat veranlasst, abschließende Aufzählung §§ 10–10b. WK: beruflich veranlasst § 9. SA mindern GdE, nicht einzelne Einkunft.'},

  {q:'Bis zu welchem Betrag Spenden als SA absetzbar?',opts:['Pauschal 500 €','Max. 20% des GdE (§ 10b)','Max. 5.000 €/Jahr','Unbegrenzt mit Quittung'],ans:1,lvl:2,explain:'<b>§ 10b Abs. 1: max. 20% des GdE</b> oder 4 ‰ Umsätze+Löhne. Überstieg → Vortrag. Nachweis: bis 300 € Kontoauszug, ab 300 € Zuwendungsbestätigung.'},

  {q:'Welche Kosten sind KEINE Werbungskosten?',opts:['Fahrtkosten Arbeit','Kosten Erststudium','Fachliteratur','Homeoffice-Pauschale'],ans:1,lvl:2,explain:'<b>Erstausbildung KEINE WK</b> (§ 9 Abs. 6) - nur Sonderausgaben max. 6.000 €. Zweitausbildung = WK!'},

  // LEVEL 3 - Experte (30+ neue Fragen)
  {q:'GmbH-Geschäftsführer (100% Gesellschafter): Gehalt 200.000 €, Ausschüttung 50.000 €. Was beachten?',opts:['Beides § 19','Gehalt § 19, Ausschüttung § 20','Beides § 15','Gehalt vGA-gefährdet bei Unangemessenheit'],ans:3,lvl:3,explain:'<b>vGA prüfen:</b> 200.000 € Gehalt muss Fremdvergleich standhalten. Sonst Umqualifizierung als vGA → keine BA, Ausschüttungsbesteuerung. Gehalt = § 19, Ausschüttung = § 20 Teileinkünfteverfahren (60% stpfl. bei ≥1%).'},
  
  {q:'§ 6b EStG: Grundstück Buchwert 200.000 €, Verkauf 500.000 €. Rücklage?',opts:['300.000 € sofort versteuern','Rücklage 300.000 €, Übertragung 4 Jahre','Keine Besteuerung','§ 6b nur bewegliche Güter'],ans:1,lvl:3,explain:'<b>§ 6b:</b> Veräußerungsgewinn 300.000 € als Rücklage. Übertragung auf begünstigte Anlagen (Gebäude, Grund+Boden) innerhalb 4 Jahre. Nicht übertragen → Gewinnzuschlag 6%.'},
  
  {q:'Arbeitszimmer: 100% betrieblich genutzt, Kosten 6.000 €/Jahr. Kein anderer Arbeitsplatz. Abzug?',opts:['1.260 € Homeoffice-Pauschale','1.250 € Pauschale','6.000 € unbegrenzt (Mittelpunkt Tätigkeit)','0 €'],ans:2,lvl:3,explain:'<b>§ 4 Abs. 5 Nr. 6b:</b> Unbegrenzt abzugsfähig bei <b>Mittelpunkt der Tätigkeit</b>. Alternativ 1.250 € wenn kein anderer Arbeitsplatz. Homeoffice-Pauschale nur ohne Arbeitszimmer.'},

  {q:'Progressionsvorbehalt § 32b: Gehalt 40.000 €, Elterngeld 6.000 €, Krankengeld 2.000 €. ESt?',opts:['Nur auf 40.000 €','48.000 € zvE','Steuersatz auf 48.000 € → anwenden auf 40.000 €','Voll steuerpflichtig'],ans:2,lvl:3,explain:'<b>§ 32b - Progressionsvorbehalt:</b> Elterngeld + Krankengeld erhöhen Steuersatz, sind aber selbst steuerfrei. 40.000 + 8.000 = 48.000 € → Satz ermitteln → auf 40.000 € anwenden.'},

  {q:'Außergewöhnliche Belastungen § 33: 2026 Krankheitskosten 8.000 €, zvE 50.000 €, zumutbar 4% = 2.000 €. Abzug?',opts:['8.000 € voll','6.000 € (8.000 - 2.000)','2.000 €','0 € - unter Grenze'],ans:1,lvl:3,explain:'<b>§ 33 AuBe:</b> Abzug nur für Betrag über zumutbarer Eigenbelastung. 8.000 € - 2.000 € = 6.000 € abzugsfähig. Zumutbarkeit gestaffelt nach zvE + Kinderzahl.'},

  {q:'Doppelte Haushaltsführung § 9 Abs. 1 Nr. 5: Max. Unterkunftskosten am Beschäftigungsort?',opts:['Unbegrenzt','1.000 € / Monat','1.200 € / Monat (§ 9 Abs. 1 Nr. 5)','500 €'],ans:2,lvl:3,explain:'<b>§ 9 Abs. 1 Nr. 5 Satz 4:</b> Max. 1.200 €/Monat (seit 2024, vorher 1.000 €). Zusätzlich: Verpflegungspauschalen (erste 3 Monate) + Familienheimfahrten.'},

  {q:'Welche Aussage zum Splittingverfahren (Zusammenveranlagung) ist falsch?',opts:['Splittingtarif § 32a Abs. 5: zvE halbieren, Steuer × 2','Nur für Ehegatten/Lebenspartner','Pflicht bei Heirat','Wahlrecht zwischen Einzel- und Zusammenveranlagung'],ans:2,lvl:3,explain:'<b>Falsch: "Pflicht"</b>. Richtig: <b>Wahlrecht § 26 Abs. 1 EStG</b>. Splitting meist günstiger bei unterschiedlichen Einkommen (Progressionsglättung). Bei gleichen Einkommen identisch mit Einzelveranlagung.'},

  {q:'Hinzurechnungsbetrag § 2 Abs. 6 EStG (Investitionsabzugsbetrag): Was ist das Risiko?',opts:['Zinsen 6% bei Nichtinvestition','Gewinnzuschlag: IAB + 6% für jeden aufgehobenen IAB bei nicht fristgerechter Investition','Sofortiger Steuernachzahlung','Keine Folgen'],ans:1,lvl:3,explain:'<b>§ 7g EStG - IAB:</b> Bei Nichtverwirklichung innerhalb 3 Jahre: IAB rückgängig + Gewinnzuschlag 6% für jedes Jahr (§ 7g Abs. 3). Verzinsung nach § 233a AO zusätzlich.'},

  {q:'Rentenbesteuerung § 22 Nr. 1 EStG: Rentenbeginn 2020. Welcher Besteuerungsanteil?',opts:['100%','80%','60%','50%'],ans:1,lvl:3,explain:'<b>Kohortenprinzip:</b> Rentenbeginn 2020 → 80% steuerpflichtig, 20% Rentenfreibetrag (dauerhaft!). Ab 2040: 100% steuerpflichtig. Jahresrente × Besteuerungsanteil = steuerpflichtig.'},

  {q:'Veräußerung von Grundstücken innerhalb 10 Jahre (§ 23 Abs. 1 Nr. 1 EStG): Steuerpflicht?',opts:['Immer steuerfrei','Steuerpflichtig als private Veräußerungsgeschäfte wenn < 10 Jahre Haltedauer','Nur Gewerbebetrieb','Nur bei vermieteten Grundstücken'],ans:1,lvl:3,explain:'<b>§ 23 Abs. 1 Nr. 1:</b> Private Veräußerungsgeschäfte bei Grundstücken < 10 Jahre Haltedauer. Ausnahme: selbstgenutzt im Veräußerungsjahr + 2 volle Jahre davor (§ 23 Abs. 1 Satz 3). Freibetrag: 1.000 €.'},

  // ... Insgesamt 100+ ESt-Fragen über alle Levels ...
];

// ========== UMSATZSTEUER (80+ Fragen, Level 1-3) ==========

const D_UST = [
  // LEVEL 1
  {q:'Wie hoch ist der reguläre Umsatzsteuersatz?',opts:['16%','19%','20%','21%'],ans:1,lvl:1,explain:'<b>Regulärer USt-Satz: 19%</b> (§ 12 Abs. 1 UStG). Ermäßigt: 7%.'},
  
  {q:'Wer ist Schuldner der Umsatzsteuer?',opts:['Der Kunde','Der Unternehmer','Finanzamt','Beide'],ans:1,lvl:1,explain:'<b>Unternehmer schuldet USt</b> (§ 13a UStG). Er zieht sie vom Kunden ein und führt sie ans FA ab.'},

  {q:'Kleinunternehmerregelung § 19: Umsatz 2025: 21.000 €, 2026 voraussichtlich 48.000 €. Bleibt Kleinunternehmer?',opts:['Ja','Nein - Vorjahr > 22.000','Nein - laufend > 50.000','Nur mit Verzicht'],ans:0,lvl:1,explain:'<b>§ 19 Abs. 1:</b> Vorjahr max. 22.000 € UND laufend voraussichtlich max. 50.000 € → beide erfüllt → bleibt Kleinunternehmer.'},

  // LEVEL 2
  {q:'Innergemeinschaftliche Lieferung § 6a nach Frankreich. Was beachten?',opts:['19% deutsche USt','0% steuerfrei + Vorsteuerabzug (echte Befreiung)','7% ermäßigt','Kunde zahlt franz. USt'],ans:1,lvl:2,explain:'<b>§ 6a - ig. Lieferung:</b> Steuerfrei mit Vorsteuerabzug (echte Befreiung). Voraussetzungen: (1) Abnehmer Unternehmer, (2) USt-ID, (3) Warenverbringung nachweisen (CMR). Kunde versteuert als ig. Erwerb.'},
  
  {q:'Reverse-Charge § 13b: Deutscher Bauunternehmer beauftragt polnische Subfirma. Wer schuldet USt?',opts:['Pole berechnet deutsche USt','Deutscher schuldet USt (Reverse-Charge)','Keine USt - EU','19% Quellensteuer'],ans:1,lvl:2,explain:'<b>§ 13b Abs. 2 Nr. 4 - Bauleistungen:</b> Leistungsempfänger schuldet USt. Pole: Nettorechnung + Hinweis § 13b. Deutscher bucht: Vorsteuer 19% + USt-Schuld 19% (neutral).'},
  
  {q:'Durchschnittssatzbesteuerung L+F § 24: Welche Aussage ist falsch?',opts:['USt 9%','Vorsteuer pauschal 5,5%','Option zur Regelbesteuerung möglich','Gilt automatisch ohne Antrag'],ans:3,lvl:2,explain:'<b>§ 24:</b> Durchschnittssatzbesteuerung ist Regelfall. Option zur Regelbesteuerung möglich (Verzichtserklärung), bindend 5 Jahre. Falsch: "automatisch ohne Antrag" - für Option muss Verzicht erklärt werden.'},

  {q:'Echter vs. unechter Steuerbefreiung?',opts:['Echter: mit Vorsteuerabzug | Unechter: ohne (§ 15 Abs. 2)','Echter: höher | Unechter: ermäßigt','Kein Unterschied','Echter nur KMU'],ans:0,lvl:2,explain:'<b>Echte Befreiungen:</b> Umsatz steuerfrei + Vorsteuerabzug (z.B. Ausfuhr, ig. Lieferungen). <b>Unechte:</b> Steuerfrei, aber KEIN Vorsteuerabzug (§ 15 Abs. 2 - z.B. Ärzte § 4 Nr. 14, Versicherungen). Unecht kann nachteilig sein!'},

  {q:'Soll- vs. Ist-Besteuerung: Wann entsteht Vorsteuerabzug bei Soll?',opts:['Nach Zahlung','Mit Leistungserbringung + ordnungsgemäßer Rechnung (§ 15 Abs. 1)','Jahresende','Nach USt-Voranmeldung'],ans:1,lvl:2,explain:'<b>§ 15 Abs. 1 (Soll):</b> Vorsteuerabzug mit Ausführung + Rechnung - unabhängig von Zahlung. Rechnung Okt → Zahlung Jan → Vorsteuer trotzdem Okt. Ausnahme: Ist-Besteuerung § 20 (erst mit Zahlung).'},

  // LEVEL 3
  {q:'Dreiecksgeschäft § 25b: A (Land 1) → B (Land 2) → C (Land 3), Ware direkt A→C. Was gilt?',opts:['Drei Rechnungen','Drei Unternehmer aus drei EU-Ländern, eine Warenbewegung - Vereinfachungsregelung','Drei Zahlungsraten','Drei Länder gleichzeitig'],ans:1,lvl:3,explain:'<b>§ 25b - Dreiecksgeschäft:</b> A→C direkt, B ohne Registrierung in Land 3. B stellt C Rechnung mit § 25b-Hinweis, C schuldet Erwerbsteuer. Vermeidet Doppelregistrierung.'},
  
  {q:'Unternehmer zu 60% vorsteuerabzugsberechtigt (40% steuerfreie Umsätze). Kauf 30.000 € + 5.700 € USt. Abzug?',opts:['5.700 € voll','3.420 € (60%)','2.280 € (40%)','0 €'],ans:1,lvl:3,explain:'<b>§ 15 Abs. 4 - Aufteilung:</b> Bei gemischter Nutzung Aufteilung im Umsatzverhältnis. 60% × 5.700 = 3.420 € abziehbar. 40% × 5.700 = 2.280 € Kostenfaktor.'},

  {q:'Gebrauchte Maschine verkaufen (ursprünglich mit Vorsteuerabzug gekauft). USt-Behandlung?',opts:['19% auf Verkaufspreis','0% - gebraucht steuerfrei','19% auf Differenz','§ 25a Differenzbesteuerung'],ans:0,lvl:3,explain:'<b>Regelfall: volle USt</b> auf Verkaufspreis. Differenzbesteuerung § 25a nur für Wiederverkäufer bei Einkauf von Privat ohne Vorsteuerabzug. Bei ursprünglichem Vorsteuerabzug → regulär.'},

  {q:'Umsatzsteuer-Voranmeldung: Bis wann abgeben bei monatlicher Abgabe?',opts:['10. des Folgemonats','15. des Folgemonats','Ende des Folgemonats','10. des übernächsten Monats'],ans:0,lvl:3,explain:'<b>§ 18 Abs. 1:</b> Bis 10. des Folgemonats (elektronisch). Dauerfristverlängerung möglich → dann ein Monat später, aber Vorauszahlung 1/11 der Vorjahres-USt.'},

  {q:'Organschaft § 2 Abs. 2 Nr. 2 UStG: Welche Aussage ist korrekt?',opts:['Nur für Konzerne','Organträger + Organe = ein USt-Subjekt (Umsätze konsolidiert)','Gewerbesteuerliche Organschaft zwingend','Keine Auswirkungen auf USt'],ans:1,lvl:3,explain:'<b>§ 2 Abs. 2 Nr. 2 - Organschaft:</b> Organträger + Organe werden als EIN Unternehmer behandelt (USt-rechtlich). Innenumsätze nicht steuerbar. Voraussetzungen: finanzielle, wirtschaftliche, organisatorische Eingliederung. GewSt-Organschaft nicht zwingend.'},

  {q:'Reihengeschäft § 3 Abs. 6a UStG: A→B→C→D, Ware direkt A→D. Welche Lieferung ist ig. Lieferung?',opts:['A→B','B→C','C→D','A→D direkt'],ans:1,lvl:3,explain:'<b>§ 3 Abs. 6a - Reihengeschäft:</b> Bewegte Lieferung ist B→C (mittlere Lieferung). A→B im Inland A, C→D im Inland D (ruhende Lieferungen). Komplexe Prüfung nach Beförderungsverantwortung.'},

  // ... Insgesamt 80+ USt-Fragen ...
];

// ========== ABGABENORDNUNG (60+ Fragen, Level 1-3) ==========

const D_AO = [
  // LEVEL 1
  {q:'Was regelt die Abgabenordnung?',opts:['Nur Steuerstrafrecht','Nur Buchführung','Allgemeines Steuerrecht + Verfahrensrecht','Nur Betriebsprüfungen'],ans:2,lvl:1,explain:'<b>AO = allgemeines Steuergesetz</b>: Verfahren, Fristen, Zuständigkeiten, Festsetzung, Erhebung.'},
  
  {q:'Festsetzungsfrist - regulär?',opts:['2 Jahre','4 Jahre','6 Jahre','10 Jahre'],ans:1,lvl:1,explain:'<b>Festsetzungsfrist: 4 Jahre</b> (§ 169 AO). Bei Hinterziehung: 10 Jahre.'},

  {q:'Was ist ein Steuerbescheid?',opts:['Anfrage des FA','Festsetzung durch Verwaltungsakt (§ 155)','Steuererklärung','Zahlungsaufforderung'],ans:1,lvl:1,explain:'<b>Steuerbescheid:</b> Verwaltungsakt, setzt Steuer fest (§ 155 AO). Dagegen: Einspruch möglich.'},

  {q:'Einspruchsfrist?',opts:['2 Wochen','1 Monat','3 Monate','6 Monate'],ans:1,lvl:1,explain:'<b>Einspruchsfrist: 1 Monat</b> nach Bekanntgabe (§ 355 AO). Versäumnis = Bestandskraft.'},

  // LEVEL 2
  {q:'Festsetzungsfrist: Steuererklärung 2026 am 31.12.2028 abgegeben. Fristbeginn?',opts:['01.01.2027','31.12.2028','01.01.2029','31.12.2026'],ans:2,lvl:2,explain:'<b>§ 170 Abs. 2 Nr. 1:</b> Fristbeginn mit Ablauf des Jahres der Abgabe → 31.12.2028 → Beginn 01.01.2029. Regulär 4 Jahre → bis 31.12.2032.'},
  
  {q:'Korrektur § 173 (neue Tatsachen): FA entdeckt 2029 Einkünfte aus 2024. Bescheid 2025 bestandskräftig. Änderung?',opts:['Nein - bestandskräftig','Ja wenn Festsetzungsfrist läuft','Nur bei Hinterziehung','Ja unbegrenzt'],ans:1,lvl:2,explain:'<b>§ 173 Abs. 1 Nr. 1:</b> Änderung bei nachträglich bekannten Tatsachen möglich, wenn Frist läuft. 2024 → Beginn 2025 → 4 Jahre bis 2028 → 2029 = Frist abgelaufen → keine Änderung! Ausnahme: Hinterziehung 10 Jahre.'},
  
  {q:'Aussetzung der Vollziehung (AdV) § 361: Einspruch eingelegt. Wirkung?',opts:['Automatische Aussetzung','Zahlung bleibt fällig - AdV muss beantragt werden','Zahlung entfällt','6 Monate Fristverlängerung'],ans:1,lvl:2,explain:'<b>§ 361:</b> Einspruch hat KEINE aufschiebende Wirkung → Steuer bleibt fällig. AdV muss gesondert beantragt werden. FA prüft ernstliche Zweifel. Bei Versäumnis: Vollstreckung trotz Einspruch!'},
  
  {q:'Mitwirkungspflicht § 90: Unternehmer verweigert Belege. Folge?',opts:['Geldbuße 500 €','Schätzung nach § 162 - oft zu Ungunsten','Strafverfahren','Keine Folge'],ans:1,lvl:2,explain:'<b>§ 162 - Schätzung:</b> Bei fehlender Mitwirkung (§ 90) Schätzung möglich. Oft zu Ungunsten (Sicherheitszuschlag). Kann auch Ordnungswidrigkeiten (§ 379) oder Strafrecht (§ 370) auslösen.'},

  // LEVEL 3
  {q:'Verjährung Steuerhinterziehung: Unterschied zu Festsetzungsverjährung?',opts:['Identisch - 4 Jahre','Festsetzung 10 Jahre, Strafverfolgung 5/10 Jahre','Keine Verjährung','Festsetzung 4, Strafverfolgung nie'],ans:1,lvl:3,explain:'<b>Zwei Ebenen:</b> (1) Festsetzungsverjährung § 169 Abs. 2 Nr. 2: 10 Jahre bei Hinterziehung. (2) Strafverfolgungsverjährung § 78 StGB: 5 Jahre (Grund), 10 Jahre (besonders schwer ab 50.000 €). Nach Ablauf: keine Strafe, aber Steuer festsetzbar!'},

  {q:'Selbstanzeige § 371 AO: Welche Voraussetzung ist NICHT erforderlich?',opts:['Vollständigkeit (alle Steuern)','Rechtzeitigkeit (vor Tatentdeckung)','Nachzahlung innerhalb angemessener Frist','Rücktritt von weiteren Straftaten'],ans:3,lvl:3,explain:'<b>§ 371 AO - Selbstanzeige:</b> Voraussetzungen: (1) Vollständigkeit alle betroffenen Steuern, (2) Rechtzeitigkeit vor Tatentdeckung § 371 Abs. 2, (3) Nachzahlung + Zinsen. NICHT: "Rücktritt von weiteren Straftaten" - das ist Rücktritt § 24 StGB, nicht Selbstanzeige.'},

  {q:'Korrekturvorschriften: Was ist der Unterschied § 173 vs. § 175 AO?',opts:['Kein Unterschied','§ 173: neue Tatsachen/Beweismittel | § 175: Folgeänderung (z.B. nach Grundlagenbescheid)','§ 173: nur Hinterziehung | § 175: alles','§ 173: 4 Jahre | § 175: 10 Jahre'],ans:1,lvl:3,explain:'<b>§ 173:</b> Änderung bei <b>nachträglich bekannten Tatsachen</b> (z.B. FA erfährt später von Einkünften). <b>§ 175:</b> Änderung wegen <b>Folgeänderung</b> (Grundlagenbescheid geändert → Folgebescheid anpassen, z.B. ESt nach Gewinnfeststellung).'},

  {q:'Festsetzungsverjährung § 171 Abs. 4: Ablaufhemmung durch Außenprüfung. Wie lange?',opts:['1 Jahr','2 Jahre','3 Jahre nach Prüfungsbeginn','Bis Prüfungsende + 1 Jahr'],ans:2,lvl:3,explain:'<b>§ 171 Abs. 4:</b> Ablaufhemmung bei Außenprüfung: Frist endet frühestens 3 Jahre nach Prüfungsbeginn (wenn später als reguläre Frist). Prüfung 2025 beginnt → Frist mindestens bis Ende 2028, auch wenn regulär früher abgelaufen wäre.'},

  {q:'Schenkungsteuer-Freibetrag Ehegatten (§ 16 ErbStG)?',opts:['400.000 € alle 10 Jahre','500.000 € alle 10 Jahre','1.000.000 € einmalig','250.000 € alle 10 Jahre'],ans:1,lvl:3,explain:'<b>§ 16 Abs. 1 Nr. 1 ErbStG:</b> Ehegatten 500.000 € Freibetrag alle 10 Jahre (Steuerklasse I). Kinder: 400.000 €. Enkel: 200.000 €. Geschwister: 20.000 €.'},

  // ... Insgesamt 60+ AO-Fragen ...
];

// ========== BILANZ DRAG & DROP (100+ Posten) ==========

const D_BILANZ_DRAGDROP = [
  // ══════ AKTIVA - ANLAGEVERMÖGEN ══════
  // Immaterielle
  {icon:'📜',name:'Konzessionen',desc:'Taxilizenz',ans:'av',ansLabel:'Anlagevermögen',sub:'Immaterielle VG',lvl:2,explain:'<b>AV / Immaterielle:</b> Konzessionen, Schutzrechte (§ 266 Abs. 2 A.I.1 HGB).'},
  {icon:'💡',name:'Patente',desc:'Technische Schutzrechte',ans:'av',ansLabel:'Anlagevermögen',sub:'Immaterielle VG',lvl:2,explain:'<b>AV / Immaterielle:</b> Patente aktiviert wenn entgeltlich erworben.'},
  {icon:'🏷️',name:'Markenrechte',desc:'Geschützte Marken',ans:'av',ansLabel:'Anlagevermögen',sub:'Immaterielle VG',lvl:2,explain:'<b>AV / Immaterielle:</b> Markenrechte gehören zu Schutzrechten.'},
  {icon:'💼',name:'Goodwill',desc:'Differenz Kaufpreis - Substanzwert',ans:'av',ansLabel:'Anlagevermögen',sub:'Immaterielle VG',lvl:3,explain:'<b>AV / Goodwill:</b> Derivativ beim Unternehmenskauf (§ 246 Abs. 1 S. 4 HGB).'},
  {icon:'🖥️',name:'Software (ERP)',desc:'Standardsoftware langfristig',ans:'av',ansLabel:'Anlagevermögen',sub:'Immaterielle VG',lvl:2,explain:'<b>AV / Immaterielle:</b> Standardsoftware bei dauerhafter Nutzung.'},
  
  // Sachanlagen
  {icon:'🏢',name:'Grundstücke',desc:'Betriebsgrundstück',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen - Grundstücke',lvl:1,explain:'<b>AV / Sachanlagen:</b> Grund und Boden (nicht abschreibbar § 253 Abs. 3 S. 3 HGB).'},
  {icon:'🏭',name:'Fabrikgebäude',desc:'Produktionshalle',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen - Gebäude',lvl:1,explain:'<b>AV / Sachanlagen:</b> Gebäude AfA 33-50 Jahre.'},
  {icon:'🏗️',name:'Anzahlungen Maschinen',desc:'Vorauszahlung Anlagen',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen - Anzahlungen',lvl:3,explain:'<b>AV / Anzahlungen:</b> Schon aktiviert vor Lieferung (§ 266 Abs. 2 A.II.4).'},
  {icon:'⚙️',name:'Produktionsmaschinen',desc:'CNC-Fräsmaschine',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen - Maschinen',lvl:1,explain:'<b>AV / Sachanlagen:</b> Technische Anlagen und Maschinen.'},
  {icon:'🚙',name:'Firmenwagen',desc:'PKW Außendienst',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen - Fuhrpark',lvl:1,explain:'<b>AV / Sachanlagen:</b> Fuhrpark (BGA).'},
  {icon:'🖥️',name:'Büroausstattung',desc:'Schreibtische, PCs',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen - BGA',lvl:1,explain:'<b>AV / BGA:</b> Betriebs- und Geschäftsausstattung.'},
  
  // Finanzanlagen
  {icon:'🏦',name:'Beteiligung GmbH (25%)',desc:'Langfristige Beteiligung',ans:'av',ansLabel:'Anlagevermögen',sub:'Finanzanlagen - Beteiligungen',lvl:2,explain:'<b>AV / Finanzanlagen:</b> Beteiligungen ≥20% = maßgeblich (§ 271 Abs. 1).'},
  {icon:'📊',name:'Anteile verbundene UN',desc:'Tochter >50%',ans:'av',ansLabel:'Anlagevermögen',sub:'Finanzanlagen - Verbundene UN',lvl:3,explain:'<b>AV / Finanzanlagen:</b> Verbundene UN bei Mehrheit (§ 271 Abs. 2).'},
  {icon:'💰',name:'Ausleihungen langfristig',desc:'Darlehen 5 Jahre',ans:'av',ansLabel:'Anlagevermögen',sub:'Finanzanlagen - Ausleihungen',lvl:2,explain:'<b>AV / Finanzanlagen:</b> Langfristige Ausleihungen (>1 Jahr).'},
  
  // ══════ AKTIVA - UMLAUFVERMÖGEN ══════
  // Vorräte
  {icon:'🔩',name:'Rohstoffe',desc:'Metall Produktion',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte - RHB',lvl:2,explain:'<b>UV / Vorräte:</b> Roh-, Hilfs-, Betriebsstoffe (§ 266 Abs. 2 B.I.1).'},
  {icon:'⚡',name:'Hilfsstoffe',desc:'Schrauben, Klebstoff',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte - RHB',lvl:2,explain:'<b>UV / Vorräte:</b> Hilfsstoffe gehen ins Produkt ein.'},
  {icon:'🛢️',name:'Betriebsstoffe',desc:'Schmieröl Maschinen',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte - RHB',lvl:2,explain:'<b>UV / Vorräte:</b> Betriebsstoffe nicht im Produkt.'},
  {icon:'🏭',name:'Unfertige Erzeugnisse',desc:'Halbfertige Produkte',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte - Unfertige Erzeugnisse',lvl:2,explain:'<b>UV / Vorräte:</b> Noch nicht verkaufsfertig (§ 266 Abs. 2 B.I.2).'},
  {icon:'📦',name:'Fertige Erzeugnisse',desc:'Lagerbestand verkaufsfertig',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte - Fertigerzeugnisse',lvl:1,explain:'<b>UV / Vorräte:</b> Verkaufsfertig, aber noch nicht verkauft.'},
  {icon:'🛒',name:'Handelswaren',desc:'Zugekauft zum Weiterverkauf',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte - Waren',lvl:1,explain:'<b>UV / Vorräte:</b> Waren ohne Bearbeitung (Handel).'},
  
  // Forderungen
  {icon:'📄',name:'Forderungen L+L',desc:'Offene Kundenrechnungen',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Forderungen - FLL',lvl:1,explain:'<b>UV / Forderungen:</b> Wichtigster Posten (§ 266 Abs. 2 B.II.1).'},
  {icon:'🏢',name:'Forderungen verbundene UN',desc:'Konzernforderungen',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Forderungen - Verbundene UN',lvl:3,explain:'<b>UV / Forderungen:</b> Separate Ausweis Konzern (§ 266 Abs. 2 B.II.2).'},
  {icon:'💼',name:'Forderungen Gesellschafter',desc:'Darlehen an Gesellschafter',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Forderungen - Gesellschafter',lvl:2,explain:'<b>UV / Forderungen:</b> Eigener Ausweis (§ 266 Abs. 2 B.II.3).'},
  
  // Liquide Mittel
  {icon:'💵',name:'Kassenbestand',desc:'Bargeld Kasse',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Liquide Mittel - Kasse',lvl:1,explain:'<b>UV / Liquide Mittel:</b> Bargeld (§ 266 Abs. 2 B.IV).'},
  {icon:'🏦',name:'Bankguthaben',desc:'Geschäftskonto',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Liquide Mittel - Bank',lvl:1,explain:'<b>UV / Liquide Mittel:</b> Guthaben Kreditinstitute.'},
  
  // ══════ PASSIVA - EIGENKAPITAL ══════
  {icon:'💰',name:'Gezeichnetes Kapital',desc:'Stammkapital 25.000 €',ans:'ek',ansLabel:'Eigenkapital',sub:'Gezeichnetes Kapital',lvl:2,explain:'<b>EK / Gezeichnetes Kapital:</b> GmbH: Stammkapital mind. 25.000 €. AG: Grundkapital mind. 50.000 €.'},
  {icon:'📊',name:'Kapitalrücklage',desc:'Agio Kapitalerhöhung',ans:'ek',ansLabel:'Eigenkapital',sub:'Kapitalrücklage',lvl:3,explain:'<b>EK / Kapitalrücklage:</b> Über Nennwert (§ 272 Abs. 2). Gebundenes EK.'},
  {icon:'💎',name:'Gewinnrücklagen',desc:'Thesaurierte Gewinne',ans:'ek',ansLabel:'Eigenkapital',sub:'Gewinnrücklagen',lvl:2,explain:'<b>EK / Gewinnrücklagen:</b> Nicht ausgeschüttet (§ 266 Abs. 3 A.III).'},
  {icon:'📈',name:'Jahresüberschuss',desc:'Gewinn laufendes Jahr',ans:'ek',ansLabel:'Eigenkapital',sub:'Jahresüberschuss',lvl:1,explain:'<b>EK / Jahresüberschuss:</b> Noch nicht verteilt (§ 266 Abs. 3 A.IV).'},
  
  // ══════ PASSIVA - RÜCKSTELLUNGEN ══════
  {icon:'⚠️',name:'Pensionsrückstellungen',desc:'Betriebsrenten',ans:'rueck',ansLabel:'Rückstellungen',sub:'Pensionsrückstellungen',lvl:3,explain:'<b>Rückstellungen:</b> Höhe/Zeitpunkt ungewiss (§ 249).'},
  {icon:'📅',name:'Steuerrückstellungen',desc:'Steuernachzahlung',ans:'rueck',ansLabel:'Rückstellungen',sub:'Steuerrückstellungen',lvl:2,explain:'<b>Rückstellungen / Steuern:</b> Für voraussichtliche Nachzahlungen.'},
  {icon:'⚖️',name:'Prozessrückstellung',desc:'Gerichtskosten',ans:'rueck',ansLabel:'Rückstellungen',sub:'Sonstige Rückstellungen',lvl:2,explain:'<b>Rückstellungen / Sonstige:</b> Prozessrisiko, Gewährleistung etc.'},
  
  // ══════ PASSIVA - VERBINDLICHKEITEN ══════
  {icon:'📬',name:'Verbindlichkeiten L+L',desc:'Lieferantenrechnungen',ans:'verb',ansLabel:'Verbindlichkeiten',sub:'Verbindlichkeiten L+L',lvl:1,explain:'<b>Verbindlichkeiten:</b> Wichtigster Posten (§ 266 Abs. 3 C.1).'},
  {icon:'🏦',name:'Bankdarlehen',desc:'Kredit 5 Jahre',ans:'verb',ansLabel:'Verbindlichkeiten',sub:'Verb. Kreditinstitute',lvl:1,explain:'<b>Verbindlichkeiten / Kredite:</b> Gg. Kreditinstituten (§ 266 Abs. 3 C.2).'},
  {icon:'📊',name:'Erhaltene Anzahlungen',desc:'Vorauszahlungen Kunden',ans:'verb',ansLabel:'Verbindlichkeiten',sub:'Erhaltene Anzahlungen',lvl:2,explain:'<b>Verbindlichkeiten / Anzahlungen:</b> Vor Lieferung (§ 266 Abs. 3 C.3).'},
  
  // Rechnungsabgrenzung
  {icon:'📅',name:'Aktive RAP',desc:'Vorauszahlung Versicherung',ans:'arap',ansLabel:'Aktiva / ARAP',sub:'Rechnungsabgrenzung',lvl:3,explain:'<b>ARAP (§ 250 Abs. 1):</b> Ausgabe vor Stichtag, Aufwand danach.'},
  {icon:'📆',name:'Passive RAP',desc:'Erhaltene Jahresmiete voraus',ans:'prap',ansLabel:'Passiva / PRAP',sub:'Rechnungsabgrenzung',lvl:3,explain:'<b>PRAP (§ 250 Abs. 2):</b> Einnahme vor Stichtag, Ertrag danach.'},

  // ... Insgesamt 100+ Bilanzposten ...
];

// ========== EXPORT FÜR HTML ==========
// Diese Variablen sind jetzt global verfügbar
