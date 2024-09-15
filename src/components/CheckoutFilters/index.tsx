import { ButtonOutlined } from '#/components/ButtonOutlined';
import { SearchInput } from '#/components/SearchInput';
import Icon from '#/assets/svg/cube-solid.svg?react';
import styles from './styles.module.css';

export function CheckoutFilters () {
  return (
    <div className={styles.CheckoutFilters}>
      <SearchInput />
      <ButtonOutlined>
        <span>Filter</span>
        <Icon width={30} />
      </ButtonOutlined>
      <ButtonOutlined>
        <span>Sort</span>
        <Icon width={30} />
      </ButtonOutlined>
      <ButtonOutlined style={{ paddingInline: "12px" }}>
        <Icon width={30} />
      </ButtonOutlined>
      <ButtonOutlined>
        <Icon width={30} />
        <span>Create New Checkout</span>
      </ButtonOutlined>
    </div>
  )
}