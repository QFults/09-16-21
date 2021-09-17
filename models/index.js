const User = require('./User.js')
const Post = require('./Post.js')

User.hasMany(Post, { foreignKey: 'uid' })

module.exports = { User, Post }
