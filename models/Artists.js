export default (sequelize, DataTypes) => {
  const Artists = sequelize.define(
    'Artists',
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      artist_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Artists;
};
