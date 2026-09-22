# livrables/

Ce dossier contient tous les livrables produits par Claude pour Yoni : sites web, applications, contenus Youtube, livrables pour le cabinet Chatflow, et livrables pour l'Apreneur Académie.

## Règle d'or

- **Inputs** (documents que Yoni fournit : PDFs, exports, notes, captures d'écran) → `context/import/`
- **Outputs** (ce que Claude produit pour Yoni) → `livrables/`

Ne jamais mélanger les deux. Un document que Yoni envoie pour analyse va dans `context/import/`, même s'il est ensuite transformé. Le résultat de cette transformation va dans le sous-dossier `livrables/` concerné.

## Organisation par thème

| Dossier | Contenu |
|---------|---------|
| `sites-web/` | Sites internet (landing pages, sites vitrine, etc.) |
| `applications/` | Outils, scripts, automatisations |
| `Youtube/` | Briefs vidéos, scripts, hooks, calendrier éditorial |
| `cabinet/` | Livrables pour le cabinet de conseil Chatflow |
| `ecole/` | Livrables pour l'Apreneur Académie |

## Convention de nommage des projets

Chaque projet vit dans son propre sous-dossier, nommé ainsi :

```
livrables/<thème>/<AAAA-MM-JJ>-<nom-du-projet-en-kebab-case>/
```

Exemples :
- `livrables/sites-web/2026-09-16-landing-page-courtage/`
- `livrables/cabinet/2026-09-16-audit-processus-chatflow/`
- `livrables/Youtube/2026-09-16-calendrier-editorial-q4/`

Pourquoi la date en préfixe : ça permet de trier les projets chronologiquement et de retrouver facilement la dernière version d'un livrable récurrent, sans avoir à ouvrir chaque dossier.

Si un livrable est ponctuel (un seul fichier, pas de suivi dans le temps), il peut être placé directement dans le sous-dossier thématique sans sous-dossier daté.
