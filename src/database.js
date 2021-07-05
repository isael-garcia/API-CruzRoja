const mongoose = require('mongoose');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASES} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASES}`
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err))