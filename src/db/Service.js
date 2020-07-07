function createService(model) {
  return class {
    static async read() {
      return model.findAll();
    }

    static async readOne(id) {
      return model.findOne(id);
    }

    static async remove(id) {
      return model.destroy(id);
    }
  };
}

module.exports = createService;
