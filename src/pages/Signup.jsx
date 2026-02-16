@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: "Segoe UI", system-ui, sans-serif;
  background: #0d0d0d;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
}

.container {
  width: 100%;
  max-width: 420px;
  background: #141414;
  border-radius: 14px;
  padding: 30px 20px;
  box-shadow: 0 8px 30px rgba(0, 212, 255, 0.12);
  border: 1px solid #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  transition: all 0.3s ease;
}

h1 {
  color: #00d4ff;
  margin-bottom: 25px;
  text-align: center;
  font-size: 2rem;
}

input {
  width: 100%;
  padding: 12px 14px;
  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 8px;
  color: #ffffff;
  margin-bottom: 12px;
}

input:focus {
  outline: none;
  border-color: #00d4ff;
}

button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #00d4ff;
  color: #0d0d0d;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  opacity: 0.9;
}

.form-group {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
}

.login-link {
  margin-top: 15px;
  color: #00d4ff;
  cursor: pointer;
  text-align: center;
  font-size: 0.95rem;
}

.discord-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: #5865f2;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;
}

.discord-btn:hover {
  background: #4752c4;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid #00d4ff;
}

.server-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
  justify-content: center;
}

.server-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: #1c1c1c;
  border-radius: 8px;
}

.server-card img {
  width: 40px;
  height: 40px;
  border-radius: 6px;
}

/* Fade animation for login/signup toggle */
.fade {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.fade-out {
  opacity: 0;
  transform: translateY(20px);
}

/* Loader styling */
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 15px;
  font-family: sans-serif;
  color: #00d4ff;
}

.loader {
  display: flex;
  gap: 6px;
}

.loader div {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6600, #00cfff, #ff00c8, #00ff7f);
  animation: bounce 0.6s infinite alternate;
}

.loader div:nth-child(2) { animation-delay: 0.2s; }
.loader div:nth-child(3) { animation-delay: 0.4s; }
.loader div:nth-child(4) { animation-delay: 0.6s; }

@keyframes bounce {
  to { transform: translateY(-15px); }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .container { padding: 20px 15px; }
  h1 { font-size: 1.6rem; }
  button, .discord-btn { font-size: 0.95rem; }
}