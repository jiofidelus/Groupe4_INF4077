# backend_app build with Django 3.1.4

In the project directory (Groupe4_INF4077), run:

## source env/bin/activate

This will activate the virtual environment to run the backend_app. Then move to
"backend_app" directory and run:

### createdb -T template0 cholera_epidemie

create a empty "cholera_epidemie" database

#### createuser -W cholera_epidemie_user

create the "cholera_epidemie" database user with password 'INF4077'

##### psql cholera_epidemie < cholera_epidemie.psql

import the "cholera_epidemie.psql" database file

###### python3 manage.py runserver

To start run the django server
