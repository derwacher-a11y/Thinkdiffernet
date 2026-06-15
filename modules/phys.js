<<<<<<< Updated upstream
(function(){
    const PhysEngine = {
        5: { topics: [
            { title: "Was ist Physik?", slides: [
              { title: "Einführung", text: "Physik beschreibt unbelebte Naturphänomene (Kräfte, Licht, Strom).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Ist das Wachsen einer Pflanze ein physikalischer oder ein biologischer Vorgang?`, a: "biologischer", s: `Biologisch (lebende Natur).` }; } },
            { title: "Optik: Lichtquellen", slides: [
              { title: "Einführung", text: "Es gibt selbstleuchtende Körper (Sonne, Lampe) und beleuchtete Körper (Mond).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{q:"Sonne", a:"selbstleuchtend"}, {q:"Mond", a:"beleuchtet"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Ist der ${x.q} selbstleuchtend oder beleuchtet?`, a: x.a, s: `Der ${x.q} ist ${x.a}.` }; } },
            { title: "Optik: Schattenbildung", slides: [
              { title: "Einführung", text: "Kernschatten (kein Licht) und Halbschatten (etwas Licht bei mehreren Quellen).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie nennt man den ganz dunklen Schattenbereich ohne direkten Lichteinfall?`, a: "kernschatten", s: `Der Kernschatten.` }; } },
            { title: "Akustik: Schallquellen", slides: [
              { title: "Einführung", text: "Schall entsteht durch Schwingungen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wodurch entsteht Schall? (Durch Sch...)`, a: "schwingungen", s: `Schall = Schwingungen.` }; } },
            { title: "Akustik: Ausbreitung", slides: [
              { title: "Einführung", text: "Schall braucht ein Medium (Luft, Wasser, Metall) und breitet sich im Vakuum nicht aus.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Kann sich Schall im Weltall (Vakuum) ausbreiten? (ja/nein)`, a: "nein", s: `Nein, Schall braucht ein Medium.` }; } },
            { title: "Temperaturmessung", slides: [
              { title: "Einführung", text: "Die Einheit ist Grad Celsius (°C) oder Kelvin (K).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Welcher Aggregatzustand hat Wasser bei 20°C? (fest, flüssig, gasförmig)`, a: "flüssig", s: `Wasser ist bei Raumtemperatur flüssig.` }; } }
        ]},
        6: { topics: [
            { title: "Masse und Volumen", slides: [
              { title: "Einführung", text: "Masse (m) in kg, Volumen (V) in Litern oder Kubikmetern.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie viele Liter (l) passen in einen Kubikdezimeter (dm³)?`, a: "1", s: `1 dm³ = 1 Liter.` }; } },
            { title: "Dichte (rho = m/V)", slides: [
              { title: "Einführung", text: "Dichte gibt an, wie viel Masse pro Volumen vorhanden ist.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{m:10, v:2, a:"5"}, {m:20, v:4, a:"5"}, {m:30, v:10, a:"3"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Masse m=${x.m}kg, V=${x.v}m³. Dichte in kg/m³?`, a: x.a, s: `rho = ${x.m} / ${x.v} = ${x.a}` }; } },
            { title: "Reflexionsgesetz", slides: [
              { title: "Einführung", text: "Einfallswinkel = Reflexionswinkel (alpha = alpha').", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const a=Math.floor(Math.random()*40)+10; return { q: `Einfallswinkel ist ${a}°. Wie groß ist der Reflexionswinkel?`, a: a.toString(), s: `Einfallswinkel = Reflexionswinkel, also ${a}°.` }; } },
            { title: "Spiegelbilder", slides: [
              { title: "Einführung", text: "Eigenschaften: Gleich groß, aufrecht, seitenverkehrt, virtuell.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Sind Bilder am ebenen Spiegel real oder virtuell?`, a: "virtuell", s: `Spiegelbilder sind scheinbar (virtuell).` }; } },
            { title: "Magnetismus", slides: [
              { title: "Einführung", text: "Nordpol und Südpol. Ungleichnamige Pole ziehen sich an, gleichnamige stoßen sich ab.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Ziehen sich zwei Nordpole an oder stoßen sie sich ab?`, a: "abstoßen", s: `Gleichnamige Pole stoßen sich ab.` }; } },
            { title: "Magnetfeld der Erde", slides: [
              { title: "Einführung", text: "Der magnetische Südpol der Erde liegt in der Nähe des geografischen Nordpols.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Welcher magnetische Pol der Erde liegt in der Nähe des Nordpols? (Nordpol/Südpol)`, a: "südpol", s: `Der magnetische Südpol.` }; } }
        ]},
        7: { topics: [
            { title: "Mechanik: Kraft", slides: [
              { title: "Einführung", text: "Kraft (F) in Newton (N). Kraft = Ursache von Verformung/Bewegungsänderung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `In welcher Einheit wird die Kraft gemessen? (Name/Abkürzung)`, a: "newton", s: `Newton (N).` }; } },
            { title: "Hookesches Gesetz", slides: [
              { title: "Einführung", text: "F = D * s (Kraft = Federhärte * Verlängerung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const D=10, s=2; return { q: `Federhärte D=${D} N/m, Dehnung s=${s} m. Kraft F in N?`, a: (D*s).toString(), s: `F = ${D} * ${s} = ${D*s} N` }; } },
            { title: "Hebelgesetz", slides: [
              { title: "Einführung", text: "F1 * l1 = F2 * l2 (Kraft mal Kraftarm = Last mal Lastarm).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{f1:10, l1:2, l2:4, a:"5"}, {f1:20, l1:3, l2:6, a:"10"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `F1=${x.f1}N, l1=${x.l1}m. l2=${x.l2}m. Wie groß muss F2 (in N) sein?`, a: x.a, s: `${x.f1}*${x.l1} = F2*${x.l2} -> F2=${x.a}` }; } },
            { title: "Feste & lose Rollen", slides: [
              { title: "Einführung", text: "Feste Rolle lenkt nur um. Lose Rolle halbiert die Kraft, verdoppelt den Zugweg.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Halbiert eine FESTE Rolle die benötigte Zugkraft? (ja/nein)`, a: "nein", s: `Nur eine lose Rolle halbiert die Kraft. Eine feste lenkt nur um.` }; } },
            { title: "Mechanische Arbeit", slides: [
              { title: "Einführung", text: "W = F * s (Arbeit = Kraft entlang des Weges). Einheit: Joule (J) oder Newtonmeter (Nm).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const F=50, s=4; return { q: `F=${F} N, s=${s} m. Berechne die Arbeit W in Joule.`, a: (F*s).toString(), s: `W = ${F} * ${s} = ${F*s} J.` }; } },
            { title: "Wärmeausdehnung", slides: [
              { title: "Einführung", text: "Körper dehnen sich beim Erwärmen aus und ziehen sich beim Abkühlen zusammen (Ausnahme: Wasseranomalie).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Dehnen sich Metalle beim Erhitzen aus? (ja/nein)`, a: "ja", s: `Ja.` }; } }
        ]},
        8: { topics: [
            { title: "Kalorik", slides: [
              { title: "Einführung", text: "Wärmemenge Q = m * c * DeltaT. (Spezifische Wärmekapazität c).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{m:1, dt:10, a:"42"}, {m:2, dt:10, a:"84"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `m=${x.m}kg Wasser (c=4.2 kJ/kgK), Erwärmung um ${x.dt}K. Q in kJ?`, a: x.a, s: `Q = ${x.m} * 4.2 * ${x.dt} = ${x.a} kJ` }; } },
            { title: "Aggregatzustände", slides: [
              { title: "Einführung", text: "Schmelzen (fest->flüssig), Verdampfen (flüssig->gas), Sublimieren (fest->gas).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie nennt man den Übergang von flüssig zu gasförmig?`, a: "verdampfen", s: `Verdampfen (oder Sieden).` }; } },
            { title: "Stromkreis", slides: [
              { title: "Einführung", text: "Spannungsquelle, Leiter, Verbraucher. Schalter schließt den Kreis.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Fließt Strom in einem offenen oder geschlossenen Stromkreis?`, a: "geschlossen", s: `Nur in einem geschlossenen.` }; } },
            { title: "Schaltungen", slides: [
              { title: "Einführung", text: "Reihenschaltung (Strom überall gleich). Parallelschaltung (Spannung überall gleich).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `In welcher Schaltung (Reihe/Parallel) leuchten alle anderen Lampen weiter, wenn eine kaputt geht?`, a: "parallel", s: `In der Parallelschaltung.` }; } },
            { title: "Ohmsches Gesetz", slides: [
              { title: "Einführung", text: "U = R * I. (Spannung = Widerstand mal Stromstärke).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{u:12, i:3, a:"4"}, {u:24, i:6, a:"4"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `U=${x.u}V, I=${x.i}A. Berechne R (in Ohm).`, a: x.a, s: `R = U / I = ${x.u} / ${x.i} = ${x.a} Ohm.` }; } },
            { title: "Elektrischer Widerstand", slides: [
              { title: "Einführung", text: "R = rho * l / A. Längerer Draht = größerer Widerstand.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Hat ein längerer Draht einen größeren oder kleineren Widerstand?`, a: "größer", s: `Je länger, desto größer.` }; } }
        ]},
        9: { topics: [
            { title: "Gleichförmige Bewegung", slides: [
              { title: "Einführung", text: "v = s / t. Geschwindigkeit = Weg durch Zeit.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const s=100, t=10; return { q: `s=${s}m, t=${t}s. Geschwindigkeit v in m/s?`, a: (s/t).toString(), s: `v = 100 / 10 = 10 m/s.` }; } },
            { title: "Beschleunigte Bewegung", slides: [
              { title: "Einführung", text: "s = 0.5 * a * t^2.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const a=4, t=3; return { q: `Beschleunigung a=${a} m/s², Zeit t=${t}s. Strecke s?`, a: (0.5*a*t*t).toString(), s: `s = 0.5 * ${a} * ${t}^2 = ${0.5*a*t*t} m.` }; } },
            { title: "Freier Fall", slides: [
              { title: "Einführung", text: "Beschleunigung g = 9.81 m/s² (auf der Erde).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie groß ist die Erdbeschleunigung g (gerundet auf eine Nachkommastelle)?`, a: "9,8", s: `9,81 m/s² (oder 9,8 m/s²).` }; } },
            { title: "Newtonsche Axiome", slides: [
              { title: "Einführung", text: "2. Axiom: F = m * a. Kraft ist Masse mal Beschleunigung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const m=10, a=3; return { q: `m=${m}kg, a=${a} m/s². Berechne F in N.`, a: (m*a).toString(), s: `F = ${m} * ${a} = ${m*a} N.` }; } },
            { title: "Energieerhaltung", slides: [
              { title: "Einführung", text: "In einem abgeschlossenen System bleibt die Gesamtenergie konstant.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Kann Energie erzeugt oder vernichtet werden? (ja/nein)`, a: "nein", s: `Nein, Energie kann nur umgewandelt werden.` }; } },
            { title: "Elektrische Leistung", slides: [
              { title: "Einführung", text: "P = U * I. Einheit der Leistung ist Watt (W).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const U=230, I=2; return { q: `U=${U}V, I=${I}A. Elektrische Leistung P in Watt?`, a: (U*I).toString(), s: `P = 230 * 2 = 460 W.` }; } }
        ]},
        10: { topics: [
            { title: "Atommodell nach Rutherford", slides: [
              { title: "Einführung", text: "Atom besteht aus kleinem, schweren, positiven Kern und großer, fast leerer Elektronenhülle.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Ist der Atomkern nach Rutherford positiv oder negativ geladen?`, a: "positiv", s: `Der Kern ist positiv (Protonen).` }; } },
            { title: "Radioaktivität", slides: [
              { title: "Einführung", text: "Alpha (Heliumkerne), Beta (Elektronen), Gamma (elektromagnetische Strahlung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Besteht Alpha-Strahlung aus Heliumkernen oder Elektronen?`, a: "heliumkerne", s: `Heliumkerne (2 Protonen, 2 Neutronen).` }; } },
            { title: "Halbwertszeit", slides: [
              { title: "Einführung", text: "Zeit, in der die Hälfte der instabilen Atomkerne zerfällt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Nach wie vielen Halbwertszeiten ist nur noch ein Viertel (25%) der Kerne übrig? (Zahl)`, a: "2", s: `Nach 1 HWZ: 50%. Nach 2 HWZ: 25%.` }; } },
            { title: "Elektromagnetische Induktion", slides: [
              { title: "Einführung", text: "Bewegt sich ein Leiter in einem Magnetfeld, wird eine Spannung induziert.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Entsteht eine Induktionsspannung, wenn Magnet und Spule ruhen? (ja/nein)`, a: "nein", s: `Nein, es muss eine Bewegung (Flussänderung) geben.` }; } },
            { title: "Transformator", slides: [
              { title: "Einführung", text: "U1 / U2 = N1 / N2 (Spannungen verhalten sich wie die Windungszahlen).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `N1=100, N2=200, U1=10V. Berechne U2 (in Volt).`, a: "20", s: `Doppelte Windungszahl = doppelte Spannung -> 20V.` }; } },
            { title: "Kreisbewegung (Zentripetalkraft)", slides: [
              { title: "Einführung", text: "Kraft, die einen Körper auf der Kreisbahn hält. Fz = m * v^2 / r.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie nennt man die Kraft, die einen Körper zur Kreismitte zieht? (Zentripetal...)`, a: "zentripetalkraft", s: `Die Zentripetalkraft.` }; } }
        ]}
    };
    window.registerModule('phys', PhysEngine);
})();
=======
(function(){
    const PhysEngine = {
        5: { topics: [
            { title: "Was ist Physik?", slides: [
              { title: "Einführung", text: "Physik beschreibt unbelebte Naturphänomene (Kräfte, Licht, Strom).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Ist das Wachsen einer Pflanze ein physikalischer oder ein biologischer Vorgang?`, a: "biologischer", s: `Biologisch (lebende Natur).` }; } },
            { title: "Optik: Lichtquellen", slides: [
              { title: "Einführung", text: "Es gibt selbstleuchtende Körper (Sonne, Lampe) und beleuchtete Körper (Mond).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{q:"Sonne", a:"selbstleuchtend"}, {q:"Mond", a:"beleuchtet"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Ist der ${x.q} selbstleuchtend oder beleuchtet?`, a: x.a, s: `Der ${x.q} ist ${x.a}.` }; } },
            { title: "Optik: Schattenbildung", slides: [
              { title: "Einführung", text: "Kernschatten (kein Licht) und Halbschatten (etwas Licht bei mehreren Quellen).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie nennt man den ganz dunklen Schattenbereich ohne direkten Lichteinfall?`, a: "kernschatten", s: `Der Kernschatten.` }; } },
            { title: "Akustik: Schallquellen", slides: [
              { title: "Einführung", text: "Schall entsteht durch Schwingungen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wodurch entsteht Schall? (Durch Sch...)`, a: "schwingungen", s: `Schall = Schwingungen.` }; } },
            { title: "Akustik: Ausbreitung", slides: [
              { title: "Einführung", text: "Schall braucht ein Medium (Luft, Wasser, Metall) und breitet sich im Vakuum nicht aus.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Kann sich Schall im Weltall (Vakuum) ausbreiten? (ja/nein)`, a: "nein", s: `Nein, Schall braucht ein Medium.` }; } },
            { title: "Temperaturmessung", slides: [
              { title: "Einführung", text: "Die Einheit ist Grad Celsius (°C) oder Kelvin (K).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Welcher Aggregatzustand hat Wasser bei 20°C? (fest, flüssig, gasförmig)`, a: "flüssig", s: `Wasser ist bei Raumtemperatur flüssig.` }; } }
        ]},
        6: { topics: [
            { title: "Masse und Volumen", slides: [
              { title: "Einführung", text: "Masse (m) in kg, Volumen (V) in Litern oder Kubikmetern.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie viele Liter (l) passen in einen Kubikdezimeter (dm³)?`, a: "1", s: `1 dm³ = 1 Liter.` }; } },
            { title: "Dichte (rho = m/V)", slides: [
              { title: "Einführung", text: "Dichte gibt an, wie viel Masse pro Volumen vorhanden ist.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{m:10, v:2, a:"5"}, {m:20, v:4, a:"5"}, {m:30, v:10, a:"3"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Masse m=${x.m}kg, V=${x.v}m³. Dichte in kg/m³?`, a: x.a, s: `rho = ${x.m} / ${x.v} = ${x.a}` }; } },
            { title: "Reflexionsgesetz", slides: [
              { title: "Einführung", text: "Einfallswinkel = Reflexionswinkel (alpha = alpha').", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const a=Math.floor(Math.random()*40)+10; return { q: `Einfallswinkel ist ${a}°. Wie groß ist der Reflexionswinkel?`, a: a.toString(), s: `Einfallswinkel = Reflexionswinkel, also ${a}°.` }; } },
            { title: "Spiegelbilder", slides: [
              { title: "Einführung", text: "Eigenschaften: Gleich groß, aufrecht, seitenverkehrt, virtuell.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Sind Bilder am ebenen Spiegel real oder virtuell?`, a: "virtuell", s: `Spiegelbilder sind scheinbar (virtuell).` }; } },
            { title: "Magnetismus", slides: [
              { title: "Einführung", text: "Nordpol und Südpol. Ungleichnamige Pole ziehen sich an, gleichnamige stoßen sich ab.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Ziehen sich zwei Nordpole an oder stoßen sie sich ab?`, a: "abstoßen", s: `Gleichnamige Pole stoßen sich ab.` }; } },
            { title: "Magnetfeld der Erde", slides: [
              { title: "Einführung", text: "Der magnetische Südpol der Erde liegt in der Nähe des geografischen Nordpols.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Welcher magnetische Pol der Erde liegt in der Nähe des Nordpols? (Nordpol/Südpol)`, a: "südpol", s: `Der magnetische Südpol.` }; } }
        ]},
        7: { topics: [
            { title: "Mechanik: Kraft", slides: [
              { title: "Einführung", text: "Kraft (F) in Newton (N). Kraft = Ursache von Verformung/Bewegungsänderung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `In welcher Einheit wird die Kraft gemessen? (Name/Abkürzung)`, a: "newton", s: `Newton (N).` }; } },
            { title: "Hookesches Gesetz", slides: [
              { title: "Einführung", text: "F = D * s (Kraft = Federhärte * Verlängerung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const D=10, s=2; return { q: `Federhärte D=${D} N/m, Dehnung s=${s} m. Kraft F in N?`, a: (D*s).toString(), s: `F = ${D} * ${s} = ${D*s} N` }; } },
            { title: "Hebelgesetz", slides: [
              { title: "Einführung", text: "F1 * l1 = F2 * l2 (Kraft mal Kraftarm = Last mal Lastarm).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{f1:10, l1:2, l2:4, a:"5"}, {f1:20, l1:3, l2:6, a:"10"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `F1=${x.f1}N, l1=${x.l1}m. l2=${x.l2}m. Wie groß muss F2 (in N) sein?`, a: x.a, s: `${x.f1}*${x.l1} = F2*${x.l2} -> F2=${x.a}` }; } },
            { title: "Feste & lose Rollen", slides: [
              { title: "Einführung", text: "Feste Rolle lenkt nur um. Lose Rolle halbiert die Kraft, verdoppelt den Zugweg.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Halbiert eine FESTE Rolle die benötigte Zugkraft? (ja/nein)`, a: "nein", s: `Nur eine lose Rolle halbiert die Kraft. Eine feste lenkt nur um.` }; } },
            { title: "Mechanische Arbeit", slides: [
              { title: "Einführung", text: "W = F * s (Arbeit = Kraft entlang des Weges). Einheit: Joule (J) oder Newtonmeter (Nm).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const F=50, s=4; return { q: `F=${F} N, s=${s} m. Berechne die Arbeit W in Joule.`, a: (F*s).toString(), s: `W = ${F} * ${s} = ${F*s} J.` }; } },
            { title: "Wärmeausdehnung", slides: [
              { title: "Einführung", text: "Körper dehnen sich beim Erwärmen aus und ziehen sich beim Abkühlen zusammen (Ausnahme: Wasseranomalie).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Dehnen sich Metalle beim Erhitzen aus? (ja/nein)`, a: "ja", s: `Ja.` }; } }
        ]},
        8: { topics: [
            { title: "Kalorik", slides: [
              { title: "Einführung", text: "Wärmemenge Q = m * c * DeltaT. (Spezifische Wärmekapazität c).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{m:1, dt:10, a:"42"}, {m:2, dt:10, a:"84"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `m=${x.m}kg Wasser (c=4.2 kJ/kgK), Erwärmung um ${x.dt}K. Q in kJ?`, a: x.a, s: `Q = ${x.m} * 4.2 * ${x.dt} = ${x.a} kJ` }; } },
            { title: "Aggregatzustände", slides: [
              { title: "Einführung", text: "Schmelzen (fest->flüssig), Verdampfen (flüssig->gas), Sublimieren (fest->gas).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie nennt man den Übergang von flüssig zu gasförmig?`, a: "verdampfen", s: `Verdampfen (oder Sieden).` }; } },
            { title: "Stromkreis", slides: [
              { title: "Einführung", text: "Spannungsquelle, Leiter, Verbraucher. Schalter schließt den Kreis.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Fließt Strom in einem offenen oder geschlossenen Stromkreis?`, a: "geschlossen", s: `Nur in einem geschlossenen.` }; } },
            { title: "Schaltungen", slides: [
              { title: "Einführung", text: "Reihenschaltung (Strom überall gleich). Parallelschaltung (Spannung überall gleich).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `In welcher Schaltung (Reihe/Parallel) leuchten alle anderen Lampen weiter, wenn eine kaputt geht?`, a: "parallel", s: `In der Parallelschaltung.` }; } },
            { title: "Ohmsches Gesetz", slides: [
              { title: "Einführung", text: "U = R * I. (Spannung = Widerstand mal Stromstärke).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const v = [{u:12, i:3, a:"4"}, {u:24, i:6, a:"4"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `U=${x.u}V, I=${x.i}A. Berechne R (in Ohm).`, a: x.a, s: `R = U / I = ${x.u} / ${x.i} = ${x.a} Ohm.` }; } },
            { title: "Elektrischer Widerstand", slides: [
              { title: "Einführung", text: "R = rho * l / A. Längerer Draht = größerer Widerstand.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Hat ein längerer Draht einen größeren oder kleineren Widerstand?`, a: "größer", s: `Je länger, desto größer.` }; } }
        ]},
        9: { topics: [
            { title: "Gleichförmige Bewegung", slides: [
              { title: "Einführung", text: "v = s / t. Geschwindigkeit = Weg durch Zeit.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const s=100, t=10; return { q: `s=${s}m, t=${t}s. Geschwindigkeit v in m/s?`, a: (s/t).toString(), s: `v = 100 / 10 = 10 m/s.` }; } },
            { title: "Beschleunigte Bewegung", slides: [
              { title: "Einführung", text: "s = 0.5 * a * t^2.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const a=4, t=3; return { q: `Beschleunigung a=${a} m/s², Zeit t=${t}s. Strecke s?`, a: (0.5*a*t*t).toString(), s: `s = 0.5 * ${a} * ${t}^2 = ${0.5*a*t*t} m.` }; } },
            { title: "Freier Fall", slides: [
              { title: "Einführung", text: "Beschleunigung g = 9.81 m/s² (auf der Erde).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie groß ist die Erdbeschleunigung g (gerundet auf eine Nachkommastelle)?`, a: "9,8", s: `9,81 m/s² (oder 9,8 m/s²).` }; } },
            { title: "Newtonsche Axiome", slides: [
              { title: "Einführung", text: "2. Axiom: F = m * a. Kraft ist Masse mal Beschleunigung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const m=10, a=3; return { q: `m=${m}kg, a=${a} m/s². Berechne F in N.`, a: (m*a).toString(), s: `F = ${m} * ${a} = ${m*a} N.` }; } },
            { title: "Energieerhaltung", slides: [
              { title: "Einführung", text: "In einem abgeschlossenen System bleibt die Gesamtenergie konstant.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Kann Energie erzeugt oder vernichtet werden? (ja/nein)`, a: "nein", s: `Nein, Energie kann nur umgewandelt werden.` }; } },
            { title: "Elektrische Leistung", slides: [
              { title: "Einführung", text: "P = U * I. Einheit der Leistung ist Watt (W).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { const U=230, I=2; return { q: `U=${U}V, I=${I}A. Elektrische Leistung P in Watt?`, a: (U*I).toString(), s: `P = 230 * 2 = 460 W.` }; } }
        ]},
        10: { topics: [
            { title: "Atommodell nach Rutherford", slides: [
              { title: "Einführung", text: "Atom besteht aus kleinem, schweren, positiven Kern und großer, fast leerer Elektronenhülle.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Ist der Atomkern nach Rutherford positiv oder negativ geladen?`, a: "positiv", s: `Der Kern ist positiv (Protonen).` }; } },
            { title: "Radioaktivität", slides: [
              { title: "Einführung", text: "Alpha (Heliumkerne), Beta (Elektronen), Gamma (elektromagnetische Strahlung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Besteht Alpha-Strahlung aus Heliumkernen oder Elektronen?`, a: "heliumkerne", s: `Heliumkerne (2 Protonen, 2 Neutronen).` }; } },
            { title: "Halbwertszeit", slides: [
              { title: "Einführung", text: "Zeit, in der die Hälfte der instabilen Atomkerne zerfällt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Nach wie vielen Halbwertszeiten ist nur noch ein Viertel (25%) der Kerne übrig? (Zahl)`, a: "2", s: `Nach 1 HWZ: 50%. Nach 2 HWZ: 25%.` }; } },
            { title: "Elektromagnetische Induktion", slides: [
              { title: "Einführung", text: "Bewegt sich ein Leiter in einem Magnetfeld, wird eine Spannung induziert.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Entsteht eine Induktionsspannung, wenn Magnet und Spule ruhen? (ja/nein)`, a: "nein", s: `Nein, es muss eine Bewegung (Flussänderung) geben.` }; } },
            { title: "Transformator", slides: [
              { title: "Einführung", text: "U1 / U2 = N1 / N2 (Spannungen verhalten sich wie die Windungszahlen).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `N1=100, N2=200, U1=10V. Berechne U2 (in Volt).`, a: "20", s: `Doppelte Windungszahl = doppelte Spannung -> 20V.` }; } },
            { title: "Kreisbewegung (Zentripetalkraft)", slides: [
              { title: "Einführung", text: "Kraft, die einen Körper auf der Kreisbahn hält. Fz = m * v^2 / r.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
            ],
              generate: () => { return { q: `Wie nennt man die Kraft, die einen Körper zur Kreismitte zieht? (Zentripetal...)`, a: "zentripetalkraft", s: `Die Zentripetalkraft.` }; } }
        ]}
    };
    window.registerModule('phys', PhysEngine);
})();
>>>>>>> Stashed changes
