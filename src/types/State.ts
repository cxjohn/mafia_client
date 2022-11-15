//
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
//
// GENERATED USING @colyseus/schema 1.0.42
//

import {
  Schema,
  type,
  ArraySchema,
  MapSchema,
  SetSchema,
  DataChange,
} from "@colyseus/schema";
import { Player } from "./Player";
import { PhaseType } from "../components/Phase";

export class State extends Schema {
  @type("number") public countdown!: number;
  @type("boolean") public entered!: boolean;
  @type("string") public phase!: PhaseType;
  @type("number") public phaseIndex!: number;
  @type(["string"]) public phaseArr: ArraySchema<string> =
    new ArraySchema<string>();
  @type({ map: Player }) public players: MapSchema<Player> =
    new MapSchema<Player>();
}
