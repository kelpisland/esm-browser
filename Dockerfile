FROM centos:7
MAINTAINER shea

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y git nodejs npm bzip2 --enablerepo=epel
RUN yum -y groupinstall "Development Tools"

ADD . /src
WORKDIR /src

RUN npm install -g node-inspector bower gulp

RUN useradd node -p xyz123

RUN chown -R node:node /src
ENV HOME=/tmp TEMP=/tmp

RUN npm install

CMD ["gulp", "serve-dev"]
