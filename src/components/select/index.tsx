import React, { ChangeEvent, useEffect, useRef } from 'react';

import { Input } from '@mui/material';

import useOutsideClick from '@/hooks/useOutsideClick';
import useSafeState from '@/hooks/useSafeState';
import ArrowDown from '@/static/images/icon/arrow-down.svg';

interface IProps {
  options: Array<any>;
  width?: number;
  onChange?: (option: any) => void;
  className?: string;
  defaultValue?: any;
  disable?: boolean;
  isFilter?: boolean | true;
}

const Select: React.FC<IProps> = ({
  options,
  width = 240,
  onChange,
  className,
  defaultValue,
  disable,
  isFilter,
}) => {
  const [show, setShow] = useSafeState<boolean>(false);
  const [option, setOption] = useSafeState<any>(
    options.find(opt => opt.value === defaultValue) || options[0],
  );
  const [filtersOptions, setFiltersOptions] = useSafeState(options);
  const [search, setSearch] = useSafeState('');
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    show === true && setShow(false);
  });

  const openClose = () => {
    if (!disable) setShow(true);
  };
  function handleSelectDropdown(option: any) {
    if (!disable) {
      const opt = options.find(opt => opt.value === option.value);

      typeof onChange === 'function' && onChange(opt);
      setOption(opt);
      setShow(false);
    }
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (search !== '') {
        setFiltersOptions(
          options.filter(
            item =>
              item.value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
              item.value.red.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
          ),
        );
      } else {
        setFiltersOptions(options);
      }
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, search]);
  return (
    <div ref={selectRef} style={{ maxWidth: width }} className={`dropdown ${className || ''}`}>
      <div onClick={() => openClose()} className="dropdown-select">
        <span className="dropdown-selected">{option.label}</span>
        <ArrowDown className={`dropdown-caret ${show ? 'up' : 'down'}`} />
      </div>
      <ul className={`dropdown-list ${show ? 'show' : ''}`}>
        {isFilter && (
          <li className="dropdown-item1">
            <Input
              aria-label="Search"
              value={search}
              onChange={handleChange}
              placeholder="Search"
              sx={{ width: '-webkit-fill-available' }}
            />
          </li>
        )}
        <div className="scroll">
          {filtersOptions.length > 0 ? (
            filtersOptions.map((opt, index) => (
              <li
                key={opt.value + index}
                onClick={() => handleSelectDropdown(opt)}
                className="dropdown-item"
              >
                {opt.label}
              </li>
            ))
          ) : (
            <li className="dropdown-item">0 coin found</li>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Select;
