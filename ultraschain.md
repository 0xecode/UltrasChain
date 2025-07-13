# FanPower Rewards - Documentation Complète du Projet

## 📋 Vue d'ensemble du projet

### Description
FanPower Rewards est une plateforme de récompenses dynamiques sur la blockchain Chiliz qui gamifie l'engagement des fans du PSG. Les supporters gagnent des tokens $FPR en participant activement à diverses activités liées au club.

### Objectifs principaux
- Augmenter l'engagement des fans du PSG
- Récompenser la fidélité et la participation active
- Créer un écosystème durable de récompenses tokenisées
- Intégrer seamlessly avec l'écosystème Chiliz et les Fan Tokens PSG

## 🏗️ Architecture technique

### Stack technologique
```
Frontend:
- React.js / Next.js 14
- TailwindCSS pour le styling
- Web3.js / Ethers.js pour l'interaction blockchain
- PWA pour l'expérience mobile

Backend:
- Node.js avec Express.js
- PostgreSQL pour les données off-chain
- Redis pour le caching
- WebSocket pour les mises à jour en temps réel

Blockchain:
- Chiliz Chain (Testnet)
- Solidity pour les smart contracts
- Hardhat pour le développement et les tests
- OpenZeppelin pour les standards de sécurité

Services externes:
- API Socios.com (si disponible)
- API de données sportives (Sportradar/Opta)
- Service de géolocalisation pour la présence au stade
```

## 📊 Structure du projet

```
fanpower-rewards/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── Predictions/
│   │   │   └── Profile/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── utils/
│   │   └── pages/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── middleware/
│   └── package.json
├── contracts/
│   ├── FanPowerToken.sol
│   ├── RewardManager.sol
│   ├── PredictionContract.sol
│   ├── QuizContract.sol
│   └── StadiumCheckIn.sol
├── scripts/
├── test/
└── README.md
```

## 🔧 Smart Contracts

### 1. FanPowerToken.sol
```solidity
// Token ERC20 principal pour les récompenses
contract FanPowerToken is ERC20, Ownable {
    // Fonctionnalités:
    // - Mint de tokens pour les récompenses
    // - Burn de tokens pour les échanges
    // - Pause/Unpause en cas d'urgence
}
```

### 2. RewardManager.sol
```solidity
// Gestionnaire principal des récompenses
contract RewardManager {
    // Fonctionnalités:
    // - Distribution automatique des récompenses
    // - Multiplicateurs selon le niveau du fan
    // - Intégration avec PSG Fan Tokens
}
```

### 3. PredictionContract.sol
```solidity
// Gestion des prédictions de matchs
contract PredictionContract {
    // Fonctionnalités:
    // - Création de marchés de prédiction
    // - Validation des résultats
    // - Distribution des gains
}
```

### 4. QuizContract.sol
```solidity
// Système de quiz on-chain
contract QuizContract {
    // Fonctionnalités:
    // - Questions vérifiables
    // - Récompenses instantanées
    // - Anti-triche avec merkle trees
}
```

### 5. StadiumCheckIn.sol
```solidity
// Vérification de présence au stade
contract StadiumCheckIn {
    // Fonctionnalités:
    // - Check-in géolocalisé
    // - Bonus de présence
    // - Intégration QR codes
}
```

## 🎮 Fonctionnalités principales

### 1. Système de prédictions
- **Prédictions pré-match**: Score, buteurs, cartons
- **Prédictions live**: Prochain buteur, nombre de corners
- **Multiplicateurs**: x2 pour matchs importants (Champions League)
- **Récompenses**: 10-100 $FPR selon la difficulté

### 2. Quiz interactifs
- **Quiz quotidiens**: Histoire du PSG, joueurs actuels
- **Quiz flash** pendant les matchs
- **Niveaux de difficulté**: Facile (5 $FPR), Moyen (15 $FPR), Expert (50 $FPR)
- **Streaks**: Bonus pour participation consécutive

### 3. Présence au stade
- **Check-in géolocalisé**: Vérification par GPS + QR code
- **Récompenses de base**: 100 $FPR par match
- **Bonus**: 
  - Arrivée précoce: +50 $FPR
  - Rester jusqu'à la fin: +50 $FPR
  - Matchs consécutifs: multiplicateur x1.5

### 4. Engagement social
- **Partage de contenu**: 5 $FPR par partage (limité)
- **Création de contenu**: 20-200 $FPR selon la qualité
- **Invitations d'amis**: 50 $FPR par ami actif

## 💰 Tokenomics

### Distribution des tokens
```
Total Supply: 100,000,000 $FPR

- Récompenses utilisateurs: 40%
- Liquidité DEX: 20%
- Équipe & Développement: 15%
- Marketing & Partenariats: 15%
- Réserve: 10%
```

### Utilité des tokens
1. **Échange contre des récompenses**:
   - Produits dérivés PSG
   - Billets de match (enchères)
   - Expériences VIP
   - NFTs exclusifs

2. **Gouvernance**:
   - Vote sur les nouvelles fonctionnalités
   - Sélection des récompenses
   - Paramètres du système

3. **Staking**:
   - APY de base: 10%
   - Bonus selon le niveau du fan

## 🎨 Design UI/UX - Inspirations Mobbin

### Principes de design
Basé sur les meilleures pratiques des apps sportives et de gamification sur Mobbin :

1. **Onboarding progressif**
   - Écran de bienvenue avec les bénéfices clairs
   - Connexion wallet simplifiée (QR code + Magic Link)
   - Tutorial interactif avec récompenses immédiates
   - Profil personnalisé avec avatar PSG

2. **Dashboard principal**
   ```
   Structure inspirée de Nike Run Club + Duolingo :
   - Header : Points $FPR + Niveau + Streak
   - Hero Card : Prochain match PSG avec CTA prédiction
   - Quick Actions : Quiz du jour, Check-in, Défis
   - Feed : Activités récentes et classements amis
   ```

3. **Système de progression**
   - **Niveaux visuels** : De "Supporter Novice" à "Ultra Légende"
   - **Badges collectibles** : Inspirés des écussons PSG
   - **Progress bars** animées pour chaque action
   - **Streaks** avec flammes (style Duolingo)

4. **Écrans de prédictions**
   - Interface drag & drop pour composer les équipes
   - Sliders intuitifs pour les scores
   - Visualisation en temps réel des cotes
   - Historique avec statistiques de réussite

5. **Quiz gamifiés**
   - Timer visuel circulaire
   - Feedback instantané (✅/❌)
   - Animations de récompenses
   - Leaderboard temps réel

6. **Check-in au stade**
   - Map interactive avec zones de bonus
   - Scanner QR code AR
   - Selfie frame PSG pour partage
   - Boost de points selon la tribune

### Palette de couleurs
```css
/* Couleurs PSG officielles */
--psg-navy: #004170;
--psg-red: #DA020E;
--psg-white: #FFFFFF;

/* Couleurs gamification */
--gold: #FFD700;
--silver: #C0C0C0;
--bronze: #CD7F32;
--success: #00C851;
--warning: #FFBB33;

/* Dark mode */
--bg-dark: #0A0E27;
--card-dark: #151A36;
--text-light: #E0E0E0;
```

### Composants UI réutilisables

1. **RewardCard**
   ```jsx
   // Carte animée pour afficher les récompenses
   - Animation de flip à l'obtention
   - Particules dorées
   - Son de victoire
   - Share button intégré
   ```

2. **ProgressRing**
   ```jsx
   // Cercle de progression style fitness app
   - Animation fluide
   - Pourcentage central
   - Gradient PSG
   - Micro-interactions au tap
   ```

3. **PredictionSlider**
   ```jsx
   // Slider custom pour les prédictions
   - Feedback haptique
   - Valeurs en temps réel
   - Aperçu des gains potentiels
   - Confirmation swipe-to-predict
   ```

4. **LeaderboardRow**
   ```jsx
   // Ligne de classement animée
   - Avatar + badge niveau
   - Animation de montée/descente
   - Highlight de l'utilisateur
   - Mini graphique de progression
   ```

### Animations et micro-interactions

1. **Récompenses**
   - Confettis aux couleurs PSG
   - Coins $FPR qui tombent
   - Badge qui "pop" avec rebond
   - Son de stadium à l'obtention

2. **Transitions**
   - Navigation fluide avec shared elements
   - Pull-to-refresh personnalisé (ballon qui tourne)
   - Loading states avec mascottes PSG
   - Skeleton screens élégants

3. **Feedback utilisateur**
   - Haptic feedback sur actions importantes
   - Toasts custom avec icônes animées
   - Progress saves en temps réel
   - Undo/Redo sur prédictions

### Patterns d'engagement

1. **Daily hooks**
   - Notification push "Quiz du jour disponible!"
   - Bonus de connexion journalière croissant
   - Missions quotidiennes (inspiré de Fortnite)
   - Countdown pour le prochain match

2. **Social features**
   - Leagues entre amis (style Duolingo)
   - Partage de prédictions réussies
   - Défis 1v1 sur les quiz
   - Feed d'activité des supporters

3. **Gamification avancée**
   - Événements limités (matchs importants)
   - Season pass avec récompenses exclusives
   - Achievements cachés à débloquer
   - Mini-jeux pendant la mi-temps

### Accessibilité
- Mode daltonien pour les couleurs
- Tailles de police ajustables
- Navigation au clavier complète
- Screen reader optimisé
- Mode contraste élevé

### Responsive design
- Mobile-first approach
- Breakpoints : 320px, 768px, 1024px, 1440px
- Touch targets minimum 44x44px
- Gestes natifs (swipe, pinch)
- PWA avec mode offline

## 🚀 Roadmap de développement

### Phase 1: MVP (Semaines 1-4)
- [ ] Setup environnement de développement
- [ ] Déploiement smart contracts sur testnet
- [ ] Interface de base (connexion wallet, dashboard)
- [ ] Système de prédictions simple
- [ ] Tests unitaires et d'intégration

### Phase 2: Fonctionnalités core (Semaines 5-8)
- [ ] Système de quiz complet
- [ ] Check-in au stade (simulation)
- [ ] Intégration API sportives
- [ ] Système de niveaux et badges
- [ ] Tests de sécurité

### Phase 3: Polish & Intégrations (Semaines 9-12)
- [ ] UI/UX professionnelle
- [ ] Application mobile PWA
- [ ] Intégration wallet Socios
- [ ] Analytics et tableau de bord admin
- [ ] Audit de sécurité

### Phase 4: Lancement Beta (Post-hackathon)
- [ ] Déploiement mainnet
- [ ] Programme de beta testing
- [ ] Marketing et acquisition
- [ ] Partenariats officiels

## 🛠️ Guide de développement

### 1. Installation
```bash
# Cloner le repo
git clone https://github.com/votre-equipe/fanpower-rewards.git
cd fanpower-rewards

# Installer les dépendances
npm install

# Configuration environnement
cp .env.example .env
# Éditer .env avec vos clés API
```

### 2. Configuration Chiliz Spicy Testnet
```javascript
// Réseau Chiliz Spicy Testnet
const chilizSpicyTestnet = {
  chainId: 88882,
  name: 'Chiliz Spicy Testnet',
  rpcUrls: [
    'https://spicy-rpc.chiliz.com/',
    'https://chiliz-testnet.gateway.tatum.io',
    'https://chiliz-spicy.publicnode.com'
  ],
  wsUrls: [
    'wss://spicy-rpc-ws.chiliz.com/',
    'wss://chiliz-spicy.publicnode.com'
  ],
  explorers: [
    'https://testnet.chiliscan.com/',
    'http://spicy-explorer.chiliz.com/'
  ],
  nativeCurrency: {
    name: 'Chiliz',
    symbol: 'CHZ',
    decimals: 18
  }
}
```

### 3. Déploiement des contracts
```bash
# Compiler les contracts
npx hardhat compile

# Déployer sur Chiliz Spicy testnet
npx hardhat run scripts/deploy.js --network chilizTestnet
# ou alternative:
npm run deploy:spicy

# Vérifier les contracts
npx hardhat verify --network chilizTestnet CONTRACT_ADDRESS
```

### 4. Lancement du développement
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend  
cd frontend
npm run dev

# Terminal 3: Hardhat node local (optionnel)
npx hardhat node
```

## 🎯 Screens prioritaires pour le MVP

Basé sur les meilleures pratiques Mobbin, voici les écrans essentiels :

### 1. Onboarding (3 écrans)
- **Welcome** : Logo + "Gagnez des tokens en supportant le PSG"
- **Connect Wallet** : Options de connexion simplifiées
- **Profile Setup** : Pseudo + avatar + notification opt-in

### 2. Home Dashboard
- **Header sticky** : Balance $FPR + Niveau + Menu
- **Match Hero Card** : Prochain match avec bouton prédiction
- **Quick Actions Grid** : 4 boutons (Predict, Quiz, Check-in, Rewards)
- **Activity Feed** : Dernières actions + mini leaderboard

### 3. Prediction Flow
- **Match Selection** : Liste des matchs à venir
- **Prediction Builder** : Interface intuitive (score, buteurs)
- **Confirmation** : Récap + mise en $FPR + swipe to confirm
- **Success State** : Animation de validation

### 4. Quiz Experience  
- **Quiz List** : Catégories + difficulté + récompenses
- **Question Screen** : Timer + 4 options + progress bar
- **Result** : Score + $FPR gagnés + partage social

### 5. Stadium Check-in
- **Location Permission** : Explication claire des bénéfices
- **QR Scanner** : Interface caméra + instructions
- **Success** : Animation stadium + bonus affiché
- **History** : Liste des check-ins passés

### 6. Rewards Store
- **Categories** : Tabs (Digitaux, Physiques, Expériences)
- **Product Grid** : Cards avec prix en $FPR
- **Detail Modal** : Description + stock + bouton échange
- **Order Confirmation** : Récap + instructions

## 🔐 Sécurité

### Mesures implementées
1. **Smart Contracts**:
   - Utilisation d'OpenZeppelin
   - Reentrancy guards
   - Access control (roles)
   - Pausable en cas d'urgence

2. **Backend**:
   - Rate limiting
   - Validation des entrées
   - JWT pour l'authentification
   - HTTPS obligatoire

3. **Frontend**:
   - Sanitization des données
   - Protection XSS
   - Secure wallet connection

## 📈 Métriques de succès

### KPIs principaux
- **Utilisateurs actifs mensuels**: Objectif 10,000
- **Taux d'engagement**: >60% d'utilisateurs actifs hebdomadaires
- **Tokens distribués**: Suivi de la vélocité
- **Taux de conversion**: Tokens → Récompenses

### Analytics à implémenter
- Google Analytics 4
- Mixpanel pour le comportement utilisateur
- The Graph pour les données on-chain
- Custom dashboard pour les métriques business

## 🤝 Intégrations futures

### Partenaires potentiels
1. **PSG Official**:
   - Accès API officielle
   - Co-branding
   - Récompenses officielles

2. **Socios.com**:
   - Intégration wallet native
   - Cross-promotion
   - Échange $FPR ↔ $PSG

3. **Sponsors PSG**:
   - Récompenses sponsorisées
   - Campagnes marketing
   - Produits exclusifs

## 📝 Notes pour le hackathon

### Présentation (10 min)
1. **Problème** (2 min): Engagement des fans limité, pas de récompenses pour la fidélité
2. **Solution** (3 min): Démonstration live de l'app
3. **Technologie** (2 min): Architecture et innovations
4. **Business model** (2 min): Tokenomics et monétisation
5. **Vision** (1 min): Futur de l'engagement des fans

### Points différenciateurs
- **Gamification avancée**: Système de progression addictif
- **Récompenses réelles**: Utilité concrète des tokens
- **Intégration seamless**: UX simple pour non-crypto natives
- **Scalabilité**: Prêt pour des millions d'utilisateurs

### Démo priorités
1. Connexion wallet et onboarding
2. Faire une prédiction de match
3. Participer à un quiz
4. Voir ses récompenses et niveau
5. Échanger des tokens contre une récompense

## 📱 Prototype Figma recommandé

### Structure des pages dans Figma
```
FanPower Rewards/
├── 📱 Mobile (375x812)
│   ├── Onboarding/
│   ├── Main App/
│   ├── Predictions/
│   ├── Quiz/
│   ├── Check-in/
│   └── Rewards/
├── 🎨 Design System/
│   ├── Colors
│   ├── Typography  
│   ├── Components
│   └── Icons
└── 🔄 Prototypes/
    ├── User Flow Principal
    └── Micro-interactions
```

### Outils de design recommandés
- **Figma** : Design et prototypage
- **Principle/Rive** : Animations complexes
- **Maze** : Tests utilisateurs
- **Mobbin** : Références et inspiration continue

FanPower Rewards représente le futur de l'engagement des fans dans le sport. En combinant la puissance de la blockchain Chiliz avec une expérience utilisateur exceptionnelle, nous créons un écosystème où chaque interaction compte et est récompensée.

**Contact équipe**: [Vos noms et contacts]
**Repository GitHub**: [Lien vers le repo]
**Demo live**: [Lien vers la démo]

---

*Bonne chance pour le hackathon Hacking Paris 2025! 🚀⚽*
