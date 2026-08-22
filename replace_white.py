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
    
    # Fix the badges and specific buttons that SHOULD stay white
    # e.g., if it has `bg-highlight`, change `text-heading` back to `text-white`
    new_content = re.sub(r'(bg-highlight.*?|)text-heading(.*?)', r'\1text-white\2' if 'bg-highlight' in r'\1' else r'\1text-heading\2', new_content)
    
    # Let's just do a simple pass and we will fix any button manually if needed.
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
