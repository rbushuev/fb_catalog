import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/shared/services/team.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team-modal',
  templateUrl: './add-team-modal.component.html',
  styleUrls: ['./add-team-modal.component.css']
})
export class AddTeamModalComponent implements OnInit {

  addTeamForm: FormGroup;
  isRequesting : boolean;

  constructor(public fb: FormBuilder, public activeModal: NgbActiveModal, private teamService: TeamService) {
    this.addTeamForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
 
  ngOnInit() {
  }

  addTeam() {
    if (!this.addTeamForm.invalid) {
      this.isRequesting = true;
      this.teamService.addTeam(this.addTeamForm.value).subscribe(a => {
        this.activeModal.close();
      });
    }
  }

}
