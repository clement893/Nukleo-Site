# Créer le dépôt GitHub - Nukleo Site Web

Le projet est prêt et Git est initialisé. Suivez ces étapes pour créer le dépôt sur GitHub :

## Étape 1 : Créer le dépôt sur GitHub

1. Allez sur **[github.com/new](https://github.com/new)**
2. **Repository name** : `Nukleo-Site` (ou `nukleo-site`)
3. **Description** : `Site web officiel de Nukleo`
4. Choisissez **Public**
5. **Ne cochez pas** "Add a README" (vous en avez déjà un)
6. Cliquez sur **Create repository**

## Étape 2 : Connecter votre projet local

Après la création, exécutez ces commandes dans le dossier du projet :

```bash
cd C:\Users\croy\Nukleo-Site

# Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/Nukleo-Site.git

git branch -M main
git push -u origin main
```

## Option : Installer GitHub CLI (gh)

Pour créer le dépôt directement depuis le terminal à l'avenir :

1. Téléchargez : https://cli.github.com/
2. Après installation et authentification :
   ```bash
   gh repo create Nukleo-Site --public --source=. --remote=origin --push
   ```
