From:

https://blog.tericcabrel.com/mongodb-replica-set-docker-compose

```
docker-compose up
```

```
chmod +x scripts/rs-init
```

```
docker exec rs-mongo1 /scripts/rs-init.sh
```

Add the following entries to your local `hosts` files.
```
127.0.0.1       mongo1
127.0.0.1       mongo2
127.0.0.1       mongo3
```

```
To connect to a host:

mongo mongo1:27021
mongo mongo2:27022
mongo mongo3:27023
```
