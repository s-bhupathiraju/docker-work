# Services demo

A service gets the following reliable configs in K8s

- IP
- DNS
- PORT

Services are DNS resolvable inside the K8s Cluster. Service discovery is DNS based. Services also load balance requets 
to pods based off of labels. Service API object contains a list of internal objects called endpoints. These endpoints
are maintained by the K8s and makes sure to update the endpoint list when pods come and go. The load balancing however
works entirely based off of Labels.

**Service Discovery**
- DNS based (best)
- Environment variables (not best as you would always have to create a service first and then the pods)


Get all services and deployments 

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #960050; background-color: #1e0010">$</span> <span style="color: #f8f8f2">kubectl</span> <span style="color: #f8f8f2">get</span> <span style="color: #f8f8f2">services,deployments</span>

<span style="color: #f8f8f2">NAME</span>                  <span style="color: #f8f8f2">TYPE</span>        <span style="color: #f8f8f2">CLUSTER</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">IP</span>    <span style="color: #f8f8f2">EXTERNAL</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">IP</span>   <span style="color: #f8f8f2">PORT(S)</span>    <span style="color: #f8f8f2">AGE</span>
<span style="color: #f8f8f2">service</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">geolocation</span>   <span style="color: #f8f8f2">ClusterIP</span>   <span style="color: #ae81ff">10.99</span><span style="color: #f92672">.</span><span style="color: #ae81ff">201.6</span>   <span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">none</span><span style="color: #f92672">&gt;</span>        <span style="color: #ae81ff">8080</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">TCP</span>   <span style="color: #ae81ff">8</span><span style="color: #f8f8f2">d</span>
<span style="color: #f8f8f2">service</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">kubernetes</span>    <span style="color: #f8f8f2">ClusterIP</span>   <span style="color: #ae81ff">10.96</span><span style="color: #f92672">.</span><span style="color: #ae81ff">0.1</span>     <span style="color: #f92672">&lt;</span><span style="color: #f8f8f2">none</span><span style="color: #f92672">&gt;</span>        <span style="color: #ae81ff">443</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">TCP</span>    <span style="color: #ae81ff">8</span><span style="color: #f8f8f2">d</span>

<span style="color: #f8f8f2">NAME</span>                                <span style="color: #f8f8f2">DESIRED</span>   <span style="color: #f8f8f2">CURRENT</span>   <span style="color: #f8f8f2">UP</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">TO</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">DATE</span>   <span style="color: #f8f8f2">AVAILABLE</span>   <span style="color: #f8f8f2">AGE</span>
<span style="color: #f8f8f2">deployment</span><span style="color: #f92672">.</span><span style="color: #f8f8f2">extensions</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">geolocation</span>   <span style="color: #ae81ff">1</span>         <span style="color: #ae81ff">1</span>         <span style="color: #ae81ff">1</span>            <span style="color: #ae81ff">1</span>           <span style="color: #ae81ff">8</span><span style="color: #f8f8f2">d</span>
</pre></div>



## References

[Kubernetes Cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
