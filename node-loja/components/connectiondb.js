import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

export async function connectiondb(){
    return open ({
        filename: './data/data_loja.db',
        driver: sqlite3.Database
    })
}