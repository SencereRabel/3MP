from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/auth/login", methods=["POST"])
def login():
    data = request.get_json()

    return {
        "error": None,
        "data": {
            "sessionToken": "abc123xyz",
            "message": "User Signed In Successfully."
        }
    }

if __name__ == "__main__":
    app.run(debug=True)

