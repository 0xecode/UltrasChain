# 🚀 **Instructions de déploiement Chiliz Spicy**

## 📋 **Prérequis**

### 1. **Wallet avec CHZ testnet**
```bash
# Créer un wallet MetaMask
# Ajouter Chiliz Spicy Testnet :
- Network Name: Chiliz Spicy Testnet
- RPC URL: https://spicy-rpc.chiliz.com/
- Chain ID: 88882
- Currency: CHZ
- Explorer: https://testnet.chiliscan.com
```

### 2. **Obtenir des CHZ testnet**
- 🚰 **Faucet** : https://testnet.chiliscan.com/faucet
- 💬 **Discord Chiliz** : Demander dans #faucet
- 💰 **Minimum requis** : 0.1 CHZ (pour déploiement)

### 3. **Configurer clé privée**
```bash
# Dans .env
PRIVATE_KEY=0xvotre_cle_privee_ici
```

## 🚀 **Commandes de déploiement**

### **Option 1 : Déploiement rapide**
```bash
# Avec configuration automatique
npm run deploy:spicy
```

### **Option 2 : Déploiement manuel**
```bash
# Compiler les contrats
npx hardhat compile

# Déployer sur Chiliz Spicy
npx hardhat run scripts/deploy-spicy.cjs --network chilizSpicy

# Vérifier le contrat (optionnel)
npx hardhat verify --network chilizSpicy ADRESSE_CONTRAT
```

## 📊 **Coûts estimés**

| Action | Gas | Coût (CHZ) |
|--------|-----|------------|
| **Déploiement** | ~920k | ~2.3 CHZ |
| **Créer match** | ~48k | ~0.12 CHZ |
| **Prédiction** | ~75k | ~0.19 CHZ |
| **Récupération** | ~38k | ~0.095 CHZ |

**Total pour test complet : ~2.7 CHZ**

## ✅ **Après déploiement**

### 1. **Mettre à jour .env**
```bash
# Remplacer l'adresse locale par la nouvelle
VITE_CHILIZ_PREDICTION_MANAGER_ADDRESS=0xNOUVELLE_ADRESSE
```

### 2. **Redémarrer l'app**
```bash
npm run dev
```

### 3. **Tester les fonctionnalités**
- ✅ Connexion wallet sur Chiliz Spicy
- ✅ Voir balance CHZ réelle
- ✅ Placer une prédiction test
- ✅ Vérifier tokens verrouillés

## 🔍 **Vérification**

### **Smart contract déployé :**
- 📍 **Adresse** : Visible dans logs de déploiement
- 🔗 **Explorer** : https://testnet.chiliscan.com/address/ADRESSE
- 👑 **Owner** : Votre adresse wallet
- ⚡ **Fonctions** : Créer match, prédire, réclamer

### **Tests à faire :**
1. **Connexion** : Wallet sur bon réseau (88882)
2. **Balance** : CHZ visible dans header
3. **Prédiction** : Bouton "Place Prediction" actif
4. **Transaction** : Signature + confirmation
5. **Verrouillage** : CHZ locked augmente

## 🎯 **Résultat attendu**

Après déploiement réussi :
- ✅ **Smart contract live** sur Chiliz Spicy
- ✅ **Interface connectée** au vrai réseau
- ✅ **Prédictions fonctionnelles** avec vrais CHZ
- ✅ **Historique persistant** sur blockchain
- ✅ **Tokens verrouillés** jusqu'au résultat

## 🆘 **Dépannage**

### **Erreurs communes :**

#### "Insufficient funds"
```bash
# Solution : Obtenir plus de CHZ du faucet
https://testnet.chiliscan.com/faucet
```

#### "Transaction reverted"
```bash
# Vérifier :
- Gas limit suffisant
- Réseau correct (88882)
- Clé privée valide
```

#### "Nonce too high/low"
```bash
# Réinitialiser MetaMask :
Settings > Advanced > Reset Account
```

## 🎉 **Une fois déployé**

L'application sera **100% opérationnelle** avec :
- Smart contracts optimisés sur Chiliz Spicy
- Prédictions avec vrais tokens CHZ
- Verrouillage et redistribution automatiques
- Historique blockchain persistant

**UltrasChain sera alors totalement fonctionnel !** 🚀⚽💎