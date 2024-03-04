const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    jobs: [
        {
            jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
            created: { type: Date, default: Date.now() }
          
        }
    ],
   
    notifications: [
        {
            senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            message: { type: String },
            viewProfile: { type: Boolean, default: false },
            created: { type: Date, default: Date.now() },
            read: { type: Boolean, default: false },
            date: { type: String, default: '' }

        }
    ],
    picVersion: { type: String, default: '1557398690' },
    picId: { type: String, default: 'default-image.png' },
    images: [
        {
            imgId: { type: String, default: '' },
            imgVersion: { type: String, default: '' }
        }
    ],
    country: { type: String, default: '' },
    state: { type: String, default: '' },
    city: { type: String, default: '' },
    resetPasswordLink: {
        data: String,
        default: ""
    }
});

userSchema.statics.EncryptPassword = async function (password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

module.exports = mongoose.model('User', userSchema);