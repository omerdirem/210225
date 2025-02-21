import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const PurchaseRequest = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'purchaseRequests'), {
        description,
        amount,
        status: 'pending', // Başlangıçta pending olarak ayarlanacak
        createdAt: new Date()
      });
      alert('Talep başarıyla oluşturuldu!');
      setDescription('');
      setAmount('');
    } catch (error) {
      alert('Talep oluşturma başarısız: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Satın Alma Talebi Oluştur</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Talep Açıklaması"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Miktar"
          required
        />
        <button type="submit">Talep Oluştur</button>
      </form>
    </div>
  );
};

export default PurchaseRequest;