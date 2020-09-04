import firebase from 'firebase/app';
import 'firebase/messaging';

importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

const config = {
    apiKey: 'AIzaSyDjz4aODzHHcVGmkT4scyKuhVxks4nZIP0',
    authDomain: 'socialapp-f7a3f.firebaseapp.com',
    databaseURL: 'https://socialapp-f7a3f.firebaseio.com',
    projectId: 'socialapp-f7a3f',
    storageBucket: 'socialapp-f7a3f.appspot.com',
    messagingSenderId: '841465032063',
    appId: '1:841465032063:web:3f2dab606a100be3c3be4a',
};

firebase.initializeApp(config);
const messaging = firebase.messaging();
const self = this;

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: '/firebase-logo.png',
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', event => {
    console.log(event);
    return event;
});
