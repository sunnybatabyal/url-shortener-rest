/**
 * Contents DB operations for shortening URL.
 */

// Create the schema.
var Url = mongoose.model('Url', {
  key: Number,
  url: String,
  hash: String,
  createdAt: Date
})

// Asign values to the single url instance.
var shortUrl = new Url({
  key: 1,
  url: '',
  hash
})

kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
})