import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from "../_services/account.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // //recieving data from home component down (home component is the father)
  // @Input() usersFromHomeComponent: any;
  //sending data from register component up to home component (register component is the child)
  @Output() cancelRegister = new EventEmitter()
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error)
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
