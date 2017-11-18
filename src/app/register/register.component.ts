import { Component, OnInit, ViewChild} from '@angular/core';
import { MyAppServiceService } from '../my-app-service.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Popup} from 'ng2-opd-popup';

declare var $;
declare var swal;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('popup1') popup1: Popup;
  constructor(private router: Router,
              private myappseService: MyAppServiceService) { }
  ngOnInit(): void {
  }

  createShipment(form) {
    this.myappseService.create(form).subscribe(
      data => {
        console.log('Result', form);
        if (confirm('Thanks for the Registeration!')) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/register']);
        }
        if ( true ) {
          this.popup1.options = {
            header: 'Your custom header',
            color: '#5cb85c',
            widthProsentage: 40,
            animationDuration: 1,
            showButtons: true,
            confirmBtnContent: 'OK',
            cancleBtnContent: 'Cancel',
            confirmBtnClass: 'btn btn-default',
            cancleBtnClass: 'btn btn-default',
            animation: 'fadeInDown'
          };
          this.popup1.show(this.popup1.options);
        }
      },
      err => {
        console.log(err);
      },
    );
  }
}

