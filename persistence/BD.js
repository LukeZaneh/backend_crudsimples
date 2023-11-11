import pg from 'pg'

async function conectar() {
    const pool = new pg.Pool({
        connectionString:"postgres://matgdrvr:wHEkHq5ySL3Aatlonq-AzAoS342wjRQr@isabelle.db.elephantsql.com/matgdrvr"
    })

    return pool.connect();
}

export default { conectar }