import re
import json

def extract_spellcasting_info(special_abilities):
    for ability in special_abilities:
        if ability['name'] == 'Spellcasting':
            desc = ability['desc']
            # Regular expression pattern to extract the spellcasting level
            pattern = r"(\d+)(?:st|nd|rd|th)-level"
            match = re.search(pattern, desc)
            if match:
                spellcasting_level = int(match.group(1))
                
                # Map the spellcasting level to the new grading system
                if 1 <= spellcasting_level <= 4:
                    spellcasting_level = "Deluvian Class"
                elif 5 <= spellcasting_level <= 8:
                    spellcasting_level = "Cainite Class"
                elif 9 <= spellcasting_level <= 12:
                    spellcasting_level = "Enoch Class"
                elif 13 <= spellcasting_level <= 17:
                    spellcasting_level = "Archon Class"
                elif 18 <= spellcasting_level <= 20:
                    spellcasting_level = "Apollyon Class"
                
                # Replace the spellcasting level in the description
                desc = re.sub(pattern, spellcasting_level, desc)
                
                # Add the modified description to traits
                ability['desc'] = desc
                return ability
    return None

def generate_character_structure(monsters_info):
    characters = []
    for monster_name, monster_info in monsters_info.items():
        mortal_moves = [{'name': action['name'], 'desc': action['desc']} for action in monster_info['actions']]
        mythic_moves = [{'name': action['name'], 'desc': action['desc']} for action in monster_info['legendary_actions']]
        
        # Extract and modify the spellcasting ability description
        spellcasting_ability = extract_spellcasting_info(monster_info['special_abilities'])
        
        character = {
            'id': monster_info['name'],
            'name': monster_info['name'],
            'initiativeModifier': monster_info['dexterity'],
            'health': monster_info['hit_points'],
            'currentHealth': monster_info['hit_points'],
            'dodge': monster_info['dexterity'] + 5,
            'str': monster_info['strength'],
            'dex': monster_info['dexterity'],
            'con': monster_info['constitution'],
            'wis': monster_info['wisdom'],
            'int': monster_info['intelligence'],
            'cha': monster_info['charisma'],
            'arcana': "",
            'tags': "",
            'fatalFlaw': "",
            'traits': [{'name': ability['name'], 'desc': ability['desc']} for ability in monster_info['special_abilities'] if ability['name'] != 'Spellcasting'],  # Exclude the original spellcasting ability
            'criticalHitRate': 5,
            'proficiency': monster_info['proficiency_bonus'],
            'maxVes': max([monster_info['strength'], monster_info['dexterity'], monster_info['constitution']]) * 2,
            'maxEgo': max([monster_info['wisdom'], monster_info['intelligence'], monster_info['charisma']]) * 2,
            'currentVes': max([monster_info['strength'], monster_info['dexterity'], monster_info['constitution']]) * 2,
            'currentEgo': max([monster_info['wisdom'], monster_info['intelligence'], monster_info['charisma']]) * 2,
            'characterType': 'Enemy NPC',
            'MythicMoves': mythic_moves,
            'MortalMoves': mortal_moves,
        }
        
        if spellcasting_ability:
            character['traits'].append(spellcasting_ability)  # Add the modified spellcasting ability to traits
        
        characters.append(character)
    return characters

def save_to_file(characters, filename):
    with open(filename, 'w') as f:
        f.write("const DefaultEnemyList = ")
        json.dump(characters, f, indent=4)
        f.write(";")

def main():
    with open('monsters_info.json', 'r') as f:
        monsters_info = json.load(f)
    characters = generate_character_structure(monsters_info)
    save_to_file(characters, 'DefaultEnemyList.js')
    print("DefaultEnemyList.js generated successfully.")

if __name__ == "__main__":
    main()

