import {Routes} from '@angular/router';
import {MagicRouterContainer} from './magic/src/ui/MagicRouterContainer';

export const routes: Routes = [
  {
    path: 'A',
    component: MagicRouterContainer,
    children: [
      {
        path: 'SubA1',
        component: MagicRouterContainer,
      }
    ]
  },
  {
    path: 'A',
    component: MagicRouterContainer,
    outlet: "Subform3",
    children: [
      {
        path: 'SubA1',
        component: MagicRouterContainer,
      }
    ]
  },
  {
    path: 'B',
    component: MagicRouterContainer,
  }
];
