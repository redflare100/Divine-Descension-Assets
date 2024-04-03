import requests
import json

def get_spells():
    url = 'http://www.dnd5eapi.co/api/spells/'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        spells = data['results']
        with open('spells.json', 'w') as json_file:
            json.dump(spells, json_file, indent=4)
        return spells
    else:
        print("Error fetching data:", response.status_code)
        return []

def calculate_cost(num_dice, dice_size, spell_range, aoe, concentration, duration):
    cost = 0
    # Cost calculation table
    cost_table = {
        4: [1,3,4,5,6,8,9,10,11,13,14,15,16,18,19,20,21,23,24,25],
        6: [2,4,5,7,9,11,12,14,16,18,19,21,23,25,26,28,30,32,33,35],
        8: [2,5,7,9,11,14,16,18,20,23,25,27,19,32,34,36,38,41,43,45],
        10:[3,6,8,11,14,17,19,22,25,28,30,33,36,39,41,44,47,50,52,55],
        12:[3,7,10,13,16,20,23,26,29,33,36,39,42,46,49,52,55,59,62,65]
    }
    dice_cost = 0
    # Calculate cost based on dice
    if(num_dice != 0):
        dice_cost = cost_table[dice_size][num_dice - 1]
        cost += cost_table[dice_size][num_dice - 1]
    
    # Adjust cost based on spell range
    if spell_range:
        # Extract numerical value from the range string
        range_value = 0
        if spell_range.isdigit():
            range_value = int(spell_range)
        elif "touch" in spell_range.lower():
            range_value = 1
        elif "self" not in spell_range.lower():
            # Extract numerical value from the range string
            range_words = spell_range.split()
            for i, word in enumerate(range_words):
                if word.isdigit():
                    range_value = int(word)
                    break
        
        # If range is specified in feet, add a point for every 10 feet rounded down
        range_points = max(int(range_value // 10), 0)
        cost += range_points
    
    if aoe != {}:
        # Next up if AoE exists
        aoe_costs = {
            'cube':[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100],
            'sphere':[4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,256,260,264,268,272,276,280,284,288,292,296,300,304,308,312,316,320,324,328,332,336,340,344,348,352,356,360,364,368,372,376,380,384,388,392,396,400],
            'line':[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50],
            'cone':[1,1,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120,123,126,129,132,135,138,141,144,147,150,153,156,159,162,165,168,171,174,177,180,183,186,189,192,195,198,201,204,207,210,213,216,219,222,225,228,231,234,237,240,243,246,249,252,255,258,261,264,267,270,273,276,279,282,285,288,291,294],
            'cylinder':[4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,256,260,264,268,272,276,280,284,288,292,296,300,304,308,312,316,320,324,328,332,336,340,344,348,352,356,360,364,368,372,376,380,384,388,392,396,400],
        }

        if aoe.get('size') == 5:
            cost += aoe_costs[aoe.get('type')][0]
        elif aoe.get('size') == 15:
            cost += (aoe_costs[aoe.get('type')][0] + aoe_costs[aoe.get('type')][1])
        elif int(aoe.get('size')) > 200:
            cost += 400
        else:
            cost += aoe_costs[aoe.get('type')][int(aoe.get('size') / 10)]
    
    duration_multi = {
        "1 round": 0,
        "Up to 1 round": 0,
        "Until dispelled": 0,
        "Instantaneous": 0,
        "10 rounds": 9,
        "Up to 1 minute": 9,
        "1 minute": 9,
        "10 minutes": 99,
        "Up to 10 minutes": 99,
        "1 hour": 599,
        "Up to 1 hour":599,
        "Up to 2 hours": 1199,
        "8 hours":4799,
        "Up to 8 hours": 4799,
        "24 hours":14399,
        "Up to 24 hours":14399,
        "7 days": 100799,
        "10 days": 143999,
        "30 days": 431999,
    }


    if spell_range == "Special" or duration == "Special":
        return "Special"
    elif concentration == True:
        cost += dice_cost * (duration_multi[duration] / 2)
    elif concentration == False:
        cost += dice_cost * duration_multi[duration]

    return cost



def get_spell_info(spell_url):
    base_url = 'http://www.dnd5eapi.co'
    full_url = base_url + spell_url
    response = requests.get(full_url)
    if response.status_code == 200:
        spell_info = response.json()
        damage_at_slot_level = spell_info.get('damage', {}).get('damage_at_slot_level', {})
        heal_at_slot_level = spell_info.get('heal_at_slot_level', {})
        damage_at_character_level = spell_info.get('damage_at_character_level', {})
        
        # Find the lowest non-empty value among the damage/heal dictionaries
        values = [v for v in [damage_at_slot_level, heal_at_slot_level, damage_at_character_level] if v]
        lowest_values = [next((v for v in value.values() if v), '') for value in values]
        
        # Choose the lowest non-empty value among damage and heal variables
        lowest_value = min(lowest_values, default='')
        
        # Map damage types to descriptive names
        damage_type_map = {
            'Fire': 'Burning',
            'Thunder': 'Kinetic',
            'Force': 'Kinetic',
            'Cold': 'Freezing',
            'Radiant': 'Positive',
            'Necrotic': 'Negative',
            'Psychic': 'Neutral',
            'Bludgeoning': 'Physical',
            'Piercing': 'Physical',
            'Slashing': 'Physical',
        }
        
        # Replace damage type with descriptive name
        damage_type = spell_info.get('damage', {}).get('damage_type', {}).get('name', '')
        if damage_type in damage_type_map:
            damage_type = damage_type_map[damage_type]
        
        # Calculate cost based on dice
        die = lowest_value.split('d') if lowest_value else []
        if len(die) == 2:
            num_dice, dice_size = die
            # Remove any bonus modifier from dice size
            dice_size = int(dice_size.split('+')[0]) if '+' in dice_size else int(dice_size)
            cost = calculate_cost(int(num_dice), dice_size, spell_info.get('range', ''),spell_info.get('area_of_effect', {}), spell_info.get('concentration'), spell_info.get('duration', ''))
        else:
            cost = calculate_cost(0, 0, spell_info.get('range', ''),spell_info.get('area_of_effect', {}), spell_info.get('concentration'), spell_info.get('duration', ''))  # Include range cost even if no die
        
        important_info = {
            'id': spell_info['name'],
            'name': spell_info['name'],
            'desc': spell_info.get('desc', []),
            'range': spell_info.get('range', ''),
            'duration': spell_info.get('duration', ''),
            'casting_time': spell_info.get('casting_time', ''),
            'concentration': spell_info.get('concentration', ''),
            'damage_type': damage_type,
            'area_of_effect': spell_info.get('area_of_effect', {}),
            'dc': spell_info.get('dc', {}),
            'die': lowest_value,
            'type': '',
            'cost': cost
        }
        return important_info
    else:
        print("Error fetching data for monster:", response.status_code)
        return {}


def save_to_file(spell_info, filename):
    with open(filename, 'w') as f:
        json.dump(spell_info, f, indent=4)

def main():
    spells = get_spells()
    if spells:
        spell_info = {}
        for spell in spells:
            spell_url = spell['url']
            info = get_spell_info(spell_url)
            spell_info[spell['name']] = info
        save_to_file(spell_info, 'spell_info.json')
        print("Spell information saved to 'spell_info.json'")
    else:
        print("No spells found")

if __name__ == "__main__":
    main()
