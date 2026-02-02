"use strict";

const chalk = require("chalk");

console.log(chalk.magentaBright.bold("\n🪷 Modified Baileys 🪷"));
console.log(chalk.whiteBright("Custom environment loaded successfully."));
console.log(
  chalk.whiteBright(" Modification of: ") + chalk.greenBright("@Leosikmaboy")
);

console.log(chalk.gray("\n──────────────────────────────────────────\n"));

console.log(
  chalk.magentaBright(`
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡀⢰⠆⣛⣨⣆⣭⠶⡓⠓⠄⠀⠀⠀⠀⠀⠀
⠀⠀⠠⣄⣠⠼⢛⣳⢬⣿⣿⣿⣎⡙⣟⠔⢨⣐⡆⠀⠀⠀⠀
⠀⠀⠀⢻⣗⡲⣴⣇⣿⣿⣿⣿⣿⣟⡄⠠⢁⣿⠇⠀⠀⠀⠀
⠀⢀⣀⣠⣯⡤⣙⣿⣿⣿⣿⣿⣿⣿⡇⢀⢿⡟⠀⠐⠀⡀⡀
⠘⢿⣏⡙⢿⣿⣦⣙⣿⣽⢿⣻⣿⣿⣇⠾⠋⠂⠀⠐⢨⡟⠀
⠀⠀⠈⠙⠫⠚⢿⠿⠿⠟⠛⠿⠿⡿⠉⠀⠀⣀⠌⠄⠋⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣄⠀⠀⠀⢀⡠⠃⡀⠀⠀⠀⡴⠂⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


╭╮╱╱╭━━━┳━━━╮
┃┃╱╱┃╭━━┫╭━╮┃
┃┃╱╱┃╰━━┫┃╱┃┃
┃┃╱╭┫╭━━┫┃╱┃┃
┃╰━╯┃╰━━┫╰━╯┃
╰━━━┻━━━┻━━━╯
                                   ⠀⠀⠀⠀⠀⠀
( Ϟ ) Thank you for using Baileys XyzLeo Hope you enjoy this Baileys 
Created By @Leosikmaboy.
`)
);

console.log(chalk.gray("──────────────────────────────────────────\n"));

var createBinding =
  (this && this.createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (
          !desc ||
          (!("get" in desc) && (desc.writable || desc.configurable))
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }

        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
