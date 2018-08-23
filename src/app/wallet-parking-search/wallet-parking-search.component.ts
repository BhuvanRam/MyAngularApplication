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
  //{ facingMode: { exact: "environment" } }
  constraints: any = { video: { facingMode: { exact: "environment" } }, width: 320, height: 240 };
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
    this.imageScanningContent = true

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

  CaptureScreenshot() {
    this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
    this.canvas.nativeElement.height = this.video.nativeElement.videoHeight;
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0);
    // Other browsers will fall back to image/png
    //image/webp
    this.video.nativeElement.style.display = 'none'
    this.img.nativeElement.style.display = 'inline'
    this.img.nativeElement.src = this.canvas.nativeElement.toDataURL()
    let byteArray = this.getbyteArrayFromBase64(this.img.nativeElement.src)
    this.processImage()
  }


  processImage() {
    let uriBase = 'https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/recognizeText'
    uriBase = uriBase + '?mode=Printed'
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('subscriptionKey', '00696481cb614ea08fdb1c8527019f43');

    this.http.post(uriBase, this.img.nativeElement.src, { headers: header }).subscribe((res: Response) => {
      console.log(res.headers['Operation-Location']);
    }, (error) => {
      console.log(error);
    })
  }

  getbyteArrayFromBase64(base64StringFromURL): any {
    let parts = base64StringFromURL.split(";base64,");
    let contentType = parts[0].replace("data:", "");
    let base64 = parts[1];
    let byteArray = this.base64ToByteArray(base64);
    return byteArray;
  }

  base64ToByteArray(base64String) {
    try {
      var sliceSize = 1024;
      var byteCharacters = atob(base64String);
      var bytesLength = byteCharacters.length;
      var slicesCount = Math.ceil(bytesLength / sliceSize);
      var byteArrays = new Array(slicesCount);

      for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return byteArrays;
    } catch (e) {
      console.log("Couldn't convert to byte array: " + e);
      return undefined;
    }
  }
}
