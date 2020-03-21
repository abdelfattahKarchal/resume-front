import { Contact } from '../components/models/contact';

export class ContactImpl implements Contact {
  id?: number =0;
  address: string ="";
  phone: string="";
  email: string="";
  website: string="";
  facebook: string="";
  linkedin: string="";
}
