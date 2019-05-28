import os
import ssl
class Config(object):
    """
    Common configurations
    """
    SECRET_KEY = 'jhgsdlf7pwge2-989hdpasihduipashpiauhspixughaisgdq89usd]J'

    TRAP_HTTP_EXCEPTIONS = True
    
    APP_NAME = 'Datapath'
    AZURE_API = 'test2'
    APPLICATION_ROOT = '/'
    JSONIFY_PRETTYPRINT_REGULAR = True
    PORT_NUMBER =  8682

    SESSION_TYPE = 'filesystem'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = False
    SESSION_COOKIE_SECURE = False
    SESSION_COOKIE_PATH = '/'
    SESSION_COOKIE_NAME = 'session_' + APP_NAME
    SESSION_FILE_DIR = 'flask_session_' + APP_NAME

    CACHE_TYPE = 'filesystem'
    CACHE_DIR = 'flask_cache_' + APP_NAME
    CACHE_THRESHOLD = 500

    STATS_SOCK = '/tmp/stats_' + APP_NAME + '.sock'

    COFLASK_SERVER_NAME = 'localhost:8888'
    FLASK_DEBUG = True  # Do not use debug mode in production

    MONGOALCHEMY_URI = 'mongodb://127.0.0.1:27017'
    MONGOALCHEMY_DATABASE = "datapath"
    MONGOALCHEMY_AVAILABLE_APPS_COLLECTION = 'AvailableApps'
    MONGOALCHEMY_REMOTE_CONFIG_COLLECTION = 'RemoteLaunchConfigItem'

    installedAppList = [
        { "name": "notepad.exe", "path": "~/"},
        { "name": "wordpad.exe", "path": "~/"},
        { "name": "paint3d.exe", "path": "~/"},
    ]

  



  

class DevelopmentConfig(Config):
    """
    Development configurations
    """
    DEBUG = True


 
 

class TestingConfig(Config):
    """
    Test server configurations
    """
    DEBUG = True
   


class ProductionConfig(Config):
    """
    Production configurations
    """
    DEBUG = False

APP_CONFIG = {
    'development': DevelopmentConfig,
    'testing' : TestingConfig,
    'production': ProductionConfig
}