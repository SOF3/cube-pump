/*
 * CubePump
 *
 * Copyright (C) 2019 SOFe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as wasm from "cube-pump"
import * as queryString from "query-string"

const query = queryString.parse(window.location.search)

if(query.address && query.port){
	const address = query.address
	const port = parseInt(query.port)
	wasm.connect_server(address, port)
}

window.document.getElementById("ConnectForm").addEventListener("submit", event => {
	event.preventDefault()
	const address = window.document.getElementById("ConnectForm-Address")
	const port = window.document.getElementById("ConnectForm-Port")
	wasm.connect_server(address.value, parseInt(port.value))
})
