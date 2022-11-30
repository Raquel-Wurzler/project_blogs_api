module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    display_name: DataTypes.STRING,
    email: { type: DataTypes.STRING, uniqueKey: true },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasOne(models.BlogPosts,
      { foreignKey: 'user_id', as: 'blog_posts'});
  };

  return User;
};
