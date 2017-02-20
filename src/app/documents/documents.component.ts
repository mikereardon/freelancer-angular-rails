import { Component, OnInit } from '@angular/core';
import { Document } from "./document";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  pageTitle: String = "Document Dashboard";

// DUMMY DATA
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "This is a file description.",
      file_url: "http://google.com",
      updated_at: "20/02/17",
      image_url: "http://google.com"
    },
    {
      title: "My Second Doc",
      description: "This is a file description.",
      file_url: "http://google.com",
      updated_at: "20/02/17",
      image_url: "http://google.com"
    },
    {
      title: "My Last Doc",
      description: "This is a file description.",
      file_url: "http://google.com",
      updated_at: "20/02/17",
      image_url: "http://google.com"
    },
  ];
  //DUMMY DATA

  constructor() { }

  ngOnInit() {
  }



}
