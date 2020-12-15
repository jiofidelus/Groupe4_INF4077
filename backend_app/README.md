# backend_app build with Django 3.1.4

    In the project directory (Groupe4_INF4077)

## create a virtual environment

    $ virtualenv env -p python3

## activate the virtual environment

    $ source env/bin/activate

## install dependencies

    $ pip3 install -r requirements.txt

## create a empty "cholera_epidemie" database

    $ createdb -T template0 cholera_epidemie

## create the "cholera_epidemie" database user with password 'INF4077'

    $ createuser -W cholera_epidemie_user

## import the "cholera_epidemie.psql" database file

    $ psql cholera_epidemie < cholera_epidemie.psql

## start run the django server

    $ python3 manage.py runserver
