import axios from './axios';
import config from './config';
import Compressor from 'compressorjs';

const getUpdatedButtonElement = (buttons, data) => {
  const { id, buttonIndex, title, type, value } = data;
  const newData = { id, title, type, value };
  return buttons.map((button, i) => {
    if (buttonIndex === i) {
      return { ...button, ...newData };
    }
    return { ...button };
  });
};

export const getUpdatedBlocks = (blocks, payload, type) => {
  return blocks.map((block) => {
    if (block.id === payload.id) {
      const supportedKeys = ['title', 'subtitle', 'url', 'image'];

      if (type === 'buttons') {
        if (payload.changeKey === 'buttons') {
          const newButtons = getUpdatedButtonElement(
            block.data.buttons,
            payload.data
          );
          block.data.buttons = newButtons;
        } else if (payload.changeKey === 'text') {
          block.data[payload.changeKey] = payload.data;
        }
      } else if (type === 'gallery') {
        const newGalleries = block.data.elements.map((elem, i) => {
          if (i === payload.galleryIndex) {
            if (payload.changeKey === 'buttons') {
              const newButtons = getUpdatedButtonElement(
                elem.buttons,
                payload.data
              );
              return { ...elem, buttons: newButtons };
            } else if (supportedKeys.includes(payload.changeKey)) {
              elem[payload.changeKey] = payload.data;
              return { ...elem };
            }
          }
          return { ...elem };
        });
        block.data.elements = newGalleries;
      }
      block.save = false;
    }
    return block;
  });
};

export const handleImageUpload = (file, callback) => {
  new Compressor(file, {
    quality: 0.7,
    maxHeight: 1000,
    success(result) {
      const formData = new FormData();
      formData.append('picture', result, result.name);
      axios
        .post(config.image, formData)
        .then((res) => {
          callback(res.data.url);
        })
        .catch((err) => console.log(err));
    },
    error(err) {
      console.log(err.message);
    },
  });
};

export const updateOnChangeText = (value, setShowAttribute, setText) => {
  let currentValue = value;
  let lastTwoChar = currentValue.slice(
    currentValue.length - 2,
    currentValue.length
  );
  if (lastTwoChar === '{{') {
    setShowAttribute(true);
  } else {
    setShowAttribute(false);
  }
  setText(value);
};

export const updateOnChangeAttribute = (
  value,
  setShowAttributeField,
  setVariable
) => {
  if (value.length < 3) {
    setShowAttributeField(true);
  } else {
    setShowAttributeField(false);
  }
  setVariable(value);
};

export const updateOnSelectAttribute = (
  intent,
  setShowAttribute,
  setText,
  text
) => {
  let currentValue = text + intent + '}}';
  setShowAttribute(false);
  setText(currentValue);
};
