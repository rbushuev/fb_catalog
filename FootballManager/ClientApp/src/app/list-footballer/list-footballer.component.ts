import { Component, OnInit } from '@angular/core';
import { IFootballer } from 'src/shared/models/footballer.interface';
import { FootballerService } from 'src/shared/services/footballer.service';
import * as signalR from '@aspnet/signalr';  
import { EditFootballerModalComponent } from '../edit-footballer-modal/edit-footballer-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-footballer',
  templateUrl: './list-footballer.component.html',
  styleUrls: ['./list-footballer.component.css']
})
export class ListFootballerComponent implements OnInit {

  footballers: IFootballer[];

  constructor(private footballersService: FootballerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getFootballers();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl("http://localhost:5000/notify")
      .build();

    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", () => {
      this.getFootballers();
    });
  }

  openEditFootballer(footballer: IFootballer) {
    console.log(footballer);
    const modalRef = this.modalService.open(EditFootballerModalComponent, { centered: true, size: 'xl' });
    modalRef.componentInstance.footballer = footballer;
  }

  getFootballers() {
    this.footballersService.getFootballers().subscribe(footballers => {
      this.footballers = footballers;
    });

  }
}
