FROM node:lts

COPY openAPI.yml /root/openAPI.yml
COPY pages/* /root/pages
COPY package*.json /root

ENTRYPOINT ["/bin/bash"]