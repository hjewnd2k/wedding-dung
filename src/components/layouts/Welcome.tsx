import React, { useEffect } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  onClick: () => void;
  className: string;
};
const Welcome: React.FC<Props> = ({ onClick, className }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@lottiefiles/lottie-player');
    }
  }, []);

  return (
    <header id="header" className={cn('animated', className)}>
      <section className="header">
        <div className="top-header-bg" />
        <div className="bottom-header-bg" />
        <div className="header-content">
          <div className="-mx-2 flex flex-wrap">
            <div className="w-full px-2 md:w-full lg:w-full">
              <h1 className="header-content-title animate__animated animate__bounceInDown text-center">
                Thư mời cưới
              </h1>
            </div>
          </div>
          <div className="header-groom-bride -mx-2 flex flex-wrap">
            <div className="groom w-full px-2 md:w-4/12">
              <h2 className="groom-name animate__animated animate__backInLeft animate__slower animate__delay-0-5s">
                Tuấn Dũng
              </h2>
            </div>
            <div className="w-full px-2 md:w-4/12">
              <lottie-player
                src="https://lottie.host/795a5adb-5683-43b6-ae0b-58f6040c721f/ob7z2eXcVv.json"
                background="transparent"
                speed="1"
                autoplay
              ></lottie-player>
            </div>
            <div className="bride w-full px-2 md:w-4/12">
              <h2 className="bride-name animate__animated animate__backInRight animate__slower animate__delay-0-5s">
                Nguyễn Giang
              </h2>
            </div>
          </div>
          <div className="date-wedding animate__animated animate__zoomIn animate__delay-3s">
            <div className="first-day">Thứ 7</div>
            <div className="day">
              <ul>
                <li>Tháng 05</li>
                <li>17</li>
                <li>2025</li>
              </ul>
            </div>
            <div className="time">15:00</div>
          </div>
          <div
            onClick={onClick}
            className="between-header-bg animate__animated animate__bounceInUp animate__delay-3s animate__slower"
          >
            <img className="arrow" src="/images/arrow.gif" alt="" />
            Mở thư
          </div>
        </div>
      </section>
    </header>
  );
};

export default Welcome;
