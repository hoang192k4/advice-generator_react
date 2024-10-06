import './css/Deleted.css'
function Deleted(props) {
    return (
        <div className='advice__deleted'>
            <input hidden id="popup__khoiphuc" type='checkbox' />
            <label htmlFor='popup__khoiphuc' className='over__background'></label>
            <div className="hidden__popup">
                <i className="fas fa-check-circle"></i>
                <h3>Bạn đã khôi phục lời khuyên yêu thích thành công!</h3>
                <label htmlFor='popup__khoiphuc' className='button_ok'>ok</label>
            </div>
            <h1>Danh sách lời khuyên yêu thích đã xóa</h1>
            <div className='advice__deleted__list'>
                {
                    props.advicedeleted.length > 0 ? <ul>
                        {props.advicedeleted.map(item => {
                            return <li key={item.id}><p>Advice :#{item.id < 10 ? <>{item.id}&nbsp;&nbsp;</> : item.id}&emsp; &emsp;{item.advice}</p>
                                <span onClick={() => props.handleKhoiPhuc(item.id)}>Khôi phục</span></li>
                        })}
                    </ul> : <h3>Chưa có danh sách đã xóa</h3>
                }
            </div>
        </div>
    )
}

export default Deleted