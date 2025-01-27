import instance from ".";

// Get Method

const getReq = async (path) => {
  try {
    const responce = await instance.get(path);
    return responce;
  } catch (error) {
    console.log(error);
  }
};

// Post Method

const postReq = async (path, data) => {
  try {
    const responce = await instance.post(path, data);
    return responce;
  } catch (error) {
    console.log(error);
  }
};

// Delete Method

const delReq = async (id) => {
  try {
    const responce = await instance.delete(id);
    return responce;
  } catch (error) {
    console.log(error);
  }
};

// Put Method

const putReq = async (path, data) => {
  try {
    const responce = await instance.put(path, data);
    return responce;
  } catch (error) {
    console.log(error);
  }
};

export { getReq, postReq, putReq, delReq };
