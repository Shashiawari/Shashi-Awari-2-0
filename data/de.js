/**
 * German translations for the website
 * Structure mirrors the component hierarchy for easy mapping
 * 
 * Usage:
 * import { translations } from "@/data/de";
 * const text = translations.navbar.home; // "Startseite"
 */

export const translations = {
  // Navbar
  navbar: {
    home: "Startseite",
    about: "Über mich",
    projects: "Projekte",
    contact: "Kontakt",
  },

  // Content (Home page intro)
  content: {
    hello: "Lassen Sie uns die Zukunft bauen.",
    intro: "Ich bin Awari Shashi Preetham und habe meinen Bachelor in Künstlicher Intelligenz und Maschinellem Lernen abgeschlossen. Derzeit absolviere ich meinen Master in Applied Computer Science an der Hochschule Schmalkalden in Deutschland. Ich entwickle gerne durchdachte digitale Produkte an der Schnittstelle von Full-Stack-Entwicklung, KI und realen Problemstellungen. Meine Arbeit umfasst Plattformen wie JapEase, NexGen und weitere interaktive Web-Erlebnisse mit React.js, Next.js, Node.js, Express.js, PostgreSQL und MongoDB. Werfen Sie einen Blick auf meine Projekte, um zu sehen, wie ich Ideen in ausgereifte, funktionierende Systeme verwandle, und kontaktieren Sie mich gerne, wenn Sie gemeinsam etwas Sinnvolles aufbauen möchten.",
    whatCanIOffer: "Was kann ich Ihnen bieten?",
    letsLookAtSkills: "Schauen wir uns meine Fähigkeiten an!",
    projects: "Projekte",
    chatApplication: "Chat-Anwendung",
    gsap: "GSAP",
    generativeAi: "Generative KI",
    applications: "Anwendungen",
    webDesign: "Webdesign",
    animationFrameworks: "Animations-Frameworks",
  },

  // Footer
  footer: {
    theGood: "Das Gute",
    theBoring: "Das Langweilige",
    theCool: "Das Coole",
    home: "Startseite",
    about: "Über mich",
    projects: "Projekte",
    contact: "Kontakt",
    email: "E-Mail",
    call: "Anrufen",
    github: "GitHub",
    instagram: "Instagram",
    contactMe: "Kontaktieren",
    brandLabel: "FULL-STACK ENTWICKLER | KI & MASCHINELLES LERNEN",
    copyright: "Alle Rechte vorbehalten.",
  },

  // Resume/Download section
  resume: {
    downloadResume: "Lebenslauf herunterladen",
  },

  // Projects section (home page)
  projects: {
    title: "Projekte",
    more: "Mehr",
    readMore: "Mehr lesen",
    japease: "Japease",
    japeaseDesc: "Japease ist eine Online-Jobsuchwebsite, die Studenten und Absolventen hilft, Praktika und Jobs einfach zu finden und sich zu bewerben, indem integrierte APIs den Prozess optimieren.",
    nextLevelFood: "Next Level Food",
    nextLevelFoodDesc: "Next Level Food: Teilen und entdecken Sie köstliche Rezepte mit Feinschmeckern weltweit. Treten Sie bei, um Ihr Kocherlebnis zu verbessern!",
    nexGen: "NexGen",
    nexGenDesc: "NexGen ist ein Online-Service, der personalisierte Entwicklerunterstützung rund um die Uhr für Einzelpersonen und Unternehmen bietet, die Websites oder Online-Plattformen erstellen möchten.",
    andManyMore: "Und viele mehr, besuchen Sie mein GitHub-Profil",
  },

  // Projects page
  projectsPage: {
    selectedWork: "Ausgewählte Arbeiten",
    visitThem: "Besuchen und ansehen Sie sie unbedingt.",
    projectsAndCounting: "Projekte und es werden mehr",
    complexBuild: "Komplexes Projekt",
    featuredProject: "Hervorgehobenes Projekt",
    techUsed: "Verwendete Technologien",
    caseStudy: "Fallstudie",
    liveSite: "Live-Seite",
    close: "Schließen",
    featuredFullStack: "Hervorgehobenes Full-Stack-Projekt",
  },

  // About page
  about: {
    title: "ÜBER MICH",
    hello: "HALLO!!",
    welcome: "Mehr als nur Code.",
    
    // Early Morning Routine
    earlyMorningRoutine: "Frühmorgendliche Routine",
    earlyMorningP1: "Ich wache jeden Morgen mit der Sonne auf und beginne meinen Tag mit Fokus und Klarheit. Diese frühen Stunden sind meine produktivste Zeit, in der ich meine Aufgaben priorisieren und meine Ziele für den Tag setzen kann.",
    earlyMorningP2: "Sobald ich aufstehe, verbringe ich einige Momente in Stille, um meine Gedanken zu sammeln und Achtsamkeit zu üben. Das hilft mir, den ganzen Tag über zentriert und fokussiert zu bleiben. Danach bereite ich mich auf mein Training vor, das nicht nur meine Energie steigert, sondern auch meine geistige Klarheit schärft.",
    earlyMorningP3: "Ich glaube, dass eine strukturierte Morgenroutine Disziplin aufbaut und einen positiven Ton für den gesamten Tag setzt. Durch die Etablierung dieser gesunden Gewohnheiten bleibe ich auf Kurs, bereit, jede Herausforderung mit einem erfrischten Geist und Körper anzunehmen.",
    
    // Physical Fitness
    physicalFitness: "Körperliche Fitness",
    physicalFitnessDesc: "Fitness ist ein Kernbestandteil dessen, wer ich bin. Jeden Tag trainiere ich und gehe laufen, um mein körperliches Wohlbefinden zu erhalten. Ich glaube, dass fit zu bleiben der Schlüssel zu Disziplin ist, sowohl körperlich als auch geistig.",
    
    // Mental Strength
    mentalStrength: "Mentale Stärke",
    mentalStrengthDesc: "Ich bin stolz auf meine mentale Stärke. Indem ich ständig meine Grenzen überschreite, stelle ich sicher, dass ich belastbar und fähig bleibe, Herausforderungen mit einer positiven Einstellung und unerschütterlicher Entschlossenheit zu bewältigen.",
    
    // Creative and Innovative
    creativeInnovative: "Kreativ und Innovativ",
    creativeInnovativeDesc: "Kreativität und Innovation treiben mich an. Ich liebe es, neue Ideen zu erkunden, Probleme auf einzigartige Weise zu lösen und mich herauszufordern, über den Tellerrand hinauszudenken. Ich bringe diese Qualitäten sowohl in meine persönlichen als auch beruflichen Unternehmungen ein.",
    
    // Services
    servicesTitle: "Dienstleistungen, die ich anbiete",
    
    // Web Development
    webDevelopment: "Webentwicklung",
    webDevDesc: "Ich kann Ihre Traumwebsite erstellen.",
    webDevServices: "Meine Dienstleistungen umfassen:",
    webDevResponsive: "Responsives Webdesign",
    webDevCustom: "Individuelle Webentwicklung",
    webDevEcommerce: "E-Commerce-Lösungen",
    webDevSeo: "SEO-Optimierung",
    webDevMaintenance: "Website-Wartung",
    
    // Machine Learning
    machineLearning: "Maschinelles Lernen",
    mlDesc: "Ich kann intelligente Systeme für Ihre Bedürfnisse entwickeln.",
    mlServices: "Meine Dienstleistungen umfassen:",
    mlDataPreprocessing: "Datenvorverarbeitung",
    mlModelDevelopment: "Modellentwicklung und Training",
    mlPredictiveAnalytics: "Prädiktive Analytik",
    mlNlp: "Natürliche Sprachverarbeitung",
    mlModelEvaluation: "Modellevaluierung und Optimierung",
    
    // Deep Learning
    deepLearning: "Deep Learning",
    dlDesc: "Ich kann fortschrittliche neuronale Netze für komplexe Aufgaben implementieren.",
    dlServices: "Meine Dienstleistungen umfassen:",
    dlImageVideo: "Bild- und Videoanalyse",
    dlSpeechRecognition: "Spracherkennung",
    dlTextGeneration: "Textgenerierung",
    dlCustomNeural: "Individuelles Design neuronaler Netze",
    dlModelDeployment: "Modellbereitstellung",
    
    // Web Design
    webDesign: "Webdesign",
    webDesignDesc: "Ich kann atemberaubende und benutzerfreundliche Designs erstellen.",
    webDesignServices: "Meine Dienstleistungen umfassen:",
    webDesignUiUx: "UI/UX Design",
    webDesignGraphic: "Grafikdesign",
    webDesignResponsive: "Responsives Design",
    webDesignBranding: "Branding und Identität",
    webDesignPrototyping: "Prototyping",
    
    contactMe: "Kontaktieren Sie mich",
  },

  // Contact page
  contact: {
    title: "Kontaktieren Sie mich",
    email: "E-Mail",
    name: "Name",
    query: "Anfrage",
    send: "Senden",
    sentSuccess: "Erfolgreich gesendet!",
    loading: "Laden.....",
    allFieldsRequired: "Alle Felder sind erforderlich.",
    couldNotSend: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
  },

  // Common/Shared
  common: {
    loading: "Laden...",
    error: "Ein Fehler ist aufgetreten",
    readMore: "Mehr lesen",
  },

  // Project Data Translations
  projectData: {
    // FindH
    findh: {
      title: "FindH",
      eyebrow: "Flaggschiff Full-Stack Fallstudie",
      technologies: "Next.js, React, Node.js, Express.js, Supabase, PostgreSQL, Framer Motion, GSAP",
      description: "FindH ist eine Mietverifizierungsplattform, die Mieter mit nahegelegenen Maklern verbindet, die Immobilien physisch überprüfen können. Benutzer können Makler buchen, um Angebote zu inspizieren, Verifizierungsdokumente hochzuladen und private, von Administratoren genehmigte Berichte über einen sicheren Multi-Rollen-Workflow zu erhalten.",
      caseStudy: {
        intro: {
          paragraphs: [
            "FindH ist eine Webplattform, die entwickelt wurde, um eines der größten Probleme auf Mietmarktplätzen zu lösen: Vertrauen. Viele Mieter buchen Zimmer oder Wohnungen online, ohne zu überprüfen, ob die Immobilie tatsächlich existiert, ob die Informationen korrekt sind oder ob der Vermieter legitim ist. FindH führt eine menschliche Verifizierungsschicht ein, indem es Mieter mit nahegelegenen verifizierten Maklern verbindet, die Immobilien physisch inspizieren und Nachweise hochladen können.",
            "Die Plattform ermöglicht es Mietern, eine Immobilienverifizierung anzufordern, erlaubt Maklern, Vor-Ort-Inspektionen durchzuführen, und bietet Administratoren Werkzeuge zur Überprüfung hochgeladener Dokumente. Nach der Genehmigung wird der Verifizierungsbericht privat für den Mieter verfügbar, der die Verifizierung angefordert hat, und gewährleistet so Transparenz bei gleichzeitiger Wahrung der Privatsphäre.",
            "Im Gegensatz zu traditionellen Marktplätzen, die auf automatisierte Abzeichen oder Verkäuferangaben angewiesen sind, verwendet FindH reale Verifizierung durch menschliche Makler, was Immobilienangebote erheblich zuverlässiger macht."
          ]
        },
        problemTitle: "Problem, das das Projekt löst",
        problemParagraph: "Online-Mietplattformen leiden oft unter:",
        problemList: [
          "Gefälschte Immobilienangebote",
          "Irreführende Fotos oder Beschreibungen",
          "Betrügerische Vermieter, die Vorauszahlungen verlangen",
          "Mieter, die Immobilien nicht physisch besichtigen können"
        ],
        problemFooter: [
          "FindH löst dies durch die Einführung einer bedarfsgesteuerten Immobilienverifizierung durch lokale Makler.",
          "Ein Mieter kann einen nahegelegenen Makler beauftragen, die Immobilie zu inspizieren und zu bestätigen, ob das Angebot echt ist."
        ],
        coreIdeaTitle: "Kernidee",
        coreIdeaParagraph: "Das System führt drei Rollen ein:",
        coreIdeaList: [
          "Mieter: Ein Benutzer, der nach Mietobjekten sucht und möchte, dass ein Angebot verifiziert wird, bevor er ihm vertraut.",
          "Makler: Ein verifizierter Benutzer, der Immobilien physisch besuchen und Legitimitätsnachweise hochladen kann.",
          "Administrator: Ein Plattform-Moderator, der hochgeladene Dokumente überprüft und Verifizierungsberichte genehmigt oder ablehnt."
        ],
        coreIdeaFooter: "Dies schafft eine vertrauenswürdige Verifizierungs-Pipeline.",
        workflowTitle: "Verifizierungs-Workflow",
        workflowParagraph: "Der Workflow des Systems ist wie folgt strukturiert:",
        workflowList: [
          "Mieter sieht Immobilienangebot an",
          "Mieter klickt auf Diese Immobilie verifizieren",
          "Nahegelegene Makler werden basierend auf dem Standort angezeigt",
          "Mieter wählt einen Makler und bucht die Verifizierung",
          "Makler erhält die Verifizierungsanfrage",
          "Makler besucht die Immobilie und lädt Verifizierungsdokumente hoch",
          "Administrator überprüft die hochgeladenen Dokumente",
          "Bei Genehmigung wird der Verifizierungsbericht für den Mieter sichtbar"
        ],
        workflowFooter: "Die Verifizierung ist privat, was bedeutet, dass andere Benutzer den Verifizierungsbericht nicht sehen können, es sei denn, sie haben ihn angefordert.",
        featuresTitle: "Plattformfunktionen",
        propertyListings: {
          title: "Immobilienangebote",
          paragraph: "Benutzer können Mietangebote erstellen, indem sie Immobiliendetails angeben wie:",
          list: ["Titel", "Adresse", "Miete", "Teilungskapazität", "Regeln und Annehmlichkeiten", "Immobilienbilder"],
          footer: "Angebote erscheinen auf dem Marktplatz, wo Mieter sie erkunden können."
        },
        agentDiscovery: {
          title: "Nahegelegene Makler-Entdeckung",
          paragraphs: [
            "Wenn ein Mieter ein Angebot öffnet, zeigt die Plattform Makler in der Nähe der Immobilie an.",
            "Dies wird anhand der bei der Registrierung angegebenen Adressinformationen berechnet.",
            "Benutzer können:"
          ],
          list: ["Maklerprofile ansehen", "Bewertungen oder Glaubwürdigkeit prüfen", "Einen Makler zur Verifizierung buchen"]
        },
        agentVerification: {
          title: "Makler-Verifizierungssystem",
          paragraph: "Makler können:",
          list: [
            "Verifizierungsanfragen annehmen",
            "Den Immobilienstandort besuchen",
            "Verifizierungsdokumente hochladen wie: Eigentumsnachweis, Mietvertrag, Stromrechnung, Grundbucheintrag, Immobilienbilder"
          ],
          footer: "Diese Dokumente werden dem Administrator zur Genehmigung vorgelegt."
        },
        adminDashboard: {
          title: "Admin-Dashboard",
          paragraphs: ["Das Admin-Dashboard ist für die Aufrechterhaltung des Plattformvertrauens verantwortlich.", "Administratoren können:"],
          list: [
            "Makleridentität verifizieren (KYC)",
            "Immobilienverifizierungsdokumente überprüfen",
            "Verifizierungsberichte genehmigen oder ablehnen",
            "Mieterbuchungen anzeigen",
            "Makler und Angebote überwachen",
            "Die Plattformdatenbank verwalten"
          ],
          footer: "Dies stellt sicher, dass nur legitime Verifizierungsberichte an Mieter geliefert werden."
        },
        privateReports: {
          title: "Private Verifizierungsberichte",
          paragraph: "Sobald der Administrator einen Verifizierungsbericht genehmigt:",
          list: [
            "Der Mieter, der den Makler gebucht hat, erhält Zugang",
            "Dokumente werden im Abschnitt Maklerdokumente sichtbar",
            "Mieter können Verifizierungsdateien anzeigen und herunterladen"
          ],
          footer: "Die Verifizierungsergebnisse werden nicht öffentlich angezeigt, um die Privatsphäre zu wahren."
        },
        bookingSystem: {
          title: "Buchungssystem",
          paragraph: "Die Plattform enthält einen Buchungs-Workflow, bei dem Mieter:",
          list: [
            "Einen Makler auswählen",
            "Buchung bestätigen",
            "Die Verifizierungsgebühr bezahlen (derzeit Scheinzahlung für Tests)"
          ],
          footer: "Dies schafft eine strukturierte Anfrage zwischen Mieter und Makler."
        },
        technicalTitle: "Technische Architektur",
        technicalParagraph: "Das Projekt verwendet eine moderne Full-Stack-Architektur.",
        frontend: {
          title: "Frontend",
          paragraphs: ["Das Frontend wurde mit Next.js und React entwickelt und bietet eine responsive und interaktive Benutzeroberfläche.", "Wichtige Frontend-Technologien:"],
          list: ["Next.js", "React", "Framer Motion Animationen", "GSAP Hintergrundanimationen", "Responsives UI-Design"],
          footer: "Die Oberfläche konzentriert sich auf ein sauberes Marktplatz-Layout mit modernen UI-Interaktionen."
        },
        backend: {
          title: "Backend",
          paragraphs: ["Das Backend verarbeitet Geschäftslogik und API-Endpunkte.", "Haupttechnologien:"],
          list: ["Node.js", "Express.js", "REST APIs"],
          footer: "Backend-Verantwortlichkeiten umfassen: Authentifizierung, Immobilienangebotsverwaltung, Makleranfragenbearbeitung, Dokumentenverifizierungs-Workflows, Admin-Moderationstools"
        },
        database: {
          title: "Datenbank",
          paragraphs: ["Die Anwendung verwendet PostgreSQL über Supabase.", "Die Datenbank verwaltet:"],
          list: ["Benutzer", "Makler", "Angebote", "Verifizierungsdokumente", "Buchungsanfragen", "Bewertungen"],
          footer: "Das Schema ist mit relationaler Integrität unter Verwendung von Fremdschlüsseln konzipiert."
        },
        fileStorage: {
          title: "Dateispeicher",
          paragraphs: ["Verifizierungsdokumente und Bilder werden mit Supabase Storage gespeichert.", "Zwei Arten von Speicher-Buckets werden verwendet:"],
          list: ["Öffentlicher Bucket: Immobilienbilder", "Privater Bucket: Verifizierungsdokumente, KYC-Dokumente, Nachweisdateien"],
          footer: "Admin und autorisierte Benutzer greifen über signierte URLs auf private Dateien zu."
        },
        securityTitle: "Sicherheitsfunktionen",
        securityParagraph: "Das System implementiert mehrere Sicherheitsmaßnahmen:",
        securityList: [
          "JWT-Authentifizierung",
          "Geschützte Routen",
          "Private Dokumentenspeicherung",
          "Admin-Verifizierung von Maklern",
          "Eingeschränkter Zugang zu Verifizierungsberichten"
        ],
        securityFooter: "Diese Mechanismen verhindern unbefugten Zugriff und erhalten das Vertrauen innerhalb der Plattform.",
        uniqueTitle: "Einzigartige Aspekte des Projekts",
        uniqueParagraphs: ["FindH unterscheidet sich von traditionellen Mietplattformen, da es menschliche Verifizierung anstelle von automatisierten Vertrauenssystemen einführt.", "Wichtige Innovationen umfassen:"],
        uniqueList: [
          "Bedarfsgesteuerte Immobilienverifizierung",
          "Private Verifizierungsberichte",
          "Reale Inspektion durch Makler",
          "Strukturiertes Admin-Genehmigungssystem"
        ],
        uniqueFooter: "Dieser Ansatz reduziert das Risiko von Mietbetrug erheblich."
      }
    },

    // Second Brain AI
    secondBrain: {
      title: "Second Brain AI",
      eyebrow: "KI-Wissenssystem",
      technologies: "Next.js, React, FastAPI, Supabase, PostgreSQL, Vector Embeddings, KI-APIs",
      description: "Second Brain AI ist eine persönliche Wissensmanagement-Plattform, die es Benutzern ermöglicht, Dokumente hochzuladen, Websites zu indizieren und mit ihren Daten über KI zu interagieren. Es unterstützt mehrere KI-Anbieter und ermöglicht nahtloses Wechseln zwischen Modellen, ohne den Konversationskontext zu verlieren.",
      caseStudy: {
        intro: {
          paragraphs: [
            "Second Brain AI ist eine Plattform, die entwickelt wurde, um das wachsende Problem des fragmentierten Wissens und der ineffizienten Interaktion mit KI-Tools zu lösen. Benutzer speichern oft Informationen über Dokumente, Websites und Notizen verteilt, was es schwierig macht, Erkenntnisse schnell abzurufen.",
            "Zusätzlich beschränken die meisten KI-Plattformen Benutzer auf einen einzigen Anbieter, was Experimente und Flexibilität einschränkt. Das Wechseln zwischen Anbietern führt oft zum Verlust des Konversationskontexts und zwingt Benutzer, Diskussionen neu zu beginnen.",
            "Second Brain AI führt ein einheitliches System ein, in dem Benutzer Wissen speichern, damit über KI interagieren und nahtlos zwischen mehreren KI-Anbietern wechseln können, ohne den Kontext zu verlieren."
          ]
        },
        problemTitle: "Problem, das das Projekt löst",
        problemParagraph: "Moderne KI-Workflows leiden unter mehreren Ineffizienzen:",
        problemList: [
          "KI-Anbieter-Lock-in, das die Flexibilität einschränkt",
          "Verlust des Konversationskontexts beim Wechseln von Modellen",
          "Verstreutes Wissen über Dokumente und Websites",
          "Schwierigkeiten beim Abrufen spezifischer Erkenntnisse aus großen Dokumenten",
          "Wiederholtes Erklären desselben Kontexts für verschiedene KI-Modelle"
        ],
        problemFooter: [
          "Second Brain AI löst diese Probleme durch die Kombination von Wissensmanagement mit flexibler KI-Integration.",
          "Es ermöglicht Benutzern, Modelle frei zu wechseln und dabei den Konversationsfluss zu erhalten."
        ],
        coreIdeaTitle: "Kernidee",
        coreIdeaParagraph: "Die Plattform basiert auf drei Kernkonzepten:",
        coreIdeaList: [
          "Persönliche Wissensbasis: Dokumente und Webinhalte an einem Ort speichern",
          "Kontextbewusster KI-Chat: Mit gespeichertem Wissen in natürlicher Sprache interagieren",
          "Anbieterflexibilität: Zwischen KI-Modellen wechseln, ohne den Kontext zu verlieren"
        ],
        coreIdeaFooter: "Dies schafft ein nahtloses und leistungsstarkes KI-gestütztes Denksystem.",
        workflowTitle: "System-Workflow",
        workflowParagraph: "Der Workflow des Systems ist wie folgt strukturiert:",
        workflowList: [
          "Benutzer registriert sich und meldet sich an",
          "Benutzer lädt Dokumente hoch oder fügt Website-URLs hinzu",
          "Inhalte werden verarbeitet und in Vektoreinbettungen indiziert",
          "Benutzer startet einen Chat oder wählt ein Dokument aus",
          "KI ruft relevanten Kontext mittels semantischer Suche ab",
          "Benutzer kann KI-Anbieter jederzeit wechseln",
          "Konversationskontext wird über Anbieterwechsel hinweg beibehalten",
          "Benutzer erhält genaue, kontextbewusste Antworten"
        ],
        workflowFooter: "Das System gewährleistet Kontinuität und Effizienz bei KI-Interaktionen.",
        featuresTitle: "Plattformfunktionen",
        knowledgeBase: {
          title: "Wissensbasis-Verwaltung",
          paragraph: "Benutzer können ihr Wissen effizient verwalten.",
          list: [
            "Dokumente hochladen (PDF, TXT, MD)",
            "Website-URLs hinzufügen",
            "Gespeicherte Dokumente anzeigen und verwalten",
            "Dokumente mit automatischer Kontextbereinigung löschen"
          ],
          footer: "Alle Daten werden für schnellen Abruf indiziert."
        },
        chatSystem: {
          title: "KI-Chat-System",
          paragraph: "Die Plattform bietet ein fortschrittliches Chat-Erlebnis.",
          list: [
            "Multi-Thread-Chat-Verlauf",
            "Chat-Suchfunktion",
            "Antworten im Markdown-Stil",
            "Tippanimationen für KI-Antworten",
            "Persistente Konversationen"
          ]
        },
        documentChat: {
          title: "Dokumentenbezogener Chat",
          paragraph: "Benutzer können mit bestimmten Dokumenten interagieren.",
          list: [
            "Auf ein Dokument klicken, um einen begrenzten Chat zu starten",
            "KI versteht automatisch den Dokumentenkontext",
            "Fokussierte und genaue Antworten",
            "Möglichkeit, zum globalen Kontext zurückzukehren"
          ]
        },
        multiProvider: {
          title: "Multi-Anbieter-KI-System",
          paragraph: "Eine der wichtigsten Innovationen der Plattform.",
          list: [
            "Mehrere KI-Anbieter hinzufügen",
            "API-Schlüssel und Endpunkte konfigurieren",
            "Modelle direkt während Konversationen wechseln",
            "Unterstützung für Cloud-, private und lokale LLMs"
          ],
          footer: "Im Gegensatz zu traditionellen Plattformen sind Benutzer nicht an einen einzigen Anbieter gebunden."
        },
        contextPreservation: {
          title: "Kontexterhaltungssystem",
          paragraph: "Eine wichtige Innovation der Plattform ist die Aufrechterhaltung der Konversationskontinuität.",
          list: [
            "Konversationsverlauf wird über Anbieterwechsel hinweg beibehalten",
            "Kein erneutes Erklären des vorherigen Kontexts nötig",
            "Nahtloser Übergang zwischen Modellen",
            "Verbesserte Produktivität für Entwickler und Forscher"
          ],
          footer: "Dies löst ein kritisches Problem in Multi-Modell-Experimentier-Workflows."
        },
        technicalTitle: "Technische Architektur",
        technicalParagraph: "Die Plattform verwendet eine moderne skalierbare Architektur.",
        frontend: {
          title: "Frontend",
          paragraph: "Das Frontend wurde mit modernen Webtechnologien erstellt.",
          list: [
            "Next.js",
            "React",
            "Responsives UI-Design",
            "Interaktive Chat-Oberfläche"
          ]
        },
        backend: {
          title: "Backend",
          paragraph: "Das Backend wird von FastAPI angetrieben.",
          list: [
            "REST-API-Endpunkte",
            "Chat-Verarbeitungs-Pipeline",
            "Dokumentenaufnahme und -analyse",
            "Anbieter-Routing-System"
          ]
        },
        databaseStorage: {
          title: "Datenbank & Speicher",
          paragraph: "Daten werden mit Supabase und PostgreSQL verwaltet.",
          list: [
            "Benutzerauthentifizierung",
            "Chat-Verlaufsspeicherung",
            "Dokumentenmetadaten",
            "Vektoreinbettungen für semantische Suche"
          ]
        },
        aiRetrieval: {
          title: "KI & Abruf",
          paragraph: "Das System verwendet fortschrittliche Abruftechniken.",
          list: [
            "Vektoreinbettungen für semantische Suche",
            "Lexikalische Fallback-Suche",
            "Kontextzusammenstellung für genaue Antworten",
            "Dokumentpriorisierter Abruf für begrenzte Chats"
          ]
        },
        securityTitle: "Sicherheit & Zuverlässigkeit",
        securityParagraph: "Das System enthält mehrere Schutzmaßnahmen:",
        securityList: [
          "Sichere Authentifizierung mit Supabase",
          "Verschlüsselte API-Schlüsselspeicherung",
          "Geschützte Routen",
          "Rate-Limit-Behandlung",
          "Fehlerbehandlung und Fallback-Mechanismen"
        ],
        uniqueTitle: "Einzigartige Aspekte des Projekts",
        uniqueParagraph: "Second Brain AI führt eine einzigartige Kombination aus Flexibilität und Intelligenz ein.",
        uniqueList: [
          "Multi-Anbieter-KI-Unterstützung",
          "Kontexterhaltung über Modellwechsel hinweg",
          "Dokumentbezogene KI-Konversationen",
          "Semantische + lexikalische Hybridsuche",
          "Persönliches KI-gestütztes Wissenssystem"
        ],
        uniqueFooter: "Dies macht es zu einem leistungsstarken Werkzeug für Entwickler, Forscher und Wissensarbeiter."
      }
    },

    // Defungi CNN
    defungi: {
      title: "Defungi CNN",
      technologies: "Python, TensorFlow, CNN, Deep Learning",
      description: "Defungi CNN ist ein Deep-Learning-Projekt, das Convolutional Neural Networks verwendet, um Pilzbilder für medizinische Analysen zu klassifizieren. Das Modell verarbeitet Bilddatensätze und prognostiziert Pilzarten mit hoher Genauigkeit und demonstriert praktische Computer-Vision- und Gesundheits-KI-Anwendungen."
    },

    // Detect GPT
    detectGpt: {
      title: "Detect GPT",
      technologies: "Python, NLP, Machine Learning",
      description: "Detect GPT ist ein KI-Tool, das entwickelt wurde, um zu erkennen, ob Text von großen Sprachmodellen generiert wurde. Das System analysiert linguistische Muster und Wahrscheinlichkeitsverteilungen, um zwischen menschengeschriebenen und KI-generierten Inhalten zu unterscheiden."
    },

    // GenAI
    genai: {
      title: "GenAI",
      technologies: "Next.js, HTML, CSS, JavaScript, KI-API",
      description: "GenAI ist eine generative KI-Plattform, die es Benutzern ermöglicht, dynamische Inhalte wie Text und Bilder mit modernen KI-APIs zu erstellen. Sie bietet eine intuitive Oberfläche für Entwickler und Kreative, um mit KI-gestützten Workflows zu experimentieren."
    },

    // Chit-Chat
    chitChat: {
      title: "Chit-Chat",
      technologies: "Node.js, HTML, CSS, JavaScript, Socket.io",
      description: "Chit Chat ist eine Echtzeit-Messaging-Anwendung, die mit Node.js, Express und Socket.io erstellt wurde. Sie unterstützt private Chatrooms, die mit UUID für sichere Konversationen generiert werden, und ermöglicht Sofortnachrichten und Dateifreigabe in einer einfachen und responsiven Oberfläche."
    },

    // JapEase
    japease: {
      title: "JapEase",
      technologies: "React.js, Node.js, HTML, CSS, JavaScript, API",
      description: "JapEase ist eine Jobentdeckungs-Anwendung, die mit React.js erstellt wurde und Studenten hilft, Echtzeit-Stellenangebote zu finden. Sie konzentriert sich auf API-Integrationen, dynamische UI-Updates und responsives Design, um eine reibungslose Jobsuch-Erfahrung zu bieten."
    },

    // SnapGen
    snapgen: {
      title: "SnapGen",
      technologies: "Node.js, HTML, CSS, JavaScript, Unsplash API",
      description: "SnapGen ist eine Bildgenerierungs- und Entdeckungs-Webanwendung, die von der Unsplash API angetrieben wird. Sie ermöglicht Benutzern, hochwertige Bilder zu suchen, in der Vorschau anzuzeigen und herunterzuladen, mit einer schnellen und minimalen Oberfläche."
    },

    // NexGen
    nexgen: {
      title: "NexGen",
      technologies: "Next.js",
      description: "NexGen ist eine innovative Plattform, auf der Benutzer mit Hilfe eines persönlichen Entwicklers individuelle Websites erstellen können. Das Projekt nutzt Next.js, um ein reibungsloses und effizientes Benutzererlebnis zu bieten und Einzelpersonen zu befähigen, ihre digitalen Visionen mühelos zum Leben zu erwecken."
    },

    // Next Level Food
    nextLevelFood: {
      title: "Next Level Food",
      technologies: "React, SQLite",
      description: "Next Level Food ist eine Rezept-Sharing-Plattform, auf der Benutzer Essensrezepte erkunden und beitragen können. Die Anwendung konzentriert sich auf eine intuitive Benutzeroberfläche, die es Benutzern ermöglicht, Gerichte zu durchsuchen, Kochanweisungen anzuzeigen und ihre eigenen kulinarischen Kreationen zu teilen."
    },

    // Micro Course Converter
    microCourse: {
      title: "Micro Course Converter",
      technologies: "Python, NLP, KI",
      description: "Micro Course Converter ist ein KI-gestütztes Tool, das lange Bildungsinhalte in strukturierte Mikro-Lernmodule umwandelt. Es verwendet natürliche Sprachverarbeitung, um Informationen zusammenzufassen und in prägnante Lernsegmente umzustrukturieren."
    }
  }
};
