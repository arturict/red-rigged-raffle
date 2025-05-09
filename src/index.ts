// __     __        _
// \ \   / /__ _ __| | ___  ___ _   _ _ __   __ _
//  \ \ / / _ \ '__| |/ _ \/ __| | | | '_ \ / _` |
//   \ V /  __/ |  | | (_) \__ \ |_| | | | | (_| |
//    \_/ \___|_|  |_|\___/|___/\__,_|_| |_|\__, |

import { assignPrizesRandomlyderHase } from "./absneakender-hase.js";
import { price } from "./gewinnbarer-hase.js";

//
export class Verlosung {
  //  __________________________________
  // < Main-Methode des Main-Characters >
  //  ----------------------------------
  //    \         __------~~-,
  //     \      ,'            ,
  //           /               \
  //          /                :
  //         |                  '
  //         |                  |
  //         |                  |
  //          |   _--           |
  //          _| =-.     .-.   ||
  //          o|/o/       _.   |
  //          /  ~          \ |
  //        (____@)  ___~    |
  //           |_===~~~.`    |
  //        _______.--~     |
  //        \________       |
  //                 \      |
  //               __/-___-- -__
  //              /            _ \
  public main() {
    const contestants = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@Ronaldo7",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@ArturDieLegende",
    ];
    const fiktivePreise = [
      new price("iPhone 16 Pro", 1),
      new price("Trip nach Dubai", 1),
      new price("Stepper nach Isti", 1),
      new price("10 kg Haribo", 2),
      new price("PlayStation 5 Slim", 3),
      new price("gebrauchte Sneaker", 5),
    ];
    const winners = new assignPrizesRandomlyderHase(
      contestants,
      fiktivePreise,
    ).assignPrizesRandomly();
    for (const [winner, price] of winners.entries()) {
      console.log(`${winner} gewinnt ${price}`);
    }
  }
}

new Verlosung().main();
