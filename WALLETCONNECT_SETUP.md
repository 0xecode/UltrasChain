# 🔗 **WalletConnect Project ID - Configuration**

## ⚠️ **Project ID temporaire configuré**

Pour l'instant, j'ai mis un Project ID générique pour que l'app compile. Pour une utilisation réelle, il faut créer un vrai Project ID :

### 🔧 **Comment obtenir un vrai Project ID :**

1. **Aller sur** : https://cloud.walletconnect.com
2. **S'inscrire/Se connecter** (gratuit)
3. **Créer un nouveau projet** :
   - Name: `UltrasChain`
   - Description: `PSG Blockchain Predictions Platform`
   - URL: `https://ultraschain.app` (ou votre domaine)
4. **Copier le Project ID** généré
5. **Remplacer dans** `src/config/wagmi.ts` :

```typescript
// Remplacer cette ligne :
const projectId = 'a7a7f4b2c6e8f9a1b2c3d4e5f6g7h8i9'

// Par votre vrai Project ID :
const projectId = 'VOTRE_VRAI_PROJECT_ID'
```

### 📱 **Avantages WalletConnect :**
- ✅ **Mobile wallets** : Trust Wallet, Rainbow, etc.
- ✅ **QR Code** : Connexion mobile facile
- ✅ **Cross-platform** : iOS/Android support
- ✅ **Sécurisé** : Standard industrie

### 🚀 **État actuel :**
- ✅ **MetaMask** : Fonctionne parfaitement
- ✅ **Injected wallets** : OK
- ✅ **Coinbase Wallet** : Configuré
- ⚠️ **WalletConnect** : Project ID temporaire (peut marcher pour tests)

**L'app fonctionne déjà avec MetaMask ! WalletConnect est un bonus pour mobile.** 📱