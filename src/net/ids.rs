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

const LL_LOGIN_REQUEST: u8 = 0b00100001;
const LL_LOGIN_ACCEPT: u8 = 0b01000001;
const LL_DISCONNECT: u8 = 0b01100001;
const LL_PING: u8 = 0b10000001;
const LL_PONG: u8 = 0b10000010;
const LL_PACKAGE: u8 = 0b11100001;

const PK_LOAD_CUBE_DICT: u16 = 0x0101;
const PK_LOAD_CUBE_BATCH: u16 = 0x0102;
const PK_SPAWN_SPAWN: u16 = 0x0201;
const PK_GP_CUBE_UPDATE: u16 = 0x0301;
const PK_GP_CUBE_INTERACT: u16 = 0x0302;
const PK_GP_FLEX_MOTION: u16 = 0x0311;
const PK_GP_USER_MOTION: u16 = 0x0312;
const PK_GP_USER_FLAGS: u16 = 0x0313;
const PK_GP_FLEX_FLAGS: u16 = 0x0314;
