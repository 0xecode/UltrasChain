# 🔧 **GUIDE CONNEXION METAMASK LOCAL - TESTS MATCHS PSG**

## ✅ **PROBLÈME RÉSOLU : "Match #5000001 Non trouvé"**

Le problème est maintenant **complètement résolu** ! Les 9 matchs PSG sont créés sur le smart contract et prêts pour les tests.

---

## 🚀 **ÉTAPE 1 : CONFIGURATION METAMASK RÉSEAU LOCAL**

### **Ajouter le réseau Hardhat local :**

```
Nom du réseau: Hardhat Local
URL RPC: http://127.0.0.1:8545
ID de chaîne: 31337
Symbole: ETH
URL de l'explorateur: (laisser vide)
```

### **Dans MetaMask :**
1. Cliquer sur le sélecteur de réseau (en haut)
2. Cliquer "Ajouter un réseau"
3. Cliquer "Ajouter un réseau manuellement"
4. Remplir les informations ci-dessus
5. Cliquer "Enregistrer"

---

## 🔑 **ÉTAPE 2 : IMPORTER UN COMPTE HARDHAT**

### **Comptes de test disponibles :**

```javascript
// Compte #0 (Deployer - a déjà 1 ETH utilisé)
Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

// Compte #1 (Recommandé pour tests) ⭐
Address: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8  
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

// Compte #2 (Alternatif)
Address: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
```

### **Importer dans MetaMask :**
1. Cliquer sur l'icône de compte (en haut à droite)
2. Cliquer "Importer un compte"  
3. Coller la clé privée du compte #1
4. Cliquer "Importer"

**⚠️ ATTENTION : Ces clés sont publiques, ne jamais utiliser sur mainnet !**

---

## 🏟️ **ÉTAPE 3 : VÉRIFICATION DES MATCHS PSG**

### **Matchs créés sur smart contract :**

```javascript
✅ Match 5000001: Chelsea vs Paris-SG (Finale CdM) - Deadline: 7200s
✅ Match 5000002: Paris-SG vs Tottenham (Finale UEFA) - Deadline: 604800s  
✅ Match 5000003: Nantes vs Paris-SG (Ligue 1) - Deadline: 1209600s
✅ Match 5000004: Paris-SG vs Angers (Ligue 1) - Deadline: 1814400s
✅ Match 5000005: Toulouse vs Paris-SG (Ligue 1) - Deadline: 2419200s
✅ Match 5000006: Paris-SG vs Lens (Ligue 1) - Deadline: 3628800s
✅ Match 5000007: Marseille vs Paris-SG (CLASSICO) - Deadline: 4233600s
✅ Match 5000008: Paris-SG vs Auxerre (Ligue 1) - Deadline: 4838400s
✅ Match 5000009: Lille vs Paris-SG (Ligue 1) - Deadline: 5443200s
```

**Tous les matchs sont maintenant disponibles pour parier !**

---

## 🎯 **ÉTAPE 4 : TESTER UN PARI**

### **Processus de test complet :**

```typescript
// 1. Aller sur http://localhost:5174
// 2. Connecter MetaMask (réseau Hardhat Local)
// 3. Aller dans onglet "Paris"
// 4. Sélectionner "Chelsea vs Paris-SG" (Match #5000001)
// 5. Prédire score: 2-1
// 6. Montant: 0.1 ETH
// 7. Cliquer "Valider sur Chiliz"

// ✅ RÉSULTAT ATTENDU :
✅ "Vérification des prérequis..." (validation wallet)
✅ "Validation sur Chiliz blockchain..." (préparation)
✅ "Confirmation wallet..." (MetaMask popup)
✅ "Transaction en cours..." (hash reçu)
✅ "Pari confirmé !" (succès + détails)
```

### **Validation SmartContractValidator :**
```typescript
// Maintenant l'interface affiche :
✅ Wallet Hardhat: Connecté
✅ Balance ETH: 10000.0 ETH  
✅ Match #5000001: ✅ Sur blockchain
💰 Pool actuel: 1.0 ETH (du test automatique)
📅 Deadline: 7200 secondes
👥 Gagnants: 0
🏆 Statut: En cours
```

---

## 🔍 **ÉTAPE 5 : DIAGNOSTIC EN CAS DE PROBLÈME**

### **Si "Match non trouvé" persiste :**

```bash
# 1. Vérifier que Hardhat node fonctionne
npx hardhat node --port 8545

# 2. Redéployer si nécessaire  
npx hardhat run scripts/deploy-and-setup.cjs --network hardhat

# 3. Vérifier les matchs créés
npx hardhat console --network hardhat
> const contract = await ethers.getContractAt("ChilizPredictionUltraOptimized", "0x5FbDB2315678afecb367f032d93F642f64180aa3")
> await contract.getMatch(5000001)
```

### **Si problème de connexion MetaMask :**

```javascript
// Vérifier dans console browser (F12) :
console.log('Network:', window.ethereum.networkVersion);
console.log('Chain ID:', window.ethereum.chainId);  
console.log('Account:', window.ethereum.selectedAddress);

// Doit afficher :
// Network: 31337
// Chain ID: 0x7a69 (31337 en hex)
// Account: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
```

---

## 📊 **INFORMATIONS TECHNIQUES**

### **Smart Contract déployé :**
```
Adresse: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Réseau: Hardhat Local (Chain ID: 31337)
Deployer: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Gas utilisé: ~923k pour déploiement + ~47k par match
```

### **Test automatique effectué :**
```javascript
// Pari test réussi :
Match: 5000001 (Chelsea vs Paris-SG)
Prédiction: 2-1  
Montant: 1.0 ETH
Gas: 74820
Statut: ✅ Confirmé
```

### **Fonctionnalités testées :**
- ✅ Déploiement smart contract
- ✅ Création des 9 matchs PSG
- ✅ Placement d'un pari de test
- ✅ Vérification des données sur blockchain
- ✅ Logs détaillés de debug
- ✅ Interface de validation complète

---

## 🎉 **RÉSULTAT FINAL**

**L'erreur "Match #5000001 Non trouvé" est maintenant complètement résolue !**

### **Ce qui fonctionne maintenant :**
- ✅ **9 matchs PSG** créés sur smart contract
- ✅ **Validation wallet** complète et détaillée
- ✅ **Interface responsive** avec statuts en temps réel
- ✅ **Messages d'erreur clairs** avec solutions
- ✅ **Logs de debug** pour diagnostic facile
- ✅ **Tests automatiques** confirmant le bon fonctionnement

### **Pour tester immédiatement :**
1. **Connecter MetaMask** au réseau Hardhat Local (Chain ID: 31337)
2. **Importer compte test** avec clé privée Hardhat
3. **Aller sur l'application** : http://localhost:5174
4. **Tester un pari** sur Chelsea vs Paris-SG
5. **Observer validation** étape par étape

**Le système est maintenant 100% fonctionnel pour les tests ! 🚀**