#!/usr/bin/env bash

projectName='ManageApi' #项目名称

projectDir='/var/www/test/'$projectName  #项目路径
packageDir='/var/www/test/temp/'$projectName    #项目第三方包路径
packageJson=$packageDir'/package.json'  #json包配置文件

if [ ! -d "$projectDir" ]
then
    echo "项目'"$projectDir"'不存在"
    exit
fi

if [ ! -d "$packageDir" ]
then
    mkdir -p $packageDir
    if [ $? -ne 0 ]
    then
        echo "创建目录'"$packageDir"'失败"
        exit
    fi
fi

cd $projectDir
trueProDir=`pwd -P`  #软连接指向的真实项目地址

ln -s $projectDir'/package.json' $packageJson
cd $packageDir
npm install

ln -s $packageDir'/node_modules' $trueProDir'/node_module'
