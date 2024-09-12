""" Flask TechNews App """
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


@app.route("/")
def landingpage():
    """Landing Page"""
    return render_template("landingpage.html")


@app.route("/about")
def about():
    """ About Page"""
    return render_template('about.html')


@app.route("/home")
def home():
    """
    Home route displays the news in two categories. Headlines
    and recent news. 
    Also uses a pagination via query parameter
    """
    # Gets page number from query parameter
    page = int(request.args.get('page', 1))
    page_size = 20
    
    # Fetching news
    cyber_headlines, headlines_count = fetch_news('top-headlines', {
        'q': 'cybersecurity',
        'language': 'en',
        'page': page,
        'pageSize': page_size
    })

    # Fetch most recent cybersecurity articles
    recent_cyber_news, recent_news_count = fetch_news('everything', {
        'q': 'cybersecurity',
        'sortBy': 'publishedAt',
        'language': 'en',
        'page': page,
        'pageSize': page_size
    })

    return render_template('home.html', 
                           headlines=cyber_headlines, 
                           recent_news=recent_cyber_news, 
                           headlines_count=headlines_count, 
                           recent_news_count=recent_news_count,
                           page=page,
                           page_size=page_size)


@app.route("/search")
def search():
    """
    Search route that fetches and displays search results based on a query.
    """
    query = request.args.get('q', '')  # Retrieve the search query from the URL parameter
    page = int(request.args.get('page', 1))  # Retrieve the page number from the URL parameter
    page_size = 20

    if query:  # Only search if a query is provided
        search_results, total_results = fetch_news('everything', {
            'q': query,
            'language': 'en',
            'page': page,
            'pageSize': page_size
        })
    else:
        search_results, total_results = [], 0

    return render_template('search_results.html', 
                           search_results=search_results, 
                           query=query,
                           page=page,
                           total_results=total_results)


if __name__ == '__main__':
    app.run(debug=True)
