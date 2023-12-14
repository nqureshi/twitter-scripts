import json

with open('following.txt', 'r') as file:
    json_data = json.load(file)

total_following = len(json_data)

def mutuals_only(data):
    return [item for item in data if item.get('mutuals') == True]

mutuals = mutuals_only(json_data)

print("Total Number of People You're Following:", total_following)
print("Mutuals:", len(mutuals))
print("First 10 Mutuals:")
for mutual in true_mutuals[:10]:
    print(json.dumps(mutual, indent=2))
