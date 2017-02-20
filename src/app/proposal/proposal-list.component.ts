import { Component, OnInit } from '@angular/core';
import { Proposal } from "./proposal";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

// DUMMY DATA
  proposalOne: Proposal = new Proposal(
    15, 'Abc Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails',
    150, 120, 15, 'jordanhudgens.com'
  );

  proposalTwo: Proposal = new Proposal(
    99, 'XYZ Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails',
    150, 120, 15, 'jordanhudgens.com'
  );

  proposalThree: Proposal = new Proposal(
    300, 'Something Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails',
    150, 120, 15, 'jordanhudgens.com'
  );
  
  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree];
// DUMMY DATA

  constructor() { }

  ngOnInit() {
  }

}