import { Component, OnInit } from '@angular/core';
import { Medicamentos } from 'src/app/models/medicamentos.model';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  medicamento : Medicamentos = {}

  constructor(
    private medicamentoService: MedicamentosService
  ) { }

  registrarMedicamento(){
    console.log(this.medicamento)
    this.medicamentoService.crear(this.medicamento).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error    => {
        console.log(error);
      },
    );
  }

  ngOnInit(): void {
  }

}
