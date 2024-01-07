// Public part of VAPID key, generation of that covered in README
// All subscription tokens associated with that key, so if you change it - you may lose old subscribers
// You MUST need generate your own VAPID keys!
// Newer share your PRIVATE_VAPID_KEY. It should be stored in a safe storage
const VAPID_PUBLIC_KEY = "BAwUJxIa7mJZMqu78Tfy2Sb1BWnYiAatFCe1cxpnM-hxNtXjAwaNKz1QKLU8IYYhjUASOFzSvSnMgC00vfsU0IM"
const VAPID_PRIVATE_KEY = "wH3Mire4Nrw7UWiYuD4e76qSezQ-5Nf_9n_HK3vHBSU";
const BASE_URL = "https://4d8b-67-170-182-179.ngrok-free.app";

const webpush = require('web-push');

webpush.setVapidDetails(
    BASE_URL,
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

// CHANGE TO YOUR TOKEN FOR TEST
const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/crfxwjzLNAM:APA91bFzi2w3Asyp5uWc4TjfRIEeXucmJTajM_P4VCps7KRJVBzY1vigmGyyPAWsT1BuS5T-5Jw1T2dHYQZDcmHS-SdrEoklTqi7KAzZmWMrQTNSANkN30abAX3Mc9-WZXsNyVBthcaq",
    "expirationTime": null,
    "keys": {
        "p256dh": "BD0VDx1YJC8y-_C25hZworqU8x0d6z29UIZyE4GEvczA7CwqdAnAxflX9UjMQGeaG-WzkzSgw-xcr6EEyMCrdZ8",
        "auth": "7zlGneVm0UUfvBV9Tdsnpg"
    }
}
    ;

let pushData = JSON.stringify({
    "title": "Hello Server!",
    "body": "This notification was send from the server",
    "icon": `${BASE_URL}/images/favicon.png`,
    "data": { 
        //can contain anything
        "url": `${BASE_URL}/success.html`,
        "message_id": "backend1234",
    }
});
webpush.sendNotification(pushSubscription, pushData);
