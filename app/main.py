from flask import Flask, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_HOST'] = 'localhost'
app.config['MONGO_PORT'] = 27017
app.config['MONGO_DBNAME'] = 'hsudb'
mongo = PyMongo(app)

from api import api_blueprint
app.register_blueprint(api_blueprint)

@app.route('/')
def main():
    return render_template('main/index.html')


if __name__ == '__main__':
    app.run(debug=True)