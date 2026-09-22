# /commit

> Commande pour sauvegarder l'état du workspace dans git.

---

## Mission

Quand je lance `/commit`, exécute la séquence suivante :

### Étape 1 : Vérifier que git est initialisé

Si le workspace n'est pas encore un dépôt git (pas de dossier `.git/`) :
1. Lance `git init`
2. Vérifie que `.gitignore` existe à la racine (il doit exclure `.env` et les autres secrets), sinon préviens-moi avant de continuer

### Étape 2 : Regarder ce qui a changé

Lance `git status` pour voir les fichiers modifiés, ajoutés ou supprimés.

Si un fichier semble contenir un secret (clé d'API, mot de passe, token) même si son nom paraît anodin, ouvre-le et vérifie son contenu avant de l'ajouter. En cas de doute, exclus-le et préviens-moi.

### Étape 3 : Proposer le commit

Résume en une ou deux phrases ce qui a changé, puis présente le message de commit proposé :

```
Voici ce que je vais commiter :
- [fichier 1]
- [fichier 2]
...

Message de commit proposé :
"[message]"

Tu valides ?
```

### Étape 4 : Exécuter

Une fois validé :
1. `git add` sur les fichiers concernés (jamais `git add -A` à l'aveugle si des fichiers suspects ont été détectés)
2. `git commit -m "[message]"`
3. Confirme que le commit est fait avec `git log -1 --oneline`

---

## Règles importantes

- Ne jamais commiter `.env` ou tout fichier contenant une vraie clé d'API
- Ne jamais faire de `git push` sauf si je le demande explicitement
- Ne jamais utiliser `--no-verify` ou `--amend` sauf si je le demande explicitement
- Messages de commit courts et clairs, en français, qui expliquent le "pourquoi" plutôt que le "quoi"
- Pas de tirets longs (em dashes) dans les écritures
