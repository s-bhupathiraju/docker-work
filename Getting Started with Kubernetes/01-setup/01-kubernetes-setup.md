
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

Switch to a different context using
`kubectl config use-context minikube`

#### Man like Documentation
`kubectl explain svc` \
`kubectl explain pod`

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

### using GKE
Create a new account with google cloud. 300$ of free credits.
- Add a new project if there is none
- Create a new GKE cluster in US-east-1
- Once the cluster is created, click on the connect button to open up the console
- This will open a popup with instructions to connect to the cluster
- In google console, try
`gcloud container clusters get-credentials cluster-1 --zone us-east1-c --project ojhus-215204`
- This command will set the context for kubectl to GKE cluster
- Try `kubectl config current-context` will give the name of the cluster. This is helpful to see if the kubectl is pointed to the active cluster in the local development machinge.
Keep in mind that kubectl is a client for any google k8s cluster.
- Try `kubectl cluster-info` will give the cluster info
- Try `kubectl help` to get more commands and documentation on this.
- Try `man kubectl` for manual
- Try `kubectl get nodes` to get the list of nodes in this cluster

- Install gcloud sdk if you want to try the cluster from local devbox.

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
    


