import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  originalContact: any;
  editContact: any;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    let paramId = +this.route.snapshot.parent.params['id'];
    this.originalContact = this.contactService.get(paramId);

    this.editContact = {
      id: this.originalContact.id,
      name: this.originalContact.name
    };
  }

  save() {
  	console.log('save')
    this.originalContact = this.contactService.edit(this.editContact);
  }

}
