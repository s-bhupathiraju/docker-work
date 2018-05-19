3 pillars:

CNM - container network model
Libnetwork
Drivers

## CNM - container network model built by Docker inc
CNM is the DNA of Docker networking. For reference, look at https://github.com/docker/libnetwork/blob/master/docs/design.md

### Components
- Sandbox (namespace): core os space which doesn't effect any thing else that kernel really cares. This is a backbone for container
- Endpoint - Network interfaces, dns, route tables
- Network - connected endpoints

## CNI - Container network interface built by Google for Kubernetes, CoreOS inc

##Libnetwork
this is the implementation of CNM written in Go Language

##Drivers
Each network type has its own driver
bridge n/w type has its own driver
Local drivers are given by Docker Inc
Remote drivers can be used to support custom network topologies

