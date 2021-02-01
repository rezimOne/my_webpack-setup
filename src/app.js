import _ from 'lodash';
import './style.scss';
import { launchComponent1 } from './component1';
import { launchComponent2 } from './component2';
import { launchComponent3 } from './component3';
import { imgCreate1 } from './component1';
import { imgCreate2 } from './component2';

let one = document.body.appendChild(launchComponent1());
one.appendChild(imgCreate1());
let two = document.body.appendChild(launchComponent2());
two.appendChild(imgCreate2());
document.body.appendChild(launchComponent3());