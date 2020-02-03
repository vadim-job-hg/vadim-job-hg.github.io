import os
from pathlib import Path
import json
files = {"files":[], 'count':0}
path = str(Path(__file__).parent.absolute())+"/gpx"
for file in os.listdir(path):
    files['files'].append('./files/gpx/'+file)
    files['count'] = files['count'] + 1

path = str(Path(__file__).parent.absolute())+"/tcx"
for file in os.listdir(path):
    files['files'].append('./files/tcx/'+file)
    files['count'] = files['count'] + 1

path = str(Path(__file__).parent.absolute())+"/fit"
for file in os.listdir(path):
    files['files'].append('./files/fit/'+file)
    files['count'] = files['count'] + 1

path = str(Path(__file__).parent.absolute())+"/jpg"
for file in os.listdir(path):
    files['files'].append('./files/jpg/'+file)
    files['count'] = files['count'] + 1

obj = open('files.json', 'w')
obj.write(json.dumps(files))
obj.close

