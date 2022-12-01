module.exports = (sequelize, _DataTypes) => {
  const Post_category = sequelize.define('Post_category',
    {},
    {
      timestamps: false,
      underscored: true, 
      tableName: 'posts_categories'
    },
  );

  Post_category.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: Post_category,
      foreignKey: 'post_id',
      otherKey: 'category_id', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: Post_category,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

    return Post_category;
};