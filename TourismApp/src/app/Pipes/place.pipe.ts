import { Pipe, PipeTransform } from '@angular/core';
import { Tourism } from '../Models/tourism';

@Pipe({
  name: 'place'
})
export class PlacePipe implements PipeTransform {

  transform(tourist: Tourism[], args: string): Tourism[] {
    if(args == "")
      return tourist;
    else
      return tourist.filter((t: Tourism) => t.Name.toLowerCase().includes(args));
  }

}
