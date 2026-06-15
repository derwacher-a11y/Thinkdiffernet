<<<<<<< Updated upstream
(function(){
    const GemEngine = {
        5: { topics: [
            { title: "Zusammenleben", slides: [
              { title: "Einführung", text: "Familie, Schule und Freunde bilden die wichtigsten sozialen Gruppen für Kinder.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `In welcher Gruppe wachsen die meisten Kinder als erstes auf? (Die F...)`, a: "familie", s: `Die Familie.` }; } },
            { title: "Kinderrechte", slides: [
              { title: "Einführung", text: "Die UN-Kinderrechtskonvention garantiert z.B. das Recht auf Bildung, Spiel und Schutz vor Gewalt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Haben Kinder weltweit nach der UN-Konvention ein Recht auf Bildung? (ja/nein)`, a: "ja", s: `Ja, das Recht auf Bildung ist ein zentrales Kinderrecht.` }; } },
            { title: "Konsum & Taschengeld", slides: [
              { title: "Einführung", text: "Unterscheidung zwischen lebensnotwendigen Bedürfnissen (Essen) und Wünschen (Spielzeug).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Essen", a:"bedürfnis"}, {q:"Eine neue Spielkonsole", a:"wunsch"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Ist "${x.q}" eher ein Bedürfnis oder ein Wunsch?`, a: x.a, s: `Es ist ein ${x.a}.` }; } },
            { title: "Regeln in der Schule", slides: [
              { title: "Einführung", text: "Die Schulordnung regelt das Zusammenleben. Der Klassensprecher vertritt die Interessen der Klasse.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wer vertritt die Interessen der Schüler einer Klasse gegenüber den Lehrern? (Der Klassen...)`, a: "klassensprecher", s: `Der Klassensprecher.` }; } },
            { title: "Streitschlichtung", slides: [
              { title: "Einführung", text: "Kompromisse finden (beide geben nach) oder Mediation (ein unparteiischer Dritter hilft).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man eine Lösung, bei der beide Seiten etwas nachgeben? (Komp...)`, a: "kompromiss", s: `Ein Kompromiss.` }; } },
            { title: "Mediennutzung", slides: [
              { title: "Einführung", text: "Das Internet birgt Gefahren wie Cybermobbing (Beleidigung/Bedrohung über digitale Medien).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man das absichtliche Beleidigen anderer im Internet? (Cyber...)`, a: "cybermobbing", s: `Cybermobbing.` }; } }
        ]},
        6: { topics: [
            { title: "Die Gemeinde", slides: [
              { title: "Einführung", text: "Die unterste politische Ebene (Stadt/Dorf). An der Spitze steht der Bürgermeister.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie heißt das Oberhaupt einer Gemeinde oder Stadt? (Bürger...)`, a: "bürgermeister", s: `Bürgermeister.` }; } },
            { title: "Aufgaben der Gemeinde", slides: [
              { title: "Einführung", text: "Pflichtaufgaben (Schulbau, Feuerwehr, Müllabfuhr) und freiwillige Aufgaben (Schwimmbad, Theater).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Müllabfuhr", a:"pflichtaufgabe"}, {q:"Schwimmbad", a:"freiwillige aufgabe"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Ist die Erhaltung von "${x.q}" eine Pflichtaufgabe oder freiwillige Aufgabe der Gemeinde?`, a: x.a, s: `Das ist eine ${x.a}.` }; } },
            { title: "Jugend und Freizeit", slides: [
              { title: "Einführung", text: "Vereine fördern das Miteinander. Wer unbezahlt in seiner Freizeit hilft, leistet ein Ehrenamt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man eine unbezahlte, freiwillige Tätigkeit für die Gesellschaft? (Ehr...)`, a: "ehrenamt", s: `Ehrenamt.` }; } },
            { title: "Umweltschutz", slides: [
              { title: "Einführung", text: "Jeder kann beitragen: Mülltrennung, Energiesparen, Recycling (Wiederverwertung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die Wiederverwertung von Abfallprodukten? (Recy...)`, a: "recycling", s: `Recycling.` }; } },
            { title: "Leben mit Behinderung", slides: [
              { title: "Einführung", text: "Inklusion bedeutet, dass alle Menschen selbstbestimmt und gleichberechtigt an der Gesellschaft teilhaben können.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die gleichberechtigte Teilhabe von Menschen mit Behinderung? (Inkl...)`, a: "inklusion", s: `Inklusion.` }; } },
            { title: "Armut und Reichtum", slides: [
              { title: "Einführung", text: "In Deutschland gibt es ein soziales Netz (Bürgergeld/Kindergeld), um existenzielle Armut abzufedern.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Zahlt der Staat Kindergeld, um Familien finanziell zu unterstützen? (ja/nein)`, a: "ja", s: `Ja.` }; } }
        ]},
        7: { topics: [
            { title: "Demokratie vs. Diktatur", slides: [
              { title: "Einführung", text: "Demokratie = Herrschaft des Volkes (Wahlen, Meinungsfreiheit). Diktatur = Herrschaft eines Einzelnen/einer Gruppe ohne freie Wahlen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Gibt es in einer Demokratie freie, geheime und gleiche Wahlen? (ja/nein)`, a: "ja", s: `Ja.` }; } },
            { title: "Gewaltenteilung", slides: [
              { title: "Einführung", text: "Legislative (Gesetzgebung), Exekutive (ausführend, Polizei/Regierung), Judikative (Rechtsprechung, Gerichte).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Gesetzgebende", a:"legislative"}, {q:"Ausführende", a:"exekutive"}, {q:"Richterliche", a:"judikative"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Wie lautet der lateinische Fachbegriff für die ${x.q} Gewalt?`, a: x.a, s: `Die ${x.a}.` }; } },
            { title: "Wahlen zum Bundestag", slides: [
              { title: "Einführung", text: "Erststimme (Direktkandidat im Wahlkreis), Zweitstimme (Partei, entscheidet über die Sitzverteilung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Welche Stimme ist bei der Bundestagswahl wichtiger für die prozentuale Sitzverteilung der Parteien? (Erststimme/Zweitstimme)`, a: "zweitstimme", s: `Die Zweitstimme.` }; } },
            { title: "Grundrechte", slides: [
              { title: "Einführung", text: "Im Grundgesetz verankert. Artikel 1: 'Die Würde des Menschen ist unantastbar'.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Vervollständige GG Artikel 1: "Die Würde des Menschen ist ___."`, a: "unantastbar", s: `Unantastbar.` }; } },
            { title: "Jugendstrafrecht", slides: [
              { title: "Einführung", text: "Ab 14 Jahren ist man in Deutschland strafmündig (kann vor Gericht verurteilt werden). Ziel: Erziehung, nicht Rache.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Ab welchem Lebensjahr ist man in Deutschland strafmündig? (Zahl)`, a: "14", s: `Ab 14 Jahren.` }; } },
            { title: "Medien als 4. Gewalt", slides: [
              { title: "Einführung", text: "Medien informieren, kontrollieren die Politik und bilden Meinungen. Voraussetzung: Pressefreiheit.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Als die wievielte Gewalt (Zahl) werden die Medien in einer Demokratie oft bezeichnet?`, a: "4", s: `Als vierte Gewalt.` }; } }
        ]},
        8: { topics: [
            { title: "Der Markt", slides: [
              { title: "Einführung", text: "Treffpunkt von Angebot (Verkäufer) und Nachfrage (Käufer). Der Preis bildet sich aus dem Verhältnis beider.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wenn die Nachfrage sehr hoch ist, das Angebot aber gering, steigt oder sinkt der Preis?`, a: "steigt", s: `Der Preis steigt.` }; } },
            { title: "Geld und Banken", slides: [
              { title: "Einführung", text: "Funktionen von Geld: Zahlungsmittel, Wertaufbewahrungsmittel, Wertmaßstab.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Kann Geld neben der Bezahlung auch als Wertaufbewahrungsmittel (Sparen) dienen? (ja/nein)`, a: "ja", s: `Ja.` }; } },
            { title: "Soziale Marktwirtschaft", slides: [
              { title: "Einführung", text: "Wirtschaftsordnung in Dtl.: Freier Markt, aber der Staat greift sozial ein (Kündigungsschutz, Sozialhilfe).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die Wirtschaftsordnung in Deutschland? (___ Marktwirtschaft)`, a: "soziale", s: `Soziale Marktwirtschaft.` }; } },
            { title: "Werbung", slides: [
              { title: "Einführung", text: "Werbung zielt darauf ab, künstliche Bedürfnisse zu wecken, um den Konsum (Verkauf) zu steigern.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Soll Werbung den Konsum der Menschen steigern oder senken?`, a: "steigern", s: `Steigern.` }; } },
            { title: "Extremismus", slides: [
              { title: "Einführung", text: "Politische Bestrebungen, die den demokratischen Verfassungsstaat abschaffen wollen (Rechts-/Linksextremismus).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Befürworten Extremisten die demokratische Grundordnung? (ja/nein)`, a: "nein", s: `Nein, sie wollen diese abschaffen.` }; } },
            { title: "Wahlen in der Kommune", slides: [
              { title: "Einführung", text: "Bürgerentscheid: Direkte Abstimmung der Bürger über Sachfragen (z.B. Bau eines neuen Stadions).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die direkte Abstimmung der Bevölkerung über eine Sachfrage vor Ort? (Bürger...)`, a: "bürgerentscheid", s: `Bürgerentscheid.` }; } }
        ]},
        9: { topics: [
            { title: "Europäische Union", slides: [
              { title: "Einführung", text: "Institutionen: EU-Parlament (Bürger), Europäischer Rat (Staatschefs), EU-Kommission (Regierung/Gesetzentwürfe).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Werden die Abgeordneten des EU-Parlaments direkt von den Bürgern gewählt? (ja/nein)`, a: "ja", s: `Ja, bei der Europawahl.` }; } },
            { title: "Binnenmarkt", slides: [
              { title: "Einführung", text: "Die vier Freiheiten in der EU: Freier Verkehr von Personen, Waren, Dienstleistungen und Kapital.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Darf ein Deutscher ohne Visum in Frankreich arbeiten und leben? (ja/nein)`, a: "ja", s: `Ja (Personenfreizügigkeit).` }; } },
            { title: "Flucht und Asyl", slides: [
              { title: "Einführung", text: "Asyl erhält in Deutschland, wer in seiner Heimat politisch verfolgt wird (gemäß Grundgesetz).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Gibt es in Deutschland ein im Grundgesetz verankertes Recht auf Asyl für politisch Verfolgte? (ja/nein)`, a: "ja", s: `Ja.` }; } },
            { title: "Sozialstaat", slides: [
              { title: "Einführung", text: "Fünf Säulen der Sozialversicherung: Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Kosten für den Arzt", a:"krankenversicherung"}, {q:"Geld im Alter", a:"rentenversicherung"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Welche Sozialversicherung zahlt bei "${x.q}"?`, a: x.a, s: `Die ${x.a}.` }; } },
            { title: "Tarifverträge", slides: [
              { title: "Einführung", text: "Gewerkschaften (Arbeitnehmer) und Arbeitgeberverbände handeln Löhne und Arbeitszeiten in Tarifverträgen aus.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man den Zusammenschluss von Arbeitnehmern, der z.B. für mehr Lohn streikt? (Gew...)`, a: "gewerkschaften", s: `Gewerkschaften.` }; } },
            { title: "Parteien", slides: [
              { title: "Einführung", text: "Parteien bündeln Interessen und stellen Kandidaten für Wahlen auf. Deutschland ist ein Mehrparteiensystem.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Sind in einer Demokratie in der Regel eine oder mehrere Parteien erlaubt? (eine/mehrere)`, a: "mehrere", s: `Mehrere (Pluralismus).` }; } }
        ]},
        10: { topics: [
            { title: "UNO (Vereinte Nationen)", slides: [
              { title: "Einführung", text: "Weltorganisation zur Sicherung des Weltfriedens. Sitz in New York. Hauptgremium: UN-Sicherheitsrat.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `In welcher US-Stadt befindet sich das Hauptquartier der UNO?`, a: "new york", s: `New York.` }; } },
            { title: "Bundeswehr", slides: [
              { title: "Einführung", text: "Parlamentsarmee: Auslandseinsätze der Bundeswehr müssen zwingend vom Deutschen Bundestag gebilligt werden.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wer muss Auslandseinsätzen der Bundeswehr zustimmen? (Der Bundes...)`, a: "bundestag", s: `Der Bundestag.` }; } },
            { title: "Globalisierung der Wirtschaft", slides: [
              { title: "Einführung", text: "Unternehmen produzieren dort, wo es am billigsten ist. Freihandel (ohne Zölle) treibt dies an.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Erschweren oder erleichtern weltweite Zölle den Freihandel?`, a: "erschweren", s: `Sie erschweren ihn (Protektionismus).` }; } },
            { title: "Klimapolitik", slides: [
              { title: "Einführung", text: "Pariser Abkommen (2015): Begrenzung der globalen Erwärmung auf deutlich unter 2°C.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `In welcher französischen Hauptstadt wurde 2015 das globale Klimaabkommen geschlossen?`, a: "paris", s: `In Paris.` }; } },
            { title: "Herausforderungen der Demokratie", slides: [
              { title: "Einführung", text: "Populismus: Bietet einfache Schein-Lösungen für komplexe Probleme und spaltet die Gesellschaft ("Wir gegen Die").", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man Politiker, die mit starken Emotionen und einfachen (Schein-)Lösungen Stimmung machen? (Popu...)`, a: "populisten", s: `Populisten.` }; } },
            { title: "Sicherheitspolitik (NATO)", slides: [
              { title: "Einführung", text: "Die NATO ist ein westliches Militärbündnis. Artikel 5 regelt den Bündnisfall (Angriff auf einen ist Angriff auf alle).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Ist die NATO ein wirtschaftliches oder ein militärisches Bündnis?`, a: "militärisches", s: `Ein militärisches Verteidigungsbündnis.` }; } }
        ]}
    };
    window.registerModule('gem', GemEngine);
})();
=======
(function(){
    const GemEngine = {
        5: { topics: [
            { title: "Zusammenleben", slides: [
              { title: "Einführung", text: "Familie, Schule und Freunde bilden die wichtigsten sozialen Gruppen für Kinder.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `In welcher Gruppe wachsen die meisten Kinder als erstes auf? (Die F...)`, a: "familie", s: `Die Familie.` }; } },
            { title: "Kinderrechte", slides: [
              { title: "Einführung", text: "Die UN-Kinderrechtskonvention garantiert z.B. das Recht auf Bildung, Spiel und Schutz vor Gewalt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Haben Kinder weltweit nach der UN-Konvention ein Recht auf Bildung? (ja/nein)`, a: "ja", s: `Ja, das Recht auf Bildung ist ein zentrales Kinderrecht.` }; } },
            { title: "Konsum & Taschengeld", slides: [
              { title: "Einführung", text: "Unterscheidung zwischen lebensnotwendigen Bedürfnissen (Essen) und Wünschen (Spielzeug).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Essen", a:"bedürfnis"}, {q:"Eine neue Spielkonsole", a:"wunsch"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Ist "${x.q}" eher ein Bedürfnis oder ein Wunsch?`, a: x.a, s: `Es ist ein ${x.a}.` }; } },
            { title: "Regeln in der Schule", slides: [
              { title: "Einführung", text: "Die Schulordnung regelt das Zusammenleben. Der Klassensprecher vertritt die Interessen der Klasse.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wer vertritt die Interessen der Schüler einer Klasse gegenüber den Lehrern? (Der Klassen...)`, a: "klassensprecher", s: `Der Klassensprecher.` }; } },
            { title: "Streitschlichtung", slides: [
              { title: "Einführung", text: "Kompromisse finden (beide geben nach) oder Mediation (ein unparteiischer Dritter hilft).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man eine Lösung, bei der beide Seiten etwas nachgeben? (Komp...)`, a: "kompromiss", s: `Ein Kompromiss.` }; } },
            { title: "Mediennutzung", slides: [
              { title: "Einführung", text: "Das Internet birgt Gefahren wie Cybermobbing (Beleidigung/Bedrohung über digitale Medien).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man das absichtliche Beleidigen anderer im Internet? (Cyber...)`, a: "cybermobbing", s: `Cybermobbing.` }; } }
        ]},
        6: { topics: [
            { title: "Die Gemeinde", slides: [
              { title: "Einführung", text: "Die unterste politische Ebene (Stadt/Dorf). An der Spitze steht der Bürgermeister.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie heißt das Oberhaupt einer Gemeinde oder Stadt? (Bürger...)`, a: "bürgermeister", s: `Bürgermeister.` }; } },
            { title: "Aufgaben der Gemeinde", slides: [
              { title: "Einführung", text: "Pflichtaufgaben (Schulbau, Feuerwehr, Müllabfuhr) und freiwillige Aufgaben (Schwimmbad, Theater).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Müllabfuhr", a:"pflichtaufgabe"}, {q:"Schwimmbad", a:"freiwillige aufgabe"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Ist die Erhaltung von "${x.q}" eine Pflichtaufgabe oder freiwillige Aufgabe der Gemeinde?`, a: x.a, s: `Das ist eine ${x.a}.` }; } },
            { title: "Jugend und Freizeit", slides: [
              { title: "Einführung", text: "Vereine fördern das Miteinander. Wer unbezahlt in seiner Freizeit hilft, leistet ein Ehrenamt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man eine unbezahlte, freiwillige Tätigkeit für die Gesellschaft? (Ehr...)`, a: "ehrenamt", s: `Ehrenamt.` }; } },
            { title: "Umweltschutz", slides: [
              { title: "Einführung", text: "Jeder kann beitragen: Mülltrennung, Energiesparen, Recycling (Wiederverwertung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die Wiederverwertung von Abfallprodukten? (Recy...)`, a: "recycling", s: `Recycling.` }; } },
            { title: "Leben mit Behinderung", slides: [
              { title: "Einführung", text: "Inklusion bedeutet, dass alle Menschen selbstbestimmt und gleichberechtigt an der Gesellschaft teilhaben können.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die gleichberechtigte Teilhabe von Menschen mit Behinderung? (Inkl...)`, a: "inklusion", s: `Inklusion.` }; } },
            { title: "Armut und Reichtum", slides: [
              { title: "Einführung", text: "In Deutschland gibt es ein soziales Netz (Bürgergeld/Kindergeld), um existenzielle Armut abzufedern.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Zahlt der Staat Kindergeld, um Familien finanziell zu unterstützen? (ja/nein)`, a: "ja", s: `Ja.` }; } }
        ]},
        7: { topics: [
            { title: "Demokratie vs. Diktatur", slides: [
              { title: "Einführung", text: "Demokratie = Herrschaft des Volkes (Wahlen, Meinungsfreiheit). Diktatur = Herrschaft eines Einzelnen/einer Gruppe ohne freie Wahlen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Gibt es in einer Demokratie freie, geheime und gleiche Wahlen? (ja/nein)`, a: "ja", s: `Ja.` }; } },
            { title: "Gewaltenteilung", slides: [
              { title: "Einführung", text: "Legislative (Gesetzgebung), Exekutive (ausführend, Polizei/Regierung), Judikative (Rechtsprechung, Gerichte).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Gesetzgebende", a:"legislative"}, {q:"Ausführende", a:"exekutive"}, {q:"Richterliche", a:"judikative"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Wie lautet der lateinische Fachbegriff für die ${x.q} Gewalt?`, a: x.a, s: `Die ${x.a}.` }; } },
            { title: "Wahlen zum Bundestag", slides: [
              { title: "Einführung", text: "Erststimme (Direktkandidat im Wahlkreis), Zweitstimme (Partei, entscheidet über die Sitzverteilung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Welche Stimme ist bei der Bundestagswahl wichtiger für die prozentuale Sitzverteilung der Parteien? (Erststimme/Zweitstimme)`, a: "zweitstimme", s: `Die Zweitstimme.` }; } },
            { title: "Grundrechte", slides: [
              { title: "Einführung", text: "Im Grundgesetz verankert. Artikel 1: 'Die Würde des Menschen ist unantastbar'.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Vervollständige GG Artikel 1: "Die Würde des Menschen ist ___."`, a: "unantastbar", s: `Unantastbar.` }; } },
            { title: "Jugendstrafrecht", slides: [
              { title: "Einführung", text: "Ab 14 Jahren ist man in Deutschland strafmündig (kann vor Gericht verurteilt werden). Ziel: Erziehung, nicht Rache.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Ab welchem Lebensjahr ist man in Deutschland strafmündig? (Zahl)`, a: "14", s: `Ab 14 Jahren.` }; } },
            { title: "Medien als 4. Gewalt", slides: [
              { title: "Einführung", text: "Medien informieren, kontrollieren die Politik und bilden Meinungen. Voraussetzung: Pressefreiheit.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Als die wievielte Gewalt (Zahl) werden die Medien in einer Demokratie oft bezeichnet?`, a: "4", s: `Als vierte Gewalt.` }; } }
        ]},
        8: { topics: [
            { title: "Der Markt", slides: [
              { title: "Einführung", text: "Treffpunkt von Angebot (Verkäufer) und Nachfrage (Käufer). Der Preis bildet sich aus dem Verhältnis beider.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wenn die Nachfrage sehr hoch ist, das Angebot aber gering, steigt oder sinkt der Preis?`, a: "steigt", s: `Der Preis steigt.` }; } },
            { title: "Geld und Banken", slides: [
              { title: "Einführung", text: "Funktionen von Geld: Zahlungsmittel, Wertaufbewahrungsmittel, Wertmaßstab.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Kann Geld neben der Bezahlung auch als Wertaufbewahrungsmittel (Sparen) dienen? (ja/nein)`, a: "ja", s: `Ja.` }; } },
            { title: "Soziale Marktwirtschaft", slides: [
              { title: "Einführung", text: "Wirtschaftsordnung in Dtl.: Freier Markt, aber der Staat greift sozial ein (Kündigungsschutz, Sozialhilfe).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die Wirtschaftsordnung in Deutschland? (___ Marktwirtschaft)`, a: "soziale", s: `Soziale Marktwirtschaft.` }; } },
            { title: "Werbung", slides: [
              { title: "Einführung", text: "Werbung zielt darauf ab, künstliche Bedürfnisse zu wecken, um den Konsum (Verkauf) zu steigern.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Soll Werbung den Konsum der Menschen steigern oder senken?`, a: "steigern", s: `Steigern.` }; } },
            { title: "Extremismus", slides: [
              { title: "Einführung", text: "Politische Bestrebungen, die den demokratischen Verfassungsstaat abschaffen wollen (Rechts-/Linksextremismus).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Befürworten Extremisten die demokratische Grundordnung? (ja/nein)`, a: "nein", s: `Nein, sie wollen diese abschaffen.` }; } },
            { title: "Wahlen in der Kommune", slides: [
              { title: "Einführung", text: "Bürgerentscheid: Direkte Abstimmung der Bürger über Sachfragen (z.B. Bau eines neuen Stadions).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man die direkte Abstimmung der Bevölkerung über eine Sachfrage vor Ort? (Bürger...)`, a: "bürgerentscheid", s: `Bürgerentscheid.` }; } }
        ]},
        9: { topics: [
            { title: "Europäische Union", slides: [
              { title: "Einführung", text: "Institutionen: EU-Parlament (Bürger), Europäischer Rat (Staatschefs), EU-Kommission (Regierung/Gesetzentwürfe).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Werden die Abgeordneten des EU-Parlaments direkt von den Bürgern gewählt? (ja/nein)`, a: "ja", s: `Ja, bei der Europawahl.` }; } },
            { title: "Binnenmarkt", slides: [
              { title: "Einführung", text: "Die vier Freiheiten in der EU: Freier Verkehr von Personen, Waren, Dienstleistungen und Kapital.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Darf ein Deutscher ohne Visum in Frankreich arbeiten und leben? (ja/nein)`, a: "ja", s: `Ja (Personenfreizügigkeit).` }; } },
            { title: "Flucht und Asyl", slides: [
              { title: "Einführung", text: "Asyl erhält in Deutschland, wer in seiner Heimat politisch verfolgt wird (gemäß Grundgesetz).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Gibt es in Deutschland ein im Grundgesetz verankertes Recht auf Asyl für politisch Verfolgte? (ja/nein)`, a: "ja", s: `Ja.` }; } },
            { title: "Sozialstaat", slides: [
              { title: "Einführung", text: "Fünf Säulen der Sozialversicherung: Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { const v = [{q:"Kosten für den Arzt", a:"krankenversicherung"}, {q:"Geld im Alter", a:"rentenversicherung"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Welche Sozialversicherung zahlt bei "${x.q}"?`, a: x.a, s: `Die ${x.a}.` }; } },
            { title: "Tarifverträge", slides: [
              { title: "Einführung", text: "Gewerkschaften (Arbeitnehmer) und Arbeitgeberverbände handeln Löhne und Arbeitszeiten in Tarifverträgen aus.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man den Zusammenschluss von Arbeitnehmern, der z.B. für mehr Lohn streikt? (Gew...)`, a: "gewerkschaften", s: `Gewerkschaften.` }; } },
            { title: "Parteien", slides: [
              { title: "Einführung", text: "Parteien bündeln Interessen und stellen Kandidaten für Wahlen auf. Deutschland ist ein Mehrparteiensystem.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Sind in einer Demokratie in der Regel eine oder mehrere Parteien erlaubt? (eine/mehrere)`, a: "mehrere", s: `Mehrere (Pluralismus).` }; } }
        ]},
        10: { topics: [
            { title: "UNO (Vereinte Nationen)", slides: [
              { title: "Einführung", text: "Weltorganisation zur Sicherung des Weltfriedens. Sitz in New York. Hauptgremium: UN-Sicherheitsrat.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `In welcher US-Stadt befindet sich das Hauptquartier der UNO?`, a: "new york", s: `New York.` }; } },
            { title: "Bundeswehr", slides: [
              { title: "Einführung", text: "Parlamentsarmee: Auslandseinsätze der Bundeswehr müssen zwingend vom Deutschen Bundestag gebilligt werden.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wer muss Auslandseinsätzen der Bundeswehr zustimmen? (Der Bundes...)`, a: "bundestag", s: `Der Bundestag.` }; } },
            { title: "Globalisierung der Wirtschaft", slides: [
              { title: "Einführung", text: "Unternehmen produzieren dort, wo es am billigsten ist. Freihandel (ohne Zölle) treibt dies an.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Erschweren oder erleichtern weltweite Zölle den Freihandel?`, a: "erschweren", s: `Sie erschweren ihn (Protektionismus).` }; } },
            { title: "Klimapolitik", slides: [
              { title: "Einführung", text: "Pariser Abkommen (2015): Begrenzung der globalen Erwärmung auf deutlich unter 2°C.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `In welcher französischen Hauptstadt wurde 2015 das globale Klimaabkommen geschlossen?`, a: "paris", s: `In Paris.` }; } },
            { title: "Herausforderungen der Demokratie", slides: [
              { title: "Einführung", text: "Populismus: Bietet einfache Schein-Lösungen für komplexe Probleme und spaltet die Gesellschaft ("Wir gegen Die").", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Wie nennt man Politiker, die mit starken Emotionen und einfachen (Schein-)Lösungen Stimmung machen? (Popu...)`, a: "populisten", s: `Populisten.` }; } },
            { title: "Sicherheitspolitik (NATO)", slides: [
              { title: "Einführung", text: "Die NATO ist ein westliches Militärbündnis. Artikel 5 regelt den Bündnisfall (Angriff auf einen ist Angriff auf alle).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
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
              generate: () => { return { q: `Ist die NATO ein wirtschaftliches oder ein militärisches Bündnis?`, a: "militärisches", s: `Ein militärisches Verteidigungsbündnis.` }; } }
        ]}
    };
    window.registerModule('gem', GemEngine);
})();
>>>>>>> Stashed changes
