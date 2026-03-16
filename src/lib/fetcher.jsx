export const $fetch = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return res.json();
  } catch (error) {
    return {
      message: error?.message,
      data: [],
    };
  }
};
