import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '';
    formData: FormData;
    itsmJsonFile: File;
    itsmImplFiles: FileList;
    
    ngOnInit() {
        this.formData = new FormData();        
        this.itsmImplFiles = new FileList();
    }

    ngOnDestroy() {

    }

    onSubmit() {
        this.title = 'filel upload';
    }

    fileChange(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            this.itsmJsonFile = file;
            this.formData.append('uploadFile', file, file.name);
        }
        
    }

    multipleFileChange(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.itsmImplFiles = fileList;
            for (let fileCount = 0; fileCount < fileList.length; fileCount++) {
                let file: File = fileList[fileCount];
                this.formData.append('uploadFile', file, file.name);
            }
        }
    }

    close() {

    }
}
