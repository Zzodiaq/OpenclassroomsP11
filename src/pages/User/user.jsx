import React, { useState } from 'react';
import '../../styles/user-style/user.css';
import balanceData from '../../balance-data.json';
import CardArgent from '../../components/CardArgent/cardargent.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsername } from '../../actions.js';

function User() {
  // États pour gérer l'édition du nom d'utilisateur
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  // Utilisation de Redux pour obtenir et mettre à jour le nom d'utilisateur
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  // Gestion du clic sur le bouton d'édition
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Gestion de l'annulation de l'édition
  const handleEditCancel = () => {
    setIsEditing(false);
    // Supprimer le nouveau nom d'utilisateur une fois que le formulaire est soumis
    setNewUsername('');
  };

  // Gestion de la mise à jour du nom d'utilisateur
  const handleUsernameUpdate = () => {
    // Dispatch de l'action pour mettre à jour le nom d'utilisateur dans le store Redux
    dispatch(updateUsername(newUsername));
    setNewUsername('');
    setIsEditing(false);
    // Supprimer le nouveau nom d'utilisateur une fois que le formulaire est soumis

  }

  return (
    <div className='userContainer'>
      {/* Affichage différent en fonction du mode d'édition */}
      {isEditing ? (
        <div className='userNameEditOn'>
          <h1>Edit user info</h1>
          <div className='editNameInput'>
            <p>User name : </p>
            {/* Champ de saisie pour le nouveau nom d'utilisateur */}
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          {/* Boutons pour sauvegarder ou annuler l'édition */}
          <div className='btnEdit'>
            <button className='save' onClick={handleUsernameUpdate}>Save</button>
            <button className='cancel' onClick={handleEditCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className='userNameEdit'>
          {/* Affichage du nom d'utilisateur actuel et bouton pour démarrer l'édition */}
          <h1>Welcome back <br /> {username}!</h1>
          <button className='edit-button' onClick={handleEditClick}>Edit Name</button>
        </div>
      )}

      {/* Affichage des cartes d'argent à partir des données statiques */}
      <div className='cardArgent'>
        {balanceData.map((e) => {
          return <CardArgent id={e.id} title={e.title} money={e.money} subtitle={e.subtitle} />;
        })}
      </div>
    </div>
  );
}

// Export du composant User
export default User;
