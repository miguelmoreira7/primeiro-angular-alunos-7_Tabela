import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(numero: String): String {
    if (numero.length === 8) {
      return numero.substring(0,4)
      + '-' + numero.substring(4)
    }
    else if (numero.length === 9) {
      return numero.substring(0,5)
      + '-' + numero.substring(5)
    }
    else if (numero.length === 10) {
      return '(' + numero.substring(0,2) + ') '
      + numero.substring(2,6) + '-'
      + numero.substring(6)
    }
    else if (numero.length === 11) {
      return '(' + numero.substring(0,3) + ') '
      + numero.substring(3,7) + '-'
      + numero.substring(7)
    }
    else {return numero}
  }

}
