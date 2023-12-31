import React, { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Button, Input, Tag, message } from 'antd';

interface RecipeTagProp{
    keyword: string
    placeholder: string
    updateValue: (keyword: string, value: string) => void;
}

const RecipeTag: React.FC<RecipeTagProp> = ({keyword, placeholder, updateValue}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const handleInputChange = (e:any) => {
    e.preventDefault()
    const sanitizedValue = e.target.value.replace(/[,.!"]/g, '');
    setInputValue(sanitizedValue);
    if(e.target.value!==sanitizedValue) message.error(`This input field excludes ( , . ! ")`)
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags((prevTags) => {
        const newTags = [...prevTags, inputValue];
        updateValue(keyword, newTags.join(','));
        return newTags;
      });
    }
    setInputValue('');
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);

  const handleKeyPress = (e:any) => {
    if (e.key === ',' || e.key === 'Tab') {
      e.preventDefault();
    }
    if (e.key === 'Enter') {
      handleInputConfirm()
    }
  }

  return (
    <> 
        <div className='flex my-3'>
            <Input
            size='small'
            className='bg-primary-700'
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            />
            <Button size='small'  onClick={handleInputConfirm}>{placeholder}</Button>
        </div>
      <div>
          {tagChild}
      </div>
    </>
  );
};

export default RecipeTag;