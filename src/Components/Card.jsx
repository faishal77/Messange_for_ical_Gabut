import React from 'react'
import PotoCewe from '../assets/Img/poto cewe keren.jpg'
import cowokeren from '../assets/Img/poto cowo keren.jpg'
import cowokece from '../assets/Img/poto cowo kece.jpg'
import cowocool from '../assets/Img/cowocool.jpg'
import cowoestetik from '../assets/Img/poto estetik.jpg'

const Card = () => {
  return (
   <>
   <div className="background_card_dinamis"> 
     <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cowocool} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <th>
         <button className="btn btn-info">See All</button>
        </th>
      </tr>


      {/* row 2 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cowokece}/>
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <th>
         <button className="btn btn-info">See All</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cowokeren} />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <th>
         <button className="btn btn-info">See All</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={PotoCewe} />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <th>
         <button className="btn btn-info">See All</button>
        </th>
      </tr>
      {/* row 5 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cowoestetik} />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <th>
         <button className="btn btn-info">See All</button>
        </th>
      </tr>
    </tbody>
    
  </table>
</div>
   </div>
   </>
  )
}

export default Card