const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const getAllCategory = await Category.findAll({
      include: [{ model: Product, require: false }]
    })
    res.status(200).json(getAllCategory)
  } catch (error) {
    res.status(500).json(error)
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const getACategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product, require: false }]
    })
    res.status(200).json(getACategory)
  } catch (error) {
    res.status(500).json(error)
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    if (!req.body.category_name) {
      return res.status(404).json({ message: 'no category_name' })
    }
    const newCategoryCreate = await Category.create(req.body);

    res.status(200).json(newCategoryCreate)

  } catch (error) {
    res.status(500).json(error)
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const inputId = req.params.id;
    const categoryName = req.body.category_name;
    // check to see if category_name is exist.
    if (!categoryName) {
      return res.status(404).json({ message: 'no category_name was entered' })
    }

    const UpdateId = await Category.update(req.body, { where: { id: inputId } })

    if (!UpdateId) {
      return res.status(404).json({ message: 'id not found' })
    }
    res.status(200).json({ message: 'update succeeded' })
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const inputId = req.params.id;
    const deleteCategoryId = await Category.destroy({ where: { id: inputId } });

    if (!deleteCategoryId) {
      return res.status(404).json({ message: 'id not found' })
    }
    res.status(200).json({ message: 'delete succeeded' })


  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
