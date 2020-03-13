import Dev from '../models/Dev';
import parsingStringAsArray from '../utils/parsingStringAsArray';

class SearchController {
  async index(req, res) {
    const { longitude, latitude, techs } = req.query;

    const techsList = parsingStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsList,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json(devs);
  }
}

export default new SearchController();
