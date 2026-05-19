const form = document.querySelector(".quote-form");
const status = document.querySelector(".form-status");
const packageSelect = document.querySelector('select[name="pakket"]');
const packageLinks = document.querySelectorAll("[data-package]");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const lines = [
      "Nieuwe offerteaanvraag via Verdeelkasten vervangen",
      "",
      `Naam: ${data.get("naam") || ""}`,
      `Telefoon: ${data.get("telefoon") || ""}`,
      `E-mail: ${data.get("email") || ""}`,
      `Woonplaats: ${data.get("woonplaats") || ""}`,
      `Pakket: ${data.get("pakket") || ""}`,
      "",
      "Bericht:",
      data.get("bericht") || "",
      "",
      "Let op: foto's kunnen het beste via WhatsApp worden meegestuurd."
    ];

    const subject = encodeURIComponent("Offerteaanvraag groepenkast vervangen");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@verdeelkastenvervangen.nl?subject=${subject}&body=${body}`;
    status.textContent = "Uw e-mailprogramma wordt geopend. Stuur foto's eventueel via WhatsApp mee.";
  });
}

packageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!packageSelect) return;
    packageSelect.value = link.dataset.package;
  });
});
