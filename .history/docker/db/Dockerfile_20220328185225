FROM postgres:12-alpine

# copy initialization script over to initialize database
COPY ./init.sql /docker-entrypoint-initdb.d/init.sql

CMD ["postgres", "-c", "log_statement=all", "-c", "log_connections=true", "-c", "log_destination=stderr"]