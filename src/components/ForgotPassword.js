import React, { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Şifre sıfırlama maili gönderildi!');
    } catch (error) {
      alert('Şifre sıfırlama başarısız: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Şifremi Unuttum</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Şifre Sıfırlama Maili Gönder</button>
      </form>
    </div>
  );
};

export default ForgotPassword;