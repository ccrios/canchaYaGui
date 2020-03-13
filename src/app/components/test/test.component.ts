import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  texto: any;
  constructor(
    public testService: TestService
  ) {
    this.texto = "";
  }

  ngOnInit() {
  }

  sendTest() {
    const data = {
      textValue : this.texto,
      otro: "santi es gay"
    };
    this.testService.postTest(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
