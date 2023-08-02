from flask import Flask, jsonify
from flask_cors import CORS
from controllers.realtimeWeather import realtime_weather_bp

app = Flask(__name__)

CORS(app)


@app.route('/', methods=['GET'])
def welcome():
    return jsonify({
        "data": 200,
        "message": "welcome to my api",
        "success": True,
        "status_code": 200
    }), 200


app.register_blueprint(realtime_weather_bp)


if __name__ == "__main__":
    app.run(debug=True)
