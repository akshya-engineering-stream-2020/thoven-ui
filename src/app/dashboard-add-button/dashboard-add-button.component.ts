import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-add-button',
  templateUrl: './dashboard-add-button.component.html',
  styleUrls: ['./dashboard-add-button.component.scss']
})
export class DashboardAddButtonComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openScrollableContent(addNewCard): void {
    this.modalService.open(addNewCard, {scrollable: true});
  }

}
