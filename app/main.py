from flask import Flask, render_template

app = Flask(__name__)

from api import api_blueprint
app.register_blueprint(api_blueprint)

@app.route('/')
def main():
    return render_template('main/index.html')


if __name__ == '__main__':
    app.run(debug=True)