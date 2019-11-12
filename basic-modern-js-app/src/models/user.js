var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,       //prevents duplicate usernames 
    },
});

userSchema.statics.findByLogin = async function (login) {       //static another way to create your own methods 
  let user = await this.findOne({
    username: login,
  });
  if (!user) {
    user = await this.findOne({ email: login });
  }
  return user;
};


//   cascade delete for all messages in relation to the user. That's why you can extend schemas with hooks. In this case, we add a pre hook to our user schema to remove all messages of this user on its deletion:
userSchema.pre('remove', function (next) {
    this.model('Message').deleteMany({ user: this._id }, next);
});


const User = mongoose.model('User', userSchema);
export default User;