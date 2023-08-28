import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoadingInformatiion from './LoadingInformatiion'

export const Information = () => {
    const [Loading,setLoading] = useState(true)
    const [SearchData,setSeacrhData] = useState('')
    const dataStatis = [
        { id: 1, title: 'siapa pembuat web ini?',Paragraf:'Hello gua Faishal Amir junior frontend enginer dan saat ini gua masih bersekolah di smkn 01 bojong gede' },
        { id: 2, title: 'ada fitur apa saja?',Paragraf:'Web ini memiliki beberapa fitur yang sangat sederhana seperti login,register,forgot password,verifikasi email saat register,menu profile,menu chat,ubah password,update profile,seacrh messange,dan hapus pesan.' },
        { id: 3, title: 'udah berapa lama belajar coding?',Paragraf:'Gua baru ngerti coding web sekitar 6 bulan yang lalu dan itu pun gua belajarnya kurang konsisten. ' },
        { id: 4, title: 'project selanjutnya apa?',Paragraf:'Saat ini gua sedang membuat project ecommerce sederhana dengan sistem payment gateway dan masih banyak fitur lainnya yang akan dibuat' },
        { id: 5, title: 'kenapa web ini di buat?',Paragraf:'Web ini dibuat karena kegabutan gua serta project ini dibuat unuk belajar dan mengasah logic gua.' },
        { id: 6, title: 'tech stack yang digunakan?',Paragraf:'Stack yang gua gunakan untuk membuat web ini yaitu javascript dan firebase sebagai backendnya.' },
    ];

    setTimeout(() => {
        setLoading(false)
    }, 3000);

    return (
        <>
            <NavLink to='/Setting'>
                <div className="row_back_Information"></div>
            </NavLink>
            <div className="background_Text_and_logo_information">
                <h1 className='Information_text'>Information</h1>
            </div>
            <div className="background_search">
                <div className="form-control">
                    <div className="input-group">
                        <button className="btn btn-square btn_seacrh_Information">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <input onChange={(e)=>setSeacrhData(e.target.value)} type="text" placeholder="Any questions?" className="input input-bordered" />
                    </div>
                </div>
            </div>
            <h1 className='text_top_questions'>Top questions</h1>
            {Loading ? Loading && <LoadingInformatiion/>
            :
            dataStatis ? dataStatis.filter((data)=>{
                return SearchData.toLowerCase() === dataStatis ? data: data.title.toLowerCase().includes(SearchData)
             }).map(data => (
                  <div key={data.id} className="background_data_information">
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                      <div className="collapse-title text_title_information font-medium">
                          {data.title}
                      </div>
                      <div className="collapse-content">
                          <p>{data.Paragraf}</p>
                      </div>
                  </div>
              </div>
                )):<><h1>NoData Bang</h1></>
           }
           
        </>
    )
}
