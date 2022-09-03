"# GenesisAndroidExpo" 

To install react navigation dependencies for Expo managed project

`npm install @react-navigation/native`

`npx expo install react-native-screens react-native-safe-area-context`

To export the Expo project:

`npx eas build --platform android`

This will send the files to expo and they will build it for you. 

`Android App Bundle (.aab/AAB)` file is used for uploading to Google Play Store.

`Android Package (.apk/APK)` file can be used to download the app directly to your android device.

To export as .apk file, see https://docs.expo.dev/build-reference/apk/. Just change eas.json to:

```
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}
```
Then,

`npx eas build --platform android --profile preview`

To export as .aab file, use the default eas.json that was created, for example:

```
{
  "cli": {
    "version": ">= 2.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

To export as .aab file,

`npx eas build --platform android`