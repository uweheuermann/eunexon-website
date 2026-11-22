// Bildansicht für die Bildschirmfoto-Galerien: öffnet ein Bild groß auf der Seite,
// mit Blättern per Knopf, Pfeiltaste oder Wischen. Ohne JavaScript (oder wenn etwas
// schiefgeht) öffnet der Link wie bisher die Originaldatei.
// Bewusst eigenes, kleines Skript ohne fremde Bibliotheken — siehe README.
(() => {
    const galleries = document.querySelectorAll(".screenshot-gallery");
    if (!galleries.length || typeof HTMLDialogElement !== "function") return;

    const english = document.documentElement.lang.startsWith("en");
    const text = english
        ? { close: "Close", previous: "Previous image", next: "Next image", of: "of" }
        : { close: "Schließen", previous: "Vorheriges Bild", next: "Nächstes Bild", of: "von" };

    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.innerHTML = `
        <button class="lightbox-button lightbox-close" type="button" aria-label="${text.close}">×</button>
        <button class="lightbox-button lightbox-previous" type="button" aria-label="${text.previous}">‹</button>
        <figure><img alt=""><figcaption></figcaption></figure>
        <button class="lightbox-button lightbox-next" type="button" aria-label="${text.next}">›</button>`;
    document.body.append(dialog);

    const image = dialog.querySelector("img");
    const caption = dialog.querySelector("figcaption");
    let links = [];
    let index = 0;

    function show(newIndex) {
        index = (newIndex + links.length) % links.length;
        const link = links[index];
        const thumbnail = link.querySelector("img");
        image.src = link.href;
        image.alt = thumbnail ? thumbnail.alt : "";
        caption.textContent = `${index + 1} ${text.of} ${links.length}`;
    }

    galleries.forEach((gallery) => {
        const galleryLinks = [...gallery.querySelectorAll("a.screenshot-link")];
        galleryLinks.forEach((link, linkIndex) => {
            link.addEventListener("click", (event) => {
                // Neuer Tab/Fenster (Cmd-/Strg-/Umschalt-Klick) bleibt möglich
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                try {
                    links = galleryLinks;
                    show(linkIndex);
                    dialog.showModal();
                    event.preventDefault();
                } catch {
                    // Rückfall: Der Link öffnet das Bild in voller Größe
                }
            });
        });
    });

    dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
    dialog.querySelector(".lightbox-previous").addEventListener("click", () => show(index - 1));
    dialog.querySelector(".lightbox-next").addEventListener("click", () => show(index + 1));

    // Tipp auf den dunklen Bereich neben dem Bild schließt (Esc erledigt der Dialog selbst)
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") show(index - 1);
        if (event.key === "ArrowRight") show(index + 1);
    });

    // Wischen nach links/rechts blättert
    let touchStartX = null;
    dialog.addEventListener("touchstart", (event) => {
        touchStartX = event.touches.length === 1 ? event.touches[0].clientX : null;
    }, { passive: true });
    dialog.addEventListener("touchend", (event) => {
        if (touchStartX === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX;
        touchStartX = null;
        if (Math.abs(distance) > 50) show(index + (distance < 0 ? 1 : -1));
    });

    dialog.addEventListener("close", () => image.removeAttribute("src"));
})();
