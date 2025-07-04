import mongoose from 'mongoose';

const sampleSchema = new mongoose.Schema({
  Movie_title: { type: String},
  Movie_director: { type: String},
  Movie_description: { type: String}
}, {
    collection: 'test'
});

export default mongoose.model('Sample', sampleSchema);