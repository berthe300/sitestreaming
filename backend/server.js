// server.js

const express = require('express');
const app = express();
const port = 3001;

// Middleware pour traiter les données JSON
app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur backend !');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
