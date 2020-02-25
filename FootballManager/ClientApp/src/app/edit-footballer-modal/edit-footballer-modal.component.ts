import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITeam } from 'src/shared/models/team.interface';
import { FootballerService } from 'src/shared/services/footballer.service';
import { TeamService } from 'src/shared/services/team.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IFootballer } from 'src/shared/models/footballer.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-footballer-modal',
  templateUrl: './edit-footballer-modal.component.html',
  styleUrls: ['./edit-footballer-modal.component.css']
})
export class EditFootballerModalComponent implements OnInit {

  @Input() footballer: IFootballer;
  
  editForm: FormGroup;

  genders = ['Мужской', 'Женский'];
  countries = ['Россия', 'США', 'Италия'];
  teams: ITeam[];

  constructor(
    public fb: FormBuilder,
    private footballerService: FootballerService,
    private teamService: TeamService,
    public activeModal: NgbActiveModal) {

    this.getListTeams();
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [this.footballer.id, [Validators.required]],
      name: [this.footballer.name, [Validators.required]],
      surname: [this.footballer.surname, [Validators.required]],
      gender: [this.footballer.gender, [Validators.required]],
      birthday: [moment(this.footballer.birthday).format('YYYY-MM-DD'), [Validators.required]],
      teamId: [this.footballer.teamId, [Validators.required]],
      country: [this.footballer.country, [Validators.required]]
    });
   }

  getListTeams() {
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

  editFootbaler() {
    if (!this.editForm.invalid) {
      this.footballerService.editFootballer(this.editForm.value).subscribe(a => {
        this.activeModal.close();
      });
    }
  }
}
