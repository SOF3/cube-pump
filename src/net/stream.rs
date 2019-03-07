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

extern crate libflate;

use std::io::Write;
use std::vec::Vec;

use net::protocol::PackedSignal;
use net::Writer;

use self::libflate::deflate::Encoder;

pub struct OutStream<W> {
	writer: W,
	buffer: Option<Encoder<Vec<u8>>>,
}

impl<W> OutStream<W> where W: Writer {
	pub fn new(writer: W) -> OutStream<W> {
		OutStream {
			writer,
			buffer: Some(Encoder::new(Vec::new())),
		}
	}

	pub fn flush(&mut self) {
		let vec = self.buffer.take().unwrap().finish().into_result().unwrap();
		self.writer.write(vec.as_slice());
		self.buffer.replace(Encoder::new(Vec::new()));
	}

	pub fn put<S: PackedSignal>(&self, signal: &S) {
		&signal.write();
	}
}
