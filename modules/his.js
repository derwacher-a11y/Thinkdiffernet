<<<<<<< Updated upstream
(function(){ window.registerModule('his', {
    5: { topics: [{ title: "Antike Epochen", slides: [
              { title: "Einführung", text: "Klasse 5: Steinzeit vor Ägypten.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Was ist älter: Griechische Antike oder Steinzeit?", a: "Steinzeit"}, {q: "Was ist jünger: Römisches Reich oder Steinzeit?", a: "Römisches Reich"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Die Antwort ist ${x.a}.` };
    } }]},
    6: { topics: [{ title: "Römisches Reich", slides: [
              { title: "Einführung", text: "Klasse 6: Patrizier oben, Sklaven unten.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Wie hieß der Adel Roms? (Patrizier oder Plebejer)", a: "Patrizier"}, {q: "Wie hieß das einfache Volk? (Patrizier oder Plebejer)", a: "Plebejer"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Das waren die ${x.a}.` };
    } }]},
    7: { topics: [{ title: "Mittelalter (Lehnswesen)", slides: [
              { title: "Einführung", text: "Klasse 7: König belehnt Vasallen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Wer stand in der Lehnspyramide ganz oben?", a: "König"}, {q: "Wie hieß der Grundbesitz, der verliehen wurde?", a: "Lehen"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Die richtige Antwort ist ${x.a}.` };
    } }]},
    8: { topics: [{ title: "Industrialisierung", slides: [
              { title: "Einführung", text: "Klasse 8: Dampfmaschine (1769).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Erfinder der Dampfmaschine (1769)?", a: "James Watt"}, {q: "Wo begann die Industrialisierung? (Land)", a: "England"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Es war ${x.a}.` };
    } }]},
    9: { topics: [{ title: "Quellenkritik", slides: [
              { title: "Einführung", text: "Klasse 9: Fakten vs. Propaganda.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Emotionale, manipulative Texte nennt man ___?", a: "Propaganda"}, {q: "Objektive, beweisbare Aussagen nennt man ___?", a: "Fakten"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Das sind ${x.a}.` };
    } }]},
    10: { topics: [{ title: "Friedliche Revolution", slides: [
              { title: "Einführung", text: "Klasse 10: BRD / DDR.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "In welchem Jahr fiel die Berliner Mauer?", a: "1989"}, {q: "In welchem Jahr war die Wiedervereinigung?", a: "1990"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Es war im Jahr ${x.a}.` };
    } }]}
=======
(function(){ window.registerModule('his', {
    5: { topics: [{ title: "Antike Epochen", slides: [
              { title: "Einführung", text: "Klasse 5: Steinzeit vor Ägypten.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Was ist älter: Griechische Antike oder Steinzeit?", a: "Steinzeit"}, {q: "Was ist jünger: Römisches Reich oder Steinzeit?", a: "Römisches Reich"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Die Antwort ist ${x.a}.` };
    } }]},
    6: { topics: [{ title: "Römisches Reich", slides: [
              { title: "Einführung", text: "Klasse 6: Patrizier oben, Sklaven unten.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Wie hieß der Adel Roms? (Patrizier oder Plebejer)", a: "Patrizier"}, {q: "Wie hieß das einfache Volk? (Patrizier oder Plebejer)", a: "Plebejer"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Das waren die ${x.a}.` };
    } }]},
    7: { topics: [{ title: "Mittelalter (Lehnswesen)", slides: [
              { title: "Einführung", text: "Klasse 7: König belehnt Vasallen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Wer stand in der Lehnspyramide ganz oben?", a: "König"}, {q: "Wie hieß der Grundbesitz, der verliehen wurde?", a: "Lehen"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Die richtige Antwort ist ${x.a}.` };
    } }]},
    8: { topics: [{ title: "Industrialisierung", slides: [
              { title: "Einführung", text: "Klasse 8: Dampfmaschine (1769).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Erfinder der Dampfmaschine (1769)?", a: "James Watt"}, {q: "Wo begann die Industrialisierung? (Land)", a: "England"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Es war ${x.a}.` };
    } }]},
    9: { topics: [{ title: "Quellenkritik", slides: [
              { title: "Einführung", text: "Klasse 9: Fakten vs. Propaganda.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "Emotionale, manipulative Texte nennt man ___?", a: "Propaganda"}, {q: "Objektive, beweisbare Aussagen nennt man ___?", a: "Fakten"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Das sind ${x.a}.` };
    } }]},
    10: { topics: [{ title: "Friedliche Revolution", slides: [
              { title: "Einführung", text: "Klasse 10: BRD / DDR.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Merke dir die Kernbegriffe!" },
              { title: "Vertiefung", text: "Dieses Thema ist besonders wichtig für die nächsten Schritte.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-layers" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-blue)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <path d="M100 30 L170 65 L100 100 L30 65 Z" fill="url(#grad-layers)" opacity="0.9" />
  <path d="M30 95 L100 130 L170 95" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <path d="M30 125 L100 160 L170 125" fill="none" stroke="url(#grad-layers)" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="100" cy="65" r="10" fill="white" opacity="0.5"/>
</svg>`, merkhilfe: "Wiederholung festigt das Wissen." },
              { title: "Zusammenhänge", text: "Die Zusammenhänge bilden das Fundament dieses Fachgebiets.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-net" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-green)" />
      <stop offset="100%" stop-color="var(--sys-cyan)" />
    </linearGradient>
  </defs>
  <line x1="100" y1="40" x2="40" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="100" y1="40" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="160" y1="100" x2="100" y2="160" stroke="url(#grad-net)" stroke-width="6" />
  <line x1="40" y1="100" x2="160" y2="100" stroke="url(#grad-net)" stroke-width="6" stroke-dasharray="10 10"/>
  <circle cx="100" cy="40" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="40" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="160" cy="100" r="15" fill="var(--bg-dark)" stroke="url(#grad-net)" stroke-width="6" />
  <circle cx="100" cy="160" r="15" fill="url(#grad-net)" />
</svg>`, merkhilfe: "Verknüpfe neues Wissen mit altem." },
              { title: "Beispiele", text: "In der Praxis finden wir viele Beispiele dafür im Alltag.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
    <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--sys-red)" />
      <stop offset="100%" stop-color="var(--sys-orange)" />
    </linearGradient>
  </defs>
  <path d="M30 30 L30 170 L170 170" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
  <rect x="50" y="100" width="25" height="70" fill="url(#grad-chart)" rx="6" opacity="0.6"/>
  <rect x="90" y="60" width="25" height="110" fill="url(#grad-chart)" rx="6" opacity="0.8"/>
  <rect x="130" y="20" width="25" height="150" fill="url(#grad-chart)" rx="6"/>
  <path d="M62 80 L102 40 L142 10" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="62" cy="80" r="6" fill="currentColor" />
  <circle cx="102" cy="40" r="6" fill="currentColor" />
  <circle cx="142" cy="10" r="6" fill="currentColor" />
</svg>`, merkhilfe: "Denke an Alltagsbeispiele." },
              { title: "Praxis-Case", text: "Jetzt bist du dran. Löse die folgende Aufgabe Schritt für Schritt.", svg: '', merkhilfe: "Übung macht den Meister!", praxis: true }
            ], generate: () => {
        const v = [{q: "In welchem Jahr fiel die Berliner Mauer?", a: "1989"}, {q: "In welchem Jahr war die Wiedervereinigung?", a: "1990"}];
        const x = v[Math.floor(Math.random()*v.length)]; return { q: x.q, a: x.a, s: `Es war im Jahr ${x.a}.` };
    } }]}
>>>>>>> Stashed changes
}); })();