from flask import Flask, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_HOST'] = 'localhost'
app.config['MONGO_PORT'] = 27017
app.config['MONGO_DBNAME'] = 'hsudb'
mongo = PyMongo(app)

app.config['MONGO2_HOST'] = 'localhost'
app.config['MONGO2_PORT'] = 27017
app.config['MONGO2_DBNAME'] = 'survey_dementia042018'
mongo2 = PyMongo(app, config_prefix='MONGO2')

from api import api_blueprint
app.register_blueprint(api_blueprint)

@app.route('/')
def main():
    return render_template('main/index.html')


if __name__ == '__main__':
    app.run(debug=True)