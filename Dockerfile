FROM python:3.10.6

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./project /app
COPY ./config /config

WORKDIR /app

RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]
