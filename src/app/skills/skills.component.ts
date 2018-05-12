import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

tittle = "Skills";
subTittle1 = "Programming Languages & Tools";
subTittle2 = "TECHNICAL SUMMARY";

skills =[{
/* 1 */
  sTittle: "JAVA",
  summaries :[
    "Good knowledge of OOPs concept like Abstraction, Encapsulation, Polymorphism, Inheritance.",
    "Good knowledge of String, singleton design pattern.",
    "Good in Exception Handling.",
    "Good understanding of File handling IO and Serialization."
]
},    
/* 2 */
{

  sTittle: "JAVA",
  summaries :[
    "Good knowledge of OOPs concept like Abstraction, Encapsulation, Polymorphism, Inheritance.",
    "Good knowledge of String, singleton design pattern.",
    "Good in Exception Handling.",
    "Good understanding of File handling IO and Serialization."
]
},
/* 3 */
{

  sTittle: "JAVA",
  summaries :[
    "Good knowledge of OOPs concept like Abstraction, Encapsulation, Polymorphism, Inheritance.",
    "Good knowledge of String, singleton design pattern.",
    "Good in Exception Handling.",
    "Good understanding of File handling IO and Serialization."
]
},
/* 4 */
{

  sTittle: "JAVA",
  summaries :[
    "Good knowledge of OOPs concept like Abstraction, Encapsulation, Polymorphism, Inheritance.",
    "Good knowledge of String, singleton design pattern.",
    "Good in Exception Handling.",
    "Good understanding of File handling IO and Serialization."
]
}



]



  constructor() { 

 

  }

  ngOnInit() {
  }

}
