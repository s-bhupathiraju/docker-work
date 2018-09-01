# Docker Network
$ docker network ls

NETWORK ID          NAME                DRIVER              SCOPE
e01c099e3138        bridge              bridge              local
bb9a337203e3        host                host                local
c450fe423060        none                null                local

# Docker inspect
- Inspect a driver above using the command below


$ docker network inspect bridge
[
    {
        "Name": "bridge",
        "Id": "e01c099e3138ee03a36e8e9f1fbca716397eb17773bb44467c87627f45056e40",
        "Created": "2018-05-17T23:59:09.937738379-04:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Containers": {},
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "1500"
        },
        "Labels": {}
    }
]

//create a new bridge network
$ docker network create -d bridge --subnet 10.0.0.1/24 ps-bridge

$ docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
e01c099e3138        bridge              bridge              local
bb9a337203e3        host                host                local
c450fe423060        none                null                local
1f98752e4b88        ps-bridge           bridge              local


// install bridge utils to see list of bridge networks created in kernel space
$ sudo yum install bridge-utils -y

$ brctl show
bridge name            bridge id        STP enabled    interfaces
br-1f98752e4b88        8000.0242e108a0f1    no
docker0                8000.0242746b426a    no

[ojhus@ojhus docker-work]$ docker network inspect ps-bridge
[
    {
        "Name": "ps-bridge",
        "Id": "1f98752e4b883498abc785e86d3d1768bf8291f8e18693a9fce7c62ef249ac03",
        "Created": "2018-05-20T20:04:29.231182958-04:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "10.0.0.1/24"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]

[ojhus@ojhus docker-work]$ ip link show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: em1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
    link/ether 18:66:da:49:0b:f9 brd ff:ff:ff:ff:ff:ff
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default
    link/ether 02:42:74:6b:42:6a brd ff:ff:ff:ff:ff:ff
18: br-1f98752e4b88: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default
    link/ether 02:42:e1:08:a0:f1 brd ff:ff:ff:ff:ff:ff

****************************************************************************************************
Create containers within the new bridge network

[ojhus@ojhus docker-work]$ docker run -dt --name c1 --network ps-bridge alpine sleep 1d
[ojhus@ojhus docker-work]$ docker run -dt --name c2 --network ps-bridge alpine sleep 1d

Hint: https://stackoverflow.com/questions/41453263/docker-networking-disabled-warning-ipv4-forwarding-is-disabled-networking-wil
If Warned by "IPv4 forwarding is disabled" message, then do the following
$ sudo emacs /etc/sysctl.conf
Enter in the file: net.ipv4.ip_forward=1
$ systemctl restart network
****************************************************************************************************
$ docker network inspect ps-bridge
[ojhus@ojhus docker-work]$ docker network inspect ps-bridge
[
    {
        "Name": "ps-bridge",
        "Id": "1f98752e4b883498abc785e86d3d1768bf8291f8e18693a9fce7c62ef249ac03",
        "Created": "2018-05-20T20:04:29.231182958-04:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "10.0.0.1/24"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Containers": {
            "b7cb0e499fd3c305fad0725d461414ce180366e0414679d3e9639e8186422c15": {
                "Name": "c2",
                "EndpointID": "4189029d076be187e1c9511941043beda7373e64e2ccc25c261fb1a996c29c14",
                "MacAddress": "02:42:0a:00:00:03",
                "IPv4Address": "10.0.0.3/24",
                "IPv6Address": ""
            },
            "e16f74226ffb366dbaf638328920a56c42fdd13999fe1a5394afb2089f723b54": {
                "Name": "c1",
                "EndpointID": "a60cc239bc5151a0df50f3b94c5af471d718a14d94c0eb9f5b7441fa36d38a11",
                "MacAddress": "02:42:0a:00:00:02",
                "IPv4Address": "10.0.0.2/24",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
****************************************************************************************************
[ojhus@ojhus docker-work]$ brctl show
bridge name    bridge id        STP enabled    interfaces
br-1f98752e4b88        8000.0242e108a0f1    no        veth6b4583a
                            veth9f40c65
docker0        8000.0242746b426a    no
****************************************************************************************************

> These two docker containers are connected through the bridge network br-1f98*

****************************************************************************************************

docker exec -it c1 sh
/ # ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
19: eth0@if20: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP
    link/ether 02:42:0a:00:00:02 brd ff:ff:ff:ff:ff:ff
    inet 10.0.0.2/24 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:aff:fe00:2/64 scope link
       valid_lft forever preferred_lft forever

/ # ping c2
PING c2 (10.0.0.3): 56 data bytes
64 bytes from 10.0.0.3: seq=0 ttl=64 time=0.150 ms

/ # ping 10.0.0.3
PING 10.0.0.3 (10.0.0.3): 56 data bytes
64 bytes from 10.0.0.3: seq=0 ttl=64 time=0.150 ms
****************************************************************************************************

To expose the container on this bridge network to docker host, do
$ docker run -d --name web1 --network ps-bridge -p 5000:8080 nigelpoulton/pluralsight-docker-ci 

$ ip addr show
Go to browser <OJHUS_IP>/5000



