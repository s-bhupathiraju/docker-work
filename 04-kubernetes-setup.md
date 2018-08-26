
# Install minikube on Mac
https://kubernetes.io/docs/tasks/tools/install-minikube/
Use Hyperkit - https://github.com/moby/hyperkit
> alias mkstart='minikube start --vm-driver=hyperkit'
> alias mkstop='minikube stop'
> minikube status

## Check the current cluster that is connected by kubectl
> kubectl config current-context

## Get nodes
> kubectl get nodes
## minikube stop and delete
> minikube stop
> minikube delete

## pull a previous version of kubernetes cluster version
> minikube start --vm-driver=hyperkit' --kubernetes-version="v1.6.0"

## Get nodes
> kubectl get nodes

## minikube dashboard
> minikube dashboard

# Linux - centos
https://kubernetes.io/docs/tasks/tools/install-kubectl/

## install kubeadm first
https://kubernetes.io/docs/setup/independent/install-kubeadm/

## create a cluster using kubeadm 
https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/

