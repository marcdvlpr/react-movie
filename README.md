<h1 align="center">React Movie</h1>

<div align="center">
	<img src="https://user-images.githubusercontent.com/25856076/128391353-15694b51-490e-49a4-88b1-b3cec01582d0.png">
</div>

> React Movie is a website using The Movie Database API to display related information about movies and their trailers 🎥🍿

## 🛠️ Built With

- React
- Styled Components
- React Modal Video
- Node.js
- Express
- MongoDB
- The Movie Database API
- Docker

## 🚀 Getting Started

### Prerequisites

- Docker
- Node.js

### Installation

1. Get a free API Key at [TMDB](https://www.themoviedb.org)

2. Clone the repository

```sh
$ git clone https://github.com/mdossantosdev/react-movie.git
```

3. Go into react-movie

```sh
$ cd react-movie
```

4. Copy the `.env.sample` file to `.env` and fill it

```sh
$ cp .env.sample .env
```

```
API_URL=https://api.themoviedb.org/3/
API_KEY=your_tmdb_api_key

# Optional
DB_CLUSTER=your_db_cluster
DB_NAME=your_db_name
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret
```

5. Run the Docker containers

```sh
$ docker-compose up
```

6. The application should now be running at http://localhost:3000

## © License

This project is licensed under the [MIT License](LICENSE).
