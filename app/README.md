# 简介
本文件介绍如何有效参与开发。

# 1、安装环境
## 安装python
```
sudo apt install python3.9
```
## 安装虚拟环境pipenv
```
pip3 install pipenv
```
## 安装latex
ubuntu系统安装方法
``` ubuntu
sudo apt-get update
sudo apt-get install texlive-full
下载pandoc安装
https://github.com/jgm/pandoc/releases/
```
mac系统安装方法
``` mac
下载mactex安装
https://www.tug.org/mactex/mactex-download.html
```
## 安装字体
本项目使用免费可商用的阿里巴巴惠普字体`Alibaba PuHuiTi 3.0`
```
https://www.alibabafonts.com
```
# 2、第一次运行项目
安装依赖
```
pipenv install
```
运行虚拟化环境
```
pipenv shell
```
前往PeTeReport主目录
```
cd app/
```
创建数据库
```
python manage.py migrate
```
更新数据库语句
```
python manage.py makemigrations
```
导入CWE和OWASP数据
```
python manage.py loaddata config/cwe-list.json
python manage.py loaddata config/owasp-list.json
```

# 3、平时运行项目
```
pipenv shell
cd app/
python manage.py runserver --insecure
```
项目运行在`http://127.0.0.1:8000/`
用户名：`admin`
密码：`P3t3r3p0rt`

# 4、汉化
后期如果需要调整汉化，可以参考以下步骤
```
cd app/
rm -rf locales/zh_Hans/LC_MESSAGES/django.mo
```
对locales/zh_Hans/django.po文件进行汉化后，执行
```
django-admin compilemessages
```
生成locales/zh_Hans/django.mo文件即完成


# 发布部署
1、安装docker
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
2、设置代理
``` dockerfile
http_proxy=http://192.168.1.14:7890 \
https_proxy=http://192.168.1.14:7890 \
```
3、编译docker镜像
```
# amd64
docker build -t petereport-zh:local -f ./Dockerfile . --build-arg TARGETARCH=amd64
# 增加代理
docker build -t petereport-zh:local -f ./Dockerfile . --build-arg TARGETARCH=amd64 --build-arg HTTP_PROXY="http://192.168.100.216:7890" --build-arg HTTPS_PROXY="http://192.168.100.216:7890"
```
4、测试本地镜像
```
docker stop petereport-zh
docker rm petereport-zh
docker run -d --name petereport-zh -p 8000:8000 petereport-zh:local
```
5、发布镜像
```
docker tag petereport-zh:local feishi1/petereport-zh:1.0.0
docker push feishi1/petereport-zh:1.0.0
```
6、运行线上镜像
```
docker run -d --name petereport-zh -p 8000:8000 feishi1/petereport-zh:1.0.0
```
