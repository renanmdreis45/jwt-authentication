FROM postgres:15.1-alpine

LABEL author="renan"
LABEL description="Postgres jwt auth"
LABEL version="1.0"

COPY *.sql /docker-entrypoint-initdb.d/
