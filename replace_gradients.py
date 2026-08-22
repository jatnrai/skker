import os
import re

directory = '/Users/jatinrai/Documents/GitHub/Skker/skker/src/app/user'

color_map = {
    '[#040816]': 'page',
    '[#040810]': 'page',
    '[#06091a]': 'section',
    '[#060e15]': 'section',
    '[#06101a]': 'section',
    '[#07111f]': 'section',
    '[#0b1622]': 'card',
    '[#0b141e]': 'card',
    '[#0b1a2b]': 'card',
    '[#0a1520]': 'surface',
    '[#112435]': 'surface',
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = content
    
    def replace_hex(match):
        val = match.group(0).lower()
        return color_map.get(val, val)
    
    # Replace all occurrences of these specific dark hex codes mapped to our new CSS vars
    new_content = re.sub(r'\[#[0-9a-fA-F]{6}\]', replace_hex, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
