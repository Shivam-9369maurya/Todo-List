import Additem from "./Additem";
import styles from "./ADDitems.module.css";
const ADDitems = ({ todoitems, onDeleteclick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoitems.map((item) => (
          <Additem
            key={item.name}
            todoname={item.name}
            tododate={item.duedate}
            onDeleteclick={onDeleteclick}
          ></Additem>
        ))}
      </div>
    </>
  );
};

export default ADDitems;
