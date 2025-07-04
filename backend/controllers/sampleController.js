import Sample from '../models/sampleModel.js';

export const getSamples = async (req, res) => {
  try {
    const samples = await Sample.find();
    res.status(200).json(samples);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
