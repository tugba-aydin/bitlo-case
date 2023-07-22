import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhonePipe implements PipeTransform {

  transform(number:string) {
    const countryCode = number.slice(0,3);
    const firstThreeNumber = number.slice(3,6);
    const secondThreeNumber = number.slice(6,9);
    const firstTwoNumber= number.slice(9,11);
    const secondTwoNumber=number.slice(11);
    return `${countryCode} ${firstThreeNumber} ${secondThreeNumber} ${firstTwoNumber} ${secondTwoNumber}`;
  }

}
