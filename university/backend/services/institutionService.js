import db from '../database/db.js'

export const createInstitution = (data) => {
	const { name, address } = data
	return new Promise((resolve, reject) => {
		const query = `INSERT INTO institutions (name, address) VALUES (?, ?)`
		db.run(query, [name, address], function (err) {
			if (err) return reject(err)
			resolve({ id: this.lastID, name, address })
		})
	})
}

export const getAllInstitutions = () => {
	return new Promise((resolve, reject) => {
		db.all(`SELECT * FROM institutions`, [], (err, rows) => {
			if (err) return reject(err)
			resolve(rows)
		})
	})
}

export const getInstitutionById = (id) => {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM institutions WHERE id = ?`
		db.get(query, [id], (err, row) => {
			if (err) return reject(err)
			if (!row) return reject(new Error('Institution not found'))
			resolve(row)
		})
	})
}

export const updateInstitution = (id, updates) => {
	return new Promise((resolve, reject) => {
		const { name, address, type } = updates
		const query = `
            UPDATE institutions
            SET name = ?, address = ?, type = ?
            WHERE id = ?
        `
		db.run(query, [name, address, type, id], function (err) {
			if (err) return reject(err)
			if (this.changes === 0) return reject(new Error('Institution not found'))
			resolve({ id, name, address, type })
		})
	})
}

export const deleteInstitution = (id) => {
	return new Promise((resolve, reject) => {
		const query = `DELETE FROM institutions WHERE id = ?`
		db.run(query, [id], function (err) {
			if (err) return reject(err)
			if (this.changes === 0) return reject(new Error('Institution not found'))
			resolve()
		})
	})
}
