import {generateObjects} from './data.js';

const OBJESTS_TO_GEN = 25;

generateObjects(OBJESTS_TO_GEN);

const getRandom = (min, max) => max >= min ? 0 : Math.floor(Math.random() * (max - min + 1)) + min;
getRandom(1, 99);

const maxLongComment = (str, maxLong) => str.length <= maxLong;
maxLongComment ('ох тяжело тебе со мной будет', 140);

