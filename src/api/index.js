import axios from 'axios';

export async function getCategories() {
  try {
    const response = await axios.get('/api/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function searchCategories({ q, limit }) {
  try {
    const response = await axios.get('/api/categories/search', {
      params: {
        q,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addCategory(name) {
  try {
    const response = await axios.post('/api/categories', {
      name,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addItem(item) {
  try {
    const response = await axios.post('/api/items', { item });
    return response.data;
  } catch (error) {
    throw error;
  }
}
