# 🎓 Steuer-Quizduell PLUS

## Fortgeschrittene Fragen (Level 1-3) • Bilanz Drag & Drop • 300+ Fragen

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Rechtsstand](https://img.shields.io/badge/Rechtsstand-2026-orange.svg)

---

## ⚠️ Rechtlicher Hinweis

**WICHTIG:** Dieses Lernspiel dient ausschließlich der **Prüfungsvorbereitung und allgemeinen Bildung**. Die Inhalte ersetzen **KEINE individuelle Steuer- oder Rechtsberatung**.

**Rechtsstand:** 2026 (basierend auf EStG, UStG, AO, HGB)  
**Alle Angaben ohne Gewähr.**

Maßgeblich sind stets die aktuellen Gesetzestexte und amtlichen Veröffentlichungen (BMF-Schreiben, BFH-Urteile).

Bei konkreten Steuerfragen: **Steuerberater, Rechtsanwalt** oder **Lohnsteuerhilfeverein** konsultieren.

---

## 🎯 Features

### ✅ Quiz-Modus mit 3 Schwierigkeitsstufen
- **Level 1 - Grundlagen:** Grundfreibetrag, Pauschbeträge, 7 Einkunftsarten
- **Level 2 - Fortgeschritten:** ZvE-Schema, Verlustabzug, Reverse-Charge, Festsetzungsfristen
- **Level 3 - Experte:** § 6b EStG, vGA, Progressionsvorbehalt, Selbstanzeige § 371 AO

### ✅ Bilanz Drag & Drop System
- **100+ Bilanzposten** aus allen Bereichen
- **5 Drop-Zonen:** Anlagevermögen, Umlaufvermögen, Eigenkapital, Rückstellungen, Verbindlichkeiten
- **Drag & Drop:** Ziehe Posten in die richtige Bilanzseite
- **Detaillierte Erklärungen:** Jeder Posten mit HGB-Paragraphen

### ✅ Live-Statistiken
- Gesamtpunkte
- Richtig/Falsch-Quote
- Beste Serie
- Anzahl Fragen pro Level

---

## 📦 Installation (GitHub Pages)

### Schritt 1: Repository erstellen
```bash
# Auf GitHub.com
1. Klicke auf "New Repository"
2. Name: z.B. "steuer-quizduell-plus"
3. Public ✓
4. Erstellen
```

### Schritt 2: Dateien hochladen
Lade diese **3 Dateien** in dein Repository:
```
index.html
data.js
app.js
```

### Schritt 3: GitHub Pages aktivieren
```
1. Settings (Repository)
2. Pages (linke Sidebar)
3. Source: "Deploy from a branch"
4. Branch: main
5. Folder: / (root)
6. Save
```

### Schritt 4: Fertig! 🎉
Deine App ist live unter:
```
https://DEIN-USERNAME.github.io/steuer-quizduell-plus/
```

---

## 🚀 Lokal testen (ohne GitHub)

```bash
# Alle 3 Dateien in einen Ordner legen:
/mein-ordner/
├── index.html
├── data.js
└── app.js

# index.html im Browser öffnen
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Wichtig:** Alle 3 Dateien müssen im **gleichen Ordner** liegen!

---

## 📚 Inhaltsübersicht

### Einkommensteuer (100+ Fragen)
- **Grundlagen:** Grundfreibetrag, Einkunftsarten, Pauschbeträge
- **Fortgeschritten:** ZvE-Schema, Verlustabzug § 10d, Sonderausgaben
- **Experte:** § 6b EStG, vGA bei GmbH, Progressionsvorbehalt § 32b

### Umsatzsteuer (80+ Fragen)
- **Grundlagen:** Steuersätze 19%/7%, Kleinunternehmer § 19
- **Fortgeschritten:** Reverse-Charge § 13b, ig. Lieferungen § 6a
- **Experte:** Dreiecksgeschäft § 25b, Organschaft § 2 Abs. 2 Nr. 2

### Abgabenordnung (60+ Fragen)
- **Grundlagen:** Festsetzungsfrist 4 Jahre, Einspruchsfrist 1 Monat
- **Fortgeschritten:** AdV § 361, Korrektur § 173/175
- **Experte:** Selbstanzeige § 371, Strafverfolgungsverjährung

### Bilanz (HGB) - 100+ Posten
- **Aktiva:** Anlagevermögen (Immaterielle, Sachanlagen, Finanzanlagen) + Umlaufvermögen
- **Passiva:** Eigenkapital, Rückstellungen, Verbindlichkeiten
- **Sonderfälle:** ARAP/PRAP § 250, Goodwill § 246 Abs. 1 S. 4

---

## 💡 Beispiele für fortgeschrittene Fragen

### Level 2 - Fortgeschritten
**Frage:** "Ein Arbeitnehmer hat 2026: Fahrtkosten 2.800 €, Fortbildung 800 €, Fachliteratur 200 €. Wie hoch ist sein WK-Abzug?"

**Antwort:** 3.800 € (tatsächliche Kosten)

**Erklärung:** Tatsächliche WK 3.800 € > Pauschbetrag 1.230 € → Es werden die vollen 3.800 € angesetzt, nicht die Differenz!

### Level 3 - Experte
**Frage:** "§ 6b EStG: Grundstück Buchwert 200.000 €, Verkauf 500.000 €. Wie funktioniert die Rücklage?"

**Antwort:** Rücklage 300.000 €, Übertragung auf neue Anlagen innerhalb 4 Jahre

**Erklärung:** Veräußerungsgewinn 300.000 € kann als Rücklage gebildet werden. Übertragung auf begünstigte Anlagen (Gebäude, Grund+Boden) innerhalb 4 Jahre. Nicht übertragen → Gewinnzuschlag 6%.

---

## 🔧 Anpassungen & Erweiterungen

### Neue Fragen hinzufügen

Öffne `data.js` und ergänze:

```javascript
const D_EST_QUIZ = [
  {
    q: 'Deine Frage?',
    opts: ['Antwort A', 'Antwort B', 'Antwort C', 'Antwort D'],
    ans: 1, // Index richtige Antwort (0-3)
    lvl: 2, // Level 1, 2 oder 3
    explain: '<b>Erklärung</b> mit HTML'
  }
];
```

### Bilanzposten hinzufügen

```javascript
const D_BILANZ_DRAGDROP = [
  {
    icon: '🏢',
    name: 'Firmengebäude',
    desc: 'Eigenes Bürogebäude',
    ans: 'av', // av, uv, ek, rueck, verb
    ansLabel: 'Anlagevermögen',
    sub: 'Sachanlagen - Gebäude',
    lvl: 1,
    explain: '<b>AV / Sachanlagen:</b> Gebäude AfA 33-50 Jahre'
  }
];
```

---

## 📊 Punktesystem

- **Level 1 Fragen:** 10 Punkte
- **Level 2 Fragen:** 20 Punkte
- **Level 3 Fragen:** 30 Punkte
- **Bilanz perfekt:** 50 Punkte

**Serie-Multiplikator:** Richtige Antworten in Folge erhöhen die Serie 🔥

---

## 🛠️ Technologie

- **Vanilla JavaScript** (kein Framework)
- **CSS3** mit Flexbox & Grid
- **Google Fonts** (Nunito)
- **Drag & Drop API**

**Keine Dependencies!** Funktioniert komplett offline.

---

## 📈 Roadmap & Verbesserungen

### Geplante Features:
- [ ] Prüfungsmodus (60 Min, 30 Fragen)
- [ ] LocalStorage für Fortschritt
- [ ] Mehr Kategorien (KSt, GewSt, ErbSt)
- [ ] Buchungssätze Drag & Drop
- [ ] Sound-Effekte
- [ ] Dark Mode

### Feedback & Vorschläge
Issues und Pull Requests sind willkommen!

---

## 🤝 Beitragen

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/NeueKategorie`)
3. Commit (`git commit -m 'Add: Körperschaftsteuer-Fragen'`)
4. Push (`git push origin feature/NeueKategorie`)
5. Pull Request öffnen

---

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE)

---

## 📧 Support

- **Issues:** [GitHub Issues](https://github.com/DEIN-USERNAME/steuer-quizduell-plus/issues)
- **Diskussionen:** [GitHub Discussions](https://github.com/DEIN-USERNAME/steuer-quizduell-plus/discussions)

---

## 🙏 Credits

Entwickelt für die Prüfungsvorbereitung im Steuerrecht.

**Rechtsgrundlagen:**
- Einkommensteuergesetz (EStG)
- Umsatzsteuergesetz (UStG)
- Abgabenordnung (AO)
- Handelsgesetzbuch (HGB)

---

**Made with ❤️ for Steuerrecht-Studierende**

Viel Erfolg bei der Prüfung! 🎓
