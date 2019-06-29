import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
import { messaging, Message } from "nativescript-plugin-firebase/messaging";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("\n_____________________________-------------------------\n");
        // firebase.init({
        //     onMessageReceivedCallback: (message: Message) => {
        //       console.log(`Title: ${message.title}`);
        //       console.log(`Body: ${message.body}`);
        //       // if your server passed a custom property called 'foo', then do this:
        //       console.log(`Value of 'foo': ${message.data.foo}`);
        //     }
        //   }, {showNotificationsWhenInForeground: true}).then(
        //     () => {
        //         console.log("doneCCxxxx");
        //     },
        //     error => {
        //         console.log(`firebase.init error: ${error}`);
        //     }
        // );

        firebase.init({
            showNotificationsWhenInForeground: true,
          });
        messaging.registerForPushNotifications({
            onPushTokenReceivedCallback: (token: string): void => {
                console.log("Firebase plugin received a push token: " + token);
            },

            onMessageReceivedCallback: (message: Message) => {
                console.log("Push message received: " + message.title);
            },

            // Whether you want this plugin to automatically display the notifications or just notify the callback. Currently used on iOS only. Default true.
            showNotifications: true,

            // Whether you want this plugin to always handle the notifications when the app is in foreground. Currently used on iOS only. Default false.
            showNotificationsWhenInForeground: true
        }).then(() => console.log("Registered for push"));
    }
}
