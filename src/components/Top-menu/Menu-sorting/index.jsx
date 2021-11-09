import React, { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import style from './index.module.scss';

export const MenuSorting = () => {
  const optionsList = [
    { id: 0, name: 'популярности' },
    { id: 1, name: 'алфавиту' },
  ];
  const [defaultSelectText, setDefaultSelectText] = useState(
    optionsList[0].name
  );
  const [showOptionList, setShowOptionList] = useState(false);
  const selectRef = useRef();
  const handleOptionClick = (e) => {
    setDefaultSelectText(e.target.getAttribute('data-name'));
    setShowOptionList(false);
    console.log('click');
  };
  const handleListDisplay = () => {
    setShowOptionList(!showOptionList);
  };
  const handleClickOutside = (e) => {
    console.log(selectRef);
    console.log(e)
    if (!e.path.includes(selectRef.current)) {
      setShowOptionList(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className={style.sotring_container}>
      <span
        className={
          showOptionList
            ? `${style.sorting_pre_text} ${style.active}`
            : style.sorting_pre_text
        }
      >
        Сортировка по:
      </span>
      <div className={style.custom_select_container}>
        <div
          className={
            showOptionList
              ? `${style.selected_text} ${style.active}`
              : style.selected_text
          }
          onClick={handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <ul className={style.select_options}>
            {optionsList.map((option) => {
              return (
                <li
                  className={style.custom_select_option}
                  data-name={option.name}
                  key={option.id}
                  onClick={handleOptionClick}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
