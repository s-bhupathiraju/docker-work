# PODs
All pods get to talk to each other on a POD NETWORK. Each pod gets a single IP.
Individual containers in the pod will be exposed using different port mapping.
- Smallest atomic units of scheduling
- Pods have one or more containers
- Pods scheduled on nodes
- They get defined declaratively via manifest files

Atomic deployment:

Pods are deployed automically. They are either deployed successfully or not deployed. The have a pending state during startup.
Pods also can be destroyed once. They cannot be brought back into life after they are destroyed.

POD lifecycle:
A manifest is provided to kube-api-server. The api server uses scheduler to provision a new pod.

Positive life cylce
Pending -> Running -> Succeeded  

Failed life cycle
Pending -> Failed
Running -> Failed