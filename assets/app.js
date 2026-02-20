(function () {
  // highlight current nav link
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.endsWith(path)) a.classList.add("active");
  });

  // copy buttons
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    }
  }

  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;

    const payload = btn.getAttribute("data-copy") || "";
    const ok = await copy(payload);

    const original = btn.textContent;
    btn.textContent = ok ? "Copied ✓" : "Copy failed";
    btn.classList.add("primary");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("primary");
    }, 900);
  });
})();