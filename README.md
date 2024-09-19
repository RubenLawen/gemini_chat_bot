# Getting Started

## Configuration

Avant tout, vous devez savoir que ce projet fonctionne avec Gemini. Vous devrez générer une clé API ici : [https://ai.google.dev/](https://ai.google.dev/). Ensuite, placez cette clé dans le fichier `.env`.

## Installation

Pour initialiser et démarrer le projet, exécutez les commandes suivantes dans votre terminal :

```bash
npm install
&
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat

## Justification du Choix de Next.js

- **Performance optimisée :**
Next.js est reconnu pour ses performances grâce à son approche de server-side rendering (SSR). Contrairement aux frameworks qui reposent uniquement sur le client-side rendering (CSR), Next.js permet de pré-rendre les pages côté serveur avant de les envoyer au client. Cette méthode réduit le temps de chargement initial, offrant une expérience utilisateur améliorée, surtout sur des connexions lentes ou des appareils moins puissants.

- **Optimisation SEO :**
Le SSR proposé par Next.js facilite l'indexation des pages par les moteurs de recherche, car le contenu est disponible dès le chargement initial. Cela améliore le référencement naturel (SEO), augmentant ainsi la visibilité de l'application web et attirant plus de visiteurs.

- **Gestion simplifiée des routes :**
Next.js dispose d'un système de routage intégré, simplifiant la gestion des routes de l'application sans nécessiter de configuration complexe. Cette facilité d'utilisation accélère le développement et réduit les risques d'erreurs, rendant le processus de création plus fluide et efficace.

- **Connaissance préalable avec l'outil :**
Ayant travaillé avec Next.js durant mon alternance, où le front-end de l'entreprise était développé avec ce framework, j'ai acquis une connaissance approfondie et pratique de ses fonctionnalités. Cette expérience préalable facilite l'adoption et l'intégration de Next.js dans le projet actuel, optimisant ainsi le temps de développement et la qualité du produit final.


## Pourquoi pas React ?
Comparer Next.js et React nécessite de clarifier que Next.js est un framework basé sur React. Pour être plus précis, React est une bibliothèque JavaScript pour la construction d'interfaces utilisateur, tandis que Next.js est un framework qui utilise React et offre des fonctionnalités supplémentaires pour améliorer le développement web.


## Amélioration future possible
#### Mémoire Contextuelle
Une amélioration clé envisagée est l'intégration d'une fonctionnalité de mémoire contextuelle. Cette capacité permettrait au chatbot de se souvenir des interactions passées et d'adapter ses réponses en conséquence. Ainsi, chaque conversation pourrait être plus fluide et personnalisée, offrant une expérience utilisateur plus cohérente et pertinente.

#### Support des Images
Une autre amélioration potentielle est le support pour l'envoi et la réception d'images. Cette fonctionnalité serait particulièrement utile pour illustrer des concepts, partager des captures d'écran, ou fournir des visuels contextuels pour enrichir les échanges. L'intégration de cette fonctionnalité offrirait une dimension visuelle supplémentaire, rendant les interactions plus interactives et engageantes.


## Problèmes Rencontrés
#### Problèmes de Réception des Requêtes API
Nous avons rencontré des difficultés avec la réception des requêtes via l'API. Les principaux problèmes incluent :

####  Interruption ou Échec des Requêtes : Les requêtes envoyées à l'API peuvent parfois échouer ou ne pas être complètes.

## Conversion en Markdown des Réponses de Gemini API
La conversion des réponses de l'API Gemini en format Markdown a également posé des défis. Les problèmes incluent :

#### Formatage Inexact : 
Les données renvoyées par l'API ne sont pas toujours correctement formatées en Markdown, ce qui peut entraîner une mauvaise présentation du contenu.
#### Incompatibilité des Données : 
Certaines structures de données retournées par l'API ne se convertissent pas bien en Markdown, nécessitant des ajustements ou des solutions de contournement.



