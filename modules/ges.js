<<<<<<< Updated upstream
(function(){
    const GesEngine = {
        5: { topics: [
            { title: "Was ist Geschichte?", slides: [
              { title: "Einführung", text: "Historiker nutzen Quellen, um die Vergangenheit zu erforschen: Textquellen, Bildquellen, Sachquellen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Ist eine alte Münze eine Textquelle oder eine Sachquelle?`, a: "sachquelle", s: `Eine Sachquelle.` }; } },
            { title: "Epochen", slides: [
              { title: "Einführung", text: "Die Geschichte wird in Urgeschichte, Antike, Mittelalter und Neuzeit unterteilt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Epoche folgt nach der Antike? (Das Mit...)`, a: "mittelalter", s: `Das Mittelalter.` }; } },
            { title: "Altsteinzeit", slides: [
              { title: "Einführung", text: "Die Menschen waren Jäger und Sammler, lebten nomadisch und nutzten Feuer und Steinwerkzeuge.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Waren die Menschen der Altsteinzeit sesshaft oder nomadisch (herumziehend)?`, a: "nomadisch", s: `Nomadisch (als Jäger und Sammler).` }; } },
            { title: "Jungsteinzeit", slides: [
              { title: "Einführung", text: "Neolithische Revolution: Die Menschen wurden sesshaft, betrieben Ackerbau und Viehzucht.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurden die Menschen in der Alt- oder in der Jungsteinzeit sesshaft?`, a: "jungsteinzeit", s: `In der Jungsteinzeit.` }; } },
            { title: "Metallzeiten", slides: [
              { title: "Einführung", text: "Auf die Steinzeit folgten die Kupfer-, Bronze- und Eisenzeit, benannt nach den neuen Werkstoffen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welches Metall war zuerst da: Eisen oder Kupfer?`, a: "kupfer", s: `Kupfer.` }; } },
            { title: "Leben in der Vorgeschichte", slides: [
              { title: "Einführung", text: "Wandmalereien in Höhlen zeigen oft Jagdszenen (z.B. Höhle von Lascaux).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Bilder malten die Frühmenschen oft an die Wände ihrer Höhlen? (Jagd...)`, a: "jagdszenen", s: `Jagdszenen / Tiere.` }; } }
        ]},
        6: { topics: [
            { title: "Altes Ägypten", slides: [
              { title: "Einführung", text: "Eine Hochkultur am Nil. An der Spitze stand der Pharao als Gottkönig.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher Fluss war die Lebensader des alten Ägyptens?`, a: "nil", s: `Der Nil.` }; } },
            { title: "Ägyptische Gesellschaft", slides: [
              { title: "Einführung", text: "Die Gesellschaft war wie eine Pyramide aufgebaut. Beamte (Schreiber) waren sehr wichtig. Die Schrift waren die Hieroglyphen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man die Bilderschrift der alten Ägypter?`, a: "hieroglyphen", s: `Hieroglyphen.` }; } },
            { title: "Antikes Griechenland", slides: [
              { title: "Einführung", text: "Griechenland bestand aus vielen unabhängigen Stadtstaaten (Polis). Sie teilten Sprache und Götter.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wo fanden zu Ehren des Gottes Zeus die berühmten antiken Sportwettkämpfe statt?`, a: "olympia", s: `In Olympia (Olympische Spiele).` }; } },
            { title: "Athen vs. Sparta", slides: [
              { title: "Einführung", text: "Athen war der Geburtsort der Demokratie (Volksherrschaft). Sparta war streng militärisch organisiert.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wo wurde die Demokratie erfunden: in Athen oder in Sparta?`, a: "athen", s: `In Athen.` }; } },
            { title: "Römisches Reich: Gründung", slides: [
              { title: "Einführung", text: "Nach der Sage wurde Rom 753 v. Chr. von Romulus und Remus gegründet.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welches Tier hat der Sage nach die Gründer Roms (Romulus & Remus) gesäugt? (Eine W...)`, a: "wölfin", s: `Eine Wölfin.` }; } },
            { title: "Römisches Reich: Alltag", slides: [
              { title: "Einführung", text: "In der Arena (Kolosseum) kämpften Gladiatoren zur Unterhaltung des Volkes ('Panem et circenses').", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nannte man die Schwertkämpfer, die in römischen Arenen zur Unterhaltung kämpften?`, a: "gladiatoren", s: `Gladiatoren.` }; } }
        ]},
        7: { topics: [
            { title: "Frühmittelalter & Frankenreich", slides: [
              { title: "Einführung", text: "Karl der Große wurde im Jahr 800 zum Kaiser gekrönt und einte große Teile Europas.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher Frankenkönig wurde im Jahr 800 in Rom zum Kaiser gekrönt? (Vorname)`, a: "karl", s: `Karl der Große.` }; } },
            { title: "Lehnswesen", slides: [
              { title: "Einführung", text: "Der König (Lehnsherr) gab Land an Adlige (Vasallen) im Austausch für Treue und Kriegsdienste.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nannte man im Mittelalter das Land, das verliehen wurde? (L...)`, a: "lehen", s: `Das Lehen.` }; } },
            { title: "Rittertum", slides: [
              { title: "Einführung", text: "Die Ritter lebten auf Burgen, folgten ritterlichen Tugenden und führten Turniere durch.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Woraus bestand die schützende Rüstung der Ritter im Hochmittelalter oft? (Ketten...)`, a: "kettenhemd", s: `Kettenhemd (und Plattenrüstung).` }; } },
            { title: "Leben im Kloster", slides: [
              { title: "Einführung", text: "Mönche und Nonnen lebten nach strengen Regeln ('ora et labora' - bete und arbeite).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Was übersetzt man mit 'ora et labora'? (bete und ...)`, a: "arbeite", s: `Bete und arbeite.` }; } },
            { title: "Mittelalterliche Stadt", slides: [
              { title: "Einführung", text: "Handwerker organisierten sich in Zünften, Kaufleute in Gilden. Städte boten Freiheit ('Stadtluft macht frei').", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchen Verbänden organisierten sich die Handwerker einer Stadt? (Z...)`, a: "zünften", s: `In Zünften.` }; } },
            { title: "Kreuzzüge", slides: [
              { title: "Einführung", text: "Vom Papst ausgerufene Kriege zur Rückeroberung Jerusalems von den Muslimen (ab 1095).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche "heilige Stadt" wollten die Christen bei den Kreuzzügen erobern?`, a: "jerusalem", s: `Jerusalem.` }; } }
        ]},
        8: { topics: [
            { title: "Renaissance & Humanismus", slides: [
              { title: "Einführung", text: "Wiedergeburt der Antike. Der Mensch (Individuum) steht im Mittelpunkt. Universalgenies wie da Vinci.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher berühmte Renaissance-Künstler malte die Mona Lisa? (Vor- und Nachname)`, a: "leonardo da vinci", s: `Leonardo da Vinci.` }; } },
            { title: "Entdeckungsfahrten", slides: [
              { title: "Einführung", text: "Kolumbus suchte 1492 einen Seeweg nach Indien und entdeckte versehentlich Amerika.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr entdeckte Christoph Kolumbus Amerika?`, a: "1492", s: `Im Jahr 1492.` }; } },
            { title: "Reformation", slides: [
              { title: "Einführung", text: "1517 veröffentlichte Martin Luther seine 95 Thesen gegen den Ablasshandel der Kirche.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wer startete die Reformation mit seinem Thesenanschlag 1517? (Vor- und Nachname)`, a: "martin luther", s: `Martin Luther.` }; } },
            { title: "Dreißigjähriger Krieg", slides: [
              { title: "Einführung", text: "Ging von 1618 bis 1648. Ausgelöst durch den Prager Fenstersturz (Religionskonflikt, später Machtkampf).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welcher Stadt löste ein Fenstersturz 1618 den Dreißigjährigen Krieg aus?`, a: "prag", s: `In Prag.` }; } },
            { title: "Absolutismus", slides: [
              { title: "Einführung", text: "Der König hat uneingeschränkte Macht ('Der Staat bin ich'). Vorbild: Ludwig XIV., der Sonnenkönig in Versailles.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie wurde der französische König Ludwig XIV. auch genannt? (Der ...könig)`, a: "sonnenkönig", s: `Sonnenkönig.` }; } },
            { title: "Aufklärung", slides: [
              { title: "Einführung", text: "Epoche der Vernunft. Forderung nach Freiheit, Gleichheit und Gewaltenteilung (Locke, Montesquieu, Kant).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Nutze laut Immanuel Kant deinen eigenen...? (V...)`, a: "verstand", s: `Verstand.` }; } }
        ]},
        9: { topics: [
            { title: "Französische Revolution", slides: [
              { title: "Einführung", text: "1789: Sturm auf die Bastille. Ende des Absolutismus, Forderung nach 'Freiheit, Gleichheit, Brüderlichkeit'.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr begann die Französische Revolution?`, a: "1789", s: `1789.` }; } },
            { title: "Napoleon Bonaparte", slides: [
              { title: "Einführung", text: "Eroberte große Teile Europas und führte Reformen ein (Code Civil), scheiterte aber beim Russlandfeldzug.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Land scheiterte Napoleons große Armee im Winter kläglich?`, a: "russland", s: `In Russland.` }; } },
            { title: "Industrielle Revolution", slides: [
              { title: "Einführung", text: "Übergang von der Agrar- zur Industriegesellschaft (ab ca. 1800). Wichtige Erfindung: die Dampfmaschine.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Maschine (perfektioniert von James Watt) trieb die Industrialisierung an?`, a: "dampfmaschine", s: `Die Dampfmaschine.` }; } },
            { title: "Reichsgründung 1871", slides: [
              { title: "Einführung", text: "Nach dem Sieg über Frankreich wurde in Versailles das Deutsche Kaiserreich unter Kanzler Bismarck gegründet.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wer war der erste Reichskanzler des 1871 gegründeten Deutschen Reiches? (Nachname)`, a: "bismarck", s: `Otto von Bismarck.` }; } },
            { title: "Imperialismus", slides: [
              { title: "Einführung", text: "Großmächte teilten die Welt (besonders Afrika und Asien) als Kolonien unter sich auf (Wettlauf um Afrika).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nannte man die Gebiete in Übersee, die von Europäern beherrscht und ausgebeutet wurden?`, a: "kolonien", s: `Kolonien.` }; } },
            { title: "Erster Weltkrieg", slides: [
              { title: "Einführung", text: "1914-1918. Ausgelöst durch das Attentat von Sarajevo. Charakteristisch war der brutale Stellungskrieg.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welcher Stadt fand das Attentat statt, das den 1. WK auslöste?`, a: "sarajevo", s: `In Sarajevo.` }; } }
        ]},
        10: { topics: [
            { title: "Weimarer Republik", slides: [
              { title: "Einführung", text: "Die erste Demokratie in Deutschland (1918-1933). Belastet durch den Versailler Vertrag und Wirtschaftskrisen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie hieß der Friedensvertrag, der Deutschland nach dem 1. Weltkrieg harte Bedingungen auferlegte?`, a: "versailler vertrag", s: `Versailler Vertrag.` }; } },
            { title: "Nationalsozialismus", slides: [
              { title: "Einführung", text: "Adolf Hitler wird 1933 Reichskanzler, errichtet eine Diktatur, beseitigt Gegner und führt Gesetze gegen Juden ein.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr wurde Adolf Hitler Reichskanzler (Machtergreifung)?`, a: "1933", s: `1933.` }; } },
            { title: "Zweiter Weltkrieg", slides: [
              { title: "Einführung", text: "Begann 1939 mit dem deutschen Überfall auf Polen und endete 1945 mit der bedingungslosen Kapitulation.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Der Überfall auf welches Land markierte 1939 den Beginn des 2. Weltkriegs?`, a: "polen", s: `Polen.` }; } },
            { title: "Holocaust (Shoah)", slides: [
              { title: "Einführung", text: "Der systematische, staatlich organisierte Völkermord an etwa 6 Millionen europäischen Juden durch die Nazis.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie lautet der Fachbegriff für den Völkermord an den Juden?`, a: "holocaust", s: `Holocaust (oder Shoah).` }; } },
            { title: "Kalter Krieg & Teilung", slides: [
              { title: "Einführung", text: "Systemkonflikt zwischen USA (Westen) und Sowjetunion (Osten). Deutschland wurde geteilt (BRD und DDR).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr wurde die Berliner Mauer gebaut?`, a: "1961", s: `Im Jahr 1961.` }; } },
            { title: "Wiedervereinigung", slides: [
              { title: "Einführung", text: "Nach der Friedlichen Revolution in der DDR fiel 1989 die Mauer, am 3. Oktober 1990 wurde Deutschland wiedervereint.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr fiel die Berliner Mauer?`, a: "1989", s: `Im Jahr 1989.` }; } }
        ]}
    };
    window.registerModule('ges', GesEngine);
})();
=======
(function(){
    const GesEngine = {
        5: { topics: [
            { title: "Was ist Geschichte?", slides: [
              { title: "Einführung", text: "Historiker nutzen Quellen, um die Vergangenheit zu erforschen: Textquellen, Bildquellen, Sachquellen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Ist eine alte Münze eine Textquelle oder eine Sachquelle?`, a: "sachquelle", s: `Eine Sachquelle.` }; } },
            { title: "Epochen", slides: [
              { title: "Einführung", text: "Die Geschichte wird in Urgeschichte, Antike, Mittelalter und Neuzeit unterteilt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Epoche folgt nach der Antike? (Das Mit...)`, a: "mittelalter", s: `Das Mittelalter.` }; } },
            { title: "Altsteinzeit", slides: [
              { title: "Einführung", text: "Die Menschen waren Jäger und Sammler, lebten nomadisch und nutzten Feuer und Steinwerkzeuge.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Waren die Menschen der Altsteinzeit sesshaft oder nomadisch (herumziehend)?`, a: "nomadisch", s: `Nomadisch (als Jäger und Sammler).` }; } },
            { title: "Jungsteinzeit", slides: [
              { title: "Einführung", text: "Neolithische Revolution: Die Menschen wurden sesshaft, betrieben Ackerbau und Viehzucht.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurden die Menschen in der Alt- oder in der Jungsteinzeit sesshaft?`, a: "jungsteinzeit", s: `In der Jungsteinzeit.` }; } },
            { title: "Metallzeiten", slides: [
              { title: "Einführung", text: "Auf die Steinzeit folgten die Kupfer-, Bronze- und Eisenzeit, benannt nach den neuen Werkstoffen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welches Metall war zuerst da: Eisen oder Kupfer?`, a: "kupfer", s: `Kupfer.` }; } },
            { title: "Leben in der Vorgeschichte", slides: [
              { title: "Einführung", text: "Wandmalereien in Höhlen zeigen oft Jagdszenen (z.B. Höhle von Lascaux).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Bilder malten die Frühmenschen oft an die Wände ihrer Höhlen? (Jagd...)`, a: "jagdszenen", s: `Jagdszenen / Tiere.` }; } }
        ]},
        6: { topics: [
            { title: "Altes Ägypten", slides: [
              { title: "Einführung", text: "Eine Hochkultur am Nil. An der Spitze stand der Pharao als Gottkönig.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher Fluss war die Lebensader des alten Ägyptens?`, a: "nil", s: `Der Nil.` }; } },
            { title: "Ägyptische Gesellschaft", slides: [
              { title: "Einführung", text: "Die Gesellschaft war wie eine Pyramide aufgebaut. Beamte (Schreiber) waren sehr wichtig. Die Schrift waren die Hieroglyphen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man die Bilderschrift der alten Ägypter?`, a: "hieroglyphen", s: `Hieroglyphen.` }; } },
            { title: "Antikes Griechenland", slides: [
              { title: "Einführung", text: "Griechenland bestand aus vielen unabhängigen Stadtstaaten (Polis). Sie teilten Sprache und Götter.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wo fanden zu Ehren des Gottes Zeus die berühmten antiken Sportwettkämpfe statt?`, a: "olympia", s: `In Olympia (Olympische Spiele).` }; } },
            { title: "Athen vs. Sparta", slides: [
              { title: "Einführung", text: "Athen war der Geburtsort der Demokratie (Volksherrschaft). Sparta war streng militärisch organisiert.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wo wurde die Demokratie erfunden: in Athen oder in Sparta?`, a: "athen", s: `In Athen.` }; } },
            { title: "Römisches Reich: Gründung", slides: [
              { title: "Einführung", text: "Nach der Sage wurde Rom 753 v. Chr. von Romulus und Remus gegründet.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welches Tier hat der Sage nach die Gründer Roms (Romulus & Remus) gesäugt? (Eine W...)`, a: "wölfin", s: `Eine Wölfin.` }; } },
            { title: "Römisches Reich: Alltag", slides: [
              { title: "Einführung", text: "In der Arena (Kolosseum) kämpften Gladiatoren zur Unterhaltung des Volkes ('Panem et circenses').", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nannte man die Schwertkämpfer, die in römischen Arenen zur Unterhaltung kämpften?`, a: "gladiatoren", s: `Gladiatoren.` }; } }
        ]},
        7: { topics: [
            { title: "Frühmittelalter & Frankenreich", slides: [
              { title: "Einführung", text: "Karl der Große wurde im Jahr 800 zum Kaiser gekrönt und einte große Teile Europas.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher Frankenkönig wurde im Jahr 800 in Rom zum Kaiser gekrönt? (Vorname)`, a: "karl", s: `Karl der Große.` }; } },
            { title: "Lehnswesen", slides: [
              { title: "Einführung", text: "Der König (Lehnsherr) gab Land an Adlige (Vasallen) im Austausch für Treue und Kriegsdienste.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nannte man im Mittelalter das Land, das verliehen wurde? (L...)`, a: "lehen", s: `Das Lehen.` }; } },
            { title: "Rittertum", slides: [
              { title: "Einführung", text: "Die Ritter lebten auf Burgen, folgten ritterlichen Tugenden und führten Turniere durch.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Woraus bestand die schützende Rüstung der Ritter im Hochmittelalter oft? (Ketten...)`, a: "kettenhemd", s: `Kettenhemd (und Plattenrüstung).` }; } },
            { title: "Leben im Kloster", slides: [
              { title: "Einführung", text: "Mönche und Nonnen lebten nach strengen Regeln ('ora et labora' - bete und arbeite).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Was übersetzt man mit 'ora et labora'? (bete und ...)`, a: "arbeite", s: `Bete und arbeite.` }; } },
            { title: "Mittelalterliche Stadt", slides: [
              { title: "Einführung", text: "Handwerker organisierten sich in Zünften, Kaufleute in Gilden. Städte boten Freiheit ('Stadtluft macht frei').", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchen Verbänden organisierten sich die Handwerker einer Stadt? (Z...)`, a: "zünften", s: `In Zünften.` }; } },
            { title: "Kreuzzüge", slides: [
              { title: "Einführung", text: "Vom Papst ausgerufene Kriege zur Rückeroberung Jerusalems von den Muslimen (ab 1095).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche "heilige Stadt" wollten die Christen bei den Kreuzzügen erobern?`, a: "jerusalem", s: `Jerusalem.` }; } }
        ]},
        8: { topics: [
            { title: "Renaissance & Humanismus", slides: [
              { title: "Einführung", text: "Wiedergeburt der Antike. Der Mensch (Individuum) steht im Mittelpunkt. Universalgenies wie da Vinci.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher berühmte Renaissance-Künstler malte die Mona Lisa? (Vor- und Nachname)`, a: "leonardo da vinci", s: `Leonardo da Vinci.` }; } },
            { title: "Entdeckungsfahrten", slides: [
              { title: "Einführung", text: "Kolumbus suchte 1492 einen Seeweg nach Indien und entdeckte versehentlich Amerika.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr entdeckte Christoph Kolumbus Amerika?`, a: "1492", s: `Im Jahr 1492.` }; } },
            { title: "Reformation", slides: [
              { title: "Einführung", text: "1517 veröffentlichte Martin Luther seine 95 Thesen gegen den Ablasshandel der Kirche.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wer startete die Reformation mit seinem Thesenanschlag 1517? (Vor- und Nachname)`, a: "martin luther", s: `Martin Luther.` }; } },
            { title: "Dreißigjähriger Krieg", slides: [
              { title: "Einführung", text: "Ging von 1618 bis 1648. Ausgelöst durch den Prager Fenstersturz (Religionskonflikt, später Machtkampf).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welcher Stadt löste ein Fenstersturz 1618 den Dreißigjährigen Krieg aus?`, a: "prag", s: `In Prag.` }; } },
            { title: "Absolutismus", slides: [
              { title: "Einführung", text: "Der König hat uneingeschränkte Macht ('Der Staat bin ich'). Vorbild: Ludwig XIV., der Sonnenkönig in Versailles.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie wurde der französische König Ludwig XIV. auch genannt? (Der ...könig)`, a: "sonnenkönig", s: `Sonnenkönig.` }; } },
            { title: "Aufklärung", slides: [
              { title: "Einführung", text: "Epoche der Vernunft. Forderung nach Freiheit, Gleichheit und Gewaltenteilung (Locke, Montesquieu, Kant).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Nutze laut Immanuel Kant deinen eigenen...? (V...)`, a: "verstand", s: `Verstand.` }; } }
        ]},
        9: { topics: [
            { title: "Französische Revolution", slides: [
              { title: "Einführung", text: "1789: Sturm auf die Bastille. Ende des Absolutismus, Forderung nach 'Freiheit, Gleichheit, Brüderlichkeit'.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr begann die Französische Revolution?`, a: "1789", s: `1789.` }; } },
            { title: "Napoleon Bonaparte", slides: [
              { title: "Einführung", text: "Eroberte große Teile Europas und führte Reformen ein (Code Civil), scheiterte aber beim Russlandfeldzug.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Land scheiterte Napoleons große Armee im Winter kläglich?`, a: "russland", s: `In Russland.` }; } },
            { title: "Industrielle Revolution", slides: [
              { title: "Einführung", text: "Übergang von der Agrar- zur Industriegesellschaft (ab ca. 1800). Wichtige Erfindung: die Dampfmaschine.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Maschine (perfektioniert von James Watt) trieb die Industrialisierung an?`, a: "dampfmaschine", s: `Die Dampfmaschine.` }; } },
            { title: "Reichsgründung 1871", slides: [
              { title: "Einführung", text: "Nach dem Sieg über Frankreich wurde in Versailles das Deutsche Kaiserreich unter Kanzler Bismarck gegründet.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wer war der erste Reichskanzler des 1871 gegründeten Deutschen Reiches? (Nachname)`, a: "bismarck", s: `Otto von Bismarck.` }; } },
            { title: "Imperialismus", slides: [
              { title: "Einführung", text: "Großmächte teilten die Welt (besonders Afrika und Asien) als Kolonien unter sich auf (Wettlauf um Afrika).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nannte man die Gebiete in Übersee, die von Europäern beherrscht und ausgebeutet wurden?`, a: "kolonien", s: `Kolonien.` }; } },
            { title: "Erster Weltkrieg", slides: [
              { title: "Einführung", text: "1914-1918. Ausgelöst durch das Attentat von Sarajevo. Charakteristisch war der brutale Stellungskrieg.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welcher Stadt fand das Attentat statt, das den 1. WK auslöste?`, a: "sarajevo", s: `In Sarajevo.` }; } }
        ]},
        10: { topics: [
            { title: "Weimarer Republik", slides: [
              { title: "Einführung", text: "Die erste Demokratie in Deutschland (1918-1933). Belastet durch den Versailler Vertrag und Wirtschaftskrisen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie hieß der Friedensvertrag, der Deutschland nach dem 1. Weltkrieg harte Bedingungen auferlegte?`, a: "versailler vertrag", s: `Versailler Vertrag.` }; } },
            { title: "Nationalsozialismus", slides: [
              { title: "Einführung", text: "Adolf Hitler wird 1933 Reichskanzler, errichtet eine Diktatur, beseitigt Gegner und führt Gesetze gegen Juden ein.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr wurde Adolf Hitler Reichskanzler (Machtergreifung)?`, a: "1933", s: `1933.` }; } },
            { title: "Zweiter Weltkrieg", slides: [
              { title: "Einführung", text: "Begann 1939 mit dem deutschen Überfall auf Polen und endete 1945 mit der bedingungslosen Kapitulation.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Der Überfall auf welches Land markierte 1939 den Beginn des 2. Weltkriegs?`, a: "polen", s: `Polen.` }; } },
            { title: "Holocaust (Shoah)", slides: [
              { title: "Einführung", text: "Der systematische, staatlich organisierte Völkermord an etwa 6 Millionen europäischen Juden durch die Nazis.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie lautet der Fachbegriff für den Völkermord an den Juden?`, a: "holocaust", s: `Holocaust (oder Shoah).` }; } },
            { title: "Kalter Krieg & Teilung", slides: [
              { title: "Einführung", text: "Systemkonflikt zwischen USA (Westen) und Sowjetunion (Osten). Deutschland wurde geteilt (BRD und DDR).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr wurde die Berliner Mauer gebaut?`, a: "1961", s: `Im Jahr 1961.` }; } },
            { title: "Wiedervereinigung", slides: [
              { title: "Einführung", text: "Nach der Friedlichen Revolution in der DDR fiel 1989 die Mauer, am 3. Oktober 1990 wurde Deutschland wiedervereint.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `In welchem Jahr fiel die Berliner Mauer?`, a: "1989", s: `Im Jahr 1989.` }; } }
        ]}
    };
    window.registerModule('ges', GesEngine);
})();
>>>>>>> Stashed changes
