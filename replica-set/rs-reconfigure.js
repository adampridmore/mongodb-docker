var config = {
    "_id": "dbrs",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo1:27017",
            "priority": 3
        },
        {
            "_id": 2,
            "host": "mongo2:27017",
            "priority": 0
        },
        {
            "_id": 3,
            "host": "mongo3:27017",
            "priority": 0
        }
    ]
};
rs.reconfig(config);
rs.status();
