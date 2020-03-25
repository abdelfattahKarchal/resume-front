import { Presentation } from '../components/models/presentation';

export class PresentationImpl implements Presentation {
  id?: number;
  title: string;
  image: string;
  description: string;
  cv_path: string;
}
