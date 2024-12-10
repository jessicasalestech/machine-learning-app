from flask import Flask, request, jsonify, render_template
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import numpy as np

app = Flask(__name__)

vectorizer = CountVectorizer()
classifier = MultinomialNB()

texts = ["I love this product", "This is the worst service ever", "I am so happy", "I hate this"]
labels = [1, 0, 1, 0]

X = vectorizer.fit_transform(texts)
classifier.fit(X, labels)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data['text']
    X_new = vectorizer.transform([text])
    prediction = classifier.predict(X_new)
    sentiment = "Positivo" if prediction[0] == 1 else "Negativo"
    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
