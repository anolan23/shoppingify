const db = require('../index.js');

class Items {
  static async find() {
    try {
      const { rows } = await db.query(
        `
        SELECT *
        FROM items
        `,
        []
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async search() {
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

  static async add(item) {
    try {
      const { name, note, image, category_id } = item;
      const { rows } = await db.query(
        `
        INSERT INTO items (name, note, image, category_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        [name, note, image, category_id]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async update(id, cols) {
    let query = ['UPDATE items'];
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

module.exports = Items;
