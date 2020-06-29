import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeDtboU5TGe__5Ti-AIAYUJNna8RoR-BQ",
  databaseURL: "https://mychat-282c7.firebaseio.com/",
  projectId: "mychat-282c7",
  appId: "1:616567210288:android:58f6e2b466bd54b9f0c8f5",
};

export default Firebase.initializeApp(firebaseConfig);
