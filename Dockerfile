FROM centos:7
MAINTAINER shea

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y git nodejs npm bzip2 --enablerepo=epel
RUN yum -y groupinstall "Development Tools"

ADD . /src
WORKDIR /src

RUN npm install -g node-inspector bower gulp

RUN npm install

CMD ["gulp", "serve-dev"]
