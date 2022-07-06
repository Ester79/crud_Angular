import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from './interfaces/posts.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {

    const resultPosts: Posts[]= [];

    for(const post of value){
      if(post.userId == args || args == ""){
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
