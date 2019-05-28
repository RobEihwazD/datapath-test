from mongoengine import *

class InstalledApplication(Document):
    path = StringField()
    name = StringField()


class RemoteLaunchConfigItem(Document):
    target_application = StringField()
    colour = StringField()
    alias = StringField()

def init_db(uri):
    