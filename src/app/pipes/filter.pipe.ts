import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) {return value; }
    const resultUser = [];
    for (const user of value) {
      if (user.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultUser.push(user);
      }
    }
    return resultUser;
  }


}

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//     // Transform
   
//     // @param {any[]} items
//     // @param {string} searchText
//     // @returns {any[]}
   
//   transform(items: any[], searchText: string): any[] {
//     if (!items) {
//       return [];
//     }
//     if (!searchText) {
//       return items;
//     }
//     searchText = searchText.toLocaleLowerCase();

//     return items.filter(it => {
//       return it.toLocaleLowerCase().includes(searchText);
//     });
//   }


// }
