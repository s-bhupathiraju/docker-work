# Commands

The following command gives the version of both the docker client and server\
`docker version`

A sample output for the command would be like this:
<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">Client:</span>
 <span style="color: #f8f8f2">Version:</span>           <span style="color: #ae81ff">18.06</span><span style="color: #f92672">.</span><span style="color: #ae81ff">1</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">ce</span>
 <span style="color: #f8f8f2">API</span> <span style="color: #f8f8f2">version:</span>       <span style="color: #ae81ff">1.38</span>
 <span style="color: #f8f8f2">Go</span> <span style="color: #f8f8f2">version:</span>        <span style="color: #f8f8f2">go1</span><span style="color: #f92672">.</span><span style="color: #ae81ff">10.3</span>
 <span style="color: #f8f8f2">Git</span> <span style="color: #f8f8f2">commit:</span>        <span style="color: #f8f8f2">e68fc7a</span>
 <span style="color: #f8f8f2">Built:</span>             <span style="color: #f8f8f2">Tue</span> <span style="color: #f8f8f2">Aug</span> <span style="color: #ae81ff">21</span> <span style="color: #ae81ff">17</span><span style="color: #f8f8f2">:</span><span style="color: #ae81ff">24</span><span style="color: #f8f8f2">:</span><span style="color: #ae81ff">51</span> <span style="color: #ae81ff">2018</span>
 <span style="color: #f8f8f2">OS</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">Arch:</span>           <span style="color: #f8f8f2">linux</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">amd64</span>
 <span style="color: #f8f8f2">Experimental:</span>      <span style="color: #f8f8f2">false</span>

<span style="color: #f8f8f2">Server:</span>
 <span style="color: #f8f8f2">Engine:</span>
  <span style="color: #f8f8f2">Version:</span>          <span style="color: #ae81ff">18.06</span><span style="color: #f92672">.</span><span style="color: #ae81ff">1</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">ce</span>
  <span style="color: #f8f8f2">API</span> <span style="color: #f8f8f2">version:</span>      <span style="color: #ae81ff">1.38</span> <span style="color: #f8f8f2">(minimum</span> <span style="color: #f8f8f2">version</span> <span style="color: #ae81ff">1.12</span><span style="color: #f8f8f2">)</span>
  <span style="color: #f8f8f2">Go</span> <span style="color: #f8f8f2">version:</span>       <span style="color: #f8f8f2">go1</span><span style="color: #f92672">.</span><span style="color: #ae81ff">10.3</span>
  <span style="color: #f8f8f2">Git</span> <span style="color: #f8f8f2">commit:</span>       <span style="color: #f8f8f2">e68fc7a</span>
  <span style="color: #f8f8f2">Built:</span>            <span style="color: #f8f8f2">Tue</span> <span style="color: #f8f8f2">Aug</span> <span style="color: #ae81ff">21</span> <span style="color: #ae81ff">17</span><span style="color: #f8f8f2">:</span><span style="color: #ae81ff">23</span><span style="color: #f8f8f2">:</span><span style="color: #ae81ff">15</span> <span style="color: #ae81ff">2018</span>
  <span style="color: #f8f8f2">OS</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">Arch:</span>          <span style="color: #f8f8f2">linux</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">amd64</span>
  <span style="color: #f8f8f2">Experimental:</span>     <span style="color: #f8f8f2">false</span>
</pre></div>

As seen above, the output shows the version of docker engine (Server) and the docker client (terminal used for interacting with the engine). 
It is also possible to point Docker Client to a remote Docker Engine. This may need special priveleges of course. Not sure how this is done yet!

The following command gives good information on the overall configuration status of docker engine

`docker info`

## Sample output for ``docker info``
<!-- HTML generated using hilite.me --><div style="background: #111111; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #ffffff">Containers:</span> <span style="color: #0086f7; font-weight: bold">0</span>
 <span style="color: #ffffff">Running:</span> <span style="color: #0086f7; font-weight: bold">0</span>
 <span style="color: #ffffff">Paused:</span> <span style="color: #0086f7; font-weight: bold">0</span>
 <span style="color: #ffffff">Stopped:</span> <span style="color: #0086f7; font-weight: bold">0</span>
<span style="color: #ffffff">Images:</span> <span style="color: #0086f7; font-weight: bold">0</span>
<span style="color: #ffffff">Server</span> <span style="color: #ffffff">Version:</span> <span style="color: #0086f7; font-weight: bold">18.06</span><span style="color: #ffffff">.</span><span style="color: #0086f7; font-weight: bold">1</span><span style="color: #ffffff">-ce</span>
<span style="color: #ffffff">Storage</span> <span style="color: #ffffff">Driver:</span> <span style="color: #ffffff">overlay2</span>
 <span style="color: #ffffff">Backing</span> <span style="color: #ffffff">Filesystem:</span> <span style="color: #ffffff">extfs</span>
 <span style="color: #ffffff">Supports</span> <span style="color: #ffffff">d_type:</span> <span style="color: #ffffff">true</span>
 <span style="color: #ffffff">Native</span> <span style="color: #ffffff">Overlay</span> <span style="color: #ffffff">Diff:</span> <span style="color: #ffffff">true</span>
<span style="color: #ffffff">Logging</span> <span style="color: #ffffff">Driver:</span> <span style="color: #ffffff">json-file</span>
<span style="color: #ffffff">Cgroup</span> <span style="color: #ffffff">Driver:</span> <span style="color: #ffffff">cgroupfs</span>
<span style="color: #ffffff">Plugins:</span>
 <span style="color: #ffffff">Volume:</span> <span style="color: #ffffff">local</span>
 <span style="color: #ffffff">Network:</span> <span style="color: #ffffff">bridge</span> <span style="color: #ffffff">host</span> <span style="color: #ffffff">macvlan</span> <span style="color: #ffffff">null</span> <span style="color: #ffffff">overlay</span>
 <span style="color: #ffffff">Log:</span> <span style="color: #ffffff">awslogs</span> <span style="color: #ffffff">fluentd</span> <span style="color: #ffffff">gcplogs</span> <span style="color: #ffffff">gelf</span> <span style="color: #ffffff">journald</span> <span style="color: #ffffff">json-file</span> <span style="color: #ffffff">logentries</span> <span style="color: #ffffff">splunk</span> <span style="color: #ffffff">syslog</span>
<span style="color: #ffffff">Swarm:</span> <span style="color: #ffffff">inactive</span>
<span style="color: #ffffff">Runtimes:</span> <span style="color: #ffffff">runc</span>
<span style="color: #ffffff">Default</span> <span style="color: #ffffff">Runtime:</span> <span style="color: #ffffff">runc</span>
<span style="color: #ffffff">Init</span> <span style="color: #ffffff">Binary:</span> <span style="color: #ffffff">docker-init</span>
<span style="color: #ffffff">containerd</span> <span style="color: #ffffff">version:</span> <span style="color: #0086f7; font-weight: bold">468</span><span style="color: #ffffff">a545b9edcd5932818eb9de8e72413e616e86e</span>
<span style="color: #ffffff">runc</span> <span style="color: #ffffff">version:</span> <span style="color: #0086f7; font-weight: bold">69663</span><span style="color: #ffffff">f0bd4b60df09991c08812a60108003fa340</span>
<span style="color: #ffffff">init</span> <span style="color: #ffffff">version:</span> <span style="color: #ffffff">fec3683</span>
<span style="color: #ffffff">Security</span> <span style="color: #ffffff">Options:</span>
 <span style="color: #ffffff">apparmor</span>
 <span style="color: #ffffff">seccomp</span>
  <span style="color: #ffffff">Profile:</span> <span style="color: #ffffff">default</span>
<span style="color: #ffffff">Kernel</span> <span style="color: #ffffff">Version:</span> <span style="color: #0086f7; font-weight: bold">4.15</span><span style="color: #ffffff">.</span><span style="color: #0086f7; font-weight: bold">0</span><span style="color: #ffffff">-</span><span style="color: #0086f7; font-weight: bold">33</span><span style="color: #ffffff">-generic</span>
<span style="color: #ffffff">Operating</span> <span style="color: #ffffff">System:</span> <span style="color: #ffffff">Ubuntu</span> <span style="color: #0086f7; font-weight: bold">18.04</span><span style="color: #ffffff">.</span><span style="color: #0086f7; font-weight: bold">1</span> <span style="color: #ffffff">LTS</span>
<span style="color: #ffffff">OSType:</span> <span style="color: #ffffff">linux</span>
<span style="color: #ffffff">Architecture:</span> <span style="color: #ffffff">x86_64</span>
<span style="color: #ffffff">CPUs:</span> <span style="color: #0086f7; font-weight: bold">4</span>
<span style="color: #ffffff">Total</span> <span style="color: #ffffff">Memory:</span> <span style="color: #0086f7; font-weight: bold">19.51</span><span style="color: #ffffff">GiB</span>
<span style="color: #ffffff">Name:</span> <span style="color: #ffffff">sbhupathiraju-t20</span>
<span style="color: #ffffff">ID:</span> <span style="color: #ffffff">BUKD:Y6ZR:VSKV:W2FL:PQ2G:MUIW:LSMS:</span><span style="color: #0086f7; font-weight: bold">2</span><span style="color: #ffffff">VKW:PQCP:Z3II:</span><span style="color: #0086f7; font-weight: bold">7</span><span style="color: #ffffff">HU5:PGMS</span>
<span style="color: #ffffff">Docker</span> <span style="color: #ffffff">Root</span> <span style="color: #ffffff">Dir:</span> <span style="color: #ffffff">/var/lib/docker</span>
<span style="color: #ffffff">Debug</span> <span style="color: #ffffff">Mode</span> <span style="color: #ffffff">(client):</span> <span style="color: #ffffff">false</span>
<span style="color: #ffffff">Debug</span> <span style="color: #ffffff">Mode</span> <span style="color: #ffffff">(server):</span> <span style="color: #ffffff">false</span>
<span style="color: #ffffff">Registry:</span> <span style="color: #ffffff">https://index.docker.io/v1/</span>
<span style="color: #ffffff">Labels:</span>
<span style="color: #ffffff">Experimental:</span> <span style="color: #ffffff">false</span>
<span style="color: #ffffff">Insecure</span> <span style="color: #ffffff">Registries:</span>
 <span style="color: #0086f7; font-weight: bold">127.0</span><span style="color: #ffffff">.</span><span style="color: #0086f7; font-weight: bold">0.0</span><span style="color: #ffffff">/</span><span style="color: #0086f7; font-weight: bold">8</span>
<span style="color: #ffffff">Live</span> <span style="color: #ffffff">Restore</span> <span style="color: #ffffff">Enabled:</span> <span style="color: #ffffff">false</span>
</pre></div>

## Working with images

To check whether you can access and download images from Docker Hub, type:

`docker run hello-world` \
`docker run ubuntu:latest`

You can search for images available on Docker Hub by using the docker command with the search subcommand. For example, to search for the Ubuntu image, type:

`docker search ubuntu`

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">NAME</span>                                                      <span style="color: #f8f8f2">DESCRIPTION</span>                                     <span style="color: #f8f8f2">STARS</span>               <span style="color: #f8f8f2">OFFICIAL</span>            <span style="color: #f8f8f2">AUTOMATED</span>
<span style="color: #f8f8f2">ubuntu</span>                                                    <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f92672">is</span> <span style="color: #f8f8f2">a</span> <span style="color: #f8f8f2">Debian</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">based</span> <span style="color: #f8f8f2">Linux</span> <span style="color: #f8f8f2">operating</span> <span style="color: #f8f8f2">sys</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">8303</span>                <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">dorowu</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">desktop</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">lxde</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">vnc</span>                            <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">openssh</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">server</span> <span style="color: #f92672">and</span> <span style="color: #f8f8f2">NoVNC</span>            <span style="color: #ae81ff">213</span>                                     <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">rastasheep</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">sshd</span>                                    <span style="color: #f8f8f2">Dockerized</span> <span style="color: #f8f8f2">SSH</span> <span style="color: #f8f8f2">service,</span> <span style="color: #f8f8f2">built</span> <span style="color: #f8f8f2">on</span> <span style="color: #f8f8f2">top</span> <span style="color: #f8f8f2">of</span> <span style="color: #f8f8f2">offi</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">170</span>                                     <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">consol</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">xfce</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">vnc</span>                                    <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f8f8f2">container</span> <span style="color: #66d9ef">with</span> <span style="color: #e6db74">&quot;headless&quot;</span> <span style="color: #f8f8f2">VNC</span> <span style="color: #f8f8f2">session</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">126</span>                                     <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">ansible</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu14</span><span style="color: #f92672">.</span><span style="color: #ae81ff">04</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">ansible</span>                               <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #ae81ff">14.04</span> <span style="color: #f8f8f2">LTS</span> <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">ansible</span>                   <span style="color: #ae81ff">95</span>                                      <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">upstart</span>                                            <span style="color: #f8f8f2">Upstart</span> <span style="color: #f92672">is</span> <span style="color: #f8f8f2">an</span> <span style="color: #f8f8f2">event</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">based</span> <span style="color: #f8f8f2">replacement</span> <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">th</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">88</span>                  <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">neurodebian</span>                                               <span style="color: #f8f8f2">NeuroDebian</span> <span style="color: #f8f8f2">provides</span> <span style="color: #f8f8f2">neuroscience</span> <span style="color: #f8f8f2">research</span> <span style="color: #f8f8f2">s</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">53</span>                  <span style="color: #f8f8f2">[OK]</span>
<span style="color: #ae81ff">1</span><span style="color: #f8f8f2">and1internet</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">nginx</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">phpmyadmin</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">mysql</span><span style="color: #f92672">-</span><span style="color: #ae81ff">5</span>      <span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">nginx</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">phpmyadmin</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">mysql</span><span style="color: #f92672">-</span><span style="color: #ae81ff">5</span>          <span style="color: #ae81ff">43</span>                                      <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">debootstrap</span>                                        <span style="color: #f8f8f2">debootstrap</span> <span style="color: #f92672">--</span><span style="color: #f8f8f2">variant</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">minbase</span> <span style="color: #f92672">--</span><span style="color: #f8f8f2">components</span><span style="color: #f92672">=</span><span style="color: #f8f8f2">m</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">39</span>                  <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">nuagebec</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                           <span style="color: #f8f8f2">Simple</span> <span style="color: #f8f8f2">always</span> <span style="color: #f8f8f2">updated</span> <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f8f8f2">docker</span> <span style="color: #f8f8f2">images</span> <span style="color: #f8f8f2">w</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">23</span>                                      <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">tutum</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                              <span style="color: #f8f8f2">Simple</span> <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f8f8f2">docker</span> <span style="color: #f8f8f2">images</span> <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">SSH</span> <span style="color: #f8f8f2">access</span>     <span style="color: #ae81ff">18</span>
<span style="color: #f8f8f2">i386</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                               <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f92672">is</span> <span style="color: #f8f8f2">a</span> <span style="color: #f8f8f2">Debian</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">based</span> <span style="color: #f8f8f2">Linux</span> <span style="color: #f8f8f2">operating</span> <span style="color: #f8f8f2">sys</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">13</span>
<span style="color: #ae81ff">1</span><span style="color: #f8f8f2">and1internet</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">apache</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #ae81ff">7.0</span>                    <span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">apache</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #ae81ff">7.0</span>                        <span style="color: #ae81ff">12</span>                                      <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">ppc64le</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                            <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f92672">is</span> <span style="color: #f8f8f2">a</span> <span style="color: #f8f8f2">Debian</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">based</span> <span style="color: #f8f8f2">Linux</span> <span style="color: #f8f8f2">operating</span> <span style="color: #f8f8f2">sys</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">12</span>
<span style="color: #ae81ff">1</span><span style="color: #f8f8f2">and1internet</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">nginx</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">phpmyadmin</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">mariadb</span><span style="color: #f92672">-</span><span style="color: #ae81ff">10</span>   <span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">nginx</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">phpmyadmin</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">mariadb</span><span style="color: #f92672">-</span><span style="color: #ae81ff">10</span>       <span style="color: #ae81ff">8</span>                                       <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">eclipse</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu_jdk8</span>                                       <span style="color: #f8f8f2">Ubuntu,</span> <span style="color: #f8f8f2">JDK8,</span> <span style="color: #f8f8f2">Maven</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">git,</span> <span style="color: #f8f8f2">curl,</span> <span style="color: #f8f8f2">nmap,</span> <span style="color: #f8f8f2">mc,</span> <span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">6</span>                                       <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">darksheer</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                          <span style="color: #f8f8f2">Base</span> <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f8f8f2">Image</span> <span style="color: #f92672">--</span> <span style="color: #f8f8f2">Updated</span> <span style="color: #f8f8f2">hourly</span>             <span style="color: #ae81ff">4</span>                                       <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">codenvy</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu_jdk8</span>                                       <span style="color: #f8f8f2">Ubuntu,</span> <span style="color: #f8f8f2">JDK8,</span> <span style="color: #f8f8f2">Maven</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">git,</span> <span style="color: #f8f8f2">curl,</span> <span style="color: #f8f8f2">nmap,</span> <span style="color: #f8f8f2">mc,</span> <span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">4</span>                                       <span style="color: #f8f8f2">[OK]</span>
<span style="color: #ae81ff">1</span><span style="color: #f8f8f2">and1internet</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">nginx</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #ae81ff">5.6</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">wordpress</span><span style="color: #f92672">-</span><span style="color: #ae81ff">4</span>         <span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">nginx</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">php</span><span style="color: #f92672">-</span><span style="color: #ae81ff">5.6</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">wordpress</span><span style="color: #f92672">-</span><span style="color: #ae81ff">4</span>             <span style="color: #ae81ff">3</span>                                       <span style="color: #f8f8f2">[OK]</span>
<span style="color: #ae81ff">1</span><span style="color: #f8f8f2">and1internet</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">sshd</span>                              <span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">sshd</span>                                  <span style="color: #ae81ff">1</span>                                       <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">pivotaldata</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                        <span style="color: #f8f8f2">A</span> <span style="color: #f8f8f2">quick</span> <span style="color: #f8f8f2">freshening</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">up</span> <span style="color: #f8f8f2">of</span> <span style="color: #f8f8f2">the</span> <span style="color: #f8f8f2">base</span> <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f8f8f2">doc</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">1</span>
<span style="color: #ae81ff">1</span><span style="color: #f8f8f2">and1internet</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">healthcheck</span>                       <span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #ae81ff">16</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">healthcheck</span>                           <span style="color: #ae81ff">0</span>                                       <span style="color: #f8f8f2">[OK]</span>
<span style="color: #f8f8f2">pivotaldata</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">gpdb</span><span style="color: #f92672">-</span><span style="color: #f8f8f2">dev</span>                               <span style="color: #f8f8f2">Ubuntu</span> <span style="color: #f8f8f2">images</span> <span style="color: #66d9ef">for</span> <span style="color: #f8f8f2">GPDB</span> <span style="color: #f8f8f2">development</span>              <span style="color: #ae81ff">0</span>
<span style="color: #f8f8f2">ossobv</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                             <span style="color: #f8f8f2">Custom</span> <span style="color: #f8f8f2">ubuntu</span> <span style="color: #f8f8f2">image</span> <span style="color: #f92672">from</span> <span style="color: #f8f8f2">scratch</span> <span style="color: #f8f8f2">(based</span> <span style="color: #f8f8f2">on</span> <span style="color: #f8f8f2">o</span><span style="color: #960050; background-color: #1e0010">…</span>   <span style="color: #ae81ff">0</span>
<span style="color: #f8f8f2">smartentry</span><span style="color: #f92672">/</span><span style="color: #f8f8f2">ubuntu</span>                                         <span style="color: #f8f8f2">ubuntu</span> <span style="color: #66d9ef">with</span> <span style="color: #f8f8f2">smartentry</span>                          <span style="color: #ae81ff">0</span>                                       <span style="color: #f8f8f2">[OK]</span>
</pre></div>

Execute the following command to download the official ubuntu image to your computer:

`docker pull ubuntu`

After an image has been downloaded, you can then run a container using the downloaded image with the run subcommand. As you saw with the hello-world example, if an image has not been downloaded when docker is executed with the run subcommand, the Docker client will first download the image, then run a container using it.

To see the images that have been downloaded to your computer, type:

`docker images`

To remove an image from docker engine, use:

`docker rmi ubuntu:14.04`

## Running a Docker Container

The hello-world container you ran in the previous step is an example of a container that runs and exits after emitting a test message. Containers can be much more useful than that, and they can be interactive. After all, they are similar to virtual machines, only more resource-friendly.

As an example, let's run a container using the latest image of Ubuntu. The combination of the -i and -t switches gives you interactive shell access into the container:

`docker run -it ubuntu`

Your command prompt should change to reflect the fact that you're now working inside the container and should take this form:

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">Output</span>
<span style="color: #f8f8f2">root</span><span style="color: #a6e22e">@d9b100f2f636</span><span style="color: #f8f8f2">:</span><span style="color: #f92672">/</span><span style="color: #75715e">#</span>
</pre></div>

Note the container id in the command prompt. In this example, it is d9b100f2f636. You'll need that container ID later to identify the container when you want to remove it.

Now you can run any command inside the container. For example, let's update the package database inside the container. You don't need to prefix any command with sudo, because you're operating inside the container as the root user:

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">root</span><span style="color: #a6e22e">@d9b100f2f636</span><span style="color: #f8f8f2">:</span><span style="color: #f92672">/</span><span style="color: #75715e"># apt install nodejs</span>
</pre></div>

## Managing Docker Containers

After using Docker for a while, you'll have many active (running) and inactive containers on your computer. To view the active ones, use:
`docker ps`

Output all containers including the stopped ones \
`docker ps -a`

To view the latest container you created, pass it the -l switch:
`docker ps -l`

To start a stopped container, use docker start, followed by the container ID or the container's name. Let's start the Ubuntu-based container with the ID of d9b100f2f636:

`docker start d9b100f2f636`

To stop a running container, use docker stop, followed by the container ID or name. This time, we'll use the name that Docker assigned the container, which is sharp_volhard:

`docker stop sharp_volhard`

Once you've decided you no longer need a container anymore, remove it with the docker rm command, again using either the container ID or the name. Use the docker ps -a command to find the container ID or name for the container associated with the hello-world image and remove it.

`docker rm festive_williams`

You can start a new container and give it a name using the --name switch. You can also use the --rm switch to create a container that removes itself when it's stopped. See the docker run help command for more information on these options and others.

Containers can be turned into images which you can use to build new containers. Let's look at how that works.


## Examples
Example for a web container:

Run in detached mode, allow 8080 container port to be accessible on Host port 8099

`docker run -d --name web -p 8099:8080 nigelpoulton/pluralsight-docker-ci`

Example for an interactive shell:

`docker run -it --name shel ubuntu:latest /bin/bash`

Type exit in the shell to exit. Most of the time the only process running is one active process. if you kill the process, the container will exit


Exit from a running interactive container by doing:

`Ctrl P + Q`

Stop all containers

`docker stop $(docker ps -aq)`

Remove all stopped containers

`docker rm $(docker ps -aq)`

Remove all images

`docker rmi $(docker images -q)`
