<div align="center font-weight: 900; " >

# 🛍️ E-Shop

**Une boutique en ligne moderne construite avec React, qui consomme l'API FakeStore.**

<img width="1338" height="678" alt="image" src="https://github.com/user-attachments/assets/ba9e6a9a-a538-4fc5-90f1-2c92137abfee" />


</div>

---

### 🧾 Liste des produits
<p align="center">
  <img src="<img width="938" height="682" alt="image" src="https://github.com/user-attachments/assets/9774020c-0915-4f64-9a6c-194fad254afb" />
" alt="Liste des produits" width="100%">
</p>

### 🔎 Détails d'un produit
<p align="center">
  <img src="<img width="995" height="467" alt="image" src="https://github.com/user-attachments/assets/21ea5048-e8fc-40c2-92d4-a719b54c6a53" />
" alt="Détails d'un produit" width="100%">
</p>

---

## ✨ Fonctionnalités

| | Fonctionnalité | Description |
|---|---|---|
| 🛒 | **Liste des produits** | Affichage de tous les produits depuis l'API FakeStore |
| 🔍 | **Recherche par ID** | Trouver un produit rapidement grâce à son ID (1 à 20) |
| 📄 | **Page de détails** | Catégorie, prix, note, avis et description complète |
| 🧭 | **Navigation fluide** | Routing sans rechargement avec React Router |
| 🎨 | **Design moderne** | Interface propre, cartes élégantes et thème violet |

---

## 🧰 Technologies

- ⚛️ **React** : bibliothèque UI
- 🧭 **React Router** : gestion des pages
- 🌐 **Fetch API** : appels HTTP
- 🛍️ **[FakeStore API](https://fakestoreapi.com/products)** : source des données

---

## 🚀 Lancer le projet

```bash
# 1. Cloner le dépôt
git clone https://github.com/TON-USERNAME/e-shop.git

# 2. Accéder au dossier
cd e-shop

# 3. Installer les dépendances
npm install

# 4. Démarrer l'application
npm start
```

Puis ouvrir 👉 `http://localhost:3000`

---

## 📁 Structure du projet

```
e-shop/
├── screenshots/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── components/
        ├── Hero.jsx             # 🎯 Page d'acceuil
        ├── ProductList.jsx      # 🧾 Liste des produits
        ├── ProductCard.jsx      # 🃏 Carte d'un produit
        ├── SearchBar.jsx        # 🔍 Recherche par ID
        └── ProductDetails.jsx   # 📄 Page de détails
```

---

## 🔗 API utilisée

```http
GET https://fakestoreapi.com/products        # tous les produits
GET https://fakestoreapi.com/products/:id    # un produit par ID
```

---

## 👩‍💻 Auteur

 **El hyani Safa**
Étudiante en Développement Digital option **Web Full-Stack** (OFPPT)

[![GitHub](https://img.shields.io/badge/GitHub-TON--USERNAME-181717?logo=github&style=flat-square)](https://github.com/TON-USERNAME)

---

<div align="center">⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !</div>
