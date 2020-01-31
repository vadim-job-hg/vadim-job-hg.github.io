import os
from pathlib import Path
import json
files = {"gpx":[], "tcx":[], "fit":[], "jpg":[]}
path = str(Path(__file__).parent.absolute())+"/gpx"
for file in os.listdir(path):
    files['gpx'].append('./files/gpx/'+file)

path = str(Path(__file__).parent.absolute())+"/tcx"
for file in os.listdir(path):
    files['tcx'].append('./files/tcx/'+file)

path = str(Path(__file__).parent.absolute())+"/fit"
for file in os.listdir(path):
    files['fit'].append('./files/fit/'+file)

path = str(Path(__file__).parent.absolute())+"/jpg"
for file in os.listdir(path):
    files['jpg'].append('./files/jpg/'+file)

obj = open('files.json', 'w')
obj.write(json.dumps(files))
obj.close

