import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [purchaseRequests, setPurchaseRequests] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    const fetchPurchaseRequests = async () => {
      const purchaseRequestsCollection = collection(db, 'purchaseRequests');
      const purchaseRequestsSnapshot = await getDocs(purchaseRequestsCollection);
      const purchaseRequestsList = purchaseRequestsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPurchaseRequests(purchaseRequestsList);
    };

    fetchUsers();
    fetchPurchaseRequests();
  }, []);

  const handleStatusChange = async (userId, newStatus) => {
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, { status: newStatus });
    setUsers(users.map(user => user.id === userId ? { ...user, status: newStatus } : user));
  };

  const handleRequestStatusChange = async (requestId, newStatus) => {
    const requestDoc = doc(db, 'purchaseRequests', requestId);
    await updateDoc(requestDoc, { status: newStatus });
    setPurchaseRequests(purchaseRequests.map(request => request.id === requestId ? { ...request, status: newStatus } : request));
  };

  return (
    <div>
      <h2>Admin Paneli</h2>
      <h3>Üye Yönetimi</h3>
      <table>
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>Email</th>
            <th>Statü</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleStatusChange(user.id, 'talep açan')}>Talep Açan</button>
                <button onClick={() => handleStatusChange(user.id, 'satın alma uzmanı')}>Satın Alma Uzmanı</button>
                <button onClick={() => handleStatusChange(user.id, 'müdür')}>Müdür</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Satın Alma Talepleri</h3>
      <table>
        <thead>
          <tr>
            <th>Açıklama</th>
            <th>Miktar</th>
            <th>Durum</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {purchaseRequests.map(request => (
            <tr key={request.id}>
              <td>{request.description}</td>
              <td>{request.amount}</td>
              <td>{request.status}</td>
              <td>
                <button onClick={() => handleRequestStatusChange(request.id, 'onaylandı')}>Onayla</button>
                <button onClick={() => handleRequestStatusChange(request.id, 'reddedildi')}>Reddet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;