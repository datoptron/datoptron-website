.PHONY: serve up down build logs clean reclaim

# Start the site locally with live-reload at http://localhost:4000
serve up:
	docker compose up

# Stop and remove the containers
down:
	docker compose down

# Build the static site once into _site/ (no server)
build:
	docker compose run --rm jekyll jekyll build

# Tail the container logs
logs:
	docker compose logs -f

# Remove containers + cached gem volume (fresh start)
clean:
	docker compose down -v

# Full cleanup: containers, gem cache, AND the Docker image (reclaims the most space)
reclaim:
	docker compose down -v
	docker rmi jekyll/jekyll:4.2.2
