# 🕌 Restaurant Marocain SFD

## 🌟 Description

SFD – Saveurs & Fines Dégustations est une application web moderne développée avec **React.js**.
Elle présente un restaurant marocain authentique et permet aux utilisateurs de :

* Découvrir le menu gastronomique
* Obtenir les informations de localisation
* Connaître l’histoire et la mission du restaurant
* Réserver une table directement depuis le site

L’application est **responsive** et optimisée pour desktop et mobile.

---

## ⚙️ Technologies utilisées

* **Frontend :** React.js, HTML5, CSS3, JavaScript ES6+
* **Outils :** VS Code, Git/GitHub
* **Optimisations :** React.lazy(), Suspense, code splitting

---

## 🧱 Structure du projet

```
sfd-restaurant/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── Menu.js / Menu.css
│   │   ├── About.js / About.css
│   │   ├── Location.js / Location.css
│   │   ├── Reservation.js / Reservation.css
│   │
│   ├── App.js / App.css
│   ├── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

> Chaque composant React possède son fichier CSS dédié pour isoler et organiser les styles.

---

## 🧩 Fonctionnalités

### 1. Navbar

* Navigation entre les sections : Accueil, Menu, Localisation, Informations, Réserver
* Menu mobile toggle (hamburger)
* Indication visuelle de la section active

### 2. Hero

* Bannière d’accueil immersive
* Sous-titre et description
* Boutons d’action : Réserver et Voir le menu

### 3. Menu Gastronomique

* Entrées, Plats principaux, Desserts & Boissons
* Affichage du nom, description et prix de chaque plat

### 4. Localisation

* Adresse complète
* Horaires d’ouverture
* Contact : téléphone, email
* Carte (placeholder pour Google Map)

### 5. About (Informations)

* Histoire du restaurant
* Mission et valeurs
* Profil du chef avec citation

### 6. Reservation

* Formulaire complet : nom, email, téléphone, date, heure, nombre de personnes, message supplémentaire
* Validation des champs et message de confirmation après soumission

---

## 🚀 Installation

1. **Cloner le projet :**

```bash
git clone https://github.com/votre-utilisateur/sfd-restaurant.git
cd sfd-restaurant
```

2. **Installer les dépendances :**

```bash
npm install
```

3. **Démarrer le projet :**

```bash
npm start
```

Le projet sera disponible sur `http://localhost:3000`.

---

## 🔧 Personnalisation

* Modifier les textes et images dans les composants `Hero.js`, `About.js`, `Menu.js` et `Location.js`
* Ajouter ou retirer des plats dans le fichier `Menu.js`
* Adapter le formulaire de réservation selon vos besoins

---

## 📌 Limitations actuelles

* Pas de backend réel : les réservations ne sont pas stockées dans une base de données
* Carte non interactive (Google Maps non intégrée)
* Pas de système d’authentification pour les administrateurs

---

## 🌿 Améliorations futures

* Intégration d’un backend (Node.js, PHP ou Laravel) pour gérer les réservations
* Authentification admin pour gérer le menu et les réservations
* Ajout d’une galerie photos et d’avis clients
* Intégration de Google Maps interactive

---

## 📄 Rapport du projet

### 1. Introduction

Le projet **SFD – Saveurs & Fines Dégustations** est une application web développée avec React.js, représentant un restaurant marocain authentique.
L’objectif principal est de fournir une **interface moderne, interactive et responsive** pour permettre aux clients de découvrir le menu, localiser le restaurant, connaître son histoire et effectuer des réservations en ligne.

### 2. Objectifs du projet

* Créer un site web attractif et immersif pour un restaurant marocain
* Permettre aux clients de visualiser le menu complet avec prix et descriptions
* Fournir les informations de contact et la localisation du restaurant
* Offrir un formulaire de réservation simple et fonctionnel
* Mettre en avant l’histoire, la mission et le chef du restaurant

### 3. Technologies utilisées

* Frontend : React.js, HTML5, CSS3, JavaScript ES6+
* Optimisation : React.lazy(), Suspense, code splitting
* Outils : VS Code, Git/GitHub
* Design : Responsive, mobile-first, UI moderne et claire

### 4. Structure du projet

```
sfd-restaurant/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── Menu.js / Menu.css
│   │   ├── About.js / About.css
│   │   ├── Location.js / Location.css
│   │   ├── Reservation.js / Reservation.css
│   ├── App.js / App.css
│   └── index.js
│
├── package.json
└── README.md
```

### 5. Description des composants

* **Navbar :** navigation entre sections, menu mobile, indication de la page active
* **Hero :** bannière d’accueil, description du restaurant, boutons d’action
* **Menu :** affichage des plats par catégories avec nom, description et prix
* **About :** histoire, mission et profil du chef
* **Location :** adresse, contact, horaires, carte (placeholder)
* **Reservation :** formulaire complet avec validation et message de confirmation

### 6. Fonctionnalités principales

* Navigation fluide entre sections
* Affichage dynamique du menu
* Formulaire de réservation avec validation et feedback utilisateur
* Responsive design pour desktop, tablette et mobile
* Chargement optimisé grâce à React.lazy() et Suspense

### 7. Limites et améliorations possibles

* Pas de backend réel (les réservations ne sont pas stockées)
* Carte non interactive
* Pas d’authentification pour l’administration

Améliorations possibles :

* Intégration d’un backend pour gérer les réservations
* Authentification admin
* Galerie photos et avis clients
* Carte interactive avec Google Maps

### 8. Conclusion

Ce projet démontre la maîtrise de **React.js**, la structuration des composants, la gestion de l’état et des props, ainsi que la création d’une interface **moderne, responsive et immersive** pour un site de restaurant marocain.

---

## 📝 Licence

Ce projet est **open-source** et peut être utilisé à des fins personnelles ou pédagogiques.
