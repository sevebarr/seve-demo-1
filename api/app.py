from flask import Flask, request, jsonify
from flask_cors import CORS

from solver import get_word_hints, get_valid_words

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


@app.route("/")
def home():
    letters = request.args.get("letters")
    print(letters)
    words = get_valid_words(letters)
    hints = get_word_hints(words)

    data = {
        "words": words,
        "hints": hints,
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run()
