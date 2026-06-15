<<<<<<< Updated upstream
(function(){
    const KunEngine = {
        5: { topics: [
            { title: "Farbenlehre", slides: [
              { title: "Einführung", text: "Primärfarben: Rot, Gelb, Blau. Daraus lassen sich die Sekundärfarben mischen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { const v = [{q:"Rot und Gelb", a:"orange"}, {q:"Gelb und Blau", a:"grün"}, {q:"Rot und Blau", a:"violett"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Welche Sekundärfarbe entsteht, wenn man ${x.q} mischt?`, a: x.a, s: `Es entsteht ${x.a}.` }; } },
            { title: "Farbkontraste", slides: [
              { title: "Einführung", text: "Der stärkste Kontrast ist der Komplementärkontrast (gegenüber im Farbkreis, z.B. Rot-Grün).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Farbe ist im Farbkreis komplementär (gegenüber) zu Rot?`, a: "grün", s: `Grün.` }; } },
            { title: "Zeichnen: Grundlagen", slides: [
              { title: "Einführung", text: "Linien können Konturen bilden. Flächen werden durch Schraffuren (parallele Linien) abgedunkelt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man das Abdunkeln von Flächen mit vielen parallelen oder sich kreuzenden Linien? (Sch...)`, a: "schraffur", s: `Schraffur.` }; } },
            { title: "Höhlenmalerei", slides: [
              { title: "Einführung", text: "Erste Kunstwerke der Frühmenschen (z.B. in Lascaux). Sie nutzten Erdfarben und Holzkohle.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurden für Höhlenmalereien künstliche Acrylfarben oder Erdfarben genutzt?`, a: "erdfarben", s: `Erdfarben (Naturfarben).` }; } },
            { title: "Ägyptische Kunst", slides: [
              { title: "Einführung", text: "Gesicht und Beine meist im Profil, Auge und Oberkörper oft frontal gemalt (Bedeutungsperspektive).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurden Gesichter in Ägypten meist von vorne (frontal) oder von der Seite (Profil) gemalt?`, a: "profil", s: `Von der Seite (im Profil).` }; } },
            { title: "Frottage", slides: [
              { title: "Einführung", text: "Durchreibetechnik. Papier wird auf eine strukturierte Oberfläche (Münze, Rinde) gelegt und mit Stift durchgerieben.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie heißt die Technik, bei der man die Struktur eines Blattes oder einer Münze mit dem Stift durchreibt? (Frot...)`, a: "frottage", s: `Frottage.` }; } }
        ]},
        6: { topics: [
            { title: "Raumdarstellung", slides: [
              { title: "Einführung", text: "Überschneidung, Größenunterschied und Staffelung erzeugen eine Illusion von Tiefe auf dem flachen Blatt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wenn ein Baum einen anderen teilweise verdeckt, wirkt er dann weiter vorn oder weiter hinten?`, a: "vorn", s: `Weiter vorn (Überschneidung).` }; } },
            { title: "Mittelalterliche Buchmalerei", slides: [
              { title: "Einführung", text: "Mönche schrieben Bücher von Hand. Große, verzierte Anfangsbuchstaben nennt man Initialen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man einen prächtig verzierten Anfangsbuchstaben in alten Büchern? (In...)`, a: "initiale", s: `Initiale.` }; } },
            { title: "Porträt", slides: [
              { title: "Einführung", text: "Beim menschlichen Gesicht liegen die Augen etwa auf halber Höhe des gesamten Kopfes.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Liegen die Augen bei einem Porträt im oberen Drittel oder genau auf der halben Höhe des Kopfes?`, a: "halben höhe", s: `Auf der halben Höhe.` }; } },
            { title: "Typografie", slides: [
              { title: "Einführung", text: "Die Kunst der Schriftgestaltung. Auch Graffiti ist eine moderne Form der Schriftkunst.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie lautet der Fachbegriff für die Kunst der Schriftgestaltung? (Typo...)`, a: "typografie", s: `Typografie.` }; } },
            { title: "Plastik und Skulptur", slides: [
              { title: "Einführung", text: "Plastik: aufbauend (Ton, Wachs). Skulptur: abtragend/subtraktiv (Holz, Stein).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Ist das Schnitzen einer Figur aus Holz aufbauend oder abtragend (subtraktiv)?`, a: "abtragend", s: `Abtragend (Skulptur).` }; } },
            { title: "Mosaik", slides: [
              { title: "Einführung", text: "Ein Bild, das aus vielen kleinen farbigen Steinchen oder Glasstücken zusammengesetzt wird.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man ein Bild, das aus vielen kleinen farbigen Steinchen gelegt wird?`, a: "mosaik", s: `Mosaik.` }; } }
        ]},
        7: { topics: [
            { title: "Zentralperspektive", slides: [
              { title: "Einführung", text: "Fluchtlinien treffen sich in einem Fluchtpunkt auf der Horizontlinie. Erfunden in der Renaissance.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man den Punkt auf der Horizontlinie, in dem sich alle Tiefenlinien treffen? (Flucht...)`, a: "fluchtpunkt", s: `Fluchtpunkt.` }; } },
            { title: "Renaissance", slides: [
              { title: "Einführung", text: "Wiederentdeckung der Antike. Künstler (z.B. Da Vinci, Dürer) studierten die Natur und Anatomie exakt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher Künstler (und Universalgelehrte) der Renaissance malte das Abendmahl und die Mona Lisa? (Da ...)`, a: "da vinci", s: `Leonardo da Vinci.` }; } },
            { title: "Anatomie", slides: [
              { title: "Einführung", text: "Der menschliche Körper als Maß. Proportionsstudien (z.B. der Vitruvianische Mensch).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Studierte Leonardo da Vinci die Anatomie durch Leichenöffnungen? (ja/nein)`, a: "ja", s: `Ja, um Muskeln und Knochen exakt zeichnen zu können.` }; } },
            { title: "Drucktechniken", slides: [
              { title: "Einführung", text: "Hochdruck: Erhöhte Stellen drucken (Stempel, Linoldruck). Tiefdruck: Vertiefungen drucken (Radierung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Gehört der Linoldruck zum Hochdruck oder zum Tiefdruck?`, a: "hochdruck", s: `Zum Hochdruck (wie ein Stempel).` }; } },
            { title: "Barock", slides: [
              { title: "Einführung", text: "Dramatische Inszenierungen, extremer Hell-Dunkel-Kontrast (Chiaroscuro), üppige Verzierungen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Sind Barock-Gemälde meist flach und ruhig oder sehr dramatisch und kontrastreich?`, a: "dramatisch", s: `Dramatisch und kontrastreich.` }; } },
            { title: "Stillleben", slides: [
              { title: "Einführung", text: "Darstellung von leblosen Gegenständen (Früchte, Blumen, Schädel). Oft mit Vanitas-Symbolik (Vergänglichkeit).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man Gemälde, die drapierte, leblose Gegenstände wie Obstschalen zeigen? (Still...)`, a: "stillleben", s: `Stillleben.` }; } }
        ]},
        8: { topics: [
            { title: "Romantik", slides: [
              { title: "Einführung", text: "Gefühl und Natur stehen im Vordergrund. Caspar David Friedrich malte oft Rückenfiguren, die in die Ferne blicken.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurde in der Romantik die Technik verherrlicht oder die mystische Natur?`, a: "natur", s: `Die mystische, oft wilde Natur.` }; } },
            { title: "Impressionismus", slides: [
              { title: "Einführung", text: "Claude Monet: Malen im Freien (Pleinair), Erfassen des flüchtigen Lichts, helle Farben, sichtbare Pinselstriche.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Mischten Impressionisten die Farben oft direkt auf der Leinwand durch kleine Punkte/Striche? (ja/nein)`, a: "ja", s: `Ja (optische Farbmischung im Auge des Betrachters).` }; } },
            { title: "Farb- und Luftperspektive", slides: [
              { title: "Einführung", text: "Dinge in der Ferne werden heller, blasser und bläulicher dargestellt, um Tiefe zu erzeugen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Werden Berge am Horizont in der Malerei rötlich oder bläulich gemalt, um Tiefe zu zeigen?`, a: "bläulich", s: `Bläulich (Verblauung/Luftperspektive).` }; } },
            { title: "Fotografie", slides: [
              { title: "Einführung", text: "Ursprung in der Camera Obscura (Lochkamera). Fotografie bedeutet wörtlich 'Zeichnen mit Licht'.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie hieß der abgedunkelte Raum mit einem kleinen Loch, der als Vorläufer der Kamera gilt? (Camera ...)`, a: "obscura", s: `Camera Obscura.` }; } },
            { title: "Grafikdesign", slides: [
              { title: "Einführung", text: "Verbindung von Text und Bild (Plakate, Logos). Muss schnell erfassbar und prägnant sein.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man das grafische Erkennungszeichen (Markenzeichen) einer Firma?`, a: "logo", s: `Logo.` }; } },
            { title: "Architektur", slides: [
              { title: "Einführung", text: "Romanik: dicke Mauern, Rundbögen. Gotik: extrem hoch, große Fenster, Spitzbögen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Haben gotische Kathedralen Rundbögen oder Spitzbögen?`, a: "spitzbögen", s: `Spitzbögen.` }; } }
        ]},
        9: { topics: [
            { title: "Expressionismus", slides: [
              { title: "Einführung", text: "Künstler drückten ihre Gefühle aus. Harte Kontraste, oft unnatürliche, leuchtende Farben (z.B. Franz Marc: Blaue Pferde).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Malten Expressionisten wie Franz Marc Pferde realistisch braun oder in unnatürlichen Farben wie Blau?`, a: "blau", s: `In unnatürlichen Farben (Gefühlsfarben).` }; } },
            { title: "Kubismus", slides: [
              { title: "Einführung", text: "Pablo Picasso zerlegte Motive in geometrische Formen (Kuben/Würfel) und zeigte sie aus verschiedenen Blickwinkeln gleichzeitig.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher berühmte spanische Maler ist der Hauptvertreter des Kubismus? (Nachname)`, a: "picasso", s: `Pablo Picasso.` }; } },
            { title: "Surrealismus", slides: [
              { title: "Einführung", text: "Salvador Dalí malte zerfließende Uhren. Die Kunst zeigt Traumwelten und das Unterbewusste.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Bilden Surrealisten die reale Welt oder irreale Traumwelten ab?`, a: "traumwelten", s: `Traumwelten (Über-Wirklichkeit).` }; } },
            { title: "Pop Art", slides: [
              { title: "Einführung", text: "Andy Warhol und Roy Lichtenstein nutzten Motive der Konsumgesellschaft (Comic, Coca-Cola, Marilyn Monroe).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Aus welcher Kultur entnahm die Pop Art ihre Motive: Hochkultur oder Konsumkultur?`, a: "konsumkultur", s: `Aus der Konsum- und Massenkultur.` }; } },
            { title: "Produktdesign", slides: [
              { title: "Einführung", text: "Leitsatz des Bauhauses: 'Form follows function' (Die Form ordnet sich der Funktion unter).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie heißt die berühmte deutsche Designschule der 1920er Jahre? (Bau...)`, a: "bauhaus", s: `Das Bauhaus.` }; } },
            { title: "Action Painting", slides: [
              { title: "Einführung", text: "Jackson Pollock trug die Farbe nicht mit dem Pinsel auf, sondern tropfte und schleuderte sie auf die liegende Leinwand (Dripping).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man die Tropf-Technik von Jackson Pollock? (Drip...)`, a: "dripping", s: `Dripping.` }; } }
        ]},
        10: { topics: [
            { title: "Abstrakte Kunst", slides: [
              { title: "Einführung", text: "Verzicht auf gegenständliche Darstellung. Komposition nur aus Farben, Formen und Linien (Kandinsky, Mondrian).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Erkennt man in einem rein abstrakten Bild noch Bäume oder Häuser? (ja/nein)`, a: "nein", s: `Nein, es ist ungegenständlich.` }; } },
            { title: "Street Art", slides: [
              { title: "Einführung", text: "Kunst im öffentlichen Raum, oft illegal, oft politisch. Bekanntester Künstler: Banksy (Schablonentechnik / Stencil).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher weltberühmte, anonyme Street-Art-Künstler nutzt oft die Schablonentechnik?`, a: "banksy", s: `Banksy.` }; } },
            { title: "Land Art", slides: [
              { title: "Einführung", text: "Kunstwerke werden direkt in und mit der Natur geschaffen (Steine, Blätter, Sand). Sie sind oft vergänglich.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Werden Land-Art-Kunstwerke meist für die Ewigkeit gebaut oder sind sie vergänglich?`, a: "vergänglich", s: `Sie sind vergänglich (Verfall ist Teil des Kunstwerks).` }; } },
            { title: "Neue Medien", slides: [
              { title: "Einführung", text: "Einsatz von digitalen Techniken, Videokunst und Computeranimationen in der modernen Kunst.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Zählt eine Computer-Animation zur traditionellen Malerei oder zu den "Neuen Medien"?`, a: "neuen medien", s: `Zu den Neuen Medien.` }; } },
            { title: "Kunst im öffentlichen Raum", slides: [
              { title: "Einführung", text: "Skulpturen, Denkmäler und Installationen auf Plätzen. Sie sollen zum Nachdenken anregen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man ein Kunstwerk, das an ein historisches Ereignis erinnern soll? (D...)`, a: "denkmal", s: `Ein Denkmal (oder Mahnmal).` }; } },
            { title: "Werkanalyse", slides: [
              { title: "Einführung", text: "Betrachtung von Komposition (Bildaufbau), Farbwirkung, Maltechnik und Interpretation der Bedeutung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man den gezielten Aufbau und die Anordnung von Elementen in einem Bild? (Komp...)`, a: "komposition", s: `Die Komposition.` }; } }
        ]}
    };
    window.registerModule('kun', KunEngine);
})();
=======
(function(){
    const KunEngine = {
        5: { topics: [
            { title: "Farbenlehre", slides: [
              { title: "Einführung", text: "Primärfarben: Rot, Gelb, Blau. Daraus lassen sich die Sekundärfarben mischen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { const v = [{q:"Rot und Gelb", a:"orange"}, {q:"Gelb und Blau", a:"grün"}, {q:"Rot und Blau", a:"violett"}]; const x = v[Math.floor(Math.random()*v.length)]; return { q: `Welche Sekundärfarbe entsteht, wenn man ${x.q} mischt?`, a: x.a, s: `Es entsteht ${x.a}.` }; } },
            { title: "Farbkontraste", slides: [
              { title: "Einführung", text: "Der stärkste Kontrast ist der Komplementärkontrast (gegenüber im Farbkreis, z.B. Rot-Grün).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welche Farbe ist im Farbkreis komplementär (gegenüber) zu Rot?`, a: "grün", s: `Grün.` }; } },
            { title: "Zeichnen: Grundlagen", slides: [
              { title: "Einführung", text: "Linien können Konturen bilden. Flächen werden durch Schraffuren (parallele Linien) abgedunkelt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man das Abdunkeln von Flächen mit vielen parallelen oder sich kreuzenden Linien? (Sch...)`, a: "schraffur", s: `Schraffur.` }; } },
            { title: "Höhlenmalerei", slides: [
              { title: "Einführung", text: "Erste Kunstwerke der Frühmenschen (z.B. in Lascaux). Sie nutzten Erdfarben und Holzkohle.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurden für Höhlenmalereien künstliche Acrylfarben oder Erdfarben genutzt?`, a: "erdfarben", s: `Erdfarben (Naturfarben).` }; } },
            { title: "Ägyptische Kunst", slides: [
              { title: "Einführung", text: "Gesicht und Beine meist im Profil, Auge und Oberkörper oft frontal gemalt (Bedeutungsperspektive).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurden Gesichter in Ägypten meist von vorne (frontal) oder von der Seite (Profil) gemalt?`, a: "profil", s: `Von der Seite (im Profil).` }; } },
            { title: "Frottage", slides: [
              { title: "Einführung", text: "Durchreibetechnik. Papier wird auf eine strukturierte Oberfläche (Münze, Rinde) gelegt und mit Stift durchgerieben.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie heißt die Technik, bei der man die Struktur eines Blattes oder einer Münze mit dem Stift durchreibt? (Frot...)`, a: "frottage", s: `Frottage.` }; } }
        ]},
        6: { topics: [
            { title: "Raumdarstellung", slides: [
              { title: "Einführung", text: "Überschneidung, Größenunterschied und Staffelung erzeugen eine Illusion von Tiefe auf dem flachen Blatt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wenn ein Baum einen anderen teilweise verdeckt, wirkt er dann weiter vorn oder weiter hinten?`, a: "vorn", s: `Weiter vorn (Überschneidung).` }; } },
            { title: "Mittelalterliche Buchmalerei", slides: [
              { title: "Einführung", text: "Mönche schrieben Bücher von Hand. Große, verzierte Anfangsbuchstaben nennt man Initialen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man einen prächtig verzierten Anfangsbuchstaben in alten Büchern? (In...)`, a: "initiale", s: `Initiale.` }; } },
            { title: "Porträt", slides: [
              { title: "Einführung", text: "Beim menschlichen Gesicht liegen die Augen etwa auf halber Höhe des gesamten Kopfes.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Liegen die Augen bei einem Porträt im oberen Drittel oder genau auf der halben Höhe des Kopfes?`, a: "halben höhe", s: `Auf der halben Höhe.` }; } },
            { title: "Typografie", slides: [
              { title: "Einführung", text: "Die Kunst der Schriftgestaltung. Auch Graffiti ist eine moderne Form der Schriftkunst.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie lautet der Fachbegriff für die Kunst der Schriftgestaltung? (Typo...)`, a: "typografie", s: `Typografie.` }; } },
            { title: "Plastik und Skulptur", slides: [
              { title: "Einführung", text: "Plastik: aufbauend (Ton, Wachs). Skulptur: abtragend/subtraktiv (Holz, Stein).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Ist das Schnitzen einer Figur aus Holz aufbauend oder abtragend (subtraktiv)?`, a: "abtragend", s: `Abtragend (Skulptur).` }; } },
            { title: "Mosaik", slides: [
              { title: "Einführung", text: "Ein Bild, das aus vielen kleinen farbigen Steinchen oder Glasstücken zusammengesetzt wird.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man ein Bild, das aus vielen kleinen farbigen Steinchen gelegt wird?`, a: "mosaik", s: `Mosaik.` }; } }
        ]},
        7: { topics: [
            { title: "Zentralperspektive", slides: [
              { title: "Einführung", text: "Fluchtlinien treffen sich in einem Fluchtpunkt auf der Horizontlinie. Erfunden in der Renaissance.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man den Punkt auf der Horizontlinie, in dem sich alle Tiefenlinien treffen? (Flucht...)`, a: "fluchtpunkt", s: `Fluchtpunkt.` }; } },
            { title: "Renaissance", slides: [
              { title: "Einführung", text: "Wiederentdeckung der Antike. Künstler (z.B. Da Vinci, Dürer) studierten die Natur und Anatomie exakt.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher Künstler (und Universalgelehrte) der Renaissance malte das Abendmahl und die Mona Lisa? (Da ...)`, a: "da vinci", s: `Leonardo da Vinci.` }; } },
            { title: "Anatomie", slides: [
              { title: "Einführung", text: "Der menschliche Körper als Maß. Proportionsstudien (z.B. der Vitruvianische Mensch).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Studierte Leonardo da Vinci die Anatomie durch Leichenöffnungen? (ja/nein)`, a: "ja", s: `Ja, um Muskeln und Knochen exakt zeichnen zu können.` }; } },
            { title: "Drucktechniken", slides: [
              { title: "Einführung", text: "Hochdruck: Erhöhte Stellen drucken (Stempel, Linoldruck). Tiefdruck: Vertiefungen drucken (Radierung).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Gehört der Linoldruck zum Hochdruck oder zum Tiefdruck?`, a: "hochdruck", s: `Zum Hochdruck (wie ein Stempel).` }; } },
            { title: "Barock", slides: [
              { title: "Einführung", text: "Dramatische Inszenierungen, extremer Hell-Dunkel-Kontrast (Chiaroscuro), üppige Verzierungen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Sind Barock-Gemälde meist flach und ruhig oder sehr dramatisch und kontrastreich?`, a: "dramatisch", s: `Dramatisch und kontrastreich.` }; } },
            { title: "Stillleben", slides: [
              { title: "Einführung", text: "Darstellung von leblosen Gegenständen (Früchte, Blumen, Schädel). Oft mit Vanitas-Symbolik (Vergänglichkeit).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man Gemälde, die drapierte, leblose Gegenstände wie Obstschalen zeigen? (Still...)`, a: "stillleben", s: `Stillleben.` }; } }
        ]},
        8: { topics: [
            { title: "Romantik", slides: [
              { title: "Einführung", text: "Gefühl und Natur stehen im Vordergrund. Caspar David Friedrich malte oft Rückenfiguren, die in die Ferne blicken.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wurde in der Romantik die Technik verherrlicht oder die mystische Natur?`, a: "natur", s: `Die mystische, oft wilde Natur.` }; } },
            { title: "Impressionismus", slides: [
              { title: "Einführung", text: "Claude Monet: Malen im Freien (Pleinair), Erfassen des flüchtigen Lichts, helle Farben, sichtbare Pinselstriche.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Mischten Impressionisten die Farben oft direkt auf der Leinwand durch kleine Punkte/Striche? (ja/nein)`, a: "ja", s: `Ja (optische Farbmischung im Auge des Betrachters).` }; } },
            { title: "Farb- und Luftperspektive", slides: [
              { title: "Einführung", text: "Dinge in der Ferne werden heller, blasser und bläulicher dargestellt, um Tiefe zu erzeugen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Werden Berge am Horizont in der Malerei rötlich oder bläulich gemalt, um Tiefe zu zeigen?`, a: "bläulich", s: `Bläulich (Verblauung/Luftperspektive).` }; } },
            { title: "Fotografie", slides: [
              { title: "Einführung", text: "Ursprung in der Camera Obscura (Lochkamera). Fotografie bedeutet wörtlich 'Zeichnen mit Licht'.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie hieß der abgedunkelte Raum mit einem kleinen Loch, der als Vorläufer der Kamera gilt? (Camera ...)`, a: "obscura", s: `Camera Obscura.` }; } },
            { title: "Grafikdesign", slides: [
              { title: "Einführung", text: "Verbindung von Text und Bild (Plakate, Logos). Muss schnell erfassbar und prägnant sein.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man das grafische Erkennungszeichen (Markenzeichen) einer Firma?`, a: "logo", s: `Logo.` }; } },
            { title: "Architektur", slides: [
              { title: "Einführung", text: "Romanik: dicke Mauern, Rundbögen. Gotik: extrem hoch, große Fenster, Spitzbögen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Haben gotische Kathedralen Rundbögen oder Spitzbögen?`, a: "spitzbögen", s: `Spitzbögen.` }; } }
        ]},
        9: { topics: [
            { title: "Expressionismus", slides: [
              { title: "Einführung", text: "Künstler drückten ihre Gefühle aus. Harte Kontraste, oft unnatürliche, leuchtende Farben (z.B. Franz Marc: Blaue Pferde).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Malten Expressionisten wie Franz Marc Pferde realistisch braun oder in unnatürlichen Farben wie Blau?`, a: "blau", s: `In unnatürlichen Farben (Gefühlsfarben).` }; } },
            { title: "Kubismus", slides: [
              { title: "Einführung", text: "Pablo Picasso zerlegte Motive in geometrische Formen (Kuben/Würfel) und zeigte sie aus verschiedenen Blickwinkeln gleichzeitig.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher berühmte spanische Maler ist der Hauptvertreter des Kubismus? (Nachname)`, a: "picasso", s: `Pablo Picasso.` }; } },
            { title: "Surrealismus", slides: [
              { title: "Einführung", text: "Salvador Dalí malte zerfließende Uhren. Die Kunst zeigt Traumwelten und das Unterbewusste.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Bilden Surrealisten die reale Welt oder irreale Traumwelten ab?`, a: "traumwelten", s: `Traumwelten (Über-Wirklichkeit).` }; } },
            { title: "Pop Art", slides: [
              { title: "Einführung", text: "Andy Warhol und Roy Lichtenstein nutzten Motive der Konsumgesellschaft (Comic, Coca-Cola, Marilyn Monroe).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Aus welcher Kultur entnahm die Pop Art ihre Motive: Hochkultur oder Konsumkultur?`, a: "konsumkultur", s: `Aus der Konsum- und Massenkultur.` }; } },
            { title: "Produktdesign", slides: [
              { title: "Einführung", text: "Leitsatz des Bauhauses: 'Form follows function' (Die Form ordnet sich der Funktion unter).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie heißt die berühmte deutsche Designschule der 1920er Jahre? (Bau...)`, a: "bauhaus", s: `Das Bauhaus.` }; } },
            { title: "Action Painting", slides: [
              { title: "Einführung", text: "Jackson Pollock trug die Farbe nicht mit dem Pinsel auf, sondern tropfte und schleuderte sie auf die liegende Leinwand (Dripping).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man die Tropf-Technik von Jackson Pollock? (Drip...)`, a: "dripping", s: `Dripping.` }; } }
        ]},
        10: { topics: [
            { title: "Abstrakte Kunst", slides: [
              { title: "Einführung", text: "Verzicht auf gegenständliche Darstellung. Komposition nur aus Farben, Formen und Linien (Kandinsky, Mondrian).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Erkennt man in einem rein abstrakten Bild noch Bäume oder Häuser? (ja/nein)`, a: "nein", s: `Nein, es ist ungegenständlich.` }; } },
            { title: "Street Art", slides: [
              { title: "Einführung", text: "Kunst im öffentlichen Raum, oft illegal, oft politisch. Bekanntester Künstler: Banksy (Schablonentechnik / Stencil).", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Welcher weltberühmte, anonyme Street-Art-Künstler nutzt oft die Schablonentechnik?`, a: "banksy", s: `Banksy.` }; } },
            { title: "Land Art", slides: [
              { title: "Einführung", text: "Kunstwerke werden direkt in und mit der Natur geschaffen (Steine, Blätter, Sand). Sie sind oft vergänglich.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Werden Land-Art-Kunstwerke meist für die Ewigkeit gebaut oder sind sie vergänglich?`, a: "vergänglich", s: `Sie sind vergänglich (Verfall ist Teil des Kunstwerks).` }; } },
            { title: "Neue Medien", slides: [
              { title: "Einführung", text: "Einsatz von digitalen Techniken, Videokunst und Computeranimationen in der modernen Kunst.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Zählt eine Computer-Animation zur traditionellen Malerei oder zu den "Neuen Medien"?`, a: "neuen medien", s: `Zu den Neuen Medien.` }; } },
            { title: "Kunst im öffentlichen Raum", slides: [
              { title: "Einführung", text: "Skulpturen, Denkmäler und Installationen auf Plätzen. Sie sollen zum Nachdenken anregen.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man ein Kunstwerk, das an ein historisches Ereignis erinnern soll? (D...)`, a: "denkmal", s: `Ein Denkmal (oder Mahnmal).` }; } },
            { title: "Werkanalyse", slides: [
              { title: "Einführung", text: "Betrachtung von Komposition (Bildaufbau), Farbwirkung, Maltechnik und Interpretation der Bedeutung.", svg: `<svg viewBox="0 0 200 200" style="width:100%; max-width:180px; height:auto; margin: 10px 0;">
  <defs>
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
              generate: () => { return { q: `Wie nennt man den gezielten Aufbau und die Anordnung von Elementen in einem Bild? (Komp...)`, a: "komposition", s: `Die Komposition.` }; } }
        ]}
    };
    window.registerModule('kun', KunEngine);
})();
>>>>>>> Stashed changes
