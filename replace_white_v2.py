import os
import re

directory = '/Users/jatinrai/Documents/GitHub/Skker/skker/src/app/user'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = content
    
    # Borders
    new_content = re.sub(r'border-white/[0-9]+', 'border-border', new_content)
    new_content = re.sub(r'hover:border-white/[0-9]+', 'hover:border-border-focus', new_content)
    
    # Text
    new_content = re.sub(r'(?<!-)text-white', 'text-heading', new_content)
    new_content = re.sub(r'hover:text-white', 'hover:text-heading', new_content)
    
    # We will manually fix `bg-highlight text-heading` to `bg-highlight text-white` after
    # or just use a simple regex replacing `bg-highlight text-heading`
    new_content = new_content.replace('bg-highlight text-heading', 'bg-highlight text-white')
    new_content = new_content.replace('bg-accent text-heading', 'bg-accent text-white')
    new_content = new_content.replace('to-accent-cool text-heading', 'to-accent-cool text-white')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
