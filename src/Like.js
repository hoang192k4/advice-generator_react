import {useEffect, useState } from 'react'
import './css/Like.css'
function Like(props) {
    const [actionsearch, setActionSearch] = useState('');
    const [keywords, setKeywords] = useState('');
    const [advicesearch,setAdviceSearch] = useState([]);
    useEffect(()=>{
        handleSearch(keywords)
    },[keywords])

    const handleSearch = (keywords) => {
        if (keywords.trim() !== '') {
            const advicelikeserach = props.advicelikes.filter(item => item.advice.toLowerCase().includes(keywords.toLowerCase()));
            setAdviceSearch(advicelikeserach);
        }
    }
    const handledeletedone = () =>{
      setTimeout(()=>{
        window.location.reload();
      },1000);
    }
    return (
        <div className="like">
            {/* popup show thông báo đã xóa */}
            <input hidden id="popup__deleted" type='checkbox' />
            <label htmlFor='popup__deleted' className='over__background'></label>
            <div className="hidden__popup">
                <i className="fas fa-check-circle"></i>
                <h3>Bạn đã xóa lời khuyên yêu thích thành công!</h3>
                <label htmlFor='popup__deleted' className='button_ok'>ok</label>
            </div>
            <div className='like__top'>
                <h1>Danh sách lời khuyên yêu thích</h1>
                <div className="like_search">
                    <input type="text" className="search" placeholder='Favorite advices...' onChange={(e) => setKeywords(e.target.value)} />
                    <button onClick={() => {
                        setActionSearch("search")
                        handleSearch(keywords)
                    }}>Search</button>
                </div>
            </div>
            <div className="like_listadvices">
                {actionsearch === "search" ? advicesearch.length > 0 ?
                            <ul>
                                {advicesearch.map((item) => {
                                    return <li key={item.id}><p>Advice :#{item.id < 10 ? <>{item.id}&nbsp;&nbsp;</> : item.id}&emsp; &emsp;
                                        {item.advice}</p><span onClick={() => {handledeletedone()
                                            props.handleDeleted(item.id)}}><i className="fas fa-times"></i></span></li>
                                })}
                            </ul>: <h3 >Không tìm thấy lời khuyên yêu thích</h3>
                 :
                    props.advicelikes.length > 0 ? <ul>
                        {props.advicelikes.map((item) => {
                            //$nbsp là cú pháp trog jsx tạo khoảng trắng
                            //&emsp; cũng là cú pháp trong jsx tạo dấu tab 
                            return <li key={item.id}><p>Advice :#{item.id < 10 ? <>{item.id}&nbsp;&nbsp;</> : item.id}&emsp; &emsp;
                                {item.advice}</p><span onClick={() => props.handleDeleted(item.id)}><i className="fas fa-times"></i></span></li>
                        })}
                    </ul> : <h3 >Chưa có lời khuyên yêu thích</h3>
                }


            </div>
        </div>
    )
}
export default Like
