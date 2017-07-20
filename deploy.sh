#!/bin/bash

export KIBANA_PATH="/var/www/kibana/kibana-5.4.3-linux-x86_64/";
export RDSDK_PATH="/var/www/plugins/sdk/";

npm install
if [ -d "$KIBANA_PATH/plugins/sdk" ]; then $KIBANA_PATH/bin/kibana-plugin remove sdk; fi;
if [ -d "/tmp/kibana/sdk" ]; then rm -rf /tmp/kibana/*; fi;
mkdir -p /tmp/kibana/sdk;
cd /tmp/kibana; cp -r ${RDSDK_PATH}* /tmp/kibana/sdk/;
if [ -f "/tmp/sdk.zip" ]; then rm /tmp/sdk.zip; fi;
cd /tmp; zip -r sdk.zip ./kibana/sdk/* ; cd ..;
$KIBANA_PATH/bin/kibana-plugin install file:///tmp/sdk.zip;
cd $KIBANA_PATH;chmod -R 777 ./;
killall node
$KIBANA_PATH/bin/kibana;
