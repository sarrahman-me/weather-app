import requests
import os
from flask import Blueprint, jsonify, request
from dotenv import load_dotenv

load_dotenv()

realtime_weather_bp = Blueprint("realtime-weather", __name__)

urlApi = "https://weatherapi-com.p.rapidapi.com/current.json"

headers = {
    "X-RapidAPI-Key": os.environ.get('API_KEY_RAPIDAPI'),
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
}


@realtime_weather_bp.route('/realtime-weather', methods=['GET'])
def get_realtime_weather():
    ipUser = request.remote_addr
    response = requests.get(urlApi, headers=headers,
                            params={"q": "36.85.36.179"})

    if response.status_code == 200:
        return jsonify({
            "data": response.json(),
            "success": True,
            "status_code": 200
        }), 200
    else:
        return jsonify({
            "data": response.json(),
            "success": False,
            "status_code": response.status_code
        }), 400
