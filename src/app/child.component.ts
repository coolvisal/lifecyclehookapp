import { Component, Input, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";

@Component({
    selector: 'child-view',
    template: `
                <hr>
                <div>
                    {{name}}
                </div>
    `
})
export class ChildComponent implements OnDestroy{
    @Input() name="visal Ahmad";

    ngOnChanges(changes: SimpleChanges){
      for(let propertyName in changes)
      {
        let change=changes[propertyName];
        let current=JSON.stringify(change.currentValue);
        let previus=JSON.stringify(change.previousValue);
        console.log(`Name current value is ${current} from previus value is ${previus}.`);
      }
    }

    ngOnInit(){
        console.log('fired ngOnInit method from life cycle hook')
    }

    ngOnDestroy(){
        console.log('Fired ngOnDistroy() method from life cycle hook')
    }
}