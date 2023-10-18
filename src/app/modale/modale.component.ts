import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modale-component',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css'],
})
export class ModaleComponent implements OnInit {
  // Quando si apre la modale
$("#overlay").addClass("modal-open");
$("body").addClass("modal-open");

// Quando si chiude la modale
$("#overlay").removeClass("modal-open");
$("body").removeClass("modal-open");

  constructor() {}

  ngOnInit() {}
}
