import React from 'react';
import './ProfileContents.css';

const ProfileContents = () => {
  return (
    <div className="page-content">

      {/* User Info */}
      <section className="user-info">
        <img src="https://i.pravatar.cc/100" alt="User Avatar" className="avatar" />
        <h2 id="username">Artwell Mutanhau</h2>
        <p id="email">artwell@example.com</p>
      </section>

      {/* Account Actions */}
      <section className="account-actions">
        <button id="logoutBtn" className="action-btn">
          <i className="fas fa-right-from-bracket"></i> Log Out
        </button>
        <button id="deleteAccountBtn" className="action-btn delete">
          <i className="fas fa-trash"></i> Delete Account
        </button>
      </section>

      {/* Security Settings */}
      <section className="security-settings">
        <h3>Security</h3>
        <button className="action-btn"><i className="fas fa-lock"></i> Change Password</button>
        <button className="action-btn"><i className="fas fa-shield-alt"></i> Enable 2FA</button>
      </section>

      {/* Discord Servers List */}
      <section className="discord-servers">
        <h3>Discord Servers</h3>
        <ul id="serversList">
          <li><i className="fab fa-discord"></i> Server 1</li>
          <li><i className="fab fa-discord"></i> Server 2</li>
          <li><i className="fab fa-discord"></i> Server 3</li>
        </ul>
      </section>

    </div>
  );
};

export default ProfileContents;
