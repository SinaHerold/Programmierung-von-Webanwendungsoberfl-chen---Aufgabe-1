# Programmierung-von-Webanwendungsoberflaechen-Aufgabe-1
CO2-Footprint - ecopulse-co2-tracker

EcoPulse ist eine responsive Webanwendung zur transparenten und verständlichen Darstellung fiktiver CO₂-Emissionsdaten von Unternehmen.
Das Projekt wurde im Rahmen des IU-Moduls "Programmierung von Webanwendungsoberflächen" entwickelt.

## Projektziel: 
Ziel von EcoPulse ist es, Emissionsdaten übersichtlich darzustellen und Nutzenden einen einfachen Vergleich zwischen Unternehmen und Ländern 
zu ermöglichen. Die Website ist als Demonstrationsprojekt für eine fiktive Non-Profit-Organisation konzipiert.

## Funktion:
- Responsive Darstellung für Desktop, Tablet und Smartphone
- Globale Navigation mit responsivem Hamburger-Menü
- Lokale Navigation mit umschaltbarer LTR-/RTL-Positionierung
- Dynamische Tabelle mit fiktiven CO₂-Emissionsdaten
- Suche nach Unternehmen
- Filterung nach Ländern
- Auf- und absteigende Sortierung nach Unternehmen, Ländern und Emissionen
- Automatische Aktualisierung der Ergebniszahl
- Rückmeldung bei Suchanfragen ohne Treffer
- Sichere Textausgabe über `textContent` zur Vermeidung von HTML-Injektionen
- Hinweise zu Datenschutz und fiktiven Projektdaten

## Verwendete Technologien:
- HTML5: Semantische Struktur der Website
- CSS3: Individuelle Gestaltung und responsives Layout
- JavaScript: Dynamische Datenverarbeitung und Interaktionen
- Bootstrap 5.3.3: Responsive Komponenten und Navigation

## Projektstruktur:
```text
EcoPulse/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokale Ausführung:
1. Repository herunterladen oder klonen.
2. Projektordner in Visual Studio Code öffnen.
3. Die Datei `index.html` im Browser öffnen.

Für das Laden der Bootstrap-Dateien über das CDN ist eine Internetverbindung erforderlich.

## Responsive Design:
Die Webanwendung wurde für verschiedene Bildschirmgrößen gestaltet.
Auf Desktop-Geräten wird die lokale Navigation neben der Datentabelle angezeigt. Über einen Umschalter kann ihre Position zwischen links (LTR) und rechts (RTL) gewechselt werden.
Auf kleineren Bildschirmen wird die lokale Navigation oberhalb der Inhalte angeordnet. Die Datentabelle wird auf dem Smartphone in einer kartenähnlichen Darstellung ausgegeben.

## Sicherheit:
Die Sucheingaben werden ausschließlich im Browser verarbeitet.
Dynamische Tabelleninhalte werden mit `textContent` eingefügt. Dadurch werden enthaltene HTML-Zeichen als Text behandelt und nicht als ausführbarer HTML-Code interpretiert.

## Datenhinweis:
Alle dargestellten Unternehmen und CO₂-Emissionswerte sind fiktiv und dienen ausschließlich der Demonstration der Webanwendung.
Die Daten stellen keine tatsächlichen Emissionen der genannten Unternehmen dar.

## Projektstatus:
Die grundlegenden Funktionen der Webanwendung wurden implementiert und manuell getestet.

## Autorin:
Sina Herold
Studienprojekt - IU Internationale Hochschule
