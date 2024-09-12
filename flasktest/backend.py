from flask import Flask, render_template, request
import requests

app = Flask(__name__)

NEWS_API_KEY = '13d64917f72c48b89af2eac008e56fe2'
NEWS_API_BASE_URL = 'https://newsapi.org/v2/'


def fetch_news(endpoint, query_params):
    """ Fetch news to be rendered"""
    query_params['apiKey'] = NEWS_API_KEY
    response = requests.get(NEWS_API_BASE_URL + endpoint, params=query_params)
    data = response.json()

    if response.status_code == 200 and data['status'] == 'ok':
        return data['articles'], data['totalResults']
    else:
        return [], 0


@app.route('/about')
def about():
    """About page"""
    return render_template("about.html")


@app.route('/')
def landingpage():
    """Landing Page"""
    return render_template("landingpage.html")


@app.route('/home')
def index():
    """
    Home route that displays cybersecurity news in two categories: headlines and recent news.
    Supports pagination via 'page' query parameter.
    """
    # Get the page number from the query parameter, default is 1
    page = int(request.args.get('page', 1))
    page_size = 20

    # Fetch top cybersecurity headlines
    cyber_headlines, headlines_count = fetch_news('top-headlines', {
        'q': 'cybersecurity',
        'language': 'en',
        'page': page,
        'pageSize': page_size
    })

    # Fetch most recent cybersecurity news articles
    recent_cyber_news, recent_news_count = fetch_news('everything', {
        'q': 'cybersecurity',
        'sortBy': 'publishedAt',
        'language': 'en',
        'page': page,
        'pageSize': page_size
    })

    return render_template('index.html', 
                           headlines=cyber_headlines, 
                           recent_news=recent_cyber_news, 
                           headlines_count=headlines_count, 
                           recent_news_count=recent_news_count,
                           page=page,
                           page_size=page_size)


if __name__ == '__main__':
    app.run(debug=True)
