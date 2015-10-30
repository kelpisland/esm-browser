FROM centos:7
MAINTAINER shea.phillips@gmail.com

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y git nodejs npm bzip2 --enablerepo=epel
RUN yum -y groupinstall "Development Tools"

ADD package.json bower.json /src/

WORKDIR /src

RUN npm install -g node-inspector bower gulp

RUN useradd node -p xyz123

RUN chown -R node:0 /src && chmod -R 770 /src

USER node

ENV HOME=/tmp TEMP=/tmp

RUN npm install

ADD . /src
EXPOSE 3000 7203add expose to dockerfile.add EXPOS

CMD ["gulp", "serve-dev"]
