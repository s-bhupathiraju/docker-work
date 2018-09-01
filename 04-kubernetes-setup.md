
#Kubernetes Xperience

## Installation Process
### Minikube on Mac
Reference: https://kubernetes.io/docs/tasks/tools/install-minikube/
Use Hyperkit - https://github.com/moby/hyperkit
` alias mkstart='minikube start --vm-driver=hyperkit'` \
` alias mkstop='minikube stop'`\
` minikube status`

#### kubectl context 
Check the current cluster that is connected by kubectl
` kubectl config current-context`

#### Get Nodes
` kubectl get nodes`

#### minikube stop and delete
` minikube stop`
` minikube delete`

#### Manage cluster version 
pull a previous version of kubernetes cluster version using
` minikube start --vm-driver=hyperkit' --kubernetes-version="v1.6.0"`


#### Dashboard
` minikube dashboard`

### Installation on Linux using Hard way
#### References
https://kubernetes.io/docs/tasks/tools/install-kubectl/
https://kubernetes.io/docs/setup/independent/install-kubeadm/
https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/

## Kubernetes Architecture

### Master Components

#### kube-apiserver
- Front end to the control plane \
- Exposes the Rest API \
- Consumes JSON
- Manifest files are sent to the server, cluster validates this file and attempts to deploy the state to the cluster

##### Interaction with API Server
- Commands are received by API server using kubectl and JSON format
- The API Server can also be protected 
- Once the manifest is sent to API server using kubectl, the changes are going to be sent to nodes  

#### Cluster Store
- Persistent Store \
- Cluster state and configuration is stored in etcd which is consistent, distributed, and watchable

#### Controller Manager
- Controller of Controllers
- Available controllers: Node, endpoint, namespace controllers. Magager manages these controllers.

#### Scheduler
- Watches apiserver for rolling out updates to new configuration
- Assigns work to nodes
    - affinity/anti-affinity
    - constraints
    - resources
    
### Node components
    


