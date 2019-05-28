import os

from flask import Flask, render_template,request,jsonify, redirect,url_for , current_app# For flask implementation
#from bson import ObjectId # For ObjectId to work
import pymongo
from bson.json_util import dumps, loads 
from bson.objectid import ObjectId
import connexion
from connexion.resolver import RestyResolver
from .config import APP_CONFIG 
import requests

global mongo 
global db
mongo = pymongo.MongoClient('mongodb://127.0.0.1:27017')
print( ' mongo', mongo)
db = mongo['datapath']
availableApps = db['AvailableApps']
remoteConfigs = db['RemoteLaunchConfigItem']


#@app.route('/remoteConfigs', methods=['GET'])
def get_all_remote_app_configs():
  print(' mongo ', mongo)
  remoteConfigs = mongo.db.remoteConfigs
  output = []
  for conf in remoteConfigs.find():
    print(' conf ', conf)
    output.append({'id':str(conf['_id']), 'targetApplication':conf['targetApplication'], 'colour':conf['colour'], 'alias':conf['alias'] })
  return jsonify({'result' : output})

#@app.route('/remoteConfigs', methods=['POST'])
def create_remote_launch_config_item():
  remoteConfig = mongo.db.remoteConfigs
  json = request.json
  insert =  {'targetApplication':json['targetApplication'], 'colour':json['colour'], 'alias':json['alias']}
  result = remoteConfig.insert(insert)
  print(' result', result)
  return jsonify({'result' : {'id': str(result)} })


#@app.route('/remoteConfig/<id>', methods=['GET'], )
def get_remote_launch_config_item_by_id(id):
  result = [i for i in remoteConfigs.find_one_or_404({"_id": ObjectId(id)})][0]
  print(' result ', result)
  if result:
    output = {'id':str(result['_id']), 'targetApplication':result['target_application'], 'colour':result['colour'], 'alias':result['alias']}
  else:
    output = "No such name"
  return jsonify({'result' : output})

#@app.route('/remoteConfig/<id>', methods=['PUT'])
def update_remote_launch_config_item(id):
  
  return jsonify({'result' : output})

#@app.route('/remoteConfig/<id>', methods=['DELETE'])
def delete_remote_launch_config_item(id):
  print(' delete id ', id)
  remoteConfig = mongo.db.remoteConfigs
  result = remoteConfig.delete_one({'_id':ObjectId(id)}) 
  return jsonify({'result' : {'id': str(result)} })

#@app.route('/applications', methods=['GET'])
def get_available_applications():
  
  data = availableApps
  output = []
  for conf in data.find():
 
    output.append({'id':str(conf['_id']), 'name':conf['name'], 'path':conf['path']})
  return jsonify({'result' : output})
  
connex_app = connexion.App(__name__)
app = connex_app.app

def create_app(config_name):
  config = APP_CONFIG[config_name]
  availableApps.delete_many({})
  app.config.from_object(APP_CONFIG[config_name])
  mongo.db.remoteConfigs.drop()
  installedAppList = [
        { "name": "notepad.exe", "path": "~/"},
        { "name": "wordpad.exe", "path": "~/"},
        { "name": "paint3d.exe", "path": "~/"},
    ]
  res = availableApps.insert(installedAppList)
  connex_app.add_api('swagger/swagger.yaml')
  
  return app



@app.route('/favicon.ico')
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.after_request
def apply_response_headers(response):
    response.headers['X-Robots-Tag'] = 'noindex, nofollow'
    response.headers['x-xss-protection'] = '1; mode=block'
    response.headers['x-content-type-options'] = 'nosniff'
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'authorization, cache-control, content-type'
    response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT'
    response.headers['P3P'] = 'CP="This_is_not_a_privacy_policy"'
    response.headers['Vary'] = 'Cookie'
    response.headers['strict-transport-security'] = 'max-age=1; includeSubDomains'
    return response
    

