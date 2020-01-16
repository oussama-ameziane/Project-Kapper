from flask import Flask, request, jsonify
import db

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/afspraak', methods=['POST'])
def afspraak_invoegen():
    data = request.json or request.form
    
    print(data)

    db.execute_sql("INSERT INTO afspraak(datum, tijdstip, kapper, firstname, lastname, email, behandeling, gender) VALUES ('{}', '{}','{}', '{}', '{}', '{}', '{}', '{}')".format(data['datum'], data['tijdstip'], data['kapper'], data['firstname'], data['lastname'], data['email'], data['behandeling'], data['gender']))
    return jsonify({'success': True}), 200, {'ContentType': 'application/json'}


@app.route('/afspraken', methods= ['GET'])
def vraag_afspraken_op():           
    dbafspraken = db.execute_sql('SELECT * FROM afspraak ORDER BY tijdstip')

    afspraken = []
    for afspraak in dbafspraken:
        afspraken.append(
            {'datum': afspraak['datum'] , 'tijdstip': afspraak['tijdstip'], 'kapper': afspraak['kapper'], 'firstname': afspraak['firstname'], 'lastname': afspraak['lastname'], 'email': afspraak['email'], 'behandeling': afspraak['behandeling'], 'gender': afspraak['gender']}
        )
    

    return jsonify(afspraken), 200, {'ContentType':'application/json'}
app.run(debug=True)