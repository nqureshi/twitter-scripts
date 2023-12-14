import json

# Read the contents of 'following.txt' file
with open('following.txt', 'r') as file:
    json_data = json.load(file)

# Count the number of elements in the JSON variable
num_elements = len(json_data)

json_formatted_str = json.dumps(json_data, indent=2)

print(json_formatted_str)

# Print the count
print("Number of elements:", num_elements)