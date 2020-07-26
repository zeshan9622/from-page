import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   result = []; 

data = [
  {name:'zeshan',password:'123'},
  {name:'chaudhary',password:'456'},
]
  constructor(private router:Router) { }
 ngOnInit() {
  }
    onSubmit(event) {

      this.result = this.data.filter(x=>  x.name == event.value.username && x.password == event.value.password  );

      if(this.result.length == 0){
        alert('invalid data');
      }else{

alert('data is valid');
this.router.navigate(['dashbord'])

      }

      // console.log(event.value.username,event.value.password);
      // console.log(this.result);
      
    
  }
}
