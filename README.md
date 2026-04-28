# 🏍️ Le Moto Più Belle e Comuni in Italia

Una presentazione interattiva sulle motociclette più belle e comuni in Italia, organizzata per regione e categoria.

## 🎯 Descrizione del Progetto

Questa presentazione ti permette di esplorare l'Italia divisa in tre zone (Nord, Centro, Sud), selezionare una regione e scoprire quali sono i veicoli più utilizzati e apprezzati:

- 🏍️ **Moto Sportive**: Velocità e adrenalina
- 🏍️ **Motocross**: Fuoristrada e avventura
- 🛵 **Scooter**: Praticità e comfort

## 🗺️ Struttura della Presentazione

### 1. **Home Screen**
   - Introduzione con le tre categorie principali
   - Pulsante per esplorare l'Italia

### 2. **Map Selection**
   - Mappa interattiva dell'Italia divisa in:
     - **NORD**: Piemonte, Valle d'Aosta, Lombardia, Trentino, Veneto, Friuli, Liguria, Emilia-Romagna
     - **CENTRO**: Toscana, Umbria, Marche, Lazio
     - **SUD**: Abruzzo, Molise, Campania, Puglia, Basilicata, Calabria, Sicilia, Sardegna

### 3. **Regions Selection**
   - Vista zoomata con tutte le regioni della zona selezionata
   - Selezione con un click

### 4. **Category Selection**
   - Scelta della categoria per la regione selezionata
   - Tre opzioni: Moto Sportive, Motocross, Scooter

### 5. **Analysis Screen**
   - Visualizzazione del veicolo più utilizzato nella categoria
   - Foto, nome, descrizione, specifiche tecniche
   - Analisi dettagliata sull'utilizzo nella regione

## 📁 Struttura dei File

```
presentazione-test/
├── index.html          # Struttura HTML principale
├── css/
│   └── style.css       # Stili e layout responsivo
├── js/
│   ├── data.js        # Database con dati dei veicoli per regione
│   └── script.js      # Logica interattiva della presentazione
├── images/            # Cartella per le immagini dei veicoli
└── README.md          # Questo file
```

## ��� Come Usare

1. **Aprire il file `index.html`** nel browser
2. **Cliccare su "Esplora l'Italia 🗺️"** per iniziare
3. **Selezionare una zona** (Nord, Centro, Sud)
4. **Scegliere una regione** dalla vista zoomata
5. **Selezionare una categoria** di veicoli
6. **Visualizzare l'analisi** con foto e dettagli del veicolo più comune

## 📸 Immagini Richieste

Le immagini dei veicoli devono essere salvate in `/images/`:

```
images/
├── sportive.jpg                 # Categoria Moto Sportive
├── motocross.jpg               # Categoria Motocross
├── scooter.jpg                 # Categoria Scooter
├── ducati-panigale.jpg
├── honda-crf450r.jpg
├── vespa-primavera.jpg
├── bmw-s1000rr.jpg
├── ktm-450sxf.jpg
├── piaggio-beverly.jpg
└── ... altri modelli di moto
```

## 💻 Tecnologie Utilizzate

- **HTML5**: Struttura semantica
- **CSS3**: Responsive design con Flexbox e Grid
- **JavaScript (Vanilla)**: Interattività senza dipendenze esterne
- **SVG**: Mappa interattiva dell'Italia

## 🎨 Design

- Gradient background ispirato ai colori italiani
- Transizioni smooth tra le schermate
- Interfaccia touch-friendly e responsive
- Hover effects per migliore UX

## 📱 Compatibilità

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android Tablet)
- ✅ Mobile (iPhone, Android Phone)

## 🔧 Personalizzazione

### Aggiungere una nuova regione

Modificare `js/data.js`:

```javascript
piemonte: {
    sportive: {
        name: 'Nome Moto',
        image: 'images/moto.jpg',
        power: '100 CV',
        usage: '50%',
        price: '€10.000',
        description: 'Descrizione breve',
        analysis: 'Analisi dettagliata...'
    },
    // ... altre categorie
}
```

### Cambiare colori

Modificare `css/style.css`:

```css
body {
    background: linear-gradient(135deg, #COLORE1 0%, #COLORE2 100%);
}
```

## 📊 Dati Inclusi

Il progetto contiene dati per **20 regioni italiane** con:
- **3 categorie per regione**: Moto Sportive, Motocross, Scooter
- **60 veicoli totali** con specifiche complete
- **Analisi regionale** per ogni categoria

## 🎯 Funzionalità Principali

- ✅ Navigazione intuitiva tra schermate
- ✅ Mappa interattiva con hover effects
- ✅ Dati completi per ogni veicolo
- ✅ Immagini responsive
- ✅ Dettagli tecnici (potenza, prezzo, utilizzo)
- ✅ Analisi contestualizzate per regione
- ✅ Design moderno e professionale

## 🌐 Deploy su GitHub Pages

Per pubblicare online:

1. **Push il ramo `develop` su GitHub**
2. **Andare in Settings > Pages**
3. **Selezionare Source: develop branch**
4. **Salvare e attendere il deploy**

La presentazione sarà disponibile su:
```
https://guiducc.github.io/presentazione-test/
```

## 📝 Note di Sviluppo

- Tutti i dati sono mockati nel file `data.js`
- Le immagini usano SVG fallback in caso di errore
- Il design è completamente responsive
- Il codice è privo di dipendenze esterne

## 📄 Licenza

Questo progetto è disponibile per uso personale e didattico.

---

**Buona esplorazione delle strade italiane! 🏍️🇮🇹**