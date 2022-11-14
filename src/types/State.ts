// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.42
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Player } from './Player'

export class State extends Schema {
    @type("boolean") public entered!: boolean;
    @type("number") public phase!: number;
    @type({ map: Player }) public players: MapSchema<Player> = new MapSchema<Player>();
}
