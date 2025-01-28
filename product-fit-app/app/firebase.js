// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwL169cuKRe5wcIydJIsZ4yaDVMIK8iYQ",
  authDomain: "project-fit-app-e3bbd.firebaseapp.com",
  projectId: "project-fit-app-e3bbd",
  storageBucket: "project-fit-app-e3bbd.firebasestorage.app",
  messagingSenderId: "878521620648",
  appId: "1:878521620648:web:b6763d60b1c428f7c38a9d"
};

// Инициализация приложения Firebase
const app = initializeApp(firebaseConfig);

// Получение экземпляра аутентификации
const auth = getAuth(app);

// Экспортируйте auth как именованный экспорт
export { auth };