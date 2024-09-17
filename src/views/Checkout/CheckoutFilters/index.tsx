import { ButtonOutlined } from '#/components/ButtonOutlined';
import { SearchInput } from '#/components/SearchInput';
import FilterIcon from '#/assets/svg/filter-solid.svg?react';
import SortIcon from '#/assets/svg/sort-solid.svg?react';
import CalendarIcon from '#/assets/svg/calendar-regular.svg?react';
import CreateIcon from '#/assets/svg/file-circle-plus-solid.svg?react';
import styles from './styles.module.css';

export function CheckoutFilters () {
  return (
    <div className={styles.CheckoutFilters}>
      <SearchInput />
      <ButtonOutlined>
        <span>Filter</span>
        <FilterIcon width={28} />
      </ButtonOutlined>
      <ButtonOutlined>
        <span>Sort</span>
        <SortIcon height={24} />
      </ButtonOutlined>
      <ButtonOutlined>
        <CalendarIcon height={24} />
      </ButtonOutlined>
      <ButtonOutlined>
        <CreateIcon height={24} />
        <span>Create New Checkout</span>
      </ButtonOutlined>
    </div>
  )
}