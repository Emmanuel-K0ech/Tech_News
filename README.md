# TechNews

TechNews is a web application that allows users to search and browse the latest news articles related to Cybersecurity, using the News API. The application provides a simple interface to filter news by keywords and view results in a paginated format. The news articles are displayed with titles, descriptions, and images, along with links to the full articles.

## Table of Contents
- [TechNews](#technews)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [API Reference](#api-reference)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Responsive Design**: Built with Bootstrap to provide a clean and responsive UI.
- **Search Functionality**: Users can search for news articles by entering keywords.
- **Pagination**: Supports pagination for browsing through multiple pages of news articles.
- **Dynamic Content Loading**: Fetches and displays news articles dynamically using JavaScript.
- **Article Cards**: Displays articles in card format with title, image, and description.
- **External Links**: Links to the full articles on the original news websites.

## Demo

![TechNews Demo](/flaskTech/static/WelcomePage.png)  
![TechNews Demo](/flaskTech/static/TechNews-Application.png) 

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Emmanuel-K0ech/Tech_News.git
    cd technews
    ```

2. **Open the application**:
   Simply open the `home.html` file in your web browser.

3. **Set Up API Key**:
   - Replace `YOUR_API_KEY_HERE` in the JavaScript code with your News API key.

## Usage

1. **Search for News Articles**: Enter a keyword in the search bar and press the "Search" button to fetch news related to that keyword.
2. **Navigate Between Pages**: Use the "Previous Page" and "Next Page" buttons to navigate through the pages of news articles.

## Technologies Used

- **HTML5**: Markup language for structuring the web page.
- **CSS3**: Styling of the web page using Bootstrap 5.
- **JavaScript (ES6+)**: For dynamic content loading and API integration.
- **Bootstrap 5**: Frontend framework for responsive design and components.
- **News API**: Provides access to news articles from various sources.

## API Reference

The app uses the [News API](https://newsapi.org/) to fetch news articles.

- **Endpoint**: `https://newsapi.org/v2/everything`
- **Parameters**:
  - `q` (required): Keywords to search for in the article title and content.
  - `from` (optional): Start date for the articles to be fetched.
  - `language` (optional): Language of the articles (e.g., `en` for English).
  - `pageSize` (optional): Number of articles to return per page.
  - `page` (optional): The page number to return.
  - `sortBy` (optional): The order to sort articles (e.g., `popularity`).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
