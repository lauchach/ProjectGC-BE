// server.js
const express = require('express');
const app = express();
const port = 3000;

let helloCount = 0;

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

app.get('/hello', async (req, res) => {
  const citiesRef = db.collection('cities');
  const snapshot = await citiesRef.where('capital', '==', true).get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }

  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
  helloCount++;
  res.json({ message: 'Hello, wer!', count: helloCount });
});

app.post('/regiter', async (req, res) => {
  console.log('req.body', req.body)
  await citiesRef.doc('SF').set({
    username: 'San Francisco',
    profilename: 'CA',
    password: 'XXXXX',
    registerreco: false,
    pointe: 0
  });

  const citiesRef = db.collection('cities');
  const snapshot = await citiesRef.where('capital', '==', true).get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }

  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
  helloCount++;
  res.json({ message: 'Hello, wer!', count: helloCount });
});

