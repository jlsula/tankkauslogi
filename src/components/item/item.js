import styles from "./item.module.scss";

// Merkintä komponentti
function Item(props) {
  return (
    <div className={styles.item}>
      <div className={styles.item_data}>
        <div className={styles.item_supplier}>Neste</div>
        <div className={styles.item_amount}>46,8€</div>
        <div className={styles.item_date}>01.06.2022</div>
        <div className={styles.item_priceLiter}>2,34 €/l</div>
        <div className={styles.item_type}>95E</div>
        <div className={styles.item_quantity}>20 l</div>
      </div>
    </div>
  );
}

export default Item;
