import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	contacts: Array<Object> = [
	    { id: 100, name: 'Andy' },
	    { id: 201, name: 'George' },
	    { id: 302, name: 'Max' }
	  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewDetails(id) {
    this.router.navigate(['contact', id]);
  }
}
