const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const allTagData = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag, as: 'products'
      }]
    })
    res.status(200).json(allTagData)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {

  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const selectedTagIddata = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product, through: ProductTag, as: 'products'
      }]
    })
    res.status(200).json(selectedTagIddata)
  } catch (error) {
    res.status(500).json(error)
  }
});


router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTagName = req.body.tag_name;
    console.log(newTagName);
    const checkTagName = await Tag.findOne({ where: { tag_name: newTagName } });
    if (checkTagName) {
      return res.status(404).json({ message: 'tag already exist' })
    } else {
      const createNewTagName = await Tag.create({ tag_name: newTagName });
      res.status(200).json(createNewTagName);
    }

  } catch (error) {
    res.status(404).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagId = req.params.id;
    const updatedTagId = await Tag.update(req.body,
      {
        where: {
          id: tagId
        }
      })
    res.status(200).json({ message: 'update succeeded' })
  } catch (error) {
    res.status(500).json(error)
  }
});


router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const targetId = req.params.id;
    const destroyId = await Tag.destroy({
      where: { id: targetId }
    })
    if (!destroyId) {
      res.status(404).json({ message: 'No Tag found with this id!' })
    }
    res.status(200).json(destroyId);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
