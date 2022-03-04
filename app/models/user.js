module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING(20),
            unique: true,
            allowNull: false,
            validate: { 
                is: {
                    args: /^[a-zA-Z0-9._]+$/i,
                    msg: "Username contains 'a-zA-Z0-9._' characters"
                }, 
                len: {
                    args: [4, 15],
                    msg: "Username except minimum 4 and maximum 15 characters"
                }
            }
        },
        email: {
            type: Sequelize.STRING(100),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email invalid"
                }
            } 
        },
        password: {
            type: Sequelize.STRING(150),
            allowNull: false
        }
    });
    return User;
};