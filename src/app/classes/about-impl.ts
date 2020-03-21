import { About } from '../components/models/about';

export class AboutImpl implements About{
  id?: number = 0;
  title: string ="";
  description: string="";
  birthday: Date=null;
  image: string="";
}
