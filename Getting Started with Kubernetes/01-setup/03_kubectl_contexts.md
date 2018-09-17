
# Manage Contexts and Clusters

## Manage Context

### List Your Kubernetes Contexts
This will show all your configured contexts in Kubernetes. I included the | tr ... to replace the spaces with newlines so that it’s easier to parse the results. This way, you can easily see the exact names of your contexts, so that you can easily switch between them.

`kubectl config view -o jsonpath='{.contexts[*].name}' | tr " " "\n"`

or 

`kubectl config get-contexts`

### Show your Current Context

`kubectl config current-context`

This just shows your current context. It’s pretty self-explanatory, but I often forget the exact syntax that lists my context.

### Set your Context

`kubectl config use-context <context_name>` 

And this, not surprisingly, sets your context. So if you need to switch from your minikube context to your gcp-project-cluster-context, you just use this nifty command, and suddenly your commands are pointing at an entirely different cluster.

### Delete Context

`kubectl config delete-context <context_name>`

And this, is to delete an existin context

## Manage Cluster

### Get Clusters

`kubectl config get-clusters`

### Delete context

`kubectl config delete-cluster my-cluster`

### Unset Users
`kubectl config unset users.<name_of_users_found_in_KUBECTL_CONFIG_VIEW_CMD>`

## Cleaner config view

A cleaner config view command would look like below with 
- one context
- one cluster
- one user

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #960050; background-color: #1e0010">$</span> <span style="color: #f8f8f2">kubectl</span> <span style="color: #f8f8f2">config</span> <span style="color: #f8f8f2">view</span>

<span style="color: #f8f8f2">apiVersion:</span> <span style="color: #f8f8f2">v1</span>
<span style="color: #f8f8f2">clusters:</span>
<span style="color: #f92672">-</span> <span style="color: #f8f8f2">cluster:</span>
    <span style="color: #f8f8f2">certificate</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">authority:</span> <span style="color: #f92672">/</span><span style="color: #f8f8f2">Users</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">employee</span><span style="color: #f92672">/.</span><span style="color: #f8f8f2">minikube</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ca</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">crt</span>
    <span style="color: #f8f8f2">server:</span> <span style="color: #f8f8f2">https:</span><span style="color: #f92672">//</span><span style="color: #ae81ff">192.168</span><span style="color: #f92672">.</span><span style="color: #ae81ff">64.13</span><span style="color: #f8f8f2">:</span><span style="color: #ae81ff">8443</span>
  <span style="color: #f8f8f2">name:</span> <span style="color: #f8f8f2">minikube</span>
<span style="color: #f8f8f2">contexts:</span>
<span style="color: #f92672">-</span> <span style="color: #f8f8f2">context:</span>
    <span style="color: #f8f8f2">cluster:</span> <span style="color: #f8f8f2">minikube</span>
    <span style="color: #f8f8f2">user:</span> <span style="color: #f8f8f2">minikube</span>
  <span style="color: #f8f8f2">name:</span> <span style="color: #f8f8f2">minikube</span>
<span style="color: #f8f8f2">current</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">context:</span> <span style="color: #f8f8f2">minikube</span>
<span style="color: #f8f8f2">kind:</span> <span style="color: #f8f8f2">Config</span>
<span style="color: #f8f8f2">preferences:</span> <span style="color: #f8f8f2">{}</span>
<span style="color: #f8f8f2">users:</span>
<span style="color: #f92672">-</span> <span style="color: #f8f8f2">name:</span> <span style="color: #f8f8f2">minikube</span>
  <span style="color: #f8f8f2">user:</span>
    <span style="color: #f8f8f2">client</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">certificate:</span> <span style="color: #f92672">/</span><span style="color: #f8f8f2">Users</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">employee</span><span style="color: #f92672">/.</span><span style="color: #f8f8f2">minikube</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">client</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">crt</span>
    <span style="color: #f8f8f2">client</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">key:</span> <span style="color: #f92672">/</span><span style="color: #f8f8f2">Users</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">employee</span><span style="color: #f92672">/.</span><span style="color: #f8f8f2">minikube</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">client</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">key</span>
</pre></div>
