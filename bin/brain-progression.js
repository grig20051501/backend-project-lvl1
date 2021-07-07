#!/usr/bin/env node
import greeting from '../src/cli.js';
import game from '../src/progression.js';

const name = greeting();
game(name);
