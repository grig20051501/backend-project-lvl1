#!/usr/bin/env node
import greeting from '../src/cli.js';
import game from '../src/even.js';

const name = greeting();
game(name);
