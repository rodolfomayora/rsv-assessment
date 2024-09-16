import { ButtonOutlined } from '#/components/ButtonOutlined';
import { Button } from '#/components/Button';
import AddIcon from '#/assets/svg/circle-plus-solid.svg?react';
import ProductsIcon from '#/assets/svg/products-solid.svg?react';
import ServiceIcon from '#/assets/svg/list-solid.svg?react';
import NotesIcon from '#/assets/svg/file-lines-regular.svg?react';
import VoucherIcon from '#/assets/svg/ticket-solid.svg?react';
import AngleIcon from '#/assets/svg/angle-down-solid.svg?react';
import AngleUpIcon from '#/assets/svg/angle-up-solid.svg?react';
import styles from './styles.module.css';

export function CheckoutSummary () {
  return (
    <div className={styles.CheckoutSummary}>
      <div className={styles.form}>
        <h3 className={styles.title}>Summary</h3>

        <div className={styles.wrapper}>
          <ButtonOutlined>
            <AddIcon width={24} />
            <span>Select/Create Client</span>
          </ButtonOutlined>
        </div>

        <details className={styles.dropdown} open>
          <summary className={styles.summary}>
            <ServiceIcon height={24} />
            <div className={styles.info}>
              <span>Service(s)</span>
              <span>$ 0</span>
            </div>
            <AngleIcon className={styles.icon} width={24} />
          </summary>

          <div className={styles.content}>
            <ButtonOutlined>
              <AddIcon width={24} />
              <span>Add a Service</span>
            </ButtonOutlined>
          </div>
        </details>

        <details className={styles.dropdown}>
          <summary className={styles.summary}>
            <ProductsIcon height={26} />
            <div className={styles.info}>
              <span>Products</span>
              <span>$ 0</span>
            </div>
            <AngleIcon className={styles.icon} width={24} />
          </summary>

          <div className={styles.content}>
            <ButtonOutlined>
              <AddIcon width={24} />
              <span>Add a products</span>
            </ButtonOutlined>
          </div>
        </details>

        <details className={styles.dropdown}>
          <summary className={styles.summary}>
            <VoucherIcon height={26} />
            <div className={styles.info}>
              <span>Vouchers</span>
              <span>$ 0</span>
            </div>
            <AngleIcon className={styles.icon} width={24} />
          </summary>

          <div className={styles.content}>
            <ButtonOutlined>
              <AddIcon width={24} />
              <span>Add a Voucher</span>
            </ButtonOutlined>
          </div>
        </details>

        <details className={styles.dropdown} open>
          <summary className={styles.summary}>
            <NotesIcon height={26} />
            <div className={styles.info}>
              <span>Notes</span>
            </div>
            <AngleIcon className={styles.icon} width={24} />
          </summary>
          <div className={styles.content}>
            <textarea className={styles.textarea}></textarea>
          </div>
        </details>
      </div>

      <div className={styles.bottom}>
        <div className={styles.total}>
          <span>Total</span>
          <span>$ 0 ( 0 min )</span>
        </div>

        <div className={styles.buttonsWrapper}>
          <Button disabled>Checkout</Button>
          <ButtonOutlined disabled>Save</ButtonOutlined>
          <ButtonOutlined disabled>
            <AngleUpIcon width={18} />
          </ButtonOutlined>
        </div>  
      </div>

    </div>
  )
}