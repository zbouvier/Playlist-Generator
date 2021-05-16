from flask import render_template, Blueprint, current_app

errorbp = Blueprint('error', __name__)


@current_app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404


@current_app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500
