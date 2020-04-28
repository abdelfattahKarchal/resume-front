import { Mission } from './mission';
import { Environnement } from './environnement';

export interface Project
{
  id?:number;
  titre: string;
  description: string;
  missions: Mission[];
  environnements: Environnement[];

}
