# -*- coding: utf-8 -*-
from flask import jsonify
from . import api_blueprint as api
from ..main import mongo


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
