import React from 'react';
import err from './Error.module.css';
const MusicErrorFile = (props) => {
  return (
      <div className={err.container_errors}>
       <p className={err.error_notification}>К сожалению, мы ничего не нашли, это может быть связано с:</p>
       <ul className={err.error_variant}>
          <li>Загружаемый файл должен быть в формате mp3; </li>
          <li>Too big audio file. 10M or 25 seconds is maximum, we recommend to record no more than
           20 seconds (usually it takes less than one megabyte). If you need to recognize really big
          audio files, our Enterprise endpoint supports files that up to 24h long. Contact us;</li>
          <li>Попробуйте загрузить файл лучшего качества или повторите попытку;</li>
          <li>Вы можете вести предложение из песни.  </li>
      </ul>
      </div>
  )
}

export default MusicErrorFile;
