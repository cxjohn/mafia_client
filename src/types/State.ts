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
import { PhaseType } from "../types";

export class State extends Schema {
  @type("number") public minClients!: number;
  @type("number") public countdown!: number;
  @type("number") public phase!: PhaseType;
  @type("string") public narration!: string;
  @type("string") public id!: string;
  @type("string") public sessionId!: string;
  @type({ map: Player }) public players: MapSchema<Player> =
    new MapSchema<Player>();
}
