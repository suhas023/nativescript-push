import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
import { messaging, Message } from "nativescript-plugin-firebase/messaging";
import { cleverTap } from "nativescript-clevertap";
import { ItemService } from "./item/item.service";
var trace = require("trace");



@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  constructor(private itemService: ItemService) {

  }
    ngOnInit() {
      trace.enable();
      trace.write("-- new init", trace.categories.Debug);
        cleverTap.register();

        console.log("\n__________________________________________________________\n");
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
            showNotificationsWhenInForeground: true
        });
        messaging
            .registerForPushNotifications({
                onPushTokenReceivedCallback: (token: string): void => {
                    console.log(
                        "Firebase plugin received a push token:" + token
                    );
                },
                onMessageReceivedCallback: (message: Message) => {
                    console.log("Push message received: " + JSON.stringify(message));
                    // this.itemService.notifications.push(message.title);
                    trace.write(message.title, trace.categories.Debug);
                    alert(JSON.stringify(message));
                },
                // Whether you want this plugin to automatically display the notifications or just notify the callback. Currently used on iOS only. Default true.
                showNotifications: true,
                // Whether you want this plugin to always handle the notifications when the app is in foreground. Currently used on iOS only. Default false.
                showNotificationsWhenInForeground: true
            })
            .then(() => console.log("Registered for push"));
    }

    onLoginTapped() {
        cleverTap.onUserLogin({
            Name: "Harsha Nutal",
            Date: new Date(),
            Identity: 112,
            Email: "harsha@webileapps.com",
        });
    }
}
