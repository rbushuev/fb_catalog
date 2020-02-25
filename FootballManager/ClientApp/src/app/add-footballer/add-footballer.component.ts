import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FootballerService } from 'src/shared/services/footballer.service';
import { TeamService } from 'src/shared/services/team.service';
import { ITeam } from 'src/shared/models/team.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTeamModalComponent } from '../add-team-modal/add-team-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-footballer',
  templateUrl: './add-footballer.component.html',
  styleUrls: ['./add-footballer.component.css']
})
export class AddFootballerComponent implements OnInit {

  form: FormGroup;

  genders = ['Мужской', 'Женский'];
  countries = ['Россия', 'США', 'Италия'];
  teams: ITeam[];

  constructor(
    public fb: FormBuilder,
    private footballerService: FootballerService,
    private teamService: TeamService,
    private modalService: NgbModal,
    private router: Router) {

    this.getListTeams();

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      gender: [this.genders[0], [Validators.required]],
      birthday: ['', [Validators.required]],
      teamId: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  getListTeams() {
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

  open() {
    this.modalService.open(AddTeamModalComponent, { centered: true }).result.then(result => {
      this.getListTeams();
    });
  }

  addFootballer() {
    if (!this.form.invalid) {
      this.footballerService.addFootballer(this.form.value).subscribe(x => {
        this.router.navigate(['/']);
      });
    }
  }

}
