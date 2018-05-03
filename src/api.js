import firebase from "firebase";
import { resolve } from "url";

const firebaseApp = firebase.initializeApp({
  databaseURL: "https://hacker-news.firebaseio.com"
});
const db = firebaseApp.database();

function fetch(path) {
  return new Promise((resolve, reject) => {
    db
      .ref("v0")
      .child(path)
      .once(
        "value",
        snapshot => {
          resolve(snapshot.val());
        },
        reject
      );
  });
}

export default fetch;
