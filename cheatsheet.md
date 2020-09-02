# Docker Command Cheatsheet

## Running Containers
`docker run [image_name]` - Runs a container based on the given image_name. Fetches the image_name from Docker Hub if not found locally. (Equivalent to `docker create` + `docker start -a`.)

`docker run [image_name] [alternate cmd]` - Runs a container but overrides the default starting command with the alternate cmd.

`docker run -p [local port]:[container_port] [image_name]` - Runs a container, mapping incoming requests from a local port to a container port

## Stopping Containers
`docker stop [container_id]` - Sends a SIGTERM to the running process, gracefully shutting it down. If the process doesn't stop after 10 seconds, `docker kill` is sent.

`docker kill [container_id]` - Sends a SIGKILL to the running process.

## Doing Stuff In Containers
`docker exec -it [container_id] [cmd]` - Executes an additional command in a running container.

`docker exec -it [container_id] sh` - Run an interactive shell in the container.

## Listing Containers
`docker ps` - Lists all running containers.

`docker ps --all` - Lists all containers that have ever been run on the machine.

## Debugging
`docker logs [container_id]` - Prints out all of the logs from a running or stopped container.

`docker run [image_name] sh` - Runs a container based on the given image_name, but overrides the primary process with a shell. Useful for "poking around".

## Removing Containers
`docker system prune` - Removes all stopped containers AND the build cache.

---

## Making Images
In a directory with a Dockerfile:

`docker build .` - Builds an image using the instructions in the Dockerfile.

`docker build -t [my_docker_id]/[project_name]:[version] .` - Build and tag an image with a human-friendly name. `version` can be `latest`.

