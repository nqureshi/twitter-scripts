import json

with open('following.txt', 'r') as file:
    json_data = json.load(file)

def mutuals_only(data):
    return [item for item in data if item.get('mutuals') == True]

print(mutuals_only(json_data))