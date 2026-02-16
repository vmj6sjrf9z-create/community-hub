.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 10px;
  font-family: sans-serif;
  color: #ff6600; /* main accent color */
}

.loader {
  display: flex;
  gap: 5px;
}

.loader div {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6600, #00cfff, #ff00c8);
  animation: bounce 0.6s infinite alternate;
}

.loader div:nth-child(2) {
  animation-delay: 0.2s;
}
.loader div:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  to {
    transform: translateY(-15px);
  }
}