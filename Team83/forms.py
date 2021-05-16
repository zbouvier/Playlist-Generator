from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Regexp, Length, ValidationError

from Team83.db import get_db

# AUTH FORMs


# class LoginForm(FlaskForm):
#     username = StringField('username', validators=[DataRequired()])
#     password = PasswordField('password', validators=[DataRequired()])
#     submit = SubmitField('Login')


# class RegisterForm(FlaskForm):
#     username = StringField('username', validators=[DataRequired(), Regexp(r'^[\w]+$'), Length(min=3, max=25)])
#     email = StringField('email', validators=[DataRequired(), Email()])
#     password = PasswordField('password', validators=[DataRequired(), Length(min=12)])
#     password2 = PasswordField('confirm password', validators=[DataRequired(), EqualTo('password', message='Passwords must match')])
#     submit = SubmitField('Register')

#     def validate_username(self, username):
#         db = get_db()
#         cursor = db.cursor()
#         cursor.execute("SELECT id FROM member WHERE username = %s LIMIT 1", (username.data,))
#         userdetails = cursor.fetchone()

#         if userdetails is not None:
#             raise ValidationError('Please use a different username.')

#     def validate_email(self, email):
#         db = get_db()
#         cursor = db.cursor()
#         cursor.execute("SELECT id FROM member WHERE email = %s LIMIT 1", (email.data,))
#         userdetails = cursor.fetchone()

#         if userdetails is not None:
#             raise ValidationError('Please use a different email address.')

# FEATURE LIST FORMs


class ArmyListForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=1, max=100)])
    game = StringField('game', validators=[DataRequired(), Length(min=3, max=100)])
    faction = StringField('faction', validators=[Length(max=100)])
    points = StringField('points', validators=[Length(max=8)])
    list = TextAreaField('army list')
    tags = StringField('tags', validators=[Length(max=250)])
    private = BooleanField('private')
    submit = SubmitField('Save')


# class RecipeForm(FlaskForm):
#     name = StringField('name', validators=[DataRequired(), Length(min=1, max=100)])
#     notes = TextAreaField('notes')
#     tags = StringField('tags', validators=[Length(max=250)])
#     private = BooleanField('private')
#     submit = SubmitField('Save')