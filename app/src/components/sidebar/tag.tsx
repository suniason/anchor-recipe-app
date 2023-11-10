import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Tag, theme } from 'antd';

interface RecipeTagProp{
    keyword: string
    placeholder: string
    updateValue: (keyword: string, value: string[]) => void;
}

const RecipeTag: React.FC<RecipeTagProp> = ({keyword, placeholder, updateValue}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    updateValue(keyword, tags)
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
            onBlur={handleInputConfirm}
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