# 🚀 Guide de Déploiement - FanPower Rewards

## Prérequis

1. **Wallet avec CHZ sur Chiliz Spicy Testnet**
   - Récupérer des CHZ testnet depuis le faucet
   - Configurer MetaMask avec Chiliz Spicy Testnet

2. **Variables d'environnement**
   ```bash
   cp .env.example .env
   ```
   Remplir le fichier `.env` avec :
   - `PRIVATE_KEY=votre_clé_privée`

## Déploiement des Smart Contracts

### 1. Compiler les contrats
```bash
npm run compile
```

### 2. Déployer sur Chiliz Spicy Testnet
```bash
npm run deploy:spicy
```

Cette commande va :
- Déployer FanPowerToken (ERC20)
- Déployer PredictionManager  
- Configurer les autorisations
- Afficher les adresses des contrats

### 3. Mettre à jour le frontend
Copier les adresses des contrats dans votre `.env` :
```bash
VITE_FANPOWER_TOKEN_ADDRESS=0x...
VITE_PREDICTION_MANAGER_ADDRESS=0x...
```

### 4. Créer un match de test
```bash
npm run create-match
```

## Lancement de l'application

```bash
npm run dev
```

## Fonctionnalités Blockchain Intégrées

### ✅ Token FPR
- Token ERC20 standard
- Mint contrôlé par les contrats de récompense
- Système de pause d'urgence

### ✅ Prédictions
- Mise minimum : 10 FPR
- Mise maximum : 1000 FPR  
- Deadline : 15 jours avant le match
- Distribution automatique des gains

### ✅ Interface Utilisateur
- Connexion wallet intégrée
- Approval automatique des tokens
- États de chargement en temps réel
- Gestion des erreurs

## Réseau Chiliz Spicy Testnet

- **Chain ID**: 88882
- **RPC**: https://spicy-rpc.chiliz.com/
- **Explorer**: https://testnet.chiliscan.com/
- **Faucet**: [Obtenir des CHZ testnet]

## Tests

Les prédictions sont maintenant fonctionnelles avec :
1. **Connexion wallet** obligatoire
2. **Balance FPR** vérifiée  
3. **Approve + Mise** en une transaction
4. **Deadline** de 15 jours respectée
5. **Smart contracts** déployés sur Chiliz

Prêt pour le hackathon ! 🎉