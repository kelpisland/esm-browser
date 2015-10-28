FROM centos:7
MAINTAINER shea.phillips@keystonesystems.ca

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y git nodejs npm bzip2 --enablerepo=epel
RUN yum -y groupinstall "Development Tools"

ADD package.json bower.json /src/

WORKDIR /src

RUN npm install -g node-inspector bower gulp

RUN useradd node -p xyz123

RUN chown -R node:node /src

USER node

ENV HOME=/tmp TEMP=/tmp

RUN npm install

ADD . /src/

CMD ["gulp", "serve-dev"]
