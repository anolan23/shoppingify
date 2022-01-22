const db = require('../index.js');

class Categories {
  static async find() {
    try {
      const { rows } = await db.query(
        `
        SELECT *, 
          (
            SELECT jsonb_agg(nested_item)
            FROM (
              SELECT *
              FROM items
              WHERE category_id = categories.id
            ) AS nested_item
          ) AS items
        FROM categories
        `,
        []
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async search(q, limit) {
    try {
      const { rows } = await db.query(
        `
        SELECT *
        FROM categories
        WHERE name ILIKE $1
        ORDER BY name
        LIMIT $2
        `,
        [`%${q}%`, limit]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async add(name) {
    try {
      const { rows } = await db.query(
        `
        INSERT INTO categories (name)
        VALUES ($1)
        RETURNING *
        `,
        [name]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async update(id, cols) {
    let query = ['UPDATE categories'];
    query.push('SET');

    // Create another array storing each set command
    // and assigning a number value for parameterized query
    let set = [];
    Object.keys(cols).forEach(function (key, i) {
      set.push(key + ' = ($' + (i + 2) + ')');
    });
    query.push(set.join(', '));

    // Add the WHERE statement to look up by id
    query.push('WHERE id = $1');
    query.push('RETURNING *');

    // Return a complete query string
    const builtQuery = query.join(' ');

    // Turn req.body into an array of values
    const colValues = Object.values(cols);

    try {
      const { rows } = await db.query(builtQuery, [id, ...colValues]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Categories;
