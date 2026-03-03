function Profile({ user, logout }) {

  return (
    <div className="profile-container">
      <h2>Perfil</h2>

      <p><strong>Nombre:</strong> {user.fullName}</p>

      <button onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Profile;