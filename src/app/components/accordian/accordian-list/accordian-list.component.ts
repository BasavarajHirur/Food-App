import { Component, Input } from '@angular/core';
import { CLOUDINARY_CDN_URL, MEME_2 } from 'src/app/contants/api-url';

@Component({
  selector: 'app-accordian-list',
  templateUrl: './accordian-list.component.html',
  styleUrls: ['./accordian-list.component.scss']
})
export class AccordianListComponent {
  @Input('accordianList') accordianList: any;

  public CLOUDINARY_CDN_URL =CLOUDINARY_CDN_URL;
  public MEME_2 = MEME_2;
}
