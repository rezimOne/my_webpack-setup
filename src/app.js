import _ from 'lodash';
import './style.scss';
import { launchComponent1 } from './component1';
import { launchComponent2 } from './component2';
import { launchComponent3 } from './component3';


document.body.appendChild(launchComponent1());
document.body.appendChild(launchComponent2());
document.body.appendChild(launchComponent3());