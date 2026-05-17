from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Renders the index.html file from the 'templates' folder
    return render_template('index.html')

@app.route('/orbit-link')
def orbit_link():
    # Renders the orbit-link.html file from the 'templates' folder
    return render_template('orbit-link.html')

if __name__ == '__main__':
    # Run the app in debug mode on port 5000
    app.run(debug=True, port=5000)