import { Monitor } from "reactronic";

export class Monitors {
  static readonly colorDebounce: Monitor = Monitor.create('colorChangeMonitor', 1000);
}