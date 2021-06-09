import React from 'react';
import Photo from './../../assets/landscape.jpg';

const Cards = ({
  ...otherProps
}) => {
  return (
    <>
      
    <h1 className='pt-14 text-center'>Nature Views</h1>
    <div className="flex flex-row flex-wrap py-14 justify-center">
      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                  Nature
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                  Nature
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                  Nature
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
    </>
  );
};

export default Cards;
