import { OnChanges, Component ,Input ,EventEmitter,Output} from "@angular/core";

@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarStyleComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    OnClick() : void {
        console.log('hi ${this.rating} was clicked');
        this.ratingClicked.emit("Hi rating was clicked");
    }
}