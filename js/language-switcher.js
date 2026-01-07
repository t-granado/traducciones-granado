document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("languageSwitcher");
  if (!selector) return;

  const path = window.location.pathname;

  if (path.includes("/es/")) selector.value = "es";
  else if (path.includes("/val/")) selector.value = "val";
  else if (path.includes("/en/")) selector.value = "en";

  const pages = {
    "index.html": { es: "../es/index.html", val: "../val/index.html", en: "../en/index.html" },
    "servicios.html": { es: "../es/servicios.html", val: "../val/serveis.html", en: "../en/services.html" },
    "serveis.html": { es: "../es/servicios.html", val: "../val/serveis.html", en: "../en/services.html" },
    "services.html": { es: "../es/servicios.html", val: "../val/serveis.html", en: "../en/services.html" },
    "recursos.html": { es: "../es/recursos.html", val: "../val/recursos.html", en: "../en/resources.html" },
    "resources.html": { es: "../es/recursos.html", val: "../val/recursos.html", en: "../en/resources.html" },
    "ultimas_pub.html": { es: "../es/ultimas_pub.html", val: "../val/ultimes_pub.html", en: "../en/latest_pub.html" },
    "ultimes_pub.html": { es: "../es/ultimas_pub.html", val: "../val/ultimes_pub.html", en: "../en/latest_pub.html" },
    "latest_pub.html": { es: "../es/ultimas_pub.html", val: "../val/ultimes_pub.html", en: "../en/latest_pub.html" },
    "etica.html": { es: "../es/etica.html", val: "../val/etica.html", en: "../en/ethics.html" },
    "ethics.html": { es: "../es/etica.html", val: "../val/etica.html", en: "../en/ethics.html" },
    "contacto.html": { es: "../es/contacto.html", val: "../val/contacte.html", en: "../en/contact.html" },
    "contacte.html": { es: "../es/contacto.html", val: "../val/contacte.html", en: "../en/contact.html" },
    "contact.html": { es: "../es/contacto.html", val: "../val/contacte.html", en: "../en/contact.html" }
  };

  selector.addEventListener("change", function () {
    const lang = this.value;
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    if (pages[currentPage] && pages[currentPage][lang]) {
      window.location.href = pages[currentPage][lang];
    } else {
      console.warn("Página no encontrada en pages:", currentPage);
    }
  });
});
