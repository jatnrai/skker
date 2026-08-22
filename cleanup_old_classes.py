import os
import re

directory = '/Users/jatinrai/Documents/GitHub/Skker/skker/src/app'

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = content
    
    # Replace old variables with new ones
    new_content = re.sub(r'\bbg-page-bg\b', 'bg-page', new_content)
    new_content = re.sub(r'\bbg-card-bg\b', 'bg-card', new_content)
    new_content = re.sub(r'\bbg-card-hover-bg\b', 'bg-surface', new_content)
    new_content = re.sub(r'\bbg-section-alt-bg\b', 'bg-section', new_content)
    new_content = re.sub(r'\btext-heading-primary\b', 'text-heading', new_content)
    new_content = re.sub(r'\btext-heading-secondary\b', 'text-muted', new_content)
    new_content = re.sub(r'\btext-btn-text\b', 'text-page', new_content)
    new_content = re.sub(r'\bborder-white/10\b', 'border-border', new_content)
    new_content = re.sub(r'\bborder-white/5\b', 'border-border', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))
