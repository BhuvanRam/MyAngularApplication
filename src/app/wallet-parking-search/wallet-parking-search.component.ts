import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RequestOptions, Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-wallet-parking-search',
  templateUrl: './wallet-parking-search.component.html',
  styleUrls: ['./wallet-parking-search.component.css']
})
export class WalletParkingSearchComponent implements OnInit {

  imageScanningContent: boolean = false;
  capturedText: string = '';
  //{ facingMode: { exact: "environment" } }
  constraints: any = { video: true, width: 320, height: 240 };
  @ViewChild('video') video: any
  @ViewChild('canvas') canvas: any
  @ViewChild('img') img: any


  constructor(private http: Http) {

  }

  ngOnInit() {
  }

  getUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia)
  }

  imageScanning() {
    this.imageScanningContent = !this.imageScanningContent;

    if (this.imageScanningContent) {
      if (this.getUserMedia()) {
        console.log('getUserMedia() is supported by your browser');
        navigator.mediaDevices.getUserMedia(this.constraints).
          then((stream) => {
            let _video = this.video.nativeElement
            _video.srcObject = stream
          }).catch((error) => {
            console.log(error)
          });
      }
      else
        console.log('getUserMedia() is not supported by your browser');
    }
  }

  CaptureScreenshot() {
    this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
    this.canvas.nativeElement.height = this.video.nativeElement.videoHeight;
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0);
    // Other browsers will fall back to image/png
    //image/webp
    this.video.nativeElement.style.display = 'none'
    this.img.nativeElement.style.display = 'inline'
    this.img.nativeElement.src = this.canvas.nativeElement.toDataURL()
    this.processImage()

  }


  processImage() {

    let uriBase = 'https://smartprowebapi.azurewebsites.net/api/ImageProcessing'
    const header = new Headers()
    header.append('Content-Type', 'application/json; charset=utf-8')
    let requestBody = JSON.stringify({ 'base64image': this.img.nativeElement.src })
    this.http.post(uriBase, requestBody, { headers: header }).subscribe((res) => {
      let responseString = JSON.stringify(res)
      let responseJSON = JSON.parse(responseString)
      this.capturedText = responseJSON._body
      console.log(this.capturedText)
      this.imageScanningContent = false
    }, (error) => {
      console.log(error)
    })
  }



}