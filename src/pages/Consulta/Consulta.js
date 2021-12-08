import React from 'react'
import '../Consulta/Consulta.css';

const Consulta = () => {
  return (
    <div class="container">
      <h1>Consulta tus Facturas</h1>

      <h2>Escribe el numero de tu factura</h2>
      <div class="col-4">
        
        <input type="text" class="form-control" placeholder="Ingresa el codigo a buscar"></input>
        <button type="button" class="btn btn-primary">Buscar</button>
        <button type="button" class="btn btn-secondary">Limpiar</button>
      <br></br>
      </div>

	<table>
		<thead>
			<tr>
				<th>Codigo</th>
				<th>Cedula</th>
				<th>Fecha pago</th>
				<th>Fecha Vencimiento</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>

        <div className="btn-group" role="group" aria-label="">

        <button type="button" class="btn btn-info">Ver</button>
        <button type="button" class="btn btn-warning">Pagar</button>

        </div>

        </td>
			</tr>
			
		</tbody>
	</table>
</div>
  )
}
export default Consulta;