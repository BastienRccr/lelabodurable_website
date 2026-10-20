---
name: Le Labo Durable
description: Conseil et formations pour des laboratoires d'analyse plus sobres — fiche de stage technique, bleu pétrole et or.
colors:
  petrole-profond: "#0f3d4f"
  petrole-profond-survol: "#14495d"
  sarcelle-labo: "#1a6b7a"
  sarcelle-claire: "#2a8a9a"
  voile-sarcelle: "#e8f4f6"
  or-action: "#d4a053"
  or-clair: "#e8c88a"
  or-encre: "#8f5c15"
  encre: "#1a2a2e"
  encre-secondaire: "#4a5e63"
  encre-tertiaire: "#566a6f"
  filet: "#d8e4e7"
  papier: "#ffffff"
  papier-doux: "#f4f8f9"
  texte-sur-petrole: "#d3e6eb"
  texte-sur-petrole-attenue: "#a9c9d1"
  filet-sur-petrole: "rgba(255,255,255,.14)"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 1.5rem + 3vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.25rem + 1.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
  figure:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1rem + 0.6vw, 1.45rem)"
    fontWeight: 700
    lineHeight: 1.2
    fontFeature: "tnum"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  r: "10px"
  r-lg: "18px"
  pill: "999px"
spacing:
  gut: "clamp(1rem, 4vw, 2rem)"
  section: "clamp(3.5rem, 7vw, 5.5rem)"
  stack: "clamp(2.75rem, 5vw, 3.75rem)"
  panel: "1.5rem"
  maxw: "1180px"
  nav-h: "72px"
components:
  button-gold:
    backgroundColor: "{colors.or-action}"
    textColor: "{colors.petrole-profond}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.or-clair}"
    textColor: "{colors.petrole-profond}"
  button-deep:
    backgroundColor: "{colors.petrole-profond}"
    textColor: "{colors.papier}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "48px"
  button-deep-hover:
    backgroundColor: "{colors.sarcelle-labo}"
    textColor: "{colors.papier}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.papier}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.petrole-profond}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "48px"
  chip:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.encre-secondaire}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 1rem"
    height: "40px"
  chip-pressed:
    backgroundColor: "{colors.petrole-profond}"
    textColor: "{colors.papier}"
  tool-tag:
    backgroundColor: "{colors.voile-sarcelle}"
    textColor: "{colors.petrole-profond}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.85rem"
  nav-link-active:
    backgroundColor: "{colors.voile-sarcelle}"
    textColor: "{colors.petrole-profond}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.9rem"
  format-option:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.petrole-profond}"
    rounded: "{rounded.r}"
    padding: "0.8rem 0.9rem"
  format-option-selected:
    backgroundColor: "{colors.voile-sarcelle}"
    textColor: "{colors.petrole-profond}"
  inscription-card-head:
    backgroundColor: "{colors.petrole-profond}"
    textColor: "{colors.papier}"
    rounded: "{rounded.r-lg}"
    padding: "1.4rem 1.5rem"
  mini-card:
    backgroundColor: "{colors.petrole-profond}"
    textColor: "{colors.texte-sur-petrole}"
    rounded: "{rounded.r-lg}"
    padding: "1.25rem"
  mini-card-hover:
    backgroundColor: "{colors.petrole-profond-survol}"
---

# Design System: Le Labo Durable

<!-- Monde v2, relevé sur la surface Formations livrée (formations.html + 7 fiches formation-*.html). Les autres pages du site portent encore l'implémentation antérieure de la même marque ; ce monde a vocation à s'y étendre. -->

## Overview

**Creative North Star: "La fiche de stage technique"**

Tout ce qu'un·e responsable de laboratoire vérifie avant d'engager une équipe (public, durée, prérequis, formateur, modalités, prise en charge) est posé à plat, lisible sans cliquer, comme sur une fiche technique d'instrument. Le système alterne deux matières seulement : de grands bandeaux bleu pétrole profond (hero photographique voilé, preuves et financement, cartes de renvoi, pied de page) et une lecture sur blanc pur, structurée par des filets fins plutôt que par des boîtes. L'or n'apparaît que là où l'on agit, où l'on compte, ou où l'on avance d'une étape.

La densité est celle d'un document de référence : grilles de faits séparées par des filets verticaux, listes de définitions, tableaux de spécifications alignés à droite, chiffres en chiffres tabulaires. Une seule pièce flotte : la carte d'inscription (et, plus bas, la carte contact), collante dans une colonne de 360px, seule à porter une ombre douce. Le mouvement est rare : une seule entrée orchestrée (la barre de faits du hero), des survols de 0,2 s et une courbe unique.

Le site est toujours en thème clair. Le propriétaire a un daltonisme mixte sévère : aucun état, aucune catégorie, aucune information n'est portée par la couleur seule, et chaque couple texte/fond atteint au moins WCAG AA.

**Key Characteristics:**
- Bandeaux bleu pétrole pleine largeur alternant avec des zones de lecture sur blanc pur.
- Or réservé aux actions (pilules), aux chiffres et aux marqueurs de progression.
- Structure par filets de 1px et grilles de faits, pas par cartes empilées.
- Carte d'inscription collante, seule surface en élévation, dont le choix de format réécrit l'objet du mail.
- Outfit 700 pour les titres et les chiffres, Plus Jakarta Sans pour tout le texte courant.
- Icônes Lucide au trait, en SVG en ligne, jamais seules porteuses de sens.

## Colors

Un bleu pétrole profond qui tient la scène, une sarcelle de laboratoire pour les liens et icônes, un or chaud dosé au compte-gouttes, sur blanc pur.

### Primary
- **Bleu pétrole profond** (petrole-profond) : fond des bandeaux sombres (hero, preuves, financement, pied de page, colonne d'étapes du programme, tête de la carte d'inscription, cartes « autres formations »), couleur des titres sur blanc, texte des pilules or, état « pressé » des filtres, contour de focus sur fond clair. **Pétrole survol** (petrole-profond-survol) n'existe que pour le survol des cartes sombres.
- **Sarcelle labo** (sarcelle-labo) : liens courants, icônes au trait dans le texte (coches d'objectifs, méta des lignes du catalogue, contacts), survol du bouton plein pétrole. **Sarcelle claire** (sarcelle-claire) : uniquement la bordure de survol des options de format.

### Secondary
- **Or action** (or-action) : remplissage des pilules d'action principales (« Demander un devis », « Nous contacter »), barres du compteur de satisfaction, frise d'évaluation, losanges des listes de programme, bordure d'une question FAQ ouverte. Jamais en texte sur blanc (contraste 2,35:1).
- **Or clair** (or-clair) : chiffres et mots-clés sur fond pétrole (mot-clé du titre hero, barre de faits, note 4,7, montants « Sur devis »), sous-titres des étapes, survol des pilules or, sélection de texte, contour de focus sur fond sombre.
- **Or encre** (or-encre) : seule version de l'or autorisée en texte sur blanc (codes de formation du catalogue, 5,66:1).

### Neutral
- **Encre** (encre) : texte courant et valeurs des spécifications.
- **Encre secondaire** (encre-secondaire) : chapeaux, paragraphes de section, corps des listes, texte des filtres au repos.
- **Encre tertiaire** (encre-tertiaire) : libellés en capitales, intitulés des spécifications, sous-lignes d'options, chevrons de FAQ.
- **Filet** (filet) : tous les filets, bordures de cartes, d'options, de puces et de questions FAQ.
- **Papier** (papier) : fond de lecture, toujours blanc pur. **Papier doux** (papier-doux) : sections secondaires (évaluation, « Pourquoi nous ») et survol des lignes du catalogue.
- **Voile sarcelle** (voile-sarcelle) : fond des étiquettes d'outils, des tuiles d'icône du catalogue, du lien de navigation actif et de l'option de format choisie.
- **Texte sur pétrole** (texte-sur-petrole), **atténué** (texte-sur-petrole-attenue) et **filet sur pétrole** (filet-sur-petrole) : la triade de lecture à l'intérieur des bandeaux sombres ; les titres y passent en blanc.

### Named Rules
**The Gold Earns Its Place Rule.** L'or marque une action, un chiffre ou une étape de progression, rien d'autre. Pas de fond de section or, pas de titre de section or, pas d'or décoratif.

**The Gold Ink Rule.** Sur blanc, un texte « or » s'écrit en or encre ; l'or action et l'or clair ne servent qu'en remplissage, en marqueur ou sur pétrole.

**The Never By Colour Alone Rule.** Chaque état coloré a un second signal : option choisie = point radio + bordure + fond ; filtre actif = inversion plein/contour + `aria-pressed` ; question ouverte = chevron retourné + bordure ; lien = soulignement au survol ou flèche.

## Typography

**Display Font:** Outfit (avec system-ui, sans-serif), graisses 500–700 chargées, 700 en usage.
**Body Font:** Plus Jakarta Sans (avec system-ui, sans-serif), graisses 400–700.

**Character:** Outfit apporte une géométrie franche et compacte aux titres et aux chiffres ; Plus Jakarta Sans tient la lecture longue avec une chaleur sobre. Le couple reste technique sans être froid.

### Hierarchy
- **Display** (Outfit 700, clamp 2.2–3.6rem, interligne 1,06, approche −0,02em, 17ch max) : titre du hero uniquement, sur deux lignes ; la seconde ligne est le mot-clé, en or clair, passée à la ligne.
- **Headline** (Outfit 700, clamp 1.6–2.25rem, interligne 1,15) : titres de section.
- **Title** (Outfit 700, 1.05–1.25rem, interligne 1,25–1,3) : titres de ligne du catalogue, de formateur, de carte, d'étape, intitulés des informations pratiques.
- **Figure** (Outfit 700, clamp 1.15–1.45rem ; jusqu'à clamp 3–4.4rem pour la note) : chiffres de la barre de faits, montants, note de satisfaction ; toujours en chiffres tabulaires.
- **Body** (Plus Jakarta Sans 400, 1rem, interligne 1,65) : texte courant ; chapeaux à 1.05–1.13rem limités à 58–66ch ; listes et méta à 0.84–0.95rem.
- **Label** (Plus Jakarta Sans 600, 0.8rem, +0,08em, capitales) : intitulés de listes de définitions (« Public », « Prérequis », « Évaluation »), légende du choix de format, titres de colonnes du pied de page. Toujours un libellé de donnée, jamais un surtitre au-dessus d'un titre.

### Named Rules
**The Tabular Figures Rule.** Tout chiffre comparable (durées, notes, pourcentages, codes, délais) s'affiche en `tabular-nums`.

**The No Eyebrow Rule.** Aucun surtitre en capitales au-dessus d'un titre de section ou de hero. Les capitales espacées ne servent qu'aux libellés de données.

## Layout

Conteneur centré de 1180px max, gouttière fluide (clamp 1–2rem), navigation fixe de 72px. Les sections respirent par un rythme vertical fluide (clamp 3.5–5.5rem) ; à l'intérieur d'une fiche, les blocs s'enchaînent à clamp 2.75–3.75rem.

La fiche est une grille à deux colonnes : contenu fluide + colonne d'inscription de 360px, écart clamp 2–4rem, carte collante sous la navigation. Les informations se rangent en grilles de faits à colonnes égales (4 dans le hero, 3 pour « Pour qui », 4 pour « Pourquoi nous ») séparées par des filets verticaux sous un filet supérieur, sans fond ni boîte. Le programme est un tableau à colonne latérale pétrole de 180px. Le catalogue est une liste à lignes filetées : tuile d'icône, titre + résumé, colonne méta de 210px, flèche.

Points de rupture : à 1040px la fiche passe en une colonne (la carte devient statique, 560px max), les grilles de preuve/FAQ s'empilent, le catalogue replie sa méta sous le titre ; à 960px la navigation devient un panneau déroulant ; à 720px les grilles de faits passent en deux puis une colonne, la frise d'évaluation devient verticale et les boutons du hero prennent toute la largeur.

**The Visible By Default Rule.** Le contenu de décision n'est jamais caché derrière un accordéon ou un onglet ; seule la FAQ se replie.

## Elevation & Depth

Système à plat. La profondeur vient du contraste de matière (bandeau pétrole contre papier blanc, papier doux pour les sections secondaires) et des filets de 1px. Le hero superpose une photo de paysage à un voile pétrole en dégradé (96 % → 42 % d'opacité, de gauche à droite) pour garder le texte lisible.

### Shadow Vocabulary
- **Ombre de carte flottante** (`0 18px 40px -18px rgba(15,61,79,.28), 0 2px 6px rgba(15,61,79,.06)`) : carte d'inscription, carte contact collante, panneau de navigation mobile.
- **Ombre d'état ouvert** (`0 10px 30px -18px rgba(15,61,79,.35)`) : question FAQ dépliée, en réponse à l'état uniquement.

### Named Rules
**The One Floating Panel Rule.** Seuls les panneaux qui flottent au-dessus du contenu (carte collante, menu mobile) portent une ombre ; lignes, cartes de formateur et cartes sombres restent à plat.

## Shapes

Trois rayons : 10px pour les éléments de contrôle et petites surfaces (options, questions FAQ, vignettes de formateur, badge Qualiopi), 18px pour les conteneurs (carte d'inscription, programme, cartes sombres, carte de note), 999px pour tout ce qui est cliquable en ligne (boutons, filtres, étiquettes, liens de navigation). Les portraits de contact sont circulaires. Les puces du programme sont de petits losanges or (carré de 7px à coins de 2px, tourné de 45°) ; la frise d'évaluation aligne des cercles cerclés d'or sur un trait or de 2px.

## Components

### Buttons
Pilules franches, toujours avec un libellé verbal et une icône fléchée qui glisse de 2px au survol.
- **Shape:** pilule (999px), hauteur minimale 48px, contour 1,5px.
- **Primary (or) :** fond or action, texte pétrole, Plus Jakarta Sans 700 0.95rem, padding 0.8rem 1.5rem. Survol : or clair et léger soulèvement de 1px.
- **Plein pétrole :** fond pétrole, texte blanc ; survol sarcelle labo. Action principale sur fond clair (carte contact, appel final).
- **Contour clair (sur pétrole) :** texte blanc, contour blanc 45 % ; survol contour plein et voile blanc 8 %.
- **Fantôme (sur blanc) :** texte pétrole, contour filet ; survol contour pétrole.
- **Focus :** anneau 2px pétrole décalé de 3px, or clair sur fond sombre.

### Chips
- **Filtres du catalogue :** pilules de 40px, fond blanc, contour filet 1,5px, texte encre secondaire 600, icône de catégorie + compteur tabulaire. Survol : contour et texte pétrole. Actif : plein pétrole, texte blanc, `aria-pressed="true"`.
- **Étiquettes d'outils :** pilules voile sarcelle, texte pétrole 600 0.84rem, non interactives (openLCA, ecoinvent, normes).

### Cards / Containers
- **Carte d'inscription (signature) :** 18px, fond blanc, filet, ombre de carte flottante, collante. Tête pleine pétrole avec le tarif (« Sur devis ») en Outfit 1.7rem blanc ; corps avec choix de format, pilule or pleine largeur, lien secondaire et tableau de spécifications (intitulé encre tertiaire à gauche, valeur alignée à droite).
- **Cartes « autres formations » :** 18px, pleines pétrole, titre Outfit blanc, ligne méta en or clair (icône de catégorie · durée) sous le titre, « Voir la fiche » en pied ; survol pétrole survol et soulèvement de 3px.
- **Carte formateur :** 18px, fond blanc, filet, vignette 84px à 10px de rayon.
- **Carte de note :** sur pétrole, 18px, filet sur pétrole, voile blanc 4 %, compteur à cinq segments or.

### Inputs / Fields
- **Options de format :** boutons radio redessinés (cercle 18px, contour encre tertiaire 2px, point pétrole 8px qui grandit), dans une rangée à 10px de rayon et contour filet 1,5px. Survol : contour sarcelle claire. Choisi : contour pétrole, fond voile sarcelle, point visible. Le choix réécrit l'objet du `mailto`.

### Navigation
Barre fixe blanche à 96 % avec flou, filet inférieur. Liens en pilules encre secondaire 500 0.9rem ; survol et page courante en voile sarcelle + texte pétrole (page courante en 600 et `aria-current`). Appel « Nous contacter » en pilule or. Sous 960px : bouton burger 44px qui se transforme en croix et un panneau déroulant blanc avec ombre de carte flottante ; fermeture par Échap.

### Fil d'Ariane
Sur le hero, 0.8rem, séparateurs « / » en texte atténué, liens en texte sur pétrole soulignés au survol.

### Barre de faits (signature)
Sous un filet sur pétrole, quatre faits en colonnes égales séparées de filets verticaux : chiffre ou valeur en Outfit or clair (ou en blanc Plus Jakarta 700 pour les valeurs longues), légende en dessous. Seule entrée animée du système : montée de 14px en 0,9 s, décalée de 80 ms par fait, désactivée si mouvement réduit.

### Lignes du catalogue
Lignes filetées pleine largeur cliquables : tuile d'icône 56px voile sarcelle à 14px de rayon, titre Outfit pétrole + résumé, méta (code en or encre · catégorie, durée, formateur avec icônes sarcelle), flèche pétrole qui glisse de 4px au survol ; survol papier doux.

### Questions fréquentes
`details` natifs empilés, 10px, contour filet ; question en 600 pétrole avec chevron à droite. Ouvert : bordure or, ombre d'état ouvert, chevron retourné.

## Do's and Don'ts

### Do:
- **Do** alterner bandeaux pétrole pleine largeur et zones de lecture sur blanc pur (#ffffff), jamais de thème sombre global.
- **Do** réserver l'or aux actions, aux chiffres et aux marqueurs de progression, et écrire l'or en texte sur blanc uniquement en or encre (#8f5c15).
- **Do** structurer l'information par des filets de 1px (filet sur blanc, filet sur pétrole sur fond sombre) et des grilles de faits plutôt que par des boîtes.
- **Do** doubler chaque signal de couleur d'une forme, d'une icône, d'un texte ou d'un attribut ARIA.
- **Do** afficher les chiffres en `tabular-nums` et en Outfit 700.
- **Do** utiliser des icônes Lucide au trait en SVG en ligne, accompagnées d'un libellé.
- **Do** garder une seule courbe (`cubic-bezier(.16,1,.3,1)`) et respecter `prefers-reduced-motion`.

### Don't:
- **Don't** poser de surtitre en capitales au-dessus d'un titre ; les capitales espacées sont réservées aux libellés de données.
- **Don't** mettre d'ombre sur une surface qui ne flotte pas ; lignes, cartes formateur et cartes sombres restent à plat.
- **Don't** utiliser l'or action ou l'or clair comme couleur de texte sur blanc.
- **Don't** cacher public, durée, prérequis, formateur, modalités ou prise en charge derrière un accordéon ou un onglet.
- **Don't** distinguer des catégories ou des états par la seule teinte.
- **Don't** utiliser d'icônes-glyphes (émojis, caractères) ni d'icônes pleines.
