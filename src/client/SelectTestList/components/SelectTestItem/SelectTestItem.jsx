import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowIcon } from '../../../../images/main-page/arrow.svg';
import PropTypes from 'prop-types';

import styles from './SelectTestItem.module.scss';

const SelectTestItem = ({ to, text, typeTest }) => {

    return (
        <li className={styles.test_item}>
            <NavLink to={to + '/' + typeTest} className={styles.test_link}>
            <div className={styles.wrapper}>
                <span className={styles.test_text}>{text}</span>
                <span className={styles.arrow}> <ArrowIcon /> </span>
             </div>
             </NavLink>
        </li>
    )
}

export default SelectTestItem;

SelectTestItem.defaultProps = {
    to: '',
    text: '',
    typeTest: ''
}

SelectTestItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    typeTest: PropTypes.string.isRequired
}