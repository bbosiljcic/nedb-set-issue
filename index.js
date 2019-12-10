const Datastore = require('nedb');

const db = new Datastore({ filename: 'test.db', autoload: true });

const originalDoc = { _id: 1, object: { a: 1, b: 2}};

db.insert(originalDoc, () => {});

db.update({ _id: 1 }, { $set: originalDoc }, {}, () => {
  db.find({}, (err, docs) => {
    console.log('find before edit', docs);
    // find before edit [ { _id: 1, object: { a: 1, b: 2 } } ]
    originalDoc.object.c = 3;
    db.find({}, (err, docs) => {
      console.log('find after edit', docs);
      // find after edit [ { _id: 1, object: { a: 1, b: 2, c: 3 } } ]
    });
  });
});