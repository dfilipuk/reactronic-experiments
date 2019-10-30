import { Monitor } from "reactronic";

export class Monitors {
  static readonly colorChange: Monitor = Monitor.create('colorChangeMonitor', 500);
}