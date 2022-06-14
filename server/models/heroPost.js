import mongoose from 'mongoose';

const heroSchema = mongoose.Schema({
  title: String,
  detail: String,
  birthDate: String,
  deathDate: String,
  birthPlace: String,
  school: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const HeroPost = mongoose.model('HeroPost', heroSchema );

export default HeroPost;
