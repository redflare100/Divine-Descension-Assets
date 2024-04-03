import requests
import json

def get_monsters():
    url = 'http://www.dnd5eapi.co/api/monsters/'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data['results']
    else:
        print("Error fetching data:", response.status_code)
        return []

def get_monster_info(monster_url):
    base_url = 'http://www.dnd5eapi.co'
    full_url = base_url + monster_url
    response = requests.get(full_url)
    if response.status_code == 200:
        monster_info = response.json()

        # Mapping for damage type changes
        damage_type_mapping = {
            'fire': 'Burning',
            'thunder': 'Kinetic',
            'force': 'Kinetic',
            'cold': 'Freezing',
            'radiant': 'Positive',
            'necrotic': 'Negative',
            'psychic': 'Neutral',
            'bludgeoning': 'Physical',
            'piercing': 'Physical',
            'slashing': 'Physical',
            'bludgeoning, piercing, and slashing': 'Physical',
            'bludgeoning, piercing, and slashing from nonmagical weapons': 'Mortal Physical',
            'bludgeoning, piercing, and slashing from nonmagical weapons that aren\'t silvered': 'All Physical except for Silver',
            'bludgeoning, piercing, and slashing from nonmagical weapons that aren\'t adamantine': 'All Physical except for Adamantine',
            'lightning':'Lightning'
        }

        # Adjusting specific fields
        adjusted_info = {
            'index': monster_info['index'],
            'name': monster_info['name'],
            'hit_points': monster_info.get('hit_points', ''),
            'strength': monster_info.get('strength', '') // 2,
            'dexterity': monster_info.get('dexterity', '') // 2,
            'constitution': monster_info.get('constitution', '') // 2,
            'intelligence': monster_info.get('intelligence', '') // 2,
            'wisdom': monster_info.get('wisdom', '') // 2,
            'charisma': monster_info.get('charisma', '') // 2,
            'damage_resistances': list(set([damage_type_mapping.get(damage, damage) for damage in monster_info.get('damage_resistances', [])])),
            'damage_immunities': list(set([damage_type_mapping.get(damage, damage) for damage in monster_info.get('damage_immunities', [])])),
            'condition_immunities': monster_info.get('condition_immunities', ''),
            'challenge_rating': monster_info.get('challenge_rating', ''),
            'proficiency_bonus': monster_info.get('proficiency_bonus', ''),
            'special_abilities': [{'name': ability['name'], 'desc': ability['desc']} for ability in monster_info.get('special_abilities', [])],
            'actions': [{'name': action['name'], 'desc': action['desc']} for action in monster_info.get('actions', [])],
            'legendary_actions': [{'name': action['name'], 'desc': action['desc']} for action in monster_info.get('legendary_actions', [])]
        }
        
        # Replace damage types in special abilities
        for ability in adjusted_info['special_abilities']:
            for old, new in damage_type_mapping.items():
                ability['desc'] = ability['desc'].replace(old, new)
        
        # Replace damage types in actions
        for action in adjusted_info['actions']:
            for old, new in damage_type_mapping.items():
                action['desc'] = action['desc'].replace(old, new)
        
        # Replace damage types in legendary actions
        for legendary_action in adjusted_info['legendary_actions']:
            for old, new in damage_type_mapping.items():
                legendary_action['desc'] = legendary_action['desc'].replace(old, new)

        return adjusted_info
    else:
        print("Error fetching data for monster:", response.status_code)
        return {}


def save_to_file(monsters_info, filename):
    with open(filename, 'w') as f:
        json.dump(monsters_info, f, indent=4)

def main():
    monsters = get_monsters()
    if monsters:
        monsters_info = {}
        for monster in monsters:
            monster_url = monster['url']
            info = get_monster_info(monster_url)
            monsters_info[monster['name']] = info
        save_to_file(monsters_info, 'monsters_info.json')
        print("Monsters information saved to 'monsters_info.json'")
    else:
        print("No monsters found")

if __name__ == "__main__":
    main()
