import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  first_name = 'amit';
  last_name = "dhakad";
  email= "dhakad.amit@outlook.com";
  mobile = "+917389612519";
  objective = "To improve my technical skill and to become a beneficial resource for the development of the company as well as my improvement and complete my desired goals."
  address= " Btm 1st Stage Bangalore."
  oca = "Oracle Certified Associate, Java SE 7 Programmer";
  github = "https://github.com/amit-dhakad";
  linkedin= "https://www.linkedin.com/in/amit-dhakad-29642389";

  constructor() { }

  ngOnInit() {
  }

}
