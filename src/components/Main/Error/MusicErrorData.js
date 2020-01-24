import React from 'react';
import err from './ErrorData.module.css';
const MusicErrorData = (props) => {
  return (
      <div className={err.container_errors}>
       <p className={err.error_notification}>К сожалению, мы ничего не нашли, это может быть связано с:</p>
       <ul className={err.error_variant}>
          <li>Допущенными ошибками при наборе </li>
          <li> Малым количствем слов </li>
          <li>Попробуйте загрузить файл или повторите попытку;</li>
      </ul>
      </div>
  )
}

export default MusicErrorData;
