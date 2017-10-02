import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {
  @Input() video: string;
  videoUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ this.video + '?autoplay=0&controls=1&disablekb=0');
  }

}
