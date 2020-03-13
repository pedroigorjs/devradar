import Dev from '../models/Dev';
import api from '../services/api';
import stringToArray from '../utils/parsingStringAsArray';

class DevController {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({
      github_username,
    });

    if (devExists) return res.status(400).json({ error: 'Dev alredy exists' });

    const { data } = await api.get(`users/${github_username}`);
    const { name = login, bio, avatar_url } = data;

    const techsList = stringToArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
      github_username,
      name,
      bio,
      avatar_url,
      techs: techsList,
      location,
    });

    return res.json(dev);
  }

  async update(req, res) {
    const { id } = req.params;

    const devExists = await Dev.findOne({
      _id: id,
    });

    if (!devExists)
      return res.status(400).json({ error: `Dev doesn't exists` });

    const dev = await Dev.findByIdAndUpdate(id, req.body, { new: true });
    return res.json(dev);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const dev = await Dev.findByIdAndDelete(id);

    return res.json(dev);
  }
}

export default new DevController();
