from flask import Flask, request, jsonify
import db

app = Flask(__name__)

@app.route('/afspraak', methods=['POST'])
def afspraak_invoegen():
    data = request.json
    db.execute_sql("INSERT INTO afspraak(naam, email, tijdstip) VALUES ('{}', '{}','{}')".format(data['naam'], data['email'], data['tijdstip']))
    return jsonify({'success': True}), 200, {'ContentType': 'application/json'}


@app.route('/afspraken', methods= ['GET'])
def vraag_afspraken_op():           
    dbafspraken = db.execute_sql('SELECT * FROM afspraak ORDER BY tijdstip')

    afspraken = []
    for afspraak in dbafspraken:
        afspraken.append(
            {'naam': afspraak['naam'] , 'tijdstip': afspraak['tijdstip']}
        )
    

    return jsonify(afspraken), 200, {'ContentType':'application/json'}
app.run()