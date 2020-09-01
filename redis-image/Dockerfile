# Use an existing docker image from the Docker Hub as a base
FROM alpine

# Create (then discard) a container using the previous
# step's image to download and install this dependency
# Also take a file system snapshot and save as an image for
# use in any following steps
RUN apk add --update redis

# Tell the image what to do when it starts
# as a container
CMD ["redis-server"]