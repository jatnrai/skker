import os
import re

directory = '/Users/jatinrai/Documents/GitHub/Skker/skker/src/app/user'

replacements = {
    # Backgrounds
    r'bg-\[#040816\]': 'bg-page',
    r'bg-\[#040810\]': 'bg-page',
    r'bg-\[#06091a\]': 'bg-section',
    r'bg-\[#060e15\]': 'bg-section',
    r'bg-\[#0a1520\]': 'bg-surface',
    r'bg-\[#0b141e\]': 'bg-card',
    r'bg-\[#0b1a2b\]': 'bg-card',
    r'bg-\[#02060d\]': 'bg-page',
    
    # Text
    r'text-\[#e6edf3\]': 'text-text',
    r'text-\[#eef0f8\]': 'text-heading',
    r'text-\[#04121d\]': 'text-page',
    r'text-\[#071927\]': 'text-page',
    
    # Highlight
    r'bg-\[#2aa7ff\]': 'bg-highlight',
    r'text-\[#2aa7ff\]': 'text-highlight',
    r'border-\[#2aa7ff\]': 'border-highlight',
    r'from-\[#2aa7ff\]': 'from-highlight',
    
    # Old accent variations if any hardcoded
    r'text-\[#a2f4fd\]': 'text-accent-cool',
    r'bg-\[#a2f4fd\]': 'bg-accent-cool',
    r'text-\[#00b8db\]': 'text-accent',
}

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for pattern, replacement in replacements.items():
                new_content = re.sub(pattern, replacement, new_content)
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
