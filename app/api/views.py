# -*- coding: utf-8 -*-
from flask import jsonify
from . import api_blueprint as api


@api.route('/hospitals')
def get_hospitals():
    hospitals = [
        {
            'id': 1,
            'name': u'เจริญกรุงประชารักษ์'
        },
        {
            'id': 2,
            'name': u'บางประกอก 9'
        },
    ]
    return jsonify(hospitals)