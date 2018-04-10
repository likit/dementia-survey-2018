# -*- coding: utf-8 -*-
from datetime import datetime
from bson.objectid import ObjectId
from flask import jsonify, request
from . import api_blueprint as api
from ..main import mongo, mongo2


@api.route('/v1/hospitals/<hos_id>')
@api.route('/v1/hospitals/')
def get_hospitals(hos_id=None):
    if not hos_id:
        hospitals = []
        for hos in mongo.db.health_care_unit.find():
            hos['_id'] = str(hos['_id'])
            hospitals.append(hos)
        return jsonify(hospitals)
    else:
        hos = mongo.db.health_care_unit.find_one({'unit_id_short': hos_id})
        hos['_id'] = str(hos['_id'])
        return jsonify([hos])


@api.route('/v1/results/', methods=['POST'])
def save_result():
    data = request.get_json()
    if not data.get('surveyId', None):
        data['addedAt'] = datetime.now()
        data['updatedAt'] = datetime.now()
        inserted_id = mongo2.db.results.insert_one(data).inserted_id
        return jsonify({'response': str(inserted_id)})
    else:
        record = mongo2.db.results.find_one({'_id': ObjectId(data['surveyId'])})
        for k in record.keys():
            if k in data:
                record[k] = data[k]
        record['updatedAt'] = datetime.now()
        mongo2.db.results.save(record)
        return jsonify({'response': data['surveyId']})
