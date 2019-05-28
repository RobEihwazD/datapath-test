import sys
import os
from werkzeug.serving import run_simple
from werkzeug.wsgi import DispatcherMiddleware



from app import create_app

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: ' + sys.argv[0] + ' <config>')
        sys.exit()
    config_name = sys.argv[1]
    print(' at runserver config_name ', config_name)
    app = create_app(config_name)
    HOST = os.environ.get('SERVER_HOST', '127.0.0.1')
    try:
        PORT = int(app.config['PORT_NUMBER'])
    except ValueError:
        PORT = 8683

    parent_app = DispatcherMiddleware(app, {'/': app})
    run_simple(HOST, PORT, parent_app, threaded=True, use_reloader=True, use_debugger=True)
   

