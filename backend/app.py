from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

@app.route('/')
def index():
    return "Backend running!"

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    # Temporary echo chatbot response
    response = f"You said: {user_message}"
    return jsonify({'reply': response})

if __name__ == '__main__':
    app.run(debug=True)
