# ALKNZ Web Pages — Style Guide

Covers: `index.html`, `features.html`, `install.html`, `api.html`, `arabic.html`, `docs.html`, `upgrade.html`

---

## Stack

| Tool | Version / Source |
|---|---|
| Tailwind CSS | CDN (`cdn.tailwindcss.com`) |
| Font Awesome | 6.4.0 CDN |
| Inter | Google Fonts — weights 300 400 500 600 700 800 |
| Noto Sans Arabic | Google Fonts — weights 400 500 700 |

No build step. All pages are standalone HTML files with inline Tailwind config.

---

## Tailwind Config (copy into every page)

```html
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          alknz: {
            bg:      '#020408',
            surface: '#0f172a',
            border:  '#1e293b',
            primary: '#3b82f6',
            accent:  '#6366f1',
            text:    '#f8fafc',
            muted:   '#94a3b8'
          }
        },
        fontFamily: {
          sans:   ['Inter', 'sans-serif'],
          arabic: ['Noto Sans Arabic', 'sans-serif'],
        }
      }
    }
  }
</script>
```

---

## Color Palette

| Token | Hex | Use |
|---|---|---|
| `alknz-bg` | `#020408` | Page background, inputs, scrollbar track |
| `alknz-surface` | `#0f172a` | Cards, nav bg, section backgrounds |
| `alknz-border` | `#1e293b` | All borders, dividers |
| `alknz-primary` | `#3b82f6` | Primary actions, active states, links |
| `alknz-accent` | `#6366f1` | Secondary accent (gradient end) |
| `alknz-text` | `#f8fafc` | Body text, headings |
| `alknz-muted` | `#94a3b8` | Subtext, labels, placeholders |
| Blue 400 | `#60a5fa` | Gradient text start, nav active |
| Indigo 400 | `#818cf8` | Gradient text end |
| Slate 600 | `#475569` | Placeholder text, faint labels |

### Semantic colors
| Purpose | Color |
|---|---|
| Success / green | `#10b981` / `#059669` |
| Warning | `#eab308` |
| Error / danger | `#ef4444` |
| Info / sky | `#0ea5e9` |
| Purple / accent | `#7c3aed` |

---

## Typography

**Font stack**
- Latin: `Inter, sans-serif`
- Arabic / RTL: `Noto Sans Arabic, sans-serif`

**Scale in use**

| Size | Tailwind | Use |
|---|---|---|
| 10px | `text-[10px]` | Eyebrow labels, badge text, nav subtitle |
| 11px | `text-xs` | Meta text, captions, table headers |
| 12px | `text-sm` (approx) | Body small, descriptions |
| 13px | — | Card body text |
| 16px | `text-xl` | Logo wordmark, drawer titles |
| 24px+ | `text-2xl` → `text-7xl` | Section headings, hero H1 |

**Common text patterns**
```html
<!-- Eyebrow / section label -->
<span class="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] block mb-3">
  Section Label
</span>

<!-- Gradient heading -->
<span class="gradient-text">Highlighted Text</span>

<!-- Muted body -->
<p class="text-alknz-muted text-sm leading-relaxed">...</p>

<!-- Nav links -->
<a class="nav-item text-xs font-bold uppercase tracking-widest text-alknz-muted hover:text-white transition-colors py-2">
  Link
</a>
```

---

## Utility Classes (defined in `<style>` on every page)

```css
body        { background: #020408; color: #f8fafc; overflow-x: hidden; font-family: 'Inter', sans-serif; }
.glass-panel { background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(59, 130, 246, 0.1); }
.gradient-text { background: linear-gradient(to right, #60a5fa, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.nav-item.active { color: #60a5fa; border-bottom: 2px solid #60a5fa; }
.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
```

Scrollbar styling (all pages):
```css
::-webkit-scrollbar       { width: 8px; }
::-webkit-scrollbar-track { background: #020408; }
::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #334155; }
```

---

## Layout Structure

Every page follows this shell:

```html
<body class="antialiased min-h-screen flex flex-col">

  <canvas id="networkCanvas" .../>   <!-- optional: background animation -->

  <nav class="fixed top-0 w-full z-50 glass-panel border-b border-alknz-border">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <!-- logo | nav links | CTA button -->
    </div>
  </nav>

  <main class="relative z-10 flex-grow pt-20">
    <section class="...">
      <div class="max-w-7xl mx-auto px-6">
        <!-- content -->
      </div>
    </section>
  </main>

  <footer class="bg-black border-t border-alknz-border py-10 relative z-10">
    <div class="max-w-7xl mx-auto px-6 ...">
      <!-- logo + copyright -->
    </div>
  </footer>

</body>
```

**Key layout rules**
- Max content width: `max-w-7xl` with `px-6` gutters
- Nav height: `h-20` (80px), fixed, `z-50`
- Main content offset: `pt-20` to clear fixed nav
- Page uses `flex flex-col` on body so footer sticks to bottom (`flex-grow` on main)

---

## Navigation

```html
<nav class="fixed top-0 w-full z-50 glass-panel border-b border-alknz-border">
  <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

    <!-- Logo -->
    <a href="./index.html" class="flex items-center gap-3">
      <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
        <span class="text-white font-bold text-xl">A</span>
      </div>
      <div class="flex flex-col">
        <span class="text-xl font-bold tracking-widest text-white">ALKNZ</span>
        <span class="text-[10px] text-alknz-muted tracking-[0.2em] uppercase">Page Name</span>
      </div>
    </a>

    <!-- Links (hidden on mobile) -->
    <div class="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-alknz-muted">
      <a href="./index.html"   class="nav-item hover:text-white transition-colors py-2">Overview</a>
      <a href="./features.html" class="nav-item hover:text-white transition-colors py-2">Features</a>
      <a href="./install.html"  class="nav-item hover:text-white transition-colors py-2">Installation</a>
      <a href="./api.html"      class="nav-item hover:text-white transition-colors py-2">API</a>
      <a href="./arabic.html"   class="nav-item hover:text-white transition-colors py-2">Arabic Engine</a>
      <a href="./upgrade.html"  class="nav-item hover:text-white transition-colors py-2">Upgrade</a>
    </div>

    <!-- CTA -->
    <a href="./install.html"
       class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-600/20 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
      <span>Install</span>
      <i class="fa-brands fa-chrome text-[12px]"></i>
    </a>

  </div>
</nav>
```

Mark the current page's nav link active by adding the `active` class to it.

---

## Buttons

### Primary
```html
<a href="#" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-3 transition-all shadow-2xl shadow-blue-600/30">
  <i class="fa-brands fa-chrome text-lg"></i> Label
</a>
```

### Secondary (outlined surface)
```html
<a href="#" class="px-8 py-4 bg-alknz-surface hover:bg-slate-800 text-white rounded-xl font-bold text-sm uppercase tracking-wide border border-alknz-border flex items-center justify-center gap-3 transition-all">
  Label
</a>
```

### Small nav CTA
```html
<a href="#" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg transition-all text-xs font-bold uppercase tracking-wide">
  Label
</a>
```

---

## Cards

### Glass card (info / feature card)
```html
<div class="glass-panel p-7 rounded-2xl border border-alknz-border">
  <div class="flex items-center gap-3 mb-4">
    <i class="fa-solid fa-icon text-blue-500 text-2xl"></i>
    <h3 class="text-lg font-bold">Title</h3>
  </div>
  <p class="text-alknz-muted text-sm leading-relaxed">Description text.</p>
  <a href="#" class="inline-flex items-center gap-2 mt-5 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300">
    Read more <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>
```

### CTA banner
```html
<div class="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
  <div>
    <div class="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-2">Tag</div>
    <div class="text-2xl font-bold text-white">Headline</div>
    <div class="text-sm text-alknz-muted mt-2">Supporting text.</div>
  </div>
  <div class="flex gap-3">
    <!-- Primary + Secondary buttons -->
  </div>
</div>
```

### Quick-link mini card
```html
<a href="#" class="glass-panel border border-alknz-border rounded-xl p-4 hover:bg-slate-900/40 transition">
  <div class="text-[10px] uppercase tracking-widest text-alknz-muted font-bold mb-1">Category</div>
  <div class="text-sm font-semibold text-white flex items-center gap-2">
    <i class="fa-solid fa-icon text-blue-400"></i> Title
  </div>
  <div class="text-xs text-alknz-muted mt-1">Short description</div>
</a>
```

---

## Sections

### Section header pattern
```html
<div class="text-center mb-12">
  <span class="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] block mb-3">Eyebrow</span>
  <h2 class="text-3xl font-bold text-white">Section Heading</h2>
  <p class="text-alknz-muted mt-3 max-w-2xl mx-auto">Supporting sentence.</p>
</div>
```

### Section divider
```html
<section class="py-16 border-t border-alknz-border/60">
```

---

## Badges / Chips

```html
<!-- Pill badge (status / tag) -->
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
  <i class="fa-solid fa-lock"></i> Label
</div>

<!-- Chip (used on upgrade page) -->
<span class="chip bg-blue-500/10 text-blue-400 border border-blue-500/20">Label</span>
```

---

## Code / Monospace

```html
<code class="font-mono ...">inline code</code>

<pre class="bg-alknz-surface border border-alknz-border rounded-xl p-6 text-sm font-mono text-slate-300 overflow-x-auto">
  ...
</pre>
```

Font stack for mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

---

## Icons

Use **Font Awesome 6.4.0** solid or brand icons:

```html
<i class="fa-solid fa-arrow-right"></i>
<i class="fa-brands fa-chrome"></i>
```

Size with Tailwind text utilities (`text-lg`, `text-2xl`, etc.) or `text-[12px]` for precise sizing.

---

## Background Animation

The network particle canvas is optional but used on most pages:

```html
<canvas id="networkCanvas" class="fixed inset-0 z-0 pointer-events-none opacity-20"></canvas>
```

Include the JS block from `index.html` at the bottom of `<body>`. Canvas sits behind all content via `z-0`; main content uses `relative z-10`.

---

## Footer

```html
<footer class="bg-black border-t border-alknz-border py-10 relative z-10">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-[10px]">A</div>
      <span class="text-sm font-bold tracking-widest text-white uppercase">ALKNZ</span>
    </div>
    <div class="text-[10px] font-bold text-slate-600 uppercase tracking-widest">© 2026 ALKNZ Ventures | Internal</div>
  </div>
</footer>
```

---

## Spacing Conventions

| Context | Value |
|---|---|
| Section vertical padding | `py-16` |
| Section inner max-width gutter | `px-6` |
| Card grid gap | `gap-6` |
| Button gap (icon + text) | `gap-2` or `gap-3` |
| Card inner padding (large) | `p-7` |
| Card inner padding (small) | `p-4` |

---

## Responsive Breakpoints

All pages use Tailwind defaults. Common patterns:

```
grid-cols-1 → md:grid-cols-3   (feature grids)
flex-col     → md:flex-row      (CTA banners, footer)
hidden       → md:flex          (nav links)
grid lg:grid-cols-2             (hero split)
hidden lg:block                 (hero right panel)
```

---

## Page Boilerplate

Minimal starting template for a new page:

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ALKNZ Intelligence | Page Title</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Arabic:wght@400;500;700&display=swap" rel="stylesheet">

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            alknz: { bg:'#020408', surface:'#0f172a', border:'#1e293b', primary:'#3b82f6', accent:'#6366f1', text:'#f8fafc', muted:'#94a3b8' }
          },
          fontFamily: { sans:['Inter','sans-serif'], arabic:['Noto Sans Arabic','sans-serif'] }
        }
      }
    }
  </script>

  <style>
    body { background:#020408; color:#f8fafc; overflow-x:hidden; font-family:'Inter',sans-serif; }
    .glass-panel { background:rgba(15,23,42,0.7); backdrop-filter:blur(12px); border:1px solid rgba(59,130,246,0.1); }
    .gradient-text { background:linear-gradient(to right,#60a5fa,#818cf8); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .nav-item.active { color:#60a5fa; border-bottom:2px solid #60a5fa; }
    ::-webkit-scrollbar { width:8px; }
    ::-webkit-scrollbar-track { background:#020408; }
    ::-webkit-scrollbar-thumb { background:#1e293b; border-radius:4px; }
    ::-webkit-scrollbar-thumb:hover { background:#334155; }
    @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
    .animate-fade-in { animation:fadeIn 0.5s ease-out forwards; }
  </style>
</head>

<body class="antialiased min-h-screen flex flex-col">

  <!-- nav -->
  <!-- main -->
  <!-- footer -->

</body>
</html>
```
