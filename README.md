# Eunexon Website

Statische Website für `eunexon.com`. Sie benötigt weder WordPress noch eine
Datenbank oder JavaScript.

## Vor der Veröffentlichung

1. In `imprint/index.html`, `privacy/index.html` und
   `apps/colorshapecode/privacy/index.html` alle orange markierten Platzhalter
   ersetzen.
2. Sicherstellen, dass `support@eunexon.com` als Postfach oder Weiterleitung
   existiert.
3. Nach Veröffentlichung alle Links über HTTPS testen.
4. Sobald ColorShapeCode im App Store verfügbar ist, den Platzhalter
   "Bald im App Store" in `apps/colorshapecode/index.html` durch den echten
   App-Store-Link ersetzen.

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
