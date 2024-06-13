// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('history');

// Create a new document in the collection.
db.getCollection('data').insertOne({
    "id": 1,
    "time": "2:30pm",
    "item": "Person",
    "duration": "Duration | 0:10",
    "imageUrl": "path-to-your-image"
});
