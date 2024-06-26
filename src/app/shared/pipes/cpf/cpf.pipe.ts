import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value) {
      return '';
    }
    
    value = value.replace(/\D/g, '');
    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }

}
