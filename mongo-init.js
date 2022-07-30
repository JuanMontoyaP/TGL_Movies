db.createCollection('roles');
db.createCollection('users');

db.roles.insertOne({ role: "ADMIN_ROLE" });
db.roles.insertOne({ role: "USER_ROLE" });

