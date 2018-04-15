from flask import Flask, render_template, request, jsonify
from bson.objectid import ObjectId
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
    records = []
    for rec in mongo2.db.results.find():
        try:
            r = {
                'pntFirstName': rec['pntFirstName'],
                'pntLastName': rec['pntLastName'],
                'province': rec['hospitalProvince'],
                'surveyId': str(rec['_id']),
                'updatedAt': rec['updatedAt']
                }
        except KeyError:
            continue
        records.append(r)
    obj_id = request.args.get('objId', None)
    if not obj_id:  # new record
        return render_template('main/index.html', data={}, records=records)
    else:
        rec = mongo2.db.results.find_one({'_id': ObjectId(obj_id)})
        rec['surveyId'] = str(rec['_id'])
        rec['_id'] = str(rec['_id'])
        return render_template('main/index.html', data=rec, records=records)


if __name__ == '__main__':
    app.run(debug=True)