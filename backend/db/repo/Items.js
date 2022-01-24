const db = require('../index.js');

class Items {
  static async find() {
    try {
      const { rows } = await db.query(
        `
        SELECT items.*, categories.name AS category
        FROM items
        JOIN categories ON categories.id = items.category_id
        ORDER BY category
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
        SELECT items.*, categories.name AS category
        FROM items
        JOIN categories ON categories.id = items.category_id
        WHERE items.name ILIKE $1
        ORDER BY category
        LIMIT $2
        `,
        [`%${q}%`, limit]
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
        WITH inserted_item AS(
          INSERT INTO items (name, note, image, category_id)
          VALUES ($1, $2, $3, $4)
          RETURNING *
          )
          SELECT inserted_item.*, categories.name AS category
          FROM inserted_item
          JOIN categories ON categories.id = inserted_item.category_id
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
