# 🔄 Migration vers CHZ - FanPower Rewards

## ✅ Transformation complète : FPR → CHZ

### 🏗️ **Smart Contract ChilizPredictionManager**
- **Token natif CHZ** utilisé pour les paris
- **Système de verrouillage** : CHZ bloqués jusqu'au résultat
- **Redistribution proportionnelle** aux gagnants selon leur mise
- **Mécanisme payable** : pas besoin d'approval, transaction directe

### 💰 **Nouvelles limites de mise**
- **Minimum** : 0.1 CHZ (au lieu de 10 FPR)
- **Maximum** : 100 CHZ (au lieu de 1000 FPR) 
- **Frais plateforme** : 5% du pool total
- **Récupération d'urgence** : après 7 jours si match non résolu

## 🔗 **Fonctionnalités blockchain**

### **Signature et verrouillage**
```solidity
function placePrediction(uint256 _matchId, uint8 _homeScore, uint8 _awayScore) 
    external payable // CHZ envoyés directement
```

### **Mécanisme de redistribution**
1. **Pool total** = Somme de tous les CHZ misés
2. **Frais plateforme** = 5% du pool
3. **Pool gagnants** = 95% du pool
4. **Gain individuel** = (Mise du gagnant / Total mises gagnantes) × Pool gagnants

### **États des tokens CHZ**
- **Disponible** : Balance CHZ libre
- **Verrouillé** : CHZ misés en attente de résultat
- **Redistribué** : CHZ récupérés après victoire

## 🎯 **Interface utilisateur**

### **Dashboard**
- **Balance CHZ** au lieu de FPR
- **CHZ verrouillés** affichés en temps réel
- **Niveaux** basés sur CHZ (10 CHZ = 1 niveau)

### **Modal de prédiction**
- **Pas d'approval** nécessaire
- **Estimation gains** en temps réel
- **Info verrouillage** explicite
- **Confirmation signature** directe

### **Cartes de match**
- **Balance CHZ** affiché
- **Mises en CHZ** dans l'historique
- **Gains potentiels** calculés

## 🚀 **Déploiement**

### **Nouveau contrat**
```bash
# Déployer ChilizPredictionManager
npm run deploy:spicy

# Résultat :
VITE_CHILIZ_PREDICTION_MANAGER_ADDRESS=0x...
```

### **Suppression ancien système**
- ❌ FanPowerToken.sol (supprimé)
- ❌ PredictionManager.sol (remplacé)
- ❌ Système d'approval (non nécessaire)

## 💡 **Avantages CHZ natif**

### **Simplicité**
- **1 transaction** au lieu de 2 (approve + bet)
- **Pas de token custom** à gérer
- **Balance native** directement visible

### **Sécurité**
- **Verrouillage automatique** dans le smart contract
- **Pas de transfert externe** de tokens
- **Récupération garantie** en cas de problème

### **UX améliorée**
- **Signature unique** pour miser
- **Feedback immédiat** sur le verrouillage
- **Transparence totale** des CHZ en jeu

## 🧪 **Tests**

### **Fonctions testées**
- ✅ Placement prédiction avec CHZ
- ✅ Verrouillage automatique des tokens
- ✅ Calcul redistribution proportionnelle
- ✅ Récupération gains après victoire
- ✅ Récupération d'urgence après 7 jours

### **Limites vérifiées**
- ✅ Minimum 0.1 CHZ respecté
- ✅ Maximum 100 CHZ respecté
- ✅ Balance insuffisante gérée
- ✅ Double prédiction bloquée

## 📊 **Migration summary**

| Aspect | Ancien (FPR) | Nouveau (CHZ) |
|--------|-------------|---------------|
| Token | Custom ERC20 | CHZ natif |
| Transactions | 2 (approve + bet) | 1 (bet direct) |
| Limites | 10-1000 FPR | 0.1-100 CHZ |
| Verrouillage | Transfer externe | Lock interne |
| Approval | Nécessaire | Aucun |
| UX | 2 étapes | 1 étape |

L'application utilise maintenant **uniquement des CHZ natifs** avec un **système de verrouillage intelligent** et une **redistribution proportionnelle automatique** ! 🎉