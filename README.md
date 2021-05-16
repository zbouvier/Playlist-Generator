# Adding to Team83.com

## Project Structure

Team83 is a Flask application with the [recommended](https://flask.palletsprojects.com/en/1.1.x/patterns/packages/) folder layout for larger applications, coupled with the [application factory](https://flask.palletsprojects.com/en/1.1.x/patterns/appfactories/) pattern from the docs

**/  
/Team83  
/Team83/static  
/Team83/templates  
/Team83/views**

### / root level folder

*.venv*: There is where the .venv folder for Python should be (see [setup section](#Adding-a-new-view-blueprint) below). This should be on your local machine, not actually in the repo.

*Procfile*: This is for [heroku](https://devcenter.heroku.com/articles/getting-started-with-python#define-a-procfile) deployments.

*README.md*: This file, ;)

*requirements.txt*: The output of `pip freeze` for Team83.

*wsgi.py*: A minimum file necessary for instantiating the app object.

*Team83 folder*: Where our actual application module lives.


### /Team83

*\_\_init\_\_.py*: Our Team83 module workhorse file. This is where the `create_app` application factory exists and were you will hook in any extensions and additional blueprints.

*config.py*: Config settings go here like `DATABASE_URL` and such.

*db.py*: The database file that's main purpose is to provide `get_db` to any page that needs database access.

*forms.py*: Where all forms are defined as classes inheriting from WTForms and where you can turn on/off validation schemes, add/change fields, etc.


### /Team83/static

This is where we keep all css, js, images and all other static files.  It has sub-folders for each of these types of assets and don't need to be explained here in this README.

### /Team83/templates

This is where all templates will live. They are using [Jinja](https://jinja.palletsprojects.com/en/2.10.x/) syntax.  Most will inherit from base.html and extend them with their own blocks. Examples will be provided below in this README, but please refer to [the full documentation](https://jinja.palletsprojects.com/en/2.10.x/) for specifics.

### /Team83/views

Here is where our views, that use the templates and other resources like `get_db` and such live. Each view will be a [Blueprint](http://exploreflask.com/en/latest/blueprints.html) that sets up routes, corresponding logic, and associated views.  These then get registered in Team83's *\_\_init\_\_.py* file.

A basic view would look like this:

```python
from flask import render_template, Blueprint

indexbp = Blueprint('index', __name__)


@indexbp.route('/')
def index():
    return render_template('index.html')
```

Where *index* in the example is your view name like *auth* or *blog* or *tools* or whatever grouping of views you want to create.

## Adding a new view blueprint

In order to expand Team83 and add new views, sections, tools and so forth you'll first want to set up a \[*nameofview*\].py file in the *views* folder following this rough structure:

```python
from flask import render_template, Blueprint

nameofviewherebp = Blueprint('nameofviewhere', __name__)


@nameofviewherebp.route('/')
def nameofviewhere():
    return render_template('nameofviewhere.html')
```

And then you want to register the blueprint in Team83's file similar to this example showing the *index* and *auth* views being added:

```python
from Team83.views.index import indexbp
from Team83.views.auth import authbp
app.register_blueprint(indexbp, url_prefix='/')
app.register_blueprint(authbp, url_prefix='/auth')
```

Please refer to the *index.py* or *auth.py* views to see additional things you can do. For instance: use `get_db()` to connect to the database and create/read/update/delete data. Or use other Python or Flask imports for additional functionality.

### Useful environmental variables

It is helpful to edit `env.sample` and set your Flask environmental variables there for local development.

In particular, edit the DATABASE_URL in a copy of the file (I named mine `env.dev`) and run `source env.dev` to set those env variables.

This is helpful to enable debug mode, set target of flask run, set the db connection info, and so forth.

Not necessary in production.

NOTE: Do not commit your `env.*` file. env.dev is in .gitignore, but don't be silly and commit your local one.

### Running the Site
`cd /team83`

`pip install -r requirements.txt` Note: You may want to create a virtual env to not clutter your environment

`flask run`

Then all you need to do is follow the link it gives you probably `127.0.0.1:5000`
