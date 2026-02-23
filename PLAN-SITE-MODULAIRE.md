# Plan — Site Nukleo Modulaire (UI à widgets)

## Vue d'ensemble

Transformation du site Nukleo en une interface modulaire composée de 5 widgets distincts, chacun avec une identité visuelle et des interactions spécifiques.

---

## 🎨 Inspiration visuelle (référence)

Direction design basée sur la référence fournie :

**Palette de couleurs :**
- **Violet / purple** — Accent principal, CTA, éléments interactifs
- **Rouge-brun sombre** — Titres, brand « nukle », cartes
- **Gris foncé / noir** — Fond secondaire, cartes
- **Blanc / gris clair** — Texte, contrastes

**Ton :** Moderne, épuré, **look modulaire type dashboard** — widgets en cartes distinctes, glassmorphism, dégradés soft (violet-bleu), laptop/visuel à droite.

**Layout Héro modulaire :** Panneau gauche = pile de widgets (mini-cartes 24/23, portfolio 749k$, contact, barres de progression). Panneau droit = laptop sur socle. Cartes translucides, coins arrondis.

---

## 🖼️ Inspirations supplémentaires

### Inspiration A — Cartes superposées (stack de cartes)

**Visuel :** Pile de cartes rectangulaires à coins arrondis sur fond noir, légèrement décalées verticalement/horizontalement pour créer de la profondeur.

**Éléments clés :**
- Cartes empilées avec effet de couches (avant/arrière)
- Carte centrale mise en avant avec silhouette de personne (flou, halo bleu-violet)
- Cartes secondaires : gris foncé, touches de rouge
- **Carte du bas :** encoche rectangulaire centrale type « poignée » — suggère un tiroir/slide à tirer

**Application :**
- **Projets :** Chaque projet = une carte ; la poignée ouvre le drawer
- **Équipe :** Cartes avec photos/silhouettes, défilement = révélation des couches
- **Interactions :** Glisser/tirer pour révéler le contenu détaillé

---

### Inspiration B — Layout VFX / Animation

**Visuel :** Interface sombre, barres verticales latérales, split texte | visuel, typographie forte.

**Éléments clés :**
- **Barres latérales :** fines bandes verticales (gris clair / dégradé rose-or) avec numéros de section (00-1, 00-2, 00-3) et labels verticaux (« ANIMATION », « COLOR »)
- **Split gauche :** gros chiffre (00-2), titre accrocheur (« GET THE CONVERSATION STARTED »), paragraphe descriptif
- **Split droit :** grande image/vidéo ou visuel projet
- **Bas :** lettres géantes (V, F, X) comme élément graphique de marque

**Application :**
- **Héro :** Titre punch + texte + visuel à droite
- **Projets :** Barres latérales pour navigation (01, 02, 03), visuel projet en grand
- **Navigation :** Numéros de section = slider / carousel
- **Marque :** Typographie géante pour « NUKLEO » ou mots-clés en bas de section

---

### Inspiration C — Nukleo Digital Demo

**Source :** [ingenious-rebirth-production-7f81.up.railway.app/demo/](https://ingenious-rebirth-production-7f81.up.railway.app/demo/)

**Structure du site :**
- **Héro :** « DigitalPerfor-mance. » (césure typographique), sous-titre « For ambitious organizations — any size », 2 CTA (Start a project / Learn about us)
- **Stats :** 150+ organisations, 7+ années, 300+ projets — chiffres mis en avant
- **Who We Are :** Bloc valeur + liens
- **Départements :** « Four ways to grow » — 4 cartes avec « 01 Explore → Nukleo.Agency », « 02 Explore → Nukleo.Studio », « 03 Explore → Nukleo.Tech », « 04 Explore → Nukleo.Consulting » + courte description chacune
- **Projets (Selected Work) :** Numérotation 00-1, catégorie « Brand & Digital », ex. MBAM avec métrique « +240% digital reach », [View case study →]
- **Équipe :** « People behind the work », indicateurs 02 / 03, « Clément Laberge - Founder & CEO », flèches ↑↓
- **Footer :** « Ready to perform? », liens Nukleo

**Éléments réutilisables :**
- Numérotation des sections (00-1, 01, 02, 03, 04)
- Format départements : Nukleo.Agency, Nukleo.Studio, Nukleo.Tech, Nukleo.Consulting
- Césure typographique sur les titres (« DigitalPerfor-mance »)
- Métriques projets (ex. +240% digital reach)
- « Explore → » et « View case study → » pour les liens

---

### Inspiration D — Deux Huit Huit

**Source :** [deuxhuithuit.com/fr](https://deuxhuithuit.com/fr)

**Identité :** « Deux Huit Huit — Bureau de design superdigital™ » (Montréal)

**Structure :**
- **Navigation :** Accueil, Projets, Collections, Services, Contact
- **CTA :** « Mandatez-nous » — formulation directe et engageante
- **Projets / Collections :** Regroupements thématiques avec noms créatifs + courte description
  - Ex. « Merci au jury », « Champions poids lourds », « Entrez dans la danse », « Dopamine », « Comme dans du beurre », « Troisième dimension », « À table », etc.
- **Format projet :** Titre + catégorie (ex. « Cinéma Cinéma | Divertissement », « Quartier Molson | Construction et immobilier »)

**Éléments réutilisables :**
- **CTA type « Mandatez-nous »** pour appel à l’action
- **Collections thématiques** pour organiser les projets (au lieu d’une simple liste)
- **Format Titre | Catégorie** pour chaque projet
- **Positionnement** : qualificatif court type « superdigital™ » après la description du bureau
- **Langue** : bascule FR/EN

---

## Architecture technique

| Option | Avantages | Inconvénients |
|--------|-----------|---------------|
| **HTML/CSS/JS pur** | Léger, pas de build, déploiement simple | Plus de code manuel |
| **React + composants** | Réutilisable, état géré | Build nécessaire, plus lourd |
| **Vue/Svelte** | Bon compromis | Courbe d'apprentissage |

**Recommandation :** HTML/CSS/JS avec structure modulaire (sections = widgets) — cohérent avec le projet actuel et sans changement de stack.

---

## Structure des fichiers proposée

```
Nukleo-Site/
├── index.html              # Page actuelle
├── demo.html               # Page DÉMO complète (tous les widgets)
├── css/
│   ├── main.css            # Styles globaux, variables
│   └── demo.css            # Styles page demo
├── js/
│   ├── main.js             # Initialisation
│   └── demo.js             # Logique drawer, animations demo
└── assets/
```

---

## Détail des 5 widgets

### 1. Widget Héro *(inspirations : dashboard + layout VFX)*

**Objectif :** Bannière d'accueil type dashboard, avec panneaux modulaires et barres de navigation.

**Inspirations combinées :**
- **Dashboard (ref. 1) :** Tagline, nukleo split, visuel, CTA violet
- **Layout VFX (ref. 2) :** Barres latérales avec numéros de section, split titre + texte | visuel, typographie géante en bas

**Contenu :**
- Titre principal (ex. « Nukleo — Solutions innovantes »)
- Sous-titre ou baseline
- CTA principal (bouton)
- Image de fond ou vidéo optionnelle

**Comportement :**
- Plein écran ou hauteur viewport
- Animation d’entrée (fade, slide léger)
- Parallaxe léger sur scroll (optionnel)

**Maquette logique :**
```
┌─────────────────────────────────────────────┐
│                                             │
│           NUKLEO                             │
│     Solutions innovantes                    │
│                                             │
│         [ Découvrir nos projets ]            │
│                                             │
└─────────────────────────────────────────────┘
```

---

### 2. Widget Projets *(inspirations : panneaux + stack de cartes)*

**Objectif :** Projets présentés en défilement horizontal OU en stack de cartes superposées, ouverture en grand via drawer.

**Inspirations combinées :**
- **Panneaux publicitaires** : affiches côte à côte, indicateur vertical (01, 02, 03)
- **Stack de cartes** : cartes superposées, poignée en bas pour tirer/ouvrir le drawer

**Contenu :**
- Liste/grille de cartes projet (titre, image, résumé)
- Au clic : ouverture d’un panneau/drawer en overlay
- Contenu détaillé du projet (texte, images, liens)

**Comportement :**
- Cartes en grille ou carrousel horizontal
- Clic → drawer slide depuis la droite (ou du bas)
- Overlay semi-transparent derrière
- Fermeture : bouton X, clic sur overlay ou touche Échap

**Maquette logique :**
```
État fermé :                    État ouvert (drawer) :
┌─────────────────────┐        ┌──────────────────┬──────────────────────────┐
│  NOS PROJETS        │        │                  │  [X] Projet Alpha        │
│  ┌───┐ ┌───┐ ┌───┐  │        │   Overlay        │  ─────────────────────   │
│  │ 1 │ │ 2 │ │ 3 │  │   →    │   (clic ferme)   │  Description complète   │
│  └───┘ └───┘ └───┘  │        │                  │  Images, liens...       │
└─────────────────────┘        └──────────────────┴──────────────────────────┘
```

**Données exemple :**
```javascript
const projets = [
  { id: 1, titre: "Projet Alpha", image: "...", resume: "...", detail: "..." },
  // ...
];
```

---

### 3. Widget Équipe *(inspirations : défilement + stack)*

**Objectif :** Présenter l’équipe avec une animation verticale.

**Contenu :**
- Cartes membre : photo à gauche, nom à gauche, titre à droite
- Défilement continu vers le haut (infinite scroll)

**Comportement :**
- Animation CSS ou JS : translateY en boucle
- Effet « bandeau défilant » (marquee)
- Deux colonnes, stack de cartes ou marquee

**Maquette logique :**
```
┌────────────────────────────────────────────────────┐
│  NOTRE ÉQUIPE                                      │
│                                                    │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ [Photo] Nom      │  │ [Photo] Nom      │   ↑   │
│  │        Titre   → │  │        Titre   → │  scroll│
│  └──────────────────┘  └──────────────────┘        │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ [Photo] Nom      │  │ [Photo] Nom      │        │
│  └──────────────────┘  └──────────────────┘        │
└────────────────────────────────────────────────────┘
```

---

### 4. Widget Départements *(inspiration : Bureau, Lab, Studio)*

**Objectif :** 4 départements présentés comme des cartes verticales à fond uni.

**Inspiration :** Cartes type Bureau / Lab / Studio — fond sombre (rouge-brun, gris, violet), icône en haut à gauche, titre en bas à gauche, flèche ↗ lien en bas à droite.

**Contenu :**
- 4 cartes verticales (format portrait)
- Chaque carte :
  - Fond uni (rouge-brun / gris / violet / variante)
  - Petit carré icône en haut à gauche (sur fond coloré)
  - Titre du département en bas à gauche (blanc)
  - Icône flèche ↗ en bas à droite (lien)

**Comportement :**
- Grille 4 colonnes (ou 2x2 sur mobile)
- Hover : légère élévation ou glow
- Clic : navigation vers section ou page dédiée

**Maquette :**
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ [🎧]        │  │ [📦]        │  │ [💻]        │  │ [🚀]        │
│             │  │             │  │             │  │             │
│             │  │             │  │             │  │             │
│ Bureau  ↗   │  │ Lab     ↗   │  │ Studio  ↗   │  │ Dept 4  ↗   │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
  rouge-brun        gris noir         violet          (à définir)
```

**Noms suggérés (ref. Nukleo Digital) :** Nukleo.Agency, Nukleo.Studio, Nukleo.Tech, Nukleo.Consulting — avec format « 01 Explore → » pour chaque lien.

---

### 5. Widget Logos *(inspiration : bandeau défilant)*

**Objectif :** Logos partenaires/clients en défilement horizontal continu, style bandeau.

**Inspiration :** Même principe visuel que les panneaux projets — défilement fluide, peut s’intégrer graphiquement à la section projets ou rester distinct.

**Contenu :**
- Logos en ligne (gris/opacité réduite pour cohérence)
- Défilement horizontal infini (marquee)

**Comportement :**
- Animation CSS continue
- Vitesse lente
- Pause au hover (optionnel)

---

### 6. Widget Portfolio complet *(insp. Deux Huit Huit)*

**Objectif :** Catalogue de tous les projets avec filtrage par collections.

**Contenu :** Collections thématiques, grille projets (Titre | Catégorie), lien drawer détail.

---

### 7. Widget Contact *(insp. Mandatez-nous)*

**Objectif :** Inviter au contact — formulaire ou CTA.

**Contenu :** Titre (« Mandatez-nous », « Ready to perform? »), formulaire ou CTA double.

---

### 8. Widget Newsletter / Boîte nouvelle

**Objectif :** Collecter emails pour actualités.

**Contenu :** Champ email + bouton « S'inscrire », mention confidentialité.

---

### 9. Widget Stats / Chiffres clés

**Contenu :** 3-4 métriques (150+, 7+, 300+).

---

### 10. Widget Navigation & Footer

**Navigation :** Logo, menu, CTA. **Footer :** Liens, ©, réseaux.

---

## Ordre des sections — Page DÉMO complète

1. **Navigation** — Logo, menu, CTA « Mandatez-nous »
2. **Héro** — nukleo split, tagline, CTA
3. **Stats** — 150+, 7+, 300+
4. **Valeur** — « Who We Are » / proposition
5. **Départements** — 4 cartes (Agency, Studio, Tech, Consulting)
6. **Projets** — Sélection phare + drawer
7. **Portfolio** — Grille ou lien collections
8. **Équipe** — Défilement vertical
9. **Logos** — Bandeau partenaires
10. **Contact** — Mandatez-nous / formulaire
11. **Newsletter** — Boîte « Restez informé »
12. **Footer** — Liens, ©, réseaux

---

## Phases d'implémentation

| Phase | Widgets | Livrables |
|-------|---------|-----------|
| **Phase 1** | Structure + Navigation + Héro + Stats | Layout global, variables CSS |
| **Phase 2** | Valeur + Départements | 4 cartes |
| **Phase 3** | Projets + drawer + Portfolio | Grille, overlay, drawer |
| **Phase 4** | Équipe + Logos | Défilement vertical + marquee |
| **Phase 5** | Contact + Newsletter + Footer | Formulaire placeholder, footer complet |
| **Phase 6** | Page DÉMO complète | Tous widgets intégrés |

---

## Design system (aligné sur l’inspiration)

**Palette :**
- `--red-brown` : #4a2c2a / #5d3a35 (marque « nukle », cartes)
- `--purple` : #6b4ea2 / #7c5ab8 (marque « o », CTA, accents)
- `--dark` : #1a1a1a / #2d2d2d (fonds)
- `--gray-light` : #a0a0a0 (taglines)
- `--white` : #ffffff (titres sur fond sombre)

**Typographie :**
- Titres : bold, mixte minuscules/majuscules (« nukleo »)
- Sections : petites majuscules (« FAUCET MODULUS »)
- Corps : lisible, hiérarchie claire

**Éléments UI :**
- Boutons : arrondis, fond violet
- Cartes : fonds pleins, icônes en carré
- Surfaces : dégradés légers, effets miroir/eau optionnels

---

## Contenus à fournir

- [ ] Texte Héro (titre, baseline, CTA)
- [ ] Liste des projets (titre, image, description, métriques)
- [ ] Équipe : noms, titres, photos
- [ ] 4 départements : noms, descriptions, icônes
- [ ] Logos partenaires/clients
- [ ] Textes Contact / Newsletter

---

## Page DÉMO

**Fichier :** `demo.html`

Page complète avec les 12 widgets intégrés :
1. Navigation | 2. Héro | 3. Stats | 4. Valeur | 5. Départements | 6. Projets + drawer | 7. Portfolio | 8. Équipe (marquee) | 9. Logos | 10. Contact | 11. Newsletter | 12. Footer

**Animations :**
- **Héro :** Entrée séquencée (tagline → titre → CTA), glow sur « o », pulse flèche →
- **Navigation :** Apparition slide-down au chargement
- **Scroll :** Révélation au scroll (Intersection Observer) sur Stats, Valeur, Départements, Projets, Portfolio, Contact
- **Hover :** Cards (scale, shadow), boutons (lift, glow), liens (translateX)
- **Drawer :** Slide depuis la droite, overlay fade
- **Marquees :** Pause au hover (équipe, logos)

**Prévisualisation :** Ouvrir `demo.html` dans le navigateur ou via le serveur local.
