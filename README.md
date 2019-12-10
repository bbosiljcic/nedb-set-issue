# NEDB $set issue

this is example code for reproducing a $set issue, where nesed objects are not correctly retrived from the database. The issue only occors with $set, not when the whole object is updated.

------

## How to run

```
npm install
npm start
```

## Steps to reproduce

* insert a document
* update the document with an object using `$set`
* edit the original objec
* find the object, now the object is the altered object not the one that is persisted in the db

## Results of the console logs

```
find before edit [ { _id: 1, object: { a: 1, b: 2 } } ]
find after edit [ { _id: 1, object: { a: 1, b: 2, c: 3 } } ]
```

