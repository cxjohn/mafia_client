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

export enum Role {
  MAFIA = 0,
  TOWNSPERSON = 1,
}

export class Player extends Schema {
  @type("string") public name!: string;
  @type("boolean") public alive!: boolean;
  @type("number") public role!: Role;
  @type("boolean") public room_owner!: boolean;
  @type("boolean") public confirmed!: boolean;
  @type("boolean") public voted!: boolean;
}
