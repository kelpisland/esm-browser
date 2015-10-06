FROM centos:7
MAINTAINER shea

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y nodejs npm --enablerepo=epel

ADD . /src
WORKDIR /src

RUN npm install -g node-inspector bower gulp

RUN useradd node -p xyz123

RUN chown -R node .

USER node


RUN npm install

CMD ["gulp", "serve-dev"]
