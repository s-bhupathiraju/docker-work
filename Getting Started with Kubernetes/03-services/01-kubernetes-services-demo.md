# POD demo

Get information on minions or nodes `kubectl get nodes`. A sample output for this command looks like

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">NAME</span>                                       <span style="color: #f8f8f2">STATUS</span>    <span style="color: #f8f8f2">ROLES</span>     <span style="color: #f8f8f2">AGE</span>       <span style="color: #f8f8f2">VERSION</span>
<span style="color: #f8f8f2">gke</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">cluster</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">default</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">pool</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">eac48c0f</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">ph6f</span>   <span style="color: #f8f8f2">Ready</span>     <span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">none</span><span style="color: #f92672">&gt;</span>    <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">h</span>        <span style="color: #f8f8f2">v1</span><span style="color: #f92672">.</span><span style="color: #ae81ff">9.7</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">gke</span><span style="color: #f92672">.</span><span style="color: #ae81ff">6</span>
<span style="color: #f8f8f2">gke</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">cluster</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">default</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">pool</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">eac48c0f</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">t3zd</span>   <span style="color: #f8f8f2">Ready</span>     <span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">none</span><span style="color: #f92672">&gt;</span>    <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">h</span>        <span style="color: #f8f8f2">v1</span><span style="color: #f92672">.</span><span style="color: #ae81ff">9.7</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">gke</span><span style="color: #f92672">.</span><span style="color: #ae81ff">6</span>
<span style="color: #f8f8f2">gke</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">cluster</span><span style="color: #f92672">-</span><span style="color: #ae81ff">1</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">default</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">pool</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">eac48c0f</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">trhz</span>   <span style="color: #f8f8f2">Ready</span>     <span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">none</span><span style="color: #f92672">&gt;</span>    <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">h</span>        <span style="color: #f8f8f2">v1</span><span style="color: #f92672">.</span><span style="color: #ae81ff">9.7</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">gke</span><span style="color: #f92672">.</span><span style="color: #ae81ff">6</span>
</pre></div>

The following `pod.yml` is a simple declarative manifest file that can be passed to kube-api server for creating a pod

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">apiVersion:</span> <span style="color: #f8f8f2">v1</span>
<span style="color: #f8f8f2">kind:</span> <span style="color: #f8f8f2">Pod</span>
<span style="color: #f8f8f2">metadata:</span>
  <span style="color: #f8f8f2">name:</span> <span style="color: #f8f8f2">hello</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">pod</span>
<span style="color: #f8f8f2">spec:</span>
  <span style="color: #f8f8f2">containers:</span>
  <span style="color: #f92672">-</span> <span style="color: #f8f8f2">name:</span> <span style="color: #f8f8f2">hello</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">ctr</span>
    <span style="color: #f8f8f2">image:</span> <span style="color: #f8f8f2">nigelpoulton</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">pluralsight</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">docker</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">ci:latest</span>
    <span style="color: #f8f8f2">ports:</span>
    <span style="color: #f92672">-</span> <span style="color: #f8f8f2">containerPort:</span> <span style="color: #ae81ff">8080</span>
</pre></div>

The following command will simply deploy this pod to k8s cluster
`kubectl create -f pod.yml` 

Check the list of pods in the cluster with
`kubectl get pods`

other commands for __getting pods__

`kubectl get pods --include-uninitialized`

<pre style='color:#d1d1d1;background:#000000;'>NAME                 READY     STATUS              RESTARTS   AGE
busybox-sleep        <span style='color:#008c00; '>0</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       ContainerCreating   <span style='color:#008c00; '>0</span>          2s
busybox-sleep-less   <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running             <span style='color:#008c00; '>0</span>          2s
</pre>

`kubectl get pods -o wide`

<pre style='color:#d1d1d1;background:#000000;'>NAME                 READY     STATUS    RESTARTS   AGE       IP           NODE
busybox-sleep        <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          52s       <span style='color:#009f00; '>172.17</span><span style='color:#d2cd86; '>.</span><span style='color:#009f00; '>0.5</span>   minikube
busybox-sleep-less   <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          52s       <span style='color:#009f00; '>172.17</span><span style='color:#d2cd86; '>.</span><span style='color:#009f00; '>0.4</span>   minikube
</pre>

To view all pods including system pods, try

`kubectl get pods --all-namespaces`

<pre style='color:#d1d1d1;background:#000000;'><span style='color:#008c00; '>15</span><span style='color:#e66170; font-weight:bold; '>:29</span> $ kubectl get pods --all-namespaces
NAMESPACE     NAME                                    READY     STATUS    RESTARTS   AGE
default       hello-pod                               <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          5h
kube-system   etcd-minikube                           <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   kube-addon-manager-minikube             <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   kube-apiserver-minikube                 <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   kube-controller-manager-minikube        <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   kube-dns-86f4d74b45-sf4pm               <span style='color:#008c00; '>3</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>3</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   kube-proxy-q2cfm                        <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   kube-scheduler-minikube                 <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   kubernetes-dashboard-5498ccf677-xsvr5   <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
kube-system   storage-provisioner                     <span style='color:#008c00; '>1</span><span style='color:#d2cd86; '>/</span><span style='color:#008c00; '>1</span>       Running   <span style='color:#008c00; '>0</span>          23h
</pre>

This gives a detailed list of major 4 componets of control plane
- Cluster Store is tied to `etcd-minikube`
- Controller Manager is tied to `kube-controller-manager-minikube`
- Scheduler is tied to `kube-scheduler-minikube`
- Api Server is tied to `kube-apiserver-minikube`

**Describe Pods**

`kubectl describe pods`

**Delete Pods**

`kubectl delete pods hello-pod` or

`kubectl delete pods/hello-pod`

**Create multiple pods with one yml**

`kubectl create -f pod-multiple.yml`

**Delete multiple pods with one yml**

`kubectl delete -f pod-multiple.yml`

**create a pod without using a yml file**
`kubectl run hello-minikube --image=gcr.io/google_containers/echoserver:1.4`

## Replication Controller

[Official Docs](https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/)

**Create Replication Controller**\
`kubectl create -f rc.yml`

Get all pods\
`kubectl get pods`

Get Replication Controllers\
`kubectl get rc`

Describe replication controllers\
`kubectl describe rc`

Make changes to rc.yml to create 20 replicas overall,\
`kubectl apply -f rc.yml`

Double check the list of pods using\
`kubectl get pods -o wide`

## References

[Kubernetes Cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
