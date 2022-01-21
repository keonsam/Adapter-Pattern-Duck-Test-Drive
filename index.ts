import { Duck } from "./src/Duck";
import { MallardDuck } from "./src/MallardDuck";
import { TurkeyAdapter } from "./src/TurkeyAdapter";
import { WildTurkey } from "./src/WildTurkey";

class DriveTestDrive {
  static main():void {
    const duck = new MallardDuck();
    console.log("Mallard Duck says...");
    this.testDuck(duck);
    const turkey = new WildTurkey()
    console.log("Wild Turkey says...");
    this.testDuck(new TurkeyAdapter(turkey));
  }

  static testDuck(duck: Duck) {
    duck.quack();
    duck.fly();
  }
}

DriveTestDrive.main();