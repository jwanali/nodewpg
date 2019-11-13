const user = {
    userName: null,
    password: null,
    greet: function() {
        if (this.userName === null) {
            console.log('Please assign a username value');
        } else {
            console.log(`Hello , I'm user ${this.userName} ${this.password}`);
        };
    },
    updaterUsername: function(userName) {
        if (typeof userName === "string") {
            this.userName = userName;    
        } else {
            console.log('Please input a string value');
        };
    },
    updatePassword: function(password) {
        if (typeof password === "string") {
            this.password = password;    
        } else {
            console.log('Please input a string value');
        };
    },
};
user.greet();
user.updaterUsername("jwan");
user.updatePassword("jwan1234ali");
user.greet();