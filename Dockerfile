FROM centos:7
MAINTAINER shea.phillips@gmail.com

RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y git nodejs npm bzip2 --enablerepo=epel
RUN yum -y groupinstall "Development Tools"

ADD package.json bower.json /src/

WORKDIR /src

RUN git config --global url."https://".insteadOf git://

RUN npm install -g node-inspector bower gulp

RUN useradd node -p 123XYZ

RUN chown -R node:0 /src && chmod -R 770 /src

USER node

ENV HOME=/tmp TEMP=/tmp

RUN git config --global url."https://".insteadOf git:// && npm install

ADD . /src
EXPOSE 3000 7203

CMD ["gulp", "serve-dev"]
