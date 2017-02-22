import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Document } from "./document";
import { DocumentService } from "./document.service";
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  pageTitle: String = "Document Dashboard";
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
}
