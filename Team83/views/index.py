from flask import render_template, Blueprint, request
import pymysql
import numpy as np
from os import environ
indexbp = Blueprint('index', __name__)

@indexbp.route('/', methods=['GET', 'POST'])
def index():
    db = pymysql.connect(host=environ.get("MYSQL_HOST"), port=3306, user="admin", password=environ.get("MYSQL_PASSWORD"), db="team83db")
    genres = ['rock/alternative', 'hip/hop', 'pop', 'party']
    moods = ['cheerful', 'sad', 'energetic', 'happy']
    with db.cursor() as cursor:
        # Read a single record
        sql = "SELECT DISTINCT mood from team83db.track_mood"
        cursor.execute(sql)
        moods = cursor.fetchall()
        moods = [list(i)[0] for i in moods]
    with db.cursor() as cursor:
        # Read a single record
        sql = "SELECT DISTINCT genre from team83db.tracks_with_genre"
        cursor.execute(sql)
        genres = cursor.fetchall()
        genres = [list(i)[0] for i in genres]
    print (request)
    print (request.args)
    genre_arg = ''
    mood_arg =''
    if len(request.args) != 0:
        print("here")
        genre_arg = request.args.get('genres') 
        mood_arg = request.args.get('moods')
        print (genre_arg, mood_arg)
        if len(genre_arg) > 0 and len(mood_arg) > 0:
        #if "genres" in request.form and "moods" in request.form and request.form["genres"] != "Genre" and request.form["moods"] != "Mood":
            with db.cursor() as cursor:
                sql = "SELECT DISTINCT c.track_name, d.* FROM team83db.tracks_with_genre a INNER JOIN team83db.track_mood b on a.id = b.track_id INNER JOIN team83db.track_information c on a.id = c.id INNER JOIN team83db.track_features d on a.id = d.id where genre = \'" + genre_arg + "\' and mood = \'" + mood_arg + "\'" + "order by RAND() LIMIT 50"
                cursor.execute(sql)
                data = list(cursor.fetchall())
                print(len(data))
                final_data = get_similarity_score(data)
                print(len(final_data))

                #return render_template('index.html', genres=genres, moods=moods, data = final_data, features = clean_features(data), tracks=get_tracks(data))
                return render_template('index.html', genres=genre_arg, moods=mood_arg, data = final_data, features = clean_features(data), tracks=get_tracks(data, genre_arg, mood_arg))
            #print(request.form['genres'], request.form['moods'])
        return render_template('index.html', genres=genre_arg, moods=mood_arg, data="")
    else:
        return render_template('index.html', genres=genre_arg, moods=mood_arg, data="")

def get_tracks(data, genre, mood):
    return [f"Here is your curated playlist for the Genre: {genre} and the Mood: {mood}", ""] + [row[0] for row in data]
def get_similarity_score(data):
    final_data = []
    for song_1_index in range(len(data)):
        song_data = []
        for song_2_index in range(song_1_index, len(data)):
            song_1 = data[song_1_index]
            song_2 = data[song_2_index]
            # Check song 1 id is not same as song 2 id
            if song_1[1] != song_2[1]:
                song_1_features = np.array(song_1[2:13])
                song_1_features = np.round(song_1_features, 2)
                song_2_features = np.array(song_2[2:13])
                song_2_features = np.round(song_2_features, 2)
                distance = np.linalg.norm(song_1_features - song_2_features)
                song_data.append([song_1[1], song_2[1], distance])
                #final_data.append([song_1[1], song_2[1], distance])
        song_data.sort(key=lambda x: x[2], reverse=True)    
        final_data += song_data[0:1]
    final_data.sort(key=lambda x: x[2], reverse=True)
    return final_data
def clean_features(features):
    return [list(row) for row in features]

@indexbp.route('/help') 
def help():
    return render_template('help.html')


@indexbp.route('/about')
def about():
    return render_template('about.html')

@indexbp.route('/rate')
def rate():
    return render_template('rate.html')