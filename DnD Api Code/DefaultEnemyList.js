const DefaultEnemyList = [
    {
        "id": "Aboleth",
        "name": "Aboleth",
        "initiativeModifier": 4,
        "health": 135,
        "currentHealth": 135,
        "dodge": 9,
        "str": 10,
        "dex": 4,
        "con": 7,
        "wis": 7,
        "int": 9,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The aboleth can breathe air and water."
            },
            {
                "name": "Mucous Cloud",
                "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
            },
            {
                "name": "Probing Telepathy",
                "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 20,
        "maxEgo": 18,
        "currentVes": 20,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The aboleth makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Swipe",
                "desc": "The aboleth makes one tail attack."
            },
            {
                "name": "Psychic Drain (Costs 2 Actions)",
                "desc": "One creature charmed by the aboleth takes 10 (3d6) Neutral damage, and the aboleth regains hit points equal to the damage the creature takes."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The aboleth makes three tentacle attacks."
            },
            {
                "name": "Tentacle",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) Physical damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) Physical damage."
            },
            {
                "name": "Enslave",
                "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
            }
        ]
    },
    {
        "id": "Acolyte",
        "name": "Acolyte",
        "initiativeModifier": 5,
        "health": 9,
        "currentHealth": 9,
        "dodge": 10,
        "str": 5,
        "dex": 5,
        "con": 5,
        "wis": 7,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Spellcasting",
                "desc": "The acolyte is a Deluvian Class spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\n- Cantrips (at will): light, sacred flame, thaumaturgy\n- 1st level (3 slots): bless, cure wounds, sanctuary"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 14,
        "currentVes": 10,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Club",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) Physical damage."
            }
        ]
    },
    {
        "id": "Adult Black Dragon",
        "name": "Adult Black Dragon",
        "initiativeModifier": 7,
        "health": 195,
        "currentHealth": 195,
        "dodge": 12,
        "str": 11,
        "dex": 7,
        "con": 10,
        "wis": 6,
        "int": 7,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 22,
        "maxEgo": 16,
        "currentVes": 22,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage plus 4 (1d8) acid damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Acid Breath",
                "desc": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Adult Blue Dragon",
        "name": "Adult Blue Dragon",
        "initiativeModifier": 5,
        "health": 225,
        "currentHealth": 225,
        "dodge": 10,
        "str": 12,
        "dex": 5,
        "con": 11,
        "wis": 7,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 24,
        "maxEgo": 18,
        "currentVes": 24,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) Physical damage plus 5 (1d10) Lightning damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Lightning Breath",
                "desc": "The dragon exhales Lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) Lightning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Adult Brass Dragon",
        "name": "Adult Brass Dragon",
        "initiativeModifier": 5,
        "health": 172,
        "currentHealth": 172,
        "dodge": 10,
        "str": 11,
        "dex": 5,
        "con": 10,
        "wis": 6,
        "int": 7,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 22,
        "maxEgo": 16,
        "currentVes": 22,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales Burning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) Burning damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            }
        ]
    },
    {
        "id": "Adult Bronze Dragon",
        "name": "Adult Bronze Dragon",
        "initiativeModifier": 5,
        "health": 212,
        "currentHealth": 212,
        "dodge": 10,
        "str": 12,
        "dex": 5,
        "con": 11,
        "wis": 7,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 24,
        "maxEgo": 18,
        "currentVes": 24,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales Lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) Lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
            }
        ]
    },
    {
        "id": "Adult Copper Dragon",
        "name": "Adult Copper Dragon",
        "initiativeModifier": 6,
        "health": 184,
        "currentHealth": 184,
        "dodge": 11,
        "str": 11,
        "dex": 6,
        "con": 10,
        "wis": 7,
        "int": 9,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 22,
        "maxEgo": 18,
        "currentVes": 22,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
            }
        ]
    },
    {
        "id": "Adult Gold Dragon",
        "name": "Adult Gold Dragon",
        "initiativeModifier": 7,
        "health": 256,
        "currentHealth": 256,
        "dodge": 12,
        "str": 13,
        "dex": 7,
        "con": 12,
        "wis": 7,
        "int": 8,
        "cha": 12,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 26,
        "maxEgo": 24,
        "currentVes": 26,
        "currentEgo": 24,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales Burning in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) Burning damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Adult Green Dragon",
        "name": "Adult Green Dragon",
        "initiativeModifier": 6,
        "health": 207,
        "currentHealth": 207,
        "dodge": 11,
        "str": 11,
        "dex": 6,
        "con": 10,
        "wis": 7,
        "int": 9,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 22,
        "maxEgo": 18,
        "currentVes": 22,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage plus 7 (2d6) poison damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
            },
            {
                "name": "Poison Breath",
                "desc": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Adult Red Dragon",
        "name": "Adult Red Dragon",
        "initiativeModifier": 5,
        "health": 256,
        "currentHealth": 256,
        "dodge": 10,
        "str": 13,
        "dex": 5,
        "con": 12,
        "wis": 6,
        "int": 8,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 26,
        "maxEgo": 20,
        "currentVes": 26,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) Physical damage plus 7 (2d6) Burning damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Fire Breath",
                "desc": "The dragon exhales Burning in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Adult Silver Dragon",
        "name": "Adult Silver Dragon",
        "initiativeModifier": 5,
        "health": 243,
        "currentHealth": 243,
        "dodge": 10,
        "str": 13,
        "dex": 5,
        "con": 12,
        "wis": 6,
        "int": 8,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 26,
        "maxEgo": 20,
        "currentVes": 26,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) Freezing damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Adult White Dragon",
        "name": "Adult White Dragon",
        "initiativeModifier": 5,
        "health": 200,
        "currentHealth": 200,
        "dodge": 10,
        "str": 11,
        "dex": 5,
        "con": 11,
        "wis": 6,
        "int": 4,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Ice Walk",
                "desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 22,
        "maxEgo": 12,
        "currentVes": 22,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage plus 4 (1d8) Freezing damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Cold Breath",
                "desc": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) Freezing damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Air Elemental",
        "name": "Air Elemental",
        "initiativeModifier": 10,
        "health": 90,
        "currentHealth": 90,
        "dodge": 15,
        "str": 7,
        "dex": 10,
        "con": 7,
        "wis": 5,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Air Form",
                "desc": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 10,
        "currentVes": 20,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The elemental makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) Physical damage."
            },
            {
                "name": "Whirlwind",
                "desc": "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) Physical damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) Physical damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\nIf the saving throw is successful, the target takes half the Physical damage and isn't flung away or knocked prone."
            }
        ]
    },
    {
        "id": "Ancient Black Dragon",
        "name": "Ancient Black Dragon",
        "initiativeModifier": 7,
        "health": 367,
        "currentHealth": 367,
        "dodge": 12,
        "str": 13,
        "dex": 7,
        "con": 12,
        "wis": 7,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 26,
        "maxEgo": 18,
        "currentVes": 26,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) Physical damage plus 9 (2d8) acid damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Acid Breath",
                "desc": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Ancient Blue Dragon",
        "name": "Ancient Blue Dragon",
        "initiativeModifier": 5,
        "health": 481,
        "currentHealth": 481,
        "dodge": 10,
        "str": 14,
        "dex": 5,
        "con": 13,
        "wis": 8,
        "int": 9,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 28,
        "maxEgo": 20,
        "currentVes": 28,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) Physical damage plus 11 (2d10) Lightning damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Lightning Breath",
                "desc": "The dragon exhales Lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) Lightning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Ancient Brass Dragon",
        "name": "Ancient Brass Dragon",
        "initiativeModifier": 5,
        "health": 297,
        "currentHealth": 297,
        "dodge": 10,
        "str": 13,
        "dex": 5,
        "con": 12,
        "wis": 7,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 26,
        "maxEgo": 18,
        "currentVes": 26,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales Burning in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) Burning damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            },
            {
                "name": "Change Shape",
                "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ]
    },
    {
        "id": "Ancient Bronze Dragon",
        "name": "Ancient Bronze Dragon",
        "initiativeModifier": 5,
        "health": 444,
        "currentHealth": 444,
        "dodge": 10,
        "str": 14,
        "dex": 5,
        "con": 13,
        "wis": 8,
        "int": 9,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 28,
        "maxEgo": 20,
        "currentVes": 28,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales Lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) Lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
            },
            {
                "name": "Change Shape",
                "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ]
    },
    {
        "id": "Ancient Copper Dragon",
        "name": "Ancient Copper Dragon",
        "initiativeModifier": 6,
        "health": 350,
        "currentHealth": 350,
        "dodge": 11,
        "str": 13,
        "dex": 6,
        "con": 12,
        "wis": 8,
        "int": 10,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 26,
        "maxEgo": 20,
        "currentVes": 26,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
            },
            {
                "name": "Change Shape",
                "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ]
    },
    {
        "id": "Ancient Gold Dragon",
        "name": "Ancient Gold Dragon",
        "initiativeModifier": 7,
        "health": 546,
        "currentHealth": 546,
        "dodge": 12,
        "str": 15,
        "dex": 7,
        "con": 14,
        "wis": 8,
        "int": 9,
        "cha": 14,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 30,
        "maxEgo": 28,
        "currentVes": 30,
        "currentEgo": 28,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales Burning in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) Burning damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Change Shape",
                "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ]
    },
    {
        "id": "Ancient Green Dragon",
        "name": "Ancient Green Dragon",
        "initiativeModifier": 6,
        "health": 385,
        "currentHealth": 385,
        "dodge": 11,
        "str": 13,
        "dex": 6,
        "con": 12,
        "wis": 8,
        "int": 10,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 26,
        "maxEgo": 20,
        "currentVes": 26,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) Physical damage plus 10 (3d6) poison damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Poison Breath",
                "desc": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Ancient Red Dragon",
        "name": "Ancient Red Dragon",
        "initiativeModifier": 5,
        "health": 546,
        "currentHealth": 546,
        "dodge": 10,
        "str": 15,
        "dex": 5,
        "con": 14,
        "wis": 7,
        "int": 9,
        "cha": 11,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 30,
        "maxEgo": 22,
        "currentVes": 30,
        "currentEgo": 22,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) Physical damage plus 14 (4d6) Burning damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Fire Breath",
                "desc": "The dragon exhales Burning in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Ancient Silver Dragon",
        "name": "Ancient Silver Dragon",
        "initiativeModifier": 5,
        "health": 487,
        "currentHealth": 487,
        "dodge": 10,
        "str": 15,
        "dex": 5,
        "con": 14,
        "wis": 7,
        "int": 9,
        "cha": 11,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 30,
        "maxEgo": 22,
        "currentVes": 30,
        "currentEgo": 22,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) Freezing damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Change Shape",
                "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ]
    },
    {
        "id": "Ancient White Dragon",
        "name": "Ancient White Dragon",
        "initiativeModifier": 5,
        "health": 333,
        "currentHealth": 333,
        "dodge": 10,
        "str": 13,
        "dex": 5,
        "con": 13,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Ice Walk",
                "desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 26,
        "maxEgo": 14,
        "currentVes": 26,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
            },
            {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
            },
            {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) Physical damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) Physical damage plus 9 (2d8) Freezing damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
            },
            {
                "name": "Cold Breath",
                "desc": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) Freezing damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Androsphinx",
        "name": "Androsphinx",
        "initiativeModifier": 5,
        "health": 199,
        "currentHealth": 199,
        "dodge": 10,
        "str": 11,
        "dex": 5,
        "con": 10,
        "wis": 9,
        "int": 8,
        "cha": 11,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Inscrutable",
                "desc": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
            },
            {
                "name": "Magic Weapons",
                "desc": "The sphinx's weapon attacks are magical."
            },
            {
                "name": "Spellcasting",
                "desc": "The sphinx is a Enoch Class spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:\n\n- Cantrips (at will): sacred flame, spare the dying, thaumaturgy\n- 1st level (4 slots): command, detect evil and good, detect magic\n- 2nd level (3 slots): lesser restoration, zone of truth\n- 3rd level (3 slots): dispel magic, tongues\n- 4th level (3 slots): banishment, freedom of movement\n- 5th level (2 slots): flame strike, greater restoration\n- 6th level (1 slot): heroes' feast"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 22,
        "maxEgo": 22,
        "currentVes": 22,
        "currentEgo": 22,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Claw Attack",
                "desc": "The sphinx makes one claw attack."
            },
            {
                "name": "Teleport (Costs 2 Actions)",
                "desc": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                "name": "Cast a Spell (Costs 3 Actions)",
                "desc": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The sphinx makes two claw attacks."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) Physical damage."
            },
            {
                "name": "Roar",
                "desc": "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.\n\nFirst Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nSecond Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nThird Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) Kinetic damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
            }
        ]
    },
    {
        "id": "Animated Armor",
        "name": "Animated Armor",
        "initiativeModifier": 5,
        "health": 33,
        "currentHealth": 33,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 6,
        "wis": 1,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Antimagic Susceptibility",
                "desc": "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                "name": "False Appearance",
                "desc": "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 2,
        "currentVes": 14,
        "currentEgo": 2,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The armor makes two melee attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Ankheg",
        "name": "Ankheg",
        "initiativeModifier": 5,
        "health": 39,
        "currentHealth": 39,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 6,
        "wis": 6,
        "int": 0,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so."
            },
            {
                "name": "Acid Spray",
                "desc": "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Ape",
        "name": "Ape",
        "initiativeModifier": 7,
        "health": 19,
        "currentHealth": 19,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 7,
        "wis": 6,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The ape makes two fist attacks."
            },
            {
                "name": "Fist",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Archmage",
        "name": "Archmage",
        "initiativeModifier": 7,
        "health": 99,
        "currentHealth": 99,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 6,
        "wis": 7,
        "int": 10,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Magic Resistance",
                "desc": "The archmage has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Spellcasting",
                "desc": "The archmage is an Apollyon Class spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:\n\n- Cantrips (at will): Burning bolt, light, mage hand, prestidigitation, shocking grasp\n- 1st level (4 slots): detect magic, identify, mage armor*, magic missile\n- 2nd level (3 slots): detect thoughts, mirror image, misty step\n- 3rd level (3 slots): counterspell, fly, Lightning bolt\n- 4th level (3 slots): banishment, Burning shield, stoneskin*\n- 5th level (3 slots): cone of Freezing, scrying, wall of Kinetic\n- 6th level (1 slot): globe of invulnerability\n- 7th level (1 slot): teleport\n- 8th level (1 slot): mind blank*\n- 9th level (1 slot): time stop\n* The archmage casts these spells on itself before combat."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 14,
        "maxEgo": 20,
        "currentVes": 14,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Dagger",
                "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Assassin",
        "name": "Assassin",
        "initiativeModifier": 8,
        "health": 78,
        "currentHealth": 78,
        "dodge": 13,
        "str": 5,
        "dex": 8,
        "con": 7,
        "wis": 5,
        "int": 6,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Assassinate",
                "desc": "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
            },
            {
                "name": "Evasion",
                "desc": "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                "name": "Sneak Attack (1/Turn)",
                "desc": "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The assassin makes two shortsword attacks."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "Light Crossbow",
                "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) Physical damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Awakened Shrub",
        "name": "Awakened Shrub",
        "initiativeModifier": 4,
        "health": 10,
        "currentHealth": 10,
        "dodge": 9,
        "str": 1,
        "dex": 4,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "False Appearance",
                "desc": "While the shrub remains motionless, it is indistinguishable from a normal shrub."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 10,
        "currentVes": 10,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Rake",
                "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) Physical damage."
            }
        ]
    },
    {
        "id": "Awakened Tree",
        "name": "Awakened Tree",
        "initiativeModifier": 3,
        "health": 59,
        "currentHealth": 59,
        "dodge": 8,
        "str": 9,
        "dex": 3,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "False Appearance",
                "desc": "While the tree remains motionless, it is indistinguishable from a normal tree."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Axe Beak",
        "name": "Axe Beak",
        "initiativeModifier": 6,
        "health": 19,
        "currentHealth": 19,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Azer",
        "name": "Azer",
        "initiativeModifier": 6,
        "health": 39,
        "currentHealth": 39,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 7,
        "wis": 6,
        "int": 6,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Heated Body",
                "desc": "A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) Burning damage."
            },
            {
                "name": "Heated Weapons",
                "desc": "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) Burning damage (included in the attack)."
            },
            {
                "name": "Illumination",
                "desc": "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Warhammer",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage, or 8 (1d10 + 3) Physical damage if used with two hands to make a melee attack, plus 3 (1d6) Burning damage."
            }
        ]
    },
    {
        "id": "Baboon",
        "name": "Baboon",
        "initiativeModifier": 7,
        "health": 3,
        "currentHealth": 3,
        "dodge": 12,
        "str": 4,
        "dex": 7,
        "con": 5,
        "wis": 6,
        "int": 2,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Pack Tactics",
                "desc": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) Physical damage."
            }
        ]
    },
    {
        "id": "Badger",
        "name": "Badger",
        "initiativeModifier": 5,
        "health": 3,
        "currentHealth": 3,
        "dodge": 10,
        "str": 2,
        "dex": 5,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Balor",
        "name": "Balor",
        "initiativeModifier": 7,
        "health": 262,
        "currentHealth": 262,
        "dodge": 12,
        "str": 13,
        "dex": 7,
        "con": 11,
        "wis": 8,
        "int": 10,
        "cha": 11,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Death Throes",
                "desc": "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) Burning damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons."
            },
            {
                "name": "Fire Aura",
                "desc": "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) Burning damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) Burning damage."
            },
            {
                "name": "Magic Resistance",
                "desc": "The balor has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The balor's weapon attacks are magical."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 26,
        "maxEgo": 22,
        "currentVes": 26,
        "currentEgo": 22,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The balor makes two attacks: one with its longsword and one with its whip."
            },
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) Physical damage plus 13 (3d8) Lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice."
            },
            {
                "name": "Whip",
                "desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) Physical damage plus 10 (3d6) Burning damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor."
            },
            {
                "name": "Teleport",
                "desc": "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            }
        ]
    },
    {
        "id": "Bandit",
        "name": "Bandit",
        "initiativeModifier": 6,
        "health": 11,
        "currentHealth": 11,
        "dodge": 11,
        "str": 5,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage."
            },
            {
                "name": "Light Crossbow",
                "desc": "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Bandit Captain",
        "name": "Bandit Captain",
        "initiativeModifier": 8,
        "health": 65,
        "currentHealth": 65,
        "dodge": 13,
        "str": 7,
        "dex": 8,
        "con": 7,
        "wis": 5,
        "int": 7,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
            },
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Dagger",
                "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Barbed Devil",
        "name": "Barbed Devil",
        "initiativeModifier": 8,
        "health": 110,
        "currentHealth": 110,
        "dodge": 13,
        "str": 8,
        "dex": 8,
        "con": 9,
        "wis": 7,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Barbed Hide",
                "desc": "At the start of each of its turns, the barbed devil deals 5 (1d10) Physical damage to any creature grappling it."
            },
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "desc": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            },
            {
                "name": "Hurl Flame",
                "desc": "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) Burning damage. If the target is a flammable object that isn't being worn or carried, it also catches Burning."
            }
        ]
    },
    {
        "id": "Basilisk",
        "name": "Basilisk",
        "initiativeModifier": 4,
        "health": 52,
        "currentHealth": 52,
        "dodge": 9,
        "str": 8,
        "dex": 4,
        "con": 7,
        "wis": 4,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Petrifying Gaze",
                "desc": "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can Kinetic the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\nIf the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 8,
        "currentVes": 16,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage plus 7 (2d6) poison damage."
            }
        ]
    },
    {
        "id": "Bat",
        "name": "Bat",
        "initiativeModifier": 7,
        "health": 1,
        "currentHealth": 1,
        "dodge": 12,
        "str": 1,
        "dex": 7,
        "con": 4,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Echolocation",
                "desc": "The bat can't use its blindsight while deafened."
            },
            {
                "name": "Keen Hearing",
                "desc": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Bearded Devil",
        "name": "Bearded Devil",
        "initiativeModifier": 7,
        "health": 52,
        "currentHealth": 52,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 7,
        "wis": 5,
        "int": 4,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "desc": "The devil has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Steadfast",
                "desc": "The devil can't be frightened while it can see an allied creature within 30 feet of it."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The devil makes two attacks: one with its beard and one with its glaive."
            },
            {
                "name": "Beard",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) Physical damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Glaive",
                "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) Physical damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
            }
        ]
    },
    {
        "id": "Behir",
        "name": "Behir",
        "initiativeModifier": 8,
        "health": 168,
        "currentHealth": 168,
        "dodge": 13,
        "str": 11,
        "dex": 8,
        "con": 9,
        "wis": 7,
        "int": 3,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 14,
        "currentVes": 22,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The behir makes two attacks: one with its bite and one to constrict."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) Physical damage."
            },
            {
                "name": "Constrict",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) Physical damage plus 17 (2d10 + 6) Physical damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends."
            },
            {
                "name": "Lightning Breath",
                "desc": "The behir exhales a line of Lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) Lightning damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "Swallow",
                "desc": "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone."
            }
        ]
    },
    {
        "id": "Berserker",
        "name": "Berserker",
        "initiativeModifier": 6,
        "health": 67,
        "currentHealth": 67,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 8,
        "wis": 5,
        "int": 4,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Reckless",
                "desc": "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Greataxe",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Black Bear",
        "name": "Black Bear",
        "initiativeModifier": 5,
        "health": 19,
        "currentHealth": 19,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The bear makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Black Dragon Wyrmling",
        "name": "Black Dragon Wyrmling",
        "initiativeModifier": 7,
        "health": 33,
        "currentHealth": 33,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) Physical damage plus 2 (1d4) acid damage."
            },
            {
                "name": "Acid Breath",
                "desc": "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Black Pudding",
        "name": "Black Pudding",
        "initiativeModifier": 2,
        "health": 85,
        "currentHealth": 85,
        "dodge": 7,
        "str": 8,
        "dex": 2,
        "con": 8,
        "wis": 3,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amorphous",
                "desc": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                "name": "Corrosive Form",
                "desc": "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
            },
            {
                "name": "Spider Climb",
                "desc": "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 6,
        "currentVes": 16,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Pseudopod",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
            }
        ]
    },
    {
        "id": "Blink Dog",
        "name": "Blink Dog",
        "initiativeModifier": 8,
        "health": 22,
        "currentHealth": 22,
        "dodge": 13,
        "str": 6,
        "dex": 8,
        "con": 6,
        "wis": 6,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage."
            },
            {
                "name": "Teleport",
                "desc": "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
            }
        ]
    },
    {
        "id": "Blood Hawk",
        "name": "Blood Hawk",
        "initiativeModifier": 7,
        "health": 7,
        "currentHealth": 7,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 5,
        "wis": 7,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight",
                "desc": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Pack Tactics",
                "desc": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 14,
        "currentVes": 14,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Blue Dragon Wyrmling",
        "name": "Blue Dragon Wyrmling",
        "initiativeModifier": 5,
        "health": 52,
        "currentHealth": 52,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) Physical damage plus 3 (1d6) Lightning damage."
            },
            {
                "name": "Lightning Breath",
                "desc": "The dragon exhales Lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) Lightning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Boar",
        "name": "Boar",
        "initiativeModifier": 5,
        "health": 11,
        "currentHealth": 11,
        "dodge": 10,
        "str": 6,
        "dex": 5,
        "con": 6,
        "wis": 4,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) Physical damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
            },
            {
                "name": "Relentless",
                "desc": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 8,
        "currentVes": 12,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Tusk",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Bone Devil",
        "name": "Bone Devil",
        "initiativeModifier": 8,
        "health": 142,
        "currentHealth": 142,
        "dodge": 13,
        "str": 9,
        "dex": 8,
        "con": 9,
        "wis": 7,
        "int": 6,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "desc": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The devil makes three attacks: two with its claws and one with its sting."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) Physical damage."
            },
            {
                "name": "Sting",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) Physical damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Brass Dragon Wyrmling",
        "name": "Brass Dragon Wyrmling",
        "initiativeModifier": 5,
        "health": 16,
        "currentHealth": 16,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales Burning in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) Burning damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            }
        ]
    },
    {
        "id": "Bronze Dragon Wyrmling",
        "name": "Bronze Dragon Wyrmling",
        "initiativeModifier": 5,
        "health": 32,
        "currentHealth": 32,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales Lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) Lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon."
            }
        ]
    },
    {
        "id": "Brown Bear",
        "name": "Brown Bear",
        "initiativeModifier": 5,
        "health": 34,
        "currentHealth": 34,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The bear makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Bugbear",
        "name": "Bugbear",
        "initiativeModifier": 7,
        "health": 27,
        "currentHealth": 27,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 4,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Brute",
                "desc": "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
            },
            {
                "name": "Surprise Attack",
                "desc": "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Morningstar",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) Physical damage."
            },
            {
                "name": "Javelin",
                "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) Physical damage in melee or 5 (1d6 + 2) Physical damage at range."
            }
        ]
    },
    {
        "id": "Bulette",
        "name": "Bulette",
        "initiativeModifier": 5,
        "health": 94,
        "currentHealth": 94,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 10,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Standing Leap",
                "desc": "The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 10,
        "currentVes": 20,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) Physical damage."
            },
            {
                "name": "Deadly Leap",
                "desc": "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) Physical damage plus 14 (3d6 + 4) Physical damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space."
            }
        ]
    },
    {
        "id": "Camel",
        "name": "Camel",
        "initiativeModifier": 4,
        "health": 15,
        "currentHealth": 15,
        "dodge": 9,
        "str": 8,
        "dex": 4,
        "con": 7,
        "wis": 4,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 8,
        "currentVes": 16,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) Physical damage."
            }
        ]
    },
    {
        "id": "Cat",
        "name": "Cat",
        "initiativeModifier": 7,
        "health": 2,
        "currentHealth": 2,
        "dodge": 12,
        "str": 1,
        "dex": 7,
        "con": 5,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Centaur",
        "name": "Centaur",
        "initiativeModifier": 7,
        "health": 45,
        "currentHealth": 45,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 7,
        "wis": 6,
        "int": 4,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) Physical damage."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow."
            },
            {
                "name": "Pike",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) Physical damage."
            },
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Chain Devil",
        "name": "Chain Devil",
        "initiativeModifier": 7,
        "health": 85,
        "currentHealth": 85,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 9,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "desc": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The devil makes two attacks with its chains."
            },
            {
                "name": "Chain",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) Physical damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) Physical damage at the start of each of its turns."
            },
            {
                "name": "Animate Chains",
                "desc": "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.\nEach animated chain is an object with AC 20, 20 hit points, resistance to Physical damage, and immunity to Neutral and Kinetic damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
            }
        ]
    },
    {
        "id": "Chimera",
        "name": "Chimera",
        "initiativeModifier": 5,
        "health": 114,
        "currentHealth": 114,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 9,
        "wis": 7,
        "int": 1,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its Burning breath is available, it can use the breath in place of its bite or horns."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Horns",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Fire Breath",
                "desc": "The dragon head exhales Burning in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Chuul",
        "name": "Chuul",
        "initiativeModifier": 5,
        "health": 93,
        "currentHealth": 93,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 5,
        "int": 2,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The chuul can breathe air and water."
            },
            {
                "name": "Sense Magic",
                "desc": "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
            },
            {
                "name": "Pincer",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) Physical damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled."
            },
            {
                "name": "Tentacles",
                "desc": "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Clay Golem",
        "name": "Clay Golem",
        "initiativeModifier": 4,
        "health": 133,
        "currentHealth": 133,
        "dodge": 9,
        "str": 10,
        "dex": 4,
        "con": 9,
        "wis": 4,
        "int": 1,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Acid Absorption",
                "desc": "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
            },
            {
                "name": "Berserk",
                "desc": "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
            },
            {
                "name": "Immutable Form",
                "desc": "The golem is immune to any spell or effect that would alter its form."
            },
            {
                "name": "Magic Resistance",
                "desc": "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The golem's weapon attacks are magical."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 20,
        "maxEgo": 8,
        "currentVes": 20,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The golem makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) Physical damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic."
            },
            {
                "name": "Haste",
                "desc": "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
            }
        ]
    },
    {
        "id": "Cloaker",
        "name": "Cloaker",
        "initiativeModifier": 7,
        "health": 78,
        "currentHealth": 78,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Damage Transfer",
                "desc": "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half."
            },
            {
                "name": "False Appearance",
                "desc": "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak."
            },
            {
                "name": "Light Sensitivity",
                "desc": "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The cloaker makes two attacks: one with its bite and one with its tail."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) Physical damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) Physical damage."
            },
            {
                "name": "Moan",
                "desc": "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
            },
            {
                "name": "Phantasms",
                "desc": "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
            }
        ]
    },
    {
        "id": "Cloud Giant",
        "name": "Cloud Giant",
        "initiativeModifier": 5,
        "health": 200,
        "currentHealth": 200,
        "dodge": 10,
        "str": 13,
        "dex": 5,
        "con": 11,
        "wis": 8,
        "int": 6,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The giant has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, fog cloud, light\n3/day each: feather fall, fly, misty step, telekinesis\n1/day each: control weather, gaseous form"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 26,
        "maxEgo": 16,
        "currentVes": 26,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The giant makes two morningstar attacks."
            },
            {
                "name": "Morningstar",
                "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) Physical damage."
            }
        ]
    },
    {
        "id": "Cockatrice",
        "name": "Cockatrice",
        "initiativeModifier": 6,
        "health": 27,
        "currentHealth": 27,
        "dodge": 11,
        "str": 3,
        "dex": 6,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) Physical damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours."
            }
        ]
    },
    {
        "id": "Commoner",
        "name": "Commoner",
        "initiativeModifier": 5,
        "health": 4,
        "currentHealth": 4,
        "dodge": 10,
        "str": 5,
        "dex": 5,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 10,
        "currentVes": 10,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Club",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) Physical damage."
            }
        ]
    },
    {
        "id": "Constrictor Snake",
        "name": "Constrictor Snake",
        "initiativeModifier": 7,
        "health": 13,
        "currentHealth": 13,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Constrict",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) Physical damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
            }
        ]
    },
    {
        "id": "Copper Dragon Wyrmling",
        "name": "Copper Dragon Wyrmling",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 7,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 14,
        "currentVes": 14,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
            }
        ]
    },
    {
        "id": "Couatl",
        "name": "Couatl",
        "initiativeModifier": 10,
        "health": 97,
        "currentHealth": 97,
        "dodge": 15,
        "str": 8,
        "dex": 10,
        "con": 8,
        "wis": 10,
        "int": 9,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Innate Spellcasting",
                "desc": "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good, detect magic, detect thoughts\n3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield\n1/day each: dream, greater restoration, scrying"
            },
            {
                "name": "Magic Weapons",
                "desc": "The couatl's weapon attacks are magical."
            },
            {
                "name": "Shielded Mind",
                "desc": "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 20,
        "maxEgo": 20,
        "currentVes": 20,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) Physical damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake."
            },
            {
                "name": "Constrict",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) Physical damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target."
            },
            {
                "name": "Change Shape",
                "desc": "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
            }
        ]
    },
    {
        "id": "Crab",
        "name": "Crab",
        "initiativeModifier": 5,
        "health": 2,
        "currentHealth": 2,
        "dodge": 10,
        "str": 1,
        "dex": 5,
        "con": 5,
        "wis": 4,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The crab can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 8,
        "currentVes": 10,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Crocodile",
        "name": "Crocodile",
        "initiativeModifier": 5,
        "health": 19,
        "currentHealth": 19,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hold Breath",
                "desc": "The crocodile can hold its breath for 15 minutes."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) Physical damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target"
            }
        ]
    },
    {
        "id": "Cult Fanatic",
        "name": "Cult Fanatic",
        "initiativeModifier": 7,
        "health": 22,
        "currentHealth": 22,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Dark Devotion",
                "desc": "The fanatic has advantage on saving throws against being charmed or frightened."
            },
            {
                "name": "Spellcasting",
                "desc": "The fanatic is a Deluvian Class spellcaster. Its spell casting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n- 1st level (4 slots): command, inflict wounds, shield of faith\n- 2nd level (3 slots): hold person, spiritual weapon"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 14,
        "currentVes": 14,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The fanatic makes two melee attacks."
            },
            {
                "name": "Dagger",
                "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Cultist",
        "name": "Cultist",
        "initiativeModifier": 6,
        "health": 9,
        "currentHealth": 9,
        "dodge": 11,
        "str": 5,
        "dex": 6,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Dark Devotion",
                "desc": "The cultist has advantage on saving throws against being charmed or frightened."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Darkmantle",
        "name": "Darkmantle",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Echolocation",
                "desc": "The darkmantle can't use its blindsight while deafened."
            },
            {
                "name": "False Appearance",
                "desc": "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Crush",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) Physical damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.\nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement."
            },
            {
                "name": "Darkness Aura",
                "desc": "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
            }
        ]
    },
    {
        "id": "Death Dog",
        "name": "Death Dog",
        "initiativeModifier": 7,
        "health": 39,
        "currentHealth": 39,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Two-Headed",
                "desc": "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dog makes two bite attacks."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0."
            }
        ]
    },
    {
        "id": "Deep Gnome (Svirfneblin)",
        "name": "Deep Gnome (Svirfneblin)",
        "initiativeModifier": 7,
        "health": 16,
        "currentHealth": 16,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 7,
        "wis": 5,
        "int": 6,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Stone Camouflage",
                "desc": "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            },
            {
                "name": "Gnome Cunning",
                "desc": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: nondetection (self only)\n1/day each: blindness/deafness, blur, disguise self"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "War Pick",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            },
            {
                "name": "Poisoned Dart",
                "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) Physical damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
            }
        ]
    },
    {
        "id": "Deer",
        "name": "Deer",
        "initiativeModifier": 8,
        "health": 4,
        "currentHealth": 4,
        "dodge": 13,
        "str": 5,
        "dex": 8,
        "con": 5,
        "wis": 7,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) Physical damage."
            }
        ]
    },
    {
        "id": "Deva",
        "name": "Deva",
        "initiativeModifier": 9,
        "health": 136,
        "currentHealth": 136,
        "dodge": 14,
        "str": 9,
        "dex": 9,
        "con": 9,
        "wis": 10,
        "int": 8,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Angelic Weapons",
                "desc": "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 Positive damage (included in the attack)."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:\nAt will: detect evil and good\n1/day each: commune, raise dead"
            },
            {
                "name": "Magic Resistance",
                "desc": "The deva has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 18,
        "maxEgo": 20,
        "currentVes": 18,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The deva makes two melee attacks."
            },
            {
                "name": "Mace",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) Physical damage plus 18 (4d8) Positive damage."
            },
            {
                "name": "Healing Touch",
                "desc": "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            },
            {
                "name": "Change Shape",
                "desc": "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
            }
        ]
    },
    {
        "id": "Dire Wolf",
        "name": "Dire Wolf",
        "initiativeModifier": 7,
        "health": 37,
        "currentHealth": 37,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            }
        ]
    },
    {
        "id": "Djinni",
        "name": "Djinni",
        "initiativeModifier": 7,
        "health": 161,
        "currentHealth": 161,
        "dodge": 12,
        "str": 10,
        "dex": 7,
        "con": 11,
        "wis": 8,
        "int": 7,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Elemental Demise",
                "desc": "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, detect magic, Kineticwave\n3/day each: create food and water (can create wine instead of water), tongues, wind walk\n1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 20,
        "currentVes": 22,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The djinni makes three scimitar attacks."
            },
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) Physical damage plus 3 (1d6) Lightning or Kinetic damage (djinni's choice)."
            },
            {
                "name": "Create Whirlwind",
                "desc": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
            }
        ]
    },
    {
        "id": "Doppelganger",
        "name": "Doppelganger",
        "initiativeModifier": 9,
        "health": 52,
        "currentHealth": 52,
        "dodge": 14,
        "str": 5,
        "dex": 9,
        "con": 7,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Ambusher",
                "desc": "In the first round of combat, the doppelganger has advantage on attack rolls against any creature it has surprised."
            },
            {
                "name": "Surprise Attack",
                "desc": "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The doppelganger makes two melee attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) Physical damage."
            },
            {
                "name": "Read Thoughts",
                "desc": "The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
            }
        ]
    },
    {
        "id": "Draft Horse",
        "name": "Draft Horse",
        "initiativeModifier": 5,
        "health": 19,
        "currentHealth": 19,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Dragon Turtle",
        "name": "Dragon Turtle",
        "initiativeModifier": 5,
        "health": 341,
        "currentHealth": 341,
        "dodge": 10,
        "str": 12,
        "dex": 5,
        "con": 10,
        "wis": 6,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon turtle can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 24,
        "maxEgo": 12,
        "currentVes": 24,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) Physical damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone."
            },
            {
                "name": "Steam Breath",
                "desc": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) Burning damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage."
            }
        ]
    },
    {
        "id": "Dretch",
        "name": "Dretch",
        "initiativeModifier": 5,
        "health": 18,
        "currentHealth": 18,
        "dodge": 10,
        "str": 5,
        "dex": 5,
        "con": 6,
        "wis": 4,
        "int": 2,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 8,
        "currentVes": 12,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dretch makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) Physical damage."
            },
            {
                "name": "Fetid Cloud",
                "desc": "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."
            }
        ]
    },
    {
        "id": "Drider",
        "name": "Drider",
        "initiativeModifier": 8,
        "health": 123,
        "currentHealth": 123,
        "dodge": 13,
        "str": 8,
        "dex": 8,
        "con": 9,
        "wis": 7,
        "int": 6,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Fey Ancestry",
                "desc": "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:\nAt will: dancing lights\n1/day each: darkness, faerie Burning"
            },
            {
                "name": "Spider Climb",
                "desc": "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Sunlight Sensitivity",
                "desc": "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Web Walker",
                "desc": "The drider ignores movement restrictions caused by webbing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) Physical damage plus 9 (2d8) poison damage."
            },
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage, or 8 (1d10 + 3) Physical damage if used with two hands."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) Physical damage plus 4 (1d8) poison damage."
            }
        ]
    },
    {
        "id": "Drow",
        "name": "Drow",
        "initiativeModifier": 7,
        "health": 13,
        "currentHealth": 13,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Fey Ancestry",
                "desc": "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: dancing lights\n1/day each: darkness, faerie Burning"
            },
            {
                "name": "Sunlight Sensitivity",
                "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Hand Crossbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) Physical damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
            }
        ]
    },
    {
        "id": "Druid",
        "name": "Druid",
        "initiativeModifier": 6,
        "health": 27,
        "currentHealth": 27,
        "dodge": 11,
        "str": 5,
        "dex": 6,
        "con": 6,
        "wis": 7,
        "int": 6,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Spellcasting",
                "desc": "The druid is a Deluvian Class spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:\n\n- Cantrips (at will): druidcraft, produce flame, shillelagh\n- 1st level (4 slots): entangle, longstrider, speak with animals, Kineticwave\n- 2nd level (3 slots): animal messenger, barkskin"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 14,
        "currentVes": 12,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Quarterstaff",
                "desc": " Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) Physical damage, 4 (1d8) Physical damage if wielded with two hands, or 6 (1d8 + 2) Physical damage with shillelagh."
            }
        ]
    },
    {
        "id": "Dryad",
        "name": "Dryad",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 5,
        "dex": 6,
        "con": 5,
        "wis": 7,
        "int": 7,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Innate Spellcasting",
                "desc": "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:\n\nAt will: druidcraft\n3/day each: entangle, goodberry\n1/day each: barkskin, pass without trace, shillelagh"
            },
            {
                "name": "Magic Resistance",
                "desc": "The dryad has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Speak with Beasts and Plants",
                "desc": "The dryad can communicate with beasts and plants as if they shared a language."
            },
            {
                "name": "Tree Stride",
                "desc": "Once on her turn, the dryad can use 10 ft. of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 ft. of the first tree, appearing in an unoccupied space within 5 ft. of the second tree. Both trees must be large or bigger."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 18,
        "currentVes": 12,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Club",
                "desc": "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1 d4) Physical damage, or 8 (1d8 + 4) Physical damage with shillelagh."
            },
            {
                "name": "Fey Charm",
                "desc": "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time."
            }
        ]
    },
    {
        "id": "Duergar",
        "name": "Duergar",
        "initiativeModifier": 5,
        "health": 26,
        "currentHealth": 26,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Duergar Resilience",
                "desc": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
            },
            {
                "name": "Sunlight Sensitivity",
                "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Enlarge",
                "desc": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
            },
            {
                "name": "War Pick",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage, or 11 (2d8 + 2) Physical damage while enlarged."
            },
            {
                "name": "Javelin",
                "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) Physical damage, or 9 (2d6 + 2) Physical damage while enlarged."
            },
            {
                "name": "Invisibility",
                "desc": "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
            }
        ]
    },
    {
        "id": "Dust Mephit",
        "name": "Dust Mephit",
        "initiativeModifier": 7,
        "health": 17,
        "currentHealth": 17,
        "dodge": 12,
        "str": 2,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 4,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Death Burst",
                "desc": "When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) Physical damage."
            },
            {
                "name": "Blinding Breath",
                "desc": "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Eagle",
        "name": "Eagle",
        "initiativeModifier": 7,
        "health": 3,
        "currentHealth": 3,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 5,
        "wis": 7,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight",
                "desc": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 14,
        "currentVes": 14,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Earth Elemental",
        "name": "Earth Elemental",
        "initiativeModifier": 4,
        "health": 126,
        "currentHealth": 126,
        "dodge": 9,
        "str": 10,
        "dex": 4,
        "con": 10,
        "wis": 5,
        "int": 2,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Earth Glide",
                "desc": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
            },
            {
                "name": "Siege Monster",
                "desc": "The elemental deals double damage to objects and structures."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 10,
        "currentVes": 20,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The elemental makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Efreeti",
        "name": "Efreeti",
        "initiativeModifier": 6,
        "health": 200,
        "currentHealth": 200,
        "dodge": 11,
        "str": 11,
        "dex": 6,
        "con": 12,
        "wis": 7,
        "int": 8,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Elemental Demise",
                "desc": "If the efreeti dies, its body disintegrates in a flash of Burning and puff of smoke, leaving behind only equipment the djinni was wearing or carrying."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The efreeti's innate spell casting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic\n3/day: enlarge/reduce, tongues\n1/day each: conjure elemental (Burning elemental only), gaseous form, invisibility, major image, plane shift, wall of Burning"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 24,
        "maxEgo": 16,
        "currentVes": 24,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
            },
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage plus 7 (2d6) Burning damage."
            },
            {
                "name": "Hurl Flame",
                "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) Burning damage."
            }
        ]
    },
    {
        "id": "Elephant",
        "name": "Elephant",
        "initiativeModifier": 4,
        "health": 76,
        "currentHealth": 76,
        "dodge": 9,
        "str": 11,
        "dex": 4,
        "con": 8,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Trampling Charge",
                "desc": "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 22,
        "maxEgo": 10,
        "currentVes": 22,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Gore",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) Physical damage."
            },
            {
                "name": "Stomp",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) Physical damage."
            }
        ]
    },
    {
        "id": "Elk",
        "name": "Elk",
        "initiativeModifier": 5,
        "health": 13,
        "currentHealth": 13,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Ram",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Erinyes",
        "name": "Erinyes",
        "initiativeModifier": 8,
        "health": 153,
        "currentHealth": 153,
        "dodge": 13,
        "str": 9,
        "dex": 8,
        "con": 9,
        "wis": 7,
        "int": 7,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hellish Weapons",
                "desc": "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
            },
            {
                "name": "Magic Resistance",
                "desc": "The erinyes has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 18,
        "maxEgo": 18,
        "currentVes": 18,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The erinyes makes three attacks"
            },
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) Physical damage, or 9 (1d10 + 4) Physical damage if used with two hands, plus 13 (3d8) poison damage."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) Physical damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic."
            }
        ]
    },
    {
        "id": "Ettercap",
        "name": "Ettercap",
        "initiativeModifier": 7,
        "health": 44,
        "currentHealth": 44,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 3,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Spider Climb",
                "desc": "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "desc": "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "desc": "The ettercap ignores movement restrictions caused by webbing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The ettercap makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) Physical damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) Physical damage."
            },
            {
                "name": "Web",
                "desc": "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to Burning damage and immune to Physical damage."
            }
        ]
    },
    {
        "id": "Ettin",
        "name": "Ettin",
        "initiativeModifier": 4,
        "health": 85,
        "currentHealth": 85,
        "dodge": 9,
        "str": 10,
        "dex": 4,
        "con": 8,
        "wis": 5,
        "int": 3,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Two Heads",
                "desc": "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
            },
            {
                "name": "Wakeful",
                "desc": "When one of the ettin's heads is asleep, its other head is awake."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 20,
        "maxEgo": 10,
        "currentVes": 20,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
            },
            {
                "name": "Battleaxe",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) Physical damage."
            },
            {
                "name": "Morningstar",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Fire Elemental",
        "name": "Fire Elemental",
        "initiativeModifier": 8,
        "health": 102,
        "currentHealth": 102,
        "dodge": 13,
        "str": 5,
        "dex": 8,
        "con": 8,
        "wis": 5,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Fire Form",
                "desc": "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) Burning damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) Burning damage and catches Burning; until someone takes an action to douse the Burning, the creature takes 5 (1d10) Burning damage at the start of each of its turns."
            },
            {
                "name": "Illumination",
                "desc": "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft.."
            },
            {
                "name": "Water Susceptibility",
                "desc": "For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 Freezing damage."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The elemental makes two touch attacks."
            },
            {
                "name": "Touch",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Burning damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the Burning, the target takes 5 (1d10) Burning damage at the start of each of its turns."
            }
        ]
    },
    {
        "id": "Fire Giant",
        "name": "Fire Giant",
        "initiativeModifier": 4,
        "health": 162,
        "currentHealth": 162,
        "dodge": 9,
        "str": 12,
        "dex": 4,
        "con": 11,
        "wis": 7,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 24,
        "maxEgo": 14,
        "currentVes": 24,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The giant makes two greatsword attacks."
            },
            {
                "name": "Greatsword",
                "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) Physical damage."
            }
        ]
    },
    {
        "id": "Flesh Golem",
        "name": "Flesh Golem",
        "initiativeModifier": 4,
        "health": 93,
        "currentHealth": 93,
        "dodge": 9,
        "str": 9,
        "dex": 4,
        "con": 9,
        "wis": 5,
        "int": 3,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Berserk",
                "desc": "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.\nThe golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again."
            },
            {
                "name": "Aversion of Fire",
                "desc": "If the golem takes Burning damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
            },
            {
                "name": "Immutable Form",
                "desc": "The golem is immune to any spell or effect that would alter its form."
            },
            {
                "name": "Lightning Absorption",
                "desc": "Whenever the golem is subjected to Lightning damage, it takes no damage and instead regains a number of hit points equal to the Lightning damage dealt."
            },
            {
                "name": "Magic Resistance",
                "desc": "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The golem's weapon attacks are magical."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The golem makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Flying Snake",
        "name": "Flying Snake",
        "initiativeModifier": 9,
        "health": 5,
        "currentHealth": 5,
        "dodge": 14,
        "str": 2,
        "dex": 9,
        "con": 5,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Flyby",
                "desc": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 Physical damage plus 7 (3d4) poison damage."
            }
        ]
    },
    {
        "id": "Flying Sword",
        "name": "Flying Sword",
        "initiativeModifier": 7,
        "health": 17,
        "currentHealth": 17,
        "dodge": 12,
        "str": 6,
        "dex": 7,
        "con": 5,
        "wis": 2,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Antimagic Susceptibility",
                "desc": "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                "name": "False Appearance",
                "desc": "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 4,
        "currentVes": 14,
        "currentEgo": 4,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Frog",
        "name": "Frog",
        "initiativeModifier": 6,
        "health": 1,
        "currentHealth": 1,
        "dodge": 11,
        "str": 0,
        "dex": 6,
        "con": 4,
        "wis": 4,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The frog can breathe air and water"
            },
            {
                "name": "Standing Leap",
                "desc": "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 8,
        "currentVes": 12,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": []
    },
    {
        "id": "Frost Giant",
        "name": "Frost Giant",
        "initiativeModifier": 4,
        "health": 138,
        "currentHealth": 138,
        "dodge": 9,
        "str": 11,
        "dex": 4,
        "con": 10,
        "wis": 5,
        "int": 4,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 22,
        "maxEgo": 12,
        "currentVes": 22,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The giant makes two greataxe attacks."
            },
            {
                "name": "Greataxe",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) Physical damage."
            }
        ]
    },
    {
        "id": "Gargoyle",
        "name": "Gargoyle",
        "initiativeModifier": 5,
        "health": 52,
        "currentHealth": 52,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 8,
        "wis": 5,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "False Appearance",
                "desc": "While the gargoyle remains motion less, it is indistinguishable from an inanimate statue."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The gargoyle makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Gelatinous Cube",
        "name": "Gelatinous Cube",
        "initiativeModifier": 1,
        "health": 84,
        "currentHealth": 84,
        "dodge": 6,
        "str": 7,
        "dex": 1,
        "con": 10,
        "wis": 3,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Ooze Cube",
                "desc": "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.\nCreatures inside the cube can be seen but have total cover.\nA creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.\nThe cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time."
            },
            {
                "name": "Transparent",
                "desc": "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 20,
        "maxEgo": 6,
        "currentVes": 20,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Pseudopod",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage."
            },
            {
                "name": "Engulf",
                "desc": "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
            }
        ]
    },
    {
        "id": "Ghast",
        "name": "Ghast",
        "initiativeModifier": 8,
        "health": 36,
        "currentHealth": 36,
        "dodge": 13,
        "str": 8,
        "dex": 8,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Stench",
                "desc": "Any creature that starts its turn within 5 ft. of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours."
            },
            {
                "name": "Turn Defiance",
                "desc": "The ghast and any ghouls within 30 ft. of it have advantage on saving throws against effects that turn undead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Ghost",
        "name": "Ghost",
        "initiativeModifier": 6,
        "health": 45,
        "currentHealth": 45,
        "dodge": 11,
        "str": 3,
        "dex": 6,
        "con": 5,
        "wis": 6,
        "int": 5,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Ethereal Sight",
                "desc": "The ghost can see 60 ft. into the Ethereal Plane when it is on the Material Plane, and vice versa."
            },
            {
                "name": "Incorporeal Movement",
                "desc": "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) Kinetic damage if it ends its turn inside an object."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 16,
        "currentVes": 12,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Withering Touch",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) Negative damage."
            },
            {
                "name": "Etherealness",
                "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
            },
            {
                "name": "Horrifying Visage",
                "desc": "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 \u00d7 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
            },
            {
                "name": "Possession",
                "desc": "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or Kineticd out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
            }
        ]
    },
    {
        "id": "Ghoul",
        "name": "Ghoul",
        "initiativeModifier": 7,
        "health": 22,
        "currentHealth": 22,
        "dodge": 12,
        "str": 6,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) Physical damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Giant Ape",
        "name": "Giant Ape",
        "initiativeModifier": 7,
        "health": 157,
        "currentHealth": 157,
        "dodge": 12,
        "str": 11,
        "dex": 7,
        "con": 9,
        "wis": 6,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 22,
        "maxEgo": 12,
        "currentVes": 22,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The ape makes two fist attacks."
            },
            {
                "name": "Fist",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Badger",
        "name": "Giant Badger",
        "initiativeModifier": 5,
        "health": 13,
        "currentHealth": 13,
        "dodge": 10,
        "str": 6,
        "dex": 5,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The badger makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Bat",
        "name": "Giant Bat",
        "initiativeModifier": 8,
        "health": 22,
        "currentHealth": 22,
        "dodge": 13,
        "str": 7,
        "dex": 8,
        "con": 5,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Echolocation",
                "desc": "The bat can't use its blindsight while deafened."
            },
            {
                "name": "Keen Hearing",
                "desc": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Boar",
        "name": "Giant Boar",
        "initiativeModifier": 5,
        "health": 42,
        "currentHealth": 42,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 8,
        "wis": 3,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) Physical damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            },
            {
                "name": "Relentless",
                "desc": "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 6,
        "currentVes": 16,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Tusk",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Centipede",
        "name": "Giant Centipede",
        "initiativeModifier": 7,
        "health": 4,
        "currentHealth": 4,
        "dodge": 12,
        "str": 2,
        "dex": 7,
        "con": 6,
        "wis": 3,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 6,
        "currentVes": 14,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) Physical damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            }
        ]
    },
    {
        "id": "Giant Constrictor Snake",
        "name": "Giant Constrictor Snake",
        "initiativeModifier": 7,
        "health": 60,
        "currentHealth": 60,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Constrict",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) Physical damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
            }
        ]
    },
    {
        "id": "Giant Crab",
        "name": "Giant Crab",
        "initiativeModifier": 7,
        "health": 13,
        "currentHealth": 13,
        "dodge": 12,
        "str": 6,
        "dex": 7,
        "con": 5,
        "wis": 4,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The crab can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 8,
        "currentVes": 14,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target."
            }
        ]
    },
    {
        "id": "Giant Crocodile",
        "name": "Giant Crocodile",
        "initiativeModifier": 4,
        "health": 85,
        "currentHealth": 85,
        "dodge": 9,
        "str": 10,
        "dex": 4,
        "con": 8,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hold Breath",
                "desc": "The crocodile can hold its breath for 30 minutes."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 10,
        "currentVes": 20,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The crocodile makes two attacks: one with its bite and one with its tail."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) Physical damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) Physical damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
            }
        ]
    },
    {
        "id": "Giant Eagle",
        "name": "Giant Eagle",
        "initiativeModifier": 8,
        "health": 26,
        "currentHealth": 26,
        "dodge": 13,
        "str": 8,
        "dex": 8,
        "con": 6,
        "wis": 7,
        "int": 4,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight",
                "desc": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The eagle makes two attacks: one with its beak and one with its talons."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Elk",
        "name": "Giant Elk",
        "initiativeModifier": 8,
        "health": 42,
        "currentHealth": 42,
        "dodge": 13,
        "str": 9,
        "dex": 8,
        "con": 7,
        "wis": 7,
        "int": 3,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Ram",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Fire Beetle",
        "name": "Giant Fire Beetle",
        "initiativeModifier": 5,
        "health": 4,
        "currentHealth": 4,
        "dodge": 10,
        "str": 4,
        "dex": 5,
        "con": 6,
        "wis": 3,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Illumination",
                "desc": "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 6,
        "currentVes": 12,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Frog",
        "name": "Giant Frog",
        "initiativeModifier": 6,
        "health": 18,
        "currentHealth": 18,
        "dodge": 11,
        "str": 6,
        "dex": 6,
        "con": 5,
        "wis": 5,
        "int": 1,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The frog can breathe air and water"
            },
            {
                "name": "Standing Leap",
                "desc": "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target."
            },
            {
                "name": "Swallow",
                "desc": "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone."
            }
        ]
    },
    {
        "id": "Giant Goat",
        "name": "Giant Goat",
        "initiativeModifier": 5,
        "health": 19,
        "currentHealth": 19,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) Physical damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            },
            {
                "name": "Sure-Footed",
                "desc": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Ram",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Hyena",
        "name": "Giant Hyena",
        "initiativeModifier": 7,
        "health": 45,
        "currentHealth": 45,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Rampage",
                "desc": "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Lizard",
        "name": "Giant Lizard",
        "initiativeModifier": 6,
        "health": 19,
        "currentHealth": 19,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Octopus",
        "name": "Giant Octopus",
        "initiativeModifier": 6,
        "health": 52,
        "currentHealth": 52,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 2,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hold Breath",
                "desc": "While out of water, the octopus can hold its breath for 1 hour."
            },
            {
                "name": "Underwater Camouflage",
                "desc": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
            },
            {
                "name": "Water Breathing",
                "desc": "The octopus can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Tentacles",
                "desc": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) Physical damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target."
            },
            {
                "name": "Ink Cloud",
                "desc": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
            }
        ]
    },
    {
        "id": "Giant Owl",
        "name": "Giant Owl",
        "initiativeModifier": 7,
        "health": 19,
        "currentHealth": 19,
        "dodge": 12,
        "str": 6,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 4,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Flyby",
                "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
            },
            {
                "name": "Keen Hearing and Sight",
                "desc": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Poisonous Snake",
        "name": "Giant Poisonous Snake",
        "initiativeModifier": 9,
        "health": 11,
        "currentHealth": 11,
        "dodge": 14,
        "str": 5,
        "dex": 9,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) Physical damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Giant Rat",
        "name": "Giant Rat",
        "initiativeModifier": 7,
        "health": 7,
        "currentHealth": 7,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Rat (Diseased)",
        "name": "Giant Rat (Diseased)",
        "initiativeModifier": 7,
        "health": 7,
        "currentHealth": 7,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) Physical damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies."
            }
        ]
    },
    {
        "id": "Giant Scorpion",
        "name": "Giant Scorpion",
        "initiativeModifier": 6,
        "health": 52,
        "currentHealth": 52,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 7,
        "wis": 4,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 8,
        "currentVes": 14,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target."
            },
            {
                "name": "Multiattack",
                "desc": "The scorpion makes three attacks: two with its claws and one with its sting."
            },
            {
                "name": "Sting",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) Physical damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Giant Sea Horse",
        "name": "Giant Sea Horse",
        "initiativeModifier": 7,
        "health": 16,
        "currentHealth": 16,
        "dodge": 12,
        "str": 6,
        "dex": 7,
        "con": 5,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) Physical damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
            },
            {
                "name": "Water Breathing",
                "desc": "The sea horse can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Ram",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Shark",
        "name": "Giant Shark",
        "initiativeModifier": 5,
        "health": 126,
        "currentHealth": 126,
        "dodge": 10,
        "str": 11,
        "dex": 5,
        "con": 10,
        "wis": 5,
        "int": 0,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Blood Frenzy",
                "desc": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                "name": "Water Breathing",
                "desc": "The shark can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 22,
        "maxEgo": 10,
        "currentVes": 22,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Spider",
        "name": "Giant Spider",
        "initiativeModifier": 8,
        "health": 26,
        "currentHealth": 26,
        "dodge": 13,
        "str": 7,
        "dex": 8,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Spider Climb",
                "desc": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "desc": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "desc": "The spider ignores movement restrictions caused by webbing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) Physical damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            },
            {
                "name": "Web",
                "desc": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to Burning damage; immunity to Physical, poison, and Neutral damage)."
            }
        ]
    },
    {
        "id": "Giant Toad",
        "name": "Giant Toad",
        "initiativeModifier": 6,
        "health": 39,
        "currentHealth": 39,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The toad can breathe air and water"
            },
            {
                "name": "Standing Leap",
                "desc": "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) Physical damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target."
            },
            {
                "name": "Swallow",
                "desc": "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
            }
        ]
    },
    {
        "id": "Giant Vulture",
        "name": "Giant Vulture",
        "initiativeModifier": 5,
        "health": 22,
        "currentHealth": 22,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 7,
        "wis": 6,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight and Smell",
                "desc": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The vulture makes two attacks: one with its beak and one with its talons."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) Physical damage."
            },
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Wasp",
        "name": "Giant Wasp",
        "initiativeModifier": 7,
        "health": 13,
        "currentHealth": 13,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Sting",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) Physical damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            }
        ]
    },
    {
        "id": "Giant Weasel",
        "name": "Giant Weasel",
        "initiativeModifier": 8,
        "health": 9,
        "currentHealth": 9,
        "dodge": 13,
        "str": 5,
        "dex": 8,
        "con": 5,
        "wis": 6,
        "int": 2,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Giant Wolf Spider",
        "name": "Giant Wolf Spider",
        "initiativeModifier": 8,
        "health": 11,
        "currentHealth": 11,
        "dodge": 13,
        "str": 6,
        "dex": 8,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Spider Climb",
                "desc": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "desc": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "desc": "The spider ignores movement restrictions caused by webbing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) Physical damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            }
        ]
    },
    {
        "id": "Gibbering Mouther",
        "name": "Gibbering Mouther",
        "initiativeModifier": 4,
        "health": 67,
        "currentHealth": 67,
        "dodge": 9,
        "str": 5,
        "dex": 4,
        "con": 8,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Aberrant Ground",
                "desc": "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn."
            },
            {
                "name": "Gibbering",
                "desc": "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle."
            },
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) Physical damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther."
            },
            {
                "name": "Blinding Spittle",
                "desc": "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn."
            }
        ]
    },
    {
        "id": "Glabrezu",
        "name": "Glabrezu",
        "initiativeModifier": 7,
        "health": 157,
        "currentHealth": 157,
        "dodge": 12,
        "str": 10,
        "dex": 7,
        "con": 10,
        "wis": 8,
        "int": 9,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Innate Spellcasting",
                "desc": "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components:\nAt will: darkness, detect magic, dispel magic\n1/day each: confusion, fly, power word stun"
            },
            {
                "name": "Magic Resistance",
                "desc": "The glabrezu has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 20,
        "maxEgo": 18,
        "currentVes": 20,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
            },
            {
                "name": "Pincer",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) Physical damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target."
            },
            {
                "name": "Fist",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Gladiator",
        "name": "Gladiator",
        "initiativeModifier": 7,
        "health": 112,
        "currentHealth": 112,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Brave",
                "desc": "The gladiator has advantage on saving throws against being frightened."
            },
            {
                "name": "Brute",
                "desc": "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The gladiator makes three melee attacks or two ranged attacks."
            },
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) Physical damage, or 13 (2d8 + 4) Physical damage if used with two hands to make a melee attack."
            },
            {
                "name": "Shield Bash",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) Physical damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
            }
        ]
    },
    {
        "id": "Gnoll",
        "name": "Gnoll",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 5,
        "wis": 5,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Rampage",
                "desc": "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) Physical damage."
            },
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) Physical damage, or 6 (1d8 + 2) Physical damage if used with two hands to make a melee attack."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Goat",
        "name": "Goat",
        "initiativeModifier": 5,
        "health": 4,
        "currentHealth": 4,
        "dodge": 10,
        "str": 6,
        "dex": 5,
        "con": 5,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) Physical damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone."
            },
            {
                "name": "Sure-Footed",
                "desc": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Ram",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Goblin",
        "name": "Goblin",
        "initiativeModifier": 7,
        "health": 7,
        "currentHealth": 7,
        "dodge": 12,
        "str": 4,
        "dex": 7,
        "con": 5,
        "wis": 4,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Nimble Escape",
                "desc": "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Shortbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Gold Dragon Wyrmling",
        "name": "Gold Dragon Wyrmling",
        "initiativeModifier": 7,
        "health": 60,
        "currentHealth": 60,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 5,
        "int": 7,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales Burning in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) Burning damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Gorgon",
        "name": "Gorgon",
        "initiativeModifier": 5,
        "health": 114,
        "currentHealth": 114,
        "dodge": 10,
        "str": 10,
        "dex": 5,
        "con": 9,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Trampling Charge",
                "desc": "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 12,
        "currentVes": 20,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Gore",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) Physical damage."
            },
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) Physical damage."
            },
            {
                "name": "Petrifying Breath",
                "desc": "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic."
            }
        ]
    },
    {
        "id": "Gray Ooze",
        "name": "Gray Ooze",
        "initiativeModifier": 3,
        "health": 22,
        "currentHealth": 22,
        "dodge": 8,
        "str": 6,
        "dex": 3,
        "con": 8,
        "wis": 3,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amorphous",
                "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                "name": "Corrode Metal",
                "desc": "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.\nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
            },
            {
                "name": "False Appearance",
                "desc": "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 6,
        "currentVes": 16,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Pseudopod",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
            }
        ]
    },
    {
        "id": "Green Dragon Wyrmling",
        "name": "Green Dragon Wyrmling",
        "initiativeModifier": 6,
        "health": 38,
        "currentHealth": 38,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 7,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 14,
        "currentVes": 14,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) Physical damage plus 3 (1d6) poison damage."
            },
            {
                "name": "Poison Breath",
                "desc": "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Green Hag",
        "name": "Green Hag",
        "initiativeModifier": 6,
        "health": 82,
        "currentHealth": 82,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 8,
        "wis": 7,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The hag can breathe air and water."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:\n\nAt will: dancing lights, minor illusion, vicious mockery"
            },
            {
                "name": "Mimicry",
                "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Illusory Appearance",
                "desc": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised."
            },
            {
                "name": "Invisible Passage",
                "desc": "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her."
            }
        ]
    },
    {
        "id": "Grick",
        "name": "Grick",
        "initiativeModifier": 7,
        "health": 27,
        "currentHealth": 27,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 5,
        "wis": 7,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Stone Camouflage",
                "desc": "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 14,
        "currentVes": 14,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target."
            },
            {
                "name": "Tentacles",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) Physical damage."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Griffon",
        "name": "Griffon",
        "initiativeModifier": 7,
        "health": 59,
        "currentHealth": 59,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 1,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight",
                "desc": "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The griffon makes two attacks: one with its beak and one with its claws."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Grimlock",
        "name": "Grimlock",
        "initiativeModifier": 6,
        "health": 11,
        "currentHealth": 11,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 6,
        "wis": 4,
        "int": 4,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Blind Senses",
                "desc": "The grimlock can't use its blindsight while deafened and unable to smell."
            },
            {
                "name": "Keen Hearing and Smell",
                "desc": "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Stone Camouflage",
                "desc": "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 8,
        "currentVes": 16,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Spiked Bone Club",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) Physical damage plus 2 (1d4) Physical damage."
            }
        ]
    },
    {
        "id": "Guard",
        "name": "Guard",
        "initiativeModifier": 6,
        "health": 11,
        "currentHealth": 11,
        "dodge": 11,
        "str": 6,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) Physical damage or 5 (1d8 + 1) Physical damage if used with two hands to make a melee attack."
            }
        ]
    },
    {
        "id": "Guardian Naga",
        "name": "Guardian Naga",
        "initiativeModifier": 9,
        "health": 127,
        "currentHealth": 127,
        "dodge": 14,
        "str": 9,
        "dex": 9,
        "con": 8,
        "wis": 9,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Rejuvenation",
                "desc": "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
            },
            {
                "name": "Spellcasting",
                "desc": "The naga is an Enoch Class spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:\n\n- Cantrips (at will): mending, sacred flame, thaumaturgy\n- 1st level (4 slots): command, cure wounds, shield of faith\n- 2nd level (3 slots): calm emotions, hold person\n- 3rd level (3 slots): bestow curse, clairvoyance\n- 4th level (3 slots): banishment, freedom of movement\n- 5th level (2 slots): flame strike, geas\n- 6th level (1 slot): true seeing"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 18,
        "maxEgo": 18,
        "currentVes": 18,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8 + 4) Physical damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "Spit Poison",
                "desc": "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Gynosphinx",
        "name": "Gynosphinx",
        "initiativeModifier": 7,
        "health": 136,
        "currentHealth": 136,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 9,
        "int": 9,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Inscrutable",
                "desc": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
            },
            {
                "name": "Magic Weapons",
                "desc": "The sphinx's weapon attacks are magical."
            },
            {
                "name": "Spellcasting",
                "desc": "The sphinx is a Enoch Class spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:\n\n- Cantrips (at will): mage hand, minor illusion, prestidigitation\n- 1st level (4 slots): detect magic, identify, shield\n- 2nd level (3 slots): darkness, locate object, suggestion\n- 3rd level (3 slots): dispel magic, remove curse, tongues\n- 4th level (3 slots): banishment, greater invisibility\n- 5th level (1 slot): legend lore"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 18,
        "maxEgo": 18,
        "currentVes": 18,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Claw Attack",
                "desc": "The sphinx makes one claw attack."
            },
            {
                "name": "Teleport (Costs 2 Actions)",
                "desc": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                "name": "Cast a Spell (Costs 3 Actions)",
                "desc": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The sphinx makes two claw attacks."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Half-Red Dragon Veteran",
        "name": "Half-Red Dragon Veteran",
        "initiativeModifier": 6,
        "health": 65,
        "currentHealth": 65,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
            },
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage, or 8 (1d10 + 3) Physical damage if used with two hands."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Heavy Crossbow",
                "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) Physical damage."
            },
            {
                "name": "Fire Breath",
                "desc": "The veteran exhales Burning in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Harpy",
        "name": "Harpy",
        "initiativeModifier": 6,
        "health": 38,
        "currentHealth": 38,
        "dodge": 11,
        "str": 6,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 3,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The harpy makes two attacks: one with its claws and one with its club."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) Physical damage."
            },
            {
                "name": "Club",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) Physical damage."
            },
            {
                "name": "Luring Song",
                "desc": "The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.\nWhile charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.\nA target that successfully saves is immune to this harpy's song for the next 24 hours."
            }
        ]
    },
    {
        "id": "Hawk",
        "name": "Hawk",
        "initiativeModifier": 8,
        "health": 1,
        "currentHealth": 1,
        "dodge": 13,
        "str": 2,
        "dex": 8,
        "con": 4,
        "wis": 7,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight",
                "desc": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Hell Hound",
        "name": "Hell Hound",
        "initiativeModifier": 6,
        "health": 45,
        "currentHealth": 45,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 7,
        "wis": 6,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage plus 7 (2d6) Burning damage."
            },
            {
                "name": "Fire Breath",
                "desc": "The hound exhales Burning in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Hezrou",
        "name": "Hezrou",
        "initiativeModifier": 8,
        "health": 136,
        "currentHealth": 136,
        "dodge": 13,
        "str": 9,
        "dex": 8,
        "con": 10,
        "wis": 6,
        "int": 2,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Magic Resistance",
                "desc": "The hezrou has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Stench",
                "desc": "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 12,
        "currentVes": 20,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The hezrou makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Hill Giant",
        "name": "Hill Giant",
        "initiativeModifier": 4,
        "health": 105,
        "currentHealth": 105,
        "dodge": 9,
        "str": 10,
        "dex": 4,
        "con": 9,
        "wis": 4,
        "int": 2,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 8,
        "currentVes": 20,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The giant makes two greatclub attacks."
            },
            {
                "name": "Greatclub",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Hippogriff",
        "name": "Hippogriff",
        "initiativeModifier": 6,
        "health": 19,
        "currentHealth": 19,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight",
                "desc": "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The hippogriff makes two attacks: one with its beak and one with its claws."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Hobgoblin",
        "name": "Hobgoblin",
        "initiativeModifier": 6,
        "health": 11,
        "currentHealth": 11,
        "dodge": 11,
        "str": 6,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Martial Advantage",
                "desc": "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) Physical damage, or 6 (1d10 + 1) Physical damage if used with two hands."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Homunculus",
        "name": "Homunculus",
        "initiativeModifier": 7,
        "health": 5,
        "currentHealth": 5,
        "dodge": 12,
        "str": 2,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Telepathic Bond",
                "desc": "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 Physical damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way."
            }
        ]
    },
    {
        "id": "Horned Devil",
        "name": "Horned Devil",
        "initiativeModifier": 8,
        "health": 178,
        "currentHealth": 178,
        "dodge": 13,
        "str": 11,
        "dex": 8,
        "con": 10,
        "wis": 8,
        "int": 6,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "desc": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 16,
        "currentVes": 22,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
            },
            {
                "name": "Fork",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) Physical damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
            },
            {
                "name": "Hurl Flame",
                "desc": "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) Burning damage. If the target is a flammable object that isn't being worn or carried, it also catches Burning."
            }
        ]
    },
    {
        "id": "Hunter Shark",
        "name": "Hunter Shark",
        "initiativeModifier": 6,
        "health": 45,
        "currentHealth": 45,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 7,
        "wis": 5,
        "int": 0,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Blood Frenzy",
                "desc": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                "name": "Water Breathing",
                "desc": "The shark can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Hydra",
        "name": "Hydra",
        "initiativeModifier": 6,
        "health": 172,
        "currentHealth": 172,
        "dodge": 11,
        "str": 10,
        "dex": 6,
        "con": 10,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hold Breath",
                "desc": "The hydra can hold its breath for 1 hour."
            },
            {
                "name": "Multiple Heads",
                "desc": "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.\nWhenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.\nAt the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken Burning damage since its last turn. The hydra regains 10 hit points for each head regrown in this way."
            },
            {
                "name": "Reactive Heads",
                "desc": "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks."
            },
            {
                "name": "Wakeful",
                "desc": "While the hydra sleeps, at least one of its heads is awake."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 10,
        "currentVes": 20,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The hydra makes as many bite attacks as it has heads."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Hyena",
        "name": "Hyena",
        "initiativeModifier": 6,
        "health": 5,
        "currentHealth": 5,
        "dodge": 11,
        "str": 5,
        "dex": 6,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Pack Tactics",
                "desc": "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) Physical damage."
            }
        ]
    },
    {
        "id": "Ice Devil",
        "name": "Ice Devil",
        "initiativeModifier": 7,
        "health": 180,
        "currentHealth": 180,
        "dodge": 12,
        "str": 10,
        "dex": 7,
        "con": 9,
        "wis": 7,
        "int": 9,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                "name": "Magic Resistance",
                "desc": "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 20,
        "maxEgo": 18,
        "currentVes": 20,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) Physical damage plus 10 (3d6) Freezing damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) Physical damage plus 10 (3d6) Freezing damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) Physical damage plus 10 (3d6) Freezing damage."
            },
            {
                "name": "Wall of Ice",
                "desc": "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.\nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) Freezing damage on a failed save, or half as much damage on a successful one.\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to Burning damage, and immunity to acid, Freezing, Negative, poison, and Neutral damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) Freezing damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
            }
        ]
    },
    {
        "id": "Ice Mephit",
        "name": "Ice Mephit",
        "initiativeModifier": 6,
        "health": 21,
        "currentHealth": 21,
        "dodge": 11,
        "str": 3,
        "dex": 6,
        "con": 5,
        "wis": 5,
        "int": 4,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Death Burst",
                "desc": "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) Physical damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "False Appearance",
                "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) Physical damage plus 2 (1d4) Freezing damage."
            },
            {
                "name": "Frost Breath",
                "desc": "The mephit exhales a 15-foot cone of Freezing air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) Freezing damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Imp",
        "name": "Imp",
        "initiativeModifier": 8,
        "health": 10,
        "currentHealth": 10,
        "dodge": 13,
        "str": 3,
        "dex": 8,
        "con": 6,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the imp's darkvision."
            },
            {
                "name": "Magic Resistance",
                "desc": "The imp has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Sting (Bite in Beast Form)",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) Physical damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "Invisibility",
                "desc": "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
            }
        ]
    },
    {
        "id": "Invisible Stalker",
        "name": "Invisible Stalker",
        "initiativeModifier": 9,
        "health": 104,
        "currentHealth": 104,
        "dodge": 14,
        "str": 8,
        "dex": 9,
        "con": 7,
        "wis": 7,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Invisibility",
                "desc": "The stalker is invisible."
            },
            {
                "name": "Faultless Tracker",
                "desc": "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The stalker makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Iron Golem",
        "name": "Iron Golem",
        "initiativeModifier": 4,
        "health": 210,
        "currentHealth": 210,
        "dodge": 9,
        "str": 12,
        "dex": 4,
        "con": 10,
        "wis": 5,
        "int": 1,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Fire Absorption",
                "desc": "Whenever the golem is subjected to Burning damage, it takes no damage and instead regains a number of hit points equal to the Burning damage dealt."
            },
            {
                "name": "Immutable Form",
                "desc": "The golem is immune to any spell or effect that would alter its form."
            },
            {
                "name": "Magic Resistance",
                "desc": "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The golem's weapon attacks are magical."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 24,
        "maxEgo": 10,
        "currentVes": 24,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The golem makes two melee attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) Physical damage."
            },
            {
                "name": "Sword",
                "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) Physical damage."
            },
            {
                "name": "Poison Breath",
                "desc": "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Jackal",
        "name": "Jackal",
        "initiativeModifier": 7,
        "health": 3,
        "currentHealth": 3,
        "dodge": 12,
        "str": 4,
        "dex": 7,
        "con": 5,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) Physical damage."
            }
        ]
    },
    {
        "id": "Killer Whale",
        "name": "Killer Whale",
        "initiativeModifier": 5,
        "health": 90,
        "currentHealth": 90,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Echolocation",
                "desc": "The whale can't use its blindsight while deafened."
            },
            {
                "name": "Hold Breath",
                "desc": "The whale can hold its breath for 30 minutes"
            },
            {
                "name": "Keen Hearing",
                "desc": "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Knight",
        "name": "Knight",
        "initiativeModifier": 5,
        "health": 52,
        "currentHealth": 52,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Brave",
                "desc": "The knight has advantage on saving throws against being frightened."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The knight makes two melee attacks."
            },
            {
                "name": "Greatsword",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            },
            {
                "name": "Heavy Crossbow",
                "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) Physical damage."
            },
            {
                "name": "Leadership",
                "desc": "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
            }
        ]
    },
    {
        "id": "Kobold",
        "name": "Kobold",
        "initiativeModifier": 7,
        "health": 5,
        "currentHealth": 5,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 4,
        "wis": 3,
        "int": 4,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Sunlight Sensitivity",
                "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                "name": "Pack Tactics",
                "desc": "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 8,
        "currentVes": 14,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Dagger",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            },
            {
                "name": "Sling",
                "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Kraken",
        "name": "Kraken",
        "initiativeModifier": 5,
        "health": 472,
        "currentHealth": 472,
        "dodge": 10,
        "str": 15,
        "dex": 5,
        "con": 12,
        "wis": 9,
        "int": 11,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The kraken can breathe air and water."
            },
            {
                "name": "Freedom of Movement",
                "desc": "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled."
            },
            {
                "name": "Siege Monster",
                "desc": "The kraken deals double damage to objects and structures."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 30,
        "maxEgo": 22,
        "currentVes": 30,
        "currentEgo": 22,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Tentacle Attack or Fling",
                "desc": "The kraken makes one tentacle attack or uses its Fling."
            },
            {
                "name": "Lightning Storm (Costs 2 Actions)",
                "desc": "The kraken uses Lightning Storm."
            },
            {
                "name": "Ink Cloud (Costs 3 Actions)",
                "desc": "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) Physical damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
            },
            {
                "name": "Tentacle",
                "desc": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) Physical damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target."
            },
            {
                "name": "Fling",
                "desc": "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) Physical damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
            },
            {
                "name": "Lightning Storm",
                "desc": "The kraken magically creates three bolts of Lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) Lightning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Lamia",
        "name": "Lamia",
        "initiativeModifier": 6,
        "health": 97,
        "currentHealth": 97,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 7,
        "wis": 7,
        "int": 7,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Innate Spellcasting",
                "desc": "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components. At will: disguise self (any humanoid form), major image 3/day each: charm person, mirror image, scrying, suggestion 1/day: geas"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 16,
        "currentVes": 16,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) Physical damage."
            },
            {
                "name": "Dagger",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) Physical damage."
            },
            {
                "name": "Intoxicating Touch",
                "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks."
            }
        ]
    },
    {
        "id": "Lemure",
        "name": "Lemure",
        "initiativeModifier": 2,
        "health": 13,
        "currentHealth": 13,
        "dodge": 7,
        "str": 5,
        "dex": 2,
        "con": 5,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Devil's Sight",
                "desc": "Magical darkness doesn't impede the lemure's darkvision."
            },
            {
                "name": "Hellish Rejuvenation",
                "desc": "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 10,
        "currentVes": 10,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Fist",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) Physical damage."
            }
        ]
    },
    {
        "id": "Lich",
        "name": "Lich",
        "initiativeModifier": 8,
        "health": 135,
        "currentHealth": 135,
        "dodge": 13,
        "str": 5,
        "dex": 8,
        "con": 8,
        "wis": 7,
        "int": 10,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the lich fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Rejuvenation",
                "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
            },
            {
                "name": "Turn Resistance",
                "desc": "The lich has advantage on saving throws against any effect that turns undead."
            },
            {
                "name": "Spellcasting",
                "desc": "The lich is an Apollyon Class spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:\n\n- Cantrips (at will): mage hand, prestidigitation, ray of frost\n- 1st level (4 slots): detect magic, magic missile, shield, Kineticwave\n- 2nd level (3 slots): acid arrow, detect thoughts, invisibility, mirror image\n- 3rd level (3 slots): animate dead, counterspell, dispel magic, Burningball\n- 4th level (3 slots): blight, dimension door\n- 5th level (3 slots): cloudkill, scrying\n- 6th level (1 slot): disintegrate, globe of invulnerability\n- 7th level (1 slot): finger of death, plane shift\n- 8th level (1 slot): dominate monster, power word stun\n- 9th level (1 slot): power word kill"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 16,
        "maxEgo": 20,
        "currentVes": 16,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Cantrip",
                "desc": "The lich casts a cantrip."
            },
            {
                "name": "Paralyzing Touch (Costs 2 Actions)",
                "desc": "The lich uses its Paralyzing Touch."
            },
            {
                "name": "Frightening Gaze (Costs 2 Actions)",
                "desc": "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
            },
            {
                "name": "Disrupt Life (Costs 3 Actions)",
                "desc": "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) Negative damage on a failed save, or half as much damage on a successful one."
            }
        ],
        "MortalMoves": [
            {
                "name": "Paralyzing Touch",
                "desc": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) Freezing damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Lion",
        "name": "Lion",
        "initiativeModifier": 7,
        "health": 26,
        "currentHealth": 26,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The lion has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            },
            {
                "name": "Pounce",
                "desc": "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
            },
            {
                "name": "Running Leap",
                "desc": "With a 10-foot running start, the lion can long jump up to 25 ft.."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Lizard",
        "name": "Lizard",
        "initiativeModifier": 5,
        "health": 2,
        "currentHealth": 2,
        "dodge": 10,
        "str": 1,
        "dex": 5,
        "con": 5,
        "wis": 4,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 8,
        "currentVes": 10,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Lizardfolk",
        "name": "Lizardfolk",
        "initiativeModifier": 5,
        "health": 22,
        "currentHealth": 22,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 6,
        "wis": 6,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hold Breath",
                "desc": "The lizardfolk can hold its breath for 15 minutes."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The lizardfolk makes two melee attacks, each one with a different weapon."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Heavy Club",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Javelin",
                "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Spiked Shield",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Mage",
        "name": "Mage",
        "initiativeModifier": 7,
        "health": 40,
        "currentHealth": 40,
        "dodge": 12,
        "str": 4,
        "dex": 7,
        "con": 5,
        "wis": 6,
        "int": 8,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Spellcasting",
                "desc": "The mage is a Enoch Class spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:\n\n- Cantrips (at will): Burning bolt, light, mage hand, prestidigitation\n- 1st level (4 slots): detect magic, mage armor, magic missile, shield\n- 2nd level (3 slots): misty step, suggestion\n- 3rd level (3 slots): counterspell, Burningball, fly\n- 4th level (3 slots): greater invisibility, ice storm\n- 5th level (1 slot): cone of Freezing"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 14,
        "maxEgo": 16,
        "currentVes": 14,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Dagger",
                "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Magma Mephit",
        "name": "Magma Mephit",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 4,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 3,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Death Burst",
                "desc": "When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) Burning damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "False Appearance",
                "desc": "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) Physical damage plus 2 (1d4) Burning damage."
            },
            {
                "name": "Fire Breath",
                "desc": "The mephit exhales a 15-foot cone of Burning. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Magmin",
        "name": "Magmin",
        "initiativeModifier": 7,
        "health": 9,
        "currentHealth": 9,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 4,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Death Burst",
                "desc": "When the magmin dies, it explodes in a burst of Burning and magma. Each creature within 10 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) Burning damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited."
            },
            {
                "name": "Ignited Illumination",
                "desc": "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Touch",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) Burning damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the Burning, the target takes 3 (1d6) Burning damage at the end of each of its turns."
            }
        ]
    },
    {
        "id": "Mammoth",
        "name": "Mammoth",
        "initiativeModifier": 4,
        "health": 126,
        "currentHealth": 126,
        "dodge": 9,
        "str": 12,
        "dex": 4,
        "con": 10,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Trampling Charge",
                "desc": "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 24,
        "maxEgo": 10,
        "currentVes": 24,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Gore",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) Physical damage."
            },
            {
                "name": "Stomp",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) Physical damage."
            }
        ]
    },
    {
        "id": "Manticore",
        "name": "Manticore",
        "initiativeModifier": 8,
        "health": 68,
        "currentHealth": 68,
        "dodge": 13,
        "str": 8,
        "dex": 8,
        "con": 8,
        "wis": 6,
        "int": 3,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Tail Spike Regrowth",
                "desc": "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Tail Spike",
                "desc": "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Marilith",
        "name": "Marilith",
        "initiativeModifier": 10,
        "health": 189,
        "currentHealth": 189,
        "dodge": 15,
        "str": 9,
        "dex": 10,
        "con": 10,
        "wis": 8,
        "int": 9,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Magic Resistance",
                "desc": "The marilith has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The marilith's weapon attacks are magical."
            },
            {
                "name": "Reactive",
                "desc": "The marilith can take one reaction on every turn in combat."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 20,
        "maxEgo": 20,
        "currentVes": 20,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The marilith can make seven attacks: six with its longswords and one with its tail."
            },
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) Physical damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets."
            },
            {
                "name": "Teleport",
                "desc": "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            }
        ]
    },
    {
        "id": "Mastiff",
        "name": "Mastiff",
        "initiativeModifier": 7,
        "health": 5,
        "currentHealth": 5,
        "dodge": 12,
        "str": 6,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
            }
        ]
    },
    {
        "id": "Medusa",
        "name": "Medusa",
        "initiativeModifier": 7,
        "health": 127,
        "currentHealth": 127,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Petrifying Gaze",
                "desc": "When a creature that can see the medusa's eyes starts its turn within 30 ft. of the medusa, the medusa can Kinetic it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.\nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.\nIf the medusa sees itself reflected on a polished surface within 30 ft. of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The medusa makes either three melee attacks--one with its snake hair and two with its shortsword--or two ranged attacks with its longbow."
            },
            {
                "name": "Snake Hair",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) Physical damage plus 14 (4d6) poison damage."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) Physical damage plus 7 (2d6) poison damage."
            }
        ]
    },
    {
        "id": "Merfolk",
        "name": "Merfolk",
        "initiativeModifier": 6,
        "health": 11,
        "currentHealth": 11,
        "dodge": 11,
        "str": 5,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The merfolk can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) Physical damage, or 4 (1d8) Physical damage if used with two hands to make a melee attack."
            }
        ]
    },
    {
        "id": "Merrow",
        "name": "Merrow",
        "initiativeModifier": 5,
        "health": 45,
        "currentHealth": 45,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 4,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The merrow can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The merrow makes two attacks: one with its bite and one with its claws or harpoon."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) Physical damage."
            },
            {
                "name": "Harpoon",
                "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) Physical damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow."
            }
        ]
    },
    {
        "id": "Mimic",
        "name": "Mimic",
        "initiativeModifier": 6,
        "health": 58,
        "currentHealth": 58,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 7,
        "wis": 6,
        "int": 2,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn 't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Adhesive (Object Form Only)",
                "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
            },
            {
                "name": "False Appearance (Object Form Only)",
                "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary object."
            },
            {
                "name": "Grappler",
                "desc": "The mimic has advantage on attack rolls against any creature grappled by it."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Pseudopod",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage. If the mimic is in object form, the target is subjected to its Adhesive trait."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage plus 4 (1d8) acid damage."
            }
        ]
    },
    {
        "id": "Minotaur",
        "name": "Minotaur",
        "initiativeModifier": 5,
        "health": 76,
        "currentHealth": 76,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 8,
        "int": 3,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) Physical damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 ft. away and knocked prone."
            },
            {
                "name": "Labyrinthine Recall",
                "desc": "The minotaur can perfectly recall any path it has traveled."
            },
            {
                "name": "Reckless",
                "desc": "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Greataxe",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) Physical damage."
            },
            {
                "name": "Gore",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Minotaur Skeleton",
        "name": "Minotaur Skeleton",
        "initiativeModifier": 5,
        "health": 67,
        "currentHealth": 67,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 7,
        "wis": 4,
        "int": 3,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) Physical damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 8,
        "currentVes": 18,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Greataxe",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) Physical damage."
            },
            {
                "name": "Gore",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Mule",
        "name": "Mule",
        "initiativeModifier": 5,
        "health": 11,
        "currentHealth": 11,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Beast of Burden",
                "desc": "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
            },
            {
                "name": "Sure-Footed",
                "desc": "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Mummy",
        "name": "Mummy",
        "initiativeModifier": 4,
        "health": 58,
        "currentHealth": 58,
        "dodge": 9,
        "str": 8,
        "dex": 4,
        "con": 7,
        "wis": 5,
        "int": 3,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
            },
            {
                "name": "Rotting Fist",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage plus 10 (3d6) Negative damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
            },
            {
                "name": "Dreadful Glare",
                "desc": "The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
            }
        ]
    },
    {
        "id": "Mummy Lord",
        "name": "Mummy Lord",
        "initiativeModifier": 5,
        "health": 97,
        "currentHealth": 97,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 9,
        "int": 5,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Magic Resistance",
                "desc": "The mummy lord has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Rejuvenation",
                "desc": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart."
            },
            {
                "name": "Spellcasting",
                "desc": "The mummy lord is a Enoch Class spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:\n\n- Cantrips (at will): sacred flame, thaumaturgy\n- 1st level (4 slots): command, guiding bolt, shield of faith\n- 2nd level (3 slots): hold person, silence, spiritual weapon\n- 3rd level (3 slots): animate dead, dispel magic\n- 4th level (3 slots): divination, guardian of faith\n- 5th level (2 slots): contagion, insect plague\n- 6th level (1 slot): harm"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 18,
        "maxEgo": 18,
        "currentVes": 18,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Attack",
                "desc": "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare."
            },
            {
                "name": "Blinding Dust",
                "desc": "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn."
            },
            {
                "name": "Blasphemous Word (Costs 2 Actions)",
                "desc": "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn."
            },
            {
                "name": "Channel Negative Energy (Costs 2 Actions)",
                "desc": "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn."
            },
            {
                "name": "Whirlwind of Sand (Costs 2 Actions)",
                "desc": "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
            },
            {
                "name": "Rotting Fist",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) Physical damage plus 21 (6d6) Negative damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
            },
            {
                "name": "Dreadful Glare",
                "desc": "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
            }
        ]
    },
    {
        "id": "Nalfeshnee",
        "name": "Nalfeshnee",
        "initiativeModifier": 5,
        "health": 184,
        "currentHealth": 184,
        "dodge": 10,
        "str": 10,
        "dex": 5,
        "con": 11,
        "wis": 6,
        "int": 9,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Magic Resistance",
                "desc": "The nalfeshnee has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 22,
        "maxEgo": 18,
        "currentVes": 22,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) Physical damage."
            },
            {
                "name": "Horror Nimbus",
                "desc": "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours."
            },
            {
                "name": "Teleport",
                "desc": "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            }
        ]
    },
    {
        "id": "Night Hag",
        "name": "Night Hag",
        "initiativeModifier": 7,
        "health": 112,
        "currentHealth": 112,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 7,
        "int": 8,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Innate Spellcasting",
                "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, magic missile\n2/day each: plane shift (self only), ray of enfeeblement, sleep"
            },
            {
                "name": "Magic Resistance",
                "desc": "The hag has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Night Hag Items",
                "desc": "A night hag carries two very rare magic items that she must craft for herself If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.\nHeartstone: This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.\nSoul Bag: When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws (Hag Form Only)",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Change Shape",
                "desc": "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies."
            },
            {
                "name": "Etherealness",
                "desc": "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession."
            },
            {
                "name": "Nightmare Haunting",
                "desc": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic."
            }
        ]
    },
    {
        "id": "Nightmare",
        "name": "Nightmare",
        "initiativeModifier": 7,
        "health": 68,
        "currentHealth": 68,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Confer Fire Resistance",
                "desc": "The nightmare can grant resistance to Burning damage to anyone riding it."
            },
            {
                "name": "Illumination",
                "desc": "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage plus 7 (2d6) Burning damage."
            },
            {
                "name": "Ethereal Stride",
                "desc": "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa."
            }
        ]
    },
    {
        "id": "Noble",
        "name": "Noble",
        "initiativeModifier": 6,
        "health": 9,
        "currentHealth": 9,
        "dodge": 11,
        "str": 5,
        "dex": 6,
        "con": 5,
        "wis": 7,
        "int": 6,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 16,
        "currentVes": 12,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Rapier",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Ochre Jelly",
        "name": "Ochre Jelly",
        "initiativeModifier": 3,
        "health": 45,
        "currentHealth": 45,
        "dodge": 8,
        "str": 7,
        "dex": 3,
        "con": 7,
        "wis": 3,
        "int": 1,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amorphous",
                "desc": "The jelly can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                "name": "Spider Climb",
                "desc": "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 6,
        "currentVes": 14,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Pseudopod",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) Physical damage plus 3 (1d6) acid damage."
            }
        ]
    },
    {
        "id": "Octopus",
        "name": "Octopus",
        "initiativeModifier": 7,
        "health": 3,
        "currentHealth": 3,
        "dodge": 12,
        "str": 2,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hold Breath",
                "desc": "While out of water, the octopus can hold its breath for 30 minutes."
            },
            {
                "name": "Underwater Camouflage",
                "desc": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
            },
            {
                "name": "Water Breathing",
                "desc": "The octopus can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Tentacles",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 Physical damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target."
            },
            {
                "name": "Ink Cloud",
                "desc": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
            }
        ]
    },
    {
        "id": "Ogre",
        "name": "Ogre",
        "initiativeModifier": 4,
        "health": 59,
        "currentHealth": 59,
        "dodge": 9,
        "str": 9,
        "dex": 4,
        "con": 8,
        "wis": 3,
        "int": 2,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 6,
        "currentVes": 18,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Greatclub",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Javelin",
                "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Ogre Zombie",
        "name": "Ogre Zombie",
        "initiativeModifier": 3,
        "health": 85,
        "currentHealth": 85,
        "dodge": 8,
        "str": 9,
        "dex": 3,
        "con": 9,
        "wis": 3,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Undead Fortitude",
                "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is Positive or from a critical hit. On a success, the zombie drops to 1 hit point instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 6,
        "currentVes": 18,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Morningstar",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Oni",
        "name": "Oni",
        "initiativeModifier": 5,
        "health": 110,
        "currentHealth": 110,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 6,
        "int": 7,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Innate Spellcasting",
                "desc": "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:\n\nAt will: darkness, invisibility\n1/day each: charm person, cone of Freezing, gaseous form, sleep"
            },
            {
                "name": "Magic Weapons",
                "desc": "The oni's weapon attacks are magical."
            },
            {
                "name": "Regeneration",
                "desc": "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The oni makes two attacks, either with its claws or its glaive."
            },
            {
                "name": "Claw (Oni Form Only)",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) Physical damage."
            },
            {
                "name": "Glaive",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) Physical damage, or 9 (1d10 + 4) Physical damage in Small or Medium form."
            },
            {
                "name": "Change Shape",
                "desc": "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size."
            }
        ]
    },
    {
        "id": "Orc",
        "name": "Orc",
        "initiativeModifier": 6,
        "health": 15,
        "currentHealth": 15,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 8,
        "wis": 5,
        "int": 3,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Aggressive",
                "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Greataxe",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) Physical damage."
            },
            {
                "name": "Javelin",
                "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Otyugh",
        "name": "Otyugh",
        "initiativeModifier": 5,
        "health": 114,
        "currentHealth": 114,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 9,
        "wis": 6,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Limited Telepathy",
                "desc": "The otyugh can magically transmit simple messages and images to any creature within 120 ft. of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The otyugh makes three attacks: one with its bite and two with its tentacles."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) Physical damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured."
            },
            {
                "name": "Tentacle",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) Physical damage plus 4 (1d8) Physical damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target."
            },
            {
                "name": "Tentacle Slam",
                "desc": "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) Physical damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the Physical damage and isn't stunned."
            }
        ]
    },
    {
        "id": "Owl",
        "name": "Owl",
        "initiativeModifier": 6,
        "health": 1,
        "currentHealth": 1,
        "dodge": 11,
        "str": 1,
        "dex": 6,
        "con": 4,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Flyby",
                "desc": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
            },
            {
                "name": "Keen Hearing and Sight",
                "desc": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Owlbear",
        "name": "Owlbear",
        "initiativeModifier": 6,
        "health": 59,
        "currentHealth": 59,
        "dodge": 11,
        "str": 10,
        "dex": 6,
        "con": 8,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight and Smell",
                "desc": "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 20,
        "maxEgo": 12,
        "currentVes": 20,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The owlbear makes two attacks: one with its beak and one with its claws."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Panther",
        "name": "Panther",
        "initiativeModifier": 7,
        "health": 13,
        "currentHealth": 13,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 5,
        "wis": 7,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The panther has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Pounce",
                "desc": "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 14,
        "currentVes": 14,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Pegasus",
        "name": "Pegasus",
        "initiativeModifier": 7,
        "health": 59,
        "currentHealth": 59,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 7,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Phase Spider",
        "name": "Phase Spider",
        "initiativeModifier": 7,
        "health": 32,
        "currentHealth": 32,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Ethereal Jaunt",
                "desc": "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa."
            },
            {
                "name": "Spider Climb",
                "desc": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Walker",
                "desc": "The spider ignores movement restrictions caused by webbing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) Physical damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            }
        ]
    },
    {
        "id": "Pit Fiend",
        "name": "Pit Fiend",
        "initiativeModifier": 7,
        "health": 300,
        "currentHealth": 300,
        "dodge": 12,
        "str": 13,
        "dex": 7,
        "con": 12,
        "wis": 9,
        "int": 11,
        "cha": 12,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Fear Aura",
                "desc": "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours."
            },
            {
                "name": "Magic Resistance",
                "desc": "The pit fiend has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The pit fiend's weapon attacks are magical."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components:\nAt will: detect magic, Burningball\n3/day each: hold monster, wall of Burning"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 6,
        "maxVes": 26,
        "maxEgo": 24,
        "currentVes": 26,
        "currentEgo": 24,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) Physical damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft. , one target. Hit: 17 (2d8 + 8) Physical damage."
            },
            {
                "name": "Mace",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 15 (2d6 + 8) Physical damage plus 21 (6d6) Burning damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 24 (3d10 + 8) Physical damage."
            }
        ]
    },
    {
        "id": "Planetar",
        "name": "Planetar",
        "initiativeModifier": 10,
        "health": 200,
        "currentHealth": 200,
        "dodge": 15,
        "str": 12,
        "dex": 10,
        "con": 12,
        "wis": 11,
        "int": 9,
        "cha": 12,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Angelic Weapons",
                "desc": "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 Positive damage (included in the attack)."
            },
            {
                "name": "Divine Awareness",
                "desc": "The planetar knows if it hears a lie."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, flame strike, raise dead\n1/day each: commune, control weather, insect plague"
            },
            {
                "name": "Magic Resistance",
                "desc": "The planetar has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 24,
        "maxEgo": 24,
        "currentVes": 24,
        "currentEgo": 24,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The planetar makes two melee attacks."
            },
            {
                "name": "Greatsword",
                "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) Physical damage plus 22 (5d8) Positive damage."
            },
            {
                "name": "Healing Touch",
                "desc": "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            }
        ]
    },
    {
        "id": "Plesiosaurus",
        "name": "Plesiosaurus",
        "initiativeModifier": 7,
        "health": 68,
        "currentHealth": 68,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Hold Breath",
                "desc": "The plesiosaurus can hold its breath for 1 hour."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Poisonous Snake",
        "name": "Poisonous Snake",
        "initiativeModifier": 8,
        "health": 2,
        "currentHealth": 2,
        "dodge": 13,
        "str": 1,
        "dex": 8,
        "con": 5,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 Physical damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Polar Bear",
        "name": "Polar Bear",
        "initiativeModifier": 5,
        "health": 42,
        "currentHealth": 42,
        "dodge": 10,
        "str": 10,
        "dex": 5,
        "con": 8,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 20,
        "maxEgo": 12,
        "currentVes": 20,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The bear makes two attacks: one with its bite and one with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Pony",
        "name": "Pony",
        "initiativeModifier": 5,
        "health": 11,
        "currentHealth": 11,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Priest",
        "name": "Priest",
        "initiativeModifier": 5,
        "health": 27,
        "currentHealth": 27,
        "dodge": 10,
        "str": 5,
        "dex": 5,
        "con": 6,
        "wis": 8,
        "int": 6,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Divine Eminence",
                "desc": "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) Positive damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
            },
            {
                "name": "Spellcasting",
                "desc": "The priest is a Cainite Class spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:\n\n- Cantrips (at will): light, sacred flame, thaumaturgy\n- 1st level (4 slots): cure wounds, guiding bolt, sanctuary\n- 2nd level (3 slots): lesser restoration, spiritual weapon\n- 3rd level (2 slots): dispel magic, spirit guardians"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 16,
        "currentVes": 12,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Mace",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) Physical damage."
            }
        ]
    },
    {
        "id": "Pseudodragon",
        "name": "Pseudodragon",
        "initiativeModifier": 7,
        "health": 7,
        "currentHealth": 7,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Senses",
                "desc": "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
            },
            {
                "name": "Magic Resistance",
                "desc": "The pseudodragon has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Limited Telepathy",
                "desc": "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft. of it that can understand a language."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage."
            },
            {
                "name": "Sting",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) Physical damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
            }
        ]
    },
    {
        "id": "Purple Worm",
        "name": "Purple Worm",
        "initiativeModifier": 3,
        "health": 247,
        "currentHealth": 247,
        "dodge": 8,
        "str": 14,
        "dex": 3,
        "con": 11,
        "wis": 4,
        "int": 0,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Tunneler",
                "desc": "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 28,
        "maxEgo": 8,
        "currentVes": 28,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The worm makes two attacks: one with its bite and one with its stinger."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) Physical damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.\nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone."
            },
            {
                "name": "Tail Stinger",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) Physical damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Quasit",
        "name": "Quasit",
        "initiativeModifier": 8,
        "health": 7,
        "currentHealth": 7,
        "dodge": 13,
        "str": 2,
        "dex": 8,
        "con": 5,
        "wis": 5,
        "int": 3,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form . Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed . It reverts to its true form if it dies."
            },
            {
                "name": "Magic Resistance",
                "desc": "The quasit has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claw (Bite in Beast Form)",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) Physical damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                "name": "Scare",
                "desc": "One creature of the quasit's choice within 20 ft. of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."
            },
            {
                "name": "Invisibility",
                "desc": "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
            }
        ]
    },
    {
        "id": "Quipper",
        "name": "Quipper",
        "initiativeModifier": 8,
        "health": 1,
        "currentHealth": 1,
        "dodge": 13,
        "str": 1,
        "dex": 8,
        "con": 4,
        "wis": 3,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Blood Frenzy",
                "desc": "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                "name": "Water Breathing",
                "desc": "The quipper can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 6,
        "currentVes": 16,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Rakshasa",
        "name": "Rakshasa",
        "initiativeModifier": 8,
        "health": 110,
        "currentHealth": 110,
        "dodge": 13,
        "str": 7,
        "dex": 8,
        "con": 9,
        "wis": 8,
        "int": 6,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Limited Magic Immunity",
                "desc": "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:\n\nAt will: detect thoughts, disguise self, mage hand, minor illusion\n3/day each: charm person, detect magic, invisibility, major image, suggestion\n1/day each: dominate person, fly, plane shift, true seeing"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 18,
        "maxEgo": 20,
        "currentVes": 18,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The rakshasa makes two claw attacks"
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) Physical damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic."
            }
        ]
    },
    {
        "id": "Rat",
        "name": "Rat",
        "initiativeModifier": 5,
        "health": 1,
        "currentHealth": 1,
        "dodge": 10,
        "str": 1,
        "dex": 5,
        "con": 4,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 10,
        "currentVes": 10,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Raven",
        "name": "Raven",
        "initiativeModifier": 7,
        "health": 1,
        "currentHealth": 1,
        "dodge": 12,
        "str": 1,
        "dex": 7,
        "con": 4,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Mimicry",
                "desc": "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Red Dragon Wyrmling",
        "name": "Red Dragon Wyrmling",
        "initiativeModifier": 5,
        "health": 75,
        "currentHealth": 75,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 5,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) Physical damage plus 3 (1d6) Burning damage."
            },
            {
                "name": "Fire Breath",
                "desc": "The dragon exhales Burning in a 15-foot cone. Each creature in that area must make a DC l3 Dexterity saving throw, taking 24 (7d6) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Reef Shark",
        "name": "Reef Shark",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 0,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Pack Tactics",
                "desc": "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            },
            {
                "name": "Water Breathing",
                "desc": "The shark can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Remorhaz",
        "name": "Remorhaz",
        "initiativeModifier": 6,
        "health": 195,
        "currentHealth": 195,
        "dodge": 11,
        "str": 12,
        "dex": 6,
        "con": 10,
        "wis": 5,
        "int": 2,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Heated Body",
                "desc": "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) Burning damage."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 24,
        "maxEgo": 10,
        "currentVes": 24,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) Physical damage plus 10 (3d6) Burning damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target."
            },
            {
                "name": "Swallow",
                "desc": "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.\nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
            }
        ]
    },
    {
        "id": "Rhinoceros",
        "name": "Rhinoceros",
        "initiativeModifier": 4,
        "health": 45,
        "currentHealth": 45,
        "dodge": 9,
        "str": 10,
        "dex": 4,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) Physical damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 20,
        "maxEgo": 12,
        "currentVes": 20,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Gore",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Riding Horse",
        "name": "Riding Horse",
        "initiativeModifier": 5,
        "health": 13,
        "currentHealth": 13,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Roc",
        "name": "Roc",
        "initiativeModifier": 5,
        "health": 248,
        "currentHealth": 248,
        "dodge": 10,
        "str": 14,
        "dex": 5,
        "con": 10,
        "wis": 5,
        "int": 1,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight",
                "desc": "The roc has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 28,
        "maxEgo": 10,
        "currentVes": 28,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The roc makes two attacks: one with its beak and one with its talons."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) Physical damage."
            },
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) Physical damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target."
            }
        ]
    },
    {
        "id": "Roper",
        "name": "Roper",
        "initiativeModifier": 4,
        "health": 93,
        "currentHealth": 93,
        "dodge": 9,
        "str": 9,
        "dex": 4,
        "con": 8,
        "wis": 8,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "False Appearance",
                "desc": "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
            },
            {
                "name": "Grasping Tendrils",
                "desc": "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and Neutral damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it."
            },
            {
                "name": "Spider Climb",
                "desc": "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) Physical damage."
            },
            {
                "name": "Tendril",
                "desc": "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target."
            },
            {
                "name": "Reel",
                "desc": "The roper pulls each creature grappled by it up to 25 ft. straight toward it."
            }
        ]
    },
    {
        "id": "Rug of Smothering",
        "name": "Rug of Smothering",
        "initiativeModifier": 7,
        "health": 33,
        "currentHealth": 33,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 5,
        "wis": 1,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Antimagic Susceptibility",
                "desc": "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                "name": "Damage Transfer",
                "desc": "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
            },
            {
                "name": "False Appearance",
                "desc": "While the rug remains motionless, it is indistinguishable from a normal rug."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 2,
        "currentVes": 16,
        "currentEgo": 2,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Smother",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Rust Monster",
        "name": "Rust Monster",
        "initiativeModifier": 6,
        "health": 27,
        "currentHealth": 27,
        "dodge": 11,
        "str": 6,
        "dex": 6,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Iron Scent",
                "desc": "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it."
            },
            {
                "name": "Rust Metal",
                "desc": "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) Physical damage."
            },
            {
                "name": "Antennae",
                "desc": "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.\nIf the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait."
            }
        ]
    },
    {
        "id": "Saber-Toothed Tiger",
        "name": "Saber-Toothed Tiger",
        "initiativeModifier": 7,
        "health": 52,
        "currentHealth": 52,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Pounce",
                "desc": "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) Physical damage."
            }
        ]
    },
    {
        "id": "Sahuagin",
        "name": "Sahuagin",
        "initiativeModifier": 5,
        "health": 22,
        "currentHealth": 22,
        "dodge": 10,
        "str": 6,
        "dex": 5,
        "con": 6,
        "wis": 6,
        "int": 6,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Blood Frenzy",
                "desc": "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                "name": "Limited Amphibiousness",
                "desc": "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
            },
            {
                "name": "Shark Telepathy",
                "desc": "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) Physical damage."
            },
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) Physical damage, or 5 (1d8 + 1) Physical damage if used with two hands to make a melee attack."
            }
        ]
    },
    {
        "id": "Salamander",
        "name": "Salamander",
        "initiativeModifier": 7,
        "health": 90,
        "currentHealth": 90,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Heated Body",
                "desc": "A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes 7 (2d6) Burning damage."
            },
            {
                "name": "Heated Weapons",
                "desc": "Any metal melee weapon the salamander wields deals an extra 3 (1d6) Burning damage on a hit (included in the attack)."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The salamander makes two attacks: one with its spear and one with its tail."
            },
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. Hit: 11 (2d6 + 4) Physical damage, or 13 (2d8 + 4) Physical damage if used with two hands to make a melee attack, plus 3 (1d6) Burning damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) Physical damage plus 7 (2d6) Burning damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets."
            }
        ]
    },
    {
        "id": "Satyr",
        "name": "Satyr",
        "initiativeModifier": 8,
        "health": 31,
        "currentHealth": 31,
        "dodge": 13,
        "str": 6,
        "dex": 8,
        "con": 5,
        "wis": 5,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Magic Resistance",
                "desc": "The satyr has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Ram",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) Physical damage."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1 d6 + 3) Physical damage."
            },
            {
                "name": "Shortbow",
                "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Scorpion",
        "name": "Scorpion",
        "initiativeModifier": 5,
        "health": 1,
        "currentHealth": 1,
        "dodge": 10,
        "str": 1,
        "dex": 5,
        "con": 4,
        "wis": 4,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 8,
        "currentVes": 10,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Sting",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 Physical damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Scout",
        "name": "Scout",
        "initiativeModifier": 7,
        "health": 16,
        "currentHealth": 16,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Sight",
                "desc": "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The scout makes two melee attacks or two ranged attacks."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Sea Hag",
        "name": "Sea Hag",
        "initiativeModifier": 6,
        "health": 52,
        "currentHealth": 52,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 8,
        "wis": 6,
        "int": 6,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The hag can breathe air and water."
            },
            {
                "name": "Horrific Appearance",
                "desc": "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours.\nUnless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            },
            {
                "name": "Death Glare",
                "desc": "The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
            },
            {
                "name": "Illusory Appearance",
                "desc": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
            }
        ]
    },
    {
        "id": "Sea Horse",
        "name": "Sea Horse",
        "initiativeModifier": 6,
        "health": 1,
        "currentHealth": 1,
        "dodge": 11,
        "str": 0,
        "dex": 6,
        "con": 4,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Water Breathing",
                "desc": "The sea horse can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": []
    },
    {
        "id": "Shadow",
        "name": "Shadow",
        "initiativeModifier": 7,
        "health": 16,
        "currentHealth": 16,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 3,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amorphous",
                "desc": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                "name": "Shadow Stealth",
                "desc": "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6."
            },
            {
                "name": "Sunlight Weakness",
                "desc": "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Strength Drain",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) Negative damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
            }
        ]
    },
    {
        "id": "Shambling Mound",
        "name": "Shambling Mound",
        "initiativeModifier": 4,
        "health": 136,
        "currentHealth": 136,
        "dodge": 9,
        "str": 9,
        "dex": 4,
        "con": 8,
        "wis": 5,
        "int": 2,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Lightning Absorption",
                "desc": "Whenever the shambling mound is subjected to Lightning damage, it takes no damage and regains a number of hit points equal to the Lightning damage dealt."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Engulf",
                "desc": "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) Physical damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
            }
        ]
    },
    {
        "id": "Shield Guardian",
        "name": "Shield Guardian",
        "initiativeModifier": 4,
        "health": 142,
        "currentHealth": 142,
        "dodge": 9,
        "str": 9,
        "dex": 4,
        "con": 9,
        "wis": 5,
        "int": 3,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Bound",
                "desc": "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian."
            },
            {
                "name": "Regeneration",
                "desc": "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit. point."
            },
            {
                "name": "Spell Storing",
                "desc": "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The guardian makes two fist attacks."
            },
            {
                "name": "Fist",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Shrieker",
        "name": "Shrieker",
        "initiativeModifier": 0,
        "health": 13,
        "currentHealth": 13,
        "dodge": 5,
        "str": 0,
        "dex": 0,
        "con": 5,
        "wis": 1,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "False Appearance",
                "desc": "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 2,
        "currentVes": 10,
        "currentEgo": 2,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": []
    },
    {
        "id": "Silver Dragon Wyrmling",
        "name": "Silver Dragon Wyrmling",
        "initiativeModifier": 5,
        "health": 45,
        "currentHealth": 45,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 5,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) Freezing damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Skeleton",
        "name": "Skeleton",
        "initiativeModifier": 7,
        "health": 13,
        "currentHealth": 13,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 7,
        "wis": 4,
        "int": 3,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 8,
        "currentVes": 14,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Shortbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Solar",
        "name": "Solar",
        "initiativeModifier": 11,
        "health": 243,
        "currentHealth": 243,
        "dodge": 16,
        "str": 13,
        "dex": 11,
        "con": 13,
        "wis": 12,
        "int": 12,
        "cha": 15,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Angelic Weapons",
                "desc": "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 Positive damage (included in the attack)."
            },
            {
                "name": "Divine Awareness",
                "desc": "The solar knows if it hears a lie."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, resurrection\n1/day each: commune, control weather"
            },
            {
                "name": "Magic Resistance",
                "desc": "The solar has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 7,
        "maxVes": 26,
        "maxEgo": 30,
        "currentVes": 26,
        "currentEgo": 30,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Teleport",
                "desc": "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see."
            },
            {
                "name": "Searing Burst (Costs 2 Actions)",
                "desc": "The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) Burning damage plus 14 (4d6) Positive damage on a failed save, or half as much damage on a successful one."
            },
            {
                "name": "Blinding Gaze (Costs 3 Actions)",
                "desc": "The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The solar makes two greatsword attacks."
            },
            {
                "name": "Greatsword",
                "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) Physical damage plus 27 (6d8) Positive damage."
            },
            {
                "name": "Slaying Longbow",
                "desc": "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) Physical damage plus 27 (6d8) Positive damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die."
            },
            {
                "name": "Flying Sword",
                "desc": "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
            },
            {
                "name": "Healing Touch",
                "desc": "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            }
        ]
    },
    {
        "id": "Specter",
        "name": "Specter",
        "initiativeModifier": 7,
        "health": 22,
        "currentHealth": 22,
        "dodge": 12,
        "str": 0,
        "dex": 7,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Incorporeal Movement",
                "desc": "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) Kinetic damage if it ends its turn inside an object."
            },
            {
                "name": "Sunlight Sensitivity",
                "desc": "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Life Drain",
                "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) Negative damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            }
        ]
    },
    {
        "id": "Spider",
        "name": "Spider",
        "initiativeModifier": 7,
        "health": 1,
        "currentHealth": 1,
        "dodge": 12,
        "str": 1,
        "dex": 7,
        "con": 4,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Spider Climb",
                "desc": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "desc": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "desc": "The spider ignores movement restrictions caused by webbing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 Physical damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage."
            }
        ]
    },
    {
        "id": "Spirit Naga",
        "name": "Spirit Naga",
        "initiativeModifier": 8,
        "health": 75,
        "currentHealth": 75,
        "dodge": 13,
        "str": 9,
        "dex": 8,
        "con": 7,
        "wis": 7,
        "int": 8,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Rejuvenation",
                "desc": "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
            },
            {
                "name": "Spellcasting",
                "desc": "The naga is a Enoch Class spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:\n\n- Cantrips (at will): mage hand, minor illusion, ray of frost\n- 1st level (4 slots): charm person, detect magic, sleep\n- 2nd level (3 slots): detect thoughts, hold person\n- 3rd level (3 slots): Lightning bolt, water breathing\n- 4th level (3 slots): blight, dimension door\n- 5th level (2 slots): dominate person"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6 + 4) Physical damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Sprite",
        "name": "Sprite",
        "initiativeModifier": 9,
        "health": 2,
        "currentHealth": 2,
        "dodge": 14,
        "str": 1,
        "dex": 9,
        "con": 5,
        "wis": 6,
        "int": 7,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 Physical damage."
            },
            {
                "name": "Shortbow",
                "desc": "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 Physical damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake."
            },
            {
                "name": "Heart Sight",
                "desc": "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw."
            },
            {
                "name": "Invisibility",
                "desc": "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it."
            }
        ]
    },
    {
        "id": "Spy",
        "name": "Spy",
        "initiativeModifier": 7,
        "health": 27,
        "currentHealth": 27,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 5,
        "wis": 7,
        "int": 6,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Cunning Action",
                "desc": "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
            },
            {
                "name": "Sneak Attack (1/Turn)",
                "desc": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 16,
        "currentVes": 14,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The spy makes two melee attacks."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Hand Crossbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Steam Mephit",
        "name": "Steam Mephit",
        "initiativeModifier": 5,
        "health": 21,
        "currentHealth": 21,
        "dodge": 10,
        "str": 2,
        "dex": 5,
        "con": 5,
        "wis": 5,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Death Burst",
                "desc": "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) Burning damage."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 12,
        "currentVes": 10,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) Physical damage plus 2 (1d4) Burning damage."
            },
            {
                "name": "Steam Breath",
                "desc": "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Stirge",
        "name": "Stirge",
        "initiativeModifier": 8,
        "health": 2,
        "currentHealth": 2,
        "dodge": 13,
        "str": 2,
        "dex": 8,
        "con": 5,
        "wis": 4,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 8,
        "currentVes": 16,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Blood Drain",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) Physical damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
            }
        ]
    },
    {
        "id": "Stone Giant",
        "name": "Stone Giant",
        "initiativeModifier": 7,
        "health": 126,
        "currentHealth": 126,
        "dodge": 12,
        "str": 11,
        "dex": 7,
        "con": 10,
        "wis": 6,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Stone Camouflage",
                "desc": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 22,
        "maxEgo": 12,
        "currentVes": 22,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The giant makes two greatclub attacks."
            },
            {
                "name": "Greatclub",
                "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) Physical damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone."
            }
        ]
    },
    {
        "id": "Stone Golem",
        "name": "Stone Golem",
        "initiativeModifier": 4,
        "health": 178,
        "currentHealth": 178,
        "dodge": 9,
        "str": 11,
        "dex": 4,
        "con": 10,
        "wis": 5,
        "int": 1,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Immutable Form",
                "desc": "The golem is immune to any spell or effect that would alter its form."
            },
            {
                "name": "Magic Resistance",
                "desc": "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The golem's weapon attacks are magical."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 10,
        "currentVes": 22,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The golem makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) Physical damage."
            },
            {
                "name": "Slow",
                "desc": "The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Storm Giant",
        "name": "Storm Giant",
        "initiativeModifier": 7,
        "health": 230,
        "currentHealth": 230,
        "dodge": 12,
        "str": 14,
        "dex": 7,
        "con": 10,
        "wis": 9,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The giant can breathe air and water."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, feather fall, levitate, light\n3/day each: control weather, water breathing"
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 28,
        "maxEgo": 18,
        "currentVes": 28,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The giant makes two greatsword attacks."
            },
            {
                "name": "Greatsword",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) Physical damage."
            },
            {
                "name": "Lightning Strike",
                "desc": "The giant hurls a magical Lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) Lightning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Succubus/Incubus",
        "name": "Succubus/Incubus",
        "initiativeModifier": 8,
        "health": 66,
        "currentHealth": 66,
        "dodge": 13,
        "str": 4,
        "dex": 8,
        "con": 6,
        "wis": 6,
        "int": 7,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Telepathic Bond",
                "desc": "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
            },
            {
                "name": "Shapechanger",
                "desc": "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 20,
        "currentVes": 16,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Claw (Fiend Form Only)",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Charm",
                "desc": "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends."
            },
            {
                "name": "Draining Kiss",
                "desc": "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) Neutral damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            },
            {
                "name": "Etherealness",
                "desc": "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
            }
        ]
    },
    {
        "id": "Swarm of Bats",
        "name": "Swarm of Bats",
        "initiativeModifier": 7,
        "health": 22,
        "currentHealth": 22,
        "dodge": 12,
        "str": 2,
        "dex": 7,
        "con": 5,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Echolocation",
                "desc": "The swarm can't use its blindsight while deafened."
            },
            {
                "name": "Keen Hearing",
                "desc": "The swarm has advantage on Wisdom (Perception) checks that rely on hearing."
            },
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) Physical damage, or 2 (1d4) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Swarm of Beetles",
        "name": "Swarm of Beetles",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 1,
        "dex": 6,
        "con": 5,
        "wis": 3,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 6,
        "currentVes": 12,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) Physical damage, or 5 (2d4) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Swarm of Centipedes",
        "name": "Swarm of Centipedes",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 1,
        "dex": 6,
        "con": 5,
        "wis": 3,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 6,
        "currentVes": 12,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) Physical damage, or 5 (2d4) Physical damage if the swarm has half of its hit points or fewer.\nA creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way."
            }
        ]
    },
    {
        "id": "Swarm of Insects",
        "name": "Swarm of Insects",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 1,
        "dex": 6,
        "con": 5,
        "wis": 3,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 6,
        "currentVes": 12,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) Physical damage, or 5 (2d4) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Swarm of Poisonous Snakes",
        "name": "Swarm of Poisonous Snakes",
        "initiativeModifier": 9,
        "health": 36,
        "currentHealth": 36,
        "dodge": 14,
        "str": 4,
        "dex": 9,
        "con": 5,
        "wis": 5,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) Physical damage, or 3 (1d6) Physical damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Swarm of Quippers",
        "name": "Swarm of Quippers",
        "initiativeModifier": 8,
        "health": 28,
        "currentHealth": 28,
        "dodge": 13,
        "str": 6,
        "dex": 8,
        "con": 4,
        "wis": 3,
        "int": 0,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Blood Frenzy",
                "desc": "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points."
            },
            {
                "name": "Water Breathing",
                "desc": "The swarm can breathe only underwater."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 6,
        "currentVes": 16,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) Physical damage, or 7 (2d6) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Swarm of Rats",
        "name": "Swarm of Rats",
        "initiativeModifier": 5,
        "health": 24,
        "currentHealth": 24,
        "dodge": 10,
        "str": 4,
        "dex": 5,
        "con": 4,
        "wis": 5,
        "int": 1,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 10,
        "currentVes": 10,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) Physical damage, or 3 (1d6) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Swarm of Ravens",
        "name": "Swarm of Ravens",
        "initiativeModifier": 7,
        "health": 24,
        "currentHealth": 24,
        "dodge": 12,
        "str": 3,
        "dex": 7,
        "con": 4,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Beaks",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) Physical damage, or 3 (1d6) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Swarm of Spiders",
        "name": "Swarm of Spiders",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 1,
        "dex": 6,
        "con": 5,
        "wis": 3,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
            },
            {
                "name": "Spider Climb",
                "desc": "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Web Sense",
                "desc": "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web."
            },
            {
                "name": "Web Walker",
                "desc": "The swarm ignores movement restrictions caused by webbing."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 6,
        "currentVes": 12,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) Physical damage, or 5 (2d4) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Swarm of Wasps",
        "name": "Swarm of Wasps",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 1,
        "dex": 6,
        "con": 5,
        "wis": 3,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Swarm",
                "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 6,
        "currentVes": 12,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bites",
                "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) Physical damage, or 5 (2d4) Physical damage if the swarm has half of its hit points or fewer."
            }
        ]
    },
    {
        "id": "Tarrasque",
        "name": "Tarrasque",
        "initiativeModifier": 5,
        "health": 676,
        "currentHealth": 676,
        "dodge": 10,
        "str": 15,
        "dex": 5,
        "con": 15,
        "wis": 5,
        "int": 1,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Legendary Resistance",
                "desc": "If the tarrasque fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Magic Resistance",
                "desc": "The tarrasque has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Reflective Carapace",
                "desc": "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target."
            },
            {
                "name": "Siege Monster",
                "desc": "The tarrasque deals double damage to objects and structures."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 9,
        "maxVes": 30,
        "maxEgo": 10,
        "currentVes": 30,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Attack",
                "desc": "The tarrasque makes one claw attack or tail attack."
            },
            {
                "name": "Move",
                "desc": "The tarrasque moves up to half its speed."
            },
            {
                "name": "Chomp (Costs 2 Actions)",
                "desc": "The tarrasque makes one bite attack or uses its Swallow."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) Physical damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) Physical damage."
            },
            {
                "name": "Horns",
                "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) Physical damage."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) Physical damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone."
            },
            {
                "name": "Frightful Presence",
                "desc": "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
            },
            {
                "name": "Swallow",
                "desc": "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
            }
        ]
    },
    {
        "id": "Thug",
        "name": "Thug",
        "initiativeModifier": 5,
        "health": 32,
        "currentHealth": 32,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Pack Tactics",
                "desc": "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The thug makes two melee attacks."
            },
            {
                "name": "Mace",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Heavy Crossbow",
                "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) Physical damage."
            }
        ]
    },
    {
        "id": "Tiger",
        "name": "Tiger",
        "initiativeModifier": 7,
        "health": 37,
        "currentHealth": 37,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 7,
        "wis": 6,
        "int": 1,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Pounce",
                "desc": "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Treant",
        "name": "Treant",
        "initiativeModifier": 4,
        "health": 138,
        "currentHealth": 138,
        "dodge": 9,
        "str": 11,
        "dex": 4,
        "con": 10,
        "wis": 8,
        "int": 6,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "False Appearance",
                "desc": "While the treant remains motionless, it is indistinguishable from a normal tree."
            },
            {
                "name": "Siege Monster",
                "desc": "The treant deals double damage to objects and structures."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 16,
        "currentVes": 22,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The treant makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) Physical damage."
            },
            {
                "name": "Rock",
                "desc": "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) Physical damage."
            },
            {
                "name": "Animate Trees",
                "desc": "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible."
            }
        ]
    },
    {
        "id": "Tribal Warrior",
        "name": "Tribal Warrior",
        "initiativeModifier": 5,
        "health": 11,
        "currentHealth": 11,
        "dodge": 10,
        "str": 6,
        "dex": 5,
        "con": 6,
        "wis": 5,
        "int": 4,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Pack Tactics",
                "desc": "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 10,
        "currentVes": 12,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) Physical damage, or 5 (1d8 + 1) Physical damage if used with two hands to make a melee attack."
            }
        ]
    },
    {
        "id": "Triceratops",
        "name": "Triceratops",
        "initiativeModifier": 4,
        "health": 95,
        "currentHealth": 95,
        "dodge": 9,
        "str": 11,
        "dex": 4,
        "con": 8,
        "wis": 5,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Trampling Charge",
                "desc": "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 22,
        "maxEgo": 10,
        "currentVes": 22,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Gore",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) Physical damage."
            },
            {
                "name": "Stomp",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) Physical damage"
            }
        ]
    },
    {
        "id": "Troll",
        "name": "Troll",
        "initiativeModifier": 6,
        "health": 84,
        "currentHealth": 84,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 10,
        "wis": 4,
        "int": 3,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Smell",
                "desc": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                "name": "Regeneration",
                "desc": "The troll regains 10 hit points at the start of its turn. If the troll takes acid or Burning damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 8,
        "currentVes": 20,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The troll makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Tyrannosaurus Rex",
        "name": "Tyrannosaurus Rex",
        "initiativeModifier": 5,
        "health": 136,
        "currentHealth": 136,
        "dodge": 10,
        "str": 12,
        "dex": 5,
        "con": 9,
        "wis": 6,
        "int": 1,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 24,
        "maxEgo": 12,
        "currentVes": 24,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) Physical damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target."
            },
            {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) Physical damage."
            }
        ]
    },
    {
        "id": "Unicorn",
        "name": "Unicorn",
        "initiativeModifier": 7,
        "health": 67,
        "currentHealth": 67,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 7,
        "wis": 8,
        "int": 5,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Charge",
                "desc": "If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) Physical damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
            },
            {
                "name": "Innate Spellcasting",
                "desc": "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:\n\nAt will: detect evil and good, druidcraft, pass without trace\n1/day each: calm emotions, dispel evil and good, entangle"
            },
            {
                "name": "Magic Resistance",
                "desc": "The unicorn has advantage on saving throws against spells and other magical effects."
            },
            {
                "name": "Magic Weapons",
                "desc": "The unicorn's weapon attacks are magical."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Hooves",
                "desc": "The unicorn makes one attack with its hooves."
            },
            {
                "name": "Shimmering Shield (Costs 2 Actions)",
                "desc": "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn."
            },
            {
                "name": "Heal Self (Costs 3 Actions)",
                "desc": "The unicorn magically regains 11 (2d8 + 2) hit points."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The unicorn makes two attacks: one with its hooves and one with its horn."
            },
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Horn",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) Physical damage."
            },
            {
                "name": "Healing Touch",
                "desc": "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
            },
            {
                "name": "Teleport",
                "desc": "The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
            }
        ]
    },
    {
        "id": "Vampire, Bat Form",
        "name": "Vampire, Bat Form",
        "initiativeModifier": 9,
        "health": 144,
        "currentHealth": 144,
        "dodge": 14,
        "str": 9,
        "dex": 9,
        "con": 9,
        "wis": 7,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.\nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Misty Escape",
                "desc": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.\nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
            },
            {
                "name": "Regeneration",
                "desc": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes Positive damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "desc": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "desc": "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.\nStake to the Heart. If a Physical weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.\nSunlight Hypersensitivity. The vampire takes 20 Positive damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 18,
        "maxEgo": 18,
        "currentVes": 18,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Move",
                "desc": "The vampire moves up to its speed without provoking opportunity attacks."
            },
            {
                "name": "Unarmed Strike",
                "desc": "The vampire makes one unarmed strike."
            },
            {
                "name": "Bite (Costs 2 Actions)",
                "desc": "The vampire makes one bite attack."
            }
        ],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) Physical damage plus 10 (3d6) Negative damage. The target's hit point maximum is reduced by an amount equal to the Negative damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
            },
            {
                "name": "Charm",
                "desc": "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
            },
            {
                "name": "Children of the Night",
                "desc": "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
            }
        ]
    },
    {
        "id": "Vampire, Mist Form",
        "name": "Vampire, Mist Form",
        "initiativeModifier": 9,
        "health": 144,
        "currentHealth": 144,
        "dodge": 14,
        "str": 9,
        "dex": 9,
        "con": 9,
        "wis": 7,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.\nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Misty Escape",
                "desc": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.\nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
            },
            {
                "name": "Regeneration",
                "desc": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes Positive damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "desc": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "desc": "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.\nStake to the Heart. If a Physical weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.\nSunlight Hypersensitivity. The vampire takes 20 Positive damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 18,
        "maxEgo": 18,
        "currentVes": 18,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Move",
                "desc": "The vampire moves up to its speed without provoking opportunity attacks."
            },
            {
                "name": "Unarmed Strike",
                "desc": "The vampire makes one unarmed strike."
            },
            {
                "name": "Bite (Costs 2 Actions)",
                "desc": "The vampire makes one bite attack."
            }
        ],
        "MortalMoves": []
    },
    {
        "id": "Vampire Spawn",
        "name": "Vampire Spawn",
        "initiativeModifier": 8,
        "health": 82,
        "currentHealth": 82,
        "dodge": 13,
        "str": 8,
        "dex": 8,
        "con": 8,
        "wis": 5,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Regeneration",
                "desc": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes Positive damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "desc": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "desc": "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water.\nStake to the Heart. The vampire is destroyed if a Physical weapon made of wood is driven into its heart while it is incapacitated in its resting place.\nSunlight Hypersensitivity. The vampire takes 20 Positive damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) Physical damage plus 7 (2d6) Negative damage. The target's hit point maximum is reduced by an amount equal to the Negative damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) Physical damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)."
            }
        ]
    },
    {
        "id": "Vampire, Vampire Form",
        "name": "Vampire, Vampire Form",
        "initiativeModifier": 9,
        "health": 144,
        "currentHealth": 144,
        "dodge": 14,
        "str": 9,
        "dex": 9,
        "con": 9,
        "wis": 7,
        "int": 8,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.\nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
            },
            {
                "name": "Legendary Resistance",
                "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
            },
            {
                "name": "Misty Escape",
                "desc": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.\nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
            },
            {
                "name": "Regeneration",
                "desc": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes Positive damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                "name": "Spider Climb",
                "desc": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                "name": "Vampire Weaknesses",
                "desc": "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.\nStake to the Heart. If a Physical weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.\nSunlight Hypersensitivity. The vampire takes 20 Positive damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 5,
        "maxVes": 18,
        "maxEgo": 18,
        "currentVes": 18,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [
            {
                "name": "Move",
                "desc": "The vampire moves up to its speed without provoking opportunity attacks."
            },
            {
                "name": "Unarmed Strike",
                "desc": "The vampire makes one unarmed strike."
            },
            {
                "name": "Bite (Costs 2 Actions)",
                "desc": "The vampire makes one bite attack."
            }
        ],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                "name": "Unarmed Strike",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) Physical damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18)."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) Physical damage plus 10 (3d6) Negative damage. The target's hit point maximum is reduced by an amount equal to the Negative damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
            },
            {
                "name": "Charm",
                "desc": "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
            },
            {
                "name": "Children of the Night",
                "desc": "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
            }
        ]
    },
    {
        "id": "Veteran",
        "name": "Veteran",
        "initiativeModifier": 6,
        "health": 58,
        "currentHealth": 58,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
            },
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage, or 8 (1d10 + 3) Physical damage if used with two hands."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Heavy Crossbow",
                "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) Physical damage."
            }
        ]
    },
    {
        "id": "Violet Fungus",
        "name": "Violet Fungus",
        "initiativeModifier": 0,
        "health": 18,
        "currentHealth": 18,
        "dodge": 5,
        "str": 1,
        "dex": 0,
        "con": 5,
        "wis": 1,
        "int": 0,
        "cha": 0,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "False Appearance",
                "desc": "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 10,
        "maxEgo": 2,
        "currentVes": 10,
        "currentEgo": 2,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The fungus makes 1d4 Rotting Touch attacks."
            },
            {
                "name": "Rotting Touch",
                "desc": "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) Negative damage."
            }
        ]
    },
    {
        "id": "Vrock",
        "name": "Vrock",
        "initiativeModifier": 7,
        "health": 104,
        "currentHealth": 104,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 9,
        "wis": 6,
        "int": 4,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Magic Resistance",
                "desc": "The vrock has advantage on saving throws against spells and other magical effects."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The vrock makes two attacks: one with its beak and one with its talons."
            },
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            },
            {
                "name": "Talons",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) Physical damage."
            },
            {
                "name": "Spores",
                "desc": "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."
            },
            {
                "name": "Stunning Screech",
                "desc": "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn ."
            }
        ]
    },
    {
        "id": "Vulture",
        "name": "Vulture",
        "initiativeModifier": 5,
        "health": 5,
        "currentHealth": 5,
        "dodge": 10,
        "str": 3,
        "dex": 5,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Sight and Smell",
                "desc": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 12,
        "maxEgo": 12,
        "currentVes": 12,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Beak",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) Physical damage."
            }
        ]
    },
    {
        "id": "Warhorse",
        "name": "Warhorse",
        "initiativeModifier": 6,
        "health": 19,
        "currentHealth": 19,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Trampling Charge",
                "desc": "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Warhorse Skeleton",
        "name": "Warhorse Skeleton",
        "initiativeModifier": 6,
        "health": 22,
        "currentHealth": 22,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 7,
        "wis": 4,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 8,
        "currentVes": 18,
        "currentEgo": 8,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Hooves",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Water Elemental",
        "name": "Water Elemental",
        "initiativeModifier": 7,
        "health": 114,
        "currentHealth": 114,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 9,
        "wis": 5,
        "int": 2,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Water Form",
                "desc": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                "name": "Freeze",
                "desc": "If the elemental takes Freezing damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 10,
        "currentVes": 18,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The elemental makes two slam attacks."
            },
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Whelm",
                "desc": "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) Physical damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) Physical damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
            }
        ]
    },
    {
        "id": "Weasel",
        "name": "Weasel",
        "initiativeModifier": 8,
        "health": 1,
        "currentHealth": 1,
        "dodge": 13,
        "str": 1,
        "dex": 8,
        "con": 4,
        "wis": 6,
        "int": 1,
        "cha": 1,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 Physical damage."
            }
        ]
    },
    {
        "id": "Werebear, Bear Form",
        "name": "Werebear, Bear Form",
        "initiativeModifier": 5,
        "health": 135,
        "currentHealth": 135,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "desc": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) Physical damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Werebear, Human Form",
        "name": "Werebear, Human Form",
        "initiativeModifier": 5,
        "health": 135,
        "currentHealth": 135,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "desc": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
            },
            {
                "name": "Greataxe",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Werebear, Hybrid Form",
        "name": "Werebear, Hybrid Form",
        "initiativeModifier": 5,
        "health": 135,
        "currentHealth": 135,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "desc": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) Physical damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Greataxe",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) Physical damage."
            }
        ]
    },
    {
        "id": "Wereboar, Boar Form",
        "name": "Wereboar, Boar Form",
        "initiativeModifier": 5,
        "health": 78,
        "currentHealth": 78,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Charge (Boar or Hybrid Form Only)",
                "desc": "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) Physical damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            },
            {
                "name": "Relentless",
                "desc": "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Tusks",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
            }
        ]
    },
    {
        "id": "Wereboar, Human Form",
        "name": "Wereboar, Human Form",
        "initiativeModifier": 5,
        "health": 78,
        "currentHealth": 78,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Relentless",
                "desc": "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The wereboar makes two attacks, only one of which can be with its tusks."
            },
            {
                "name": "Maul",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Wereboar, Hybrid Form",
        "name": "Wereboar, Hybrid Form",
        "initiativeModifier": 5,
        "health": 78,
        "currentHealth": 78,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Charge (Boar or Hybrid Form Only)",
                "desc": "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) Physical damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            },
            {
                "name": "Relentless",
                "desc": "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The wereboar makes two attacks, only one of which can be with its tusks."
            },
            {
                "name": "Maul",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage."
            },
            {
                "name": "Tusks",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
            }
        ]
    },
    {
        "id": "Wererat, Human Form",
        "name": "Wererat, Human Form",
        "initiativeModifier": 7,
        "health": 33,
        "currentHealth": 33,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "desc": "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The wererat makes two attacks, only one of which can be a bite."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Hand Crossbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Wererat, Hybrid Form",
        "name": "Wererat, Hybrid Form",
        "initiativeModifier": 7,
        "health": 33,
        "currentHealth": 33,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "desc": "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The wererat makes two attacks, only one of which can be a bite."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
            },
            {
                "name": "Shortsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            },
            {
                "name": "Hand Crossbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Wererat, Rat Form",
        "name": "Wererat, Rat Form",
        "initiativeModifier": 7,
        "health": 33,
        "currentHealth": 33,
        "dodge": 12,
        "str": 5,
        "dex": 7,
        "con": 6,
        "wis": 5,
        "int": 5,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Smell",
                "desc": "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) Physical damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
            }
        ]
    },
    {
        "id": "Weretiger, Human Form",
        "name": "Weretiger, Human Form",
        "initiativeModifier": 7,
        "health": 120,
        "currentHealth": 120,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "desc": "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
            },
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Weretiger, Hybrid Form",
        "name": "Weretiger, Hybrid Form",
        "initiativeModifier": 7,
        "health": 120,
        "currentHealth": 120,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "desc": "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pounce",
                "desc": "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) Physical damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage."
            },
            {
                "name": "Scimitar",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Weretiger, Tiger Form",
        "name": "Weretiger, Tiger Form",
        "initiativeModifier": 7,
        "health": 120,
        "currentHealth": 120,
        "dodge": 12,
        "str": 8,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "desc": "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pounce",
                "desc": "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 12,
        "currentVes": 16,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) Physical damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Werewolf, Human Form",
        "name": "Werewolf, Human Form",
        "initiativeModifier": 6,
        "health": 58,
        "currentHealth": 58,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "desc": "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)."
            },
            {
                "name": "Spear",
                "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) Physical damage, or 6 (1d8 + 2) Physical damage if used with two hands to make a melee attack."
            }
        ]
    },
    {
        "id": "Werewolf, Hybrid Form",
        "name": "Werewolf, Hybrid Form",
        "initiativeModifier": 6,
        "health": 58,
        "currentHealth": 58,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "desc": "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Werewolf, Wolf Form",
        "name": "Werewolf, Wolf Form",
        "initiativeModifier": 6,
        "health": 58,
        "currentHealth": 58,
        "dodge": 11,
        "str": 7,
        "dex": 6,
        "con": 7,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Shapechanger",
                "desc": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                "name": "Keen Hearing and Smell",
                "desc": "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy."
            }
        ]
    },
    {
        "id": "White Dragon Wyrmling",
        "name": "White Dragon Wyrmling",
        "initiativeModifier": 5,
        "health": 32,
        "currentHealth": 32,
        "dodge": 10,
        "str": 7,
        "dex": 5,
        "con": 7,
        "wis": 5,
        "int": 2,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 10,
        "currentVes": 14,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) Physical damage plus 2 (1d4) Freezing damage."
            },
            {
                "name": "Cold Breath",
                "desc": "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) Freezing damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Wight",
        "name": "Wight",
        "initiativeModifier": 7,
        "health": 45,
        "currentHealth": 45,
        "dodge": 12,
        "str": 7,
        "dex": 7,
        "con": 8,
        "wis": 6,
        "int": 5,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Sunlight Sensitivity",
                "desc": "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
            },
            {
                "name": "Life Drain",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) Negative damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.\nA humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time."
            },
            {
                "name": "Longsword",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) Physical damage, or 7 (1d10 + 2) Physical damage if used with two hands."
            },
            {
                "name": "Longbow",
                "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) Physical damage."
            }
        ]
    },
    {
        "id": "Will-o'-Wisp",
        "name": "Will-o'-Wisp",
        "initiativeModifier": 14,
        "health": 22,
        "currentHealth": 22,
        "dodge": 19,
        "str": 0,
        "dex": 14,
        "con": 5,
        "wis": 7,
        "int": 6,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Consume Life",
                "desc": "As a bonus action, the will-o'-wisp can target one creature it can see within 5 ft. of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points."
            },
            {
                "name": "Ephemeral",
                "desc": "The will-o'-wisp can't wear or carry anything."
            },
            {
                "name": "Incorporeal Movement",
                "desc": "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) Kinetic damage if it ends its turn inside an object."
            },
            {
                "name": "Variable Illumination",
                "desc": "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 28,
        "maxEgo": 14,
        "currentVes": 28,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Shock",
                "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) Lightning damage."
            },
            {
                "name": "Invisibility",
                "desc": "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
            }
        ]
    },
    {
        "id": "Winter Wolf",
        "name": "Winter Wolf",
        "initiativeModifier": 6,
        "health": 75,
        "currentHealth": 75,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 7,
        "wis": 6,
        "int": 3,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            },
            {
                "name": "Snow Camouflage",
                "desc": "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
            },
            {
                "name": "Cold Breath",
                "desc": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) Freezing damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Wolf",
        "name": "Wolf",
        "initiativeModifier": 7,
        "health": 11,
        "currentHealth": 11,
        "dodge": 12,
        "str": 6,
        "dex": 7,
        "con": 6,
        "wis": 6,
        "int": 1,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                "name": "Pack Tactics",
                "desc": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 14,
        "maxEgo": 12,
        "currentVes": 14,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) Physical damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
            }
        ]
    },
    {
        "id": "Worg",
        "name": "Worg",
        "initiativeModifier": 6,
        "health": 26,
        "currentHealth": 26,
        "dodge": 11,
        "str": 8,
        "dex": 6,
        "con": 6,
        "wis": 5,
        "int": 3,
        "cha": 4,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Keen Hearing and Smell",
                "desc": "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 10,
        "currentVes": 16,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) Physical damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            }
        ]
    },
    {
        "id": "Wraith",
        "name": "Wraith",
        "initiativeModifier": 8,
        "health": 67,
        "currentHealth": 67,
        "dodge": 13,
        "str": 3,
        "dex": 8,
        "con": 8,
        "wis": 7,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Incorporeal Movement",
                "desc": "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) Kinetic damage if it ends its turn inside an object."
            },
            {
                "name": "Sunlight Sensitivity",
                "desc": "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 16,
        "maxEgo": 14,
        "currentVes": 16,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Life Drain",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) Negative damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            },
            {
                "name": "Create Specter",
                "desc": "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time."
            }
        ]
    },
    {
        "id": "Wyvern",
        "name": "Wyvern",
        "initiativeModifier": 5,
        "health": 110,
        "currentHealth": 110,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 6,
        "int": 2,
        "cha": 3,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) Physical damage."
            },
            {
                "name": "Stinger",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) Physical damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Xorn",
        "name": "Xorn",
        "initiativeModifier": 5,
        "health": 73,
        "currentHealth": 73,
        "dodge": 10,
        "str": 8,
        "dex": 5,
        "con": 11,
        "wis": 5,
        "int": 5,
        "cha": 5,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Earth Glide",
                "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
            },
            {
                "name": "Stone Camouflage",
                "desc": "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            },
            {
                "name": "Treasure Sense",
                "desc": "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 22,
        "maxEgo": 10,
        "currentVes": 22,
        "currentEgo": 10,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The xorn makes three claw attacks and one bite attack."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) Physical damage."
            }
        ]
    },
    {
        "id": "Young Black Dragon",
        "name": "Young Black Dragon",
        "initiativeModifier": 7,
        "health": 127,
        "currentHealth": 127,
        "dodge": 12,
        "str": 9,
        "dex": 7,
        "con": 8,
        "wis": 5,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) Physical damage plus 4 (1d8) acid damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Acid Breath",
                "desc": "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Young Blue Dragon",
        "name": "Young Blue Dragon",
        "initiativeModifier": 5,
        "health": 152,
        "currentHealth": 152,
        "dodge": 10,
        "str": 10,
        "dex": 5,
        "con": 9,
        "wis": 6,
        "int": 7,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 20,
        "maxEgo": 16,
        "currentVes": 20,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) Physical damage plus 5 (1d10) Lightning damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) Physical damage."
            },
            {
                "name": "Lightning Breath",
                "desc": "The dragon exhales Lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) Lightning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Young Brass Dragon",
        "name": "Young Brass Dragon",
        "initiativeModifier": 5,
        "health": 110,
        "currentHealth": 110,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 8,
        "wis": 5,
        "int": 6,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 14,
        "currentVes": 18,
        "currentEgo": 14,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales Burning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) Burning damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            }
        ]
    },
    {
        "id": "Young Bronze Dragon",
        "name": "Young Bronze Dragon",
        "initiativeModifier": 5,
        "health": 142,
        "currentHealth": 142,
        "dodge": 10,
        "str": 10,
        "dex": 5,
        "con": 9,
        "wis": 6,
        "int": 7,
        "cha": 8,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 20,
        "maxEgo": 16,
        "currentVes": 20,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales Lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) Lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon."
            }
        ]
    },
    {
        "id": "Young Copper Dragon",
        "name": "Young Copper Dragon",
        "initiativeModifier": 6,
        "health": 119,
        "currentHealth": 119,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 8,
        "wis": 6,
        "int": 8,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
            }
        ]
    },
    {
        "id": "Young Gold Dragon",
        "name": "Young Gold Dragon",
        "initiativeModifier": 7,
        "health": 178,
        "currentHealth": 178,
        "dodge": 12,
        "str": 11,
        "dex": 7,
        "con": 10,
        "wis": 6,
        "int": 8,
        "cha": 10,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 20,
        "currentVes": 22,
        "currentEgo": 20,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales Burning in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) Burning damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Young Green Dragon",
        "name": "Young Green Dragon",
        "initiativeModifier": 6,
        "health": 136,
        "currentHealth": 136,
        "dodge": 11,
        "str": 9,
        "dex": 6,
        "con": 8,
        "wis": 6,
        "int": 8,
        "cha": 7,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 16,
        "currentVes": 18,
        "currentEgo": 16,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) Physical damage plus 7 (2d6) poison damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Poison Breath",
                "desc": "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Young Red Dragon",
        "name": "Young Red Dragon",
        "initiativeModifier": 5,
        "health": 178,
        "currentHealth": 178,
        "dodge": 10,
        "str": 11,
        "dex": 5,
        "con": 10,
        "wis": 5,
        "int": 7,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 18,
        "currentVes": 22,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage plus 3 (1d6) Burning damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Fire Breath",
                "desc": "The dragon exhales Burning in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) Burning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Young Silver Dragon",
        "name": "Young Silver Dragon",
        "initiativeModifier": 5,
        "health": 168,
        "currentHealth": 168,
        "dodge": 10,
        "str": 11,
        "dex": 5,
        "con": 10,
        "wis": 5,
        "int": 7,
        "cha": 9,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [],
        "criticalHitRate": 5,
        "proficiency": 4,
        "maxVes": 22,
        "maxEgo": 18,
        "currentVes": 22,
        "currentEgo": 18,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) Physical damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) Physical damage."
            },
            {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) Freezing damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    {
        "id": "Young White Dragon",
        "name": "Young White Dragon",
        "initiativeModifier": 5,
        "health": 133,
        "currentHealth": 133,
        "dodge": 10,
        "str": 9,
        "dex": 5,
        "con": 9,
        "wis": 5,
        "int": 3,
        "cha": 6,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Ice Walk",
                "desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 3,
        "maxVes": 18,
        "maxEgo": 12,
        "currentVes": 18,
        "currentEgo": 12,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Multiattack",
                "desc": "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) Physical damage plus 4 (1d8) Freezing damage."
            },
            {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) Physical damage."
            },
            {
                "name": "Cold Breath",
                "desc": "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) Freezing damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    {
        "id": "Zombie",
        "name": "Zombie",
        "initiativeModifier": 3,
        "health": 22,
        "currentHealth": 22,
        "dodge": 8,
        "str": 6,
        "dex": 3,
        "con": 8,
        "wis": 3,
        "int": 1,
        "cha": 2,
        "arcana": "",
        "tags": "",
        "fatalFlaw": "",
        "traits": [
            {
                "name": "Undead Fortitude",
                "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is Positive or from a critical hit. On a success, the zombie drops to 1 hit point instead."
            }
        ],
        "criticalHitRate": 5,
        "proficiency": 2,
        "maxVes": 16,
        "maxEgo": 6,
        "currentVes": 16,
        "currentEgo": 6,
        "characterType": "Enemy NPC",
        "MythicMoves": [],
        "MortalMoves": [
            {
                "name": "Slam",
                "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) Physical damage."
            }
        ]
    }
];