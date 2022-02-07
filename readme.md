# Docker

## From
https://www.bmc.com/blogs/mongodb-docker-container


```
docker run --name my-mongo -d -p 27017:27017 -v ~/work/mongodb-data:/data/db mongo
```

## MongoDB 4.0

Run mongo 4.0 and attach the db files to ```~/mongodb-data```
```
docker run --name -p 27017:27017 --name mongo4.0 -d -v ~/work/mongodb-data:/data/db mongo:4.0
```
```

docker start mongo4.0
docker stop mongo4.0
```







