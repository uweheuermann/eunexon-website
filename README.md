# Eunexon Website

Statische Website für `eunexon.com`. Sie benötigt weder WordPress noch eine
Datenbank. **Kein fremdes JavaScript:** erlaubt sind nur kleine, eigene Skripte
in `assets/` (derzeit `lightbox.js` für die Bildansicht der Galerien), die von
dieser Website geladen werden, keine Daten senden und ohne die die Seite
weiter funktioniert. Keine Analyse-, Werbe- oder Tracking-Dienste, keine
Bibliotheken von fremden Servern — sonst muss die Datenschutzerklärung angepasst werden.

Diese README wird nicht veröffentlicht (`exclude` in `_config.yml`). Das Repo
ist aber öffentlich — keine Zugangsdaten oder privaten Notizen hineinschreiben.
Neue interne Dateien ebenfalls in `_config.yml` unter `exclude` eintragen.

## Vor der Veröffentlichung

1. In `imprint/index.html`, `privacy/index.html` und
   `apps/colorshapecode/privacy/index.html` alle orange markierten Platzhalter
   ersetzen.
2. ~~Sicherstellen, dass `support@eunexon.com` als Postfach oder Weiterleitung
   existiert.~~ Erledigt: Das Postfach existiert (bestätigt am 22.11.2026).
3. Nach Veröffentlichung alle Links über HTTPS testen.
4. Nach Veröffentlichung alle App-Store-Links prüfen:
   `https://apps.apple.com/de/app/colorshapecode/id6773065302`

## Veröffentlichung über GitHub Pages

Den **Inhalt** dieses Ordners in das Root-Verzeichnis eines öffentlichen
GitHub-Repositories hochladen. GitHub Pages wird aus dem Branch `main` und dem
Verzeichnis `/ (root)` veröffentlicht.

Empfohlene Einstellungen:

- Custom Domain in GitHub Pages: `eunexon.com`
- Nach erfolgreicher Zertifikatsausstellung `Enforce HTTPS` aktivieren.
- Bei IONOS die GitHub-Pages-DNS-Einträge für `eunexon.com` und `www` setzen.
- `eunexon.de` und `www.eunexon.de` dauerhaft auf `https://eunexon.com/`
  weiterleiten.

## App Store Connect

- Datenschutzrichtlinien-URL:
  `https://eunexon.com/apps/colorshapecode/privacy/`
- Support-URL:
  `https://eunexon.com/apps/colorshapecode/support/`

### Eunexon PDF

- Datenschutzrichtlinien-URL: `https://eunexon.com/apps/eunexon-pdf/privacy/`
  (Version 1.0 verlinkt in App und Store noch `https://www.eunexon.com/privacy`;
  die Website-Datenschutzerklärung verweist deshalb oben auf die App-Seite.)
- Support-URL: `https://eunexon.com/apps/eunexon-pdf/support/`
- App-Store-Link (erst nach Veröffentlichung gültig):
  `https://apps.apple.com/de/app/eunexon-pdf/id6837790845`
