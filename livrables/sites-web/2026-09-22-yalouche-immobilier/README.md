# Yalouche Immobilier — site vitrine

Site vitrine trilingue (FR / EN / HE) pour l'activité de courtage immobilier à Jérusalem.

**Origine :** design produit dans Claude Design ([projet "site immobillier"](https://claude.ai/design/p/e20cd99c-6b3f-40b8-af5f-e83213d8d3b0)), reconstruit ici en HTML/CSS/JS autonome (sans dépendance à React ni au runtime propriétaire de Claude Design, qui ne fonctionne que dans l'éditeur en ligne) pour pouvoir être hébergé n'importe où.

## Fichiers

- `index.html` — structure de la page
- `styles.css` — mise en forme (couleurs, typographies, mise en page responsive)
- `script.js` — **tout le contenu modifiable est ici** : coordonnées, biens à la une, textes des 3 langues
- `images/` — photos du site (voir ci-dessous)

## Pour tester le site en local

Ouvrez `index.html` directement dans un navigateur, ou lancez un petit serveur local depuis ce dossier :

```
python3 -m http.server 8000
```

puis ouvrez http://localhost:8000

## Ce qu'il reste à faire avant mise en ligne

1. **Coordonnées** — dans `script.js`, bloc `CONTACT` en haut du fichier : téléphone, email, WhatsApp.
2. **Photos** — déposez les fichiers suivants dans `images/` (ils apparaissent automatiquement dès qu'ils existent, sinon un placeholder texte s'affiche à leur place) :
   - `images/hero.jpg` — photo d'en-tête (vue de Jérusalem, paysage, haute résolution)
   - `images/portrait.jpg` — portrait professionnel
   - `images/biens/1.jpg` à `images/biens/6.jpg` — photos des biens à la une
3. **Biens à la une** — bloc `PROPERTIES` dans `script.js` : remplacez les 6 exemples fictifs par vos vrais biens (prix, quartier, titre, description en fr/en/he, nombre de pièces, surface).
4. **Texte "À propos"** — bloc `T.fr.about`, `T.en.about`, `T.he.about` dans `script.js` : remplacez `[Votre nom]` par votre nom, et ajustez le texte de présentation si besoin.
5. **Statut professionnel** — la mention de la formation en cours pour la licence de courtier (`about.status` et `footer.disclaimer`) est à mettre à jour dès l'obtention de la licence (רישיון תיווך).

## Déploiement

Ce site est 100% statique (aucun serveur ni base de données requis). Il peut être hébergé gratuitement sur Netlify, Vercel, GitHub Pages, ou tout hébergement mutualisé classique : il suffit de copier ce dossier tel quel.

Le formulaire de contact ouvre le logiciel de messagerie de l'utilisateur (mailto:) — aucun serveur d'envoi n'est nécessaire.
