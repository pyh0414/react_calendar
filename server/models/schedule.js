module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      content: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      period: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false, charset: "utf8", collate: "utf8_general_ci" }
  );

  return Schedule;
};
