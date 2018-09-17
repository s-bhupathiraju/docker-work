# Docker 

**Build the docker file** \
`docker build -t "ojhus:authz-person-bounded-context" .`

**Run the container**\
`docker run -d --name authz-person-bounded-context -p 8080:8080 ojhus:authz-person-bounded-context`
