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

extern crate cfg_if;
extern crate wasm_bindgen;
extern crate wasm_bindgen_test;
extern crate web_sys;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

use net::Writer;

mod net;
mod utils;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
extern {
	fn alert(s: &str);
}

#[wasm_bindgen]
pub fn connect_server(address: &str, port: u16) {
	struct HexConsoleWriter {}
	impl Writer for HexConsoleWriter {
		fn write(&mut self, buffer: &[u8]) {
			println!("{:#x?}", buffer)
		}
	}

	let client = net::client::Client::new(HexConsoleWriter {});
	let canvas = web_sys::window().expect("window not found")
		.document().expect("window.document not found")
		.get_element_by_id("MainCanvas");
}
