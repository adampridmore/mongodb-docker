# Docker

## From
https://www.bmc.com/blogs/mongodb-docker-container

## Docker Compose Mongo 4.2

docker-compose up

## MongoDB 4.0

-p      map ports
-d      run in detach mode (background)
-name   name of container
-v      Mount volume

Run mongo 4.0 and attach the db files to ```~/mongodb-data```

```
docker run -p 27017:27017 --name mongo4.0 -d -v ~/work/mongodb-data:/data/db mongo:4.0
```
```

docker start mongo4.0
docker stop mongo4.0
```


# General 

Shell into container
```
docker exec -it 32ca9ad04832  /bin/bash
````







