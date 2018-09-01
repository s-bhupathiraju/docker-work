https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html

## Docker Install
create 6 instances of ec2 t2 micro
Make sure the security groups are opened for 2375, 2376, 2377, 22 for each of these containers. If this configuration doesn't work, then open up all TCP ports 0-65535

sudo yum update -y && sudo yum install docker -y && sudo service docker start && sudo usermod -a -G docker ec2-user && docker info
Reopen the shell in all of these ec2s



## Docker swarm init
- Go to Node 1
$ docker swarm init --advertise-addr PRIVATE_IP:2377 --listen-addr PRIVATE_IP:2377

Now, do "docker swarm join-token manager" 
This command will output something similar to:
"docker swarm join --token MGR_TOKEN_ID NODE1_PRIVATE_IP:2377"

- Go to Node 2
docker swarm join --token MGR_TOKEN_ID NODE1_PRIVATE_IP:2377
--advertise-addr PRIVATE_IP_NODE2:2377 --listen-addr PRIVATE_IP_NODE2:2377

- Go to Node 3
docker swarm join --token MGR_TOKEN_ID NODE1_PRIVATE_IP:2377
--advertise-addr PRIVATE_IP_NODE3:2377 --listen-addr PRIVATE_IP_NODE3:2377


Now, do "docker swarm join-token worker" 
This command will output something similar to:
"docker swarm join --token WKR_TOKEN_ID NODE1_PRIVATE_IP:2377"

- Go to Node 4
docker swarm join --token WKR_TOKEN_ID NODE1_PRIVATE_IP:2377
--advertise-addr PRIVATE_IP_NODE3:2377 --listen-addr PRIVATE_IP_NODE3:2377

- Go to Node 5
docker swarm join --token WKR_TOKEN_ID NODE1_PRIVATE_IP:2377
--advertise-addr PRIVATE_IP_NODE3:2377 --listen-addr PRIVATE_IP_NODE3:2377

- Go to Node 6
docker swarm join --token WKR_TOKEN_ID NODE1_PRIVATE_IP:2377
--advertise-addr PRIVATE_IP_NODE3:2377 --listen-addr PRIVATE_IP_NODE3:2377

## see all nodes and their roles using `docker node ls`
- docker node ls

## Docker info
- docker info

Docker info shows a section wherein swarm details are shown